import { lessons } from "@/content/lessons";
import type { Lesson } from "@/types/learning";

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}
