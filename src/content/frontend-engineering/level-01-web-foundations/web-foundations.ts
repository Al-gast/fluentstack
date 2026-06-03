import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const webFoundationsModule: Module = {
  id: "web-foundations",
  trackId: "frontend-engineering",
  title: "Web Foundations",
  slug: "web-foundations",
  description:
    "Pahami apa itu website, cara web page dimuat, peran HTML/CSS/JavaScript, dan file dasar di project frontend kecil.",
  order: 1,
  lessonIds: [
    "what-is-website-and-web-page",
    "how-web-page-loads",
    "what-are-html-css-javascript",
    "html-css-js-roles",
    "index-css-js-files",
    "small-frontend-project-structure",
    "web-foundations-assessment",
  ],
  estimatedHours: 12,
  skillTags: ["Web Fundamentals", "Browser", "HTML", "CSS", "JavaScript"],
};

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
      "what-is-website-and-web-page-summary",
    ],
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
      "how-web-page-loads-summary",
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
      "what-are-html-css-javascript-summary",
    ],
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
      "html-css-js-roles-summary",
    ],
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
        "Berikutnya, kamu akan menutup Web Foundations dengan assessment singkat sebelum masuk ke HTML Basics.",
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

export const webFoundationsAssessmentLesson: Lesson = {
  id: "web-foundations-assessment",
  trackId: "frontend-engineering",
  moduleId: "web-foundations",
  title: "Uji Kompetensi Web Foundations",
  slug: "web-foundations-assessment",
  description:
    "Cek kesiapan kamu memahami website, browser, HTML/CSS/JavaScript, dan struktur project frontend kecil sebelum masuk ke HTML Basics.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Membedakan website, web page, URL, request, dan response secara sederhana",
    "Menjelaskan peran HTML, CSS, dan JavaScript dalam satu halaman",
    "Mengenali file dan folder dasar di project frontend kecil",
  ],
  skillTags: ["Web Fundamentals", "Assessment", "Browser", "HTML", "CSS", "JavaScript"],
  blocks: [
    {
      id: "web-foundations-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini merangkum Web Foundations. Kamu akan mengecek apakah sudah bisa membedakan website dan web page, memahami URL sebagai alamat halaman, mengikuti alur browser meminta halaman, serta mengenali peran HTML, CSS, JavaScript, dan file project sederhana. Ini bukan ujian jebakan. Tujuannya memastikan fondasi kamu cukup kuat sebelum mulai menulis HTML.",
    },
    {
      id: "web-foundations-assessment-quiz-block",
      type: "quiz",
      quizId: "web-foundations-assessment-quiz",
    },
    {
      id: "web-foundations-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi, bukan tugas menghafal. Kamu tidak perlu membaca semuanya sekarang. Fokus pada bagian yang sudah kamu pelajari.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Learn web development",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
          focus: [
            "gambaran besar jalur belajar web",
            "posisi HTML, CSS, JavaScript",
            "istilah dasar yang mulai muncul di FluentStack",
          ],
          ignoreForNow: ["framework", "testing", "deployment"],
        },
        {
          source: "MDN Web Docs",
          title: "Getting started modules",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started",
          focus: [
            "cara pemula mulai memahami website",
            "file web dasar",
            "langkah awal belajar web",
          ],
          ignoreForNow: [
            "setup lokal yang terlalu lengkap",
            "topik yang belum muncul di FluentStack",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "How the web works",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
          focus: [
            "browser meminta halaman",
            "server mengirim response",
            "browser menampilkan halaman",
          ],
          ignoreForNow: ["detail networking yang terlalu dalam"],
        },
      ],
      followUpAction:
        "Tulis ulang dengan kalimat sendiri: ketika saya membuka sebuah URL, browser meminta halaman, menerima file, lalu menampilkan struktur, tampilan, dan interaksi.",
    },
    {
      id: "web-foundations-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap lanjut jika bisa melihat website sebagai kumpulan web page yang punya URL masing-masing.",
        "Kamu siap lanjut jika bisa menjelaskan bahwa browser mengirim request dan server mengirim response secara sederhana.",
        "Kamu siap lanjut jika bisa membedakan HTML untuk struktur, CSS untuk tampilan, dan JavaScript untuk interaksi.",
        "Kamu siap lanjut jika bisa membaca project kecil yang berisi index.html, style.css, script.js, dan folder assets.",
        "Berikutnya, kamu masuk ke HTML Basics dan mulai membaca isi index.html lewat struktur HTML dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "web-foundations-assessment-recap",
      "web-foundations-assessment-quiz-block",
      "web-foundations-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const whatIsWebsiteAndWebPageQuiz: Quiz = {
  id: "what-is-website-and-web-page-quiz",
  lessonId: "what-is-website-and-web-page",
  title: "Kuis Website dan Web Page",
  passingScore: 70,
  questions: [
    {
      id: "what-is-website-and-web-page-q1",
      type: "multiple-choice",
      question: "Mana cara paling tepat membedakan website dan web page?",
      options: [
        "Website adalah alamat halaman, web page adalah aplikasi untuk membuka alamat itu",
        "Website adalah kumpulan halaman yang saling berhubungan, web page adalah satu halaman tertentu",
        "Website adalah satu halaman tertentu, web page adalah kumpulan halaman",
        "Website dan web page selalu berarti satu halaman yang sama",
      ],
      correctAnswer:
        "Website adalah kumpulan halaman yang saling berhubungan, web page adalah satu halaman tertentu",
      explanation:
        "Website adalah kumpulan. Web page adalah satu bagian di dalam kumpulan itu. Cara ini membantu kamu melihat FluentStack sebagai satu website dengan banyak halaman.",
    },
    {
      id: "what-is-website-and-web-page-q2",
      type: "multiple-choice",
      question: "Di FluentStack, mana contoh web page?",
      options: [
        "Seluruh FluentStack sebagai platform belajar",
        "Nama FluentStack yang muncul di header",
        "Halaman Roadmap yang kamu buka dari menu belajar",
        "Browser yang dipakai untuk membuka FluentStack",
      ],
      correctAnswer: "Halaman Roadmap yang kamu buka dari menu belajar",
      explanation:
        "Roadmap adalah satu halaman tertentu di dalam website FluentStack. Dashboard dan halaman Lesson juga contoh web page.",
    },
    {
      id: "what-is-website-and-web-page-q3",
      type: "multiple-choice",
      question: "Apa fungsi URL di lesson ini?",
      options: [
        "Menjadi nama tampilan untuk semua halaman di satu website",
        "Menentukan apakah halaman termasuk Dashboard atau Roadmap tanpa alamat",
        "Menggabungkan semua web page menjadi satu halaman",
        "Menjadi alamat yang membantu browser membuka satu halaman tertentu",
      ],
      correctAnswer: "Menjadi alamat yang membantu browser membuka satu halaman tertentu",
      explanation:
        "URL cukup dipahami sebagai alamat halaman. Saat alamat berubah, browser bisa membuka halaman yang berbeda.",
    },
    {
      id: "what-is-website-and-web-page-q4",
      type: "multiple-choice",
      question: "Kamu melihat alamat berubah dari /dashboard ke /roadmap, tetapi masih di FluentStack. Apa yang kemungkinan terjadi?",
      options: [
        "Kamu pindah ke web page lain di website yang sama",
        "Kamu membuka website baru yang tidak berhubungan dengan FluentStack",
        "Dashboard dan Roadmap menjadi satu halaman yang sama",
        "Browser berhenti memakai URL untuk menentukan halaman",
      ],
      correctAnswer: "Kamu pindah ke web page lain di website yang sama",
      explanation:
        "Bagian seperti /dashboard dan /roadmap membantu membedakan halaman. Keduanya bisa tetap berada di satu website yang sama.",
    },
  ],
};

