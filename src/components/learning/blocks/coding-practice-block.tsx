"use client";

import Link from "next/link";
import { getChallengeById } from "@/lib/content/get-challenge";
import type { ChallengeCode } from "@/types/challenge";
import type { CodingPracticeBlock as CodingPracticeBlockData } from "@/types/learning";
import type { ChallengeProgress } from "@/types/progress";

type CodingPracticeBlockProps = {
  block: CodingPracticeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  progress?: ChallengeProgress;
  onSaveCode: (code: ChallengeCode) => void;
  onSaveChecklist: (items: string[]) => void;
  onComplete: () => void;
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
        progress.savedCode.js !== starterCode.js),
  );

  if (!challenge) {
    return (
      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
        <p className="text-xs font-medium text-cyan-200">Coding Practice</p>
        <h3 className="mt-2 text-xl font-bold text-zinc-100">Coding practice</h3>
        <p className="mt-3 text-sm text-zinc-300">Data challenge tidak ditemukan untuk ID {block.challengeId}.</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-cyan-300/25 bg-cyan-500/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-medium text-cyan-200">Coding Practice</p>
          <h3 className="mt-2 text-xl font-bold text-zinc-100">{challenge.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">{challenge.description}</p>

          {challenge.instructions[0] ? (
            <p className="mt-3 max-w-3xl text-xs leading-6 text-zinc-400">
              Mulai dari: {challenge.instructions[0]}
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {validationCount > 0 ? (
              <span className="rounded-lg border border-emerald-300/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                {validationCount} cek otomatis
              </span>
            ) : null}
            {checklistCount > 0 ? (
              <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5 text-xs font-semibold text-zinc-300">
                {checklistCount} checklist
              </span>
            ) : null}
            {hasSavedCode ? (
              <span className="rounded-lg border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                Ada kode tersimpan
              </span>
            ) : null}
            {isRequired ? (
              <span className="rounded-lg border border-amber-300/25 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-100">
                Wajib untuk lesson
              </span>
            ) : null}
          </div>
        </div>

        <div className="shrink-0 space-y-3 lg:text-right">
          <span
            className={`inline-flex rounded-lg border px-3 py-1.5 text-xs font-semibold ${
              completedStatus
                ? "border-emerald-300/35 bg-emerald-500/15 text-emerald-100"
                : "border-zinc-700/80 bg-zinc-950/55 text-zinc-300"
            }`}
          >
            {completedStatus ? "Selesai" : "Belum selesai"}
          </span>
          <Link
            href={`/practice/${challenge.id}`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 lg:w-auto"
          >
            Mulai latihan
          </Link>
        </div>
      </div>
    </section>
  );
}
