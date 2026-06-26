import type { Lesson, Module } from "@/types/learning";

export const localVanillaJavascriptAppModule: Module = {
  id: "local-vanilla-javascript-app",
  trackId: "frontend-engineering",
  title: "Local Vanilla JavaScript App",
  slug: "local-vanilla-javascript-app",
  description:
    "Bangun mini app JavaScript di perangkat sendiri dengan HTML, CSS, script.js, DOM event, localStorage, DevTools, Git, dan GitHub.",
  order: 13,
  lessonIds: [
    "setup-local-vanilla-js-project",
    "connect-local-html-css-js-files",
    "build-first-local-js-interaction",
    "save-local-data-with-localstorage",
    "read-docs-while-debugging-local-js",
    "local-vanilla-javascript-app-assessment",
  ],
  estimatedHours: 7,
  skillTags: ["JavaScript", "DOM", "localStorage", "DevTools", "GitHub"],
};

export const setupLocalVanillaJsProjectLesson: Lesson = {
  id: "setup-local-vanilla-js-project",
  trackId: "frontend-engineering",
  moduleId: "local-vanilla-javascript-app",
  title: "Menyiapkan Project Vanilla JS Lokal",
  slug: "setup-local-vanilla-js-project",
  description:
    "Siapkan folder project lokal untuk mini app JavaScript tanpa framework, npm, atau bundler.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami tujuan local Vanilla JavaScript project",
    "Membuat folder project dengan file HTML, CSS, dan JavaScript",
    "Menyiapkan workflow edit-save-refresh",
    "Membedakan kebutuhan local project dari built-in practice",
  ],
  skillTags: ["Local Workflow", "JavaScript", "Project Setup"],
  blocks: [
    {
      id: "setup-local-vanilla-js-project-intro",
      type: "text",
      title: "Saatnya membawa JavaScript ke folder lokal",
      content:
        "Di module sebelumnya, kamu sudah melatih JavaScript di practice workspace FluentStack: memilih elemen DOM, membaca input, menangani event, menyimpan data kecil, dan mengambil data dengan fetch.\n\nSekarang fokusnya berubah. Kamu akan membuat mini app JavaScript di perangkat sendiri. Tujuannya bukan memakai framework, npm, atau tool modern yang berat. Tujuannya adalah memahami workflow dasar engineer frontend: membuat folder project, menghubungkan file, membuka halaman di browser, debug dengan DevTools, menyimpan progres dengan Git, lalu menulis catatan project yang jelas.\n\nFluentStack tetap menjadi panduan. Tetapi file, browser, terminal, dan repository berada di perangkat kamu sendiri.",
    },
    {
      id: "setup-local-vanilla-js-project-structure",
      type: "code-example",
      title: "Struktur folder awal",
      language: "bash",
      code: `vanilla-js-notes/
  index.html
  style.css
  script.js
  README.md`,
      explanation:
        "index.html berisi struktur halaman, style.css mengatur tampilan, script.js berisi behavior JavaScript, dan README.md menjelaskan project secara singkat.",
    },
    {
      id: "setup-local-vanilla-js-project-resources",
      type: "resource-links",
      title: "Tool yang dipakai",
      description:
        "Gunakan tool resmi ini jika ada yang belum tersedia di perangkat kamu.",
      links: [
        {
          source: "Visual Studio Code",
          title: "Download Visual Studio Code",
          description:
            "Code editor yang direkomendasikan untuk mengikuti local project beginner.",
          url: "https://code.visualstudio.com/download",
          label: "Download VS Code",
          kind: "recommended",
        },
        {
          source: "Git",
          title: "Git Downloads",
          description:
            "Install Git agar command git tersedia saat kamu menyimpan riwayat project.",
          url: "https://git-scm.com/downloads",
          label: "Install Git",
          kind: "recommended",
        },
        {
          source: "GitHub Docs",
          title: "Hello World",
          description:
            "Panduan awal repository, commit, branch, dan alur GitHub dasar.",
          url: "https://docs.github.com/en/get-started/start-your-journey/hello-world",
          label: "Buka GitHub Docs",
          kind: "optional",
        },
      ],
    },
    {
      id: "setup-local-vanilla-js-project-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di perangkat kamu:\n\n- Buat folder project, misalnya vanilla-js-notes.\n- Buat file index.html, style.css, script.js, dan README.md.\n- Buka folder project sebagai workspace di code editor.\n- Pastikan kamu tahu lokasi folder itu di perangkatmu.\n- Jangan install framework, npm package, bundler, atau template dulu.\n- Simpan project di lokasi yang mudah ditemukan, bukan di folder download sementara.\n\nChecklist ini tidak diperiksa otomatis oleh FluentStack. Tandai selesai setelah folder dan semua file benar-benar dibuat.",
    },
    {
      id: "setup-local-vanilla-js-project-warning",
      type: "callout",
      variant: "important",
      title: "Local milestone bukan sekadar membaca instruksi",
      content:
        "Progress di module ini bergantung pada tindakan nyata di perangkat kamu. Jika kamu belum membuat folder dan file lokalnya, jangan tandai checklist sebagai selesai.",
    },
    {
      id: "setup-local-vanilla-js-project-summary",
      type: "summary",
      points: [
        "Local Vanilla JavaScript App adalah latihan workflow di perangkat sendiri.",
        "Project dimulai dari index.html, style.css, script.js, dan README.md.",
        "Kamu belum perlu framework, npm, bundler, atau deployment.",
        "Berikutnya kamu akan menghubungkan HTML, CSS, dan JavaScript agar halaman lokal bisa berjalan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "setup-local-vanilla-js-project-intro",
      "setup-local-vanilla-js-project-structure",
      "setup-local-vanilla-js-project-local-task",
      "setup-local-vanilla-js-project-summary",
    ],
  },
};

