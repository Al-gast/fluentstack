import type { SupabaseClient } from "@supabase/supabase-js";
import { challenges } from "@/content/challenges";
import { lessons } from "@/content/lessons";
import { quizzes } from "@/content/quizzes";
import type { ChallengeCode } from "@/types/challenge";
import type { Lesson } from "@/types/learning";
import { DEFAULT_USER_PROGRESS, type UserProgress } from "@/types/progress";
import type { Database, Json } from "@/types/database";
import { calculateLessonProgress, calculateStreakUpdate, getLocalDateString } from "@/lib/progress/progress-calculator";

const DEFAULT_EMPTY_CODE: ChallengeCode = { html: "", css: "", js: "" };

type LessonProgressRow = Database["public"]["Tables"]["lesson_progress"]["Row"];
type QuizAttemptRow = Database["public"]["Tables"]["quiz_attempts"]["Row"];
type ChallengeProgressRow = Database["public"]["Tables"]["challenge_progress"]["Row"];
type WritingDraftRow = Database["public"]["Tables"]["writing_drafts"]["Row"];
type UserStatsRow = Database["public"]["Tables"]["user_stats"]["Row"];

const lessonIdByBlockId = new Map<string, string>();
for (const lesson of lessons) {
  for (const block of lesson.blocks) {
    lessonIdByBlockId.set(block.id, lesson.id);
  }
}

const lessonIdByQuizId = new Map<string, string>();
for (const quiz of quizzes) {
  lessonIdByQuizId.set(quiz.id, quiz.lessonId);
}

const lessonIdByChallengeId = new Map<string, string>();
for (const challenge of challenges) {
  lessonIdByChallengeId.set(challenge.id, challenge.lessonId);
}

function toStringArray(value: Json): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function toChallengeCode(value: Json): ChallengeCode {
  if (!value || Array.isArray(value) || typeof value !== "object") {
    return { ...DEFAULT_EMPTY_CODE };
  }

  const candidate = value as Record<string, unknown>;
  return {
    html: typeof candidate.html === "string" ? candidate.html : "",
    css: typeof candidate.css === "string" ? candidate.css : "",
    js: typeof candidate.js === "string" ? candidate.js : "",
  };
}

function mapRowsToProgress(params: {
  lessonRows: LessonProgressRow[];
  quizRows: QuizAttemptRow[];
  challengeRows: ChallengeProgressRow[];
  writingRows: WritingDraftRow[];
  statsRow: UserStatsRow | null;
}): UserProgress {
  const completedBlockIds = new Set<string>();
  const completedLessonIds = new Set<string>();

  for (const row of params.lessonRows) {
    for (const blockId of toStringArray(row.completed_block_ids)) {
      completedBlockIds.add(blockId);
    }

    if (row.is_completed) {
      completedLessonIds.add(row.lesson_id);
    }
  }

  const quizScores: Record<string, number> = {};
  for (const row of params.quizRows) {
    const previous = quizScores[row.quiz_id] ?? 0;
    if (row.score > previous) {
      quizScores[row.quiz_id] = row.score;
    }
  }

  const challengeProgress: UserProgress["challengeProgress"] = {};
  for (const row of params.challengeRows) {
    challengeProgress[row.challenge_id] = {
      challengeId: row.challenge_id,
      isCompleted: row.is_completed,
      savedCode: toChallengeCode(row.saved_code),
      completedChecklistItems: toStringArray(row.completed_checklist_items),
    };
  }

  const writingDrafts: Record<string, string> = {};
  for (const row of params.writingRows) {
    writingDrafts[row.block_id] = row.content;
  }

  return {
    completedBlockIds: Array.from(completedBlockIds),
    completedLessonIds: Array.from(completedLessonIds),
    quizScores,
    challengeProgress,
    writingDrafts,
    totalXp: params.statsRow?.total_xp ?? 0,
    streakCount: params.statsRow?.streak_count ?? 0,
    lastActivityDate: params.statsRow?.last_activity_date ?? undefined,
  };
}

