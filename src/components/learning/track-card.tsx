"use client";

import Link from "next/link";
import type { Lesson, Track } from "@/types/learning";
import { useGuestProgress } from "@/hooks/use-progress";
import { calculateLessonsProgress } from "@/lib/progress/progress-calculator";
import { ProgressBar } from "@/components/progress/progress-bar";

type TrackCardProps = {
  track: Track;
  moduleCount: number;
  lessonCount: number;
  trackLessons: Lesson[];
  progressPercent?: number;
};

export function TrackCard({
  track,
  moduleCount,
  lessonCount,
  trackLessons,
  progressPercent,
}: TrackCardProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const trackMetrics = calculateLessonsProgress(trackLessons, userProgress.completedBlockIds);
  const resolvedProgressPercent = progressPercent ?? trackMetrics.progressPercent;

  return (
    <Link
      href={`/learn/${track.slug}`}
      className="group block rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-6 transition hover:border-cyan-300/40 hover:bg-zinc-900"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-xl font-bold text-zinc-100">{track.title}</h3>
        <span className="w-fit rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-300">
          {track.level}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-300">{track.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {track.skillTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-zinc-700 bg-zinc-800/70 px-2 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 text-sm min-[420px]:grid-cols-3">
        <div className="rounded-xl border border-zinc-700/80 bg-zinc-950/60 p-3">
          <p className="text-zinc-400">Module</p>
          <p className="mt-1 font-semibold text-zinc-100">{moduleCount}</p>
        </div>
        <div className="rounded-xl border border-zinc-700/80 bg-zinc-950/60 p-3">
          <p className="text-zinc-400">Lesson</p>
          <p className="mt-1 font-semibold text-zinc-100">{lessonCount}</p>
        </div>
        <div className="rounded-xl border border-zinc-700/80 bg-zinc-950/60 p-3">
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
        tone={trackMetrics.isCompleted ? "success" : "primary"}
      />
    </Link>
  );
}
