import type { DocumentationBridgeBlock as DocumentationBridgeBlockData } from "@/types/learning";

type DocumentationBridgeBlockProps = {
  block: DocumentationBridgeBlockData;
  isCompleted: boolean;
  onComplete: () => void;
};

export function DocumentationBridgeBlock({
  block,
  isCompleted,
  onComplete,
}: DocumentationBridgeBlockProps) {
  return (
    <section className="rounded-2xl border border-cyan-300/20 bg-cyan-500/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
      <div className="max-w-3xl">
        <p className="text-xs font-medium text-cyan-200/80">Documentation Bridge</p>
        <h3 className="mt-2 text-xl font-bold text-zinc-100">{block.title}</h3>
        {block.description ? (
          <p className="mt-3 text-sm leading-7 text-zinc-300">{block.description}</p>
        ) : null}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {block.links.map((link) => (
          <article
            key={link.url}
            className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
          >
            <p className="text-xs font-medium text-cyan-200/80">{link.source}</p>
            <h4 className="mt-1 text-base font-semibold text-zinc-100">{link.title}</h4>

            <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-300">
              <div>
                <p className="font-semibold text-zinc-100">Fokus baca</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {link.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {link.ignoreForNow?.length ? (
                <div>
                  <p className="font-semibold text-zinc-100">Abaikan dulu</p>
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
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-400/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 sm:w-auto"
            >
              Buka dokumentasi
            </a>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-zinc-800/80 bg-zinc-950/45 p-4">
        <p className="text-sm font-semibold text-zinc-100">Aksi setelah membaca</p>
        <p className="mt-2 text-sm leading-7 text-zinc-300">{block.followUpAction}</p>
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
