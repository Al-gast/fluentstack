import type { CodingChallenge } from "@/types/challenge";

export const buildBasicHtmlPageChallenge: CodingChallenge = {
  id: "build-basic-html-page",
  lessonId: "html-basic-structure",
  title: "Membuat halaman HTML pertama",
  description: "Latihan menulis kerangka HTML dasar dan melihat konten body di preview.",
  instructions: [
    "Fokus pada struktur HTML dulu. Ini bukan latihan desain.",
    "Tambahkan title di dalam head untuk memberi nama halaman di tab browser.",
    "Tambahkan h1 dan p di dalam body karena bagian body yang terlihat di preview.",
    "CSS dan JS belum perlu diubah. Gunakan auto-check untuk melihat bagian mana yang sudah lengkap.",
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

export const buildBasicContentPageChallenge: CodingChallenge = {
  id: "build-basic-content-page",
  lessonId: "headings-paragraphs-links-images",
  title: "Membuat konten halaman sederhana",
  description: "Latihan membuat heading, paragraf, link, dan gambar di dalam body.",
  instructions: [
    "Fokus pada konten HTML yang terlihat di body.",
    "Tambahkan h1 sebagai heading utama dan p sebagai paragraf.",
    "Tambahkan link dengan attribute href.",
    "Tambahkan image dengan src dan alt. CSS dan JS belum perlu diubah.",
  ],
  starterCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <title>Konten Halaman</title>
  </head>
  <body>
    <!-- Tambahkan h1, p, link, dan image di sini -->
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
    "Ada image.",
    "Image memakai src.",
    "Image punya alt text.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-h1", label: "Ada h1.", type: "hasTextInElement", target: "h1" },
      { id: "has-paragraph", label: "Ada paragraf.", type: "hasTextInElement", target: "p" },
      { id: "has-link", label: "Ada link.", type: "hasTextInElement", target: "a" },
      { id: "link-has-href", label: "Link memakai href.", type: "hasElementWithAttribute", target: "a", attribute: "href", mustHaveValue: true },
      { id: "has-image", label: "Ada image.", type: "hasElement", target: "img" },
      { id: "image-has-src", label: "Image memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "image-has-alt", label: "Image punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
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
    "Lengkapi image agar mengambil logo dari folder images.",
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
    <p>Lengkapi link dan image dengan relative path.</p>

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
    <p>Lengkapi link dan image dengan relative path.</p>

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
    "Ada image.",
    "Image memakai src.",
    "src mengarah ke folder images.",
    "Image punya alt text.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-link", label: "Ada link.", type: "hasTextInElement", target: "a" },
      { id: "link-has-href", label: "Link memakai href.", type: "hasElementWithAttribute", target: "a", attribute: "href", mustHaveValue: true },
      { id: "href-about", label: "href memakai relative path sederhana.", type: "hasElementWithAttribute", target: "a", attribute: "href", valueIncludes: "about.html" },
      { id: "has-image", label: "Ada image.", type: "hasElement", target: "img" },
      { id: "image-has-src", label: "Image memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "src-images-folder", label: "src mengarah ke folder images.", type: "hasElementWithAttribute", target: "img", attribute: "src", valueIncludes: "images/" },
      { id: "image-has-alt", label: "Image punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
    ],
  },
  skillTags: ["HTML", "Relative Paths", "Project Structure"],
};

export const buildHtmlBasicsPageChallenge: CodingChallenge = {
  id: "build-html-basics-page",
  lessonId: "html-basics-assessment",
  title: "Membangun halaman HTML Basics",
  description:
    "Assessment praktik untuk membuat halaman HTML kecil dengan title, heading, paragraf, link, image, dan relative path.",
  instructions: [
    "Lengkapi struktur HTML dasar terlebih dahulu.",
    "Tambahkan title di dalam head.",
    "Di dalam body, tambahkan h1, paragraf, link dengan href, dan image dengan src serta alt.",
    "Gunakan href=\"about.html\" untuk link dan src=\"images/html-card.png\" untuk image agar relative path ikut dilatih.",
    "CSS dan JS tidak perlu diubah. Gunakan auto-check untuk memastikan struktur HTML sudah lengkap.",
  ],
  starterCode: {
    html: `<!doctype html>
<html lang="id">
  <head>
    <!-- Tambahkan title di sini -->
  </head>
  <body>
    <!-- Tambahkan h1, p, link, dan image di sini -->
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
    "Image memakai src dan alt.",
    "Link atau image memakai relative path sederhana.",
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
      { id: "has-image-src", label: "Image memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "has-images-path", label: "Image memakai path folder images.", type: "hasElementWithAttribute", target: "img", attribute: "src", valueIncludes: "images/" },
      { id: "has-image-alt", label: "Image punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
    ],
  },
  skillTags: ["HTML", "Assessment", "Web Fundamentals"],
};

export const buildSemanticHtmlAssessmentPageChallenge: CodingChallenge = {
  id: "build-semantic-html-assessment-page",
  lessonId: "semantic-html-assessment",
  title: "Membangun halaman semantic HTML",
  description:
    "Assessment praktik untuk menyusun halaman kecil memakai elemen semantic.",
  instructions: [
    "Ganti struktur umum berbasis div menjadi semantic HTML.",
    "Gunakan header, nav, main, section atau article, dan footer sesuai fungsi konten.",
    "Jaga heading tetap jelas: h1 untuk judul utama, h2 untuk bagian di dalam konten.",
    "CSS dan JS tidak perlu diubah. Fokus pada makna struktur HTML.",
  ],
  starterCode: {
    html: `<div class="top">
  <h1>Catatan Frontend</h1>
  <div class="links">
    <a href="#html">HTML</a>
    <a href="#next">Next Step</a>
  </div>
</div>

<div class="content">
  <div id="html">
    <h2>Belajar Semantic HTML</h2>
    <p>Pilih elemen berdasarkan fungsi konten.</p>
  </div>
</div>

<div id="next">
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
  <h1>Catatan Frontend</h1>
  <nav>
    <a href="#html">HTML</a>
    <a href="#next">Next Step</a>
  </nav>
</header>

<main>
  <article id="html">
    <h2>Belajar Semantic HTML</h2>
    <p>Pilih elemen berdasarkan fungsi konten.</p>
  </article>
</main>

<footer id="next">
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
    "Bagian atas memakai header.",
    "Navigasi memakai nav.",
    "Konten utama memakai main.",
    "Bagian konten memakai section atau article.",
    "Bagian bawah memakai footer.",
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
  skillTags: ["HTML", "Semantic HTML", "Assessment", "Accessibility"],
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
  buildBasicContentPageChallenge,
  practiceRelativePathsChallenge,
  buildSemanticHtmlPageChallenge,
  refactorDivLayoutToSemanticHtmlChallenge,
  buildHtmlBasicsPageChallenge,
  buildSemanticHtmlAssessmentPageChallenge,
  buildFlexboxNavbarChallenge,
];
