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
    desc: "Bangun fondasi HTML, CSS, JavaScript sampai pola UI modern lewat lesson terstruktur.",
    lessons: "10 lesson awal",
  },
  {
    title: "English for Tech Careers",
    desc: "Latihan komunikasi kerja remote: update harian, bug explanation, PR notes, dan interview intro.",
    lessons: "10 lesson awal",
  },
];

const flow = [
  "Pilih track di Roadmap",
  "Buka module lalu lesson",
  "Belajar lewat text + contoh",
  "Kerjakan quick check dan quiz",
  "Progres dan XP meningkat",
];

export default function Home() {
  return (
    <AppShell title="FluentStack">
      <div className="mx-auto max-w-[1440px] space-y-20 pb-10">
        <section className="grid gap-10 rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950/70 via-zinc-900/70 to-cyan-950/50 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-10 lg:grid-cols-[1.24fr_0.76fr] lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100">
              Guided learning lab
            </p>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              Belajar skill teknologi dengan alur yang jelas.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              FluentStack membantu kamu belajar lewat materi singkat, quick check, quiz, praktik
              langsung, dan progres yang mudah dipantau.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-xl bg-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
              >
                Mulai belajar
              </Link>
              <Link
                href="/roadmap"
                className="rounded-xl border border-zinc-700/80 bg-zinc-950/55 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
              >
                Lihat roadmap
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.07 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-950/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5"
          >
            <p className="text-xs font-medium text-zinc-400">Simulasi progres</p>
            <div className="mt-4 space-y-4">
              <XpBadge value={120} />
              <StreakCard days={4} />
              <ProgressBar value={36} label="Frontend Engineering" />
              <ProgressBar value={22} label="English for Tech Careers" tone="success" />
            </div>
            <p className="mt-4 text-xs leading-6 text-zinc-400">
              Progres asli bisa kamu lihat di Dashboard setelah mulai belajar.
            </p>
          </motion.div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl lg:text-4xl">Track preview</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {tracks.map((track, index) => (
              <motion.article
                key={track.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-6"
              >
                <h3 className="text-xl font-semibold text-zinc-100">{track.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-300">{track.desc}</p>
                <p className="mt-5 text-sm text-cyan-200/80">{track.lessons}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl lg:text-4xl">
            Learning flow preview
          </h2>
          <div className="grid gap-4 md:grid-cols-5">
            {flow.map((step, idx) => (
              <div
                key={step}
                className="rounded-xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5 text-sm text-zinc-200"
              >
                <p className="text-xs font-medium text-zinc-400">Step {idx + 1}</p>
                <p className="mt-3 leading-7">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-6">
            <h2 className="text-2xl font-bold text-zinc-50 lg:text-3xl">Interactive practice preview</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Setiap lesson menggabungkan praktik langsung. Bukan sekadar baca materi, tapi ada
              quick check, quiz, dan latihan yang relevan dengan konteks kerja nyata.
            </p>
            <ul className="mt-5 space-y-2.5 text-base text-zinc-200">
              <li>Quick check di tengah lesson</li>
              <li>Quiz dengan passing score yang jelas</li>
              <li>Writing practice untuk komunikasi profesional</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-6">
            <h2 className="text-2xl font-bold text-zinc-50 lg:text-3xl">Contoh progres belajar</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Ini simulasi tampilan progres. Progres dihitung dari aktivitas belajar bermakna,
              bukan hanya membuka halaman.
            </p>
            <div className="mt-6 space-y-4">
              <ProgressBar value={60} label="Read + Activity Completion" />
              <ProgressBar value={70} label="Quiz Score Target" tone="success" />
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              Progres asli bisa kamu lihat di Dashboard setelah mulai belajar.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-10">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl lg:text-4xl">
            Mulai dari satu lesson. Bangun momentum harian.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-200">
            FluentStack dirancang supaya kamu bisa belajar konsisten, melihat progres nyata, dan
            siap untuk skill teknis plus komunikasi kerja.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-xl bg-cyan-300 shadow-[0_0_0_1px_rgba(103,232,249,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
            >
              Mulai belajar
            </Link>
            <Link
              href="/roadmap"
              className="rounded-xl border border-zinc-500 bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-50 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
            >
              Lihat roadmap
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
