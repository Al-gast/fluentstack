import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const cssCoreMechanicsModule: Module = {
  id: "css-core-mechanics",
  trackId: "frontend-engineering",
  title: "CSS Core Mechanics",
  slug: "css-core-mechanics",
  description:
    "Pelajari cara CSS memberi tampilan pada HTML melalui selector, property, value, cascade, dan specificity dasar.",
  order: 5,
  lessonIds: [
    "what-is-css",
    "css-selector-declaration-basic",
    "cascade-specificity-basic",
    "css-core-mechanics-assessment",
  ],
  estimatedHours: 3,
  skillTags: ["CSS", "Selectors", "Cascade", "Specificity"],
};

export const whatIsCssLesson: Lesson = {
  id: "what-is-css",
  trackId: "frontend-engineering",
  moduleId: "css-core-mechanics",
  title: "Apa Itu CSS?",
  slug: "what-is-css",
  description:
    "Pahami peran CSS sebagai bahasa yang mengatur tampilan halaman HTML.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami CSS sebagai bahasa untuk mengatur tampilan HTML",
    "Membedakan peran HTML dan CSS",
    "Memberi style sederhana pada heading dan paragraf",
  ],
  skillTags: ["CSS", "HTML", "Styling"],
  blocks: [
    {
      id: "what-is-css-intro",
      type: "text",
      title: "CSS memberi tampilan pada struktur HTML",
      content:
        "Di module sebelumnya, kamu sudah menulis HTML untuk struktur, form, gambar, dan makna konten. CSS adalah bahasa yang mengatur tampilan HTML. CSS bisa mengatur warna, ukuran teks, jarak, border, layout, dan nanti tampilan responsive. HTML tetap menentukan struktur dan makna; CSS membuat struktur itu lebih jelas dan nyaman dilihat.",
    },
    {
      id: "what-is-css-code-example",
      type: "code-example",
      title: "HTML yang diberi style CSS",
      language: "html",
      code: `<h1>Belajar CSS</h1>
<p>CSS membuat halaman lebih enak dibaca.</p>

<style>
  h1 {
    font-size: 32px;
  }

  p {
    color: #d4d4d8;
  }
</style>`,
      explanation:
        "h1 dan p dipilih dari HTML. font-size mengubah ukuran heading. color mengubah warna teks paragraf. Fokus dulu pada ide bahwa CSS memilih elemen, lalu memberi aturan tampilan.",
    },
    {
      id: "what-is-css-structure-note",
      type: "callout",
      variant: "important",
      title: "CSS tidak menggantikan makna HTML",
      content:
        "Jangan memakai CSS untuk menutupi struktur HTML yang salah. Pilih HTML yang benar dulu, seperti h1 untuk heading atau button untuk aksi. Setelah maknanya benar, CSS dipakai untuk memperbaiki tampilan.",
    },
    {
      id: "what-is-css-quick-check",
      type: "quick-check",
      question:
        "Kalau HTML sudah menentukan bahwa sebuah teks adalah h1, CSS biasanya dipakai untuk apa?",
      options: [
        "Mengatur tampilan h1",
        "Mengubah h1 menjadi database",
        "Mengirim data ke server",
        "Membuat URL baru",
      ],
      correctAnswer: "Mengatur tampilan h1",
      explanation:
        "HTML menentukan struktur dan makna. CSS mengatur bagaimana elemen itu terlihat, misalnya ukuran, warna, jarak, dan layout.",
    },
    {
      id: "what-is-css-coding-practice",
      type: "coding-practice",
      challengeId: "style-basic-html-text",
    },
    {
      id: "what-is-css-summary",
      type: "summary",
      points: [
        "HTML mengatur struktur dan makna halaman.",
        "CSS mengatur tampilan halaman.",
        "CSS bekerja dengan memilih elemen HTML lalu memberi aturan visual.",
        "Berikutnya, kamu akan belajar selector, property, dan value.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-is-css-intro",
      "what-is-css-code-example",
      "what-is-css-structure-note",
      "what-is-css-quick-check",
      "what-is-css-coding-practice",
      "what-is-css-summary",
    ],
  },
};

