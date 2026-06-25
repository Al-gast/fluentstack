"use client";

import { useEffect, useMemo, useState } from "react";
import type { ChallengeCode, ChallengeExpectedOutput } from "@/types/challenge";

type ConsoleLevel = "log" | "warn" | "error";

type ConsoleEntry = {
  id: string;
  runId: string;
  level: ConsoleLevel;
  text: string;
};

type PreviewConsoleMessage = {
  source: "fluentstack-preview-console";
  runId: string;
  level: ConsoleLevel;
  values: string[];
};

type PreviewPanelProps = {
  code: ChallengeCode;
  expectedOutput?: ChallengeExpectedOutput;
  heightClassName?: string;
  viewportWidth?: string;
};

function isPreviewConsoleMessage(value: unknown): value is PreviewConsoleMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<PreviewConsoleMessage>;

  return (
    candidate.source === "fluentstack-preview-console" &&
    typeof candidate.runId === "string" &&
    (candidate.level === "log" || candidate.level === "warn" || candidate.level === "error") &&
    Array.isArray(candidate.values) &&
    candidate.values.every((item) => typeof item === "string")
  );
}

function serializeScriptValue(value: string): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function createPreviewRunId(html: string, css: string, js: string): string {
  const source = `${html}\n${css}\n${js}`;
  let hash = 0;

  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 31 + source.charCodeAt(index)) | 0;
  }

  return `preview-${source.length}-${(hash >>> 0).toString(36)}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export function PreviewPanel({
  code,
  expectedOutput,
  heightClassName = "h-[320px]",
  viewportWidth = "100%",
}: PreviewPanelProps) {
  const [consoleEntries, setConsoleEntries] = useState<ConsoleEntry[]>([]);
  const shouldShowConsole = expectedOutput?.kind === "console" || code.js.includes("console.");
  const runId = useMemo(
    () => createPreviewRunId(code.html, code.css, code.js),
    [code.css, code.html, code.js],
  );
  const visibleConsoleEntries = consoleEntries.filter((entry) => entry.runId === runId);
  const previewShellClassName = shouldShowConsole
    ? "mx-auto min-h-0 flex-1 overflow-hidden rounded-lg bg-white"
    : "mx-auto h-full min-w-0 overflow-hidden rounded-lg bg-white";
  const iframeHeightClassName = shouldShowConsole ? "h-full" : heightClassName;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!isPreviewConsoleMessage(event.data) || event.data.runId !== runId) {
        return;
      }

      const text = event.data.values.length > 0 ? event.data.values.join(" ") : "";
      const nextEntry: ConsoleEntry = {
        id: `${event.data.runId}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        runId: event.data.runId,
        level: event.data.level,
        text,
      };

      setConsoleEntries((previousEntries) => {
        const currentRunEntries = previousEntries.filter((entry) => entry.runId === event.data.runId);

        return [...currentRunEntries, nextEntry].slice(-40);
      });
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [runId]);

  const srcDoc = useMemo(() => {
    const serializedJs = serializeScriptValue(code.js);

    return `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${code.css}</style>
  </head>
  <body>
    ${code.html}
    <script>
      (function setupFluentStackConsole() {
        const runId = ${JSON.stringify(runId)};
        const source = "fluentstack-preview-console";

        function formatConsoleValue(value) {
          if (value instanceof Error) {
            return value.name + ": " + value.message;
          }

          if (typeof value === "string") {
            return value;
          }

          if (typeof value === "undefined") {
            return "undefined";
          }

          if (typeof value === "function") {
            return value.toString();
          }

          try {
            const serialized = JSON.stringify(value);
            return typeof serialized === "undefined" ? String(value) : serialized;
          } catch {
            return String(value);
          }
        }

        function postConsole(level, values) {
          window.parent.postMessage(
            {
              source,
              runId,
              level,
              values: Array.prototype.slice.call(values).map(formatConsoleValue),
            },
            "*",
          );
        }

        ["log", "warn", "error"].forEach(function patchConsole(level) {
          const original = console[level].bind(console);

          console[level] = function fluentStackConsoleProxy() {
            postConsole(level, arguments);
            original.apply(console, arguments);
          };
        });

        window.addEventListener("error", function handleError(event) {
          postConsole("error", [event.message]);
        });

        window.addEventListener("unhandledrejection", function handleRejection(event) {
          postConsole("error", [event.reason]);
        });
      })();

      try {
        const userCode = ${serializedJs};
        new Function(userCode)();
      } catch (error) {
        console.error(error);
        const pre = document.createElement("pre");
        pre.textContent = String(error);
        pre.style.color = "#fca5a5";
        pre.style.padding = "12px";
        document.body.appendChild(pre);
      }
    </script>
  </body>
</html>`;
  }, [code.css, code.html, code.js, runId]);

  return (
    <div className="flex h-full min-w-0 flex-col gap-2 overflow-hidden rounded-xl border border-fs-code-border bg-fs-code-surface p-2">
      <div
        className={previewShellClassName}
        style={{ width: viewportWidth, maxWidth: "100%" }}
      >
        <iframe
          title="Coding practice preview"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
          className={`${iframeHeightClassName} w-full border-0`}
        />
      </div>

      {shouldShowConsole ? (
        <section className="min-h-[150px] max-h-[34%] overflow-hidden rounded-lg border border-fs-code-border bg-fs-code-background">
          <div className="flex items-center justify-between gap-3 border-b border-fs-code-border px-3 py-2">
            <p className="text-xs font-semibold text-fs-text">Console output</p>
            <span className="rounded-full border border-fs-border bg-fs-surface px-2 py-0.5 text-[11px] font-semibold text-fs-text-muted">
              {visibleConsoleEntries.length} line
            </span>
          </div>
          <div className="h-[calc(100%-37px)] overflow-auto px-3 py-2 font-mono text-xs leading-5">
            {visibleConsoleEntries.length > 0 ? (
              <ul className="space-y-1">
                {visibleConsoleEntries.map((entry) => (
                  <li key={entry.id} className="flex gap-2">
                    <span
                      className={
                        entry.level === "error"
                          ? "shrink-0 text-fs-danger"
                          : entry.level === "warn"
                            ? "shrink-0 text-fs-warning"
                            : "shrink-0 text-fs-success"
                      }
                    >
                      {entry.level}
                    </span>
                    <span className="min-w-0 whitespace-pre-wrap break-words text-fs-text-soft">
                      {entry.text}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-fs-text-muted">Belum ada output console.</p>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
}
