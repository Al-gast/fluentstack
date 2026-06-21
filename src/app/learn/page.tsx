"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { TrackCard } from "@/components/learning/track-card";
import { tracks } from "@/content/tracks";
import { useGuestProgress } from "@/hooks/use-progress";
import { getOrderedTrackLessons, getOrderedTrackModules } from "@/lib/content/learning-path";
import { getContinueLessonProgress } from "@/lib/progress/progress-calculator";

export default function LearnPage() {
  const { userProgress, storageMode, isLoading } = useGuestProgress();
  const hasProgress =
    userProgress.completedBlockIds.length > 0 ||
    userProgress.completedLessonIds.length > 0 ||
    userProgress.totalXp > 0;

  const orderedLessons = tracks.flatMap((track) => getOrderedTrackLessons(track));
  const nextLesson =
    getContinueLessonProgress(orderedLessons, userProgress.completedBlockIds)?.lesson ?? orderedLessons[0];

  return (
    <AppShell title="Tracks">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-8">
          <h1 className="text-3xl font-bold text-fs-text sm:text-4xl">Pilih Track Belajar</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-fs-text-soft">
            Pilih track baru atau lanjutkan lesson yang sudah kamu mulai.
          </p>
        </section>

        <section className="rounded-2xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)]">
          <h2 className="text-xl font-bold text-fs-text">Lanjut belajar</h2>
          {isLoading ? (
            <>
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">Memuat progres terbaru kamu...</p>
              <div className="mt-4 h-10 w-52 animate-pulse rounded-xl bg-fs-surface-strong" />
            </>
          ) : hasProgress ? (
            <>
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">
                Lanjutkan lesson yang paling dekat dengan progres kamu.
              </p>
              <Link
                href={`/lesson/${nextLesson.slug}`}
                className="mt-4 inline-flex rounded-xl bg-fs-accent px-4 py-2.5 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
              >
                Lanjut ke {nextLesson.title}
              </Link>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">
                {storageMode === "logged-in"
                  ? "Belum ada progres belajar di akun ini."
                  : "Belum ada progres belajar di browser ini."}
              </p>
              <Link
                href="/learn/frontend-engineering"
                className="mt-4 inline-flex rounded-xl border border-fs-border bg-fs-surface-soft px-4 py-2.5 text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
              >
                Mulai dari Frontend Engineering
              </Link>
            </>
          )}
          <p className="mt-3 text-xs text-fs-text-muted">
            {isLoading
              ? "Memuat mode progres..."
              : hasProgress
              ? storageMode === "logged-in"
                ? "Progres tersimpan di akun kamu."
                : "Progres tersimpan di browser ini."
              : "Setelah mulai lesson, progres akan muncul di bagian ini."}
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
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
        </section>
      </div>
    </AppShell>
  );
}
