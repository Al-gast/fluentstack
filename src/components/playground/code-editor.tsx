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
  export function useEffect(
    effect: () => void | (() => void),
    dependencies?: unknown[],
  ): void;
  export function useState<T>(
    initialState: T | (() => T),
  ): [T, (nextState: T | ((previousState: T) => T)) => void];
  export function useMemo<T>(calculateValue: () => T, dependencies: unknown[]): T;
  export function useCallback<T extends (...args: any[]) => any>(
    callback: T,
    dependencies: unknown[],
  ): T;
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function memo<T>(component: T): T;
}

declare module "react/jsx-runtime" {
  export namespace JSX {
    type Element = unknown;

    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  export const Fragment: unknown;
  export function jsx(type: unknown, props: unknown, key?: unknown): unknown;
  export function jsxs(type: unknown, props: unknown, key?: unknown): unknown;
}

declare module "next/image" {
  type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    preload?: boolean;
    sizes?: string;
  };

  const Image: (props: ImageProps) => JSX.Element;
  export default Image;
}

declare module "next/font/google" {
  type FontOptions = {
    subsets: string[];
    display?: "auto" | "block" | "swap" | "fallback" | "optional";
    variable?: string;
  };

  type NextFont = {
    className: string;
    variable: string;
  };

  export function Montserrat(options: FontOptions): NextFont;
}

declare module "next/dynamic" {
  type DynamicComponent = (props: any) => JSX.Element;

  type DynamicOptions = {
    loading?: () => JSX.Element;
    ssr?: boolean;
  };

  const dynamic: (
    loader: () => Promise<{ default: DynamicComponent }>,
    options?: DynamicOptions,
  ) => DynamicComponent;

  export default dynamic;
}

declare module "@/components/course-insights" {
  const CourseInsights: (props: { courseId: string }) => JSX.Element;
  export default CourseInsights;
}

declare module "fuse.js" {
  export default class Fuse<T> {
    constructor(list: T[]);
    search(query: string): Array<{ item: T }>;
  }
}

declare namespace React {
  type ReactNode = import("react").ReactNode;
}

declare namespace JSX {
  type Element = unknown;

  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "react-hook-form" {
  export type FieldValues = object;
  export type FieldError = { message?: string };
  export type FieldErrors<T extends FieldValues> = Partial<
    Record<keyof T, FieldError>
  >;
  export type SubmitHandler<T extends FieldValues> = (
    values: T,
  ) => void | Promise<void>;
  export type UseFormRegisterReturn = {
    name: string;
    onBlur: () => void;
    onChange: () => void;
    ref: () => void;
  };

  export function useForm<T extends FieldValues>(options?: {
    resolver?: unknown;
    defaultValues?: Partial<T>;
  }): {
    register: (name: keyof T & string) => UseFormRegisterReturn;
    handleSubmit: (
      handler: SubmitHandler<T>,
      onInvalid?: (errors: FieldErrors<T>) => void,
    ) => (event?: unknown) => void;
    formState: { errors: FieldErrors<T>; isSubmitting: boolean };
    reset: (values?: Partial<T>) => void;
    setFocus: (name: keyof T & string) => void;
  };
}

declare module "@hookform/resolvers/zod" {
  export function zodResolver(schema: unknown): unknown;
}

declare module "vitest" {
  export type TestCallback = () => void | Promise<void>;
  export function describe(name: string, callback: TestCallback): void;
  export function it(name: string, callback: TestCallback): void;
  export const test: typeof it;
  export function beforeAll(callback: TestCallback): void;
  export function afterEach(callback: TestCallback): void;
  export function afterAll(callback: TestCallback): void;
  export function expect(actual: unknown): {
    toBe(expected: unknown): void;
    toEqual(expected: unknown): void;
    toBeInTheDocument(): void;
    toHaveTextContent(expected: string | RegExp): void;
    toHaveValue(expected: string | number): void;
    toBeVisible(): void;
  };
}

declare module "@testing-library/react" {
  export function render(ui: unknown): { unmount(): void };
  export const screen: {
    getByRole(role: string, options?: { name?: string | RegExp }): unknown;
    findByRole(role: string, options?: { name?: string | RegExp }): Promise<unknown>;
    getByLabelText(text: string | RegExp): unknown;
    getByText(text: string | RegExp): unknown;
    findByText(text: string | RegExp): Promise<unknown>;
    queryByRole(role: string, options?: { name?: string | RegExp }): unknown;
  };
}

declare module "@testing-library/user-event" {
  export type UserEvent = {
    click(element: unknown): Promise<void>;
    type(element: unknown, text: string): Promise<void>;
  };

  const userEvent: {
    setup(): UserEvent;
  };

  export default userEvent;
}

declare module "@testing-library/jest-dom/vitest" {}

declare module "msw" {
  export class HttpResponse {
    constructor(body?: BodyInit | null, init?: { status?: number });
    static json(body: unknown, init?: { status?: number }): HttpResponse;
  }

  export const http: {
    get(path: string, resolver: () => HttpResponse): unknown;
  };
}

declare module "msw/node" {
  export function setupServer(...handlers: unknown[]): {
    listen(): void;
    resetHandlers(): void;
    close(): void;
    use(...handlers: unknown[]): void;
  };
}

declare module "@playwright/test" {
  export type Locator = {
    click(): Promise<void>;
    fill(value: string): Promise<void>;
  };

  export type Page = {
    goto(url: string): Promise<void>;
    getByRole(role: string, options?: { name?: string | RegExp }): Locator;
    getByLabel(text: string | RegExp): Locator;
    getByText(text: string | RegExp): Locator;
  };

  export const test: (
    name: string,
    callback: (fixtures: { page: Page }) => void | Promise<void>,
  ) => void;

  export function expect(target: unknown): {
    toBeVisible(): Promise<void>;
    toHaveURL(url: string | RegExp): Promise<void>;
    toHaveText(text: string | RegExp): Promise<void>;
  };
}

declare module "zod" {
  export interface ZodType<Output = unknown> {
    readonly _output?: Output;
    safeParse(value: unknown):
      | { success: true; data: Output }
      | { success: false; error: unknown };
  }

  export interface ZodString extends ZodType<string> {
    trim(): ZodString;
    min(length: number, options?: unknown): ZodString;
    max(length: number, options?: unknown): ZodString;
  }

  export type ZodRawShape = Record<string, ZodType<unknown>>;
  export type InferShape<Shape extends ZodRawShape> = {
    [Key in keyof Shape]: Shape[Key] extends ZodType<infer Output>
      ? Output
      : never;
  };
  export interface ZodObject<Shape extends ZodRawShape>
    extends ZodType<InferShape<Shape>> {}

  export const z: {
    string(): ZodString;
    email(options?: unknown): ZodString;
    object<Shape extends ZodRawShape>(shape: Shape): ZodObject<Shape>;
  };

  export namespace z {
    type infer<Schema extends ZodType<unknown>> = Schema extends ZodType<
      infer Output
    >
      ? Output
      : never;
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
