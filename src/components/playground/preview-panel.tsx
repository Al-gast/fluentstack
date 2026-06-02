"use client";

import { useMemo } from "react";
import type { ChallengeCode } from "@/types/challenge";

type PreviewPanelProps = {
  code: ChallengeCode;
  heightClassName?: string;
  viewportWidth?: string;
};

export function PreviewPanel({
  code,
  heightClassName = "h-[320px]",
  viewportWidth = "100%",
}: PreviewPanelProps) {
  const srcDoc = useMemo(() => {
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
      try {
        ${code.js}
      } catch (error) {
        const pre = document.createElement("pre");
        pre.textContent = String(error);
        pre.style.color = "#fca5a5";
        pre.style.padding = "12px";
        document.body.appendChild(pre);
      }
    </script>
  </body>
</html>`;
  }, [code.css, code.html, code.js]);

  return (
    <div className="h-full min-w-0 overflow-auto rounded-xl border border-zinc-700/80 bg-zinc-900/80 p-2">
      <div
        className="mx-auto h-full min-w-0 overflow-hidden rounded-lg bg-white"
        style={{ width: viewportWidth, maxWidth: "100%" }}
      >
        <iframe
          title="Coding practice preview"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
          className={`${heightClassName} w-full border-0`}
        />
      </div>
    </div>
  );
}
