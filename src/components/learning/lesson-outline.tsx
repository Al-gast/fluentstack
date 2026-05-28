import type { LessonBlock } from "@/types/learning";

type LessonOutlineProps = {
  blocks: LessonBlock[];
  completedBlockIds?: Set<string>;
};

function getBlockLabel(block: LessonBlock): string {
  if ("title" in block && typeof block.title === "string") {
    return block.title;
  }

  switch (block.type) {
    case "quick-check":
      return "Quick check";
    case "quiz":
      return "Quiz";
    case "summary":
      return "Ringkasan";
    case "coding-practice":
      return "Coding practice";
    case "writing-practice":
      return "Writing practice";
    default:
      return block.type;
  }
}

export function LessonOutline({ blocks, completedBlockIds }: LessonOutlineProps) {
  return (
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5">
      <h2 className="text-sm font-semibold text-zinc-100">Outline pelajaran</h2>
      <ol className="mt-3 space-y-2 text-sm text-zinc-300">
        {blocks.map((block, index) => {
          const isCompleted = completedBlockIds?.has(block.id) ?? false;
          return (
            <li
              key={block.id}
              className={`rounded-lg border px-3 py-2 ${
                isCompleted
                  ? "border-emerald-300/35 bg-emerald-500/10"
                  : "border-zinc-700/60 bg-zinc-950/50"
              }`}
            >
              <span className="mr-2 text-zinc-500">{index + 1}.</span>
              <span>{getBlockLabel(block)}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
