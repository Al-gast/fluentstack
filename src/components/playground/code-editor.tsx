"use client";

import Editor from "@monaco-editor/react";
import type { ChallengeLanguage } from "@/types/challenge";

type CodeEditorProps = {
  language: ChallengeLanguage;
  value: string;
  onChange: (value: string) => void;
  height?: string;
};

export function CodeEditor({
  language,
  value,
  onChange,
  height = "420px",
}: CodeEditorProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-950/80">
      <Editor
        height={height}
        theme="vs-dark"
        language={language}
        value={value}
        loading={<div className="p-4 text-sm text-zinc-400">Memuat editor...</div>}
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