export const howWebPageLoadsQuiz: Quiz = {
  id: "how-web-page-loads-quiz",
  lessonId: "how-web-page-loads",
  title: "Kuis Cara Kerja Web Page",
  passingScore: 70,
  questions: [
    {
      id: "how-web-page-loads-q1",
      type: "multiple-choice",
      question: "Saat kamu membuka URL, apa langkah pertama yang dilakukan browser secara sederhana?",
      options: [
        "Langsung menampilkan halaman tanpa meminta apa pun",
        "Mengirim request untuk meminta halaman atau resource yang dibutuhkan",
        "Mengubah URL menjadi folder project di komputer kamu",
        "Menyalin halaman dari tab browser lain",
      ],
      correctAnswer: "Mengirim request untuk meminta halaman atau resource yang dibutuhkan",
      explanation:
        "Request berarti permintaan. Browser memakai URL untuk tahu halaman mana yang perlu diminta sebelum halaman bisa ditampilkan.",
    },
    {
      id: "how-web-page-loads-q2",
      type: "true-false",
      question: "Response adalah jawaban dari server setelah browser mengirim request.",
      correctAnswer: true,
      explanation:
        "Response adalah balasan dari server. Isinya tidak selalu HTML; bisa juga CSS, JavaScript, gambar, atau data JSON.",
    },
    {
      id: "how-web-page-loads-q3",
      type: "multiple-choice",
      question: "Apa contoh resource yang bisa dikirim server sebagai response?",
      options: [
        "Pengaturan brightness layar",
        "Riwayat semua tab yang pernah dibuka",
        "File halaman, gambar, atau data yang dibutuhkan",
        "Nama keyboard yang sedang dipakai",
      ],
      correctAnswer: "File halaman, gambar, atau data yang dibutuhkan",
      explanation:
        "Response adalah balasan dari server. Balasan itu bisa berisi resource yang dibutuhkan halaman, seperti file halaman, gambar, file pendukung, atau data.",
    },
    {
      id: "how-web-page-loads-q4",
      type: "multiple-choice",
      question: "Apa arti render dalam konteks browser?",
      options: [
        "Menyimpan URL sebagai nama file project",
        "Mengulang kuis setelah halaman terbuka",
        "Mengubah address bar tanpa membaca halaman",
        "Mengubah resource menjadi tampilan halaman yang bisa dilihat",
      ],
      correctAnswer: "Mengubah resource menjadi tampilan halaman yang bisa dilihat",
      explanation:
        "Render berarti browser membaca resource yang diterima lalu mengubahnya menjadi tampilan halaman yang bisa dilihat dan digunakan.",
    },
  ],
};

