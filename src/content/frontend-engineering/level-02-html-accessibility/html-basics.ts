import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const htmlBasicsModule: Module = {
  id: "html-basics",
  trackId: "frontend-engineering",
  title: "HTML Basics",
  slug: "html-basics",
  description:
    "Belajar struktur dasar halaman HTML, tag, element, attribute, dan konten dasar halaman.",
  order: 2,
  lessonIds: [
    "html-basic-structure",
    "tag-element-attribute",
    "headings-paragraphs-links-images",
    "relative-paths-basic",
    "html-basics-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["HTML", "Web Fundamentals"],
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
    "Menulis halaman HTML sederhana dan mengeceknya dengan preview serta cek otomatis",
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
        "Di lesson sebelumnya, kamu sudah menulis struktur HTML dasar. Sekarang kamu akan memberi nama pada bagian kecil yang sering muncul di kode. Tag adalah penanda seperti <a> atau <p>. Element adalah satu bagian HTML lengkap, misalnya <p>Halo</p>. Attribute adalah informasi tambahan di dalam tag pembuka, misalnya href pada link.",
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
    "Memakai link dengan href dan gambar dengan src serta alt",
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
    "Memakai relative path pada link dan gambar di halaman HTML kecil",
  ],
  skillTags: ["HTML", "Relative Paths", "Project Structure"],
  blocks: [
    {
      id: "relative-paths-basic-intro",
      type: "text",
      title: "Href dan src menunjuk ke lokasi",
      content:
        "Di lesson sebelumnya, kamu memakai href pada link dan src pada gambar. Sekarang kamu melihat nilai di dalam href dan src. Nilai itu sering berupa path, yaitu petunjuk lokasi file atau halaman. Kamu belum perlu masuk ke teori filesystem yang dalam. Fokus dulu pada contoh project kecil.",
    },
    {
      id: "relative-paths-basic-core-concept",
      type: "text",
      title: "Relative path dibaca dari posisi file saat ini",
      content:
        "Relative path adalah path yang dibaca dari posisi file HTML yang sedang kamu tulis. Jika index.html dan about.html berada di folder yang sama, link bisa memakai href=\"about.html\". Jika gambar berada di folder images, img bisa memakai src=\"images/logo.png\" atau src=\"./images/logo.png\". Tanda ./ berarti mulai dari folder saat ini.",
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
        "Berikutnya, kamu akan mengecek kesiapan HTML Basics lewat checkpoint module.",
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
    "Memakai heading, paragraf, link, gambar, href, src, alt, dan relative path sederhana",
    "Membangun halaman HTML kecil dengan konten dasar dan cek otomatis",
  ],
  skillTags: ["HTML", "Checkpoint", "Web Fundamentals"],
  blocks: [
    {
      id: "html-basics-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini menggabungkan semua lesson HTML Basics. Kamu akan mengecek struktur dokumen HTML, perbedaan head dan body, perbedaan title dan h1, tag, element, attribute, heading, paragraf, link, gambar, alt text, dan relative path sederhana. Ini bukan soal jebakan. Tujuannya memastikan kamu siap masuk ke Semantic HTML.",
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
      title: "Baca MDN secara terarah",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi resmi, bukan tugas menghafal. Kamu tidak perlu membaca semuanya sekarang. Fokus pada bagian yang sudah kamu pelajari di HTML Basics.",
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
        "Kembali ke latihan HTML Basics dan tunjukkan satu tag, satu element, satu attribute, satu link dengan href, dan satu gambar dengan src serta alt.",
    },
    {
      id: "html-basics-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap lanjut jika bisa membedakan informasi untuk browser dan konten yang terlihat.",
        "Kamu siap lanjut jika bisa membaca tag, element, dan attribute pada contoh HTML sederhana.",
        "Kamu siap lanjut jika bisa memakai heading, paragraf, link, gambar, href, src, alt, dan relative path sederhana.",
        "Jika checkpoint belum lulus, review lagi struktur HTML dasar, tag/element/attribute, konten body, dan relative path.",
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

export const htmlBasicStructureQuiz: Quiz = {
  id: "html-basic-structure-quiz",
  lessonId: "html-basic-structure",
  title: "Quiz Struktur HTML Dasar",
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
  title: "Quiz Tag, Element, dan Attribute",
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
  title: "Uji Kompetensi HTML Basics",
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

export const buildBasicHtmlPageChallenge: CodingChallenge = {
  id: "build-basic-html-page",
  lessonId: "html-basic-structure",
  title: "Membuat halaman HTML pertama",
  description: "Latihan menulis kerangka HTML dasar dan melihat konten body di preview.",
  instructions: [
    "Fokus pada struktur HTML dulu. Ini bukan latihan desain.",
    "Tambahkan title di dalam head untuk memberi nama halaman di tab browser.",
    "Tambahkan h1 dan p di dalam body karena bagian body yang terlihat di preview.",
    "CSS dan JS belum perlu diubah. Gunakan cek otomatis untuk melihat bagian mana yang sudah lengkap.",
  ],
  starterCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <!-- Tambahkan title di sini -->
  </head>
  <body>
    <!-- Tambahkan h1 dan p di sini -->
  </body>
</html>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Halaman Pertama Saya</title>
  </head>
  <body>
    <h1>Belajar HTML Pertama</h1>
    <p>Saya sedang belajar membuat struktur halaman dengan HTML.</p>
  </body>
</html>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada doctype.",
    "Ada elemen html.",
    "Ada elemen head.",
    "Title ditulis di dalam head.",
    "Ada elemen body.",
    "Konten yang terlihat ditulis di dalam body.",
    "Halaman punya h1.",
    "Halaman punya p untuk paragraf.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-doctype", label: "Ada doctype.", type: "hasDoctype" },
      { id: "has-html", label: "Ada elemen html.", type: "hasElement", target: "html" },
      { id: "has-head", label: "Ada elemen head.", type: "hasElement", target: "head" },
      { id: "has-title", label: "Ada title di dalam head.", type: "hasTextInElement", target: "head title" },
      { id: "has-body", label: "Ada elemen body.", type: "hasElement", target: "body" },
      { id: "has-h1", label: "Ada h1.", type: "hasTextInElement", target: "h1" },
      { id: "has-paragraph", label: "Ada p untuk paragraf.", type: "hasTextInElement", target: "p" },
    ],
  },
  skillTags: ["HTML", "Web Fundamentals"],
};

export const practiceTagElementAttributeChallenge: CodingChallenge = {
  id: "practice-tag-element-attribute",
  lessonId: "tag-element-attribute",
  title: "Latihan tag, element, dan attribute",
  description: "Latihan mengenali dan memakai attribute pada link dan gambar.",
  instructions: [
    "Fokus pada struktur HTML, bukan visual design.",
    "Lengkapi link dengan attribute href.",
    "Lengkapi gambar dengan attribute src dan alt.",
    "Setelah preview tampil, coba sebutkan satu tag, satu element lengkap, dan satu attribute dari kode kamu.",
  ],
  starterCode: {
    html: `<h1>Profil Belajar</h1>
<p>Saya sedang belajar HTML di FluentStack.</p>

<a> Buka roadmap </a>

<img />`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<h1>Profil Belajar</h1>
<p>Saya sedang belajar HTML di FluentStack.</p>

<a href="/roadmap">Buka roadmap</a>

<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='160'%3E%3Crect width='320' height='160' fill='%230891b2'/%3E%3Ctext x='24' y='86' fill='white' font-size='24'%3EFluentStack%3C/text%3E%3C/svg%3E" alt="Kartu belajar FluentStack" />`,
    css: "",
    js: "",
  },
  checklist: [
    "Link memakai href.",
    "Gambar memakai src.",
    "Gambar punya alt text singkat.",
    "Kamu bisa mengidentifikasi satu tag.",
    "Kamu bisa mengidentifikasi satu element lengkap.",
    "Kamu bisa mengidentifikasi satu attribute.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-heading", label: "Ada heading.", type: "hasTextInElement", target: "h1, h2, h3" },
      { id: "has-paragraph", label: "Ada paragraf.", type: "hasTextInElement", target: "p" },
      { id: "has-link", label: "Ada link.", type: "hasTextInElement", target: "a" },
      {
        id: "link-has-href",
        label: "Link memakai href.",
        type: "hasElementWithAttribute",
        target: "a",
        attribute: "href",
        mustHaveValue: true,
      },
      { id: "has-image", label: "Ada gambar (img).", type: "hasElement", target: "img" },
      {
        id: "image-has-src",
        label: "Gambar memakai src.",
        type: "hasElementWithAttribute",
        target: "img",
        attribute: "src",
        mustHaveValue: true,
      },
      {
        id: "image-has-alt",
        label: "Gambar punya alt text.",
        type: "hasElementWithAttribute",
        target: "img",
        attribute: "alt",
        mustHaveValue: true,
      },
    ],
  },
  skillTags: ["HTML", "Web Fundamentals"],
};

