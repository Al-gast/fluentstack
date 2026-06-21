import type { CalloutBlock as CalloutBlockData } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { ReadOnlyBlockCompletion } from "@/components/learning/read-only-block-completion";

type CalloutBlockProps = {
  block: CalloutBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

const variantClass: Record<CalloutBlockData["variant"], string> = {
  tip: "border-fs-info/25 bg-fs-info-soft",
  warning: "border-fs-warning/25 bg-fs-warning-soft",
  "common-mistake": "border-fs-danger/25 bg-fs-danger-soft",
  important: "border-fs-accent/25 bg-fs-accent-soft",
};

const variantLabel: Record<CalloutBlockData["variant"], string> = {
  tip: "Tips",
  warning: "Peringatan",
  "common-mistake": "Kesalahan umum",
  important: "Catatan penting",
};

export function CalloutBlock({ block, isCompleted, isRequired, onComplete }: CalloutBlockProps) {
  return (
    <section
      className={`rounded-2xl border p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6 ${variantClass[block.variant]}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium text-fs-text-soft">{variantLabel[block.variant]}</p>
        <BlockRequirementBadge isRequired={isRequired} />
      </div>
      <h3 className="mt-2 text-lg font-bold text-fs-text">{block.title}</h3>
      <p className="mt-3 text-sm leading-7 text-fs-text-soft">{block.content}</p>

      <ReadOnlyBlockCompletion
        isCompleted={isCompleted}
        isRequired={isRequired}
        completeLabel="Saya paham"
        onComplete={onComplete}
      />
    </section>
  );
}