export const whatAreHtmlCssJavascriptQuiz: Quiz = {
  id: "what-are-html-css-javascript-quiz",
  lessonId: "what-are-html-css-javascript",
  title: "Kuis HTML, CSS, dan JavaScript",
  passingScore: 70,
  questions: [
    {
      id: "what-are-html-css-javascript-q1",
      type: "multiple-choice",
      question: "Bagian mana yang memberi struktur utama pada halaman web?",
      options: ["CSS", "HTML", "JavaScript", "URL"],
      correctAnswer: "HTML",
      explanation:
        "HTML dipakai untuk menyusun isi dan struktur halaman, seperti heading, paragraf, tombol, dan link.",
    },
    {
      id: "what-are-html-css-javascript-q2",
      type: "multiple-choice",
      question: "Bagian mana yang paling tepat untuk mengatur warna, ukuran teks, dan spacing?",
      options: ["HTML", "URL", "CSS", "JavaScript"],
      correctAnswer: "CSS",
      explanation:
        "CSS mengatur tampilan visual. HTML tetap menyimpan struktur, sedangkan CSS membuat struktur itu terlihat rapi.",
    },
    {
      id: "what-are-html-css-javascript-q3",
      type: "multiple-choice",
      question: "Bagian mana yang biasanya dipakai untuk menambahkan interaksi klik?",
      options: ["HTML", "CSS", "URL", "JavaScript"],
      correctAnswer: "JavaScript",
      explanation:
        "JavaScript dipakai saat halaman perlu merespons aksi pengguna, misalnya klik tombol, input form, atau perubahan data.",
    },
    {
      id: "what-are-html-css-javascript-q4",
      type: "true-false",
      question: "HTML, CSS, dan JavaScript punya peran yang sama persis.",
      correctAnswer: false,
      explanation:
        "Ketiganya saling bekerja sama, tetapi perannya berbeda: HTML untuk struktur, CSS untuk tampilan, JavaScript untuk interaksi.",
    },
  ],
};

