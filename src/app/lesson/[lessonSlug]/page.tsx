import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { LessonReader } from "@/components/learning/lesson-reader";
import { getLessonBySlug } from "@/lib/content/get-lesson";

type LessonPageProps = {
  params: Promise<{ lessonSlug: string }>;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    notFound();
  }

  return (
    <AppShell title={lesson.title}>
      <LessonReader lesson={lesson} />
    </AppShell>
  );
}