export const connectLocalHtmlCssJsFilesLesson: Lesson = {
  id: "connect-local-html-css-js-files",
  trackId: "frontend-engineering",
  moduleId: "local-vanilla-javascript-app",
  title: "Menghubungkan index.html, style.css, dan script.js",
  slug: "connect-local-html-css-js-files",
  description:
    "Hubungkan tiga file utama local app dan pastikan browser membaca CSS serta JavaScript.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Menghubungkan CSS ke HTML dengan link stylesheet",
    "Menghubungkan JavaScript ke HTML dengan script defer",
    "Membuka halaman lokal di browser",
    "Mengecek apakah file terbaca dengan perubahan kecil",
  ],
  skillTags: ["HTML", "CSS", "JavaScript", "Local Workflow"],
  blocks: [
    {
      id: "connect-local-html-css-js-files-intro",
      type: "text",
      title: "Tiga file harus saling mengenal",
      content:
        "Local app sederhana biasanya punya tiga bagian utama. HTML menentukan elemen yang ada di halaman. CSS menentukan tampilannya. JavaScript membaca elemen dari HTML, lalu menambahkan behavior saat user berinteraksi.\n\nMasalah umum beginner bukan logika JavaScript yang rumit, tetapi file yang belum tersambung. CSS tidak berubah karena path href salah. JavaScript tidak berjalan karena script belum dipasang atau dipasang sebelum elemen HTML siap dibaca.\n\nDi lesson ini, kamu akan memastikan browser membaca style.css dan script.js dari index.html.",
    },
    {
      id: "connect-local-html-css-js-files-html-example",
      type: "code-example",
      title: "index.html yang menghubungkan CSS dan JS",
      language: "html",
      code: `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vanilla JS Notes</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <main class="app">
      <h1>Vanilla JS Notes</h1>
      <p id="status">JavaScript belum dicek.</p>
      <button id="checkButton">Cek JavaScript</button>
    </main>
  </body>
</html>`,
      explanation:
        "link menghubungkan style.css. script dengan defer membuat script.js dijalankan setelah HTML siap dibaca, sehingga querySelector lebih aman untuk elemen yang ada di body.",
    },
    {
      id: "connect-local-html-css-js-files-js-example",
      type: "code-example",
      title: "script.js untuk mengecek koneksi",
      language: "js",
      code: `const statusText = document.querySelector("#status");
const checkButton = document.querySelector("#checkButton");

checkButton.addEventListener("click", function () {
  statusText.textContent = "JavaScript sudah terhubung.";
});`,
      explanation:
        "Jika tombol bisa mengubah teks, berarti index.html berhasil membaca script.js dan elemen yang dipilih memang ada.",
    },
    {
      id: "connect-local-html-css-js-files-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di project lokal kamu:\n\n- Isi index.html dengan struktur dasar yang punya h1, p status, dan button.\n- Hubungkan style.css lewat link rel stylesheet.\n- Hubungkan script.js lewat script src dengan defer.\n- Tambahkan style kecil di style.css, misalnya warna background atau font-size h1.\n- Tambahkan JavaScript kecil yang mengubah teks saat tombol diklik.\n- Buka index.html di browser dan klik tombolnya.\n- Jika tidak berubah, cek nama file, path, id elemen, dan Console di DevTools.\n\nTandai selesai setelah CSS terlihat dan JavaScript tombol bekerja di browser lokal.",
    },
    {
      id: "connect-local-html-css-js-files-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Nama file harus persis",
      content:
        "script.js, Script.js, dan scripts.js adalah nama yang berbeda. Jika src di HTML tidak sama persis dengan nama file, browser tidak akan membaca file JavaScript kamu.",
    },
    {
      id: "connect-local-html-css-js-files-summary",
      type: "summary",
      points: [
        "index.html menjadi tempat CSS dan JavaScript dihubungkan.",
        "style.css dihubungkan dengan link rel stylesheet.",
        "script.js dihubungkan dengan script src dan defer.",
        "Perubahan CSS dan klik tombol adalah cara cepat mengecek apakah file terbaca.",
        "Berikutnya kamu akan membuat interaksi kecil yang lebih mirip fitur app.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "connect-local-html-css-js-files-intro",
      "connect-local-html-css-js-files-html-example",
      "connect-local-html-css-js-files-js-example",
      "connect-local-html-css-js-files-local-task",
      "connect-local-html-css-js-files-summary",
    ],
  },
};

