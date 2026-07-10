"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CodeEditor } from "@/components/playground/code-editor";
import { PreviewPanel } from "@/components/playground/preview-panel";
import { getCodingPracticeCompletionGate } from "@/lib/challenges/completion-gate";
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
  onSaveCode: () => void | Promise<unknown>;
  onMarkCompleted: () => void | Promise<unknown>;
};

const baseLanguageTabs: Array<{ label: string; value: ChallengeLanguage }> = [
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

function getPreviewHeight(layout: PracticeLayout): string {
  if (layout === "stacked") {
    return "h-[320px] sm:h-[400px]";
  }

  if (layout === "code-top" || layout === "preview-top") {
    return "h-full";
  }

  return "h-[480px] xl:h-[720px]";
}

function getEditorContainerClassName(layout: PracticeLayout): string {
  if (layout === "stacked") {
    return "h-[clamp(340px,48vh,520px)]";
  }

  return "h-[clamp(480px,66vh,720px)] xl:h-full";
}

function getDefaultActiveLanguage(challenge: CodingChallenge): ChallengeLanguage {
  return challenge.validation?.mode ?? "html";
}

function getLanguageTabs(challenge: CodingChallenge, code: ChallengeCode): Array<{ label: string; value: ChallengeLanguage }> {
  if (challenge.validation?.mode === "tsx") {
    return [{ label: "TSX", value: "tsx" }];
  }

  const hasTypeScript =
    challenge.validation?.mode === "ts" ||
    typeof challenge.starterCode.ts === "string" ||
    typeof challenge.solutionCode?.ts === "string" ||
    typeof code.ts === "string";
  const hasTsx =
    typeof challenge.starterCode.tsx === "string" ||
    typeof challenge.solutionCode?.tsx === "string" ||
    typeof code.tsx === "string";

  return [
    ...baseLanguageTabs,
    ...(hasTypeScript ? [{ label: "TS", value: "ts" as const }] : []),
    ...(hasTsx ? [{ label: "TSX", value: "tsx" as const }] : []),
  ];
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
  const [activeLanguage, setActiveLanguage] = useState<ChallengeLanguage>(() => getDefaultActiveLanguage(challenge));
  const [showSolution, setShowSolution] = useState(false);
  const [codeSaved, setCodeSaved] = useState(false);
  const [isValidationReady, setIsValidationReady] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<"instructions" | "checks">("instructions");
  const [isSavingCode, setIsSavingCode] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
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
  const completionGate = useMemo(
    () =>
      getCodingPracticeCompletionGate({
        challenge,
        validationResults,
        completedChecklistItems,
        isValidationReady,
      }),
    [challenge, validationResults, completedChecklistItems, isValidationReady],
  );
  const hasAutoValidation = completionGate.mode === "auto-validation";
  const canMarkCompleted = completionGate.canComplete;
  const isTypeScriptPractice = challenge.validation?.mode === "ts";
  const isReactPractice = challenge.validation?.mode === "tsx";
  const validationDescription =
    challenge.validation?.mode === "css"
      ? "Kami membaca aturan CSS yang kamu tulis. JavaScript tidak dijalankan untuk validasi."
      : challenge.validation?.mode === "js"
        ? "Kami membaca teks JavaScript yang kamu tulis. Kode tidak dijalankan untuk validasi."
        : challenge.validation?.mode === "ts"
          ? "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview."
          : challenge.validation?.mode === "tsx"
            ? "Cek otomatis membaca struktur TSX. React component belum dijalankan sebagai preview."
          : "Kami membaca struktur HTML yang kamu tulis. JavaScript tidak dijalankan untuk validasi.";
  const visibleLanguageTabs = useMemo(() => getLanguageTabs(challenge, code), [challenge, code]);

  const handleSaveCode = async () => {
    if (isSavingCode) {
      return;
    }

    setIsSavingCode(true);
    try {
      await onSaveCode();
      setCodeSaved(true);
    } finally {
      setIsSavingCode(false);
    }
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

  const handleMarkCompleted = async () => {
    if (!canMarkCompleted || isCompleted || isCompleting) {
      return;
    }

    setIsCompleting(true);
    try {
      await onMarkCompleted();
    } finally {
      setIsCompleting(false);
    }
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

  const checksSummary = completionGate.summary;
  const failedRequiredResults = validationResults.filter((result) => result.required && !result.passed);
  const nextFailedResult = failedRequiredResults[0];
  const nextActionText =
    hasAutoValidation && nextFailedResult
      ? nextFailedResult.message ?? nextFailedResult.label
      : completionGate.helperText;
  const expectedOutputContent = challenge.expectedOutput ? (
    <div className="rounded-lg border border-fs-border bg-fs-surface p-3">
      <p className="text-xs font-semibold text-fs-text">
        {challenge.expectedOutput.title ?? "Output yang diharapkan"}
      </p>
      {challenge.expectedOutput.description ? (
        <p className="mt-1 text-xs leading-5 text-fs-text-muted">
          {challenge.expectedOutput.description}
        </p>
      ) : null}
      {challenge.expectedOutput.kind === "console" ? (
        <div className="mt-2 overflow-x-auto rounded-md border border-fs-code-border bg-fs-code-background p-2 font-mono text-xs leading-5 text-fs-text-soft">
          {challenge.expectedOutput.lines.map((line, index) => (
            <p key={`${line}-${index}`} className="whitespace-pre">
              {line}
            </p>
          ))}
        </div>
      ) : challenge.expectedOutput.lines?.length ? (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-5 text-fs-text-muted">
          {challenge.expectedOutput.lines.map((line, index) => (
            <li key={`${line}-${index}`}>{line}</li>
          ))}
        </ul>
      ) : null}
    </div>
  ) : null;

  const instructionsContent = (
    <div className="space-y-4">
      {challenge.validation?.mode === "html" ? (
        <p className="rounded-lg border border-fs-info/20 bg-fs-info-soft p-3 text-xs leading-6 text-fs-text">
          Fokus di tab HTML dulu. CSS dan JS belum perlu diubah.
        </p>
      ) : null}
      {challenge.validation?.mode === "js" ? (
        <p className="rounded-lg border border-fs-info/20 bg-fs-info-soft p-3 text-xs leading-6 text-fs-text">
          Fokus di tab JS. HTML dan CSS hanya membantu memberi konteks preview.
        </p>
      ) : null}
      {challenge.validation?.mode === "ts" ? (
        <p className="rounded-lg border border-fs-info/20 bg-fs-info-soft p-3 text-xs leading-6 text-fs-text">
          Fokus di tab TS. Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.
        </p>
      ) : null}
      {challenge.validation?.mode === "tsx" ? (
        <p className="rounded-lg border border-fs-info/20 bg-fs-info-soft p-3 text-xs leading-6 text-fs-text">
          Fokus di tab TSX. Cek otomatis membaca struktur komponen React. React component belum dijalankan sebagai preview.
        </p>
      ) : null}
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7 text-fs-text-soft">
        {challenge.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>

      {expectedOutputContent}

      <div className="rounded-lg border border-fs-border bg-fs-surface p-3">
        <p className="text-xs font-semibold text-fs-text">Navigasi editor</p>
        <p className="mt-1 text-xs leading-5 text-fs-text-muted">
          Tips: Jika fokus berada di editor dan kamu ingin keluar, tekan Esc lalu lanjut navigasi.
        </p>
      </div>
    </div>
  );

  const checksContent = hasAutoValidation ? (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="text-xs leading-6 text-fs-text-muted">{validationDescription}</p>
        <span className="rounded-full border border-fs-border bg-fs-surface px-3 py-1 text-xs font-semibold text-fs-text-soft">
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
                ? "border-fs-success/25 bg-fs-success-soft text-fs-text"
                : "border-fs-warning/25 bg-fs-warning-soft text-fs-text",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                result.passed ? "bg-fs-success text-fs-text-inverse" : "bg-fs-warning text-fs-text-inverse",
              )}
            >
              {result.passed ? "✓" : "!"}
            </span>
            <span>
              <span className="block font-medium">{result.label}</span>
              {!result.passed && result.message ? (
                <span className="mt-0.5 block text-xs leading-5 text-fs-warning">
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
        <p className="text-xs leading-6 text-fs-text-muted">
          Practice ini memakai checklist manual. Tombol selesai aktif setelah semua checklist selesai.
        </p>
        <span className="rounded-full border border-fs-border bg-fs-surface px-3 py-1 text-xs font-semibold text-fs-text-soft">
          {checksSummary}
        </span>
      </div>
      <ul className="space-y-2">
        {challenge.checklist.map((item) => {
          const checked = completedChecklistItems.includes(item);

          return (
            <li key={item}>
              <label className="flex cursor-pointer items-start gap-2 text-sm text-fs-text-soft">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(event) => onToggleChecklist(item, event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-fs-border bg-fs-surface accent-fs-accent"
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
    <aside className="min-w-0 rounded-xl border border-fs-border bg-fs-surface p-4">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setActiveInfoTab("instructions")}
          className={cn(
            "rounded-lg border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-fs-focus/30",
            activeInfoTab === "instructions"
              ? "border-fs-border-strong bg-fs-accent-soft text-fs-accent"
              : "border-fs-border bg-fs-surface-soft text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text",
          )}
        >
          Instruksi
        </button>
        <button
          type="button"
          onClick={() => setActiveInfoTab("checks")}
          className={cn(
            "rounded-lg border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-fs-focus/30",
            activeInfoTab === "checks"
              ? "border-fs-border-strong bg-fs-accent-soft text-fs-accent"
              : "border-fs-border bg-fs-surface-soft text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text",
          )}
        >
          {hasAutoValidation ? "Cek otomatis" : "Checklist"}
        </button>
      </div>
      <div className="mt-4">
        {activeInfoTab === "instructions" ? instructionsContent : checksContent}
      </div>
    </aside>
  );

  const actionsPanel = (
    <article className="rounded-xl border border-fs-border-strong bg-fs-surface-strong p-3 shadow-[inset_0_1px_0_var(--fs-border)] backdrop-blur sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-fs-text">Simpan dan selesaikan</p>
          <p className="mt-1 text-xs leading-5 text-fs-text-muted">{completionGate.helperText}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-fs-border bg-fs-surface px-3 py-1.5 text-xs font-semibold text-fs-text-soft">
            {checksSummary}
          </span>
          {codeSaved ? (
            <span className="rounded-full border border-fs-success/30 bg-fs-success-soft px-3 py-1.5 text-xs font-semibold text-fs-success">
              Kode tersimpan
            </span>
          ) : null}
          <span
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-semibold",
              completionGate.canComplete
                ? "border-fs-success/30 bg-fs-success-soft text-fs-success"
                : "border-fs-warning/25 bg-fs-warning-soft text-fs-warning",
            )}
          >
            {completionGate.statusLabel}
          </span>
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-fs-border bg-fs-surface px-3 py-2">
        <p className="text-xs font-semibold text-fs-text">Langkah berikutnya</p>
        <p className="mt-1 text-xs leading-5 text-fs-text-muted">{nextActionText}</p>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        <button
          type="button"
          onClick={handleSaveCode}
          disabled={isSavingCode}
          className="w-full rounded-lg bg-fs-accent px-4 py-2 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 disabled:cursor-not-allowed disabled:bg-fs-surface-strong disabled:text-fs-text-muted"
        >
          {isSavingCode ? "Menyimpan..." : "Simpan kode"}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full rounded-lg border border-fs-warning/30 bg-fs-warning-soft px-4 py-2 text-sm font-semibold text-fs-warning transition hover:bg-fs-warning-soft focus:outline-none focus:ring-2 focus:ring-fs-warning/30"
        >
          Reset
        </button>
        {challenge.solutionCode ? (
          <button
            type="button"
            onClick={() => setShowSolution((previous) => !previous)}
            className="w-full rounded-lg border border-fs-border bg-fs-surface px-4 py-2 text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
          >
            {showSolution ? "Sembunyikan solusi" : "Lihat solusi"}
          </button>
        ) : null}
        <button
          type="button"
          onClick={handleMarkCompleted}
          disabled={isCompleted || !canMarkCompleted || isCompleting}
          className={cn(
            "w-full rounded-lg px-4 py-2 text-sm font-semibold transition",
            isCompleted
              ? "cursor-not-allowed border border-fs-success/35 bg-fs-success-soft text-fs-success"
              : !canMarkCompleted || isCompleting
                ? "cursor-not-allowed border border-fs-border bg-fs-surface-strong text-fs-text-muted"
                : "bg-fs-accent text-fs-text-inverse hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40",
          )}
        >
          {isCompleted ? "Selesai" : isCompleting ? "Menyimpan..." : completionGate.buttonLabel}
        </button>
      </div>
    </article>
  );

  const editorPanel = (
    <article className="flex min-h-0 min-w-0 flex-col space-y-3 rounded-xl border border-fs-border bg-fs-surface p-3">
      <div className="flex flex-wrap gap-2">
        {visibleLanguageTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveLanguage(tab.value)}
            className={cn(
              "rounded-lg border px-3 py-2 text-center text-xs font-semibold transition sm:px-4",
              activeLanguage === tab.value
                ? "border-fs-border-strong bg-fs-accent-soft text-fs-accent"
                : "border-fs-border bg-fs-surface-soft text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={cn("min-h-0 min-w-0 flex-1", getEditorContainerClassName(layout))}>
        <CodeEditor
          language={activeLanguage}
          value={code[activeLanguage] ?? ""}
          height="100%"
          onChange={handleCodeChange}
        />
      </div>
    </article>
  );

  const reactTargetPanel = (
    <div className="flex h-full min-h-[320px] flex-col gap-4 overflow-y-auto rounded-lg border border-fs-border bg-fs-surface-soft p-4">
      <div className="rounded-lg border border-fs-info/20 bg-fs-info-soft p-4">
        <p className="text-sm font-semibold text-fs-text">React component belum dijalankan di preview</p>
        <p className="mt-2 text-sm leading-6 text-fs-text-soft">
          Untuk module Component Model, sumber kebenaran practice adalah struktur TSX dan cek otomatis.
          Runtime React akan lebih tepat dipakai saat masuk state, events, list, dan form.
        </p>
      </div>

      {challenge.expectedOutput ? (
        <div className="rounded-lg border border-fs-border bg-fs-surface p-4">
          <p className="text-sm font-semibold text-fs-text">
            {challenge.expectedOutput.title ?? "Target latihan"}
          </p>
          <p className="mt-2 text-sm leading-6 text-fs-text-soft">
            {challenge.expectedOutput.description}
          </p>
          {challenge.expectedOutput.lines?.length ? (
            <ul className="mt-3 space-y-2 text-sm leading-6 text-fs-text-soft">
              {challenge.expectedOutput.lines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span aria-hidden="true" className="mt-0.5 text-fs-accent">
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {hasAutoValidation ? (
        <div className="rounded-lg border border-fs-border bg-fs-surface p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-fs-text">Aturan validasi</p>
              <p className="mt-1 text-xs leading-5 text-fs-text-muted">
                Tombol selesai aktif setelah semua validasi wajib lolos.
              </p>
            </div>
            <span className="rounded-full border border-fs-border bg-fs-surface-soft px-3 py-1 text-xs font-semibold text-fs-text-soft">
              {checksSummary}
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {validationResults.map((result) => (
              <li
                key={result.id}
                className={cn(
                  "flex items-start gap-2 rounded-lg border px-3 py-2 text-sm",
                  result.passed
                    ? "border-fs-success/25 bg-fs-success-soft text-fs-text"
                    : "border-fs-border bg-fs-surface-soft text-fs-text-soft",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    result.passed
                      ? "bg-fs-success text-fs-text-inverse"
                      : "border border-fs-border bg-fs-surface text-fs-text-muted",
                  )}
                >
                  {result.passed ? "✓" : "·"}
                </span>
                <span>{result.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );

  const previewPanel = (
    <article className="flex min-h-0 min-w-0 flex-col space-y-3 rounded-xl border border-fs-border bg-fs-surface p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-normal text-fs-text-muted">
          {isReactPractice ? "Target React" : isTypeScriptPractice ? "Catatan TypeScript" : "Preview langsung"}
        </p>
        <span className="rounded-full border border-fs-border bg-fs-surface-soft px-3 py-1 text-xs font-semibold text-fs-text-soft">
          {isReactPractice
            ? "Struktur TSX"
            : isTypeScriptPractice
              ? "Bukan runtime"
              : previewViewport === "full"
                ? "Full"
                : viewportWidth[previewViewport]}
        </span>
      </div>
      <div className="min-h-0 min-w-0 flex-1">
        {isReactPractice ? (
          reactTargetPanel
        ) : (
          <PreviewPanel
            code={code}
            expectedOutput={challenge.expectedOutput}
            heightClassName={getPreviewHeight(layout)}
            viewportWidth={viewportWidth[previewViewport]}
          />
        )}
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
          horizontalLayout ? "h-[calc(100vh-138px)] min-h-[640px]" : "h-[calc(100vh-138px)] min-h-[680px]",
        )}
        style={splitStyle}
      >
        {firstPanel}
        <button
          type="button"
          aria-label={
            horizontalLayout
              ? `Geser untuk mengubah lebar editor dan ${isReactPractice ? "target latihan" : "preview"}`
              : `Geser untuk mengubah tinggi editor dan ${isReactPractice ? "target latihan" : "preview"}`
          }
          onPointerDown={handleSplitterPointerDown}
          className={cn(
            "rounded-full border border-fs-border-strong bg-fs-accent-soft transition hover:border-fs-border-strong hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/40",
            horizontalLayout ? "my-4 cursor-col-resize" : "mx-4 cursor-row-resize",
          )}
        >
          <span className="sr-only">Drag splitter</span>
        </button>
        {secondPanel}
      </div>
    );

  const requirementNotice =
    isRequired && !isCompleted ? (
      <p className="rounded-xl border border-fs-warning/25 bg-fs-warning-soft p-4 text-sm text-fs-warning">
        Blok ini wajib untuk menyelesaikan lesson.
      </p>
    ) : null;

  return (
    <section className="space-y-4 pb-32 xl:pb-6">
      <div className="sticky bottom-3 z-20 xl:hidden">{actionsPanel}</div>

      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[340px_minmax(0,1fr)]">
        <div className="min-w-0 space-y-4 xl:sticky xl:top-[124px] xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto xl:pr-1">
          <div className="hidden xl:block">{actionsPanel}</div>
          {requirementNotice}
          {infoPanel}
        </div>
        <div className="min-w-0">
          {layout === "stacked" ? (
            splitWorkspace
          ) : (
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
        <article className="space-y-3 rounded-xl border border-fs-info/25 bg-fs-info-soft p-4">
          <h4 className="text-sm font-semibold text-fs-info">Contoh solusi</h4>
          <div className="grid gap-3 lg:grid-cols-3">
            {visibleLanguageTabs
              .map((tab) => ({
                label: tab.label,
                code: challenge.solutionCode?.[tab.value] ?? "",
              }))
              .filter((item) => item.code.trim().length > 0)
              .map((item) => (
                <div key={item.label} className="min-w-0 space-y-2">
                  <p className="text-xs font-semibold text-fs-info">{item.label}</p>
                  <pre className="overflow-x-auto rounded-lg border border-fs-code-border bg-fs-code-background p-3 text-xs text-fs-text-soft">
                    <code>{item.code}</code>
                  </pre>
                </div>
              ))}
          </div>
        </article>
      ) : null}
    </section>
  );
}