export const cssSelectorDeclarationBasicLesson: Lesson = {
  id: "css-selector-declaration-basic",
  trackId: "frontend-engineering",
  moduleId: "css-core-mechanics",
  title: "Selector dan Declaration Dasar",
  slug: "css-selector-declaration-basic",
  description:
    "Pelajari cara membaca aturan CSS melalui selector, property, dan value.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami selector sebagai target elemen HTML",
    "Memahami property dan value dalam declaration",
    "Membaca declaration block sederhana",
  ],
  skillTags: ["CSS", "Selectors", "Styling"],
  blocks: [
    {
      id: "css-selector-declaration-basic-intro",
      type: "text",
      title: "Cara membaca aturan CSS",
      content:
        "Aturan CSS punya pola dasar: selector memilih target, lalu declaration block berisi aturan tampilan. Di dalam declaration block, property menentukan bagian tampilan yang diatur, dan value menentukan nilainya. Satu declaration adalah pasangan property dan value.",
    },
    {
      id: "css-selector-declaration-basic-code-example",
      type: "code-example",
      title: "Contoh selector, property, dan value",
      language: "css",
      code: `.card {
  background: #18181b;
  padding: 16px;
  border-radius: 12px;
}`,
      explanation:
        ".card memilih elemen dengan class=\"card\". background mengatur warna latar, padding mengatur ruang bagian dalam, dan border-radius membulatkan sudut. Nilai seperti #18181b, 16px, dan 12px adalah value.",
    },
    {
      id: "css-selector-declaration-basic-selector-types",
      type: "text",
      title: "Tiga selector awal",
      content:
        "Element selector menargetkan nama elemen, misalnya p. Class selector menargetkan class dan memakai titik, misalnya .card. ID selector menargetkan id dan memakai pagar, misalnya #main-title. Untuk sekarang, cukup kenali bentuknya dan kapan kamu sedang menargetkan element, class, atau id.",
    },
    {
      id: "css-selector-declaration-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan lupa titik untuk class selector",
      content:
        ".card menargetkan elemen dengan class=\"card\". Jika kamu menulis card tanpa titik, CSS akan mencari elemen bernama <card>, bukan class card yang biasanya kamu maksud.",
    },
    {
      id: "css-selector-declaration-basic-quick-check",
      type: "quick-check",
      question: "Selector mana yang menargetkan elemen dengan class=\"card\"?",
      options: [".card", "#card", "card", "*card"],
      correctAnswer: ".card",
      explanation:
        "Class selector memakai titik di depan nama class. #card adalah id selector, sedangkan card tanpa titik menargetkan elemen bernama card.",
    },
    {
      id: "css-selector-declaration-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-selectors-declarations",
    },
    {
      id: "css-selector-declaration-basic-summary",
      type: "summary",
      points: [
        "Selector memilih target.",
        "Property menentukan apa yang diatur.",
        "Value menentukan nilainya.",
        "Class selector memakai titik.",
        "Berikutnya, kamu akan melihat kenapa kadang satu aturan CSS menang dari aturan lain.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-selector-declaration-basic-intro",
      "css-selector-declaration-basic-code-example",
      "css-selector-declaration-basic-selector-types",
      "css-selector-declaration-basic-common-mistake",
      "css-selector-declaration-basic-quick-check",
      "css-selector-declaration-basic-coding-practice",
      "css-selector-declaration-basic-summary",
    ],
  },
};

