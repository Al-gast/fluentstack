import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const typedFrontendBoundariesModule: Module = {
  id: "typescript-typed-frontend-boundaries",
  trackId: "frontend-engineering",
  title: "Typed Frontend Boundaries",
  slug: "typescript-typed-frontend-boundaries",
  description:
    "Menggunakan TypeScript di boundary penting frontend: API response, form input, data siap UI, reusable helper, dan type yang tetap mudah dibaca.",
  order: 20,
  lessonIds: [
    "typescript-api-response-types",
    "typescript-form-input-data",
    "typescript-component-ready-data-shapes",
    "typescript-reusable-frontend-logic",
    "typescript-readable-types",
    "typescript-typed-frontend-boundaries-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["TypeScript", "API", "Forms", "Data Modeling", "Frontend Boundaries"],
};

export const typescriptApiResponseTypesLesson: Lesson = {
  id: "typescript-api-response-types",
  trackId: "frontend-engineering",
  moduleId: "typescript-typed-frontend-boundaries",
  title: "Typing API Responses",
  slug: "typescript-api-response-types",
  description:
    "Memberi type pada data yang datang dari luar app sebelum dipakai untuk render.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan API response sebagai boundary luar aplikasi",
    "Membuat type untuk response object sederhana",
    "Membedakan raw response dan data yang aman dipakai UI",
  ],
  skillTags: ["TypeScript", "API Response", "Data Boundary"],
  blocks: [
    {
      id: "typescript-api-response-types-intro",
      type: "text",
      title: "Data dari API masuk lewat boundary",
      content:
        "Di module sebelumnya, kamu sudah membuat union, narrowing, generic result, dan utility type. Sekarang kita pakai skill itu di tempat yang sering membuat bug frontend: boundary data.\n\nBoundary adalah titik saat data masuk, keluar, atau berubah bentuk. API response adalah boundary karena datanya datang dari luar kode UI. TypeScript tidak otomatis menjamin API selalu benar saat runtime, tetapi type yang jelas membuat kode setelah boundary lebih mudah dibaca dan lebih sulit salah pakai.",
    },
    {
      id: "typescript-api-response-types-example",
      type: "code-example",
      title: "Response sebelum dirender",
      language: "ts",
      code: `type LessonApiResponse = {
  id: string;
  title: string;
  minutes: number;
  published: boolean;
};

function getLessonTitle(response: LessonApiResponse): string {
  return response.title;
}`,
      explanation:
        "Type ini mendeskripsikan bentuk data yang kamu harapkan dari API. Setelah function menerima LessonApiResponse, kode di dalamnya bisa memakai property dengan lebih jelas.",
    },
    {
      id: "typescript-api-response-types-runtime-note",
      type: "callout",
      variant: "important",
      title: "Type bukan pengganti validasi runtime",
      content:
        "TypeScript membantu saat menulis kode, tetapi response API tetap datang saat app berjalan. Untuk module ini, fokusnya adalah membuat batas data lebih jelas. Runtime schema validation akan dipelajari nanti saat kebutuhan project sudah lebih besar.",
    },
    {
      id: "typescript-api-response-types-coding-practice",
      type: "coding-practice",
      challengeId: "type-api-response-before-rendering",
    },
    {
      id: "typescript-api-response-types-summary",
      type: "summary",
      points: [
        "API response adalah boundary karena data datang dari luar app.",
        "Type response membuat property yang diharapkan terlihat jelas.",
        "TypeScript membantu kode setelah boundary, bukan membuktikan server selalu benar.",
        "Hindari `any` di boundary karena justru menghilangkan manfaat TypeScript.",
        "Berikutnya, kamu akan mengetik data yang datang dari user input.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-api-response-types-intro",
      "typescript-api-response-types-example",
      "typescript-api-response-types-runtime-note",
      "typescript-api-response-types-coding-practice",
      "typescript-api-response-types-summary",
    ],
  },
};

export const typescriptFormInputDataLesson: Lesson = {
  id: "typescript-form-input-data",
  trackId: "frontend-engineering",
  moduleId: "typescript-typed-frontend-boundaries",
  title: "Typing Form dan Input Data",
  slug: "typescript-form-input-data",
  description:
    "Mengetik value dari form dan hasil validasi sederhana sebelum data dipakai.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan input user sebagai data boundary",
    "Membuat type untuk form values",
    "Membuat validation result dengan success dan error branch",
  ],
  skillTags: ["TypeScript", "Forms", "Validation Result"],
  blocks: [
    {
      id: "typescript-form-input-data-intro",
      type: "text",
      title: "User input juga perlu batas yang jelas",
      content:
        "Form adalah boundary lain yang sering membuat data berantakan. Semua input dari browser biasanya mulai sebagai string, lalu app perlu memutuskan apakah value itu valid, kosong, terlalu pendek, atau siap dikirim.\n\nType yang baik tidak membuat form otomatis benar. Type membantu kamu membedakan data mentah dari user, hasil validasi, dan data yang sudah aman untuk langkah berikutnya.",
    },
    {
      id: "typescript-form-input-data-example",
      type: "code-example",
      title: "Form values dan validation result",
      language: "ts",
      code: `type SignupFormValues = {
  email: string;
  password: string;
};

type ValidationResult =
  | { ok: true; values: SignupFormValues }
  | { ok: false; message: string };

function validateSignup(values: SignupFormValues): ValidationResult {
  if (!values.email.includes("@")) {
    return { ok: false, message: "Email belum valid." };
  }

  return { ok: true, values };
}`,
      explanation:
        "Form values menyimpan input yang sedang dibaca. ValidationResult membedakan branch sukses dan gagal sehingga kode berikutnya harus mengecek `ok` dulu.",
    },
    {
      id: "typescript-form-input-data-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan langsung percaya input",
      content:
        "Kesalahan umum adalah memberi type bagus pada form values, lalu menganggap value pasti valid. Type `string` hanya berarti bentuk datanya string. Isi string tetap perlu dicek sesuai aturan form.",
    },
    {
      id: "typescript-form-input-data-coding-practice",
      type: "coding-practice",
      challengeId: "type-form-values-validation-result",
    },
    {
      id: "typescript-form-input-data-summary",
      type: "summary",
      points: [
        "Input user adalah boundary karena datang dari luar logic app.",
        "Form values mendeskripsikan data mentah yang sedang dibaca.",
        "Validation result membuat branch sukses dan gagal lebih eksplisit.",
        "Type tidak menggantikan validasi isi input.",
        "Berikutnya, kamu akan membentuk data agar siap dipakai oleh UI component.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-form-input-data-intro",
      "typescript-form-input-data-example",
      "typescript-form-input-data-common-mistake",
      "typescript-form-input-data-coding-practice",
      "typescript-form-input-data-summary",
    ],
  },
};

export const typescriptComponentReadyDataShapesLesson: Lesson = {
  id: "typescript-component-ready-data-shapes",
  trackId: "frontend-engineering",
  moduleId: "typescript-typed-frontend-boundaries",
  title: "Component-Ready Data Shapes",
  slug: "typescript-component-ready-data-shapes",
  description:
    "Membentuk data mentah menjadi data yang lebih bersih sebelum dikirim ke bagian UI.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Membedakan raw data dan data siap UI",
    "Membuat type untuk shape yang nyaman dipakai component",
    "Menulis transform kecil dari response ke UI model",
  ],
  skillTags: ["TypeScript", "UI Data", "React Preparation"],
  blocks: [
    {
      id: "typescript-component-ready-data-shapes-intro",
      type: "text",
      title: "UI tidak harus menerima data mentah",
      content:
        "Saat nanti masuk React, component akan lebih nyaman jika menerima data yang sudah bersih. Data dari API sering memakai nama property yang berbeda, field nullable, atau nilai yang masih perlu diformat.\n\nComponent-ready data shape berarti kamu membuat bentuk data yang sesuai kebutuhan UI. Ini bukan React implementation dulu. Ini persiapan agar component nanti tidak penuh dengan pengecekan dan transform kecil yang tersebar.",
    },
    {
      id: "typescript-component-ready-data-shapes-example",
      type: "code-example",
      title: "Dari raw response ke card data",
      language: "ts",
      code: `type CourseResponse = {
  course_id: string;
  course_title: string;
  estimated_minutes: number;
};

type CourseCardData = {
  id: string;
  title: string;
  durationLabel: string;
};

function toCourseCardData(course: CourseResponse): CourseCardData {
  return {
    id: course.course_id,
    title: course.course_title,
    durationLabel: course.estimated_minutes + " menit",
  };
}`,
      explanation:
        "Raw response mengikuti bentuk dari API. CourseCardData mengikuti kebutuhan UI. Transform kecil membuat batasnya jelas.",
    },
    {
      id: "typescript-component-ready-data-shapes-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Bentuk data sebelum render",
      content:
        "Jika UI berulang kali melakukan rename property, format label, atau handle nullable value, pertimbangkan membuat UI data type dan transform function. Ini membuat component nanti lebih fokus ke tampilan.",
    },
    {
      id: "typescript-component-ready-data-shapes-coding-practice",
      type: "coding-practice",
      challengeId: "create-component-ready-data-shape",
    },
    {
      id: "typescript-component-ready-data-shapes-summary",
      type: "summary",
      points: [
        "Raw data mengikuti sumber data, bukan selalu kebutuhan UI.",
        "Component-ready data shape membuat data lebih enak dipakai di UI.",
        "Transform function adalah boundary antara response dan render.",
        "Persiapan ini membuat React component nanti lebih sederhana.",
        "Berikutnya, kamu akan mengetik reusable frontend logic.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-component-ready-data-shapes-intro",
      "typescript-component-ready-data-shapes-example",
      "typescript-component-ready-data-shapes-decision-rule",
      "typescript-component-ready-data-shapes-coding-practice",
      "typescript-component-ready-data-shapes-summary",
    ],
  },
};

export const typescriptReusableFrontendLogicLesson: Lesson = {
  id: "typescript-reusable-frontend-logic",
  trackId: "frontend-engineering",
  moduleId: "typescript-typed-frontend-boundaries",
  title: "Typing Reusable Frontend Logic",
  slug: "typescript-reusable-frontend-logic",
  description:
    "Memberi type pada helper frontend yang dipakai ulang, terutama return value sukses dan gagal.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan helper function sebagai boundary logic kecil",
    "Membuat typed result object untuk reusable function",
    "Menghindari return value yang berubah-ubah tanpa type jelas",
  ],
  skillTags: ["TypeScript", "Reusable Logic", "Result Type"],
  blocks: [
    {
      id: "typescript-reusable-frontend-logic-intro",
      type: "text",
      title: "Helper yang dipakai ulang perlu kontrak kecil",
      content:
        "Reusable frontend logic sering terlihat sederhana: format price, parse input, cari item, atau siapkan payload. Tetapi saat function dipakai di beberapa tempat, return value yang tidak jelas bisa menyebarkan bug.\n\nType pada parameter dan return value membuat helper punya kontrak kecil. Orang yang memakai helper tahu apa yang harus diberikan dan apa yang mungkin diterima kembali.",
    },
    {
      id: "typescript-reusable-frontend-logic-example",
      type: "code-example",
      title: "Helper dengan success/error result",
      language: "ts",
      code: `type ParseResult<TValue> =
  | { ok: true; value: TValue }
  | { ok: false; message: string };

function parseQuantity(value: string): ParseResult<number> {
  const quantity = Number(value);

  if (Number.isNaN(quantity)) {
    return { ok: false, message: "Jumlah belum valid." };
  }

  return { ok: true, value: quantity };
}`,
      explanation:
        "Helper ini tidak melempar error untuk kasus input biasa. Ia mengembalikan result object yang harus dicek sebelum value dipakai.",
    },
    {
      id: "typescript-reusable-frontend-logic-warning",
      type: "callout",
      variant: "warning",
      title: "Jangan sembunyikan kemungkinan gagal",
      content:
        "Jika helper bisa gagal, jangan return value palsu seperti `0` atau empty string tanpa alasan jelas. Result type membuat kemungkinan gagal terlihat di kode pemanggil.",
    },
    {
      id: "typescript-reusable-frontend-logic-coding-practice",
      type: "coding-practice",
      challengeId: "type-reusable-frontend-result",
    },
    {
      id: "typescript-reusable-frontend-logic-summary",
      type: "summary",
      points: [
        "Reusable helper perlu parameter dan return type yang jelas.",
        "Result type cocok untuk helper yang bisa sukses atau gagal.",
        "Generic result menjaga data sukses tetap spesifik.",
        "Return value yang eksplisit lebih aman daripada nilai fallback yang membingungkan.",
        "Berikutnya, kamu akan merapikan type agar tetap readable.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-reusable-frontend-logic-intro",
      "typescript-reusable-frontend-logic-example",
      "typescript-reusable-frontend-logic-warning",
      "typescript-reusable-frontend-logic-coding-practice",
      "typescript-reusable-frontend-logic-summary",
    ],
  },
};

export const typescriptReadableTypesLesson: Lesson = {
  id: "typescript-readable-types",
  trackId: "frontend-engineering",
  moduleId: "typescript-typed-frontend-boundaries",
  title: "Keeping Types Readable",
  slug: "typescript-readable-types",
  description:
    "Memutuskan kapan type cukup inline, kapan perlu diberi nama, dan kapan perlu disederhanakan.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Membaca tanda type yang mulai terlalu rumit",
    "Memecah type panjang menjadi nama yang jelas",
    "Menjaga type boundary tetap praktis dan tidak over-engineered",
  ],
  skillTags: ["TypeScript", "Readable Types", "Refactoring"],
  blocks: [
    {
      id: "typescript-readable-types-intro",
      type: "text",
      title: "Type yang aman juga harus bisa dibaca",
      content:
        "TypeScript bisa membantu, tetapi type yang terlalu panjang bisa membuat kode lebih sulit dipahami. Tujuan module ini bukan membuat type paling pintar. Tujuannya membuat boundary data aman dan tetap enak dirawat.\n\nReadable type biasanya punya nama yang menjelaskan niat. Jika sebuah shape dipakai berulang, menjadi bagian boundary, atau punya arti domain, beri nama. Jika shape sangat kecil dan hanya dipakai sekali, inline type masih wajar.",
    },
    {
      id: "typescript-readable-types-case-study",
      type: "code-example",
      title: "Type panjang dipecah menjadi nama",
      language: "ts",
      code: `type ApiResult<TData> =
  | { ok: true; data: TData }
  | { ok: false; message: string };

type LessonCard = {
  id: string;
  title: string;
  durationLabel: string;
};

type LessonCardsResult = ApiResult<LessonCard[]>;`,
      explanation:
        "Nama LessonCard dan LessonCardsResult membuat maksud data lebih cepat terbaca dibanding menulis semua bentuk type langsung di setiap function.",
    },
    {
      id: "typescript-readable-types-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Aturan kecil untuk readability",
      content:
        "Inline type boleh untuk bentuk kecil yang hanya muncul sekali. Beri nama jika type dipakai ulang, muncul di boundary, punya arti produk, atau membuat function signature terlalu panjang. Sederhanakan jika type mulai butuh penjelasan panjang hanya untuk dibaca.",
    },
    {
      id: "typescript-readable-types-coding-practice",
      type: "coding-practice",
      challengeId: "refactor-readable-types",
    },
    {
      id: "typescript-readable-types-checklist",
      type: "callout",
      variant: "important",
      title: "Checklist sebelum lanjut",
      content:
        "Cek type boundary kamu: nama type menjelaskan niat, tidak memakai `any`, tidak memakai `as` sebagai jalan pintas utama, dan tidak terlalu generik sampai pembaca harus menebak data apa yang sedang dimodelkan.",
    },
    {
      id: "typescript-readable-types-summary",
      type: "summary",
      points: [
        "Type yang baik harus aman dan mudah dibaca.",
        "Beri nama pada type yang dipakai ulang atau menjadi boundary penting.",
        "Jangan membuat type lebih kompleks dari kebutuhan data saat ini.",
        "`any` dan cast agresif biasanya tanda boundary belum dipikirkan.",
        "Berikutnya, Uji Kompetensi akan mengecek API, form, UI data shape, helper result, dan readability sekaligus.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-readable-types-intro",
      "typescript-readable-types-case-study",
      "typescript-readable-types-decision-rule",
      "typescript-readable-types-coding-practice",
      "typescript-readable-types-checklist",
      "typescript-readable-types-summary",
    ],
  },
};

export const typescriptTypedFrontendBoundariesAssessmentLesson: Lesson = {
  id: "typescript-typed-frontend-boundaries-assessment",
  trackId: "frontend-engineering",
  moduleId: "typescript-typed-frontend-boundaries",
  title: "Uji Kompetensi Typed Frontend Boundaries",
  slug: "typescript-typed-frontend-boundaries-assessment",
  description:
    "Checkpoint kesiapan mengetik API response, form values, UI-ready data, reusable helper, dan type boundary yang readable.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 80,
  objectives: [
    "Mengecek pemahaman typed frontend boundaries",
    "Mengetik data boundary tanpa memakai `any` sebagai jalan pintas",
    "Menjelaskan bagaimana data mentah menjadi data siap UI",
  ],
  skillTags: ["TypeScript", "Frontend Boundaries", "Assessment"],
  blocks: [
    {
      id: "typescript-typed-frontend-boundaries-assessment-recap",
      type: "text",
      title: "Checkpoint: apakah boundary data kamu sudah jelas?",
      content:
        "Uji Kompetensi ini mengecek apakah kamu bisa memakai TypeScript di tempat yang paling berguna untuk frontend: data dari API, input user, transform ke UI data shape, reusable helper, dan readability type.\n\nTargetnya bukan membuat type yang rumit. Targetnya membuat data yang masuk ke UI punya bentuk yang jelas, kemungkinan gagal terlihat, dan type tetap bisa dibaca oleh engineer lain.",
    },
    {
      id: "typescript-typed-frontend-boundaries-assessment-quiz",
      type: "quiz",
      quizId: "typescript-typed-frontend-boundaries-assessment-quiz",
    },
    {
      id: "typescript-typed-frontend-boundaries-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "type-frontend-boundary-checkpoint",
    },
    {
      id: "typescript-typed-frontend-boundaries-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan singkat tentang boundary data di checkpoint kamu. Jelaskan data mentah masuk dari mana, type apa yang menjaga boundary, dan bagaimana data menjadi siap dipakai UI.\n\nGunakan format:\n- Data masuk dari:\n- Type boundary:\n- Transform ke UI data:\n- Kenapa tidak memakai any:\n- Hal yang sengaja belum dibuat rumit:",
      placeholder:
        "Data masuk dari: API lessons dan input filter.\nType boundary: LessonApiResponse, LessonFilterValues, dan ApiResult.\nTransform ke UI data: response diubah menjadi LessonCardData.\nKenapa tidak memakai any: supaya property yang dipakai UI jelas.\nHal yang sengaja belum dibuat rumit: runtime schema validation.",
      minimumCharacters: 200,
      checklist: [
        "Menyebut minimal satu sumber data boundary.",
        "Menyebut type yang menjaga boundary.",
        "Menjelaskan transform dari raw data ke UI-ready data.",
        "Menjelaskan kenapa `any` dihindari.",
        "Menyebut batas yang belum perlu dibuat kompleks.",
      ],
      modelAnswer:
        "Data masuk dari API lessons dan input filter. Type boundary yang dipakai adalah LessonApiResponse untuk response, LessonFilterValues untuk input, dan ApiResult untuk hasil helper. Response diubah menjadi LessonCardData agar UI menerima id, title, dan durationLabel yang sudah bersih. Saya tidak memakai any karena UI perlu property yang jelas. Hal yang belum dibuat rumit adalah runtime schema validation dan contract tooling karena module ini fokus ke TypeScript boundary dasar.",
    },
    {
      id: "typescript-typed-frontend-boundaries-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge typed frontend boundaries",
      description:
        "Baca dokumentasi TypeScript yang mendukung boundary data sehari-hari. Ambil bagian yang praktis untuk API, form, helper, dan data siap UI.",
      links: [
        {
          source: "TypeScript Handbook",
          title: "Everyday Types",
          url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
          focus: [
            "object type",
            "array type",
            "function parameter dan return type",
            "union type untuk value terbatas",
          ],
          ignoreForNow: ["advanced type operators", "class-heavy examples"],
        },
        {
          source: "TypeScript Handbook",
          title: "Object Types",
          url: "https://www.typescriptlang.org/docs/handbook/2/objects.html",
          focus: [
            "property type",
            "optional property",
            "readonly sebagai konsep awal",
          ],
          ignoreForNow: ["index signatures lanjutan", "mapped types detail"],
        },
        {
          source: "TypeScript Handbook",
          title: "Generics",
          url: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
          focus: [
            "generic function dasar",
            "type parameter untuk result object",
            "menjaga data tetap spesifik saat helper reusable",
          ],
          ignoreForNow: ["generic constraints lanjutan", "conditional types"],
        },
        {
          source: "TypeScript Handbook",
          title: "Utility Types",
          url: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
          focus: ["Pick", "Omit", "Partial", "Record"],
          ignoreForNow: [
            "utility type yang jarang dipakai",
            "type manipulation yang terlalu jauh untuk boundary awal",
          ],
        },
      ],
      followUpAction:
        "Pilih satu type boundary dari checkpoint kamu, lalu bandingkan dengan contoh object type atau generic di TypeScript Handbook.",
    },
    {
      id: "typescript-typed-frontend-boundaries-assessment-summary",
      type: "summary",
      points: [
        "API response, form input, transform data, dan reusable helper adalah boundary penting frontend.",
        "Type boundary yang jelas membuat data lebih aman sebelum masuk UI.",
        "UI-ready data shape mempersiapkan kamu untuk React component.",
        "Readable type lebih berharga daripada type yang terlihat pintar tetapi sulit dirawat.",
        "Berikutnya, kamu siap masuk React Fundamentals dengan data shape dan type boundary yang lebih rapi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-typed-frontend-boundaries-assessment-recap",
      "typescript-typed-frontend-boundaries-assessment-quiz",
      "typescript-typed-frontend-boundaries-assessment-coding-practice",
      "typescript-typed-frontend-boundaries-assessment-writing-practice",
      "typescript-typed-frontend-boundaries-assessment-docs",
      "typescript-typed-frontend-boundaries-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const typescriptTypedFrontendBoundariesAssessmentQuiz: Quiz = {
  id: "typescript-typed-frontend-boundaries-assessment-quiz",
  lessonId: "typescript-typed-frontend-boundaries-assessment",
  title: "Uji Kompetensi Typed Frontend Boundaries",
  passingScore: 70,
  questions: [
    {
      id: "typescript-typed-frontend-boundaries-q1",
      type: "multiple-choice",
      question: "Kenapa API response disebut boundary dalam frontend app?",
      options: [
        "Karena datanya datang dari luar kode UI dan perlu bentuk yang jelas",
        "Karena API response selalu otomatis valid",
        "Karena TypeScript menjalankan server",
        "Karena semua response harus disimpan di localStorage",
      ],
      correctAnswer: "Karena datanya datang dari luar kode UI dan perlu bentuk yang jelas",
      explanation:
        "API response datang dari luar app. Type boundary membantu kode setelahnya membaca property dengan lebih jelas.",
    },
    {
      id: "typescript-typed-frontend-boundaries-q2",
      type: "true-false",
      question:
        "TypeScript type pada API response menggantikan kebutuhan runtime validation untuk semua kasus produksi.",
      correctAnswer: false,
      explanation:
        "TypeScript membantu saat development. Data API tetap datang saat runtime, sehingga validasi runtime bisa dibutuhkan di module yang lebih lanjut.",
    },
    {
      id: "typescript-typed-frontend-boundaries-q3",
      type: "multiple-choice",
      question:
        "Mana pilihan yang paling baik untuk hasil validasi form yang bisa sukses atau gagal?",
      options: [
        `{ ok: true; values: FormValues } | { ok: false; message: string }`,
        "any",
        "string",
        "{ values?: FormValues; message?: string } tanpa status",
      ],
      correctAnswer: `{ ok: true; values: FormValues } | { ok: false; message: string }`,
      explanation:
        "Discriminated union dengan ok membuat branch sukses dan gagal lebih jelas.",
    },
    {
      id: "typescript-typed-frontend-boundaries-q4",
      type: "multiple-choice",
      question:
        "Apa manfaat membuat UI-ready data shape sebelum component menerima data?",
      options: [
        "Component menerima data yang lebih bersih dan tidak penuh transform kecil",
        "Component tidak perlu ditulis lagi",
        "API otomatis berubah mengikuti UI",
        "Semua nullable value boleh diabaikan",
      ],
      correctAnswer: "Component menerima data yang lebih bersih dan tidak penuh transform kecil",
      explanation:
        "UI-ready data shape memindahkan rename, formatting, dan fallback ke boundary transform.",
    },
    {
      id: "typescript-typed-frontend-boundaries-q5",
      type: "multiple-choice",
      question:
        "Kapan type sebaiknya diberi nama, bukan terus ditulis inline?",
      options: [
        "Saat dipakai ulang, menjadi boundary penting, atau punya arti produk",
        "Setiap kali ada satu property",
        "Hanya saat TypeScript error",
        "Saat ingin menghindari semua function",
      ],
      correctAnswer: "Saat dipakai ulang, menjadi boundary penting, atau punya arti produk",
      explanation:
        "Nama type membantu readability saat shape punya peran yang jelas di app.",
    },
  ],
};

const typeScriptBoundaryPreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan TypeScript Boundary</h1>
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

export const typeApiResponseBeforeRenderingChallenge: CodingChallenge = {
  id: "type-api-response-before-rendering",
  lessonId: "typescript-api-response-types",
  title: "Type API response sebelum render",
  description:
    "Latihan memberi type pada response lesson sebelum property-nya dipakai untuk UI.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type LessonApiResponse.",
    "Type harus punya id, title, minutes, dan published.",
    "Gunakan LessonApiResponse pada function getLessonLabel.",
    "Function harus return label berisi title dan minutes.",
  ],
  starterCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `// Buat LessonApiResponse di sini.

const response = {
  id: "lesson-1",
  title: "Typing API Responses",
  minutes: 32,
  published: true,
};

function getLessonLabel(lesson) {
  return lesson.title + " - " + lesson.minutes + " menit";
}`,
  },
  solutionCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `type LessonApiResponse = {
  id: string;
  title: string;
  minutes: number;
  published: boolean;
};

const response: LessonApiResponse = {
  id: "lesson-1",
  title: "Typing API Responses",
  minutes: 32,
  published: true,
};

function getLessonLabel(lesson: LessonApiResponse): string {
  return lesson.title + " - " + lesson.minutes + " menit";
}`,
  },
  checklist: [
    "LessonApiResponse mendeskripsikan response API.",
    "Response memakai LessonApiResponse.",
    "Function menerima LessonApiResponse dan return string.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "lesson-api-response",
        label: "LessonApiResponse dibuat.",
        type: "contains",
        target: "type LessonApiResponse = {",
        valueIncludes: "type LessonApiResponse = {",
      },
      {
        id: "lesson-title",
        label: "Response punya title string.",
        type: "contains",
        target: "title: string;",
        valueIncludes: "title: string;",
      },
      {
        id: "lesson-minutes",
        label: "Response punya minutes number.",
        type: "contains",
        target: "minutes: number;",
        valueIncludes: "minutes: number;",
      },
      {
        id: "response-type",
        label: "response memakai LessonApiResponse.",
        type: "contains",
        target: "const response: LessonApiResponse = {",
        valueIncludes: "const response: LessonApiResponse = {",
      },
      {
        id: "label-function-type",
        label: "getLessonLabel menerima LessonApiResponse.",
        type: "contains",
        target: "function getLessonLabel(lesson: LessonApiResponse): string",
        valueIncludes: "function getLessonLabel(lesson: LessonApiResponse): string",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "API response punya type eksplisit sebelum property dipakai untuk label UI. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "API Response", "Data Boundary"],
};

export const typeFormValuesValidationResultChallenge: CodingChallenge = {
  id: "type-form-values-validation-result",
  lessonId: "typescript-form-input-data",
  title: "Type form values dan validation result",
  description:
    "Latihan mengetik input form dan hasil validasi sukses atau gagal.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type ContactFormValues.",
    "Buat type ValidationResult dengan branch ok true dan ok false.",
    "Gunakan ContactFormValues pada validateContactForm.",
    "Function harus return ValidationResult.",
  ],
  starterCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `// Buat ContactFormValues dan ValidationResult di sini.

function validateContactForm(values) {
  if (values.message.length < 10) {
    return { ok: false, message: "Pesan terlalu pendek." };
  }

  return { ok: true, values };
}`,
  },
  solutionCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ValidationResult =
  | { ok: true; values: ContactFormValues }
  | { ok: false; message: string };

function validateContactForm(values: ContactFormValues): ValidationResult {
  if (values.message.length < 10) {
    return { ok: false, message: "Pesan terlalu pendek." };
  }

  return { ok: true, values };
}`,
  },
  checklist: [
    "ContactFormValues memuat name, email, dan message.",
    "ValidationResult punya branch sukses dan gagal.",
    "Function memakai ContactFormValues dan return ValidationResult.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "contact-form-values",
        label: "ContactFormValues dibuat.",
        type: "contains",
        target: "type ContactFormValues = {",
        valueIncludes: "type ContactFormValues = {",
      },
      {
        id: "message-string",
        label: "message bertipe string.",
        type: "contains",
        target: "message: string;",
        valueIncludes: "message: string;",
      },
      {
        id: "validation-result",
        label: "ValidationResult dibuat.",
        type: "contains",
        target: "type ValidationResult =",
        valueIncludes: "type ValidationResult =",
      },
      {
        id: "validation-success",
        label: "ValidationResult success branch punya values.",
        type: "contains",
        target: "| { ok: true; values: ContactFormValues }",
        valueIncludes: "| { ok: true; values: ContactFormValues }",
      },
      {
        id: "validation-error",
        label: "ValidationResult error branch punya message.",
        type: "contains",
        target: "| { ok: false; message: string };",
        valueIncludes: "| { ok: false; message: string };",
      },
      {
        id: "validate-function",
        label: "validateContactForm memakai type form dan result.",
        type: "contains",
        target: "function validateContactForm(values: ContactFormValues): ValidationResult",
        valueIncludes: "function validateContactForm(values: ContactFormValues): ValidationResult",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Form values dan hasil validasi dipisahkan sehingga branch sukses dan gagal terlihat jelas. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Forms", "Validation Result"],
};

export const createComponentReadyDataShapeChallenge: CodingChallenge = {
  id: "create-component-ready-data-shape",
  lessonId: "typescript-component-ready-data-shapes",
  title: "Buat data shape siap UI",
  description:
    "Latihan mengubah raw API response menjadi data yang lebih nyaman dipakai component.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type CourseApiResponse untuk data mentah.",
    "Buat type CourseCardData untuk data siap UI.",
    "Gunakan kedua type pada toCourseCardData.",
    "Return object dengan id, title, dan durationLabel.",
  ],
  starterCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `// Buat CourseApiResponse dan CourseCardData di sini.

function toCourseCardData(course) {
  return {
    id: course.course_id,
    title: course.course_title,
    durationLabel: course.estimated_minutes + " menit",
  };
}`,
  },
  solutionCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `type CourseApiResponse = {
  course_id: string;
  course_title: string;
  estimated_minutes: number;
};

type CourseCardData = {
  id: string;
  title: string;
  durationLabel: string;
};

function toCourseCardData(course: CourseApiResponse): CourseCardData {
  return {
    id: course.course_id,
    title: course.course_title,
    durationLabel: course.estimated_minutes + " menit",
  };
}`,
  },
  checklist: [
    "Raw API response punya type sendiri.",
    "Data siap UI punya type sendiri.",
    "Transform function mengubah raw response ke UI data.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "course-api-response",
        label: "CourseApiResponse dibuat.",
        type: "contains",
        target: "type CourseApiResponse = {",
        valueIncludes: "type CourseApiResponse = {",
      },
      {
        id: "course-card-data",
        label: "CourseCardData dibuat.",
        type: "contains",
        target: "type CourseCardData = {",
        valueIncludes: "type CourseCardData = {",
      },
      {
        id: "duration-label",
        label: "CourseCardData punya durationLabel.",
        type: "contains",
        target: "durationLabel: string;",
        valueIncludes: "durationLabel: string;",
      },
      {
        id: "transform-function",
        label: "toCourseCardData memakai kedua type.",
        type: "contains",
        target: "function toCourseCardData(course: CourseApiResponse): CourseCardData",
        valueIncludes: "function toCourseCardData(course: CourseApiResponse): CourseCardData",
      },
      {
        id: "duration-transform",
        label: "estimated_minutes diubah menjadi durationLabel.",
        type: "contains",
        target: `durationLabel: course.estimated_minutes + " menit",`,
        valueIncludes: `durationLabel: course.estimated_minutes + " menit",`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Raw response dan UI-ready data shape dipisahkan lewat transform function. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "UI Data", "Data Transform"],
};

export const typeReusableFrontendResultChallenge: CodingChallenge = {
  id: "type-reusable-frontend-result",
  lessonId: "typescript-reusable-frontend-logic",
  title: "Type reusable frontend result",
  description:
    "Latihan mengetik helper reusable yang bisa mengembalikan success atau error result.",
  instructions: [
    "Fokus di tab TS.",
    "Buat generic type ParseResult<TValue>.",
    "Branch sukses harus punya ok true dan value TValue.",
    "Branch gagal harus punya ok false dan message string.",
    "Gunakan ParseResult<number> sebagai return type parsePositiveNumber.",
  ],
  starterCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `// Buat ParseResult di sini.

function parsePositiveNumber(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue) || numberValue <= 0) {
    return { ok: false, message: "Angka belum valid." };
  }

  return { ok: true, value: numberValue };
}`,
  },
  solutionCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `type ParseResult<TValue> =
  | { ok: true; value: TValue }
  | { ok: false; message: string };

