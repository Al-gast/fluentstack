"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";
import { useAuthUser } from "@/hooks/use-auth-user";

type TopbarProps = {
  title?: string;
};

function getContextAction(pathname: string): { label: string; href: string; variant?: "primary" } | null {
  if (pathname === "/") {
    return { label: "Mulai belajar", href: "/dashboard", variant: "primary" };
  }

  if (pathname === "/dashboard") {
    return { label: "Buka Roadmap", href: "/roadmap", variant: "primary" };
  }

  if (pathname === "/roadmap") {
    return { label: "Pilih Tracks", href: "/learn", variant: "primary" };
  }

  if (pathname === "/learn" || pathname.startsWith("/learn/")) {
    return { label: "Lihat Roadmap", href: "/roadmap" };
  }

  if (pathname.startsWith("/lesson/")) {
    return { label: "Semua Tracks", href: "/learn" };
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
    <header className="sticky top-0 z-20 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 px-3 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur sm:px-5">
      <div className="flex min-w-0 items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-zinc-400">Platform belajar</p>
          <h1 className="truncate text-base font-semibold text-zinc-100">{title}</h1>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2">
          {contextAction ? (
            <Link
              href={contextAction.href}
              className={
                contextAction.variant === "primary"
                  ? "hidden rounded-lg bg-cyan-400 px-3.5 py-2 text-xs font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 md:inline-flex"
                  : "hidden rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30 md:inline-flex"
              }
            >
              {contextAction.label}
            </Link>
          ) : null}

          {isLoading ? (
            <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3.5 py-2 text-xs text-zinc-400">
              Memuat sesi...
            </span>
          ) : isAuthenticated ? (
            <>
              <span className="hidden max-w-[112px] truncate rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-2 text-xs text-zinc-300 min-[420px]:inline-block sm:max-w-[220px] sm:px-3.5">
                {user?.email}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="rounded-lg border border-rose-300/35 bg-rose-500/10 px-3.5 py-2 text-xs font-semibold text-rose-100 transition hover:bg-rose-500/20 focus:outline-none focus:ring-2 focus:ring-rose-300/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoggingOut ? "Keluar..." : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="rounded-lg border border-cyan-300/35 bg-cyan-500/10 px-3.5 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/35"
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
