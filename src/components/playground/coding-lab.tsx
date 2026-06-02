"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CodeEditor } from "@/components/playground/code-editor";
import { PreviewPanel } from "@/components/playground/preview-panel";
import { validateChallengeCode } from "@/lib/challenges/validate-code";
import { cn } from "@/lib/utils";
import type { ChallengeCode, ChallengeLanguage, CodingChallenge } from "@/types/challenge";

export type PracticeLayout = "code-left" | "preview-left" | "code-top" | "preview-top" | "stacked";
export type PreviewViewport = "mobile" | "tablet" | "desktop" | "full";

export type PracticeSplitRatios = Record<PracticeLayout, number>;

type CodingLabProps = {
  challenge: CodingChallenge;
  code: ChallengeCode;
  completedChecklistItems: string[];
  isCompleted: boolean;
  isRequired: boolean;
  layout?: PracticeLayout;
  previewViewport?: PreviewViewport;
  splitRatio: number;
  onChangeSplitRatio: (nextRatio: number) => void;
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

const viewportWidth: Record<PreviewViewport, string> = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
  full: "100%",
};

function clampRatio(value: number): number {
  return Math.min(68, Math.max(32, value));
}

function isHorizontalLayout(layout: PracticeLayout): boolean {
  return layout === "code-left" || layout === "preview-left";
}

function isPreviewFirstLayout(layout: PracticeLayout): boolean {
  return layout === "preview-left" || layout === "preview-top";
}

function getEditorHeight(layout: PracticeLayout): string {
  if (layout === "stacked") {
    return "clamp(340px, 48vh, 520px)";
  }

  if (layout === "code-top" || layout === "preview-top") {
    return "100%";
  }

  return "clamp(480px, 66vh, 720px)";
}

function getPreviewHeight(layout: PracticeLayout): string {
  if (layout === "stacked") {
    return "h-[320px] sm:h-[400px]";
  }

  if (layout === "code-top" || layout === "preview-top") {
    return "h-full";
  }

  return "h-[480px] xl:h-[720px]";
}

