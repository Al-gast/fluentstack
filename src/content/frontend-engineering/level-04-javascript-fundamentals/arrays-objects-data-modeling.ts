import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const javascriptArraysObjectsDataModelingModule: Module = {
  id: "javascript-arrays-objects-data-modeling",
  trackId: "frontend-engineering",
  title: "Arrays, Objects, and Data Modeling",
  slug: "javascript-arrays-objects-data-modeling",
  description:
    "Membentuk data UI sederhana dengan array, object, array of objects, map, dan filter.",
  order: 11,
  lessonIds: [
    "javascript-array-data-ui",
    "javascript-object-single-item",
    "javascript-array-of-objects",
    "javascript-map-filter-data-transform",
    "javascript-arrays-objects-data-modeling-assessment",
  ],
  estimatedHours: 5,
  skillTags: ["JavaScript", "Arrays", "Objects", "Data Modeling"],
};

export const javascriptArrayDataUiLesson: Lesson = {
  id: "javascript-array-data-ui",
  trackId: "frontend-engineering",
  moduleId: "javascript-arrays-objects-data-modeling",
  title: "Array Dasar untuk Data UI",
  slug: "javascript-array-data-ui",
  description:
    "Belajar menyimpan beberapa value yang sejenis di dalam array untuk kebutuhan UI.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 30,
  objectives: [
    "Memahami array sebagai list value",
    "Membaca item array dengan index",
    "Memakai length untuk mengetahui jumlah item",
  ],
  skillTags: ["JavaScript", "Arrays", "UI Data"],
  blocks: [
    {
      id: "javascript-array-data-ui-intro",
      type: "text",
      title: "UI sering punya data berbentuk daftar",
      content:
        "Di module sebelumnya, kamu menyimpan satu value di satu variable. Di halaman web nyata, data sering berbentuk daftar: label navigasi, tag artikel, nama lesson, atau item checklist. Array membantu JavaScript menyimpan beberapa value di satu tempat.",
    },
    {
      id: "javascript-array-data-ui-core",
      type: "text",
      title: "Array menyimpan value secara berurutan",
      content:
        "Array ditulis dengan kurung siku. Setiap item punya posisi yang disebut index. JavaScript mulai menghitung index dari 0, jadi item pertama berada di index 0. Untuk mengetahui jumlah item, kamu bisa membaca property length.",
    },
    {
      id: "javascript-array-data-ui-code-example",
      type: "code-example",
      title: "List label navigasi",
      language: "js",
      code: `const navigationLabels = ["Dashboard", "Lessons", "Profile"];

console.log(navigationLabels[0]);
console.log(navigationLabels.length);`,
      explanation:
        "navigationLabels menyimpan tiga string. navigationLabels[0] membaca item pertama, yaitu \"Dashboard\". navigationLabels.length memberi jumlah item di dalam array.",
    },
    {
      id: "javascript-array-data-ui-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Item pertama bukan index 1",
      content:
        "Saat baru belajar array, kesalahan yang sering muncul adalah membaca item pertama dengan index 1. Di JavaScript, item pertama ada di index 0. Index 1 berarti item kedua.",
    },
    {
      id: "javascript-array-data-ui-quick-check",
      type: "quick-check",
      question:
        "Kalau kamu ingin menyimpan tiga label navigasi dalam satu variable, struktur data apa yang paling cocok?",
      options: ["Array", "Satu string panjang", "Boolean", "File CSS"],
      correctAnswer: "Array",
      explanation:
        "Array cocok untuk menyimpan beberapa value yang sejenis, misalnya beberapa label navigasi.",
    },
    {
      id: "javascript-array-data-ui-coding-practice",
      type: "coding-practice",
      challengeId: "inspect-js-array-values",
    },
    {
      id: "javascript-array-data-ui-summary",
      type: "summary",
      points: [
        "Array menyimpan beberapa value di satu variable.",
        "Array cocok untuk data UI yang berbentuk daftar.",
        "Index array dimulai dari 0.",
        "length memberi jumlah item di dalam array.",
        "Berikutnya, kamu akan belajar object untuk menyimpan beberapa informasi tentang satu item.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-array-data-ui-intro",
      "javascript-array-data-ui-core",
      "javascript-array-data-ui-code-example",
      "javascript-array-data-ui-common-mistake",
      "javascript-array-data-ui-quick-check",
      "javascript-array-data-ui-coding-practice",
      "javascript-array-data-ui-summary",
    ],
  },
};

export const javascriptObjectSingleItemLesson: Lesson = {
  id: "javascript-object-single-item",
  trackId: "frontend-engineering",
  moduleId: "javascript-arrays-objects-data-modeling",
  title: "Object Dasar untuk Satu Item",
  slug: "javascript-object-single-item",
  description:
    "Belajar memakai object untuk menyimpan beberapa informasi tentang satu item UI.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami object sebagai data untuk satu item",
    "Mengenali property sebagai pasangan nama dan value",
    "Membaca property object dengan dot notation",
  ],
  skillTags: ["JavaScript", "Objects", "UI Data"],
  blocks: [
    {
      id: "javascript-object-single-item-intro",
      type: "text",
      title: "Satu item biasanya punya beberapa informasi",
      content:
        "Array cocok untuk daftar value. Tetapi satu card lesson tidak hanya punya satu value. Card bisa punya title, estimasi waktu, status wajib, dan label level. Untuk menyimpan beberapa informasi tentang satu item, JavaScript memakai object.",
    },
    {
      id: "javascript-object-single-item-core",
      type: "text",
      title: "Object berisi property",
      content:
        "Object ditulis dengan kurung kurawal. Di dalamnya ada property. Property adalah nama yang menunjuk ke value. Contohnya title menunjuk ke teks judul, estimatedMinutes menunjuk ke angka, dan isRequired menunjuk ke boolean.",
    },
    {
      id: "javascript-object-single-item-code-example",
      type: "code-example",
      title: "Object untuk card lesson",
      language: "js",
      code: `const lessonCard = {
  title: "Array Dasar untuk Data UI",
  estimatedMinutes: 30,
  isRequired: true,
};

console.log(lessonCard.title);
console.log(lessonCard.estimatedMinutes);`,
      explanation:
        "lessonCard adalah satu object. title, estimatedMinutes, dan isRequired adalah property. lessonCard.title membaca value dari property title.",
    },
    {
      id: "javascript-object-single-item-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Nama property harus konsisten",
      content:
        "Kalau object punya property estimatedMinutes, maka kode harus membaca lessonCard.estimatedMinutes. Menulis lessonCard.minutes tidak akan membaca value yang sama karena property itu tidak ada.",
    },
    {
      id: "javascript-object-single-item-quick-check",
      type: "quick-check",
      question: "Pada kode lessonCard.title, bagian mana yang dibaca dari object?",
      options: ["Property title", "Nama file HTML", "Warna card", "Jumlah item array"],
      correctAnswer: "Property title",
      explanation:
        "Dot notation membaca property dari object. lessonCard.title berarti baca property title dari object lessonCard.",
    },
    {
      id: "javascript-object-single-item-coding-practice",
      type: "coding-practice",
      challengeId: "model-js-card-object",
    },
    {
      id: "javascript-object-single-item-summary",
      type: "summary",
      points: [
        "Object cocok untuk menyimpan beberapa informasi tentang satu item.",
        "Property adalah nama yang menunjuk ke value di dalam object.",
        "Dot notation membaca property, misalnya lessonCard.title.",
        "Nama property harus konsisten agar data bisa dibaca dengan benar.",
        "Berikutnya, kamu akan menggabungkan array dan object untuk membuat list data yang lebih realistis.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-object-single-item-intro",
      "javascript-object-single-item-core",
      "javascript-object-single-item-code-example",
      "javascript-object-single-item-common-mistake",
      "javascript-object-single-item-quick-check",
      "javascript-object-single-item-coding-practice",
      "javascript-object-single-item-summary",
    ],
  },
};

export const javascriptArrayOfObjectsLesson: Lesson = {
  id: "javascript-array-of-objects",
  trackId: "frontend-engineering",
  moduleId: "javascript-arrays-objects-data-modeling",
  title: "Array of Objects",
  slug: "javascript-array-of-objects",
  description:
    "Belajar menyimpan beberapa item UI terstruktur dengan array of objects.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami array of objects sebagai list item terstruktur",
    "Membaca property dari object di dalam array",
    "Mengenali pola data yang siap dipakai untuk card atau list UI",
  ],
  skillTags: ["JavaScript", "Array of Objects", "Data Modeling"],
  blocks: [
    {
      id: "javascript-array-of-objects-intro",
      type: "text",
      title: "List UI biasanya berisi item yang terstruktur",
      content:
        "Setelah memahami array dan object secara terpisah, kamu bisa menggabungkannya. Array of objects adalah array yang berisi beberapa object. Pola ini sering dipakai untuk data card, daftar task, daftar produk, daftar lesson, dan menu aplikasi.",
    },
    {
      id: "javascript-array-of-objects-core",
      type: "text",
      title: "Setiap object mewakili satu item",
      content:
        "Bayangkan satu card lesson sebagai satu object. Kalau halaman punya beberapa card, kamu bisa menyimpannya sebagai array. Dengan begitu, setiap item tetap punya property sendiri seperti title, duration, dan required.",
    },
    {
      id: "javascript-array-of-objects-code-example",
      type: "code-example",
      title: "List lesson card",
      language: "js",
      code: `const lessonCards = [
  {
    title: "Array Dasar untuk Data UI",
    duration: 30,
    required: true,
  },
  {
    title: "Object Dasar untuk Satu Item",
    duration: 35,
    required: true,
  },
];

console.log(lessonCards[0].title);`,
      explanation:
        "lessonCards adalah array. Item pertamanya adalah object. lessonCards[0].title membaca property title dari object pertama.",
    },
    {
      id: "javascript-array-of-objects-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memisah data yang sebenarnya satu item",
      content:
        "Kalau title, duration, dan required adalah informasi untuk card yang sama, simpan dalam satu object. Hindari membuat tiga array terpisah yang harus dicocokkan manual berdasarkan index, karena mudah tidak sinkron.",
    },
    {
      id: "javascript-array-of-objects-quick-check",
      type: "quick-check",
      question:
        "Struktur mana yang paling cocok untuk menyimpan beberapa card lesson, masing-masing punya title dan duration?",
      options: ["Array of objects", "Satu boolean", "Satu angka", "Satu selector CSS"],
      correctAnswer: "Array of objects",
      explanation:
        "Array of objects cocok ketika kamu punya list, dan setiap item di list punya beberapa informasi.",
    },
    {
      id: "javascript-array-of-objects-coding-practice",
      type: "coding-practice",
      challengeId: "build-js-array-of-objects",
    },
    {
      id: "javascript-array-of-objects-summary",
      type: "summary",
      points: [
        "Array of objects menyimpan beberapa item yang masing-masing punya property.",
        "Pola ini sering dipakai untuk list card, task, produk, atau lesson.",
        "Baca item dengan index, lalu baca property dengan dot notation.",
        "Simpan data yang saling terkait di object yang sama.",
        "Berikutnya, kamu akan memakai map dan filter untuk membentuk data sebelum ditampilkan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-array-of-objects-intro",
      "javascript-array-of-objects-core",
      "javascript-array-of-objects-code-example",
      "javascript-array-of-objects-common-mistake",
      "javascript-array-of-objects-quick-check",
      "javascript-array-of-objects-coding-practice",
      "javascript-array-of-objects-summary",
    ],
  },
};

export const javascriptMapFilterDataTransformLesson: Lesson = {
  id: "javascript-map-filter-data-transform",
  trackId: "frontend-engineering",
  moduleId: "javascript-arrays-objects-data-modeling",
  title: "map, filter, dan Data Transformasi Dasar",
  slug: "javascript-map-filter-data-transform",
  description:
    "Belajar memakai map dan filter untuk membentuk data sederhana sebelum dipakai UI.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Memahami transformasi data untuk kebutuhan UI",
    "Memakai map untuk membuat array baru dari array lama",
    "Memakai filter untuk mengambil item yang memenuhi kondisi",
  ],
  skillTags: ["JavaScript", "map", "filter", "Data Transformation"],
  blocks: [
    {
      id: "javascript-map-filter-data-transform-intro",
      type: "text",
      title: "Data mentah sering perlu dibentuk dulu",
      content:
        "Array of objects membuat data lebih rapi, tetapi UI sering tidak memakai data mentah apa adanya. Kadang kamu hanya butuh title, kadang hanya butuh item wajib, kadang perlu membuat label singkat. Transformasi data adalah proses membentuk data agar siap dipakai UI.",
    },
    {
      id: "javascript-map-filter-data-transform-map",
      type: "text",
      title: "map membuat array baru",
      content:
        "map membaca setiap item di array dan mengembalikan array baru. Gunakan map saat jumlah item tetap sama, tetapi bentuk value yang dibutuhkan berubah. Contohnya dari list object lesson menjadi list title lesson.",
    },
    {
      id: "javascript-map-filter-data-transform-filter",
      type: "text",
      title: "filter memilih sebagian item",
      content:
        "filter juga membaca setiap item, tetapi hanya menyimpan item yang memenuhi kondisi. Gunakan filter saat kamu ingin menampilkan sebagian data, misalnya hanya lesson wajib atau hanya task yang belum selesai.",
    },
    {
      id: "javascript-map-filter-data-transform-code-example",
      type: "code-example",
      title: "Membentuk data untuk UI",
      language: "js",
      code: `const lessons = [
  { title: "Array Dasar", required: true },
  { title: "Object Dasar", required: true },
  { title: "Catatan tambahan", required: false },
];

const lessonTitles = lessons.map((lesson) => lesson.title);
const requiredLessons = lessons.filter((lesson) => lesson.required);

console.log(lessonTitles);
console.log(requiredLessons);`,
      explanation:
        "lessonTitles berisi title dari setiap lesson. requiredLessons berisi object lesson yang property required-nya true.",
    },
    {
      id: "javascript-map-filter-data-transform-warning",
      type: "callout",
      variant: "important",
      title: "Pilih method sesuai tujuan",
      content:
        "Pakai map jika kamu ingin mengubah bentuk setiap item. Pakai filter jika kamu ingin mengambil sebagian item. Jangan memakai filter untuk mengubah bentuk data, dan jangan memakai map jika tujuanmu hanya memilih item tertentu.",
    },
    {
      id: "javascript-map-filter-data-transform-quick-check",
      type: "quick-check",
      question:
        "Kamu punya array lesson dan ingin mengambil hanya lesson yang required. Method mana yang paling tepat?",
      options: ["filter", "map", "length", "console.log"],
      correctAnswer: "filter",
      explanation:
        "filter dipakai untuk memilih sebagian item berdasarkan kondisi, misalnya lesson.required bernilai true.",
    },
    {
      id: "javascript-map-filter-data-transform-coding-practice",
      type: "coding-practice",
      challengeId: "transform-js-ui-data",
    },
    {
      id: "javascript-map-filter-data-transform-summary",
      type: "summary",
      points: [
        "Transformasi data membantu menyiapkan data sebelum dipakai UI.",
        "map membuat array baru dari setiap item yang dibaca.",
        "filter memilih item yang memenuhi kondisi.",
        "map cocok untuk mengubah bentuk data, filter cocok untuk memilih sebagian data.",
        "Berikutnya, Uji Kompetensi akan mengecek apakah kamu siap memakai data ini di module DOM dan events.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-map-filter-data-transform-intro",
      "javascript-map-filter-data-transform-map",
      "javascript-map-filter-data-transform-filter",
      "javascript-map-filter-data-transform-code-example",
      "javascript-map-filter-data-transform-warning",
      "javascript-map-filter-data-transform-quick-check",
      "javascript-map-filter-data-transform-coding-practice",
      "javascript-map-filter-data-transform-summary",
    ],
  },
};

export const javascriptArraysObjectsDataModelingAssessmentLesson: Lesson = {
  id: "javascript-arrays-objects-data-modeling-assessment",
  trackId: "frontend-engineering",
  moduleId: "javascript-arrays-objects-data-modeling",
  title: "Uji Kompetensi Arrays, Objects, and Data Modeling",
  slug: "javascript-arrays-objects-data-modeling-assessment",
  description:
    "Checkpoint akhir untuk mengecek kesiapan membentuk data UI sebelum masuk DOM dan events.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 55,
  objectives: [
    "Mengecek pemahaman array, object, dan array of objects",
    "Mengecek kemampuan membaca property dan item list",
    "Menerapkan map dan filter untuk transformasi data UI sederhana",
  ],
  skillTags: ["JavaScript", "Data Modeling", "Assessment", "Checkpoint"],
  blocks: [
    {
      id: "javascript-arrays-objects-data-modeling-assessment-recap",
      type: "text",
      title: "Checkpoint data UI",
      content:
        "Module ini mengubah JavaScript dari value kecil menjadi data yang lebih siap dipakai UI. Kamu belajar array untuk list, object untuk satu item, array of objects untuk list terstruktur, lalu map dan filter untuk membentuk data sebelum ditampilkan.",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-scope",
      type: "callout",
      variant: "important",
      title: "Yang dicek di checkpoint ini",
      content:
        "Fokusnya adalah membaca dan membentuk data sederhana. Kamu tidak perlu membuat DOM interaction dulu. DOM dan events akan masuk di module berikutnya setelah data model dasarnya jelas.",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-quiz",
      type: "quiz",
      quizId: "javascript-arrays-objects-data-modeling-assessment-quiz",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-js-data-modeling-utilities",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-docs",
      type: "documentation-bridge",
      title: "Baca MDN untuk array dan object",
      description:
        "Gunakan dokumentasi untuk memperkuat istilah yang akan sering muncul saat kamu mulai membuat interaksi UI.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Array",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
          focus: [
            "array sebagai list value",
            "contoh membaca item dan length",
            "method array yang sering dipakai",
          ],
          ignoreForNow: ["typed arrays", "constructor detail", "method advanced yang belum dipakai"],
        },
        {
          source: "MDN Web Docs",
          title: "Object basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics",
          focus: [
            "object sebagai kumpulan property",
            "cara membaca property dengan dot notation",
            "contoh object sederhana",
          ],
          ignoreForNow: ["prototype", "class", "this yang kompleks"],
        },
        {
          source: "MDN Web Docs",
          title: "Array.prototype.map",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
          focus: [
            "map membuat array baru",
            "callback menerima setiap item",
            "contoh mengambil bagian tertentu dari data",
          ],
          ignoreForNow: ["sparse arrays", "thisArg", "callback edge cases"],
        },
        {
          source: "MDN Web Docs",
          title: "Array.prototype.filter",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
          focus: [
            "filter memilih item yang lolos kondisi",
            "hasil filter tetap berupa array",
            "contoh kondisi boolean sederhana",
          ],
          ignoreForNow: ["filter pada array-like object", "optimisasi performa"],
        },
      ],
      followUpAction:
        "Buka halaman MDN map atau filter, lalu cocokkan satu contoh di sana dengan practice transformasi data yang baru kamu kerjakan.",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap lanjut jika bisa memakai array untuk list value.",
        "Kamu siap lanjut jika bisa memakai object untuk satu item terstruktur.",
        "Kamu siap lanjut jika bisa membaca array of objects dengan index dan property.",
        "Kamu siap lanjut jika bisa memakai map untuk membentuk array baru.",
        "Kamu siap lanjut jika bisa memakai filter untuk memilih item berdasarkan kondisi.",
        "Module berikutnya memakai data ini untuk DOM selection, events, form, localStorage, dan fetch dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-arrays-objects-data-modeling-assessment-recap",
      "javascript-arrays-objects-data-modeling-assessment-scope",
      "javascript-arrays-objects-data-modeling-assessment-quiz",
      "javascript-arrays-objects-data-modeling-assessment-coding-practice",
      "javascript-arrays-objects-data-modeling-assessment-docs",
      "javascript-arrays-objects-data-modeling-assessment-summary",
    ],
    passingQuizScore: 80,
  },
};

