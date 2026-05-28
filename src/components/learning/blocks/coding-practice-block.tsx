"use client";

import { useEffect, useMemo, useState } from "react";
import { CodingLab } from "@/components/playground/coding-lab";
import { getChallengeById } from "@/lib/content/get-challenge";
import type { CodingPracticeBlock as CodingPracticeBlockData } from "@/types/learning";
import type { ChallengeCode } from "@/types/challenge";
import type { ChallengeProgress } from "@/types/progress";

type CodingPracticeBlockProps = {
  block: CodingPracticeBlockData;
  isCompleted: boolean;
  isRequired: boolean;
  progress?: ChallengeProgress;
  onSaveCode: (code: ChallengeCode) => void;
  onSaveChecklist: (items: string[]) => void;
  onComplete: () => void;
};

const EMPTY_CHALLENGE_CODE: ChallengeCode = { html: "", css: "", js: "" };
const EMPTY_CHECKLIST: string[] = [];

function resolveCode(starterCode: ChallengeCode, savedCode?: ChallengeCode): ChallengeCode {
  if (!savedCode) {
    return starterCode;
  }

  return {
    html: savedCode.html || starterCode.html,
    css: savedCode.css || starterCode.css,
    js: savedCode.js || starterCode.js,
  };
}

export function CodingPracticeBlock({
  block,
  isCompleted,
  isRequired,
  progress,
  onSaveCode,
  onSaveChecklist,
  onComplete,
}: CodingPracticeBlockProps) {
  const challenge = getChallengeById(block.challengeId);
  const starterCode = challenge?.starterCode ?? EMPTY_CHALLENGE_CODE;
  const checklist = challenge?.checklist ?? EMPTY_CHECKLIST;

  const initialCode = useMemo(
    () => resolveCode(starterCode, progress?.savedCode),
    [starterCode, progress?.savedCode],
  );
  const [code, setCode] = useState<ChallengeCode>(initialCode);

  const initialChecklist = useMemo(
    () => progress?.completedChecklistItems?.filter((item) => checklist.includes(item)) ?? [],
    [checklist, progress?.completedChecklistItems],
  );
  const [completedChecklistItems, setCompletedChecklistItems] = useState<string[]>(initialChecklist);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  useEffect(() => {
    setCompletedChecklistItems(initialChecklist);
  }, [initialChecklist]);

  if (!challenge) {
    return (
      <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 sm:p-6">
        <h3 className="text-xl font-bold text-zinc-100">Coding practice</h3>
        <p className="mt-3 text-sm text-zinc-300">
          Data challenge tidak ditemukan untuk ID {block.challengeId}.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 sm:p-6">
      <CodingLab
        challenge={challenge}
        code={code}
        completedChecklistItems={completedChecklistItems}
        isCompleted={isCompleted}
        isRequired={isRequired}
        onChangeCode={setCode}
        onToggleChecklist={(item, checked) => {
          const nextItems = checked
            ? Array.from(new Set([...completedChecklistItems, item]))
            : completedChecklistItems.filter((existingItem) => existingItem !== item);

          setCompletedChecklistItems(nextItems);
          onSaveChecklist(nextItems);
        }}
        onSaveCode={() => onSaveCode(code)}
        onReset={() => {
          setCode(challenge.starterCode);
          setCompletedChecklistItems([]);
          onSaveCode(challenge.starterCode);
          onSaveChecklist([]);
        }}
        onMarkCompleted={() => {
          onSaveCode(code);
          onSaveChecklist(completedChecklistItems);
          onComplete();
        }}
      />
    </section>
  );
}