function parsePositiveNumber(value: string): ParseResult<number> {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue) || numberValue <= 0) {
    return { ok: false, message: "Angka belum valid." };
  }

  return { ok: true, value: numberValue };
}`,
  },
  checklist: [
    "ParseResult generic dibuat.",
    "Branch sukses membawa value yang tetap spesifik.",
    "parsePositiveNumber return ParseResult<number>.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "parse-result",
        label: "ParseResult generic dibuat.",
        type: "contains",
        target: "type ParseResult<TValue> =",
        valueIncludes: "type ParseResult<TValue> =",
      },
      {
        id: "parse-success",
        label: "Success branch punya value TValue.",
        type: "contains",
        target: "| { ok: true; value: TValue }",
        valueIncludes: "| { ok: true; value: TValue }",
      },
      {
        id: "parse-error",
        label: "Error branch punya message.",
        type: "contains",
        target: "| { ok: false; message: string };",
        valueIncludes: "| { ok: false; message: string };",
      },
      {
        id: "parse-function",
        label: "parsePositiveNumber return ParseResult<number>.",
        type: "contains",
        target: "function parsePositiveNumber(value: string): ParseResult<number>",
        valueIncludes: "function parsePositiveNumber(value: string): ParseResult<number>",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Reusable helper mengembalikan result object yang eksplisit untuk success dan error. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Reusable Logic", "Result Type"],
};

export const refactorReadableTypesChallenge: CodingChallenge = {
  id: "refactor-readable-types",
  lessonId: "typescript-readable-types",
  title: "Refactor type agar readable",
  description:
    "Latihan memecah type boundary panjang menjadi nama yang lebih mudah dibaca.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type ApiResult<TData>.",
    "Buat type ArticleCard.",
    "Buat type ArticleCardsResult dari ApiResult<ArticleCard[]>.",
    "Gunakan ArticleCardsResult sebagai return type loadArticleCards.",
  ],
  starterCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `function loadArticleCards() {
  return {
    ok: true,
    data: [
      {
        id: "article-1",
        title: "Readable Types",
        summary: "Type yang aman juga harus mudah dibaca.",
      },
    ],
  };
}`,
  },
  solutionCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `type ApiResult<TData> =
  | { ok: true; data: TData }
  | { ok: false; message: string };

