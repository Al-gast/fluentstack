"use client";

import { useMemo, useState } from "react";
import type { Quiz } from "@/types/quiz";
import {
  calculateQuizScore,
  getPassingScore,
  isQuestionCorrect,
  type QuizAnswerMap,
} from "@/lib/quiz/scoring";
import { QuizQuestion } from "@/components/quiz/quiz-question";
import { QuizResult } from "@/components/quiz/quiz-result";

type QuizEngineProps = {
  quiz: Quiz;
  bestScore: number;
  onQuizFinished: (result: { score: number; passed: boolean }) => void | Promise<unknown>;
};

export function QuizEngine({ quiz, bestScore, onQuizFinished }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswerMap>({});
  const [submittedCurrent, setSubmittedCurrent] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id];
  const passingScore = getPassingScore(quiz);

  const currentIsCorrect = useMemo(() => {
    if (!submittedCurrent) {
      return false;
    }

    return isQuestionCorrect(currentQuestion, currentAnswer);
  }, [submittedCurrent, currentQuestion, currentAnswer]);

  const handleSubmitCurrent = () => {
    if (currentAnswer === undefined || currentAnswer === "") {
      return;
    }

    setSubmittedCurrent(true);
  };

  const handleContinue = async () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSubmittedCurrent(false);
      return;
    }

    const score = calculateQuizScore(quiz, answers);
    const passed = score >= passingScore;

    setIsFinishing(true);
    try {
      await onQuizFinished({ score, passed });
      setIsFinished(true);
    } finally {
      setIsFinishing(false);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setAnswers({});
    setSubmittedCurrent(false);
    setIsFinished(false);
  };

  if (isFinished) {
    const finalScore = calculateQuizScore(quiz, answers);

    return (
      <QuizResult
        score={finalScore}
        passingScore={passingScore}
        bestScore={Math.max(bestScore, finalScore)}
        onRetry={handleRetry}
      />
    );
  }

  const questionNumber = currentIndex + 1;
  const totalQuestions = quiz.questions.length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-fs-border bg-fs-surface px-4 py-3 text-sm text-fs-text-soft">
        <p>
          Pertanyaan {questionNumber} dari {totalQuestions}
        </p>
        <p>
          Target lulus: <span className="font-semibold text-fs-accent">{passingScore}</span>
        </p>
      </div>

      <QuizQuestion
        question={currentQuestion}
        currentAnswer={currentAnswer}
        onAnswerChange={(answer) => {
          setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
          if (submittedCurrent) {
            setSubmittedCurrent(false);
          }
        }}
        disabled={submittedCurrent}
        submitted={submittedCurrent}
      />

      {submittedCurrent ? (
        <div
          className={`rounded-xl border p-4 text-sm leading-7 ${
            currentIsCorrect
              ? "border-fs-success/35 bg-fs-success-soft text-fs-text"
              : "border-fs-danger/35 bg-fs-danger-soft text-fs-text"
          }`}
        >
          <p className="font-semibold">
            {currentIsCorrect ? "Benar." : "Belum tepat."}
          </p>
          <p className="mt-2">{currentQuestion.explanation}</p>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2">
        {!submittedCurrent ? (
          <button
            type="button"
            disabled={currentAnswer === undefined || currentAnswer === ""}
            onClick={handleSubmitCurrent}
            className="rounded-lg bg-fs-accent px-4 py-2 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 disabled:cursor-not-allowed disabled:bg-fs-surface-strong disabled:text-fs-text-muted"
          >
            Kirim jawaban
          </button>
        ) : (
          <button
            type="button"
            onClick={handleContinue}
            disabled={isFinishing}
            className="rounded-lg bg-fs-accent px-4 py-2 text-sm font-semibold text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isFinishing ? "Menyimpan..." : questionNumber === totalQuestions ? "Lihat hasil" : "Pertanyaan berikutnya"}
          </button>
        )}
      </div>
    </div>
  );
}
