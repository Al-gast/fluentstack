import { getChallengeById } from "@/lib/content/get-challenge";
import type { Lesson, LessonBlock } from "@/types/learning";

export type LessonPrimaryAction = {
  href: string;
  label: string;
  description: string;
};

export function getLessonBlockAnchorId(blockId: string): string {
  return `lesson-block-${blockId}`;
}

export function getBlockDisplayLabel(block: LessonBlock): string {
  if ("title" in block && typeof block.title === "string") {
    return block.title;
  }

  switch (block.type) {
    case "quick-check":
      return "Cek pemahaman";
    case "quiz":
      return "Quiz";
    case "coding-practice":
      return "Coding practice";
    case "writing-practice":
      return "Writing practice";
    case "summary":
      return "Ringkasan";
    case "resource-links":
      return "Resource resmi";
    case "documentation-bridge":
      return block.title;
    default:
      return block.type;
  }
}

export function getNextIncompleteRequiredBlock(
  lesson: Lesson,
  completedBlockIds: Iterable<string>,
): LessonBlock | undefined {
  const completedBlockSet = new Set(completedBlockIds);
  const requiredBlockSet = new Set(lesson.completionRule.requiredBlockIds);

  return lesson.blocks.find((block) => requiredBlockSet.has(block.id) && !completedBlockSet.has(block.id));
}

export function getRequiredBlockAction(lesson: Lesson, block: LessonBlock): LessonPrimaryAction {
  if (block.type === "coding-practice") {
    const challenge = getChallengeById(block.challengeId);

    return {
      href: challenge ? `/practice/${challenge.id}` : `/lesson/${lesson.slug}#${getLessonBlockAnchorId(block.id)}`,
      label: "Buka practice",
      description: challenge?.title ?? "Lengkapi coding practice wajib.",
    };
  }

  const blockLabel = getBlockDisplayLabel(block);
  const href = `/lesson/${lesson.slug}#${getLessonBlockAnchorId(block.id)}`;

  switch (block.type) {
    case "quick-check":
      return {
        href,
        label: "Kerjakan cek pemahaman",
        description: blockLabel,
      };
    case "quiz":
      return {
        href,
        label: "Kerjakan quiz",
        description: blockLabel,
      };
    case "writing-practice":
      return {
        href,
        label: "Tulis latihan",
        description: blockLabel,
      };
    default:
      return {
        href,
        label: "Lanjutkan bagian ini",
        description: blockLabel,
      };
  }
}

export function getLessonPrimaryAction(
  lesson: Lesson,
  completedBlockIds: Iterable<string>,
  completedAction?: LessonPrimaryAction,
): LessonPrimaryAction {
  const nextIncompleteBlock = getNextIncompleteRequiredBlock(lesson, completedBlockIds);

  if (nextIncompleteBlock) {
    return getRequiredBlockAction(lesson, nextIncompleteBlock);
  }

  return (
    completedAction ?? {
      href: `/lesson/${lesson.slug}`,
      label: "Review lesson",
      description: lesson.title,
    }
  );
}
