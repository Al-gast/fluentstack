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
      className="group block rounded-2xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)] transition hover:border-fs-border-strong hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-xl font-bold text-fs-text">{track.title}</h3>
        <span className="w-fit rounded-lg border border-fs-border bg-fs-surface-soft px-2.5 py-1 text-xs text-fs-text-soft">
          {track.level}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-fs-text-soft">{track.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {track.skillTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-fs-border bg-fs-surface-soft px-2 py-1 text-xs text-fs-text-soft"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 text-sm min-[420px]:grid-cols-3">
        <div className="rounded-xl border border-fs-border bg-fs-surface-soft p-3">
          <p className="text-fs-text-muted">Module</p>
          <p className="mt-1 font-semibold text-fs-text">{moduleCount}</p>
        </div>
        <div className="rounded-xl border border-fs-border bg-fs-surface-soft p-3">
          <p className="text-fs-text-muted">Lesson</p>
          <p className="mt-1 font-semibold text-fs-text">{lessonCount}</p>
        </div>
        <div className="rounded-xl border border-fs-border bg-fs-surface-soft p-3">
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
        tone={trackMetrics.isCompleted ? "success" : "primary"}
      />
    </Link>
  );
}