export const cascadeSpecificityBasicLesson: Lesson = {
  id: "cascade-specificity-basic",
  trackId: "frontend-engineering",
  moduleId: "css-core-mechanics",
  title: "Cascade dan Specificity Dasar",
  slug: "cascade-specificity-basic",
  description:
    "Pahami kenapa aturan CSS tertentu menang ketika beberapa aturan mengatur elemen yang sama.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami cascade sebagai proses pemilihan aturan CSS",
    "Memahami specificity dasar antara id, class, dan element selector",
    "Melatih debugging CSS sederhana tanpa langsung memakai !important",
  ],
  skillTags: ["CSS", "Cascade", "Specificity", "Debugging"],
  blocks: [
    {
      id: "cascade-specificity-basic-intro",
      type: "text",
      title: "Kadang satu elemen mendapat beberapa aturan",
      content:
        "Satu elemen HTML bisa terkena beberapa aturan CSS sekaligus. Browser perlu menentukan aturan mana yang berlaku. Cascade adalah proses browser memilih aturan yang menang. Kamu belum perlu menghafal detail angka specificity. Mulai dari aturan praktis dulu.",
    },
    {
      id: "cascade-specificity-basic-code-example",
      type: "code-example",
      title: "Class selector bisa menang dari element selector",
      language: "html",
      code: `<p class="intro">Belajar cascade CSS.</p>

<style>
  p {
    color: gray;
  }

  .intro {
    color: blue;
  }
</style>`,
      explanation:
        "Paragraf ini menjadi blue karena .intro adalah class selector dan lebih spesifik daripada selector p. Keduanya mengatur color, tetapi selector yang lebih spesifik biasanya menang.",
    },
    {
      id: "cascade-specificity-basic-specificity-order",
      type: "text",
      title: "Urutan kekuatan yang cukup untuk awal",
      content:
        "Untuk tahap pemula, ingat urutan sederhana ini: id selector lebih kuat, class selector lebih kuat daripada element selector, dan element selector adalah yang paling lemah dari tiga ini. Jika selector punya kekuatan yang mirip, aturan yang muncul belakangan bisa menang.",
    },
    {
      id: "cascade-specificity-basic-important-warning",
      type: "callout",
      variant: "warning",
      title: "Jangan langsung memakai !important",
      content:
        "Saat CSS tidak sesuai harapan, jangan langsung menambahkan !important. Cek dulu target selector, kekuatan selector, dan urutan rule. Ini membuat debugging CSS lebih sehat sejak awal.",
    },
    {
      id: "cascade-specificity-basic-quick-check",
      type: "quick-check",
      question:
        "Jika <p class=\"intro\"> punya dua aturan: p { color: gray; } dan .intro { color: blue; }, warna mana yang biasanya menang?",
      options: ["blue", "gray", "tidak ada warna", "browser selalu memilih acak"],
      correctAnswer: "blue",
      explanation:
        ".intro adalah class selector dan lebih spesifik daripada selector p, sehingga aturan color dari .intro biasanya menang.",
    },
    {
      id: "cascade-specificity-basic-coding-practice",
      type: "coding-practice",
      challengeId: "debug-basic-css-cascade",
    },
    {
      id: "cascade-specificity-basic-summary",
      type: "summary",
      points: [
        "Cascade menentukan aturan CSS yang berlaku.",
        "Specificity membantu browser memilih aturan yang lebih kuat.",
        "Class lebih spesifik daripada element selector.",
        "Jangan langsung memakai !important saat bingung.",
        "Berikutnya, kamu akan menguji pemahaman CSS Core Mechanics sebelum lanjut ke box model dan spacing.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "cascade-specificity-basic-intro",
      "cascade-specificity-basic-code-example",
      "cascade-specificity-basic-specificity-order",
      "cascade-specificity-basic-important-warning",
      "cascade-specificity-basic-quick-check",
      "cascade-specificity-basic-coding-practice",
      "cascade-specificity-basic-summary",
    ],
  },
};

