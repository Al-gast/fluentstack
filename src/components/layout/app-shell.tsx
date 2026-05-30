import type { ReactNode } from "react";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { cn } from "@/lib/utils";

type AppShellProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export function AppShell({ children, className, title }: AppShellProps) {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(1200px_circle_at_10%_-10%,rgba(8,145,178,0.28),transparent_45%),radial-gradient(1100px_circle_at_90%_0%,rgba(99,102,241,0.22),transparent_50%),#070b14] text-zinc-100">
      <div className="mx-auto flex w-full max-w-[1640px] gap-5 px-3 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-3 sm:px-7 sm:pt-4 lg:px-10 lg:pb-10">
        <Sidebar />
        <div className="min-w-0 flex-1 space-y-4">
          <Topbar title={title} />
          <main
            className={cn(
              "rounded-3xl border border-zinc-800/80 bg-zinc-950/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur sm:p-7 lg:p-8",
              className,
            )}
          >
            {children}
          </main>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
