"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { TrackCard } from "@/components/learning/track-card";
import { ProgressBar } from "@/components/progress/progress-bar";
import { curriculumLevelsByTrackId } from "@/content/curriculum-levels";
import { tracks } from "@/content/tracks";
import { useGuestProgress } from "@/hooks/use-progress";
import { getTrackBySlug } from "@/lib/content/get-track";
import { getOrderedModuleLessons, getOrderedTrackLessons, getOrderedTrackModules } from "@/lib/content/learning-path";
import {
  calculateLessonProgress,
  calculateLessonsProgress,
  getContinueLessonProgress,
  getProgressStatus,
  type ProgressStatus,
} from "@/lib/progress/progress-calculator";
import type { CodingPracticeBlock, Lesson, LessonBlock, Module } from "@/types/learning";

const statusLabel: Record<ProgressStatus, string> = {
  "not-started": "Belum mulai",
  "in-progress": "Sedang berjalan",
  completed: "Selesai",
};

function getStorageCopy(storageMode: "guest" | "logged-in") {
  return storageMode === "logged-in"
    ? "Progres tersimpan di akun kamu."
    : "Progres tersimpan di browser ini.";
}

function isAssessmentLesson(lesson: Lesson, index: number, lessonCount: number): boolean {
  return (
    lesson.title.toLowerCase().includes("uji kompetensi") ||
    lesson.slug.includes("assessment") ||
    lesson.id.includes("assessment") ||
    (index === lessonCount - 1 && lesson.blocks.some((block) => block.type === "quiz"))
  );
}

function getLessonAssessment(moduleLessons: Lesson[]): Lesson | undefined {
  return moduleLessons.find((lesson, index) => isAssessmentLesson(lesson, index, moduleLessons.length));
}

function getCurrentLevel(trackId: string, moduleId?: string) {
  return curriculumLevelsByTrackId[trackId]?.find((level) =>
    moduleId ? level.moduleIds.includes(moduleId) : false,
  );
}

function isCodingPracticeBlock(block: LessonBlock): block is CodingPracticeBlock {
  return block.type === "coding-practice";
}

function getIncompletePracticeItems(moduleLessons: Lesson[], completedBlockIds: string[]) {
  const completedSet = new Set(completedBlockIds);

  return moduleLessons
    .flatMap((lesson) =>
      lesson.blocks
        .filter((block): block is CodingPracticeBlock => isCodingPracticeBlock(block) && !completedSet.has(block.id))
        .map((block) => ({
          lesson,
          block,
        })),
    )
    .slice(0, 3);
}

function getModuleForLesson(moduleList: Module[], lesson?: Lesson): Module | undefined {
  if (!lesson) {
    return undefined;
  }

  return moduleList.find((moduleItem) => moduleItem.id === lesson.moduleId);
}

