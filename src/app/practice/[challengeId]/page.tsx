import { notFound } from "next/navigation";
import { PracticeWorkspace } from "@/components/practice/practice-workspace";
import { getChallengeById } from "@/lib/content/get-challenge";
import { getLessonById } from "@/lib/content/get-lesson";
import type { CodingPracticeBlock } from "@/types/learning";

type PracticePageProps = {
  params: Promise<{ challengeId: string }>;
};

function findCodingPracticeBlock(
  lessonId: string,
  challengeId: string,
): { lesson: NonNullable<ReturnType<typeof getLessonById>>; block: CodingPracticeBlock } | null {
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return null;
  }

  const block = lesson.blocks.find(
    (lessonBlock): lessonBlock is CodingPracticeBlock =>
      lessonBlock.type === "coding-practice" && lessonBlock.challengeId === challengeId,
  );

  if (!block) {
    return null;
  }

  return { lesson, block };
}

export default async function PracticePage({ params }: PracticePageProps) {
  const { challengeId } = await params;
  const challenge = getChallengeById(challengeId);

  if (!challenge) {
    notFound();
  }

  const practiceContext = findCodingPracticeBlock(challenge.lessonId, challenge.id);

  if (!practiceContext) {
    notFound();
  }

  return (
    <PracticeWorkspace
      challenge={challenge}
      lesson={practiceContext.lesson}
      codingBlockId={practiceContext.block.id}
    />
  );
}
