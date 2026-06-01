import type { CodingChallenge } from "@/types/challenge";

export const buildBasicHtmlPageChallenge: CodingChallenge = {
  id: "build-basic-html-page",
  lessonId: "html-basic-structure",
  title: "Membuat halaman HTML pertama",
  description: "Latihan membuat struktur dasar halaman HTML.",
  instructions: [
    "Lengkapi struktur HTML dasar. Kamu sedang melatih struktur, bukan desain.",
    "Pastikan ada doctype, elemen html, head, title, dan body.",
    "Tulis heading dan paragraf di dalam body karena bagian itu yang terlihat di preview.",
    "Gunakan preview untuk mengecek apakah h1 dan paragraf sudah muncul.",
  ],
  starterCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Halaman Pertama Saya</title>
  </head>
  <body>
    <!-- Tulis h1 dan p di sini -->
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
    "Ada elemen html, head, dan body.",
    "Title ditulis di dalam head.",
    "Konten yang terlihat ditulis di dalam body.",
    "Halaman punya h1.",
    "Halaman punya paragraf.",
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
    "Lengkapi image dengan attribute src dan alt.",
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
    "Image memakai src.",
    "Image punya alt text singkat.",
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
      { id: "has-image", label: "Ada image.", type: "hasElement", target: "img" },
      {
        id: "image-has-src",
        label: "Image memakai src.",
        type: "hasElementWithAttribute",
        target: "img",
        attribute: "src",
        mustHaveValue: true,
      },
      {
        id: "image-has-alt",
        label: "Image punya alt text.",
        type: "hasElementWithAttribute",
        target: "img",
        attribute: "alt",
        mustHaveValue: true,
      },
    ],
  },
  skillTags: ["HTML", "Web Fundamentals"],
};

export const buildSemanticHtmlPageChallenge: CodingChallenge = {
  id: "build-semantic-html-page",
  lessonId: "semantic-html-structure",
  title: "Membuat struktur halaman semantic HTML",
  description: "Latihan menyusun bagian halaman dengan elemen semantic.",
  instructions: [
    "Semantic HTML membahas makna struktur, bukan visual style.",
    "Susun bagian halaman berdasarkan tujuan kontennya.",
    "Gunakan header, nav, main, section atau article, dan footer.",
    "Jaga urutan heading tetap masuk akal, mulai dari h1 untuk judul utama.",
  ],
  starterCode: {
    html: `<header>
  <h1>FluentStack Notes</h1>
  <!-- Tambahkan nav di sini -->
</header>

<!-- Tambahkan main, section atau article, dan footer -->`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<header>
  <h1>FluentStack Notes</h1>
  <nav>
    <a href="#lesson">Lesson</a>
    <a href="#summary">Summary</a>
  </nav>
</header>

<main>
  <section id="lesson">
    <h2>Belajar Semantic HTML</h2>
    <p>Setiap bagian halaman memakai element sesuai maknanya.</p>
  </section>
</main>

<footer id="summary">
  <p>Catatan belajar HTML.</p>
</footer>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  checklist: [
    "Header dipakai untuk bagian atas halaman.",
    "Nav dipakai untuk navigasi.",
    "Main membungkus konten utama.",
    "Section atau article dipakai untuk bagian konten.",
    "Footer dipakai untuk bagian bawah halaman.",
    "Heading hierarchy tetap masuk akal.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-header", label: "Ada header.", type: "hasElement", target: "header" },
      { id: "has-nav", label: "Ada nav.", type: "hasElement", target: "nav" },
      { id: "has-main", label: "Ada main.", type: "hasElement", target: "main" },
      { id: "has-content-section", label: "Ada section atau article.", type: "hasElement", target: "section, article" },
      { id: "has-footer", label: "Ada footer.", type: "hasElement", target: "footer" },
    ],
  },
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
};

