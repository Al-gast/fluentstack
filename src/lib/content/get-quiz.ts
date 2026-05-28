import { quizzes } from "@/content/quizzes";
import type { Quiz } from "@/types/quiz";

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}
