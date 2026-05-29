import type { Lesson } from "@/types/learning";
import type { UserProgress, ProgressStorageMode } from "@/types/progress";
import type { ChallengeCode } from "@/types/challenge";
import { getLocalProgress, updateLocalProgress } from "@/lib/progress/local-progress-service";
import {
  calculateLessonProgress,
  calculateStreakUpdate,
  getLocalDateString,
  type LessonProgressMetrics,
} from "@/lib/progress/progress-calculator";
import { getSupabaseClient } from "@/lib/supabase/client";
import { getSupabaseProgressService } from "@/lib/progress/supabase-progress-service";

export type ProgressService = {
  mode: ProgressStorageMode;
  getProgress: () => Promise<UserProgress>;
  markBlockCompleted: (params: {
    lesson: Lesson;
    blockId: string;
    xpDelta: number;
    isMeaningfulActivity?: boolean;
  }) => Promise<UserProgress>;
  saveQuizAttempt: (params: {
    quizId: string;
    score: number;
    passed: boolean;
    answers?: Record<string, unknown>;
  }) => Promise<UserProgress>;
  saveWritingDraft: (blockId: string, draft: string) => Promise<UserProgress>;
  saveChallengeCode: (challengeId: string, code: ChallengeCode) => Promise<UserProgress>;
  saveChallengeChecklist: (challengeId: string, completedChecklistItems: string[]) => Promise<UserProgress>;
  markChallengeCompleted: (challengeId: string) => Promise<UserProgress>;
  getChallengeProgress: (
    challengeId: string,
  ) => Promise<UserProgress["challengeProgress"][string] | undefined>;
  getLessonMetrics: (lesson: Lesson, progress?: UserProgress) => LessonProgressMetrics;
};

function getLocalProgressServiceAsync(): Omit<ProgressService, "mode" | "getLessonMetrics"> {
  return {
    getProgress: async () => getLocalProgress(),
    markBlockCompleted: async ({ lesson, blockId, xpDelta, isMeaningfulActivity = true }) => {
      return updateLocalProgress((current) => {
        if (current.completedBlockIds.includes(blockId)) {
          return current;
        }

        const completedBlockIds = [...current.completedBlockIds, blockId];
        const lessonMetrics = calculateLessonProgress(lesson, completedBlockIds);

        const completedLessonIds = current.completedLessonIds.includes(lesson.id)
          ? current.completedLessonIds
          : lessonMetrics.isCompleted
            ? [...current.completedLessonIds, lesson.id]
            : current.completedLessonIds;

        let streakCount = current.streakCount;
        let lastActivityDate = current.lastActivityDate;

        if (isMeaningfulActivity) {
          const streakUpdate = calculateStreakUpdate(
            current.lastActivityDate,
            current.streakCount,
            getLocalDateString(),
          );
          streakCount = streakUpdate.streakCount;
          lastActivityDate = streakUpdate.lastActivityDate;
        }

        return {
          ...current,
          completedBlockIds,
          completedLessonIds,
          totalXp: current.totalXp + xpDelta,
          streakCount,
          lastActivityDate,
        };
      });
    },
    saveQuizAttempt: async ({ quizId, score }) => {
      return updateLocalProgress((current) => {
        const currentBest = current.quizScores[quizId] ?? 0;
        const nextBest = score > currentBest ? score : currentBest;

        return {
          ...current,
          quizScores: {
            ...current.quizScores,
            [quizId]: nextBest,
          },
        };
      });
    },
    saveWritingDraft: async (blockId, draft) => {
      return updateLocalProgress((current) => {
        return {
          ...current,
          writingDrafts: {
            ...current.writingDrafts,
            [blockId]: draft,
          },
        };
      });
    },
    saveChallengeCode: async (challengeId, code) => {
      return updateLocalProgress((current) => {
        const previous = current.challengeProgress[challengeId];

        return {
          ...current,
          challengeProgress: {
            ...current.challengeProgress,
            [challengeId]: {
              challengeId,
              isCompleted: previous?.isCompleted ?? false,
              completedChecklistItems: previous?.completedChecklistItems ?? [],
              savedCode: code,
            },
          },
        };
      });
    },
    saveChallengeChecklist: async (challengeId, completedChecklistItems) => {
      return updateLocalProgress((current) => {
        const previous = current.challengeProgress[challengeId];

        return {
          ...current,
          challengeProgress: {
            ...current.challengeProgress,
            [challengeId]: {
              challengeId,
              isCompleted: previous?.isCompleted ?? false,
              completedChecklistItems,
              savedCode: previous?.savedCode ?? { html: "", css: "", js: "" },
            },
          },
        };
      });
    },
    markChallengeCompleted: async (challengeId) => {
      return updateLocalProgress((current) => {
        const previous = current.challengeProgress[challengeId];

        return {
          ...current,
          challengeProgress: {
            ...current.challengeProgress,
            [challengeId]: {
              challengeId,
              isCompleted: true,
              completedChecklistItems: previous?.completedChecklistItems ?? [],
              savedCode: previous?.savedCode ?? { html: "", css: "", js: "" },
            },
          },
        };
      });
    },
    getChallengeProgress: async (challengeId) => {
      const progress = getLocalProgress();
      return progress.challengeProgress[challengeId];
    },
  };
}

export function getProgressService(userId?: string | null): ProgressService {
  const localService = getLocalProgressServiceAsync();

  if (!userId) {
    return {
      mode: "guest",
      ...localService,
      getLessonMetrics: (lesson, progress = getLocalProgress()) => {
        return calculateLessonProgress(lesson, progress.completedBlockIds);
      },
    };
  }

  const supabase = getSupabaseClient();

  if (!supabase) {
    return {
      mode: "guest",
      ...localService,
      getLessonMetrics: (lesson, progress = getLocalProgress()) => {
        return calculateLessonProgress(lesson, progress.completedBlockIds);
      },
    };
  }

  const supabaseService = getSupabaseProgressService(supabase, userId);

  return {
    mode: "logged-in",
    getProgress: supabaseService.getProgress,
    markBlockCompleted: supabaseService.markBlockCompleted,
    saveQuizAttempt: supabaseService.saveQuizAttempt,
    saveWritingDraft: supabaseService.saveWritingDraft,
    saveChallengeCode: supabaseService.saveChallengeCode,
    saveChallengeChecklist: supabaseService.saveChallengeChecklist,
    markChallengeCompleted: supabaseService.markChallengeCompleted,
    getChallengeProgress: supabaseService.getChallengeProgress,
    getLessonMetrics: (lesson, progress) => {
      return calculateLessonProgress(lesson, progress?.completedBlockIds ?? []);
    },
  };
}
