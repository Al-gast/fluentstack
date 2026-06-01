export type ChallengeLanguage = "html" | "css" | "js";
export type ChallengeCode = {
  html: string;
  css: string;
  js: string;
};

export type ChallengeValidationCheckType =
  | "contains"
  | "hasElement"
  | "hasElementWithAttribute"
  | "hasDoctype"
  | "hasTextInElement";

export type ChallengeValidationCheck = {
  id: string;
  label: string;
  type: ChallengeValidationCheckType;
  target?: string;
  attribute?: string;
  valueIncludes?: string;
  mustHaveValue?: boolean;
  required?: boolean;
};

export type ChallengeValidation = {
  mode: "html";
  checks: ChallengeValidationCheck[];
};

export type CodingChallenge = {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  instructions: string[];
  starterCode: ChallengeCode;
  solutionCode?: ChallengeCode;
  checklist: string[];
  validation?: ChallengeValidation;
  skillTags: string[];
};
