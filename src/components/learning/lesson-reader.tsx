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
    <div className="mx-auto max-w-[1440px]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0 space-y-6">
          <header className="rounded-3xl border border-zinc-700/60 bg-zinc-900/70 p-6 sm:p-8">
            <p className="text-sm text-cyan-200">Pelajaran</p>
            <h1 className="mt-2 text-3xl font-bold text-zinc-50 sm:text-4xl">{lesson.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{lesson.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300">
                Level {lesson.level}
              </span>
              <span className="rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300">
                Estimasi {lesson.estimatedMinutes} menit
              </span>
              <span className="rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300">
                {getLanguageLabel(lesson.contentLanguage)}
              </span>
              <span className="rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300">
                XP {userProgress.totalXp}
              </span>
              <span className="rounded-lg border border-zinc-600/80 bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300">
                Streak {userProgress.streakCount}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <h2 className="text-lg font-bold text-zinc-100">Tujuan belajar</h2>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-300">
                {lesson.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {lesson.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-700 bg-zinc-800/70 px-2 py-1 text-xs text-zinc-300"
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

          {isLoading ? (
            <section className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-4">
              <p className="text-sm text-zinc-300">Memuat progres akun...</p>
            </section>
          ) : null}

          <section className="space-y-4">
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
