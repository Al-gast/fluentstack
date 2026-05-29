"use client";

import type { QuizBlock as QuizBlockData } from "@/types/learning";
import { getQuizById } from "@/lib/content/get-quiz";
import { QuizEngine } from "@/components/quiz/quiz-engine";

type QuizBlockProps = {
  block: QuizBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  bestScore: number;
  onCompleteAttempt: (result: { score: number; passed: boolean }) => void;
};

export function QuizBlock({
  block,
  isCompleted,
  isRequired,
  bestScore,
  onCompleteAttempt,
}: QuizBlockProps) {
  const quiz = getQuizById(block.quizId);

  if (!quiz) {
    return (
      <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 sm:p-6">
        <h3 className="text-xl font-bold text-zinc-100">Quiz pelajaran</h3>
        <p className="mt-3 text-sm text-zinc-300">Data quiz tidak ditemukan untuk ID {block.quizId}.</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-cyan-300/25 bg-cyan-500/5 p-5 sm:p-6">
      <p className="text-xs font-medium text-cyan-200">Activity block</p>
      <h3 className="mt-2 text-xl font-bold text-zinc-100">{quiz.title}</h3>
      <p className="mt-2 text-sm text-zinc-300">
        Selesaikan quiz ini untuk membuka progres penuh pelajaran.
      </p>

      <div className="mt-4 rounded-xl border border-zinc-700/80 bg-zinc-950/60 p-4">
        <p className="text-sm text-zinc-300">Skor terbaik tersimpan: {bestScore}</p>
        {isCompleted ? (
          <p className="mt-2 text-sm font-semibold text-emerald-200">Quiz selesai.</p>
        ) : null}
        {isRequired && !isCompleted ? (
          <p className="mt-2 text-sm text-amber-200/90">Blok ini wajib diselesaikan.</p>
        ) : null}
      </div>

      <div className="mt-4">
        <QuizEngine
          quiz={quiz}
          bestScore={bestScore}
          onQuizFinished={onCompleteAttempt}
        />
      </div>
    </section>
  );
}
