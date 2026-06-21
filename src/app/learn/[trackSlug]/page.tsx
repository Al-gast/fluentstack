import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { CurriculumLevelSection } from "@/components/learning/curriculum-level-section";
import { ModuleCard } from "@/components/learning/module-card";
import { SequenceCta } from "@/components/learning/sequence-cta";
import { curriculumLevelsByTrackId } from "@/content/curriculum-levels";
import { getOrderedModuleLessons, getOrderedTrackLessons, getOrderedTrackModules } from "@/lib/content/learning-path";
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

  const trackModules = getOrderedTrackModules(track);
  const trackLessons = getOrderedTrackLessons(track);
  const curriculumLevels = curriculumLevelsByTrackId[track.id] ?? [];
  const groupedModuleIds = new Set(curriculumLevels.flatMap((level) => level.moduleIds));
  const hasCompleteLevelGrouping =
    curriculumLevels.length > 0 && trackModules.every((moduleItem) => groupedModuleIds.has(moduleItem.id));
  const levelSections = curriculumLevels.reduce<
    Array<{ level: (typeof curriculumLevels)[number]; modules: typeof trackModules; startOrderNumber: number }>
  >((sections, level) => {
    const previousModuleCount = sections.reduce(
      (count, section) => count + section.modules.length,
      0,
    );
    const levelModules = trackModules.filter((moduleItem) => level.moduleIds.includes(moduleItem.id));

    return [
      ...sections,
      {
        level,
        modules: levelModules,
        startOrderNumber: previousModuleCount + 1,
      },
    ];
  }, []);

  return (
    <AppShell title={track.title}>
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="rounded-3xl border border-fs-border bg-fs-surface p-6 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-8">
          <h1 className="text-3xl font-bold text-fs-text sm:text-4xl">{track.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-fs-text-soft">{track.description}</p>
          <p className="mt-4 text-sm text-fs-text-muted">
            Level {track.level} • Estimasi {track.estimatedHours} jam
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-fs-text-muted">
            Module di track ini disusun berurutan. Kamu tetap bisa membuka lesson mana pun, tapi urutan ini membantu konsepnya nyambung.
          </p>
          <SequenceCta lessons={trackLessons} scope="track" />
        </section>

        {hasCompleteLevelGrouping ? (
          <div className="space-y-6">
            {levelSections.map((section) => (
              <CurriculumLevelSection
                key={`${track.id}-${section.level.level}`}
                track={track}
                level={section.level}
                modules={section.modules}
                startOrderNumber={section.startOrderNumber}
              />
            ))}
          </div>
        ) : (
          <section className="grid gap-5 lg:grid-cols-2">
            {trackModules.map((moduleItem, index) => {
              const moduleLessons = getOrderedModuleLessons(moduleItem);
              return (
                <ModuleCard
                  key={moduleItem.id}
                  trackSlug={track.slug}
                  module={moduleItem}
                  moduleLessons={moduleLessons}
                  orderNumber={index + 1}
                />
              );
            })}
          </section>
        )}
      </div>
    </AppShell>
  );
}
