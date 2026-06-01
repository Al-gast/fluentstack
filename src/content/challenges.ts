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
  buildFlexboxNavbarChallenge,
];
