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
      question: "Bagian mana yang berisi h1 dan paragraf yang terlihat di halaman?",
      options: ["head", "title", "body", "doctype"],
      correctAnswer: "body",
      explanation:
        "body adalah tempat konten yang terlihat di halaman, termasuk h1, paragraf, gambar, link, dan form.",
    },
    {
      id: "html-basic-structure-q2",
      type: "multiple-choice",
      question: "Apa fungsi title dalam struktur HTML dasar?",
      options: [
        "Menjadi paragraf utama di halaman",
        "Memberi nama halaman yang muncul di tab browser",
        "Membungkus semua konten yang terlihat",
        "Mengganti doctype",
      ],
      correctAnswer: "Memberi nama halaman yang muncul di tab browser",
      explanation:
        "title ditulis di dalam head dan dipakai browser sebagai nama halaman, misalnya untuk teks di tab browser.",
    },
    {
      id: "html-basic-structure-q3",
      type: "true-false",
      question: "Tag <title> dan <h1> punya fungsi yang sama.",
      correctAnswer: false,
      explanation:
        "title memberi nama halaman untuk browser, sedangkan h1 adalah heading utama yang terlihat di dalam body.",
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

export const htmlBasicsAssessmentQuiz: Quiz = {
  id: "html-basics-assessment-quiz",
  lessonId: "html-basics-assessment",
  title: "Assessment HTML Basics",
  passingScore: 70,
  questions: [
    {
      id: "html-basics-assessment-q1",
      type: "multiple-choice",
      question: "Bagian mana yang sebaiknya berisi konten yang terlihat seperti h1 dan paragraf?",
      options: ["head", "title", "body", "doctype"],
      correctAnswer: "body",
      explanation:
        "body berisi konten yang terlihat di halaman. Head menyimpan informasi untuk browser, seperti title.",
    },
    {
      id: "html-basics-assessment-q2",
      type: "multiple-choice",
      question: "Apa perbedaan title dan h1 yang paling tepat?",
      options: [
        "title terlihat sebagai paragraf, h1 hanya dibaca browser",
        "title memberi nama tab browser, h1 menjadi heading utama yang terlihat di halaman",
        "title dan h1 selalu punya fungsi yang sama",
        "title harus ditulis di body, h1 harus ditulis di head",
      ],
      correctAnswer:
        "title memberi nama tab browser, h1 menjadi heading utama yang terlihat di halaman",
      explanation:
        "title ditulis di head untuk informasi browser. h1 ditulis di body sebagai heading utama yang terlihat oleh pembaca.",
    },
    {
      id: "html-basics-assessment-q3",
      type: "multiple-choice",
      question: "Pada kode <a href=\"about.html\">Tentang</a>, bagian mana yang disebut element lengkap?",
      options: ["a", "href", "Tentang", "<a href=\"about.html\">Tentang</a>"],
      correctAnswer: "<a href=\"about.html\">Tentang</a>",
      explanation:
        "Element lengkap mencakup tag pembuka, attribute jika ada, konten, dan tag penutup.",
    },
    {
      id: "html-basics-assessment-q4",
      type: "multiple-choice",
      question: "Pada kode <a href=\"about.html\">Tentang</a>, attribute mana yang menentukan tujuan link?",
      options: ["href", "a", "Tentang", "html"],
      correctAnswer: "href",
      explanation:
        "href adalah attribute pada element a. Nilainya memberi tahu ke mana link akan menuju.",
    },
    {
      id: "html-basics-assessment-q5",
      type: "multiple-choice",
      question: "Kapan h1 paling tepat dipakai?",
      options: [
        "Untuk semua teks yang ingin diberi warna berbeda",
        "Untuk menyimpan alamat gambar",
        "Untuk heading utama halaman atau bagian besar",
        "Untuk mengganti attribute href pada link",
      ],
      correctAnswer: "Untuk heading utama halaman atau bagian besar",
      explanation:
        "h1 memberi makna heading utama. Ukuran dan warna teks nanti diatur dengan CSS, bukan alasan utama memilih h1.",
    },
    {
      id: "html-basics-assessment-q6",
      type: "multiple-choice",
      question: "Attribute mana yang membantu menjelaskan gambar ketika gambar tidak terbaca?",
      options: ["src", "alt", "href", "title"],
      correctAnswer: "alt",
      explanation:
        "alt berisi teks alternatif untuk gambar. Ini membantu ketika gambar gagal dimuat dan mendukung accessibility.",
    },
    {
      id: "html-basics-assessment-q7",
      type: "multiple-choice",
      question: "Jika index.html dan about.html berada di folder yang sama, href mana yang paling tepat?",
      options: ["images/about.html", "/images/logo.png", "src/about.html", "about.html"],
      correctAnswer: "about.html",
      explanation:
        "Jika file tujuan sejajar dengan index.html, relative path cukup memakai nama file: about.html.",
    },
    {
      id: "html-basics-assessment-q8",
      type: "multiple-choice",
      question: "Jika logo.png berada di folder images, nilai src mana yang paling tepat?",
      options: ["images/logo.png", "about.html", "href=\"logo.png\"", "title/logo.png"],
      correctAnswer: "images/logo.png",
      explanation:
        "Path images/logo.png berarti masuk ke folder images lalu mencari file logo.png.",
    },
    {
      id: "html-basics-assessment-q9",
      type: "multiple-choice",
      question: "Urutan mental paling aman saat membaca dokumen HTML dasar adalah...",
      options: [
        "Mulai dari CSS, lalu cari h1",
        "Cari semua div terlebih dahulu",
        "Lihat doctype, html, head, lalu body",
        "Abaikan head karena tidak pernah penting",
      ],
      correctAnswer: "Lihat doctype, html, head, lalu body",
      explanation:
        "Membaca dari struktur besar membantu kamu tahu mana informasi untuk browser dan mana konten yang terlihat.",
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

export const formsBasicAccessibilityAssessmentQuiz: Quiz = {
  id: "forms-basic-accessibility-assessment-quiz",
  lessonId: "forms-basic-accessibility-assessment",
  title: "Assessment Forms and Basic Accessibility",
  passingScore: 70,
  questions: [
    {
      id: "forms-basic-accessibility-assessment-q1",
      type: "multiple-choice",
      question: "Jika elemen membawa user ke halaman dokumentasi, elemen mana yang paling tepat?",
      options: ["Button", "Input", "Link", "Textarea"],
      correctAnswer: "Link",
      explanation:
        "Link dipakai untuk navigasi ke halaman, file, section, atau resource lain. Link boleh terlihat seperti button, tetapi makna HTML-nya tetap link.",
    },
    {
      id: "forms-basic-accessibility-assessment-q2",
      type: "multiple-choice",
      question: "Jika user menekan elemen untuk mengirim form, elemen mana yang paling tepat?",
      options: ["button type=\"submit\"", "a href=\"#\"", "img", "option"],
      correctAnswer: "button type=\"submit\"",
      explanation:
        "Button submit dipakai untuk aksi mengirim form. Link lebih tepat untuk berpindah tempat, bukan menjalankan submit form.",
    },
    {
      id: "forms-basic-accessibility-assessment-q3",
      type: "multiple-choice",
      question: "Agar label terhubung ke input, pasangan mana yang harus cocok?",
      options: [
        "form action dan input name",
        "label class dan input type",
        "button type dan input value",
        "label for dan input id",
      ],
      correctAnswer: "label for dan input id",
      explanation:
        "Nilai for pada label harus cocok dengan id pada input. Koneksi ini membantu browser dan assistive technology memahami field.",
    },
    {
      id: "forms-basic-accessibility-assessment-q4",
      type: "multiple-choice",
      question: "Field mana yang paling cocok untuk pesan panjang dari user?",
      options: ["textarea", "input type=\"email\"", "select", "button"],
      correctAnswer: "textarea",
      explanation:
        "Textarea cocok untuk teks panjang atau multi-line, seperti pesan kontak, catatan, atau deskripsi.",
    },
    {
      id: "forms-basic-accessibility-assessment-q5",
      type: "multiple-choice",
      question: "Kapan select lebih tepat dipakai?",
      options: [
        "Saat user perlu menulis pesan panjang",
        "Saat user memilih dari opsi yang sudah disediakan",
        "Saat user membuka halaman lain",
        "Saat gambar gagal dimuat",
      ],
      correctAnswer: "Saat user memilih dari opsi yang sudah disediakan",
      explanation:
        "Select membantu ketika pilihan sudah ditentukan, misalnya topik support atau feedback.",
    },
    {
      id: "forms-basic-accessibility-assessment-q6",
      type: "multiple-choice",
      question: "Apa fungsi attribute required pada field form?",
      options: [
        "Membuat field tidak terlihat",
        "Mengubah link menjadi button",
        "Memberi tahu browser bahwa field wajib diisi",
        "Menghapus label dari input",
      ],
      correctAnswer: "Memberi tahu browser bahwa field wajib diisi",
      explanation:
        "Required membantu browser meminta user mengisi field penting sebelum form dikirim.",
    },
    {
      id: "forms-basic-accessibility-assessment-q7",
      type: "multiple-choice",
      question: "Alt text mana yang paling berguna untuk grafik progres belajar?",
      options: [
        "chart.png",
        "Foto bagus",
        "Gambar",
        "Grafik progres belajar meningkat dari 40% ke 70%",
      ],
      correctAnswer: "Grafik progres belajar meningkat dari 40% ke 70%",
      explanation:
        "Alt text yang berguna menjelaskan makna gambar dalam konteks halaman, bukan hanya nama file atau kata umum.",
    },
    {
      id: "forms-basic-accessibility-assessment-q8",
      type: "multiple-choice",
      question: "Tombol dan link penting di halaman sebaiknya bisa dicek dengan tombol apa untuk berpindah fokus?",
      options: ["Tab", "Caps Lock", "Print Screen", "Escape saja"],
      correctAnswer: "Tab",
      explanation:
        "Tab membantu user keyboard berpindah dari satu elemen focusable ke elemen berikutnya.",
    },
    {
      id: "forms-basic-accessibility-assessment-q9",
      type: "multiple-choice",
      question: "Apa risiko memakai div yang diberi klik untuk aksi dasar seperti tombol?",
      options: [
        "Div selalu mengirim form otomatis",
        "Div otomatis menjadi link eksternal",
        "Div bisa lebih sulit dipakai dengan keyboard",
        "Div tidak bisa diberi CSS",
      ],
      correctAnswer: "Div bisa lebih sulit dipakai dengan keyboard",
      explanation:
        "Div tidak punya perilaku button bawaan. Untuk aksi dasar, button asli lebih aman untuk keyboard dan accessibility.",
    },
    {
      id: "forms-basic-accessibility-assessment-q10",
      type: "multiple-choice",
      question: "Mana contoh checklist accessibility dasar yang tepat?",
      options: [
        "Mengubah semua elemen menjadi div",
        "Menghapus semua label agar form lebih pendek",
        "Memastikan semua gambar memakai nama file sebagai alt",
        "Mengecek label terhubung, button dipakai untuk aksi, dan Tab bisa menjangkau elemen interaktif",
      ],
      correctAnswer:
        "Mengecek label terhubung, button dipakai untuk aksi, dan Tab bisa menjangkau elemen interaktif",
      explanation:
        "Checklist awal membantu menangkap masalah umum: label harus terhubung, elemen semantic harus tepat, dan interaksi harus bisa dijangkau keyboard.",
    },
  ],
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
        "Mengatur tampilan elemen HTML",
        "Menyimpan data user di database",
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
      options: ["padding", ".card", "16px", "{ }"],
      correctAnswer: ".card",
      explanation:
        "Selector memilih target yang akan diberi style. Dalam contoh ini, .card menargetkan elemen dengan class=\"card\".",
    },
    {
      id: "css-core-mechanics-assessment-q3",
      type: "multiple-choice",
      question: "Pada aturan p { color: blue; }, bagian mana yang disebut property?",
      options: ["p", "blue", "color", "CSS"],
      correctAnswer: "color",
      explanation:
        "Property adalah hal yang diatur. Di contoh ini, color adalah property, sedangkan blue adalah value.",
    },
    {
      id: "css-core-mechanics-assessment-q4",
      type: "multiple-choice",
      question: "Pada aturan h1 { font-size: 32px; }, bagian mana yang disebut value?",
      options: ["h1", "font-size", "declaration", "32px"],
      correctAnswer: "32px",
      explanation:
        "Value adalah nilai dari property. Di sini, font-size adalah property dan 32px adalah value.",
    },
    {
      id: "css-core-mechanics-assessment-q5",
      type: "multiple-choice",
      question: "Selector mana yang menargetkan semua elemen p?",
      options: ["#p", ".p", "p", "*p"],
      correctAnswer: "p",
      explanation:
        "p adalah element selector. Selector ini menargetkan elemen <p> di HTML.",
    },
    {
      id: "css-core-mechanics-assessment-q6",
      type: "multiple-choice",
      question: "Selector mana yang menargetkan elemen dengan class=\"card\"?",
      options: ["card", "#card", ".card", "class.card"],
      correctAnswer: ".card",
      explanation:
        "Class selector memakai titik di depan nama class. .card menargetkan elemen dengan class=\"card\".",
    },
    {
      id: "css-core-mechanics-assessment-q7",
      type: "multiple-choice",
      question: "Selector mana yang menargetkan elemen dengan id=\"main-title\"?",
      options: [".main-title", "main-title", "title.main", "#main-title"],
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
        "Menentukan aturan CSS mana yang berlaku ketika ada beberapa aturan",
        "Mengubah HTML menjadi database",
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
        ".intro karena class selector lebih spesifik",
        "Keduanya selalu dibatalkan",
        "Browser memilih acak",
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
        "Menghapus semua HTML",
        "Menambahkan !important ke semua rule",
        "Mengubah semua selector menjadi id",
        "Cek target selector, specificity, dan urutan rule",
      ],
      correctAnswer: "Cek target selector, specificity, dan urutan rule",
      explanation:
        "Sebelum memakai !important, cek apakah selector sudah menargetkan elemen yang benar, seberapa kuat selector itu, dan urutan rule di CSS.",
    },
  ],
};

export const quizzes: Quiz[] = [
  whatIsWebsiteAndWebPageQuiz,
  howWebPageLoadsQuiz,
  whatAreHtmlCssJavascriptQuiz,
  htmlCssJsRolesQuiz,
  webFoundationsAssessmentQuiz,
  htmlBasicStructureQuiz,
  tagElementAttributeQuiz,
  htmlBasicsAssessmentQuiz,
  semanticHtmlStructureQuiz,
  htmlSemanticQuiz,
  semanticHtmlAssessmentQuiz,
  formsBasicAccessibilityAssessmentQuiz,
  cssCoreMechanicsAssessmentQuiz,
];
