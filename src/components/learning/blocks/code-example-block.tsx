import type { CodeExampleBlock as CodeExampleBlockData } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { ReadOnlyBlockCompletion } from "@/components/learning/read-only-block-completion";

type CodeExampleBlockProps = {
  block: CodeExampleBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

export function CodeExampleBlock({ block, isCompleted, isRequired, onComplete }: CodeExampleBlockProps) {
  return (
    <section className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-bold text-fs-text">{block.title}</h3>
        <BlockRequirementBadge isRequired={isRequired} />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-fs-code-border bg-fs-code-background">
        <div className="border-b border-fs-code-border px-4 py-2 text-xs text-fs-text-muted">{block.language}</div>
        <pre className="overflow-x-auto p-4 text-sm leading-7 text-fs-text-soft">
          <code>{block.code}</code>
        </pre>
      </div>

      {block.explanation ? (
        <p className="mt-4 text-sm leading-7 text-fs-text-soft">{block.explanation}</p>
      ) : null}

      <ReadOnlyBlockCompletion
        isCompleted={isCompleted}
        isRequired={isRequired}
        completeLabel="Saya paham"
        onComplete={onComplete}
      />
    </section>
  );
}
