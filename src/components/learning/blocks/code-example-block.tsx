import type { CodeExampleBlock as CodeExampleBlockData } from "@/types/learning";

type CodeExampleBlockProps = {
  block: CodeExampleBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

export function CodeExampleBlock({ block, isCompleted, onComplete }: CodeExampleBlockProps) {
  return (
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 sm:p-6">
      <h3 className="text-xl font-bold text-zinc-100">{block.title}</h3>

      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-950/80">
        <div className="border-b border-zinc-700/80 px-4 py-2 text-xs text-zinc-400">{block.language}</div>
        <pre className="overflow-x-auto p-4 text-sm leading-7 text-zinc-200">
          <code>{block.code}</code>
        </pre>
      </div>

      {block.explanation ? (
        <p className="mt-4 text-sm leading-7 text-zinc-300">{block.explanation}</p>
      ) : null}

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
