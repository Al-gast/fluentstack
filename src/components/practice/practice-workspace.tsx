"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  CodingLab,
  type PracticeLayout,
  type PracticeSplitRatios,
  type PreviewViewport,
} from "@/components/playground/coding-lab";
import { useProgress } from "@/hooks/use-progress";
import { getCodingPracticeCompletionGate } from "@/lib/challenges/completion-gate";
import { validateChallengeCode } from "@/lib/challenges/validate-code";
import { cn } from "@/lib/utils";
import type { ChallengeCode, CodingChallenge } from "@/types/challenge";
import type { Lesson } from "@/types/learning";

type PracticeWorkspaceProps = {
  challenge: CodingChallenge;
  lesson: Lesson;
  codingBlockId: string;
};

type PracticeWorkspaceStatefulProps = PracticeWorkspaceProps & {
  initialCode: ChallengeCode;
  initialChecklist: string[];
  isCompleted: boolean;
  isRequired: boolean;
  storageLabel: string;
  isLoading: boolean;
  onSaveCode: (code: ChallengeCode) => void | Promise<unknown>;
  onSaveChecklist: (items: string[]) => void | Promise<unknown>;
  onComplete: () => void | Promise<unknown>;
};

function resolveCode(starterCode: ChallengeCode, savedCode?: ChallengeCode): ChallengeCode {
  if (!savedCode) {
    return starterCode;
  }

  return {
    html: savedCode.html || starterCode.html,
    css: savedCode.css || starterCode.css,
    js: savedCode.js || starterCode.js,
    ts: savedCode.ts || starterCode.ts,
    tsx: savedCode.tsx || starterCode.tsx,
  };
}

const defaultSplitRatios: PracticeSplitRatios = {
  "code-left": 60,
  "preview-left": 45,
  "code-top": 55,
  "preview-top": 45,
  stacked: 60,
};

const reactStructureSplitRatios: PracticeSplitRatios = {
  "code-left": 68,
  "preview-left": 38,
  "code-top": 62,
  "preview-top": 38,
  stacked: 60,
};

const reactRuntimeSplitRatios: PracticeSplitRatios = {
  "code-left": 58,
  "preview-left": 42,
  "code-top": 56,
  "preview-top": 44,
  stacked: 60,
};

const layoutOptions: Array<{ value: PracticeLayout; label: string }> = [
  { value: "code-left", label: "Code kiri" },
  { value: "preview-left", label: "Preview kiri" },
  { value: "code-top", label: "Code atas" },
  { value: "preview-top", label: "Preview atas" },
  { value: "stacked", label: "Susun vertikal" },
];

const viewportOptions: Array<{ value: PreviewViewport; label: string }> = [
  { value: "mobile", label: "Mobile" },
  { value: "tablet", label: "Tablet" },
  { value: "desktop", label: "Desktop" },
  { value: "full", label: "Full" },
];

type WorkspacePreferenceScope = "standard" | "react-structure" | "react-runtime";

function getDefaultSplitRatios(scope: WorkspacePreferenceScope): PracticeSplitRatios {
  if (scope === "react-structure") {
    return reactStructureSplitRatios;
  }

  if (scope === "react-runtime") {
    return reactRuntimeSplitRatios;
  }

  return defaultSplitRatios;
}

function getLayoutOptionLabel(
  option: { value: PracticeLayout; label: string },
  preferenceScope: WorkspacePreferenceScope,
): string {
  if (preferenceScope === "standard") {
    return option.label;
  }

  if (option.value === "preview-left") {
    return preferenceScope === "react-runtime" ? "Output kiri" : "Target kiri";
  }

  if (option.value === "preview-top") {
    return preferenceScope === "react-runtime" ? "Output atas" : "Target atas";
  }

  return option.label;
}

function isPracticeLayout(value: string | null): value is PracticeLayout {
  return (
    value === "code-left" ||
    value === "preview-left" ||
    value === "code-top" ||
    value === "preview-top" ||
    value === "stacked"
  );
}

