import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { ModuleLearningPath } from "@/components/learning/module-learning-path";
import { curriculumLevelsByTrackId } from "@/content/curriculum-levels";
import { getOrderedModuleLessons, getOrderedTrackModules } from "@/lib/content/learning-path";
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
  const trackModules = getOrderedTrackModules(track);
  const moduleIndex = trackModules.findIndex((entry) => entry.id === moduleItem.id);
  const curriculumLevel = curriculumLevelsByTrackId[track.id]?.find((level) =>
    level.moduleIds.includes(moduleItem.id),
  );

  return (
    <AppShell title={moduleItem.title}>
      <ModuleLearningPath
        track={track}
        module={moduleItem}
        moduleLessons={moduleLessons}
        previousModule={trackModules[moduleIndex - 1]}
        nextModule={trackModules[moduleIndex + 1]}
        curriculumLevel={curriculumLevel}
      />
    </AppShell>
  );
}
