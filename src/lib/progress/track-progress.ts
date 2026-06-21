import { tracks } from "@/content/tracks";
import { getOrderedModuleLessons, getOrderedTrackLessons, getOrderedTrackModules } from "@/lib/content/learning-path";
import {
  calculateLessonsProgress,
  getContinueLessonProgress,
  type AggregatedLessonsProgressMetrics,
  type ContinueLessonProgress,
} from "@/lib/progress/progress-calculator";
import type { Lesson, Module, Track } from "@/types/learning";

export type TrackProgressSummary = {
  track: Track;
  modules: Module[];
  lessons: Lesson[];
  metrics: AggregatedLessonsProgressMetrics;
  continueProgress: ContinueLessonProgress | null;
};

export function getTrackProgressSummaries(completedBlockIds: string[]): TrackProgressSummary[] {
  return tracks.map((track) => {
    const modules = getOrderedTrackModules(track);
    const lessons = getOrderedTrackLessons(track);

    return {
      track,
      modules,
      lessons,
      metrics: calculateLessonsProgress(lessons, completedBlockIds),
      continueProgress: getContinueLessonProgress(lessons, completedBlockIds),
    };
  });
}

export function selectActiveTrackSummary(
  summaries: TrackProgressSummary[],
): TrackProgressSummary | undefined {
  const inProgressTrack = summaries.find(
    (summary) => summary.metrics.progressPercent > 0 && !summary.metrics.isCompleted,
  );

  if (inProgressTrack) {
    return inProgressTrack;
  }

  const nextAvailableTrack = summaries.find((summary) => summary.lessons.length > 0 && !summary.metrics.isCompleted);

  return nextAvailableTrack ?? summaries.find((summary) => summary.lessons.length > 0) ?? summaries[0];
}

export function getModuleForLesson(moduleList: Module[], lesson?: Lesson): Module | undefined {
  if (!lesson) {
    return undefined;
  }

  return moduleList.find((moduleItem) => moduleItem.id === lesson.moduleId);
}

export function getTrackTotals(summaries: TrackProgressSummary[]) {
  return summaries.reduce(
    (totals, summary) => ({
      completedLessonCount: totals.completedLessonCount + summary.metrics.completedLessonCount,
      totalLessonCount: totals.totalLessonCount + summary.metrics.totalLessonCount,
      completedTrackCount: totals.completedTrackCount + (summary.metrics.isCompleted ? 1 : 0),
      totalTrackCount: totals.totalTrackCount + 1,
    }),
    {
      completedLessonCount: 0,
      totalLessonCount: 0,
      completedTrackCount: 0,
      totalTrackCount: 0,
    },
  );
}

export function getModuleLessons(moduleItem: Module): Lesson[] {
  return getOrderedModuleLessons(moduleItem);
}
