"use client";

import { useMemo, useState } from "react";
import type { QuickCheckBlock as QuickCheckBlockData } from "@/types/learning";

type QuickCheckBlockProps = {
  block: QuickCheckBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

export function QuickCheckBlock({ block, isCompleted, onComplete }: QuickCheckBlockProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = useMemo(
    () => submitted && selectedAnswer === block.correctAnswer,
    [submitted, selectedAnswer, block.correctAnswer],
  );

  const isWrong = submitted && selectedAnswer !== block.correctAnswer;

  const handleSubmit = () => {
    if (!selectedAnswer) {
      return;
    }

    setSubmitted(true);

    if (selectedAnswer === block.correctAnswer && !isCompleted) {
      onComplete();
    }
  };

  return (
    <section className="rounded-2xl border border-cyan-300/25 bg-cyan-500/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5 sm:p-6">
      <p className="text-xs font-medium text-cyan-200">Cek pemahaman</p>
      <h3 className="mt-2 text-xl font-bold text-zinc-100">Cek pemahaman singkat</h3>
      <p className="mt-3 text-base leading-7 text-zinc-200">{block.question}</p>

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
              className={`flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 ${
                showCorrect
                  ? "border-emerald-300/50 bg-emerald-500/10 text-emerald-50"
                  : showWrong
                    ? "border-rose-300/50 bg-rose-500/10 text-rose-50"
                    : active
                      ? "border-cyan-300/60 bg-cyan-500/10 text-cyan-50"
                      : "border-zinc-700/80 bg-zinc-950/60 text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800/80"
              }`}
            >
              <span>{option}</span>
              {showCorrect ? (
                <span className="shrink-0 text-xs font-semibold text-emerald-200">Benar</span>
              ) : null}
              {showWrong ? (
                <span className="shrink-0 text-xs font-semibold text-rose-200">Belum tepat</span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!selectedAnswer}
          onClick={handleSubmit}
          className="rounded-lg bg-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-300"
        >
          Cek jawaban
        </button>

        {isWrong ? (
          <button
            type="button"
            onClick={() => {
              setSelectedAnswer("");
              setSubmitted(false);
            }}
            className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
          >
            Coba lagi
          </button>
        ) : null}

        {isCompleted ? (
          <span className="rounded-lg border border-emerald-300/35 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-200">
            Selesai
          </span>
        ) : null}
      </div>

      {submitted ? (
        <div
          aria-live="polite"
          className={`mt-4 rounded-xl border p-4 text-sm leading-7 ${
            isCorrect
              ? "border-emerald-300/35 bg-emerald-500/10 text-emerald-100"
              : "border-rose-300/35 bg-rose-500/10 text-rose-100"
          }`}
        >
          <p className="font-semibold">{isCorrect ? "Benar." : "Belum tepat."}</p>
          <p className="mt-2">{block.explanation}</p>
        </div>
      ) : null}
    </section>
  );
}
