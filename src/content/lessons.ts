import type { Lesson } from "@/types/learning";

export const htmlSemanticBasicsLesson: Lesson = {
  id: "html-semantic-basics",
  trackId: "frontend-engineering",
  moduleId: "html-web-fundamentals",
  title: "Dasar Semantic HTML",
  slug: "html-semantic-basics",
  description:
    "Pakai semantic HTML untuk membuat struktur halaman lebih jelas bagi browser, screen reader, dan developer lain.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami fungsi semantic HTML",
    "Mengenali elemen semantic yang sering dipakai",
    "Memilih elemen HTML yang tepat untuk struktur konten nyata",
  ],
  skillTags: ["HTML", "Accessibility", "Web Fundamentals"],
  blocks: [
    {
      id: "html-semantic-intro",
      type: "text",
      title: "Apa itu semantic HTML?",
      content:
        "Semantic HTML adalah cara menulis HTML dengan elemen yang punya makna jelas. Artinya, kamu memilih elemen bukan hanya karena tampilannya, tapi karena fungsi kontennya.",
    },
    {
      id: "html-semantic-important-note",
      type: "callout",
      variant: "important",
      title: "Kenapa ini penting?",
      content:
        "Struktur semantic memberi konteks untuk screen reader, membuat kode lebih mudah dirawat, dan membuat kolaborasi antar developer lebih rapi.",
    },
    {
      id: "html-semantic-code-example",
      type: "code-example",
      title: "Contoh struktur semantic sederhana",
      language: "html",
      code: `<header>
  <nav>Navigasi utama</nav>
</header>

<main>
  <article>
    <h1>Judul Artikel</h1>
    <p>Konten utama ada di sini.</p>
  </article>
</main>

<footer>
  <p>Copyright 2026</p>
</footer>`,
      explanation:
        "Dengan elemen seperti header, main, article, dan footer, struktur halaman jadi lebih mudah dipahami oleh developer, browser, dan assistive technology.",
    },
    {
      id: "html-semantic-quick-check",
      type: "quick-check",
      question:
        "Elemen mana yang paling tepat untuk membungkus konten utama unik dari sebuah halaman?",
      options: ["header", "main", "section", "aside"],
      correctAnswer: "main",
      explanation:
        "Elemen main dipakai untuk konten utama halaman, bukan header, sidebar, atau navigasi.",
    },
    {
      id: "html-semantic-quiz",
      type: "quiz",
      quizId: "html-semantic-quiz",
    },
    {
      id: "html-semantic-summary",
      type: "summary",
      points: [
        "Semantic HTML membuat struktur halaman lebih jelas dan bermakna.",
        "Pilih elemen berdasarkan fungsi konten, bukan sekadar tampilan.",
        "Struktur semantic yang baik mendukung accessibility dan membuat kode lebih mudah dirawat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "html-semantic-intro",
      "html-semantic-code-example",
      "html-semantic-quick-check",
      "html-semantic-quiz",
      "html-semantic-summary",
    ],
    passingQuizScore: 70,
  },
};

