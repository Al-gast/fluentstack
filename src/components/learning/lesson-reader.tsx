"use client";

import Link from "next/link";
import type { Lesson } from "@/types/learning";
import { BlockRenderer } from "@/components/learning/block-renderer";
import { LessonOutline } from "@/components/learning/lesson-outline";
import { LessonProgress } from "@/components/learning/lesson-progress";
import { useProgress } from "@/hooks/use-progress";
import { getChallengeById } from "@/lib/content/get-challenge";
import type { LessonNavigation } from "@/lib/content/learning-path";

type LessonReaderProps = {
  lesson: Lesson;
  navigation?: LessonNavigation;
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

function getLessonLevelLabel(level: Lesson["level"]): string {
  switch (level) {
    case "beginner":
      return "Beginner";
    case "intermediate":
      return "Intermediate";
    case "advanced":
      return "Advanced";
    default:
      return level;
  }
}

export function LessonReader({ lesson, navigation }: LessonReaderProps) {
  const {
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

  const requiredTotal = lessonMetrics.totalRequiredCount;
  const requiredCompleted = lessonMetrics.completedRequiredCount;
  const progressPercent = requiredTotal > 0 ? Math.round((requiredCompleted / requiredTotal) * 100) : 0;
  const isLessonComplete = requiredTotal > 0 && requiredCompleted >= requiredTotal;
  const incompletePracticeBlock = lesson.blocks.find((block) => {
    if (block.type !== "coding-practice" || completedBlockSet.has(block.id)) {
      return false;
    }

    return !getChallengeProgress(block.challengeId)?.isCompleted;
  });
  const practiceChallenge =
    incompletePracticeBlock?.type === "coding-practice" ? getChallengeById(incompletePracticeBlock.challengeId) : null;
  const hasPracticeBlock = lesson.blocks.some((block) => block.type === "coding-practice");
  const primaryAction = practiceChallenge
    ? {
        href: `/practice/${practiceChallenge.id}`,
        label: "Mulai latihan",
        description: practiceChallenge.title,
      }
    : isLessonComplete && navigation
      ? {
          href: navigation.next.href,
          label: "Lanjutkan",
          description: navigation.next.title,
        }
      : {
          href: "#lesson-content",
          label: "Lanjut membaca",
          description: `${requiredCompleted}/${requiredTotal} blok wajib selesai`,
        };
  const statusLabel = isLoading ? "Memuat progres" : isLessonComplete ? "Selesai" : "Sedang dipelajari";

  return (
    <div className="mx-auto max-w-[1280px] pb-6 lg:pb-0">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,840px)_320px] xl:justify-center">
        <article className="min-w-0 space-y-7">
          <header className="rounded-3xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-7">
            {navigation ? (
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                <Link
                  href={navigation.trackHref}
                  className="rounded-md transition hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                >
                  {navigation.trackTitle}
                </Link>
                <span aria-hidden="true" className="text-zinc-600">
                  /
                </span>
                <Link
                  href={navigation.moduleHref}
                  className="rounded-md transition hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                >
                  {navigation.moduleTitle}
                </Link>
                <span aria-hidden="true" className="text-zinc-600">
                  /
                </span>
                <span className="text-zinc-300">Lesson</span>
              </nav>
            ) : (
              <p className="text-sm font-medium text-cyan-200">Lesson</p>
            )}

            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                  {navigation?.levelLabel ? (
                    <span className="rounded-lg border border-indigo-300/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-100">
                      {navigation.levelLabel}
                    </span>
                  ) : null}
                  <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                    {getLessonLevelLabel(lesson.level)}
                  </span>
                  <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                    {lesson.estimatedMinutes} menit
                  </span>
                  <span className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-1 text-xs text-zinc-300">
                    {getLanguageLabel(lesson.contentLanguage)}
                  </span>
                </div>

                <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
                  {lesson.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">{lesson.description}</p>
              </div>

              <div className="w-full shrink-0 rounded-2xl border border-cyan-300/20 bg-zinc-950/60 p-4 lg:w-64">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-zinc-400">Status</span>
                  <span
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                      isLessonComplete
                        ? "border-emerald-300/35 bg-emerald-500/15 text-emerald-100"
                        : "border-cyan-300/25 bg-cyan-500/10 text-cyan-100"
                    }`}
                  >
                    {statusLabel}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>Progres</span>
                    <span>{isLoading ? "Memuat..." : `${requiredCompleted}/${requiredTotal} wajib`}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-900 ring-1 ring-zinc-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r transition-all duration-300 ${
                        isLoading ? "w-1/3 animate-pulse from-zinc-600 to-zinc-500" : "from-cyan-400 to-indigo-400"
                      }`}
                      style={isLoading ? undefined : { width: `${progressPercent}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-xs font-semibold text-cyan-200">
                    {isLoading ? "..." : `${progressPercent}%`}
                  </p>
                </div>
                <Link
                  href={primaryAction.href}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                >
                  {primaryAction.label}
                </Link>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400">{primaryAction.description}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
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

          <section className="xl:hidden">
            <LessonOutline blocks={lesson.blocks} completedBlockIds={completedBlockSet} compact />
          </section>

          <section id="lesson-content" className="scroll-mt-24 space-y-5">
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

          <section className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
            <p className="text-xs font-semibold text-cyan-200">Langkah berikutnya</p>
            <h2 className="mt-2 text-xl font-bold text-zinc-100">
              {isLessonComplete ? "Lesson ini sudah siap dilanjutkan" : "Selesaikan bagian penting lesson ini"}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
              {isLessonComplete
                ? `Kamu sudah menyelesaikan blok wajib untuk lesson ini. Berikutnya: ${navigation?.next.title ?? "review track ini"}.`
                : hasPracticeBlock && practiceChallenge
                  ? `Kamu sudah membaca konsep utama. Lanjutkan dengan latihan "${practiceChallenge.title}" di workspace practice.`
                  : `Lanjutkan blok yang belum selesai sampai progres wajib mencapai 100%.`}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryAction.href}
                className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
              >
                {primaryAction.label}
              </Link>
              {navigation ? (
                <Link
                  href={navigation.moduleHref}
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                >
                  Review module
                </Link>
              ) : null}
            </div>
          </section>

          {navigation ? (
            <nav
              aria-label="Navigasi lesson"
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
                <Link
                  href={navigation.previous.href}
                  className="group rounded-xl border border-zinc-700/80 bg-zinc-950/55 px-4 py-3 transition hover:border-cyan-300/40 hover:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                >
                  <span className="text-xs text-zinc-400">{navigation.previous.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-zinc-100 group-hover:text-cyan-100">
                    {navigation.previous.title}
                  </span>
                </Link>

                <Link
                  href={navigation.moduleHref}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 px-4 py-3 text-center text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500/30 sm:flex sm:items-center"
                >
                  Lihat module
                </Link>

                <Link
                  href={navigation.next.href}
                  className="group rounded-xl bg-cyan-400 px-4 py-3 text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                >
                  <span className="text-xs font-medium text-zinc-800">{navigation.next.label}</span>
                  <span className="mt-1 block text-sm font-bold">{navigation.next.title}</span>
                </Link>
              </div>
            </nav>
          ) : null}
        </article>

        <aside className="hidden xl:block">
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
