"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";
import { useAuthUser } from "@/hooks/use-auth-user";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

type TopbarProps = {
  title?: string;
};

function getContextAction(pathname: string): { label: string; href: string; variant?: "primary" } | null {
  if (pathname === "/") {
    return { label: "Mulai belajar", href: "/dashboard", variant: "primary" };
  }

  if (pathname === "/dashboard") {
    return { label: "Lihat roadmap", href: "/roadmap", variant: "primary" };
  }

  if (pathname === "/roadmap") {
    return { label: "Pilih track", href: "/learn", variant: "primary" };
  }

  if (pathname === "/learn" || pathname.startsWith("/learn/")) {
    return { label: "Lihat roadmap", href: "/roadmap" };
  }

  if (pathname.startsWith("/lesson/")) {
    return { label: "Semua track", href: "/learn" };
  }

  if (pathname === "/profile") {
    return { label: "Dashboard", href: "/dashboard" };
  }

  return null;
}

export function Topbar({ title = "FluentStack" }: TopbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, isAuthenticated } = useAuthUser();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const contextAction = getContextAction(pathname);

  const handleLogout = async () => {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return;
    }

    setIsLoggingOut(true);
    await supabase.auth.signOut();
    setIsLoggingOut(false);
    router.refresh();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-20 rounded-2xl border border-fs-border bg-fs-surface-strong px-3 py-3.5 shadow-[inset_0_1px_0_var(--fs-border)] backdrop-blur sm:px-5">
      <div className="flex min-w-0 items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-fs-text-muted">FluentStack</p>
          <h1 className="truncate text-base font-semibold text-fs-text">{title}</h1>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2">
          {contextAction ? (
            <Link
              href={contextAction.href}
              className={
                contextAction.variant === "primary"
                  ? "hidden rounded-lg bg-fs-accent px-3.5 py-2 text-xs font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 md:inline-flex"
                  : "hidden rounded-lg border border-fs-border bg-fs-surface px-3.5 py-2 text-xs font-semibold text-fs-text-soft transition hover:bg-fs-surface-strong hover:text-fs-text focus:outline-none focus:ring-2 focus:ring-fs-focus/30 md:inline-flex"
              }
            >
              {contextAction.label}
            </Link>
          ) : null}

          <ThemeSwitcher />

          {isLoading ? (
            <span className="rounded-lg border border-fs-border bg-fs-surface px-3.5 py-2 text-xs text-fs-text-muted">
              Memuat sesi...
            </span>
          ) : isAuthenticated ? (
            <>
              <span className="hidden max-w-[112px] truncate rounded-lg border border-fs-border bg-fs-surface px-3 py-2 text-xs text-fs-text-soft min-[420px]:inline-block sm:max-w-[220px] sm:px-3.5">
                {user?.email}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="rounded-lg border border-fs-danger/35 bg-fs-danger-soft px-3.5 py-2 text-xs font-semibold text-fs-danger transition hover:bg-fs-danger-soft focus:outline-none focus:ring-2 focus:ring-fs-danger/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoggingOut ? "Keluar..." : "Keluar"}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-fs-border bg-fs-surface px-3.5 py-2 text-xs font-semibold text-fs-text-soft transition hover:bg-fs-surface-strong hover:text-fs-text focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="rounded-lg border border-fs-border-strong bg-fs-accent-soft px-3.5 py-2 text-xs font-semibold text-fs-accent transition hover:bg-fs-accent-soft focus:outline-none focus:ring-2 focus:ring-fs-focus/35"
              >
                Daftar
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
