"use client";

import type { QuizBlock as QuizBlockData } from "@/types/learning";
import { getQuizById } from "@/lib/content/get-quiz";
import { getPassingScore } from "@/lib/quiz/scoring";
import { QuizEngine } from "@/components/quiz/quiz-engine";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";

type QuizBlockProps = {
  block: QuizBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  bestScore: number;
  onCompleteAttempt: (result: { score: number; passed: boolean }) => void | Promise<unknown>;
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
      <section className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
        <h3 className="text-xl font-bold text-fs-text">Quiz lesson</h3>
        <p className="mt-3 text-sm text-fs-text-soft">Data quiz tidak ditemukan untuk ID {block.quizId}.</p>
      </section>
    );
  }

  const passingScore = getPassingScore(quiz);
  const hasAttempt = bestScore > 0;
  const statusLabel = isCompleted ? "Lulus" : hasAttempt ? "Belum lulus" : "Belum dikerjakan";
  const statusClass = isCompleted ? "text-fs-success" : hasAttempt ? "text-fs-warning" : "text-fs-text-soft";
  const gateCopy = isCompleted
    ? "Quiz selesai dan sudah masuk ke progres lesson."
    : hasAttempt
      ? "Progres belum naik karena skor terbaik belum mencapai target lulus."
      : "Progres quiz naik setelah skor mencapai target lulus.";

  return (
    <section className="rounded-2xl border border-fs-accent/25 bg-fs-accent-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium text-fs-accent">Quiz</p>
        <BlockRequirementBadge isRequired={isRequired} />
      </div>
      <h3 className="mt-2 text-xl font-bold text-fs-text">{quiz.title}</h3>
      <p className="mt-2 text-sm text-fs-text-soft">
        Jawab pertanyaan satu per satu. Kamu bisa ulang quiz jika belum mencapai target lulus.
      </p>

      <div className="mt-4 grid gap-3 rounded-xl border border-fs-border bg-fs-surface p-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-fs-text-muted">Target lulus</p>
          <p className="mt-1 text-sm font-semibold text-fs-text">{passingScore}/100</p>
        </div>
        <div>
          <p className="text-xs text-fs-text-muted">Skor terbaik</p>
          <p className="mt-1 text-sm font-semibold text-fs-text">{bestScore}/100</p>
        </div>
        <div>
          <p className="text-xs text-fs-text-muted">Status</p>
          <p className={`mt-1 text-sm font-semibold ${statusClass}`}>
            {statusLabel}
          </p>
        </div>
        {isCompleted ? (
          <p className="sm:col-span-3 text-sm font-semibold text-fs-success">Quiz selesai.</p>
        ) : null}
        {isRequired && !isCompleted ? (
          <p className="sm:col-span-3 text-sm text-fs-warning">
            Blok ini wajib untuk menyelesaikan lesson. {gateCopy}
          </p>
        ) : !isRequired ? (
          <p className="sm:col-span-3 text-sm text-fs-text-muted">{gateCopy}</p>
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
