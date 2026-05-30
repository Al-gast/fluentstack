import type { LessonBlock } from "@/types/learning";

type LessonOutlineProps = {
  blocks: LessonBlock[];
  completedBlockIds?: Set<string>;
  compact?: boolean;
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

export function LessonOutline({ blocks, completedBlockIds, compact = false }: LessonOutlineProps) {
  return (
    <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-zinc-100">Outline pelajaran</h2>
        {compact ? <span className="text-xs text-zinc-500">{blocks.length} blok</span> : null}
      </div>
      <ol
        className={
          compact
            ? "mt-3 flex gap-2 overflow-x-auto pb-1 text-sm text-zinc-300"
            : "mt-3 space-y-2 text-sm text-zinc-300"
        }
      >
        {blocks.map((block, index) => {
          const isCompleted = completedBlockIds?.has(block.id) ?? false;
          return (
            <li
              key={block.id}
              className={`rounded-lg border px-3 py-2 ${
                isCompleted
                  ? "border-emerald-300/35 bg-emerald-500/10"
                  : "border-zinc-800/80 bg-zinc-950/55"
              } ${compact ? "min-w-44 shrink-0" : ""}`}
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
