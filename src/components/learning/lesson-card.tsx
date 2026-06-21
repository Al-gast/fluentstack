"use client";

import Link from "next/link";
import type { Lesson } from "@/types/learning";
import { useGuestProgress } from "@/hooks/use-progress";
import { calculateLessonProgress, getProgressStatus } from "@/lib/progress/progress-calculator";
import { ProgressBar } from "@/components/progress/progress-bar";

type LessonCardProps = {
  lesson: Lesson;
  progressPercent?: number;
  status?: "not-started" | "in-progress" | "completed";
  orderNumber?: number;
  previousLesson?: Lesson;
};

const statusLabel: Record<NonNullable<LessonCardProps["status"]>, string> = {
  "not-started": "Belum mulai",
  "in-progress": "Sedang berjalan",
  completed: "Selesai",
};

export function LessonCard({
  lesson,
  progressPercent,
  status,
  orderNumber,
  previousLesson,
}: LessonCardProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const lessonMetrics = calculateLessonProgress(lesson, userProgress.completedBlockIds);
  const previousLessonMetrics = previousLesson
    ? calculateLessonProgress(previousLesson, userProgress.completedBlockIds)
    : null;
  const resolvedProgressPercent = progressPercent ?? lessonMetrics.progressPercent;
  const resolvedStatus = status ?? getProgressStatus(resolvedProgressPercent);
  const shouldRecommendPreviousLesson =
    Boolean(previousLesson) && !isLoading && !previousLessonMetrics?.isCompleted;

  return (
    <Link
      href={`/lesson/${lesson.slug}`}
      className="group block rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] transition hover:border-fs-border-strong hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
    >
      {orderNumber ? (
        <p className="mb-3 text-sm font-medium text-fs-accent">Lesson {orderNumber}</p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-base font-bold text-fs-text sm:text-lg">{lesson.title}</h3>
        <span className="w-fit rounded-lg border border-fs-border bg-fs-surface-soft px-2 py-1 text-xs text-fs-text-soft">
          {lesson.level}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-fs-text-soft">{lesson.description}</p>

      {shouldRecommendPreviousLesson ? (
        <p className="mt-3 rounded-lg border border-fs-warning/20 bg-fs-warning-soft px-3 py-2 text-xs leading-5 text-fs-warning">
          Disarankan selesaikan lesson sebelumnya dulu.
        </p>
      ) : null}

      <div className="mt-4 grid gap-2 text-xs min-[420px]:grid-cols-3 sm:text-sm">
        <div className="rounded-lg border border-fs-border bg-fs-surface-soft p-2.5">
          <p className="text-fs-text-muted">Estimasi</p>
          <p className="mt-1 font-semibold text-fs-text">{lesson.estimatedMinutes} menit</p>
        </div>
        <div className="rounded-lg border border-fs-border bg-fs-surface-soft p-2.5">
          <p className="text-fs-text-muted">Status</p>
          <p className="mt-1 font-semibold text-fs-text">
            {isLoading ? "Memuat..." : statusLabel[resolvedStatus]}
          </p>
        </div>
        <div className="rounded-lg border border-fs-border bg-fs-surface-soft p-2.5">
          <p className="text-fs-text-muted">Progres</p>
          <p className="mt-1 font-semibold text-fs-text">
            {isLoading ? "Memuat..." : `${resolvedProgressPercent}%`}
          </p>
        </div>
      </div>

      <ProgressBar
        value={resolvedProgressPercent}
        className="mt-4"
        isLoading={isLoading}
        tone={resolvedStatus === "completed" ? "success" : "primary"}
      />

      <div className="mt-4 flex flex-wrap gap-2">
        {lesson.skillTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-fs-border bg-fs-surface-soft px-2 py-1 text-xs text-fs-text-soft"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
