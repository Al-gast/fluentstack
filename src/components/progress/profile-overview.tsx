"use client";

import Link from "next/link";
import { ProgressBar } from "@/components/progress/progress-bar";
import { curriculumLevelsByTrackId } from "@/content/curriculum-levels";
import { useGuestProgress } from "@/hooks/use-progress";
import { getTrackBySlug } from "@/lib/content/get-track";
import { getOrderedModuleLessons, getOrderedTrackLessons, getOrderedTrackModules } from "@/lib/content/learning-path";
import {
  calculateLessonProgress,
  calculateLessonsProgress,
  getContinueLessonProgress,
  getProgressStatus,
  type ProgressStatus,
} from "@/lib/progress/progress-calculator";
import type { Lesson, Module } from "@/types/learning";

const statusLabel: Record<ProgressStatus, string> = {
  "not-started": "Belum mulai",
  "in-progress": "Sedang berjalan",
  completed: "Selesai",
};

function getStorageLabel(storageMode: "guest" | "logged-in") {
  return storageMode === "logged-in" ? "Mode akun" : "Mode tamu";
}

function getStorageDescription(storageMode: "guest" | "logged-in") {
  return storageMode === "logged-in"
    ? "Progres belajar dibaca dari penyimpanan akun kamu."
    : "Progres belajar disimpan di browser ini. Jika pindah perangkat atau browser, progres tamu tidak otomatis ikut.";
}

function getModuleForLesson(moduleList: Module[], lesson?: Lesson): Module | undefined {
  if (!lesson) {
    return undefined;
  }

  return moduleList.find((moduleItem) => moduleItem.id === lesson.moduleId);
}

function getCurrentLevel(trackId: string, moduleId?: string) {
  return curriculumLevelsByTrackId[trackId]?.find((level) =>
    moduleId ? level.moduleIds.includes(moduleId) : false,
  );
}

function isAssessmentLesson(lesson: Lesson, index: number, lessonCount: number): boolean {
  return (
    lesson.title.toLowerCase().includes("uji kompetensi") ||
    lesson.slug.includes("assessment") ||
    lesson.id.includes("assessment") ||
    (index === lessonCount - 1 && lesson.blocks.some((block) => block.type === "quiz"))
  );
}

function getAssessmentLessons(lessonList: Lesson[]) {
  return lessonList.filter((lesson) => {
    const moduleLessons = lessonList.filter((lessonItem) => lessonItem.moduleId === lesson.moduleId);
    const lessonIndex = moduleLessons.findIndex((lessonItem) => lessonItem.id === lesson.id);

    return isAssessmentLesson(lesson, lessonIndex, moduleLessons.length);
  });
}

type StatCardProps = {
  label: string;
  value: string;
  description: string;
  tone?: "default" | "cyan" | "success";
};

function StatCard({ label, value, description, tone = "default" }: StatCardProps) {
  const toneClass =
    tone === "success"
      ? "border-emerald-300/25 bg-emerald-500/[0.06]"
      : tone === "cyan"
        ? "border-cyan-300/25 bg-cyan-500/[0.06]"
        : "border-zinc-800/80 bg-zinc-950/45";

  return (
    <article className={`rounded-2xl border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${toneClass}`}>
      <p className="text-sm font-semibold text-zinc-400">{label}</p>
      <p className="mt-2 text-2xl font-bold text-zinc-50">{value}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
    </article>
  );
}

