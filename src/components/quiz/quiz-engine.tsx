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
  onQuizFinished: (result: { score: number; passed: boolean }) => void;
};

export function QuizEngine({ quiz, bestScore, onQuizFinished }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswerMap>({});
  const [submittedCurrent, setSubmittedCurrent] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

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

  const handleContinue = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSubmittedCurrent(false);
      return;
    }

    const score = calculateQuizScore(quiz, answers);
    const passed = score >= passingScore;

    onQuizFinished({ score, passed });
    setIsFinished(true);
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
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-700/70 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-300">
        <p>
          Pertanyaan {questionNumber} dari {totalQuestions}
        </p>
        <p>
          Target lulus: <span className="font-semibold text-cyan-100">{passingScore}</span>
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
              ? "border-emerald-300/35 bg-emerald-500/10 text-emerald-100"
              : "border-rose-300/35 bg-rose-500/10 text-rose-100"
          }`}
        >
          <p className="font-semibold">
            {currentIsCorrect ? "Jawaban kamu benar." : "Jawaban kamu belum tepat."}
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
            className="rounded-lg bg-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-300"
          >
            Submit jawaban
          </button>
        ) : (
          <button
            type="button"
            onClick={handleContinue}
            className="rounded-lg bg-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
          >
            {questionNumber === totalQuestions ? "Lihat hasil" : "Lanjut pertanyaan"}
          </button>
        )}
      </div>
    </div>
  );
}
