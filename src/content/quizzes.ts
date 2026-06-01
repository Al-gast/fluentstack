import type { Quiz } from "@/types/quiz";

export const whatIsWebsiteAndWebPageQuiz: Quiz = {
  id: "what-is-website-and-web-page-quiz",
  lessonId: "what-is-website-and-web-page",
  title: "Quiz Website dan Web Page",
  passingScore: 70,
  questions: [
    {
      id: "what-is-website-and-web-page-q1",
      type: "multiple-choice",
      question: "Apa perbedaan paling sederhana antara website dan web page?",
      options: [
        "Website adalah kumpulan halaman, web page adalah satu halaman tertentu",
        "Website hanya bisa dibuka di mobile, web page hanya di desktop",
        "Website adalah browser, web page adalah server",
        "Website selalu tanpa URL, web page selalu tanpa konten",
      ],
      correctAnswer: "Website adalah kumpulan halaman, web page adalah satu halaman tertentu",
      explanation:
        "Satu website bisa berisi banyak web page. Setiap web page biasanya punya URL sendiri untuk dibuka di browser.",
    },
    {
      id: "what-is-website-and-web-page-q2",
      type: "true-false",
      question: "Browser adalah aplikasi yang dipakai untuk membuka web page.",
      correctAnswer: true,
      explanation:
        "Browser seperti Chrome, Firefox, Safari, atau Edge dipakai untuk membuka URL dan menampilkan web page.",
    },
    {
      id: "what-is-website-and-web-page-q3",
      type: "multiple-choice",
      question: "Apa fungsi URL untuk browser?",
      options: [
        "Memberi alamat halaman yang harus dibuka",
        "Mengubah semua gambar menjadi JavaScript",
        "Menyimpan semua file di localStorage",
        "Menghapus halaman dari server",
      ],
      correctAnswer: "Memberi alamat halaman yang harus dibuka",
      explanation:
        "URL adalah alamat. Browser memakai URL untuk tahu halaman atau resource mana yang perlu diminta.",
    },
    {
      id: "what-is-website-and-web-page-q4",
      type: "multiple-choice",
      question: "Mana contoh web page di dalam sebuah website?",
      options: [
        "Halaman profile di dalam aplikasi belajar",
        "Nama domain tanpa halaman tertentu",
        "Aplikasi browser yang membuka URL",
        "Server yang menyimpan file website",
      ],
      correctAnswer: "Halaman profile di dalam aplikasi belajar",
      explanation:
        "Halaman profile adalah satu web page. Website atau aplikasi web bisa punya banyak halaman seperti dashboard, roadmap, lesson, dan profile.",
    },
  ],
};