export default function DashboardPage() {
  const { userProgress, storageMode, isLoading } = useGuestProgress();
  const activeTrack = getTrackBySlug("frontend-engineering");
  const activeTrackModules = activeTrack ? getOrderedTrackModules(activeTrack) : [];
  const activeTrackLessons = activeTrack ? getOrderedTrackLessons(activeTrack) : [];
  const firstLesson = activeTrackLessons[0];
  const hasProgress =
    userProgress.completedBlockIds.length > 0 ||
    userProgress.completedLessonIds.length > 0 ||
    userProgress.totalXp > 0;

  const continueProgress = getContinueLessonProgress(activeTrackLessons, userProgress.completedBlockIds);
  const continueLesson = continueProgress?.lesson ?? firstLesson;
  const continueTrack = activeTrack;
  const continueModule = getModuleForLesson(activeTrackModules, continueLesson);
  const continueModuleLessons = continueModule ? getOrderedModuleLessons(continueModule) : [];
  const continueMetrics = continueLesson
    ? calculateLessonProgress(continueLesson, userProgress.completedBlockIds)
    : null;
  const continueStatus = continueProgress?.status ?? "not-started";
  const continueModuleMetrics = calculateLessonsProgress(continueModuleLessons, userProgress.completedBlockIds);
  const activeTrackMetrics = calculateLessonsProgress(activeTrackLessons, userProgress.completedBlockIds);
  const currentLevel = getCurrentLevel(activeTrack?.id ?? "", continueModule?.id);
  const currentLevelModules = currentLevel
    ? activeTrackModules.filter((moduleItem) => currentLevel.moduleIds.includes(moduleItem.id))
    : [];
  const currentLevelLessons = currentLevelModules.flatMap((moduleItem) => getOrderedModuleLessons(moduleItem));
  const currentLevelMetrics = calculateLessonsProgress(currentLevelLessons, userProgress.completedBlockIds);
  const completedLevelModuleCount = currentLevelModules.filter((moduleItem) =>
    calculateLessonsProgress(getOrderedModuleLessons(moduleItem), userProgress.completedBlockIds).isCompleted,
  ).length;
  const assessmentLesson = getLessonAssessment(continueModuleLessons);
  const assessmentMetrics = assessmentLesson
    ? calculateLessonProgress(assessmentLesson, userProgress.completedBlockIds)
    : null;
  const assessmentStatus = assessmentMetrics
    ? getProgressStatus(assessmentMetrics.progressPercent)
    : "not-started";
  const incompletePracticeItems = getIncompletePracticeItems(
    continueModuleLessons,
    userProgress.completedBlockIds,
  );

  return (
    <AppShell title="Dashboard">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-cyan-300/20 bg-cyan-500/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-8">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-cyan-200">
                {hasProgress ? "Lanjutkan belajar" : "Mulai belajar"}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-zinc-50 sm:text-4xl">
                {isLoading ? "Memuat rekomendasi..." : continueLesson?.title ?? "Mulai dari Web Foundations"}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
                {isLoading
                  ? "Memuat progres belajar kamu..."
                  : hasProgress
                    ? `${getStorageCopy(storageMode)} Lanjutkan lesson yang paling dekat dengan progres kamu.`
                    : "Mulai dari Web Foundations untuk memahami cara kerja web sebelum masuk HTML dan CSS."}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-300">
                {continueTrack ? (
                  <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5">
                    {continueTrack.title}
                  </span>
                ) : null}
                {currentLevel ? (
                  <span className="rounded-lg border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 text-cyan-100">
                    Level {currentLevel.level} · {currentLevel.title}
                  </span>
                ) : null}
                {continueModule ? (
                  <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5">
                    {continueModule.title}
                  </span>
                ) : null}
                <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5">
                  Track {isLoading ? "memuat..." : `${activeTrackMetrics.progressPercent}%`}
                </span>
              </div>
            </div>

            <aside className="w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 xl:w-[420px]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5 text-xs font-semibold text-zinc-300">
                  {isLoading ? "Memuat..." : statusLabel[continueStatus]}
                </span>
                <span className="text-xs text-zinc-400">
                  {continueLesson ? `${continueLesson.estimatedMinutes} menit` : "Lesson pertama"}
                </span>
              </div>

              <ProgressBar
                value={continueMetrics?.progressPercent ?? 0}
                label="Progres lesson"
                className="mt-4"
                isLoading={isLoading}
                tone={continueMetrics?.isCompleted ? "success" : "primary"}
              />
              <p className="mt-3 text-xs text-zinc-400">
                {isLoading
                  ? "Progres sedang dimuat."
                  : `${continueMetrics?.completedRequiredCount ?? 0}/${continueMetrics?.totalRequiredCount ?? 0} blok wajib selesai.`}
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                {continueLesson ? (
                  <Link
                    href={`/lesson/${continueLesson.slug}`}
                    className="inline-flex justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  >
                    {hasProgress ? "Lanjutkan lesson" : "Mulai belajar"}
                  </Link>
                ) : null}
                {continueTrack && continueModule ? (
                  <Link
                    href={`/learn/${continueTrack.slug}/${continueModule.slug}`}
                    className="inline-flex justify-center rounded-xl border border-zinc-700/80 bg-zinc-950/55 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                  >
                    Lihat module
                  </Link>
                ) : null}
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-3">
          {currentLevel ? (
            <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="text-sm font-semibold text-cyan-200">Current level</p>
              <h2 className="mt-2 text-xl font-bold text-zinc-100">
                Level {currentLevel.level} · {currentLevel.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{currentLevel.description}</p>
              <ProgressBar
                value={currentLevelMetrics.progressPercent}
                className="mt-4"
                isLoading={isLoading}
                tone={currentLevelMetrics.isCompleted ? "success" : "primary"}
              />
              <p className="mt-3 text-xs text-zinc-400">
                {isLoading
                  ? "Memuat progres level..."
                  : `${currentLevelMetrics.completedLessonCount}/${currentLevelMetrics.totalLessonCount} lesson selesai · ${completedLevelModuleCount}/${currentLevelModules.length} module selesai`}
              </p>
            </article>
          ) : null}

          {continueModule ? (
            <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="text-sm font-semibold text-cyan-200">Current module</p>
              <h2 className="mt-2 text-xl font-bold text-zinc-100">{continueModule.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{continueModule.description}</p>
              <ProgressBar
                value={continueModuleMetrics.progressPercent}
                className="mt-4"
                isLoading={isLoading}
                tone={continueModuleMetrics.isCompleted ? "success" : "primary"}
              />
              <p className="mt-3 text-xs text-zinc-400">
                {isLoading
                  ? "Memuat progres module..."
                  : `${continueModuleMetrics.completedLessonCount}/${continueModuleMetrics.totalLessonCount} lesson selesai · ${continueModuleMetrics.progressPercent}%`}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/learn/${continueTrack?.slug}/${continueModule.slug}`}
                  className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                >
                  Buka module
                </Link>
                {continueLesson ? (
                  <Link
                    href={`/lesson/${continueLesson.slug}`}
                    className="rounded-lg border border-cyan-300/35 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/35"
                  >
                    Lanjutkan lesson
                  </Link>
                ) : null}
              </div>
            </article>
          ) : null}

          {assessmentLesson ? (
            <article className="rounded-2xl border border-cyan-300/25 bg-cyan-500/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="text-sm font-semibold text-cyan-100">Next checkpoint</p>
              <h2 className="mt-2 text-xl font-bold text-zinc-100">{assessmentLesson.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Kerjakan Uji Kompetensi saat lesson di module ini sudah cukup aman.
              </p>
              <span className="mt-4 inline-flex rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5 text-xs font-semibold text-zinc-300">
                {isLoading ? "Memuat..." : statusLabel[assessmentStatus]}
              </span>
              <ProgressBar
                value={assessmentMetrics?.progressPercent ?? 0}
                className="mt-4"
                isLoading={isLoading}
                tone={assessmentMetrics?.isCompleted ? "success" : "primary"}
              />
              <Link
                href={`/lesson/${assessmentLesson.slug}`}
                className="mt-4 inline-flex rounded-lg border border-cyan-300/35 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/35"
              >
                Buka checkpoint
              </Link>
            </article>
          ) : null}
        </section>

        {incompletePracticeItems.length > 0 ? (
          <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-200">Practice yang perlu perhatian</p>
                <h2 className="mt-2 text-xl font-bold text-zinc-100">Latihan di module aktif</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-zinc-400">
                Daftar ini hanya memakai coding-practice yang belum selesai di module yang sedang direkomendasikan.
              </p>
            </div>
            <div className="mt-4 grid gap-3 lg:grid-cols-3">
              {incompletePracticeItems.map(({ lesson, block }) => (
                <article
                  key={`${lesson.id}-${block.id}`}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4"
                >
                  <p className="text-xs font-semibold text-zinc-400">Coding practice</p>
                  <h3 className="mt-2 text-base font-bold text-zinc-100">{lesson.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={`/lesson/${lesson.slug}`}
                      className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                    >
                      Buka lesson
                    </Link>
                    <Link
                      href={`/practice/${block.challengeId}`}
                      className="rounded-lg border border-cyan-300/35 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/35"
                    >
                      Buka practice
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-100">Track aktif</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {tracks.map((track) => {
              const trackModules = getOrderedTrackModules(track);
              const trackLessons = getOrderedTrackLessons(track);

              return (
              <TrackCard
                key={track.id}
                track={track}
                moduleCount={trackModules.length}
                lessonCount={trackLessons.length}
                trackLessons={trackLessons}
              />
              );
            })}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