export const buildBasicContentPageChallenge: CodingChallenge = {
  id: "build-basic-content-page",
  lessonId: "headings-paragraphs-links-images",
  title: "Membuat konten halaman sederhana",
  description: "Latihan membuat heading, paragraf, link, dan gambar di dalam body.",
  instructions: [
    "Fokus pada konten HTML yang terlihat di body.",
    "Tambahkan h1 sebagai heading utama dan p sebagai paragraf.",
    "Tambahkan link dengan attribute href.",
    "Tambahkan gambar dengan src dan alt. CSS dan JS belum perlu diubah.",
  ],
  starterCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Konten Halaman</title>
  </head>
  <body>
    <!-- Tambahkan h1, p, link, dan gambar di sini -->
  </body>
</html>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Konten Halaman</title>
  </head>
  <body>
    <h1>Catatan Belajar HTML</h1>
    <p>Saya sedang belajar membuat konten halaman dengan HTML.</p>
    <a href="/roadmap">Lihat roadmap belajar</a>
    <img src="images/html-card.png" alt="Kartu belajar HTML" />
  </body>
</html>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada h1.",
    "Ada paragraf.",
    "Ada link.",
    "Link memakai href.",
    "Ada gambar (img).",
    "Gambar memakai src.",
    "Gambar punya alt text.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-h1", label: "Ada h1.", type: "hasTextInElement", target: "h1" },
      { id: "has-paragraph", label: "Ada paragraf.", type: "hasTextInElement", target: "p" },
      { id: "has-link", label: "Ada link.", type: "hasTextInElement", target: "a" },
      { id: "link-has-href", label: "Link memakai href.", type: "hasElementWithAttribute", target: "a", attribute: "href", mustHaveValue: true },
      { id: "has-image", label: "Ada gambar (img).", type: "hasElement", target: "img" },
      { id: "image-has-src", label: "Gambar memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "image-has-alt", label: "Gambar punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
    ],
  },
  skillTags: ["HTML", "Web Fundamentals", "Content Structure"],
};

