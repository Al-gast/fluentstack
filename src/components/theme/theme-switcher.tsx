"use client";

import { BookOpen, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME_MODES, type ThemeMode } from "@/lib/theme";
import { useThemeMode } from "@/components/theme/theme-provider";

type ThemeSwitcherProps = {
  className?: string;
  variant?: "compact" | "full";
};

const themeOptions: Array<{
  value: ThemeMode;
  label: string;
  Icon: typeof Moon;
}> = [
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "light", label: "Light", Icon: Sun },
  { value: "paper", label: "Paper", Icon: BookOpen },
];

export function ThemeSwitcher({ className, variant = "compact" }: ThemeSwitcherProps) {
  const { theme, setThemeMode } = useThemeMode();
  const isFull = variant === "full";

  return (
    <div
      role="group"
      aria-label="Mode tampilan"
      className={cn(
        "rounded-xl border border-fs-border bg-fs-surface-soft p-1 shadow-[inset_0_1px_0_var(--fs-border)]",
        isFull ? "grid w-full grid-cols-3 gap-1" : "inline-flex shrink-0 gap-1",
        className,
      )}
    >
      {themeOptions.map(({ value, label, Icon }) => {
        const isActive = theme === value;

        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            aria-label={`Gunakan ${label} mode`}
            title={`${label} mode`}
            onClick={() => setThemeMode(value)}
            className={cn(
              "inline-flex min-w-0 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-fs-focus/35",
              isFull ? "px-3 py-2" : "size-8 sm:w-auto sm:px-2.5",
              isActive
                ? "border border-fs-border-strong bg-fs-accent-soft text-fs-accent"
                : "border border-transparent text-fs-text-muted hover:bg-fs-surface-strong hover:text-fs-text",
            )}
          >
            <Icon className="size-3.5 shrink-0" aria-hidden="true" />
            <span className={cn(!isFull && "sr-only sm:not-sr-only")}>{label}</span>
          </button>
        );
      })}
      <span className="sr-only">Mode tersedia: {THEME_MODES.join(", ")}</span>
    </div>
  );
}
