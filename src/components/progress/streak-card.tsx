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
        "rounded-2xl border border-amber-300/25 bg-amber-500/10 p-4",
        className,
      )}
    >
      <p className="text-xs font-medium text-amber-200/80">Streak</p>
      <p className="mt-2 text-2xl font-semibold text-amber-50">
        {isLoading ? "Memuat..." : `${days} hari`}
      </p>
      <p className="mt-1 text-sm text-amber-100/80">
        Satu aktivitas bermakna per hari menjaga momentum.
      </p>
    </article>
  );
}
