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
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 sm:p-6">
      <h3 className="text-xl font-bold text-zinc-100">Quick check</h3>
      <p className="mt-3 text-base leading-7 text-zinc-200">{block.question}</p>

      <div className="mt-4 space-y-2">
        {block.options.map((option) => {
          const active = selectedAnswer === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelectedAnswer(option);
                if (submitted) {
                  setSubmitted(false);
                }
              }}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                active
                  ? "border-cyan-300/50 bg-cyan-500/10 text-cyan-100"
                  : "border-zinc-700/80 bg-zinc-950/60 text-zinc-200 hover:bg-zinc-800"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!selectedAnswer}
          onClick={handleSubmit}
          className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-300"
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
            className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
          >
            Coba lagi
          </button>
        ) : null}

        {isCompleted ? (
          <span className="rounded-lg border border-emerald-300/35 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-200">
            Blok selesai
          </span>
        ) : null}
      </div>

      {submitted ? (
        <div
          className={`mt-4 rounded-xl border p-4 text-sm leading-7 ${
            isCorrect
              ? "border-emerald-300/35 bg-emerald-500/10 text-emerald-100"
              : "border-rose-300/35 bg-rose-500/10 text-rose-100"
          }`}
        >
          <p className="font-semibold">{isCorrect ? "Jawaban kamu benar." : "Jawaban belum tepat."}</p>
          <p className="mt-2">{block.explanation}</p>
        </div>
      ) : null}
    </section>
  );
}
