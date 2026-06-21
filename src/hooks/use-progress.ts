"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Lesson } from "@/types/learning";
import type { ChallengeCode } from "@/types/challenge";
import { DEFAULT_USER_PROGRESS, type ProgressStorageMode, type UserProgress } from "@/types/progress";
import { getQuizById } from "@/lib/content/get-quiz";
import { getProgressService } from "@/lib/progress/progress-service";
import { calculateLessonProgress } from "@/lib/progress/progress-calculator";
import { getPassingScore } from "@/lib/quiz/scoring";
import { useAuthUser } from "@/hooks/use-auth-user";

const DEFAULT_BLOCK_XP = 5;
const QUICK_CHECK_XP = 10;
const QUIZ_PASS_XP = 25;
const WRITING_PRACTICE_XP = 30;
const CODING_PRACTICE_XP = 50;

type CompleteQuizParams = {
  blockId: string;
  quizId: string;
  score: number;
  passed: boolean;
};

type BlockCompletionOptions = {
  xpDelta?: number;
  isMeaningfulActivity?: boolean;
};

function useResolvedProgress() {
  const { user, isLoading: isAuthLoading, isAuthenticated } = useAuthUser();
  const progressService = useMemo(() => getProgressService(user?.id ?? null), [user?.id]);

  const [userProgress, setUserProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);
  const [isProgressLoading, setIsProgressLoading] = useState(true);

  const refreshProgress = useCallback(async () => {
    if (isAuthLoading) {
      return;
    }

    setIsProgressLoading(true);
    const nextProgress = await progressService.getProgress();
    setUserProgress(nextProgress);
    setIsProgressLoading(false);
  }, [isAuthLoading, progressService]);

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    const timer = window.setTimeout(() => {
      void refreshProgress();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isAuthLoading, refreshProgress]);

  useEffect(() => {
    const handleFocusSync = () => {
      void refreshProgress();
    };

    window.addEventListener("focus", handleFocusSync);

    let handleStorageSync: (() => void) | null = null;
    if (progressService.mode === "guest") {
      handleStorageSync = () => {
        void refreshProgress();
      };
      window.addEventListener("storage", handleStorageSync);
    }

    return () => {
      window.removeEventListener("focus", handleFocusSync);
      if (handleStorageSync) {
        window.removeEventListener("storage", handleStorageSync);
      }
    };
  }, [progressService.mode, refreshProgress]);

  return {
    userProgress,
    setUserProgress,
    progressService,
    storageMode: progressService.mode as ProgressStorageMode,
    isLoading: isAuthLoading || isProgressLoading,
    isAuthenticated,
    refreshProgress,
  };
}

