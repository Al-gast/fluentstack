import { lessons } from "@/content/lessons";
import { modules } from "@/content/modules";
import { tracks } from "@/content/tracks";
import { curriculumLevelsByTrackId } from "@/content/curriculum-levels";
import type { Lesson, Module, Track } from "@/types/learning";

export type LessonPathContext = {
  track: Track;
  module: Module;
  lesson: Lesson;
  moduleIndex: number;
  lessonIndex: number;
  previousLesson?: Lesson;
  nextLesson?: Lesson;
  nextModule?: Module;
};

export type LessonNavigationTarget = {
  href: string;
  label: string;
  title: string;
};

export type LessonNavigation = {
  trackHref: string;
  trackTitle: string;
  moduleHref: string;
  moduleTitle: string;
  levelLabel?: string;
  previous: LessonNavigationTarget;
  next: LessonNavigationTarget;
};

export function getOrderedTrackModules(track: Track): Module[] {
  return track.moduleIds
    .map((moduleId) => modules.find((moduleItem) => moduleItem.id === moduleId))
    .filter((moduleItem): moduleItem is Module => Boolean(moduleItem));
}

export function getOrderedModuleLessons(moduleItem: Module): Lesson[] {
  return moduleItem.lessonIds
    .map((lessonId) => lessons.find((lesson) => lesson.id === lessonId))
    .filter((lesson): lesson is Lesson => Boolean(lesson));
}

export function getOrderedTrackLessons(track: Track): Lesson[] {
  return getOrderedTrackModules(track).flatMap((moduleItem) => getOrderedModuleLessons(moduleItem));
}

export function getLessonPathContextBySlug(slug: string): LessonPathContext | null {
  const lesson = lessons.find((lessonItem) => lessonItem.slug === slug);

  if (!lesson) {
    return null;
  }

  const track = tracks.find((trackItem) => trackItem.id === lesson.trackId);
  const moduleItem = modules.find((moduleEntry) => moduleEntry.id === lesson.moduleId);

  if (!track || !moduleItem) {
    return null;
  }

  const orderedModules = getOrderedTrackModules(track);
  const moduleIndex = orderedModules.findIndex((entry) => entry.id === moduleItem.id);
  const orderedLessons = getOrderedModuleLessons(moduleItem);
  const lessonIndex = orderedLessons.findIndex((entry) => entry.id === lesson.id);
  const nextModule = orderedModules[moduleIndex + 1];

  return {
    track,
    module: moduleItem,
    lesson,
    moduleIndex,
    lessonIndex,
    previousLesson: orderedLessons[lessonIndex - 1],
    nextLesson: orderedLessons[lessonIndex + 1],
    nextModule,
  };
}

export function getLessonNavigation(context: LessonPathContext): LessonNavigation {
  const trackHref = `/learn/${context.track.slug}`;
  const moduleHref = `/learn/${context.track.slug}/${context.module.slug}`;
  const level = curriculumLevelsByTrackId[context.track.id]?.find((levelItem) =>
    levelItem.moduleIds.includes(context.module.id),
  );
  const previousLesson = context.previousLesson;
  const nextLesson = context.nextLesson;
  const nextModuleFirstLesson = context.nextModule
    ? getOrderedModuleLessons(context.nextModule)[0]
    : undefined;

  return {
    trackHref,
    trackTitle: context.track.title,
    moduleHref,
    moduleTitle: context.module.title,
    levelLabel: level ? `Level ${level.level}: ${level.title}` : undefined,
    previous: previousLesson
      ? {
          href: `/lesson/${previousLesson.slug}`,
          label: "Lesson sebelumnya",
          title: previousLesson.title,
        }
      : {
          href: moduleHref,
          label: "Kembali ke module",
          title: context.module.title,
        },
    next: nextLesson
      ? {
          href: `/lesson/${nextLesson.slug}`,
          label: "Lesson berikutnya",
          title: nextLesson.title,
        }
      : nextModuleFirstLesson && context.nextModule
        ? {
            href: `/lesson/${nextModuleFirstLesson.slug}`,
            label: "Lanjut ke module berikutnya",
            title: `${context.nextModule.title}: ${nextModuleFirstLesson.title}`,
          }
        : {
            href: trackHref,
            label: "Kembali ke track",
            title: context.track.title,
          },
  };
}
