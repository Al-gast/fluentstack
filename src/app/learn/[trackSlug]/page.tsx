import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { ModuleCard } from "@/components/learning/module-card";
import { lessons } from "@/content/lessons";
import { modules } from "@/content/modules";
import { getTrackBySlug } from "@/lib/content/get-track";

type TrackPageProps = {
  params: Promise<{ trackSlug: string }>;
};

export default async function TrackPage({ params }: TrackPageProps) {
  const { trackSlug } = await params;
  const track = getTrackBySlug(trackSlug);

  if (!track) {
    notFound();
  }

  const trackModules = modules.filter((moduleItem) => moduleItem.trackId === track.id);

  return (
    <AppShell title={track.title}>
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-zinc-700/60 bg-zinc-900/70 p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-zinc-50 sm:text-4xl">{track.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{track.description}</p>
          <p className="mt-4 text-sm text-zinc-400">
            Level {track.level} • Estimasi {track.estimatedHours} jam
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {trackModules.map((moduleItem) => {
            const moduleLessons = lessons.filter((lesson) => lesson.moduleId === moduleItem.id);
            return (
              <ModuleCard
                key={moduleItem.id}
                trackSlug={track.slug}
                module={moduleItem}
                moduleLessons={moduleLessons}
              />
            );
          })}
        </section>
      </div>
    </AppShell>
  );
}
