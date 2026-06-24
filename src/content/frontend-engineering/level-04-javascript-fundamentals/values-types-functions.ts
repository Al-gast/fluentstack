import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const javascriptValuesTypesFunctionsModule: Module = {
  id: "javascript-values-types-functions",
  trackId: "frontend-engineering",
  title: "Values, Types, and Functions",
  slug: "javascript-values-types-functions",
  description:
    "Mulai menulis JavaScript dasar lewat value, variable, function, conditionals, dan loop sederhana.",
  order: 10,
  lessonIds: [
    "what-is-javascript-in-browser",
    "javascript-values-variables",
    "javascript-basic-functions",
    "javascript-conditionals-loops-basic",
    "javascript-values-types-functions-assessment",
  ],
  estimatedHours: 5,
  skillTags: ["JavaScript", "Values", "Functions", "Beginner Programming"],
};

export const whatIsJavascriptInBrowserLesson: Lesson = {
  id: "what-is-javascript-in-browser",
  trackId: "frontend-engineering",
  moduleId: "javascript-values-types-functions",
  title: "Apa Itu JavaScript di Browser?",
  slug: "what-is-javascript-in-browser",
  description:
    "Pahami peran JavaScript sebagai bahasa yang menambahkan behavior pada halaman web.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami JavaScript sebagai bahasa untuk behavior halaman",
    "Membedakan peran HTML, CSS, dan JavaScript saat halaman dipakai",
    "Mengenali contoh keputusan kecil yang bisa ditangani JavaScript",
  ],
  skillTags: ["JavaScript", "Browser", "Web Fundamentals"],
  blocks: [
    {
      id: "what-is-javascript-in-browser-intro",
      type: "text",
      title: "JavaScript membuat halaman merespons",
      content:
        "Di Level 1 sampai Level 3, kamu sudah melihat HTML sebagai struktur dan CSS sebagai tampilan. JavaScript menambahkan behavior. Saat user klik tombol, mengisi form, membuka menu, menghitung total, atau melihat pesan error, JavaScript sering ikut bekerja di belakangnya.",
    },
    {
      id: "what-is-javascript-in-browser-role",
      type: "text",
      title: "Tiga peran tetap berbeda",
      content:
        "HTML menjawab: apa isi halaman ini? CSS menjawab: bagaimana tampilannya? JavaScript menjawab: apa yang terjadi ketika data berubah atau user berinteraksi? Di awal Level 4, kamu belum langsung masuk ke interaksi DOM. Kamu mulai dari bahan paling kecil dulu: value, variable, function, keputusan, dan pengulangan.",
    },
    {
      id: "what-is-javascript-in-browser-code-example",
      type: "code-example",
      title: "Contoh keputusan kecil dengan JavaScript",
      language: "js",
      code: `const score = 85;

if (score >= 80) {
  console.log("Lanjut ke module berikutnya");
} else {
  console.log("Review dulu bagian yang belum kuat");
}`,
      explanation:
        "score adalah value angka yang disimpan di variable. if membuat keputusan sederhana. console.log menampilkan pesan untuk developer. Kamu akan belajar bagian-bagian ini pelan-pelan di module ini.",
    },
    {
      id: "what-is-javascript-in-browser-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan lompat langsung ke efek yang rumit",
      content:
        "Banyak pemula ingin langsung membuat menu, animasi, atau app interaktif. Itu nanti penting, tetapi JavaScript akan lebih mudah jika kamu paham dulu cara menyimpan value, membuat function, dan membaca alur keputusan sederhana.",
    },
    {
      id: "what-is-javascript-in-browser-quick-check",
      type: "quick-check",
      question:
        "Saat sebuah tombol perlu menampilkan pesan setelah diklik, bagian mana yang biasanya menangani behavior itu?",
      options: ["HTML", "CSS", "JavaScript", "File gambar"],
      correctAnswer: "JavaScript",
      explanation:
        "HTML memberi struktur tombol, CSS mengatur tampilannya, dan JavaScript menangani behavior seperti menampilkan pesan setelah tombol diklik.",
    },
    {
      id: "what-is-javascript-in-browser-summary",
      type: "summary",
      points: [
        "JavaScript dipakai untuk behavior dan perubahan data di halaman.",
        "HTML, CSS, dan JavaScript punya peran berbeda tetapi saling bekerja sama.",
        "Sebelum DOM dan event, kamu perlu memahami value, variable, function, conditionals, dan loop.",
        "Berikutnya, kamu mulai dari values dan variables.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-is-javascript-in-browser-intro",
      "what-is-javascript-in-browser-role",
      "what-is-javascript-in-browser-code-example",
      "what-is-javascript-in-browser-common-mistake",
      "what-is-javascript-in-browser-quick-check",
      "what-is-javascript-in-browser-summary",
    ],
  },
};

