import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const storybookPracticeCode = { html: "", css: "", js: "" };

export const storybookPackageBasicsModule: Module = {
  id: "storybook-package-basics",
  trackId: "frontend-engineering",
  title: "Storybook and Package Basics",
  slug: "storybook-package-basics",
  description:
    "Mendokumentasikan component lewat Storybook, memeriksa state serta accessibility, lalu mengatur export dan changelog tanpa masuk ke publishing package.",
  order: 55,
  lessonIds: [
    "storybook-basics",
    "component-stories",
    "storybook-accessibility-checks",
    "package-structure-basics",
    "component-changelog-thinking",
    "storybook-package-basics-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["Storybook", "Component Stories", "Accessibility Testing", "Package Structure", "Changelog"],
};

export const storybookBasicsLesson: Lesson = {
  id: "storybook-basics",
  trackId: "frontend-engineering",
  moduleId: "storybook-package-basics",
  title: "Storybook Basics",
  slug: "storybook-basics",
  description:
    "Memahami Storybook sebagai workshop component di luar route product, lalu menjalankan setup lokal secara bertahap dan jujur.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan kapan Storybook membantu review component lebih cepat daripada membuka route product",
    "Membedakan component workshop dari integration page dan end-to-end flow",
    "Menjalankan setup Storybook lokal dengan command serta output yang dapat diperiksa",
    "Mencatat setup issue tanpa menganggap FluentStack dapat memverifikasi mesin lokal learner",
  ],
  skillTags: ["Storybook", "Local Tooling", "Component Development", "Documentation"],
  blocks: [
    {
      id: "storybook-basics-intro",
      type: "text",
      title: "Storybook adalah workshop component, bukan aplikasi kedua",
      content:
        "Route product memperlihatkan component dalam data, layout, permission, dan navigation nyata. Itu penting, tetapi sering terlalu banyak context untuk meninjau satu Button, FormField, atau Card. Storybook memberi workspace terpisah untuk melihat component secara fokus: default, setiap variant, disabled, loading, error, content panjang, dan edge case. Ia membantu team membicarakan UI yang sama tanpa mereproduksi seluruh flow aplikasi.\n\nStorybook bukan pengganti integration test, manual QA route product, atau accessibility audit lengkap. Gunakan Storybook untuk membuat contract visual dan state component mudah ditemukan; gunakan route product serta test lain untuk memeriksa integration. Setup terjadi di local project, sehingga FluentStack hanya memberi langkah dan checklist. Jangan menandai local action selesai sebelum command benar-benar berjalan di mesinmu.",
    },
    {
      id: "storybook-basics-example",
      type: "code-example",
      title: "Setup lokal pertama secara bertahap",
      language: "bash",
      code: ["# Dari root local React atau Next.js project.", "npm create storybook@latest", "", "# Periksa package.json dan folder .storybook.", "npm run storybook"].join("\n"),
      explanation:
        "CLI resmi membaca dependency project lalu menawarkan konfigurasi yang sesuai. Setelah setup, periksa script baru di package.json, folder .storybook, dan story contoh. Jangan menghapus boilerplate sebelum Storybook berhasil dibuka sekali. Command dan kebutuhan versi dapat berubah, jadi dokumentasi resmi tetap sumber kebenaran untuk project lokal.",
    },
    {
      id: "storybook-basics-local-note",
      type: "writing-practice",
      prompt:
        "Lakukan setup Storybook pada local React atau Next.js project yang aman diubah. Tulis setup note: lokasi project, command yang kamu jalankan satu per satu, script/folder yang muncul, component pertama yang ingin didokumentasikan, URL atau hasil terminal saat berhasil, dan blocker spesifik bila ada. Jika belum bisa setup, tulis blocker serta docs yang akan dibaca. Jangan mengklaim berhasil jika command belum dijalankan.",
      placeholder:
        "Saya menjalankan npm create storybook@latest dari root project course-admin. Setup menambahkan script storybook dan build-storybook serta folder .storybook. Saya menjalankan npm run storybook lalu membuka URL yang dicetak terminal. Component pertama adalah CourseButton karena memiliki primary, secondary, destructive, disabled, dan loading state. Saya menemukan warning CSS global; sebelum mengubah config saya akan membaca docs setup dan memastikan warning itu memengaruhi component.",
      minimumCharacters: 500,
      checklist: [
        "Menyebutkan local project dan command yang benar-benar dicoba.",
        "Mencatat script atau folder yang ditambahkan setup.",
        "Memilih component awal dengan alasan product jelas.",
        "Mencatat hasil nyata atau blocker spesifik tanpa mengarang keberhasilan.",
      ],
      modelAnswer:
        "Saya menjalankan npm create storybook@latest dari root project course-admin. Setup menambahkan script storybook serta build-storybook dan folder .storybook. Setelah menjalankan npm run storybook, saya membuka URL yang dicetak terminal. Saya memilih CourseButton karena caller menggunakan primary, secondary, destructive, disabled, dan loading state. Saya menemukan warning stylesheet global pada story contoh; saya belum mengubah konfigurasi secara acak dan akan memeriksa docs setup terlebih dahulu.",
    },
    {
      id: "storybook-basics-quick-check",
      type: "quick-check",
      question: "Peran paling tepat Storybook pada project frontend adalah",
      options: [
        "Workshop untuk mendokumentasikan serta meninjau component dan state secara fokus di luar route product.",
        "Pengganti seluruh integration test dan manual QA aplikasi.",
        "Cara untuk menjalankan backend production di browser.",
        "Tool yang otomatis menerbitkan package ke npm.",
      ],
      correctAnswer: "Workshop untuk mendokumentasikan serta meninjau component dan state secara fokus di luar route product.",
      explanation:
        "Storybook membantu isolasi component dan state. Ia melengkapi, bukan menggantikan, QA route product, test integration, atau workflow release.",
    },
    {
      id: "storybook-basics-summary",
      type: "summary",
      points: [
        "Storybook memisahkan review component dari complexity route product.",
        "Storybook tidak menggantikan integration test, route QA, atau accessibility review lengkap.",
        "Setup lokal harus dijalankan serta dicatat secara jujur oleh learner.",
        "Mulai dari satu component kecil yang memiliki state serta consumer nyata.",
        "Berikutnya, kita menulis stories yang menjelaskan default, variant, state, dan edge case.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "storybook-basics-intro",
      "storybook-basics-example",
      "storybook-basics-local-note",
      "storybook-basics-quick-check",
      "storybook-basics-summary",
    ],
  },
};

export const componentStoriesLesson: Lesson = {
  id: "component-stories",
  trackId: "frontend-engineering",
  moduleId: "storybook-package-basics",
  title: "Component Stories",
  slug: "component-stories",
  description:
    "Menulis stories untuk default, variant, disabled, loading, dan edge case dengan args yang mencerminkan API nyata.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Memahami story sebagai rendered state component dengan args tertentu",
    "Menyusun meta dan named story exports yang typed",
    "Memilih stories dari variant, state, serta risk product",
    "Menggunakan args agar story mengikuti component API",
  ],
  skillTags: ["Storybook", "Stories", "Args", "TypeScript", "Component States"],
  blocks: [
    {
      id: "component-stories-intro",
      type: "text",
      title: "Story adalah bukti state yang dapat direview",
      content:
        "Satu story menangkap satu rendered state component dengan args tertentu. Default story memberi starting point, tetapi tidak cukup untuk component yang punya variant, disabled, loading, error, atau content panjang. Pilih story dari keputusan reviewer: apakah destructive Button tetap terbaca, apakah disabled action jelas, apakah FormField error dapat dipahami, atau apakah Card tanpa action masih utuh.\n\nStory bukan screenshot marketing dan bukan daftar semua kombinasi props. Terlalu sedikit story menyembunyikan state penting; terlalu banyak story acak membuat sidebar sulit dipindai. Mulai dari default, variant yang didukung, state berisiko, dan satu edge case nyata. Args harus mengikuti component API agar controls serta type checking tetap berguna.",
    },
    {
      id: "component-stories-example",
      type: "code-example",
      title: "Stories typed untuk CourseButton",
      language: "tsx",
      code: [
        'import type { Meta, StoryObj } from "@storybook/nextjs-vite";',
        'import { CourseButton } from "./CourseButton";',
        "",
        "const meta = { component: CourseButton } satisfies Meta<typeof CourseButton>;",
        "export default meta;",
        "type Story = StoryObj<typeof meta>;",
        "",
        'export const Primary: Story = { args: { variant: "primary", children: "Simpan perubahan" } };',
        'export const Disabled: Story = { args: { variant: "primary", children: "Menyimpan...", disabled: true } };',
      ].join("\n"),
      explanation:
        "meta menghubungkan story file ke component, lalu StoryObj<typeof meta> menjaga args sesuai props CourseButton. Named exports memberi reviewer state yang dapat dibuka. Story tidak menjalankan workflow simpan sungguhan; ia mendokumentasikan UI state yang perlu dipakai serta diuji dalam product.",
    },
    { id: "component-stories-coding-practice", type: "coding-practice", challengeId: "write-course-button-stories" },
    {
      id: "component-stories-quick-check",
      type: "quick-check",
      question: "Story tambahan mana paling bernilai untuk CourseButton destructive?",
      options: [
        "Disabled dengan label action sedang diproses, karena user perlu melihat bahwa action berisiko tidak dapat dipicu dua kali.",
        "Sepuluh story dengan background warna acak tanpa perubahan props.",
        "Satu story untuk setiap pixel padding yang mungkin.",
        "Story tanpa args agar API tidak terlihat.",
      ],
      correctAnswer: "Disabled dengan label action sedang diproses, karena user perlu melihat bahwa action berisiko tidak dapat dipicu dua kali.",
      explanation:
        "Story bernilai tinggi menunjukkan state yang mengubah keputusan atau risiko user. Gunakan args untuk menunjukkan API yang memang dipakai consumer.",
    },
    {
      id: "component-stories-summary",
      type: "summary",
      points: [
        "Story mendokumentasikan rendered state component dengan args jelas.",
        "Mulai dari default, variant didukung, state berisiko, dan edge case nyata.",
        "Meta serta StoryObj menjaga story mengikuti component API.",
        "Story bukan pengganti workflow integration atau backend behavior.",
        "Berikutnya, story menjadi tempat menjalankan accessibility check dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-stories-intro",
      "component-stories-example",
      "component-stories-coding-practice",
      "component-stories-quick-check",
      "component-stories-summary",
    ],
  },
};

export const storybookAccessibilityChecksLesson: Lesson = {
  id: "storybook-accessibility-checks",
  trackId: "frontend-engineering",
  moduleId: "storybook-package-basics",
  title: "Accessibility Checks",
  slug: "storybook-accessibility-checks",
  description:
    "Menggunakan Storybook accessibility checks sebagai sinyal awal, lalu memeriksa keyboard behavior yang tidak dapat diputuskan tool saja.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan accessibility check sebagai feedback awal, bukan sertifikat aksesibilitas",
    "Menetapkan test behavior story dengan parameter a11y",
    "Memeriksa default, variant, disabled, error, serta edge case",
    "Membedakan violation tool dari keyboard, focus, wording, dan flow yang perlu manual QA",
  ],
  skillTags: ["Storybook", "Accessibility", "axe", "Keyboard QA", "Component States"],
  blocks: [
    {
      id: "storybook-accessibility-checks-intro",
      type: "text",
      title: "A11y check memberi sinyal, bukan izin berhenti QA",
      content:
        "Storybook accessibility tooling membantu menemukan masalah pada rendered story, misalnya label hilang, contrast tertentu, atau ARIA relationship tidak valid. Ia paling berguna ketika stories mencakup default, disabled, loading, error, serta variant relevan. Jalankan check pada component kecil lebih awal agar masalah tidak menyebar ke banyak route.\n\nTidak ada tool yang memahami seluruh flow product. A11y check tidak memastikan focus modal kembali ke trigger, copy error menjelaskan perbaikan, atau tab keyboard sesuai context bisnis. Mulai dengan todo bila codebase memiliki debt yang sedang ditangani, lalu gunakan error untuk stories yang siap dijaga di test/CI. Jangan mematikan check demi dashboard hijau tanpa alasan serta rencana perbaikan.",
    },
    {
      id: "storybook-accessibility-checks-example",
      type: "code-example",
      title: "Menetapkan behavior a11y pada story file",
      language: "tsx",
      code: [
        'import type { Meta, StoryObj } from "@storybook/nextjs-vite";',
        'import { CourseButton } from "./CourseButton";',
        "",
        "const meta = {",
        "  component: CourseButton,",
        '  parameters: { a11y: { test: "error" } },',
        "} satisfies Meta<typeof CourseButton>;",
        "export default meta;",
        "type Story = StoryObj<typeof meta>;",
        "",
        'export const ExistingDebt: Story = {',
        '  args: { variant: "secondary", children: "Butuh review" },',
        '  parameters: { a11y: { test: "todo" } },',
        "};",
      ].join("\n"),
      explanation:
        "test: error membuat violation menjadi kegagalan pada stories yang dijalankan dalam test environment. todo tetap menjalankan check tetapi menandai debt yang harus dilacak. Setelah tool check, QA juga tab order, visible focus, copy, state change, serta interaction yang tidak tampak di result otomatis.",
    },
    { id: "storybook-accessibility-checks-coding-practice", type: "coding-practice", challengeId: "configure-course-button-a11y-stories" },
    {
      id: "storybook-accessibility-checks-quick-check",
      type: "quick-check",
      question: "Apa tindakan tepat jika a11y check lulus tetapi modal masih membuat focus pindah ke page belakang?",
      options: [
        "Perbaiki modal dan lakukan keyboard QA karena focus containment adalah behavior runtime yang tetap perlu diuji manual.",
        "Anggap modal accessible karena check sudah lulus.",
        "Matikan keyboard navigation agar check tidak menemukan masalah lain.",
        "Pindahkan issue ke story default tanpa menulis kasusnya.",
      ],
      correctAnswer: "Perbaiki modal dan lakukan keyboard QA karena focus containment adalah behavior runtime yang tetap perlu diuji manual.",
      explanation:
        "Automated checks dan manual review saling melengkapi. Focus management serta flow keyboard membutuhkan interaksi nyata.",
    },
    {
      id: "storybook-accessibility-checks-summary",
      type: "summary",
      points: [
        "Accessibility check membantu menemukan violation pada rendered stories lebih awal.",
        "Setiap state penting perlu story agar tool tidak hanya melihat happy path.",
        "error, todo, dan off adalah keputusan quality yang harus dapat dijelaskan.",
        "Keyboard, focus, copy, dan product flow tetap memerlukan manual QA.",
        "Berikutnya, struktur component, story, token, serta export dibuat mudah dipahami.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "storybook-accessibility-checks-intro",
      "storybook-accessibility-checks-example",
      "storybook-accessibility-checks-coding-practice",
      "storybook-accessibility-checks-quick-check",
      "storybook-accessibility-checks-summary",
    ],
  },
};

export const packageStructureBasicsLesson: Lesson = {
  id: "package-structure-basics",
  trackId: "frontend-engineering",
  moduleId: "storybook-package-basics",
  title: "Package Structure Basics",
  slug: "package-structure-basics",
  description:
    "Mengatur component, story, token, type, dan export surface kecil agar consumer tahu apa yang boleh diimpor tanpa package publishing.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Memisahkan component source, story, type, dan export public secara sederhana",
    "Membedakan file internal dari entry point yang didukung consumer",
    "Menggunakan barrel export dengan hemat pada public surface jelas",
    "Menghindari monorepo, publishing, serta versioning strategy sebelum dibutuhkan",
  ],
  skillTags: ["Package Structure", "Exports", "TypeScript", "Design System", "Maintainability"],
  blocks: [
    {
      id: "package-structure-basics-intro",
      type: "text",
      title: "Beri consumer satu pintu masuk yang dapat dijelaskan",
      content:
        "Component system kecil tidak membutuhkan monorepo atau package registry untuk punya structure baik. Source component berada dekat type serta story-nya, token memiliki lokasi jelas, dan public entry point hanya mengekspor component serta type yang memang didukung. Consumer tidak perlu mengimpor file internal hanya karena belum ada path konsisten.\n\nJangan menganggap setiap folder harus menjadi package. Component yang hanya dipakai satu feature dapat tetap dekat feature tersebut. Jika Button, FormField, token, dan shared type dipakai lintas feature, letakkan pada shared UI boundary yang dapat dimiliki serta didokumentasikan. Barrel export berguna untuk surface public kecil, tetapi jangan mengekspor semua helper internal lalu menjadikannya breaking contract tanpa sengaja.",
    },
    {
      id: "package-structure-basics-example",
      type: "code-example",
      title: "Surface export kecil untuk UI shared",
      language: "ts",
      code: [
        "src/components/ui/",
        "  CourseButton/CourseButton.tsx",
        "  CourseButton/CourseButton.stories.tsx",
        "  CourseButton/CourseButton.types.ts",
        "  FormField/FormField.tsx",
        "  FormField/FormField.stories.tsx",
        "  tokens.css",
        "  index.ts",
        "",
        'export { CourseButton } from "./CourseButton/CourseButton";',
        'export type { CourseButtonProps } from "./CourseButton/CourseButton.types";',
        'export { FormField } from "./FormField/FormField";',
      ].join("\n"),
      explanation:
        "Story hidup dekat component agar state dan API dapat dibaca bersama. index.ts menjelaskan public surface. Helper internal, test fixture, atau CSS implementation detail tidak perlu diekspor hanya karena berada dalam folder sama.",
    },
    { id: "package-structure-basics-coding-practice", type: "coding-practice", challengeId: "organize-course-ui-package-exports" },
    {
      id: "package-structure-basics-quick-check",
      type: "quick-check",
      question: "Apa alasan utama menjaga public export surface kecil?",
      options: [
        "Consumer tahu import yang didukung dan helper internal tidak menjadi contract tanpa sengaja.",
        "Agar semua file UI hidup dalam satu folder besar.",
        "Agar setiap component wajib diterbitkan ke npm.",
        "Agar story tidak dapat diletakkan dekat component.",
      ],
      correctAnswer: "Consumer tahu import yang didukung dan helper internal tidak menjadi contract tanpa sengaja.",
      explanation:
        "Entry point kecil memisahkan API yang dijanjikan dari implementation detail dan membuat refactor internal tetap mungkin.",
    },
    {
      id: "package-structure-basics-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan membangun package sebelum ada boundary nyata",
      content:
        "Folder bernama design-system belum membuktikan component layak dipakai lintas aplikasi. Mulai dari component dengan consumer nyata, type jelas, story, serta public export kecil. Publishing, monorepo, semver strategy, dan release automation adalah pekerjaan berikutnya saat team serta distribusi memang membutuhkannya.",
    },
    {
      id: "package-structure-basics-summary",
      type: "summary",
      points: [
        "Source, story, type, token, dan public export perlu lokasi mudah ditemukan.",
        "Public entry point menjelaskan import yang didukung consumer.",
        "Feature-local component tidak perlu dipaksa menjadi shared UI package.",
        "Barrel export berguna bila surface kecil dan ownership jelas.",
        "Berikutnya, changelog note membuat perubahan component dapat dipahami consumer.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "package-structure-basics-intro",
      "package-structure-basics-example",
      "package-structure-basics-coding-practice",
      "package-structure-basics-quick-check",
      "package-structure-basics-summary",
    ],
  },
};

export const componentChangelogThinkingLesson: Lesson = {
  id: "component-changelog-thinking",
  trackId: "frontend-engineering",
  moduleId: "storybook-package-basics",
  title: "Changelog Thinking",
  slug: "component-changelog-thinking",
  description:
    "Menulis note perubahan component yang menjelaskan dampak caller, state yang berubah, migration kecil, dan QA yang diperlukan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan perubahan internal dari perubahan component API atau visual contract",
    "Menulis changelog note yang menyebut impact serta action consumer",
    "Mencatat story dan state yang perlu direview setelah perubahan",
    "Menghindari jargon versioning serta release pipeline sebelum dibutuhkan",
  ],
  skillTags: ["Changelog", "Component API", "Documentation", "Review", "Communication"],
  blocks: [
    {
      id: "component-changelog-thinking-intro",
      type: "text",
      title: "Tulis perubahan dari dampak consumer",
      content:
        "Changelog kecil bukan daftar file yang diubah. Ia menjawab: apa berubah, siapa terdampak, apakah caller perlu melakukan sesuatu, state mana yang perlu direview, dan apakah ada migration atau fallback. Perubahan internal seperti memindahkan helper mungkin cukup dicatat di pull request. Perubahan props, default variant, token, focus behavior, atau semantics button dapat mengubah product dan perlu note lebih jelas.\n\nGunakan bahasa spesifik. Alih-alih Improve Button, tulis bahwa CourseButton sekarang membutuhkan variant eksplisit, default secondary dihapus, stories ditambahkan, dan consumer yang mengandalkan default perlu memilih intent. Catat QA serta debt yang belum selesai. Tujuannya bukan membuat release note panjang, melainkan mencegah perubahan component tersebar tanpa context.",
    },
    {
      id: "component-changelog-thinking-example",
      type: "code-example",
      title: "Changelog note untuk perubahan Button",
      language: "bash",
      code: [
        "## Changed - CourseButton",
        "",
        '- CourseButton sekarang memerlukan prop variant: primary | secondary | destructive.',
        "- Default variant sebelumnya dihapus agar intent action terlihat pada setiap caller.",
        "- Stories Primary, Secondary, Destructive, dan Disabled ditambahkan.",
        "",
        "Consumer action:",
        "- Perbarui setiap CourseButton agar mengirim variant yang sesuai intent.",
        "- QA action destructive, disabled saat saving, keyboard focus, dan label panjang.",
        "",
        "Deferred:",
        "- Loading spinner belum ditambahkan karena belum ada consumer dengan requirement sama.",
      ].join("\n"),
      explanation:
        "Note menyebutkan perubahan API, alasan, action consumer, QA, dan hal yang sengaja ditunda. Ia tidak berpura-pura sudah menyelesaikan semua design system concern.",
    },
    {
      id: "component-changelog-thinking-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih satu component local atau CourseButton. Tulis changelog-style note yang memuat perubahan API atau visual/semantic contract, alasan, caller terdampak, migration action bila ada, stories/state yang harus direview, QA keyboard/accessibility, dan scope yang sengaja ditunda. Jangan hanya menulis nama file atau improve/fix tanpa impact.",
      placeholder:
        "Changed - CourseButton: variant sekarang required dan default secondary dihapus agar caller selalu memilih intent. Caller di course settings dan lesson action perlu menambah primary, secondary, atau destructive. Saya menambahkan stories setiap variant dan Disabled saat saving. QA mencakup focus-visible, label panjang, destructive action, dan disabled button. Saya belum menambah loading spinner karena belum ada consumer dengan requirement visual sama.",
      minimumCharacters: 650,
      checklist: [
        "Menyebutkan perubahan contract atau behavior konkret.",
        "Menjelaskan caller terdampak dan migration action bila perlu.",
        "Mencatat stories, state, atau QA yang perlu direview.",
        "Menyebutkan scope yang ditunda tanpa klaim berlebihan.",
      ],
      modelAnswer:
        "Changed - CourseButton: prop variant sekarang wajib dengan primary, secondary, atau destructive. Default secondary dihapus karena caller perlu menunjukkan intent action. Consumer di course settings, lesson action, dan dialog delete perlu menambah variant sesuai risk. Saya menambahkan stories Primary, Secondary, Destructive, dan Disabled saat saving. QA mencakup focus-visible, label panjang, disabled state, serta action delete. Saya belum menambah loading spinner karena consumer saat ini cukup memakai label Mengirim dan disabled state.",
    },
    {
      id: "component-changelog-thinking-quick-check",
      type: "quick-check",
      question: "Changelog note mana paling membantu consumer?",
      options: [
        "CourseButton tidak lagi memiliki default variant; caller perlu memilih primary, secondary, atau destructive dan QA state disabled dilakukan.",
        "Improve button files and styles.",
        "Refactor component for better quality.",
        "Update several files in UI folder.",
      ],
      correctAnswer: "CourseButton tidak lagi memiliki default variant; caller perlu memilih primary, secondary, atau destructive dan QA state disabled dilakukan.",
      explanation:
        "Note baik menjelaskan impact, action, dan QA. Nama file atau klaim kualitas tidak memberi consumer context untuk memperbarui penggunaan component.",
    },
    {
      id: "component-changelog-thinking-summary",
      type: "summary",
      points: [
        "Changelog note menjelaskan impact consumer, bukan daftar file.",
        "Props, default, token, semantics, dan focus behavior dapat menjadi perubahan contract.",
        "Catat migration action, stories/state yang direview, serta scope ditunda.",
        "Note singkat spesifik lebih berguna daripada klaim improve umum.",
        "Berikutnya, Uji Kompetensi menggabungkan story, a11y check, export, dan change note.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-changelog-thinking-intro",
      "component-changelog-thinking-example",
      "component-changelog-thinking-writing-practice",
      "component-changelog-thinking-quick-check",
      "component-changelog-thinking-summary",
    ],
  },
};

export const storybookPackageBasicsAssessmentLesson: Lesson = {
  id: "storybook-package-basics-assessment",
  trackId: "frontend-engineering",
  moduleId: "storybook-package-basics",
  title: "Uji Kompetensi Storybook and Package Basics",
  slug: "storybook-package-basics-assessment",
  description:
    "Membuktikan kesiapan mendokumentasikan component, state, accessibility expectation, export surface, dan change note tanpa publishing package.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Menyusun typed story file untuk reusable FormField dengan states yang perlu direview",
    "Menetapkan a11y test behavior serta mencatat manual QA",
    "Menjelaskan public export dan scope internal component system kecil",
    "Menulis usage serta changelog note yang membantu consumer",
  ],
  skillTags: ["Storybook", "Component Documentation", "Accessibility", "Exports", "Readiness Checkpoint"],
  blocks: [
    {
      id: "storybook-package-basics-assessment-recap",
      type: "text",
      title: "Checkpoint: dokumentasikan CourseTextField lintas feature",
      content:
        "CourseTextField dipakai profile settings dan invite member. Versi awal hanya memiliki story Default, props error/disabled tidak terlihat, a11y check dimatikan global, dan consumer mengimpor component dari path internal berbeda. Saat default hint berubah, tidak ada note yang memberi tahu feature owner state mana yang perlu direview.\n\nPada checkpoint ini, buat story contract yang dapat dibaca: meta typed, stories Default, WithHint, Error, dan Disabled, args sesuai API, a11y behavior error untuk stories yang siap dijaga, serta public export jelas. Storybook tidak menggantikan submit flow atau server validation; ia membuat state component mudah ditemukan sebelum integration QA.",
    },
    { id: "storybook-package-basics-assessment-quiz", type: "quiz", quizId: "storybook-package-basics-assessment-quiz" },
    { id: "storybook-package-basics-assessment-coding-practice", type: "coding-practice", challengeId: "document-course-text-field-storybook-checkpoint" },
    {
      id: "storybook-package-basics-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih satu reusable component local atau CourseTextField checkpoint. Tulis documentation note: purpose/consumer, public props/states, stories yang harus ada dan alasan, a11y check/manual QA, public export path, usage example, breaking atau potentially breaking change, dan scope yang ditunda. Bila Storybook belum dapat berjalan, tulis blocker serta docs yang akan dibaca; jangan mengklaim check berhasil.",
      placeholder:
        "CourseTextField dipakai profile dan invite member. Props-nya id, label, hint?, error?, value, disabled?, dan onChange. Stories Default, WithHint, Error, Disabled, dan LongLabel diperlukan agar relationship label/error serta layout dapat direview. A11y check dijalankan pada stable stories; saya tetap QA tab order, label, error copy, dan submit flow di consumer route. Component diekspor dari components/ui. Saya belum mendukung password reveal atau custom select karena interaction berbeda.",
      minimumCharacters: 900,
      checklist: [
        "Menjelaskan purpose, consumer, props, serta state secara spesifik.",
        "Menentukan stories untuk default, state, dan edge case.",
        "Membedakan automated a11y check dari keyboard/flow QA.",
        "Menyebutkan public export, usage, impact perubahan, serta scope ditunda.",
        "Mencatat blocker Storybook lokal secara jujur bila setup belum berjalan.",
      ],
      modelAnswer:
        "CourseTextField digunakan profile settings dan invite member untuk input email dengan label, hint, error, serta disabled state. Public props-nya id, label, hint?, error?, value, disabled?, dan onChange. Saya membuat Default, WithHint, Error, Disabled, dan LongLabel karena state itu mengubah context user. Stable stories memakai a11y test error; saya tetap menjalankan keyboard QA untuk tab order, label relationship, error wording, serta submit flow pada route consumer. Component diekspor dari components/ui agar feature tidak mengimpor internal file. Jika default hint berubah, changelog note menyebut caller yang perlu memeriksa copy. Saya belum menambah password reveal atau custom select karena memiliki interaction dan accessibility contract berbeda.",
    },
    {
      id: "storybook-package-basics-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk menjaga story dan quality contract nyata",
      description:
        "Dokumentasi resmi menjelaskan setup, Component Story Format, args, dan a11y parameter. Gunakan docs bersama component API serta manual QA; jangan menyalin konfigurasi lintas project tanpa memahami framework, dependency, dan state yang didokumentasikan.",
      links: [
        {
          source: "Storybook",
          title: "Install Storybook",
          url: "https://storybook.js.org/docs/get-started/install",
          focus: ["Command setup dari root project.", "Script dan configuration yang ditambahkan CLI.", "Menjalankan Storybook lokal."],
          ignoreForNow: ["Advanced configuration, visual regression service, dan publishing workflow."],
        },
        {
          source: "Storybook",
          title: "How to write stories",
          url: "https://storybook.js.org/docs/writing-stories",
          focus: ["meta, named story export, dan StoryObj typed.", "Args sebagai representasi props.", "Story dekat component source."],
          ignoreForNow: ["Decorator, loader, play function, serta page composition yang belum dibutuhkan."],
        },
        {
          source: "Storybook",
          title: "Args",
          url: "https://storybook.js.org/docs/writing-stories/args",
          focus: ["Mengubah state component melalui args.", "Mereuse args tanpa menyembunyikan API.", "Membedakan args component dari global setting."],
          ignoreForNow: ["Interactive useArgs bila static story sudah cukup."],
        },
        {
          source: "Storybook",
          title: "Accessibility tests",
          url: "https://storybook.js.org/docs/writing-tests/accessibility-testing",
          focus: ["parameters.a11y.test dengan error, todo, dan off.", "Result sebagai signal awal pada stories.", "Manual QA keyboard serta focus."],
          ignoreForNow: ["Mematikan check global demi menghapus warning tanpa memperbaiki component."],
        },
        {
          source: "npm",
          title: "package.json",
          url: "https://docs.npmjs.com/cli/v11/configuring-npm/package-json/",
          focus: ["Scripts dan metadata setelah tooling ditambahkan.", "Membedakan dependency project dari export surface.", "Menjaga package.json dapat dijelaskan di pull request."],
          ignoreForNow: ["Menerbitkan package, registry configuration, dan release automation."],
        },
      ],
      followUpAction:
        "Pada local project, jalankan Storybook untuk satu primitive dan satu product component. Tambahkan default, variant/state, serta edge-case stories; jalankan a11y check dasar; periksa keyboard behavior; rapikan public export; lalu tulis changelog-style note tentang change, consumer impact, QA, dan debt yang ditunda.",
    },
    {
      id: "storybook-package-basics-assessment-summary",
      type: "summary",
      points: [
        "Storybook membuat component state, variant, dan edge case dapat ditemukan di luar route product.",
        "Stories mengikuti component API melalui typed meta dan args yang dapat dibaca consumer.",
        "A11y check adalah quality signal; keyboard, focus, copy, serta integration QA tetap diperlukan.",
        "Public exports dan changelog menjaga component system kecil berkembang tanpa caller mengimpor detail internal.",
        "Level 17 selesai: lanjut ke Level 18 untuk memahami API, auth boundary, dan data integration.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "storybook-package-basics-assessment-recap",
      "storybook-package-basics-assessment-quiz",
      "storybook-package-basics-assessment-coding-practice",
      "storybook-package-basics-assessment-writing-practice",
      "storybook-package-basics-assessment-documentation-bridge",
      "storybook-package-basics-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const storybookPackageBasicsAssessmentQuiz: Quiz = {
  id: "storybook-package-basics-assessment-quiz",
  lessonId: "storybook-package-basics-assessment",
  title: "Uji Kompetensi Storybook and Package Basics",
  passingScore: 70,
  questions: [
    {
      id: "storybook-purpose",
      type: "multiple-choice",
      question: "Tujuan utama Storybook pada component system adalah",
      options: ["Mendokumentasikan serta meninjau component state di luar complexity route product.", "Menggantikan seluruh integration test aplikasi.", "Menerbitkan component otomatis ke npm.", "Menjalankan database development di browser."],
      correctAnswer: "Mendokumentasikan serta meninjau component state di luar complexity route product.",
      explanation: "Storybook adalah workshop component. Integration, server state, serta workflow product tetap diuji pada tempat sesuai.",
    },
    {
      id: "story-value",
      type: "multiple-choice",
      question: "Story mana paling bernilai setelah CourseButton Default?",
      options: ["Variant destructive dan disabled saat action diproses.", "Sepuluh background acak tanpa perubahan props.", "Satu story untuk setiap pixel padding.", "Story tanpa args agar API tidak terlihat."],
      correctAnswer: "Variant destructive dan disabled saat action diproses.",
      explanation: "Stories perlu menunjukkan state yang mengubah risiko, keputusan, atau experience user.",
    },
    {
      id: "story-args",
      type: "multiple-choice",
      question: "Mengapa args berguna dalam Storybook?",
      options: ["Args menunjukkan props component pada state tertentu dan menjaga story mengikuti API consumer.", "Args menghapus type checking story.", "Args menggantikan state React seluruh aplikasi.", "Args hanya untuk theme global."],
      correctAnswer: "Args menunjukkan props component pada state tertentu dan menjaga story mengikuti API consumer.",
      explanation: "Args memberi input story yang dapat direview dan diubah melalui controls.",
    },
    {
      id: "a11y-signal",
      type: "multiple-choice",
      question: "Pernyataan tepat tentang Storybook accessibility check adalah",
      options: ["Ia membantu menemukan violation pada rendered story, tetapi keyboard, focus, copy, dan flow tetap perlu QA manual.", "Jika lulus, component pasti accessible di seluruh route.", "Ia hanya perlu dijalankan pada default story.", "Warning selalu disembunyikan dengan test off."],
      correctAnswer: "Ia membantu menemukan violation pada rendered story, tetapi keyboard, focus, copy, dan flow tetap perlu QA manual.",
      explanation: "Automated signal dan manual review saling melengkapi. State penting perlu story agar tool tidak hanya melihat happy path.",
    },
    {
      id: "a11y-test-behavior",
      type: "multiple-choice",
      question: "Kapan parameters.a11y.test: todo tepat digunakan?",
      options: ["Saat check tetap dijalankan tetapi known debt sedang dilacak sebelum siap menjadi failing test.", "Saat ingin menghapus semua a11y check permanen.", "Saat component tidak punya stories.", "Saat ingin menandai component pasti accessible."],
      correctAnswer: "Saat check tetap dijalankan tetapi known debt sedang dilacak sebelum siap menjadi failing test.",
      explanation: "todo adalah penanda debt yang perlu ditinjau, bukan tempat aman menghindari perbaikan.",
    },
    {
      id: "public-exports",
      type: "multiple-choice",
      question: "Mengapa shared UI folder membutuhkan public entry point kecil?",
      options: ["Consumer tahu import didukung dan helper internal tidak menjadi contract tanpa sengaja.", "Agar semua component wajib diterbitkan ke npm.", "Agar story tidak boleh dekat component.", "Agar semua helper internal diekspor."],
      correctAnswer: "Consumer tahu import didukung dan helper internal tidak menjadi contract tanpa sengaja.",
      explanation: "Public surface kecil membuat refactor internal lebih aman dan import consumer konsisten.",
    },
    {
      id: "changelog-impact",
      type: "multiple-choice",
      question: "Changelog note yang membantu consumer harus memuat",
      options: ["Perubahan contract, dampak caller, migration action, state QA, dan scope ditunda bila relevan.", "Hanya daftar file berubah.", "Klaim improve tanpa detail.", "Nomor version package walau tidak ada publishing."],
      correctAnswer: "Perubahan contract, dampak caller, migration action, state QA, dan scope ditunda bila relevan.",
      explanation: "Changelog berguna ketika consumer memahami apa yang perlu dilakukan serta area yang harus direview.",
    },
  ],
};

export const writeCourseButtonStoriesChallenge: CodingChallenge = {
  id: "write-course-button-stories",
  lessonId: "component-stories",
  title: "Write course button stories",
  description: "Dokumentasikan CourseButton primary, destructive, dan disabled dengan typed meta serta args Storybook.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor Meta dan StoryObj dari Storybook serta CourseButton dari file component.",
    "Buat meta dengan component CourseButton dan type Story dari meta.",
    "Buat stories Primary, Destructive, dan Disabled menggunakan args.",
    "Pastikan Disabled memakai disabled true dan copy action diproses.",
    "Cek otomatis membaca structure story. Preview tidak menjalankan Storybook runtime pada practice ini.",
  ],
  starterCode: {
    ...storybookPracticeCode,
    tsx: ['import { CourseButton } from "./CourseButton";', "", "export const Example = () => <CourseButton>Simpan</CourseButton>;"].join("\n"),
  },
  solutionCode: {
    ...storybookPracticeCode,
    tsx: [
      'import type { Meta, StoryObj } from "@storybook/nextjs-vite";',
      'import { CourseButton } from "./CourseButton";',
      "",
      "const meta = {",
      "  component: CourseButton,",
      "} satisfies Meta<typeof CourseButton>;",
      "",
      "export default meta;",
      "type Story = StoryObj<typeof meta>;",
      "",
      "export const Primary: Story = {",
      '  args: { variant: "primary", children: "Simpan perubahan" },',
      "};",
      "",
      "export const Destructive: Story = {",
      '  args: { variant: "destructive", children: "Hapus draft" },',
      "};",
      "",
      "export const Disabled: Story = {",
      '  args: { variant: "primary", children: "Menyimpan...", disabled: true },',
      "};",
    ].join("\n"),
  },
  checklist: ["Meta dan StoryObj mengikuti type CourseButton.", "Primary dan destructive menunjukkan intent berbeda.", "Disabled menunjukkan state action diproses.", "Args mengikuti API consumer."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "imports", label: "Storybook type dan component diimpor.", type: "contains", valueIncludes: 'import type { Meta, StoryObj } from "@storybook/nextjs-vite";\nimport { CourseButton } from "./CourseButton";' },
      { id: "meta", label: "Typed meta tersedia.", type: "contains", valueIncludes: "const meta = {\n  component: CourseButton,\n} satisfies Meta<typeof CourseButton>;\n\nexport default meta;\ntype Story = StoryObj<typeof meta>;" },
      { id: "primary", label: "Primary story memakai args.", type: "contains", valueIncludes: 'export const Primary: Story = {\n  args: { variant: "primary", children: "Simpan perubahan" },\n};' },
      { id: "destructive", label: "Destructive story memakai args.", type: "contains", valueIncludes: 'export const Destructive: Story = {\n  args: { variant: "destructive", children: "Hapus draft" },\n};' },
      { id: "disabled", label: "Disabled story tersedia.", type: "contains", valueIncludes: 'export const Disabled: Story = {\n  args: { variant: "primary", children: "Menyimpan...", disabled: true },\n};' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target CourseButton stories",
    description: "Cek otomatis membaca structure story. Preview tidak menjalankan Storybook runtime; jalankan Storybook lokal untuk meninjau controls, state visual, serta context component.",
    lines: ["Primary, destructive, dan disabled dapat dibuka sebagai story.", "Args menunjukkan API CourseButton.", "Story state dapat direview tanpa route product."],
  },
  skillTags: ["Storybook", "Stories", "Args", "TypeScript"],
};

export const configureCourseButtonA11yStoriesChallenge: CodingChallenge = {
  id: "configure-course-button-a11y-stories",
  lessonId: "storybook-accessibility-checks",
  title: "Configure course button a11y stories",
  description: "Tambahkan a11y test behavior untuk CourseButton dan tandai known debt dengan todo, bukan mematikan check.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat typed meta CourseButton dengan parameters a11y test error.",
    "Buat Primary story yang memakai primary args.",
    "Buat ExistingDebt story dengan a11y test todo.",
    "Jangan memakai test off untuk menghilangkan debt.",
    "Cek otomatis membaca configuration story. Preview tidak menjalankan Storybook runtime pada practice ini.",
  ],
  starterCode: {
    ...storybookPracticeCode,
    tsx: ['import type { Meta, StoryObj } from "@storybook/nextjs-vite";', 'import { CourseButton } from "./CourseButton";', "", "const meta = { component: CourseButton } satisfies Meta<typeof CourseButton>;", "export default meta;", "type Story = StoryObj<typeof meta>;"].join("\n"),
  },
  solutionCode: {
    ...storybookPracticeCode,
    tsx: [
      'import type { Meta, StoryObj } from "@storybook/nextjs-vite";',
      'import { CourseButton } from "./CourseButton";',
      "",
      "const meta = {",
      "  component: CourseButton,",
      "  parameters: {",
      '    a11y: { test: "error" },',
      "  },",
      "} satisfies Meta<typeof CourseButton>;",
      "",
      "export default meta;",
      "type Story = StoryObj<typeof meta>;",
      "",
      "export const Primary: Story = {",
      '  args: { variant: "primary", children: "Simpan" },',
      "};",
      "",
      "export const ExistingDebt: Story = {",
      '  args: { variant: "secondary", children: "Butuh review" },',
      '  parameters: { a11y: { test: "todo" } },',
      "};",
    ].join("\n"),
  },
  checklist: ["Stable story memakai a11y test error.", "Known debt tetap terlihat sebagai todo.", "Story state memakai component args.", "Keyboard/focus QA tetap dilakukan lokal."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "meta", label: "Meta mengaktifkan a11y test error.", type: "contains", valueIncludes: 'const meta = {\n  component: CourseButton,\n  parameters: {\n    a11y: { test: "error" },\n  },\n} satisfies Meta<typeof CourseButton>;' },
      { id: "primary", label: "Primary story punya args.", type: "contains", valueIncludes: 'export const Primary: Story = {\n  args: { variant: "primary", children: "Simpan" },\n};' },
      { id: "todo", label: "Known debt menggunakan todo.", type: "contains", valueIncludes: 'export const ExistingDebt: Story = {\n  args: { variant: "secondary", children: "Butuh review" },\n  parameters: { a11y: { test: "todo" } },\n};' },
      { id: "no-off", label: "A11y test tidak dimatikan.", type: "doesNotContain", valueIncludes: 'test: "off"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target a11y story configuration",
    description: "Cek otomatis membaca configuration story. Preview tidak menjalankan Storybook runtime; jalankan check lokal dan lakukan keyboard/focus QA sebelum component dianggap siap.",
    lines: ["Stable stories dapat gagal bila ada violation.", "Known debt tetap terlihat sebagai todo.", "Manual QA melengkapi result automated check."],
  },
  skillTags: ["Storybook", "Accessibility", "axe", "Quality"],
};

export const organizeCourseUiPackageExportsChallenge: CodingChallenge = {
  id: "organize-course-ui-package-exports",
  lessonId: "package-structure-basics",
  title: "Organize course UI package exports",
  description: "Susun public index.ts untuk CourseButton, CourseButtonProps, dan FormField tanpa mengekspor helper internal.",
  instructions: [
    "Fokus di tab TS.",
    "Ekspor CourseButton dari path component public.",
    "Ekspor type CourseButtonProps dengan export type.",
    "Ekspor FormField dari path component public.",
    "Jangan mengekspor formatCourseButtonClass helper internal.",
    "Cek otomatis membaca public export surface. Preview tidak menjalankan TypeScript runtime pada practice ini.",
  ],
  starterCode: {
    ...storybookPracticeCode,
    ts: ['export { CourseButton } from "./CourseButton/CourseButton";', 'export { formatCourseButtonClass } from "./CourseButton/internal";'].join("\n"),
  },
  solutionCode: {
    ...storybookPracticeCode,
    ts: [
      'export { CourseButton } from "./CourseButton/CourseButton";',
      'export type { CourseButtonProps } from "./CourseButton/CourseButton.types";',
      'export { FormField } from "./FormField/FormField";',
    ].join("\n"),
  },
  checklist: ["Consumer memiliki satu import path public.", "Component props diekspor sebagai type contract.", "Helper internal tidak menjadi public API.", "Feature-local component tidak dipaksa shared."],
  validation: {
    mode: "ts",
    checks: [
      { id: "button", label: "CourseButton diekspor dari component public.", type: "contains", valueIncludes: 'export { CourseButton } from "./CourseButton/CourseButton";' },
      { id: "type", label: "CourseButtonProps diekspor sebagai type.", type: "contains", valueIncludes: 'export type { CourseButtonProps } from "./CourseButton/CourseButton.types";' },
      { id: "field", label: "FormField diekspor dari component public.", type: "contains", valueIncludes: 'export { FormField } from "./FormField/FormField";' },
      { id: "internal", label: "Helper internal tidak diekspor.", type: "doesNotContain", valueIncludes: "formatCourseButtonClass" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target UI public exports",
    description: "Cek otomatis membaca export surface TypeScript. Preview tidak menjalankan TypeScript runtime; review consumer imports serta typecheck local project setelah memindahkan entry point.",
    lines: ["CourseButton, CourseButtonProps, dan FormField tersedia lewat entry point.", "Helper internal tidak menjadi contract.", "Import surface kecil memudahkan refactor."],
  },
  skillTags: ["TypeScript", "Package Structure", "Exports", "Component API"],
};

export const documentCourseTextFieldStorybookCheckpointChallenge: CodingChallenge = {
  id: "document-course-text-field-storybook-checkpoint",
  lessonId: "storybook-package-basics-assessment",
  title: "Document course text field Storybook checkpoint",
  description: "Dokumentasikan CourseTextField melalui default, hint, error, dan disabled stories dengan typed meta serta a11y test behavior.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat typed meta CourseTextField dengan a11y test error.",
    "Buat Default, WithHint, Error, dan Disabled stories memakai args component.",
    "Error harus memuat error message dan Disabled memakai disabled true.",
    "Jangan mengganti state dengan markup component baru yang tidak mengikuti props.",
    "Cek otomatis membaca structure story. Preview tidak menjalankan Storybook runtime pada practice ini.",
  ],
  starterCode: {
    ...storybookPracticeCode,
    tsx: ['import { CourseTextField } from "./CourseTextField";', "", "export const Example = () => <CourseTextField />;"].join("\n"),
  },
  solutionCode: {
    ...storybookPracticeCode,
    tsx: [
      'import type { Meta, StoryObj } from "@storybook/nextjs-vite";',
      'import { CourseTextField } from "./CourseTextField";',
      "",
      "const meta = {",
      "  component: CourseTextField,",
      '  parameters: { a11y: { test: "error" } },',
      "} satisfies Meta<typeof CourseTextField>;",
      "",
      "export default meta;",
      "type Story = StoryObj<typeof meta>;",
      "",
      "export const Default: Story = {",
      '  args: { id: "invite-email", label: "Email member", value: "", onChange: () => {} },',
      "};",
      "",
      "export const WithHint: Story = {",
      '  args: { id: "invite-email", label: "Email member", hint: "Gunakan email kerja.", value: "", onChange: () => {} },',
      "};",
      "",
      "export const Error: Story = {",
      '  args: { id: "invite-email", label: "Email member", error: "Masukkan email yang valid.", value: "nama", onChange: () => {} },',
      "};",
      "",
      "export const Disabled: Story = {",
      '  args: { id: "invite-email", label: "Email member", value: "member@example.com", disabled: true, onChange: () => {} },',
      "};",
    ].join("\n"),
  },
  checklist: ["Stories menjelaskan default, hint, error, dan disabled.", "Args mengikuti CourseTextField props.", "Story file memiliki a11y behavior.", "Submit flow tetap diuji di route consumer."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "meta", label: "Typed meta dan a11y test tersedia.", type: "contains", valueIncludes: 'const meta = {\n  component: CourseTextField,\n  parameters: { a11y: { test: "error" } },\n} satisfies Meta<typeof CourseTextField>;' },
      { id: "default", label: "Default story memakai API field.", type: "contains", valueIncludes: 'export const Default: Story = {\n  args: { id: "invite-email", label: "Email member", value: "", onChange: () => {} },\n};' },
      { id: "hint", label: "Hint story tersedia.", type: "contains", valueIncludes: 'export const WithHint: Story = {\n  args: { id: "invite-email", label: "Email member", hint: "Gunakan email kerja.", value: "", onChange: () => {} },\n};' },
      { id: "error", label: "Error story tersedia.", type: "contains", valueIncludes: 'export const Error: Story = {\n  args: { id: "invite-email", label: "Email member", error: "Masukkan email yang valid.", value: "nama", onChange: () => {} },\n};' },
      { id: "disabled", label: "Disabled story tersedia.", type: "contains", valueIncludes: 'export const Disabled: Story = {\n  args: { id: "invite-email", label: "Email member", value: "member@example.com", disabled: true, onChange: () => {} },\n};' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target CourseTextField stories",
    description: "Cek otomatis membaca structure story. Preview tidak menjalankan Storybook runtime; jalankan local Storybook, review a11y result, dan QA keyboard serta submit flow pada route consumer.",
    lines: ["Default, hint, error, dan disabled dapat direview terpisah.", "Args mengikuti API CourseTextField.", "A11y configuration memberi quality signal sebelum integration QA."],
  },
  skillTags: ["Storybook", "Forms", "Accessibility", "Component Documentation", "Assessment"],
};
