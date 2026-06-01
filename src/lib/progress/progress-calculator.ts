import type { Lesson } from "@/types/learning";

export type LessonProgressMetrics = {
  completedRequiredCount: number;
  totalRequiredCount: number;
  progressPercent: number;
  isCompleted: boolean;
};

export type ProgressStatus = "not-started" | "in-progress" | "completed";

export type AggregatedLessonsProgressMetrics = {
  completedRequiredCount: number;
  totalRequiredCount: number;
  progressPercent: number;
  completedLessonCount: number;
  totalLessonCount: number;
  isCompleted: boolean;
};

export type LessonProgressSummary = {
  lessonId: string;
  progressPercent: number;
  status: ProgressStatus;
  isCompleted: boolean;
};

export type ContinueLessonProgress = {
  lesson: Lesson;
  progressPercent: number;
  status: ProgressStatus;
  isCompleted: boolean;
  reason: "in-progress" | "next" | "completed";
};

export function calculateLessonProgress(
  lesson: Lesson,
  completedBlockIds: string[],
): LessonProgressMetrics {
  const completedSet = new Set(completedBlockIds);
  const requiredBlockIds = lesson.completionRule.requiredBlockIds;
  const totalRequiredCount = requiredBlockIds.length;

  if (totalRequiredCount === 0) {
    return {
      completedRequiredCount: 0,
      totalRequiredCount: 0,
      progressPercent: 100,
      isCompleted: true,
    };
  }

  const completedRequiredCount = requiredBlockIds.filter((blockId) => completedSet.has(blockId)).length;
  const progressPercent = Math.round((completedRequiredCount / totalRequiredCount) * 100);

  return {
    completedRequiredCount,
    totalRequiredCount,
    progressPercent,
    isCompleted: completedRequiredCount >= totalRequiredCount,
  };
}

export function calculateLessonsProgress(
  lessonList: Lesson[],
  completedBlockIds: string[],
): AggregatedLessonsProgressMetrics {
  const totalLessonCount = lessonList.length;

  if (totalLessonCount === 0) {
    return {
      completedRequiredCount: 0,
      totalRequiredCount: 0,
      progressPercent: 0,
      completedLessonCount: 0,
      totalLessonCount: 0,
      isCompleted: false,
    };
  }

  const aggregated = lessonList.reduce(
    (acc, lesson) => {
      const metrics = calculateLessonProgress(lesson, completedBlockIds);
      return {
        completedRequiredCount: acc.completedRequiredCount + metrics.completedRequiredCount,
        totalRequiredCount: acc.totalRequiredCount + metrics.totalRequiredCount,
        completedLessonCount: acc.completedLessonCount + (metrics.isCompleted ? 1 : 0),
      };
    },
    {
      completedRequiredCount: 0,
      totalRequiredCount: 0,
      completedLessonCount: 0,
    },
  );

  const progressPercent =
    aggregated.totalRequiredCount > 0
      ? Math.round((aggregated.completedRequiredCount / aggregated.totalRequiredCount) * 100)
      : 0;

  return {
    ...aggregated,
    totalLessonCount,
    progressPercent,
    isCompleted: aggregated.completedLessonCount >= totalLessonCount,
  };
}

export function getProgressStatus(progressPercent: number): ProgressStatus {
  if (progressPercent >= 100) {
    return "completed";
  }

  if (progressPercent > 0) {
    return "in-progress";
  }

  return "not-started";
}

export function calculateLessonProgressSummary(
  lesson: Lesson,
  completedBlockIds: string[],
): LessonProgressSummary {
  const metrics = calculateLessonProgress(lesson, completedBlockIds);

  return {
    lessonId: lesson.id,
    progressPercent: metrics.progressPercent,
    status: getProgressStatus(metrics.progressPercent),
    isCompleted: metrics.isCompleted,
  };
}

export function getContinueLessonProgress(
  lessonList: Lesson[],
  completedBlockIds: string[],
): ContinueLessonProgress | null {
  if (lessonList.length === 0) {
    return null;
  }

  const lessonSummaries = lessonList.map((lesson) => {
    const metrics = calculateLessonProgress(lesson, completedBlockIds);
    const status = getProgressStatus(metrics.progressPercent);

    return {
      lesson,
      progressPercent: metrics.progressPercent,
      status,
      isCompleted: metrics.isCompleted,
    };
  });

  const inProgressLesson = lessonSummaries.find((entry) => entry.status === "in-progress");

  if (inProgressLesson) {
    return {
      ...inProgressLesson,
      reason: "in-progress",
    };
  }

  const nextLesson = lessonSummaries.find((entry) => !entry.isCompleted);

  if (nextLesson) {
    return {
      ...nextLesson,
      reason: "next",
    };
  }

  return {
    ...lessonSummaries[0],
    reason: "completed",
  };
}

export function getLocalDateString(date = new Date()): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function calculateStreakUpdate(
  previousDate: string | undefined,
  currentStreakCount: number,
  today: string,
): { streakCount: number; lastActivityDate: string } {
  if (!previousDate) {
    return { streakCount: 1, lastActivityDate: today };
  }

  if (previousDate === today) {
    return { streakCount: currentStreakCount, lastActivityDate: today };
  }

  const previous = new Date(`${previousDate}T00:00:00`);
  const current = new Date(`${today}T00:00:00`);
  const diffDays = Math.round((current.getTime() - previous.getTime()) / 86_400_000);

  if (diffDays === 1) {
    return { streakCount: currentStreakCount + 1, lastActivityDate: today };
  }

  return { streakCount: 1, lastActivityDate: today };
}
