import type { ChallengeCode } from "@/types/challenge";

export type ProgressStorageMode = "guest" | "logged-in";

export type ChallengeProgress = {
  challengeId: string;
  isCompleted: boolean;
  savedCode: ChallengeCode;
  completedChecklistItems: string[];
};

export type UserProgress = {
  completedBlockIds: string[];
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  challengeProgress: Record<string, ChallengeProgress>;
  writingDrafts: Record<string, string>;
  totalXp: number;
  lastActivityDate?: string;
  streakCount: number;
};

export const DEFAULT_USER_PROGRESS: UserProgress = {
  completedBlockIds: [],
  completedLessonIds: [],
  quizScores: {},
  challengeProgress: {},
  writingDrafts: {},
  totalXp: 0,
  lastActivityDate: undefined,
  streakCount: 0,
};
