"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", match: ["/dashboard"] },
  { label: "Roadmap", href: "/roadmap", match: ["/roadmap"] },
  { label: "Tracks", href: "/learn", match: ["/learn", "/lesson"] },
  { label: "Profile", href: "/profile", match: ["/profile"] },
];

function isActivePath(pathname: string, matchers: string[]) {
  return matchers.some((matcher) => pathname === matcher || pathname.startsWith(`${matcher}/`));
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[292px] shrink-0 rounded-3xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur lg:block">
      <div className="mb-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4">
        <p className="text-sm font-semibold text-zinc-200">FluentStack</p>
        <p className="mt-2 text-sm leading-6 text-zinc-200">
          Belajar skill tech dengan flow yang jelas dan praktis.
        </p>
      </div>
      <nav className="space-y-1.5">
        {navItems.map((item) => {
          const isActive = isActivePath(pathname, item.match);

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-medium transition",
                isActive
                  ? "border border-cyan-300/35 bg-cyan-500/10 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.06)]"
                  : "text-zinc-300 hover:bg-zinc-800/70 hover:text-zinc-50",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
