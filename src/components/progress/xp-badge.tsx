import { cn } from "@/lib/utils";

type XpBadgeProps = {
  value: number;
  isLoading?: boolean;
  className?: string;
};

export function XpBadge({ value, isLoading = false, className }: XpBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border border-fs-border-strong bg-fs-accent-soft px-3 py-2 text-sm font-semibold text-fs-accent shadow-[inset_0_1px_0_var(--fs-border)]",
        className,
      )}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-fs-accent" />
      <span>{isLoading ? "Memuat XP..." : `${value} XP`}</span>
    </div>
  );
}
