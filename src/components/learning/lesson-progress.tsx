type LessonProgressProps = {
  totalRequired: number;
  completedRequired: number;
  compact?: boolean;
};

export function LessonProgress({
  totalRequired,
  completedRequired,
  compact = false,
}: LessonProgressProps) {
  const safeTotal = totalRequired > 0 ? totalRequired : 1;
  const percent = Math.round((completedRequired / safeTotal) * 100);
  const isCompleted = totalRequired > 0 && completedRequired >= totalRequired;

  return (
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-zinc-100">Progres pelajaran</h2>
        <span className="text-sm font-semibold text-cyan-200">{percent}%</span>
      </div>

      <div className="mt-3 h-2 rounded-full bg-zinc-800/90 ring-1 ring-zinc-700/60">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
          style={{ width: `${percent}%` }}
        />
      </div>

      {!compact ? (
        <>
          <p className="mt-3 text-sm text-zinc-300">
            {completedRequired} dari {totalRequired} blok wajib selesai.
          </p>
          <p className="mt-2 text-sm text-zinc-300">
            {isCompleted
              ? "Lesson selesai. Progres kamu tersimpan di browser ini."
              : "Selesaikan semua blok wajib untuk menuntaskan lesson ini."}
          </p>
        </>
      ) : (
        <p className="mt-2 text-xs text-zinc-400">
          {completedRequired}/{totalRequired} blok wajib
        </p>
      )}
    </section>
  );
}
