import type { CalloutBlock as CalloutBlockData } from "@/types/learning";

type CalloutBlockProps = {
  block: CalloutBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

const variantClass: Record<CalloutBlockData["variant"], string> = {
  tip: "border-cyan-300/25 bg-cyan-500/5",
  warning: "border-amber-300/25 bg-amber-500/5",
  "common-mistake": "border-rose-300/25 bg-rose-500/5",
  important: "border-indigo-300/25 bg-indigo-500/5",
};

export function CalloutBlock({ block, isCompleted, onComplete }: CalloutBlockProps) {
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${variantClass[block.variant]}`}>
      <p className="text-xs font-medium text-zinc-300">Catatan {block.variant.replace("-", " ")}</p>
      <h3 className="mt-2 text-lg font-bold text-zinc-100">{block.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-200">{block.content}</p>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={onComplete}
          disabled={isCompleted}
          className="rounded-lg border border-zinc-600 bg-zinc-900/70 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:border-emerald-300/35 disabled:bg-emerald-500/15 disabled:text-emerald-100"
        >
          {isCompleted ? "Selesai" : "Tandai selesai"}
        </button>
      </div>
    </section>
  );
}
