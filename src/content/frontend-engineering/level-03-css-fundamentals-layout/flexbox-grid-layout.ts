import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const flexboxGridLayoutModule: Module = {
  id: "flexbox-grid-layout",
  trackId: "frontend-engineering",
  title: "Flexbox and Grid Layout",
  slug: "flexbox-grid-layout",
  description:
    "Pelajari cara menyusun elemen menggunakan Flexbox dan Grid untuk membuat navbar, layout sederhana, dan card grid.",
  order: 8,
  lessonIds: [
    "css-flexbox-basic",
    "build-navbar-with-flexbox",
    "css-grid-basic",
    "flexbox-vs-grid-decision",
    "flexbox-grid-layout-assessment",
  ],
  estimatedHours: 4,
  skillTags: ["CSS", "Flexbox", "Grid", "Layout"],
};

export const cssFlexboxBasicLesson: Lesson = {
  id: "css-flexbox-basic",
  trackId: "frontend-engineering",
  moduleId: "flexbox-grid-layout",
  title: "Flexbox Dasar",
  slug: "css-flexbox-basic",
  description:
    "Pahami Flexbox sebagai cara menyusun elemen dalam satu arah, baik baris maupun kolom.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami Flexbox sebagai layout satu arah",
    "Memahami flex container dan flex item",
    "Menggunakan display: flex",
    "Menggunakan gap",
    "Mengenal justify-content dan align-items secara sederhana",
  ],
  skillTags: ["CSS", "Flexbox", "Layout"],
  blocks: [
    {
      id: "css-flexbox-basic-intro",
      type: "text",
      title: "Flexbox menyusun item dalam satu arah",
      content:
        "Flexbox membantu kamu menyusun elemen dalam satu arah: baris atau kolom. Ini cocok untuk menu horizontal, tombol yang bersebelahan, atau layout kecil yang itemnya perlu rapi dalam satu jalur.\n\nParent yang diberi display: flex menjadi flex container. Anak langsung di dalamnya menjadi flex item. gap memberi jarak antar item. justify-content mengatur posisi item di arah utama, sedangkan align-items mengatur posisi di arah silang.",
    },
    {
      id: "css-flexbox-basic-code",
      type: "code-example",
      title: "Contoh Flexbox sederhana",
      language: "html",
      code: `<div class="layout">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</div>`,
      explanation:
        "Elemen .layout akan menjadi flex container. Tiga .card di dalamnya akan menjadi flex item.",
    },
    {
      id: "css-flexbox-basic-css",
      type: "code-example",
      title: "CSS untuk menyusun card",
      language: "css",
      code: `.layout {
  display: flex;
  gap: 16px;
  align-items: center;
}`,
      explanation:
        "display: flex mengaktifkan Flexbox. gap memberi jarak antar card. align-items membantu merapikan posisi item pada arah silang.",
    },
    {
      id: "css-flexbox-basic-callout",
      type: "callout",
      variant: "tip",
      title: "Kapan Flexbox cocok?",
      content:
        "Flexbox paling cocok saat kamu menyusun elemen dalam satu arah, misalnya menu horizontal, tombol bersebelahan, atau layout kecil baris/kolom.",
    },
    {
      id: "css-flexbox-basic-quick-check",
      type: "quick-check",
      question: "Property apa yang membuat sebuah elemen menjadi flex container?",
      options: [
        "grid-template-columns",
        "display: flex",
        "layout: row",
        "flex-item: true",
      ],
      correctAnswer: "display: flex",
      explanation:
        "display: flex membuat elemen menjadi flex container sehingga anak langsungnya menjadi flex item.",
    },
    {
      id: "css-flexbox-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-flexbox-basic",
    },
    {
      id: "css-flexbox-basic-summary",
      type: "summary",
      points: [
        "Flexbox menyusun elemen dalam satu arah.",
        "display: flex dipasang di parent.",
        "Anak langsung menjadi flex item.",
        "gap memberi jarak antar item.",
        "Berikutnya kamu akan memakai Flexbox untuk membuat navbar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-flexbox-basic-intro",
      "css-flexbox-basic-code",
      "css-flexbox-basic-css",
      "css-flexbox-basic-quick-check",
      "css-flexbox-basic-coding-practice",
      "css-flexbox-basic-summary",
    ],
  },
};

