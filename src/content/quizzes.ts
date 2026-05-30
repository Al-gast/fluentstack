import type { Quiz } from "@/types/quiz";

export const htmlSemanticQuiz: Quiz = {
  id: "html-semantic-quiz",
  lessonId: "html-semantic-basics",
  title: "Quiz Dasar Semantic HTML",
  passingScore: 70,
  questions: [
    {
      id: "html-semantic-q1",
      type: "multiple-choice",
      question: "Elemen mana yang paling tepat untuk aksi klik seperti kirim form?",
      options: ["div", "span", "button", "section"],
      correctAnswer: "button",
      explanation:
        "Elemen button sudah mendukung akses keyboard dan secara semantic cocok untuk aksi interaktif.",
    },
    {
      id: "html-semantic-q2",
      type: "true-false",
      question: "Semantic HTML hanya berpengaruh pada tampilan visual halaman.",
      correctAnswer: false,
      explanation:
        "Semantic HTML berpengaruh pada makna struktur, accessibility, dan kode yang lebih mudah dirawat.",
    },
    {
      id: "html-semantic-q3",
      type: "fill-blank",
      question: "Elemen _____ digunakan untuk konten utama unik dari sebuah halaman.",
      correctAnswer: "main",
      explanation:
        "Elemen main menandai area konten utama yang menjadi inti halaman.",
    },
    {
      id: "html-semantic-q4",
      type: "code-output",
      question: "Perhatikan kode berikut. Elemen mana yang paling tepat untuk mengganti div wrapper artikel?",
      code: `<div class="post">
  <h2>Judul</h2>
  <p>Isi artikel</p>
</div>`,
      options: ["article", "nav", "aside", "footer"],
      correctAnswer: "article",
      explanation:
        "article lebih tepat karena blok tersebut mewakili konten mandiri berupa artikel.",
    },
  ],
};

export const quizzes: Quiz[] = [htmlSemanticQuiz];
