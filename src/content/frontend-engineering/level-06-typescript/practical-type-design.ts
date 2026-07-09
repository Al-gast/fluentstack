import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const practicalTypeDesignModule: Module = {
  id: "typescript-practical-type-design",
  trackId: "frontend-engineering",
  title: "Practical Type Design",
  slug: "typescript-practical-type-design",
  description:
    "Mendesain type TypeScript praktis untuk UI state, branching logic, reusable helpers, dan data modeling frontend yang lebih aman.",
  order: 19,
  lessonIds: [
    "typescript-union-types",
    "typescript-narrowing",
    "typescript-discriminated-union-ui-state",
    "typescript-basic-generics",
    "typescript-basic-utility-types",
    "typescript-practical-type-design-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["TypeScript", "Union Types", "Narrowing", "Generics", "Utility Types"],
};

export const typescriptUnionTypesLesson: Lesson = {
  id: "typescript-union-types",
  trackId: "frontend-engineering",
  moduleId: "typescript-practical-type-design",
  title: "Union Types",
  slug: "typescript-union-types",
  description:
    "Memodelkan value yang hanya boleh memiliki beberapa pilihan tertentu.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 40,
  objectives: [
    "Menjelaskan union type sebagai daftar kemungkinan value",
    "Memakai string literal union untuk status UI",
    "Menghindari string bebas untuk value yang sebenarnya terbatas",
  ],
  skillTags: ["TypeScript", "Union Types", "UI State"],
  blocks: [
    {
      id: "typescript-union-types-intro",
      type: "text",
      title: "Tidak semua string harus bebas",
      content:
        "Di module sebelumnya, kamu sudah memberi type pada value, object, function, dan optional field. Sekarang kita mulai mendesain type agar data lebih aman dipakai untuk UI.\n\nUnion type dipakai saat sebuah value hanya boleh punya beberapa kemungkinan. Contohnya status request: `loading`, `success`, `error`, atau `empty`. Jika status ditulis sebagai string biasa, typo seperti `sucess` bisa lolos. Dengan union type, TypeScript bisa memberi tanda lebih awal.",
    },
    {
      id: "typescript-union-types-example",
      type: "code-example",
      title: "Status UI dengan union type",
      language: "ts",
      code: `type LoadStatus = "idle" | "loading" | "success" | "error";

let status: LoadStatus = "loading";
status = "success";
status = "sucess"; // TypeScript memberi error karena typo.`,
      explanation:
        "Union type membatasi value yang boleh dipakai. Ini cocok untuk status, mode, variant, role sederhana, atau pilihan yang memang terbatas.",
    },
    {
      id: "typescript-union-types-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Gunakan union saat pilihan sudah jelas",
      content:
        "Jika value hanya punya beberapa pilihan yang stabil, union type membuat kode lebih aman. Jika value benar-benar bebas dari user, misalnya isi komentar, string biasa tetap masuk akal.",
    },
    {
      id: "typescript-union-types-coding-practice",
      type: "coding-practice",
      challengeId: "model-status-union",
    },
    {
      id: "typescript-union-types-quick-check",
      type: "quick-check",
      question: "Kapan union type paling berguna?",
      options: [
        "Saat value hanya boleh memiliki beberapa pilihan tertentu",
        "Saat semua value harus bebas tanpa batas",
        "Saat ingin menghapus kebutuhan mengecek data",
        "Saat CSS tidak punya warna",
      ],
      correctAnswer: "Saat value hanya boleh memiliki beberapa pilihan tertentu",
      explanation:
        "Union type membatasi value ke beberapa kemungkinan yang valid, misalnya status UI atau mode tampilan.",
    },
    {
      id: "typescript-union-types-summary",
      type: "summary",
      points: [
        "Union type menulis beberapa kemungkinan value dengan tanda `|`.",
        "String literal union cocok untuk status UI dan mode sederhana.",
        "Union type membantu menangkap typo sebelum runtime.",
        "Gunakan union saat pilihan value memang terbatas.",
        "Berikutnya, kamu akan belajar narrowing agar TypeScript tahu value mana yang sedang dipakai.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-union-types-intro",
      "typescript-union-types-example",
      "typescript-union-types-decision-rule",
      "typescript-union-types-coding-practice",
      "typescript-union-types-quick-check",
      "typescript-union-types-summary",
    ],
  },
};

export const typescriptNarrowingLesson: Lesson = {
  id: "typescript-narrowing",
  trackId: "frontend-engineering",
  moduleId: "typescript-practical-type-design",
  title: "Narrowing",
  slug: "typescript-narrowing",
  description:
    "Mengecek value sebelum memakainya agar TypeScript tahu bentuk value yang sedang aman digunakan.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami narrowing sebagai pengecekan sebelum memakai value",
    "Menangani value seperti string atau null dengan aman",
    "Menghindari pemaksaan type saat pengecekan sederhana cukup",
  ],
  skillTags: ["TypeScript", "Narrowing", "Safe Access"],
  blocks: [
    {
      id: "typescript-narrowing-intro",
      type: "text",
      title: "TypeScript perlu bukti sebelum percaya",
      content:
        "Jika sebuah value bisa punya lebih dari satu kemungkinan type, TypeScript tidak akan langsung mengizinkan kamu memakai method yang hanya aman untuk salah satunya.\n\nNarrowing berarti memberi bukti lewat pengecekan. Setelah kamu mengecek `if (value === null)`, `typeof value === \"string\"`, atau status tertentu, TypeScript bisa menyempitkan kemungkinan type di branch berikutnya.",
    },
    {
      id: "typescript-narrowing-broken-example",
      type: "code-example",
      title: "Contoh yang perlu narrowing",
      language: "ts",
      code: `function formatName(name: string | null): string {
  return name.toUpperCase();
}`,
      explanation:
        "Kode ini bermasalah karena name mungkin null. TypeScript meminta kamu mengecek null sebelum memakai method string.",
    },
    {
      id: "typescript-narrowing-fixed-example",
      type: "code-example",
      title: "Narrowing dengan early return",
      language: "ts",
      code: `function formatName(name: string | null): string {
  if (name === null) {
    return "Nama belum tersedia";
  }

  return name.toUpperCase();
}`,
      explanation:
        "Setelah branch null dikembalikan lebih awal, TypeScript tahu bahwa di baris terakhir name adalah string.",
    },
    {
      id: "typescript-narrowing-coding-practice",
      type: "coding-practice",
      challengeId: "narrow-nullable-profile-name",
    },
    {
      id: "typescript-narrowing-summary",
      type: "summary",
      points: [
        "Narrowing adalah proses menyempitkan kemungkinan type dengan pengecekan.",
        "`if`, `typeof`, dan pengecekan literal value sering cukup untuk narrowing dasar.",
        "Early return membuat branch aman lebih mudah dibaca.",
        "Narrowing lebih sehat daripada langsung memakai `as` untuk memaksa type.",
        "Berikutnya, kamu akan memakai discriminated union untuk memodelkan UI state.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-narrowing-intro",
      "typescript-narrowing-broken-example",
      "typescript-narrowing-fixed-example",
      "typescript-narrowing-coding-practice",
      "typescript-narrowing-summary",
    ],
  },
};

export const typescriptDiscriminatedUnionUiStateLesson: Lesson = {
  id: "typescript-discriminated-union-ui-state",
  trackId: "frontend-engineering",
  moduleId: "typescript-practical-type-design",
  title: "Discriminated Union untuk UI State",
  slug: "typescript-discriminated-union-ui-state",
  description:
    "Memodelkan loading, error, empty, dan success state dengan object yang lebih aman.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 55,
  objectives: [
    "Membuat UI state dengan discriminated union",
    "Menggunakan property status sebagai discriminant",
    "Mencegah state yang tidak masuk akal, seperti success tanpa data",
  ],
  skillTags: ["TypeScript", "Discriminated Union", "UI State"],
  blocks: [
    {
      id: "typescript-discriminated-union-ui-state-intro",
      type: "text",
      title: "UI state bukan hanya satu string",
      content:
        "Status string seperti `loading` atau `success` berguna, tetapi UI sering butuh data tambahan. Saat success, kamu butuh data. Saat error, kamu butuh pesan error. Saat empty, kamu mungkin butuh pesan kosong.\n\nDiscriminated union memodelkan setiap state sebagai object. Semua object punya property pembeda yang sama, biasanya `status`. Dari status itu, TypeScript tahu property tambahan apa yang aman dipakai.",
    },
    {
      id: "typescript-discriminated-union-ui-state-case-study",
      type: "code-example",
      title: "UI state yang aman",
      language: "ts",
      code: `type LessonListState =
  | { status: "loading" }
  | { status: "empty"; message: string }
  | { status: "error"; message: string }
  | { status: "success"; lessons: string[] };

function getStateLabel(state: LessonListState): string {
  if (state.status === "success") {
    return state.lessons.length + " lesson tersedia";
  }

  if (state.status === "loading") {
    return "Memuat lesson...";
  }

  return state.message;
}`,
      explanation:
        "Saat status success, TypeScript tahu state punya lessons. Saat error atau empty, TypeScript tahu state punya message.",
    },
    {
      id: "typescript-discriminated-union-ui-state-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan campur semua property dalam satu object besar",
      content:
        "State seperti `{ status, data?, error? }` terlihat sederhana, tetapi bisa membuat state tidak masuk akal: status success tanpa data, atau status loading dengan error lama. Discriminated union membuat hubungan status dan data lebih jelas.",
    },
    {
      id: "typescript-discriminated-union-ui-state-coding-practice",
      type: "coding-practice",
      challengeId: "model-ui-state-discriminated-union",
    },
    {
      id: "typescript-discriminated-union-ui-state-summary",
      type: "summary",
      points: [
        "Discriminated union memakai property pembeda yang sama di setiap branch.",
        "Untuk UI state, property pembeda sering bernama `status`.",
        "Setiap status bisa punya property tambahan yang sesuai.",
        "Model ini membuat invalid state lebih sulit ditulis.",
        "Berikutnya, kamu akan memakai generics untuk membuat type dan helper yang bisa dipakai ulang.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-discriminated-union-ui-state-intro",
      "typescript-discriminated-union-ui-state-case-study",
      "typescript-discriminated-union-ui-state-common-mistake",
      "typescript-discriminated-union-ui-state-coding-practice",
      "typescript-discriminated-union-ui-state-summary",
    ],
  },
};

export const typescriptBasicGenericsLesson: Lesson = {
  id: "typescript-basic-generics",
  trackId: "frontend-engineering",
  moduleId: "typescript-practical-type-design",
  title: "Generics Dasar",
  slug: "typescript-basic-generics",
  description:
    "Membuat type dan helper sederhana yang reusable tanpa kehilangan informasi type.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Memahami generic sebagai type parameter",
    "Membuat reusable result type sederhana",
    "Menggunakan generic tanpa membuat type terlalu abstrak",
  ],
  skillTags: ["TypeScript", "Generics", "Reusable Types"],
  blocks: [
    {
      id: "typescript-basic-generics-intro",
      type: "text",
      title: "Reusable tanpa kehilangan type",
      content:
        "Kadang kamu ingin membuat type yang bisa dipakai untuk berbagai data. Misalnya result API bisa sukses dengan data apa saja: user, lesson, product, atau profile.\n\nGeneric memberi type parameter. Kamu bisa membayangkannya seperti placeholder type yang akan diisi saat type atau function dipakai.",
    },
    {
      id: "typescript-basic-generics-example",
      type: "code-example",
      title: "Result type sederhana",
      language: "ts",
      code: `type ApiResult<TData> =
  | { ok: true; data: TData }
  | { ok: false; error: string };

type Lesson = {
  title: string;
  minutes: number;
};

const result: ApiResult<Lesson> = {
  ok: true,
  data: {
    title: "Generics Dasar",
    minutes: 45,
  },
};`,
      explanation:
        "`TData` adalah type parameter. Saat dipakai sebagai `ApiResult<Lesson>`, data sukses harus mengikuti shape Lesson.",
    },
    {
      id: "typescript-basic-generics-warning",
      type: "callout",
      variant: "warning",
      title: "Jangan membuat generic sebelum ada kebutuhan",
      content:
        "Generic berguna saat pola yang sama dipakai untuk beberapa type. Jika hanya dipakai sekali dan membuat kode lebih sulit dibaca, type biasa sering lebih baik.",
    },
    {
      id: "typescript-basic-generics-coding-practice",
      type: "coding-practice",
      challengeId: "create-generic-api-result",
    },
    {
      id: "typescript-basic-generics-quick-check",
      type: "quick-check",
      question: "Apa fungsi `TData` pada `type ApiResult<TData>`?",
      options: [
        "Type parameter yang diisi saat ApiResult dipakai",
        "Variable JavaScript yang muncul di runtime",
        "Nama package npm",
        "Command untuk menjalankan TypeScript",
      ],
      correctAnswer: "Type parameter yang diisi saat ApiResult dipakai",
      explanation:
        "`TData` adalah placeholder type. Saat `ApiResult<User>` dipakai, TData menjadi User.",
    },
    {
      id: "typescript-basic-generics-summary",
      type: "summary",
      points: [
        "Generic memakai type parameter seperti `TData`.",
        "Generic membantu membuat type atau function reusable.",
        "Generic tetap harus mendukung readability.",
        "Gunakan generic saat pola yang sama benar-benar dipakai beberapa kali.",
        "Berikutnya, kamu akan memakai utility types untuk mengambil atau mengubah shape object yang sudah ada.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-basic-generics-intro",
      "typescript-basic-generics-example",
      "typescript-basic-generics-warning",
      "typescript-basic-generics-coding-practice",
      "typescript-basic-generics-quick-check",
      "typescript-basic-generics-summary",
    ],
  },
};

export const typescriptBasicUtilityTypesLesson: Lesson = {
  id: "typescript-basic-utility-types",
  trackId: "frontend-engineering",
  moduleId: "typescript-practical-type-design",
  title: "Utility Types Dasar",
  slug: "typescript-basic-utility-types",
  description:
    "Membaca dan memakai Pick, Omit, Partial, dan Record dalam kasus frontend sederhana.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Membaca utility type dasar",
    "Menggunakan Pick dan Omit untuk mengambil atau mengecualikan property",
    "Menggunakan Partial dan Record dalam kasus sederhana",
  ],
  skillTags: ["TypeScript", "Utility Types", "Object Types"],
  blocks: [
    {
      id: "typescript-basic-utility-types-intro",
      type: "text",
      title: "Gunakan type yang sudah ada",
      content:
        "Saat object type mulai banyak, kamu tidak selalu perlu menulis type baru dari nol. TypeScript punya utility types untuk membuat type baru dari type yang sudah ada.\n\nDi module ini, cukup pahami empat utility type yang sering terlihat: `Pick`, `Omit`, `Partial`, dan `Record`. Pakai dalam kasus yang jelas, bukan untuk membuat type terlihat pintar.",
    },
    {
      id: "typescript-basic-utility-types-example",
      type: "code-example",
      title: "Utility types pada Product",
      language: "ts",
      code: `type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  isPublished: boolean;
};

type ProductCard = Pick<Product, "id" | "title" | "price">;
type ProductDraft = Partial<Product>;
type ProductInput = Omit<Product, "id">;
type ProductLabelMap = Record<string, string>;`,
      explanation:
        "Pick mengambil sebagian property. Omit mengecualikan property. Partial membuat semua property menjadi optional. Record membuat object map dengan key dan value type tertentu.",
    },
    {
      id: "typescript-basic-utility-types-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Pakai utility type kalau niatnya jelas",
      content:
        "Utility type membantu mengurangi duplikasi, tetapi bisa membuat kode sulit dibaca jika ditumpuk terlalu banyak. Jika type hasilnya penting untuk domain UI, beri nama yang jelas seperti ProductCard atau ProductInput.",
    },
    {
      id: "typescript-basic-utility-types-coding-practice",
      type: "coding-practice",
      challengeId: "reuse-types-with-utility-types",
    },
    {
      id: "typescript-basic-utility-types-summary",
      type: "summary",
      points: [
        "Pick mengambil property tertentu dari object type.",
        "Omit membuat type tanpa property tertentu.",
        "Partial membuat property menjadi optional.",
        "Record cocok untuk object map sederhana.",
        "Berikutnya, Uji Kompetensi akan mengecek practical type design secara utuh.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-basic-utility-types-intro",
      "typescript-basic-utility-types-example",
      "typescript-basic-utility-types-decision-rule",
      "typescript-basic-utility-types-coding-practice",
      "typescript-basic-utility-types-summary",
    ],
  },
};

export const typescriptPracticalTypeDesignAssessmentLesson: Lesson = {
  id: "typescript-practical-type-design-assessment",
  trackId: "frontend-engineering",
  moduleId: "typescript-practical-type-design",
  title: "Uji Kompetensi Practical Type Design",
  slug: "typescript-practical-type-design-assessment",
  description:
    "Checkpoint kesiapan untuk union, narrowing, discriminated union, generics, utility types, dan type design yang aman.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 75,
  objectives: [
    "Mengecek pemahaman practical type design",
    "Memodelkan UI state yang aman",
    "Menjelaskan kenapa type design membuat invalid state lebih sulit terjadi",
  ],
  skillTags: ["TypeScript", "Type Design", "Assessment"],
  blocks: [
    {
      id: "typescript-practical-type-design-assessment-recap",
      type: "text",
      title: "Checkpoint: apakah type kamu membantu desain UI?",
      content:
        "Uji Kompetensi ini mengecek apakah TypeScript kamu sudah mulai membantu desain data, bukan hanya memberi annotation. Kamu akan memakai union, narrowing, discriminated union, generic result type, dan utility types dalam satu konteks frontend.\n\nTargetnya sederhana: type membuat state yang salah lebih sulit ditulis, dan membuat branch UI lebih mudah dibaca.",
    },
    {
      id: "typescript-practical-type-design-assessment-quiz",
      type: "quiz",
      quizId: "typescript-practical-type-design-assessment-quiz",
    },
    {
      id: "typescript-practical-type-design-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "model-practical-type-design-checkpoint",
    },
    {
      id: "typescript-practical-type-design-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis penjelasan singkat tentang type design checkpoint kamu. Jelaskan state apa yang dimodelkan, branch mana yang aman, dan invalid state apa yang dicegah.\n\nGunakan format:\n- State yang dimodelkan:\n- Branch aman:\n- Invalid state yang dicegah:\n- Kenapa lebih aman dari object besar dengan banyak optional field:",
      placeholder:
        "State yang dimodelkan: loading, empty, error, success.\nBranch aman: saat status success, data lessons pasti tersedia.\nInvalid state yang dicegah: success tanpa data, error tanpa message.\nKenapa lebih aman: setiap status punya property yang sesuai.",
      minimumCharacters: 180,
      checklist: [
        "Menyebut status atau branch yang dimodelkan.",
        "Menjelaskan hubungan status dan property tambahan.",
        "Menyebut minimal satu invalid state yang dicegah.",
        "Tidak menyarankan `any` atau `as` sebagai solusi utama.",
      ],
      modelAnswer:
        "State yang dimodelkan: loading, empty, error, dan success untuk daftar lesson. Branch aman: saat status success, lessons pasti tersedia; saat status error, message pasti tersedia. Invalid state yang dicegah: status success tanpa lessons dan status error tanpa message. Ini lebih aman daripada object besar dengan data? dan error? karena setiap branch punya bentuk yang sesuai dengan statusnya.",
    },
    {
      id: "typescript-practical-type-design-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge practical type design",
      description:
        "Baca bagian resmi TypeScript yang mendukung module ini. Fokus pada contoh yang dekat dengan kode aplikasi, bukan type puzzle.",
      links: [
        {
          source: "TypeScript Handbook",
          title: "Union Types",
          url: "https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html",
          focus: [
            "union type",
            "discriminating unions",
            "status field sebagai pembeda",
          ],
          ignoreForNow: [
            "intersection type lanjutan",
            "exhaustiveness checking detail",
            "advanced union patterns",
          ],
        },
        {
          source: "TypeScript Handbook",
          title: "Narrowing",
          url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
          focus: [
            "typeof narrowing",
            "truthiness checks",
            "control flow analysis",
            "narrowing lewat equality checks",
          ],
          ignoreForNow: ["type predicates", "assertion functions", "advanced control flow"],
        },
        {
          source: "TypeScript Handbook",
          title: "Generics",
          url: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
          focus: [
            "generic type parameter",
            "generic function dasar",
            "reusable type tanpa kehilangan informasi data",
          ],
          ignoreForNow: ["generic constraints lanjutan", "generic classes", "keyof patterns"],
        },
        {
          source: "TypeScript Handbook",
          title: "Utility Types",
          url: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
          focus: ["Pick", "Omit", "Partial", "Record"],
          ignoreForNow: [
            "Awaited",
            "ConstructorParameters",
            "ThisParameterType",
            "utility types yang jarang dipakai di awal",
          ],
        },
      ],
      followUpAction:
        "Buka satu contoh discriminated union di TypeScript docs, lalu bandingkan dengan UI state checkpoint kamu.",
    },
    {
      id: "typescript-practical-type-design-assessment-summary",
      type: "summary",
      points: [
        "Union type membatasi value ke pilihan yang valid.",
        "Narrowing memberi bukti sebelum value dipakai.",
        "Discriminated union membuat UI state lebih aman.",
        "Generics dan utility types membantu reuse saat niatnya jelas.",
        "Berikutnya, Typed Frontend Boundaries akan memakai type design ini untuk API responses, form data, dan data siap komponen.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "typescript-practical-type-design-assessment-recap",
      "typescript-practical-type-design-assessment-quiz",
      "typescript-practical-type-design-assessment-coding-practice",
      "typescript-practical-type-design-assessment-writing-practice",
      "typescript-practical-type-design-assessment-docs",
      "typescript-practical-type-design-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const typescriptPracticalTypeDesignAssessmentQuiz: Quiz = {
  id: "typescript-practical-type-design-assessment-quiz",
  lessonId: "typescript-practical-type-design-assessment",
  title: "Uji Kompetensi Practical Type Design",
  passingScore: 70,
  questions: [
    {
      id: "typescript-practical-type-design-q1",
      type: "multiple-choice",
      question: "Type apa yang paling tepat untuk status yang hanya boleh `loading`, `success`, atau `error`?",
      options: [
        `"loading" | "success" | "error"`,
        "string",
        "any",
        "Record<string, string>",
      ],
      correctAnswer: `"loading" | "success" | "error"`,
      explanation:
        "String literal union membatasi status ke pilihan valid dan membantu menangkap typo.",
    },
    {
      id: "typescript-practical-type-design-q2",
      type: "multiple-choice",
      question:
        "Dalam discriminated union UI state, property seperti `status` biasanya berfungsi sebagai...",
      options: [
        "discriminant untuk membedakan branch state",
        "CSS class otomatis",
        "runtime compiler",
        "pengganti semua error handling",
      ],
      correctAnswer: "discriminant untuk membedakan branch state",
      explanation:
        "Property status membedakan bentuk object sehingga TypeScript tahu property tambahan mana yang aman dipakai.",
    },
    {
      id: "typescript-practical-type-design-q3",
      type: "true-false",
      question:
        "Narrowing membantu TypeScript memahami bahwa sebuah value sudah dicek sebelum dipakai.",
      correctAnswer: true,
      explanation:
        "Narrowing memberi bukti lewat control flow, misalnya if check, typeof check, atau equality check.",
    },
    {
      id: "typescript-practical-type-design-q4",
      type: "multiple-choice",
      question:
        "Dalam `type ApiResult<TData> = ...`, `TData` adalah...",
      options: [
        "type parameter yang diisi saat ApiResult dipakai",
        "variable runtime wajib",
        "nama file TypeScript",
        "command npm",
      ],
      correctAnswer: "type parameter yang diisi saat ApiResult dipakai",
      explanation:
        "Generic type parameter seperti TData membuat type reusable untuk berbagai data.",
    },
    {
      id: "typescript-practical-type-design-q5",
      type: "multiple-choice",
      question:
        "Utility type mana yang mengambil sebagian property dari object type?",
      options: ["Pick", "Omit", "Partial", "Record"],
      correctAnswer: "Pick",
      explanation:
        "Pick mengambil property tertentu dari object type yang sudah ada.",
    },
  ],
};

const typeScriptPracticePreviewCode = {
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

export const modelStatusUnionChallenge: CodingChallenge = {
  id: "model-status-union",
  lessonId: "typescript-union-types",
  title: "Model status dengan union type",
  description:
    "Latihan membatasi status UI ke beberapa value yang valid.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type LoadStatus.",
    "LoadStatus harus berisi idle, loading, success, dan error.",
    "Gunakan LoadStatus pada currentStatus.",
    "Buat function getStatusLabel yang menerima LoadStatus dan return string.",
  ],
  starterCode: {
    ...typeScriptPracticePreviewCode,
    ts: `// Buat LoadStatus di sini.

const currentStatus = "loading";

function getStatusLabel(status) {
  return "Status: " + status;
}`,
  },
  solutionCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type LoadStatus = "idle" | "loading" | "success" | "error";

const currentStatus: LoadStatus = "loading";

function getStatusLabel(status: LoadStatus): string {
  return "Status: " + status;
}`,
  },
  checklist: [
    "Status dibatasi ke pilihan valid.",
    "currentStatus memakai LoadStatus.",
    "Function menerima LoadStatus dan return string.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "load-status-union",
        label: "LoadStatus berisi empat status valid.",
        type: "contains",
        target: `type LoadStatus = "idle" | "loading" | "success" | "error";`,
        valueIncludes: `type LoadStatus = "idle" | "loading" | "success" | "error";`,
      },
      {
        id: "current-status-type",
        label: "currentStatus memakai LoadStatus.",
        type: "contains",
        target: `const currentStatus: LoadStatus = "loading";`,
        valueIncludes: `const currentStatus: LoadStatus = "loading";`,
      },
      {
        id: "status-label-function",
        label: "getStatusLabel menerima LoadStatus dan return string.",
        type: "contains",
        target: "function getStatusLabel(status: LoadStatus): string",
        valueIncludes: "function getStatusLabel(status: LoadStatus): string",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Status UI dibatasi ke union type sehingga typo lebih mudah tertangkap. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Union Types", "UI State"],
};

export const narrowNullableProfileNameChallenge: CodingChallenge = {
  id: "narrow-nullable-profile-name",
  lessonId: "typescript-narrowing",
  title: "Narrow nullable profile name",
  description:
    "Latihan mengecek string atau null sebelum memakai method string.",
  instructions: [
    "Fokus di tab TS.",
    "Pastikan ProfileName berisi string atau null.",
    "Buat formatProfileName menerima ProfileName dan return string.",
    "Jika name null, return Nama belum tersedia.",
    "Setelah null check, return name.toUpperCase().",
  ],
  starterCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type ProfileName = string | null;

function formatProfileName(name) {
  return name.toUpperCase();
}`,
  },
  solutionCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type ProfileName = string | null;

function formatProfileName(name: ProfileName): string {
  if (name === null) {
    return "Nama belum tersedia";
  }

  return name.toUpperCase();
}`,
  },
  checklist: [
    "ProfileName bisa string atau null.",
    "Function menerima ProfileName.",
    "Null branch ditangani sebelum memakai toUpperCase.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "profile-name-union",
        label: "ProfileName berisi string atau null.",
        type: "contains",
        target: "type ProfileName = string | null;",
        valueIncludes: "type ProfileName = string | null;",
      },
      {
        id: "format-profile-name",
        label: "formatProfileName menerima ProfileName dan return string.",
        type: "contains",
        target: "function formatProfileName(name: ProfileName): string",
        valueIncludes: "function formatProfileName(name: ProfileName): string",
      },
      {
        id: "null-check",
        label: "Null dicek sebelum name dipakai.",
        type: "contains",
        target: "if (name === null) {",
        valueIncludes: "if (name === null) {",
      },
      {
        id: "null-fallback",
        label: "Null branch punya fallback.",
        type: "contains",
        target: `return "Nama belum tersedia";`,
        valueIncludes: `return "Nama belum tersedia";`,
      },
      {
        id: "string-branch",
        label: "String branch memakai toUpperCase.",
        type: "contains",
        target: "return name.toUpperCase();",
        valueIncludes: "return name.toUpperCase();",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Nullable value dicek sebelum method string dipakai. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Narrowing", "Safe Access"],
};

export const modelUiStateDiscriminatedUnionChallenge: CodingChallenge = {
  id: "model-ui-state-discriminated-union",
  lessonId: "typescript-discriminated-union-ui-state",
  title: "Model UI state dengan discriminated union",
  description:
    "Latihan memodelkan loading, empty, error, dan success state secara aman.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type LessonListState.",
    "Tambahkan branch loading tanpa data tambahan.",
    "Tambahkan branch empty dengan message string.",
    "Tambahkan branch error dengan message string.",
    "Tambahkan branch success dengan lessons string[].",
    "Buat getStateLabel menerima LessonListState dan return string.",
  ],
  starterCode: {
    ...typeScriptPracticePreviewCode,
    ts: `// Buat LessonListState di sini.

function getStateLabel(state) {
  if (state.status === "success") {
    return state.lessons.length + " lesson tersedia";
  }

  return state.message;
}`,
  },
  solutionCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type LessonListState =
  | { status: "loading" }
  | { status: "empty"; message: string }
  | { status: "error"; message: string }
  | { status: "success"; lessons: string[] };

function getStateLabel(state: LessonListState): string {
  if (state.status === "success") {
    return state.lessons.length + " lesson tersedia";
  }

  if (state.status === "loading") {
    return "Memuat lesson...";
  }

  return state.message;
}`,
  },
  checklist: [
    "Setiap status punya branch sendiri.",
    "Success state punya lessons.",
    "Error dan empty punya message.",
    "Function membaca branch berdasarkan status.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "lesson-list-state",
        label: "LessonListState dibuat.",
        type: "contains",
        target: "type LessonListState =",
        valueIncludes: "type LessonListState =",
      },
      {
        id: "loading-branch",
        label: "Loading branch dibuat.",
        type: "contains",
        target: `| { status: "loading" }`,
        valueIncludes: `| { status: "loading" }`,
      },
      {
        id: "empty-branch",
        label: "Empty branch punya message.",
        type: "contains",
        target: `| { status: "empty"; message: string }`,
        valueIncludes: `| { status: "empty"; message: string }`,
      },
      {
        id: "error-branch",
        label: "Error branch punya message.",
        type: "contains",
        target: `| { status: "error"; message: string }`,
        valueIncludes: `| { status: "error"; message: string }`,
      },
      {
        id: "success-branch",
        label: "Success branch punya lessons.",
        type: "contains",
        target: `| { status: "success"; lessons: string[] };`,
        valueIncludes: `| { status: "success"; lessons: string[] };`,
      },
      {
        id: "state-label-function",
        label: "getStateLabel menerima LessonListState dan return string.",
        type: "contains",
        target: "function getStateLabel(state: LessonListState): string",
        valueIncludes: "function getStateLabel(state: LessonListState): string",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "UI state memakai discriminated union sehingga property mengikuti status. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Discriminated Union", "UI State"],
};

export const createGenericApiResultChallenge: CodingChallenge = {
  id: "create-generic-api-result",
  lessonId: "typescript-basic-generics",
  title: "Create generic API result",
  description:
    "Latihan membuat reusable result type dengan generic type parameter.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type ApiResult<TData>.",
    "Success branch harus punya ok true dan data TData.",
    "Error branch harus punya ok false dan error string.",
    "Buat type LessonSummary.",
    "Gunakan ApiResult<LessonSummary> pada lessonResult.",
  ],
  starterCode: {
    ...typeScriptPracticePreviewCode,
    ts: `// Buat ApiResult dan LessonSummary di sini.

const lessonResult = {
  ok: true,
  data: {
    title: "Generics Dasar",
    minutes: 45,
  },
};`,
  },
  solutionCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type ApiResult<TData> =
  | { ok: true; data: TData }
  | { ok: false; error: string };

type LessonSummary = {
  title: string;
  minutes: number;
};

const lessonResult: ApiResult<LessonSummary> = {
  ok: true,
  data: {
    title: "Generics Dasar",
    minutes: 45,
  },
};`,
  },
  checklist: [
    "ApiResult punya type parameter.",
    "Success branch menyimpan data TData.",
    "Error branch menyimpan error string.",
    "lessonResult memakai ApiResult<LessonSummary>.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "api-result-generic",
        label: "ApiResult punya type parameter TData.",
        type: "contains",
        target: "type ApiResult<TData> =",
        valueIncludes: "type ApiResult<TData> =",
      },
      {
        id: "api-result-success",
        label: "Success branch punya data TData.",
        type: "contains",
        target: "| { ok: true; data: TData }",
        valueIncludes: "| { ok: true; data: TData }",
      },
      {
        id: "api-result-error",
        label: "Error branch punya error string.",
        type: "contains",
        target: "| { ok: false; error: string };",
        valueIncludes: "| { ok: false; error: string };",
      },
      {
        id: "lesson-summary",
        label: "LessonSummary dibuat.",
        type: "contains",
        target: "type LessonSummary = {",
        valueIncludes: "type LessonSummary = {",
      },
      {
        id: "lesson-result",
        label: "lessonResult memakai ApiResult<LessonSummary>.",
        type: "contains",
        target: "const lessonResult: ApiResult<LessonSummary> = {",
        valueIncludes: "const lessonResult: ApiResult<LessonSummary> = {",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "ApiResult reusable untuk data sukses dan error tanpa kehilangan shape data. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Generics", "Reusable Types"],
};

export const reuseTypesWithUtilityTypesChallenge: CodingChallenge = {
  id: "reuse-types-with-utility-types",
  lessonId: "typescript-basic-utility-types",
  title: "Reuse types dengan utility types",
  description:
    "Latihan memakai Pick, Omit, Partial, dan Record dalam kasus object sederhana.",
  instructions: [
    "Fokus di tab TS.",
    "Buat ProductCard dengan Pick dari Product.",
    "Buat ProductInput dengan Omit dari Product tanpa id.",
    "Buat ProductDraft dengan Partial dari Product.",
    "Buat ProductLabelMap dengan Record<string, string>.",
  ],
  starterCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  isPublished: boolean;
};

// Buat utility types di sini.`,
  },
  solutionCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  isPublished: boolean;
};

type ProductCard = Pick<Product, "id" | "title" | "price">;
type ProductInput = Omit<Product, "id">;
type ProductDraft = Partial<Product>;
type ProductLabelMap = Record<string, string>;`,
  },
  checklist: [
    "Pick mengambil field untuk card.",
    "Omit membuat input tanpa id.",
    "Partial membuat draft optional.",
    "Record membuat map label sederhana.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "product-card-pick",
        label: "ProductCard memakai Pick.",
        type: "contains",
        target: `type ProductCard = Pick<Product, "id" | "title" | "price">;`,
        valueIncludes: `type ProductCard = Pick<Product, "id" | "title" | "price">;`,
      },
      {
        id: "product-input-omit",
        label: "ProductInput memakai Omit.",
        type: "contains",
        target: `type ProductInput = Omit<Product, "id">;`,
        valueIncludes: `type ProductInput = Omit<Product, "id">;`,
      },
      {
        id: "product-draft-partial",
        label: "ProductDraft memakai Partial.",
        type: "contains",
        target: "type ProductDraft = Partial<Product>;",
        valueIncludes: "type ProductDraft = Partial<Product>;",
      },
      {
        id: "product-label-record",
        label: "ProductLabelMap memakai Record.",
        type: "contains",
        target: "type ProductLabelMap = Record<string, string>;",
        valueIncludes: "type ProductLabelMap = Record<string, string>;",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Utility types membuat type turunan dari Product tanpa menulis ulang semua property. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Utility Types", "Object Types"],
};

export const modelPracticalTypeDesignCheckpointChallenge: CodingChallenge = {
  id: "model-practical-type-design-checkpoint",
  lessonId: "typescript-practical-type-design-assessment",
  title: "Model practical UI state",
  description:
    "Checkpoint untuk union, narrowing, discriminated union, generic result, dan utility type dasar.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type LessonStatus berisi loading, empty, error, dan success.",
    "Buat type LessonListState sebagai discriminated union.",
    "Success branch harus punya lessons string[].",
    "Error dan empty branch harus punya message string.",
    "Buat ApiResult<TData> untuk success/error result.",
    "Buat LessonCard dengan Pick dari Lesson.",
    "Buat getLessonStateLabel menerima LessonListState dan return string.",
  ],
  starterCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type Lesson = {
  id: number;
  title: string;
  minutes: number;
  isRequired: boolean;
};

// Lengkapi type design checkpoint di sini.

function getLessonStateLabel(state) {
  if (state.status === "success") {
    return state.lessons.length + " lesson siap";
  }

  return state.message;
}`,
  },
  solutionCode: {
    ...typeScriptPracticePreviewCode,
    ts: `type Lesson = {
  id: number;
  title: string;
  minutes: number;
  isRequired: boolean;
};

type LessonStatus = "loading" | "empty" | "error" | "success";

type LessonListState =
  | { status: "loading" }
  | { status: "empty"; message: string }
  | { status: "error"; message: string }
  | { status: "success"; lessons: string[] };

type ApiResult<TData> =
  | { ok: true; data: TData }
  | { ok: false; error: string };

type LessonCard = Pick<Lesson, "id" | "title" | "minutes">;

function getLessonStateLabel(state: LessonListState): string {
  if (state.status === "success") {
    return state.lessons.length + " lesson siap";
  }

  if (state.status === "loading") {
    return "Memuat lesson...";
  }

  return state.message;
}`,
  },
  checklist: [
    "LessonStatus membatasi status valid.",
    "LessonListState memakai discriminated union.",
    "ApiResult reusable untuk success/error result.",
    "LessonCard memakai Pick.",
    "Function membaca branch state dengan aman.",
  ],
  validation: {
    mode: "ts",
    checks: [
      {
        id: "lesson-status",
        label: "LessonStatus berisi status valid.",
        type: "contains",
        target: `type LessonStatus = "loading" | "empty" | "error" | "success";`,
        valueIncludes: `type LessonStatus = "loading" | "empty" | "error" | "success";`,
      },
      {
        id: "lesson-list-state",
        label: "LessonListState dibuat.",
        type: "contains",
        target: "type LessonListState =",
        valueIncludes: "type LessonListState =",
      },
      {
        id: "success-lessons",
        label: "Success branch punya lessons.",
        type: "contains",
        target: `| { status: "success"; lessons: string[] };`,
        valueIncludes: `| { status: "success"; lessons: string[] };`,
      },
      {
        id: "api-result",
        label: "ApiResult generic dibuat.",
        type: "contains",
        target: "type ApiResult<TData> =",
        valueIncludes: "type ApiResult<TData> =",
      },
      {
        id: "api-result-success",
        label: "ApiResult success branch punya data TData.",
        type: "contains",
        target: "| { ok: true; data: TData }",
        valueIncludes: "| { ok: true; data: TData }",
      },
      {
        id: "lesson-card-pick",
        label: "LessonCard memakai Pick.",
        type: "contains",
        target: `type LessonCard = Pick<Lesson, "id" | "title" | "minutes">;`,
        valueIncludes: `type LessonCard = Pick<Lesson, "id" | "title" | "minutes">;`,
      },
      {
        id: "state-label-function",
        label: "getLessonStateLabel menerima LessonListState.",
        type: "contains",
        target: "function getLessonStateLabel(state: LessonListState): string",
        valueIncludes: "function getLessonStateLabel(state: LessonListState): string",
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Type check yang diharapkan",
    description:
      "Checkpoint memakai union, narrowing, discriminated union, generic result, dan utility type dasar. Preview tidak menjalankan tab TS.",
  },
  skillTags: ["TypeScript", "Type Design", "Assessment"],
};
