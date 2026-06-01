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

const variantLabel: Record<CalloutBlockData["variant"], string> = {
  tip: "Tips",
  warning: "Peringatan",
  "common-mistake": "Kesalahan umum",
  important: "Catatan penting",
};

export function CalloutBlock({ block, isCompleted, onComplete }: CalloutBlockProps) {
  return (
    <section
      className={`rounded-2xl border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6 ${variantClass[block.variant]}`}
    >
      <p className="text-xs font-medium text-zinc-300">{variantLabel[block.variant]}</p>
      <h3 className="mt-2 text-lg font-bold text-zinc-100">{block.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-200">{block.content}</p>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={onComplete}
          disabled={isCompleted}
          className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30 disabled:cursor-not-allowed disabled:border-emerald-300/35 disabled:bg-emerald-500/15 disabled:text-emerald-100"
        >
          {isCompleted ? "Selesai" : "Tandai selesai"}
        </button>
      </div>
    </section>
  );
}
