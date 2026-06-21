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
      ? "from-fs-success to-[var(--fs-progress-from)]"
      : "from-[var(--fs-progress-from)] to-[var(--fs-progress-to)]";

  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <div className="flex items-center justify-between text-xs text-fs-text-soft">
          <span className="font-medium">{label}</span>
          <span className="font-medium">{isLoading ? "Memuat..." : `${Math.round(clamped)}%`}</span>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-fs-surface-strong ring-1 ring-fs-border">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-300",
            toneClass,
            isLoading ? "w-1/3 animate-pulse from-fs-text-muted to-fs-text-soft" : "",
          )}
          style={isLoading ? undefined : { width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
