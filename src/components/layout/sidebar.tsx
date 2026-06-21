"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Map,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SIDEBAR_COLLAPSED_STORAGE_KEY = "fluentstack-sidebar-collapsed";
const SIDEBAR_COLLAPSED_CHANGE_EVENT = "fluentstack-sidebar-collapsed-change";

const navItems = [
  { label: "Dashboard", href: "/dashboard", match: ["/dashboard"], Icon: LayoutDashboard },
  { label: "Roadmap", href: "/roadmap", match: ["/roadmap"], Icon: Map },
  { label: "Tracks", href: "/learn", match: ["/learn", "/lesson"], Icon: BookOpen },
  { label: "Profile", href: "/profile", match: ["/profile"], Icon: User },
];

function isActivePath(pathname: string, matchers: string[]) {
  return matchers.some((matcher) => pathname === matcher || pathname.startsWith(`${matcher}/`));
}

function subscribeToSidebarPreference(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(SIDEBAR_COLLAPSED_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(SIDEBAR_COLLAPSED_CHANGE_EVENT, onStoreChange);
  };
}

function getSidebarPreferenceSnapshot() {
  return window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY);
}

function getSidebarPreferenceServerSnapshot() {
  return null;
}

export function Sidebar() {
  const pathname = usePathname();
  const isLessonRoute = pathname.startsWith("/lesson/");
  const savedCollapsedPreference = useSyncExternalStore(
    subscribeToSidebarPreference,
    getSidebarPreferenceSnapshot,
    getSidebarPreferenceServerSnapshot,
  );
  const isCollapsed =
    savedCollapsedPreference === null ? isLessonRoute : savedCollapsedPreference === "true";

  function toggleSidebar() {
    window.localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, String(!isCollapsed));
    window.dispatchEvent(new Event(SIDEBAR_COLLAPSED_CHANGE_EVENT));
  }

  return (
    <aside
      className={cn(
        "hidden shrink-0 rounded-3xl border border-fs-border bg-fs-surface shadow-[inset_0_1px_0_var(--fs-border)] backdrop-blur transition-[width,padding] duration-200 lg:sticky lg:top-4 lg:flex lg:max-h-[calc(100dvh-2rem)] lg:self-start lg:flex-col lg:overflow-y-auto",
        isCollapsed ? "w-20 p-3" : "w-[292px] p-5",
      )}
    >
      <div
        className={cn(
          "mb-6 border border-fs-border bg-fs-surface-soft",
          isCollapsed ? "rounded-2xl p-2" : "rounded-2xl p-4",
        )}
      >
        <div className={cn("flex items-start", isCollapsed ? "flex-col items-center gap-3" : "gap-3")}>
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl border border-fs-border-strong bg-fs-accent-soft text-sm font-bold text-fs-accent",
              !isCollapsed && "mt-0.5",
            )}
            aria-hidden="true"
          >
            FS
          </div>
          {isCollapsed ? null : (
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-fs-text">FluentStack</p>
              <p className="mt-2 text-sm leading-6 text-fs-text-soft">
                Belajar tech skill lewat lesson, quiz, dan practice block yang terarah.
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label={isCollapsed ? "Perluas sidebar" : "Minimize sidebar"}
            title={isCollapsed ? "Perluas sidebar" : "Minimize sidebar"}
            className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-fs-border bg-fs-surface-strong text-fs-text-soft transition hover:border-fs-border-strong hover:bg-fs-accent-soft hover:text-fs-accent focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
          >
            {isCollapsed ? (
              <ChevronRight className="size-4" aria-hidden="true" />
            ) : (
              <ChevronLeft className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav className="space-y-1.5">
        {navItems.map((item) => {
          const isActive = isActivePath(pathname, item.match);
          const Icon = item.Icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              title={isCollapsed ? item.label : undefined}
              className={cn(
                "flex min-h-11 items-center rounded-xl text-sm font-medium transition",
                isCollapsed ? "justify-center px-2 py-2.5" : "gap-3 px-3 py-2.5",
                isActive
                  ? "border border-fs-border-strong bg-fs-accent-soft text-fs-accent shadow-[inset_0_0_0_1px_var(--fs-accent-soft)]"
                  : "text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text",
              )}
            >
              <Icon className="size-4 shrink-0" aria-hidden="true" />
              <span className={cn(isCollapsed && "sr-only")}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
