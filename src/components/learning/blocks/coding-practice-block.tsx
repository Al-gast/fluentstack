"use client";

import Link from "next/link";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { getChallengeById } from "@/lib/content/get-challenge";
import type { ChallengeCode } from "@/types/challenge";
import type { CodingPracticeBlock as CodingPracticeBlockData } from "@/types/learning";
import type { ChallengeProgress } from "@/types/progress";

type CodingPracticeBlockProps = {
  block: CodingPracticeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  progress?: ChallengeProgress;
  onSaveCode: (code: ChallengeCode) => void | Promise<unknown>;
  onSaveChecklist: (items: string[]) => void | Promise<unknown>;
  onComplete: () => void | Promise<unknown>;
};

const EMPTY_CHALLENGE_CODE: ChallengeCode = { html: "", css: "", js: "" };
const EMPTY_CHECKLIST: string[] = [];

export function CodingPracticeBlock({
  block,
  isCompleted,
  isRequired,
  progress,
}: CodingPracticeBlockProps) {
  const challenge = getChallengeById(block.challengeId);
  const starterCode = challenge?.starterCode ?? EMPTY_CHALLENGE_CODE;
  const checklist = challenge?.checklist ?? EMPTY_CHECKLIST;
  const completedStatus = isCompleted || progress?.isCompleted;
  const validationCount = challenge?.validation?.checks.length ?? 0;
  const checklistCount = checklist.length;
  const hasSavedCode = Boolean(
    progress?.savedCode &&
      (progress.savedCode.html !== starterCode.html ||
        progress.savedCode.css !== starterCode.css ||
        progress.savedCode.js !== starterCode.js ||
        progress.savedCode.ts !== starterCode.ts ||
        progress.savedCode.tsx !== starterCode.tsx),
  );

  if (!challenge) {
    return (
      <section className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
        <p className="text-xs font-medium text-fs-accent">Coding practice</p>
        <h3 className="mt-2 text-xl font-bold text-fs-text">Coding practice</h3>
        <p className="mt-3 text-sm text-fs-text-soft">Data challenge tidak ditemukan untuk ID {block.challengeId}.</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-fs-accent/25 bg-fs-accent-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="rounded-lg border border-fs-accent/25 bg-fs-accent-soft px-2.5 py-1 text-xs font-semibold text-fs-accent">
              Coding practice
            </p>
            <BlockRequirementBadge isRequired={isRequired} />
            <span className="text-xs text-fs-text-muted">Dibuka di workspace khusus</span>
          </div>
          <h3 className="mt-3 text-xl font-bold text-fs-text">{challenge.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-fs-text-soft">{challenge.description}</p>

          {challenge.instructions[0] ? (
            <p className="mt-3 max-w-3xl text-xs leading-6 text-fs-text-muted">
              Tujuan awal: {challenge.instructions[0]}
            </p>
          ) : null}

          <p className="mt-3 max-w-3xl text-xs leading-6 text-fs-text-muted">
            Practice ini dibuka di workspace khusus. Buka practice untuk memakai editor, preview, dan cek otomatis.
          </p>
          <p className="mt-2 max-w-3xl text-xs leading-6 text-fs-text-muted">
            {validationCount > 0
              ? "Tombol selesai aktif setelah semua validasi wajib lolos."
              : "Practice ini memakai checklist manual sebagai syarat selesai."}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {validationCount > 0 ? (
              <span className="rounded-lg border border-fs-success/25 bg-fs-success-soft px-3 py-1.5 text-xs font-semibold text-fs-success">
                {validationCount} cek otomatis
              </span>
            ) : null}
            {checklistCount > 0 ? (
              <span className="rounded-lg border border-fs-border bg-fs-surface px-3 py-1.5 text-xs font-semibold text-fs-text-soft">
                {checklistCount} checklist
              </span>
            ) : null}
            {hasSavedCode ? (
              <span className="rounded-lg border border-fs-accent/25 bg-fs-accent-soft px-3 py-1.5 text-xs font-semibold text-fs-accent">
                Ada kode tersimpan
              </span>
            ) : null}
          </div>
        </div>

        <div className="shrink-0 space-y-3 lg:text-right">
          <span
            className={`inline-flex rounded-lg border px-3 py-1.5 text-xs font-semibold ${
              completedStatus
                ? "border-fs-success/35 bg-fs-success-soft text-fs-success"
                : "border-fs-border bg-fs-surface text-fs-text-soft"
            }`}
          >
            {completedStatus ? "Selesai" : "Belum selesai"}
          </span>
          <Link
            href={`/practice/${challenge.id}`}
            aria-label={`Buka practice ${challenge.title}`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-fs-accent px-4 py-2.5 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 lg:w-auto"
          >
            Buka practice
          </Link>
        </div>
      </div>
    </section>
  );
}