export function ProfileOverview() {
  const { userProgress, storageMode, isLoading, isAuthenticated } = useGuestProgress();
  const { completedBlockIds, completedLessonIds, quizScores } = userProgress;

  const activeTrack = getTrackBySlug("frontend-engineering");
  const activeTrackModules = activeTrack ? getOrderedTrackModules(activeTrack) : [];
  const activeTrackLessons = activeTrack ? getOrderedTrackLessons(activeTrack) : [];
  const firstLesson = activeTrackLessons[0];
  const hasProgress =
    completedBlockIds.length > 0 ||
    completedLessonIds.length > 0 ||
    Object.keys(quizScores).length > 0;

  const continueProgress = getContinueLessonProgress(activeTrackLessons, completedBlockIds);
  const recommendedLesson = continueProgress?.lesson ?? firstLesson;
  const recommendedModule = getModuleForLesson(activeTrackModules, recommendedLesson);
  const recommendedLessonMetrics = recommendedLesson
    ? calculateLessonProgress(recommendedLesson, completedBlockIds)
    : null;
  const trackMetrics = calculateLessonsProgress(activeTrackLessons, completedBlockIds);
  const currentLevel = getCurrentLevel(activeTrack?.id ?? "", recommendedModule?.id);
  const currentLevelModules = currentLevel
    ? activeTrackModules.filter((moduleItem) => currentLevel.moduleIds.includes(moduleItem.id))
    : [];
  const currentLevelLessons = currentLevelModules.flatMap((moduleItem) => getOrderedModuleLessons(moduleItem));
  const currentLevelMetrics = calculateLessonsProgress(currentLevelLessons, completedBlockIds);
  const moduleProgressEntries = activeTrackModules.map((moduleItem) => {
    const moduleLessons = getOrderedModuleLessons(moduleItem);
    const metrics = calculateLessonsProgress(moduleLessons, completedBlockIds);

    return {
      module: moduleItem,
      metrics,
    };
  });
  const modulesInProgress = moduleProgressEntries.filter(
    (entry) => entry.metrics.progressPercent > 0 && entry.metrics.progressPercent < 100,
  );
  const completedLevelModules = currentLevelModules.filter((moduleItem) =>
    calculateLessonsProgress(getOrderedModuleLessons(moduleItem), completedBlockIds).isCompleted,
  );
  const assessmentLessons = getAssessmentLessons(activeTrackLessons);
  const completedAssessments = assessmentLessons.filter((lesson) =>
    calculateLessonProgress(lesson, completedBlockIds).isCompleted,
  );
  const completedLessons = activeTrackLessons
    .map((lesson) => ({
      lesson,
      metrics: calculateLessonProgress(lesson, completedBlockIds),
    }))
    .filter((entry) => entry.metrics.isCompleted || completedLessonIds.includes(entry.lesson.id));
  const recommendedLessonStatus = recommendedLessonMetrics
    ? getProgressStatus(recommendedLessonMetrics.progressPercent)
    : "not-started";

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-cyan-300/20 bg-cyan-500/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                {getStorageLabel(storageMode)}
              </span>
              <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5 text-xs text-zinc-300">
                {hasProgress ? "Sedang belajar" : "Belum mulai"}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-zinc-50 sm:text-4xl">Profil Belajar</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
              Ringkasan ini membantu kamu melihat posisi belajar, module aktif, dan langkah berikutnya di
              FluentStack.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
              {isLoading ? "Memuat mode progres..." : getStorageDescription(storageMode)}
            </p>
          </div>

          <div className="w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 xl:w-[400px]">
            <p className="text-sm font-semibold text-cyan-200">Ringkasan track aktif</p>
            <h2 className="mt-2 text-xl font-bold text-zinc-100">
              {activeTrack?.title ?? "Frontend Engineering"}
            </h2>
            <ProgressBar
              value={trackMetrics.progressPercent}
              label="Progres track"
              className="mt-4"
              isLoading={isLoading}
              tone={trackMetrics.isCompleted ? "success" : "primary"}
            />
            <p className="mt-3 text-xs leading-5 text-zinc-400">
              {isLoading
                ? "Memuat progres track..."
                : `${trackMetrics.completedLessonCount}/${trackMetrics.totalLessonCount} lesson selesai dari ${activeTrackModules.length} module aktif.`}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-4">
        <StatCard
          label="Lesson selesai"
          value={isLoading ? "..." : `${trackMetrics.completedLessonCount}/${trackMetrics.totalLessonCount}`}
          description="Dihitung dari lesson aktif di Frontend Engineering."
          tone={trackMetrics.completedLessonCount > 0 ? "success" : "default"}
        />
        <StatCard
          label="Module aktif"
          value={isLoading ? "..." : `${activeTrackModules.length}`}
          description="Mengikuti urutan resmi active track, bukan prototype tersembunyi."
          tone="cyan"
        />
        <StatCard
          label="Module berjalan"
          value={isLoading ? "..." : `${modulesInProgress.length}`}
          description="Module dengan sebagian progres, tetapi belum selesai."
        />
        <StatCard
          label="Uji Kompetensi selesai"
          value={isLoading ? "..." : `${completedAssessments.length}/${assessmentLessons.length}`}
          description="Checkpoint module yang sudah memenuhi blok wajib."
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-cyan-200">
                {hasProgress ? "Lanjutkan dari posisi terakhir" : "Rekomendasi mulai"}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-zinc-100">
                {isLoading ? "Memuat rekomendasi..." : recommendedLesson?.title ?? "Mulai belajar"}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
                {hasProgress
                  ? "Ini adalah lesson yang paling dekat dengan progres kamu di active track."
                  : "Mulai dari lesson pertama agar fondasi web, HTML, CSS, dan layout tersusun berurutan."}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                {activeTrack ? (
                  <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5">
                    {activeTrack.title}
                  </span>
                ) : null}
                {currentLevel ? (
                  <span className="rounded-lg border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 text-cyan-100">
                    Level {currentLevel.level} · {currentLevel.title}
                  </span>
                ) : null}
                {recommendedModule ? (
                  <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5">
                    {recommendedModule.title}
                  </span>
                ) : null}
                <span className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-1.5">
                  {isLoading ? "Memuat..." : statusLabel[recommendedLessonStatus]}
                </span>
              </div>
            </div>

            <div className="w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4 lg:w-72">
              <ProgressBar
                value={recommendedLessonMetrics?.progressPercent ?? 0}
                label="Progres lesson"
                isLoading={isLoading}
                tone={recommendedLessonMetrics?.isCompleted ? "success" : "primary"}
              />
              <p className="mt-3 text-xs leading-5 text-zinc-400">
                {isLoading
                  ? "Memuat blok wajib..."
                  : `${recommendedLessonMetrics?.completedRequiredCount ?? 0}/${recommendedLessonMetrics?.totalRequiredCount ?? 0} blok wajib selesai.`}
              </p>
              <div className="mt-5 grid gap-2">
                {recommendedLesson ? (
                  <Link
                    href={`/lesson/${recommendedLesson.slug}`}
                    className="inline-flex justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_10px_28px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  >
                    {hasProgress ? "Lanjutkan learning" : "Mulai learning"}
                  </Link>
                ) : null}
                {activeTrack && recommendedModule ? (
                  <Link
                    href={`/learn/${activeTrack.slug}/${recommendedModule.slug}`}
                    className="inline-flex justify-center rounded-xl border border-zinc-700/80 bg-zinc-950/55 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
                  >
                    Buka module
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
          <p className="text-sm font-semibold text-cyan-200">Current level</p>
          <h2 className="mt-2 text-xl font-bold text-zinc-100">
            {currentLevel ? `Level ${currentLevel.level}: ${currentLevel.title}` : "Level belum tersedia"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            {currentLevel?.description ?? "Level akan muncul setelah track dan module aktif bisa dibaca."}
          </p>
          <ProgressBar
            value={currentLevelMetrics.progressPercent}
            label="Progres level"
            className="mt-4"
            isLoading={isLoading}
            tone={currentLevelMetrics.isCompleted ? "success" : "primary"}
          />
          <p className="mt-3 text-xs leading-5 text-zinc-400">
            {isLoading
              ? "Memuat progres level..."
              : `${currentLevelMetrics.completedLessonCount}/${currentLevelMetrics.totalLessonCount} lesson selesai · ${completedLevelModules.length}/${currentLevelModules.length} module selesai di level ini.`}
          </p>
        </article>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6 xl:col-span-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-200">Progress detail</p>
              <h2 className="mt-2 text-xl font-bold text-zinc-100">Module aktif</h2>
            </div>
            {activeTrack ? (
              <Link
                href={`/learn/${activeTrack.slug}`}
                className="inline-flex justify-center rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
              >
                Buka track
              </Link>
            ) : null}
          </div>

          <div className="mt-5 space-y-3">
            {moduleProgressEntries.map(({ module, metrics }) => (
              <div
                key={module.id}
                className="rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-zinc-100">{module.title}</h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      {metrics.completedLessonCount}/{metrics.totalLessonCount} lesson selesai
                    </p>
                  </div>
                  <span className="shrink-0 rounded-lg border border-zinc-700/80 bg-zinc-950/60 px-2.5 py-1 text-xs font-semibold text-zinc-300">
                    {statusLabel[getProgressStatus(metrics.progressPercent)]}
                  </span>
                </div>
                <ProgressBar
                  value={metrics.progressPercent}
                  className="mt-3"
                  isLoading={isLoading}
                  tone={metrics.isCompleted ? "success" : "primary"}
                />
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
          <p className="text-sm font-semibold text-cyan-200">Achievement ringan</p>
          <h2 className="mt-2 text-xl font-bold text-zinc-100">Yang sudah terbukti</h2>
          {isLoading ? (
            <p className="mt-3 text-sm text-zinc-400">Memuat lesson selesai...</p>
          ) : completedLessons.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {completedLessons.slice(0, 6).map(({ lesson }) => (
                <li
                  key={lesson.id}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-2"
                >
                  {lesson.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Belum ada lesson selesai. Setelah kamu menyelesaikan blok wajib, ringkasan pencapaian akan muncul di sini.
            </p>
          )}
          <p className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-950/55 p-3 text-xs leading-5 text-zinc-400">
            Badges dan sertifikat belum ditampilkan di halaman ini. Area ini hanya memakai progres belajar yang sudah
            benar-benar tersedia.
          </p>
        </article>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
          <p className="text-sm font-semibold text-cyan-200">Preferensi belajar</p>
          <h2 className="mt-2 text-xl font-bold text-zinc-100">Workspace dan progress lokal</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
            <p>
              Practice workspace dapat menyimpan preferensi layout dan preview viewport di browser saat fitur tersebut
              dipakai.
            </p>
            <p>
              Profile ini tidak mengubah preferensi tersebut. Tujuannya hanya memberi konteks bahwa beberapa pilihan
              belajar bersifat lokal di browser.
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-2">
              Layout practice: disimpan oleh workspace saat kamu memilih layout.
            </li>
            <li className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-2">
              Preview viewport: disimpan oleh workspace saat kamu memilih Mobile, Tablet, Desktop, atau Full.
            </li>
            <li className="rounded-lg border border-zinc-800/80 bg-zinc-950/55 px-3 py-2">
              Progress: {storageMode === "logged-in" ? "dibaca dari mode akun." : "tersimpan di browser ini."}
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
          <p className="text-sm font-semibold text-cyan-200">Akun dan navigasi</p>
          <h2 className="mt-2 text-xl font-bold text-zinc-100">
            {isAuthenticated ? "Akun aktif" : "Belajar sebagai tamu"}
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            {isAuthenticated
              ? "Kamu sedang memakai mode akun. Profile menampilkan progres dari progress service yang aktif."
              : "Kamu bisa belajar tanpa login. Login atau register tersedia jika ingin memakai alur akun saat fitur akun dibutuhkan."}
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/dashboard"
              className="inline-flex justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
            >
              Buka dashboard
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex justify-center rounded-xl border border-zinc-700/80 bg-zinc-950/55 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
            >
              Lihat roadmap
            </Link>
            <Link
              href="/learn"
              className="inline-flex justify-center rounded-xl border border-zinc-700/80 bg-zinc-950/55 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500/30"
            >
              Semua track
            </Link>
            {!isAuthenticated ? (
              <Link
                href="/login"
                className="inline-flex justify-center rounded-xl border border-cyan-300/35 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/35"
              >
                Login / Register
              </Link>
            ) : null}
          </div>
        </article>
      </section>
    </div>
  );
}
