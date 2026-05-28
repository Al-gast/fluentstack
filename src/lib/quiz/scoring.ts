import type { Quiz, QuizQuestion } from "@/types/quiz";

export type QuizAnswerValue = string | boolean;
export type QuizAnswerMap = Record<string, QuizAnswerValue | undefined>;

function normalizeString(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function isQuestionCorrect(question: QuizQuestion, answer: QuizAnswerValue | undefined): boolean {
  if (answer === undefined) {
    return false;
  }

  switch (question.type) {
    case "true-false":
      return typeof answer === "boolean" && answer === question.correctAnswer;
    case "fill-blank":
      return typeof answer === "string" && normalizeString(answer) === normalizeString(question.correctAnswer);
    case "multiple-choice":
    case "code-output":
      return typeof answer === "string" && answer === question.correctAnswer;
    default:
      return false;
  }
}

export function calculateQuizScore(quiz: Quiz, answers: QuizAnswerMap): number {
  if (quiz.questions.length === 0) {
    return 0;
  }

  const correctCount = quiz.questions.filter((question) => {
    return isQuestionCorrect(question, answers[question.id]);
  }).length;

  return Math.round((correctCount / quiz.questions.length) * 100);
}

export function getPassingScore(quiz: Quiz | null | undefined): number {
  if (!quiz) {
    return 70;
  }

  return typeof quiz.passingScore === "number" ? quiz.passingScore : 70;
}
