export type CurriculumStage = "beginner" | "intermediate" | "advanced";

export type CurriculumLevel = {
  trackId: string;
  level: number;
  stage: CurriculumStage;
  title: string;
  description: string;
  moduleIds: string[];
};

export { frontendCurriculumLevels } from "@/content/frontend-engineering/levels";
import { frontendCurriculumLevels } from "@/content/frontend-engineering/levels";

export const curriculumStageLabels: Record<CurriculumStage, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const curriculumLevelsByTrackId: Record<string, CurriculumLevel[]> = {
  "frontend-engineering": frontendCurriculumLevels,
};
