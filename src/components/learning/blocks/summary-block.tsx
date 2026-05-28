import type { SummaryBlock as SummaryBlockData } from "@/types/learning";

type SummaryBlockProps = {
  block: SummaryBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

export function SummaryBlock({ block, isCompleted, onComplete }: SummaryBlockProps) {
  return (
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 sm:p-6">
      <h3 className="text-xl font-bold text-zinc-100">Ringkasan</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-300">
        {block.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={onComplete}
          disabled={isCompleted}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            isCompleted
              ? "cursor-not-allowed border border-emerald-300/35 bg-emerald-500/20 text-emerald-100"
              : "bg-cyan-400 text-zinc-950 hover:bg-cyan-300"
          }`}
        >
          {isCompleted ? "Selesai" : "Tandai selesai"}
        </button>
      </div>
    </section>
  );
}
