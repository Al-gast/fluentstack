export type ContentLanguage = "id" | "en" | "bilingual";
export type LearningLevel = "beginner" | "intermediate" | "advanced";

export type Track = {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: LearningLevel;
  estimatedHours: number;
  moduleIds: string[];
  skillTags: string[];
};

export type Module = {
  id: string;
  trackId: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  lessonIds: string[];
  estimatedHours: number;
  skillTags: string[];
};

export type Lesson = {
  id: string;
  trackId: string;
  moduleId: string;
  title: string;
  slug: string;
  description: string;
  contentLanguage: ContentLanguage;
  level: LearningLevel;
  estimatedMinutes: number;
  objectives: string[];
  skillTags: string[];
  blocks: LessonBlock[];
  completionRule: LessonCompletionRule;
};

export type LessonCompletionRule = {
  requiredBlockIds: string[];
  passingQuizScore?: number;
};

export type LessonBlock =
  | TextBlock
  | CalloutBlock
  | CodeExampleBlock
  | QuickCheckBlock
  | CodingPracticeBlock
  | WritingPracticeBlock
  | QuizBlock
  | DocumentationBridgeBlock
  | SummaryBlock;

export type TextBlock = {
  id: string;
  type: "text";
  title: string;
  content: string;
};

export type CalloutBlock = {
  id: string;
  type: "callout";
  variant: "tip" | "warning" | "common-mistake" | "important";
  title: string;
  content: string;
};

export type CodeExampleBlock = {
  id: string;
  type: "code-example";
  title: string;
  language: "html" | "css" | "js" | "ts" | "tsx" | "json" | "bash";
  code: string;
  explanation?: string;
};

export type QuickCheckBlock = {
  id: string;
  type: "quick-check";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type CodingPracticeBlock = {
  id: string;
  type: "coding-practice";
  challengeId: string;
};

export type WritingPracticeBlock = {
  id: string;
  type: "writing-practice";
  prompt: string;
  placeholder: string;
  minimumCharacters?: number;
  modelAnswer?: string;
  checklist?: string[];
};

export type QuizBlock = {
  id: string;
  type: "quiz";
  quizId: string;
};

export type DocumentationBridgeLink = {
  source: string;
  title: string;
  url: string;
  focus: string[];
  ignoreForNow?: string[];
};

export type DocumentationBridgeBlock = {
  id: string;
  type: "documentation-bridge";
  title: string;
  description?: string;
  links: DocumentationBridgeLink[];
  followUpAction: string;
};

export type SummaryBlock = {
  id: string;
  type: "summary";
  points: string[];
};