export const buildNavbarWithFlexboxLesson: Lesson = {
  id: "build-navbar-with-flexbox",
  trackId: "frontend-engineering",
  moduleId: "flexbox-grid-layout",
  title: "Membuat Navbar dengan Flexbox",
  slug: "build-navbar-with-flexbox",
  description:
    "Gunakan Flexbox untuk membuat navbar sederhana yang rapi dan mudah dibaca.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Menggunakan Flexbox untuk layout navbar",
    "Mengatur jarak antar link",
    "Menggunakan justify-content untuk memisahkan brand dan menu",
    "Menggunakan align-items untuk merapikan posisi vertikal",
    "Membuat navbar sederhana tanpa JavaScript",
  ],
  skillTags: ["CSS", "Flexbox", "Navbar"],
  blocks: [
    {
      id: "build-navbar-with-flexbox-intro",
      type: "text",
      title: "Navbar biasanya layout satu baris",
      content:
        "Navbar sering punya brand di kiri dan menu di kanan. Flexbox cocok untuk kasus ini karena navbar biasanya menyusun item dalam satu baris.\n\njustify-content: space-between bisa memisahkan dua area. align-items membantu merapikan posisi vertikal. gap membantu memberi jarak antar link tanpa margin acak.",
    },
    {
      id: "build-navbar-with-flexbox-html",
      type: "code-example",
      title: "HTML navbar sederhana",
      language: "html",
      code: `<nav class="nav">
  <a class="brand" href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Roadmap</a>
    <a href="#">Login</a>
  </div>
</nav>`,
      explanation:
        "Elemen nav memberi makna navigasi. .nav-list membungkus link menu agar jaraknya bisa diatur bersama.",
    },
    {
      id: "build-navbar-with-flexbox-css",
      type: "code-example",
      title: "CSS navbar dengan Flexbox",
      language: "css",
      code: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.nav-list {
  display: flex;
  gap: 12px;
}`,
      explanation:
        "Flexbox dipakai di .nav untuk memisahkan brand dan menu. Flexbox juga dipakai di .nav-list untuk menyusun link menu.",
    },
    {
      id: "build-navbar-with-flexbox-callout",
      type: "callout",
      variant: "tip",
      title: "Gunakan nav untuk navigasi",
      content:
        "Gunakan elemen nav untuk area navigasi utama. Jangan membuat semua navbar hanya dengan div jika sebenarnya bagian itu adalah navigasi.",
    },
    {
      id: "build-navbar-with-flexbox-quick-check",
      type: "quick-check",
      question:
        "Kalau brand ingin di kiri dan menu ingin di kanan, property Flexbox mana yang paling sesuai?",
      options: [
        "font-size: 16px",
        "justify-content: space-between",
        "border-radius: 8px",
        "color: blue",
      ],
      correctAnswer: "justify-content: space-between",
      explanation:
        "justify-content: space-between memberi jarak antara item di awal dan akhir container.",
    },
    {
      id: "build-navbar-with-flexbox-coding-practice",
      type: "coding-practice",
      challengeId: "build-flexbox-navbar",
    },
    {
      id: "build-navbar-with-flexbox-summary",
      type: "summary",
      points: [
        "Flexbox cocok untuk navbar satu baris.",
        "justify-content membantu mengatur posisi horizontal.",
        "align-items membantu merapikan posisi vertikal.",
        "gap lebih rapi daripada memberi margin acak pada setiap link.",
        "Berikutnya kamu akan melihat layout dua arah dengan CSS Grid.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "build-navbar-with-flexbox-intro",
      "build-navbar-with-flexbox-html",
      "build-navbar-with-flexbox-css",
      "build-navbar-with-flexbox-quick-check",
      "build-navbar-with-flexbox-coding-practice",
      "build-navbar-with-flexbox-summary",
    ],
  },
};

export const cssGridBasicLesson: Lesson = {
  id: "css-grid-basic",
  trackId: "frontend-engineering",
  moduleId: "flexbox-grid-layout",
  title: "Grid Dasar",
  slug: "css-grid-basic",
  description: "Pahami CSS Grid sebagai cara menyusun elemen dalam baris dan kolom.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Memahami CSS Grid sebagai layout dua arah",
    "Menggunakan display: grid",
    "Menggunakan grid-template-columns",
    "Menggunakan gap",
    "Membuat card grid sederhana",
  ],
  skillTags: ["CSS", "Grid", "Layout"],
  blocks: [
    {
      id: "css-grid-basic-intro",
      type: "text",
      title: "Grid menyusun baris dan kolom",
      content:
        "CSS Grid cocok untuk layout dua arah: baris dan kolom. Grid container dibuat dengan display: grid. grid-template-columns menentukan struktur kolom. gap memberi jarak antar item.\n\nGrid sering dipakai untuk card gallery, product grid, dashboard section, atau daftar item yang perlu tersusun dalam beberapa kolom.",
    },
    {
      id: "css-grid-basic-html",
      type: "code-example",
      title: "HTML card grid",
      language: "html",
      code: `<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</section>`,
      explanation:
        ".cards akan menjadi grid container. Setiap .card menjadi item di dalam grid.",
    },
    {
      id: "css-grid-basic-css",
      type: "code-example",
      title: "CSS grid sederhana",
      language: "css",
      code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
      explanation:
        "display: grid mengaktifkan Grid. grid-template-columns membuat tiga kolom. gap memberi jarak antar card.",
    },
    {
      id: "css-grid-basic-callout",
      type: "callout",
      variant: "tip",
      title: "Jangan memaksa Flexbox untuk semua layout",
      content:
        "Jika layout butuh banyak baris dan kolom, Grid sering membuat struktur lebih jelas daripada memaksa Flexbox.",
    },
    {
      id: "css-grid-basic-quick-check",
      type: "quick-check",
      question:
        "Property apa yang biasanya dipakai untuk menentukan jumlah atau ukuran kolom di CSS Grid?",
      options: [
        "font-size",
        "text-align",
        "grid-template-columns",
        "justify-content",
      ],
      correctAnswer: "grid-template-columns",
      explanation:
        "grid-template-columns mengatur struktur kolom dalam grid container.",
    },
    {
      id: "css-grid-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-grid-card-layout",
    },
    {
      id: "css-grid-basic-summary",
      type: "summary",
      points: [
        "Grid cocok untuk layout baris dan kolom.",
        "display: grid dipasang di parent.",
        "grid-template-columns menentukan kolom.",
        "gap memberi jarak antar card.",
        "Berikutnya kamu akan belajar kapan memakai Flexbox atau Grid.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-grid-basic-intro",
      "css-grid-basic-html",
      "css-grid-basic-css",
      "css-grid-basic-quick-check",
      "css-grid-basic-coding-practice",
      "css-grid-basic-summary",
    ],
  },
};

export const flexboxVsGridDecisionLesson: Lesson = {
  id: "flexbox-vs-grid-decision",
  trackId: "frontend-engineering",
  moduleId: "flexbox-grid-layout",
  title: "Kapan Pakai Flexbox atau Grid?",
  slug: "flexbox-vs-grid-decision",
  description:
    "Pelajari aturan sederhana untuk memilih Flexbox atau Grid dalam layout CSS.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami Flexbox cocok untuk layout satu arah",
    "Memahami Grid cocok untuk layout dua arah",
    "Memilih tool layout berdasarkan bentuk masalah",
    "Menghindari memaksa satu tool untuk semua layout",
  ],
  skillTags: ["CSS", "Flexbox", "Grid", "Layout Decision"],
  blocks: [
    {
      id: "flexbox-vs-grid-decision-intro",
      type: "text",
      title: "Pilih berdasarkan masalah layout",
      content:
        "Pakai Flexbox saat fokusnya menyusun item dalam satu baris atau satu kolom. Pakai Grid saat kamu butuh baris dan kolom.\n\nNavbar biasanya cocok dengan Flexbox. Card gallery biasanya cocok dengan Grid. Banyak UI nyata memakai keduanya bersama-sama: Grid untuk struktur besar, Flexbox untuk isi kecil di dalam card atau navbar.",
    },
    {
      id: "flexbox-vs-grid-decision-cases",
      type: "text",
      title: "Contoh keputusan layout",
      content:
        "Beberapa keputusan beginner yang bisa kamu pakai:\n\n- Navbar: Flexbox.\n- Button group: Flexbox.\n- Product card grid: Grid.\n- Dashboard summary cards: Grid.\n- Isi kecil di dalam card: Flexbox.\n\nAturannya bukan hafalan kaku. Lihat dulu apakah masalahnya satu arah atau dua arah.",
    },
    {
      id: "flexbox-vs-grid-decision-quick-check",
      type: "quick-check",
      question:
        "Kalau kamu ingin membuat gallery card 3 kolom, layout tool mana yang biasanya lebih cocok?",
      options: [
        "padding",
        "Flexbox selalu",
        "Grid",
        "color",
      ],
      correctAnswer: "Grid",
      explanation:
        "Grid lebih cocok untuk layout dua arah seperti baris dan kolom.",
    },
    {
      id: "flexbox-vs-grid-decision-coding-practice",
      type: "coding-practice",
      challengeId: "choose-flexbox-grid-layout",
    },
    {
      id: "flexbox-vs-grid-decision-summary",
      type: "summary",
      points: [
        "Flexbox cocok untuk satu arah.",
        "Grid cocok untuk dua arah.",
        "Keduanya bisa dipakai bersama.",
        "Pilih berdasarkan masalah layout, bukan karena hafalan.",
        "Berikutnya kamu akan menguji pemahaman Flexbox dan Grid.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "flexbox-vs-grid-decision-intro",
      "flexbox-vs-grid-decision-cases",
      "flexbox-vs-grid-decision-quick-check",
      "flexbox-vs-grid-decision-coding-practice",
      "flexbox-vs-grid-decision-summary",
    ],
  },
};

export const flexboxGridLayoutAssessmentLesson: Lesson = {
  id: "flexbox-grid-layout-assessment",
  trackId: "frontend-engineering",
  moduleId: "flexbox-grid-layout",
  title: "Uji Kompetensi Flexbox and Grid Layout",
  slug: "flexbox-grid-layout-assessment",
  description:
    "Cek kesiapan kamu menyusun navbar, card grid, dan memilih Flexbox atau Grid dengan tepat.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 55,
  objectives: [
    "Mengecek pemahaman Flexbox",
    "Mengecek kemampuan membuat navbar sederhana",
    "Mengecek pemahaman Grid",
    "Mengecek kemampuan membuat card grid",
    "Mengecek kemampuan memilih Flexbox atau Grid",
    "Mengarahkan learner membaca dokumentasi resmi CSS layout dengan fokus",
  ],
  skillTags: ["CSS", "Flexbox", "Grid", "Checkpoint"],
  blocks: [
    {
      id: "flexbox-grid-layout-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini merangkum Flexbox dan Grid Layout. Kamu akan mengecek Flexbox sebagai layout satu arah, Grid sebagai layout baris dan kolom, display: flex, display: grid, gap, justify-content, align-items, grid-template-columns, dan keputusan kapan memakai masing-masing.",
    },
    {
      id: "flexbox-grid-layout-assessment-quiz-block",
      type: "quiz",
      quizId: "flexbox-grid-layout-assessment-quiz",
    },
    {
      id: "flexbox-grid-layout-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-responsive-ish-card-section",
    },
    {
      id: "flexbox-grid-layout-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca MDN secara terarah",
      description:
        "Gunakan dokumentasi resmi ini untuk menguatkan pemahaman Flexbox dan Grid. Fokus pada konsep yang sudah kamu pakai di latihan.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Basic concepts of flexbox",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox",
          focus: [
            "flex container",
            "flex item",
            "main axis dan cross axis secara ringan",
          ],
          ignoreForNow: [
            "advanced ordering",
            "nested flex patterns",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Aligning items in a flex container",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container",
          focus: [
            "justify-content",
            "align-items",
            "gap pada flex container",
          ],
          ignoreForNow: [
            "advanced alignment edge cases",
            "writing modes",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Basic concepts of grid layout",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout",
          focus: [
            "grid container",
            "grid item",
            "baris dan kolom",
          ],
          ignoreForNow: [
            "subgrid",
            "advanced grid placement",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "grid-template-columns",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
          focus: [
            "membuat kolom",
            "repeat",
            "fr unit secara ringan",
          ],
          ignoreForNow: [
            "named lines",
            "complex track sizing",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "gap",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
          focus: [
            "jarak antar item",
            "gap di Flexbox",
            "gap di Grid",
          ],
          ignoreForNow: [
            "animation",
            "advanced layout systems",
          ],
        },
      ],
      followUpAction:
        "Kembali ke latihan kamu dan tunjukkan bagian mana yang memakai Flexbox, bagian mana yang memakai Grid, dan alasan memilih masing-masing.",
    },
    {
      id: "flexbox-grid-layout-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu memahami Flexbox untuk layout satu arah.",
        "Kamu membuktikan bahwa kamu memahami Grid untuk layout baris dan kolom.",
        "Kamu membuktikan bahwa kamu bisa memakai gap, justify-content, align-items, dan grid-template-columns.",
        "Jika checkpoint belum lulus, review lagi Flexbox, Grid, gap, justify-content, align-items, grid-template-columns, dan aturan memilih layout.",
        "Setelah memahami Flexbox dan Grid, berikutnya kamu akan belajar membuat tampilan yang lebih responsif dan konsisten di berbagai ukuran layar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "flexbox-grid-layout-assessment-recap",
      "flexbox-grid-layout-assessment-quiz-block",
      "flexbox-grid-layout-assessment-coding-practice",
      "flexbox-grid-layout-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const flexboxGridLayoutAssessmentQuiz: Quiz = {
  id: "flexbox-grid-layout-assessment-quiz",
  lessonId: "flexbox-grid-layout-assessment",
  title: "Uji Kompetensi Flexbox and Grid Layout",
  passingScore: 70,
  questions: [
    {
      id: "flexbox-grid-layout-assessment-q1",
      type: "multiple-choice",
      question: "Kapan Flexbox biasanya paling cocok dipakai?",
      options: [
        "Untuk menyusun item dalam satu arah, seperti baris atau kolom",
        "Untuk menyimpan data ke database",
        "Untuk mengganti semua tag HTML",
        "Untuk membuat Git commit",
      ],
      correctAnswer:
        "Untuk menyusun item dalam satu arah, seperti baris atau kolom",
      explanation:
        "Flexbox cocok untuk layout satu arah, misalnya navbar, button group, atau isi kecil di dalam card.",
    },
    {
      id: "flexbox-grid-layout-assessment-q2",
      type: "multiple-choice",
      question: "Apa yang terjadi saat sebuah parent diberi display: flex?",
      options: [
        "Semua CSS dihapus",
        "Parent menjadi flex container dan anak langsungnya menjadi flex item",
        "Halaman otomatis deploy",
        "Browser membuat database baru",
      ],
      correctAnswer:
        "Parent menjadi flex container dan anak langsungnya menjadi flex item",
      explanation:
        "display: flex dipasang pada parent. Anak langsung di dalam parent itu menjadi flex item.",
    },
    {
      id: "flexbox-grid-layout-assessment-q3",
      type: "multiple-choice",
      question: "Property apa yang memberi jarak antar item di Flexbox atau Grid?",
      options: ["color", "font-size", "gap", "href"],
      correctAnswer: "gap",
      explanation:
        "gap memberi jarak antar item. Ini lebih rapi daripada memberi margin acak pada setiap item.",
    },
    {
      id: "flexbox-grid-layout-assessment-q4",
      type: "multiple-choice",
      question: "Dalam Flexbox, justify-content biasanya mengatur apa?",
      options: [
        "Nama repository GitHub",
        "Isi attribute alt",
        "Jenis file HTML",
        "Posisi item pada arah utama",
      ],
      correctAnswer: "Posisi item pada arah utama",
      explanation:
        "justify-content mengatur distribusi item pada main axis atau arah utama Flexbox.",
    },
    {
      id: "flexbox-grid-layout-assessment-q5",
      type: "multiple-choice",
      question: "Dalam Flexbox, align-items biasanya membantu apa?",
      options: [
        "Mengatur URL halaman",
        "Mengubah HTML menjadi CSS",
        "Mengatur posisi item pada arah silang",
        "Membuat branch Git",
      ],
      correctAnswer: "Mengatur posisi item pada arah silang",
      explanation:
        "align-items mengatur alignment item pada cross axis atau arah silang Flexbox.",
    },
    {
      id: "flexbox-grid-layout-assessment-q6",
      type: "multiple-choice",
      question: "Kapan CSS Grid biasanya lebih cocok daripada Flexbox?",
      options: [
        "Saat membuat command terminal",
        "Saat menulis title di head",
        "Saat membuat link href",
        "Saat layout butuh baris dan kolom",
      ],
      correctAnswer: "Saat layout butuh baris dan kolom",
      explanation:
        "Grid cocok untuk layout dua arah, seperti card grid, product gallery, atau dashboard section.",
    },
    {
      id: "flexbox-grid-layout-assessment-q7",
      type: "multiple-choice",
      question: "Property apa yang mengaktifkan CSS Grid pada container?",
      options: [
        "display: block",
        "display: flex",
        "display: grid",
        "grid: true",
      ],
      correctAnswer: "display: grid",
      explanation:
        "display: grid membuat sebuah elemen menjadi grid container.",
    },
    {
      id: "flexbox-grid-layout-assessment-q8",
      type: "multiple-choice",
      question: "Property apa yang menentukan kolom dalam CSS Grid?",
      options: [
        "grid-template-columns",
        "align-items",
        "text-decoration",
        "button type",
      ],
      correctAnswer: "grid-template-columns",
      explanation:
        "grid-template-columns menentukan struktur kolom di grid container.",
    },
    {
      id: "flexbox-grid-layout-assessment-q9",
      type: "multiple-choice",
      question: "Mana keputusan layout yang paling masuk akal?",
      options: [
        "Semua layout wajib memakai Grid",
        "Semua layout wajib memakai Flexbox",
        "Navbar sederhana memakai Flexbox, card gallery memakai Grid",
        "Layout CSS harus selalu memakai JavaScript",
      ],
      correctAnswer:
        "Navbar sederhana memakai Flexbox, card gallery memakai Grid",
      explanation:
        "Navbar biasanya satu arah sehingga Flexbox cocok. Card gallery biasanya butuh baris dan kolom sehingga Grid cocok.",
    },
    {
      id: "flexbox-grid-layout-assessment-q10",
      type: "multiple-choice",
      question: "Apa prinsip terbaik saat memilih Flexbox atau Grid?",
      options: [
        "Pilih berdasarkan warna favorit",
        "Selalu pakai yang baru dipelajari terakhir",
        "Hindari keduanya dan pakai margin acak",
        "Pilih berdasarkan masalah layout yang sedang diselesaikan",
      ],
      correctAnswer: "Pilih berdasarkan masalah layout yang sedang diselesaikan",
      explanation:
        "Pilih layout tool berdasarkan bentuk masalah: satu arah cenderung Flexbox, dua arah cenderung Grid. Keduanya bisa dipakai bersama.",
    },
  ],
};

export const practiceCssFlexboxBasicChallenge: CodingChallenge = {
  id: "practice-css-flexbox-basic",
  lessonId: "css-flexbox-basic",
  title: "Menyusun card dengan Flexbox",
  description:
    "Latihan memakai display flex, gap, dan align-items untuk menyusun card dalam satu baris.",
  instructions: [
    "Targetkan .layout.",
    "Tambahkan display: flex.",
    "Tambahkan gap.",
    "Tambahkan align-items.",
    "Targetkan .card.",
    "Tambahkan padding.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<div class="layout">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</div>`,
    css: `.layout {
  border: 1px solid #3f3f46;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<div class="layout">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</div>`,
    css: `.layout {
  display: flex;
  gap: 16px;
  align-items: center;
  border: 1px solid #3f3f46;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  checklist: [
    ".layout memakai display: flex.",
    ".layout punya gap dan align-items.",
    ".card punya padding agar isi tidak menempel.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-layout-selector", label: "Ada selector .layout.", type: "cssSelectorExists", target: ".layout" },
      { id: "layout-display", label: ".layout punya property display.", type: "cssSelectorPropertyExists", target: ".layout", property: "display" },
      { id: "layout-gap", label: ".layout punya property gap.", type: "cssSelectorPropertyExists", target: ".layout", property: "gap" },
      { id: "layout-align-items", label: ".layout punya property align-items.", type: "cssSelectorPropertyExists", target: ".layout", property: "align-items" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Layout"],
};

export const buildFlexboxNavbarChallenge: CodingChallenge = {
  id: "build-flexbox-navbar",
  lessonId: "build-navbar-with-flexbox",
  title: "Membuat navbar sederhana",
  description:
    "Latihan membuat navbar sederhana dengan Flexbox tanpa JavaScript.",
  instructions: [
    "Targetkan .nav.",
    "Tambahkan display: flex.",
    "Tambahkan justify-content.",
    "Tambahkan align-items.",
    "Tambahkan padding.",
    "Targetkan .nav-list.",
    "Tambahkan display: flex.",
    "Tambahkan gap.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<nav class="nav">
  <a class="brand" href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Roadmap</a>
    <a href="#">Login</a>
  </div>
</nav>`,
    css: `.nav {
  border: 1px solid #3f3f46;
}

.nav-list a {
  color: #d4d4d8;
}`,
    js: "",
  },
  solutionCode: {
    html: `<nav class="nav">
  <a class="brand" href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Roadmap</a>
    <a href="#">Login</a>
  </div>
</nav>`,
    css: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #3f3f46;
}

.nav-list {
  display: flex;
  gap: 12px;
}

.nav-list a {
  color: #d4d4d8;
}`,
    js: "",
  },
  checklist: [
    ".nav memakai Flexbox.",
    ".nav-list memakai Flexbox dan gap.",
    "Brand dan menu terlihat lebih rapi dalam satu baris.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-nav-selector", label: "Ada selector .nav.", type: "cssSelectorExists", target: ".nav" },
      { id: "nav-display", label: ".nav punya property display.", type: "cssSelectorPropertyExists", target: ".nav", property: "display" },
      { id: "nav-justify-content", label: ".nav punya property justify-content.", type: "cssSelectorPropertyExists", target: ".nav", property: "justify-content" },
      { id: "nav-align-items", label: ".nav punya property align-items.", type: "cssSelectorPropertyExists", target: ".nav", property: "align-items" },
      { id: "nav-padding", label: ".nav punya property padding.", type: "cssSelectorPropertyExists", target: ".nav", property: "padding" },
      { id: "has-nav-list-selector", label: "Ada selector .nav-list.", type: "cssSelectorExists", target: ".nav-list" },
      { id: "nav-list-display", label: ".nav-list punya property display.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "display" },
      { id: "nav-list-gap", label: ".nav-list punya property gap.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "gap" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Navbar"],
};

export const practiceCssGridCardLayoutChallenge: CodingChallenge = {
  id: "practice-css-grid-card-layout",
  lessonId: "css-grid-basic",
  title: "Membuat card grid sederhana",
  description:
    "Latihan memakai CSS Grid untuk menyusun beberapa card dalam kolom.",
  instructions: [
    "Targetkan .cards.",
    "Tambahkan display: grid.",
    "Tambahkan grid-template-columns.",
    "Tambahkan gap.",
    "Targetkan .card.",
    "Tambahkan padding.",
    "Tambahkan border.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</section>`,
    css: `.cards {
  max-width: 720px;
}

.card {
  background: #18181b;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</section>`,
    css: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 720px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
  background: #18181b;
}`,
    js: "",
  },
  checklist: [
    ".cards memakai display: grid.",
    ".cards punya grid-template-columns dan gap.",
    ".card punya padding dan border.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-cards-selector", label: "Ada selector .cards.", type: "cssSelectorExists", target: ".cards" },
      { id: "cards-display", label: ".cards punya property display.", type: "cssSelectorPropertyExists", target: ".cards", property: "display" },
      { id: "cards-grid-template-columns", label: ".cards punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".cards", property: "grid-template-columns" },
      { id: "cards-gap", label: ".cards punya property gap.", type: "cssSelectorPropertyExists", target: ".cards", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Grid", "Layout"],
};

export const chooseFlexboxGridLayoutChallenge: CodingChallenge = {
  id: "choose-flexbox-grid-layout",
  lessonId: "flexbox-vs-grid-decision",
  title: "Menggabungkan Flexbox dan Grid",
  description:
    "Latihan memakai Grid untuk kumpulan card dan Flexbox untuk isi kecil di dalam card.",
  instructions: [
    "Gunakan .cards sebagai grid container.",
    "Tambahkan display: grid pada .cards.",
    "Tambahkan grid-template-columns pada .cards.",
    "Tambahkan gap pada .cards.",
    "Gunakan .card sebagai flex container untuk isi card.",
    "Tambahkan display: flex pada .card.",
    "Tambahkan gap pada .card.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="cards">
  <article class="card">
    <strong>HTML</strong>
    <span>Struktur halaman</span>
  </article>
  <article class="card">
    <strong>CSS</strong>
    <span>Tampilan halaman</span>
  </article>
</section>`,
    css: `.cards {
  max-width: 720px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="cards">
  <article class="card">
    <strong>HTML</strong>
    <span>Struktur halaman</span>
  </article>
  <article class="card">
    <strong>CSS</strong>
    <span>Tampilan halaman</span>
  </article>
</section>`,
    css: `.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 720px;
}

.card {
  display: flex;
  gap: 8px;
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  checklist: [
    ".cards memakai Grid untuk kumpulan card.",
    ".card memakai Flexbox untuk isi kecil di dalam card.",
    "Keduanya memakai gap.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-cards-selector", label: "Ada selector .cards.", type: "cssSelectorExists", target: ".cards" },
      { id: "cards-display", label: ".cards punya property display.", type: "cssSelectorPropertyExists", target: ".cards", property: "display" },
      { id: "cards-grid-template-columns", label: ".cards punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".cards", property: "grid-template-columns" },
      { id: "cards-gap", label: ".cards punya property gap.", type: "cssSelectorPropertyExists", target: ".cards", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-display", label: ".card punya property display.", type: "cssSelectorPropertyExists", target: ".card", property: "display" },
      { id: "card-gap", label: ".card punya property gap.", type: "cssSelectorPropertyExists", target: ".card", property: "gap" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Grid", "Layout Decision"],
};

export const buildResponsiveIshCardSectionChallenge: CodingChallenge = {
  id: "build-responsive-ish-card-section",
  lessonId: "flexbox-grid-layout-assessment",
  title: "Membuat section navbar dan card grid",
  description:
    "Checkpoint praktik untuk membuat navbar dengan Flexbox dan card section dengan Grid.",
  instructions: [
    "Buat navbar sederhana dengan .nav dan .nav-list.",
    "Gunakan Flexbox untuk navbar.",
    "Buat section .cards.",
    "Gunakan Grid untuk card section.",
    "Tambahkan gap pada navbar/menu dan grid.",
    "Tambahkan padding pada .card.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<nav class="nav">
  <a href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Lessons</a>
  </div>
</nav>

<section class="cards">
  <article class="card">Flexbox</article>
  <article class="card">Grid</article>
  <article class="card">Layout</article>
</section>`,
    css: `.nav {
  border: 1px solid #3f3f46;
}

.nav-list a {
  color: #d4d4d8;
}

.cards {
  margin-top: 20px;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<nav class="nav">
  <a href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Lessons</a>
  </div>
</nav>

<section class="cards">
  <article class="card">Flexbox</article>
  <article class="card">Grid</article>
  <article class="card">Layout</article>
</section>`,
    css: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #3f3f46;
}