export const javascriptArraysObjectsDataModelingAssessmentQuiz: Quiz = {
  id: "javascript-arrays-objects-data-modeling-assessment-quiz",
  lessonId: "javascript-arrays-objects-data-modeling-assessment",
  title: "Quiz Arrays, Objects, and Data Modeling",
  passingScore: 80,
  questions: [
    {
      id: "javascript-arrays-objects-data-modeling-assessment-q1",
      type: "multiple-choice",
      question: "Apa kegunaan array yang paling tepat dalam konteks data UI?",
      options: [
        "Menyimpan beberapa value dalam satu list",
        "Mengubah semua teks menjadi warna biru",
        "Mengganti semua function di JavaScript",
        "Membuat file HTML baru",
      ],
      correctAnswer: "Menyimpan beberapa value dalam satu list",
      explanation:
        "Array cocok untuk data yang berbentuk daftar, seperti label navigasi, list lesson, atau item checklist.",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-q2",
      type: "code-output",
      question: "Output apa yang akan muncul dari kode ini?",
      code: `const tags = ["HTML", "CSS", "JavaScript"];
console.log(tags[1]);`,
      options: ["HTML", "CSS", "JavaScript", "3"],
      correctAnswer: "CSS",
      explanation:
        "Index array dimulai dari 0. tags[0] adalah HTML, tags[1] adalah CSS.",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-q3",
      type: "multiple-choice",
      question: "Kapan object lebih cocok daripada array biasa?",
      options: [
        "Saat satu item punya beberapa informasi bernama",
        "Saat hanya ingin menghitung 1 + 1",
        "Saat menulis selector CSS",
        "Saat ingin menghapus semua data",
      ],
      correctAnswer: "Saat satu item punya beberapa informasi bernama",
      explanation:
        "Object cocok untuk satu item terstruktur, misalnya lesson dengan title, duration, dan required.",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-q4",
      type: "multiple-choice",
      question: "Method mana yang tepat untuk mengambil hanya item yang required?",
      options: ["filter", "map", "length", "console.log"],
      correctAnswer: "filter",
      explanation:
        "filter memilih sebagian item berdasarkan kondisi, misalnya lesson.required bernilai true.",
    },
    {
      id: "javascript-arrays-objects-data-modeling-assessment-q5",
      type: "code-output",
      question: "Output apa yang paling tepat dari kode ini?",
      code: `const lessons = [
  { title: "Array", required: true },
  { title: "Object", required: true },
];

const titles = lessons.map((lesson) => lesson.title);
console.log(titles.length);`,
      options: ["0", "1", "2", "\"Array\""],
      correctAnswer: "2",
      explanation:
        "map membuat array baru berisi dua title karena source array memiliki dua item. titles.length bernilai 2.",
    },
  ],
};

