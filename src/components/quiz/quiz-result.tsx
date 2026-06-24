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
          ? "border-fs-success/30 bg-fs-success-soft"
          : "border-fs-warning/30 bg-fs-warning-soft"
      }`}
      aria-live="polite"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p
            className={`text-sm font-semibold ${
              isPassed ? "text-fs-success" : "text-fs-warning"
            }`}
          >
            {isPassed ? "Lulus" : "Belum lulus"}
          </p>
          <h4 className="mt-1 text-lg font-bold text-fs-text">Hasil quiz</h4>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-sm font-semibold ${
            isPassed
              ? "border-fs-success/35 bg-fs-success-soft text-fs-success"
              : "border-fs-warning/35 bg-fs-warning-soft text-fs-warning"
          }`}
        >
          Skor kamu: {score}
        </span>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <div className="rounded-lg border border-fs-border bg-fs-surface px-3 py-2">
          <p className="text-xs text-fs-text-muted">Skor kamu</p>
          <p className="mt-1 text-sm font-semibold text-fs-text">{score}/100</p>
        </div>
        <div className="rounded-lg border border-fs-border bg-fs-surface px-3 py-2">
          <p className="text-xs text-fs-text-muted">Target lulus</p>
          <p className="mt-1 text-sm font-semibold text-fs-text">{passingScore}/100</p>
        </div>
        <div className="rounded-lg border border-fs-border bg-fs-surface px-3 py-2">
          <p className="text-xs text-fs-text-muted">Skor terbaik</p>
          <p className="mt-1 text-sm font-semibold text-fs-text">{bestScore}/100</p>
        </div>
      </div>

      <p
        className={`mt-4 rounded-lg border px-3 py-2 text-sm leading-7 ${
          isPassed
            ? "border-fs-success/35 bg-fs-success-soft text-fs-text"
            : "border-fs-warning/35 bg-fs-warning-soft text-fs-text"
        }`}
      >
        {isPassed
          ? "Quiz selesai. Progres lesson diperbarui setelah semua blok wajib selesai."
          : "Belum lulus. Kamu bisa ulang quiz ini dan review jawaban tanpa penalti."}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg border border-fs-border bg-fs-surface px-4 py-2 text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
      >
        Ulang quiz
      </button>
    </div>
  );
}
