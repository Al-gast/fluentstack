export type CurriculumLevel = {
  trackId: string;
  level: number;
  title: string;
  description: string;
  moduleIds: string[];
};

export { frontendCurriculumLevels } from "@/content/frontend-engineering/levels";
import { frontendCurriculumLevels } from "@/content/frontend-engineering/levels";

export const curriculumLevelsByTrackId: Record<string, CurriculumLevel[]> = {
  "frontend-engineering": frontendCurriculumLevels,
};
