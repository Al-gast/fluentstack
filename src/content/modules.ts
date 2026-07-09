import type { Module } from "@/types/learning";
import { frontendEngineeringModules } from "@/content/frontend-engineering";

export {
  webFoundationsModule,
  htmlBasicsModule,
  semanticHtmlModule,
  formsBasicAccessibilityModule,
  cssCoreMechanicsModule,
  boxModelSpacingModule,
  localStaticWebsiteProjectModule,
  flexboxGridLayoutModule,
  responsiveVisualSystemModule,
  javascriptValuesTypesFunctionsModule,
  javascriptArraysObjectsDataModelingModule,
  javascriptDomEventsFormsStorageFetchModule,
  localVanillaJavascriptAppModule,
  javascriptScopeClosureModulesModule,
  javascriptAsyncErrorHandlingModule,
  javascriptBrowserApisDataDebuggingModule,
  localToolingNpmBasicsModule,
} from "@/content/frontend-engineering";

export const englishForRemoteWorkModule: Module = {
  id: "english-for-remote-work",
  trackId: "english-for-tech-careers",
  title: "English for Remote Work",
  slug: "english-for-remote-work",
  description:
    "Latih daily update dan komunikasi tertulis yang jelas untuk kerja remote.",
  order: 1,
  lessonIds: ["writing-daily-update"],
  estimatedHours: 5,
  skillTags: ["Technical English", "Remote Communication", "Writing"],
};

export const modules: Module[] = [
  ...frontendEngineeringModules,
  englishForRemoteWorkModule,
];
