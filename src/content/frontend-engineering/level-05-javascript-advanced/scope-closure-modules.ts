import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const javascriptScopeClosureModulesModule: Module = {
  id: "javascript-scope-closure-modules",
  trackId: "frontend-engineering",
  title: "Scope, Closure, and Modules",
  slug: "javascript-scope-closure-modules",
  description:
    "Memahami akses variable, closure untuk state kecil, dan cara memecah Vanilla JavaScript ke module file yang lebih rapi.",
  order: 14,
  lessonIds: [
    "javascript-scope-basic",
    "javascript-closure-ui-example",
    "javascript-es-modules-import-export",
    "javascript-split-javascript-files",
    "javascript-scope-closure-modules-assessment",
  ],
  estimatedHours: 5,
  skillTags: ["JavaScript", "Scope", "Closure", "ES Modules"],
};

export const javascriptScopeBasicLesson: Lesson = {
  id: "javascript-scope-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-scope-closure-modules",
  title: "Scope Dasar",
  slug: "javascript-scope-basic",
  description:
    "Belajar membaca area akses variable: global scope, function scope, dan block scope.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 40,
  objectives: [
    "Membedakan global scope, function scope, dan block scope",
    "Memprediksi apakah sebuah variable bisa diakses dari posisi tertentu",
    "Menghindari variable yang bocor ke area yang tidak perlu",
  ],
  skillTags: ["JavaScript", "Scope", "Variables"],
  blocks: [
    {
      id: "javascript-scope-basic-intro",
      type: "text",
      title: "Variable tidak selalu bisa dibaca dari mana saja",
      content:
        "Di Level 4, kamu sudah memakai variable, function, DOM event, localStorage, dan fetch. Saat kode mulai lebih panjang, pertanyaan pentingnya bukan hanya value apa yang disimpan, tetapi juga di mana value itu boleh dibaca.\n\nScope adalah batas akses variable. Scope membantu kode tetap rapi karena data kecil tidak perlu tersedia di seluruh file. Kalau semua variable dibuat global, fitur kecil bisa saling mengganggu dan debugging menjadi lebih melelahkan.",
    },
    {
      id: "javascript-scope-basic-core",
      type: "text",
      title: "Tiga scope yang perlu kamu baca dulu",
      content:
        "Global scope berarti variable dibuat di area paling luar file dan bisa dibaca oleh kode setelahnya di file yang sama. Function scope berarti variable dibuat di dalam function dan hanya aman dipakai di function itu. Block scope berarti variable let atau const dibuat di dalam block seperti if atau for, lalu tidak bisa dibaca dari luar block.\n\nSaat membaca kode, mulai dari posisi variable dibuat. Lalu tanyakan: apakah kode yang membaca variable berada di dalam area yang sama, di area yang lebih dalam, atau sudah keluar dari area itu?",
    },
    {
      id: "javascript-scope-basic-code-example",
      type: "code-example",
      title: "Membaca batas akses variable",
      language: "js",
      code: `const appName = "FluentStack";

function showLessonStatus() {
  const lessonTitle = "Scope Dasar";

  if (lessonTitle.length > 0) {
    const status = "Siap dipelajari";
    console.log(appName);
    console.log(lessonTitle);
    console.log(status);
  }

  console.log(appName);
  console.log(lessonTitle);
  // console.log(status); // Tidak bisa dibaca di sini.
}

showLessonStatus();`,
      explanation:
        "appName dibuat di global scope, jadi function bisa membacanya. lessonTitle dibuat di function, jadi masih bisa dibaca di dalam function. status dibuat di dalam block if dengan const, jadi hanya bisa dibaca di dalam block itu.",
    },
    {
      id: "javascript-scope-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menjadikan semuanya global",
      content:
        "Global variable terasa mudah di awal karena bisa dibaca dari banyak tempat. Tetapi semakin besar file, global variable membuat perubahan kecil lebih berisiko. Simpan variable sedekat mungkin dengan kode yang benar-benar membutuhkannya.",
    },
    {
      id: "javascript-scope-basic-quick-check",
      type: "quick-check",
      question:
        "Jika const message dibuat di dalam block if, apa yang terjadi saat kode di luar block if mencoba membaca message?",
      options: [
        "Kode akan membaca message seperti biasa",
        "Kode tidak bisa membaca message dari luar block",
        "message otomatis menjadi global",
        "message berubah menjadi string kosong",
      ],
      correctAnswer: "Kode tidak bisa membaca message dari luar block",
      explanation:
        "const dan let mengikuti block scope. Variable yang dibuat di dalam block if tidak bisa dibaca dari luar block itu.",
    },
    {
      id: "javascript-scope-basic-coding-practice",
      type: "coding-practice",
      challengeId: "predict-scope-access",
    },
    {
      id: "javascript-scope-basic-summary",
      type: "summary",
      points: [
        "Scope menentukan area tempat variable bisa dibaca.",
        "Global scope berada di area paling luar file.",
        "Function scope membatasi variable di dalam function.",
        "Block scope membatasi let dan const di dalam block seperti if atau for.",
        "Berikutnya, kamu akan melihat closure: function yang tetap mengingat variable dari scope luarnya.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-scope-basic-intro",
      "javascript-scope-basic-core",
      "javascript-scope-basic-code-example",
      "javascript-scope-basic-common-mistake",
      "javascript-scope-basic-quick-check",
      "javascript-scope-basic-coding-practice",
      "javascript-scope-basic-summary",
    ],
  },
};

export const javascriptClosureUiExampleLesson: Lesson = {
  id: "javascript-closure-ui-example",
  trackId: "frontend-engineering",
  moduleId: "javascript-scope-closure-modules",
  title: "Closure dalam Contoh UI",
  slug: "javascript-closure-ui-example",
  description:
    "Memahami closure lewat state kecil seperti counter atau toggle yang diingat oleh function.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami closure sebagai function yang mengingat outer variable",
    "Membaca closure dalam pola counter atau toggle",
    "Menghindari state kecil yang langsung dibuat global",
  ],
  skillTags: ["JavaScript", "Closure", "State"],
  blocks: [
    {
      id: "javascript-closure-ui-example-intro",
      type: "text",
      title: "Closure membuat function punya ingatan kecil",
      content:
        "Setelah scope, closure jadi lebih mudah dibaca. Closure terjadi ketika sebuah function tetap punya akses ke variable dari scope luarnya, bahkan setelah function luar selesai berjalan.\n\nDi UI, closure sering terasa seperti function yang punya ingatan kecil. Misalnya counter yang mengingat jumlah klik, toggle yang mengingat status terbuka, atau helper yang mengingat konfigurasi tertentu.",
    },
    {
      id: "javascript-closure-ui-example-core",
      type: "text",
      title: "State tidak selalu harus global",
      content:
        "Untuk fitur kecil, kamu bisa menyimpan state di dalam function pembuat, lalu mengembalikan function lain yang memakai state itu. Function yang dikembalikan membentuk closure karena masih bisa membaca dan mengubah variable dari scope luarnya.\n\nPola ini berguna saat kamu ingin state kecil tetap tersembunyi dari kode lain, tetapi tetap bisa dipakai oleh event handler atau function kontrol.",
    },
    {
      id: "javascript-closure-ui-example-code-example",
      type: "code-example",
      title: "Toggle yang mengingat status",
      language: "js",
      code: `function createToggle(initialValue) {
  let isOpen = initialValue;

  return function toggle() {
    isOpen = !isOpen;
    return isOpen;
  };
}

const toggleMenu = createToggle(false);

console.log(toggleMenu()); // true
console.log(toggleMenu()); // false
console.log(toggleMenu()); // true`,
      explanation:
        "createToggle selesai berjalan setelah toggleMenu dibuat. Tetapi function toggle yang dikembalikan masih mengingat variable isOpen. Itulah closure.",
    },
    {
      id: "javascript-closure-ui-example-case-study",
      type: "callout",
      variant: "tip",
      title: "Baca closure dari dua arah",
      content:
        "Pertama, cari function luar yang membuat variable. Kedua, cari function dalam yang memakai variable itu. Jika function dalam dikembalikan atau dipakai sebagai callback, kemungkinan besar kamu sedang melihat closure.",
    },
    {
      id: "javascript-closure-ui-example-coding-practice",
      type: "coding-practice",
      challengeId: "build-closure-counter",
    },
    {
      id: "javascript-closure-ui-example-summary",
      type: "summary",
      points: [
        "Closure adalah function yang tetap punya akses ke outer variable.",
        "Closure terbentuk dari hubungan function dan lexical scope tempat function dibuat.",
        "Closure berguna untuk state kecil seperti counter, toggle, atau konfigurasi helper.",
        "Closure bisa mengurangi kebutuhan global variable.",
        "Berikutnya, kamu akan melihat cara memecah file JavaScript dengan ES modules.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-closure-ui-example-intro",
      "javascript-closure-ui-example-core",
      "javascript-closure-ui-example-code-example",
      "javascript-closure-ui-example-case-study",
      "javascript-closure-ui-example-coding-practice",
      "javascript-closure-ui-example-summary",
    ],
  },
};

export const javascriptEsModulesImportExportLesson: Lesson = {
  id: "javascript-es-modules-import-export",
  trackId: "frontend-engineering",
  moduleId: "javascript-scope-closure-modules",
  title: "ES Modules dan import/export",
  slug: "javascript-es-modules-import-export",
  description:
    "Belajar membaca export dan import dasar agar file JavaScript bisa dipisah dengan jelas.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami module sebagai file JavaScript dengan batas tanggung jawab",
    "Membaca named export dan named import",
    "Memahami kebutuhan script type module di browser",
  ],
  skillTags: ["JavaScript", "ES Modules", "import", "export"],
  blocks: [
    {
      id: "javascript-es-modules-import-export-intro",
      type: "text",
      title: "Satu file besar mulai sulit dirawat",
      content:
        "Di local project sebelumnya, menaruh semua JavaScript di script.js masih masuk akal. Tetapi saat fitur bertambah, satu file bisa berisi DOM selection, event handler, state, localStorage, formatter, dan fetch sekaligus. File seperti itu sulit dibaca dan sulit diubah.\n\nES modules membantu kamu memecah JavaScript menjadi beberapa file. Satu file bisa mengekspor function atau value. File lain bisa mengimpor bagian yang dibutuhkan.",
    },
    {
      id: "javascript-es-modules-import-export-core",
      type: "text",
      title: "export keluar, import masuk",
      content:
        "export berarti sebuah file menyediakan function, object, atau value agar bisa dipakai file lain. import berarti sebuah file mengambil bagian yang diekspor dari file lain.\n\nUntuk awal, fokus pada named export. Named export memakai nama yang jelas dan diimpor dengan kurung kurawal. Ini membantu kamu membaca dari mana function berasal dan apa yang dipakai oleh file utama.",
    },
    {
      id: "javascript-es-modules-import-export-export-example",
      type: "code-example",
      title: "lesson-utils.js mengekspor helper",
      language: "js",
      code: `export function formatLessonTitle(title) {
  return title.trim();
}

export const maxVisibleLessons = 5;`,
      explanation:
        "File lesson-utils.js menyediakan function formatLessonTitle dan value maxVisibleLessons. Karena keduanya memakai named export, file lain harus mengimpor dengan nama yang sama.",
    },
    {
      id: "javascript-es-modules-import-export-import-example",
      type: "code-example",
      title: "main.js mengimpor helper",
      language: "js",
      code: `import { formatLessonTitle, maxVisibleLessons } from "./lesson-utils.js";

const rawTitle = "  Scope Dasar  ";

console.log(formatLessonTitle(rawTitle));
console.log(maxVisibleLessons);`,
      explanation:
        "main.js mengambil dua named export dari lesson-utils.js. Path ./lesson-utils.js berarti file berada di folder yang sama dengan main.js.",
    },
    {
      id: "javascript-es-modules-import-export-html-example",
      type: "code-example",
      title: "HTML perlu type module",
      language: "html",
      code: `<script type="module" src="main.js"></script>`,
      explanation:
        "Di browser, file yang memakai import harus dijalankan sebagai module. Karena itu script di HTML memakai type=\"module\".",
    },
    {
      id: "javascript-es-modules-import-export-quick-check",
      type: "quick-check",
      question:
        "Jika main.js memakai import dari file lain, script mana yang paling tepat di HTML?",
      options: [
        "<script src=\"main.js\"></script>",
        "<script type=\"module\" src=\"main.js\"></script>",
        "<module src=\"main.js\"></module>",
        "<script export=\"main.js\"></script>",
      ],
      correctAnswer: "<script type=\"module\" src=\"main.js\"></script>",
      explanation:
        "Browser perlu tahu bahwa main.js adalah module. Karena itu script memakai type=\"module\".",
    },
    {
      id: "javascript-es-modules-import-export-summary",
      type: "summary",
      points: [
        "ES modules membantu memecah JavaScript ke beberapa file.",
        "export menyediakan function atau value dari satu file.",
        "import mengambil function atau value dari file lain.",
        "Named export dan named import memakai nama yang sama.",
        "Browser membutuhkan script type=\"module\" untuk menjalankan import.",
        "Berikutnya, kamu akan memecah file JavaScript lokal berdasarkan tanggung jawab.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-es-modules-import-export-intro",
      "javascript-es-modules-import-export-core",
      "javascript-es-modules-import-export-export-example",
      "javascript-es-modules-import-export-import-example",
      "javascript-es-modules-import-export-html-example",
      "javascript-es-modules-import-export-quick-check",
      "javascript-es-modules-import-export-summary",
    ],
  },
};

export const javascriptSplitFilesLesson: Lesson = {
  id: "javascript-split-javascript-files",
  trackId: "frontend-engineering",
  moduleId: "javascript-scope-closure-modules",
  title: "Memecah File JavaScript",
  slug: "javascript-split-javascript-files",
  description:
    "Latihan refactor local app dari satu script besar menjadi beberapa file module dengan tanggung jawab jelas.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 60,
  objectives: [
    "Mengenali tanda script.js mulai terlalu besar",
    "Memisahkan DOM, state, storage, dan utility code",
    "Menggunakan script type module di local project",
    "Menjelaskan alasan pemisahan file",
  ],
  skillTags: ["JavaScript", "Refactor", "ES Modules", "Local Workflow"],
  blocks: [
    {
      id: "javascript-split-javascript-files-intro",
      type: "text",
      title: "Refactor dimulai dari tanggung jawab",
      content:
        "Memecah file bukan soal membuat banyak file agar terlihat profesional. Pemisahan file berguna jika setiap file punya tanggung jawab yang mudah dijelaskan.\n\nDi local Vanilla JavaScript app, pembagian awal yang masuk akal biasanya sederhana: main.js untuk alur utama, dom.js untuk memilih atau membuat elemen DOM, state.js untuk data sementara, storage.js untuk localStorage, dan utils.js untuk helper kecil.",
    },
    {
      id: "javascript-split-javascript-files-before-example",
      type: "code-example",
      title: "Sebelum refactor: satu file melakukan semuanya",
      language: "js",
      code: `const noteInput = document.querySelector("#noteInput");
const saveButton = document.querySelector("#saveButton");
const noteOutput = document.querySelector("#noteOutput");

let latestNote = localStorage.getItem("latestNote") || "";

function formatNote(note) {
  return note.trim();
}

function renderNote(note) {
  noteOutput.textContent = "Catatan: " + note;
}

saveButton.addEventListener("click", () => {
  latestNote = formatNote(noteInput.value);
  localStorage.setItem("latestNote", latestNote);
  renderNote(latestNote);
});`,
      explanation:
        "Kode ini masih kecil, tetapi sudah mencampur DOM selection, state, formatter, storage, render, dan event handler di satu tempat.",
    },
    {
      id: "javascript-split-javascript-files-after-structure",
      type: "code-example",
      title: "Setelah refactor: file berdasarkan tanggung jawab",
      language: "bash",
      code: `vanilla-js-notes/
  index.html
  main.js
  dom.js
  state.js
  storage.js
  utils.js`,
      explanation:
        "main.js menjadi pintu masuk. dom.js mengurus elemen halaman. state.js mengurus data sementara. storage.js mengurus localStorage. utils.js berisi helper kecil yang tidak bergantung pada DOM.",
    },
    {
      id: "javascript-split-javascript-files-main-example",
      type: "code-example",
      title: "main.js sebagai alur utama",
      language: "js",
      code: `import { noteInput, saveButton } from "./dom.js";
import { setLatestNote } from "./state.js";
import { saveNote } from "./storage.js";
import { formatNote } from "./utils.js";

saveButton.addEventListener("click", () => {
  const note = formatNote(noteInput.value);

  setLatestNote(note);
  saveNote(note);
});`,
      explanation:
        "main.js membaca seperti daftar kerja utama. Detail DOM, state, storage, dan formatting berada di file masing-masing.",
    },
    {
      id: "javascript-split-javascript-files-local-task",
      type: "text",
      title: "Checklist local refactor",
      content:
        "Kerjakan di local Vanilla JavaScript app kamu:\n\n- Pilih satu script.js yang sudah punya DOM event dan localStorage atau data kecil.\n- Buat file main.js sebagai entry point utama.\n- Buat minimal dua file tambahan, misalnya dom.js dan storage.js.\n- Pindahkan DOM selection ke dom.js jika itu membuat main.js lebih bersih.\n- Pindahkan localStorage helper ke storage.js jika fitur kamu memakai penyimpanan lokal.\n- Pindahkan helper murni seperti formatNote ke utils.js jika ada.\n- Gunakan export pada file yang menyediakan function atau value.\n- Gunakan import pada main.js untuk mengambil bagian yang dibutuhkan.\n- Ubah HTML menjadi script type=\"module\" src=\"main.js\".\n- Jalankan ulang halaman di browser dan cek Console.\n- Jangan lanjut jika Console menampilkan error import path atau file not found.\n\nTandai selesai setelah app lokal tetap berjalan setelah dipisah menjadi beberapa file.",
    },
    {
      id: "javascript-split-javascript-files-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memecah file tanpa alasan",
      content:
        "Kalau satu file baru hanya berisi satu baris yang tidak membuat kode lebih jelas, pemisahan itu belum tentu membantu. Tujuannya adalah membuat tanggung jawab lebih mudah dibaca, bukan mengejar jumlah file.",
    },
    {
      id: "javascript-split-javascript-files-summary",
      type: "summary",
      points: [
        "Refactor file sebaiknya mengikuti tanggung jawab kode.",
        "main.js cocok menjadi entry point yang membaca alur utama app.",
        "dom.js, state.js, storage.js, dan utils.js adalah pembagian awal yang cukup untuk Vanilla JS kecil.",
        "Browser membutuhkan type=\"module\" agar import/export berjalan.",
        "Berikutnya, Uji Kompetensi akan mengecek scope, closure, import/export, dan keputusan module boundary.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-split-javascript-files-intro",
      "javascript-split-javascript-files-before-example",
      "javascript-split-javascript-files-after-structure",
      "javascript-split-javascript-files-main-example",
      "javascript-split-javascript-files-local-task",
      "javascript-split-javascript-files-summary",
    ],
  },
};

export const javascriptScopeClosureModulesAssessmentLesson: Lesson = {
  id: "javascript-scope-closure-modules-assessment",
  trackId: "frontend-engineering",
  moduleId: "javascript-scope-closure-modules",
  title: "Uji Kompetensi Scope, Closure, and Modules",
  slug: "javascript-scope-closure-modules-assessment",
  description:
    "Cek readiness membaca scope, mengenali closure, dan memecah Vanilla JavaScript app ke module file sederhana.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 70,
  objectives: [
    "Mengecek pemahaman global, function, dan block scope",
    "Mengecek pemahaman closure dalam contoh UI kecil",
    "Mengecek kemampuan membaca import dan export",
    "Mengecek keputusan module boundary saat refactor local app",
    "Mengecek kesiapan lanjut ke async JavaScript",
  ],
  skillTags: ["JavaScript", "Scope", "Closure", "ES Modules", "Checkpoint"],
  blocks: [
    {
      id: "javascript-scope-closure-modules-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini mengecek apakah kamu sudah bisa membaca batas akses variable, mengenali closure dalam behavior kecil, dan memecah JavaScript lokal tanpa langsung masuk ke framework atau bundler.\n\nKamu belum perlu memahami tree shaking, package publishing, CommonJS, circular dependency, atau module resolution advanced. Untuk tahap ini, cukup pastikan kamu bisa menjelaskan: variable ini bisa dibaca di mana, function ini mengingat state dari mana, dan file ini bertanggung jawab atas apa.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-quiz-block",
      type: "quiz",
      quizId: "javascript-scope-closure-modules-assessment-quiz",
    },
    {
      id: "javascript-scope-closure-modules-assessment-refactor-task",
      type: "text",
      title: "Refactor readiness checklist",
      content:
        "Gunakan local Vanilla JavaScript app kamu untuk self-review:\n\n- Kamu bisa menunjuk minimal satu variable global dan menjelaskan apakah global itu memang perlu.\n- Kamu bisa menunjuk minimal satu variable function atau block scope.\n- Kamu bisa menjelaskan satu contoh closure, misalnya counter, toggle, atau function yang mengingat konfigurasi.\n- Kamu punya main.js sebagai entry point utama jika app sudah dipisah.\n- Kamu punya minimal dua module file tambahan dengan tanggung jawab jelas.\n- Setiap export punya alasan: function atau value itu memang dipakai file lain.\n- Setiap import di main.js berasal dari file yang tepat.\n- HTML memakai script type=\"module\" untuk main.js.\n- App tetap berjalan setelah file dipisah.\n- Console tidak menampilkan error import path, missing file, atau variable yang tidak terdefinisi.\n\nChecklist ini adalah self-review untuk local project. Tandai selesai setelah kamu benar-benar mengecek project di browser dan code editor.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi secara terarah",
      description:
        "Gunakan bagian ini untuk menguatkan konsep yang paling sering membuat bingung: lexical scope, closure, module file, import, dan export.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Closures",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures",
          focus: [
            "lexical scope",
            "function yang mengakses outer scope",
            "contoh practical closures",
          ],
          ignoreForNow: [
            "performance considerations",
            "private methods pattern",
            "loop closure edge cases yang terlalu advanced",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "JavaScript modules",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          focus: [
            "module file",
            "import dan export dasar",
            "script type module di browser",
          ],
          ignoreForNow: [
            "module aggregation",
            "dynamic import",
            "tooling dan bundler",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "import",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
          focus: [
            "named import",
            "path module relatif",
            "import di bagian atas file",
          ],
          ignoreForNow: [
            "import attributes",
            "namespace import",
            "side-effect imports",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "export",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export",
          focus: [
            "named export",
            "export function",
            "export const",
          ],
          ignoreForNow: [
            "re-export",
            "default export trade-off",
            "advanced declaration forms",
          ],
        },
      ],
      followUpAction:
        "Buka satu module file di local project kamu, lalu tulis satu kalimat tentang apa yang diekspor file itu dan kenapa file lain perlu mengimpornya.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan refactor singkat. Jelaskan satu keputusan scope, satu contoh closure atau state kecil, dan alasan kamu memecah file JavaScript ke module tertentu.",
      placeholder:
        "Di project saya, variable ... sengaja berada di ... karena ... Closure muncul saat ... Saya memecah file menjadi ...",
      minimumCharacters: 320,
      checklist: [
        "Menjelaskan satu keputusan scope",
        "Menjelaskan satu closure atau state kecil",
        "Menyebut file module yang dibuat",
        "Menjelaskan tanggung jawab minimal dua file",
        "Menyebut cara HTML menjalankan main.js sebagai module",
        "Menyebut satu hal yang dicek di Console",
      ],
      modelAnswer:
        "Di project saya, latestNote tidak saya buat global karena hanya dipakai di alur penyimpanan catatan. State kecil untuk toggle panel saya simpan lewat closure agar function toggle tetap mengingat status terbuka tanpa membuat variable global baru. Saya memecah file menjadi main.js, dom.js, storage.js, dan utils.js. main.js mengatur alur event, dom.js menyimpan element selector, storage.js menyimpan helper localStorage, dan utils.js berisi formatter teks. Di HTML, saya menjalankan main.js dengan script type=\"module\". Setelah refactor, saya mengecek Console untuk memastikan tidak ada error import path atau variable yang tidak terdefinisi.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-summary",
      type: "summary",
      points: [
        "Readiness module ini berarti kamu bisa menjelaskan batas akses variable.",
        "Closure dibaca dari function yang tetap mengingat outer variable.",
        "ES modules membantu memecah file berdasarkan tanggung jawab.",
        "Refactor yang baik membuat alur utama lebih mudah dibaca, bukan sekadar menambah file.",
        "Jika belum siap, ulangi scope prediction, closure counter, import/export reading, dan local refactor checklist.",
        "Jika sudah siap, kamu bisa lanjut ke async JavaScript dan error handling dengan struktur kode yang lebih rapi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-scope-closure-modules-assessment-recap",
      "javascript-scope-closure-modules-assessment-quiz-block",
      "javascript-scope-closure-modules-assessment-refactor-task",
      "javascript-scope-closure-modules-assessment-writing-practice",
      "javascript-scope-closure-modules-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const javascriptScopeClosureModulesAssessmentQuiz: Quiz = {
  id: "javascript-scope-closure-modules-assessment-quiz",
  lessonId: "javascript-scope-closure-modules-assessment",
  title: "Uji Kompetensi Scope, Closure, and Modules",
  passingScore: 70,
  questions: [
    {
      id: "javascript-scope-closure-modules-assessment-q1",
      type: "multiple-choice",
      question:
        "Apa arti scope dalam JavaScript?",
      options: [
        "Batas area tempat variable bisa dibaca",
        "Ukuran file JavaScript setelah minify",
        "Cara browser mengatur warna elemen",
        "Nama lain dari array of objects",
      ],
      correctAnswer: "Batas area tempat variable bisa dibaca",
      explanation:
        "Scope menentukan dari area mana sebuah variable bisa diakses. Ini membantu kode tidak terlalu bergantung pada global variable.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-q2",
      type: "true-false",
      question:
        "const yang dibuat di dalam block if bisa dibaca dengan aman dari luar block if.",
      correctAnswer: false,
      explanation:
        "const mengikuti block scope. Jika dibuat di dalam block if, variable itu tidak bisa dibaca dari luar block tersebut.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-q3",
      type: "multiple-choice",
      question:
        "Kapan sebuah function membentuk closure?",
      options: [
        "Saat function tetap mengakses variable dari outer scope tempat ia dibuat",
        "Saat function hanya berisi console.log",
        "Saat function tidak punya parameter",
        "Saat function ditulis di file CSS",
      ],
      correctAnswer:
        "Saat function tetap mengakses variable dari outer scope tempat ia dibuat",
      explanation:
        "Closure terjadi ketika function membawa akses ke lexical environment tempat function itu dibuat.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-q4",
      type: "multiple-choice",
      question:
        "File utils.js memiliki kode export function formatNote(note) { ... }. Bagaimana main.js mengimpor named export itu?",
      options: [
        "import { formatNote } from \"./utils.js\";",
        "import formatNote from \"./utils.css\";",
        "export { formatNote } from \"./utils.js\";",
        "require(\"./utils.js\").formatNote;",
      ],
      correctAnswer: "import { formatNote } from \"./utils.js\";",
      explanation:
        "Named export diimpor dengan nama yang sama di dalam kurung kurawal dan path relatif menuju file module.",
    },
    {
      id: "javascript-scope-closure-modules-assessment-q5",
      type: "multiple-choice",
      question:
        "Jika main.js memakai import di browser tanpa bundler, script HTML mana yang tepat?",
      options: [
        "<script type=\"module\" src=\"main.js\"></script>",
        "<script src=\"main.js\"></script>",
        "<script type=\"closure\" src=\"main.js\"></script>",
        "<module file=\"main.js\"></module>",
      ],
      correctAnswer: "<script type=\"module\" src=\"main.js\"></script>",
      explanation:
        "Browser perlu menjalankan main.js sebagai ES module agar sintaks import/export bisa dipakai.",
    },
  ],
};

export const predictScopeAccessChallenge: CodingChallenge = {
  id: "predict-scope-access",
  lessonId: "javascript-scope-basic",
  title: "Prediksi akses variable",
  description:
    "Latihan memprediksi apakah variable masih bisa dibaca dari posisi tertentu.",
  instructions: [
    "Fokus di tab JS.",
    "Baca posisi globalStatus, functionStatus, dan blockStatus.",
    "Isi canReadGlobalHere dengan string \"bisa\".",
    "Isi canReadBlockHere dengan string \"tidak bisa\".",
    "Jangan memindahkan variable yang sudah disiapkan.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan scope</h1>
  <p>Gunakan tab JS untuk memprediksi akses variable.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const globalStatus = "global";

function readLessonScope() {
  const functionStatus = "function";

  if (functionStatus.length > 0) {
    const blockStatus = "block";
    console.log(globalStatus);
    console.log(functionStatus);
    console.log(blockStatus);
  }

  const canReadGlobalHere = "";
  const canReadBlockHere = "";

  console.log(canReadGlobalHere);
  console.log(canReadBlockHere);
}

readLessonScope();`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan scope</h1>
  <p>Gunakan tab JS untuk memprediksi akses variable.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const globalStatus = "global";

function readLessonScope() {
  const functionStatus = "function";

  if (functionStatus.length > 0) {
    const blockStatus = "block";
    console.log(globalStatus);
    console.log(functionStatus);
    console.log(blockStatus);
  }

  const canReadGlobalHere = "bisa";
  const canReadBlockHere = "tidak bisa";

  console.log(canReadGlobalHere);
  console.log(canReadBlockHere);
}

readLessonScope();`,
  },
  checklist: [
    "globalStatus bisa dibaca dari dalam function.",
    "blockStatus hanya aman dibaca di dalam block if.",
    "Prediksi ditulis sebagai string agar hasilnya muncul di console.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "global-access-answer",
        label: "canReadGlobalHere diisi dengan \"bisa\".",
        type: "contains",
        target: `const canReadGlobalHere = "bisa";`,
        valueIncludes: `const canReadGlobalHere = "bisa";`,
      },
      {
        id: "block-access-answer",
        label: "canReadBlockHere diisi dengan \"tidak bisa\".",
        type: "contains",
        target: `const canReadBlockHere = "tidak bisa";`,
        valueIncludes: `const canReadBlockHere = "tidak bisa";`,
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Console membantu kamu melihat variable yang bisa dibaca dan hasil prediksi akses.",
    lines: ["global", "function", "block", "bisa", "tidak bisa"],
  },
  skillTags: ["JavaScript", "Scope", "Prediction"],
};

export const buildClosureCounterChallenge: CodingChallenge = {
  id: "build-closure-counter",
  lessonId: "javascript-closure-ui-example",
  title: "Membuat counter dengan closure",
  description:
    "Latihan membuat function counter yang mengingat nilai count tanpa variable global.",
  instructions: [
    "Fokus di tab JS.",
    "Lengkapi inner function di dalam createCounter.",
    "Naikkan count setiap kali function dipanggil.",
    "Kembalikan count agar console menampilkan 1, 2, lalu 3.",
    "Jangan memindahkan count ke global scope.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan closure counter</h1>
  <p>Console akan menampilkan hasil panggilan counter.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function createCounter() {
  let count = 0;

  return function () {
    // Naikkan count lalu kembalikan count.
  };
}

const nextCount = createCounter();

console.log(nextCount());
console.log(nextCount());
console.log(nextCount());`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan closure counter</h1>
  <p>Console akan menampilkan hasil panggilan counter.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const nextCount = createCounter();

console.log(nextCount());
console.log(nextCount());
console.log(nextCount());`,
  },
  checklist: [
    "count berada di dalam createCounter, bukan global scope.",
    "Inner function menaikkan count.",
    "Inner function mengembalikan count.",
    "Panggilan berulang menghasilkan nilai yang terus naik.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "counter-local-state",
        label: "count dibuat di dalam createCounter.",
        type: "contains",
        target: "let count = 0;",
        valueIncludes: "let count = 0;",
      },
      {
        id: "counter-increment",
        label: "count dinaikkan di inner function.",
        type: "contains",
        target: "count += 1;",
        valueIncludes: "count += 1;",
      },
      {
        id: "counter-return",
        label: "Inner function mengembalikan count.",
        type: "contains",
        target: "return count;",
        valueIncludes: "return count;",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Setiap panggilan nextCount memakai closure yang sama, sehingga nilainya terus naik.",
    lines: ["1", "2", "3"],
  },
  skillTags: ["JavaScript", "Closure", "State"],
};