export const inspectJsArrayValuesChallenge: CodingChallenge = {
  id: "inspect-js-array-values",
  lessonId: "javascript-array-data-ui",
  title: "Menyusun list label UI",
  description:
    "Latihan membuat array sederhana dan membaca item serta jumlah datanya.",
  instructions: [
    "Fokus di tab JS. HTML dan CSS hanya memberi konteks preview.",
    "Isi navigationLabels dengan \"Dashboard\", \"Lessons\", dan \"Profile\".",
    "Simpan item pertama ke firstLabel dengan navigationLabels[0].",
    "Simpan jumlah label ke totalLabels dengan navigationLabels.length.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan array dasar</h1>
  <p>Gunakan tab JS untuk menyusun list label UI.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const navigationLabels = [];

const firstLabel = "";
const totalLabels = 0;

console.log(firstLabel);
console.log(totalLabels);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan array dasar</h1>
  <p>Gunakan tab JS untuk menyusun list label UI.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const navigationLabels = ["Dashboard", "Lessons", "Profile"];

const firstLabel = navigationLabels[0];
const totalLabels = navigationLabels.length;

console.log(firstLabel);
console.log(totalLabels);`,
  },
  checklist: [
    "Array memakai kurung siku.",
    "Item pertama dibaca dengan index 0.",
    "Jumlah item dibaca dengan length.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "navigation-labels-array",
        label: "navigationLabels berisi tiga label UI.",
        type: "contains",
        target: `const navigationLabels = ["Dashboard", "Lessons", "Profile"];`,
        valueIncludes: `const navigationLabels = ["Dashboard", "Lessons", "Profile"];`,
      },
      {
        id: "first-label-index",
        label: "firstLabel membaca item pertama.",
        type: "contains",
        target: "const firstLabel = navigationLabels[0];",
        valueIncludes: "const firstLabel = navigationLabels[0];",
      },
      {
        id: "total-labels-length",
        label: "totalLabels membaca jumlah item dengan length.",
        type: "contains",
        target: "const totalLabels = navigationLabels.length;",
        valueIncludes: "const totalLabels = navigationLabels.length;",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Jika array dan pembacaan index sudah benar, console menampilkan item pertama dan jumlah item.",
    lines: ["Dashboard", "3"],
  },
  skillTags: ["JavaScript", "Arrays"],
};

export const modelJsCardObjectChallenge: CodingChallenge = {
  id: "model-js-card-object",
  lessonId: "javascript-object-single-item",
  title: "Membuat object untuk satu card",
  description:
    "Latihan menyimpan beberapa informasi tentang satu card lesson di dalam object.",
  instructions: [
    "Fokus di tab JS.",
    "Lengkapi lessonCard sebagai object.",
    "Isi title dengan \"Array Dasar\".",
    "Isi estimatedMinutes dengan number 30.",
    "Isi isRequired dengan boolean true.",
    "Baca title dari lessonCard ke variable cardTitle.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan object dasar</h1>
  <p>Cek otomatis membaca object di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessonCard = {
  // Tambahkan title, estimatedMinutes, dan isRequired.
};

const cardTitle = "";

console.log(cardTitle);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan object dasar</h1>
  <p>Cek otomatis membaca object di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessonCard = {
  title: "Array Dasar",
  estimatedMinutes: 30,
  isRequired: true,
};

const cardTitle = lessonCard.title;

console.log(cardTitle);`,
  },
  checklist: [
    "Object memakai kurung kurawal.",
    "Setiap property punya nama dan value.",
    "cardTitle membaca property title dengan dot notation.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "lesson-card-object",
        label: "Ada object lessonCard.",
        type: "contains",
        target: "const lessonCard = {",
        valueIncludes: "const lessonCard = {",
      },
      {
        id: "lesson-card-title",
        label: "lessonCard punya title Array Dasar.",
        type: "contains",
        target: `title: "Array Dasar",`,
        valueIncludes: `title: "Array Dasar",`,
      },
      {
        id: "lesson-card-minutes",
        label: "lessonCard punya estimatedMinutes 30.",
        type: "contains",
        target: "estimatedMinutes: 30,",
        valueIncludes: "estimatedMinutes: 30,",
      },
      {
        id: "lesson-card-required",
        label: "lessonCard punya isRequired true.",
        type: "contains",
        target: "isRequired: true,",
        valueIncludes: "isRequired: true,",
      },
      {
        id: "card-title-dot-notation",
        label: "cardTitle membaca lessonCard.title.",
        type: "contains",
        target: "const cardTitle = lessonCard.title;",
        valueIncludes: "const cardTitle = lessonCard.title;",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Jika object dan dot notation sudah benar, console menampilkan title card.",
    lines: ["Array Dasar"],
  },
  skillTags: ["JavaScript", "Objects"],
};