export function CodingLab({
  challenge,
  code,
  completedChecklistItems,
  isCompleted,
  isRequired,
  layout = "code-left",
  previewViewport = "full",
  splitRatio,
  onChangeSplitRatio,
  onChangeCode,
  onToggleChecklist,
  onReset,
  onSaveCode,
  onMarkCompleted,
}: CodingLabProps) {
  const [activeLanguage, setActiveLanguage] = useState<ChallengeLanguage>("html");
  const [showSolution, setShowSolution] = useState(false);
  const [codeSaved, setCodeSaved] = useState(false);
  const [isValidationReady, setIsValidationReady] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<"instructions" | "checks">("instructions");
  const splitContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsValidationReady(true);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const validationResults = useMemo(
    () =>
      isValidationReady
        ? validateChallengeCode(challenge.validation, code)
        : (challenge.validation?.checks.map((check) => ({
            id: check.id,
            label: check.label,
            passed: false,
            required: check.required ?? true,
            message: "Check akan berjalan setelah editor siap.",
          })) ?? []),
    [challenge.validation, code, isValidationReady],
  );
  const hasAutoValidation = validationResults.length > 0;
  const requiredResults = validationResults.filter((result) => result.required);
  const passedRequiredCount = requiredResults.filter((result) => result.passed).length;
  const requiredChecksPassed = requiredResults.every((result) => result.passed);
  const canMarkCompleted = !hasAutoValidation || requiredChecksPassed;
  const validationDescription =
    challenge.validation?.mode === "css"
      ? "Kami membaca aturan CSS yang kamu tulis. JavaScript tidak dijalankan untuk validasi."
      : "Kami membaca struktur HTML yang kamu tulis. JavaScript tidak dijalankan untuk validasi.";

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

  const handleMarkCompleted = () => {
    if (!canMarkCompleted) {
      return;
    }

    onMarkCompleted();
  };

  const handleSplitterPointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (layout === "stacked" || !splitContainerRef.current) {
      return;
    }

    event.preventDefault();
    const container = splitContainerRef.current;
    const rect = container.getBoundingClientRect();
    const horizontal = isHorizontalLayout(layout);
    const pointerId = event.pointerId;
    event.currentTarget.setPointerCapture(pointerId);

    const updateRatio = (clientX: number, clientY: number) => {
      const rawRatio = horizontal
        ? ((clientX - rect.left) / rect.width) * 100
        : ((clientY - rect.top) / rect.height) * 100;

      onChangeSplitRatio(clampRatio(rawRatio));
    };

    const handlePointerMove = (moveEvent: PointerEvent) => {
      updateRatio(moveEvent.clientX, moveEvent.clientY);
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });
  };

  const checksSummary = hasAutoValidation
    ? `${passedRequiredCount}/${requiredResults.length} checks lolos`
    : `${completedChecklistItems.length}/${challenge.checklist.length} checklist`;

  const instructionsContent = (
    <div className="space-y-4">
      {challenge.validation?.mode === "html" ? (
        <p className="rounded-lg border border-cyan-300/20 bg-cyan-500/10 p-3 text-xs leading-6 text-cyan-100">
          Fokus di tab HTML dulu. CSS dan JS belum perlu diubah.
        </p>
      ) : null}
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7 text-zinc-300">
        {challenge.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>

      <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 p-3">
        <p className="text-xs font-semibold text-zinc-100">Navigasi editor</p>
        <p className="mt-1 text-xs leading-5 text-zinc-400">
          Tips: Jika fokus berada di editor dan kamu ingin keluar, tekan Esc lalu lanjut navigasi.
        </p>
      </div>
    </div>
  );

  const checksContent = hasAutoValidation ? (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="text-xs leading-6 text-zinc-400">{validationDescription}</p>
        <span className="rounded-full border border-zinc-700/80 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300">
          {checksSummary}
        </span>
      </div>
      <ul className="max-h-[52vh] space-y-2 overflow-y-auto pr-1">
        {validationResults.map((result) => (
          <li
            key={result.id}
            className={cn(
              "flex items-start gap-2 rounded-lg border px-3 py-2 text-sm",
              result.passed
                ? "border-emerald-300/25 bg-emerald-500/10 text-emerald-100"
                : "border-amber-300/25 bg-amber-500/10 text-amber-100",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                result.passed ? "bg-emerald-300 text-emerald-950" : "bg-amber-300 text-amber-950",
              )}
            >
              {result.passed ? "✓" : "!"}
            </span>
            <span>
              <span className="block font-medium">{result.label}</span>
              {!result.passed && result.message ? (
                <span className="mt-0.5 block text-xs leading-5 text-amber-100/80">
                  {result.message}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="text-xs leading-6 text-zinc-400">
          Gunakan checklist ini untuk review hasil sendiri. Setelah preview sudah sesuai, tandai selesai secara manual.
        </p>
        <span className="rounded-full border border-zinc-700/80 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300">
          {checksSummary}
        </span>
      </div>
      <ul className="space-y-2">
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
    </div>
  );

  const infoPanel = (
    <aside className="min-w-0 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 xl:max-h-[calc(100vh-190px)] xl:overflow-y-auto xl:pr-3">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setActiveInfoTab("instructions")}
          className={cn(
            "rounded-lg border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30",
            activeInfoTab === "instructions"
              ? "border-cyan-300/45 bg-cyan-500/15 text-cyan-100"
              : "border-zinc-700/80 bg-zinc-950/55 text-zinc-300 hover:bg-zinc-800",
          )}
        >
          Instruksi
        </button>
        <button
          type="button"
          onClick={() => setActiveInfoTab("checks")}
          className={cn(
            "rounded-lg border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30",
            activeInfoTab === "checks"
              ? "border-cyan-300/45 bg-cyan-500/15 text-cyan-100"
              : "border-zinc-700/80 bg-zinc-950/55 text-zinc-300 hover:bg-zinc-800",
          )}
        >
          Cek otomatis
        </button>
      </div>
      <div className="mt-4">
        {activeInfoTab === "instructions" ? instructionsContent : checksContent}
      </div>
    </aside>
  );

  const actionsPanel = (
    <article className="rounded-xl border border-cyan-300/20 bg-zinc-950/75 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-zinc-100">Simpan dan selesaikan</p>
          <p className="mt-1 text-xs leading-5 text-zinc-400 xl:hidden">
            {hasAutoValidation
              ? "Perbaiki item yang belum lolos, lalu tandai latihan selesai."
              : "Simpan kode sebelum pindah halaman. Tandai selesai setelah preview dan checklist sudah kamu cek."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-zinc-700/80 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300">
            {checksSummary}
          </span>
          {codeSaved ? (
            <span className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
              Kode tersimpan
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
        <button
          type="button"
          onClick={handleSaveCode}
          className="w-full rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 sm:w-auto"
        >
          Simpan kode
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
          onClick={handleMarkCompleted}
          disabled={isCompleted || !canMarkCompleted}
          className={cn(
            "w-full rounded-lg px-4 py-2 text-sm font-semibold transition sm:w-auto",
            isCompleted
              ? "cursor-not-allowed border border-emerald-300/35 bg-emerald-500/20 text-emerald-100"
              : !canMarkCompleted
                ? "cursor-not-allowed border border-zinc-700/80 bg-zinc-800 text-zinc-500"
                : "bg-cyan-400 text-zinc-950 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40",
          )}
        >
          {isCompleted ? "Selesai" : "Tandai selesai"}
        </button>
      </div>
    </article>
  );

  const editorPanel = (
    <article className="flex min-h-0 min-w-0 flex-col space-y-3 rounded-xl border border-zinc-800/80 bg-zinc-950/45 p-3">
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

      <div className="min-h-0 min-w-0 flex-1">
        <CodeEditor
          language={activeLanguage}
          value={code[activeLanguage]}
          height={getEditorHeight(layout)}
          onChange={handleCodeChange}
        />
      </div>
    </article>
  );

  const previewPanel = (
    <article className="flex min-h-0 min-w-0 flex-col space-y-3 rounded-xl border border-zinc-800/80 bg-zinc-950/45 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-normal text-zinc-400">Preview langsung</p>
        <span className="rounded-full border border-zinc-700/80 bg-zinc-950/55 px-3 py-1 text-xs font-semibold text-zinc-300">
          {previewViewport === "full" ? "Full" : viewportWidth[previewViewport]}
        </span>
      </div>
      <div className="min-h-0 min-w-0 flex-1">
        <PreviewPanel
          code={code}
          heightClassName={getPreviewHeight(layout)}
          viewportWidth={viewportWidth[previewViewport]}
        />
      </div>
    </article>
  );

  const firstPanel = isPreviewFirstLayout(layout) ? previewPanel : editorPanel;
  const secondPanel = isPreviewFirstLayout(layout) ? editorPanel : previewPanel;
  const horizontalLayout = isHorizontalLayout(layout);
  const firstPanelMinHeight = isPreviewFirstLayout(layout) ? 220 : 240;
  const secondPanelMinHeight = isPreviewFirstLayout(layout) ? 240 : 220;
  const splitStyle =
    layout === "stacked"
      ? undefined
      : horizontalLayout
        ? { gridTemplateColumns: `minmax(280px, ${splitRatio}fr) 10px minmax(280px, ${100 - splitRatio}fr)` }
        : {
            gridTemplateRows: `minmax(${firstPanelMinHeight}px, ${splitRatio}fr) 10px minmax(${secondPanelMinHeight}px, ${100 - splitRatio}fr)`,
          };

  const splitWorkspace =
    layout === "stacked" ? (
      <div className="grid min-w-0 grid-cols-1 gap-4">
        {editorPanel}
        {previewPanel}
      </div>
    ) : (
      <div
        ref={splitContainerRef}
        className={cn(
          "hidden min-w-0 xl:grid",
          horizontalLayout ? "grid-rows-1" : "grid-cols-1",
          horizontalLayout ? "min-h-[700px]" : "h-[calc(100vh-250px)] min-h-[720px]",
        )}
        style={splitStyle}
      >
        {firstPanel}
        <button
          type="button"
          aria-label={horizontalLayout ? "Geser untuk mengubah lebar editor dan preview" : "Geser untuk mengubah tinggi editor dan preview"}
          onPointerDown={handleSplitterPointerDown}
          className={cn(
            "rounded-full border border-cyan-300/20 bg-cyan-300/20 transition hover:border-cyan-200/40 hover:bg-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/40",
            horizontalLayout ? "my-4 cursor-col-resize" : "mx-4 cursor-row-resize",
          )}
        >
          <span className="sr-only">Drag splitter</span>
        </button>
        {secondPanel}
      </div>
    );

  return (
    <section className="space-y-4 pb-28 lg:pb-6">
      <div className="sticky bottom-3 z-10 xl:bottom-auto xl:top-[152px]">
        {actionsPanel}
      </div>

      {isRequired && !isCompleted ? (
        <p className="rounded-xl border border-amber-300/25 bg-amber-500/10 p-4 text-sm text-amber-100">
          Blok ini wajib untuk menyelesaikan lesson.
        </p>
      ) : null}

      <div className={cn("grid min-w-0 gap-4", layout === "stacked" ? "grid-cols-1" : "grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)]")}>
        {infoPanel}
        <div className="min-w-0">
          {layout === "stacked" ? splitWorkspace : (
            <>
              {splitWorkspace}
              <div className="grid min-w-0 grid-cols-1 gap-4 xl:hidden">
                {editorPanel}
                {previewPanel}
              </div>
            </>
          )}
        </div>
      </div>

      {showSolution && challenge.solutionCode ? (
        <article className="space-y-3 rounded-xl border border-cyan-300/25 bg-cyan-500/10 p-4">
          <h4 className="text-sm font-semibold text-cyan-100">Contoh solusi</h4>
          <div className="grid gap-3 lg:grid-cols-3">
            <div className="min-w-0 space-y-2">
              <p className="text-xs font-semibold text-cyan-100">HTML</p>
              <pre className="overflow-x-auto rounded-lg border border-cyan-200/20 bg-zinc-950/70 p-3 text-xs text-cyan-50">
                <code>{challenge.solutionCode.html}</code>
              </pre>
            </div>
            <div className="min-w-0 space-y-2">
              <p className="text-xs font-semibold text-cyan-100">CSS</p>
              <pre className="overflow-x-auto rounded-lg border border-cyan-200/20 bg-zinc-950/70 p-3 text-xs text-cyan-50">
                <code>{challenge.solutionCode.css}</code>
              </pre>
            </div>
            <div className="min-w-0 space-y-2">
              <p className="text-xs font-semibold text-cyan-100">JS</p>
              <pre className="overflow-x-auto rounded-lg border border-cyan-200/20 bg-zinc-950/70 p-3 text-xs text-cyan-50">
                <code>{challenge.solutionCode.js}</code>
              </pre>
            </div>
          </div>
        </article>
      ) : null}
    </section>
  );
}
