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
  onSaveCode: (code: ChallengeCode) => void;
  onSaveChecklist: (items: string[]) => void;
  onComplete: () => void;
};

function resolveCode(starterCode: ChallengeCode, savedCode?: ChallengeCode): ChallengeCode {
  if (!savedCode) {
    return starterCode;
  }

  return {
    html: savedCode.html || starterCode.html,
    css: savedCode.css || starterCode.css,
    js: savedCode.js || starterCode.js,
  };
}

const defaultSplitRatios: PracticeSplitRatios = {
  "code-left": 60,
  "preview-left": 45,
  "code-top": 55,
  "preview-top": 45,
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

function parseSavedSplitRatios(value: string | null): PracticeSplitRatios | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<Record<PracticeLayout, unknown>>;
    const nextRatios = { ...defaultSplitRatios };

    for (const layout of Object.keys(defaultSplitRatios) as PracticeLayout[]) {
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
  const [code, setCode] = useState<ChallengeCode>(initialCode);
  const [completedChecklistItems, setCompletedChecklistItems] = useState<string[]>(initialChecklist);
  const [layout, setLayout] = useState<PracticeLayout>("code-left");
  const [viewport, setViewport] = useState<PreviewViewport>("full");
  const [splitRatios, setSplitRatios] = useState<PracticeSplitRatios>(defaultSplitRatios);
  const [isValidationSummaryReady, setIsValidationSummaryReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedLayout = window.localStorage.getItem("fluentstack-practice-layout");
      const savedViewport = window.localStorage.getItem("fluentstack-practice-viewport");
      const savedSplitRatios = parseSavedSplitRatios(
        window.localStorage.getItem("fluentstack-practice-split-ratios"),
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
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsValidationSummaryReady(true);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const validationSummary = useMemo(() => {
    if (!isValidationSummaryReady) {
      return challenge.validation ? "Menyiapkan checks..." : `${completedChecklistItems.length}/${challenge.checklist.length} checklist`;
    }

    const results = validateChallengeCode(challenge.validation, code);

    if (results.length === 0) {
      return `${completedChecklistItems.length}/${challenge.checklist.length} checklist`;
    }

    const requiredResults = results.filter((result) => result.required);
    const passedRequired = requiredResults.filter((result) => result.passed).length;

    return `${passedRequired}/${requiredResults.length} checks lolos`;
  }, [challenge, code, completedChecklistItems.length, isValidationSummaryReady]);

  const handleLayoutChange = (nextLayout: PracticeLayout) => {
    setLayout(nextLayout);
    window.localStorage.setItem("fluentstack-practice-layout", nextLayout);
  };

  const handleViewportChange = (nextViewport: PreviewViewport) => {
    setViewport(nextViewport);
    window.localStorage.setItem("fluentstack-practice-viewport", nextViewport);
  };

  const handleSplitRatioChange = (nextRatio: number) => {
    setSplitRatios((previousRatios) => {
      const nextRatios = { ...previousRatios, [layout]: nextRatio };
      window.localStorage.setItem("fluentstack-practice-split-ratios", JSON.stringify(nextRatios));

      return nextRatios;
    });
  };

  const handleResetLayout = () => {
    setSplitRatios((previousRatios) => {
      const nextRatios = { ...previousRatios, [layout]: defaultSplitRatios[layout] };
      window.localStorage.setItem("fluentstack-practice-split-ratios", JSON.stringify(nextRatios));

      return nextRatios;
    });
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_circle_at_10%_-10%,rgba(8,145,178,0.24),transparent_45%),radial-gradient(1100px_circle_at_90%_0%,rgba(99,102,241,0.18),transparent_50%),#070b14] text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="min-w-0">
            <Link
              href={`/lesson/${lesson.slug}`}
              className="inline-flex items-center rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-400/15 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
            >
              ← Kembali ke lesson
            </Link>
            <h1 className="mt-1 truncate text-lg font-bold text-zinc-50 sm:text-xl">{challenge.title}</h1>
            <p className="mt-1 text-xs text-zinc-400">
              Dari lesson: <span className="text-zinc-200">{lesson.title}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5 font-semibold text-zinc-300">
              {storageLabel}
            </span>
            <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5 font-semibold text-zinc-300">
              {validationSummary}
            </span>
            <span
              className={`rounded-lg border px-3 py-1.5 font-semibold ${
                isCompleted
                  ? "border-emerald-300/35 bg-emerald-500/15 text-emerald-100"
                  : "border-amber-300/30 bg-amber-500/10 text-amber-100"
              }`}
            >
              {isLoading ? "Memuat progres..." : isCompleted ? "Selesai" : "Belum selesai"}
            </span>
            {isRequired ? (
              <span className="rounded-lg border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 font-semibold text-cyan-100">
                Blok wajib
              </span>
            ) : null}
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[1760px] gap-3 px-4 pb-3 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)_auto] lg:items-end lg:px-8">
          <div>
            <p className="mb-2 text-xs font-semibold text-zinc-400">Layout workspace</p>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {layoutOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleLayoutChange(option.value)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30",
                    layout === option.value
                      ? "border-cyan-300/45 bg-cyan-500/15 text-cyan-100"
                      : "border-zinc-700/80 bg-zinc-950/55 text-zinc-300 hover:bg-zinc-800",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold text-zinc-400">Preview viewport</p>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {viewportOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleViewportChange(option.value)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30",
                    viewport === option.value
                      ? "border-cyan-300/45 bg-cyan-500/15 text-cyan-100"
                      : "border-zinc-700/80 bg-zinc-950/55 text-zinc-300 hover:bg-zinc-800",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleResetLayout}
            className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
          >
            Reset layout
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1760px] px-4 py-5 sm:px-6 lg:px-8">
        <CodingLab
          challenge={challenge}
          code={code}
          completedChecklistItems={completedChecklistItems}
          isCompleted={isCompleted}
          isRequired={isRequired}
          layout={layout}
          previewViewport={viewport}
          splitRatio={splitRatios[layout]}
          onChangeSplitRatio={handleSplitRatioChange}
          onChangeCode={setCode}
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
            onSaveCode(challenge.starterCode);
            onSaveChecklist([]);
          }}
          onMarkCompleted={() => {
            onSaveCode(code);
            onSaveChecklist(completedChecklistItems);
            onComplete();
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

  const progress = getChallengeProgress(challenge.id);
  const initialCode = resolveCode(challenge.starterCode, progress?.savedCode);
  const initialChecklist =
    progress?.completedChecklistItems?.filter((item) => challenge.checklist.includes(item)) ?? [];
  const stateResetKey = [
    challenge.id,
    progress?.savedCode?.html ?? "",
    progress?.savedCode?.css ?? "",
    progress?.savedCode?.js ?? "",
    (progress?.completedChecklistItems ?? []).join("|"),
  ].join("::");

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
