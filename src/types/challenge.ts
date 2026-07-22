export type ChallengeLanguage = "html" | "css" | "js" | "ts" | "tsx";
export type ChallengeCode = {
  html: string;
  css: string;
  js: string;
  ts?: string;
  tsx?: string;
};

export type ChallengeValidationCheckType =
  | "contains"
  | "hasElement"
  | "hasElementWithAttribute"
  | "hasDoctype"
  | "hasTextInElement"
  | "cssSelectorExists"
  | "cssPropertyExists"
  | "cssSelectorPropertyExists"
  | "cssSelectorPropertyValue"
  | "cssForbiddenTextAbsent";

export type ChallengeValidationCheck = {
  id: string;
  label: string;
  type: ChallengeValidationCheckType;
  target?: string;
  attribute?: string;
  property?: string;
  valueIncludes?: string;
  mustHaveValue?: boolean;
  required?: boolean;
};

export type ChallengeValidation = {
  mode: "html" | "css" | "js" | "ts" | "tsx";
  checks: ChallengeValidationCheck[];
};

export type ChallengeExpectedOutput =
  | {
      kind: "console";
      title?: string;
      description?: string;
      lines: string[];
    }
  | {
      kind: "preview" | "behavior";
      title?: string;
      description: string;
      lines?: string[];
    };

export type ReactPracticePresentation =
  | {
      mode: "structure";
      framework?: "react" | "next" | "testing";
    }
  | {
      mode: "runtime";
      componentName: string;
      framework?: "react";
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
  expectedOutput?: ChallengeExpectedOutput;
  reactPractice?: ReactPracticePresentation;
  skillTags: string[];
};
