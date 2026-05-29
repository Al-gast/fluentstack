"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";
import { useAuthUser } from "@/hooks/use-auth-user";

type TopbarProps = {
  title?: string;
};

export function Topbar({ title = "FluentStack" }: TopbarProps) {
  const router = useRouter();
  const { user, isLoading, isAuthenticated } = useAuthUser();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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
    <header className="sticky top-0 z-20 rounded-2xl border border-zinc-800/80 bg-zinc-950/75 px-4 py-3.5 backdrop-blur sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-zinc-400">Platform belajar</p>
          <h1 className="text-base font-semibold text-zinc-100">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="hidden rounded-lg border border-zinc-700/70 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800 sm:inline-flex"
          >
            Dashboard
          </Link>
          <Link
            href="/roadmap"
            className="hidden rounded-lg bg-cyan-500/90 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-cyan-400 sm:inline-flex"
          >
            Roadmap
          </Link>

          {isLoading ? (
            <span className="rounded-lg border border-zinc-700/70 px-3.5 py-2 text-xs text-zinc-400">
              Memuat sesi...
            </span>
          ) : isAuthenticated ? (
            <>
              <span className="max-w-[220px] truncate rounded-lg border border-zinc-700/70 px-3.5 py-2 text-xs text-zinc-300">
                {user?.email}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="rounded-lg border border-rose-300/35 bg-rose-500/10 px-3.5 py-2 text-xs font-semibold text-rose-100 transition hover:bg-rose-500/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoggingOut ? "Keluar..." : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-zinc-700/70 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="rounded-lg border border-cyan-300/35 bg-cyan-500/10 px-3.5 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
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