export const buildJsArrayOfObjectsChallenge: CodingChallenge = {
  id: "build-js-array-of-objects",
  lessonId: "javascript-array-of-objects",
  title: "Menyusun array of objects",
  description:
    "Latihan membuat list data terstruktur untuk beberapa card lesson.",
  instructions: [
    "Fokus di tab JS.",
    "Lengkapi lessonCards sebagai array yang berisi dua object.",
    "Object pertama punya title \"Array Dasar\" dan type \"Lesson\".",
    "Object kedua punya title \"Object Dasar\" dan type \"Practice\".",
    "Simpan title object pertama ke firstLessonTitle.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan array of objects</h1>
  <p>Susun data card lesson di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessonCards = [
  // Tambahkan dua object lesson di sini.
];

const firstLessonTitle = "";

console.log(firstLessonTitle);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan array of objects</h1>
  <p>Susun data card lesson di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessonCards = [
  {
    title: "Array Dasar",
    type: "Lesson",
  },
  {
    title: "Object Dasar",
    type: "Practice",
  },
];

const firstLessonTitle = lessonCards[0].title;

console.log(firstLessonTitle);`,
  },
  checklist: [
    "lessonCards adalah array.",
    "Setiap item di array adalah object.",
    "firstLessonTitle membaca property dari object pertama.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "lesson-cards-array",
        label: "lessonCards dibuat sebagai array.",
        type: "contains",
        target: "const lessonCards = [",
        valueIncludes: "const lessonCards = [",
      },
      {
        id: "first-card-title",
        label: "Object pertama punya title Array Dasar.",
        type: "contains",
        target: `title: "Array Dasar",`,
        valueIncludes: `title: "Array Dasar",`,
      },
      {
        id: "first-card-type",
        label: "Object pertama punya type Lesson.",
        type: "contains",
        target: `type: "Lesson",`,
        valueIncludes: `type: "Lesson",`,
      },
      {
        id: "second-card-title",
        label: "Object kedua punya title Object Dasar.",
        type: "contains",
        target: `title: "Object Dasar",`,
        valueIncludes: `title: "Object Dasar",`,
      },
      {
        id: "second-card-type",
        label: "Object kedua punya type Practice.",
        type: "contains",
        target: `type: "Practice",`,
        valueIncludes: `type: "Practice",`,
      },
      {
        id: "first-lesson-title",
        label: "firstLessonTitle membaca title object pertama.",
        type: "contains",
        target: "const firstLessonTitle = lessonCards[0].title;",
        valueIncludes: "const firstLessonTitle = lessonCards[0].title;",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Jika array of objects sudah benar, console menampilkan title dari object pertama.",
    lines: ["Array Dasar"],
  },
  skillTags: ["JavaScript", "Array of Objects"],
};

export const transformJsUiDataChallenge: CodingChallenge = {
  id: "transform-js-ui-data",
  lessonId: "javascript-map-filter-data-transform",
  title: "Mentransformasi data UI",
  description:
    "Latihan memakai map dan filter untuk membentuk data lesson sederhana.",
  instructions: [
    "Fokus di tab JS.",
    "Gunakan map untuk membuat titles dari lessons.",
    "Gunakan filter untuk membuat requiredLessons.",
    "Simpan title pertama dari requiredLessons ke firstRequiredTitle.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan transformasi data</h1>
  <p>Gunakan map dan filter di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessons = [
  { title: "Array Dasar", required: true },
  { title: "Object Dasar", required: true },
  { title: "Catatan tambahan", required: false },
];

const titles = [];
const requiredLessons = [];
const firstRequiredTitle = "";

console.log(titles);
console.log(requiredLessons);
console.log(firstRequiredTitle);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan transformasi data</h1>
  <p>Gunakan map dan filter di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessons = [
  { title: "Array Dasar", required: true },
  { title: "Object Dasar", required: true },
  { title: "Catatan tambahan", required: false },
];

const titles = lessons.map((lesson) => lesson.title);
const requiredLessons = lessons.filter((lesson) => lesson.required);
const firstRequiredTitle = requiredLessons[0].title;

console.log(titles);
console.log(requiredLessons);
console.log(firstRequiredTitle);`,
  },
  checklist: [
    "map dipakai untuk mengambil title dari setiap lesson.",
    "filter dipakai untuk mengambil lesson yang required.",
    "firstRequiredTitle membaca property dari hasil filter.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "titles-map",
        label: "titles dibuat dengan map.",
        type: "contains",
        target: "const titles = lessons.map((lesson) => lesson.title);",
        valueIncludes: "const titles = lessons.map((lesson) => lesson.title);",
      },
      {
        id: "required-filter",
        label: "requiredLessons dibuat dengan filter.",
        type: "contains",
        target: "const requiredLessons = lessons.filter((lesson) => lesson.required);",
        valueIncludes: "const requiredLessons = lessons.filter((lesson) => lesson.required);",
      },
      {
        id: "first-required-title",
        label: "firstRequiredTitle membaca title dari requiredLessons.",
        type: "contains",
        target: "const firstRequiredTitle = requiredLessons[0].title;",
        valueIncludes: "const firstRequiredTitle = requiredLessons[0].title;",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Jika map dan filter sudah benar, console menampilkan hasil transformasi data ini.",
    lines: [
      `["Array Dasar","Object Dasar","Catatan tambahan"]`,
      `[{"title":"Array Dasar","required":true},{"title":"Object Dasar","required":true}]`,
      "Array Dasar",
    ],
  },
  skillTags: ["JavaScript", "map", "filter"],
};