function isPreviewViewport(value: string | null): value is PreviewViewport {
  return value === "mobile" || value === "tablet" || value === "desktop" || value === "full";
}

function parseSavedSplitRatios(
  value: string | null,
  defaultRatios: PracticeSplitRatios,
): PracticeSplitRatios | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<Record<PracticeLayout, unknown>>;
    const nextRatios = { ...defaultRatios };

    for (const layout of Object.keys(defaultRatios) as PracticeLayout[]) {
      const ratio = parsed[layout];

      if (typeof ratio === "number" && Number.isFinite(ratio)) {
        nextRatios[layout] = Math.min(75, Math.max(25, ratio));
      }
    }

    return nextRatios;
  } catch {
    return null;
  }
}

function PracticeWorkspaceStateful({
  challenge,
  lesson,
  initialCode,
  initialChecklist,
  isCompleted,
  isRequired,
  storageLabel,
  isLoading,
  onSaveCode,
  onSaveChecklist,
  onComplete,
}: PracticeWorkspaceStatefulProps) {
  const isReactPractice = challenge.validation?.mode === "tsx";
  const reactPracticeMode = isReactPractice ? (challenge.reactPractice?.mode ?? "structure") : null;
  const isReactRuntimePractice = reactPracticeMode === "runtime";
  const preferenceScope: WorkspacePreferenceScope = isReactRuntimePractice
    ? "react-runtime"
    : isReactPractice
      ? "react-structure"
      : "standard";
  const defaultRatios = getDefaultSplitRatios(preferenceScope);
  const layoutStorageKey = `fluentstack-practice-layout-${preferenceScope}`;
  const viewportStorageKey = `fluentstack-practice-viewport-${preferenceScope}`;
  const splitRatioStorageKey = `fluentstack-practice-split-ratios-${preferenceScope}`;
  const [code, setCode] = useState<ChallengeCode>(initialCode);
  const [completedChecklistItems, setCompletedChecklistItems] = useState<string[]>(initialChecklist);
  const [layout, setLayout] = useState<PracticeLayout>("code-left");
  const [viewport, setViewport] = useState<PreviewViewport>("full");
  const [splitRatios, setSplitRatios] = useState<PracticeSplitRatios>(defaultRatios);
  const [isValidationSummaryReady, setIsValidationSummaryReady] = useState(false);
  const [isRuntimeRendered, setIsRuntimeRendered] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedLayout = window.localStorage.getItem(layoutStorageKey);
      const savedViewport = window.localStorage.getItem(viewportStorageKey);
      const savedSplitRatios = parseSavedSplitRatios(
        window.localStorage.getItem(splitRatioStorageKey),
        defaultRatios,
      );

      if (isPracticeLayout(savedLayout)) {
        setLayout(savedLayout);
      }

      if (isPreviewViewport(savedViewport)) {
        setViewport(savedViewport);
      }

      if (savedSplitRatios) {
        setSplitRatios(savedSplitRatios);
      }
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [defaultRatios, layoutStorageKey, splitRatioStorageKey, viewportStorageKey]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsValidationSummaryReady(true);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const validationResults = useMemo(() => {
    if (!isValidationSummaryReady) {
      return (
        challenge.validation?.checks.map((check) => ({
          id: check.id,
          label: check.label,
          passed: false,
          required: check.required ?? true,
          message: "Check akan berjalan setelah editor siap.",
        })) ?? []
      );
    }

    return validateChallengeCode(challenge.validation, code);
  }, [challenge.validation, code, isValidationSummaryReady]);

  const completionGate = useMemo(
    () =>
      getCodingPracticeCompletionGate({
        challenge,
        validationResults,
        completedChecklistItems,
        isValidationReady: isValidationSummaryReady,
        requiresRuntimeRender: isReactRuntimePractice,
        isRuntimeRendered,
      }),
    [
      challenge,
      validationResults,
      completedChecklistItems,
      isReactRuntimePractice,
      isRuntimeRendered,
      isValidationSummaryReady,
    ],
  );

  const handleLayoutChange = (nextLayout: PracticeLayout) => {
    setLayout(nextLayout);
    window.localStorage.setItem(layoutStorageKey, nextLayout);
  };

  const handleViewportChange = (nextViewport: PreviewViewport) => {
    setViewport(nextViewport);
    window.localStorage.setItem(viewportStorageKey, nextViewport);
  };

  const handleSplitRatioChange = (nextRatio: number) => {
    setSplitRatios((previousRatios) => {
      const nextRatios = { ...previousRatios, [layout]: nextRatio };
      window.localStorage.setItem(splitRatioStorageKey, JSON.stringify(nextRatios));

      return nextRatios;
    });
  };

  const handleResetLayout = () => {
    setSplitRatios((previousRatios) => {
      const nextRatios = { ...previousRatios, [layout]: defaultRatios[layout] };
      window.localStorage.setItem(splitRatioStorageKey, JSON.stringify(nextRatios));

      return nextRatios;
    });
  };

  return (
    <main className="min-h-screen bg-[var(--fs-app-gradient)] text-fs-text">
      <header className="sticky top-0 z-20 border-b border-fs-border bg-fs-surface-strong backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/lesson/${lesson.slug}`}
                className="inline-flex items-center rounded-lg border border-fs-border-strong bg-fs-accent-soft px-2.5 py-1.5 text-xs font-semibold text-fs-accent transition hover:border-fs-border-strong hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
              >
                ← Kembali
              </Link>
              {isRequired ? (
                <span className="rounded-lg border border-fs-warning/25 bg-fs-warning-soft px-2.5 py-1.5 text-xs font-semibold text-fs-warning">
                  Blok wajib
                </span>
              ) : null}
            </div>
            <h1 className="mt-1 truncate text-base font-bold text-fs-text sm:text-lg">{challenge.title}</h1>
            <p className="mt-1 text-xs text-fs-text-muted">
              Dari lesson: <span className="text-fs-text-soft">{lesson.title}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-lg border border-fs-border bg-fs-surface px-3 py-1.5 font-semibold text-fs-text-soft">
              {storageLabel}
            </span>
            <span className="rounded-lg border border-fs-border bg-fs-surface px-3 py-1.5 font-semibold text-fs-text-soft">
              {completionGate.summary}
            </span>
            <span
              className={`rounded-lg border px-3 py-1.5 font-semibold ${
                isCompleted
                  ? "border-fs-success/35 bg-fs-success-soft text-fs-success"
                  : "border-fs-warning/30 bg-fs-warning-soft text-fs-warning"
              }`}
            >
              {isLoading ? "Memuat progres..." : isCompleted ? "Selesai" : "Belum selesai"}
            </span>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-2 px-4 pb-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="shrink-0 text-xs font-semibold text-fs-text-muted">Layout</span>
            <div className="flex min-w-0 flex-wrap gap-1.5">
              {layoutOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleLayoutChange(option.value)}
                  className={cn(
                    "rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-fs-focus/30",
                    layout === option.value
                      ? "border-fs-border-strong bg-fs-accent-soft text-fs-accent"
                      : "border-fs-border bg-fs-surface text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text",
                  )}
                >
                  {getLayoutOptionLabel(option, preferenceScope)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-2">
            {isReactPractice ? (
              <span className="rounded-lg border border-fs-border bg-fs-surface px-2.5 py-1.5 text-xs font-semibold text-fs-text-soft">
                {isReactRuntimePractice ? "Mode: live React" : "Mode: struktur TSX"}
              </span>
            ) : (
              <>
                <span className="shrink-0 text-xs font-semibold text-fs-text-muted">Preview</span>
                <div className="flex min-w-0 flex-wrap gap-1.5">
                  {viewportOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleViewportChange(option.value)}
                      className={cn(
                        "rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-fs-focus/30",
                        viewport === option.value
                          ? "border-fs-border-strong bg-fs-accent-soft text-fs-accent"
                          : "border-fs-border bg-fs-surface text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text",
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
            <button
              type="button"
              onClick={handleResetLayout}
              className="rounded-lg border border-fs-border bg-fs-surface px-2.5 py-1.5 text-xs font-semibold text-fs-text-soft transition hover:bg-fs-surface-strong hover:text-fs-text focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
            >
              Reset layout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1760px] px-4 py-5 sm:px-6 lg:px-8">
        <CodingLab
          key={challenge.id}
          challenge={challenge}
          code={code}
          completedChecklistItems={completedChecklistItems}
          isCompleted={isCompleted}
          isRequired={isRequired}
          layout={layout}
          previewViewport={viewport}
          splitRatio={splitRatios[layout]}
          isRuntimeRendered={isRuntimeRendered}
          onChangeSplitRatio={handleSplitRatioChange}
          onChangeCode={(nextCode) => {
            setCode(nextCode);
            setIsRuntimeRendered(false);
          }}
          onRuntimeRenderedChange={setIsRuntimeRendered}
          onToggleChecklist={(item, checked) => {
            const nextItems = checked
              ? Array.from(new Set([...completedChecklistItems, item]))
              : completedChecklistItems.filter((existingItem) => existingItem !== item);

            setCompletedChecklistItems(nextItems);
            onSaveChecklist(nextItems);
          }}
          onSaveCode={() => onSaveCode(code)}
          onReset={() => {
            setCode(challenge.starterCode);
            setCompletedChecklistItems([]);
            setIsRuntimeRendered(false);
            onSaveCode(challenge.starterCode);
            onSaveChecklist([]);
          }}
          onMarkCompleted={() => {
            return Promise.resolve()
              .then(() => onSaveCode(code))
              .then(() => onSaveChecklist(completedChecklistItems))
              .then(() => onComplete());
          }}
        />
      </div>
    </main>
  );
}

export function PracticeWorkspace({
  challenge,
  lesson,
  codingBlockId,
}: PracticeWorkspaceProps) {
  const {
    completedBlockSet,
    saveChallengeCode,
    saveChallengeChecklist,
    getChallengeProgress,
    markCodingPracticeCompleted,
    storageMode,
    isLoading,
  } = useProgress(lesson);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[var(--fs-app-gradient)] text-fs-text">
        <div className="mx-auto flex min-h-screen w-full max-w-[1760px] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <section className="w-full max-w-xl rounded-2xl border border-fs-border bg-fs-surface p-6 text-center shadow-[inset_0_1px_0_var(--fs-border)]">
            <p className="text-sm font-semibold text-fs-accent">Memuat practice workspace</p>
            <h1 className="mt-2 text-xl font-bold text-fs-text">{challenge.title}</h1>
            <p className="mt-3 text-sm leading-6 text-fs-text-muted">
              Kami menyiapkan kode tersimpan, checklist, dan status penyelesaian sebelum editor dibuka.
            </p>
          </section>
        </div>
      </main>
    );
  }

  const progress = getChallengeProgress(challenge.id);
  const initialCode = resolveCode(challenge.starterCode, progress?.savedCode);
  const initialChecklist =
    progress?.completedChecklistItems?.filter((item) => challenge.checklist.includes(item)) ?? [];
  const stateResetKey = `${lesson.id}::${challenge.id}::${codingBlockId}`;

  return (
    <PracticeWorkspaceStateful
      key={stateResetKey}
      challenge={challenge}
      lesson={lesson}
      codingBlockId={codingBlockId}
      initialCode={initialCode}
      initialChecklist={initialChecklist}
      isCompleted={completedBlockSet.has(codingBlockId) || (progress?.isCompleted ?? false)}
      isRequired={lesson.completionRule.requiredBlockIds.includes(codingBlockId)}
      storageLabel={storageMode === "logged-in" ? "Progres akun" : "Progres browser"}
      isLoading={isLoading}
      onSaveCode={(code) => saveChallengeCode(challenge.id, code)}
      onSaveChecklist={(items) => saveChallengeChecklist(challenge.id, items)}
      onComplete={() => markCodingPracticeCompleted({ blockId: codingBlockId, challengeId: challenge.id })}
    />
  );
}
