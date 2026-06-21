import type { DocumentationBridgeBlock as DocumentationBridgeBlockData } from "@/types/learning";
import { BlockRequirementBadge } from "@/components/learning/block-requirement-badge";
import { ReadOnlyBlockCompletion } from "@/components/learning/read-only-block-completion";

type DocumentationBridgeBlockProps = {
  block: DocumentationBridgeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  onComplete: () => void | Promise<unknown>;
};

export function DocumentationBridgeBlock({
  block,
  isCompleted,
  isRequired,
  onComplete,
}: DocumentationBridgeBlockProps) {
  return (
    <section className="rounded-2xl border border-fs-info/20 bg-fs-info-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-medium text-fs-info">Documentation Bridge</p>
          <BlockRequirementBadge isRequired={isRequired} />
        </div>
        <h3 className="mt-2 text-xl font-bold text-fs-text">{block.title}</h3>
        {block.description ? (
          <p className="mt-3 text-sm leading-7 text-fs-text-soft">{block.description}</p>
        ) : null}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {block.links.map((link) => (
          <article
            key={link.url}
            className="rounded-xl border border-fs-border bg-fs-surface p-4 shadow-[inset_0_1px_0_var(--fs-border)]"
          >
            <p className="text-xs font-medium text-fs-info">{link.source}</p>
            <h4 className="mt-1 text-base font-semibold text-fs-text">{link.title}</h4>

            <div className="mt-4 space-y-4 text-sm leading-6 text-fs-text-soft">
              <div>
                <p className="font-semibold text-fs-text">Fokus baca</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {link.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {link.ignoreForNow?.length ? (
                <div>
                  <p className="font-semibold text-fs-text">Abaikan dulu</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {link.ignoreForNow.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-fs-border-strong bg-fs-accent-soft px-4 py-2 text-sm font-semibold text-fs-accent transition hover:border-fs-border-strong hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/30 sm:w-auto"
            >
              Buka dokumentasi
            </a>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-fs-border bg-fs-surface p-4">
        <p className="text-sm font-semibold text-fs-text">Aksi setelah membaca</p>
        <p className="mt-2 text-sm leading-7 text-fs-text-soft">{block.followUpAction}</p>
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