export const buildJsDataModelingUtilitiesChallenge: CodingChallenge = {
  id: "build-js-data-modeling-utilities",
  lessonId: "javascript-arrays-objects-data-modeling-assessment",
  title: "Membuat utility data UI",
  description:
    "Checkpoint praktik untuk array, object, array of objects, map, dan filter.",
  instructions: [
    "Fokus di tab JS.",
    "Lengkapi getLessonTitles agar mengembalikan array title.",
    "Lengkapi getRequiredLessons agar mengembalikan lesson yang required.",
    "Lengkapi getLessonSummaries agar mengembalikan label \"title - duration menit\".",
    "Gunakan map dan filter agar cek otomatis bisa membaca transformasi data.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Checkpoint data modeling</h1>
  <p>Kerjakan utility functions data UI di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessons = [
  { title: "Array Dasar", duration: 30, required: true },
  { title: "Object Dasar", duration: 35, required: true },
  { title: "Catatan tambahan", duration: 15, required: false },
];

function getLessonTitles(lessons) {
  // Kembalikan array berisi title.
}

function getRequiredLessons(lessons) {
  // Kembalikan lesson yang required.
}

function getLessonSummaries(lessons) {
  // Kembalikan label "title - duration menit".
}

console.log(getLessonTitles(lessons));
console.log(getRequiredLessons(lessons));
console.log(getLessonSummaries(lessons));`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Checkpoint data modeling</h1>
  <p>Kerjakan utility functions data UI di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const lessons = [
  { title: "Array Dasar", duration: 30, required: true },
  { title: "Object Dasar", duration: 35, required: true },
  { title: "Catatan tambahan", duration: 15, required: false },
];

function getLessonTitles(lessons) {
  return lessons.map((lesson) => lesson.title);
}

function getRequiredLessons(lessons) {
  return lessons.filter((lesson) => lesson.required);
}

function getLessonSummaries(lessons) {
  return lessons.map((lesson) => lesson.title + " - " + lesson.duration + " menit");
}

console.log(getLessonTitles(lessons));
console.log(getRequiredLessons(lessons));
console.log(getLessonSummaries(lessons));`,
  },
  checklist: [
    "getLessonTitles memakai map untuk mengambil title.",
    "getRequiredLessons memakai filter untuk memilih required.",
    "getLessonSummaries memakai map untuk membuat label siap pakai.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "get-lesson-titles-function",
        label: "Ada function getLessonTitles.",
        type: "contains",
        target: "function getLessonTitles(lessons)",
        valueIncludes: "function getLessonTitles(lessons)",
      },
      {
        id: "get-lesson-titles-map",
        label: "getLessonTitles memakai map untuk title.",
        type: "contains",
        target: "return lessons.map((lesson) => lesson.title);",
        valueIncludes: "return lessons.map((lesson) => lesson.title);",
      },
      {
        id: "get-required-lessons-function",
        label: "Ada function getRequiredLessons.",
        type: "contains",
        target: "function getRequiredLessons(lessons)",
        valueIncludes: "function getRequiredLessons(lessons)",
      },
      {
        id: "get-required-lessons-filter",
        label: "getRequiredLessons memakai filter.",
        type: "contains",
        target: "return lessons.filter((lesson) => lesson.required);",
        valueIncludes: "return lessons.filter((lesson) => lesson.required);",
      },
      {
        id: "get-lesson-summaries-function",
        label: "Ada function getLessonSummaries.",
        type: "contains",
        target: "function getLessonSummaries(lessons)",
        valueIncludes: "function getLessonSummaries(lessons)",
      },
      {
        id: "get-lesson-summaries-map",
        label: "getLessonSummaries memakai map untuk label.",
        type: "contains",
        target: `return lessons.map((lesson) => lesson.title + " - " + lesson.duration + " menit");`,
        valueIncludes: `return lessons.map((lesson) => lesson.title + " - " + lesson.duration + " menit");`,
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Jika utility data modeling sudah benar, console menampilkan title, lesson required, dan summary.",
    lines: [
      `["Array Dasar","Object Dasar","Catatan tambahan"]`,
      `[{"title":"Array Dasar","duration":30,"required":true},{"title":"Object Dasar","duration":35,"required":true}]`,
      `["Array Dasar - 30 menit","Object Dasar - 35 menit","Catatan tambahan - 15 menit"]`,
    ],
  },
  skillTags: ["JavaScript", "Arrays", "Objects", "Data Transformation"],
};