export const cssCoreMechanicsAssessmentLesson: Lesson = {
  id: "css-core-mechanics-assessment",
  trackId: "frontend-engineering",
  moduleId: "css-core-mechanics",
  title: "Uji Kompetensi CSS Core Mechanics",
  slug: "css-core-mechanics-assessment",
  description:
    "Uji pemahaman selector, property, value, cascade, dan specificity dasar.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Mengecek pemahaman peran CSS",
    "Mengecek kemampuan membaca selector, property, dan value",
    "Mengecek pemahaman cascade dan specificity dasar",
  ],
  skillTags: ["CSS", "Selectors", "Cascade", "Specificity"],
  blocks: [
    {
      id: "css-core-mechanics-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini merangkum CSS Core Mechanics. Kamu akan mengecek peran CSS, cara membaca selector dan declaration block, perbedaan property dan value, selector element/class/id, serta kenapa cascade dan specificity membuat satu rule menang dari rule lain.",
    },
    {
      id: "css-core-mechanics-assessment-quiz-block",
      type: "quiz",
      quizId: "css-core-mechanics-assessment-quiz",
    },
    {
      id: "css-core-mechanics-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-styled-info-card",
    },
    {
      id: "css-core-mechanics-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi CSS, bukan tugas menghafal. Fokus pada bagian yang sudah kamu pakai di latihan.",
      links: [
        {
          source: "MDN Web Docs",
          title: "CSS basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics",
          focus: [
            "peran CSS",
            "cara CSS memberi style pada HTML",
            "contoh aturan CSS dasar",
          ],
          ignoreForNow: [
            "layout besar",
            "responsive design",
            "topik CSS advanced",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Basic selectors",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors",
          focus: [
            "element selector",
            "class selector",
            "id selector",
            "cara selector memilih elemen",
          ],
          ignoreForNow: [
            "combinators advanced",
            "pseudo-classes advanced",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Cascade and inheritance",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts",
          focus: [
            "cascade",
            "specificity dasar",
            "kenapa satu rule menang dari rule lain",
          ],
          ignoreForNow: [
            "full specificity scoring detail",
            "cascade layers",
          ],
        },
      ],
      followUpAction:
        "Kembali ke latihan CSS card kamu dan tunjukkan satu selector, satu property, satu value, dan satu aturan yang menang karena selector lebih spesifik.",
    },
    {
      id: "css-core-mechanics-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu bisa membedakan peran HTML dan CSS.",
        "Kamu membuktikan bahwa kamu bisa membaca selector, property, dan value.",
        "Jika belum siap, review lagi role CSS, selector/property/value, class selector, cascade, dan specificity.",
        "Setelah kamu bisa membaca aturan CSS dasar, berikutnya kamu akan belajar bagaimana ukuran dan jarak bekerja lewat box model.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-core-mechanics-assessment-recap",
      "css-core-mechanics-assessment-quiz-block",
      "css-core-mechanics-assessment-coding-practice",
      "css-core-mechanics-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const cssCoreMechanicsAssessmentQuiz: Quiz = {
  id: "css-core-mechanics-assessment-quiz",
  lessonId: "css-core-mechanics-assessment",
  title: "Assessment CSS Core Mechanics",
  passingScore: 70,
  questions: [
    {
      id: "css-core-mechanics-assessment-q1",
      type: "multiple-choice",
      question: "Apa peran utama CSS dalam halaman web?",
      options: [
        "Menyimpan data user di database",
        "Mengatur tampilan elemen HTML",
        "Mengirim request ke server",
        "Mengganti semua fungsi HTML",
      ],
      correctAnswer: "Mengatur tampilan elemen HTML",
      explanation:
        "HTML memberi struktur dan makna. CSS mengatur tampilan seperti warna, ukuran, jarak, border, dan layout.",
    },
    {
      id: "css-core-mechanics-assessment-q2",
      type: "multiple-choice",
      question: "Pada aturan .card { padding: 16px; }, bagian mana yang disebut selector?",
      options: ["padding", "16px", ".card", "{ }"],
      correctAnswer: ".card",
      explanation:
        "Selector memilih target yang akan diberi style. Dalam contoh ini, .card menargetkan elemen dengan class=\"card\".",
    },
    {
      id: "css-core-mechanics-assessment-q3",
      type: "multiple-choice",
      question: "Pada aturan p { color: blue; }, bagian mana yang disebut property?",
      options: ["p", "blue", "CSS", "color"],
      correctAnswer: "color",
      explanation:
        "Property adalah hal yang diatur. Di contoh ini, color adalah property, sedangkan blue adalah value.",
    },
    {
      id: "css-core-mechanics-assessment-q4",
      type: "multiple-choice",
      question: "Pada aturan h1 { font-size: 32px; }, bagian mana yang disebut value?",
      options: ["32px", "h1", "font-size", "declaration"],
      correctAnswer: "32px",
      explanation:
        "Value adalah nilai dari property. Di sini, font-size adalah property dan 32px adalah value.",
    },
    {
      id: "css-core-mechanics-assessment-q5",
      type: "multiple-choice",
      question: "Selector mana yang menargetkan semua elemen p?",
      options: ["#p", "p", ".p", "*p"],
      correctAnswer: "p",
      explanation:
        "p adalah element selector. Selector ini menargetkan elemen <p> di HTML.",
    },
    {
      id: "css-core-mechanics-assessment-q6",
      type: "multiple-choice",
      question: "Selector mana yang menargetkan elemen dengan class=\"card\"?",
      options: ["card", "#card", "class.card", ".card"],
      correctAnswer: ".card",
      explanation:
        "Class selector memakai titik di depan nama class. .card menargetkan elemen dengan class=\"card\".",
    },
    {
      id: "css-core-mechanics-assessment-q7",
      type: "multiple-choice",
      question: "Selector mana yang menargetkan elemen dengan id=\"main-title\"?",
      options: ["#main-title", ".main-title", "main-title", "title.main"],
      correctAnswer: "#main-title",
      explanation:
        "ID selector memakai tanda pagar. #main-title menargetkan elemen dengan id=\"main-title\".",
    },
    {
      id: "css-core-mechanics-assessment-q8",
      type: "multiple-choice",
      question: "Apa yang dibantu oleh cascade dalam CSS?",
      options: [
        "Membuat URL baru",
        "Mengubah HTML menjadi database",
        "Menentukan aturan CSS mana yang berlaku ketika ada beberapa aturan",
        "Menghapus semua selector",
      ],
      correctAnswer: "Menentukan aturan CSS mana yang berlaku ketika ada beberapa aturan",
      explanation:
        "Cascade adalah proses browser memilih aturan yang berlaku saat beberapa aturan CSS mengatur elemen yang sama.",
    },
    {
      id: "css-core-mechanics-assessment-q9",
      type: "multiple-choice",
      question: "Jika p { color: gray; } dan .intro { color: blue; } sama-sama mengatur <p class=\"intro\">, aturan mana yang biasanya menang?",
      options: [
        "p karena lebih pendek",
        "Keduanya selalu dibatalkan",
        "Browser memilih acak",
        ".intro karena class selector lebih spesifik",
      ],
      correctAnswer: ".intro karena class selector lebih spesifik",
      explanation:
        "Class selector lebih spesifik daripada element selector, sehingga .intro biasanya menang atas p untuk elemen tersebut.",
    },
    {
      id: "css-core-mechanics-assessment-q10",
      type: "multiple-choice",
      question: "Saat CSS tidak sesuai harapan, apa langkah awal yang lebih sehat daripada langsung memakai !important?",
      options: [
        "Cek target selector, specificity, dan urutan rule",
        "Menambahkan !important ke semua rule",
        "Mengubah semua selector menjadi id",
        "Menghapus semua HTML",
      ],
      correctAnswer: "Cek target selector, specificity, dan urutan rule",
      explanation:
        "Sebelum memakai !important, cek apakah selector sudah menargetkan elemen yang benar, seberapa kuat selector itu, dan urutan rule di CSS.",
    },
  ],
};

export const styleBasicHtmlTextChallenge: CodingChallenge = {
  id: "style-basic-html-text",
  lessonId: "what-is-css",
  title: "Memberi style pada teks HTML",
  description:
    "Latihan mengubah tampilan h1 dan paragraf memakai CSS sederhana.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan h1 dan beri ukuran font.",
    "Targetkan p dan beri warna teks.",
    "JS tidak perlu diubah.",
  ],
  starterCode: {
    html: `<h1>Belajar CSS</h1>
<p>CSS membuat halaman lebih enak dibaca.</p>`,
    css: `/* Tambahkan style untuk h1 dan p di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<h1>Belajar CSS</h1>
<p>CSS membuat halaman lebih enak dibaca.</p>`,
    css: `h1 {
  font-size: 32px;
}

p {
  color: #d4d4d8;
}`,
    js: "",
  },
  checklist: [
    "CSS menargetkan h1.",
    "h1 memiliki font-size.",
    "CSS menargetkan p.",
    "p memiliki color.",
    "Preview menunjukkan perubahan tampilan teks.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-h1-selector", label: "Ada selector h1.", type: "cssSelectorExists", target: "h1" },
      { id: "h1-font-size", label: "h1 punya property font-size.", type: "cssSelectorPropertyExists", target: "h1", property: "font-size" },
      { id: "has-p-selector", label: "Ada selector p.", type: "cssSelectorExists", target: "p" },
      { id: "p-color", label: "p punya property color.", type: "cssSelectorPropertyExists", target: "p", property: "color" },
    ],
  },
  skillTags: ["CSS", "HTML", "Styling"],
};