.nav-list {
  display: flex;
  gap: 12px;
}

.nav-list a {
  color: #d4d4d8;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  checklist: [
    "Navbar memakai Flexbox.",
    "Menu navbar memakai gap.",
    "Card section memakai Grid.",
    "Card punya padding.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-nav-selector", label: "Ada selector .nav.", type: "cssSelectorExists", target: ".nav" },
      { id: "nav-display", label: ".nav punya property display.", type: "cssSelectorPropertyExists", target: ".nav", property: "display" },
      { id: "nav-justify-content", label: ".nav punya property justify-content.", type: "cssSelectorPropertyExists", target: ".nav", property: "justify-content" },
      { id: "has-nav-list-selector", label: "Ada selector .nav-list.", type: "cssSelectorExists", target: ".nav-list" },
      { id: "nav-list-display", label: ".nav-list punya property display.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "display" },
      { id: "nav-list-gap", label: ".nav-list punya property gap.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "gap" },
      { id: "has-cards-selector", label: "Ada selector .cards.", type: "cssSelectorExists", target: ".cards" },
      { id: "cards-display", label: ".cards punya property display.", type: "cssSelectorPropertyExists", target: ".cards", property: "display" },
      { id: "cards-grid-template-columns", label: ".cards punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".cards", property: "grid-template-columns" },
      { id: "cards-gap", label: ".cards punya property gap.", type: "cssSelectorPropertyExists", target: ".cards", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Grid", "Checkpoint"],
};

export const flexboxGridLayoutLessons: Lesson[] = [
  cssFlexboxBasicLesson,
  buildNavbarWithFlexboxLesson,
  cssGridBasicLesson,
  flexboxVsGridDecisionLesson,
  flexboxGridLayoutAssessmentLesson,
];

export const flexboxGridLayoutQuizzes: Quiz[] = [
  flexboxGridLayoutAssessmentQuiz,
];

export const flexboxGridLayoutChallenges: CodingChallenge[] = [
  practiceCssFlexboxBasicChallenge,
  buildFlexboxNavbarChallenge,
  practiceCssGridCardLayoutChallenge,
  chooseFlexboxGridLayoutChallenge,
  buildResponsiveIshCardSectionChallenge,
];
