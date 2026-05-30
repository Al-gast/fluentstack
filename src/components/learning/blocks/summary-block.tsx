import type { SummaryBlock as SummaryBlockData } from "@/types/learning";

type SummaryBlockProps = {
  block: SummaryBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

export function SummaryBlock({ block, isCompleted, onComplete }: SummaryBlockProps) {
  return (
    <section className="rounded-2xl border border-emerald-300/20 bg-emerald-500/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5 sm:p-6">
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
              ? "cursor-not-allowed border border-emerald-300/35 bg-emerald-500/15 text-emerald-100"
              : "border border-zinc-700/80 bg-zinc-950/55 text-zinc-100 hover:bg-zinc-800"
          }`}
        >
          {isCompleted ? "Selesai" : "Tandai selesai"}
        </button>
      </div>
    </section>
  );
}
