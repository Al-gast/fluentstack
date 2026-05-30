"use client";

import React from "react";
import { CodingLab } from "@/components/playground/coding-lab";
import { getChallengeById } from "@/lib/content/get-challenge";
import type { ChallengeCode } from "@/types/challenge";
import type { CodingPracticeBlock as CodingPracticeBlockData } from "@/types/learning";
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

type CodingPracticeBlockStatefulProps = {
  challengeId: string;
  isCompleted: boolean;
  isRequired: boolean;
  initialCode: ChallengeCode;
  initialChecklist: string[];
  onSaveCode: (code: ChallengeCode) => void;
  onSaveChecklist: (items: string[]) => void;
  onComplete: () => void;
};

function CodingPracticeBlockStateful({
  challengeId,
  isCompleted,
  isRequired,
  initialCode,
  initialChecklist,
  onSaveCode,
  onSaveChecklist,
  onComplete,
}: CodingPracticeBlockStatefulProps) {
  const challenge = getChallengeById(challengeId);
  const [code, setCode] = React.useState<ChallengeCode>(initialCode);
  const [completedChecklistItems, setCompletedChecklistItems] = React.useState<string[]>(
    initialChecklist,
  );

  if (!challenge) {
    return (
      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5 sm:p-6">
        <h3 className="text-xl font-bold text-zinc-100">Coding practice</h3>
        <p className="mt-3 text-sm text-zinc-300">Data challenge tidak ditemukan untuk ID {challengeId}.</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-cyan-300/25 bg-cyan-500/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-4 sm:p-6">
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

  const initialCode = resolveCode(starterCode, progress?.savedCode);
  const initialChecklist = progress?.completedChecklistItems?.filter((item) => checklist.includes(item)) ?? [];

  const stateResetKey = [
    block.challengeId,
    progress?.savedCode?.html ?? "",
    progress?.savedCode?.css ?? "",
    progress?.savedCode?.js ?? "",
    (progress?.completedChecklistItems ?? []).join("|"),
  ].join("::");

  return (
    <CodingPracticeBlockStateful
      key={stateResetKey}
      challengeId={block.challengeId}
      isCompleted={isCompleted}
      isRequired={isRequired}
      initialCode={initialCode}
      initialChecklist={initialChecklist}
      onSaveCode={onSaveCode}
      onSaveChecklist={onSaveChecklist}
      onComplete={onComplete}
    />
  );
}
