import type { Lesson } from "@/types/learning";
import type { UserProgress } from "@/types/progress";
import type { ChallengeCode } from "@/types/challenge";
import { getLocalProgress, updateLocalProgress } from "@/lib/progress/local-progress-service";
import {
  calculateLessonProgress,
  calculateStreakUpdate,
  getLocalDateString,
  type LessonProgressMetrics,
} from "@/lib/progress/progress-calculator";

export type ProgressService = {
  getProgress: () => UserProgress;
  markBlockCompleted: (params: {
    lesson: Lesson;
    blockId: string;
    xpDelta: number;
    isMeaningfulActivity?: boolean;
  }) => UserProgress;
  saveQuizScore: (quizId: string, score: number) => UserProgress;
  saveWritingDraft: (blockId: string, draft: string) => UserProgress;
  saveChallengeCode: (challengeId: string, code: ChallengeCode) => UserProgress;
  saveChallengeChecklist: (challengeId: string, completedChecklistItems: string[]) => UserProgress;
  markChallengeCompleted: (challengeId: string) => UserProgress;
  getChallengeProgress: (challengeId: string) => UserProgress["challengeProgress"][string] | undefined;
  getLessonMetrics: (lesson: Lesson, progress?: UserProgress) => LessonProgressMetrics;
};

export function getProgressService(): ProgressService {
  return {
    getProgress: () => getLocalProgress(),
    markBlockCompleted: ({ lesson, blockId, xpDelta, isMeaningfulActivity = true }) => {
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
    saveQuizScore: (quizId, score) => {
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
    saveWritingDraft: (blockId, draft) => {
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
    saveChallengeCode: (challengeId, code) => {
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
    saveChallengeChecklist: (challengeId, completedChecklistItems) => {
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
    markChallengeCompleted: (challengeId) => {
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
    getChallengeProgress: (challengeId) => {
      const progress = getLocalProgress();
      return progress.challengeProgress[challengeId];
    },
    getLessonMetrics: (lesson, progress = getLocalProgress()) => {
      return calculateLessonProgress(lesson, progress.completedBlockIds);
    },
  };
}
