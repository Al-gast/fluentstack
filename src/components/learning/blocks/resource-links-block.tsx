import type {
  ResourceLinkKind,
  ResourceLinksBlock as ResourceLinksBlockData,
} from "@/types/learning";

type ResourceLinksBlockProps = {
  block: ResourceLinksBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

const kindLabel: Record<ResourceLinkKind, string> = {
  required: "Wajib",
  recommended: "Direkomendasikan",
  optional: "Opsional",
};

const kindClass: Record<ResourceLinkKind, string> = {
  required: "border-amber-300/30 bg-amber-500/10 text-amber-100",
  recommended: "border-cyan-300/30 bg-cyan-500/10 text-cyan-100",
  optional: "border-zinc-600/60 bg-zinc-800/50 text-zinc-200",
};

export function ResourceLinksBlock({
  block,
  isCompleted,
  onComplete,
}: ResourceLinksBlockProps) {
  return (
    <section className="rounded-2xl border border-cyan-300/20 bg-cyan-500/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
      <div className="max-w-3xl">
        <p className="text-xs font-medium text-cyan-200/80">Resource resmi</p>
        <h3 className="mt-2 text-xl font-bold text-zinc-100">{block.title}</h3>
        {block.description ? (
          <p className="mt-3 text-sm leading-7 text-zinc-300">{block.description}</p>
        ) : null}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {block.links.map((link) => (
          <article
            key={link.url}
            className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              {link.source ? (
                <span className="text-xs font-medium text-cyan-200/80">{link.source}</span>
              ) : null}
              {link.kind ? (
                <span
                  className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${kindClass[link.kind]}`}
                >
                  {kindLabel[link.kind]}
                </span>
              ) : null}
            </div>

            <h4 className="mt-3 text-base font-semibold text-zinc-100">{link.title}</h4>
            {link.description ? (
              <p className="mt-2 text-sm leading-6 text-zinc-300">{link.description}</p>
            ) : null}

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-400/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 sm:w-auto"
            >
              {link.label ?? "Buka resource resmi"} <span aria-hidden="true" className="ml-1">-&gt;</span>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={onComplete}
          disabled={isCompleted}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            isCompleted
              ? "cursor-not-allowed border border-emerald-300/35 bg-emerald-500/15 text-emerald-100"
              : "border border-zinc-700/80 bg-zinc-950/55 text-zinc-100 hover:bg-zinc-800"
          }`}
        >
          {isCompleted ? "Selesai" : "Tandai selesai"}
        </button>
      </div>
    </section>
  );
}