export const javascriptValuesVariablesLesson: Lesson = {
  id: "javascript-values-variables",
  trackId: "frontend-engineering",
  moduleId: "javascript-values-types-functions",
  title: "Values dan Variables",
  slug: "javascript-values-variables",
  description:
    "Belajar menyimpan teks, angka, dan boolean di variable JavaScript sederhana.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Mengenali string, number, dan boolean sebagai value dasar",
    "Memakai const untuk memberi nama pada value",
    "Membedakan value dan variable saat membaca kode JavaScript",
  ],
  skillTags: ["JavaScript", "Values", "Variables"],
  blocks: [
    {
      id: "javascript-values-variables-intro",
      type: "text",
      title: "Value adalah data kecil yang dipakai kode",
      content:
        "Value adalah data yang bisa dipakai JavaScript. Teks seperti \"Rina\" disebut string. Angka seperti 3 disebut number. Nilai benar atau salah seperti true dan false disebut boolean. Tiga jenis ini cukup untuk mulai membaca banyak contoh JavaScript dasar.",
    },
    {
      id: "javascript-values-variables-core",
      type: "text",
      title: "Variable memberi nama pada value",
      content:
        "Variable adalah nama yang menunjuk ke value. Dengan variable, kode lebih mudah dibaca karena kamu tidak hanya melihat angka atau teks mentah. Untuk nilai yang tidak perlu diganti, kamu bisa mulai dengan const. Baca const sebagai: simpan value ini dengan nama tertentu.",
    },
    {
      id: "javascript-values-variables-code-example",
      type: "code-example",
      title: "String, number, dan boolean",
      language: "js",
      code: `const learnerName = "Rina";
const completedLessons = 3;
const isPracticeReady = true;

console.log(learnerName);
console.log(completedLessons);
console.log(isPracticeReady);`,
      explanation:
        "learnerName menyimpan string, completedLessons menyimpan number, dan isPracticeReady menyimpan boolean. Nama variable membantu kamu memahami maksud value tanpa menebak-nebak.",
    },
    {
      id: "javascript-values-variables-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "String perlu tanda kutip",
      content:
        "Kalau value berupa teks, gunakan tanda kutip. \"Rina\" adalah string. Rina tanpa tanda kutip akan dibaca sebagai nama variable, bukan teks.",
    },
    {
      id: "javascript-values-variables-quick-check",
      type: "quick-check",
      question: "Value mana yang termasuk boolean di JavaScript?",
      options: ["\"true\"", "true", "3", "\"Rina\""],
      correctAnswer: "true",
      explanation:
        "true tanpa tanda kutip adalah boolean. Jika ditulis \"true\", itu menjadi string karena berada di dalam tanda kutip.",
    },
    {
      id: "javascript-values-variables-coding-practice",
      type: "coding-practice",
      challengeId: "store-simple-js-values",
    },
    {
      id: "javascript-values-variables-summary",
      type: "summary",
      points: [
        "String adalah teks dan ditulis dengan tanda kutip.",
        "Number adalah angka yang bisa dipakai untuk hitungan.",
        "Boolean adalah true atau false.",
        "Variable memberi nama pada value agar kode lebih mudah dibaca.",
        "Berikutnya, kamu akan membungkus beberapa langkah kecil ke dalam function.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-values-variables-intro",
      "javascript-values-variables-core",
      "javascript-values-variables-code-example",
      "javascript-values-variables-common-mistake",
      "javascript-values-variables-quick-check",
      "javascript-values-variables-coding-practice",
      "javascript-values-variables-summary",
    ],
  },
};