export const writingDailyUpdateLesson: Lesson = {
  id: "writing-daily-update",
  trackId: "english-for-tech-careers",
  moduleId: "english-for-remote-work",
  title: "Menulis Daily Update untuk Kerja Remote",
  slug: "writing-daily-update",
  description:
    "Latihan menulis daily update yang ringkas, jelas, dan relevan untuk tim kerja remote lintas fungsi.",
  contentLanguage: "bilingual",
  level: "beginner",
  estimatedMinutes: 20,
  objectives: [
    "Memahami struktur daily update yang efektif untuk konteks kerja remote",
    "Menulis update berbahasa Inggris dengan format yang mudah dibaca tim",
    "Menyampaikan progres, plan, dan blocker secara jelas",
  ],
  skillTags: ["Technical English", "Remote Communication", "Writing Practice"],
  blocks: [
    {
      id: "writing-daily-update-intro",
      type: "text",
      title: "Kenapa daily update itu penting?",
      content:
        "Di tim remote, daily update membuat semua orang tahu progres terbaru tanpa menunggu meeting panjang. Format yang ringkas membuat engineer, PM, dan designer bisa cepat memahami apa yang sudah selesai, rencana berikutnya, dan blocker yang perlu dibantu.",
    },
    {
      id: "writing-daily-update-practical-note",
      type: "callout",
      variant: "tip",
      title: "Pakai format sederhana yang konsisten",
      content:
        "Gunakan format: Yesterday / Today / Blockers. Hindari kalimat terlalu panjang. Fokus pada dampak pekerjaan dan hal yang butuh kolaborasi dari tim.",
    },
    {
      id: "writing-daily-update-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis daily update singkat dalam bahasa Inggris menggunakan konteks realistis pekerjaan remote.\n\nTemplate yang bisa kamu pakai:\n- Yesterday: ...\n- Today: ...\n- Blockers: ...",
      placeholder:
        "Contoh:\nYesterday: I finished ...\nToday: I will work on ...\nBlockers: I need ...",
      checklist: [
        "Menyebutkan progres yang spesifik, bukan terlalu umum",
        "Rencana hari ini jelas dan bisa ditindaklanjuti",
        "Blocker ditulis dengan kebutuhan bantuan yang konkret",
      ],
      modelAnswer:
        "Yesterday: I finished the responsive navbar implementation and updated the PR with accessibility fixes.\nToday: I will integrate the settings API and write unit tests for the form validation.\nBlockers: I need confirmation from backend about the final response shape for the settings endpoint.",
    },
    {
      id: "writing-daily-update-summary",
      type: "summary",
      points: [
        "Daily update yang baik harus ringkas, spesifik, dan mudah dipahami tim.",
        "Format Yesterday / Today / Blockers membuat komunikasi tetap terstruktur.",
        "Tulis blocker dengan jelas supaya tim tahu bantuan apa yang dibutuhkan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "writing-daily-update-intro",
      "writing-daily-update-practical-note",
      "writing-daily-update-writing-practice",
      "writing-daily-update-summary",
    ],
  },
};

export const cssFlexboxBasicsLesson: Lesson = {
  id: "css-flexbox-basics",
  trackId: "frontend-engineering",
  moduleId: "css-fundamentals",
  title: "Dasar Flexbox",
  slug: "css-flexbox-basics",
  description:
    "Pelajari konsep dasar Flexbox untuk membuat layout horizontal dan vertikal yang lebih rapi serta mudah diatur.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 30,
  objectives: [
    "Memahami peran container dan item pada Flexbox",
    "Menggunakan justify-content dan align-items sesuai kebutuhan layout",
    "Menerapkan Flexbox pada komponen navbar sederhana",
  ],
  skillTags: ["CSS", "Flexbox", "Responsive Design"],
  blocks: [
    {
      id: "css-flexbox-intro",
      type: "text",
      title: "Kenalan dengan Flexbox",
      content:
        "Flexbox dipakai untuk menyusun elemen secara fleksibel dalam satu baris atau kolom. Dengan properti yang tepat, kamu bisa mengatur jarak, alignment, dan distribusi ruang tanpa trik layout lama yang rumit.",
    },
    {
      id: "css-flexbox-code-example",
      type: "code-example",
      title: "Contoh container Flexbox dasar",
      language: "css",
      code: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}`,
      explanation:
        "display: flex mengaktifkan Flexbox. justify-content mengatur distribusi ruang horizontal, sedangkan align-items mengatur alignment pada sumbu silang.",
    },
    {
      id: "css-flexbox-coding-practice",
      type: "coding-practice",
      challengeId: "build-flexbox-navbar",
    },
    {
      id: "css-flexbox-summary",
      type: "summary",
      points: [
        "Flexbox mempermudah penyusunan layout horizontal maupun vertikal.",
        "Gunakan justify-content dan align-items untuk mengontrol posisi elemen.",
        "Latihan langsung lewat challenge membuat perilaku Flexbox lebih mudah dipahami di UI nyata.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-flexbox-intro",
      "css-flexbox-code-example",
      "css-flexbox-coding-practice",
      "css-flexbox-summary",
    ],
  },
};

export const lessons: Lesson[] = [
  htmlSemanticBasicsLesson,
  cssFlexboxBasicsLesson,
  writingDailyUpdateLesson,
];
