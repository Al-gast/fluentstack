"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { LessonCard } from "@/components/learning/lesson-card";
import { ModuleCard } from "@/components/learning/module-card";
import { TrackCard } from "@/components/learning/track-card";
import { ProgressBar } from "@/components/progress/progress-bar";
import { tracks } from "@/content/tracks";
import { modules } from "@/content/modules";
import { lessons } from "@/content/lessons";
import { useGuestProgress } from "@/hooks/use-progress";
import {
  calculateLessonProgress,
  getContinueLessonProgress,
} from "@/lib/progress/progress-calculator";

const statusLabel = {
  "not-started": "Belum mulai",
  "in-progress": "Sedang berjalan",
  completed: "Selesai",
};

function getStorageCopy(storageMode: "guest" | "logged-in") {
  return storageMode === "logged-in"
    ? "Progres tersimpan di akun kamu."
    : "Progres tersimpan di browser ini.";
}

export default function DashboardPage() {
  const { userProgress, storageMode, isLoading } = useGuestProgress();
  const firstTrack = tracks[0];
  const firstModule = modules[0];
  const firstLesson = lessons[0];
  const firstModuleLessons = firstModule
    ? lessons.filter((lesson) => lesson.moduleId === firstModule.id)
    : [];
  const firstTrackLessons = firstTrack ? lessons.filter((lesson) => lesson.trackId === firstTrack.id) : [];
  const hasProgress =
    userProgress.completedBlockIds.length > 0 ||
    userProgress.completedLessonIds.length > 0 ||
    userProgress.totalXp > 0;

  const continueProgress = getContinueLessonProgress(lessons, userProgress.completedBlockIds);
  const continueLesson = continueProgress?.lesson ?? firstLesson;
  const continueTrack = tracks.find((track) => track.id === continueLesson?.trackId);
  const continueModule = modules.find((moduleItem) => moduleItem.id === continueLesson?.moduleId);
  const continueMetrics = continueLesson
    ? calculateLessonProgress(continueLesson, userProgress.completedBlockIds)
    : null;
  const continueStatus = continueProgress?.status ?? "not-started";

  return (
    <AppShell title="Dashboard">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-6 sm:p-8">
          <p className="text-sm text-cyan-200">Selamat datang di FluentStack</p>
          <h1 className="mt-2 text-3xl font-bold text-zinc-50 sm:text-4xl">
            {hasProgress ? "Lanjutkan progres belajar kamu." : "Mulai dari langkah pertama yang jelas."}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
            {isLoading
              ? "Memuat progres belajar kamu..."
              : `${getStorageCopy(storageMode)} Lanjutkan alur dari roadmap, track, module, lalu tuntaskan lesson yang sedang berjalan.`}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/roadmap"
              className="rounded-xl bg-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
            >
              Buka roadmap
            </Link>
            {continueLesson ? (
              <Link
                href={`/lesson/${continueLesson.slug}`}
                className="rounded-xl border border-zinc-700/80 bg-zinc-950/55 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
              >
                {hasProgress ? "Lanjut lesson" : "Buka lesson pertama"}
              </Link>
            ) : null}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm text-cyan-200">{hasProgress ? "Lanjut belajar" : "Rekomendasi pemula"}</p>
              <h2 className="mt-2 text-2xl font-bold text-zinc-100">
                {isLoading ? "Memuat lesson..." : continueLesson?.title ?? "Belum ada lesson"}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-300">
                {isLoading
                  ? "Kami sedang mengambil progres terbaru."
                  : hasProgress
                    ? "Lesson ini dipilih dari progres terbaru kamu."
                    : "Mulai dari fondasi Frontend Engineering: HTML & Web Fundamentals."}
              </p>
            </div>
            <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
              {isLoading ? "Memuat..." : statusLabel[continueStatus]}
            </span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4">
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {continueTrack ? <span>{continueTrack.title}</span> : null}
                {continueModule ? <span>• {continueModule.title}</span> : null}
                {continueLesson ? <span>• {continueLesson.estimatedMinutes} menit</span> : null}
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
            </div>

            <div className="flex flex-col gap-2">
              {continueLesson ? (
                <Link
                  href={`/lesson/${continueLesson.slug}`}
                  className="inline-flex justify-center rounded-xl bg-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                >
                  {hasProgress ? "Lanjutkan lesson" : "Mulai lesson"}
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
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-100">Ringkasan progres belajar</h2>
          <div className="grid gap-4 xl:grid-cols-3">
            {firstTrack ? (
              <TrackCard
                track={firstTrack}
                moduleCount={firstTrack.moduleIds.length}
                lessonCount={firstTrackLessons.length}
                trackLessons={firstTrackLessons}
              />
            ) : null}
            {firstTrack && firstModule ? (
              <ModuleCard
                trackSlug={firstTrack.slug}
                module={firstModule}
                moduleLessons={firstModuleLessons}
              />
            ) : null}
            {firstLesson ? <LessonCard lesson={firstLesson} /> : null}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
