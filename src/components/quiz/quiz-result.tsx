type QuizResultProps = {
  score: number;
  passingScore: number;
  bestScore: number;
  onRetry: () => void;
};

export function QuizResult({ score, passingScore, bestScore, onRetry }: QuizResultProps) {
  const isPassed = score >= passingScore;

  return (
    <div className="rounded-xl border border-zinc-700/70 bg-zinc-950/55 p-5">
      <h4 className="text-lg font-bold text-zinc-100">Hasil quiz</h4>

      <p className="mt-3 text-sm leading-7 text-zinc-300">
        Skor kamu <span className="font-semibold text-zinc-100">{score}</span> dari 100.
      </p>
      <p className="text-sm leading-7 text-zinc-300">
        Passing score: <span className="font-semibold text-zinc-100">{passingScore}</span>
      </p>
      <p className="text-sm leading-7 text-zinc-300">
        Skor terbaik: <span className="font-semibold text-zinc-100">{bestScore}</span>
      </p>

      <p
        className={`mt-3 rounded-lg border px-3 py-2 text-sm ${
          isPassed
            ? "border-emerald-300/35 bg-emerald-500/10 text-emerald-100"
            : "border-amber-300/35 bg-amber-500/10 text-amber-100"
        }`}
      >
        {isPassed
          ? "Bagus. Kamu lulus quiz ini."
          : "Belum lulus. Tenang, kamu bisa ulang dan tingkatkan skor."}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
      >
        Ulang quiz
      </button>
    </div>
  );
}