export const howWebPageLoadsQuiz: Quiz = {
  id: "how-web-page-loads-quiz",
  lessonId: "how-web-page-loads",
  title: "Quiz Cara Kerja Web Page",
  passingScore: 70,
  questions: [
    {
      id: "how-web-page-loads-q1",
      type: "multiple-choice",
      question: "Apa yang dilakukan browser saat kamu membuka URL?",
      options: [
        "Mengirim request untuk meminta resource yang dibutuhkan",
        "Menebak isi halaman tanpa alamat",
        "Mengubah URL menjadi nama file lokal",
        "Menyimpan halaman baru tanpa menghubungi server",
      ],
      correctAnswer: "Mengirim request untuk meminta resource yang dibutuhkan",
      explanation:
        "Browser mengirim request ke alamat tujuan untuk meminta resource seperti HTML, CSS, JavaScript, gambar, atau data sebelum halaman bisa dirender.",
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
      options: ["File halaman, gambar, atau data", "Mouse dan keyboard", "Kecerahan layar", "Nama aplikasi browser saja"],
      correctAnswer: "File halaman, gambar, atau data",
      explanation:
        "Response bisa berisi resource yang dibutuhkan halaman, misalnya file halaman, gambar, file pendukung, atau data.",
    },
    {
      id: "how-web-page-loads-q4",
      type: "multiple-choice",
      question: "Apa arti render dalam konteks browser?",
      options: [
        "Mengubah resource menjadi tampilan halaman yang bisa dilihat",
        "Menghapus request dari server setelah halaman terbuka",
        "Membuat folder project baru untuk file HTML",
        "Mengirim commit ke GitHub setelah kode berubah",
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
  title: "Quiz HTML, CSS, dan JavaScript",
  passingScore: 70,
  questions: [
    {
      id: "what-are-html-css-javascript-q1",
      type: "multiple-choice",
      question: "Bagian mana yang memberi struktur utama pada halaman web?",
      options: ["HTML", "CSS", "JavaScript", "GitHub"],
      correctAnswer: "HTML",
      explanation:
        "HTML dipakai untuk menyusun struktur dan isi halaman, seperti heading, paragraf, tombol, dan link.",
    },
    {
      id: "what-are-html-css-javascript-q2",
      type: "multiple-choice",
      question: "Bagian mana yang paling tepat untuk mengatur warna, ukuran teks, dan spacing?",
      options: ["CSS", "HTML", "URL", "Server"],
      correctAnswer: "CSS",
      explanation:
        "CSS mengatur tampilan visual. HTML tetap menyimpan struktur, sedangkan CSS membuat struktur itu terlihat rapi.",
    },
    {
      id: "what-are-html-css-javascript-q3",
      type: "multiple-choice",
      question: "Bagian mana yang biasanya dipakai untuk menambahkan interaksi klik?",
      options: ["JavaScript", "HTML", "CSS", "PNG"],
      correctAnswer: "JavaScript",
      explanation:
        "JavaScript dipakai untuk perilaku interaktif, misalnya merespons klik, membaca input form, atau mengambil data.",
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
  title: "Quiz Peran HTML, CSS, dan JavaScript",
  passingScore: 70,
  questions: [
    {
      id: "html-css-js-roles-q1",
      type: "multiple-choice",
      question: "Saat browser membuka web page, resource mana yang biasanya memberi struktur awal?",
      options: ["HTML", "CSS", "JavaScript", "SVG"],
      correctAnswer: "HTML",
      explanation:
        "HTML memberi struktur awal halaman. Dari HTML, browser bisa menemukan file CSS, JavaScript, gambar, atau resource lain yang dibutuhkan.",
    },
    {
      id: "html-css-js-roles-q2",
      type: "multiple-choice",
      question: "Jika layout card berubah dari satu kolom menjadi dua kolom, bagian mana yang biasanya mengatur itu?",
      options: ["CSS", "HTML", "URL", "Git"],
      correctAnswer: "CSS",
      explanation:
        "Perubahan layout visual biasanya diatur dengan CSS, misalnya memakai Flexbox, Grid, atau media query.",
    },
    {
      id: "html-css-js-roles-q3",
      type: "multiple-choice",
      question: "Jika tombol membuka menu saat diklik, bagian mana yang biasanya menambahkan perilaku itu?",
      options: ["JavaScript", "CSS saja", "HTML doctype", "Nama folder assets"],
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
        "Alamat server",
      ],
      correctAnswer: "Element button dengan teks Simpan",
      explanation:
        "Kode tersebut membuat struktur tombol di HTML. Warna diatur CSS, sedangkan perilaku klik biasanya ditambahkan JavaScript.",
    },
  ],
};

export const semanticHtmlStructureQuiz: Quiz = {
  id: "semantic-html-structure-quiz",
  lessonId: "semantic-html-structure",
  title: "Quiz Struktur Semantic HTML",
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
      options: ["article", "section", "nav", "aside"],
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

export const htmlBasicStructureQuiz: Quiz = {
  id: "html-basic-structure-quiz",
  lessonId: "html-basic-structure",
  title: "Quiz Struktur HTML Dasar",
  passingScore: 70,
  questions: [
    {
      id: "html-basic-structure-q1",
      type: "multiple-choice",
      question: "Bagian mana yang berisi konten yang terlihat di halaman?",
      options: ["body", "head", "doctype", "meta"],
      correctAnswer: "body",
      explanation:
        "body berisi konten utama yang dilihat pengunjung, seperti heading, paragraf, gambar, link, dan form.",
    },
    {
      id: "html-basic-structure-q2",
      type: "multiple-choice",
      question: "Bagian mana yang biasanya berisi judul dokumen dan informasi untuk browser?",
      options: ["head", "body", "footer", "button"],
      correctAnswer: "head",
      explanation:
        "head menyimpan informasi tentang halaman, seperti title dan meta. Konten yang terlihat ditaruh di body.",
    },
    {
      id: "html-basic-structure-q3",
      type: "true-false",
      question: "Tag <title> biasanya ditaruh di dalam body.",
      correctAnswer: false,
      explanation:
        "title biasanya ditaruh di dalam head karena itu informasi halaman untuk browser, bukan konten utama yang tampil di body.",
    },
    {
      id: "html-basic-structure-q4",
      type: "code-output",
      question: "Pada kode berikut, teks mana yang akan terlihat sebagai heading utama di halaman?",
      code: `<body>
  <h1>Belajar HTML</h1>
  <p>Mulai dari struktur dasar.</p>
</body>`,
      options: ["Belajar HTML", "body", "h1", "Mulai dari struktur dasar."],
      correctAnswer: "Belajar HTML",
      explanation:
        "Teks di dalam h1 akan tampil sebagai heading utama. Tag h1 memberi makna bahwa teks tersebut adalah judul utama halaman atau section.",
    },
  ],
};

export const tagElementAttributeQuiz: Quiz = {
  id: "tag-element-attribute-quiz",
  lessonId: "tag-element-attribute",
  title: "Quiz Tag, Element, dan Attribute",
  passingScore: 70,
  questions: [
    {
      id: "tag-element-attribute-q1",
      type: "multiple-choice",
      question: "Pada kode <p>Halo</p>, mana yang disebut element?",
      options: ["Seluruh <p>Halo</p>", "Hanya huruf p", "Hanya teks Halo", "Tidak ada element"],
      correctAnswer: "Seluruh <p>Halo</p>",
      explanation:
        "Element adalah bagian HTML lengkap, termasuk tag pembuka, konten, dan tag penutup jika ada.",
    },
    {
      id: "tag-element-attribute-q2",
      type: "multiple-choice",
      question: "Pada kode <a href=\"/learn\">Tracks</a>, mana yang disebut attribute?",
      options: ["href", "Tracks", "a", "/learn saja"],
      correctAnswer: "href",
      explanation:
        "href adalah attribute pada element a. Nilainya, yaitu /learn, memberi tahu tujuan link.",
    },
    {
      id: "tag-element-attribute-q3",
      type: "true-false",
      question: "Attribute memberi informasi tambahan pada element HTML.",
      correctAnswer: true,
      explanation:
        "Attribute seperti href, src, alt, id, dan class memberi informasi tambahan agar element punya fungsi atau konteks yang lebih jelas.",
    },
    {
      id: "tag-element-attribute-q4",
      type: "multiple-choice",
      question: "Mana contoh attribute yang berguna untuk menjelaskan gambar?",
      options: ["alt", "body", "doctype", "footer"],
      correctAnswer: "alt",
      explanation:
        "alt memberi teks alternatif untuk gambar. Ini membantu ketika gambar gagal dimuat dan mendukung accessibility.",
    },
  ],
};

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

export const quizzes: Quiz[] = [
  whatIsWebsiteAndWebPageQuiz,
  howWebPageLoadsQuiz,
  whatAreHtmlCssJavascriptQuiz,
  htmlCssJsRolesQuiz,
  htmlBasicStructureQuiz,
  tagElementAttributeQuiz,
  semanticHtmlStructureQuiz,
  htmlSemanticQuiz,
];
