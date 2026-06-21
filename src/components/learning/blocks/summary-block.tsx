import type { SummaryBlock as SummaryBlockData } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { ReadOnlyBlockCompletion } from "@/components/learning/read-only-block-completion";

type SummaryBlockProps = {
  block: SummaryBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

export function SummaryBlock({ block, isCompleted, isRequired, onComplete }: SummaryBlockProps) {
  return (
    <section className="rounded-2xl border border-fs-success/20 bg-fs-success-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-bold text-fs-text">Ringkasan</h3>
        <BlockRequirementBadge isRequired={isRequired} />
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-fs-text-soft">
        {block.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <ReadOnlyBlockCompletion
        isCompleted={isCompleted}
        isRequired={isRequired}
        completeLabel="Selesai review"
        onComplete={onComplete}
      />
    </section>
  );
}
