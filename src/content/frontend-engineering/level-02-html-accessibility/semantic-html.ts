import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const semanticHtmlModule: Module = {
  id: "semantic-html",
  trackId: "frontend-engineering",
  title: "Semantic HTML",
  slug: "semantic-html",
  description:
    "Belajar memilih elemen HTML berdasarkan makna dan struktur halaman.",
  order: 3,
  lessonIds: ["semantic-html-structure", "html-semantic-basics", "semantic-html-assessment"],
  estimatedHours: 5,
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
};

export const semanticHtmlStructureLesson: Lesson = {
  id: "semantic-html-structure",
  trackId: "frontend-engineering",
  moduleId: "semantic-html",
  title: "Struktur Semantic HTML",
  slug: "semantic-html-structure",
  description:
    "Gunakan tag dan element HTML yang sudah kamu pelajari untuk menyusun struktur halaman yang lebih bermakna.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 36,
  objectives: [
    "Memahami fungsi elemen semantic dalam struktur halaman",
    "Memilih elemen untuk navigasi, konten utama, dan footer",
    "Menyusun kerangka semantic HTML dan melihat hasilnya di preview",
  ],
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
  blocks: [
    {
      id: "semantic-html-structure-intro",
      type: "text",
      title: "Semantic HTML memberi arti pada struktur",
      content:
        "Setelah mengenal tag, element, dan attribute, sekarang kamu bisa memilih element berdasarkan makna. Semantic HTML memberi arti pada bagian halaman. Daripada memakai div untuk semua area, kamu memilih element seperti header, nav, main, section, article, dan footer sesuai fungsi kontennya.",
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
      id: "semantic-html-structure-coding-practice",
      type: "coding-practice",
      challengeId: "build-semantic-html-page",
    },
    {
      id: "semantic-html-structure-summary",
      type: "summary",
      points: [
        "Gunakan semantic HTML untuk menjelaskan peran setiap bagian halaman.",
        "Pilih elemen berdasarkan fungsi konten, bukan tampilan visual.",
        "Mulai dari struktur dasar: header, nav, main, section, article, dan footer.",
        "Di preview, cek apakah struktur halaman tetap terbaca jelas walau styling masih sederhana.",
        "Berikutnya, kamu akan menerapkan semantic HTML dengan memperbaiki struktur div yang terlalu umum.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "semantic-html-structure-intro",
      "semantic-html-structure-common-mistake",
      "semantic-html-structure-code-example",
      "semantic-html-structure-quick-check",
      "semantic-html-structure-coding-practice",
      "semantic-html-structure-summary",
    ],
  },
};

export const htmlSemanticBasicsLesson: Lesson = {
  id: "html-semantic-basics",
  trackId: "frontend-engineering",
  moduleId: "semantic-html",
  title: "Latihan Menerapkan Semantic HTML",
  slug: "html-semantic-basics",
  description:
    "Latihan memperbaiki struktur HTML yang terlalu umum menjadi semantic HTML yang lebih jelas.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Mereview keputusan semantic HTML dari contoh yang sudah ada",
    "Mengubah struktur berbasis div menjadi semantic HTML yang lebih jelas",
    "Memilih elemen berdasarkan fungsi konten, bukan tampilan",
  ],
  skillTags: ["HTML", "Accessibility", "Web Fundamentals"],
  blocks: [
    {
      id: "html-semantic-intro",
      type: "text",
      title: "Dari paham konsep ke latihan memilih elemen",
      content:
        "Di lesson sebelumnya, kamu sudah melihat elemen seperti header, nav, main, article, section, dan footer. Sekarang fokusnya bukan mengulang definisi, tetapi melatih keputusan: bagian mana yang sebaiknya tetap div, dan bagian mana yang punya elemen semantic yang lebih tepat.",
    },
    {
      id: "html-semantic-important-note",
      type: "callout",
      variant: "important",
      title: "Div tidak selalu salah",
      content:
        "Div boleh dipakai sebagai wrapper umum. Masalahnya muncul kalau semua bagian penting halaman memakai div, padahal ada elemen HTML yang lebih bermakna untuk navigasi, konten utama, artikel, atau footer.",
    },
    {
      id: "html-semantic-code-example",
      type: "code-example",
      title: "Contoh keputusan refactor",
      language: "html",
      code: `<div class="menu">
  <a href="/roadmap">Roadmap</a>
</div>

<nav>
  <a href="/roadmap">Roadmap</a>
</nav>`,
      explanation:
        "Jika bagian tersebut berisi link navigasi, nav lebih jelas daripada div. Refactor seperti ini membuat fungsi bagian halaman lebih mudah dipahami.",
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
      id: "html-semantic-refactor-practice",
      type: "coding-practice",
      challengeId: "refactor-div-layout-to-semantic-html",
    },
    {
      id: "html-semantic-summary",
      type: "summary",
      points: [
        "Gunakan semantic HTML ketika fungsi bagian halaman sudah jelas.",
        "Div masih boleh dipakai untuk wrapper umum, tetapi jangan jadikan div sebagai pengganti semua bagian penting.",
        "Jika div hanya dipakai sebagai wrapper besar, cek apakah header, nav, main, article, section, atau footer lebih tepat.",
        "Berikutnya, kamu akan menguji kesiapan Semantic HTML lewat assessment module.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "html-semantic-intro",
      "html-semantic-code-example",
      "html-semantic-quick-check",
      "html-semantic-refactor-practice",
      "html-semantic-summary",
    ],
  },
};

export const semanticHtmlAssessmentLesson: Lesson = {
  id: "semantic-html-assessment",
  trackId: "frontend-engineering",
  moduleId: "semantic-html",
  title: "Uji Kompetensi Semantic HTML",
  slug: "semantic-html-assessment",
  description:
    "Cek kesiapan kamu memilih elemen semantic berdasarkan makna struktur halaman.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memilih elemen semantic berdasarkan fungsi konten",
    "Membedakan penggunaan header, nav, main, section, article, dan footer",
    "Memperbaiki struktur div-only menjadi semantic HTML sederhana",
  ],
  skillTags: ["HTML", "Semantic HTML", "Assessment", "Accessibility"],
  blocks: [
    {
      id: "semantic-html-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini mengecek apakah kamu bisa memilih elemen berdasarkan makna, bukan tampilan. Kamu akan memutuskan kapan memakai header, nav, main, section, article, dan footer, lalu menerapkannya dalam struktur halaman kecil.",
    },
    {
      id: "semantic-html-assessment-quiz-block",
      type: "quiz",
      quizId: "semantic-html-assessment-quiz",
    },
    {
      id: "semantic-html-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-semantic-html-assessment-page",
    },
    {
      id: "semantic-html-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi, bukan tugas menghafal. Kamu tidak perlu membaca semuanya sekarang. Fokus pada bagian yang sudah kamu pelajari.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Structuring content with HTML",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content",
          focus: [
            "struktur konten HTML",
            "elemen yang dipakai untuk menyusun halaman",
            "hubungan antara konten dan makna",
          ],
          ignoreForNow: ["semua halaman reference yang belum relevan"],
        },
        {
          source: "MDN Web Docs",
          title: "Structuring documents",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents",
          focus: [
            "header",
            "nav",
            "main",
            "section",
            "article",
            "aside",
            "footer",
            "heading hierarchy",
          ],
          ignoreForNow: [
            "ARIA landmarks yang terlalu detail",
            "schema markup",
            "SEO advanced",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Challenge: Structuring a page of content",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content",
          focus: [
            "melihat contoh challenge struktur halaman",
            "membandingkan semantic structure dengan div-only structure",
          ],
          ignoreForNow: ["menyelesaikan semua challenge MDN sekarang"],
        },
      ],
      followUpAction:
        "Kembali ke latihan Semantic HTML dan jelaskan satu pilihan elemen: kenapa bagian itu lebih cocok memakai main, header, nav, section, article, atau footer daripada div biasa?",
    },
    {
      id: "semantic-html-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap jika bisa memilih semantic element berdasarkan fungsi konten.",
        "Gunakan nav untuk navigasi, main untuk konten utama, dan footer untuk bagian penutup.",
        "Gunakan section atau article ketika bagian konten punya kelompok atau isi mandiri yang jelas.",
        "Berikutnya, kamu akan masuk ke Forms and Basic Accessibility dan mulai membedakan link, button, serta field form dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "semantic-html-assessment-recap",
      "semantic-html-assessment-quiz-block",
      "semantic-html-assessment-coding-practice",
      "semantic-html-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const semanticHtmlStructureQuiz: Quiz = {
  id: "semantic-html-structure-quiz",
  lessonId: "semantic-html-structure",
  title: "Kuis Struktur Semantic HTML",
  passingScore: 70,
  questions: [
    {
      id: "semantic-html-structure-q1",
      type: "multiple-choice",
      question: "Elemen mana yang paling tepat untuk konten utama halaman?",
      options: ["header", "nav", "main", "footer"],
      correctAnswer: "main",
      explanation:
        "main dipakai untuk konten utama halaman. Elemen ini bukan tempat untuk navbar, footer, atau konten pendukung.",
    },
    {
      id: "semantic-html-structure-q2",
      type: "true-false",
      question: "Semantic HTML dipilih berdasarkan fungsi konten, bukan berdasarkan tampilan visual.",
      correctAnswer: true,
      explanation:
        "HTML menjelaskan peran dan struktur konten. Tampilan visual seperti warna, ukuran, dan jarak diatur dengan CSS.",
    },
    {
      id: "semantic-html-structure-q3",
      type: "multiple-choice",
      question: "Elemen mana yang paling tepat untuk area navigasi utama?",
      options: ["article", "nav", "section", "aside"],
      correctAnswer: "nav",
      explanation:
        "nav memberi arti bahwa area tersebut berisi link navigasi. Ini membantu struktur halaman lebih jelas untuk browser, screen reader, dan developer lain.",
    },
    {
      id: "semantic-html-structure-q4",
      type: "code-output",
      question: "Pada struktur berikut, elemen apa yang paling tepat mengganti div untuk area penutup halaman?",
      code: `<div class="page-end">
  <p>FluentStack</p>
</div>`,
      options: ["footer", "main", "nav", "article"],
      correctAnswer: "footer",
      explanation:
        "footer tepat untuk area penutup halaman atau section. Di contoh ini, kontennya berfungsi sebagai informasi penutup, bukan konten utama atau navigasi.",
    },
  ],
};

export const htmlSemanticQuiz: Quiz = {
  id: "html-semantic-quiz",
  lessonId: "html-semantic-basics",
  title: "Kuis Dasar Semantic HTML",
  passingScore: 70,
  questions: [
    {
      id: "html-semantic-q1",
      type: "multiple-choice",
      question: "Elemen mana yang paling tepat untuk aksi klik seperti kirim form?",
      options: ["div", "button", "span", "section"],
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
      options: ["nav", "aside", "footer", "article"],
      correctAnswer: "article",
      explanation:
        "article lebih tepat karena blok tersebut mewakili konten mandiri berupa artikel.",
    },
  ],
};

export const semanticHtmlAssessmentQuiz: Quiz = {
  id: "semantic-html-assessment-quiz",
  lessonId: "semantic-html-assessment",
  title: "Assessment Semantic HTML",
  passingScore: 70,
  questions: [
    {
      id: "semantic-html-assessment-q1",
      type: "multiple-choice",
      question: "Apa dasar utama memilih semantic HTML?",
      options: [
        "Warna yang ingin ditampilkan",
        "Ukuran teks yang paling besar",
        "Makna dan fungsi konten",
        "Nama class yang paling pendek",
      ],
      correctAnswer: "Makna dan fungsi konten",
      explanation:
        "Semantic HTML dipilih berdasarkan fungsi konten. Tampilan seperti warna dan ukuran diatur dengan CSS.",
    },
    {
      id: "semantic-html-assessment-q2",
      type: "multiple-choice",
      question: "Elemen mana yang paling tepat untuk area link navigasi utama?",
      options: ["nav", "main", "footer", "article"],
      correctAnswer: "nav",
      explanation:
        "nav menandai area navigasi, yaitu kumpulan link untuk berpindah ke halaman atau bagian penting.",
    },
    {
      id: "semantic-html-assessment-q3",
      type: "true-false",
      question: "Div selalu salah dan harus diganti semua dengan semantic element.",
      correctAnswer: false,
      explanation:
        "Div tetap boleh dipakai sebagai wrapper umum. Yang perlu dihindari adalah memakai div untuk semua bagian penting yang sudah punya elemen semantic lebih tepat.",
    },
    {
      id: "semantic-html-assessment-q4",
      type: "multiple-choice",
      question: "Elemen mana yang paling tepat untuk konten utama unik dari satu halaman?",
      options: ["aside", "footer", "main", "nav"],
      correctAnswer: "main",
      explanation:
        "main membungkus konten utama halaman. Navigasi, footer, dan konten pendukung sebaiknya tidak ditaruh sebagai main.",
    },
    {
      id: "semantic-html-assessment-q5",
      type: "code-output",
      question: "Jika blok berikut adalah artikel mandiri, elemen apa yang paling tepat mengganti div?",
      code: `<div class="post">
  <h2>Belajar HTML</h2>
  <p>Isi artikel.</p>
</div>`,
      options: ["section", "nav", "footer", "article"],
      correctAnswer: "article",
      explanation:
        "article tepat untuk konten mandiri seperti artikel, post, atau item yang bisa berdiri sendiri.",
    },
    {
      id: "semantic-html-assessment-q6",
      type: "multiple-choice",
      question: "Apa masalah utama dari struktur yang memakai div untuk header, menu, konten utama, dan footer sekaligus?",
      options: [
        "Browser tidak bisa menampilkan div",
        "Makna setiap bagian halaman menjadi kurang jelas",
        "CSS tidak bisa dipakai",
        "Semua link otomatis rusak",
      ],
      correctAnswer: "Makna setiap bagian halaman menjadi kurang jelas",
      explanation:
        "Jika semua bagian penting memakai div, developer dan assistive technology kehilangan petunjuk makna struktur halaman.",
    },
  ],
};

export const buildSemanticHtmlPageChallenge: CodingChallenge = {
  id: "build-semantic-html-page",
  lessonId: "semantic-html-structure",
  title: "Membuat struktur halaman semantic HTML",
  description: "Latihan menyusun bagian halaman dengan elemen semantic.",
  instructions: [
    "Semantic HTML membahas makna struktur, bukan visual style.",
    "Susun bagian halaman berdasarkan tujuan kontennya.",
    "Gunakan header, nav, main, section atau article, dan footer.",
    "Jaga urutan heading tetap masuk akal, mulai dari h1 untuk judul utama.",
  ],
  starterCode: {
    html: `<header>
  <h1>FluentStack Notes</h1>
  <!-- Tambahkan nav di sini -->
</header>

<!-- Tambahkan main, section atau article, dan footer -->`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<header>
  <h1>FluentStack Notes</h1>
  <nav>
    <a href="#lesson">Lesson</a>
    <a href="#summary">Summary</a>
  </nav>
</header>

<main>
  <section id="lesson">
    <h2>Belajar Semantic HTML</h2>
    <p>Setiap bagian halaman memakai element sesuai maknanya.</p>
  </section>
</main>

<footer id="summary">
  <p>Catatan belajar HTML.</p>
</footer>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  checklist: [
    "Header dipakai untuk bagian atas halaman.",
    "Nav dipakai untuk navigasi.",
    "Main membungkus konten utama.",
    "Section atau article dipakai untuk bagian konten.",
    "Footer dipakai untuk bagian bawah halaman.",
    "Heading hierarchy tetap masuk akal.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-header", label: "Ada header.", type: "hasElement", target: "header" },
      { id: "has-nav", label: "Ada nav.", type: "hasElement", target: "nav" },
      { id: "has-main", label: "Ada main.", type: "hasElement", target: "main" },
      { id: "has-content-section", label: "Ada section atau article.", type: "hasElement", target: "section, article" },
      { id: "has-footer", label: "Ada footer.", type: "hasElement", target: "footer" },
    ],
  },
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
};