export const htmlCssJsRolesQuiz: Quiz = {
  id: "html-css-js-roles-quiz",
  lessonId: "html-css-js-roles",
  title: "Kuis Peran HTML, CSS, dan JavaScript",
  passingScore: 70,
  questions: [
    {
      id: "html-css-js-roles-q1",
      type: "multiple-choice",
      question: "Saat browser membuka web page, resource mana yang biasanya memberi struktur awal?",
      options: ["CSS", "JavaScript", "HTML", "Gambar"],
      correctAnswer: "HTML",
      explanation:
        "HTML memberi struktur awal halaman. Dari HTML, browser bisa menemukan file CSS, JavaScript, gambar, atau resource lain yang dibutuhkan.",
    },
    {
      id: "html-css-js-roles-q2",
      type: "multiple-choice",
      question: "Jika layout card berubah dari satu kolom menjadi dua kolom, bagian mana yang biasanya mengatur itu?",
      options: ["HTML", "URL", "JavaScript saja", "CSS"],
      correctAnswer: "CSS",
      explanation:
        "Perubahan layout visual biasanya diatur dengan CSS, misalnya memakai Flexbox, Grid, atau media query.",
    },
    {
      id: "html-css-js-roles-q3",
      type: "multiple-choice",
      question: "Jika tombol membuka menu saat diklik, bagian mana yang biasanya menambahkan perilaku itu?",
      options: ["CSS saja", "JavaScript", "HTML doctype", "File gambar di assets"],
      correctAnswer: "JavaScript",
      explanation:
        "JavaScript bisa mendengarkan event klik lalu mengubah kondisi UI, seperti membuka atau menutup menu.",
    },
    {
      id: "html-css-js-roles-q4",
      type: "code-output",
      question: "Pada kode berikut, bagian mana yang menjadi struktur HTML?",
      code: `<button id="save-button">Simpan</button>`,
      options: [
        "Element button dengan teks Simpan",
        "Warna tombol",
        "Event saat tombol diklik",
        "Alamat halaman Roadmap",
      ],
      correctAnswer: "Element button dengan teks Simpan",
      explanation:
        "Kode tersebut membuat struktur tombol di HTML. Warna diatur CSS, sedangkan perilaku klik biasanya ditambahkan JavaScript.",
    },
  ],
};

