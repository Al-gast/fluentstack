"use client";

import React from "react";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { getWritingPracticeCompletionGate } from "@/lib/writing/completion-gate";
import type { WritingPracticeBlock as WritingPracticeBlockData } from "@/types/learning";

type WritingPracticeBlockProps = {
  block: WritingPracticeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  savedDraft: string;
  onSaveDraft: (draft: string) => void | Promise<unknown>;
  onComplete: () => void | Promise<unknown>;
};

type WritingPracticeBlockStatefulProps = {
  block: WritingPracticeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  initialDraft: string;
  onSaveDraft: (draft: string) => void | Promise<unknown>;
  onComplete: () => void | Promise<unknown>;
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
  const [isSaving, setIsSaving] = React.useState(false);
  const [isCompleting, setIsCompleting] = React.useState(false);
  const [checklistState, setChecklistState] = React.useState<boolean[]>(
    () => block.checklist?.map(() => false) ?? [],
  );

  const completionGate = React.useMemo(
    () =>
      getWritingPracticeCompletionGate({
        draft,
        minimumCharacters: block.minimumCharacters,
        minimumWords: block.minimumWords,
      }),
    [block.minimumCharacters, block.minimumWords, draft],
  );
  const canMarkComplete = completionGate.canComplete;
  const draftIsSaved = draft.trim().length > 0 && draft === initialDraft;

  async function handleSaveDraft() {
    setIsSaving(true);
    try {
      await onSaveDraft(draft);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleComplete() {
    if (!canMarkComplete || isCompleted || isCompleting) {
      return;
    }

    setIsCompleting(true);
    try {
      await onSaveDraft(draft);
      await onComplete();
    } finally {
      setIsCompleting(false);
    }
  }

  return (
    <section className="rounded-2xl border border-fs-accent/25 bg-fs-accent-soft p-4 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium text-fs-accent">Writing practice</p>
        <BlockRequirementBadge isRequired={isRequired} />
      </div>
      <h3 className="mt-2 text-xl font-bold text-fs-text">Latihan menulis</h3>
      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-fs-text-soft">{block.prompt}</p>

      <div className="mt-4 space-y-2">
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={block.placeholder}
          aria-label="Draft latihan menulis"
          className="min-h-44 w-full rounded-xl border border-fs-border bg-fs-surface px-4 py-3 text-sm leading-7 text-fs-text placeholder:text-fs-text-muted focus:border-fs-border-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/20"
        />
        <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className={canMarkComplete ? "text-fs-success" : "text-fs-text-muted"}>
            {completionGate.helperText}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-1 font-semibold ${
                completionGate.canComplete
                  ? "border-fs-success/30 bg-fs-success-soft text-fs-success"
                  : "border-fs-warning/25 bg-fs-warning-soft text-fs-warning"
              }`}
            >
              {completionGate.statusLabel}
            </span>
            {draftIsSaved ? (
              <span className="rounded-full border border-fs-success/30 bg-fs-success-soft px-2.5 py-1 font-semibold text-fs-success">
                Draft tersimpan
              </span>
            ) : null}
            <p className="text-fs-text-muted">{completionGate.summary}</p>
          </div>
        </div>
      </div>

      {block.checklist?.length ? (
        <div className="mt-5 rounded-xl border border-fs-border bg-fs-surface p-4">
          <p className="text-sm font-semibold text-fs-text">Checklist panduan</p>
          <p className="mt-1 text-xs text-fs-text-muted">
            Checklist ini hanya panduan. Kamu tidak harus mencentang semuanya.
          </p>
          <ul className="mt-3 space-y-2">
            {block.checklist.map((item, index) => (
              <li key={item}>
                <label className="flex cursor-pointer items-start gap-2 text-sm text-fs-text-soft">
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
                    className="mt-1 h-4 w-4 rounded border-fs-border bg-fs-surface accent-fs-accent"
                  />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={handleSaveDraft}
          disabled={isSaving}
          className="w-full rounded-lg border border-fs-border bg-fs-surface px-4 py-2 text-center text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30 sm:w-auto"
        >
          {isSaving ? "Menyimpan..." : "Simpan draft"}
        </button>

        {block.modelAnswer ? (
          <button
            type="button"
            onClick={() => setShowModelAnswer((previous) => !previous)}
            className="w-full rounded-lg border border-fs-border bg-fs-surface px-4 py-2 text-center text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30 sm:w-auto"
          >
            {showModelAnswer ? "Sembunyikan contoh jawaban" : "Lihat contoh jawaban"}
          </button>
        ) : null}

        <button
          type="button"
          onClick={handleComplete}
          disabled={!canMarkComplete || isCompleted || isCompleting}
          className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition sm:w-auto ${
            isCompleted
              ? "cursor-not-allowed border border-fs-success/35 bg-fs-success-soft text-fs-success"
              : "bg-fs-accent text-fs-text-inverse hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 disabled:cursor-not-allowed disabled:bg-fs-surface-strong disabled:text-fs-text-muted"
          }`}
        >
          {isCompleted ? "Selesai" : isCompleting ? "Menyimpan..." : completionGate.buttonLabel}
        </button>

        {isRequired && !isCompleted ? (
          <span className="w-full rounded-lg border border-fs-warning/35 bg-fs-warning-soft px-3 py-2 text-sm text-fs-warning sm:w-auto">
            Blok ini wajib untuk menyelesaikan lesson.
          </span>
        ) : null}
      </div>

      {showModelAnswer && block.modelAnswer ? (
        <div className="mt-4 rounded-xl border border-fs-info/25 bg-fs-info-soft p-4">
          <p className="text-xs font-semibold uppercase tracking-normal text-fs-info">Contoh jawaban</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-fs-text">{block.modelAnswer}</p>
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
