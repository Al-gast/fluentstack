export type Quiz = {
  id: string;
  lessonId: string;
  title: string;
  passingScore: number;
  questions: QuizQuestion[];
};

export type QuizQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | CodeOutputQuestion;

export type MultipleChoiceQuestion = {
  id: string;
  type: "multiple-choice";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type TrueFalseQuestion = {
  id: string;
  type: "true-false";
  question: string;
  correctAnswer: boolean;
  explanation: string;
};

export type FillBlankQuestion = {
  id: string;
  type: "fill-blank";
  question: string;
  correctAnswer: string;
  explanation: string;
};

export type CodeOutputQuestion = {
  id: string;
  type: "code-output";
  question: string;
  code: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};
