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
  orderNumber?: number;
};

export function ModuleCard({
  trackSlug,
  module,
  moduleLessons,
  progressPercent,
  orderNumber,
}: ModuleCardProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const moduleMetrics = calculateLessonsProgress(moduleLessons, userProgress.completedBlockIds);
  const resolvedProgressPercent = progressPercent ?? moduleMetrics.progressPercent;

  return (
    <Link
      href={`/learn/${trackSlug}/${module.slug}`}
      className="group block rounded-2xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)] transition hover:border-fs-border-strong hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
    >
      {orderNumber ? (
        <p className="mb-3 text-sm font-medium text-fs-accent">Module {orderNumber}</p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-lg font-bold text-fs-text">{module.title}</h3>
        <span className="w-fit rounded-lg border border-fs-border bg-fs-surface-soft px-2.5 py-1 text-xs text-fs-text-soft">
          {module.estimatedHours} jam
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-fs-text-soft">{module.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {module.skillTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-fs-border bg-fs-surface-soft px-2 py-1 text-xs text-fs-text-soft"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-1 text-sm text-fs-text-soft min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
        <span>{moduleLessons.length} lesson</span>
        <span>{isLoading ? "Memuat progres..." : `Progres ${resolvedProgressPercent}%`}</span>
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
