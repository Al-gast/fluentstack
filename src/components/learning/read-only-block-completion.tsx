"use client";

import { useState } from "react";

type ReadOnlyBlockCompletionProps = {
  isCompleted: boolean;
  isRequired: boolean;
  completeLabel: string;
  completedLabel?: string;
  onComplete: () => void | Promise<unknown>;
};

export function ReadOnlyBlockCompletion({
  isCompleted,
  isRequired,
  completeLabel,
  completedLabel = "Selesai",
  onComplete,
}: ReadOnlyBlockCompletionProps) {
  const [isCompleting, setIsCompleting] = useState(false);

  async function handleComplete() {
    if (isCompleted || isCompleting) {
      return;
    }

    setIsCompleting(true);
    try {
      await onComplete();
    } finally {
      setIsCompleting(false);
    }
  }

  return (
    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs leading-5 text-fs-text-muted">
        {isRequired
          ? "Bagian ini memengaruhi progres lesson."
          : "Opsional, tidak menghambat completion lesson."}
      </p>
      <button
        type="button"
        onClick={handleComplete}
        disabled={isCompleted || isCompleting}
        className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition sm:w-auto ${
          isCompleted
            ? "cursor-not-allowed border border-fs-success/35 bg-fs-success-soft text-fs-success"
            : isRequired
              ? "bg-fs-accent text-fs-text-inverse hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
              : "border border-fs-border bg-fs-surface text-fs-text hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
        }`}
      >
        {isCompleted ? completedLabel : isCompleting ? "Menyimpan..." : completeLabel}
      </button>
    </div>
  );
}
