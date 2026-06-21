"use client";

import { useMemo, useState } from "react";
import type { QuickCheckBlock as QuickCheckBlockData } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";

type QuickCheckBlockProps = {
  block: QuickCheckBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

export function QuickCheckBlock({ block, isCompleted, isRequired, onComplete }: QuickCheckBlockProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isCorrect = useMemo(
    () => submitted && selectedAnswer === block.correctAnswer,
    [submitted, selectedAnswer, block.correctAnswer],
  );

  const isWrong = submitted && selectedAnswer !== block.correctAnswer;
  const statusLabel = isCompleted
    ? "Selesai"
    : isCorrect
      ? "Benar"
      : isWrong
        ? "Belum tepat"
        : selectedAnswer
          ? "Siap dicek"
          : "Jawab dulu";
  const statusClass = isCompleted || isCorrect
    ? "border-fs-success/30 bg-fs-success-soft text-fs-success"
    : isWrong
      ? "border-fs-danger/30 bg-fs-danger-soft text-fs-danger"
      : selectedAnswer
        ? "border-fs-accent/25 bg-fs-accent-soft text-fs-accent"
        : "border-fs-warning/25 bg-fs-warning-soft text-fs-warning";
  const helperText = isCompleted
    ? "Cek pemahaman ini sudah masuk ke progres lesson."
    : isCorrect
      ? "Jawaban benar. Progress block ini sudah diperbarui."
      : isWrong
        ? "Jawaban belum tepat. Progress belum berubah, coba lagi."
        : "Progress hanya naik setelah jawaban benar.";

  const handleSubmit = async () => {
    if (!selectedAnswer || isSubmitting) {
      return;
    }

    setSubmitted(true);

    if (selectedAnswer === block.correctAnswer && !isCompleted) {
      setIsSubmitting(true);
      try {
        await onComplete();
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="rounded-2xl border border-fs-accent/25 bg-fs-accent-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium text-fs-accent">Cek pemahaman</p>
        <BlockRequirementBadge isRequired={isRequired} />
        <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass}`}>
          {statusLabel}
        </span>
      </div>
      <h3 className="mt-2 text-xl font-bold text-fs-text">Cek pemahaman singkat</h3>
      <p className="mt-3 text-base leading-7 text-fs-text-soft">{block.question}</p>

      <div className="mt-4 space-y-2" role="radiogroup" aria-label={block.question}>
        {block.options.map((option) => {
          const active = selectedAnswer === option;
          const optionIsCorrect = option === block.correctAnswer;
          const showCorrect = submitted && optionIsCorrect;
          const showWrong = submitted && active && !optionIsCorrect;

          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => {
                setSelectedAnswer(option);
                if (submitted) {
                  setSubmitted(false);
                }
              }}
              className={`flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-fs-focus/40 ${
                showCorrect
                  ? "border-fs-success/50 bg-fs-success-soft text-fs-text"
                  : showWrong
                    ? "border-fs-danger/50 bg-fs-danger-soft text-fs-text"
                    : active
                      ? "border-fs-border-strong bg-fs-accent-soft text-fs-text"
                      : "border-fs-border bg-fs-surface text-fs-text-soft hover:border-fs-border-strong hover:bg-fs-surface-strong hover:text-fs-text"
              }`}
            >
              <span>{option}</span>
              {showCorrect ? (
                <span className="shrink-0 text-xs font-semibold text-fs-success">Benar</span>
              ) : null}
              {showWrong ? (
                <span className="shrink-0 text-xs font-semibold text-fs-danger">Belum tepat</span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!selectedAnswer || isCompleted || isSubmitting}
          onClick={handleSubmit}
          className="rounded-lg bg-fs-accent px-4 py-2 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 disabled:cursor-not-allowed disabled:bg-fs-surface-strong disabled:text-fs-text-muted"
        >
          {isCompleted ? "Selesai" : isSubmitting ? "Menyimpan..." : selectedAnswer ? "Cek jawaban" : "Pilih jawaban dulu"}
        </button>

        {isWrong ? (
          <button
            type="button"
            onClick={() => {
              setSelectedAnswer("");
              setSubmitted(false);
            }}
            className="rounded-lg border border-fs-border bg-fs-surface px-4 py-2 text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
          >
            Coba lagi
          </button>
        ) : null}

        {isCompleted ? (
          <span className="rounded-lg border border-fs-success/35 bg-fs-success-soft px-3 py-2 text-sm font-semibold text-fs-success">
            Selesai
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-xs leading-5 text-fs-text-muted">{helperText}</p>

      {submitted ? (
        <div
          aria-live="polite"
          className={`mt-4 rounded-xl border p-4 text-sm leading-7 ${
            isCorrect
              ? "border-fs-success/35 bg-fs-success-soft text-fs-text"
              : "border-fs-danger/35 bg-fs-danger-soft text-fs-text"
          }`}
        >
          <p className="font-semibold">{isCorrect ? "Benar." : "Belum tepat."}</p>
          <p className="mt-2">{block.explanation}</p>
        </div>
      ) : null}
    </section>
  );
}
