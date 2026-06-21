import { cn } from "@/lib/utils";

type StreakCardProps = {
  days: number;
  isLoading?: boolean;
  className?: string;
};

export function StreakCard({ days, isLoading = false, className }: StreakCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-fs-warning/25 bg-fs-warning-soft p-4 shadow-[inset_0_1px_0_var(--fs-border)]",
        className,
      )}
    >
      <p className="text-xs font-medium text-fs-warning">Streak</p>
      <p className="mt-2 text-2xl font-semibold text-fs-text">
        {isLoading ? "Memuat..." : `${days} hari`}
      </p>
      <p className="mt-1 text-sm text-fs-text-soft">
        Selesaikan satu aktivitas belajar per hari untuk menjaga streak.
      </p>
    </article>
  );
}
