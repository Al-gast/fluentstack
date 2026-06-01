import type { Lesson } from "@/types/learning";

export const whatIsWebsiteAndWebPageLesson: Lesson = {
  id: "what-is-website-and-web-page",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Apa Itu Website dan Web Page?",
  slug: "what-is-website-and-web-page",
  description:
    "Bedakan website dan web page sebelum melihat cara browser membuka sebuah URL.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 18,
  objectives: [
    "Membedakan website dan web page dengan contoh FluentStack",
    "Mengenali URL sebagai alamat untuk membuka satu halaman",
    "Mengamati bahwa Dashboard, Roadmap, dan Lesson adalah halaman berbeda di satu website",
  ],
  skillTags: ["Web Fundamentals", "Browser", "URL"],
  blocks: [
    {
      id: "what-is-website-and-web-page-intro",
      type: "text",
      title: "Mulai dari halaman yang sedang kamu buka",
      content:
        "Kamu belum perlu memikirkan kode dulu. Lesson ini mulai dari hal yang sudah kamu lakukan: membuka halaman di browser. Browser adalah aplikasi seperti Chrome, Safari, Firefox, atau Edge yang dipakai untuk membuka halaman di web. Sebelum masuk ke HTML, CSS, dan JavaScript, kamu akan membedakan website, web page, dan URL dengan melihat FluentStack sebagai contoh.",
    },
    {
      id: "what-is-website-and-web-page-core-concept",
      type: "text",
      title: "Website adalah kumpulan, web page adalah satu halaman",
      content:
        "Website adalah kumpulan halaman yang saling berhubungan. Web page adalah satu halaman tertentu di dalam website itu. FluentStack adalah website. Dashboard adalah satu web page. Roadmap adalah web page lain. Halaman Lesson yang sedang kamu baca ini juga satu web page di dalam FluentStack.",
    },
    {
      id: "what-is-website-and-web-page-mini-action",
      type: "text",
      title: "Coba amati alamat di browser",
      content:
        "Sekarang lihat address bar di bagian atas browser kamu. URL adalah alamat yang membantu browser membuka halaman tertentu. Di website yang sama, bagian path setelah nama website bisa berubah. Misalnya, /dashboard menunjukkan halaman Dashboard, /roadmap menunjukkan halaman Roadmap, dan /lesson/what-is-website-and-web-page menunjukkan halaman Lesson ini. Path itu membantu kamu melihat web page mana yang sedang terbuka.",
    },
    {
      id: "what-is-website-and-web-page-url-note",
      type: "callout",
      variant: "common-mistake",
      title: "Website dan web page berhubungan, tapi tidak sama",
      content:
        "Satu website bisa punya banyak web page. URL adalah alamat untuk satu halaman tertentu. Jadi, Dashboard dan Roadmap bisa berada di website FluentStack yang sama, tetapi tetap punya URL yang berbeda.",
    },
    {
      id: "what-is-website-and-web-page-quick-check",
      type: "quick-check",
      question:
        "Kalau kamu membuka Dashboard dan Roadmap di FluentStack, mana pernyataan yang paling tepat?",
      options: [
        "Dashboard dan Roadmap adalah dua web page di dalam satu website",
        "Dashboard dan Roadmap adalah dua website yang tidak berhubungan",
        "Dashboard adalah website, sedangkan Roadmap adalah browser",
        "Dashboard dan Roadmap adalah URL yang sama persis",
      ],
      correctAnswer: "Dashboard dan Roadmap adalah dua web page di dalam satu website",
      explanation:
        "Tepat. FluentStack adalah websitenya. Dashboard dan Roadmap adalah dua halaman berbeda di dalam website itu. Biasanya masing-masing halaman punya URL sendiri.",
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
        "Ingat website sebagai kumpulan halaman yang saling berhubungan, seperti FluentStack.",
        "Kenali web page sebagai satu halaman spesifik, seperti Dashboard, Roadmap, atau halaman Lesson ini.",
        "Gunakan URL sebagai alamat yang membantu browser membuka halaman yang tepat.",
        "Sekarang kamu sudah tahu apa itu web page. Berikutnya, kamu akan melihat apa yang terjadi saat browser membuka sebuah URL.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-is-website-and-web-page-intro",
      "what-is-website-and-web-page-core-concept",
      "what-is-website-and-web-page-mini-action",
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
    "Ikuti alur sederhana saat browser membuka URL: browser meminta halaman, menerima balasan, lalu menampilkannya.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 20,
  objectives: [
    "Menjelaskan alur sederhana saat browser membuka URL",
    "Membedakan request dan response dengan bahasa sederhana",
    "Mengamati bahwa refresh membuat browser meminta halaman lagi",
  ],
  skillTags: ["Web Fundamentals", "Browser", "HTTP"],
  blocks: [
    {
      id: "how-web-page-loads-intro",
      type: "text",
      title: "Apa yang terjadi saat kamu membuka URL?",
      content:
        "Di lesson sebelumnya, kamu sudah tahu bahwa URL adalah alamat halaman. Sekarang kamu belum perlu masuk ke detail jaringan. Cukup pahami alurnya dulu: browser memakai URL untuk meminta halaman, menerima balasan, lalu menampilkan web page yang bisa kamu baca.",
    },
    {
      id: "how-web-page-loads-simple-flow",
      type: "text",
      title: "Browser meminta, server membalas",
      content:
        "Bayangkan kamu membuka halaman Roadmap di FluentStack. Browser melihat URL halaman itu, lalu mengirim request. Request berarti permintaan. Server menerima permintaan tersebut, lalu mengirim response. Response berarti balasan. Setelah balasan diterima, browser menyusun hasilnya menjadi halaman yang terlihat.",
    },
    {
      id: "how-web-page-loads-mini-action",
      type: "text",
      title: "Coba amati saat halaman dimuat ulang",
      content:
        "Lihat address bar, lalu refresh halaman ini. URL-nya tetap menunjuk ke halaman yang sama, tetapi browser meminta ulang halaman tersebut. Kamu tidak perlu melihat proses teknisnya sekarang. Yang penting: membuka atau me-refresh URL membuat browser meminta halaman lagi.",
    },
    {
      id: "how-web-page-loads-request-response",
      type: "callout",
      variant: "important",
      title: "Request dan response cukup dipahami sederhana",
      content:
        "Untuk tahap awal, cukup ingat aturan ini: browser mengirim request, server mengirim response. Detail seperti status code, header, dan network tab bisa dipelajari nanti.",
    },
    {
      id: "how-web-page-loads-quick-check",
      type: "quick-check",
      question: "Saat browser meminta halaman ke server, istilah yang paling tepat untuk permintaan itu adalah apa?",
      options: ["response", "request", "render", "URL"],
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
        "Saat membuka atau me-refresh URL, browser mengirim request untuk meminta halaman.",
        "Server mengirim response sebagai balasan untuk permintaan browser.",
        "Browser membaca response lalu menampilkan web page yang kamu lihat.",
        "Berikutnya, kamu akan mengenal tiga bagian penting yang sering membentuk web page: HTML, CSS, dan JavaScript.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "how-web-page-loads-intro",
      "how-web-page-loads-simple-flow",
      "how-web-page-loads-mini-action",
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
    "Baca struktur folder project frontend kecil setelah mengenal index.html, style.css, dan script.js.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 18,
  objectives: [
    "Membaca file tree project frontend kecil",
    "Mengenali posisi file HTML, CSS, dan JavaScript dalam folder project",
    "Mengenali folder assets untuk gambar, ikon, dan file pendukung",
  ],
  skillTags: ["Project Structure", "HTML", "CSS", "JavaScript"],
  blocks: [
    {
      id: "small-frontend-project-structure-intro",
      type: "text",
      title: "Dari file ke folder project",
      content:
        "Di lesson sebelumnya, kamu sudah mengenal index.html, style.css, dan script.js. Saat project masih kecil, semua file bisa terlihat sederhana. Tetapi ketika gambar, ikon, dan file pendukung mulai bertambah, folder membantu kamu menemukan sesuatu tanpa menebak-nebak.",
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
        "index.html tetap menjadi pintu masuk halaman. Folder styles berisi CSS, scripts berisi JavaScript, dan assets berisi gambar, ikon, atau file pendukung.",
    },
    {
      id: "small-frontend-project-structure-mini-action",
      type: "callout",
      variant: "tip",
      title: "Cara membaca file tree",
      content:
        "Mulai dari baris paling atas sebagai nama project. Lalu lihat file utama seperti index.html. Setelah itu, cek folder pendukung: styles untuk tampilan, scripts untuk interaksi, dan assets untuk gambar atau ikon.",
    },
    {
      id: "small-frontend-project-structure-quick-check",
      type: "quick-check",
      question: "Di struktur contoh, file mana yang biasanya menjadi pintu masuk halaman web sederhana?",
      options: ["main.css", "app.js", "index.html", "assets/logo.svg"],
      correctAnswer: "index.html",
      explanation:
        "index.html biasanya menjadi file pertama yang dibaca browser untuk mendapatkan struktur awal halaman.",
    },
    {
      id: "small-frontend-project-structure-summary",
      type: "summary",
      points: [
        "Baca file tree dari nama project, lalu file utama, lalu folder pendukung.",
        "Gunakan folder styles untuk CSS dan folder scripts untuk JavaScript ketika project mulai bertambah.",
        "Simpan gambar, ikon, dan file pendukung di folder assets.",
        "Setelah Web Foundations, kamu siap masuk ke HTML & Web Fundamentals dan mulai melihat isi index.html lewat struktur HTML dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "small-frontend-project-structure-intro",
      "small-frontend-project-structure-file-tree",
      "small-frontend-project-structure-mini-action",
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
    "Kenali HTML, CSS, dan JavaScript sebagai tiga bagian dengan tugas berbeda di sebuah web page.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 22,
  objectives: [
    "Memahami HTML sebagai penyusun isi dan struktur halaman",
    "Memahami CSS sebagai pengatur tampilan halaman",
    "Memahami JavaScript sebagai penambah perilaku interaktif",
  ],
  skillTags: ["HTML", "CSS", "JavaScript", "Web Fundamentals"],
  blocks: [
    {
      id: "what-are-html-css-javascript-intro",
      type: "text",
      title: "Tiga nama yang sering muncul di frontend",
      content:
        "Setelah tahu cara browser membuka web page, sekarang kamu mulai mengenal bahan yang sering membentuk halaman itu. Kamu belum perlu menghafal kode. Fokus dulu ke pembagian tugas: HTML menyusun isi, CSS mengatur tampilan, dan JavaScript menambahkan interaksi.",
    },
    {
      id: "what-are-html-css-javascript-core-concept",
      type: "text",
      title: "Struktur, tampilan, dan interaksi",
      content:
        "HTML dipakai untuk menulis isi dan struktur halaman, seperti judul, paragraf, link, dan tombol. CSS dipakai untuk mengatur tampilan, seperti warna, ukuran teks, jarak, dan layout. JavaScript dipakai saat halaman perlu merespons aksi, misalnya ketika tombol diklik atau menu dibuka.",
    },
    {
      id: "what-are-html-css-javascript-analogy",
      type: "callout",
      variant: "tip",
      title: "Pikirkan dari fungsi, bukan dari file dulu",
      content:
        "Kalau kamu melihat halaman FluentStack, coba pisahkan pertanyaannya: bagian mana yang menjadi isi, bagian mana yang membuat tampilan rapi, dan bagian mana yang merespons aksi pengguna.",
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
        "Kamu belum perlu menghafal kode ini. Fokus pada pembagian tugasnya: button adalah struktur HTML, style mengubah tampilan tombol, dan script menambahkan perilaku saat tombol diklik.",
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
        "Gunakan HTML untuk menyusun isi dan struktur halaman.",
        "Gunakan CSS untuk mengatur tampilan seperti warna, ukuran, spacing, dan layout.",
        "Gunakan JavaScript saat halaman perlu merespons aksi pengguna.",
        "Berikutnya, kamu akan melihat bagaimana ketiganya bekerja bersama dalam satu web page.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-are-html-css-javascript-intro",
      "what-are-html-css-javascript-core-concept",
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
    "Lihat bagaimana HTML, CSS, dan JavaScript saling melengkapi dalam satu web page sederhana.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 24,
  objectives: [
    "Menjelaskan cara HTML, CSS, dan JavaScript bekerja bersama di satu halaman",
    "Membedakan struktur, tampilan, dan interaksi dalam satu halaman",
    "Mengenali perubahan visual dan perilaku interaktif tanpa masuk ke detail JavaScript",
  ],
  skillTags: ["HTML", "CSS", "JavaScript", "Browser"],
  blocks: [
    {
      id: "html-css-js-roles-intro",
      type: "text",
      title: "Satu halaman, tiga peran",
      content:
        "Di lesson sebelumnya, kamu sudah mengenal HTML, CSS, dan JavaScript secara terpisah. Sekarang lihat cara ketiganya bekerja bersama. HTML memberi struktur awal, CSS membuat struktur itu terlihat rapi, dan JavaScript menambahkan perilaku saat pengguna berinteraksi.",
    },
    {
      id: "html-css-js-roles-mini-action",
      type: "text",
      title: "Amati satu bagian UI",
      content:
        "Bayangkan satu card lesson di FluentStack. Judul, deskripsi, dan tombolnya adalah isi yang perlu disusun. Warna, jarak, dan bentuk card adalah tampilan. Saat tombol membawa kamu ke halaman lain atau membuka sesuatu, itu adalah perilaku. Kamu cukup mengenali perbedaannya dulu.",
    },
    {
      id: "html-css-js-roles-render-note",
      type: "callout",
      variant: "important",
      title: "Browser tidak membaca semuanya sebagai satu hal",
      content:
        "HTML, CSS, dan JavaScript bekerja sama, tetapi tugasnya tetap berbeda. Kalau isi halaman berubah struktur, pikirkan HTML. Kalau tampilan berubah, pikirkan CSS. Kalau ada respons terhadap klik atau input, biasanya JavaScript terlibat.",
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
        "Contoh ini baru menunjukkan struktur HTML. CSS bisa membuatnya terlihat seperti card. JavaScript bisa membuat tombol Lanjut merespons klik. Fokusnya adalah mengenali peran, bukan menulis JavaScript dulu.",
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
        "Kenali HTML sebagai struktur dan isi awal halaman.",
        "Kenali CSS sebagai aturan yang membuat struktur itu terlihat rapi.",
        "Kenali JavaScript sebagai bagian yang menambahkan perilaku interaktif.",
        "Berikutnya, kamu akan mengenal file dasar yang biasanya dipakai untuk menyimpan HTML, CSS, dan JavaScript.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "html-css-js-roles-intro",
      "html-css-js-roles-mini-action",
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
    "Kenali fungsi index.html, style.css, dan script.js di project frontend kecil.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 18,
  objectives: [
    "Memahami fungsi index.html sebagai halaman utama",
    "Memahami fungsi style.css sebagai tempat aturan tampilan",
    "Memahami fungsi script.js sebagai tempat perilaku interaktif",
  ],
  skillTags: ["Project Structure", "HTML", "CSS", "JavaScript"],
  blocks: [
    {
      id: "index-css-js-files-intro",
      type: "text",
      title: "Tiga file yang sering kamu temui",
      content:
        "Setelah tahu fungsi HTML, CSS, dan JavaScript, sekarang hubungkan ke file. Di project frontend kecil, kamu sering melihat index.html, style.css, dan script.js. File-file ini membantu kamu memisahkan struktur, tampilan, dan interaksi supaya lebih mudah dibaca.",
    },
    {
      id: "index-css-js-files-file-roles",
      type: "text",
      title: "Nama file membantu kamu menemukan tugasnya",
      content:
        "index.html biasanya menjadi halaman utama yang dibuka browser. style.css biasanya menyimpan aturan CSS untuk tampilan. script.js biasanya menyimpan JavaScript untuk perilaku interaktif. Nama ini adalah convention, yaitu kebiasaan penamaan yang umum dipakai, bukan aturan khusus browser. Yang penting adalah peran setiap file.",
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
        "Kamu belum perlu membuat semua file ini sekarang. Cukup amati bahwa struktur halaman, tampilan, interaksi, dan asset bisa ditempatkan di file atau folder yang jelas.",
    },
    {
      id: "index-css-js-files-convention-note",
      type: "callout",
      variant: "tip",
      title: "Convention membantu tim membaca project",
      content:
        "Banyak project memakai nama seperti index.html, style.css, dan script.js agar mudah dikenali. Project yang lebih besar bisa punya nama berbeda, tetapi ide dasarnya sama: pisahkan file sesuai tugasnya.",
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
        "Cari index.html saat ingin melihat struktur awal halaman.",
        "Cari style.css saat ingin melihat aturan tampilan.",
        "Cari script.js saat ingin melihat perilaku interaktif.",
        "Berikutnya, kamu akan melihat bagaimana file-file ini ditaruh dalam struktur folder project kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "index-css-js-files-intro",
      "index-css-js-files-file-roles",
      "index-css-js-files-example",
      "index-css-js-files-convention-note",
      "index-css-js-files-quick-check",
      "index-css-js-files-summary",
    ],
  },
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

export const htmlBasicStructureLesson: Lesson = {
  id: "html-basic-structure",
  trackId: "frontend-engineering",
  moduleId: "html-basics",
  title: "Struktur HTML Dasar",
  slug: "html-basic-structure",
  description:
    "Belajar membaca dan menulis kerangka pertama dokumen HTML sebelum masuk ke tag, element, dan attribute.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Mengenali bagian utama dokumen HTML: doctype, html, head, title, dan body",
    "Menaruh heading dan paragraf di tempat yang terlihat pada halaman",
    "Menulis halaman HTML sederhana dan mengeceknya dengan preview serta auto-check",
  ],
  skillTags: ["HTML", "Web Fundamentals"],
  blocks: [
    {
      id: "html-basic-structure-intro",
      type: "text",
      title: "Mulai dari kerangka halaman",
      content:
        "Di Web Foundations, kamu sudah tahu bahwa HTML dipakai untuk menyusun struktur halaman. Sekarang kamu mulai menulis dokumen HTML pertama. Kamu belum perlu menghafal semua tag. Fokus dulu pada bagian besar dokumen: informasi untuk browser dan konten yang terlihat di halaman.",
    },
    {
      id: "html-basic-structure-parts",
      type: "text",
      title: "Bagian utama dokumen HTML",
      content:
        "doctype memberi tahu browser bahwa dokumen ini memakai HTML modern. Elemen html membungkus seluruh halaman. Di dalamnya ada head dan body. Head menyimpan informasi untuk browser, seperti title. Title muncul di tab browser. Body berisi konten yang terlihat di halaman, seperti h1 untuk heading utama dan p untuk paragraf.",
    },
    {
      id: "html-basic-structure-code-example",
      type: "code-example",
      title: "Contoh halaman HTML paling sederhana",
      language: "html",
      code: `<!doctype html>
<html lang="id">
  <head>
    <title>Catatan Belajar</title>
  </head>
  <body>
    <h1>Belajar HTML</h1>
    <p>Ini halaman HTML pertama saya.</p>
  </body>
</html>`,
      explanation:
        "Contoh ini sengaja kecil. Tujuannya bukan menghafal semua kode, tetapi melihat bahwa informasi halaman berada di head, sedangkan konten yang terlihat berada di body.",
    },
    {
      id: "html-basic-structure-read-example",
      type: "text",
      title: "Cara membaca contoh ini",
      content:
        "Baca dari luar ke dalam. Baris doctype memberi konteks untuk browser. Elemen html membungkus dokumen. Bagian head berisi title untuk tab browser. Bagian body berisi h1 dan p, sehingga dua teks itulah yang akan kamu lihat di preview. Kalau kamu ingin menampilkan sesuatu di halaman, tempat utamanya adalah body.",
    },
    {
      id: "html-basic-structure-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Title bukan heading halaman",
      content:
        "Kesalahan awal yang sering terjadi adalah menaruh teks yang ingin terlihat di head, atau mengira title sama dengan h1. Title membantu memberi nama halaman di tab browser. H1 adalah heading utama yang terlihat di dalam halaman, jadi h1 ditulis di body.",
    },
    {
      id: "html-basic-structure-quick-check",
      type: "quick-check",
      question: "Saat kamu ingin h1 dan paragraf terlihat di preview, bagian mana yang harus kamu isi?",
      options: ["head", "title", "body", "doctype"],
      correctAnswer: "body",
      explanation:
        "H1 dan paragraf adalah konten yang terlihat di halaman, jadi keduanya ditulis di dalam body.",
    },
    {
      id: "html-basic-structure-coding-practice",
      type: "coding-practice",
      challengeId: "build-basic-html-page",
    },
    {
      id: "html-basic-structure-summary",
      type: "summary",
      points: [
        "Gunakan doctype untuk memberi tahu browser bahwa dokumen memakai HTML modern.",
        "Gunakan head untuk informasi halaman, seperti title untuk tab browser.",
        "Gunakan body untuk konten yang terlihat di preview.",
        "Gunakan h1 untuk heading utama dan p untuk paragraf.",
        "Berikutnya, kamu akan membedakan tag, element, dan attribute agar lebih mudah membaca dan menulis HTML.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "html-basic-structure-intro",
      "html-basic-structure-parts",
      "html-basic-structure-code-example",
      "html-basic-structure-read-example",
      "html-basic-structure-common-mistake",
      "html-basic-structure-quick-check",
      "html-basic-structure-coding-practice",
      "html-basic-structure-summary",
    ],
  },
};

export const tagElementAttributeLesson: Lesson = {
  id: "tag-element-attribute",
  trackId: "frontend-engineering",
  moduleId: "html-basics",
  title: "Tag, Element, dan Attribute",
  slug: "tag-element-attribute",
  description:
    "Pahami perbedaan tag, element, dan attribute sebelum masuk ke semantic HTML.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 32,
  objectives: [
    "Membedakan tag dan element",
    "Memahami attribute sebagai informasi tambahan pada element",
    "Memakai attribute pada link dan gambar sederhana",
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
      id: "tag-element-attribute-coding-practice",
      type: "coding-practice",
      challengeId: "practice-tag-element-attribute",
    },
    {
      id: "tag-element-attribute-summary",
      type: "summary",
      points: [
        "Tag adalah penanda HTML, seperti <p> atau <a>.",
        "Element adalah bagian HTML lengkap, termasuk tag dan kontennya.",
        "Attribute memberi informasi tambahan pada element.",
        "Saat latihan, cek attribute seperti href, src, dan alt karena bagian itu membuat element punya tujuan lebih jelas.",
        "Berikutnya, kamu akan menguji pemahaman HTML Basics lewat quiz dan latihan kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "tag-element-attribute-intro",
      "tag-element-attribute-note",
      "tag-element-attribute-code-example",
      "tag-element-attribute-quick-check",
      "tag-element-attribute-coding-practice",
      "tag-element-attribute-summary",
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

export const htmlBasicsAssessmentLesson: Lesson = {
  id: "html-basics-assessment",
  trackId: "frontend-engineering",
  moduleId: "html-basics",
  title: "Uji Kompetensi HTML Basics",
  slug: "html-basics-assessment",
  description:
    "Cek kesiapan kamu membaca dan menulis struktur HTML dasar sebelum lanjut ke Semantic HTML.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Membedakan head, body, title, h1, tag, element, dan attribute",
    "Memakai href, src, dan alt pada HTML sederhana",
    "Membangun halaman HTML kecil dengan auto-check",
  ],
  skillTags: ["HTML", "Assessment", "Web Fundamentals"],
  blocks: [
    {
      id: "html-basics-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini menggabungkan dua lesson HTML Basics. Kamu akan mengecek struktur dokumen HTML, perbedaan head dan body, perbedaan title dan h1, serta cara memakai attribute seperti href, src, dan alt. Ini bukan ujian jebakan. Tujuannya memastikan kamu siap masuk ke Semantic HTML.",
    },
    {
      id: "html-basics-assessment-quiz-block",
      type: "quiz",
      quizId: "html-basics-assessment-quiz",
    },
    {
      id: "html-basics-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-html-basics-page",
    },
    {
      id: "html-basics-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap lanjut jika bisa membedakan informasi untuk browser dan konten yang terlihat.",
        "Kamu siap lanjut jika bisa membaca tag, element, dan attribute pada contoh HTML sederhana.",
        "Kamu siap lanjut jika bisa memakai href pada link serta src dan alt pada image.",
        "Berikutnya, kamu akan memakai struktur HTML ini untuk memilih elemen berdasarkan makna lewat Semantic HTML.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "html-basics-assessment-recap",
      "html-basics-assessment-quiz-block",
      "html-basics-assessment-coding-practice",
      "html-basics-assessment-summary",
    ],
    passingQuizScore: 70,
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
      id: "semantic-html-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap jika bisa memilih semantic element berdasarkan fungsi konten.",
        "Gunakan nav untuk navigasi, main untuk konten utama, dan footer untuk bagian penutup.",
        "Gunakan section atau article ketika bagian konten punya kelompok atau isi mandiri yang jelas.",
        "Assessment ini menutup module Semantic HTML. Setelah ini, module berikutnya belum diaktifkan sampai materi Forms atau CSS siap.",
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
  htmlBasicsAssessmentLesson,
  semanticHtmlStructureLesson,
  htmlSemanticBasicsLesson,
  semanticHtmlAssessmentLesson,
  cssFlexboxBasicsLesson,
  writingDailyUpdateLesson,
];
