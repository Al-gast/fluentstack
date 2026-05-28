import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Tracks", href: "/learn" },
  { label: "Profile", href: "/profile" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[292px] shrink-0 rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-5 lg:block">
      <div className="mb-6 rounded-2xl border border-zinc-700/60 bg-zinc-950/70 p-4">
        <p className="text-sm font-semibold text-zinc-200">FluentStack</p>
        <p className="mt-2 text-sm leading-6 text-zinc-200">
          Belajar skill tech dengan flow yang jelas dan praktis.
        </p>
      </div>
      <nav className="space-y-1.5">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/80 hover:text-zinc-50"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
