"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/app-shell";
import { ProgressBar } from "@/components/progress/progress-bar";
import { StreakCard } from "@/components/progress/streak-card";
import { XpBadge } from "@/components/progress/xp-badge";

const tracks = [
  {
    title: "Frontend Engineering",
    desc: "Mulai dari HTML, CSS, dan JavaScript lewat lesson singkat, quiz, dan coding practice.",
    lessons: "10 lesson awal",
  },
  {
    title: "English for Tech Careers",
    desc: "Latih komunikasi kerja tech: daily update, bug explanation, PR notes, dan interview intro.",
    lessons: "10 lesson awal",
  },
];

const flow = [
  "Pilih track",
  "Buka module",
  "Kerjakan lesson",
  "Jawab quick check dan quiz",
  "Progres tersimpan",
];

export default function Home() {
  return (
    <AppShell title="FluentStack">
      <div className="mx-auto max-w-[1440px] space-y-20 pb-10">
        <section className="grid gap-10 rounded-3xl border border-fs-border-strong bg-fs-surface p-7 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-10 lg:grid-cols-[1.24fr_0.76fr] lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <p className="inline-flex rounded-full border border-fs-border-strong bg-fs-accent-soft px-3 py-1 text-xs font-medium text-fs-accent">
              Learning lab terarah
            </p>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-fs-text sm:text-5xl lg:text-6xl">
              Belajar skill teknologi lewat lesson, quiz, dan praktik langsung.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-fs-text-soft sm:text-lg">
              Mulai dari track pertama, kerjakan quick check dan practice block, lalu lihat progres
              kamu di Dashboard.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-xl bg-fs-accent px-5 py-3 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
              >
                Mulai belajar
              </Link>
              <Link
                href="/roadmap"
                className="rounded-xl border border-fs-border bg-fs-surface px-5 py-3 text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
              >
                Lihat roadmap
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.07 }}
            className="rounded-2xl border border-fs-border bg-fs-surface-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)]"
          >
            <p className="text-xs font-medium text-fs-text-muted">Simulasi progres</p>
            <div className="mt-4 space-y-4">
              <XpBadge value={120} />
              <StreakCard days={4} />
              <ProgressBar value={36} label="Frontend Engineering" />
              <ProgressBar value={22} label="English for Tech Careers" tone="success" />
            </div>
            <p className="mt-4 text-xs leading-6 text-fs-text-muted">
              Progres asli bisa kamu lihat di Dashboard setelah mulai belajar.
            </p>
          </motion.div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-fs-text sm:text-3xl lg:text-4xl">Track yang tersedia</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {tracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
                className="rounded-2xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)]"
              >
                <h3 className="text-xl font-semibold text-fs-text">{track.title}</h3>
                <p className="mt-3 text-base leading-7 text-fs-text-soft">{track.desc}</p>
                <p className="mt-5 text-sm font-medium text-fs-accent">{track.lessons}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-fs-text sm:text-3xl lg:text-4xl">
            Alur belajar
          </h2>
          <div className="grid gap-4 md:grid-cols-5">
            {flow.map((step, idx) => (
              <div
                key={step}
                className="rounded-xl border border-fs-border bg-fs-surface p-5 text-sm text-fs-text-soft shadow-[inset_0_1px_0_var(--fs-border)]"
              >
                <p className="text-xs font-medium text-fs-text-muted">Langkah {idx + 1}</p>
                <p className="mt-3 leading-7">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)]">
            <h2 className="text-2xl font-bold text-fs-text lg:text-3xl">Praktik di dalam lesson</h2>
            <p className="mt-4 text-base leading-7 text-fs-text-soft">
              Setiap lesson punya aktivitas yang bisa langsung dikerjakan: quick check, quiz, dan
              latihan yang dekat dengan situasi kerja.
            </p>
            <ul className="mt-5 space-y-2.5 text-base text-fs-text-soft">
              <li>Quick check di tengah lesson</li>
              <li>Quiz dengan passing score yang jelas</li>
              <li>Writing practice untuk komunikasi profesional</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)]">
            <h2 className="text-2xl font-bold text-fs-text lg:text-3xl">Contoh progres belajar</h2>
            <p className="mt-4 text-base leading-7 text-fs-text-soft">
              Ini simulasi tampilan progres. Progres dihitung dari blok belajar yang selesai, bukan
              hanya membuka halaman.
            </p>
            <div className="mt-6 space-y-4">
              <ProgressBar value={60} label="Blok selesai" />
              <ProgressBar value={70} label="Target skor quiz" tone="success" />
            </div>
            <p className="mt-4 text-sm text-fs-text-muted">
              Progres asli bisa kamu lihat di Dashboard setelah mulai belajar.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-fs-border-strong bg-fs-accent-soft p-8 text-center shadow-[inset_0_1px_0_var(--fs-border)] sm:p-10">
          <h2 className="text-2xl font-bold text-fs-text sm:text-3xl lg:text-4xl">
            Mulai dari satu lesson, lalu lanjutkan dari Dashboard.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-fs-text-soft">
            Belajar dalam alur kecil: baca, cek pemahaman, praktik, lalu simpan progres kamu.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-xl bg-fs-accent px-5 py-3 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
            >
              Mulai belajar
            </Link>
            <Link
              href="/roadmap"
              className="rounded-xl border border-fs-border bg-fs-surface px-5 py-3 text-sm font-semibold text-fs-text transition hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
            >
              Lihat roadmap
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
