import type { QuizQuestion as QuizQuestionType } from "@/types/quiz";
import { isQuestionCorrect, type QuizAnswerValue } from "@/lib/quiz/scoring";

type QuizQuestionProps = {
  question: QuizQuestionType;
  currentAnswer: QuizAnswerValue | undefined;
  onAnswerChange: (answer: QuizAnswerValue) => void;
  disabled?: boolean;
  submitted?: boolean;
};

function renderChoiceOptions(
  options: string[],
  currentAnswer: QuizAnswerValue | undefined,
  onAnswerChange: (answer: QuizAnswerValue) => void,
  disabled: boolean,
  submitted: boolean,
  correctAnswer: string,
) {
  return (
    <div className="mt-4 space-y-2" role="radiogroup" aria-label="Pilihan jawaban">
      {options.map((option) => {
        const active = currentAnswer === option;
        const optionIsCorrect = option === correctAnswer;
        const showCorrect = submitted && optionIsCorrect;
        const showWrong = submitted && active && !optionIsCorrect;

        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={disabled}
            onClick={() => onAnswerChange(option)}
            className={`flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 ${
              showCorrect
                ? "border-emerald-300/50 bg-emerald-500/10 text-emerald-50"
                : showWrong
                  ? "border-rose-300/50 bg-rose-500/10 text-rose-50"
                  : active
                    ? "border-cyan-300/60 bg-cyan-500/10 text-cyan-50"
                    : "border-zinc-700/80 bg-zinc-950/60 text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800/80"
            } disabled:cursor-not-allowed disabled:opacity-90`}
          >
            <span>{option}</span>
            {showCorrect ? (
              <span className="shrink-0 text-xs font-semibold text-emerald-200">Benar</span>
            ) : null}
            {showWrong ? (
              <span className="shrink-0 text-xs font-semibold text-rose-200">Belum tepat</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function QuizQuestion({
  question,
  currentAnswer,
  onAnswerChange,
  disabled = false,
  submitted = false,
}: QuizQuestionProps) {
  const submittedAnswerIsCorrect = submitted && isQuestionCorrect(question, currentAnswer);

  return (
    <div className="rounded-xl border border-zinc-700/70 bg-zinc-950/55 p-4 sm:p-5">
      <p className="text-base font-semibold leading-7 text-zinc-100">{question.question}</p>

      {question.type === "code-output" ? (
        <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-700/80 bg-zinc-950 p-3 text-sm leading-7 text-zinc-200">
          <code>{question.code}</code>
        </pre>
      ) : null}

      {(question.type === "multiple-choice" || question.type === "code-output") &&
        renderChoiceOptions(
          question.options,
          currentAnswer,
          onAnswerChange,
          disabled,
          submitted,
          question.correctAnswer,
        )}

      {question.type === "true-false" ? (
        <div className="mt-4 space-y-2" role="radiogroup" aria-label="Pilihan benar atau salah">
          {[
            { label: "Benar", value: true },
            { label: "Salah", value: false },
          ].map((option) => {
            const active = currentAnswer === option.value;
            const optionIsCorrect = option.value === question.correctAnswer;
            const showCorrect = submitted && optionIsCorrect;
            const showWrong = submitted && active && !optionIsCorrect;
            return (
              <button
                key={option.label}
                type="button"
                role="radio"
                aria-checked={active}
                disabled={disabled}
                onClick={() => onAnswerChange(option.value)}
                className={`flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 ${
                  showCorrect
                    ? "border-emerald-300/50 bg-emerald-500/10 text-emerald-50"
                    : showWrong
                      ? "border-rose-300/50 bg-rose-500/10 text-rose-50"
                      : active
                        ? "border-cyan-300/60 bg-cyan-500/10 text-cyan-50"
                        : "border-zinc-700/80 bg-zinc-950/60 text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800/80"
                } disabled:cursor-not-allowed disabled:opacity-90`}
              >
                <span>{option.label}</span>
                {showCorrect ? (
                  <span className="shrink-0 text-xs font-semibold text-emerald-200">Benar</span>
                ) : null}
                {showWrong ? (
                  <span className="shrink-0 text-xs font-semibold text-rose-200">Belum tepat</span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {question.type === "fill-blank" ? (
        <div className="mt-4">
          <input
            type="text"
            value={typeof currentAnswer === "string" ? currentAnswer : ""}
            disabled={disabled}
            onChange={(event) => onAnswerChange(event.target.value)}
            placeholder="Ketik jawaban kamu"
            aria-label="Jawaban kamu"
            className={`w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none ${
              submitted
                ? submittedAnswerIsCorrect
                  ? "border-emerald-300/45 focus:border-emerald-300/60"
                  : "border-rose-300/45 focus:border-rose-300/60"
                : "border-zinc-700/80 focus:border-cyan-300/50"
            }`}
          />
        </div>
      ) : null}
    </div>
  );
}