export const javascriptBasicFunctionsLesson: Lesson = {
  id: "javascript-basic-functions",
  trackId: "frontend-engineering",
  moduleId: "javascript-values-types-functions",
  title: "Functions Dasar",
  slug: "javascript-basic-functions",
  description:
    "Belajar membuat function sederhana agar langkah JavaScript bisa dipakai ulang.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami function sebagai langkah yang diberi nama",
    "Mengenal parameter sebagai input function",
    "Menggunakan return untuk mengeluarkan hasil",
  ],
  skillTags: ["JavaScript", "Functions", "Reusable Logic"],
  blocks: [
    {
      id: "javascript-basic-functions-intro",
      type: "text",
      title: "Function adalah aksi yang diberi nama",
      content:
        "Setelah value dan variable, kamu perlu cara untuk mengulang langkah yang sama tanpa menulis ulang semuanya. Function adalah kumpulan langkah yang diberi nama. Kamu bisa memanggil function saat butuh hasilnya.",
    },
    {
      id: "javascript-basic-functions-terms",
      type: "text",
      title: "Parameter dan return",
      content:
        "Parameter adalah input yang masuk ke function. Return adalah hasil yang keluar dari function. Kalau function seperti mesin kecil, parameter adalah bahan yang masuk, dan return adalah hasil yang kamu ambil setelah proses selesai.",
    },
    {
      id: "javascript-basic-functions-code-example",
      type: "code-example",
      title: "Function kecil untuk membuat label",
      language: "js",
      code: `function formatLessonLabel(title) {
  return "Lesson: " + title;
}

const label = formatLessonLabel("Values dan Variables");

console.log(label);`,
      explanation:
        "formatLessonLabel menerima title sebagai parameter. Function ini mengembalikan string baru lewat return. Saat dipanggil dengan \"Values dan Variables\", hasilnya disimpan di variable label.",
    },
    {
      id: "javascript-basic-functions-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "console.log bukan pengganti return",
      content:
        "console.log hanya membantu developer melihat sesuatu saat debugging. Return memberi hasil dari function agar bisa dipakai lagi oleh bagian kode lain.",
    },
    {
      id: "javascript-basic-functions-coding-practice",
      type: "coding-practice",
      challengeId: "build-basic-js-functions",
    },
    {
      id: "javascript-basic-functions-summary",
      type: "summary",
      points: [
        "Function adalah langkah JavaScript yang diberi nama.",
        "Parameter adalah input function.",
        "Return adalah hasil yang keluar dari function.",
        "Function membantu kode kecil dipakai ulang.",
        "Berikutnya, kamu akan membuat function yang bisa memilih hasil berdasarkan kondisi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-basic-functions-intro",
      "javascript-basic-functions-terms",
      "javascript-basic-functions-code-example",
      "javascript-basic-functions-common-mistake",
      "javascript-basic-functions-coding-practice",
      "javascript-basic-functions-summary",
    ],
  },
};

