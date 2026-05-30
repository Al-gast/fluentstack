"use client";

import type { Lesson } from "@/types/learning";
import { BlockRenderer } from "@/components/learning/block-renderer";
import { LessonOutline } from "@/components/learning/lesson-outline";
import { LessonProgress } from "@/components/learning/lesson-progress";
import { useProgress } from "@/hooks/use-progress";

type LessonReaderProps = {
  lesson: Lesson;
};

function getLanguageLabel(contentLanguage: Lesson["contentLanguage"]): string {
  switch (contentLanguage) {
    case "id":
      return "Bahasa Indonesia";
    case "bilingual":
      return "Bilingual";
    case "en":
      return "English";
    default:
      return contentLanguage;
  }
}

export function LessonReader({ lesson }: LessonReaderProps) {
  const {
    userProgress,
    lessonMetrics,
    completedBlockSet,
    markBlockCompleted,
    markQuickCheckCompleted,
    completeQuizAttempt,
    getBestQuizScore,
    saveWritingDraft,
    getWritingDraft,
    markWritingPracticeCompleted,
    saveChallengeCode,
    saveChallengeChecklist,
    getChallengeProgress,
    markCodingPracticeCompleted,
    storageMode,
    isLoading,
  } = useProgress(lesson);

  return (
    <div className="mx-auto max-w-[1440px] pb-6 lg:pb-0">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0 space-y-8">
          <header className="border-b border-zinc-800/80 pb-7 sm:pb-8">
            <p className="text-sm font-medium text-cyan-200">Pelajaran</p>
            <h1 className="mt-2 max-w-4xl text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
              {lesson.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">{lesson.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                Level {lesson.level}
              </span>
              <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                Estimasi {lesson.estimatedMinutes} menit
              </span>
              <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                {getLanguageLabel(lesson.contentLanguage)}
              </span>
              <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                XP {userProgress.totalXp}
              </span>
              <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                Streak {userProgress.streakCount}
              </span>
            </div>

            <div className="mt-7 rounded-2xl border border-zinc-800/80 bg-zinc-950/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] p-5">
              <h2 className="text-lg font-bold text-zinc-100">Tujuan belajar</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-zinc-300">
                {lesson.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {lesson.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-800 bg-zinc-950/40 px-2 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <LessonProgress
            totalRequired={lessonMetrics.totalRequiredCount}
            completedRequired={lessonMetrics.completedRequiredCount}
            storageMode={storageMode}
            isLoading={isLoading}
          />

          <section className="lg:hidden">
            <LessonOutline blocks={lesson.blocks} completedBlockIds={completedBlockSet} compact />
          </section>

          <section className="space-y-5">
            {lesson.blocks.map((block) => (
              <BlockRenderer
                key={block.id}
                block={block}
                isCompleted={completedBlockSet.has(block.id)}
                isRequired={lesson.completionRule.requiredBlockIds.includes(block.id)}
                onCompleteBlock={markBlockCompleted}
                onCompleteQuickCheck={markQuickCheckCompleted}
                onCompleteQuizAttempt={completeQuizAttempt}
                getBestQuizScore={getBestQuizScore}
                onSaveWritingDraft={saveWritingDraft}
                getWritingDraft={getWritingDraft}
                onCompleteWritingPractice={markWritingPracticeCompleted}
                onSaveChallengeCode={saveChallengeCode}
                onSaveChallengeChecklist={saveChallengeChecklist}
                getChallengeProgress={getChallengeProgress}
                onCompleteCodingPractice={markCodingPracticeCompleted}
              />
            ))}
          </section>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <LessonOutline blocks={lesson.blocks} completedBlockIds={completedBlockSet} />
            <LessonProgress
              totalRequired={lessonMetrics.totalRequiredCount}
              completedRequired={lessonMetrics.completedRequiredCount}
              storageMode={storageMode}
              isLoading={isLoading}
              compact
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
