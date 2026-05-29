"use client";

import Link from "next/link";
import type { Lesson, Module } from "@/types/learning";
import { useGuestProgress } from "@/hooks/use-progress";
import { calculateLessonsProgress } from "@/lib/progress/progress-calculator";
import { ProgressBar } from "@/components/progress/progress-bar";

type ModuleCardProps = {
  trackSlug: string;
  module: Module;
  moduleLessons: Lesson[];
  progressPercent?: number;
};

export function ModuleCard({
  trackSlug,
  module,
  moduleLessons,
  progressPercent,
}: ModuleCardProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const moduleMetrics = calculateLessonsProgress(moduleLessons, userProgress.completedBlockIds);
  const resolvedProgressPercent = progressPercent ?? moduleMetrics.progressPercent;

  return (
    <Link
      href={`/learn/${trackSlug}/${module.slug}`}
      className="group block rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-6 transition hover:border-cyan-300/40 hover:bg-zinc-900"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-lg font-bold text-zinc-100">{module.title}</h3>
        <span className="w-fit rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-300">
          {module.estimatedHours} jam
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-300">{module.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {module.skillTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-zinc-700 bg-zinc-800/70 px-2 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-1 text-sm text-zinc-300 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
        <span>{moduleLessons.length} lesson</span>
        <span>{isLoading ? "Progres memuat..." : `Progres ${resolvedProgressPercent}%`}</span>
      </div>
      <ProgressBar
        value={resolvedProgressPercent}
        className="mt-3"
        isLoading={isLoading}
        tone={moduleMetrics.isCompleted ? "success" : "primary"}
      />
    </Link>
  );
}