export function useProgress(lesson: Lesson) {
  const {
    userProgress,
    setUserProgress,
    progressService,
    storageMode,
    isLoading,
    isAuthenticated,
    refreshProgress,
  } = useResolvedProgress();

  const lessonMetrics = useMemo(() => {
    return calculateLessonProgress(lesson, userProgress.completedBlockIds);
  }, [lesson, userProgress.completedBlockIds]);

  const completedBlockSet = useMemo(
    () => new Set(userProgress.completedBlockIds),
    [userProgress.completedBlockIds],
  );

  const markBlockCompleted = useCallback(
    async (blockId: string, options?: BlockCompletionOptions) => {
      const nextProgress = await progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: options?.xpDelta ?? DEFAULT_BLOCK_XP,
        isMeaningfulActivity: options?.isMeaningfulActivity,
      });
      setUserProgress(nextProgress);
      return nextProgress;
    },
    [lesson, progressService, setUserProgress],
  );

  const markQuickCheckCompleted = useCallback(
    async (blockId: string) => {
      const nextProgress = await progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: QUICK_CHECK_XP,
      });
      setUserProgress(nextProgress);
      return nextProgress;
    },
    [lesson, progressService, setUserProgress],
  );

  const completeQuizAttempt = useCallback(
    async ({ blockId, quizId, score, passed }: CompleteQuizParams) => {
      let nextProgress = await progressService.saveQuizAttempt({
        quizId,
        score,
        passed,
      });

      if (passed) {
        nextProgress = await progressService.markBlockCompleted({
          lesson,
          blockId,
          xpDelta: QUIZ_PASS_XP,
        });
      }

      setUserProgress(nextProgress);
      return nextProgress;
    },
    [lesson, progressService, setUserProgress],
  );

  const getBestQuizScore = useCallback(
    (quizId: string) => {
      return userProgress.quizScores[quizId] ?? 0;
    },
    [userProgress.quizScores],
  );

  const saveWritingDraft = useCallback(
    async (blockId: string, draft: string) => {
      const nextProgress = await progressService.saveWritingDraft(blockId, draft);
      setUserProgress(nextProgress);
      return nextProgress;
    },
    [progressService, setUserProgress],
  );

  const getWritingDraft = useCallback(
    (blockId: string) => {
      return userProgress.writingDrafts[blockId] ?? "";
    },
    [userProgress.writingDrafts],
  );

  const markWritingPracticeCompleted = useCallback(
    async (blockId: string) => {
      const nextProgress = await progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: WRITING_PRACTICE_XP,
      });
      setUserProgress(nextProgress);
      return nextProgress;
    },
    [lesson, progressService, setUserProgress],
  );

  const saveChallengeCode = useCallback(
    async (challengeId: string, code: ChallengeCode) => {
      const nextProgress = await progressService.saveChallengeCode(challengeId, code);
      setUserProgress(nextProgress);
      return nextProgress;
    },
    [progressService, setUserProgress],
  );

  const saveChallengeChecklist = useCallback(
    async (challengeId: string, completedChecklistItems: string[]) => {
      const nextProgress = await progressService.saveChallengeChecklist(challengeId, completedChecklistItems);
      setUserProgress(nextProgress);
      return nextProgress;
    },
    [progressService, setUserProgress],
  );

  const getChallengeProgress = useCallback(
    (challengeId: string) => {
      return userProgress.challengeProgress[challengeId];
    },
    [userProgress.challengeProgress],
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const completedBlockIds = userProgress.completedBlockIds;
    const missingCompletedBlocks = lesson.blocks.filter((block) => {
      if (completedBlockIds.includes(block.id)) {
        return false;
      }

      if (block.type === "quiz") {
        const quiz = getQuizById(block.quizId);
        const bestScore = userProgress.quizScores[block.quizId] ?? 0;

        return Boolean(quiz && bestScore >= getPassingScore(quiz));
      }

      if (block.type === "coding-practice") {
        return userProgress.challengeProgress[block.challengeId]?.isCompleted ?? false;
      }

      return false;
    });

    if (missingCompletedBlocks.length === 0) {
      return;
    }

    let isCancelled = false;

    void (async () => {
      let nextProgress: UserProgress | null = null;

      for (const block of missingCompletedBlocks) {
        nextProgress = await progressService.markBlockCompleted({
          lesson,
          blockId: block.id,
          xpDelta: 0,
          isMeaningfulActivity: false,
        });
      }

      if (!isCancelled && nextProgress) {
        setUserProgress(nextProgress);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [
    isLoading,
    lesson,
    progressService,
    setUserProgress,
    userProgress.challengeProgress,
    userProgress.completedBlockIds,
    userProgress.quizScores,
  ]);

  const markCodingPracticeCompleted = useCallback(
    async ({ blockId, challengeId }: { blockId: string; challengeId: string }) => {
      await progressService.markChallengeCompleted(challengeId);
      const nextProgress = await progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: CODING_PRACTICE_XP,
      });
      setUserProgress(nextProgress);
      return nextProgress;
    },
    [lesson, progressService, setUserProgress],
  );

  return {
    userProgress,
    lessonMetrics,
    completedBlockSet,
    markBlockCompleted,
    markQuickCheckCompleted,
    completeQuizAttempt,
    getBestQuizScore,
    saveWritingDraft,
    getWritingDraft,
    markWritingPracticeCompleted,
    saveChallengeCode,
    saveChallengeChecklist,
    getChallengeProgress,
    markCodingPracticeCompleted,
    storageMode,
    isLoading,
    isAuthenticated,
    refreshProgress,
  };
}

export function useGuestProgress() {
  const { userProgress, refreshProgress, storageMode, isLoading, isAuthenticated } = useResolvedProgress();

  return {
    userProgress,
    refreshProgress,
    storageMode,
    isLoading,
    isAuthenticated,
  };
}
