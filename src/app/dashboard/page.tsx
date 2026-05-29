import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { LessonCard } from "@/components/learning/lesson-card";
import { ModuleCard } from "@/components/learning/module-card";
import { TrackCard } from "@/components/learning/track-card";
import { tracks } from "@/content/tracks";
import { modules } from "@/content/modules";
import { lessons } from "@/content/lessons";

export default function DashboardPage() {
  const firstTrack = tracks[0];
  const firstModule = modules[0];
  const firstLesson = lessons[0];
  const firstModuleLessons = firstModule
    ? lessons.filter((lesson) => lesson.moduleId === firstModule.id)
    : [];
  const firstTrackLessons = firstTrack ? lessons.filter((lesson) => lesson.trackId === firstTrack.id) : [];

  return (
    <AppShell title="Dashboard">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-zinc-700/60 bg-zinc-900/70 p-6 sm:p-8">
          <p className="text-sm text-cyan-200">Selamat datang di FluentStack</p>
          <h1 className="mt-2 text-3xl font-bold text-zinc-50 sm:text-4xl">
            Fokus hari ini: lanjutkan lesson pertama kamu.
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
            Progres kamu tersimpan otomatis sesuai mode belajar. Lanjutkan alur dari roadmap,
            track, module, lalu tuntaskan lesson yang sedang berjalan.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/roadmap"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Buka roadmap
            </Link>
            {firstLesson ? (
              <Link
                href={`/lesson/${firstLesson.slug}`}
                className="rounded-xl border border-zinc-600 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800"
              >
                Buka lesson pertama
              </Link>
            ) : null}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-6">
          <h2 className="text-xl font-bold text-zinc-100">Lanjut belajar</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Jalur pertama yang direkomendasikan: Frontend Engineering → HTML & Web Fundamentals →
            Dasar Semantic HTML.
          </p>
          {firstTrack && firstModule ? (
            <Link
              href={`/learn/${firstTrack.slug}/${firstModule.slug}`}
              className="mt-4 inline-flex rounded-xl border border-zinc-600 bg-zinc-800/80 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
            >
              Lihat module saat ini
            </Link>
          ) : null}
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-100">Ringkasan progres belajar</h2>
          <div className="grid gap-4 xl:grid-cols-3">
            {firstTrack ? (
              <TrackCard
                track={firstTrack}
                moduleCount={firstTrack.moduleIds.length}
                lessonCount={firstTrackLessons.length}
                trackLessons={firstTrackLessons}
              />
            ) : null}
            {firstTrack && firstModule ? (
              <ModuleCard
                trackSlug={firstTrack.slug}
                module={firstModule}
                moduleLessons={firstModuleLessons}
              />
            ) : null}
            {firstLesson ? <LessonCard lesson={firstLesson} /> : null}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
