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
    "Pahami perbedaan tag, element, dan attribute sebelum memakai elemen konten dasar.",
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
        "Berikutnya, kamu akan memakai tag dan attribute ini untuk membuat konten halaman: heading, paragraf, link, dan gambar.",
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

export const headingsParagraphsLinksImagesLesson: Lesson = {
  id: "headings-paragraphs-links-images",
  trackId: "frontend-engineering",
  moduleId: "html-basics",
  title: "Heading, Paragraf, Link, dan Gambar",
  slug: "headings-paragraphs-links-images",
  description:
    "Belajar memakai elemen konten dasar yang biasanya terlihat di dalam body halaman HTML.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 36,
  objectives: [
    "Memahami fungsi heading dan paragraf sebagai struktur konten",
    "Memakai link dengan href dan image dengan src serta alt",
    "Membuat halaman konten sederhana dan melihat hasilnya di preview",
  ],
  skillTags: ["HTML", "Web Fundamentals", "Content Structure"],
  blocks: [
    {
      id: "headings-paragraphs-links-images-intro",
      type: "text",
      title: "Mulai mengisi body halaman",
      content:
        "Di lesson sebelumnya, kamu sudah mengenal tag, element, dan attribute. Sekarang kamu memakai beberapa element yang paling sering muncul di dalam body: heading, paragraf, link, dan gambar. Kamu belum perlu menghafal banyak tag. Fokus dulu pada fungsi setiap element dan kapan dipakai.",
    },
    {
      id: "headings-paragraphs-links-images-core-concept",
      type: "text",
      title: "Konten yang sering terlihat di halaman",
      content:
        "h1 dipakai untuk heading utama halaman atau bagian besar. h2 dan h3 dipakai untuk heading tingkat berikutnya ketika konten punya subbagian. p dipakai untuk paragraf teks biasa. a dipakai untuk membuat link, dan attribute href memberi tahu tujuan link. img dipakai untuk menampilkan gambar; attribute src memberi tahu lokasi gambar, sedangkan alt berisi deskripsi singkat ketika gambar tidak bisa dilihat atau gagal dimuat.",
    },
    {
      id: "headings-paragraphs-links-images-code-example",
      type: "code-example",
      title: "Contoh konten halaman sederhana",
      language: "html",
      code: `<body>
  <h1>Catatan Belajar HTML</h1>
  <p>Saya sedang belajar membuat struktur konten halaman.</p>

  <a href="/roadmap">Lihat roadmap belajar</a>

  <img src="images/html-card.png" alt="Kartu belajar HTML" />
</body>`,
      explanation:
        "Contoh ini berisi konten yang terlihat di halaman. h1 menjadi heading utama, p menjadi teks biasa, a menjadi link, dan img menampilkan gambar dengan deskripsi alt.",
    },
    {
      id: "headings-paragraphs-links-images-read-example",
      type: "text",
      title: "Cara membaca kode ini",
      content:
        "Baca dari tujuan kontennya. Teks paling penting menjadi h1. Penjelasan normal menjadi p. Teks yang membawa pengguna ke halaman lain menjadi a dengan href. Gambar memakai img dengan src untuk lokasi file dan alt untuk deskripsi. Semua contoh ini biasanya ditulis di dalam body karena ingin terlihat di halaman.",
    },
    {
      id: "headings-paragraphs-links-images-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memilih heading hanya karena ingin teks besar",
      content:
        "Heading menjelaskan struktur konten, bukan sekadar ukuran teks. Kalau teks hanya perlu terlihat besar, nanti CSS yang mengatur tampilannya. Kesalahan lain yang sering terjadi adalah menulis img tanpa alt, padahal alt membantu menjelaskan gambar saat gambar tidak terlihat atau gagal dimuat.",
    },
    {
      id: "headings-paragraphs-links-images-quick-check",
      type: "quick-check",
      question: "Attribute mana yang menjelaskan gambar ketika gambar tidak bisa dilihat atau gagal dimuat?",
      options: ["href", "src", "alt", "h1"],
      correctAnswer: "alt",
      explanation:
        "alt berisi teks alternatif untuk gambar. src menentukan lokasi gambar, sedangkan href dipakai pada link.",
    },
    {
      id: "headings-paragraphs-links-images-coding-practice",
      type: "coding-practice",
      challengeId: "build-basic-content-page",
    },
    {
      id: "headings-paragraphs-links-images-summary",
      type: "summary",
      points: [
        "Gunakan h1 untuk heading utama, lalu h2 atau h3 untuk subbagian jika diperlukan.",
        "Gunakan p untuk paragraf teks biasa.",
        "Gunakan a dengan href untuk membuat link.",
        "Gunakan img dengan src dan alt untuk gambar yang bisa dipahami lebih jelas.",
        "Berikutnya, kamu akan melihat cara href dan src menunjuk ke file lain dengan relative path sederhana.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "headings-paragraphs-links-images-intro",
      "headings-paragraphs-links-images-core-concept",
      "headings-paragraphs-links-images-code-example",
      "headings-paragraphs-links-images-read-example",
      "headings-paragraphs-links-images-common-mistake",
      "headings-paragraphs-links-images-quick-check",
      "headings-paragraphs-links-images-coding-practice",
      "headings-paragraphs-links-images-summary",
    ],
  },
};

export const relativePathsBasicLesson: Lesson = {
  id: "relative-paths-basic",
  trackId: "frontend-engineering",
  moduleId: "html-basics",
  title: "Relative Paths Dasar",
  slug: "relative-paths-basic",
  description:
    "Belajar membaca href dan src yang menunjuk ke file lain di project HTML kecil.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 34,
  objectives: [
    "Memahami href dan src sebagai penunjuk ke halaman atau file",
    "Membaca relative path sederhana seperti about.html dan images/logo.png",
    "Memakai relative path pada link dan image di halaman HTML kecil",
  ],
  skillTags: ["HTML", "Relative Paths", "Project Structure"],
  blocks: [
    {
      id: "relative-paths-basic-intro",
      type: "text",
      title: "Href dan src menunjuk ke lokasi",
      content:
        "Di lesson sebelumnya, kamu memakai href pada link dan src pada image. Sekarang kamu melihat nilai di dalam href dan src. Nilai itu sering berupa path, yaitu petunjuk lokasi file atau halaman. Kamu belum perlu masuk ke teori filesystem yang dalam. Fokus dulu pada contoh project kecil.",
    },
    {
      id: "relative-paths-basic-core-concept",
      type: "text",
      title: "Relative path dibaca dari posisi file saat ini",
      content:
        "Relative path adalah path yang dibaca dari posisi file HTML yang sedang kamu tulis. Jika index.html dan about.html berada di folder yang sama, link bisa memakai href=\"about.html\". Jika gambar berada di folder images, image bisa memakai src=\"images/logo.png\" atau src=\"./images/logo.png\". Tanda ./ berarti mulai dari folder saat ini.",
    },
    {
      id: "relative-paths-basic-code-example",
      type: "code-example",
      title: "Contoh project kecil dan HTML-nya",
      language: "html",
      code: `project-belajar/
  index.html
  about.html
  images/
    logo.png

<!-- di dalam index.html -->
<a href="about.html">Tentang saya</a>
<img src="images/logo.png" alt="Logo project belajar" />`,
      explanation:
        "about.html berada sejajar dengan index.html, jadi href cukup menulis about.html. logo.png berada di dalam folder images, jadi src menulis images/logo.png.",
    },
    {
      id: "relative-paths-basic-mini-action",
      type: "text",
      title: "Coba bandingkan href dan src",
      content:
        "Perhatikan dua nilai ini: href=\"about.html\" dan src=\"images/logo.png\". Nilai pertama menunjuk ke file yang sejajar dengan index.html. Nilai kedua masuk dulu ke folder images, lalu mencari file logo.png. Kalau nama folder atau file tidak cocok, link bisa salah tujuan atau gambar tidak tampil.",
    },
    {
      id: "relative-paths-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Path harus cocok dengan nama file dan folder",
      content:
        "Kesalahan yang sering terjadi adalah menulis src=\"image/logo.png\" padahal folder aslinya bernama images, atau menulis About.html padahal file sebenarnya about.html. Di banyak environment, perbedaan huruf besar dan kecil bisa membuat path tidak cocok.",
    },
    {
      id: "relative-paths-basic-quick-check",
      type: "quick-check",
      question:
        "Jika index.html dan about.html berada di folder yang sama, href mana yang paling sederhana untuk menuju about.html?",
      options: ["images/about.html", "about.html", "src/about.html", "logo.png"],
      correctAnswer: "about.html",
      explanation:
        "Jika dua file sejajar di folder yang sama, relative path paling sederhana cukup memakai nama file: about.html.",
    },
    {
      id: "relative-paths-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-relative-paths",
    },
    {
      id: "relative-paths-basic-summary",
      type: "summary",
      points: [
        "Gunakan href untuk tujuan link dan src untuk lokasi gambar atau file media.",
        "Gunakan about.html jika file tujuan sejajar dengan index.html.",
        "Gunakan images/logo.png atau ./images/logo.png jika file berada di folder images.",
        "Cek nama folder dan file dengan teliti karena path yang tidak cocok membuat link atau gambar gagal bekerja.",
        "Berikutnya, kamu akan menguji semua materi HTML Basics lewat assessment module.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "relative-paths-basic-intro",
      "relative-paths-basic-core-concept",
      "relative-paths-basic-code-example",
      "relative-paths-basic-mini-action",
      "relative-paths-basic-common-mistake",
      "relative-paths-basic-quick-check",
      "relative-paths-basic-coding-practice",
      "relative-paths-basic-summary",
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
    "Cek kesiapan kamu membaca dan menulis halaman HTML dasar sebelum lanjut ke Semantic HTML.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Membedakan struktur dokumen, tag, element, dan attribute",
    "Memakai heading, paragraf, link, image, href, src, alt, dan relative path sederhana",
    "Membangun halaman HTML kecil dengan konten dasar dan auto-check",
  ],
  skillTags: ["HTML", "Assessment", "Web Fundamentals"],
  blocks: [
    {
      id: "html-basics-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini menggabungkan semua lesson HTML Basics. Kamu akan mengecek struktur dokumen HTML, perbedaan head dan body, perbedaan title dan h1, tag, element, attribute, heading, paragraf, link, image, alt text, dan relative path sederhana. Ini bukan ujian jebakan. Tujuannya memastikan kamu siap masuk ke Semantic HTML.",
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
      id: "html-basics-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi, bukan tugas menghafal. Kamu tidak perlu membaca semuanya sekarang. Fokus pada bagian yang sudah kamu pelajari.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Basic HTML syntax",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax",
          focus: ["tag", "element", "attribute", "struktur dasar HTML"],
          ignoreForNow: ["detail reference yang belum dipakai di latihan"],
        },
        {
          source: "MDN Web Docs",
          title: "Web page metadata",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata",
          focus: ["fungsi head", "fungsi title", "metadata dasar halaman"],
          ignoreForNow: ["SEO advanced", "social sharing metadata"],
        },
        {
          source: "MDN Web Docs",
          title: "Creating links",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links",
          focus: [
            "fungsi href",
            "teks link yang jelas",
            "link relatif dan absolut secara umum",
          ],
          ignoreForNow: ["attribute advanced"],
        },
        {
          source: "MDN Web Docs",
          title: "HTML images",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images",
          focus: [
            "fungsi src",
            "fungsi alt",
            "kenapa gambar butuh deskripsi",
          ],
          ignoreForNow: ["responsive images", "image performance"],
        },
      ],
      followUpAction:
        "Kembali ke latihan HTML Basics dan tunjukkan satu tag, satu element, satu attribute, satu link dengan href, dan satu image dengan src serta alt.",
    },
    {
      id: "html-basics-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap lanjut jika bisa membedakan informasi untuk browser dan konten yang terlihat.",
        "Kamu siap lanjut jika bisa membaca tag, element, dan attribute pada contoh HTML sederhana.",
        "Kamu siap lanjut jika bisa memakai heading, paragraf, link, image, href, src, alt, dan relative path sederhana.",
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

export const linkVsButtonLesson: Lesson = {
  id: "link-vs-button",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Link vs Button",
  slug: "link-vs-button",
  description:
    "Pahami kapan memakai link dan kapan memakai button agar interaksi halaman lebih jelas.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 20,
  objectives: [
    "Membedakan link untuk berpindah tempat dan button untuk menjalankan aksi",
    "Memilih elemen berdasarkan maksud pengguna, bukan tampilan visual",
    "Menghindari kesalahan umum saat memilih link atau button",
  ],
  skillTags: ["HTML", "Accessibility", "Forms"],
  blocks: [
    {
      id: "link-vs-button-intro",
      type: "text",
      title: "Tampilan bisa mirip, maknanya berbeda",
      content:
        "Link dan button bisa dibuat terlihat mirip dengan CSS. Tetapi di HTML, maknanya berbeda. Link dipakai ketika user berpindah tempat: membuka halaman, bagian halaman, file, atau website lain. Button dipakai ketika user menjalankan aksi di halaman: mengirim form, membuka menu, membuka modal, menyimpan data, atau menandai sesuatu selesai.",
    },
    {
      id: "link-vs-button-examples",
      type: "text",
      title: "Contoh di FluentStack",
      content:
        "Di FluentStack, teks seperti Semua track, Lihat roadmap, atau Buka dokumentasi adalah link karena membawa kamu ke halaman atau resource lain. Tombol seperti Kirim jawaban, Tandai selesai, atau Reset adalah button karena menjalankan aksi di halaman yang sedang kamu pakai.",
    },
    {
      id: "link-vs-button-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memilih dari bentuk visual saja",
      content:
        "Kesalahan yang sering terjadi adalah memakai button untuk navigasi biasa atau link untuk aksi form. Pilih dari maksud user: berpindah tempat berarti link, menjalankan aksi berarti button. Tampilan visual bisa diatur belakangan dengan CSS.",
    },
    {
      id: "link-vs-button-quick-check",
      type: "quick-check",
      question:
        "Kalau user menekan elemen untuk membuka halaman dokumentasi MDN di tab baru, elemen mana yang paling tepat?",
      options: ["Link", "Button", "Input", "Select"],
      correctAnswer: "Link",
      explanation:
        "Link tepat karena user sedang berpindah ke halaman atau resource lain. Link tetap boleh terlihat seperti button, tetapi makna HTML-nya tetap link.",
    },
    {
      id: "link-vs-button-code-example",
      type: "code-example",
      title: "Contoh link dan button",
      language: "html",
      code: `<a href="/roadmap">Lihat roadmap</a>

<button type="button">Buka menu</button>

<button type="submit">Kirim form</button>`,
      explanation:
        "a dengan href membawa user ke tujuan lain. button type=\"button\" menjalankan aksi biasa di halaman. button type=\"submit\" dipakai untuk mengirim form.",
    },
    {
      id: "link-vs-button-summary",
      type: "summary",
      points: [
        "Gunakan link untuk berpindah tempat.",
        "Gunakan button untuk menjalankan aksi.",
        "Tampilan bisa dibuat mirip dengan CSS, tetapi makna HTML tetap harus benar.",
        "Berikutnya, kamu akan membuat form sederhana dengan label dan input.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "link-vs-button-intro",
      "link-vs-button-examples",
      "link-vs-button-common-mistake",
      "link-vs-button-quick-check",
      "link-vs-button-code-example",
      "link-vs-button-summary",
    ],
  },
};

export const formLabelInputLesson: Lesson = {
  id: "form-label-input",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Form, Label, dan Input",
  slug: "form-label-input",
  description:
    "Bangun form sederhana dan hubungkan label dengan input agar field mudah dipahami.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 30,
  objectives: [
    "Memahami fungsi form, label, dan input",
    "Menghubungkan label ke input dengan for dan id",
    "Membuat field email sederhana yang lebih jelas dibaca",
  ],
  skillTags: ["HTML", "Forms", "Accessibility"],
  blocks: [
    {
      id: "form-label-input-intro",
      type: "text",
      title: "Form mengumpulkan input dari user",
      content:
        "Form dipakai ketika halaman perlu menerima data dari user. Label menjelaskan nama atau instruksi sebuah field. Input adalah tempat user mengetik atau memilih nilai. Label bukan sekadar teks yang kebetulan berada di dekat input. Untuk form yang lebih jelas dan lebih accessible, label sebaiknya terhubung ke input.",
    },
    {
      id: "form-label-input-code-example",
      type: "code-example",
      title: "Form email sederhana",
      language: "html",
      code: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />
  <button type="submit">Daftar</button>
</form>`,
      explanation:
        "form mengelompokkan field. label for=\"email\" menunjuk ke input id=\"email\". name membantu mengenali nilai saat form dikirim. type=\"email\" memberi tahu browser bahwa field ini berisi email. Button submit dipakai untuk mengirim form.",
    },
    {
      id: "form-label-input-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Label harus benar-benar terhubung",
      content:
        "Menaruh teks Email di dekat input belum cukup. Nilai for pada label harus cocok dengan id pada input. Koneksi ini membantu browser dan assistive technology memahami field dengan lebih jelas.",
    },
    {
      id: "form-label-input-quick-check",
      type: "quick-check",
      question: "Agar label 'Email' terhubung ke input, pasangan mana yang harus cocok?",
      options: [
        "label for dan input id",
        "label class dan input type",
        "form action dan input placeholder",
        "button type dan input name",
      ],
      correctAnswer: "label for dan input id",
      explanation:
        "Nilai for pada label harus sama dengan id pada input. Contohnya label for=\"email\" terhubung ke input id=\"email\".",
    },
    {
      id: "form-label-input-coding-practice",
      type: "coding-practice",
      challengeId: "build-basic-accessible-form",
    },
    {
      id: "form-label-input-summary",
      type: "summary",
      points: [
        "form mengelompokkan field yang diisi user.",
        "label menjelaskan field.",
        "input menerima data dari user.",
        "for dan id menghubungkan label ke input.",
        "Berikutnya, kamu akan menambah field textarea, select, dan required.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "form-label-input-intro",
      "form-label-input-code-example",
      "form-label-input-common-mistake",
      "form-label-input-quick-check",
      "form-label-input-coding-practice",
      "form-label-input-summary",
    ],
  },
};

export const textareaSelectRequiredFieldsLesson: Lesson = {
  id: "textarea-select-required-fields",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Textarea, Select, dan Required Fields",
  slug: "textarea-select-required-fields",
  description:
    "Tambahkan field pesan, pilihan, dan required agar form lebih lengkap.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Membedakan input, textarea, dan select berdasarkan jenis data",
    "Menggunakan required untuk field yang wajib diisi",
    "Membuat form kontak sederhana dengan beberapa jenis field",
  ],
  skillTags: ["HTML", "Forms", "Accessibility"],
  blocks: [
    {
      id: "textarea-select-required-fields-intro",
      type: "text",
      title: "Form bisa punya beberapa jenis field",
      content:
        "Input cocok untuk nilai pendek seperti nama atau email. Textarea cocok untuk teks panjang seperti pesan. Select cocok ketika user harus memilih dari opsi yang sudah disediakan. Required dipakai untuk memberi tahu browser bahwa field tertentu wajib diisi sebelum form dikirim.",
    },
    {
      id: "textarea-select-required-fields-code-example",
      type: "code-example",
      title: "Textarea dan select",
      language: "html",
      code: `<label for="message">Pesan</label>
<textarea id="message" name="message" required></textarea>

<label for="topic">Topik</label>
<select id="topic" name="topic" required>
  <option value="">Pilih topik</option>
  <option value="support">Support</option>
  <option value="feedback">Feedback</option>
</select>`,
      explanation:
        "Textarea memberi ruang untuk teks panjang. Select membatasi pilihan agar user memilih salah satu opsi. Required membuat browser meminta field diisi sebelum submit.",
    },
    {
      id: "textarea-select-required-fields-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Placeholder bukan pengganti label",
      content:
        "Placeholder bisa membantu memberi contoh isi, tetapi jangan menjadikannya satu-satunya nama field. Tetap tampilkan label yang jelas dan hubungkan label ke field memakai for dan id.",
    },
    {
      id: "textarea-select-required-fields-quick-check",
      type: "quick-check",
      question: "Field mana yang paling cocok untuk pesan panjang dari user?",
      options: ["textarea", "input type=\"email\"", "button", "option"],
      correctAnswer: "textarea",
      explanation:
        "Textarea lebih cocok untuk teks panjang atau multi-line, seperti pesan kontak, catatan, atau deskripsi.",
    },
    {
      id: "textarea-select-required-fields-coding-practice",
      type: "coding-practice",
      challengeId: "build-contact-form-fields",
    },
    {
      id: "textarea-select-required-fields-summary",
      type: "summary",
      points: [
        "input cocok untuk nilai pendek.",
        "textarea cocok untuk teks panjang.",
        "select cocok untuk pilihan yang sudah disediakan.",
        "required membantu browser tahu field wajib.",
        "Berikutnya module ini akan lanjut ke alt text, keyboard navigation, dan checklist aksesibilitas dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "textarea-select-required-fields-intro",
      "textarea-select-required-fields-code-example",
      "textarea-select-required-fields-common-mistake",
      "textarea-select-required-fields-quick-check",
      "textarea-select-required-fields-coding-practice",
      "textarea-select-required-fields-summary",
    ],
  },
};

export const altTextBasicLesson: Lesson = {
  id: "alt-text-basic",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Alt Text Dasar",
  slug: "alt-text-basic",
  description:
    "Pelajari cara menulis alt text sederhana agar gambar punya makna yang bisa dipahami.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami fungsi alt text pada gambar",
    "Membedakan gambar bermakna dan dekoratif secara sederhana",
    "Menulis alt text berdasarkan makna gambar di halaman",
  ],
  skillTags: ["HTML", "Accessibility", "Images"],
  blocks: [
    {
      id: "alt-text-basic-intro",
      type: "text",
      title: "Alt text menjelaskan makna gambar",
      content:
        "Alt text adalah teks alternatif untuk gambar. Teks ini membantu saat gambar gagal dimuat dan membantu assistive technology memahami makna gambar. Untuk tahap awal, pakai pertanyaan ini: apa makna gambar ini untuk halaman? Jawabannya biasanya lebih berguna daripada hanya menyebut bentuk visualnya.",
    },
    {
      id: "alt-text-basic-code-example",
      type: "code-example",
      title: "Contoh alt text yang berguna",
      language: "html",
      code: `<img src="profile.jpg" alt="Foto profil Agastyo" />

<img src="chart.png" alt="Grafik peningkatan progres belajar minggu ini" />`,
      explanation:
        "Alt pertama menjelaskan siapa yang ada di foto. Alt kedua menjelaskan makna grafik, bukan hanya menulis 'grafik' atau nama file. Alt text yang baik mengikuti konteks halaman.",
    },
    {
      id: "alt-text-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Hindari alt yang terlalu umum",
      content:
        "Alt seperti gambar, foto, atau image biasanya tidak membantu. Jangan juga mengulang teks di sekitar gambar jika gambar tidak menambah informasi baru. Untuk gambar dekoratif, empty alt bisa dipakai nanti, tetapi untuk sekarang fokus dulu pada gambar yang punya makna.",
    },
    {
      id: "alt-text-basic-quick-check",
      type: "quick-check",
      question: "Alt text mana yang paling membantu untuk gambar grafik progres belajar?",
      options: [
        "Grafik progres belajar meningkat dari 40% ke 70%",
        "Gambar",
        "Foto bagus",
        "chart.png",
      ],
      correctAnswer: "Grafik progres belajar meningkat dari 40% ke 70%",
      explanation:
        "Alt text sebaiknya menjelaskan makna gambar dalam konteks halaman. Untuk grafik, informasi pentingnya adalah perubahan progres yang ditunjukkan.",
    },
    {
      id: "alt-text-basic-coding-practice",
      type: "coding-practice",
      challengeId: "write-useful-alt-text",
    },
    {
      id: "alt-text-basic-summary",
      type: "summary",
      points: [
        "Alt text menjelaskan makna gambar.",
        "Alt text membantu saat gambar tidak terlihat atau tidak bisa dimuat.",
        "Alt text yang baik mengikuti konteks halaman.",
        "Berikutnya, kamu akan mengecek apakah halaman bisa dipakai dengan keyboard.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "alt-text-basic-intro",
      "alt-text-basic-code-example",
      "alt-text-basic-common-mistake",
      "alt-text-basic-quick-check",
      "alt-text-basic-coding-practice",
      "alt-text-basic-summary",
    ],
  },
};

export const keyboardNavigationBasicLesson: Lesson = {
  id: "keyboard-navigation-basic",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Keyboard Navigation Dasar",
  slug: "keyboard-navigation-basic",
  description:
    "Cek apakah elemen penting di halaman bisa dijangkau dan dipakai dengan keyboard.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami kenapa keyboard navigation penting",
    "Mencoba Tab, Shift + Tab, Enter, dan Space secara sederhana",
    "Mengenali elemen interaktif yang perlu bisa difokuskan",
  ],
  skillTags: ["Accessibility", "HTML", "Forms"],
  blocks: [
    {
      id: "keyboard-navigation-basic-intro",
      type: "text",
      title: "Tidak semua user memakai mouse",
      content:
        "Keyboard navigation berarti user bisa berpindah dan memakai elemen interaktif dengan keyboard. Tab biasanya berpindah ke elemen focusable berikutnya. Shift + Tab bergerak mundur. Enter biasanya mengaktifkan link atau button. Space biasanya mengaktifkan button atau checkbox. Untuk tahap awal, fokus pada perilaku dasarnya dulu.",
    },
    {
      id: "keyboard-navigation-basic-code-example",
      type: "code-example",
      title: "Elemen HTML yang sudah ramah keyboard",
      language: "html",
      code: `<a href="/roadmap">Lihat roadmap</a>

<button type="button">Buka menu</button>

<label for="email">Email</label>
<input id="email" type="email" />`,
      explanation:
        "Link, button, dan input asli sudah punya perilaku keyboard bawaan yang lebih aman. Ini salah satu alasan kamu perlu memilih elemen HTML berdasarkan makna dan fungsi.",
    },
    {
      id: "keyboard-navigation-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Clickable div bisa menyulitkan keyboard",
      content:
        "Div yang diberi event klik bisa terlihat seperti tombol, tetapi tidak otomatis punya perilaku keyboard yang baik. Aturan pemula: pakai button asli untuk aksi dan link asli untuk navigasi.",
    },
    {
      id: "keyboard-navigation-basic-quick-check",
      type: "quick-check",
      question: "Tombol submit form seharusnya bisa dijalankan dengan apa?",
      options: ["Keyboard dan mouse", "Mouse saja", "Screenshot saja", "CSS saja"],
      correctAnswer: "Keyboard dan mouse",
      explanation:
        "Elemen interaktif sebaiknya bisa dipakai oleh user yang memakai mouse maupun keyboard. Button asli membantu menyediakan perilaku itu.",
    },
    {
      id: "keyboard-navigation-basic-mini-action",
      type: "text",
      title: "Coba cek dengan Tab",
      content:
        "Buka salah satu halaman FluentStack, lalu tekan Tab beberapa kali. Amati apakah fokus berpindah ke link, button, atau input. Kamu belum perlu mengaudit semuanya. Cukup mulai mengenali bahwa elemen penting harus bisa dijangkau tanpa mouse.",
    },
    {
      id: "keyboard-navigation-basic-summary",
      type: "summary",
      points: [
        "Keyboard navigation membantu user yang tidak memakai mouse.",
        "Link, button, dan input asli lebih aman untuk keyboard.",
        "Tab membantu mengecek urutan fokus.",
        "Berikutnya, kamu akan memakai checklist sederhana untuk review aksesibilitas awal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "keyboard-navigation-basic-intro",
      "keyboard-navigation-basic-code-example",
      "keyboard-navigation-basic-common-mistake",
      "keyboard-navigation-basic-quick-check",
      "keyboard-navigation-basic-mini-action",
      "keyboard-navigation-basic-summary",
    ],
  },
};

export const basicAccessibilityChecklistLesson: Lesson = {
  id: "basic-accessibility-checklist",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Basic Accessibility Checklist",
  slug: "basic-accessibility-checklist",
  description:
    "Gunakan checklist sederhana untuk mengecek HTML, form, gambar, dan keyboard navigation.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 30,
  objectives: [
    "Menggunakan checklist aksesibilitas dasar",
    "Mengecek label, input, link, button, alt text, dan keyboard navigation",
    "Melihat accessibility sebagai kebiasaan review awal",
  ],
  skillTags: ["Accessibility", "HTML", "Forms"],
  blocks: [
    {
      id: "basic-accessibility-checklist-intro",
      type: "text",
      title: "Accessibility dimulai dari HTML yang benar",
      content:
        "Accessibility bukan hanya polesan terakhir. Banyak keputusan aksesibilitas dimulai dari memilih elemen HTML yang tepat, menghubungkan label dengan field, menulis alt text, dan memastikan elemen interaktif bisa dipakai dengan keyboard.",
    },
    {
      id: "basic-accessibility-checklist-note",
      type: "callout",
      variant: "important",
      title: "Checklist bukan tentang sempurna",
      content:
        "Checklist ini membantu menangkap masalah yang jelas lebih awal sebelum halaman menjadi kompleks. Kamu belum perlu menguasai semua audit accessibility. Mulai dari hal yang bisa kamu cek sendiri.",
    },
    {
      id: "basic-accessibility-checklist-items",
      type: "text",
      title: "Checklist awal",
      content:
        "Cek ini satu per satu: link dipakai untuk navigasi; button dipakai untuk aksi; setiap input penting punya label; label for cocok dengan input id; gambar bermakna punya alt text yang jelas; elemen interaktif bisa dijangkau dengan Tab; urutan heading tetap masuk akal; error text, jika ada, membantu user memperbaiki input.",
    },
    {
      id: "basic-accessibility-checklist-quick-check",
      type: "quick-check",
      question: "Mana contoh review aksesibilitas dasar yang paling tepat?",
      options: [
        "Mengecek apakah input punya label yang terhubung",
        "Mengecek apakah semua teks memakai warna favorit developer",
        "Menghapus semua button dari halaman",
        "Mengubah semua elemen menjadi div",
      ],
      correctAnswer: "Mengecek apakah input punya label yang terhubung",
      explanation:
        "Label yang terhubung membantu user memahami field, termasuk pengguna assistive technology.",
    },
    {
      id: "basic-accessibility-checklist-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih salah satu latihan form sebelumnya. Tulis 3 hal yang sudah aksesibel dan 1 hal yang masih perlu dicek.",
      placeholder:
        "Contoh:\n1. ...\n2. ...\n3. ...\nPerlu dicek: ...",
      checklist: [
        "Menyebut label/input",
        "Menyebut link/button",
        "Menyebut alt text atau keyboard navigation",
        "Menulis satu perbaikan yang konkret",
      ],
      modelAnswer:
        "Form email sudah punya label yang terhubung ke input. Tombol submit memakai button, bukan link. Gambar punya alt text yang menjelaskan konteks. Hal yang masih perlu dicek: urutan Tab dari field ke tombol submit.",
    },
    {
      id: "basic-accessibility-checklist-summary",
      type: "summary",
      points: [
        "Accessibility dimulai dari HTML yang benar.",
        "Checklist membantu menemukan masalah awal.",
        "Module berikutnya akan diuji lewat Uji Kompetensi Forms and Basic Accessibility.",
        "Setelah ini kamu akan membangun form kecil dan membuktikan bahwa kamu paham link/button, label/input, alt text, dan keyboard navigation dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "basic-accessibility-checklist-intro",
      "basic-accessibility-checklist-note",
      "basic-accessibility-checklist-items",
      "basic-accessibility-checklist-quick-check",
      "basic-accessibility-checklist-writing-practice",
      "basic-accessibility-checklist-summary",
    ],
  },
};

export const formsBasicAccessibilityAssessmentLesson: Lesson = {
  id: "forms-basic-accessibility-assessment",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Uji Kompetensi Forms and Basic Accessibility",
  slug: "forms-basic-accessibility-assessment",
  description:
    "Uji pemahaman dasar form, link vs button, label, input, alt text, dan aksesibilitas awal.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Mengecek pemahaman link vs button",
    "Membangun form sederhana dengan label yang terhubung",
    "Mengecek pemahaman alt text dan keyboard navigation dasar",
  ],
  skillTags: ["HTML", "Forms", "Accessibility", "Assessment"],
  blocks: [
    {
      id: "forms-basic-accessibility-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini merangkum module Forms and Basic Accessibility. Kamu akan mengecek link vs button, form, label, input, textarea, select, required, alt text, keyboard navigation, dan checklist accessibility dasar. Tujuannya bukan mencari jawaban jebakan, tetapi memastikan struktur HTML dan form kamu mulai aman untuk dipakai lebih banyak user.",
    },
    {
      id: "forms-basic-accessibility-assessment-quiz-block",
      type: "quiz",
      quizId: "forms-basic-accessibility-assessment-quiz",
    },
    {
      id: "forms-basic-accessibility-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-accessible-contact-form",
    },
    {
      id: "forms-basic-accessibility-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi, bukan tugas menghafal. Kamu tidak perlu membaca semuanya sekarang. Fokus pada bagian yang sudah kamu pelajari.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Web forms",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms",
          focus: [
            "struktur form dasar",
            "fungsi label dan input",
            "cara browser memahami field form",
          ],
          ignoreForNow: [
            "styling form advanced",
            "custom form controls yang kompleks",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "The label element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label",
          focus: [
            "fungsi label",
            "hubungan for dan id",
            "kenapa label membantu aksesibilitas",
          ],
          ignoreForNow: ["semua attribute reference yang belum dipakai"],
        },
        {
          source: "MDN Web Docs",
          title: "The button element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
          focus: [
            "fungsi button",
            "type button dan submit",
            "kapan button dipakai untuk aksi",
          ],
          ignoreForNow: ["form method/action detail yang belum dibahas"],
        },
        {
          source: "MDN Web Docs",
          title: "HTML images",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images",
          focus: [
            "fungsi alt",
            "cara menulis deskripsi gambar yang berguna",
          ],
          ignoreForNow: ["responsive images", "image performance"],
        },
      ],
      followUpAction:
        "Kembali ke latihan form kamu dan cek empat hal: label sudah terhubung ke field, button dipakai untuk submit, gambar bermakna punya alt text, dan elemen interaktif bisa dicek dengan Tab.",
    },
    {
      id: "forms-basic-accessibility-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu bisa memilih link untuk navigasi dan button untuk aksi.",
        "Kamu membuktikan bahwa kamu bisa membuat form dengan label, input, textarea, select, required, dan submit button.",
        "Jika belum siap, review lagi link vs button, label/input, textarea/select, alt text, dan keyboard navigation dasar.",
        "Setelah struktur form dan aksesibilitas dasar mulai aman, berikutnya kamu akan belajar CSS agar halaman bisa ditata tanpa merusak struktur HTML.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "forms-basic-accessibility-assessment-recap",
      "forms-basic-accessibility-assessment-quiz-block",
      "forms-basic-accessibility-assessment-coding-practice",
      "forms-basic-accessibility-assessment-summary",
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

export const cssBoxModelBasicLesson: Lesson = {
  id: "css-box-model-basic",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Box Model Dasar",
  slug: "css-box-model-basic",
  description:
    "Pahami bagaimana elemen HTML dibaca sebagai kotak yang punya content, padding, border, dan margin.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami elemen HTML sebagai box di CSS",
    "Membedakan content, padding, border, dan margin",
    "Menerapkan box model pada card sederhana",
  ],
  skillTags: ["CSS", "Box Model", "Spacing"],
  blocks: [
    {
      id: "css-box-model-basic-intro",
      type: "text",
      title: "Banyak elemen bisa dibayangkan sebagai kotak",
      content:
        "Di CSS, banyak elemen HTML bisa kamu bayangkan sebagai box. Box ini punya isi, ruang bagian dalam, garis tepi, dan jarak luar. Kamu tidak perlu menghafal semua detail layout dulu. Fokus pada empat bagian awal: content, padding, border, dan margin.",
    },
    {
      id: "css-box-model-basic-core",
      type: "text",
      title: "Empat bagian box model",
      content:
        "Content adalah isi elemen, misalnya teks heading atau paragraf. Padding adalah jarak di dalam box, antara content dan border. Border adalah garis pembatas box. Margin adalah jarak luar yang memisahkan box dari elemen lain. Analogi card membantu: isi card adalah content, ruang napas di dalam card adalah padding, garis tepinya adalah border, dan jarak card dari elemen lain adalah margin.",
    },
    {
      id: "css-box-model-basic-code-example",
      type: "code-example",
      title: "Card dengan padding, border, dan margin",
      language: "html",
      code: `<div class="card">
  <h2>Belajar Box Model</h2>
  <p>Padding, border, dan margin membantu tampilan lebih rapi.</p>
</div>

<style>
  .card {
    padding: 16px;
    border: 1px solid #3f3f46;
    margin: 16px;
  }
</style>`,
      explanation:
        "padding memberi ruang di dalam card. border memberi garis tepi. margin memberi jarak dari elemen lain. Ketiganya membantu card tidak terasa terlalu menempel.",
    },
    {
      id: "css-box-model-basic-callout",
      type: "callout",
      variant: "important",
      title: "Box model bukan hanya dekorasi",
      content:
        "Box model membantu kamu membuat tampilan yang lebih rapi, mudah dibaca, dan tidak terlalu menempel. Saat sebuah UI terasa sesak, sering kali masalahnya ada di padding, margin, atau ukuran box.",
    },
    {
      id: "css-box-model-basic-quick-check",
      type: "quick-check",
      question:
        "Bagian box model mana yang memberi jarak di dalam elemen, antara isi dan border?",
      options: ["padding", "margin", "selector", "value"],
      correctAnswer: "padding",
      explanation:
        "Padding memberi ruang di dalam elemen. Margin memberi jarak di luar elemen.",
    },
    {
      id: "css-box-model-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-box-model-card",
    },
    {
      id: "css-box-model-basic-summary",
      type: "summary",
      points: [
        "Elemen HTML bisa dipahami sebagai box.",
        "Content adalah isi.",
        "Padding adalah jarak dalam.",
        "Border adalah garis tepi.",
        "Margin adalah jarak luar.",
        "Berikutnya, kamu akan membedakan padding dan margin lebih jelas.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-box-model-basic-intro",
      "css-box-model-basic-core",
      "css-box-model-basic-code-example",
      "css-box-model-basic-callout",
      "css-box-model-basic-quick-check",
      "css-box-model-basic-coding-practice",
      "css-box-model-basic-summary",
    ],
  },
};

export const cssPaddingMarginBasicLesson: Lesson = {
  id: "css-padding-margin-basic",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Padding dan Margin",
  slug: "css-padding-margin-basic",
  description: "Pelajari perbedaan jarak dalam dan jarak luar pada elemen CSS.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Membedakan padding dan margin",
    "Menggunakan padding agar isi elemen tidak menempel",
    "Menggunakan margin untuk memberi jarak antar elemen",
  ],
  skillTags: ["CSS", "Padding", "Margin", "Spacing"],
  blocks: [
    {
      id: "css-padding-margin-basic-intro",
      type: "text",
      title: "Padding untuk ruang dalam, margin untuk ruang luar",
      content:
        "Padding dan margin sama-sama berhubungan dengan jarak, tetapi tempatnya berbeda. Padding adalah jarak di dalam elemen. Margin adalah jarak di luar elemen. Jika teks di dalam card terlalu menempel ke tepi, biasanya kamu butuh padding. Jika card terlalu menempel dengan elemen lain, biasanya kamu butuh margin.",
    },
    {
      id: "css-padding-margin-basic-code-example",
      type: "code-example",
      title: "Spacing pada card dan button",
      language: "css",
      code: `.card {
  padding: 20px;
  margin-bottom: 16px;
}

.button {
  padding: 10px 14px;
  margin-top: 12px;
}`,
      explanation:
        "padding pada card membuat isi card lebih lega. margin-bottom memberi jarak setelah card. padding pada button membuat tombol lebih nyaman dibaca dan diklik.",
    },
    {
      id: "css-padding-margin-basic-shorthand",
      type: "text",
      title: "Shorthand yang cukup untuk awal",
      content:
        "Kamu akan sering melihat penulisan singkat. padding: 16px berarti semua sisi mendapat jarak 16px. padding: 8px 12px berarti jarak atas-bawah 8px dan kiri-kanan 12px. Untuk sekarang, cukup pahami dua bentuk ini dulu. Empat nilai shorthand bisa dipelajari nanti saat kebutuhan layout lebih kompleks.",
    },
    {
      id: "css-padding-margin-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memakai margin untuk ruang dalam card",
      content:
        "Jika teks di dalam card terlalu menempel ke tepi card, gunakan padding. Margin memberi jarak di luar elemen, jadi margin tidak memperbaiki ruang antara isi card dan tepi card.",
    },
    {
      id: "css-padding-margin-basic-quick-check",
      type: "quick-check",
      question:
        "Kalau teks di dalam card terlalu menempel ke tepi card, property mana yang biasanya dipakai?",
      options: ["padding", "margin", "color", "font-size"],
      correctAnswer: "padding",
      explanation:
        "Padding memberi ruang di dalam elemen, antara isi dan tepi elemen.",
    },
    {
      id: "css-padding-margin-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-padding-margin-card",
    },
    {
      id: "css-padding-margin-basic-summary",
      type: "summary",
      points: [
        "Padding mengatur jarak dalam.",
        "Margin mengatur jarak luar.",
        "Button biasanya butuh padding agar lebih nyaman.",
        "Card biasanya butuh padding dan margin agar terlihat rapi.",
        "Berikutnya, kamu akan memakai border, border-radius, dan max-width untuk membuat card lebih jelas.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-padding-margin-basic-intro",
      "css-padding-margin-basic-code-example",
      "css-padding-margin-basic-shorthand",
      "css-padding-margin-basic-common-mistake",
      "css-padding-margin-basic-quick-check",
      "css-padding-margin-basic-coding-practice",
      "css-padding-margin-basic-summary",
    ],
  },
};

export const cssBorderWidthBasicLesson: Lesson = {
  id: "css-border-width-basic",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Border, Width, dan Max Width",
  slug: "css-border-width-basic",
  description:
    "Pelajari cara memberi batas, mengatur lebar, dan menjaga card tetap mudah dibaca.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami border sebagai garis tepi elemen",
    "Menggunakan border-radius untuk sudut yang lebih halus",
    "Menggunakan max-width agar card tetap mudah dibaca",
    "Mengenal width, height, dan box-sizing secara sederhana",
  ],
  skillTags: ["CSS", "Border", "Width", "Max Width", "Box Sizing"],
  blocks: [
    {
      id: "css-border-width-basic-intro",
      type: "text",
      title: "Border memperjelas batas, max-width menjaga lebar",
      content:
        "Setelah kamu memahami padding dan margin, sekarang kamu bisa memperjelas bentuk box. Border memberi garis tepi. Border-radius membuat sudut elemen lebih halus. Width menentukan lebar elemen. Max-width membatasi lebar maksimum tanpa memaksa elemen selalu selebar itu.",
    },
    {
      id: "css-border-width-basic-code-example",
      type: "code-example",
      title: "Card dengan batas dan lebar maksimum",
      language: "css",
      code: `.card {
  max-width: 420px;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 16px;
}`,
      explanation:
        "max-width menjaga card tidak terlalu panjang. border memperjelas batas card. border-radius membuat sudut card terasa lebih halus. padding tetap dibutuhkan agar isi tidak menempel.",
    },
    {
      id: "css-border-width-basic-sizing-note",
      type: "text",
      title: "Width, height, dan box-sizing",
      content:
        "Width mengatur lebar elemen. Height mengatur tinggi elemen, tetapi untuk card sederhana kamu tidak selalu perlu height tetap karena isi card bisa berbeda-beda. Box-sizing membantu ukuran box lebih mudah diprediksi. Dengan box-sizing: border-box, padding dan border ikut dihitung di dalam ukuran elemen, sehingga card lebih mudah dikontrol.",
    },
    {
      id: "css-border-width-basic-callout",
      type: "callout",
      variant: "tip",
      title: "Max-width sering lebih fleksibel daripada width tetap",
      content:
        "Jangan terlalu cepat memakai width tetap untuk semua kondisi. Untuk card belajar sederhana, max-width sering lebih aman karena card masih bisa mengecil saat ruang layar terbatas.",
    },
    {
      id: "css-border-width-basic-quick-check",
      type: "quick-check",
      question:
        "Property mana yang membatasi lebar maksimum elemen tanpa memaksa semua elemen selalu selebar itu?",
      options: ["max-width", "color", "selector", "font-size"],
      correctAnswer: "max-width",
      explanation:
        "max-width membatasi lebar maksimum, tetapi elemen masih bisa lebih kecil jika ruangnya terbatas.",
    },
    {
      id: "css-border-width-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-border-width-card",
    },
    {
      id: "css-border-width-basic-summary",
      type: "summary",
      points: [
        "Border memberi garis tepi.",
        "Border-radius menghaluskan sudut.",
        "Max-width membantu menjaga card tetap nyaman dibaca.",
        "Box-sizing membantu ukuran box lebih mudah diprediksi.",
        "Padding tetap penting agar isi tidak menempel.",
        "Berikutnya, kamu akan menguji pemahaman box model dan spacing dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-border-width-basic-intro",
      "css-border-width-basic-code-example",
      "css-border-width-basic-sizing-note",
      "css-border-width-basic-callout",
      "css-border-width-basic-quick-check",
      "css-border-width-basic-coding-practice",
      "css-border-width-basic-summary",
    ],
  },
};

export const boxModelSpacingAssessmentLesson: Lesson = {
  id: "box-model-spacing-assessment",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Uji Kompetensi Box Model and Spacing",
  slug: "box-model-spacing-assessment",
  description:
    "Uji pemahaman content, padding, border, margin, width, height, box-sizing, dan spacing dasar.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Mengecek pemahaman content, padding, border, dan margin",
    "Mengecek pemahaman width, height, max-width, dan box-sizing",
    "Mengecek kemampuan membedakan padding dan margin",
    "Mengecek kemampuan memperbaiki spacing sederhana",
    "Mengarahkan learner membaca dokumentasi resmi CSS dengan fokus",
  ],
  skillTags: ["CSS", "Box Model", "Spacing", "Assessment"],
  blocks: [
    {
      id: "box-model-spacing-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini mengecek apakah kamu sudah memahami box model dan spacing dasar. Kamu akan membedakan content, padding, border, dan margin; membaca width, height, max-width, dan box-sizing; lalu memperbaiki spacing pada card sederhana. Fokusnya bukan membuat desain sempurna, tetapi membuktikan bahwa kamu bisa membuat box lebih rapi dan mudah dibaca.",
    },
    {
      id: "box-model-spacing-assessment-quiz-block",
      type: "quiz",
      quizId: "box-model-spacing-assessment-quiz",
    },
    {
      id: "box-model-spacing-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "fix-box-model-spacing-card",
    },
    {
      id: "box-model-spacing-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi CSS, bukan tugas menghafal. Fokus pada bagian yang sudah kamu pakai di latihan.",
      links: [
        {
          source: "MDN Web Docs",
          title: "The box model",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model",
          focus: [
            "content",
            "padding",
            "border",
            "margin",
          ],
          ignoreForNow: [
            "margin collapsing details",
            "complex sizing behavior",
            "advanced layout",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Sizing items in CSS",
          url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS",
          focus: [
            "width",
            "height",
            "max-width",
            "cara ukuran elemen memengaruhi layout",
          ],
          ignoreForNow: [
            "advanced intrinsic sizing",
            "complex layout systems",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "box-sizing",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
          focus: [
            "box-sizing: border-box",
            "hubungan ukuran elemen dengan padding dan border",
            "kenapa ukuran box lebih mudah diprediksi",
          ],
          ignoreForNow: [
            "CSS reset debates",
            "advanced browser defaults",
          ],
        },
      ],
      followUpAction:
        "Kembali ke latihan spacing card kamu dan tunjukkan: satu padding, satu margin, satu border, satu max-width, dan satu alasan kenapa box-sizing: border-box membantu ukuran card lebih mudah diprediksi.",
    },
    {
      id: "box-model-spacing-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu memahami content, padding, border, dan margin.",
        "Kamu membuktikan bahwa kamu bisa membedakan padding sebagai jarak dalam dan margin sebagai jarak luar.",
        "Kamu membuktikan bahwa kamu bisa memakai max-width dan box-sizing untuk membuat card lebih mudah dikontrol.",
        "Jika belum siap, review lagi box model, padding vs margin, border, max-width, dan box-sizing.",
        "Setelah box model dan spacing dasar mulai aman, berikutnya kamu bisa lanjut ke layout CSS yang lebih terarah.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "box-model-spacing-assessment-recap",
      "box-model-spacing-assessment-quiz-block",
      "box-model-spacing-assessment-coding-practice",
      "box-model-spacing-assessment-summary",
    ],
    passingQuizScore: 70,
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
  webFoundationsAssessmentLesson,
  htmlBasicStructureLesson,
  tagElementAttributeLesson,
  headingsParagraphsLinksImagesLesson,
  relativePathsBasicLesson,
  htmlBasicsAssessmentLesson,
  semanticHtmlStructureLesson,
  htmlSemanticBasicsLesson,
  semanticHtmlAssessmentLesson,
  linkVsButtonLesson,
  formLabelInputLesson,
  textareaSelectRequiredFieldsLesson,
  altTextBasicLesson,
  keyboardNavigationBasicLesson,
  basicAccessibilityChecklistLesson,
  formsBasicAccessibilityAssessmentLesson,
  whatIsCssLesson,
  cssSelectorDeclarationBasicLesson,
  cascadeSpecificityBasicLesson,
  cssBoxModelBasicLesson,
  cssPaddingMarginBasicLesson,
  cssBorderWidthBasicLesson,
  boxModelSpacingAssessmentLesson,
  cssCoreMechanicsAssessmentLesson,
  cssFlexboxBasicsLesson,
  writingDailyUpdateLesson,
];
