"use client";

import type { QuizBlock as QuizBlockData } from "@/types/learning";
import { getQuizById } from "@/lib/content/get-quiz";
import { getPassingScore } from "@/lib/quiz/scoring";
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
      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5 sm:p-6">
        <h3 className="text-xl font-bold text-zinc-100">Kuis pelajaran</h3>
        <p className="mt-3 text-sm text-zinc-300">Data kuis tidak ditemukan untuk ID {block.quizId}.</p>
      </section>
    );
  }

  const passingScore = getPassingScore(quiz);

  return (
    <section className="rounded-2xl border border-cyan-300/25 bg-cyan-500/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5 sm:p-6">
      <p className="text-xs font-medium text-cyan-200">Kuis</p>
      <h3 className="mt-2 text-xl font-bold text-zinc-100">{quiz.title}</h3>
      <p className="mt-2 text-sm text-zinc-300">
        Jawab pertanyaan satu per satu. Kamu bisa ulang jika belum mencapai target lulus.
      </p>

      <div className="mt-4 grid gap-3 rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-zinc-400">Target lulus</p>
          <p className="mt-1 text-sm font-semibold text-zinc-100">{passingScore}/100</p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">Skor terbaik</p>
          <p className="mt-1 text-sm font-semibold text-zinc-100">{bestScore}/100</p>
        </div>
        <div>
          <p className="text-xs text-zinc-400">Status</p>
          <p className={`mt-1 text-sm font-semibold ${isCompleted ? "text-emerald-200" : "text-amber-200"}`}>
            {isCompleted ? "Lulus" : "Belum lulus"}
          </p>
        </div>
        {isCompleted ? (
          <p className="sm:col-span-3 text-sm font-semibold text-emerald-200">Kuis selesai.</p>
        ) : null}
        {isRequired && !isCompleted ? (
          <p className="sm:col-span-3 text-sm text-amber-200/90">
            Blok ini wajib untuk menyelesaikan pelajaran.
          </p>
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
