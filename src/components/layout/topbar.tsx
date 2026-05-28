import Link from "next/link";

type TopbarProps = {
  title?: string;
};

export function Topbar({ title = "FluentStack" }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 rounded-2xl border border-zinc-800/80 bg-zinc-950/75 px-4 py-3.5 backdrop-blur sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-zinc-400">Platform belajar</p>
          <h1 className="text-base font-semibold text-zinc-100">{title}</h1>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/dashboard"
            className="rounded-lg border border-zinc-700/70 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800"
          >
            Dashboard
          </Link>
          <Link
            href="/roadmap"
            className="rounded-lg bg-cyan-500/90 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-cyan-400"
          >
            Roadmap
          </Link>
        </div>
      </div>
    </header>
  );
}
