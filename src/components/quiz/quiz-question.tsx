import type { QuizQuestion as QuizQuestionType } from "@/types/quiz";
import type { QuizAnswerValue } from "@/lib/quiz/scoring";

type QuizQuestionProps = {
  question: QuizQuestionType;
  currentAnswer: QuizAnswerValue | undefined;
  onAnswerChange: (answer: QuizAnswerValue) => void;
  disabled?: boolean;
};

function renderChoiceOptions(
  options: string[],
  currentAnswer: QuizAnswerValue | undefined,
  onAnswerChange: (answer: QuizAnswerValue) => void,
  disabled: boolean,
) {
  return (
    <div className="mt-4 space-y-2">
      {options.map((option) => {
        const active = currentAnswer === option;

        return (
          <button
            key={option}
            type="button"
            disabled={disabled}
            onClick={() => onAnswerChange(option)}
            className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
              active
                ? "border-cyan-300/50 bg-cyan-500/10 text-cyan-100"
                : "border-zinc-700/80 bg-zinc-950/60 text-zinc-200 hover:bg-zinc-800"
            } disabled:cursor-not-allowed disabled:opacity-80`}
          >
            {option}
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
}: QuizQuestionProps) {
  return (
    <div className="rounded-xl border border-zinc-700/70 bg-zinc-950/55 p-4 sm:p-5">
      <p className="text-base font-semibold leading-7 text-zinc-100">{question.question}</p>

      {question.type === "code-output" ? (
        <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-700/80 bg-zinc-950 p-3 text-sm leading-7 text-zinc-200">
          <code>{question.code}</code>
        </pre>
      ) : null}

      {(question.type === "multiple-choice" || question.type === "code-output") &&
        renderChoiceOptions(question.options, currentAnswer, onAnswerChange, disabled)}

      {question.type === "true-false" ? (
        <div className="mt-4 space-y-2">
          {[
            { label: "Benar", value: true },
            { label: "Salah", value: false },
          ].map((option) => {
            const active = currentAnswer === option.value;
            return (
              <button
                key={option.label}
                type="button"
                disabled={disabled}
                onClick={() => onAnswerChange(option.value)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                  active
                    ? "border-cyan-300/50 bg-cyan-500/10 text-cyan-100"
                    : "border-zinc-700/80 bg-zinc-950/60 text-zinc-200 hover:bg-zinc-800"
                } disabled:cursor-not-allowed disabled:opacity-80`}
              >
                {option.label}
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
            className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-300/50 focus:outline-none"
          />
        </div>
      ) : null}
    </div>
  );
}