async function fetchSupabaseProgress(
  supabase: SupabaseClient<Database>,
  userId: string,
): Promise<UserProgress> {
  const [lessonRes, quizRes, challengeRes, writingRes, statsRes] = await Promise.all([
    supabase
      .from("lesson_progress")
      .select("lesson_id, completed_block_ids, progress_percent, is_completed")
      .eq("user_id", userId),
    supabase.from("quiz_attempts").select("quiz_id, score").eq("user_id", userId),
    supabase
      .from("challenge_progress")
      .select("challenge_id, saved_code, completed_checklist_items, is_completed")
      .eq("user_id", userId),
    supabase.from("writing_drafts").select("block_id, content").eq("user_id", userId),
    supabase
      .from("user_stats")
      .select("user_id, total_xp, streak_count, last_activity_date, created_at, updated_at")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  if (lessonRes.error || quizRes.error || challengeRes.error || writingRes.error || statsRes.error) {
    console.error("Gagal memuat progres dari Supabase", {
      lessonError: lessonRes.error,
      quizError: quizRes.error,
      challengeError: challengeRes.error,
      writingError: writingRes.error,
      statsError: statsRes.error,
    });
    return { ...DEFAULT_USER_PROGRESS };
  }

  return mapRowsToProgress({
    lessonRows: (lessonRes.data ?? []) as LessonProgressRow[],
    quizRows: (quizRes.data ?? []) as QuizAttemptRow[],
    challengeRows: (challengeRes.data ?? []) as ChallengeProgressRow[],
    writingRows: (writingRes.data ?? []) as WritingDraftRow[],
    statsRow: (statsRes.data ?? null) as UserStatsRow | null,
  });
}

async function upsertUserStats(
  supabase: SupabaseClient<Database>,
  userId: string,
  patch: Pick<UserProgress, "totalXp" | "streakCount" | "lastActivityDate">,
): Promise<void> {
  const { error } = await supabase.from("user_stats").upsert(
    {
      user_id: userId,
      total_xp: patch.totalXp,
      streak_count: patch.streakCount,
      last_activity_date: patch.lastActivityDate ?? null,
    },
    { onConflict: "user_id" },
  );

  if (error) {
    console.error("Gagal menyimpan user_stats", error);
  }
}

function resolveLessonIdForQuiz(quizId: string): string | null {
  return lessonIdByQuizId.get(quizId) ?? null;
}

function resolveLessonIdForChallenge(challengeId: string): string | null {
  return lessonIdByChallengeId.get(challengeId) ?? null;
}

function resolveLessonIdForBlock(blockId: string): string | null {
  return lessonIdByBlockId.get(blockId) ?? null;
}

export function getSupabaseProgressService(
  supabase: SupabaseClient<Database>,
  userId: string,
) {
  return {
    async getProgress(): Promise<UserProgress> {
      return fetchSupabaseProgress(supabase, userId);
    },

    async markBlockCompleted(params: {
      lesson: Lesson;
      blockId: string;
      xpDelta: number;
      isMeaningfulActivity?: boolean;
    }): Promise<UserProgress> {
      const { lesson, blockId, xpDelta, isMeaningfulActivity = true } = params;
      const current = await fetchSupabaseProgress(supabase, userId);

      if (current.completedBlockIds.includes(blockId)) {
        return current;
      }

      const completedBlockIds = [...current.completedBlockIds, blockId];
      const lessonMetrics = calculateLessonProgress(lesson, completedBlockIds);
      const lessonBlockIds = completedBlockIds.filter(
        (candidateBlockId) => resolveLessonIdForBlock(candidateBlockId) === lesson.id,
      );

      const lessonUpsert = await supabase.from("lesson_progress").upsert(
        {
          user_id: userId,
          lesson_id: lesson.id,
          completed_block_ids: lessonBlockIds,
          progress_percent: lessonMetrics.progressPercent,
          is_completed: lessonMetrics.isCompleted,
        },
        { onConflict: "user_id,lesson_id" },
      );

      if (lessonUpsert.error) {
        console.error("Gagal menyimpan lesson_progress", lessonUpsert.error);
      }

      const completedWritingBlock = lesson.blocks.find(
        (block) => block.id === blockId && block.type === "writing-practice",
      );
      if (completedWritingBlock) {
        const draftContent = current.writingDrafts[blockId] ?? "";
        const writingUpsert = await supabase.from("writing_drafts").upsert(
          {
            user_id: userId,
            lesson_id: lesson.id,
            block_id: blockId,
            content: draftContent,
            is_completed: true,
          },
          { onConflict: "user_id,block_id" },
        );

        if (writingUpsert.error) {
          console.error("Gagal memperbarui status writing_drafts", writingUpsert.error);
        }
      }

      let streakCount = current.streakCount;
      let lastActivityDate = current.lastActivityDate;
      if (isMeaningfulActivity) {
        const streakUpdate = calculateStreakUpdate(current.lastActivityDate, current.streakCount, getLocalDateString());
        streakCount = streakUpdate.streakCount;
        lastActivityDate = streakUpdate.lastActivityDate;
      }

      await upsertUserStats(supabase, userId, {
        totalXp: current.totalXp + xpDelta,
        streakCount,
        lastActivityDate,
      });

      return fetchSupabaseProgress(supabase, userId);
    },

    async saveQuizAttempt(params: {
      quizId: string;
      score: number;
      passed: boolean;
      answers?: Record<string, unknown>;
    }): Promise<UserProgress> {
      const lessonId = resolveLessonIdForQuiz(params.quizId);

      if (!lessonId) {
        console.error("Lesson ID quiz tidak ditemukan", params.quizId);
        return fetchSupabaseProgress(supabase, userId);
      }

      const { error } = await supabase.from("quiz_attempts").insert({
        user_id: userId,
        quiz_id: params.quizId,
        lesson_id: lessonId,
        score: params.score,
        passed: params.passed,
        answers: params.answers ?? {},
      });

      if (error) {
        console.error("Gagal menyimpan quiz_attempt", error);
      }

      return fetchSupabaseProgress(supabase, userId);
    },

    async saveWritingDraft(blockId: string, draft: string): Promise<UserProgress> {
      const lessonId = resolveLessonIdForBlock(blockId);

      if (!lessonId) {
        console.error("Lesson ID block tidak ditemukan", blockId);
        return fetchSupabaseProgress(supabase, userId);
      }

      const { error } = await supabase.from("writing_drafts").upsert(
        {
          user_id: userId,
          lesson_id: lessonId,
          block_id: blockId,
          content: draft,
        },
        { onConflict: "user_id,block_id" },
      );

      if (error) {
        console.error("Gagal menyimpan writing_drafts", error);
      }

      return fetchSupabaseProgress(supabase, userId);
    },

    async saveChallengeCode(challengeId: string, code: ChallengeCode): Promise<UserProgress> {
      const lessonId = resolveLessonIdForChallenge(challengeId);

      if (!lessonId) {
        console.error("Lesson ID challenge tidak ditemukan", challengeId);
        return fetchSupabaseProgress(supabase, userId);
      }

      const current = await fetchSupabaseProgress(supabase, userId);
      const previous = current.challengeProgress[challengeId];

      const { error } = await supabase.from("challenge_progress").upsert(
        {
          user_id: userId,
          challenge_id: challengeId,
          lesson_id: lessonId,
          saved_code: code,
          completed_checklist_items: previous?.completedChecklistItems ?? [],
          is_completed: previous?.isCompleted ?? false,
        },
        { onConflict: "user_id,challenge_id" },
      );

      if (error) {
        console.error("Gagal menyimpan challenge_progress code", error);
      }

      return fetchSupabaseProgress(supabase, userId);
    },

    async saveChallengeChecklist(challengeId: string, completedChecklistItems: string[]): Promise<UserProgress> {
      const lessonId = resolveLessonIdForChallenge(challengeId);

      if (!lessonId) {
        console.error("Lesson ID challenge tidak ditemukan", challengeId);
        return fetchSupabaseProgress(supabase, userId);
      }

      const current = await fetchSupabaseProgress(supabase, userId);
      const previous = current.challengeProgress[challengeId];

      const { error } = await supabase.from("challenge_progress").upsert(
        {
          user_id: userId,
          challenge_id: challengeId,
          lesson_id: lessonId,
          saved_code: previous?.savedCode ?? DEFAULT_EMPTY_CODE,
          completed_checklist_items: completedChecklistItems,
          is_completed: previous?.isCompleted ?? false,
        },
        { onConflict: "user_id,challenge_id" },
      );

      if (error) {
        console.error("Gagal menyimpan checklist challenge_progress", error);
      }

      return fetchSupabaseProgress(supabase, userId);
    },

    async markChallengeCompleted(challengeId: string): Promise<UserProgress> {
      const lessonId = resolveLessonIdForChallenge(challengeId);

      if (!lessonId) {
        console.error("Lesson ID challenge tidak ditemukan", challengeId);
        return fetchSupabaseProgress(supabase, userId);
      }

      const current = await fetchSupabaseProgress(supabase, userId);
      const previous = current.challengeProgress[challengeId];

      const { error } = await supabase.from("challenge_progress").upsert(
        {
          user_id: userId,
          challenge_id: challengeId,
          lesson_id: lessonId,
          saved_code: previous?.savedCode ?? DEFAULT_EMPTY_CODE,
          completed_checklist_items: previous?.completedChecklistItems ?? [],
          is_completed: true,
        },
        { onConflict: "user_id,challenge_id" },
      );

      if (error) {
        console.error("Gagal menandai challenge selesai", error);
      }

      return fetchSupabaseProgress(supabase, userId);
    },

    async getChallengeProgress(challengeId: string): Promise<UserProgress["challengeProgress"][string] | undefined> {
      const progress = await fetchSupabaseProgress(supabase, userId);
      return progress.challengeProgress[challengeId];
    },
  };
}