type ArticleCard = {
  id: string;
  title: string;
  summary: string;
};

type ArticleCardsResult = ApiResult<ArticleCard[]>;

function loadArticleCards(): ArticleCardsResult {
  return {
    ok: true,
    data: [
      {
        id: "article-1",
        title: "Readable Types",
        summary: "Type yang aman juga harus mudah dibaca.",
      },
    ],
  };
}`,
  },
  checklist: [
    "ApiResult reusable dibuat.",
    "ArticleCard diberi nama jelas.",
    "ArticleCardsResult memakai ApiResult<ArticleCard[]>.",
    "Function memakai return type bernama.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "api-result",
        label: "ApiResult generic dibuat.",
        type: "contains",
        target: "type ApiResult<TData> =",
        valueIncludes: "type ApiResult<TData> =",
      },
      {
        id: "article-card",
        label: "ArticleCard dibuat.",
        type: "contains",
        target: "type ArticleCard = {",
        valueIncludes: "type ArticleCard = {",
      },
      {
        id: "article-summary",
        label: "ArticleCard punya summary string.",
        type: "contains",
        target: "summary: string;",
        valueIncludes: "summary: string;",
      },
      {
        id: "article-cards-result",
        label: "ArticleCardsResult memakai ApiResult.",
        type: "contains",
        target: "type ArticleCardsResult = ApiResult<ArticleCard[]>;",
        valueIncludes: "type ArticleCardsResult = ApiResult<ArticleCard[]>;",
      },
      {
        id: "load-article-cards",
        label: "loadArticleCards return ArticleCardsResult.",
        type: "contains",
        target: "function loadArticleCards(): ArticleCardsResult",
        valueIncludes: "function loadArticleCards(): ArticleCardsResult",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Type panjang dipecah menjadi nama yang menjelaskan boundary dan data UI. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Readable Types", "Refactoring"],
};

export const typeFrontendBoundaryCheckpointChallenge: CodingChallenge = {
  id: "type-frontend-boundary-checkpoint",
  lessonId: "typescript-typed-frontend-boundaries-assessment",
  title: "Checkpoint typed frontend boundary",
  description:
    "Latihan akhir mengetik API response, form input, UI-ready data, dan reusable result tanpa membuat type terlalu rumit.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type LessonApiResponse untuk data mentah dari API.",
    "Buat type LessonFilterValues untuk input filter.",
    "Buat type LessonCardData untuk data siap UI.",
    "Buat generic ApiResult<TData>.",
    "Gunakan type tersebut pada toLessonCardData dan createLessonCardsResult.",
  ],
  starterCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `// Buat boundary types di sini.

