"use client";

import { Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ChallengeExpectedOutput } from "@/types/challenge";

type RuntimeStatus = "loading" | "ready" | "running" | "rendered" | "error";

type RuntimeMessage = {
  source: "fluentstack-react-runtime";
  type: "ready" | "rendered" | "error";
  runId?: string;
  message?: string;
};

type ReactRuntimePreviewProps = {
  code: string;
  componentName: string;
  expectedOutput?: ChallengeExpectedOutput;
  onRuntimeRenderedChange: (isRendered: boolean) => void;
};

function createRunId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `react-runtime-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getStatusCopy(status: RuntimeStatus, hasPendingChanges: boolean): string {
  if (hasPendingChanges) {
    return "Ada perubahan belum dijalankan";
  }

  if (status === "loading") {
    return "Menyiapkan runtime React";
  }

  if (status === "running") {
    return "Menjalankan preview";
  }

  if (status === "error") {
    return "Runtime perlu diperbaiki";
  }

  return status === "rendered" ? "Preview berjalan" : "Siap dijalankan";
}

export function ReactRuntimePreview({
  code,
  componentName,
  expectedOutput,
  onRuntimeRenderedChange,
}: ReactRuntimePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const currentRunIdRef = useRef<string | null>(null);
  const currentRunCodeRef = useRef<string | null>(null);
  const [isFrameReady, setIsFrameReady] = useState(false);
  const [status, setStatus] = useState<RuntimeStatus>("loading");
  const [runtimeMessage, setRuntimeMessage] = useState<string | null>(null);
  const [lastAttemptedCode, setLastAttemptedCode] = useState<string | null>(null);
  const [frameVersion, setFrameVersion] = useState(0);

  const hasPendingChanges = lastAttemptedCode !== null && lastAttemptedCode !== code;
  const visibleRuntimeMessage = hasPendingChanges
    ? "Kode berubah. Jalankan preview lagi untuk melihat hasil terbaru."
    : runtimeMessage;

  useEffect(() => {
    const handleRuntimeMessage = (event: MessageEvent<RuntimeMessage>) => {
      if (event.source !== iframeRef.current?.contentWindow) {
        return;
      }

      const data = event.data;

      if (!data || data.source !== "fluentstack-react-runtime") {
        return;
      }

      if (data.type === "ready") {
        setIsFrameReady(true);
        setStatus((previousStatus) => (previousStatus === "loading" ? "ready" : previousStatus));
        return;
      }

      if (!data.runId || data.runId !== currentRunIdRef.current) {
        return;
      }

      if (data.type === "rendered") {
        const renderedCode = currentRunCodeRef.current;
        const matchesLatestCode = renderedCode === code;

        setStatus(matchesLatestCode ? "rendered" : "ready");
        setRuntimeMessage(
          matchesLatestCode
            ? "Component berhasil dirender. Coba interaksikan UI sebelum menandai selesai."
            : "Preview selesai untuk kode sebelumnya. Jalankan lagi untuk melihat perubahan terbaru.",
        );
        onRuntimeRenderedChange(matchesLatestCode);
        return;
      }

      setStatus("error");
      setRuntimeMessage(data.message ?? "React runtime tidak dapat menjalankan kode ini.");
      onRuntimeRenderedChange(false);
    };

    window.addEventListener("message", handleRuntimeMessage);

    return () => window.removeEventListener("message", handleRuntimeMessage);
  }, [code, onRuntimeRenderedChange]);

  const handleRun = () => {
    if (!isFrameReady || !iframeRef.current?.contentWindow) {
      setStatus("loading");
      setRuntimeMessage("Runtime masih dimuat. Coba jalankan lagi sesaat lagi.");
      return;
    }

    const runId = createRunId();
    currentRunIdRef.current = runId;
    currentRunCodeRef.current = code;
    setLastAttemptedCode(code);
    setStatus("running");
    setRuntimeMessage(null);
    onRuntimeRenderedChange(false);

    iframeRef.current.contentWindow.postMessage(
      {
        source: "fluentstack-react-preview",
        type: "run",
        runId,
        code,
        componentName,
      },
      "*",
    );
  };

  const handleReload = () => {
    currentRunIdRef.current = null;
    currentRunCodeRef.current = null;
    setIsFrameReady(false);
    setStatus("loading");
    setRuntimeMessage(null);
    setLastAttemptedCode(null);
    onRuntimeRenderedChange(false);
    setFrameVersion((previousVersion) => previousVersion + 1);
  };

  return (
    <div className="flex h-full min-h-[320px] flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              status === "error"
                ? "border-fs-warning/30 bg-fs-warning-soft text-fs-warning"
                : status === "rendered" && !hasPendingChanges
                  ? "border-fs-success/30 bg-fs-success-soft text-fs-success"
                  : "border-fs-border bg-fs-surface-soft text-fs-text-soft",
            )}
          >
            {getStatusCopy(status, hasPendingChanges)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReload}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-fs-border bg-fs-surface text-fs-text-soft transition hover:bg-fs-surface-strong hover:text-fs-text focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
            aria-label="Muat ulang React runtime"
            title="Muat ulang runtime"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleRun}
            disabled={!isFrameReady || status === "running"}
            className="inline-flex items-center gap-2 rounded-lg bg-fs-accent px-3 py-2 text-xs font-semibold text-fs-text-inverse transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 disabled:cursor-not-allowed disabled:bg-fs-surface-strong disabled:text-fs-text-muted"
          >
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
            {status === "running" ? "Menjalankan" : "Jalankan preview"}
          </button>
        </div>
      </div>

      {visibleRuntimeMessage ? (
        <p
          className={cn(
            "rounded-lg border px-3 py-2 text-xs leading-5",
            status === "error"
              ? "border-fs-warning/25 bg-fs-warning-soft text-fs-warning"
              : "border-fs-info/20 bg-fs-info-soft text-fs-text-soft",
          )}
        >
          {visibleRuntimeMessage}
        </p>
      ) : null}

      <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-fs-border bg-white">
        <iframe
          key={frameVersion}
          ref={iframeRef}
          title="React practice runtime"
          src="/practice/runtime"
          sandbox="allow-scripts allow-forms"
          className="h-full min-h-[320px] w-full border-0"
        />
      </div>

      {expectedOutput ? (
        <div className="rounded-lg border border-fs-border bg-fs-surface p-3">
          <p className="text-xs font-semibold text-fs-text">{expectedOutput.title ?? "Target interaksi"}</p>
          <p className="mt-1 text-xs leading-5 text-fs-text-muted">{expectedOutput.description}</p>
          {expectedOutput.lines?.length ? (
            <ul className="mt-2 space-y-1.5 text-xs leading-5 text-fs-text-soft">
              {expectedOutput.lines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span aria-hidden="true" className="text-fs-accent">
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