export const practiceRelativePathsChallenge: CodingChallenge = {
  id: "practice-relative-paths",
  lessonId: "relative-paths-basic",
  title: "Latihan relative path",
  description: "Latihan memakai href dan src untuk mengarah ke file di project kecil.",
  instructions: [
    "Bayangkan index.html berada sejajar dengan about.html.",
    "Lengkapi link agar menuju about.html.",
    "Lengkapi gambar agar mengambil logo dari folder images.",
    "Tambahkan alt text singkat untuk gambar. CSS dan JS tidak perlu diubah.",
  ],
  starterCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Latihan Relative Path</title>
  </head>
  <body>
    <h1>Project Belajar</h1>
    <p>Lengkapi link dan gambar dengan relative path.</p>

    <a>Tentang saya</a>
    <img />
  </body>
</html>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Latihan Relative Path</title>
  </head>
  <body>
    <h1>Project Belajar</h1>
    <p>Lengkapi link dan gambar dengan relative path.</p>

    <a href="about.html">Tentang saya</a>
    <img src="images/logo.png" alt="Logo project belajar" />
  </body>
</html>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada link.",
    "Link memakai href.",
    "href memakai relative path sederhana.",
    "Ada gambar (img).",
    "Gambar memakai src.",
    "src mengarah ke folder images.",
    "Gambar punya alt text.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-link", label: "Ada link.", type: "hasTextInElement", target: "a" },
      { id: "link-has-href", label: "Link memakai href.", type: "hasElementWithAttribute", target: "a", attribute: "href", mustHaveValue: true },
      { id: "href-about", label: "href memakai relative path sederhana.", type: "hasElementWithAttribute", target: "a", attribute: "href", valueIncludes: "about.html" },
      { id: "has-image", label: "Ada gambar (img).", type: "hasElement", target: "img" },
      { id: "image-has-src", label: "Gambar memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "src-images-folder", label: "src mengarah ke folder images.", type: "hasElementWithAttribute", target: "img", attribute: "src", valueIncludes: "images/" },
      { id: "image-has-alt", label: "Gambar punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
    ],
  },
  skillTags: ["HTML", "Relative Paths", "Project Structure"],
};

