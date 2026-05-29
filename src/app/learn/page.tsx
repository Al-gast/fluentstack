"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { TrackCard } from "@/components/learning/track-card";
import { lessons } from "@/content/lessons";
import { modules } from "@/content/modules";
import { tracks } from "@/content/tracks";
import { useGuestProgress } from "@/hooks/use-progress";
import { calculateLessonProgress } from "@/lib/progress/progress-calculator";

export default function LearnPage() {
  const { userProgress, storageMode } = useGuestProgress();
  const hasProgress =
    userProgress.completedBlockIds.length > 0 ||
    userProgress.completedLessonIds.length > 0 ||
    userProgress.totalXp > 0;

  const lessonSummaries = lessons.map((lesson) => {
    const metrics = calculateLessonProgress(lesson, userProgress.completedBlockIds);
    return {
      lesson,
      progressPercent: metrics.progressPercent,
      isCompleted: metrics.isCompleted,
    };
  });

  const inProgressLessons = lessonSummaries
    .filter((entry) => entry.progressPercent > 0 && entry.progressPercent < 100)
    .sort((a, b) => b.progressPercent - a.progressPercent);

  const defaultLesson = lessons.find((lesson) => lesson.slug === "html-semantic-basics") ?? lessons[0];
  const nextLesson =
    inProgressLessons[0]?.lesson ??
    lessonSummaries.find((entry) => !entry.isCompleted)?.lesson ??
    defaultLesson;

  return (
    <AppShell title="Tracks">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-zinc-700/60 bg-zinc-900/70 p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-zinc-50 sm:text-4xl">Pilih Track Belajar</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
            Pilih track yang ingin kamu pelajari atau lanjutkan progres terakhir kamu.
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-6">
          <h2 className="text-xl font-bold text-zinc-100">Lanjut belajar</h2>
          {hasProgress ? (
            <>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Lanjutkan lesson yang paling relevan dari progres kamu saat ini.
              </p>
              <Link
                href={`/lesson/${nextLesson.slug}`}
                className="mt-4 inline-flex rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
              >
                Lanjut ke {nextLesson.title}
              </Link>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {storageMode === "logged-in"
                  ? "Kamu belum punya progres belajar tersimpan di akun ini."
                  : "Kamu belum punya progres belajar tersimpan di browser ini."}
              </p>
              <Link
                href="/learn/frontend-engineering"
                className="mt-4 inline-flex rounded-xl border border-zinc-600 bg-zinc-800/80 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
              >
                Mulai dari Frontend Engineering
              </Link>
            </>
          )}
          <p className="mt-3 text-xs text-zinc-400">
            {hasProgress
              ? storageMode === "logged-in"
                ? "Progres disimpan di akun kamu."
                : "Progres disimpan lokal di browser ini."
              : "Setelah mulai lesson, progres akan muncul di bagian ini."}
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {tracks.map((track) => {
            const trackModules = modules.filter((moduleItem) => moduleItem.trackId === track.id);
            const trackLessons = lessons.filter((lesson) => lesson.trackId === track.id);

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
