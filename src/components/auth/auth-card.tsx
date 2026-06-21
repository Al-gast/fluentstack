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
    <section className="mx-auto w-full max-w-md rounded-3xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-7">
      <header>
        <p className="text-xs font-semibold text-fs-accent">Akun FluentStack</p>
        <h1 className="mt-2 text-2xl font-bold text-fs-text">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-fs-text-soft">{description}</p>
      </header>

      <div className="mt-6">{children}</div>

      <p className="mt-6 text-sm text-fs-text-muted">
        {footerText}{" "}
        <Link href={footerLinkHref} className="font-semibold text-fs-accent transition hover:text-fs-accent-strong">
          {footerLinkLabel}
        </Link>
      </p>
    </section>
  );
}
