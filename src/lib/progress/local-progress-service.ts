import { DEFAULT_USER_PROGRESS, type UserProgress } from "@/types/progress";

const GUEST_PROGRESS_STORAGE_KEY = "fluentstack.guest.progress.v1";

function normalizeProgress(input: unknown): UserProgress {
  if (!input || typeof input !== "object") {
    return { ...DEFAULT_USER_PROGRESS };
  }

  const candidate = input as Partial<UserProgress>;

  return {
    completedBlockIds: Array.isArray(candidate.completedBlockIds)
      ? candidate.completedBlockIds.filter((item): item is string => typeof item === "string")
      : [],
    completedLessonIds: Array.isArray(candidate.completedLessonIds)
      ? candidate.completedLessonIds.filter((item): item is string => typeof item === "string")
      : [],
    quizScores:
      candidate.quizScores && typeof candidate.quizScores === "object"
        ? (candidate.quizScores as Record<string, number>)
        : {},
    challengeProgress:
      candidate.challengeProgress && typeof candidate.challengeProgress === "object"
        ? Object.fromEntries(
            Object.entries(candidate.challengeProgress).map(([challengeId, value]) => {
              const rawChallenge =
                value && typeof value === "object"
                  ? (value as Partial<UserProgress["challengeProgress"][string]>)
                  : {};
              const rawSavedCode = (rawChallenge.savedCode ?? {}) as Partial<
                UserProgress["challengeProgress"][string]["savedCode"]
              >;
              return [
                challengeId,
                {
                  challengeId,
                  isCompleted: Boolean(rawChallenge.isCompleted),
                  savedCode: {
                    html: typeof rawSavedCode.html === "string" ? rawSavedCode.html : "",
                    css: typeof rawSavedCode.css === "string" ? rawSavedCode.css : "",
                    js: typeof rawSavedCode.js === "string" ? rawSavedCode.js : "",
                  },
                  completedChecklistItems: Array.isArray(rawChallenge.completedChecklistItems)
                    ? rawChallenge.completedChecklistItems.filter(
                        (item): item is string => typeof item === "string",
                      )
                    : [],
                },
              ];
            }),
          )
        : {},
    writingDrafts:
      candidate.writingDrafts && typeof candidate.writingDrafts === "object"
        ? (candidate.writingDrafts as Record<string, string>)
        : {},
    totalXp: typeof candidate.totalXp === "number" ? candidate.totalXp : 0,
    lastActivityDate:
      typeof candidate.lastActivityDate === "string" ? candidate.lastActivityDate : undefined,
    streakCount: typeof candidate.streakCount === "number" ? candidate.streakCount : 0,
  };
}

export function getLocalProgress(): UserProgress {
  if (typeof window === "undefined") {
    return { ...DEFAULT_USER_PROGRESS };
  }

  try {
    const rawValue = window.localStorage.getItem(GUEST_PROGRESS_STORAGE_KEY);

    if (!rawValue) {
      return { ...DEFAULT_USER_PROGRESS };
    }

    return normalizeProgress(JSON.parse(rawValue));
  } catch {
    return { ...DEFAULT_USER_PROGRESS };
  }
}

export function setLocalProgress(progress: UserProgress): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(GUEST_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore write failures in MVP.
  }
}

export function updateLocalProgress(updater: (current: UserProgress) => UserProgress): UserProgress {
  const nextProgress = updater(getLocalProgress());
  setLocalProgress(nextProgress);
  return nextProgress;
}

export function getLocalProgressService() {
  return {
    getProgress: getLocalProgress,
    setProgress: setLocalProgress,
    updateProgress: updateLocalProgress,
  };
}
