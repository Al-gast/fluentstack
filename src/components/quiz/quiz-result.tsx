type QuizResultProps = {
  score: number;
  passingScore: number;
  bestScore: number;
  onRetry: () => void;
};

export function QuizResult({ score, passingScore, bestScore, onRetry }: QuizResultProps) {
  const isPassed = score >= passingScore;

  return (
    <div
      className={`rounded-xl border p-5 ${
        isPassed
          ? "border-emerald-300/30 bg-emerald-500/10"
          : "border-amber-300/30 bg-amber-500/10"
      }`}
      aria-live="polite"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p
            className={`text-sm font-semibold ${
              isPassed ? "text-emerald-200" : "text-amber-200"
            }`}
          >
            {isPassed ? "Lulus" : "Belum lulus"}
          </p>
          <h4 className="mt-1 text-lg font-bold text-zinc-100">Hasil quiz</h4>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-sm font-semibold ${
            isPassed
              ? "border-emerald-300/35 bg-emerald-500/15 text-emerald-100"
              : "border-amber-300/35 bg-amber-500/15 text-amber-100"
          }`}
        >
          Skor kamu: {score}
        </span>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-zinc-950/35 px-3 py-2">
          <p className="text-xs text-zinc-400">Skor kamu</p>
          <p className="mt-1 text-sm font-semibold text-zinc-100">{score}/100</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-zinc-950/35 px-3 py-2">
          <p className="text-xs text-zinc-400">Target lulus</p>
          <p className="mt-1 text-sm font-semibold text-zinc-100">{passingScore}/100</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-zinc-950/35 px-3 py-2">
          <p className="text-xs text-zinc-400">Skor terbaik</p>
          <p className="mt-1 text-sm font-semibold text-zinc-100">{bestScore}/100</p>
        </div>
      </div>

      <p
        className={`mt-4 rounded-lg border px-3 py-2 text-sm leading-7 ${
          isPassed
            ? "border-emerald-300/35 bg-emerald-500/10 text-emerald-100"
            : "border-amber-300/35 bg-amber-500/10 text-amber-100"
        }`}
      >
        {isPassed
          ? "Quiz selesai. Progress lesson akan diperbarui jika semua blok wajib sudah selesai."
          : "Belum lulus. Kamu bisa ulang quiz ini dan tingkatkan skor tanpa penalti."}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
      >
        Ulang quiz
      </button>
    </div>
  );
}
