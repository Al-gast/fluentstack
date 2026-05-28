"use client";

import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  label?: string;
  className?: string;
  tone?: "primary" | "success";
};

export function ProgressBar({
  value,
  label,
  className,
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
          <span className="font-medium">{Math.round(clamped)}%</span>
        </div>
      ) : null}
      <div className="h-2 rounded-full bg-zinc-800/90 ring-1 ring-zinc-700/60">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-300",
            toneClass,
          )}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
