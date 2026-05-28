import { AppShell } from "@/components/layout/app-shell";
import { TrackCard } from "@/components/learning/track-card";
import { modules } from "@/content/modules";
import { lessons } from "@/content/lessons";
import { tracks } from "@/content/tracks";

export default function RoadmapPage() {
  return (
    <AppShell title="Roadmap">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-zinc-700/60 bg-zinc-900/70 p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-zinc-50 sm:text-4xl">Roadmap Belajar</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
            Pilih track yang ingin kamu pelajari. Setiap track berisi module dan lesson yang
            terstruktur supaya kamu tahu langkah belajar selanjutnya.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {tracks.map((track) => {
            const trackModules = modules.filter((moduleItem) => moduleItem.trackId === track.id);
            const trackLessons = lessons.filter((lesson) => lesson.trackId === track.id);
            const lessonCount = trackLessons.length;

            return (
              <TrackCard
                key={track.id}
                track={track}
                moduleCount={trackModules.length}
                lessonCount={lessonCount}
                trackLessons={trackLessons}
              />
            );
          })}
        </section>
      </div>
    </AppShell>
  );
}
