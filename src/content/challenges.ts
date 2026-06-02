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

export const buildBasicAccessibleFormChallenge: CodingChallenge = {
  id: "build-basic-accessible-form",
  lessonId: "form-label-input",
  title: "Membuat form email sederhana",
  description:
    "Latihan membuat form email dengan label yang terhubung ke input.",
  instructions: [
    "Buat form sederhana untuk email.",
    "Tambahkan label untuk email.",
    "Tambahkan input email.",
    "Pastikan label terhubung ke input dengan for dan id yang sama.",
    "Tambahkan button submit.",
  ],
  starterCode: {
    html: `<form>
  <!-- Tambahkan label dan input email di sini -->

  <button>Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />

  <button type="submit">Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada elemen form.",
    "Ada label untuk email.",
    "Ada input email.",
    "Label memiliki attribute for.",
    "Input memiliki id.",
    "Nilai for dan id sama-sama memakai email.",
    "Input memakai type email.",
    "Ada button submit.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-form", label: "Ada elemen form.", type: "hasElement", target: "form" },
      { id: "has-label", label: "Ada label.", type: "hasTextInElement", target: "label" },
      { id: "has-input", label: "Ada input.", type: "hasElement", target: "input" },
      { id: "label-has-for", label: "Label memiliki for.", type: "hasElementWithAttribute", target: "label", attribute: "for", mustHaveValue: true },
      { id: "input-has-id", label: "Input memiliki id.", type: "hasElementWithAttribute", target: "input", attribute: "id", mustHaveValue: true },
      { id: "label-for-email", label: "Label for mengarah ke email.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "email" },
      { id: "input-id-email", label: "Input id memakai email.", type: "hasElementWithAttribute", target: "input", attribute: "id", valueIncludes: "email" },
      { id: "input-type-email", label: "Input memakai type email.", type: "hasElementWithAttribute", target: "input", attribute: "type", valueIncludes: "email" },
      { id: "submit-button", label: "Ada button submit.", type: "hasElementWithAttribute", target: "button", attribute: "type", valueIncludes: "submit" },
    ],
  },
  skillTags: ["HTML", "Forms", "Accessibility"],
};

export const buildContactFormFieldsChallenge: CodingChallenge = {
  id: "build-contact-form-fields",
  lessonId: "textarea-select-required-fields",
  title: "Membuat field form kontak",
  description:
    "Latihan membuat form kontak dengan input, textarea, select, required, dan button submit.",
  instructions: [
    "Buat form kontak sederhana.",
    "Tambahkan input nama atau email.",
    "Tambahkan textarea pesan.",
    "Tambahkan select topik.",
    "Hubungkan setiap label dengan field memakai for dan id.",
    "Tambahkan required pada field penting.",
    "Tambahkan button submit.",
  ],
  starterCode: {
    html: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />

  <!-- Tambahkan textarea pesan dan select topik di sini -->

  <button>Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="message">Pesan</label>
  <textarea id="message" name="message" required></textarea>

  <label for="topic">Topik</label>
  <select id="topic" name="topic" required>
    <option value="">Pilih topik</option>
    <option value="support">Support</option>
    <option value="feedback">Feedback</option>
  </select>

  <button type="submit">Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada elemen form.",
    "Ada textarea untuk pesan.",
    "Ada select untuk topik.",
    "Select punya pilihan support dan feedback.",
    "Ada minimal satu field required.",
    "Label pesan terhubung ke textarea.",
    "Label topik terhubung ke select.",
    "Ada button submit.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-form", label: "Ada elemen form.", type: "hasElement", target: "form" },
      { id: "has-textarea", label: "Ada textarea.", type: "hasElement", target: "textarea" },
      { id: "has-select", label: "Ada select.", type: "hasElement", target: "select" },
      { id: "has-support-option", label: "Ada option support.", type: "hasElementWithAttribute", target: "option", attribute: "value", valueIncludes: "support" },
      { id: "has-feedback-option", label: "Ada option feedback.", type: "hasElementWithAttribute", target: "option", attribute: "value", valueIncludes: "feedback" },
      { id: "has-required-input", label: "Ada field required.", type: "hasElementWithAttribute", target: "input, textarea, select", attribute: "required" },
      { id: "message-label", label: "Label pesan memakai for message.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "message" },
      { id: "message-field", label: "Textarea memakai id message.", type: "hasElementWithAttribute", target: "textarea", attribute: "id", valueIncludes: "message" },
      { id: "topic-label", label: "Label topik memakai for topic.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "topic" },
      { id: "topic-field", label: "Select memakai id topic.", type: "hasElementWithAttribute", target: "select", attribute: "id", valueIncludes: "topic" },
      { id: "submit-button", label: "Ada button submit.", type: "hasElementWithAttribute", target: "button", attribute: "type", valueIncludes: "submit" },
    ],
  },
  skillTags: ["HTML", "Forms", "Accessibility"],
};

export const writeUsefulAltTextChallenge: CodingChallenge = {
  id: "write-useful-alt-text",
  lessonId: "alt-text-basic",
  title: "Menulis alt text yang berguna",
  description:
    "Latihan memperbaiki alt text agar menjelaskan makna gambar dalam konteks halaman.",
  instructions: [
    "Tambahkan atau perbaiki alt pada gambar.",
    "Gunakan alt yang menjelaskan makna gambar.",
    "Hindari alt yang terlalu umum seperti gambar, foto, image, atau photo.",
    "Fokus pada konteks: gambar ini menunjukkan progres belajar.",
  ],
  starterCode: {
    html: `<article>
  <h1>Progres Belajar Minggu Ini</h1>
  <p>Grafik berikut menunjukkan perubahan progres belajar.</p>

  <img src="images/progress-chart.png" />
</article>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<article>
  <h1>Progres Belajar Minggu Ini</h1>
  <p>Grafik berikut menunjukkan perubahan progres belajar.</p>

  <img src="images/progress-chart.png" alt="Grafik progres belajar meningkat dari 40% ke 70%" />
</article>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada image.",
    "Image memakai src.",
    "Image punya alt text.",
    "Alt text tidak kosong.",
    "Alt text menjelaskan progres belajar dalam konteks halaman.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-image", label: "Ada image.", type: "hasElement", target: "img" },
      { id: "image-has-src", label: "Image memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "image-has-alt", label: "Image punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
      { id: "alt-has-progres", label: "Alt menyebut progres.", type: "hasElementWithAttribute", target: "img", attribute: "alt", valueIncludes: "progres" },
      { id: "alt-has-belajar", label: "Alt menyebut belajar.", type: "hasElementWithAttribute", target: "img", attribute: "alt", valueIncludes: "belajar" },
    ],
  },
  skillTags: ["HTML", "Accessibility", "Images"],
};

