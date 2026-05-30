"use client";

import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  label?: string;
  className?: string;
  isLoading?: boolean;
  tone?: "primary" | "success";
};

export function ProgressBar({
  value,
  label,
  className,
  isLoading = false,
  tone = "primary",
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const toneClass =
    tone === "success"
      ? "from-emerald-400 to-cyan-300"
      : "from-cyan-400 to-indigo-400";

  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <div className="flex items-center justify-between text-xs text-zinc-300">
          <span className="font-medium">{label}</span>
          <span className="font-medium">{isLoading ? "Memuat..." : `${Math.round(clamped)}%`}</span>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-zinc-900/90 ring-1 ring-zinc-800/80">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-300",
            toneClass,
            isLoading ? "w-1/3 animate-pulse from-zinc-600 to-zinc-500" : "",
          )}
          style={isLoading ? undefined : { width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