export const refactorDivLayoutToSemanticHtmlChallenge: CodingChallenge = {
  id: "refactor-div-layout-to-semantic-html",
  lessonId: "html-semantic-basics",
  title: "Mengubah struktur div menjadi semantic HTML",
  description:
    "Latihan mengganti struktur umum berbasis div menjadi elemen HTML yang lebih bermakna.",
  instructions: [
    "Gunakan latihan ini sebagai review, bukan materi baru.",
    "Ganti div utama jika ada elemen semantic yang lebih tepat.",
    "Pilih elemen berdasarkan fungsi konten: navigasi, konten utama, artikel, atau penutup.",
    "Jangan fokus ke tampilan dulu. Fokus ke makna struktur HTML.",
  ],
  starterCode: {
    html: `<div class="top">
  <h1>Catatan Belajar</h1>
  <div class="menu">
    <a href="#html">HTML</a>
    <a href="#summary">Summary</a>
  </div>
</div>

<div class="content">
  <div class="post" id="html">
    <h2>Semantic HTML</h2>
    <p>Struktur yang bermakna membantu halaman lebih mudah dipahami.</p>
  </div>
</div>

<div class="bottom" id="summary">
  <p>FluentStack</p>
</div>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<header>
  <h1>Catatan Belajar</h1>
  <nav>
    <a href="#html">HTML</a>
    <a href="#summary">Summary</a>
  </nav>
</header>

<main>
  <article id="html">
    <h2>Semantic HTML</h2>
    <p>Struktur yang bermakna membantu halaman lebih mudah dipahami.</p>
  </article>
</main>

<footer id="summary">
  <p>FluentStack</p>
</footer>`,
    css: `body {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 24px;
}`,
    js: "",
  },
  checklist: [
    "Div utama yang tidak bermakna sudah diganti jika ada elemen semantic yang lebih tepat.",
    "Navigasi memakai nav.",
    "Konten utama berada di main.",
    "Bagian bawah halaman memakai footer.",
    "Struktur heading tetap jelas.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-header", label: "Ada header.", type: "hasElement", target: "header" },
      { id: "has-nav", label: "Ada nav.", type: "hasElement", target: "nav" },
      { id: "has-main", label: "Ada main.", type: "hasElement", target: "main" },
      { id: "has-content-section", label: "Ada section atau article.", type: "hasElement", target: "section, article" },
      { id: "has-footer", label: "Ada footer.", type: "hasElement", target: "footer" },
    ],
  },
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
};

export const buildFlexboxNavbarChallenge: CodingChallenge = {
  id: "build-flexbox-navbar",
  lessonId: "css-flexbox-basics",
  title: "Membuat responsive navbar",
  description:
    "Latihan menyusun navbar sederhana menggunakan Flexbox agar elemen brand, menu, dan aksi sejajar dengan rapi.",
  instructions: [
    "Gunakan display flex pada container navbar.",
    "Tempatkan brand di kiri, menu di tengah, dan tombol aksi di kanan.",
    "Tambahkan tombol aksi seperti Login dan Start Trial di sisi kanan.",
    "Buat layout tetap rapi saat lebar layar mengecil (boleh stack di mobile).",
  ],
  starterCode: {
    html: `<header class="navbar">
  <div class="brand">FluentStack</div>
  <nav class="menu">
    <a href="#">Roadmap</a>
    <a href="#">Lesson</a>
    <a href="#">Progres</a>
  </nav>
  <div class="actions">
    <button class="btn ghost">Login</button>
    <button class="btn solid">Start Trial</button>
  </div>
</header>`,
    css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Montserrat, sans-serif;
  background: #050816;
  color: #f4f5f7;
}

.navbar {
  padding: 14px 20px;
  border-bottom: 1px solid #2a3146;
}

.brand {
  font-weight: 700;
}

.menu a {
  color: #d4d8e4;
  text-decoration: none;
  margin-right: 14px;
}

.btn {
  border-radius: 10px;
  padding: 8px 12px;
  border: 1px solid transparent;
}

.btn.ghost {
  background: transparent;
  color: #d4d8e4;
  border-color: #3a425d;
}

.btn.solid {
  background: #38bdf8;
  color: #07111f;
}`,
    js: `console.log("Flexbox navbar practice");`,
  },
  solutionCode: {
    html: `<header class="navbar">
  <div class="brand">FluentStack</div>
  <nav class="menu">
    <a href="#">Roadmap</a>
    <a href="#">Lesson</a>
    <a href="#">Progres</a>
  </nav>
  <div class="actions">
    <button class="btn ghost">Login</button>
    <button class="btn solid">Start Trial</button>
  </div>
</header>`,
    css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Montserrat, sans-serif;
  background: #050816;
  color: #f4f5f7;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  border-bottom: 1px solid #2a3146;
}

.brand {
  font-weight: 700;
}

.menu {
  display: flex;
  align-items: center;
  gap: 14px;
}

.menu a {
  color: #d4d8e4;
  text-decoration: none;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn {
  border-radius: 10px;
  padding: 8px 12px;
  border: 1px solid transparent;
}

.btn.ghost {
  background: transparent;
  color: #d4d8e4;
  border-color: #3a425d;
}

.btn.solid {
  background: #38bdf8;
  color: #07111f;
}

@media (max-width: 760px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .actions {
    width: 100%;
  }
}`,
    js: `console.log("Solution: navbar now uses flexbox layout");`,
  },
  checklist: [
    "Navbar container sudah memakai display flex.",
    "Menu link tersusun sejajar dengan jarak yang konsisten.",
    "Area actions punya tombol yang tetap rapi saat layar mengecil.",
  ],
  skillTags: ["CSS", "Flexbox", "Responsive Design"],
};

export const challenges: CodingChallenge[] = [
  buildBasicHtmlPageChallenge,
  practiceTagElementAttributeChallenge,
  buildSemanticHtmlPageChallenge,
  refactorDivLayoutToSemanticHtmlChallenge,
  buildFlexboxNavbarChallenge,
];
