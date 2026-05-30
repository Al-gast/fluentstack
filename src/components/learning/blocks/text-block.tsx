import type { TextBlock as TextBlockData } from "@/types/learning";

type TextBlockProps = {
  block: TextBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

export function TextBlock({ block, isCompleted, onComplete }: TextBlockProps) {
  return (
    <section className="border-l border-zinc-700/70 py-2 pl-5 sm:pl-6">
      <h3 className="text-xl font-bold text-zinc-100">{block.title}</h3>
      <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-300">{block.content}</p>

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
