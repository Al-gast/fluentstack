"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import type { BeforeMount } from "@monaco-editor/react";
import type { ChallengeLanguage } from "@/types/challenge";

type CodeEditorProps = {
  language: ChallengeLanguage;
  value: string;
  onChange: (value: string) => void;
  height?: string;
};

type MonacoTheme = "vs-dark" | "light";
type MonacoLanguage = "html" | "css" | "javascript" | "typescript";

let didConfigureTypeScriptDefaults = false;

const reactTypeDefinitions = `
declare module "react" {
  export type ReactNode = unknown;
}

declare module "react/jsx-runtime" {
  export const Fragment: unknown;
  export function jsx(type: unknown, props: unknown, key?: unknown): unknown;
  export function jsxs(type: unknown, props: unknown, key?: unknown): unknown;
}

declare namespace React {
  type ReactNode = import("react").ReactNode;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
`;

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

function getMonacoLanguage(language: ChallengeLanguage): MonacoLanguage {
  if (language === "js") {
    return "javascript";
  }

  if (language === "ts" || language === "tsx") {
    return "typescript";
  }

  return language;
}

function getMonacoPath(language: ChallengeLanguage): string {
  if (language === "tsx") {
    return "fluentstack-practice.tsx";
  }

  if (language === "ts") {
    return "fluentstack-practice.ts";
  }

  if (language === "js") {
    return "fluentstack-practice.js";
  }

  if (language === "css") {
    return "fluentstack-practice.css";
  }

  return "fluentstack-practice.html";
}

const configureTypeScriptDefaults: BeforeMount = (monaco) => {
  if (didConfigureTypeScriptDefaults) {
    return;
  }

  didConfigureTypeScriptDefaults = true;
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    allowNonTsExtensions: true,
    esModuleInterop: true,
    jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    target: monaco.languages.typescript.ScriptTarget.ES2020,
  });
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    reactTypeDefinitions,
    "file:///node_modules/@types/react/index.d.ts",
  );
};

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
        language={getMonacoLanguage(language)}
        path={getMonacoPath(language)}
        beforeMount={configureTypeScriptDefaults}
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
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
            alwaysConsumeMouseWheel: false,
          },
          padding: { top: 8, bottom: 16 },
          wordWrap: "on",
        }}
        onChange={(nextValue) => onChange(nextValue ?? "")}
      />
    </div>
  );
}
