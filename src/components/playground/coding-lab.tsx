"use client";

import { useState } from "react";
import { CodeEditor } from "@/components/playground/code-editor";
import { PreviewPanel } from "@/components/playground/preview-panel";
import { cn } from "@/lib/utils";
import type { ChallengeCode, ChallengeLanguage, CodingChallenge } from "@/types/challenge";

type CodingLabProps = {
  challenge: CodingChallenge;
  code: ChallengeCode;
  completedChecklistItems: string[];
  isCompleted: boolean;
  isRequired: boolean;
  onChangeCode: (nextCode: ChallengeCode) => void;
  onToggleChecklist: (item: string, checked: boolean) => void;
  onReset: () => void;
  onSaveCode: () => void;
  onMarkCompleted: () => void;
};

const languageTabs: Array<{ label: string; value: ChallengeLanguage }> = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JS", value: "js" },
];

export function CodingLab({
  challenge,
  code,
  completedChecklistItems,
  isCompleted,
  isRequired,
  onChangeCode,
  onToggleChecklist,
  onReset,
  onSaveCode,
  onMarkCompleted,
}: CodingLabProps) {
  const [activeLanguage, setActiveLanguage] = useState<ChallengeLanguage>("html");
  const [showSolution, setShowSolution] = useState(false);
  const [codeSaved, setCodeSaved] = useState(false);

  const handleSaveCode = () => {
    onSaveCode();
    setCodeSaved(true);
  };

  const handleCodeChange = (nextValue: string) => {
    setCodeSaved(false);
    onChangeCode({
      ...code,
      [activeLanguage]: nextValue,
    });
  };

  const handleReset = () => {
    setCodeSaved(false);
    onReset();
  };

  return (
    <section className="space-y-5">
      <header>
        <h3 className="text-xl font-bold text-zinc-100">{challenge.title}</h3>
        <p className="mt-2 text-sm leading-7 text-zinc-300">{challenge.description}</p>
      </header>

      <article className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4">
        <h4 className="text-sm font-semibold text-zinc-100">Instruksi</h4>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7 text-zinc-300">
          {challenge.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ul>
      </article>

      <article className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4">
        <h4 className="text-sm font-semibold text-zinc-100">Checklist manual</h4>
        <p className="mt-1 text-xs text-zinc-400">
          Gunakan checklist ini untuk review hasil sendiri. Setelah preview sudah sesuai, tandai
          selesai secara manual.
        </p>
        <ul className="mt-3 space-y-2">
          {challenge.checklist.map((item) => {
            const checked = completedChecklistItems.includes(item);

            return (
              <li key={item}>
                <label className="flex cursor-pointer items-start gap-2 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => onToggleChecklist(item, event.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-zinc-600 bg-zinc-900 text-cyan-400"
                  />
                  <span>{item}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </article>

      <article className="min-w-0 space-y-4">
        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
          {languageTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveLanguage(tab.value)}
              className={cn(
                "rounded-lg border px-3 py-2 text-center text-xs font-semibold transition sm:px-4",
                activeLanguage === tab.value
                  ? "border-cyan-300/40 bg-cyan-500/10 text-cyan-100"
                  : "border-zinc-700/80 bg-zinc-900 text-zinc-300 hover:bg-zinc-800",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <CodeEditor
          language={activeLanguage}
          value={code[activeLanguage]}
          height="420px"
          onChange={handleCodeChange}
        />

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-normal text-zinc-400">Preview langsung</p>
          <PreviewPanel code={code} heightClassName="h-[280px] sm:h-[320px]" />
        </div>
      </article>

      <article className="rounded-xl border border-cyan-300/20 bg-zinc-950/65 p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-zinc-100">Simpan dan selesaikan</p>
            <p className="mt-1 text-xs leading-6 text-zinc-400">
              Simpan code sebelum pindah halaman. Tandai selesai setelah preview dan checklist sudah kamu cek.
            </p>
          </div>
          {codeSaved ? (
            <span className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
              Code tersimpan
            </span>
          ) : null}
        </div>
        <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
          <button
            type="button"
            onClick={handleSaveCode}
            className="w-full rounded-lg bg-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 sm:w-auto"
          >
            Simpan code
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-lg border border-amber-300/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-300/30 sm:w-auto"
          >
            Reset
          </button>
          {challenge.solutionCode ? (
            <button
              type="button"
              onClick={() => setShowSolution((previous) => !previous)}
              className="w-full rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30 sm:w-auto"
            >
              {showSolution ? "Sembunyikan solusi" : "Lihat solusi"}
            </button>
          ) : null}
          <button
            type="button"
            onClick={onMarkCompleted}
            disabled={isCompleted}
            className={cn(
              "w-full rounded-lg px-4 py-2 text-sm font-semibold transition sm:w-auto",
              isCompleted
                ? "cursor-not-allowed border border-emerald-300/35 bg-emerald-500/20 text-emerald-100"
                : "bg-cyan-400 text-zinc-950 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40",
            )}
          >
            {isCompleted ? "Selesai" : "Tandai selesai"}
          </button>
        </div>
      </article>

      {isRequired && !isCompleted ? (
        <p className="text-sm text-amber-200/90">Blok ini wajib untuk menyelesaikan lesson.</p>
      ) : null}

      {showSolution && challenge.solutionCode ? (
        <article className="space-y-3 rounded-xl border border-cyan-300/25 bg-cyan-500/10 p-4">
          <h4 className="text-sm font-semibold text-cyan-100">Contoh solusi</h4>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-cyan-100">HTML</p>
            <pre className="overflow-x-auto rounded-lg border border-cyan-200/20 bg-zinc-950/70 p-3 text-xs text-cyan-50">
              <code>{challenge.solutionCode.html}</code>
            </pre>
            <p className="text-xs font-semibold text-cyan-100">CSS</p>
            <pre className="overflow-x-auto rounded-lg border border-cyan-200/20 bg-zinc-950/70 p-3 text-xs text-cyan-50">
              <code>{challenge.solutionCode.css}</code>
            </pre>
            <p className="text-xs font-semibold text-cyan-100">JS</p>
            <pre className="overflow-x-auto rounded-lg border border-cyan-200/20 bg-zinc-950/70 p-3 text-xs text-cyan-50">
              <code>{challenge.solutionCode.js}</code>
            </pre>
          </div>
        </article>
      ) : null}
    </section>
  );
}
