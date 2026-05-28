export type ChallengeLanguage = "html" | "css" | "js";
export type ChallengeCode = {
  html: string;
  css: string;
  js: string;
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
  skillTags: string[];
};