export const javascriptConditionalsLoopsBasicLesson: Lesson = {
  id: "javascript-conditionals-loops-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-values-types-functions",
  title: "Conditionals dan Loops Dasar",
  slug: "javascript-conditionals-loops-basic",
  description:
    "Belajar membuat keputusan dengan if dan mengulang langkah sederhana dengan loop.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Memahami conditional sebagai cara membuat keputusan",
    "Memakai if dan else untuk memilih hasil",
    "Mengenal for loop untuk mengulang langkah yang mirip",
  ],
  skillTags: ["JavaScript", "Conditionals", "Loops"],
  blocks: [
    {
      id: "javascript-conditionals-loops-basic-intro",
      type: "text",
      title: "Kode sering perlu memilih jalan",
      content:
        "Di function sebelumnya, hasil selalu mengikuti langkah yang sama. Dalam project nyata, kode sering perlu memilih: apakah user sudah mengisi form? apakah nilai cukup tinggi? apakah daftar punya item? Conditional membantu JavaScript memilih hasil berdasarkan kondisi.",
    },
    {
      id: "javascript-conditionals-loops-basic-if-example",
      type: "code-example",
      title: "if dan else untuk keputusan sederhana",
      language: "js",
      code: `function getReadinessLabel(score) {
  if (score >= 80) {
    return "Siap lanjut";
  }

  return "Review dulu";
}

console.log(getReadinessLabel(85));`,
      explanation:
        "Jika score minimal 80, function mengembalikan \"Siap lanjut\". Jika tidak, function melewati blok if dan mengembalikan \"Review dulu\".",
    },
    {
      id: "javascript-conditionals-loops-basic-loop-example",
      type: "code-example",
      title: "for loop untuk mengulang langkah",
      language: "js",
      code: `for (let index = 1; index <= 3; index += 1) {
  console.log("Latihan ke-" + index);
}`,
      explanation:
        "Loop ini berjalan dari 1 sampai 3. Setiap putaran menampilkan teks latihan dengan angka yang berbeda. Untuk sekarang, cukup pahami bahwa loop mengulang langkah yang mirip.",
    },
    {
      id: "javascript-conditionals-loops-basic-warning",
      type: "callout",
      variant: "warning",
      title: "Loop perlu batas yang jelas",
      content:
        "Loop yang tidak punya batas bisa berjalan terlalu lama. Di tahap awal, pastikan kamu tahu kapan loop mulai, kapan berhenti, dan apa yang berubah di setiap putaran.",
    },
    {
      id: "javascript-conditionals-loops-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-js-conditionals-loops",
    },
    {
      id: "javascript-conditionals-loops-basic-summary",
      type: "summary",
      points: [
        "Conditional membantu kode memilih hasil berdasarkan kondisi.",
        "if menjalankan blok kode saat kondisi benar.",
        "else atau return lanjutan bisa menangani kondisi lain.",
        "for loop mengulang langkah dengan batas yang jelas.",
        "Berikutnya, Uji Kompetensi akan mengecek value, variable, function, conditional, loop, dan output sederhana.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-conditionals-loops-basic-intro",
      "javascript-conditionals-loops-basic-if-example",
      "javascript-conditionals-loops-basic-loop-example",
      "javascript-conditionals-loops-basic-warning",
      "javascript-conditionals-loops-basic-coding-practice",
      "javascript-conditionals-loops-basic-summary",
    ],
  },
};

