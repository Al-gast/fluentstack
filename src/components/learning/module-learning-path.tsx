"use client";

import Link from "next/link";
import { ProgressBar } from "@/components/progress/progress-bar";
import { curriculumStageLabels, type CurriculumLevel } from "@/content/curriculum-levels";
import { useGuestProgress } from "@/hooks/use-progress";
import {
  calculateLessonProgress,
  calculateLessonsProgress,
  getContinueLessonProgress,
  getProgressStatus,
  type ProgressStatus,
} from "@/lib/progress/progress-calculator";
import { cn } from "@/lib/utils";
import type { Lesson, Module, Track } from "@/types/learning";

type ModuleLearningPathProps = {
  track: Track;
  module: Module;
  moduleLessons: Lesson[];
  previousModule?: Module;
  nextModule?: Module;
  curriculumLevel?: CurriculumLevel;
};

const statusLabel: Record<ProgressStatus, string> = {
  "not-started": "Belum mulai",
  "in-progress": "Sedang berjalan",
  completed: "Selesai",
};

function isAssessmentLesson(lesson: Lesson, index: number, lessonCount: number): boolean {
  return (
    lesson.title.toLowerCase().includes("uji kompetensi") ||
    lesson.slug.includes("assessment") ||
    lesson.id.includes("assessment") ||
    (index === lessonCount - 1 && lesson.blocks.some((block) => block.type === "quiz"))
  );
}

function getLessonTypeLabel(lesson: Lesson, index: number, lessonCount: number): string {
  if (isAssessmentLesson(lesson, index, lessonCount)) {
    return "Uji Kompetensi";
  }

  if (lesson.blocks.some((block) => block.type === "coding-practice")) {
    return "Practice lesson";
  }

  return "Lesson";
}

function getModuleOutcomes(moduleItem: Module, moduleLessons: Lesson[]): string[] {
  const objectiveOutcomes = moduleLessons
    .flatMap((lesson) => lesson.objectives)
    .filter((objective, index, list) => list.indexOf(objective) === index)
    .slice(0, 5);

  if (objectiveOutcomes.length >= 3) {
    return objectiveOutcomes;
  }

  return [
    moduleItem.description,
    ...moduleLessons.slice(0, 4).map((lesson) => `Menyelesaikan ${lesson.title}.`),
  ].slice(0, 5);
}

function getCtaLabel(progressPercent: number, isCompleted: boolean): string {
  if (isCompleted) {
    return "Review module";
  }

  if (progressPercent > 0) {
    return "Lanjutkan module";
  }

  return "Mulai module";
}

