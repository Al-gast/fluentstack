import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const typescriptCoreTypesModule: Module = {
  id: "typescript-core-types",
  trackId: "frontend-engineering",
  title: "TypeScript Core Types",
  slug: "typescript-core-types",
  description:
    "Memahami TypeScript sebagai JavaScript dengan type checking untuk values, arrays, objects, functions, optional fields, dan type error dasar.",
  order: 18,
  lessonIds: [
    "what-is-typescript",
    "typescript-primitive-types-arrays",
    "typescript-object-types",
    "typescript-function-types",
    "typescript-optional-fields",
    "typescript-core-types-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["TypeScript", "Types", "Frontend Data", "Type Checking"],
};

export const whatIsTypescriptLesson: Lesson = {
  id: "what-is-typescript",
  trackId: "frontend-engineering",
  moduleId: "typescript-core-types",
  title: "Apa Itu TypeScript?",
  slug: "what-is-typescript",
  description:
    "Memahami TypeScript sebagai cara menangkap kesalahan JavaScript lebih awal sebelum runtime.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 35,
  objectives: [
    "Menjelaskan TypeScript sebagai JavaScript dengan type checking",
    "Membedakan error yang tertangkap sebelum runtime dan error saat app berjalan",
    "Memahami kenapa TypeScript membantu data UI yang mulai kompleks",
  ],
  skillTags: ["TypeScript", "Type Checking"],
  blocks: [
    {
      id: "what-is-typescript-intro",
      type: "text",
      title: "TypeScript membantu sebelum kode dijalankan",
      content:
        "Di Level 5, kamu sudah belajar membuat JavaScript yang lebih rapi: module file, async flow, Browser API, transformasi data, dan debugging. Saat data dan function makin banyak, sebagian bug muncul karena value yang dipakai tidak sesuai bentuk yang kita harapkan.\n\nTypeScript membantu menangkap kesalahan seperti itu lebih awal. Ia tetap dekat dengan JavaScript, tetapi menambahkan type checking agar editor dan compiler bisa memberi tanda saat kamu memakai value dengan tipe yang salah.",
    },
    {
      id: "what-is-typescript-js-vs-ts",
      type: "code-example",
      title: "JavaScript vs TypeScript kecil",
      language: "ts",
      code: `function formatScore(score: number): string {
  return score + " poin";
}

formatScore(85);
formatScore("85"); // TypeScript memberi error sebelum runtime.`,
      explanation:
        "Parameter score diberi type number. Saat function dipanggil dengan string, TypeScript bisa memberi peringatan sebelum bug masuk ke browser.",
    },
    {
      id: "what-is-typescript-not-magic",
      type: "callout",
      variant: "important",
      title: "TypeScript bukan pengganti memahami JavaScript",
      content:
        "TypeScript tidak membuat logic otomatis benar. Ia membantu menjelaskan bentuk data dan menangkap sebagian kesalahan lebih awal. Kamu tetap perlu memahami JavaScript, DOM, async flow, dan debugging.",
    },
    {
      id: "what-is-typescript-quick-check",
      type: "quick-check",
      question: "Apa manfaat utama TypeScript di awal pembelajaran frontend modern?",
      options: [
        "Membantu menangkap tipe value yang salah sebelum runtime",
        "Menghapus kebutuhan memahami JavaScript",
        "Mengganti semua CSS dengan tipe",
        "Membuat browser selalu lebih cepat",
      ],
      correctAnswer: "Membantu menangkap tipe value yang salah sebelum runtime",
      explanation:
        "TypeScript memberi type checking agar kesalahan seperti string dipakai sebagai number bisa terlihat lebih awal.",
    },
    {
      id: "what-is-typescript-summary",
      type: "summary",
      points: [
        "TypeScript adalah JavaScript dengan type checking.",
        "Type checking membantu menemukan sebagian bug sebelum runtime.",
        "TypeScript paling berguna saat data, function, dan UI state mulai kompleks.",
        "TypeScript tetap membutuhkan pemahaman JavaScript yang kuat.",
        "Berikutnya, kamu akan menulis primitive types dan arrays.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-is-typescript-intro",
      "what-is-typescript-js-vs-ts",
      "what-is-typescript-not-magic",
      "what-is-typescript-quick-check",
      "what-is-typescript-summary",
    ],
  },
};

export const typescriptPrimitiveTypesArraysLesson: Lesson = {
  id: "typescript-primitive-types-arrays",
  trackId: "frontend-engineering",
  moduleId: "typescript-core-types",
  title: "Primitive Types dan Arrays",
  slug: "typescript-primitive-types-arrays",
  description:
    "Menulis type annotation dasar untuk string, number, boolean, dan array sederhana.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menulis type string, number, dan boolean",
    "Menulis array type seperti string[] dan number[]",
    "Memahami kapan type annotation membantu dan kapan inference sudah cukup",
  ],
  skillTags: ["TypeScript", "Primitive Types", "Arrays"],
  blocks: [
    {
      id: "typescript-primitive-types-arrays-intro",
      type: "text",
      title: "Mulai dari value yang paling sering dipakai",
      content:
        "TypeScript memakai nama type yang dekat dengan value JavaScript: `string` untuk teks, `number` untuk angka, dan `boolean` untuk true/false.\n\nUntuk array, kamu bisa menulis `string[]` untuk daftar string dan `number[]` untuk daftar number. Bentuk ini cukup untuk banyak data UI awal: daftar judul lesson, score quiz, daftar tag, atau durasi latihan.",
    },
    {
      id: "typescript-primitive-types-arrays-example",
      type: "code-example",
      title: "Primitive dan array type",
      language: "ts",
      code: `const learnerName: string = "Rina";
const completedLessons: number = 12;
const isReady: boolean = true;

const lessonTitles: string[] = ["Node.js", "npm", "TypeScript"];
const quizScores: number[] = [80, 90, 100];`,
      explanation:
        "Type annotation ditulis setelah nama variable. Untuk array, `string[]` berarti semua item harus string dan `number[]` berarti semua item harus number.",
    },
    {
      id: "typescript-primitive-types-arrays-inference",
      type: "callout",
      variant: "tip",
      title: "Tidak semua variable perlu ditulis type-nya",
      content:
        "Jika value awal sudah jelas, TypeScript sering bisa menebak type sendiri. Tetapi di awal belajar, menulis type annotation kecil bisa membantu kamu melihat hubungan antara value dan type.",
    },
    {
      id: "typescript-primitive-types-arrays-coding-practice",
      type: "coding-practice",
      challengeId: "type-simple-values-and-arrays",
    },
    {
      id: "typescript-primitive-types-arrays-quick-check",
      type: "quick-check",
      question: "Type apa yang tepat untuk daftar judul lesson?",
      options: ["string[]", "number[]", "boolean", "string"],
      correctAnswer: "string[]",
      explanation:
        "Daftar judul berisi banyak teks, jadi type yang tepat adalah array string: `string[]`.",
    },
    {
      id: "typescript-primitive-types-arrays-summary",
      type: "summary",
      points: [
        "`string`, `number`, dan `boolean` adalah primitive type yang paling sering dipakai.",
        "`string[]` berarti array berisi string.",
        "`number[]` berarti array berisi number.",
        "Type inference membantu TypeScript menebak type dari value awal.",
        "Berikutnya, kamu akan memberi type pada object yang dipakai UI.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-primitive-types-arrays-intro",
      "typescript-primitive-types-arrays-example",
      "typescript-primitive-types-arrays-inference",
      "typescript-primitive-types-arrays-coding-practice",
      "typescript-primitive-types-arrays-quick-check",
      "typescript-primitive-types-arrays-summary",
    ],
  },
};

export const typescriptObjectTypesLesson: Lesson = {
  id: "typescript-object-types",
  trackId: "frontend-engineering",
  moduleId: "typescript-core-types",
  title: "Object Types",
  slug: "typescript-object-types",
  description:
    "Mendeskripsikan bentuk object UI dengan property name dan type yang jelas.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menulis type untuk object sederhana",
    "Membaca property dan type di object type",
    "Menggunakan object type untuk data card UI",
  ],
  skillTags: ["TypeScript", "Object Types", "UI Data"],
  blocks: [
    {
      id: "typescript-object-types-intro",
      type: "text",
      title: "Object type menjelaskan bentuk data",
      content:
        "Di frontend, data yang masuk ke UI sering berbentuk object: user card, product card, lesson item, profile, atau form value. TypeScript membantu kamu menulis bentuk object itu secara eksplisit.\n\nObject type menjawab pertanyaan: property apa yang harus ada, dan masing-masing property punya type apa?",
    },
    {
      id: "typescript-object-types-example",
      type: "code-example",
      title: "Type untuk card lesson",
      language: "ts",
      code: `type LessonCard = {
  id: number;
  title: string;
  durationMinutes: number;
  isRequired: boolean;
};

const lesson: LessonCard = {
  id: 1,
  title: "Object Types",
  durationMinutes: 45,
  isRequired: true,
};`,
      explanation:
        "`LessonCard` menjelaskan property yang wajib ada. Jika title diisi number atau durationMinutes diisi string, TypeScript akan memberi error.",
    },
    {
      id: "typescript-object-types-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan biarkan object penting menjadi any",
      content:
        "Jika data penting dibiarkan `any`, TypeScript tidak bisa membantu saat property salah ketik atau value salah tipe. Mulai dari type kecil yang menjelaskan shape utama object.",
    },
    {
      id: "typescript-object-types-coding-practice",
      type: "coding-practice",
      challengeId: "type-user-card-object",
    },
    {
      id: "typescript-object-types-summary",
      type: "summary",
      points: [
        "Object type menjelaskan shape data.",
        "Setiap property bisa punya type sendiri.",
        "Object type cocok untuk data UI seperti card, profile, product, dan lesson.",
        "Type yang jelas membantu mencegah salah property atau salah value.",
        "Berikutnya, kamu akan memberi type pada function parameter dan return value.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-object-types-intro",
      "typescript-object-types-example",
      "typescript-object-types-common-mistake",
      "typescript-object-types-coding-practice",
      "typescript-object-types-summary",
    ],
  },
};

export const typescriptFunctionTypesLesson: Lesson = {
  id: "typescript-function-types",
  trackId: "frontend-engineering",
  moduleId: "typescript-core-types",
  title: "Function Types",
  slug: "typescript-function-types",
  description:
    "Memberi type pada parameter dan return value untuk helper function frontend.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menulis type pada function parameter",
    "Menulis return type sederhana",
    "Membaca error saat argument function salah type",
  ],
  skillTags: ["TypeScript", "Functions", "Return Types"],
  blocks: [
    {
      id: "typescript-function-types-intro",
      type: "text",
      title: "Function adalah pintu masuk data",
      content:
        "Function menerima input dan mengembalikan output. Jika input salah type, bug bisa muncul di dalam function. TypeScript membuat kontrak function lebih jelas: parameter menerima type apa, dan return value berbentuk apa.\n\nUntuk helper frontend, type function sering membantu saat membuat formatter, calculator kecil, mapper data, atau handler yang menerima object tertentu.",
    },
    {
      id: "typescript-function-types-example",
      type: "code-example",
      title: "Parameter dan return type",
      language: "ts",
      code: `function formatDuration(minutes: number): string {
  return minutes + " menit";
}

function getAverageScore(scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}`,
      explanation:
        "`minutes: number` berarti parameter harus number. `: string` setelah parameter list berarti function mengembalikan string.",
    },
    {
      id: "typescript-function-types-error-reading",
      type: "callout",
      variant: "tip",
      title: "Baca error dari arah argument ke parameter",
      content:
        "Jika TypeScript bilang argument type tidak cocok dengan parameter type, cek value yang kamu kirim saat memanggil function. Sering kali masalahnya ada di data pemanggil, bukan di isi function.",
    },
    {
      id: "typescript-function-types-coding-practice",
      type: "coding-practice",
      challengeId: "type-small-helper-functions",
    },
    {
      id: "typescript-function-types-summary",
      type: "summary",
      points: [
        "Parameter type menjelaskan input yang diterima function.",
        "Return type menjelaskan output function.",
        "TypeScript mengecek argument saat function dipanggil.",
        "Function type membantu helper frontend lebih mudah dipakai ulang.",
        "Berikutnya, kamu akan menangani data object yang sebagian property-nya mungkin belum ada.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-function-types-intro",
      "typescript-function-types-example",
      "typescript-function-types-error-reading",
      "typescript-function-types-coding-practice",
      "typescript-function-types-summary",
    ],
  },
};

export const typescriptOptionalFieldsLesson: Lesson = {
  id: "typescript-optional-fields",
  trackId: "frontend-engineering",
  moduleId: "typescript-core-types",
  title: "Optional Fields",
  slug: "typescript-optional-fields",
  description:
    "Memodelkan data yang boleh tidak lengkap dan membaca optional property dengan aman.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menulis optional property dengan tanda tanya",
    "Memahami kenapa optional property bisa bernilai undefined",
    "Menggunakan fallback atau optional chaining saat membaca data",
  ],
  skillTags: ["TypeScript", "Optional Fields", "UI Data"],
  blocks: [
    {
      id: "typescript-optional-fields-intro",
      type: "text",
      title: "Tidak semua data selalu lengkap",
      content:
        "Di app nyata, sebagian data boleh kosong. Profile user mungkin belum punya bio. Product mungkin belum punya discount label. Lesson mungkin belum punya estimated time.\n\nTypeScript menulis property opsional dengan tanda `?`. Artinya property itu boleh ada, boleh tidak. Saat kamu membacanya, TypeScript akan meminta kamu memperlakukan value itu sebagai sesuatu yang mungkin `undefined`.",
    },
    {
      id: "typescript-optional-fields-case-study",
      type: "code-example",
      title: "Profile dengan bio opsional",
      language: "ts",
      code: `type ProfileCard = {
  name: string;
  bio?: string;
};

function getBioLabel(profile: ProfileCard): string {
  return profile.bio ?? "Bio belum diisi";
}`,
      explanation:
        "`bio?: string` berarti bio boleh tidak ada. Operator `??` memberi fallback saat bio bernilai null atau undefined.",
    },
    {
      id: "typescript-optional-fields-error-reading",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan langsung memanggil method dari optional value",
      content:
        "Jika `bio` opsional, `profile.bio.toUpperCase()` bisa error karena bio mungkin undefined. Gunakan fallback, optional chaining, atau pengecekan if sebelum memakai method string.",
    },
    {
      id: "typescript-optional-fields-coding-practice",
      type: "coding-practice",
      challengeId: "model-optional-profile-fields",
    },
    {
      id: "typescript-optional-fields-quick-check",
      type: "quick-check",
      question: "Apa arti `bio?: string` pada object type?",
      options: [
        "bio boleh tidak ada, tetapi jika ada harus string",
        "bio wajib ada dan harus number",
        "bio hanya boleh boolean",
        "bio otomatis selalu punya string kosong",
      ],
      correctAnswer: "bio boleh tidak ada, tetapi jika ada harus string",
      explanation:
        "Tanda tanya membuat property optional. Jika property itu ada, value-nya tetap mengikuti type yang ditulis.",
    },
    {
      id: "typescript-optional-fields-summary",
      type: "summary",
      points: [
        "Optional property ditulis dengan tanda `?`.",
        "Optional property bisa bernilai undefined saat dibaca.",
        "Gunakan fallback, optional chaining, atau if check sebelum memakai value opsional.",
        "Optional fields cocok untuk data UI yang belum tentu lengkap.",
        "Berikutnya, Uji Kompetensi akan mengecek core types secara utuh.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-optional-fields-intro",
      "typescript-optional-fields-case-study",
      "typescript-optional-fields-error-reading",
      "typescript-optional-fields-coding-practice",
      "typescript-optional-fields-quick-check",
      "typescript-optional-fields-summary",
    ],
  },
};

export const typescriptCoreTypesAssessmentLesson: Lesson = {
  id: "typescript-core-types-assessment",
  trackId: "frontend-engineering",
  moduleId: "typescript-core-types",
  title: "Uji Kompetensi TypeScript Core Types",
  slug: "typescript-core-types-assessment",
  description:
    "Checkpoint kesiapan untuk primitive types, arrays, object types, function types, optional fields, dan error reading dasar.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 70,
  objectives: [
    "Mengecek pemahaman TypeScript core types",
    "Memperbaiki type sederhana pada data UI",
    "Menjelaskan object shape dan optional fields dengan jelas",
  ],
  skillTags: ["TypeScript", "Assessment", "Type Checking"],
  blocks: [
    {
      id: "typescript-core-types-assessment-recap",
      type: "text",
      title: "Checkpoint: apakah type dasar sudah terasa masuk akal?",
      content:
        "Module ini mengecek apakah kamu bisa menambahkan type pada data frontend sehari-hari. Fokusnya bukan type puzzle. Fokusnya adalah membaca value, object, function, dan optional field dengan lebih jelas.\n\nJika kamu bisa menjelaskan shape object, memberi type pada parameter function, membaca error beginner, dan memakai fallback untuk optional value, kamu siap masuk ke module Practical Type Design.",
    },
    {
      id: "typescript-core-types-assessment-quiz",
      type: "quiz",
      quizId: "typescript-core-types-assessment-quiz",
    },
    {
      id: "typescript-core-types-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "fix-basic-types-checkpoint",
    },
    {
      id: "typescript-core-types-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge TypeScript core types",
      description:
        "Gunakan TypeScript Handbook untuk memperkuat istilah resmi. Jangan masuk ke bagian advanced dulu.",
      links: [
        {
          source: "TypeScript Handbook",
          title: "Everyday Types",
          url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
          focus: [
            "primitive types",
            "array types",
            "type annotations",
            "function parameter dan return type",
            "optional properties",
          ],
          ignoreForNow: [
            "union narrowing detail",
            "type aliases lanjutan",
            "literal types",
          ],
        },
        {
          source: "TypeScript Handbook",
          title: "Object Types",
          url: "https://www.typescriptlang.org/docs/handbook/2/objects.html",
          focus: [
            "object shape",
            "property type",
            "optional property",
            "membaca object type kecil",
          ],
          ignoreForNow: [
            "index signatures",
            "extends",
            "readonly arrays",
            "intersection types",
          ],
        },
        {
          source: "TypeScript Handbook",
          title: "More on Functions",
          url: "https://www.typescriptlang.org/docs/handbook/2/functions.html",
          focus: [
            "parameter type",
            "return type",
            "function yang menerima object",
            "membaca error argument sederhana",
          ],
          ignoreForNow: [
            "function overloads",
            "this parameter",
            "generic function detail",
          ],
        },
        {
          source: "TypeScript",
          title: "TypeScript Playground",
          url: "https://www.typescriptlang.org/play/",
          focus: [
            "menulis contoh TypeScript kecil",
            "melihat error type checking",
            "membandingkan input TypeScript dan output JavaScript",
          ],
          ignoreForNow: ["compiler options lanjutan", "share config detail"],
        },
      ],
      followUpAction:
        "Buka TypeScript Playground, salin satu contoh object type dari module ini, lalu ubah satu property ke type yang salah untuk melihat pesan error.",
    },
    {
      id: "typescript-core-types-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis penjelasan singkat dalam Bahasa Indonesia tentang satu object type dari checkpoint. Jelaskan property wajib, property opsional, dan satu error yang TypeScript bisa tangkap.\n\nGunakan format:\n- Object type:\n- Property wajib:\n- Property opsional:\n- Error yang bisa dicegah:",
      placeholder:
        "Object type: ProductCard\nProperty wajib: title, price, tags\nProperty opsional: discountLabel\nError yang bisa dicegah: price diisi string padahal harus number.",
      minimumCharacters: 160,
      checklist: [
        "Menyebut nama object type.",
        "Membedakan property wajib dan opsional.",
        "Menjelaskan minimal satu error type yang realistis.",
        "Penjelasan bisa dipahami learner lain.",
      ],
      modelAnswer:
        "Object type: ProductCard. Property wajib: title sebagai string, price sebagai number, dan tags sebagai string array. Property opsional: discountLabel karena tidak semua product punya diskon. Error yang bisa dicegah: price diisi \"100000\" sebagai string, padahal function formatter membutuhkan number.",
    },
    {
      id: "typescript-core-types-assessment-summary",
      type: "summary",
      points: [
        "TypeScript membantu menjelaskan bentuk data sebelum runtime.",
        "Primitive, array, object, function, dan optional field adalah fondasi TypeScript harian.",
        "Type error perlu dibaca sebagai petunjuk hubungan value dan type.",
        "Optional field perlu fallback atau pengecekan sebelum dipakai.",
        "Berikutnya, Practical Type Design akan memakai core types ini untuk memodelkan UI state dan reusable helper dengan lebih matang.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-core-types-assessment-recap",
      "typescript-core-types-assessment-quiz",
      "typescript-core-types-assessment-coding-practice",
      "typescript-core-types-assessment-docs",
      "typescript-core-types-assessment-writing-practice",
      "typescript-core-types-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const typescriptCoreTypesAssessmentQuiz: Quiz = {
  id: "typescript-core-types-assessment-quiz",
  lessonId: "typescript-core-types-assessment",
  title: "Uji Kompetensi TypeScript Core Types",
  passingScore: 70,
  questions: [
    {
      id: "typescript-core-types-q1",
      type: "multiple-choice",
      question: "Type apa yang tepat untuk value `\"Rina\"`?",
      options: ["string", "number", "boolean", "string[]"],
      correctAnswer: "string",
      explanation:
        "Value teks memakai type `string`.",
    },
    {
      id: "typescript-core-types-q2",
      type: "multiple-choice",
      question: "Type apa yang tepat untuk daftar score `[80, 90, 100]`?",
      options: ["number[]", "string[]", "boolean", "number"],
      correctAnswer: "number[]",
      explanation:
        "Array berisi angka ditulis sebagai `number[]`.",
    },
    {
      id: "typescript-core-types-q3",
      type: "multiple-choice",
      question:
        "Dalam `function formatPrice(price: number): string`, bagian `: string` setelah parameter list berarti...",
      options: [
        "function mengembalikan string",
        "parameter price harus string",
        "function tidak boleh return apa pun",
        "variable price akan otomatis menjadi array",
      ],
      correctAnswer: "function mengembalikan string",
      explanation:
        "Return type ditulis setelah parameter list. `: string` berarti output function adalah string.",
    },
    {
      id: "typescript-core-types-q4",
      type: "true-false",
      question:
        "`bio?: string` berarti property bio boleh tidak ada, tetapi jika ada value-nya harus string.",
      correctAnswer: true,
      explanation:
        "Tanda tanya membuat property optional, bukan menghapus type dari property tersebut.",
    },
    {
      id: "typescript-core-types-q5",
      type: "multiple-choice",
      question:
        "Jika TypeScript memberi error `Argument of type 'string' is not assignable to parameter of type 'number'`, hal pertama yang perlu dicek adalah...",
      options: [
        "value yang dikirim saat function dipanggil",
        "warna tombol di CSS",
        "nama file HTML",
        "apakah localStorage penuh",
      ],
      correctAnswer: "value yang dikirim saat function dipanggil",
      explanation:
        "Error itu menunjukkan argument yang dikirim tidak cocok dengan type parameter function.",
    },
  ],
};

const emptyPreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan TypeScript</h1>
  <p>Fokus di tab TS. Preview tidak menjalankan kode TypeScript.</p>
</main>`,
  css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
  js: "",
};

export const typeSimpleValuesAndArraysChallenge: CodingChallenge = {
  id: "type-simple-values-and-arrays",
  lessonId: "typescript-primitive-types-arrays",
  title: "Type simple values dan arrays",
  description:
    "Latihan menambahkan type annotation untuk primitive value dan array sederhana.",
  instructions: [
    "Fokus di tab TS.",
    "Tambahkan type string pada learnerName.",
    "Tambahkan type number pada completedLessons.",
    "Tambahkan type boolean pada isReady.",
    "Tambahkan type string[] pada lessonTitles.",
    "Tambahkan type number[] pada quizScores.",
  ],
  starterCode: {
    ...emptyPreviewCode,
    ts: `const learnerName = "Rina";
const completedLessons = 4;
const isReady = true;

const lessonTitles = ["Node.js", "npm", "TypeScript"];
const quizScores = [80, 90, 100];`,
  },
  solutionCode: {
    ...emptyPreviewCode,
    ts: `const learnerName: string = "Rina";
const completedLessons: number = 4;
const isReady: boolean = true;

const lessonTitles: string[] = ["Node.js", "npm", "TypeScript"];
const quizScores: number[] = [80, 90, 100];`,
  },
  checklist: [
    "Primitive value diberi type yang sesuai.",
    "Array string memakai string[].",
    "Array number memakai number[].",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "learner-name-string",
        label: "learnerName bertipe string.",
        type: "contains",
        target: `const learnerName: string = "Rina";`,
        valueIncludes: `const learnerName: string = "Rina";`,
      },
      {
        id: "completed-lessons-number",
        label: "completedLessons bertipe number.",
        type: "contains",
        target: "const completedLessons: number = 4;",
        valueIncludes: "const completedLessons: number = 4;",
      },
      {
        id: "is-ready-boolean",
        label: "isReady bertipe boolean.",
        type: "contains",
        target: "const isReady: boolean = true;",
        valueIncludes: "const isReady: boolean = true;",
      },
      {
        id: "lesson-titles-string-array",
        label: "lessonTitles bertipe string array.",
        type: "contains",
        target: "const lessonTitles: string[] =",
        valueIncludes: "const lessonTitles: string[] =",
      },
      {
        id: "quiz-scores-number-array",
        label: "quizScores bertipe number array.",
        type: "contains",
        target: "const quizScores: number[] =",
        valueIncludes: "const quizScores: number[] =",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Kode TypeScript punya annotation untuk primitive value dan array. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Primitive Types", "Arrays"],
};

export const typeUserCardObjectChallenge: CodingChallenge = {
  id: "type-user-card-object",
  lessonId: "typescript-object-types",
  title: "Type user card object",
  description:
    "Latihan membuat object type untuk data card user yang siap dipakai UI.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type UserCard.",
    "Tambahkan property id: number.",
    "Tambahkan property name: string.",
    "Tambahkan property role: string.",
    "Tambahkan property isActive: boolean.",
    "Gunakan type UserCard pada userCard.",
  ],
  starterCode: {
    ...emptyPreviewCode,
    ts: `// Buat type UserCard di sini.

const userCard = {
  id: 1,
  name: "Rina",
  role: "Frontend learner",
  isActive: true,
};`,
  },
  solutionCode: {
    ...emptyPreviewCode,
    ts: `type UserCard = {
  id: number;
  name: string;
  role: string;
  isActive: boolean;
};

const userCard: UserCard = {
  id: 1,
  name: "Rina",
  role: "Frontend learner",
  isActive: true,
};`,
  },
  checklist: [
    "UserCard menjelaskan semua property utama.",
    "Setiap property punya type yang sesuai.",
    "userCard memakai type UserCard.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "user-card-type",
        label: "Type UserCard dibuat.",
        type: "contains",
        target: "type UserCard = {",
        valueIncludes: "type UserCard = {",
      },
      {
        id: "user-card-id",
        label: "id bertipe number.",
        type: "contains",
        target: "id: number;",
        valueIncludes: "id: number;",
      },
      {
        id: "user-card-name",
        label: "name bertipe string.",
        type: "contains",
        target: "name: string;",
        valueIncludes: "name: string;",
      },
      {
        id: "user-card-role",
        label: "role bertipe string.",
        type: "contains",
        target: "role: string;",
        valueIncludes: "role: string;",
      },
      {
        id: "user-card-active",
        label: "isActive bertipe boolean.",
        type: "contains",
        target: "isActive: boolean;",
        valueIncludes: "isActive: boolean;",
      },
      {
        id: "user-card-variable",
        label: "userCard memakai type UserCard.",
        type: "contains",
        target: "const userCard: UserCard = {",
        valueIncludes: "const userCard: UserCard = {",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Object userCard memakai shape UserCard dengan id, name, role, dan isActive. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Object Types", "UI Data"],
};

export const typeSmallHelperFunctionsChallenge: CodingChallenge = {
  id: "type-small-helper-functions",
  lessonId: "typescript-function-types",
  title: "Type helper functions",
  description:
    "Latihan memberi type pada parameter dan return value helper function.",
  instructions: [
    "Fokus di tab TS.",
    "Tambahkan parameter type dan return type pada formatLessonTitle.",
    "Tambahkan parameter type dan return type pada calculateTotalMinutes.",
    "Pastikan calculateTotalMinutes menerima number[].",
    "Gunakan reduce untuk menjumlahkan minutes.",
  ],
  starterCode: {
    ...emptyPreviewCode,
    ts: `function formatLessonTitle(title) {
  return title.trim().toUpperCase();
}

function calculateTotalMinutes(minutes) {
  return minutes.reduce((sum, minute) => sum + minute, 0);
}`,
  },
  solutionCode: {
    ...emptyPreviewCode,
    ts: `function formatLessonTitle(title: string): string {
  return title.trim().toUpperCase();
}

function calculateTotalMinutes(minutes: number[]): number {
  return minutes.reduce((sum, minute) => sum + minute, 0);
}`,
  },
  checklist: [
    "Parameter title bertipe string.",
    "formatLessonTitle mengembalikan string.",
    "minutes bertipe number[].",
    "calculateTotalMinutes mengembalikan number.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "format-title-function",
        label: "formatLessonTitle punya parameter dan return type.",
        type: "contains",
        target: "function formatLessonTitle(title: string): string",
        valueIncludes: "function formatLessonTitle(title: string): string",
      },
      {
        id: "total-minutes-function",
        label: "calculateTotalMinutes menerima number[] dan return number.",
        type: "contains",
        target: "function calculateTotalMinutes(minutes: number[]): number",
        valueIncludes: "function calculateTotalMinutes(minutes: number[]): number",
      },
      {
        id: "uses-reduce",
        label: "minutes dijumlahkan dengan reduce.",
        type: "contains",
        target: "minutes.reduce((sum, minute) => sum + minute, 0)",
        valueIncludes: "minutes.reduce((sum, minute) => sum + minute, 0)",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Helper function punya parameter type dan return type yang jelas. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Functions", "Return Types"],
};

export const modelOptionalProfileFieldsChallenge: CodingChallenge = {
  id: "model-optional-profile-fields",
  lessonId: "typescript-optional-fields",
  title: "Model optional profile fields",
  description:
    "Latihan membuat optional fields dan membaca value opsional dengan fallback.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type ProfileCard.",
    "name wajib bertipe string.",
    "bio optional bertipe string.",
    "websiteUrl optional bertipe string.",
    "Buat getBioLabel yang menerima ProfileCard dan return string.",
    "Gunakan fallback \"Bio belum diisi\" saat bio tidak ada.",
  ],
  starterCode: {
    ...emptyPreviewCode,
    ts: `// Buat type ProfileCard di sini.

function getBioLabel(profile) {
  return profile.bio;
}`,
  },
  solutionCode: {
    ...emptyPreviewCode,
    ts: `type ProfileCard = {
  name: string;
  bio?: string;
  websiteUrl?: string;
};

function getBioLabel(profile: ProfileCard): string {
  return profile.bio ?? "Bio belum diisi";
}`,
  },
  checklist: [
    "bio dibuat optional.",
    "websiteUrl dibuat optional.",
    "Function menerima ProfileCard.",
    "bio punya fallback saat tidak ada.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "profile-card-type",
        label: "Type ProfileCard dibuat.",
        type: "contains",
        target: "type ProfileCard = {",
        valueIncludes: "type ProfileCard = {",
      },
      {
        id: "profile-name",
        label: "name wajib bertipe string.",
        type: "contains",
        target: "name: string;",
        valueIncludes: "name: string;",
      },
      {
        id: "profile-bio-optional",
        label: "bio optional bertipe string.",
        type: "contains",
        target: "bio?: string;",
        valueIncludes: "bio?: string;",
      },
      {
        id: "profile-website-optional",
        label: "websiteUrl optional bertipe string.",
        type: "contains",
        target: "websiteUrl?: string;",
        valueIncludes: "websiteUrl?: string;",
      },
      {
        id: "bio-label-function",
        label: "getBioLabel menerima ProfileCard dan return string.",
        type: "contains",
        target: "function getBioLabel(profile: ProfileCard): string",
        valueIncludes: "function getBioLabel(profile: ProfileCard): string",
      },
      {
        id: "bio-fallback",
        label: "bio punya fallback.",
        type: "contains",
        target: `return profile.bio ?? "Bio belum diisi";`,
        valueIncludes: `return profile.bio ?? "Bio belum diisi";`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "ProfileCard punya optional fields dan getBioLabel aman saat bio belum ada. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Optional Fields", "UI Data"],
};

export const fixBasicTypesCheckpointChallenge: CodingChallenge = {
  id: "fix-basic-types-checkpoint",
  lessonId: "typescript-core-types-assessment",
  title: "Fix basic TypeScript types",
  description:
    "Checkpoint untuk memperbaiki type object, function, array, dan optional field dasar.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type ProductCard dengan title, price, tags, dan discountLabel optional.",
    "Gunakan ProductCard pada product.",
    "Buat formatPrice menerima number dan return string.",
    "Buat createProductLabel menerima ProductCard dan return string.",
    "Gunakan fallback \"Tanpa diskon\" untuk discountLabel.",
  ],
  starterCode: {
    ...emptyPreviewCode,
    ts: `// Perbaiki type di checkpoint ini.

const product = {
  title: "Keyboard",
  price: 750000,
  tags: ["hardware", "productivity"],
};

function formatPrice(price) {
  return "Rp " + price;
}

function createProductLabel(product) {
  return product.title + " - " + (product.discountLabel ?? "Tanpa diskon");
}`,
  },
  solutionCode: {
    ...emptyPreviewCode,
    ts: `type ProductCard = {
  title: string;
  price: number;
  tags: string[];
  discountLabel?: string;
};

const product: ProductCard = {
  title: "Keyboard",
  price: 750000,
  tags: ["hardware", "productivity"],
};

function formatPrice(price: number): string {
  return "Rp " + price;
}

function createProductLabel(product: ProductCard): string {
  return product.title + " - " + (product.discountLabel ?? "Tanpa diskon");
}`,
  },
  checklist: [
    "ProductCard punya primitive, array, dan optional field.",
    "product memakai ProductCard.",
    "formatPrice punya parameter dan return type.",
    "createProductLabel membaca optional field dengan fallback.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "product-card-type",
        label: "Type ProductCard dibuat.",
        type: "contains",
        target: "type ProductCard = {",
        valueIncludes: "type ProductCard = {",
      },
      {
        id: "product-title",
        label: "title bertipe string.",
        type: "contains",
        target: "title: string;",
        valueIncludes: "title: string;",
      },
      {
        id: "product-price",
        label: "price bertipe number.",
        type: "contains",
        target: "price: number;",
        valueIncludes: "price: number;",
      },
      {
        id: "product-tags",
        label: "tags bertipe string array.",
        type: "contains",
        target: "tags: string[];",
        valueIncludes: "tags: string[];",
      },
      {
        id: "product-discount-optional",
        label: "discountLabel optional.",
        type: "contains",
        target: "discountLabel?: string;",
        valueIncludes: "discountLabel?: string;",
      },
      {
        id: "product-variable",
        label: "product memakai ProductCard.",
        type: "contains",
        target: "const product: ProductCard = {",
        valueIncludes: "const product: ProductCard = {",
      },
      {
        id: "format-price",
        label: "formatPrice menerima number dan return string.",
        type: "contains",
        target: "function formatPrice(price: number): string",
        valueIncludes: "function formatPrice(price: number): string",
      },
      {
        id: "create-label",
        label: "createProductLabel menerima ProductCard dan return string.",
        type: "contains",
        target: "function createProductLabel(product: ProductCard): string",
        valueIncludes: "function createProductLabel(product: ProductCard): string",
      },
      {
        id: "discount-fallback",
        label: "discountLabel punya fallback.",
        type: "contains",
        target: `product.discountLabel ?? "Tanpa diskon"`,
        valueIncludes: `product.discountLabel ?? "Tanpa diskon"`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Checkpoint memuat object type, array type, function type, dan optional field dengan fallback. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Assessment", "Core Types"],
};