export const buildAccessibleContactFormChallenge: CodingChallenge = {
  id: "build-accessible-contact-form",
  lessonId: "forms-basic-accessibility-assessment",
  title: "Membuat contact form yang lebih aksesibel",
  description:
    "Assessment praktik untuk membuat form kontak dengan label, field penting, required, submit button, dan gambar bermakna.",
  instructions: [
    "Buat form kontak sederhana.",
    "Tambahkan field nama dan email.",
    "Tambahkan textarea pesan.",
    "Tambahkan select topik.",
    "Hubungkan label ke setiap field dengan for dan id.",
    "Tambahkan required pada field penting.",
    "Tambahkan button submit.",
    "Tambahkan satu gambar bermakna dengan alt text yang jelas.",
  ],
  starterCode: {
    html: `<section>
  <h1>Hubungi Tim</h1>
  <p>Lengkapi form kontak berikut.</p>

  <img src="images/contact-illustration.png" />

  <form>
    <!-- Tambahkan field nama, email, pesan, topik, dan button submit -->
  </form>
</section>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<section>
  <h1>Hubungi Tim</h1>
  <p>Lengkapi form kontak berikut.</p>

  <img src="images/contact-illustration.png" alt="Ilustrasi tim support menerima pesan kontak" />

  <form>
    <label for="name">Nama</label>
    <input id="name" name="name" type="text" required />

    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />

    <label for="message">Pesan</label>
    <textarea id="message" name="message" required></textarea>

    <label for="topic">Topik</label>
    <select id="topic" name="topic" required>
      <option value="">Pilih topik</option>
      <option value="support">Support</option>
      <option value="feedback">Feedback</option>
    </select>

    <button type="submit">Kirim pesan</button>
  </form>
</section>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada form.",
    "Ada field nama dan email.",
    "Ada textarea pesan.",
    "Ada select topik.",
    "Label memakai for yang sesuai dengan id field.",
    "Field penting memakai required.",
    "Ada button submit.",
    "Gambar bermakna punya alt text yang jelas.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-form", label: "Ada form.", type: "hasElement", target: "form" },
      { id: "name-label", label: "Label nama memakai for name.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "name" },
      { id: "name-input", label: "Input nama memakai id name.", type: "hasElementWithAttribute", target: "input", attribute: "id", valueIncludes: "name" },
      { id: "email-label", label: "Label email memakai for email.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "email" },
      { id: "email-input", label: "Input email memakai type email.", type: "hasElementWithAttribute", target: "input", attribute: "type", valueIncludes: "email" },
      { id: "has-textarea", label: "Ada textarea pesan.", type: "hasElement", target: "textarea" },
      { id: "message-label", label: "Label pesan memakai for message.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "message" },
      { id: "message-field", label: "Textarea memakai id message.", type: "hasElementWithAttribute", target: "textarea", attribute: "id", valueIncludes: "message" },
      { id: "has-select", label: "Ada select topik.", type: "hasElement", target: "select" },
      { id: "topic-label", label: "Label topik memakai for topic.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "topic" },
      { id: "topic-field", label: "Select memakai id topic.", type: "hasElementWithAttribute", target: "select", attribute: "id", valueIncludes: "topic" },
      { id: "has-required", label: "Ada field required.", type: "hasElementWithAttribute", target: "input, textarea, select", attribute: "required" },
      { id: "submit-button", label: "Ada button submit.", type: "hasElementWithAttribute", target: "button", attribute: "type", valueIncludes: "submit" },
      { id: "has-image-alt", label: "Gambar punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
      { id: "alt-contact-context", label: "Alt menjelaskan konteks kontak.", type: "hasElementWithAttribute", target: "img", attribute: "alt", valueIncludes: "kontak" },
    ],
  },
  skillTags: ["HTML", "Forms", "Accessibility", "Assessment"],
};

export const styleBasicHtmlTextChallenge: CodingChallenge = {
  id: "style-basic-html-text",
  lessonId: "what-is-css",
  title: "Memberi style pada teks HTML",
  description:
    "Latihan mengubah tampilan h1 dan paragraf memakai CSS sederhana.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan h1 dan beri ukuran font.",
    "Targetkan p dan beri warna teks.",
    "JS tidak perlu diubah.",
  ],
  starterCode: {
    html: `<h1>Belajar CSS</h1>
<p>CSS membuat halaman lebih enak dibaca.</p>`,
    css: `/* Tambahkan style untuk h1 dan p di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<h1>Belajar CSS</h1>
<p>CSS membuat halaman lebih enak dibaca.</p>`,
    css: `h1 {
  font-size: 32px;
}

p {
  color: #d4d4d8;
}`,
    js: "",
  },
  checklist: [
    "CSS menargetkan h1.",
    "h1 memiliki font-size.",
    "CSS menargetkan p.",
    "p memiliki color.",
    "Preview menunjukkan perubahan tampilan teks.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-h1-selector", label: "Ada selector h1.", type: "cssSelectorExists", target: "h1" },
      { id: "h1-font-size", label: "h1 punya property font-size.", type: "cssSelectorPropertyExists", target: "h1", property: "font-size" },
      { id: "has-p-selector", label: "Ada selector p.", type: "cssSelectorExists", target: "p" },
      { id: "p-color", label: "p punya property color.", type: "cssSelectorPropertyExists", target: "p", property: "color" },
    ],
  },
  skillTags: ["CSS", "HTML", "Styling"],
};

export const practiceCssSelectorsDeclarationsChallenge: CodingChallenge = {
  id: "practice-css-selectors-declarations",
  lessonId: "css-selector-declaration-basic",
  title: "Latihan selector, property, dan value",
  description:
    "Latihan membaca dan menulis declaration block dengan selector sederhana.",
  instructions: [
    "Targetkan elemen dengan class card memakai .card.",
    "Tambahkan background, padding, dan border-radius.",
    "Targetkan h2 dan ubah font-size.",
    "JS tidak perlu diubah.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2>CSS Core Mechanics</h2>
  <p>Belajar selector, property, dan value.</p>
</article>`,
    css: `/* Tambahkan .card dan h2 style di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2>CSS Core Mechanics</h2>
  <p>Belajar selector, property, dan value.</p>
</article>`,
    css: `.card {
  background: #18181b;
  padding: 16px;
  border-radius: 12px;
}

h2 {
  font-size: 24px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki background.",
    ".card memiliki padding.",
    ".card memiliki border-radius.",
    "Ada selector h2.",
    "h2 memiliki font-size.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-background", label: ".card punya property background.", type: "cssSelectorPropertyExists", target: ".card", property: "background" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "has-h2-selector", label: "Ada selector h2.", type: "cssSelectorExists", target: "h2" },
      { id: "h2-font-size", label: "h2 punya property font-size.", type: "cssSelectorPropertyExists", target: "h2", property: "font-size" },
    ],
  },
  skillTags: ["CSS", "Selectors", "Styling"],
};

export const debugBasicCssCascadeChallenge: CodingChallenge = {
  id: "debug-basic-css-cascade",
  lessonId: "cascade-specificity-basic",
  title: "Debug cascade CSS sederhana",
  description:
    "Latihan memperbaiki konflik CSS sederhana tanpa memakai !important.",
  instructions: [
    "Perbaiki style agar paragraf dengan class intro terlihat menonjol.",
    "Gunakan selector .intro.",
    "Tambahkan color #38bdf8 pada .intro.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<p class="intro">Ini paragraf pembuka yang perlu terlihat lebih jelas.</p>`,
    css: `p {
  color: gray;
}

/* Tambahkan selector .intro di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<p class="intro">Ini paragraf pembuka yang perlu terlihat lebih jelas.</p>`,
    css: `p {
  color: gray;
}

.intro {
  color: #38bdf8;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .intro.",
    ".intro memiliki color #38bdf8.",
    "Style .intro menang dari p karena selector class lebih spesifik.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-intro-selector", label: "Ada selector .intro.", type: "cssSelectorExists", target: ".intro" },
      { id: "intro-color", label: ".intro punya property color.", type: "cssSelectorPropertyExists", target: ".intro", property: "color" },
      { id: "intro-color-value", label: ".intro memakai color #38bdf8.", type: "cssSelectorPropertyValue", target: ".intro", property: "color", valueIncludes: "#38bdf8" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Cascade", "Specificity", "Debugging"],
};

export const practiceCssBoxModelCardChallenge: CodingChallenge = {
  id: "practice-css-box-model-card",
  lessonId: "css-box-model-basic",
  title: "Membuat card dengan box model dasar",
  description:
    "Latihan memakai padding, border, dan margin pada card sederhana.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan elemen dengan class card memakai .card.",
    "Tambahkan padding.",
    "Tambahkan border.",
    "Tambahkan margin.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2>Belajar Box Model</h2>
  <p>Card ini perlu ruang dalam, garis tepi, dan jarak luar.</p>
</article>`,
    css: `/* Tambahkan style box model untuk .card di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2>Belajar Box Model</h2>
  <p>Card ini perlu ruang dalam, garis tepi, dan jarak luar.</p>
</article>`,
    css: `.card {
  padding: 16px;
  border: 1px solid #3f3f46;
  margin: 16px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki padding.",
    ".card memiliki border.",
    ".card memiliki margin.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "card-margin", label: ".card punya property margin.", type: "cssSelectorPropertyExists", target: ".card", property: "margin" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Box Model", "Spacing"],
};

export const practiceCssPaddingMarginCardChallenge: CodingChallenge = {
  id: "practice-css-padding-margin-card",
  lessonId: "css-padding-margin-basic",
  title: "Mengatur padding dan margin pada card",
  description:
    "Latihan membedakan jarak dalam dan jarak luar pada card dan button.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .card.",
    "Tambahkan padding agar isi card tidak menempel.",
    "Tambahkan margin-bottom agar card punya jarak dengan elemen berikutnya.",
    "Targetkan .button.",
    "Tambahkan padding pada button.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2>Spacing di CSS</h2>
  <p>Padding dan margin membantu UI lebih mudah dibaca.</p>
  <button class="button">Lanjut belajar</button>
</article>

<p>Elemen berikutnya seharusnya tidak terlalu menempel ke card.</p>`,
    css: `/* Tambahkan spacing untuk .card dan .button di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2>Spacing di CSS</h2>
  <p>Padding dan margin membantu UI lebih mudah dibaca.</p>
  <button class="button">Lanjut belajar</button>
</article>

<p>Elemen berikutnya seharusnya tidak terlalu menempel ke card.</p>`,
    css: `.card {
  padding: 20px;
  margin-bottom: 16px;
}

.button {
  padding: 10px 14px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki padding.",
    ".card memiliki margin-bottom.",
    "Ada selector .button.",
    ".button memiliki padding.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-margin-bottom", label: ".card punya property margin-bottom.", type: "cssSelectorPropertyExists", target: ".card", property: "margin-bottom" },
      { id: "has-button-selector", label: "Ada selector .button.", type: "cssSelectorExists", target: ".button" },
      { id: "button-padding", label: ".button punya property padding.", type: "cssSelectorPropertyExists", target: ".button", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Padding", "Margin", "Spacing"],
};

export const practiceCssBorderWidthCardChallenge: CodingChallenge = {
  id: "practice-css-border-width-card",
  lessonId: "css-border-width-basic",
  title: "Membuat card dengan border dan max-width",
  description:
    "Latihan memakai border, border-radius, max-width, padding, dan style heading pada card.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .card.",
    "Tambahkan max-width.",
    "Tambahkan border.",
    "Tambahkan border-radius.",
    "Tambahkan padding.",
    "Targetkan .card-title.",
    "Tambahkan font-size.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2 class="card-title">Card CSS</h2>
  <p class="card-description">Max-width membantu card tetap nyaman dibaca.</p>
</article>`,
    css: `/* Tambahkan style untuk .card dan .card-title di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2 class="card-title">Card CSS</h2>
  <p class="card-description">Max-width membantu card tetap nyaman dibaca.</p>
</article>`,
    css: `.card {
  max-width: 420px;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 16px;
}

.card-title {
  font-size: 24px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki max-width.",
    ".card memiliki border.",
    ".card memiliki border-radius.",
    ".card memiliki padding.",
    "Ada selector .card-title.",
    ".card-title memiliki font-size.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-max-width", label: ".card punya property max-width.", type: "cssSelectorPropertyExists", target: ".card", property: "max-width" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "has-card-title-selector", label: "Ada selector .card-title.", type: "cssSelectorExists", target: ".card-title" },
      { id: "card-title-font-size", label: ".card-title punya property font-size.", type: "cssSelectorPropertyExists", target: ".card-title", property: "font-size" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Border", "Width", "Max Width"],
};

export const fixBoxModelSpacingCardChallenge: CodingChallenge = {
  id: "fix-box-model-spacing-card",
  lessonId: "box-model-spacing-assessment",
  title: "Memperbaiki spacing card sederhana",
  description:
    "Assessment praktik untuk memperbaiki box model dan spacing pada card sederhana.",
  instructions: [
    "Perbaiki card agar spacing-nya lebih rapi.",
    "Gunakan .card untuk styling container.",
    "Tambahkan max-width.",
    "Tambahkan padding.",
    "Tambahkan border.",
    "Tambahkan box-sizing.",
    "Gunakan .card-title untuk mengatur jarak title.",
    "Gunakan .card-description untuk mengatur jarak description.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2 class="card-title">Box Model Review</h2>
  <p class="card-description">Perbaiki spacing card agar lebih mudah dibaca.</p>
  <button class="button">Lanjut</button>
</article>`,
    css: `.card {
  background: #18181b;
}

.button {
  padding: 8px 12px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2 class="card-title">Box Model Review</h2>
  <p class="card-description">Perbaiki spacing card agar lebih mudah dibaca.</p>
  <button class="button">Lanjut</button>
</article>`,
    css: `.card {
  background: #18181b;
  max-width: 420px;
  padding: 20px;
  border: 1px solid #3f3f46;
  box-sizing: border-box;
}

.card-title {
  margin-bottom: 8px;
}

.card-description {
  margin-bottom: 16px;
}

.button {
  padding: 8px 12px;
}`,
    js: "",
  },
  checklist: [
    "Card terlihat lebih mudah dibaca.",
    "Jarak title dan description terasa rapi.",
    "Spacing tidak bergantung pada !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-max-width", label: ".card punya property max-width.", type: "cssSelectorPropertyExists", target: ".card", property: "max-width" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "card-box-sizing", label: ".card punya property box-sizing.", type: "cssSelectorPropertyExists", target: ".card", property: "box-sizing" },
      { id: "has-card-title-selector", label: "Ada selector .card-title.", type: "cssSelectorExists", target: ".card-title" },
      { id: "card-title-margin-bottom", label: ".card-title punya property margin-bottom.", type: "cssSelectorPropertyExists", target: ".card-title", property: "margin-bottom" },
      { id: "has-card-description-selector", label: "Ada selector .card-description.", type: "cssSelectorExists", target: ".card-description" },
      { id: "card-description-margin-bottom", label: ".card-description punya property margin-bottom.", type: "cssSelectorPropertyExists", target: ".card-description", property: "margin-bottom" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Box Model", "Spacing", "Assessment"],
};

export const buildStyledInfoCardChallenge: CodingChallenge = {
  id: "build-styled-info-card",
  lessonId: "css-core-mechanics-assessment",
  title: "Membuat info card sederhana dengan CSS",
  description:
    "Assessment praktik untuk memberi style pada card memakai selector, property, dan value dasar.",
  instructions: [
    "Style card sederhana.",
    "Gunakan class selector .card.",
    "Tambahkan background, padding, dan border-radius.",
    "Style heading dengan .card-title.",
    "Style paragraph dengan .card-description.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2 class="card-title">CSS Core Mechanics</h2>
  <p class="card-description">Selector memilih elemen. Property dan value mengatur tampilannya.</p>
</article>`,
    css: `/* Tambahkan CSS card di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2 class="card-title">CSS Core Mechanics</h2>
  <p class="card-description">Selector memilih elemen. Property dan value mengatur tampilannya.</p>
</article>`,
    css: `.card {
  background: #18181b;
  padding: 20px;
  border-radius: 12px;
}

.card-title {
  font-size: 24px;
  color: #f4f4f5;
}

.card-description {
  color: #d4d4d8;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki background.",
    ".card memiliki padding.",
    ".card memiliki border-radius.",
    ".card-title memiliki font-size.",
    ".card-description memiliki color.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-background", label: ".card punya property background.", type: "cssSelectorPropertyExists", target: ".card", property: "background" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "has-card-title-selector", label: "Ada selector .card-title.", type: "cssSelectorExists", target: ".card-title" },
      { id: "card-title-font-size", label: ".card-title punya property font-size.", type: "cssSelectorPropertyExists", target: ".card-title", property: "font-size" },
      { id: "has-card-description-selector", label: "Ada selector .card-description.", type: "cssSelectorExists", target: ".card-description" },
      { id: "card-description-color", label: ".card-description punya property color.", type: "cssSelectorPropertyExists", target: ".card-description", property: "color" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Selectors", "Cascade", "Assessment"],
};

export const practiceCssFlexboxBasicChallenge: CodingChallenge = {
  id: "practice-css-flexbox-basic",
  lessonId: "css-flexbox-basic",
  title: "Menyusun card dengan Flexbox",
  description:
    "Latihan memakai display flex, gap, dan align-items untuk menyusun card dalam satu baris.",
  instructions: [
    "Targetkan .layout.",
    "Tambahkan display: flex.",
    "Tambahkan gap.",
    "Tambahkan align-items.",
    "Targetkan .card.",
    "Tambahkan padding.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<div class="layout">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</div>`,
    css: `.layout {
  border: 1px solid #3f3f46;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<div class="layout">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</div>`,
    css: `.layout {
  display: flex;
  gap: 16px;
  align-items: center;
  border: 1px solid #3f3f46;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  checklist: [
    ".layout memakai display: flex.",
    ".layout punya gap dan align-items.",
    ".card punya padding agar isi tidak menempel.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-layout-selector", label: "Ada selector .layout.", type: "cssSelectorExists", target: ".layout" },
      { id: "layout-display", label: ".layout punya property display.", type: "cssSelectorPropertyExists", target: ".layout", property: "display" },
      { id: "layout-gap", label: ".layout punya property gap.", type: "cssSelectorPropertyExists", target: ".layout", property: "gap" },
      { id: "layout-align-items", label: ".layout punya property align-items.", type: "cssSelectorPropertyExists", target: ".layout", property: "align-items" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Layout"],
};

export const buildFlexboxNavbarChallenge: CodingChallenge = {
  id: "build-flexbox-navbar",
  lessonId: "build-navbar-with-flexbox",
  title: "Membuat navbar sederhana",
  description:
    "Latihan membuat navbar sederhana dengan Flexbox tanpa JavaScript.",
  instructions: [
    "Targetkan .nav.",
    "Tambahkan display: flex.",
    "Tambahkan justify-content.",
    "Tambahkan align-items.",
    "Tambahkan padding.",
    "Targetkan .nav-list.",
    "Tambahkan display: flex.",
    "Tambahkan gap.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<nav class="nav">
  <a class="brand" href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Roadmap</a>
    <a href="#">Login</a>
  </div>
</nav>`,
    css: `.nav {
  border: 1px solid #3f3f46;
}

.nav-list a {
  color: #d4d4d8;
}`,
    js: "",
  },
  solutionCode: {
    html: `<nav class="nav">
  <a class="brand" href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Roadmap</a>
    <a href="#">Login</a>
  </div>
</nav>`,
    css: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #3f3f46;
}

.nav-list {
  display: flex;
  gap: 12px;
}

.nav-list a {
  color: #d4d4d8;
}`,
    js: "",
  },
  checklist: [
    ".nav memakai Flexbox.",
    ".nav-list memakai Flexbox dan gap.",
    "Brand dan menu terlihat lebih rapi dalam satu baris.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-nav-selector", label: "Ada selector .nav.", type: "cssSelectorExists", target: ".nav" },
      { id: "nav-display", label: ".nav punya property display.", type: "cssSelectorPropertyExists", target: ".nav", property: "display" },
      { id: "nav-justify-content", label: ".nav punya property justify-content.", type: "cssSelectorPropertyExists", target: ".nav", property: "justify-content" },
      { id: "nav-align-items", label: ".nav punya property align-items.", type: "cssSelectorPropertyExists", target: ".nav", property: "align-items" },
      { id: "nav-padding", label: ".nav punya property padding.", type: "cssSelectorPropertyExists", target: ".nav", property: "padding" },
      { id: "has-nav-list-selector", label: "Ada selector .nav-list.", type: "cssSelectorExists", target: ".nav-list" },
      { id: "nav-list-display", label: ".nav-list punya property display.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "display" },
      { id: "nav-list-gap", label: ".nav-list punya property gap.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "gap" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Navbar"],
};

export const practiceCssGridCardLayoutChallenge: CodingChallenge = {
  id: "practice-css-grid-card-layout",
  lessonId: "css-grid-basic",
  title: "Membuat card grid sederhana",
  description:
    "Latihan memakai CSS Grid untuk menyusun beberapa card dalam kolom.",
  instructions: [
    "Targetkan .cards.",
    "Tambahkan display: grid.",
    "Tambahkan grid-template-columns.",
    "Tambahkan gap.",
    "Targetkan .card.",
    "Tambahkan padding.",
    "Tambahkan border.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</section>`,
    css: `.cards {
  max-width: 720px;
}

.card {
  background: #18181b;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</section>`,
    css: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 720px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
  background: #18181b;
}`,
    js: "",
  },
  checklist: [
    ".cards memakai display: grid.",
    ".cards punya grid-template-columns dan gap.",
    ".card punya padding dan border.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-cards-selector", label: "Ada selector .cards.", type: "cssSelectorExists", target: ".cards" },
      { id: "cards-display", label: ".cards punya property display.", type: "cssSelectorPropertyExists", target: ".cards", property: "display" },
      { id: "cards-grid-template-columns", label: ".cards punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".cards", property: "grid-template-columns" },
      { id: "cards-gap", label: ".cards punya property gap.", type: "cssSelectorPropertyExists", target: ".cards", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Grid", "Layout"],
};

export const chooseFlexboxGridLayoutChallenge: CodingChallenge = {
  id: "choose-flexbox-grid-layout",
  lessonId: "flexbox-vs-grid-decision",
  title: "Menggabungkan Flexbox dan Grid",
  description:
    "Latihan memakai Grid untuk kumpulan card dan Flexbox untuk isi kecil di dalam card.",
  instructions: [
    "Gunakan .cards sebagai grid container.",
    "Tambahkan display: grid pada .cards.",
    "Tambahkan grid-template-columns pada .cards.",
    "Tambahkan gap pada .cards.",
    "Gunakan .card sebagai flex container untuk isi card.",
    "Tambahkan display: flex pada .card.",
    "Tambahkan gap pada .card.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="cards">
  <article class="card">
    <strong>HTML</strong>
    <span>Struktur halaman</span>
  </article>
  <article class="card">
    <strong>CSS</strong>
    <span>Tampilan halaman</span>
  </article>
</section>`,
    css: `.cards {
  max-width: 720px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="cards">
  <article class="card">
    <strong>HTML</strong>
    <span>Struktur halaman</span>
  </article>
  <article class="card">
    <strong>CSS</strong>
    <span>Tampilan halaman</span>
  </article>
</section>`,
    css: `.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 720px;
}

.card {
  display: flex;
  gap: 8px;
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  checklist: [
    ".cards memakai Grid untuk kumpulan card.",
    ".card memakai Flexbox untuk isi kecil di dalam card.",
    "Keduanya memakai gap.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-cards-selector", label: "Ada selector .cards.", type: "cssSelectorExists", target: ".cards" },
      { id: "cards-display", label: ".cards punya property display.", type: "cssSelectorPropertyExists", target: ".cards", property: "display" },
      { id: "cards-grid-template-columns", label: ".cards punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".cards", property: "grid-template-columns" },
      { id: "cards-gap", label: ".cards punya property gap.", type: "cssSelectorPropertyExists", target: ".cards", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-display", label: ".card punya property display.", type: "cssSelectorPropertyExists", target: ".card", property: "display" },
      { id: "card-gap", label: ".card punya property gap.", type: "cssSelectorPropertyExists", target: ".card", property: "gap" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Grid", "Layout Decision"],
};

export const buildResponsiveIshCardSectionChallenge: CodingChallenge = {
  id: "build-responsive-ish-card-section",
  lessonId: "flexbox-grid-layout-assessment",
  title: "Membuat section navbar dan card grid",
  description:
    "Assessment practice untuk membuat navbar dengan Flexbox dan card section dengan Grid.",
  instructions: [
    "Buat navbar sederhana dengan .nav dan .nav-list.",
    "Gunakan Flexbox untuk navbar.",
    "Buat section .cards.",
    "Gunakan Grid untuk card section.",
    "Tambahkan gap pada navbar/menu dan grid.",
    "Tambahkan padding pada .card.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<nav class="nav">
  <a href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Lessons</a>
  </div>
</nav>

<section class="cards">
  <article class="card">Flexbox</article>
  <article class="card">Grid</article>
  <article class="card">Layout</article>
</section>`,
    css: `.nav {
  border: 1px solid #3f3f46;
}

.nav-list a {
  color: #d4d4d8;
}

.cards {
  margin-top: 20px;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<nav class="nav">
  <a href="#">FluentStack</a>
  <div class="nav-list">
    <a href="#">Home</a>
    <a href="#">Lessons</a>
  </div>
</nav>

<section class="cards">
  <article class="card">Flexbox</article>
  <article class="card">Grid</article>
  <article class="card">Layout</article>
</section>`,
    css: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #3f3f46;
}

.nav-list {
  display: flex;
  gap: 12px;
}

.nav-list a {
  color: #d4d4d8;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  checklist: [
    "Navbar memakai Flexbox.",
    "Menu navbar memakai gap.",
    "Card section memakai Grid.",
    "Card punya padding.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-nav-selector", label: "Ada selector .nav.", type: "cssSelectorExists", target: ".nav" },
      { id: "nav-display", label: ".nav punya property display.", type: "cssSelectorPropertyExists", target: ".nav", property: "display" },
      { id: "nav-justify-content", label: ".nav punya property justify-content.", type: "cssSelectorPropertyExists", target: ".nav", property: "justify-content" },
      { id: "has-nav-list-selector", label: "Ada selector .nav-list.", type: "cssSelectorExists", target: ".nav-list" },
      { id: "nav-list-display", label: ".nav-list punya property display.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "display" },
      { id: "nav-list-gap", label: ".nav-list punya property gap.", type: "cssSelectorPropertyExists", target: ".nav-list", property: "gap" },
      { id: "has-cards-selector", label: "Ada selector .cards.", type: "cssSelectorExists", target: ".cards" },
      { id: "cards-display", label: ".cards punya property display.", type: "cssSelectorPropertyExists", target: ".cards", property: "display" },
      { id: "cards-grid-template-columns", label: ".cards punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".cards", property: "grid-template-columns" },
      { id: "cards-gap", label: ".cards punya property gap.", type: "cssSelectorPropertyExists", target: ".cards", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Flexbox", "Grid", "Assessment"],
};

export const practiceMobileFirstSectionChallenge: CodingChallenge = {
  id: "practice-mobile-first-section",
  lessonId: "mobile-first-css",
  title: "Membuat section mobile-first",
  description:
    "Latihan menulis style dasar yang aman untuk layar kecil sebelum menambahkan peningkatan responsive.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .section dan tambahkan padding.",
    "Targetkan .title dan tambahkan font-size.",
    "Targetkan .description dan tambahkan line-height.",
    "Jika sudah nyaman, tambahkan media query min-width sebagai peningkatan untuk layar lebih besar.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="section">
  <h1 class="title">Belajar Responsive CSS</h1>
  <p class="description">Mulai dari layar kecil, lalu tingkatkan untuk layar lebih besar.</p>
</section>`,
    css: `.section {
  background: #18181b;
}

.title {
  color: #fafafa;
}

.description {
  color: #d4d4d8;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="section">
  <h1 class="title">Belajar Responsive CSS</h1>
  <p class="description">Mulai dari layar kecil, lalu tingkatkan untuk layar lebih besar.</p>
</section>`,
    css: `.section {
  background: #18181b;
  padding: 16px;
}

.title {
  color: #fafafa;
  font-size: 28px;
}

.description {
  color: #d4d4d8;
  line-height: 1.7;
}

@media (min-width: 768px) {
  .section {
    padding: 32px;
  }

  .title {
    font-size: 40px;
  }
}`,
    js: "",
  },
  checklist: [
    ".section punya padding dasar untuk layar kecil.",
    ".title punya font-size yang jelas.",
    ".description punya line-height yang nyaman.",
    "Media query dipakai sebagai peningkatan, bukan syarat style dasar.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-section-selector", label: "Ada selector .section.", type: "cssSelectorExists", target: ".section" },
      { id: "section-padding", label: ".section punya property padding.", type: "cssSelectorPropertyExists", target: ".section", property: "padding" },
      { id: "has-title-selector", label: "Ada selector .title.", type: "cssSelectorExists", target: ".title" },
      { id: "title-font-size", label: ".title punya property font-size.", type: "cssSelectorPropertyExists", target: ".title", property: "font-size" },
      { id: "has-description-selector", label: "Ada selector .description.", type: "cssSelectorExists", target: ".description" },
      { id: "description-line-height", label: ".description punya property line-height.", type: "cssSelectorPropertyExists", target: ".description", property: "line-height" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Responsive Design", "Mobile First"],
};

export const practiceCssBreakpointCardGridChallenge: CodingChallenge = {
  id: "practice-css-breakpoint-card-grid",
  lessonId: "css-breakpoints-basic",
  title: "Membuat card grid dengan breakpoint",
  description:
    "Latihan memakai Grid dan breakpoint sederhana agar card section bisa meningkat saat layar lebih lebar.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .card-grid.",
    "Tambahkan display: grid.",
    "Tambahkan gap.",
    "Tambahkan grid-template-columns.",
    "Targetkan .card dan tambahkan padding.",
    "Jika sudah nyaman, tambahkan media query untuk mengubah jumlah kolom di layar lebih besar.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="card-grid">
  <article class="card">Mobile-first</article>
  <article class="card">Breakpoint</article>
  <article class="card">Responsive layout</article>
</section>`,
    css: `.card-grid {
  max-width: 960px;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="card-grid">
  <article class="card">Mobile-first</article>
  <article class="card">Breakpoint</article>
  <article class="card">Responsive layout</article>
</section>`,
    css: `.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 960px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    js: "",
  },
  checklist: [
    ".card-grid memakai Grid.",
    ".card-grid punya gap dan kolom dasar.",
    ".card punya padding.",
    "Media query mengubah kolom saat layar lebih lebar.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-grid-selector", label: "Ada selector .card-grid.", type: "cssSelectorExists", target: ".card-grid" },
      { id: "card-grid-display", label: ".card-grid punya property display.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "display" },
      { id: "card-grid-gap", label: ".card-grid punya property gap.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "gap" },
      { id: "card-grid-columns", label: ".card-grid punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "grid-template-columns" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Responsive Design", "Breakpoints", "Grid"],
};

export const practiceFluidSpacingTypographyChallenge: CodingChallenge = {
  id: "practice-fluid-spacing-typography",
  lessonId: "fluid-spacing-typography-basic",
  title: "Mengatur spacing dan typography responsive",
  description:
    "Latihan membuat container, title, dan description tetap nyaman dibaca di berbagai ukuran layar.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .container.",
    "Tambahkan max-width dan padding.",
    "Targetkan .title.",
    "Tambahkan font-size dan line-height.",
    "Targetkan .description dan tambahkan line-height.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<main class="container">
  <h1 class="title">Fluid Spacing dan Typography</h1>
  <p class="description">Teks yang responsive tetap perlu batas lebar, jarak, dan line-height yang nyaman.</p>
</main>`,
    css: `.container {
  margin: 0 auto;
}

.title {
  color: #fafafa;
}

.description {
  color: #d4d4d8;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="container">
  <h1 class="title">Fluid Spacing dan Typography</h1>
  <p class="description">Teks yang responsive tetap perlu batas lebar, jarak, dan line-height yang nyaman.</p>
</main>`,
    css: `.container {
  max-width: 720px;
  margin: 0 auto;
  padding: clamp(16px, 4vw, 40px);
}

.title {
  color: #fafafa;
  font-size: clamp(32px, 6vw, 56px);
  line-height: 1.1;
}

.description {
  color: #d4d4d8;
  line-height: 1.7;
}`,
    js: "",
  },
  checklist: [
    ".container membatasi lebar dengan max-width.",
    ".container punya padding.",
    ".title punya font-size dan line-height.",
    ".description punya line-height.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-container-selector", label: "Ada selector .container.", type: "cssSelectorExists", target: ".container" },
      { id: "container-max-width", label: ".container punya property max-width.", type: "cssSelectorPropertyExists", target: ".container", property: "max-width" },
      { id: "container-padding", label: ".container punya property padding.", type: "cssSelectorPropertyExists", target: ".container", property: "padding" },
      { id: "has-title-selector", label: "Ada selector .title.", type: "cssSelectorExists", target: ".title" },
      { id: "title-font-size", label: ".title punya property font-size.", type: "cssSelectorPropertyExists", target: ".title", property: "font-size" },
      { id: "title-line-height", label: ".title punya property line-height.", type: "cssSelectorPropertyExists", target: ".title", property: "line-height" },
      { id: "has-description-selector", label: "Ada selector .description.", type: "cssSelectorExists", target: ".description" },
      { id: "description-line-height", label: ".description punya property line-height.", type: "cssSelectorPropertyExists", target: ".description", property: "line-height" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Spacing", "Typography", "Responsive Design"],
};

export const practiceCssVariablesThemeCardChallenge: CodingChallenge = {
  id: "practice-css-variables-theme-card",
  lessonId: "css-variables-dark-mode-basic",
  title: "Membuat theme card dengan CSS variables",
  description:
    "Latihan memakai CSS variables untuk warna halaman dan card sederhana.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .page.",
    "Tambahkan CSS variables untuk warna seperti --color-bg dan --color-text.",
    "Gunakan background dan color pada .page.",
    "Targetkan .card.",
    "Tambahkan background dan padding pada .card.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<main class="page">
  <article class="card">
    <h1>CSS Variables</h1>
    <p>Nilai visual yang reusable membantu UI tetap konsisten.</p>
  </article>
</main>`,
    css: `.page {
  padding: 24px;
}

.card {
  border-radius: 12px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="page">
  <article class="card">
    <h1>CSS Variables</h1>
    <p>Nilai visual yang reusable membantu UI tetap konsisten.</p>
  </article>
</main>`,
    css: `.page {
  --color-bg: #18181b;
  --color-text: #fafafa;
  --color-card: #27272a;

  background: var(--color-bg);
  color: var(--color-text);
  padding: 24px;
}

.card {
  background: var(--color-card);
  padding: 16px;
  border-radius: 12px;
}`,
    js: "",
  },
  checklist: [
    ".page menyimpan CSS variables untuk warna.",
    ".page memakai background dan color dari nilai visual.",
    ".card memakai background dan padding.",
    "Nilai warna tidak perlu diulang acak di banyak tempat.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-page-selector", label: "Ada selector .page.", type: "cssSelectorExists", target: ".page" },
      { id: "page-color-bg-variable", label: ".page punya variable --color-bg.", type: "cssSelectorPropertyExists", target: ".page", property: "--color-bg" },
      { id: "page-color-text-variable", label: ".page punya variable --color-text.", type: "cssSelectorPropertyExists", target: ".page", property: "--color-text" },
      { id: "page-background", label: ".page punya property background.", type: "cssSelectorPropertyExists", target: ".page", property: "background" },
      { id: "page-color", label: ".page punya property color.", type: "cssSelectorPropertyExists", target: ".page", property: "color" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-background", label: ".card punya property background.", type: "cssSelectorPropertyExists", target: ".card", property: "background" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "CSS Variables", "Visual System", "Dark Mode"],
};

export const buildResponsiveVisualSectionChallenge: CodingChallenge = {
  id: "build-responsive-visual-section",
  lessonId: "responsive-visual-system-assessment",
  title: "Membangun responsive visual section",
  description:
    "Assessment practice untuk menggabungkan mobile-first CSS, readability, card grid, dan nilai visual yang konsisten.",
  instructions: [
    "Style .page dengan background dan color.",
    "Style .container dengan max-width dan padding.",
    "Style .title dengan font-size dan line-height.",
    "Gunakan .card-grid sebagai grid container dengan display dan gap.",
    "Style .card dengan padding dan border-radius.",
    "Jika sudah nyaman, tambahkan media query dan CSS variables sebagai peningkatan.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<main class="page">
  <section class="container">
    <h1 class="title">Responsive Visual System</h1>
    <div class="card-grid">
      <article class="card">Mobile-first</article>
      <article class="card">Readable typography</article>
      <article class="card">Reusable visual values</article>
    </div>
  </section>
</main>`,
    css: `.page {
  min-height: 100vh;
}

.container {
  margin: 0 auto;
}

.title {
  color: #fafafa;
}

.card-grid {
  margin-top: 20px;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="page">
  <section class="container">
    <h1 class="title">Responsive Visual System</h1>
    <div class="card-grid">
      <article class="card">Mobile-first</article>
      <article class="card">Readable typography</article>
      <article class="card">Reusable visual values</article>
    </div>
  </section>
</main>`,
    css: `.page {
  --color-bg: #18181b;
  --color-text: #fafafa;
  --color-card: #27272a;

  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: clamp(16px, 4vw, 40px);
}

.title {
  color: #fafafa;
  font-size: clamp(32px, 6vw, 56px);
  line-height: 1.1;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 20px;
}

.card {
  background: var(--color-card);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #3f3f46;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    js: "",
  },
  checklist: [
    ".page punya warna background dan text yang readable.",
    ".container membatasi lebar dan punya padding.",
    ".title punya font-size dan line-height.",
    ".card-grid memakai Grid dan gap.",
    ".card punya padding dan border-radius.",
    "Media query dan CSS variables dipakai sebagai peningkatan jika sudah siap.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-page-selector", label: "Ada selector .page.", type: "cssSelectorExists", target: ".page" },
      { id: "page-background", label: ".page punya property background.", type: "cssSelectorPropertyExists", target: ".page", property: "background" },
      { id: "page-color", label: ".page punya property color.", type: "cssSelectorPropertyExists", target: ".page", property: "color" },
      { id: "has-container-selector", label: "Ada selector .container.", type: "cssSelectorExists", target: ".container" },
      { id: "container-max-width", label: ".container punya property max-width.", type: "cssSelectorPropertyExists", target: ".container", property: "max-width" },
      { id: "container-padding", label: ".container punya property padding.", type: "cssSelectorPropertyExists", target: ".container", property: "padding" },
      { id: "has-title-selector", label: "Ada selector .title.", type: "cssSelectorExists", target: ".title" },
      { id: "title-font-size", label: ".title punya property font-size.", type: "cssSelectorPropertyExists", target: ".title", property: "font-size" },
      { id: "title-line-height", label: ".title punya property line-height.", type: "cssSelectorPropertyExists", target: ".title", property: "line-height" },
      { id: "has-card-grid-selector", label: "Ada selector .card-grid.", type: "cssSelectorExists", target: ".card-grid" },
      { id: "card-grid-display", label: ".card-grid punya property display.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "display" },
      { id: "card-grid-gap", label: ".card-grid punya property gap.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Responsive Design", "Visual System", "Assessment"],
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
  buildBasicAccessibleFormChallenge,
  buildContactFormFieldsChallenge,
  writeUsefulAltTextChallenge,
  buildAccessibleContactFormChallenge,
  styleBasicHtmlTextChallenge,
  practiceCssSelectorsDeclarationsChallenge,
  debugBasicCssCascadeChallenge,
  practiceCssBoxModelCardChallenge,
  practiceCssPaddingMarginCardChallenge,
  practiceCssBorderWidthCardChallenge,
  fixBoxModelSpacingCardChallenge,
  buildStyledInfoCardChallenge,
  practiceCssFlexboxBasicChallenge,
  buildFlexboxNavbarChallenge,
  practiceCssGridCardLayoutChallenge,
  chooseFlexboxGridLayoutChallenge,
  buildResponsiveIshCardSectionChallenge,
  practiceMobileFirstSectionChallenge,
  practiceCssBreakpointCardGridChallenge,
  practiceFluidSpacingTypographyChallenge,
  practiceCssVariablesThemeCardChallenge,
  buildResponsiveVisualSectionChallenge,
];
