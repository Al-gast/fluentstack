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
}: LessonCardProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const lessonMetrics = calculateLessonProgress(lesson, userProgress.completedBlockIds);
  const resolvedProgressPercent = progressPercent ?? lessonMetrics.progressPercent;
  const resolvedStatus = status ?? getProgressStatus(resolvedProgressPercent);

  return (
    <Link
      href={`/lesson/${lesson.slug}`}
      className="group block rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 transition hover:border-cyan-300/40 hover:bg-zinc-900"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-base font-bold text-zinc-100 sm:text-lg">{lesson.title}</h3>
        <span className="w-fit rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-2 py-1 text-xs text-zinc-300">
          {lesson.level}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-zinc-300">{lesson.description}</p>

      <div className="mt-4 grid gap-2 text-xs min-[420px]:grid-cols-3 sm:text-sm">
        <div className="rounded-lg border border-zinc-700/80 bg-zinc-950/60 p-2.5">
          <p className="text-zinc-400">Estimasi</p>
          <p className="mt-1 font-semibold text-zinc-100">{lesson.estimatedMinutes} menit</p>
        </div>
        <div className="rounded-lg border border-zinc-700/80 bg-zinc-950/60 p-2.5">
          <p className="text-zinc-400">Status</p>
          <p className="mt-1 font-semibold text-zinc-100">
            {isLoading ? "Memuat..." : statusLabel[resolvedStatus]}
          </p>
        </div>
        <div className="rounded-lg border border-zinc-700/80 bg-zinc-950/60 p-2.5">
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
            className="rounded-md border border-zinc-700 bg-zinc-800/70 px-2 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
