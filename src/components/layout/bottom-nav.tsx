"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { label: "Dashboard", href: "/dashboard", match: ["/dashboard"] },
  { label: "Roadmap", href: "/roadmap", match: ["/roadmap"] },
  { label: "Tracks", href: "/learn", match: ["/learn", "/lesson"] },
  { label: "Profile", href: "/profile", match: ["/profile"] },
];

function isActivePath(pathname: string, matchers: string[]) {
  return matchers.some((matcher) => pathname === matcher || pathname.startsWith(`${matcher}/`));
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-30 rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-1.5 shadow-xl shadow-black/30 backdrop-blur sm:inset-x-8 sm:bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:p-2 lg:hidden">
      <ul className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const isActive = isActivePath(pathname, item.match);

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "block rounded-xl px-1.5 py-2.5 text-center text-[11px] font-medium transition sm:px-2 sm:text-xs",
                  isActive
                    ? "bg-cyan-500/15 text-cyan-100 ring-1 ring-cyan-300/30"
                    : "text-zinc-300 hover:bg-zinc-800/80 hover:text-zinc-50",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
