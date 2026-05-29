"use client";

import React from "react";
import type { WritingPracticeBlock as WritingPracticeBlockData } from "@/types/learning";

type WritingPracticeBlockProps = {
  block: WritingPracticeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  savedDraft: string;
  onSaveDraft: (draft: string) => void;
  onComplete: () => void;
};

type WritingPracticeBlockStatefulProps = {
  block: WritingPracticeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  initialDraft: string;
  onSaveDraft: (draft: string) => void;
  onComplete: () => void;
};

function WritingPracticeBlockStateful({
  block,
  isCompleted,
  isRequired,
  initialDraft,
  onSaveDraft,
  onComplete,
}: WritingPracticeBlockStatefulProps) {
  const [draft, setDraft] = React.useState(initialDraft);
  const [showModelAnswer, setShowModelAnswer] = React.useState(false);
  const [checklistState, setChecklistState] = React.useState<boolean[]>(
    () => block.checklist?.map(() => false) ?? [],
  );

  const minimumCharacters = block.minimumCharacters ?? 80;
  const currentCharacters = draft.trim().length;
  const canMarkComplete = currentCharacters >= minimumCharacters;

  const characterMessage = React.useMemo(() => {
    if (canMarkComplete) {
      return `Minimum karakter terpenuhi (${currentCharacters}/${minimumCharacters}).`;
    }
    return `Tulis minimal ${minimumCharacters} karakter untuk menandai blok ini selesai.`;
  }, [canMarkComplete, currentCharacters, minimumCharacters]);

  return (
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 sm:p-6">
      <p className="text-xs font-medium text-zinc-400">Writing practice</p>
      <h3 className="mt-2 text-xl font-bold text-zinc-100">Latihan menulis</h3>
      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-zinc-200">{block.prompt}</p>

      <div className="mt-4 space-y-2">
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={block.placeholder}
          className="min-h-44 w-full rounded-xl border border-zinc-700/80 bg-zinc-950/60 px-4 py-3 text-sm leading-7 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-300/40 focus:outline-none"
        />
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <p className={canMarkComplete ? "text-emerald-200" : "text-zinc-400"}>{characterMessage}</p>
          <p className="text-zinc-400">Jumlah karakter: {currentCharacters}</p>
        </div>
      </div>

      {block.checklist?.length ? (
        <div className="mt-5 rounded-xl border border-zinc-700/80 bg-zinc-950/50 p-4">
          <p className="text-sm font-semibold text-zinc-100">Checklist panduan</p>
          <p className="mt-1 text-xs text-zinc-400">Checklist ini opsional, hanya sebagai panduan kualitas.</p>
          <ul className="mt-3 space-y-2">
            {block.checklist.map((item, index) => (
              <li key={item}>
                <label className="flex cursor-pointer items-start gap-2 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    checked={checklistState[index] ?? false}
                    onChange={(event) => {
                      setChecklistState((previous) => {
                        const next = [...previous];
                        next[index] = event.target.checked;
                        return next;
                      });
                    }}
                    className="mt-1 h-4 w-4 rounded border-zinc-600 bg-zinc-900 text-cyan-400"
                  />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onSaveDraft(draft)}
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
        >
          Simpan draft
        </button>

        {block.modelAnswer ? (
          <button
            type="button"
            onClick={() => setShowModelAnswer((previous) => !previous)}
            className="rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800"
          >
            {showModelAnswer ? "Sembunyikan contoh jawaban" : "Lihat contoh jawaban"}
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => {
            onSaveDraft(draft);
            onComplete();
          }}
          disabled={!canMarkComplete || isCompleted}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            isCompleted
              ? "cursor-not-allowed border border-emerald-300/35 bg-emerald-500/20 text-emerald-100"
              : "bg-cyan-400 text-zinc-950 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-300"
          }`}
        >
          {isCompleted ? "Latihan selesai" : "Tandai selesai"}
        </button>

        {isRequired && !isCompleted ? (
          <span className="rounded-lg border border-amber-300/35 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
            Blok ini wajib diselesaikan.
          </span>
        ) : null}
      </div>

      {showModelAnswer && block.modelAnswer ? (
        <div className="mt-4 rounded-xl border border-cyan-300/25 bg-cyan-500/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-normal text-cyan-100">Contoh jawaban</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-cyan-50">{block.modelAnswer}</p>
        </div>
      ) : null}
    </section>
  );
}

export function WritingPracticeBlock({
  block,
  isCompleted,
  isRequired,
  savedDraft,
  onSaveDraft,
  onComplete,
}: WritingPracticeBlockProps) {
  const checklistKey = (block.checklist ?? []).join("|");
  const stateResetKey = `${block.id}::${savedDraft}::${checklistKey}`;

  return (
    <WritingPracticeBlockStateful
      key={stateResetKey}
      block={block}
      isCompleted={isCompleted}
      isRequired={isRequired}
      initialDraft={savedDraft}
      onSaveDraft={onSaveDraft}
      onComplete={onComplete}
    />
  );
}
