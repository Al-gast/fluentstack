import type { QuizQuestion as QuizQuestionType } from "@/types/quiz";
import { inferCodeLanguage, SyntaxHighlightedCode } from "@/components/learning/syntax-highlighted-code";
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
            className={`flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-fs-focus/40 ${
              showCorrect
                ? "border-fs-success/50 bg-fs-success-soft text-fs-text"
                : showWrong
                  ? "border-fs-danger/50 bg-fs-danger-soft text-fs-text"
                  : active
                    ? "border-fs-border-strong bg-fs-accent-soft text-fs-text"
                    : "border-fs-border bg-fs-surface text-fs-text-soft hover:border-fs-border-strong hover:bg-fs-surface-strong hover:text-fs-text"
            } disabled:cursor-not-allowed disabled:opacity-90`}
          >
            <span>{option}</span>
            {showCorrect ? (
              <span className="shrink-0 text-xs font-semibold text-fs-success">Benar</span>
            ) : null}
            {showWrong ? (
              <span className="shrink-0 text-xs font-semibold text-fs-danger">Belum tepat</span>
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
    <div className="rounded-xl border border-fs-border bg-fs-surface p-4 sm:p-5">
      <p className="text-base font-semibold leading-7 text-fs-text">{question.question}</p>

      {question.type === "code-output" ? (
        <pre className="fs-syntax-code mt-3 overflow-x-auto rounded-lg border border-fs-code-border bg-fs-code-background p-3 text-sm leading-7">
          <SyntaxHighlightedCode code={question.code} language={inferCodeLanguage(question.code)} />
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
                className={`flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-fs-focus/40 ${
                  showCorrect
                    ? "border-fs-success/50 bg-fs-success-soft text-fs-text"
                    : showWrong
                      ? "border-fs-danger/50 bg-fs-danger-soft text-fs-text"
                      : active
                        ? "border-fs-border-strong bg-fs-accent-soft text-fs-text"
                        : "border-fs-border bg-fs-surface text-fs-text-soft hover:border-fs-border-strong hover:bg-fs-surface-strong hover:text-fs-text"
                } disabled:cursor-not-allowed disabled:opacity-90`}
              >
                <span>{option.label}</span>
                {showCorrect ? (
                  <span className="shrink-0 text-xs font-semibold text-fs-success">Benar</span>
                ) : null}
                {showWrong ? (
                  <span className="shrink-0 text-xs font-semibold text-fs-danger">Belum tepat</span>
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
            className={`w-full rounded-xl border bg-fs-surface px-4 py-3 text-sm text-fs-text placeholder:text-fs-text-muted focus:outline-none focus:ring-2 focus:ring-fs-focus/20 ${
              submitted
                ? submittedAnswerIsCorrect
                  ? "border-fs-success/45 focus:border-fs-success/60"
                  : "border-fs-danger/45 focus:border-fs-danger/60"
                : "border-fs-border focus:border-fs-border-strong"
            }`}
          />
        </div>
      ) : null}
    </div>
  );
}
