import type { ReactNode } from "react";
import Link from "next/link";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: string;
};

export function AuthCard({
  title,
  description,
  children,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthCardProps) {
  return (
    <section className="mx-auto w-full max-w-md rounded-3xl border border-zinc-700/70 bg-zinc-900/80 p-6 sm:p-7">
      <header>
        <p className="text-xs font-medium text-cyan-200">FluentStack Auth</p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-50">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>
      </header>

      <div className="mt-6">{children}</div>

      <p className="mt-6 text-sm text-zinc-400">
        {footerText}{" "}
        <Link href={footerLinkHref} className="font-semibold text-cyan-200 transition hover:text-cyan-100">
          {footerLinkLabel}
        </Link>
      </p>
    </section>
  );
}
