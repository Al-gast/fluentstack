"use client";

import Link from "next/link";
import type { Lesson } from "@/types/learning";
import { BlockRenderer } from "@/components/learning/block-renderer";
import { LessonOutline } from "@/components/learning/lesson-outline";
import { LessonProgress } from "@/components/learning/lesson-progress";
import { useProgress } from "@/hooks/use-progress";
import type { LessonNavigation } from "@/lib/content/learning-path";
import {
  getBlockDisplayLabel,
  getLessonBlockAnchorId,
  getLessonPrimaryAction,
  getNextIncompleteRequiredBlock,
  type LessonPrimaryAction,
} from "@/lib/progress/lesson-next-action";

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

function isAssessmentLesson(lesson: Lesson): boolean {
  const normalizedTitle = lesson.title.toLowerCase();

  return (
    lesson.id.includes("assessment") ||
    lesson.slug.includes("assessment") ||
    normalizedTitle.includes("uji kompetensi")
  );
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

  const isAssessment = isAssessmentLesson(lesson);
  const learningUnitLabel = isAssessment ? "Uji Kompetensi" : "Lesson";
  const progressLabel = isAssessment ? "Readiness" : "Progres";
  const objectiveHeading = isAssessment ? "Yang dicek" : "Tujuan belajar";
  const incompleteTitle = isAssessment
    ? "Selesaikan bagian wajib checkpoint ini"
    : "Selesaikan bagian penting lesson ini";
  const completeTitle = isAssessment
    ? "Checkpoint ini siap dilanjutkan"
    : "Lesson ini sudah siap dilanjutkan";
  const requiredTotal = lessonMetrics.totalRequiredCount;
  const requiredCompleted = lessonMetrics.completedRequiredCount;
  const progressPercent = requiredTotal > 0 ? Math.round((requiredCompleted / requiredTotal) * 100) : 0;
  const isLessonComplete = requiredTotal > 0 && requiredCompleted >= requiredTotal;
  const nextIncompleteRequiredBlock = getNextIncompleteRequiredBlock(lesson, completedBlockSet);
  const primaryAction: LessonPrimaryAction = isLoading
    ? {
        href: "#lesson-content",
        label: "Memuat progres",
        description: "Menyiapkan langkah berikutnya",
      }
    : getLessonPrimaryAction(
        lesson,
        completedBlockSet,
        isLessonComplete && navigation
          ? {
              href: navigation.next.href,
              label: isAssessment ? "Lanjut ke module berikutnya" : "Lanjut ke lesson berikutnya",
              description: navigation.next.title,
            }
          : {
              href: "#lesson-content",
              label: "Lanjut membaca",
              description: `${requiredCompleted}/${requiredTotal} blok wajib selesai`,
            },
      );
  const nextRequiredBlockLabel = nextIncompleteRequiredBlock
    ? getBlockDisplayLabel(nextIncompleteRequiredBlock)
    : null;
  const statusLabel = isLoading
    ? "Memuat progres"
    : isLessonComplete
      ? isAssessment
        ? "Siap lanjut"
        : "Selesai"
      : isAssessment
        ? "Perlu dibuktikan"
        : "Sedang dipelajari";

  return (
    <div className="mx-auto max-w-[1280px] pb-6 lg:pb-0">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,840px)_320px] xl:justify-center">
        <article className="min-w-0 space-y-7">
          <header className="rounded-3xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-7">
            {navigation ? (
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-fs-text-muted">
                <Link
                  href={navigation.trackHref}
                  className="rounded-md transition hover:text-fs-accent focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
                >
                  {navigation.trackTitle}
                </Link>
                <span aria-hidden="true" className="text-fs-text-muted/70">
                  /
                </span>
                <Link
                  href={navigation.moduleHref}
                  className="rounded-md transition hover:text-fs-accent focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
                >
                  {navigation.moduleTitle}
                </Link>
                <span aria-hidden="true" className="text-fs-text-muted/70">
                  /
                </span>
                <span className="text-fs-text-soft">{learningUnitLabel}</span>
              </nav>
            ) : (
              <p className="text-sm font-medium text-fs-accent">{learningUnitLabel}</p>
            )}

            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                  {navigation?.levelLabel ? (
                    <span className="rounded-lg border border-fs-info/25 bg-fs-info-soft px-3 py-1 text-xs font-semibold text-fs-info">
                      {navigation.levelLabel}
                    </span>
                  ) : null}
                  <span className="rounded-lg border border-fs-border bg-fs-surface-soft px-3 py-1 text-xs text-fs-text-soft">
                    {getLessonLevelLabel(lesson.level)}
                  </span>
                  <span className="rounded-lg border border-fs-border bg-fs-surface-soft px-3 py-1 text-xs text-fs-text-soft">
                    {lesson.estimatedMinutes} menit
                  </span>
                  <span className="rounded-lg border border-fs-border bg-fs-surface-soft px-3 py-1 text-xs text-fs-text-soft">
                    {getLanguageLabel(lesson.contentLanguage)}
                  </span>
                </div>

                <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-fs-text sm:text-4xl">
                  {lesson.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-fs-text-soft">{lesson.description}</p>
              </div>

              <div className="w-full shrink-0 rounded-2xl border border-fs-border-strong bg-fs-surface-strong p-4 lg:w-64">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-fs-text-muted">Status</span>
                  <span
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                      isLessonComplete
                        ? "border-fs-success/35 bg-fs-success-soft text-fs-success"
                        : "border-fs-accent/25 bg-fs-accent-soft text-fs-accent"
                    }`}
                  >
                    {statusLabel}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-fs-text-muted">
                    <span>{progressLabel}</span>
                    <span>{isLoading ? "Memuat..." : `${requiredCompleted}/${requiredTotal} wajib`}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-fs-surface-soft ring-1 ring-fs-border">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r transition-all duration-300 ${
                        isLoading
                          ? "w-1/3 animate-pulse from-fs-text-muted to-fs-text-soft"
                          : "from-[var(--fs-progress-from)] to-[var(--fs-progress-to)]"
                      }`}
                      style={isLoading ? undefined : { width: `${progressPercent}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-xs font-semibold text-fs-accent">
                    {isLoading ? "..." : `${progressPercent}%`}
                  </p>
                </div>
                <Link
                  href={primaryAction.href}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-fs-accent px-4 py-2.5 text-sm font-semibold text-fs-text-inverse transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
                >
                  {primaryAction.label}
                </Link>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-fs-text-muted">{primaryAction.description}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-fs-border bg-fs-surface-soft p-5 shadow-[inset_0_1px_0_var(--fs-border)]">
              <h2 className="text-lg font-bold text-fs-text">{objectiveHeading}</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-fs-text-soft">
                {lesson.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {lesson.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-fs-border bg-fs-surface-soft px-2 py-1 text-xs text-fs-text-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <section className="xl:hidden">
            <LessonOutline
              blocks={lesson.blocks}
              completedBlockIds={completedBlockSet}
              requiredBlockIds={lesson.completionRule.requiredBlockIds}
              compact
            />
          </section>

          <section id="lesson-content" className="scroll-mt-24 space-y-5">
            {lesson.blocks.map((block) => (
              <div key={block.id} id={getLessonBlockAnchorId(block.id)} className="scroll-mt-24">
                <BlockRenderer
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
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6">
            <p className="text-xs font-semibold text-fs-accent">Langkah berikutnya</p>
            <h2 className="mt-2 text-xl font-bold text-fs-text">
              {isLessonComplete ? completeTitle : incompleteTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-fs-text-soft">
              {isLessonComplete
                ? isAssessment
                  ? `Kamu sudah memenuhi blok wajib checkpoint ini. Berikutnya: ${navigation?.next.title ?? "review module ini"}.`
                  : `Kamu sudah menyelesaikan blok wajib untuk lesson ini. Berikutnya: ${navigation?.next.title ?? "review track ini"}.`
                : nextRequiredBlockLabel
                  ? `Lanjutkan blok wajib berikutnya: ${nextRequiredBlockLabel}.`
                  : `Lanjutkan blok yang belum selesai sampai ${progressLabel.toLowerCase()} wajib mencapai 100%.`}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={primaryAction.href}
                className="inline-flex items-center justify-center rounded-lg bg-fs-accent px-4 py-2.5 text-sm font-semibold text-fs-text-inverse transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
              >
                {primaryAction.label}
              </Link>
              {navigation ? (
                <Link
                  href={navigation.moduleHref}
                  className="inline-flex items-center justify-center rounded-lg border border-fs-border bg-fs-surface px-4 py-2.5 text-sm font-semibold text-fs-text-soft transition hover:bg-fs-surface-strong hover:text-fs-text focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
                >
                  Review module
                </Link>
              ) : null}
            </div>
          </section>

          {navigation ? (
            <nav
              aria-label="Navigasi lesson"
              className="rounded-2xl border border-fs-border bg-fs-surface p-5 shadow-[inset_0_1px_0_var(--fs-border)] sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
                <Link
                  href={navigation.previous.href}
                  className="group rounded-xl border border-fs-border bg-fs-surface-soft px-4 py-3 transition hover:border-fs-border-strong hover:bg-fs-surface-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/30"
                >
                  <span className="text-xs text-fs-text-muted">{navigation.previous.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-fs-text group-hover:text-fs-accent">
                    {navigation.previous.title}
                  </span>
                </Link>

                <Link
                  href={navigation.moduleHref}
                  className="rounded-xl border border-fs-border bg-fs-surface-soft px-4 py-3 text-center text-sm font-semibold text-fs-text-soft transition hover:bg-fs-surface-strong hover:text-fs-text focus:outline-none focus:ring-2 focus:ring-fs-focus/30 sm:flex sm:items-center"
                >
                  Lihat module
                </Link>

                <Link
                  href={navigation.next.href}
                  className="group rounded-xl bg-fs-accent px-4 py-3 text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] transition hover:bg-fs-accent-strong focus:outline-none focus:ring-2 focus:ring-fs-focus/40"
                >
                  <span className="text-xs font-medium opacity-80">{navigation.next.label}</span>
                  <span className="mt-1 block text-sm font-bold">{navigation.next.title}</span>
                </Link>
              </div>
            </nav>
          ) : null}
        </article>

        <aside className="hidden xl:block">
          <div className="sticky top-24 space-y-4">
            <LessonOutline
              blocks={lesson.blocks}
              completedBlockIds={completedBlockSet}
              requiredBlockIds={lesson.completionRule.requiredBlockIds}
            />
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
