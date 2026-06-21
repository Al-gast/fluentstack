import type {
  ResourceLinkKind,
  ResourceLinksBlock as ResourceLinksBlockData,
} from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { ReadOnlyBlockCompletion } from "@/components/learning/read-only-block-completion";

type ResourceLinksBlockProps = {
  block: ResourceLinksBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

const kindLabel: Record<ResourceLinkKind, string> = {
  required: "Wajib",
  recommended: "Direkomendasikan",
  optional: "Opsional",
};

const kindClass: Record<ResourceLinkKind, string> = {
  required: "border-fs-warning/30 bg-fs-warning-soft text-fs-warning",
  recommended: "border-fs-accent/30 bg-fs-accent-soft text-fs-accent",
  optional: "border-fs-border bg-fs-surface-soft text-fs-text-soft",
};

export function ResourceLinksBlock({
  block,
  isCompleted,
  isRequired,
  onComplete,
}: ResourceLinksBlockProps) {
  return (
    <section className="rounded-2xl border border-fs-info/20 bg-fs-info-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-medium text-fs-info">Resource resmi</p>
          <BlockRequirementBadge isRequired={isRequired} />
        </div>
        <h3 className="mt-2 text-xl font-bold text-fs-text">{block.title}</h3>
        {block.description ? (
          <p className="mt-3 text-sm leading-7 text-fs-text-soft">{block.description}</p>
        ) : null}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {block.links.map((link) => (
          <article
            key={link.url}
            className="rounded-xl border border-fs-border bg-fs-surface p-4 shadow-[inset_0_1px_0_var(--fs-border)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              {link.source ? (
                <span className="text-xs font-medium text-fs-info">{link.source}</span>
              ) : null}
              {link.kind ? (
                <span
                  className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${kindClass[link.kind]}`}
                >
                  {kindLabel[link.kind]}
                </span>
              ) : null}
            </div>

            <h4 className="mt-3 text-base font-semibold text-fs-text">{link.title}</h4>
            {link.description ? (
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">{link.description}</p>
            ) : null}

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-fs-border-strong bg-fs-accent-soft px-4 py-2 text-sm font-semibold text-fs-accent transition hover:border-fs-border-strong hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/30 sm:w-auto"
            >
              {link.label ?? "Buka resource resmi"} <span aria-hidden="true" className="ml-1">-&gt;</span>
            </a>
          </article>
        ))}
      </div>

      <ReadOnlyBlockCompletion
        isCompleted={isCompleted}
        isRequired={isRequired}
        completeLabel="Sudah dibaca"
        onComplete={onComplete}
      />
    </section>
  );
}
