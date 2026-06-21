"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { TrackCard } from "@/components/learning/track-card";
import { ProgressBar } from "@/components/progress/progress-bar";
import { curriculumLevelsByTrackId } from "@/content/curriculum-levels";
import { tracks } from "@/content/tracks";
import { useGuestProgress } from "@/hooks/use-progress";
import { getOrderedModuleLessons, getOrderedTrackLessons, getOrderedTrackModules } from "@/lib/content/learning-path";
import {
  calculateLessonProgress,
  calculateLessonsProgress,
  getProgressStatus,
  type ProgressStatus,
} from "@/lib/progress/progress-calculator";
import {
  getModuleForLesson,
  getTrackProgressSummaries,
  selectActiveTrackSummary,
} from "@/lib/progress/track-progress";
import type { CodingPracticeBlock, Lesson, LessonBlock } from "@/types/learning";

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

export default function DashboardPage() {
  const { userProgress, storageMode, isLoading } = useGuestProgress();
  const trackSummaries = getTrackProgressSummaries(userProgress.completedBlockIds);
  const activeTrackSummary = selectActiveTrackSummary(trackSummaries);
  const activeTrack = activeTrackSummary?.track;
  const activeTrackModules = activeTrackSummary?.modules ?? [];
  const activeTrackLessons = activeTrackSummary?.lessons ?? [];
  const firstLesson = activeTrackLessons[0];
  const hasProgress =
    userProgress.completedBlockIds.length > 0 ||
    userProgress.completedLessonIds.length > 0 ||
    userProgress.totalXp > 0;

  const continueProgress = activeTrackSummary?.continueProgress ?? null;
  const continueLesson = continueProgress?.lesson ?? firstLesson;
  const continueTrack = activeTrack;
  const continueModule = getModuleForLesson(activeTrackModules, continueLesson);
  const continueModuleLessons = continueModule ? getOrderedModuleLessons(continueModule) : [];
  const continueMetrics = continueLesson
    ? calculateLessonProgress(continueLesson, userProgress.completedBlockIds)
    : null;
  const continueStatus = continueProgress?.status ?? "not-started";
  const continueModuleMetrics = calculateLessonsProgress(continueModuleLessons, userProgress.completedBlockIds);
  const activeTrackMetrics =
    activeTrackSummary?.metrics ?? calculateLessonsProgress(activeTrackLessons, userProgress.completedBlockIds);
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
        <section className="rounded-3xl border border-fs-border-strong bg-fs-accent-soft p-6 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-8">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-fs-accent">
                {hasProgress ? "Lanjutkan belajar" : "Mulai belajar"}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-fs-text sm:text-4xl">
                {isLoading ? "Memuat rekomendasi..." : continueLesson?.title ?? "Mulai dari Web Foundations"}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-fs-text-soft">
                {isLoading
                  ? "Memuat progres belajar kamu..."
                  : hasProgress
                    ? `${getStorageCopy(storageMode)} Lanjutkan lesson yang paling dekat dengan progres kamu.`
                    : "Mulai dari Web Foundations untuk memahami cara kerja web sebelum masuk HTML dan CSS."}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-fs-text-soft">
                {continueTrack ? (
                  <span className="rounded-lg border border-fs-border bg-fs-surface px-3 py-1.5">
                    {continueTrack.title}
                  </span>
                ) : null}
                {currentLevel ? (
                  <span className="rounded-lg border border-fs-border-strong bg-fs-accent-soft px-3 py-1.5 text-fs-accent">
                    Level {currentLevel.level} · {currentLevel.title}
                  </span>
                ) : null}
                {continueModule ? (
                  <span className="rounded-lg border border-fs-border bg-fs-surface px-3 py-1.5">
                    {continueModule.title}
                  </span>
                ) : null}
                <span className="rounded-lg border border-fs-border bg-fs-surface px-3 py-1.5">
                  Track {isLoading ? "memuat..." : `${activeTrackMetrics.progressPercent}%`}
                </span>
              </div>
            </div>

            <aside className="w-full rounded-2xl border border-fs-border bg-fs-surface p-5 xl:w-[420px]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-lg border border-fs-border bg-fs-surface-soft px-3 py-1.5 text-xs font-semibold text-fs-text-soft">
                  {isLoading ? "Memuat..." : statusLabel[continueStatus]}
                </span>
                <span className="text-xs text-fs-text-muted">
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
              <p className="mt-3 text-xs text-fs-text-muted">
                {isLoading
                  ? "Progres sedang dimuat."
                  : `${continueMetrics?.completedRequiredCount ?? 0}/${continueMetrics?.totalRequiredCount ?? 0} blok wajib selesai.`}
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                {continueLesson ? (
                  <Link
                    href={`/lesson/${continueLesson.slug}`}
                    className="inline-flex justify-center rounded-xl bg-fs-accent px-4 py-2.5 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
                  >
                    {hasProgress ? "Lanjutkan lesson" : "Mulai belajar"}
                  </Link>
                ) : null}
                {continueTrack && continueModule ? (
                  <Link
                    href={`/learn/${continueTrack.slug}/${continueModule.slug}`}
                    className="inline-flex justify-center rounded-xl border border-fs-border bg-fs-surface-soft px-4 py-2.5 text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
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
            <article className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)]">
              <p className="text-sm font-semibold text-fs-accent">Current level</p>
              <h2 className="mt-2 text-xl font-bold text-fs-text">
                Level {currentLevel.level} · {currentLevel.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">{currentLevel.description}</p>
              <ProgressBar
                value={currentLevelMetrics.progressPercent}
                className="mt-4"
                isLoading={isLoading}
                tone={currentLevelMetrics.isCompleted ? "success" : "primary"}
              />
              <p className="mt-3 text-xs text-fs-text-muted">
                {isLoading
                  ? "Memuat progres level..."
                  : `${currentLevelMetrics.completedLessonCount}/${currentLevelMetrics.totalLessonCount} lesson selesai · ${completedLevelModuleCount}/${currentLevelModules.length} module selesai`}
              </p>
            </article>
          ) : null}

          {continueModule ? (
            <article className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)]">
              <p className="text-sm font-semibold text-fs-accent">Current module</p>
              <h2 className="mt-2 text-xl font-bold text-fs-text">{continueModule.title}</h2>
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">{continueModule.description}</p>
              <ProgressBar
                value={continueModuleMetrics.progressPercent}
                className="mt-4"
                isLoading={isLoading}
                tone={continueModuleMetrics.isCompleted ? "success" : "primary"}
              />
              <p className="mt-3 text-xs text-fs-text-muted">
                {isLoading
                  ? "Memuat progres module..."
                  : `${continueModuleMetrics.completedLessonCount}/${continueModuleMetrics.totalLessonCount} lesson selesai · ${continueModuleMetrics.progressPercent}%`}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/learn/${continueTrack?.slug}/${continueModule.slug}`}
                  className="rounded-lg border border-fs-border bg-fs-surface-soft px-3 py-2 text-xs font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
                >
                  Buka module
                </Link>
                {continueLesson ? (
                  <Link
                    href={`/lesson/${continueLesson.slug}`}
                    className="rounded-lg border border-fs-border-strong bg-fs-accent-soft px-3 py-2 text-xs font-semibold text-fs-accent transition hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/35"
                  >
                    Lanjutkan lesson
                  </Link>
                ) : null}
              </div>
            </article>
          ) : null}

          {assessmentLesson ? (
            <article className="rounded-2xl border border-fs-border-strong bg-fs-accent-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)]">
              <p className="text-sm font-semibold text-fs-accent">Next checkpoint</p>
              <h2 className="mt-2 text-xl font-bold text-fs-text">{assessmentLesson.title}</h2>
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">
                Kerjakan Uji Kompetensi saat lesson di module ini sudah cukup aman.
              </p>
              <span className="mt-4 inline-flex rounded-lg border border-fs-border bg-fs-surface px-3 py-1.5 text-xs font-semibold text-fs-text-soft">
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
                className="mt-4 inline-flex rounded-lg border border-fs-border-strong bg-fs-accent-soft px-3 py-2 text-xs font-semibold text-fs-accent transition hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/35"
              >
                Buka checkpoint
              </Link>
            </article>
          ) : null}
        </section>

        {incompletePracticeItems.length > 0 ? (
          <section className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-fs-accent">Practice yang perlu perhatian</p>
                <h2 className="mt-2 text-xl font-bold text-fs-text">Latihan di module aktif</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-fs-text-muted">
                Daftar ini hanya memakai coding-practice yang belum selesai di module yang sedang direkomendasikan.
              </p>
            </div>
            <div className="mt-4 grid gap-3 lg:grid-cols-3">
              {incompletePracticeItems.map(({ lesson, block }) => (
                <article
                  key={`${lesson.id}-${block.id}`}
                  className="rounded-xl border border-fs-border bg-fs-surface-soft p-4"
                >
                  <p className="text-xs font-semibold text-fs-text-muted">Coding practice</p>
                  <h3 className="mt-2 text-base font-bold text-fs-text">{lesson.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={`/lesson/${lesson.slug}`}
                      className="rounded-lg border border-fs-border bg-fs-surface px-3 py-2 text-xs font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
                    >
                      Buka lesson
                    </Link>
                    <Link
                      href={`/practice/${block.challengeId}`}
                      className="rounded-lg border border-fs-border-strong bg-fs-accent-soft px-3 py-2 text-xs font-semibold text-fs-accent transition hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/35"
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
          <h2 className="text-xl font-bold text-fs-text">Track aktif</h2>
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
