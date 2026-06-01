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
          ? "rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          : "sticky top-[76px] z-10 rounded-2xl border border-cyan-300/20 bg-zinc-950/85 p-4 shadow-lg shadow-black/10 backdrop-blur sm:static sm:bg-zinc-950/45 sm:p-5"
      }
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-zinc-100">Progres pelajaran</h2>
        <span className="text-sm font-semibold text-cyan-200">{isLoading ? "Memuat..." : `${percent}%`}</span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-900/90 ring-1 ring-zinc-800/80">
        <div
          className={`h-full rounded-full bg-gradient-to-r transition-all duration-300 ${
            isLoading ? "w-1/3 animate-pulse from-zinc-600 to-zinc-500" : "from-cyan-400 to-indigo-400"
          }`}
          style={isLoading ? undefined : { width: `${percent}%` }}
        />
      </div>

      {!compact ? (
        <>
          <p className="mt-3 text-sm text-zinc-300">
            {isLoading ? "Memuat blok wajib..." : `${completedRequired} dari ${totalRequired} blok wajib selesai.`}
          </p>
          <p className="mt-2 text-sm text-zinc-300">
            {isLoading
              ? "Progres terbaru sedang dimuat."
              : isCompleted
              ? storageMode === "logged-in"
                ? "Pelajaran selesai. Progres kamu tersimpan di akun."
                : "Pelajaran selesai. Progres kamu tersimpan di browser ini."
              : "Selesaikan semua blok wajib untuk menyelesaikan pelajaran ini."}
          </p>
        </>
      ) : (
        <p className="mt-2 text-xs text-zinc-400">
          {isLoading ? "Memuat..." : `${completedRequired}/${totalRequired} blok wajib`}
        </p>
      )}
    </section>
  );
}
