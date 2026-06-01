import type { Lesson } from "@/types/learning";

export const whatIsWebsiteAndWebPageLesson: Lesson = {
  id: "what-is-website-and-web-page",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Apa Itu Website dan Web Page?",
  slug: "what-is-website-and-web-page",
  description:
    "Bedakan website dan web page supaya kamu tahu apa yang sedang dibuka browser.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 18,
  objectives: [
    "Membedakan website dan web page",
    "Memahami browser sebagai aplikasi untuk membuka web page",
    "Mengenali URL sebagai alamat halaman di web",
  ],
  skillTags: ["Web Fundamentals", "Browser", "URL"],
  blocks: [
    {
      id: "what-is-website-and-web-page-intro",
      type: "text",
      title: "Website bukan selalu satu halaman",
      content:
        "Website adalah kumpulan halaman yang bisa dibuka lewat browser. Web page adalah satu halaman di dalam website. Contohnya, FluentStack adalah website. Halaman Dashboard, Roadmap, dan Lesson adalah web page yang berbeda di dalamnya.",
    },
    {
      id: "what-is-website-and-web-page-url-note",
      type: "callout",
      variant: "important",
      title: "URL adalah alamat halaman",
      content:
        "URL membantu browser tahu halaman mana yang harus dibuka. Dua halaman bisa berada di website yang sama, tetapi punya URL berbeda.",
    },
    {
      id: "what-is-website-and-web-page-quick-check",
      type: "quick-check",
      question: "Kalau FluentStack punya halaman Dashboard dan halaman Roadmap, mana pernyataan yang paling tepat?",
      options: [
        "Dashboard dan Roadmap adalah dua web page di dalam satu website",
        "Dashboard adalah browser, sedangkan Roadmap adalah server",
        "Dashboard dan Roadmap harus selalu punya domain berbeda",
        "Roadmap hanya bisa dibuka kalau JavaScript dimatikan",
      ],
      correctAnswer: "Dashboard dan Roadmap adalah dua web page di dalam satu website",
      explanation:
        "Satu website bisa punya banyak web page. Setiap web page biasanya punya URL sendiri agar browser tahu halaman mana yang ingin dibuka.",
    },
    {
      id: "what-is-website-and-web-page-quiz-block",
      type: "quiz",
      quizId: "what-is-website-and-web-page-quiz",
    },
    {
      id: "what-is-website-and-web-page-summary",
      type: "summary",
      points: [
        "Website adalah kumpulan halaman yang bisa dibuka lewat browser.",
        "Web page adalah satu halaman tertentu di dalam website.",
        "URL adalah alamat yang membantu browser membuka halaman yang tepat.",
        "Berikutnya, kamu akan melihat apa yang terjadi saat browser membuka URL.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-is-website-and-web-page-intro",
      "what-is-website-and-web-page-url-note",
      "what-is-website-and-web-page-quick-check",
      "what-is-website-and-web-page-quiz-block",
      "what-is-website-and-web-page-summary",
    ],
    passingQuizScore: 70,
  },
};

export const howWebPageLoadsLesson: Lesson = {
  id: "how-web-page-loads",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Cara Kerja Web Page",
  slug: "how-web-page-loads",
  description:
    "Pahami alur sederhana saat browser membuka URL: browser meminta halaman, server membalas, lalu browser menampilkannya.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 20,
  objectives: [
    "Menjelaskan alur sederhana saat browser membuka URL",
    "Membedakan request dan response",
    "Memahami render sebagai proses browser menampilkan halaman",
  ],
  skillTags: ["Web Fundamentals", "Browser", "HTTP"],
  blocks: [
    {
      id: "how-web-page-loads-intro",
      type: "text",
      title: "Apa yang terjadi saat kamu membuka URL?",
      content:
        "Di lesson sebelumnya, kamu sudah tahu bahwa URL adalah alamat halaman. Saat kamu mengetik URL dan menekan Enter, browser memakai alamat itu untuk meminta halaman ke server. Server membalas dengan resource yang dibutuhkan, lalu browser menampilkan hasilnya sebagai web page.",
    },
    {
      id: "how-web-page-loads-request-response",
      type: "callout",
      variant: "important",
      title: "Request dan response cukup dipahami sederhana dulu",
      content:
        "Request adalah permintaan dari browser. Response adalah balasan dari server. Untuk tahap awal, cukup ingat: browser meminta, server membalas.",
    },
    {
      id: "how-web-page-loads-quick-check",
      type: "quick-check",
      question: "Saat browser meminta halaman ke server, istilah yang paling tepat untuk permintaan itu adalah apa?",
      options: ["response", "request", "render", "deploy"],
      correctAnswer: "request",
      explanation:
        "Request adalah permintaan yang dikirim browser ke server. Response adalah balasan dari server setelah request diterima.",
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
        "Saat membuka URL, browser mengirim request ke server.",
        "Server mengirim response berisi resource yang dibutuhkan halaman.",
        "Browser membaca response tersebut lalu merender web page yang kamu lihat.",
        "Berikutnya, kamu akan mengenal tiga bagian penting yang sering ada di web page: HTML, CSS, dan JavaScript.",
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
    "Kenali folder dasar di project frontend kecil setelah kamu tahu fungsi index.html, style.css, dan script.js.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 18,
  objectives: [
    "Mengenali posisi file HTML, CSS, dan JavaScript dalam folder project",
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
        "Di lesson sebelumnya, kamu sudah mengenal index.html, style.css, dan script.js. Saat project mulai bertambah, file-file itu perlu ditaruh dengan rapi. Struktur folder membantu kamu menemukan CSS, JavaScript, gambar, dan file pendukung tanpa menebak-nebak.",
    },
    {
      id: "small-frontend-project-structure-file-tree",
      type: "code-example",
      title: "Contoh file tree sederhana",
      language: "bash",
      code: `my-frontend-project/
  index.html
  styles/
    style.css
  scripts/
    script.js
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
        "Setelah Web Foundations, kamu siap mulai menulis struktur HTML dengan lebih sengaja.",
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

export const whatAreHtmlCssJavascriptLesson: Lesson = {
  id: "what-are-html-css-javascript",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Apa Itu HTML, CSS, dan JavaScript?",
  slug: "what-are-html-css-javascript",
  description:
    "Kenali HTML, CSS, dan JavaScript sebagai tiga bagian berbeda yang membentuk web page.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 22,
  objectives: [
    "Memahami HTML sebagai struktur halaman",
    "Memahami CSS sebagai pengatur tampilan",
    "Memahami JavaScript sebagai pengatur interaksi",
  ],
  skillTags: ["HTML", "CSS", "JavaScript", "Web Fundamentals"],
  blocks: [
    {
      id: "what-are-html-css-javascript-intro",
      type: "text",
      title: "Tiga bagian utama di frontend",
      content:
        "Web page biasanya dibuat dari tiga bagian utama. HTML menyusun isi dan struktur. CSS mengatur tampilan seperti warna, ukuran, dan jarak. JavaScript menambahkan perilaku, misalnya membuka menu atau merespons klik tombol.",
    },
    {
      id: "what-are-html-css-javascript-analogy",
      type: "callout",
      variant: "tip",
      title: "Pikirkan dari fungsi, bukan dari file dulu",
      content:
        "Sebelum menghafal nama file, pahami dulu perannya: HTML untuk struktur, CSS untuk tampilan, JavaScript untuk interaksi.",
    },
    {
      id: "what-are-html-css-javascript-code-example",
      type: "code-example",
      title: "Contoh kecil HTML, CSS, dan JavaScript",
      language: "html",
      code: `<button class="primary-button" id="start-button">
  Mulai belajar
</button>

<style>
  .primary-button {
    background: #22d3ee;
    color: #0f172a;
  }
</style>

<script>
  document.querySelector("#start-button")?.addEventListener("click", () => {
    console.log("Lesson dimulai");
  });
</script>`,
      explanation:
        "button adalah struktur HTML. style mengubah tampilannya. script menambahkan perilaku saat tombol diklik.",
    },
    {
      id: "what-are-html-css-javascript-quick-check",
      type: "quick-check",
      question: "Bagian mana yang paling tepat untuk mengatur warna tombol?",
      options: ["HTML", "CSS", "JavaScript", "URL"],
      correctAnswer: "CSS",
      explanation:
        "CSS dipakai untuk mengatur tampilan visual seperti warna, ukuran, jarak, dan layout.",
    },
    {
      id: "what-are-html-css-javascript-quiz-block",
      type: "quiz",
      quizId: "what-are-html-css-javascript-quiz",
    },
    {
      id: "what-are-html-css-javascript-summary",
      type: "summary",
      points: [
        "HTML memberi struktur dan isi halaman.",
        "CSS mengatur tampilan halaman.",
        "JavaScript menambahkan interaksi dan perilaku.",
        "Berikutnya, kamu akan melihat bagaimana ketiganya bekerja bersama dalam satu web page.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-are-html-css-javascript-intro",
      "what-are-html-css-javascript-analogy",
      "what-are-html-css-javascript-code-example",
      "what-are-html-css-javascript-quick-check",
      "what-are-html-css-javascript-quiz-block",
      "what-are-html-css-javascript-summary",
    ],
    passingQuizScore: 70,
  },
};

export const htmlCssJsRolesLesson: Lesson = {
  id: "html-css-js-roles",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Peran HTML, CSS, dan JavaScript",
  slug: "html-css-js-roles",
  description:
    "Pahami bagaimana HTML, CSS, dan JavaScript saling melengkapi dalam satu web page.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 24,
  objectives: [
    "Menjelaskan urutan sederhana browser membaca HTML, CSS, dan JavaScript",
    "Membedakan struktur, tampilan, dan interaksi dalam satu halaman",
    "Mengenali perubahan kecil yang berasal dari CSS atau JavaScript",
  ],
  skillTags: ["HTML", "CSS", "JavaScript", "Browser"],
  blocks: [
    {
      id: "html-css-js-roles-intro",
      type: "text",
      title: "Satu halaman, tiga peran",
      content:
        "Setelah tahu peran masing-masing, sekarang lihat cara kerjanya bersama. HTML menjadi titik awal struktur halaman. CSS membuat struktur itu terlihat rapi. JavaScript menambahkan perilaku saat pengunjung berinteraksi dengan halaman.",
    },
    {
      id: "html-css-js-roles-render-note",
      type: "callout",
      variant: "important",
      title: "Browser tidak membaca semuanya sebagai satu hal",
      content:
        "HTML, CSS, dan JavaScript punya tugas berbeda. Kalau tampilan berubah, biasanya kamu melihat efek CSS. Kalau halaman merespons klik atau input, biasanya ada JavaScript yang bekerja.",
    },
    {
      id: "html-css-js-roles-code-example",
      type: "code-example",
      title: "Contoh satu komponen sederhana",
      language: "html",
      code: `<article class="lesson-card">
  <h2>Dasar HTML</h2>
  <p>Mulai dari struktur halaman.</p>
  <button id="continue-button">Lanjut</button>
</article>`,
      explanation:
        "HTML di contoh ini memberi struktur kartu lesson. CSS bisa membuatnya terlihat seperti card. JavaScript bisa membuat tombol Lanjut merespons klik.",
    },
    {
      id: "html-css-js-roles-quick-check",
      type: "quick-check",
      question: "Jika tombol berubah warna saat hover, bagian mana yang biasanya mengatur perubahan itu?",
      options: ["CSS", "HTML", "URL", "Server"],
      correctAnswer: "CSS",
      explanation:
        "Perubahan visual seperti warna saat hover biasanya diatur dengan CSS. HTML tetap menyimpan struktur tombolnya.",
    },
    {
      id: "html-css-js-roles-quiz-block",
      type: "quiz",
      quizId: "html-css-js-roles-quiz",
    },
    {
      id: "html-css-js-roles-summary",
      type: "summary",
      points: [
        "HTML memberi struktur awal halaman.",
        "CSS mengatur tampilan dari struktur tersebut.",
        "JavaScript menambahkan perilaku seperti klik, validasi, dan update data.",
        "Berikutnya, kamu akan mengenal file dasar yang biasanya menyimpan HTML, CSS, dan JavaScript.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "html-css-js-roles-intro",
      "html-css-js-roles-render-note",
      "html-css-js-roles-code-example",
      "html-css-js-roles-quick-check",
      "html-css-js-roles-quiz-block",
      "html-css-js-roles-summary",
    ],
    passingQuizScore: 70,
  },
};

export const indexCssJsFilesLesson: Lesson = {
  id: "index-css-js-files",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Mengenal File index.html, style.css, dan script.js",
  slug: "index-css-js-files",
  description:
    "Kenali fungsi file dasar yang sering dipakai untuk menyimpan HTML, CSS, dan JavaScript.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 18,
  objectives: [
    "Memahami fungsi index.html",
    "Memahami fungsi style.css",
    "Memahami fungsi script.js",
  ],
  skillTags: ["Project Structure", "HTML", "CSS", "JavaScript"],
  blocks: [
    {
      id: "index-css-js-files-intro",
      type: "text",
      title: "Tiga file yang sering kamu temui",
      content:
        "Setelah tahu fungsi HTML, CSS, dan JavaScript, sekarang hubungkan ke file. Project frontend kecil sering dimulai dari index.html, style.css, dan script.js. index.html menyimpan struktur halaman. style.css menyimpan aturan tampilan. script.js menyimpan perilaku interaktif.",
    },
    {
      id: "index-css-js-files-example",
      type: "code-example",
      title: "Contoh struktur file dasar",
      language: "bash",
      code: `my-first-page/
  index.html
  style.css
  script.js
  assets/
    logo.svg`,
      explanation:
        "index.html biasanya menjadi halaman utama. style.css dihubungkan dari HTML untuk styling. script.js dihubungkan dari HTML untuk interaksi. assets menyimpan gambar, ikon, atau file pendukung.",
    },
    {
      id: "index-css-js-files-quick-check",
      type: "quick-check",
      question: "File mana yang biasanya menyimpan aturan tampilan seperti warna dan jarak?",
      options: ["index.html", "style.css", "script.js", "logo.svg"],
      correctAnswer: "style.css",
      explanation:
        "style.css menyimpan CSS, yaitu aturan tampilan seperti warna, ukuran teks, spacing, dan layout.",
    },
    {
      id: "index-css-js-files-summary",
      type: "summary",
      points: [
        "index.html menyimpan struktur halaman.",
        "style.css menyimpan aturan tampilan.",
        "script.js menyimpan perilaku interaktif.",
        "assets menyimpan file pendukung seperti gambar dan ikon.",
        "Berikutnya, kamu akan melihat bagaimana file-file ini ditaruh dalam struktur folder project kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "index-css-js-files-intro",
      "index-css-js-files-example",
      "index-css-js-files-quick-check",
      "index-css-js-files-summary",
    ],
  },
};

export const semanticHtmlStructureLesson: Lesson = {
  id: "semantic-html-structure",
  trackId: "frontend-engineering",
  moduleId: "html-web-fundamentals",
  title: "Struktur Semantic HTML",
  slug: "semantic-html-structure",
  description:
    "Gunakan tag dan element HTML yang sudah kamu pelajari untuk menyusun struktur halaman yang lebih bermakna.",
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
        "Berikutnya, kamu bisa review lagi penggunaan semantic HTML lewat contoh yang lebih fokus.",
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

export const htmlBasicStructureLesson: Lesson = {
  id: "html-basic-structure",
  trackId: "frontend-engineering",
  moduleId: "html-web-fundamentals",
  title: "Struktur HTML Dasar",
  slug: "html-basic-structure",
  description:
    "Mulai menulis HTML dengan mengenali kerangka dokumen dan tempat konten terlihat.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 22,
  objectives: [
    "Mengenali struktur dasar dokumen HTML",
    "Memahami fungsi doctype, html, head, dan body",
    "Menaruh konten halaman sederhana di dalam body",
  ],
  skillTags: ["HTML", "Web Fundamentals"],
  blocks: [
    {
      id: "html-basic-structure-intro",
      type: "text",
      title: "HTML punya kerangka dasar",
      content:
        "Di Web Foundations, kamu sudah tahu bahwa index.html menyimpan struktur halaman. Sekarang kamu mulai melihat isi file HTML. Bagian head berisi informasi untuk browser, seperti judul halaman. Bagian body berisi konten yang terlihat di halaman, seperti heading, paragraf, gambar, dan link.",
    },
    {
      id: "html-basic-structure-code-example",
      type: "code-example",
      title: "Contoh dokumen HTML sederhana",
      language: "html",
      code: `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <title>Halaman Pertama</title>
  </head>
  <body>
    <h1>Halo, web!</h1>
    <p>Ini konten pertama di halaman.</p>
  </body>
</html>`,
      explanation:
        "head tidak ditampilkan sebagai konten utama. body berisi bagian yang dilihat pengunjung di browser.",
    },
    {
      id: "html-basic-structure-quick-check",
      type: "quick-check",
      question: "Di bagian mana kamu menaruh heading dan paragraf yang terlihat di halaman?",
      options: ["head", "body", "doctype", "meta"],
      correctAnswer: "body",
      explanation:
        "Konten yang terlihat oleh pengunjung, seperti heading dan paragraf, ditaruh di dalam body.",
    },
    {
      id: "html-basic-structure-quiz-block",
      type: "quiz",
      quizId: "html-basic-structure-quiz",
    },
    {
      id: "html-basic-structure-summary",
      type: "summary",
      points: [
        "Dokumen HTML punya kerangka dasar seperti doctype, html, head, dan body.",
        "head berisi informasi untuk browser, bukan konten utama halaman.",
        "body berisi konten yang terlihat oleh pengunjung.",
        "Berikutnya, kamu akan membedakan tag, element, dan attribute agar lebih mudah membaca HTML.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "html-basic-structure-intro",
      "html-basic-structure-code-example",
      "html-basic-structure-quick-check",
      "html-basic-structure-quiz-block",
      "html-basic-structure-summary",
    ],
    passingQuizScore: 70,
  },
};

export const tagElementAttributeLesson: Lesson = {
  id: "tag-element-attribute",
  trackId: "frontend-engineering",
  moduleId: "html-web-fundamentals",
  title: "Tag, Element, dan Attribute",
  slug: "tag-element-attribute",
  description:
    "Pahami perbedaan tag, element, dan attribute sebelum masuk ke semantic HTML.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 22,
  objectives: [
    "Membedakan tag dan element",
    "Memahami attribute sebagai informasi tambahan pada element",
    "Membaca contoh HTML sederhana dengan lebih percaya diri",
  ],
  skillTags: ["HTML", "Web Fundamentals"],
  blocks: [
    {
      id: "tag-element-attribute-intro",
      type: "text",
      title: "Tiga istilah dasar di HTML",
      content:
        "Tag adalah penanda seperti <a> atau <p>. Element adalah satu bagian HTML lengkap, misalnya <p>Halo</p>. Attribute adalah informasi tambahan di dalam tag pembuka, misalnya href pada link.",
    },
    {
      id: "tag-element-attribute-note",
      type: "callout",
      variant: "important",
      title: "Jangan tertukar saat membaca dokumentasi",
      content:
        "Di dokumentasi, istilah tag dan element kadang terasa mirip. Untuk belajar, cukup ingat: tag adalah penandanya, element adalah keseluruhan bagian HTML-nya.",
    },
    {
      id: "tag-element-attribute-code-example",
      type: "code-example",
      title: "Contoh tag, element, dan attribute",
      language: "html",
      code: `<a href="/roadmap">Lihat roadmap</a>`,
      explanation:
        "<a> dan </a> adalah tag. Seluruh baris adalah element link. href adalah attribute yang memberi tahu tujuan link.",
    },
    {
      id: "tag-element-attribute-quick-check",
      type: "quick-check",
      question: "Pada kode <img src=\"logo.svg\" alt=\"Logo FluentStack\" />, bagian mana yang termasuk attribute?",
      options: ["img", "src dan alt", "Logo FluentStack saja", "Tidak ada attribute"],
      correctAnswer: "src dan alt",
      explanation:
        "src dan alt adalah attribute karena memberi informasi tambahan pada element img.",
    },
    {
      id: "tag-element-attribute-quiz-block",
      type: "quiz",
      quizId: "tag-element-attribute-quiz",
    },
    {
      id: "tag-element-attribute-summary",
      type: "summary",
      points: [
        "Tag adalah penanda HTML, seperti <p> atau <a>.",
        "Element adalah bagian HTML lengkap, termasuk tag dan kontennya.",
        "Attribute memberi informasi tambahan pada element.",
        "Berikutnya, kamu akan memakai pemahaman ini untuk memilih element semantic yang tepat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "tag-element-attribute-intro",
      "tag-element-attribute-note",
      "tag-element-attribute-code-example",
      "tag-element-attribute-quick-check",
      "tag-element-attribute-quiz-block",
      "tag-element-attribute-summary",
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
  whatIsWebsiteAndWebPageLesson,
  howWebPageLoadsLesson,
  whatAreHtmlCssJavascriptLesson,
  htmlCssJsRolesLesson,
  indexCssJsFilesLesson,
  smallFrontendProjectStructureLesson,
  htmlBasicStructureLesson,
  tagElementAttributeLesson,
  semanticHtmlStructureLesson,
  htmlSemanticBasicsLesson,
  cssFlexboxBasicsLesson,
  writingDailyUpdateLesson,
];
