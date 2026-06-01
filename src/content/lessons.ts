import type { Lesson } from "@/types/learning";

export const howWebPageLoadsLesson: Lesson = {
  id: "how-web-page-loads",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Cara Kerja Web Page",
  slug: "how-web-page-loads",
  description:
    "Pahami apa yang terjadi saat kamu membuka URL: browser meminta file, server membalas, lalu browser merender halaman.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 20,
  objectives: [
    "Menjelaskan alur sederhana saat browser membuka URL",
    "Membedakan request dan response",
    "Memahami peran HTML, CSS, dan JavaScript dalam proses render",
  ],
  skillTags: ["Web Fundamentals", "Browser", "HTTP"],
  blocks: [
    {
      id: "how-web-page-loads-intro",
      type: "text",
      title: "Apa yang terjadi saat kamu membuka URL?",
      content:
        "Saat kamu mengetik URL dan menekan Enter, browser belum punya halaman yang siap ditampilkan. Browser mencari alamat server, meminta file yang dibutuhkan, menerima balasan, lalu membaca HTML, CSS, dan JavaScript untuk merender halaman.",
    },
    {
      id: "how-web-page-loads-request-response",
      type: "callout",
      variant: "important",
      title: "Pikirkan sebagai request dan response",
      content:
        "Request adalah permintaan dari browser ke server. Response adalah balasan dari server. Response bisa berisi HTML, CSS, JavaScript, gambar, atau data JSON.",
    },
    {
      id: "how-web-page-loads-quick-check",
      type: "quick-check",
      question: "Saat browser meminta halaman ke server, istilah yang paling tepat untuk permintaan itu adalah apa?",
      options: ["response", "request", "render", "deploy"],
      correctAnswer: "request",
      explanation:
        "Request adalah permintaan yang dikirim browser ke server. Response adalah jawaban dari server setelah request diterima.",
    },
    {
      id: "how-web-page-loads-quiz-block",
      type: "quiz",
      quizId: "how-web-page-loads-quiz",
    },
    {
      id: "how-web-page-loads-summary",
      type: "summary",
      points: [
        "Saat membuka URL, browser meminta resource yang dibutuhkan.",
        "Server membalas dengan response, misalnya HTML, CSS, JavaScript, gambar, atau data.",
        "Browser membaca response tersebut lalu merender halaman yang kamu lihat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "how-web-page-loads-intro",
      "how-web-page-loads-request-response",
      "how-web-page-loads-quick-check",
      "how-web-page-loads-quiz-block",
      "how-web-page-loads-summary",
    ],
    passingQuizScore: 70,
  },
};

export const smallFrontendProjectStructureLesson: Lesson = {
  id: "small-frontend-project-structure",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Struktur Project Frontend Kecil",
  slug: "small-frontend-project-structure",
  description:
    "Kenali fungsi file dan folder dasar di project frontend kecil supaya kamu tahu di mana menaruh HTML, CSS, JavaScript, dan asset.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 18,
  objectives: [
    "Mengenali fungsi file HTML, CSS, dan JavaScript",
    "Menaruh asset seperti gambar dan ikon di folder yang jelas",
    "Membaca file tree project frontend kecil",
  ],
  skillTags: ["Project Structure", "HTML", "CSS", "JavaScript"],
  blocks: [
    {
      id: "small-frontend-project-structure-intro",
      type: "text",
      title: "Kenapa struktur project penting?",
      content:
        "Project kecil tetap perlu struktur yang jelas. Kalau file ditaruh sembarang, kamu akan lebih sulit mencari CSS, JavaScript, atau gambar saat project mulai bertambah.",
    },
    {
      id: "small-frontend-project-structure-file-tree",
      type: "code-example",
      title: "Contoh file tree sederhana",
      language: "bash",
      code: `my-frontend-project/
  index.html
  styles/
    main.css
  scripts/
    app.js
  assets/
    logo.svg
    hero-image.png`,
      explanation:
        "index.html adalah pintu masuk halaman. Folder styles berisi CSS, scripts berisi JavaScript, dan assets berisi gambar, ikon, atau file pendukung.",
    },
    {
      id: "small-frontend-project-structure-quick-check",
      type: "quick-check",
      question: "Di struktur contoh, file mana yang biasanya menjadi pintu masuk halaman web sederhana?",
      options: ["main.css", "app.js", "index.html", "logo.svg"],
      correctAnswer: "index.html",
      explanation:
        "index.html biasanya menjadi file pertama yang dibaca browser untuk mendapatkan struktur awal halaman.",
    },
    {
      id: "small-frontend-project-structure-summary",
      type: "summary",
      points: [
        "Gunakan index.html sebagai struktur awal halaman.",
        "Pisahkan CSS dan JavaScript agar file lebih mudah ditemukan.",
        "Simpan gambar, ikon, dan file pendukung di folder assets.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "small-frontend-project-structure-intro",
      "small-frontend-project-structure-file-tree",
      "small-frontend-project-structure-quick-check",
      "small-frontend-project-structure-summary",
    ],
  },
};

export const semanticHtmlStructureLesson: Lesson = {
  id: "semantic-html-structure",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Struktur Semantic HTML",
  slug: "semantic-html-structure",
  description:
    "Latih cara memilih elemen semantic HTML untuk menyusun header, navigasi, konten utama, dan footer.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 24,
  objectives: [
    "Memahami fungsi elemen semantic dalam struktur halaman",
    "Memilih elemen untuk navigasi, konten utama, dan footer",
    "Menyusun kerangka halaman yang mudah dibaca browser, screen reader, dan developer lain",
  ],
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
  blocks: [
    {
      id: "semantic-html-structure-intro",
      type: "text",
      title: "Semantic HTML memberi arti pada struktur",
      content:
        "Semantic HTML memberi arti pada bagian halaman. Daripada memakai div untuk semua area, kamu memilih elemen seperti header, nav, main, section, article, dan footer sesuai fungsi kontennya.",
    },
    {
      id: "semantic-html-structure-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memilih elemen berdasarkan tampilan",
      content:
        "HTML menjelaskan struktur dan peran konten. CSS yang mengatur tampilan. Kalau kamu memilih elemen hanya karena terlihat cocok, struktur halaman bisa membingungkan.",
    },
    {
      id: "semantic-html-structure-code-example",
      type: "code-example",
      title: "Kerangka halaman semantic",
      language: "html",
      code: `<header>
  <a href="/">FluentStack</a>
  <nav>
    <a href="/roadmap">Roadmap</a>
    <a href="/learn">Tracks</a>
  </nav>
</header>

<main>
  <section>
    <h1>Belajar Frontend Engineering</h1>
    <p>Mulai dari fondasi web, HTML, CSS, dan JavaScript.</p>
  </section>
</main>

<footer>
  <p>FluentStack</p>
</footer>`,
      explanation:
        "header menandai bagian pembuka, nav menandai navigasi, main menandai konten utama, section mengelompokkan area konten, dan footer menandai bagian penutup.",
    },
    {
      id: "semantic-html-structure-quick-check",
      type: "quick-check",
      question: "Elemen mana yang paling tepat untuk membungkus link navigasi utama?",
      options: ["main", "nav", "footer", "article"],
      correctAnswer: "nav",
      explanation:
        "nav menandai area navigasi. Link di dalamnya biasanya dipakai untuk berpindah halaman atau bagian penting.",
    },
    {
      id: "semantic-html-structure-quiz-block",
      type: "quiz",
      quizId: "semantic-html-structure-quiz",
    },
    {
      id: "semantic-html-structure-summary",
      type: "summary",
      points: [
        "Gunakan semantic HTML untuk menjelaskan peran setiap bagian halaman.",
        "Pilih elemen berdasarkan fungsi konten, bukan tampilan visual.",
        "Mulai dari struktur dasar: header, nav, main, section, article, dan footer.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "semantic-html-structure-intro",
      "semantic-html-structure-common-mistake",
      "semantic-html-structure-code-example",
      "semantic-html-structure-quick-check",
      "semantic-html-structure-quiz-block",
      "semantic-html-structure-summary",
    ],
    passingQuizScore: 70,
  },
};

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
  howWebPageLoadsLesson,
  smallFrontendProjectStructureLesson,
  semanticHtmlStructureLesson,
  htmlSemanticBasicsLesson,
  cssFlexboxBasicsLesson,
  writingDailyUpdateLesson,
];
