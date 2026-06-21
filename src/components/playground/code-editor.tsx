"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import type { ChallengeLanguage } from "@/types/challenge";

type CodeEditorProps = {
  language: ChallengeLanguage;
  value: string;
  onChange: (value: string) => void;
  height?: string;
};

type MonacoTheme = "vs-dark" | "light";

function getCurrentMonacoTheme(): MonacoTheme {
  if (typeof document === "undefined") {
    return "vs-dark";
  }

  const root = document.documentElement;
  const theme = root.dataset.theme;

  return root.classList.contains("light") ||
    root.classList.contains("paper") ||
    theme === "light" ||
    theme === "paper"
    ? "light"
    : "vs-dark";
}

export function CodeEditor({
  language,
  value,
  onChange,
  height = "420px",
}: CodeEditorProps) {
  const [editorTheme, setEditorTheme] = useState<MonacoTheme>("vs-dark");

  useEffect(() => {
    const updateTheme = () => setEditorTheme(getCurrentMonacoTheme());
    const observer = new MutationObserver(updateTheme);

    updateTheme();
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-full min-w-0 overflow-hidden rounded-xl border border-fs-code-border bg-fs-code-background">
      <Editor
        height={height}
        theme={editorTheme}
        language={language}
        value={value}
        loading={<div className="p-4 text-sm text-fs-text-muted">Memuat editor...</div>}
        options={{
          minimap: { enabled: false },
          fontSize: 13,
          lineHeight: 20,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          automaticLayout: true,
          tabSize: 2,
          scrollBeyondLastLine: false,
          wordWrap: "on",
        }}
        onChange={(nextValue) => onChange(nextValue ?? "")}
      />
    </div>
  );
}
