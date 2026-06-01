import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { LessonCard } from "@/components/learning/lesson-card";
import { SequenceCta } from "@/components/learning/sequence-cta";
import { getOrderedModuleLessons } from "@/lib/content/learning-path";
import { getModuleBySlug } from "@/lib/content/get-module";
import { getTrackBySlug } from "@/lib/content/get-track";

type ModulePageProps = {
  params: Promise<{ trackSlug: string; moduleSlug: string }>;
};

export default async function ModulePage({ params }: ModulePageProps) {
  const { trackSlug, moduleSlug } = await params;

  const track = getTrackBySlug(trackSlug);
  const moduleItem = getModuleBySlug(moduleSlug);

  if (!track || !moduleItem || moduleItem.trackId !== track.id) {
    notFound();
  }

  const moduleLessons = getOrderedModuleLessons(moduleItem);

  return (
    <AppShell title={moduleItem.title}>
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-6 sm:p-8">
          <p className="text-sm text-cyan-200">{track.title}</p>
          <h1 className="mt-2 text-3xl font-bold text-zinc-50 sm:text-4xl">{moduleItem.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{moduleItem.description}</p>
          <p className="mt-4 text-sm text-zinc-400">
            {moduleLessons.length} lesson • Estimasi {moduleItem.estimatedHours} jam
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            Ikuti lesson dari atas ke bawah supaya fondasinya runtut. Ini hanya rekomendasi urutan, bukan lock.
          </p>
          <SequenceCta lessons={moduleLessons} scope="module" />
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {moduleLessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              orderNumber={index + 1}
              previousLesson={moduleLessons[index - 1]}
            />
          ))}
        </section>
      </div>
    </AppShell>
  );
}