export function ModuleLearningPath({
  track,
  module,
  moduleLessons,
  previousModule,
  nextModule,
  curriculumLevel,
}: ModuleLearningPathProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const moduleMetrics = calculateLessonsProgress(moduleLessons, userProgress.completedBlockIds);
  const continueTarget = getContinueLessonProgress(moduleLessons, userProgress.completedBlockIds);
  const firstLesson = moduleLessons[0];
  const assessmentLesson = moduleLessons.find((lesson, index) =>
    isAssessmentLesson(lesson, index, moduleLessons.length),
  );
  const ctaTarget = moduleMetrics.isCompleted ? firstLesson : continueTarget?.lesson ?? firstLesson;
  const ctaLabel = getCtaLabel(moduleMetrics.progressPercent, moduleMetrics.isCompleted);
  const outcomes = getModuleOutcomes(module, moduleLessons);

  return (
    <div className="mx-auto max-w-[1440px] space-y-8">
      <section className="rounded-3xl border border-zinc-800/80 bg-zinc-950/45 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link
                href={`/learn/${track.slug}`}
                className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5 font-semibold text-zinc-200 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
              >
                {track.title}
              </Link>
              {curriculumLevel ? (
                <span className="rounded-lg border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 font-semibold text-cyan-100">
                  {curriculumStageLabels[curriculumLevel.stage]} · Level {curriculumLevel.level} ·{" "}
                  {curriculumLevel.title}
                </span>
              ) : null}
            </div>

            <h1 className="mt-4 text-3xl font-bold text-zinc-50 sm:text-4xl">{module.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{module.description}</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
              Ikuti lesson dari atas ke bawah agar konsepnya nyambung. Kamu tetap bisa membuka lesson mana pun untuk review.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {previousModule ? (
                <Link
                  href={`/learn/${track.slug}/${previousModule.slug}`}
                  className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                >
                  Sebelumnya: {previousModule.title}
                </Link>
              ) : null}
              {nextModule ? (
                <Link
                  href={`/learn/${track.slug}/${nextModule.slug}`}
                  className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                >
                  Setelah ini: {nextModule.title}
                </Link>
              ) : null}
            </div>
          </div>

          <aside className="w-full rounded-2xl border border-cyan-300/20 bg-cyan-500/[0.04] p-5 xl:w-[420px]">
            <div className="grid gap-3 min-[420px]:grid-cols-3">
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3">
                <p className="text-xs text-zinc-400">Estimasi</p>
                <p className="mt-1 font-semibold text-zinc-100">{module.estimatedHours} jam</p>
              </div>
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3">
                <p className="text-xs text-zinc-400">Lesson</p>
                <p className="mt-1 font-semibold text-zinc-100">{moduleLessons.length}</p>
              </div>
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3">
                <p className="text-xs text-zinc-400">Progres</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  {isLoading ? "Memuat..." : `${moduleMetrics.progressPercent}%`}
                </p>
              </div>
            </div>

            <ProgressBar
              value={moduleMetrics.progressPercent}
              className="mt-4"
              isLoading={isLoading}
              tone={moduleMetrics.isCompleted ? "success" : "primary"}
            />
            <p className="mt-2 text-xs text-zinc-400">
              {isLoading
                ? "Memuat progres module..."
                : `${moduleMetrics.completedLessonCount}/${moduleMetrics.totalLessonCount} lesson selesai`}
            </p>

            {ctaTarget ? (
              <Link
                href={`/lesson/${ctaTarget.slug}`}
                className="mt-5 inline-flex w-full justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
              >
                {isLoading ? "Menyiapkan..." : ctaLabel}
              </Link>
            ) : null}
          </aside>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="space-y-4">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <h2 className="text-xl font-bold text-zinc-100">Learning path module</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Lesson disusun sebagai jalur belajar. Uji Kompetensi di akhir menjadi checkpoint sebelum lanjut module berikutnya.
            </p>
          </div>

          <div className="space-y-3">
            {moduleLessons.map((lesson, index) => {
              const lessonMetrics = calculateLessonProgress(lesson, userProgress.completedBlockIds);
              const status = getProgressStatus(lessonMetrics.progressPercent);
              const isAssessment = isAssessmentLesson(lesson, index, moduleLessons.length);
              const typeLabel = getLessonTypeLabel(lesson, index, moduleLessons.length);

              return (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.slug}`}
                  className={cn(
                    "group block rounded-2xl border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition focus:outline-none focus:ring-2",
                    isAssessment
                      ? "border-cyan-300/35 bg-cyan-500/[0.06] hover:border-cyan-200/60 focus:ring-cyan-300/35"
                      : "border-zinc-800/80 bg-zinc-950/45 hover:border-cyan-300/35 hover:bg-zinc-900/80 focus:ring-cyan-300/30",
                  )}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/60 px-3 py-1 text-xs font-semibold text-zinc-300">
                          Lesson {index + 1}
                        </span>
                        <span
                          className={cn(
                            "rounded-lg border px-3 py-1 text-xs font-semibold",
                            isAssessment
                              ? "border-cyan-300/30 bg-cyan-500/10 text-cyan-100"
                              : "border-zinc-700/80 bg-zinc-950/55 text-zinc-300",
                          )}
                        >
                          {typeLabel}
                        </span>
                        {isAssessment ? (
                          <span className="rounded-lg border border-amber-300/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-100">
                            Checkpoint akhir module
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-zinc-100 group-hover:text-cyan-100">
                        {lesson.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-300">{lesson.description}</p>
                    </div>

                    <div className="shrink-0 space-y-2 md:w-[220px]">
                      <div className="flex items-center justify-between gap-3 text-xs text-zinc-400">
                        <span>{lesson.estimatedMinutes} menit</span>
                        <span>{isLoading ? "Memuat..." : statusLabel[status]}</span>
                      </div>
                      <ProgressBar
                        value={lessonMetrics.progressPercent}
                        isLoading={isLoading}
                        tone={lessonMetrics.isCompleted ? "success" : "primary"}
                      />
                      <span className="inline-flex rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition group-hover:bg-zinc-800">
                        Buka lesson
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <aside className="space-y-4">
          <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <h2 className="text-lg font-bold text-zinc-100">Di module ini kamu akan belajar</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
              {outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>

          {assessmentLesson ? (
            <section className="rounded-2xl border border-cyan-300/25 bg-cyan-500/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="text-sm font-semibold text-cyan-100">Checkpoint module</p>
              <h2 className="mt-2 text-lg font-bold text-zinc-100">{assessmentLesson.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Selesaikan semua lesson lalu kerjakan Uji Kompetensi untuk menutup module ini.
              </p>
              <Link
                href={`/lesson/${assessmentLesson.slug}`}
                className="mt-4 inline-flex rounded-lg border border-cyan-300/35 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/35"
              >
                Buka checkpoint
              </Link>
            </section>
          ) : null}

          <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <h2 className="text-lg font-bold text-zinc-100">Setelah ini</h2>
            {nextModule ? (
              <>
                <p className="mt-2 text-sm font-semibold text-cyan-100">{nextModule.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{nextModule.description}</p>
                <Link
                  href={`/learn/${track.slug}/${nextModule.slug}`}
                  className="mt-4 inline-flex rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                >
                  Lihat module berikutnya
                </Link>
              </>
            ) : (
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Module aktif terakhir saat ini. Berikutnya direncanakan masuk ke JavaScript Fundamentals.
              </p>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}