export const webFoundationsAssessmentQuiz: Quiz = {
  id: "web-foundations-assessment-quiz",
  lessonId: "web-foundations-assessment",
  title: "Uji Kompetensi Web Foundations",
  passingScore: 70,
  questions: [
    {
      id: "web-foundations-assessment-q1",
      type: "multiple-choice",
      question: "Mana pernyataan yang paling tepat tentang website dan web page?",
      options: [
        "Website adalah satu halaman, web page adalah browser untuk membukanya",
        "Website dan web page selalu berarti hal yang sama",
        "Website adalah kumpulan halaman terkait, web page adalah satu halaman tertentu",
        "Website adalah file CSS, web page adalah file JavaScript",
      ],
      correctAnswer:
        "Website adalah kumpulan halaman terkait, web page adalah satu halaman tertentu",
      explanation:
        "Website adalah kumpulan halaman yang saling berhubungan. Web page adalah satu halaman spesifik di dalam kumpulan itu, seperti Dashboard atau Roadmap.",
    },
    {
      id: "web-foundations-assessment-q2",
      type: "multiple-choice",
      question: "Dalam URL, bagian path seperti /dashboard atau /lesson/... membantu menunjukkan apa?",
      options: [
        "Warna utama halaman",
        "Halaman mana yang sedang dibuka di website",
        "Nama browser yang sedang dipakai",
        "Apakah JavaScript sedang aktif atau tidak",
      ],
      correctAnswer: "Halaman mana yang sedang dibuka di website",
      explanation:
        "Path membantu membedakan halaman di dalam website yang sama. Misalnya /dashboard dan /roadmap bisa menunjuk ke web page yang berbeda.",
    },
    {
      id: "web-foundations-assessment-q3",
      type: "multiple-choice",
      question: "Saat browser membuka sebuah URL, apa yang terjadi secara sederhana?",
      options: [
        "Browser langsung membuat halaman tanpa meminta apa pun",
        "Browser mengubah URL menjadi file lokal di komputer",
        "Browser menebak isi halaman dari judul tab",
        "Browser mengirim request untuk meminta halaman atau resource",
      ],
      correctAnswer: "Browser mengirim request untuk meminta halaman atau resource",
      explanation:
        "Request berarti permintaan. Browser memakai URL untuk meminta halaman atau resource yang dibutuhkan sebelum menampilkannya.",
    },
    {
      id: "web-foundations-assessment-q4",
      type: "multiple-choice",
      question: "Apa arti response dalam alur browser dan server?",
      options: [
        "Balasan dari server setelah browser mengirim request",
        "Alamat yang diketik di address bar",
        "Tombol untuk me-refresh halaman",
        "Nama folder untuk menyimpan gambar",
      ],
      correctAnswer: "Balasan dari server setelah browser mengirim request",
      explanation:
        "Response adalah balasan dari server. Balasan itu bisa berisi HTML, CSS, JavaScript, gambar, data, atau resource lain yang dibutuhkan halaman.",
    },
    {
      id: "web-foundations-assessment-q5",
      type: "multiple-choice",
      question: "Apa peran utama HTML di sebuah web page?",
      options: [
        "Mengatur warna dan jarak antar elemen",
        "Membuat server mengirim response lebih cepat",
        "Menyusun isi dan struktur halaman",
        "Menyimpan semua gambar di folder assets",
      ],
      correctAnswer: "Menyusun isi dan struktur halaman",
      explanation:
        "HTML dipakai untuk struktur dan isi, seperti heading, paragraf, link, tombol, dan area konten.",
    },
    {
      id: "web-foundations-assessment-q6",
      type: "multiple-choice",
      question: "Apa peran utama CSS?",
      options: [
        "Menentukan alamat URL halaman",
        "Mengatur tampilan seperti warna, ukuran, jarak, dan layout",
        "Mengganti semua isi HTML dengan folder project",
        "Mengirim request dari browser ke server",
      ],
      correctAnswer: "Mengatur tampilan seperti warna, ukuran, jarak, dan layout",
      explanation:
        "CSS mengatur tampilan visual halaman. HTML tetap menyimpan struktur, sedangkan CSS membuat struktur itu terlihat rapi.",
    },
    {
      id: "web-foundations-assessment-q7",
      type: "multiple-choice",
      question: "Kapan JavaScript biasanya dibutuhkan?",
      options: [
        "Saat hanya ingin menulis paragraf biasa",
        "Saat hanya ingin memberi nama title di tab browser",
        "Saat ingin menyimpan gambar ke folder assets",
        "Saat halaman perlu merespons aksi seperti klik atau input",
      ],
      correctAnswer: "Saat halaman perlu merespons aksi seperti klik atau input",
      explanation:
        "JavaScript dipakai untuk perilaku interaktif, misalnya tombol yang membuka menu atau form yang merespons input.",
    },
    {
      id: "web-foundations-assessment-q8",
      type: "multiple-choice",
      question: "Dalam project frontend kecil, apa fungsi umum index.html?",
      options: [
        "Menjadi file halaman utama yang berisi struktur awal",
        "Menjadi folder khusus untuk gambar dan ikon",
        "Menjadi file khusus untuk aturan warna",
        "Menjadi file khusus untuk event klik",
      ],
      correctAnswer: "Menjadi file halaman utama yang berisi struktur awal",
      explanation:
        "index.html biasanya menjadi halaman utama atau pintu masuk awal. Dari sana browser bisa membaca struktur halaman dan menemukan resource lain.",
    },
    {
      id: "web-foundations-assessment-q9",
      type: "multiple-choice",
      question: "Pasangan file dan peran mana yang paling tepat?",
      options: [
        "style.css untuk interaksi klik, script.js untuk struktur heading",
        "index.html untuk gambar saja, assets untuk aturan CSS",
        "style.css untuk tampilan, script.js untuk perilaku interaktif",
        "script.js untuk alamat URL, style.css untuk request server",
      ],
      correctAnswer: "style.css untuk tampilan, script.js untuk perilaku interaktif",
      explanation:
        "style.css biasanya menyimpan aturan tampilan. script.js biasanya menyimpan JavaScript untuk perilaku interaktif.",
    },
    {
      id: "web-foundations-assessment-q10",
      type: "multiple-choice",
      question: "Di struktur project kecil, folder assets biasanya dipakai untuk apa?",
      options: [
        "Menyimpan semua quiz lesson",
        "Menyimpan gambar, ikon, atau file pendukung",
        "Mengganti fungsi index.html",
        "Mengirim response dari server",
      ],
      correctAnswer: "Menyimpan gambar, ikon, atau file pendukung",
      explanation:
        "Folder assets membantu memisahkan file pendukung seperti gambar, ikon, atau media dari file utama seperti HTML, CSS, dan JavaScript.",
    },
  ],
};

export const webFoundationsLessons: Lesson[] = [
  whatIsWebsiteAndWebPageLesson,
  howWebPageLoadsLesson,
  whatAreHtmlCssJavascriptLesson,
  htmlCssJsRolesLesson,
  indexCssJsFilesLesson,
  smallFrontendProjectStructureLesson,
  webFoundationsAssessmentLesson,
];

export const webFoundationsQuizzes: Quiz[] = [
  whatIsWebsiteAndWebPageQuiz,
  howWebPageLoadsQuiz,
  whatAreHtmlCssJavascriptQuiz,
  htmlCssJsRolesQuiz,
  webFoundationsAssessmentQuiz,
];

export const webFoundationsChallenges: CodingChallenge[] = [];
