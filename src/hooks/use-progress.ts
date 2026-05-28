"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Lesson } from "@/types/learning";
import type { ChallengeCode } from "@/types/challenge";
import { DEFAULT_USER_PROGRESS, type UserProgress } from "@/types/progress";
import { getProgressService } from "@/lib/progress/progress-service";

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

export function useProgress(lesson: Lesson) {
  const progressService = useMemo(() => getProgressService(), []);

  const [userProgress, setUserProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);

  useEffect(() => {
    setUserProgress(progressService.getProgress());
  }, [progressService]);

  const lessonMetrics = useMemo(() => {
    return progressService.getLessonMetrics(lesson, userProgress);
  }, [lesson, progressService, userProgress]);

  const completedBlockSet = useMemo(
    () => new Set(userProgress.completedBlockIds),
    [userProgress.completedBlockIds],
  );

  const markBlockCompleted = useCallback(
    (blockId: string, options?: { xpDelta?: number }) => {
      const nextProgress = progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: options?.xpDelta ?? DEFAULT_BLOCK_XP,
      });
      setUserProgress(nextProgress);
    },
    [lesson, progressService],
  );

  const markQuickCheckCompleted = useCallback(
    (blockId: string) => {
      const nextProgress = progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: QUICK_CHECK_XP,
      });
      setUserProgress(nextProgress);
    },
    [lesson, progressService],
  );

  const completeQuizAttempt = useCallback(
    ({ blockId, quizId, score, passed }: CompleteQuizParams) => {
      let nextProgress = progressService.saveQuizScore(quizId, score);

      if (passed) {
        nextProgress = progressService.markBlockCompleted({
          lesson,
          blockId,
          xpDelta: QUIZ_PASS_XP,
        });
      }

      setUserProgress(nextProgress);
    },
    [lesson, progressService],
  );

  const getBestQuizScore = useCallback(
    (quizId: string) => {
      return userProgress.quizScores[quizId] ?? 0;
    },
    [userProgress.quizScores],
  );

  const saveWritingDraft = useCallback(
    (blockId: string, draft: string) => {
      const nextProgress = progressService.saveWritingDraft(blockId, draft);
      setUserProgress(nextProgress);
    },
    [progressService],
  );

  const getWritingDraft = useCallback(
    (blockId: string) => {
      return userProgress.writingDrafts[blockId] ?? "";
    },
    [userProgress.writingDrafts],
  );

  const markWritingPracticeCompleted = useCallback(
    (blockId: string) => {
      const nextProgress = progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: WRITING_PRACTICE_XP,
      });
      setUserProgress(nextProgress);
    },
    [lesson, progressService],
  );

  const saveChallengeCode = useCallback(
    (challengeId: string, code: ChallengeCode) => {
      const nextProgress = progressService.saveChallengeCode(challengeId, code);
      setUserProgress(nextProgress);
    },
    [progressService],
  );

  const saveChallengeChecklist = useCallback(
    (challengeId: string, completedChecklistItems: string[]) => {
      const nextProgress = progressService.saveChallengeChecklist(challengeId, completedChecklistItems);
      setUserProgress(nextProgress);
    },
    [progressService],
  );

  const getChallengeProgress = useCallback(
    (challengeId: string) => {
      return userProgress.challengeProgress[challengeId];
    },
    [userProgress.challengeProgress],
  );

  const markCodingPracticeCompleted = useCallback(
    ({ blockId, challengeId }: { blockId: string; challengeId: string }) => {
      progressService.markChallengeCompleted(challengeId);
      const nextProgress = progressService.markBlockCompleted({
        lesson,
        blockId,
        xpDelta: CODING_PRACTICE_XP,
      });
      setUserProgress(nextProgress);
    },
    [lesson, progressService],
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
  };
}

export function useGuestProgress() {
  const progressService = useMemo(() => getProgressService(), []);
  const [userProgress, setUserProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);

  const refreshProgress = useCallback(() => {
    setUserProgress(progressService.getProgress());
  }, [progressService]);

  useEffect(() => {
    refreshProgress();

    const handleStorageSync = () => {
      refreshProgress();
    };

    window.addEventListener("storage", handleStorageSync);
    window.addEventListener("focus", handleStorageSync);

    return () => {
      window.removeEventListener("storage", handleStorageSync);
      window.removeEventListener("focus", handleStorageSync);
    };
  }, [refreshProgress]);

  return {
    userProgress,
    refreshProgress,
  };
}
