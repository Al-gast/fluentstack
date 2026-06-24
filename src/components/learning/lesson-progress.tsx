import type { ProgressStorageMode } from "@/types/progress";

type LessonProgressProps = {
  totalRequired: number;
  completedRequired: number;
  storageMode?: ProgressStorageMode;
  isLoading?: boolean;
  compact?: boolean;
};

export function LessonProgress({
  totalRequired,
  completedRequired,
  storageMode = "guest",
  isLoading = false,
  compact = false,
}: LessonProgressProps) {
  const safeTotal = totalRequired > 0 ? totalRequired : 1;
  const percent = Math.round((completedRequired / safeTotal) * 100);
  const isCompleted = totalRequired > 0 && completedRequired >= totalRequired;

  return (
    <section
      className={
        compact
          ? "rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)]"
          : "rounded-2xl border border-fs-border-strong bg-fs-surface p-4 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-5"
      }
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-fs-text">Progres lesson</h2>
        <span className="text-sm font-semibold text-fs-accent">{isLoading ? "Memuat..." : `${percent}%`}</span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-fs-surface-soft ring-1 ring-fs-border">
        <div
          className={`h-full rounded-full bg-gradient-to-r transition-all duration-300 ${
            isLoading
              ? "w-1/3 animate-pulse from-fs-text-muted to-fs-text-soft"
              : "from-[var(--fs-progress-from)] to-[var(--fs-progress-to)]"
          }`}
          style={isLoading ? undefined : { width: `${percent}%` }}
        />
      </div>

      {!compact ? (
        <>
          <p className="mt-3 text-sm text-fs-text-soft">
            {isLoading ? "Memuat blok wajib..." : `${completedRequired}/${totalRequired} blok wajib selesai.`}
          </p>
          <p className="mt-1 text-xs leading-6 text-fs-text-muted">
            {isLoading
              ? "Progres terbaru sedang dimuat."
              : isCompleted
              ? storageMode === "logged-in"
                ? "Lesson selesai. Progres kamu tersimpan di akun."
                : "Lesson selesai. Progres kamu tersimpan di browser ini."
              : "Selesaikan semua blok wajib untuk menyelesaikan lesson ini."}
          </p>
        </>
      ) : (
        <p className="mt-2 text-xs text-fs-text-muted">
          {isLoading ? "Memuat..." : `${completedRequired}/${totalRequired} blok wajib`}
        </p>
      )}
    </section>
  );
}
