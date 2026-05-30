"use client";

import Link from "next/link";
import { modules } from "@/content/modules";
import { lessons } from "@/content/lessons";
import { quizzes } from "@/content/quizzes";
import { tracks } from "@/content/tracks";
import { useGuestProgress } from "@/hooks/use-progress";
import {
  calculateLessonProgressSummary,
  calculateLessonsProgress,
  type ProgressStatus,
} from "@/lib/progress/progress-calculator";
import { ProgressBar } from "@/components/progress/progress-bar";
import { StreakCard } from "@/components/progress/streak-card";
import { XpBadge } from "@/components/progress/xp-badge";

const statusLabel: Record<ProgressStatus, string> = {
  "not-started": "Belum mulai",
  "in-progress": "Sedang berjalan",
  completed: "Selesai",
};

function formatLastActivityDate(lastActivityDate?: string): string {
  if (!lastActivityDate) {
    return "Belum ada aktivitas";
  }

  const parsedDate = new Date(`${lastActivityDate}T00:00:00`);
  if (Number.isNaN(parsedDate.getTime())) {
    return lastActivityDate;
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export function ProfileOverview() {
  const { userProgress, storageMode, isLoading } = useGuestProgress();
  const { completedBlockIds, completedLessonIds, quizScores, totalXp, streakCount, lastActivityDate } =
    userProgress;

  const overallMetrics = calculateLessonsProgress(lessons, completedBlockIds);

  const frontendTrack = tracks.find((track) => track.slug === "frontend-engineering");
  const frontendLessons = lessons.filter((lesson) => lesson.trackId === frontendTrack?.id);
  const frontendMetrics = calculateLessonsProgress(frontendLessons, completedBlockIds);

  const htmlModule = modules.find((moduleItem) => moduleItem.slug === "html-web-fundamentals");
  const htmlLessons = lessons.filter((lesson) => lesson.moduleId === htmlModule?.id);
  const htmlMetrics = calculateLessonsProgress(htmlLessons, completedBlockIds);

  const semanticLesson = lessons.find((lesson) => lesson.slug === "html-semantic-basics");
  const semanticSummary = semanticLesson
    ? calculateLessonProgressSummary(semanticLesson, completedBlockIds)
    : { lessonId: "", progressPercent: 0, status: "not-started" as const, isCompleted: false };

  const completedLessons = lessons
    .map((lesson) => ({ lesson, summary: calculateLessonProgressSummary(lesson, completedBlockIds) }))
    .filter((entry) => entry.summary.isCompleted || completedLessonIds.includes(entry.lesson.id))
    .map((entry) => ({ id: entry.lesson.id, title: entry.lesson.title }));

  const quizScoreEntries = Object.entries(quizScores).map(([quizId, score]) => {
    const quiz = quizzes.find((quizItem) => quizItem.id === quizId);
    return {
      quizId,
      title: quiz?.title ?? quizId,
      score,
    };
  });

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-6 sm:p-8">
        <p className="text-sm text-cyan-200">
          {storageMode === "logged-in" ? "Mode akun" : "Mode tamu"}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-50 sm:text-4xl">Profil & Progres</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
          {storageMode === "logged-in"
            ? "Progres tersimpan di akun kamu. Bisa dipakai lintas device."
            : "Progres tersimpan di browser ini. Login nanti akan menyimpan progres lintas device."}
        </p>
      </section>

      {isLoading ? (
        <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <p className="text-sm text-zinc-300">Memuat progres...</p>
        </section>
      ) : null}

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <p className="text-sm text-zinc-400">Total XP</p>
          <XpBadge value={totalXp} isLoading={isLoading} className="mt-3" />
        </article>

        <StreakCard days={streakCount} isLoading={isLoading} />

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <p className="text-sm text-zinc-400">Aktivitas terakhir</p>
          <p className="mt-2 text-xl font-bold text-zinc-100">
            {isLoading ? "Memuat..." : formatLastActivityDate(lastActivityDate)}
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Tanggal terakhir kamu menyelesaikan aktivitas belajar.
          </p>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5 xl:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-zinc-100">Progres keseluruhan</h2>
            <p className="text-sm text-zinc-300">
              {isLoading
                ? "Memuat progres..."
                : `${overallMetrics.completedLessonCount}/${overallMetrics.totalLessonCount} lesson selesai`}
            </p>
          </div>
          <ProgressBar
            value={overallMetrics.progressPercent}
            className="mt-4"
            isLoading={isLoading}
            tone={overallMetrics.isCompleted ? "success" : "primary"}
          />
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <h3 className="text-base font-bold text-zinc-100">Frontend Engineering</h3>
          <p className="mt-2 text-sm text-zinc-300">
            {isLoading
              ? "Memuat progres..."
              : `${frontendMetrics.completedLessonCount}/${frontendMetrics.totalLessonCount} lesson selesai`}
          </p>
          <ProgressBar
            value={frontendMetrics.progressPercent}
            className="mt-4"
            isLoading={isLoading}
            tone={frontendMetrics.isCompleted ? "success" : "primary"}
          />
          {frontendTrack ? (
            <Link
              href={`/learn/${frontendTrack.slug}`}
              className="mt-4 inline-flex rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
            >
              Buka track
            </Link>
          ) : null}
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <h3 className="text-base font-bold text-zinc-100">HTML & Web Fundamentals</h3>
          <p className="mt-2 text-sm text-zinc-300">
            {isLoading
              ? "Memuat progres..."
              : `${htmlMetrics.completedLessonCount}/${htmlMetrics.totalLessonCount} lesson selesai`}
          </p>
          <ProgressBar
            value={htmlMetrics.progressPercent}
            className="mt-4"
            isLoading={isLoading}
            tone={htmlMetrics.isCompleted ? "success" : "primary"}
          />
          {frontendTrack && htmlModule ? (
            <Link
              href={`/learn/${frontendTrack.slug}/${htmlModule.slug}`}
              className="mt-4 inline-flex rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
            >
              Buka module
            </Link>
          ) : null}
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <h3 className="text-base font-bold text-zinc-100">Status Dasar Semantic HTML</h3>
          <p className="mt-2 text-sm text-zinc-300">
            Status: {isLoading ? "Memuat..." : statusLabel[semanticSummary.status]}
          </p>
          <ProgressBar
            value={semanticSummary.progressPercent}
            className="mt-4"
            isLoading={isLoading}
            tone={semanticSummary.isCompleted ? "success" : "primary"}
          />
          {semanticLesson ? (
            <Link
              href={`/lesson/${semanticLesson.slug}`}
              className="mt-4 inline-flex rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
            >
              Buka lesson
            </Link>
          ) : null}
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <h2 className="text-lg font-bold text-zinc-100">Lesson selesai</h2>
          {isLoading ? (
            <p className="mt-3 text-sm text-zinc-400">Memuat lesson selesai...</p>
          ) : completedLessons.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {completedLessons.map((lessonItem) => (
                <li
                  key={lessonItem.id}
                  className="rounded-lg border border-zinc-700/70 bg-zinc-950/50 px-3 py-2"
                >
                  {lessonItem.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-zinc-400">
              Belum ada lesson selesai. Mulai dari Dasar Semantic HTML.
            </p>
          )}
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
          <h2 className="text-lg font-bold text-zinc-100">Skor terbaik quiz</h2>
          {isLoading ? (
            <p className="mt-3 text-sm text-zinc-400">Memuat skor terbaik...</p>
          ) : quizScoreEntries.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {quizScoreEntries.map((entry) => (
                <li
                  key={entry.quizId}
                  className="flex flex-col gap-1 rounded-lg border border-zinc-700/70 bg-zinc-950/50 px-3 py-2 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between"
                >
                  <span>{entry.title}</span>
                  <span className="font-semibold text-cyan-200">{entry.score}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-zinc-400">
              Belum ada skor quiz. Kerjakan quiz di dalam lesson untuk melihat skor terbaik.
            </p>
          )}
        </article>
      </section>
    </div>
  );
}
