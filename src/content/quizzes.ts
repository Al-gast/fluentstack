import type { Quiz } from "@/types/quiz";
import { frontendEngineeringQuizzes } from "@/content/frontend-engineering";

export {
  whatIsWebsiteAndWebPageQuiz,
  howWebPageLoadsQuiz,
  whatAreHtmlCssJavascriptQuiz,
  htmlCssJsRolesQuiz,
  webFoundationsAssessmentQuiz,
  htmlBasicStructureQuiz,
  tagElementAttributeQuiz,
  htmlBasicsAssessmentQuiz,
  semanticHtmlStructureQuiz,
  htmlSemanticQuiz,
  semanticHtmlAssessmentQuiz,
  formsBasicAccessibilityAssessmentQuiz,
  cssCoreMechanicsAssessmentQuiz,
  boxModelSpacingAssessmentQuiz,
  localStaticWebsiteProjectAssessmentQuiz,
  flexboxGridLayoutAssessmentQuiz,
  responsiveVisualSystemAssessmentQuiz,
  javascriptValuesTypesFunctionsAssessmentQuiz,
  javascriptArraysObjectsDataModelingAssessmentQuiz,
  javascriptDomEventsFormsStorageFetchAssessmentQuiz,
  javascriptScopeClosureModulesAssessmentQuiz,
  javascriptAsyncErrorHandlingAssessmentQuiz,
  javascriptBrowserApisDebuggingAssessmentQuiz,
  localToolingNpmBasicsAssessmentQuiz,
  typescriptCoreTypesAssessmentQuiz,
  typescriptPracticalTypeDesignAssessmentQuiz,
  typescriptTypedFrontendBoundariesAssessmentQuiz,
  reactComponentModelAssessmentQuiz,
  reactStateEventsRenderingAssessmentQuiz,
  reactFormsCompositionAssessmentQuiz,
  localReactAppAssessmentQuiz,
  reactCustomHooksEffectsAssessmentQuiz,
  reactStateStrategyAssessmentQuiz,
  reactReusableUiStatesAssessmentQuiz,
} from "@/content/frontend-engineering";



export const quizzes: Quiz[] = [
  ...frontendEngineeringQuizzes,
];