export const javascriptValuesTypesFunctionsAssessmentLesson: Lesson = {
  id: "javascript-values-types-functions-assessment",
  trackId: "frontend-engineering",
  moduleId: "javascript-values-types-functions",
  title: "Uji Kompetensi Values, Types, and Functions",
  slug: "javascript-values-types-functions-assessment",
  description:
    "Checkpoint akhir untuk mengecek kesiapan JavaScript dasar sebelum masuk ke arrays dan objects.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 55,
  objectives: [
    "Mengecek pemahaman value, variable, dan primitive types",
    "Mengecek kemampuan membaca function dan output sederhana",
    "Menerapkan conditional dan loop dalam utility function kecil",
  ],
  skillTags: ["JavaScript", "Assessment", "Checkpoint"],
  blocks: [
    {
      id: "javascript-values-types-functions-assessment-recap",
      type: "text",
      title: "Checkpoint JavaScript dasar",
      content:
        "Module ini memperkenalkan JavaScript dari bagian paling kecil: value, variable, function, conditional, dan loop. Uji Kompetensi ini membantu mengecek apakah kamu siap masuk ke data yang lebih terstruktur seperti arrays dan objects.",
    },
    {
      id: "javascript-values-types-functions-assessment-scope",
      type: "callout",
      variant: "important",
      title: "Yang dicek di checkpoint ini",
      content:
        "Fokusnya bukan menghafal semua syntax JavaScript. Kamu perlu bisa membaca value dasar, memberi nama dengan variable, memahami input dan return function, membuat keputusan sederhana, mengulang langkah kecil, dan memprediksi output dasar.",
    },
    {
      id: "javascript-values-types-functions-assessment-quiz",
      type: "quiz",
      quizId: "javascript-values-types-functions-assessment-quiz",
    },
    {
      id: "javascript-values-types-functions-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-js-utility-functions",
    },
    {
      id: "javascript-values-types-functions-assessment-docs",
      type: "documentation-bridge",
      title: "Baca MDN secara terarah",
      description:
        "Gunakan dokumentasi sebagai penguat, bukan sebagai daftar link panjang. Baca bagian yang mendukung skill module ini saja.",
      links: [
        {
          source: "MDN Web Docs",
          title: "JavaScript first steps",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting",
          focus: [
            "gambaran umum JavaScript sebagai scripting language",
            "contoh syntax dasar yang mirip dengan yang kamu pakai di module ini",
            "bagaimana JavaScript dipakai bertahap di halaman web",
          ],
          ignoreForNow: [
            "detail DOM yang belum dibahas di module ini",
            "project yang memakai banyak file",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Functions",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
          focus: [
            "cara function menerima input",
            "cara return mengeluarkan hasil",
            "contoh function declaration sederhana",
          ],
          ignoreForNow: ["arrow function", "closure", "function scope yang rumit"],
        },
        {
          source: "MDN Web Docs",
          title: "Loops and iteration",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
          focus: [
            "pola for loop dasar",
            "bagian awal, kondisi berhenti, dan perubahan setiap putaran",
          ],
          ignoreForNow: ["iterator advanced", "generator", "loop pattern yang jarang dipakai"],
        },
      ],
      followUpAction:
        "Buka satu halaman MDN di atas, lalu cocokkan satu contoh dengan practice yang baru kamu kerjakan. Catat bagian mana yang sudah terasa familiar.",
    },
    {
      id: "javascript-values-types-functions-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap lanjut jika bisa membedakan string, number, dan boolean.",
        "Kamu siap lanjut jika bisa memakai variable untuk memberi nama pada value.",
        "Kamu siap lanjut jika bisa membaca function dengan parameter dan return.",
        "Kamu siap lanjut jika bisa memakai if dan for loop sederhana.",
        "Module berikutnya memakai skill ini untuk membentuk data UI dengan arrays dan objects.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-values-types-functions-assessment-recap",
      "javascript-values-types-functions-assessment-scope",
      "javascript-values-types-functions-assessment-quiz",
      "javascript-values-types-functions-assessment-coding-practice",
      "javascript-values-types-functions-assessment-docs",
      "javascript-values-types-functions-assessment-summary",
    ],
    passingQuizScore: 80,
  },
};

export const javascriptValuesTypesFunctionsAssessmentQuiz: Quiz = {
  id: "javascript-values-types-functions-assessment-quiz",
  lessonId: "javascript-values-types-functions-assessment",
  title: "Quiz Values, Types, and Functions",
  passingScore: 80,
  questions: [
    {
      id: "javascript-values-types-functions-assessment-q1",
      type: "multiple-choice",
      question: "Apa perbedaan value dan variable yang paling tepat?",
      options: [
        "Value adalah data, variable adalah nama yang menunjuk ke data itu",
        "Value selalu angka, variable selalu teks",
        "Value hanya dipakai di HTML, variable hanya dipakai di CSS",
        "Value dan variable selalu berarti hal yang sama",
      ],
      correctAnswer: "Value adalah data, variable adalah nama yang menunjuk ke data itu",
      explanation:
        "Value adalah data seperti string, number, atau boolean. Variable memberi nama agar value itu bisa dibaca dan dipakai lagi di kode.",
    },
    {
      id: "javascript-values-types-functions-assessment-q2",
      type: "code-output",
      question: "Output apa yang akan muncul dari kode ini?",
      code: `const lessonCount = 4;
console.log(lessonCount + 1);`,
      options: ["4", "5", "\"41\"", "lessonCount + 1"],
      correctAnswer: "5",
      explanation:
        "lessonCount menyimpan number 4. Operasi 4 + 1 menghasilkan number 5.",
    },
    {
      id: "javascript-values-types-functions-assessment-q3",
      type: "multiple-choice",
      question: "Apa fungsi return di dalam function?",
      options: [
        "Mengeluarkan hasil dari function agar bisa dipakai lagi",
        "Menampilkan teks besar di halaman",
        "Mengubah semua value menjadi string",
        "Membuat function berjalan tanpa nama",
      ],
      correctAnswer: "Mengeluarkan hasil dari function agar bisa dipakai lagi",
      explanation:
        "return memberi hasil dari function. console.log hanya menampilkan sesuatu untuk developer, sedangkan return bisa dipakai oleh kode lain.",
    },
    {
      id: "javascript-values-types-functions-assessment-q4",
      type: "multiple-choice",
      question: "Kapan kamu memakai if di JavaScript?",
      options: [
        "Saat kode perlu memilih hasil berdasarkan kondisi",
        "Saat ingin menulis komentar HTML",
        "Saat ingin mengganti warna CSS tanpa aturan",
        "Saat ingin membuat file baru",
      ],
      correctAnswer: "Saat kode perlu memilih hasil berdasarkan kondisi",
      explanation:
        "if dipakai ketika kode perlu mengambil keputusan, misalnya jika score cukup tinggi maka lanjut, jika belum maka review dulu.",
    },
    {
      id: "javascript-values-types-functions-assessment-q5",
      type: "code-output",
      question: "Nilai akhir total pada kode ini adalah apa?",
      code: `let total = 0;

for (let index = 1; index <= 3; index += 1) {
  total = total + index;
}

console.log(total);`,
      options: ["3", "4", "6", "123"],
      correctAnswer: "6",
      explanation:
        "Loop menambahkan 1, lalu 2, lalu 3 ke total. Hasil akhirnya 6.",
    },
  ],
};

export const storeSimpleJsValuesChallenge: CodingChallenge = {
  id: "store-simple-js-values",
  lessonId: "javascript-values-variables",
  title: "Menyimpan value sederhana",
  description:
    "Latihan menulis string, number, dan boolean dengan nama variable yang jelas.",
  instructions: [
    "Fokus di tab JS. HTML dan CSS hanya memberi konteks preview.",
    "Isi learnerName dengan string \"Rina\".",
    "Isi completedLessons dengan number 3.",
    "Isi isPracticeReady dengan boolean true.",
    "Gunakan nama variable yang sudah disiapkan agar cek otomatis bisa membaca kode.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan value JavaScript</h1>
  <p>Gunakan tab JS untuk menyimpan data kecil.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const learnerName = "";
const completedLessons = 0;
const isPracticeReady = false;

console.log(learnerName);
console.log(completedLessons);
console.log(isPracticeReady);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan value JavaScript</h1>
  <p>Gunakan tab JS untuk menyimpan data kecil.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const learnerName = "Rina";
const completedLessons = 3;
const isPracticeReady = true;

console.log(learnerName);
console.log(completedLessons);
console.log(isPracticeReady);`,
  },
  checklist: [
    "String ditulis dengan tanda kutip.",
    "Number tidak ditulis dengan tanda kutip.",
    "Boolean ditulis sebagai true atau false, bukan string.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "learner-name-string",
        label: "learnerName menyimpan string Rina.",
        type: "contains",
        target: `const learnerName = "Rina";`,
        valueIncludes: `const learnerName = "Rina";`,
      },
      {
        id: "completed-lessons-number",
        label: "completedLessons menyimpan number 3.",
        type: "contains",
        target: "const completedLessons = 3;",
        valueIncludes: "const completedLessons = 3;",
      },
      {
        id: "practice-ready-boolean",
        label: "isPracticeReady menyimpan boolean true.",
        type: "contains",
        target: "const isPracticeReady = true;",
        valueIncludes: "const isPracticeReady = true;",
      },
    ],
  },
  skillTags: ["JavaScript", "Values", "Variables"],
};

export const buildBasicJsFunctionsChallenge: CodingChallenge = {
  id: "build-basic-js-functions",
  lessonId: "javascript-basic-functions",
  title: "Membuat function kecil",
  description:
    "Latihan membuat function dengan parameter dan return.",
  instructions: [
    "Fokus di tab JS.",
    "Lengkapi function formatGreeting agar menerima name dan mengembalikan \"Halo, \" + name.",
    "Lengkapi function calculateTotal agar menerima price dan fee lalu mengembalikan price + fee.",
    "Gunakan return, bukan hanya console.log, supaya hasil function bisa dipakai lagi.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan function dasar</h1>
  <p>Cek otomatis membaca function di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function formatGreeting(name) {
  // Kembalikan "Halo, " + name
}

function calculateTotal(price, fee) {
  // Kembalikan price + fee
}

console.log(formatGreeting("Rina"));
console.log(calculateTotal(10000, 2500));`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan function dasar</h1>
  <p>Cek otomatis membaca function di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function formatGreeting(name) {
  return "Halo, " + name;
}

function calculateTotal(price, fee) {
  return price + fee;
}

console.log(formatGreeting("Rina"));
console.log(calculateTotal(10000, 2500));`,
  },
  checklist: [
    "Function punya nama yang menjelaskan tugasnya.",
    "Parameter dipakai di dalam function.",
    "Return mengeluarkan hasil dari function.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "format-greeting-function",
        label: "Ada function formatGreeting dengan parameter name.",
        type: "contains",
        target: "function formatGreeting(name)",
        valueIncludes: "function formatGreeting(name)",
      },
      {
        id: "format-greeting-return",
        label: "formatGreeting mengembalikan greeting.",
        type: "contains",
        target: `return "Halo, " + name;`,
        valueIncludes: `return "Halo, " + name;`,
      },
      {
        id: "calculate-total-function",
        label: "Ada function calculateTotal dengan price dan fee.",
        type: "contains",
        target: "function calculateTotal(price, fee)",
        valueIncludes: "function calculateTotal(price, fee)",
      },
      {
        id: "calculate-total-return",
        label: "calculateTotal mengembalikan price + fee.",
        type: "contains",
        target: "return price + fee;",
        valueIncludes: "return price + fee;",
      },
    ],
  },
  skillTags: ["JavaScript", "Functions"],
};

export const practiceJsConditionalsLoopsChallenge: CodingChallenge = {
  id: "practice-js-conditionals-loops",
  lessonId: "javascript-conditionals-loops-basic",
  title: "Membuat keputusan dan loop sederhana",
  description:
    "Latihan memakai if untuk memilih hasil dan for loop untuk mengulang langkah kecil.",
  instructions: [
    "Fokus di tab JS.",
    "Lengkapi getAccessLabel: jika score >= 80, return \"Lanjut\"; jika tidak, return \"Review dulu\".",
    "Lengkapi countCompletedLessons dengan for loop dari 1 sampai totalLessons.",
    "Di dalam loop, masukkan teks \"Lesson \" + index ke array labels memakai labels.push.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan conditional dan loop</h1>
  <p>Cek otomatis membaca if dan for loop di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getAccessLabel(score) {
  // Jika score >= 80, return "Lanjut".
  // Jika tidak, return "Review dulu".
}

function countCompletedLessons(totalLessons) {
  const labels = [];

  // Gunakan for loop dari 1 sampai totalLessons.

  return labels;
}

console.log(getAccessLabel(85));
console.log(countCompletedLessons(3));`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan conditional dan loop</h1>
  <p>Cek otomatis membaca if dan for loop di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getAccessLabel(score) {
  if (score >= 80) {
    return "Lanjut";
  }

  return "Review dulu";
}

function countCompletedLessons(totalLessons) {
  const labels = [];

  for (let index = 1; index <= totalLessons; index += 1) {
    labels.push("Lesson " + index);
  }

  return labels;
}

console.log(getAccessLabel(85));
console.log(countCompletedLessons(3));`,
  },
  checklist: [
    "if dipakai untuk keputusan score.",
    "Function mengembalikan hasil dengan return.",
    "Loop punya nilai awal, batas berhenti, dan perubahan index.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "access-if",
        label: "getAccessLabel memakai if score >= 80.",
        type: "contains",
        target: "if (score >= 80)",
        valueIncludes: "if (score >= 80)",
      },
      {
        id: "access-return-pass",
        label: "Score cukup mengembalikan Lanjut.",
        type: "contains",
        target: `return "Lanjut";`,
        valueIncludes: `return "Lanjut";`,
      },
      {
        id: "access-return-review",
        label: "Score belum cukup mengembalikan Review dulu.",
        type: "contains",
        target: `return "Review dulu";`,
        valueIncludes: `return "Review dulu";`,
      },
      {
        id: "lesson-loop",
        label: "Ada for loop dari 1 sampai totalLessons.",
        type: "contains",
        target: "for (let index = 1; index <= totalLessons; index += 1)",
        valueIncludes: "for (let index = 1; index <= totalLessons; index += 1)",
      },
      {
        id: "lesson-labels-push",
        label: "Loop menambahkan label ke array.",
        type: "contains",
        target: `labels.push("Lesson " + index);`,
        valueIncludes: `labels.push("Lesson " + index);`,
      },
    ],
  },
  skillTags: ["JavaScript", "Conditionals", "Loops"],
};

export const buildJsUtilityFunctionsChallenge: CodingChallenge = {
  id: "build-js-utility-functions",
  lessonId: "javascript-values-types-functions-assessment",
  title: "Membuat utility functions kecil",
  description:
    "Checkpoint praktik untuk value, type, function, conditional, dan loop sederhana.",
  instructions: [
    "Fokus di tab JS.",
    "Lengkapi getTypeLabel agar string menjadi \"teks\", number menjadi \"angka\", dan value lain menjadi \"lainnya\".",
    "Lengkapi summarizeScores agar mengumpulkan score yang nilainya minimal 70.",
    "Gunakan if, return, for loop, dan push agar cek otomatis bisa membaca alur kode.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Checkpoint JavaScript dasar</h1>
  <p>Kerjakan utility functions di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getTypeLabel(value) {
  // Jika value adalah string, return "teks".
  // Jika value adalah number, return "angka".
  // Selain itu, return "lainnya".
}

function summarizeScores(scores) {
  const passedScores = [];

  // Gunakan for loop untuk mengecek setiap score.
  // Masukkan score >= 70 ke passedScores.

  return passedScores;
}

console.log(getTypeLabel("HTML"));
console.log(summarizeScores([60, 75, 90]));`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Checkpoint JavaScript dasar</h1>
  <p>Kerjakan utility functions di tab JS.</p>
</main>`,
    css: `.practice-card {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getTypeLabel(value) {
  if (typeof value === "string") {
    return "teks";
  }

  if (typeof value === "number") {
    return "angka";
  }

  return "lainnya";
}

function summarizeScores(scores) {
  const passedScores = [];

  for (let index = 0; index < scores.length; index += 1) {
    if (scores[index] >= 70) {
      passedScores.push(scores[index]);
    }
  }

  return passedScores;
}

console.log(getTypeLabel("HTML"));
console.log(summarizeScores([60, 75, 90]));`,
  },
  checklist: [
    "Function getTypeLabel memakai typeof untuk membaca type value.",
    "Function summarizeScores memakai loop untuk membaca daftar score.",
    "Score yang lolos dikumpulkan di array passedScores.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "type-string-check",
        label: "getTypeLabel mengecek string.",
        type: "contains",
        target: `if (typeof value === "string")`,
        valueIncludes: `if (typeof value === "string")`,
      },
      {
        id: "type-string-return",
        label: "String dikembalikan sebagai teks.",
        type: "contains",
        target: `return "teks";`,
        valueIncludes: `return "teks";`,
      },
      {
        id: "type-number-check",
        label: "getTypeLabel mengecek number.",
        type: "contains",
        target: `if (typeof value === "number")`,
        valueIncludes: `if (typeof value === "number")`,
      },
      {
        id: "type-number-return",
        label: "Number dikembalikan sebagai angka.",
        type: "contains",
        target: `return "angka";`,
        valueIncludes: `return "angka";`,
      },
      {
        id: "scores-loop",
        label: "summarizeScores memakai loop untuk membaca scores.",
        type: "contains",
        target: "for (let index = 0; index < scores.length; index += 1)",
        valueIncludes: "for (let index = 0; index < scores.length; index += 1)",
      },
      {
        id: "scores-if",
        label: "Loop mengecek score minimal 70.",
        type: "contains",
        target: "if (scores[index] >= 70)",
        valueIncludes: "if (scores[index] >= 70)",
      },
      {
        id: "scores-push",
        label: "Score yang lolos masuk ke passedScores.",
        type: "contains",
        target: "passedScores.push(scores[index]);",
        valueIncludes: "passedScores.push(scores[index]);",
      },
    ],
  },
  skillTags: ["JavaScript", "Functions", "Conditionals", "Loops"],
};
