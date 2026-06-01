import type { LessonBlock } from "@/types/learning";
import { CalloutBlock } from "@/components/learning/blocks/callout-block";
import { CodingPracticeBlock } from "@/components/learning/blocks/coding-practice-block";
import { CodeExampleBlock } from "@/components/learning/blocks/code-example-block";
import { DocumentationBridgeBlock } from "@/components/learning/blocks/documentation-bridge-block";
import { QuickCheckBlock } from "@/components/learning/blocks/quick-check-block";
import { QuizBlock } from "@/components/learning/blocks/quiz-block";
import { ResourceLinksBlock } from "@/components/learning/blocks/resource-links-block";
import { SummaryBlock } from "@/components/learning/blocks/summary-block";
import { TextBlock } from "@/components/learning/blocks/text-block";
import { WritingPracticeBlock } from "@/components/learning/blocks/writing-practice-block";
import type { ChallengeCode } from "@/types/challenge";
import type { ChallengeProgress } from "@/types/progress";

type BlockRendererProps = {
  block: LessonBlock;
  isCompleted: boolean;
  isRequired: boolean;
  onCompleteBlock: (blockId: string, options?: { xpDelta?: number }) => void;
  onCompleteQuickCheck: (blockId: string) => void;
  onCompleteQuizAttempt: (params: {
    blockId: string;
    quizId: string;
    score: number;
    passed: boolean;
  }) => void;
  getBestQuizScore: (quizId: string) => number;
  onSaveWritingDraft: (blockId: string, draft: string) => void;
  getWritingDraft: (blockId: string) => string;
  onCompleteWritingPractice: (blockId: string) => void;
  onSaveChallengeCode: (challengeId: string, code: ChallengeCode) => void;
  onSaveChallengeChecklist: (challengeId: string, completedChecklistItems: string[]) => void;
  getChallengeProgress: (challengeId: string) => ChallengeProgress | undefined;
  onCompleteCodingPractice: (params: { blockId: string; challengeId: string }) => void;
};

export function BlockRenderer({
  block,
  isCompleted,
  isRequired,
  onCompleteBlock,
  onCompleteQuickCheck,
  onCompleteQuizAttempt,
  getBestQuizScore,
  onSaveWritingDraft,
  getWritingDraft,
  onCompleteWritingPractice,
  onSaveChallengeCode,
  onSaveChallengeChecklist,
  getChallengeProgress,
  onCompleteCodingPractice,
}: BlockRendererProps) {
  switch (block.type) {
    case "text":
      return (
        <TextBlock
          block={block}
          isCompleted={isCompleted}
          onComplete={() => onCompleteBlock(block.id)}
        />
      );
    case "callout":
      return (
        <CalloutBlock
          block={block}
          isCompleted={isCompleted}
          onComplete={() => onCompleteBlock(block.id)}
        />
      );
    case "code-example":
      return (
        <CodeExampleBlock
          block={block}
          isCompleted={isCompleted}
          onComplete={() => onCompleteBlock(block.id)}
        />
      );
    case "quick-check":
      return (
        <QuickCheckBlock
          block={block}
          isCompleted={isCompleted}
          onComplete={() => onCompleteQuickCheck(block.id)}
        />
      );
    case "quiz":
      return (
        <QuizBlock
          block={block}
          isCompleted={isCompleted}
          isRequired={isRequired}
          bestScore={getBestQuizScore(block.quizId)}
          onCompleteAttempt={(result) =>
            onCompleteQuizAttempt({
              blockId: block.id,
              quizId: block.quizId,
              score: result.score,
              passed: result.passed,
            })
          }
        />
      );
    case "documentation-bridge":
      return (
        <DocumentationBridgeBlock
          block={block}
          isCompleted={isCompleted}
          onComplete={() => onCompleteBlock(block.id)}
        />
      );
    case "resource-links":
      return (
        <ResourceLinksBlock
          block={block}
          isCompleted={isCompleted}
          onComplete={() => onCompleteBlock(block.id)}
        />
      );
    case "coding-practice":
      return (
        <CodingPracticeBlock
          block={block}
          isCompleted={isCompleted}
          isRequired={isRequired}
          progress={getChallengeProgress(block.challengeId)}
          onSaveCode={(code) => onSaveChallengeCode(block.challengeId, code)}
          onSaveChecklist={(items) => onSaveChallengeChecklist(block.challengeId, items)}
          onComplete={() => onCompleteCodingPractice({ blockId: block.id, challengeId: block.challengeId })}
        />
      );
    case "writing-practice":
      return (
        <WritingPracticeBlock
          block={block}
          isCompleted={isCompleted}
          isRequired={isRequired}
          savedDraft={getWritingDraft(block.id)}
          onSaveDraft={(draft) => onSaveWritingDraft(block.id, draft)}
          onComplete={() => onCompleteWritingPractice(block.id)}
        />
      );
    case "summary":
      return (
        <SummaryBlock
          block={block}
          isCompleted={isCompleted}
          onComplete={() => onCompleteBlock(block.id)}
        />
      );
    default:
      return null;
  }
}
