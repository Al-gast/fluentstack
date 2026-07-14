"use client";

import { transform } from "@babel/standalone";
import * as React from "react";
import { useEffect, useRef } from "react";
import { createRoot, type Root } from "react-dom/client";

type RuntimeRunMessage = {
  source: "fluentstack-react-preview";
  type: "run";
  runId: string;
  code: string;
  componentName: string;
};

type RuntimeResponse = {
  source: "fluentstack-react-runtime";
  type: "ready" | "rendered" | "error";
  runId?: string;
  message?: string;
};

type RuntimeErrorBoundaryProps = {
  children: React.ReactNode;
  onError: (error: Error) => void;
};

type RuntimeErrorBoundaryState = {
  error: Error | null;
};

class RuntimeErrorBoundary extends React.Component<RuntimeErrorBoundaryProps, RuntimeErrorBoundaryState> {
  state: RuntimeErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): RuntimeErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error) {
    this.props.onError(error);
  }

  render() {
    if (this.state.error) {
      return (
        <div role="alert" className="runtime-error">
          Component gagal dirender.
        </div>
      );
    }

    return this.props.children;
  }
}

function isRuntimeRunMessage(value: unknown): value is RuntimeRunMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const message = value as Partial<RuntimeRunMessage>;

  return (
    message.source === "fluentstack-react-preview" &&
    message.type === "run" &&
    typeof message.runId === "string" &&
    typeof message.code === "string" &&
    typeof message.componentName === "string"
  );
}

function assertSafeRuntimeCode(code: string, componentName: string) {
  if (!/^[A-Za-z_$][\w$]*$/.test(componentName)) {
    throw new Error("Nama component runtime tidak valid.");
  }

  if (/\bimport\s*\(/.test(code)) {
    throw new Error("Dynamic import belum didukung di React practice.");
  }

  const imports = Array.from(code.matchAll(/\bimport(?:\s+type)?[\s\S]*?\sfrom\s*["']([^"']+)["']/g));

  if (imports.some((match) => match[1] !== "react")) {
    throw new Error("React practice hanya mendukung import dari react.");
  }
}

function createRuntimeComponent(code: string, componentName: string): React.ComponentType {
  assertSafeRuntimeCode(code, componentName);

  const result = transform(code, {
    filename: "fluentstack-practice.tsx",
    presets: [
      ["typescript", { allExtensions: true, isTSX: true }],
      ["react", { runtime: "classic" }],
    ],
    plugins: ["transform-modules-commonjs"],
  });
  const transformedCode = result.code;

  if (!transformedCode) {
    throw new Error("TSX tidak dapat dikompilasi.");
  }

  const reactModule = { ...React, default: React };
  const runtimeRequire = (moduleName: string) => {
    if (moduleName === "react") {
      return reactModule;
    }

    throw new Error(`Import ${moduleName} belum didukung di React practice.`);
  };
  const runtimeModule = { exports: {} };
  const evaluator = new Function(
    "React",
    "require",
    "module",
    "exports",
    `${transformedCode}\nreturn typeof ${componentName} === "function" ? ${componentName} : null;`,
  );
  const component = evaluator(React, runtimeRequire, runtimeModule, runtimeModule.exports);

  if (typeof component !== "function") {
    throw new Error(`Component ${componentName} tidak ditemukan.`);
  }

  return component as React.ComponentType;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "React runtime tidak dapat menjalankan kode ini.";
}

export default function ReactPracticeRuntimePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Root | null>(null);
  const activeRunIdRef = useRef<string | null>(null);
  const failedRunIdsRef = useRef(new Set<string>());

  useEffect(() => {
    const postToParent = (message: RuntimeResponse) => {
      window.parent.postMessage(message, "*");
    };

    const reportActiveRunError = (error: unknown) => {
      if (!activeRunIdRef.current) {
        return;
      }

      failedRunIdsRef.current.add(activeRunIdRef.current);

      postToParent({
        source: "fluentstack-react-runtime",
        type: "error",
        runId: activeRunIdRef.current,
        message: getErrorMessage(error),
      });
    };

    const handleWindowError = (event: ErrorEvent) => {
      reportActiveRunError(event.error ?? event.message);
    };
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      reportActiveRunError(event.reason);
    };
    const handleMessage = (event: MessageEvent<unknown>) => {
      if (event.source !== window.parent || !isRuntimeRunMessage(event.data) || !containerRef.current) {
        return;
      }

      const message = event.data;
      activeRunIdRef.current = message.runId;
      failedRunIdsRef.current.delete(message.runId);

      try {
        const RuntimeComponent = createRuntimeComponent(message.code, message.componentName);

        if (!rootRef.current) {
          rootRef.current = createRoot(containerRef.current);
        }

        rootRef.current.render(
          <RuntimeErrorBoundary key={message.runId} onError={(error) => reportActiveRunError(error)}>
            <RuntimeComponent />
          </RuntimeErrorBoundary>,
        );
        window.requestAnimationFrame(() => {
          if (failedRunIdsRef.current.has(message.runId)) {
            return;
          }

          postToParent({
            source: "fluentstack-react-runtime",
            type: "rendered",
            runId: message.runId,
          });
        });
      } catch (error) {
        reportActiveRunError(error);
      }
    };

    window.addEventListener("error", handleWindowError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("message", handleMessage);
    postToParent({ source: "fluentstack-react-runtime", type: "ready" });

    return () => {
      window.removeEventListener("error", handleWindowError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("message", handleMessage);
      rootRef.current?.unmount();
      rootRef.current = null;
    };
  }, []);

  return (
    <main className="runtime-shell">
      <div ref={containerRef} id="react-runtime-root" />
      <style jsx global>{`
        :root {
          color: #18212d;
          background: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          background: #ffffff;
        }

        .runtime-shell {
          min-height: 100vh;
          padding: 20px;
        }

        .runtime-error {
          border: 1px solid #e6b56a;
          border-radius: 10px;
          background: #fff7e7;
          color: #7b4d08;
          padding: 14px;
          font-size: 14px;
        }

        button,
        input {
          font: inherit;
        }
      `}</style>
    </main>
  );
}
