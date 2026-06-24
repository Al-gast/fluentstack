import type { LessonBlock } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";

type LessonOutlineProps = {
  blocks: LessonBlock[];
  completedBlockIds?: Set<string>;
  requiredBlockIds?: string[];
  compact?: boolean;
};

function getBlockLabel(block: LessonBlock): string {
  if ("title" in block && typeof block.title === "string") {
    return block.title;
  }

  switch (block.type) {
    case "quick-check":
      return "Cek pemahaman";
    case "quiz":
      return "Quiz";
    case "summary":
      return "Ringkasan";
    case "coding-practice":
      return "Coding practice";
    case "writing-practice":
      return "Writing practice";
    case "resource-links":
      return "Resource resmi";
    default:
      return block.type;
  }
}

export function LessonOutline({
  blocks,
  completedBlockIds,
  requiredBlockIds = [],
  compact = false,
}: LessonOutlineProps) {
  const requiredBlockSet = new Set(requiredBlockIds);

  return (
    <section className="rounded-2xl border border-fs-border bg-fs-surface p-4 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-fs-text">Isi lesson</h2>
        {compact ? <span className="text-xs text-fs-text-muted">{blocks.length} blok</span> : null}
      </div>
      <ol
        className={
          compact
            ? "mt-3 flex gap-2 overflow-x-auto pb-1 text-sm text-fs-text-soft"
            : "mt-3 space-y-2 text-sm text-fs-text-soft"
        }
      >
        {blocks.map((block, index) => {
          const isCompleted = completedBlockIds?.has(block.id) ?? false;
          const isRequired = requiredBlockSet.has(block.id);

          return (
            <li
              key={block.id}
              className={`rounded-lg border px-3 py-2 ${
                isCompleted
                  ? "border-fs-success/35 bg-fs-success-soft"
                  : "border-fs-border bg-fs-surface-soft"
              } ${compact ? "min-w-44 shrink-0" : ""}`}
            >
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-xs text-fs-text-muted">{index + 1}.</span>
                <div className="min-w-0">
                  <span className="block truncate">{getBlockLabel(block)}</span>
                  <span className="mt-1 flex flex-wrap items-center gap-1.5">
                    <span className={isCompleted ? "text-xs text-fs-success" : "text-xs text-fs-text-muted"}>
                      {isCompleted ? "Selesai" : "Belum selesai"}
                    </span>
                    <BlockRequirementBadge isRequired={isRequired} compact />
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