export const refactorDivLayoutToSemanticHtmlChallenge: CodingChallenge = {
  id: "refactor-div-layout-to-semantic-html",
  lessonId: "html-semantic-basics",
  title: "Mengubah struktur div menjadi semantic HTML",
  description:
    "Latihan mengganti struktur umum berbasis div menjadi elemen HTML yang lebih bermakna.",
  instructions: [
    "Gunakan latihan ini sebagai review, bukan materi baru.",
    "Ganti div utama jika ada elemen semantic yang lebih tepat.",
    "Pilih elemen berdasarkan fungsi konten: navigasi, konten utama, artikel, atau penutup.",
    "Jangan fokus ke tampilan dulu. Fokus ke makna struktur HTML.",
  ],
  starterCode: {
    html: `<div class="top">
  <h1>Catatan Belajar</h1>
  <div class="menu">
    <a href="#html">HTML</a>
    <a href="#summary">Summary</a>
  </div>
</div>

<div class="content">
  <div class="post" id="html">
    <h2>Semantic HTML</h2>
    <p>Struktur yang bermakna membantu halaman lebih mudah dipahami.</p>
  </div>
</div>

<div class="bottom" id="summary">
  <p>FluentStack</p>
</div>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<header>
  <h1>Catatan Belajar</h1>
  <nav>
    <a href="#html">HTML</a>
    <a href="#summary">Summary</a>
  </nav>
</header>

<main>
  <article id="html">
    <h2>Semantic HTML</h2>
    <p>Struktur yang bermakna membantu halaman lebih mudah dipahami.</p>
  </article>
</main>

<footer id="summary">
  <p>FluentStack</p>
</footer>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  checklist: [
    "Div utama yang tidak bermakna sudah diganti jika ada elemen semantic yang lebih tepat.",
    "Navigasi memakai nav.",
    "Konten utama berada di main.",
    "Bagian bawah halaman memakai footer.",
    "Struktur heading tetap jelas.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-header", label: "Ada header.", type: "hasElement", target: "header" },
      { id: "has-nav", label: "Ada nav.", type: "hasElement", target: "nav" },
      { id: "has-main", label: "Ada main.", type: "hasElement", target: "main" },
      { id: "has-content-section", label: "Ada section atau article.", type: "hasElement", target: "section, article" },
      { id: "has-footer", label: "Ada footer.", type: "hasElement", target: "footer" },
    ],
  },
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
};

export const buildSemanticHtmlAssessmentPageChallenge: CodingChallenge = {
  id: "build-semantic-html-assessment-page",
  lessonId: "semantic-html-assessment",
  title: "Membangun halaman semantic HTML",
  description:
    "Assessment praktik untuk menyusun halaman kecil memakai elemen semantic.",
  instructions: [
    "Ganti struktur umum berbasis div menjadi semantic HTML.",
    "Gunakan header, nav, main, section atau article, dan footer sesuai fungsi konten.",
    "Jaga heading tetap jelas: h1 untuk judul utama, h2 untuk bagian di dalam konten.",
    "CSS dan JS tidak perlu diubah. Fokus pada makna struktur HTML.",
  ],
  starterCode: {
    html: `<div class="top">
  <h1>Catatan Frontend</h1>
  <div class="links">
    <a href="#html">HTML</a>
    <a href="#next">Next Step</a>
  </div>
</div>

<div class="content">
  <div id="html">
    <h2>Belajar Semantic HTML</h2>
    <p>Pilih elemen berdasarkan fungsi konten.</p>
  </div>
</div>

<div id="next">
  <p>FluentStack</p>
</div>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<header>
  <h1>Catatan Frontend</h1>
  <nav>
    <a href="#html">HTML</a>
    <a href="#next">Next Step</a>
  </nav>
</header>

<main>
  <article id="html">
    <h2>Belajar Semantic HTML</h2>
    <p>Pilih elemen berdasarkan fungsi konten.</p>
  </article>
</main>

<footer id="next">
  <p>FluentStack</p>
</footer>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  checklist: [
    "Bagian atas memakai header.",
    "Navigasi memakai nav.",
    "Konten utama memakai main.",
    "Bagian konten memakai section atau article.",
    "Bagian bawah memakai footer.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-header", label: "Ada header.", type: "hasElement", target: "header" },
      { id: "has-nav", label: "Ada nav.", type: "hasElement", target: "nav" },
      { id: "has-main", label: "Ada main.", type: "hasElement", target: "main" },
      { id: "has-content-section", label: "Ada section atau article.", type: "hasElement", target: "section, article" },
      { id: "has-footer", label: "Ada footer.", type: "hasElement", target: "footer" },
    ],
  },
  skillTags: ["HTML", "Semantic HTML", "Assessment", "Accessibility"],
};

export const semanticHtmlLessons: Lesson[] = [
  semanticHtmlStructureLesson,
  htmlSemanticBasicsLesson,
  semanticHtmlAssessmentLesson,
];

export const semanticHtmlQuizzes: Quiz[] = [
  semanticHtmlStructureQuiz,
  htmlSemanticQuiz,
  semanticHtmlAssessmentQuiz,
];

export const semanticHtmlChallenges: CodingChallenge[] = [
  buildSemanticHtmlPageChallenge,
  refactorDivLayoutToSemanticHtmlChallenge,
  buildSemanticHtmlAssessmentPageChallenge,
];
