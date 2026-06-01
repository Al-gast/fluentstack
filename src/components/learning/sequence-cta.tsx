"use client";

import Link from "next/link";
import type { Lesson } from "@/types/learning";
import { useGuestProgress } from "@/hooks/use-progress";
import {
  calculateLessonProgress,
  calculateLessonsProgress,
  getContinueLessonProgress,
} from "@/lib/progress/progress-calculator";

type SequenceCtaProps = {
  lessons: Lesson[];
  scope: "track" | "module";
};

function getProgressCopy(scope: SequenceCtaProps["scope"], isCompleted: boolean, hasProgress: boolean) {
  if (scope === "module") {
    if (isCompleted) {
      return "Semua lesson di module ini sudah selesai. Kamu bisa review dari awal kapan saja.";
    }

    if (hasProgress) {
      return "Lanjutkan dari posisi terakhir di module ini. Lesson tetap bisa dibuka bebas, tapi urutan ini yang disarankan.";
    }

    return "Mulai dari lesson pertama agar fondasinya runtut. Lesson lain tetap bisa dibuka tanpa dikunci.";
  }

  if (isCompleted) {
    return "Track ini sudah selesai. Kamu bisa review module dari awal atau lanjut ke track lain.";
  }

  if (hasProgress) {
    return "Lanjutkan dari lesson berikutnya sesuai urutan track. Module disusun untuk dibaca bertahap.";
  }

  return "Ikuti module dari awal agar konsepnya nyambung. Ini rekomendasi urutan, bukan akses yang dikunci.";
}

function getButtonLabel(scope: SequenceCtaProps["scope"], isCompleted: boolean, hasProgress: boolean) {
  if (scope === "module") {
    if (isCompleted) {
      return "Review module";
    }

    return hasProgress ? "Lanjutkan lesson" : "Mulai dari lesson pertama";
  }

  if (isCompleted) {
    return "Review track";
  }

  return hasProgress ? "Lanjutkan track" : "Mulai track";
}

export function SequenceCta({ lessons, scope }: SequenceCtaProps) {
  const { userProgress, isLoading } = useGuestProgress();
  const sequenceMetrics = calculateLessonsProgress(lessons, userProgress.completedBlockIds);
  const target = getContinueLessonProgress(lessons, userProgress.completedBlockIds);
  const hasProgress = lessons.some(
    (lesson) => calculateLessonProgress(lesson, userProgress.completedBlockIds).progressPercent > 0,
  );
  const isCompleted = sequenceMetrics.isCompleted && lessons.length > 0;
  const targetLesson = target?.lesson ?? lessons[0];

  return (
    <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.04] p-4 sm:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-200">
            {scope === "module" ? "Urutan lesson yang disarankan" : "Urutan track yang disarankan"}
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-300">
            {isLoading ? "Memuat progres belajar kamu..." : getProgressCopy(scope, isCompleted, hasProgress)}
          </p>
          {targetLesson ? (
            <p className="mt-2 text-xs text-zinc-400">
              {isLoading ? "Menyiapkan rekomendasi..." : `Rekomendasi berikutnya: ${targetLesson.title}`}
            </p>
          ) : null}
        </div>

        {targetLesson ? (
          <Link
            href={`/lesson/${targetLesson.slug}`}
            className="inline-flex shrink-0 justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
          >
            {isLoading ? "Memuat..." : getButtonLabel(scope, isCompleted, hasProgress)}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