export const buildHtmlBasicsPageChallenge: CodingChallenge = {
  id: "build-html-basics-page",
  lessonId: "html-basics-assessment",
  title: "Membangun halaman HTML Basics",
  description:
    "Checkpoint praktik untuk membuat halaman HTML kecil dengan title, heading, paragraf, link, gambar, dan relative path.",
  instructions: [
    "Lengkapi struktur HTML dasar terlebih dahulu.",
    "Tambahkan title di dalam head.",
    "Di dalam body, tambahkan h1, paragraf, link dengan href, dan gambar dengan src serta alt.",
    "Gunakan href=\"about.html\" untuk link dan src=\"images/html-card.png\" untuk gambar agar relative path ikut dilatih.",
    "CSS dan JS tidak perlu diubah. Gunakan cek otomatis untuk memastikan struktur HTML sudah lengkap.",
  ],
  starterCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <!-- Tambahkan title di sini -->
  </head>
  <body>
    <!-- Tambahkan h1, p, link, dan gambar di sini -->
  </body>
</html>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Profil Belajar HTML</title>
  </head>
  <body>
    <h1>Profil Belajar HTML</h1>
    <p>Saya sedang melatih struktur HTML dasar.</p>
    <a href="about.html">Tentang saya</a>
    <img src="images/html-card.png" alt="Kartu HTML Basics" />
  </body>
</html>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada doctype.",
    "Ada html, head, title, dan body.",
    "Body punya h1 dan paragraf.",
    "Link memakai href.",
    "Gambar memakai src dan alt.",
    "Link atau gambar memakai relative path sederhana.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-doctype", label: "Ada doctype.", type: "hasDoctype" },
      { id: "has-html", label: "Ada elemen html.", type: "hasElement", target: "html" },
      { id: "has-head", label: "Ada elemen head.", type: "hasElement", target: "head" },
      { id: "has-title", label: "Ada title di dalam head.", type: "hasTextInElement", target: "head title" },
      { id: "has-body", label: "Ada elemen body.", type: "hasElement", target: "body" },
      { id: "has-h1", label: "Ada h1.", type: "hasTextInElement", target: "h1" },
      { id: "has-paragraph", label: "Ada paragraf.", type: "hasTextInElement", target: "p" },
      { id: "has-link-href", label: "Link memakai href.", type: "hasElementWithAttribute", target: "a", attribute: "href", mustHaveValue: true },
      { id: "has-about-path", label: "Link menuju about.html.", type: "hasElementWithAttribute", target: "a", attribute: "href", valueIncludes: "about.html" },
      { id: "has-image-src", label: "Gambar memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "has-images-path", label: "Gambar memakai path folder images.", type: "hasElementWithAttribute", target: "img", attribute: "src", valueIncludes: "images/" },
      { id: "has-image-alt", label: "Gambar punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
    ],
  },
  skillTags: ["HTML", "Checkpoint", "Web Fundamentals"],
};

export const htmlBasicsLessons: Lesson[] = [
  htmlBasicStructureLesson,
  tagElementAttributeLesson,
  headingsParagraphsLinksImagesLesson,
  relativePathsBasicLesson,
  htmlBasicsAssessmentLesson,
];

export const htmlBasicsQuizzes: Quiz[] = [
  htmlBasicStructureQuiz,
  tagElementAttributeQuiz,
  htmlBasicsAssessmentQuiz,
];

export const htmlBasicsChallenges: CodingChallenge[] = [
  buildBasicHtmlPageChallenge,
  practiceTagElementAttributeChallenge,
  buildBasicContentPageChallenge,
  practiceRelativePathsChallenge,
  buildHtmlBasicsPageChallenge,
];