export const buildFirstLocalJsInteractionLesson: Lesson = {
  id: "build-first-local-js-interaction",
  trackId: "frontend-engineering",
  moduleId: "local-vanilla-javascript-app",
  title: "Membuat Interaksi Pertama",
  slug: "build-first-local-js-interaction",
  description:
    "Bangun interaksi DOM sederhana di project lokal: membaca input dan menampilkan hasil di halaman.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 55,
  objectives: [
    "Memilih elemen input, button, dan output dari DOM",
    "Membaca value dari input",
    "Menangani click event",
    "Menampilkan feedback ke halaman",
  ],
  skillTags: ["DOM", "Events", "JavaScript", "Local Workflow"],
  blocks: [
    {
      id: "build-first-local-js-interaction-intro",
      type: "text",
      title: "Interaksi kecil sudah cukup untuk fitur pertama",
      content:
        "Fitur pertama tidak perlu besar. Yang penting, alurnya jelas: user mengetik sesuatu, user menekan tombol, JavaScript membaca input, lalu halaman berubah.\n\nAlur ini adalah fondasi banyak fitur frontend: form komentar, pencarian, filter, daftar tugas, kalkulator sederhana, dan dashboard kecil. Saat kamu bisa membuat satu interaksi rapi di local project, kamu mulai memahami hubungan nyata antara HTML, DOM, event, dan state kecil di browser.",
    },
    {
      id: "build-first-local-js-interaction-html-example",
      type: "code-example",
      title: "HTML untuk input dan output",
      language: "html",
      code: `<label for="noteInput">Catatan hari ini</label>
<input id="noteInput" type="text" placeholder="Tulis catatan singkat" />
<button id="saveButton">Tampilkan catatan</button>
<p id="noteOutput">Belum ada catatan.</p>`,
      explanation:
        "Input menjadi sumber data dari user. Button menjadi pemicu event. Paragraph menjadi tempat JavaScript menampilkan hasil.",
    },
    {
      id: "build-first-local-js-interaction-js-example",
      type: "code-example",
      title: "script.js untuk membaca input",
      language: "js",
      code: `const noteInput = document.querySelector("#noteInput");
const saveButton = document.querySelector("#saveButton");
const noteOutput = document.querySelector("#noteOutput");

saveButton.addEventListener("click", function () {
  const note = noteInput.value.trim();

  if (note === "") {
    noteOutput.textContent = "Tulis catatan dulu.";
    return;
  }

  noteOutput.textContent = "Catatan: " + note;
});`,
      explanation:
        "Kode ini membaca value dari input, menolak input kosong, lalu mengubah teks output. Ini belum menyimpan data permanen; datanya hilang saat halaman di-refresh.",
    },
    {
      id: "build-first-local-js-interaction-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di project lokal kamu:\n\n- Tambahkan label, input, button, dan area output di index.html.\n- Pilih semua elemen itu di script.js dengan querySelector.\n- Tambahkan click event pada button.\n- Saat input kosong, tampilkan pesan yang membantu.\n- Saat input berisi teks, tampilkan teks itu di halaman.\n- Refresh browser dan pastikan behavior tetap berjalan setelah file disimpan ulang.\n\nTandai selesai setelah interaksi berjalan di browser lokal, bukan hanya setelah kode ditulis.",
    },
    {
      id: "build-first-local-js-interaction-tip",
      type: "callout",
      variant: "tip",
      title: "Debug dari hal paling terlihat",
      content:
        "Jika interaksi tidak berjalan, mulai dari Console. Jika ada error null, kemungkinan selector tidak menemukan elemen. Jika tidak ada error tapi output tidak berubah, cek event listener, id elemen, dan apakah file script.js benar-benar terbaca.",
    },
    {
      id: "build-first-local-js-interaction-summary",
      type: "summary",
      points: [
        "Interaksi dasar terdiri dari input, event, logic, dan output.",
        "querySelector memilih elemen dari halaman.",
        "addEventListener menghubungkan aksi user dengan fungsi JavaScript.",
        "textContent bisa dipakai untuk menampilkan hasil sederhana.",
        "Berikutnya kamu akan menyimpan data agar tidak hilang saat halaman di-refresh.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "build-first-local-js-interaction-intro",
      "build-first-local-js-interaction-html-example",
      "build-first-local-js-interaction-js-example",
      "build-first-local-js-interaction-local-task",
      "build-first-local-js-interaction-summary",
    ],
  },
};

export const saveLocalDataWithLocalstorageLesson: Lesson = {
  id: "save-local-data-with-localstorage",
  trackId: "frontend-engineering",
  moduleId: "local-vanilla-javascript-app",
  title: "Menyimpan Data Lokal",
  slug: "save-local-data-with-localstorage",
  description:
    "Gunakan localStorage untuk menyimpan catatan kecil dari mini app lokal.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 55,
  objectives: [
    "Memahami kapan localStorage cocok dipakai",
    "Menyimpan data string dengan localStorage.setItem",
    "Membaca data tersimpan dengan localStorage.getItem",
    "Menampilkan data tersimpan saat halaman dibuka ulang",
  ],
  skillTags: ["localStorage", "DOM", "JavaScript", "Browser Storage"],
  blocks: [
    {
      id: "save-local-data-with-localstorage-intro",
      type: "text",
      title: "Data kecil bisa disimpan di browser",
      content:
        "Saat halaman di-refresh, nilai variabel JavaScript hilang. Untuk latihan app kecil, localStorage bisa dipakai agar data sederhana tetap tersedia di browser yang sama.\n\nlocalStorage cocok untuk preferensi kecil, draft latihan, atau catatan sederhana. localStorage tidak cocok untuk password, token sensitif, data rahasia, atau data yang harus sinkron ke banyak perangkat.\n\nDi lesson ini, kamu akan menyimpan catatan dari input ke localStorage, lalu menampilkan kembali catatan itu saat halaman dibuka ulang.",
    },
    {
      id: "save-local-data-with-localstorage-js-example",
      type: "code-example",
      title: "Menyimpan dan membaca catatan",
      language: "js",
      code: `const noteInput = document.querySelector("#noteInput");
const saveButton = document.querySelector("#saveButton");
const noteOutput = document.querySelector("#noteOutput");

const savedNote = localStorage.getItem("dailyNote");

if (savedNote) {
  noteInput.value = savedNote;
  noteOutput.textContent = "Catatan tersimpan: " + savedNote;
}

saveButton.addEventListener("click", function () {
  const note = noteInput.value.trim();

  if (note === "") {
    noteOutput.textContent = "Tulis catatan dulu.";
    return;
  }

  localStorage.setItem("dailyNote", note);
  noteOutput.textContent = "Catatan tersimpan: " + note;
});`,
      explanation:
        "getItem membaca data yang pernah disimpan. setItem menyimpan data baru. Karena localStorage menyimpan string, contoh ini sengaja memakai teks sederhana dulu.",
    },
    {
      id: "save-local-data-with-localstorage-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di project lokal kamu:\n\n- Tambahkan localStorage.getItem saat halaman dibuka.\n- Jika ada data tersimpan, tampilkan kembali ke input dan output.\n- Saat tombol diklik, simpan input dengan localStorage.setItem.\n- Refresh browser dan pastikan catatan masih muncul.\n- Ubah catatan, simpan lagi, lalu refresh sekali lagi.\n- Buka DevTools Application atau Storage jika browser kamu menyediakan panel itu, lalu cek key yang tersimpan.\n\nTandai selesai setelah data benar-benar bertahan setelah browser di-refresh.",
    },
    {
      id: "save-local-data-with-localstorage-warning",
      type: "callout",
      variant: "warning",
      title: "Jangan simpan data sensitif",
      content:
        "localStorage bisa dibaca oleh JavaScript di halaman yang sama. Untuk beginner project, pakai localStorage hanya untuk data latihan yang tidak sensitif.",
    },
    {
      id: "save-local-data-with-localstorage-summary",
      type: "summary",
      points: [
        "Variabel JavaScript hilang saat halaman di-refresh.",
        "localStorage menyimpan data kecil di browser yang sama.",
        "setItem menyimpan data, getItem membaca data.",
        "localStorage bukan tempat untuk data sensitif.",
        "Berikutnya kamu akan memakai dokumentasi resmi saat debug, bukan hanya menebak-nebak error.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "save-local-data-with-localstorage-intro",
      "save-local-data-with-localstorage-js-example",
      "save-local-data-with-localstorage-local-task",
      "save-local-data-with-localstorage-summary",
    ],
  },
};

export const readDocsWhileDebuggingLocalJsLesson: Lesson = {
  id: "read-docs-while-debugging-local-js",
  trackId: "frontend-engineering",
  moduleId: "local-vanilla-javascript-app",
  title: "Membaca Dokumentasi saat Debugging",
  slug: "read-docs-while-debugging-local-js",
  description:
    "Gunakan MDN dan DevTools secara terarah saat mini app lokal tidak berjalan sesuai harapan.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 50,
  objectives: [
    "Membaca pesan error sebelum mengubah kode",
    "Menghubungkan error umum dengan area yang perlu dicek",
    "Membaca dokumentasi MDN secara selektif",
    "Menulis catatan debugging singkat",
  ],
  skillTags: ["Debugging", "Documentation", "MDN", "DevTools"],
  blocks: [
    {
      id: "read-docs-while-debugging-local-js-intro",
      type: "text",
      title: "Debugging bukan menebak secara acak",
      content:
        "Saat mini app lokal tidak berjalan, kebiasaan paling mahal adalah mengubah banyak baris sekaligus tanpa membaca tanda yang diberikan browser.\n\nEngineer biasanya mulai dari pertanyaan kecil: apakah file terbaca, apakah selector menemukan elemen, apakah event terpasang, apakah value yang dibaca sesuai, apakah data tersimpan, dan apakah ada error di Console.\n\nDokumentasi resmi membantu kamu mengecek arti API yang dipakai. Untuk tahap ini, kamu belum perlu membaca semua dokumentasi JavaScript. Kamu hanya perlu membuka halaman yang relevan dengan masalah yang sedang kamu debug.",
    },
    {
      id: "read-docs-while-debugging-local-js-case-study",
      type: "callout",
      variant: "common-mistake",
      title: "Contoh kasus: Cannot read properties of null",
      content:
        "Error ini sering berarti querySelector tidak menemukan elemen. Penyebabnya bisa id di HTML tidak sama dengan selector, script berjalan sebelum HTML siap, atau file HTML yang dibuka bukan file yang sedang kamu edit.",
    },
    {
      id: "read-docs-while-debugging-local-js-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi secara terarah",
      description:
        "Buka dokumentasi hanya untuk API yang sedang kamu pakai. Fokus pada definisi, contoh dasar, dan catatan error yang relevan.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Document: querySelector() method",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",
          focus: [
            "selector yang cocok dengan CSS selector",
            "return value saat elemen ditemukan atau tidak ditemukan",
            "contoh memilih elemen sederhana",
          ],
          ignoreForNow: [
            "selector kompleks",
            "CSS.escape",
            "spesifikasi DOM detail",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "EventTarget: addEventListener() method",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
          focus: [
            "cara memasang listener",
            "nama event seperti click dan submit",
            "fungsi callback sebagai respons event",
          ],
          ignoreForNow: [
            "options advanced",
            "event propagation detail",
            "AbortSignal",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Window: localStorage property",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          focus: [
            "setItem dan getItem",
            "data tersimpan sebagai string",
            "batasan storage di browser",
          ],
          ignoreForNow: [
            "storage event antar tab",
            "quota detail",
            "private browsing edge case",
          ],
        },
        {
          source: "Chrome DevTools Docs",
          title: "Debug JavaScript",
          url: "https://developer.chrome.com/docs/devtools/javascript/",
          focus: [
            "membaca Console",
            "memahami lokasi error",
            "menggunakan breakpoint dasar saat perlu",
          ],
          ignoreForNow: [
            "source maps",
            "blackboxing",
            "performance profiling",
          ],
        },
      ],
      followUpAction:
        "Buka satu error atau behavior yang belum sesuai di project lokalmu, lalu tulis API apa yang kamu cek di dokumentasi dan perubahan apa yang kamu buat.",
    },
    {
      id: "read-docs-while-debugging-local-js-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan debugging singkat untuk mini app lokal kamu. Jelaskan gejala, dugaan penyebab, dokumentasi yang kamu buka, dan perubahan yang kamu lakukan.",
      placeholder:
        "Gejalanya: tombol tidak mengubah teks. Saya melihat Console dan menemukan...",
      minimumCharacters: 220,
      checklist: [
        "Menyebut gejala yang terlihat",
        "Menyebut pesan error atau behavior yang tidak sesuai",
        "Menyebut dokumentasi yang dibuka",
        "Menyebut perubahan yang dilakukan",
        "Menyebut hasil setelah perubahan",
      ],
      modelAnswer:
        "Gejalanya: tombol tidak mengubah teks saat diklik. Di Console saya melihat error karena selector untuk tombol menghasilkan null. Saya membuka dokumentasi MDN querySelector untuk mengecek bahwa selector harus cocok dengan id di HTML. Setelah dicek, id di HTML adalah saveBtn tetapi JavaScript memakai #saveButton. Saya menyamakan id-nya, refresh browser, lalu tombol berhasil mengubah output.",
    },
    {
      id: "read-docs-while-debugging-local-js-summary",
      type: "summary",
      points: [
        "Debugging dimulai dari gejala, Console, dan perubahan kecil yang terarah.",
        "querySelector yang menghasilkan null biasanya terkait selector, id, timing script, atau file yang salah dibuka.",
        "Dokumentasi MDN dipakai untuk mengecek API yang sedang digunakan, bukan dibaca sebagai kamus besar sekaligus.",
        "Catatan debugging membantu kamu menjelaskan proses berpikir saat project direview.",
        "Berikutnya kamu akan mengecek readiness module lewat project checklist dan catatan project.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "read-docs-while-debugging-local-js-intro",
      "read-docs-while-debugging-local-js-docs-bridge",
      "read-docs-while-debugging-local-js-writing-practice",
      "read-docs-while-debugging-local-js-summary",
    ],
  },
};

export const localVanillaJavascriptAppAssessmentLesson: Lesson = {
  id: "local-vanilla-javascript-app-assessment",
  trackId: "frontend-engineering",
  moduleId: "local-vanilla-javascript-app",
  title: "Uji Kompetensi Local Vanilla JavaScript App",
  slug: "local-vanilla-javascript-app-assessment",
  description:
    "Cek kesiapan membangun, menjalankan, men-debug, menyimpan, dan menjelaskan mini app Vanilla JavaScript lokal.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 70,
  objectives: [
    "Mengecek kesiapan membuat project Vanilla JavaScript lokal",
    "Mengecek hubungan index.html, style.css, dan script.js",
    "Mengecek interaksi DOM dan event",
    "Mengecek penggunaan localStorage atau fetch sederhana",
    "Mengecek kemampuan debug dengan DevTools dan dokumentasi resmi",
    "Mengecek kemampuan menjelaskan project dan readiness ke module berikutnya",
  ],
  skillTags: ["JavaScript", "Local Workflow", "Debugging", "GitHub", "Checkpoint"],
  blocks: [
    {
      id: "local-vanilla-javascript-app-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini mengecek readiness local Vanilla JavaScript workflow. Kamu tidak sedang membuktikan bahwa app kamu besar atau sempurna. Kamu sedang membuktikan bahwa kamu bisa membuat mini app lokal yang punya struktur file jelas, behavior JavaScript nyata, data kecil atau data fetch sederhana, proses debug yang masuk akal, dan catatan project yang bisa dibaca orang lain.\n\nFluentStack tidak bisa membaca folder lokal, terminal, browser, atau akun GitHub kamu secara otomatis. Karena itu, checklist di checkpoint ini adalah self-review. Tandai selesai hanya setelah kamu benar-benar mengecek project di perangkat sendiri.",
    },
    {
      id: "local-vanilla-javascript-app-assessment-project-checklist",
      type: "text",
      title: "Local project checklist",
      content:
        "Pastikan mini app lokal kamu memenuhi checklist ini:\n\n- Project punya folder sendiri.\n- Project punya index.html, style.css, script.js, dan README.md.\n- index.html menghubungkan style.css dengan link rel stylesheet.\n- index.html menghubungkan script.js dengan script src dan defer.\n- Halaman bisa dibuka di browser lokal.\n- CSS terlihat diterapkan di halaman.\n- JavaScript memilih elemen DOM dengan selector yang jelas.\n- Ada minimal satu event user, misalnya click atau submit.\n- Ada output yang berubah di halaman setelah user berinteraksi.\n- Ada data kecil yang disimpan dengan localStorage atau data sederhana yang ditampilkan dari fetch.\n- Console dicek dan tidak menyimpan error yang kamu abaikan.\n- Kamu memakai dokumentasi resmi saat debug minimal satu masalah.\n- Project punya minimal satu commit Git.\n- Project sudah dipush ke repository GitHub atau minimal siap dipush.\n- README menjelaskan tujuan app, cara menjalankan, fitur utama, dan hal yang dipelajari.\n\nChecklist ini bukan auto-validation. Jangan tandai selesai jika kamu belum membuka project lokal dan mengeceknya langsung.",
    },
    {
      id: "local-vanilla-javascript-app-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Dokumentasi untuk self-review terakhir",
      description:
        "Gunakan link ini untuk mengecek ulang bagian project yang masih rapuh. Baca bagian yang relevan dengan masalah project kamu saja.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Using the Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
          focus: [
            "fetch mengembalikan Promise",
            "membaca response JSON",
            "menangani flow request sederhana",
          ],
          ignoreForNow: [
            "request body kompleks",
            "streaming response",
            "advanced headers",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Window: localStorage property",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          focus: [
            "menyimpan data sederhana",
            "membaca data saat halaman dibuka",
            "batasan localStorage untuk data sensitif",
          ],
          ignoreForNow: [
            "storage event antar tab",
            "quota edge case",
            "sync antar device",
          ],
        },
        {
          source: "GitHub Docs",
          title: "Hello World",
          url: "https://docs.github.com/en/get-started/start-your-journey/hello-world",
          focus: [
            "repository",
            "commit",
            "basic GitHub workflow",
          ],
          ignoreForNow: [
            "pull request workflow advanced",
            "GitHub Actions",
            "organization workflow",
          ],
        },
      ],
      followUpAction:
        "Pilih satu bagian project yang paling mudah rusak, baca dokumentasi yang relevan, lalu update README dengan catatan kecil tentang cara menjalankan atau men-debug app.",
    },
    {
      id: "local-vanilla-javascript-app-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan project untuk README atau update mentor. Jelaskan tujuan mini app, struktur file, fitur JavaScript, cara menjalankan, cara kamu men-debug, dan status readiness.",
      placeholder:
        "Mini app ini adalah... Struktur filenya terdiri dari... Fitur JavaScript utamanya...",
      minimumCharacters: 360,
      checklist: [
        "Menjelaskan tujuan mini app",
        "Menyebut index.html, style.css, script.js, dan README.md",
        "Menjelaskan satu event atau interaksi DOM",
        "Menjelaskan penggunaan localStorage atau fetch",
        "Menjelaskan cara menjalankan project secara lokal",
        "Menyebut satu proses debugging atau dokumentasi yang dipakai",
        "Menyebut status Git/GitHub atau rencana push",
        "Menyebut apakah sudah siap lanjut ke module berikutnya",
      ],
      modelAnswer:
        "Mini app ini adalah catatan harian sederhana untuk latihan Vanilla JavaScript. Struktur filenya terdiri dari index.html untuk markup, style.css untuk tampilan, script.js untuk behavior, dan README.md untuk dokumentasi project. Fitur JavaScript utamanya adalah membaca input, menangani click event, menampilkan catatan di halaman, dan menyimpan catatan dengan localStorage agar tetap ada setelah refresh. Untuk menjalankan project, saya membuka index.html di browser lalu mengedit file dari code editor. Saat tombol tidak bekerja, saya mengecek Console, membuka dokumentasi MDN querySelector, lalu memperbaiki id yang tidak sama. Project sudah punya commit Git dan siap dipush ke GitHub. Saya siap lanjut karena sudah memahami hubungan file lokal, DOM event, storage kecil, dan debugging dasar.",
    },
    {
      id: "local-vanilla-javascript-app-assessment-summary",
      type: "summary",
      points: [
        "Checkpoint ini mengukur readiness local Vanilla JavaScript workflow, bukan hafalan API.",
        "Project yang lulus punya struktur file jelas, koneksi file benar, interaksi DOM nyata, dan data kecil atau fetch sederhana.",
        "DevTools dan dokumentasi resmi menjadi bagian dari proses belajar, bukan tambahan opsional.",
        "README dan catatan project membantu kamu menjelaskan hasil kerja seperti engineer.",
        "Jika belum siap, ulangi bagian file connection, DOM event, localStorage/fetch, Console, Git, dan README.",
        "Jika sudah siap, kamu bisa lanjut ke JavaScript Advanced dengan dasar local workflow yang lebih kuat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "local-vanilla-javascript-app-assessment-recap",
      "local-vanilla-javascript-app-assessment-project-checklist",
      "local-vanilla-javascript-app-assessment-writing-practice",
      "local-vanilla-javascript-app-assessment-summary",
    ],
  },
};
