import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const javascriptDomEventsFormsStorageFetchModule: Module = {
  id: "javascript-dom-events-forms-storage-fetch",
  trackId: "frontend-engineering",
  title: "DOM, Events, Forms, localStorage, and Fetch Basics",
  slug: "javascript-dom-events-forms-storage-fetch",
  description:
    "Menghubungkan JavaScript ke halaman browser lewat DOM, event, form, localStorage, fetch, dan JSON dasar.",
  order: 12,
  lessonIds: [
    "javascript-dom-selection-basic",
    "javascript-click-input-events",
    "javascript-form-submit-basic",
    "javascript-local-storage-basic",
    "javascript-fetch-json-basic",
    "javascript-dom-events-forms-storage-fetch-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["JavaScript", "DOM", "Events", "Forms", "localStorage", "Fetch"],
};

export const javascriptDomSelectionBasicLesson: Lesson = {
  id: "javascript-dom-selection-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-dom-events-forms-storage-fetch",
  title: "DOM Selection Dasar",
  slug: "javascript-dom-selection-basic",
  description:
    "Belajar memilih elemen halaman dengan JavaScript dan mengubah teks yang tampil di browser.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami DOM sebagai representasi halaman di JavaScript",
    "Memilih elemen dengan document.querySelector",
    "Mengubah teks elemen dengan textContent",
  ],
  skillTags: ["JavaScript", "DOM", "querySelector"],
  blocks: [
    {
      id: "javascript-dom-selection-basic-intro",
      type: "text",
      title: "JavaScript mulai menyentuh halaman",
      content:
        "Di dua module sebelumnya, kamu menulis JavaScript yang bekerja dengan value, function, array, dan object. Sekarang JavaScript mulai terhubung ke halaman yang terlihat. DOM adalah cara browser merepresentasikan HTML agar bisa dibaca dan diubah lewat JavaScript.",
    },
    {
      id: "javascript-dom-selection-basic-core",
      type: "text",
      title: "Pilih dulu, baru ubah",
      content:
        "Pola pertama DOM sederhana: pilih elemen, simpan ke variable, lalu ubah bagian yang diperlukan. Untuk memilih satu elemen, kamu bisa memakai document.querySelector dengan selector CSS seperti #headline, .card, atau h1. Setelah elemen ditemukan, textContent bisa dipakai untuk mengganti teks di dalamnya.",
    },
    {
      id: "javascript-dom-selection-basic-code-example",
      type: "code-example",
      title: "Mengubah teks dari JavaScript",
      language: "js",
      code: `const title = document.querySelector("#title");
const statusText = document.querySelector("#statusText");

title.textContent = "Lesson siap dipelajari";
statusText.textContent = "Teks ini diubah lewat JavaScript.";`,
      explanation:
        "Baris pertama memilih elemen dengan id title. Baris kedua memilih elemen dengan id statusText. Dua baris terakhir mengganti teks yang terlihat di halaman.",
    },
    {
      id: "javascript-dom-selection-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Selector harus cocok dengan HTML",
      content:
        "Kalau HTML punya id=\"title\", selector JavaScript harus ditulis \"#title\". Kalau tanda # hilang, JavaScript akan mencari elemen <title>, bukan elemen dengan id title.",
    },
    {
      id: "javascript-dom-selection-basic-quick-check",
      type: "quick-check",
      question:
        "Kamu ingin memilih elemen HTML dengan id=\"message\". Selector apa yang dipakai di querySelector?",
      options: ["#message", ".message", "message()", "<message>"],
      correctAnswer: "#message",
      explanation:
        "Selector id memakai tanda #. Jadi document.querySelector(\"#message\") memilih elemen dengan id message.",
    },
    {
      id: "javascript-dom-selection-basic-coding-practice",
      type: "coding-practice",
      challengeId: "update-dom-text-basic",
    },
    {
      id: "javascript-dom-selection-basic-summary",
      type: "summary",
      points: [
        "DOM membuat HTML bisa dibaca dan diubah oleh JavaScript.",
        "document.querySelector memilih satu elemen dengan selector CSS.",
        "textContent mengganti teks yang terlihat di dalam elemen.",
        "Berikutnya, kamu akan membuat perubahan DOM terjadi setelah user melakukan action.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-dom-selection-basic-intro",
      "javascript-dom-selection-basic-core",
      "javascript-dom-selection-basic-code-example",
      "javascript-dom-selection-basic-common-mistake",
      "javascript-dom-selection-basic-quick-check",
      "javascript-dom-selection-basic-coding-practice",
      "javascript-dom-selection-basic-summary",
    ],
  },
};

export const javascriptClickInputEventsLesson: Lesson = {
  id: "javascript-click-input-events",
  trackId: "frontend-engineering",
  moduleId: "javascript-dom-events-forms-storage-fetch",
  title: "Event Click dan Input",
  slug: "javascript-click-input-events",
  description:
    "Belajar merespons klik user dan membaca value input untuk mengubah teks halaman.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami event sebagai aksi user yang bisa direspons JavaScript",
    "Memakai addEventListener untuk click event",
    "Membaca value dari input sederhana",
  ],
  skillTags: ["JavaScript", "Events", "Input"],
  blocks: [
    {
      id: "javascript-click-input-events-intro",
      type: "text",
      title: "Event membuat halaman terasa hidup",
      content:
        "DOM selection bisa mengubah halaman, tetapi halaman interaktif biasanya menunggu action dari user. Action seperti klik tombol, mengetik di input, atau submit form disebut event. JavaScript bisa mendengarkan event lalu menjalankan function.",
    },
    {
      id: "javascript-click-input-events-core",
      type: "text",
      title: "addEventListener mendengarkan action",
      content:
        "Pola event dasar adalah memilih elemen, lalu memasang addEventListener. Untuk tombol, event yang sering dipakai adalah click. Di dalam function event, kamu bisa membaca input.value dan menampilkan hasilnya ke elemen lain.",
    },
    {
      id: "javascript-click-input-events-code-example",
      type: "code-example",
      title: "Tombol yang membaca input",
      language: "js",
      code: `const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const greetingText = document.querySelector("#greetingText");

greetingButton.addEventListener("click", () => {
  greetingText.textContent = "Halo, " + nameInput.value;
});`,
      explanation:
        "Saat tombol diklik, JavaScript membaca value dari input lalu mengganti teks greetingText. Function di dalam addEventListener baru berjalan setelah event click terjadi.",
    },
    {
      id: "javascript-click-input-events-warning",
      type: "callout",
      variant: "tip",
      title: "Bedakan memilih elemen dan membaca value",
      content:
        "nameInput adalah elemen inputnya. nameInput.value adalah teks yang sedang diketik user. Kalau kamu butuh isi input, ambil property value, bukan elemen inputnya saja.",
    },
    {
      id: "javascript-click-input-events-coding-practice",
      type: "coding-practice",
      challengeId: "handle-click-input-greeting",
    },
    {
      id: "javascript-click-input-events-summary",
      type: "summary",
      points: [
        "Event adalah action yang terjadi di halaman, misalnya click.",
        "addEventListener memasang function yang berjalan saat event terjadi.",
        "input.value membaca teks yang diketik user.",
        "Berikutnya, kamu akan memakai pola event untuk form submit.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-click-input-events-intro",
      "javascript-click-input-events-core",
      "javascript-click-input-events-code-example",
      "javascript-click-input-events-warning",
      "javascript-click-input-events-coding-practice",
      "javascript-click-input-events-summary",
    ],
  },
};

export const javascriptFormSubmitBasicLesson: Lesson = {
  id: "javascript-form-submit-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-dom-events-forms-storage-fetch",
  title: "Form Submit Dasar",
  slug: "javascript-form-submit-basic",
  description:
    "Belajar menangani submit form, mencegah reload default, dan membaca value input.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami submit event pada form",
    "Memakai event.preventDefault agar halaman tidak reload",
    "Menampilkan hasil input setelah form dikirim",
  ],
  skillTags: ["JavaScript", "Forms", "Submit"],
  blocks: [
    {
      id: "javascript-form-submit-basic-intro",
      type: "text",
      title: "Form punya event khusus",
      content:
        "Tombol bisa memakai click, tetapi form biasanya lebih tepat memakai submit. Submit bisa terjadi saat user klik tombol submit atau menekan Enter di input. Karena itu, JavaScript form biasanya dipasang di elemen form, bukan hanya di tombol.",
    },
    {
      id: "javascript-form-submit-basic-core",
      type: "text",
      title: "Cegah reload sebelum mengolah input",
      content:
        "Browser punya behavior bawaan saat form dikirim: halaman bisa reload atau berpindah. Untuk form latihan di browser, kamu biasanya memakai event.preventDefault agar halaman tetap di tempat. Setelah itu, JavaScript bisa membaca input.value dan menampilkan hasilnya.",
    },
    {
      id: "javascript-form-submit-basic-code-example",
      type: "code-example",
      title: "Submit form sederhana",
      language: "js",
      code: `const noteForm = document.querySelector("#noteForm");
const noteInput = document.querySelector("#noteInput");
const resultText = document.querySelector("#resultText");

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  resultText.textContent = "Catatan: " + noteInput.value;
});`,
      explanation:
        "event.preventDefault mencegah behavior bawaan form. Setelah itu, noteInput.value dibaca dan ditampilkan ke resultText.",
    },
    {
      id: "javascript-form-submit-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Lupa preventDefault membuat hasil cepat hilang",
      content:
        "Kalau halaman reload setelah submit, perubahan teks yang baru dibuat JavaScript bisa hilang. Untuk latihan form di halaman yang sama, biasakan panggil event.preventDefault di awal submit handler.",
    },
    {
      id: "javascript-form-submit-basic-coding-practice",
      type: "coding-practice",
      challengeId: "handle-basic-form-submit",
    },
    {
      id: "javascript-form-submit-basic-summary",
      type: "summary",
      points: [
        "Submit event cocok untuk menangani form.",
        "event.preventDefault mencegah reload bawaan browser.",
        "Setelah submit dicegah, JavaScript bisa membaca value dan memperbarui UI.",
        "Berikutnya, kamu akan menyimpan value kecil dengan localStorage.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-form-submit-basic-intro",
      "javascript-form-submit-basic-core",
      "javascript-form-submit-basic-code-example",
      "javascript-form-submit-basic-common-mistake",
      "javascript-form-submit-basic-coding-practice",
      "javascript-form-submit-basic-summary",
    ],
  },
};

export const javascriptLocalStorageBasicLesson: Lesson = {
  id: "javascript-local-storage-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-dom-events-forms-storage-fetch",
  title: "localStorage Dasar",
  slug: "javascript-local-storage-basic",
  description:
    "Belajar menyimpan teks kecil di browser agar bisa dipakai lagi saat halaman dibuka.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami localStorage sebagai penyimpanan kecil di browser",
    "Menyimpan value dengan localStorage.setItem",
    "Membaca value dengan localStorage.getItem",
  ],
  skillTags: ["JavaScript", "localStorage", "Browser Storage"],
  blocks: [
    {
      id: "javascript-local-storage-basic-intro",
      type: "text",
      title: "Tidak semua data harus hilang langsung",
      content:
        "Sampai sini, perubahan UI hanya bertahan selama halaman sedang berjalan. Untuk data kecil seperti draft nama, preferensi tema, atau catatan latihan, browser menyediakan localStorage. Data ini disimpan sebagai teks dengan pasangan key dan value.",
    },
    {
      id: "javascript-local-storage-basic-core",
      type: "text",
      title: "setItem menyimpan, getItem membaca",
      content:
        "localStorage.setItem(\"key\", value) menyimpan data. localStorage.getItem(\"key\") membaca data yang pernah disimpan. Di aplikasi nyata, localStorage cocok untuk data ringan di browser, bukan data sensitif seperti password atau token rahasia.",
    },
    {
      id: "javascript-local-storage-basic-code-example",
      type: "code-example",
      title: "Menyimpan draft kecil",
      language: "js",
      code: `localStorage.setItem("draftName", "Rina");

const savedName = localStorage.getItem("draftName");
console.log(savedName);`,
      explanation:
        "draftName adalah key. \"Rina\" adalah value yang disimpan. Saat getItem memakai key yang sama, browser mengembalikan value yang pernah disimpan.",
    },
    {
      id: "javascript-local-storage-basic-warning",
      type: "callout",
      variant: "important",
      title: "Di practice, storage hanya untuk preview",
      content:
        "Practice workspace memakai preview sandbox. Pola localStorage yang kamu tulis sama, tetapi data penyimpanannya dipakai untuk latihan di preview, bukan sebagai database akun.",
    },
    {
      id: "javascript-local-storage-basic-coding-practice",
      type: "coding-practice",
      challengeId: "save-draft-with-local-storage",
    },
    {
      id: "javascript-local-storage-basic-summary",
      type: "summary",
      points: [
        "localStorage menyimpan data kecil di browser sebagai teks.",
        "setItem menyimpan value dengan key tertentu.",
        "getItem membaca value dari key yang sama.",
        "Jangan menyimpan data sensitif di localStorage.",
        "Berikutnya, kamu akan mengambil data contoh dengan fetch dan membaca JSON.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-local-storage-basic-intro",
      "javascript-local-storage-basic-core",
      "javascript-local-storage-basic-code-example",
      "javascript-local-storage-basic-warning",
      "javascript-local-storage-basic-coding-practice",
      "javascript-local-storage-basic-summary",
    ],
  },
};

export const javascriptFetchJsonBasicLesson: Lesson = {
  id: "javascript-fetch-json-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-dom-events-forms-storage-fetch",
  title: "Fetch dan JSON Dasar",
  slug: "javascript-fetch-json-basic",
  description:
    "Belajar mengambil data contoh dengan fetch, membaca JSON, dan menampilkannya di halaman.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Memahami fetch sebagai cara meminta data",
    "Mengenali JSON sebagai format data yang sering dikirim API",
    "Menampilkan data hasil fetch ke DOM",
  ],
  skillTags: ["JavaScript", "Fetch", "JSON", "DOM"],
  blocks: [
    {
      id: "javascript-fetch-json-basic-intro",
      type: "text",
      title: "Banyak UI memakai data dari luar halaman",
      content:
        "Di aplikasi web, data tidak selalu sudah ada di HTML. Daftar lesson, profil user, atau hasil pencarian sering diminta dari API. Untuk pemula, cukup pahami alur besarnya: fetch meminta data, response.json membaca isi JSON, lalu JavaScript menampilkan data itu ke DOM.",
    },
    {
      id: "javascript-fetch-json-basic-core",
      type: "text",
      title: "JSON adalah bentuk data yang bisa dibaca JavaScript",
      content:
        "JSON terlihat mirip object dan array JavaScript, tetapi dikirim sebagai teks. Setelah response.json selesai, JavaScript mendapatkan data yang bisa dipakai seperti array atau object biasa. Di lesson ini, data fetch tetap memakai sample aman di browser, bukan API eksternal.",
    },
    {
      id: "javascript-fetch-json-basic-code-example",
      type: "code-example",
      title: "Fetch data lalu render list",
      language: "js",
      code: `fetch(sampleDataUrl)
  .then((response) => response.json())
  .then((lessons) => {
    lessons.forEach((lesson) => {
      const item = document.createElement("li");
      item.textContent = lesson.title;
      lessonList.append(item);
    });
  });`,
      explanation:
        "fetch meminta data. response.json mengubah response menjadi data JavaScript. forEach membaca setiap lesson, membuat elemen li, lalu menambahkannya ke list.",
    },
    {
      id: "javascript-fetch-json-basic-warning",
      type: "callout",
      variant: "tip",
      title: "Mulai dari alur sukses dulu",
      content:
        "Fetch punya banyak detail seperti loading, error, timeout, dan status code. Di module ini kamu cukup mengenali alur dasar yang berhasil. Error handling yang lebih rapi akan dibahas lagi di JavaScript Advanced.",
    },
    {
      id: "javascript-fetch-json-basic-coding-practice",
      type: "coding-practice",
      challengeId: "fetch-json-render-list",
    },
    {
      id: "javascript-fetch-json-basic-summary",
      type: "summary",
      points: [
        "fetch dipakai untuk meminta data.",
        "response.json membaca data JSON dari response.",
        "Data hasil fetch bisa dirender ke DOM dengan loop.",
        "Uji Kompetensi berikutnya akan menggabungkan DOM, event, form, localStorage, fetch, dan JSON dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-fetch-json-basic-intro",
      "javascript-fetch-json-basic-core",
      "javascript-fetch-json-basic-code-example",
      "javascript-fetch-json-basic-warning",
      "javascript-fetch-json-basic-coding-practice",
      "javascript-fetch-json-basic-summary",
    ],
  },
};

export const javascriptDomEventsFormsStorageFetchAssessmentLesson: Lesson = {
  id: "javascript-dom-events-forms-storage-fetch-assessment",
  trackId: "frontend-engineering",
  moduleId: "javascript-dom-events-forms-storage-fetch",
  title: "Uji Kompetensi DOM, Events, Forms, localStorage, and Fetch Basics",
  slug: "javascript-dom-events-forms-storage-fetch-assessment",
  description:
    "Checkpoint akhir untuk mengecek kesiapan membuat interaksi browser sederhana sebelum Local Vanilla JavaScript App.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 65,
  objectives: [
    "Mengecek kemampuan memilih dan mengubah DOM",
    "Mengecek event, form submit, dan localStorage dasar",
    "Mengecek fetch JSON dasar dan readiness menuju project lokal",
  ],
  skillTags: ["JavaScript", "DOM", "Assessment", "Checkpoint"],
  blocks: [
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-recap",
      type: "text",
      title: "Checkpoint browser behavior",
      content:
        "Module ini menghubungkan JavaScript ke halaman browser. Kamu memilih elemen DOM, merespons event, membaca form, menyimpan data kecil dengan localStorage, dan mengambil data contoh dengan fetch JSON. Checkpoint ini memastikan kamu siap membawa pola itu ke project lokal.",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-scope",
      type: "callout",
      variant: "important",
      title: "Yang dicek di checkpoint ini",
      content:
        "Fokusnya adalah interaksi kecil yang bisa dipahami: pilih elemen, dengarkan event, cegah submit default, simpan satu value, dan render data hasil fetch. Kamu belum perlu membuat arsitektur app besar atau error handling async yang kompleks.",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-quiz",
      type: "quiz",
      quizId: "javascript-dom-events-forms-storage-fetch-assessment-quiz",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-browser-behavior-checkpoint",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-docs",
      type: "documentation-bridge",
      title: "Baca MDN untuk DOM dan browser APIs",
      description:
        "Gunakan dokumentasi ini untuk mengenali istilah resmi sebelum masuk Local Vanilla JavaScript App.",
      links: [
        {
          source: "MDN Web Docs",
          title: "DOM scripting introduction",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting",
          focus: [
            "DOM sebagai cara JavaScript membaca halaman",
            "contoh memilih elemen",
            "contoh mengubah isi halaman",
          ],
          ignoreForNow: ["manipulasi DOM yang panjang", "contoh project besar"],
        },
        {
          source: "MDN Web Docs",
          title: "Document.querySelector",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",
          focus: [
            "querySelector menerima selector CSS",
            "hasilnya satu elemen pertama yang cocok",
            "contoh selector sederhana",
          ],
          ignoreForNow: ["selector kompleks", "CSS.escape", "pseudo-element"],
        },
        {
          source: "MDN Web Docs",
          title: "EventTarget.addEventListener",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
          focus: [
            "nama event seperti click dan submit",
            "function yang dijalankan saat event terjadi",
            "contoh addEventListener sederhana",
          ],
          ignoreForNow: ["options lanjutan", "event propagation detail", "removeEventListener"],
        },
        {
          source: "MDN Web Docs",
          title: "Window.localStorage",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          focus: [
            "localStorage menyimpan key dan value",
            "setItem dan getItem",
            "data tersimpan sebagai string",
          ],
          ignoreForNow: ["quota", "storage event", "privacy edge cases"],
        },
        {
          source: "MDN Web Docs",
          title: "Using the Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
          focus: [
            "fetch mengirim request",
            "response.json membaca JSON",
            "alur promise dasar",
          ],
          ignoreForNow: ["streaming", "upload file", "AbortController"],
        },
      ],
      followUpAction:
        "Pilih satu halaman MDN di atas, lalu cocokkan satu istilah di docs dengan kode practice checkpoint yang baru kamu kerjakan.",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-summary",
      type: "summary",
      points: [
        "Kamu sudah mengecek readiness untuk membuat interaksi browser dasar.",
        "Jika event atau form masih membingungkan, review lesson Event Click dan Form Submit sebelum lanjut.",
        "Jika fetch masih terasa cepat, fokus dulu pada pola fetch -> response.json -> render data.",
        "Berikutnya, Local Vanilla JavaScript App akan membawa DOM, event, storage, dan fetch ke project lokal di device kamu.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-dom-events-forms-storage-fetch-assessment-recap",
      "javascript-dom-events-forms-storage-fetch-assessment-scope",
      "javascript-dom-events-forms-storage-fetch-assessment-quiz",
      "javascript-dom-events-forms-storage-fetch-assessment-coding-practice",
      "javascript-dom-events-forms-storage-fetch-assessment-docs",
      "javascript-dom-events-forms-storage-fetch-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const javascriptDomEventsFormsStorageFetchAssessmentQuiz: Quiz = {
  id: "javascript-dom-events-forms-storage-fetch-assessment-quiz",
  lessonId: "javascript-dom-events-forms-storage-fetch-assessment",
  title: "Uji Kompetensi DOM, Events, Forms, localStorage, and Fetch Basics",
  passingScore: 70,
  questions: [
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-q1",
      type: "multiple-choice",
      question:
        "Kamu ingin memilih elemen dengan id=\"result\" agar teksnya bisa diubah. Kode mana yang paling tepat?",
      options: [
        `document.querySelector("#result")`,
        `document.querySelector(".result")`,
        `localStorage.getItem("result")`,
        `fetch("#result")`,
      ],
      correctAnswer: `document.querySelector("#result")`,
      explanation:
        "Elemen dengan id dipilih memakai selector #. querySelector dipakai untuk memilih elemen DOM, bukan localStorage atau fetch.",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-q2",
      type: "multiple-choice",
      question:
        "Mengapa form handler biasanya memanggil event.preventDefault() saat latihan submit di halaman yang sama?",
      options: [
        "Agar halaman tidak reload sebelum JavaScript menampilkan hasil",
        "Agar input otomatis berubah menjadi JSON",
        "Agar localStorage terhapus",
        "Agar fetch berjalan lebih cepat",
      ],
      correctAnswer: "Agar halaman tidak reload sebelum JavaScript menampilkan hasil",
      explanation:
        "preventDefault mencegah behavior bawaan form. Setelah itu JavaScript bisa membaca value dan memperbarui UI tanpa reload.",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-q3",
      type: "code-output",
      question: "Apa output dari kode berikut?",
      code: `const input = { value: "Rina" };
const message = "Halo, " + input.value;

console.log(message);`,
      options: ["Halo, Rina", "input.value", "Rina Halo", "undefined"],
      correctAnswer: "Halo, Rina",
      explanation:
        "input.value berisi \"Rina\". String \"Halo, \" digabung dengan value itu sehingga outputnya \"Halo, Rina\".",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-q4",
      type: "multiple-choice",
      question:
        "Kamu ingin menyimpan draft teks kecil di browser dengan key \"draft\". Method mana yang dipakai?",
      options: [
        `localStorage.setItem("draft", value)`,
        `localStorage.fetch("draft", value)`,
        `document.querySelector("draft", value)`,
        `response.json("draft", value)`,
      ],
      correctAnswer: `localStorage.setItem("draft", value)`,
      explanation:
        "setItem menyimpan value dengan key tertentu. getItem dipakai nanti untuk membaca value dari key yang sama.",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-q5",
      type: "multiple-choice",
      question:
        "Dalam alur fetch dasar, langkah apa yang biasanya dipakai untuk membaca isi response sebagai JSON?",
      options: ["response.json()", "document.json()", "localStorage.json()", "event.json()"],
      correctAnswer: "response.json()",
      explanation:
        "fetch mengembalikan response. Untuk membaca body response sebagai JSON, kamu memakai response.json().",
    },
    {
      id: "javascript-dom-events-forms-storage-fetch-assessment-q6",
      type: "multiple-choice",
      question:
        "Urutan mana yang paling menggambarkan rendering data fetch ke halaman?",
      options: [
        "fetch data, baca JSON, loop data, buat elemen, append ke list",
        "buat elemen, hapus form, reload halaman, baru fetch data",
        "simpan CSS, baca HTML, ubah file lokal, submit form",
        "localStorage, preventDefault, querySelector, tanpa data",
      ],
      correctAnswer: "fetch data, baca JSON, loop data, buat elemen, append ke list",
      explanation:
        "Alur dasar fetch UI adalah mengambil data, membaca JSON, lalu menampilkan data ke DOM dengan elemen yang dibuat atau diperbarui.",
    },
  ],
};

export const updateDomTextBasicChallenge: CodingChallenge = {
  id: "update-dom-text-basic",
  lessonId: "javascript-dom-selection-basic",
  title: "Mengubah teks halaman dengan DOM",
  description:
    "Latihan memilih elemen dan mengganti teks yang terlihat di preview.",
  instructions: [
    "Fokus di tab JS. HTML dan CSS sudah menyiapkan elemen yang perlu dipilih.",
    "Pilih elemen #headline dan simpan ke variable headline.",
    "Pilih elemen #statusText dan simpan ke variable statusText.",
    "Ubah headline.textContent menjadi \"Belajar DOM dari JavaScript\".",
    "Ubah statusText.textContent menjadi \"Teks diubah lewat JavaScript.\".",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <p class="eyebrow">DOM practice</p>
  <h1 id="headline">Teks awal</h1>
  <p id="statusText">Status awal.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

.eyebrow {
  color: #0f766e;
  font-weight: 700;
}`,
    js: `const headline = null;
const statusText = null;

// Pilih elemen lalu ubah textContent.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <p class="eyebrow">DOM practice</p>
  <h1 id="headline">Teks awal</h1>
  <p id="statusText">Status awal.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

.eyebrow {
  color: #0f766e;
  font-weight: 700;
}`,
    js: `const headline = document.querySelector("#headline");
const statusText = document.querySelector("#statusText");

headline.textContent = "Belajar DOM dari JavaScript";
statusText.textContent = "Teks diubah lewat JavaScript.";`,
  },
  checklist: [
    "Selector memakai # karena elemen dipilih lewat id.",
    "textContent mengubah teks yang terlihat di preview.",
    "Preview menampilkan headline dan status baru.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "headline-query",
        label: "headline dipilih dengan querySelector.",
        type: "contains",
        target: `const headline = document.querySelector("#headline");`,
        valueIncludes: `const headline = document.querySelector("#headline");`,
      },
      {
        id: "status-query",
        label: "statusText dipilih dengan querySelector.",
        type: "contains",
        target: `const statusText = document.querySelector("#statusText");`,
        valueIncludes: `const statusText = document.querySelector("#statusText");`,
      },
      {
        id: "headline-text",
        label: "headline textContent diubah.",
        type: "contains",
        target: `headline.textContent = "Belajar DOM dari JavaScript";`,
        valueIncludes: `headline.textContent = "Belajar DOM dari JavaScript";`,
      },
      {
        id: "status-text",
        label: "statusText textContent diubah.",
        type: "contains",
        target: `statusText.textContent = "Teks diubah lewat JavaScript.";`,
        valueIncludes: `statusText.textContent = "Teks diubah lewat JavaScript.";`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview yang diharapkan",
    description:
      "Preview menampilkan headline \"Belajar DOM dari JavaScript\" dan status \"Teks diubah lewat JavaScript.\".",
  },
  skillTags: ["JavaScript", "DOM", "querySelector"],
};

export const handleClickInputGreetingChallenge: CodingChallenge = {
  id: "handle-click-input-greeting",
  lessonId: "javascript-click-input-events",
  title: "Membuat greeting dari input",
  description:
    "Latihan merespons klik tombol dan membaca value input.",
  instructions: [
    "Fokus di tab JS.",
    "Pilih #nameInput, #greetingButton, dan #greetingText.",
    "Pasang addEventListener pada greetingButton untuk event click.",
    "Di dalam click handler, simpan nameInput.value ke variable name.",
    "Ubah greetingText.textContent menjadi \"Halo, \" + name.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Greeting kecil</h1>
  <label for="nameInput">Nama</label>
  <input id="nameInput" value="Rina" />
  <button id="greetingButton" type="button">Tampilkan greeting</button>
  <p id="greetingText">Greeting akan muncul di sini.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const nameInput = null;
const greetingButton = null;
const greetingText = null;

// Tambahkan click listener di sini.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Greeting kecil</h1>
  <label for="nameInput">Nama</label>
  <input id="nameInput" value="Rina" />
  <button id="greetingButton" type="button">Tampilkan greeting</button>
  <p id="greetingText">Greeting akan muncul di sini.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const greetingText = document.querySelector("#greetingText");

greetingButton.addEventListener("click", () => {
  const name = nameInput.value;
  greetingText.textContent = "Halo, " + name;
});`,
  },
  checklist: [
    "Click listener dipasang pada tombol.",
    "Input dibaca dengan property value.",
    "Preview menampilkan greeting setelah tombol diklik.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "name-input-query",
        label: "nameInput dipilih dari DOM.",
        type: "contains",
        target: `const nameInput = document.querySelector("#nameInput");`,
        valueIncludes: `const nameInput = document.querySelector("#nameInput");`,
      },
      {
        id: "button-query",
        label: "greetingButton dipilih dari DOM.",
        type: "contains",
        target: `const greetingButton = document.querySelector("#greetingButton");`,
        valueIncludes: `const greetingButton = document.querySelector("#greetingButton");`,
      },
      {
        id: "click-listener",
        label: "Ada click listener pada greetingButton.",
        type: "contains",
        target: `greetingButton.addEventListener("click", () => {`,
        valueIncludes: `greetingButton.addEventListener("click", () => {`,
      },
      {
        id: "input-value",
        label: "Value input disimpan ke variable name.",
        type: "contains",
        target: `const name = nameInput.value;`,
        valueIncludes: `const name = nameInput.value;`,
      },
      {
        id: "greeting-output",
        label: "Greeting ditampilkan lewat textContent.",
        type: "contains",
        target: `greetingText.textContent = "Halo, " + name;`,
        valueIncludes: `greetingText.textContent = "Halo, " + name;`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Behavior yang diharapkan",
    description:
      "Saat tombol diklik, teks preview berubah menjadi \"Halo, Rina\" atau mengikuti nama yang diketik.",
  },
  skillTags: ["JavaScript", "Events", "Input"],
};

export const handleBasicFormSubmitChallenge: CodingChallenge = {
  id: "handle-basic-form-submit",
  lessonId: "javascript-form-submit-basic",
  title: "Menangani submit form",
  description:
    "Latihan mencegah reload form dan menampilkan value input di halaman.",
  instructions: [
    "Fokus di tab JS.",
    "Pilih #noteForm, #noteInput, dan #resultText.",
    "Pasang submit listener pada noteForm.",
    "Panggil event.preventDefault() di awal handler.",
    "Tampilkan \"Catatan: \" + noteInput.value ke resultText.textContent.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Form catatan</h1>
  <form id="noteForm">
    <label for="noteInput">Catatan hari ini</label>
    <input id="noteInput" value="Belajar submit form" />
    <button type="submit">Simpan catatan</button>
  </form>
  <p id="resultText">Hasil submit akan muncul di sini.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const noteForm = null;
const noteInput = null;
const resultText = null;

// Tangani submit form di sini.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Form catatan</h1>
  <form id="noteForm">
    <label for="noteInput">Catatan hari ini</label>
    <input id="noteInput" value="Belajar submit form" />
    <button type="submit">Simpan catatan</button>
  </form>
  <p id="resultText">Hasil submit akan muncul di sini.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const noteForm = document.querySelector("#noteForm");
const noteInput = document.querySelector("#noteInput");
const resultText = document.querySelector("#resultText");

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  resultText.textContent = "Catatan: " + noteInput.value;
});`,
  },
  checklist: [
    "Submit listener dipasang pada form.",
    "preventDefault dipanggil agar preview tidak reload.",
    "Value input tampil sebagai hasil submit.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "form-query",
        label: "noteForm dipilih dari DOM.",
        type: "contains",
        target: `const noteForm = document.querySelector("#noteForm");`,
        valueIncludes: `const noteForm = document.querySelector("#noteForm");`,
      },
      {
        id: "submit-listener",
        label: "Ada submit listener pada noteForm.",
        type: "contains",
        target: `noteForm.addEventListener("submit", (event) => {`,
        valueIncludes: `noteForm.addEventListener("submit", (event) => {`,
      },
      {
        id: "prevent-default",
        label: "Submit default dicegah.",
        type: "contains",
        target: `event.preventDefault();`,
        valueIncludes: `event.preventDefault();`,
      },
      {
        id: "note-value",
        label: "noteInput.value dipakai untuk output.",
        type: "contains",
        target: `resultText.textContent = "Catatan: " + noteInput.value;`,
        valueIncludes: `resultText.textContent = "Catatan: " + noteInput.value;`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Behavior yang diharapkan",
    description:
      "Saat form disubmit, halaman tidak reload dan teks hasil menampilkan catatan dari input.",
  },
  skillTags: ["JavaScript", "Forms", "Submit"],
};

export const saveDraftWithLocalStorageChallenge: CodingChallenge = {
  id: "save-draft-with-local-storage",
  lessonId: "javascript-local-storage-basic",
  title: "Menyimpan draft dengan localStorage",
  description:
    "Latihan menyimpan dan membaca teks kecil dengan localStorage.",
  instructions: [
    "Fokus di tab JS.",
    "Pilih #draftInput, #saveButton, dan #savedText.",
    "Baca localStorage.getItem(\"lessonDraft\") ke variable savedDraft.",
    "Jika savedDraft ada, tampilkan \"Draft tersimpan: \" + savedDraft.",
    "Saat tombol diklik, simpan draftInput.value dengan localStorage.setItem(\"lessonDraft\", draft).",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Draft lesson</h1>
  <label for="draftInput">Catatan singkat</label>
  <input id="draftInput" value="Review DOM event" />
  <button id="saveButton" type="button">Simpan draft</button>
  <p id="savedText">Belum ada draft tersimpan.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const draftInput = null;
const saveButton = null;
const savedText = null;

// Baca dan simpan draft dengan localStorage.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Draft lesson</h1>
  <label for="draftInput">Catatan singkat</label>
  <input id="draftInput" value="Review DOM event" />
  <button id="saveButton" type="button">Simpan draft</button>
  <p id="savedText">Belum ada draft tersimpan.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const draftInput = document.querySelector("#draftInput");
const saveButton = document.querySelector("#saveButton");
const savedText = document.querySelector("#savedText");

const savedDraft = localStorage.getItem("lessonDraft");

if (savedDraft) {
  savedText.textContent = "Draft tersimpan: " + savedDraft;
}

saveButton.addEventListener("click", () => {
  const draft = draftInput.value;
  localStorage.setItem("lessonDraft", draft);
  savedText.textContent = "Draft tersimpan: " + draft;
});`,
  },
  checklist: [
    "localStorage.getItem membaca draft lama.",
    "localStorage.setItem menyimpan draft baru saat tombol diklik.",
    "Preview menampilkan draft yang disimpan.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "draft-input-query",
        label: "draftInput dipilih dari DOM.",
        type: "contains",
        target: `const draftInput = document.querySelector("#draftInput");`,
        valueIncludes: `const draftInput = document.querySelector("#draftInput");`,
      },
      {
        id: "saved-draft-get",
        label: "Draft dibaca dengan localStorage.getItem.",
        type: "contains",
        target: `const savedDraft = localStorage.getItem("lessonDraft");`,
        valueIncludes: `const savedDraft = localStorage.getItem("lessonDraft");`,
      },
      {
        id: "saved-draft-if",
        label: "Draft lama dicek sebelum ditampilkan.",
        type: "contains",
        target: `if (savedDraft) {`,
        valueIncludes: `if (savedDraft) {`,
      },
      {
        id: "save-button-click",
        label: "Ada click listener untuk menyimpan draft.",
        type: "contains",
        target: `saveButton.addEventListener("click", () => {`,
        valueIncludes: `saveButton.addEventListener("click", () => {`,
      },
      {
        id: "draft-set",
        label: "Draft disimpan dengan localStorage.setItem.",
        type: "contains",
        target: `localStorage.setItem("lessonDraft", draft);`,
        valueIncludes: `localStorage.setItem("lessonDraft", draft);`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Behavior yang diharapkan",
    description:
      "Saat tombol diklik, preview menampilkan \"Draft tersimpan: Review DOM event\" atau isi input terbaru.",
  },
  skillTags: ["JavaScript", "localStorage", "Browser Storage"],
};

export const fetchJsonRenderListChallenge: CodingChallenge = {
  id: "fetch-json-render-list",
  lessonId: "javascript-fetch-json-basic",
  title: "Fetch JSON lalu render list",
  description:
    "Latihan mengambil data contoh, membaca JSON, dan menampilkan list ke DOM.",
  instructions: [
    "Fokus di tab JS.",
    "Pilih #loadButton, #lessonList, dan #statusText.",
    "Saat loadButton diklik, ubah statusText menjadi \"Memuat data...\".",
    "Gunakan fetch(sampleDataUrl), lalu response.json().",
    "Loop lessons dengan forEach, buat elemen li, isi item.textContent dengan lesson.title, lalu append ke lessonList.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Daftar lesson</h1>
  <button id="loadButton" type="button">Muat data lesson</button>
  <p id="statusText">Data belum dimuat.</p>
  <ul id="lessonList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

button {
  padding: 10px 12px;
}`,
    js: `const sampleDataUrl = "data:application/json,%5B%7B%22title%22%3A%22DOM%20Selection%22%7D%2C%7B%22title%22%3A%22Event%20Click%22%7D%5D";

const loadButton = null;
const lessonList = null;
const statusText = null;

// Fetch data saat tombol diklik.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Daftar lesson</h1>
  <button id="loadButton" type="button">Muat data lesson</button>
  <p id="statusText">Data belum dimuat.</p>
  <ul id="lessonList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

button {
  padding: 10px 12px;
}`,
    js: `const sampleDataUrl = "data:application/json,%5B%7B%22title%22%3A%22DOM%20Selection%22%7D%2C%7B%22title%22%3A%22Event%20Click%22%7D%5D";

const loadButton = document.querySelector("#loadButton");
const lessonList = document.querySelector("#lessonList");
const statusText = document.querySelector("#statusText");

loadButton.addEventListener("click", () => {
  statusText.textContent = "Memuat data...";

  fetch(sampleDataUrl)
    .then((response) => response.json())
    .then((lessons) => {
      lessonList.innerHTML = "";

      lessons.forEach((lesson) => {
        const item = document.createElement("li");
        item.textContent = lesson.title;
        lessonList.append(item);
      });

      statusText.textContent = "Data berhasil dimuat.";
    });
});`,
  },
  checklist: [
    "fetch memakai sampleDataUrl.",
    "response.json membaca data JSON.",
    "Setiap lesson dirender menjadi elemen li.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "load-button-query",
        label: "loadButton dipilih dari DOM.",
        type: "contains",
        target: `const loadButton = document.querySelector("#loadButton");`,
        valueIncludes: `const loadButton = document.querySelector("#loadButton");`,
      },
      {
        id: "load-click",
        label: "Ada click listener untuk memuat data.",
        type: "contains",
        target: `loadButton.addEventListener("click", () => {`,
        valueIncludes: `loadButton.addEventListener("click", () => {`,
      },
      {
        id: "fetch-sample",
        label: "Data diminta dengan fetch(sampleDataUrl).",
        type: "contains",
        target: `fetch(sampleDataUrl)`,
        valueIncludes: `fetch(sampleDataUrl)`,
      },
      {
        id: "response-json",
        label: "Response dibaca sebagai JSON.",
        type: "contains",
        target: `.then((response) => response.json())`,
        valueIncludes: `.then((response) => response.json())`,
      },
      {
        id: "lessons-for-each",
        label: "Data lesson dibaca dengan forEach.",
        type: "contains",
        target: `lessons.forEach((lesson) => {`,
        valueIncludes: `lessons.forEach((lesson) => {`,
      },
      {
        id: "create-list-item",
        label: "Setiap lesson dibuat menjadi elemen li.",
        type: "contains",
        target: `const item = document.createElement("li");`,
        valueIncludes: `const item = document.createElement("li");`,
      },
      {
        id: "append-list-item",
        label: "Elemen li ditambahkan ke lessonList.",
        type: "contains",
        target: `lessonList.append(item);`,
        valueIncludes: `lessonList.append(item);`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Behavior yang diharapkan",
    description:
      "Saat tombol diklik, status berubah menjadi berhasil dan list menampilkan DOM Selection serta Event Click.",
  },
  skillTags: ["JavaScript", "Fetch", "JSON", "DOM"],
};

export const buildBrowserBehaviorCheckpointChallenge: CodingChallenge = {
  id: "build-browser-behavior-checkpoint",
  lessonId: "javascript-dom-events-forms-storage-fetch-assessment",
  title: "Membangun checkpoint interaksi browser",
  description:
    "Checkpoint praktik yang menggabungkan form submit, DOM update, localStorage, fetch, dan render list.",
  instructions: [
    "Fokus di tab JS.",
    "Pilih #goalForm, #goalInput, #goalResult, #loadTipsButton, #tipsList, dan #statusText.",
    "Saat goalForm submit, panggil event.preventDefault().",
    "Simpan goalInput.value ke localStorage dengan key \"lastGoal\" dan tampilkan goal tersebut di goalResult.",
    "Saat loadTipsButton diklik, fetch sampleTipsUrl, baca response.json(), lalu render setiap tips menjadi li di tipsList.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Rencana belajar JavaScript</h1>
  <form id="goalForm">
    <label for="goalInput">Target belajar</label>
    <input id="goalInput" value="Latihan DOM setiap hari" />
    <button type="submit">Simpan target</button>
  </form>
  <p id="goalResult">Target belum disimpan.</p>
  <button id="loadTipsButton" type="button">Muat tips belajar</button>
  <p id="statusText">Tips belum dimuat.</p>
  <ul id="tipsList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const sampleTipsUrl = "data:application/json,%5B%7B%22title%22%3A%22Pilih%20elemen%20DOM%20dulu%22%7D%2C%7B%22title%22%3A%22Tangani%20event%20dengan%20function%20kecil%22%7D%5D";

const goalForm = null;
const goalInput = null;
const goalResult = null;
const loadTipsButton = null;
const tipsList = null;
const statusText = null;

// Gabungkan form submit, localStorage, fetch, dan render list.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Rencana belajar JavaScript</h1>
  <form id="goalForm">
    <label for="goalInput">Target belajar</label>
    <input id="goalInput" value="Latihan DOM setiap hari" />
    <button type="submit">Simpan target</button>
  </form>
  <p id="goalResult">Target belum disimpan.</p>
  <button id="loadTipsButton" type="button">Muat tips belajar</button>
  <p id="statusText">Tips belum dimuat.</p>
  <ul id="tipsList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

input,
button {
  display: block;
  margin-top: 10px;
  padding: 10px 12px;
}`,
    js: `const sampleTipsUrl = "data:application/json,%5B%7B%22title%22%3A%22Pilih%20elemen%20DOM%20dulu%22%7D%2C%7B%22title%22%3A%22Tangani%20event%20dengan%20function%20kecil%22%7D%5D";

const goalForm = document.querySelector("#goalForm");
const goalInput = document.querySelector("#goalInput");
const goalResult = document.querySelector("#goalResult");
const loadTipsButton = document.querySelector("#loadTipsButton");
const tipsList = document.querySelector("#tipsList");
const statusText = document.querySelector("#statusText");

goalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const goal = goalInput.value;
  localStorage.setItem("lastGoal", goal);
  goalResult.textContent = "Target tersimpan: " + goal;
});

loadTipsButton.addEventListener("click", () => {
  statusText.textContent = "Memuat tips...";

  fetch(sampleTipsUrl)
    .then((response) => response.json())
    .then((tips) => {
      tipsList.innerHTML = "";

      tips.forEach((tip) => {
        const item = document.createElement("li");
        item.textContent = tip.title;
        tipsList.append(item);
      });

      statusText.textContent = "Tips berhasil dimuat.";
    });
});`,
  },
  checklist: [
    "Form submit menyimpan target tanpa reload.",
    "localStorage menyimpan target dengan key lastGoal.",
    "Fetch membaca sample tips dan merendernya ke list.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "goal-form-query",
        label: "goalForm dipilih dari DOM.",
        type: "contains",
        target: `const goalForm = document.querySelector("#goalForm");`,
        valueIncludes: `const goalForm = document.querySelector("#goalForm");`,
      },
      {
        id: "tips-button-query",
        label: "loadTipsButton dipilih dari DOM.",
        type: "contains",
        target: `const loadTipsButton = document.querySelector("#loadTipsButton");`,
        valueIncludes: `const loadTipsButton = document.querySelector("#loadTipsButton");`,
      },
      {
        id: "goal-submit-listener",
        label: "Form punya submit listener.",
        type: "contains",
        target: `goalForm.addEventListener("submit", (event) => {`,
        valueIncludes: `goalForm.addEventListener("submit", (event) => {`,
      },
      {
        id: "goal-prevent-default",
        label: "Submit default dicegah.",
        type: "contains",
        target: `event.preventDefault();`,
        valueIncludes: `event.preventDefault();`,
      },
      {
        id: "goal-storage",
        label: "Target disimpan ke localStorage.",
        type: "contains",
        target: `localStorage.setItem("lastGoal", goal);`,
        valueIncludes: `localStorage.setItem("lastGoal", goal);`,
      },
      {
        id: "tips-click-listener",
        label: "Tombol tips punya click listener.",
        type: "contains",
        target: `loadTipsButton.addEventListener("click", () => {`,
        valueIncludes: `loadTipsButton.addEventListener("click", () => {`,
      },
      {
        id: "fetch-tips",
        label: "Tips diminta dengan fetch(sampleTipsUrl).",
        type: "contains",
        target: `fetch(sampleTipsUrl)`,
        valueIncludes: `fetch(sampleTipsUrl)`,
      },
      {
        id: "tips-json",
        label: "Response tips dibaca sebagai JSON.",
        type: "contains",
        target: `.then((response) => response.json())`,
        valueIncludes: `.then((response) => response.json())`,
      },
      {
        id: "tips-for-each",
        label: "Tips dirender dengan forEach.",
        type: "contains",
        target: `tips.forEach((tip) => {`,
        valueIncludes: `tips.forEach((tip) => {`,
      },
      {
        id: "tips-append",
        label: "Item tips ditambahkan ke tipsList.",
        type: "contains",
        target: `tipsList.append(item);`,
        valueIncludes: `tipsList.append(item);`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Behavior yang diharapkan",
    description:
      "Submit form menampilkan target tersimpan. Tombol tips memuat dua tips dan menampilkannya sebagai list.",
  },
  skillTags: ["JavaScript", "DOM", "Forms", "localStorage", "Fetch"],
};