export const practiceCssSelectorsDeclarationsChallenge: CodingChallenge = {
  id: "practice-css-selectors-declarations",
  lessonId: "css-selector-declaration-basic",
  title: "Latihan selector, property, dan value",
  description:
    "Latihan membaca dan menulis declaration block dengan selector sederhana.",
  instructions: [
    "Targetkan elemen dengan class card memakai .card.",
    "Tambahkan background, padding, dan border-radius.",
    "Targetkan h2 dan ubah font-size.",
    "JS tidak perlu diubah.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2>CSS Core Mechanics</h2>
  <p>Belajar selector, property, dan value.</p>
</article>`,
    css: `/* Tambahkan .card dan h2 style di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2>CSS Core Mechanics</h2>
  <p>Belajar selector, property, dan value.</p>
</article>`,
    css: `.card {
  background: #18181b;
  padding: 16px;
  border-radius: 12px;
}

h2 {
  font-size: 24px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki background.",
    ".card memiliki padding.",
    ".card memiliki border-radius.",
    "Ada selector h2.",
    "h2 memiliki font-size.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-background", label: ".card punya property background.", type: "cssSelectorPropertyExists", target: ".card", property: "background" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "has-h2-selector", label: "Ada selector h2.", type: "cssSelectorExists", target: "h2" },
      { id: "h2-font-size", label: "h2 punya property font-size.", type: "cssSelectorPropertyExists", target: "h2", property: "font-size" },
    ],
  },
  skillTags: ["CSS", "Selectors", "Styling"],
};

export const debugBasicCssCascadeChallenge: CodingChallenge = {
  id: "debug-basic-css-cascade",
  lessonId: "cascade-specificity-basic",
  title: "Debug cascade CSS sederhana",
  description:
    "Latihan memperbaiki konflik CSS sederhana tanpa memakai !important.",
  instructions: [
    "Perbaiki style agar paragraf dengan class intro terlihat menonjol.",
    "Gunakan selector .intro.",
    "Tambahkan color #38bdf8 pada .intro.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<p class="intro">Ini paragraf pembuka yang perlu terlihat lebih jelas.</p>`,
    css: `p {
  color: gray;
}

/* Tambahkan selector .intro di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<p class="intro">Ini paragraf pembuka yang perlu terlihat lebih jelas.</p>`,
    css: `p {
  color: gray;
}

.intro {
  color: #38bdf8;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .intro.",
    ".intro memiliki color #38bdf8.",
    "Style .intro menang dari p karena selector class lebih spesifik.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-intro-selector", label: "Ada selector .intro.", type: "cssSelectorExists", target: ".intro" },
      { id: "intro-color", label: ".intro punya property color.", type: "cssSelectorPropertyExists", target: ".intro", property: "color" },
      { id: "intro-color-value", label: ".intro memakai color #38bdf8.", type: "cssSelectorPropertyValue", target: ".intro", property: "color", valueIncludes: "#38bdf8" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Cascade", "Specificity", "Debugging"],
};

export const buildStyledInfoCardChallenge: CodingChallenge = {
  id: "build-styled-info-card",
  lessonId: "css-core-mechanics-assessment",
  title: "Membuat info card sederhana dengan CSS",
  description:
    "Assessment praktik untuk memberi style pada card memakai selector, property, dan value dasar.",
  instructions: [
    "Style card sederhana.",
    "Gunakan class selector .card.",
    "Tambahkan background, padding, dan border-radius.",
    "Style heading dengan .card-title.",
    "Style paragraph dengan .card-description.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2 class="card-title">CSS Core Mechanics</h2>
  <p class="card-description">Selector memilih elemen. Property dan value mengatur tampilannya.</p>
</article>`,
    css: `/* Tambahkan CSS card di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2 class="card-title">CSS Core Mechanics</h2>
  <p class="card-description">Selector memilih elemen. Property dan value mengatur tampilannya.</p>
</article>`,
    css: `.card {
  background: #18181b;
  padding: 20px;
  border-radius: 12px;
}

.card-title {
  font-size: 24px;
  color: #f4f4f5;
}

.card-description {
  color: #d4d4d8;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki background.",
    ".card memiliki padding.",
    ".card memiliki border-radius.",
    ".card-title memiliki font-size.",
    ".card-description memiliki color.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-background", label: ".card punya property background.", type: "cssSelectorPropertyExists", target: ".card", property: "background" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "has-card-title-selector", label: "Ada selector .card-title.", type: "cssSelectorExists", target: ".card-title" },
      { id: "card-title-font-size", label: ".card-title punya property font-size.", type: "cssSelectorPropertyExists", target: ".card-title", property: "font-size" },
      { id: "has-card-description-selector", label: "Ada selector .card-description.", type: "cssSelectorExists", target: ".card-description" },
      { id: "card-description-color", label: ".card-description punya property color.", type: "cssSelectorPropertyExists", target: ".card-description", property: "color" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Selectors", "Cascade", "Assessment"],
};

export const cssCoreMechanicsLessons: Lesson[] = [
  whatIsCssLesson,
  cssSelectorDeclarationBasicLesson,
  cascadeSpecificityBasicLesson,
  cssCoreMechanicsAssessmentLesson,
];

export const cssCoreMechanicsQuizzes: Quiz[] = [
  cssCoreMechanicsAssessmentQuiz,
];

export const cssCoreMechanicsChallenges: CodingChallenge[] = [
  styleBasicHtmlTextChallenge,
  practiceCssSelectorsDeclarationsChallenge,
  debugBasicCssCascadeChallenge,
  buildStyledInfoCardChallenge,
];
