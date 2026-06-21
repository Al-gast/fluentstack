import { AppShell } from "@/components/layout/app-shell";
import { TrackCard } from "@/components/learning/track-card";
import { tracks } from "@/content/tracks";
import { getOrderedTrackLessons, getOrderedTrackModules } from "@/lib/content/learning-path";

export default function RoadmapPage() {
  return (
    <AppShell title="Roadmap">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-8">
          <h1 className="text-3xl font-bold text-fs-text sm:text-4xl">Roadmap Belajar</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-fs-text-soft">
            Lihat urutan track, module, dan lesson yang tersedia. Roadmap ini memberi gambaran besar
            sebelum kamu mulai belajar.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {tracks.map((track) => {
            const trackModules = getOrderedTrackModules(track);
            const trackLessons = getOrderedTrackLessons(track);

            return (
              <TrackCard
                key={track.id}
                track={track}
                moduleCount={trackModules.length}
                lessonCount={trackLessons.length}
                trackLessons={trackLessons}
              />
            );
          })}
        </section>
      </div>
    </AppShell>
  );
}
