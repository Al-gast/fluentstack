import type { CodingChallenge } from "@/types/challenge";
import { frontendEngineeringChallenges } from "@/content/frontend-engineering";

export {
  buildBasicHtmlPageChallenge,
  practiceTagElementAttributeChallenge,
  buildBasicContentPageChallenge,
  practiceRelativePathsChallenge,
  buildSemanticHtmlPageChallenge,
  refactorDivLayoutToSemanticHtmlChallenge,
  buildHtmlBasicsPageChallenge,
  buildSemanticHtmlAssessmentPageChallenge,
  buildBasicAccessibleFormChallenge,
  buildContactFormFieldsChallenge,
  writeUsefulAltTextChallenge,
  buildAccessibleContactFormChallenge,
  styleBasicHtmlTextChallenge,
  practiceCssSelectorsDeclarationsChallenge,
  debugBasicCssCascadeChallenge,
  practiceCssBoxModelCardChallenge,
  practiceCssPaddingMarginCardChallenge,
  practiceCssBorderWidthCardChallenge,
  fixBoxModelSpacingCardChallenge,
  buildStyledInfoCardChallenge,
  practiceCssFlexboxBasicChallenge,
  buildFlexboxNavbarChallenge,
  practiceCssGridCardLayoutChallenge,
  chooseFlexboxGridLayoutChallenge,
  buildResponsiveIshCardSectionChallenge,
  practiceMobileFirstSectionChallenge,
  practiceCssBreakpointCardGridChallenge,
  practiceFluidSpacingTypographyChallenge,
  practiceCssVariablesThemeCardChallenge,
  buildResponsiveVisualSectionChallenge,
  storeSimpleJsValuesChallenge,
  buildBasicJsFunctionsChallenge,
  practiceJsConditionalsLoopsChallenge,
  buildJsUtilityFunctionsChallenge,
} from "@/content/frontend-engineering";



export const challenges: CodingChallenge[] = [
  ...frontendEngineeringChallenges,
];
