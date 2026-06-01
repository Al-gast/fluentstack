import type { Quiz } from "@/types/quiz";

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

export const htmlBasicStructureQuiz: Quiz = {
  id: "html-basic-structure-quiz",
  lessonId: "html-basic-structure",
  title: "Kuis Struktur HTML Dasar",
  passingScore: 70,
  questions: [
    {
      id: "html-basic-structure-q1",
      type: "multiple-choice",
      question: "Bagian mana yang berisi konten yang terlihat di halaman?",
      options: ["head", "body", "doctype", "meta"],
      correctAnswer: "body",
      explanation:
        "body berisi konten utama yang dilihat pengunjung, seperti heading, paragraf, gambar, link, dan form.",
    },
    {
      id: "html-basic-structure-q2",
      type: "multiple-choice",
      question: "Bagian mana yang biasanya berisi judul dokumen dan informasi untuk browser?",
      options: ["body", "footer", "head", "button"],
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
      options: ["body", "h1", "Mulai dari struktur dasar.", "Belajar HTML"],
      correctAnswer: "Belajar HTML",
      explanation:
        "Teks di dalam h1 akan tampil sebagai heading utama. Tag h1 memberi makna bahwa teks tersebut adalah judul utama halaman atau section.",
    },
  ],
};

export const tagElementAttributeQuiz: Quiz = {
  id: "tag-element-attribute-quiz",
  lessonId: "tag-element-attribute",
  title: "Kuis Tag, Element, dan Attribute",
  passingScore: 70,
  questions: [
    {
      id: "tag-element-attribute-q1",
      type: "multiple-choice",
      question: "Pada kode <p>Halo</p>, mana yang disebut element?",
      options: ["Hanya huruf p", "Seluruh <p>Halo</p>", "Hanya teks Halo", "Tidak ada element"],
      correctAnswer: "Seluruh <p>Halo</p>",
      explanation:
        "Element adalah bagian HTML lengkap, termasuk tag pembuka, konten, dan tag penutup jika ada.",
    },
    {
      id: "tag-element-attribute-q2",
      type: "multiple-choice",
      question: "Pada kode <a href=\"/learn\">Tracks</a>, mana yang disebut attribute?",
      options: ["Tracks", "a", "href", "/learn saja"],
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
      options: ["body", "doctype", "footer", "alt"],
      correctAnswer: "alt",
      explanation:
        "alt memberi teks alternatif untuk gambar. Ini membantu ketika gambar gagal dimuat dan mendukung accessibility.",
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
