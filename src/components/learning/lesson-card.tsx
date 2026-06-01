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
      className="group block rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:border-cyan-300/40 hover:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
    >
      {orderNumber ? (
        <p className="mb-3 text-sm font-medium text-cyan-200">Lesson {orderNumber}</p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-base font-bold text-zinc-100 sm:text-lg">{lesson.title}</h3>
        <span className="w-fit rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-2 py-1 text-xs text-zinc-300">
          {lesson.level}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-zinc-300">{lesson.description}</p>

      {shouldRecommendPreviousLesson ? (
        <p className="mt-3 rounded-lg border border-amber-300/20 bg-amber-400/[0.06] px-3 py-2 text-xs leading-5 text-amber-100">
          Disarankan selesaikan lesson sebelumnya dulu.
        </p>
      ) : null}

      <div className="mt-4 grid gap-2 text-xs min-[420px]:grid-cols-3 sm:text-sm">
        <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 p-2.5">
          <p className="text-zinc-400">Estimasi</p>
          <p className="mt-1 font-semibold text-zinc-100">{lesson.estimatedMinutes} menit</p>
        </div>
        <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 p-2.5">
          <p className="text-zinc-400">Status</p>
          <p className="mt-1 font-semibold text-zinc-100">
            {isLoading ? "Memuat..." : statusLabel[resolvedStatus]}
          </p>
        </div>
        <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 p-2.5">
          <p className="text-zinc-400">Progres</p>
          <p className="mt-1 font-semibold text-zinc-100">
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
            className="rounded-md border border-zinc-800/80 bg-zinc-950/55 px-2 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
