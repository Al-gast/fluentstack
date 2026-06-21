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
    <nav className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-30 rounded-2xl border border-fs-border bg-fs-surface-strong p-1.5 shadow-xl shadow-black/20 backdrop-blur sm:inset-x-8 sm:bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:p-2 lg:hidden">
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
                    ? "bg-fs-accent-soft text-fs-accent ring-1 ring-fs-border-strong"
                    : "text-fs-text-soft hover:bg-fs-surface hover:text-fs-text",
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
