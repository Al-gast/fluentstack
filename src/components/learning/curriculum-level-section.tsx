"use client";

import { ModuleCard } from "@/components/learning/module-card";
import { ProgressBar } from "@/components/progress/progress-bar";
import { curriculumStageLabels, type CurriculumLevel } from "@/content/curriculum-levels";
import { useGuestProgress } from "@/hooks/use-progress";
import { getOrderedModuleLessons } from "@/lib/content/learning-path";
import { calculateLessonsProgress } from "@/lib/progress/progress-calculator";
import type { Module, Track } from "@/types/learning";

type CurriculumLevelSectionProps = {
  track: Track;
  level: CurriculumLevel;
  modules: Module[];
  startOrderNumber: number;
};

export function CurriculumLevelSection({
  track,
  level,
  modules,
  startOrderNumber,
}: CurriculumLevelSectionProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const levelLessons = modules.flatMap((moduleItem) => getOrderedModuleLessons(moduleItem));
  const levelMetrics = calculateLessonsProgress(levelLessons, userProgress.completedBlockIds);

  return (
    <section className="rounded-3xl border border-zinc-800/80 bg-zinc-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-cyan-200">
            {curriculumStageLabels[level.stage]} · Level {level.level}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-50">{level.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">{level.description}</p>
        </div>

        <div className="grid gap-2 text-sm min-[420px]:grid-cols-3 lg:w-[420px]">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-3">
            <p className="text-zinc-400">Module</p>
            <p className="mt-1 font-semibold text-zinc-100">{modules.length}</p>
          </div>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-3">
            <p className="text-zinc-400">Lesson</p>
            <p className="mt-1 font-semibold text-zinc-100">{levelLessons.length}</p>
          </div>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-3">
            <p className="text-zinc-400">Progres</p>
            <p className="mt-1 font-semibold text-zinc-100">
              {isLoading ? "Memuat..." : `${levelMetrics.progressPercent}%`}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <ProgressBar
          value={levelMetrics.progressPercent}
          isLoading={isLoading}
          tone={levelMetrics.isCompleted ? "success" : "primary"}
        />
        <p className="mt-2 text-xs text-zinc-400">
          {isLoading
            ? "Memuat progres level..."
            : `${levelMetrics.completedLessonCount}/${levelMetrics.totalLessonCount} lesson selesai`}
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {modules.map((moduleItem, index) => (
          <ModuleCard
            key={moduleItem.id}
            trackSlug={track.slug}
            module={moduleItem}
            moduleLessons={getOrderedModuleLessons(moduleItem)}
            orderNumber={startOrderNumber + index}
          />
        ))}
      </div>
    </section>
  );
}