function toLessonCardData(lesson) {
  return {
    id: lesson.lesson_id,
    title: lesson.lesson_title,
    durationLabel: lesson.minutes + " menit",
  };
}

function createLessonCardsResult(lessons, filters) {
  if (!filters.query) {
    return { ok: true, data: lessons.map(toLessonCardData) };
  }

  const filteredLessons = lessons.filter((lesson) =>
    lesson.lesson_title.toLowerCase().includes(filters.query.toLowerCase()),
  );

  return { ok: true, data: filteredLessons.map(toLessonCardData) };
}`,
  },
  solutionCode: {
    ...typeScriptBoundaryPreviewCode,
    ts: `type LessonApiResponse = {
  lesson_id: string;
  lesson_title: string;
  minutes: number;
  published: boolean;
};

type LessonFilterValues = {
  query: string;
};

type LessonCardData = {
  id: string;
  title: string;
  durationLabel: string;
};

type ApiResult<TData> =
  | { ok: true; data: TData }
  | { ok: false; message: string };

function toLessonCardData(lesson: LessonApiResponse): LessonCardData {
  return {
    id: lesson.lesson_id,
    title: lesson.lesson_title,
    durationLabel: lesson.minutes + " menit",
  };
}

function createLessonCardsResult(
  lessons: LessonApiResponse[],
  filters: LessonFilterValues,
): ApiResult<LessonCardData[]> {
  if (!filters.query) {
    return { ok: true, data: lessons.map(toLessonCardData) };
  }

  const filteredLessons = lessons.filter((lesson) =>
    lesson.lesson_title.toLowerCase().includes(filters.query.toLowerCase()),
  );

  return { ok: true, data: filteredLessons.map(toLessonCardData) };
}`,
  },
  checklist: [
    "API response type memodelkan data mentah.",
    "Form/input type memodelkan filter values.",
    "UI-ready data type memodelkan data siap render.",
    "ApiResult generic memodelkan hasil helper.",
    "Transform function memakai type boundary yang jelas.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "lesson-api-response",
        label: "LessonApiResponse dibuat.",
        type: "contains",
        target: "type LessonApiResponse = {",
        valueIncludes: "type LessonApiResponse = {",
      },
      {
        id: "lesson-filter-values",
        label: "LessonFilterValues dibuat.",
        type: "contains",
        target: "type LessonFilterValues = {",
        valueIncludes: "type LessonFilterValues = {",
      },
      {
        id: "lesson-card-data",
        label: "LessonCardData dibuat.",
        type: "contains",
        target: "type LessonCardData = {",
        valueIncludes: "type LessonCardData = {",
      },
      {
        id: "api-result",
        label: "ApiResult generic dibuat.",
        type: "contains",
        target: "type ApiResult<TData> =",
        valueIncludes: "type ApiResult<TData> =",
      },
      {
        id: "transform-function",
        label: "toLessonCardData memakai response dan UI data type.",
        type: "contains",
        target: "function toLessonCardData(lesson: LessonApiResponse): LessonCardData",
        valueIncludes: "function toLessonCardData(lesson: LessonApiResponse): LessonCardData",
      },
      {
        id: "checkpoint-result",
        label: "createLessonCardsResult return ApiResult<LessonCardData[]>.",
        type: "contains",
        target: "): ApiResult<LessonCardData[]> {",
        valueIncludes: "): ApiResult<LessonCardData[]> {",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Checkpoint memakai typed API response, form input values, UI-ready data, generic result, dan readable boundary names. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Frontend Boundaries", "Assessment"],
};
