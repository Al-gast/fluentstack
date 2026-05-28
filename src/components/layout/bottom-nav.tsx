import Link from "next/link";

const items = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Tracks", href: "/learn" },
  { label: "Profile", href: "/profile" },
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-30 rounded-2xl border border-zinc-700/70 bg-zinc-900/90 p-2 shadow-xl backdrop-blur sm:inset-x-8 lg:hidden">
      <ul className="grid grid-cols-4 gap-1">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block rounded-xl px-2 py-2.5 text-center text-xs font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-zinc-50"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
