import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { LessonReader } from "@/components/learning/lesson-reader";
import { getLessonNavigation, getLessonPathContextBySlug } from "@/lib/content/learning-path";

type LessonPageProps = {
  params: Promise<{ lessonSlug: string }>;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonSlug } = await params;
  const lessonContext = getLessonPathContextBySlug(lessonSlug);

  if (!lessonContext) {
    notFound();
  }

  const navigation = getLessonNavigation(lessonContext);
  const lesson = lessonContext.lesson;

  return (
    <AppShell title={lesson.title}>
      <LessonReader lesson={lesson} navigation={navigation} />
    </AppShell>
  );
}
