import type { TextBlock as TextBlockData } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { ReadOnlyBlockCompletion } from "@/components/learning/read-only-block-completion";

type TextBlockProps = {
  block: TextBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

export function TextBlock({ block, isCompleted, isRequired, onComplete }: TextBlockProps) {
  return (
    <section className="border-l border-fs-border py-2 pl-5 sm:pl-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-bold text-fs-text">{block.title}</h3>
        <BlockRequirementBadge isRequired={isRequired} />
      </div>
      <p className="mt-3 max-w-3xl text-base leading-8 text-fs-text-soft">{block.content}</p>

      <ReadOnlyBlockCompletion
        isCompleted={isCompleted}
        isRequired={isRequired}
        completeLabel="Saya paham"
        onComplete={onComplete}
      />
    </section>
  );
}
