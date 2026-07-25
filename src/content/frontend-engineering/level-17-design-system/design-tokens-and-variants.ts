import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const designSystemPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const designTokensAndVariantsModule: Module = {
  id: "design-tokens-and-variants",
  trackId: "frontend-engineering",
  title: "Design Tokens and Variants",
  slug: "design-tokens-and-variants",
  description:
    "Membuat token visual sederhana dan variants yang typed agar Button serta Card konsisten tanpa menumpuk nilai CSS satu kali pakai.",
  order: 53,
  lessonIds: [
    "design-tokens",
    "color-spacing-tokens",
    "radius-typography-tokens",
    "button-variants",
    "card-variants",
    "design-tokens-variants-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Design Tokens",
    "CSS Custom Properties",
    "Button Variants",
    "Card Variants",
    "Accessibility",
  ],
};

export const designTokensLesson: Lesson = {
  id: "design-tokens",
  trackId: "frontend-engineering",
  moduleId: "design-tokens-and-variants",
  title: "Design Tokens",
  slug: "design-tokens",
  description:
    "Mengenali nilai warna, jarak, radius, dan typography yang berulang lalu memberi nama berdasarkan peran visualnya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan design token sebagai nilai visual bernama yang digunakan ulang",
    "Membedakan nilai sekali pakai dari nilai yang sudah menjadi aturan visual berulang",
    "Memberi nama token berdasarkan peran, bukan hanya angka atau warna mentah",
    "Memulai token kecil yang mendukung perubahan UI nyata tanpa membuat sistem besar terlalu awal",
  ],
  skillTags: ["Design Tokens", "CSS", "Visual Consistency", "Maintainability"],
  blocks: [
    {
      id: "design-tokens-intro",
      type: "text",
      title: "Beri nama pada aturan visual yang berulang",
      content:
        "Design token adalah nilai visual bernama yang dipakai ulang: warna surface, warna border, jarak antar elemen, radius card, atau ukuran text. Ia bukan daftar semua angka dan hex code yang pernah muncul di CSS. Token berguna ketika sebuah nilai sudah menjadi aturan yang ingin dijaga di beberapa tempat. Dengan token, perubahan surface atau spacing tidak perlu mencari nilai mentah di banyak file, dan nama token memberi alasan mengapa nilai itu dipakai.\n\nMulai dari pengulangan yang nyata. Jika CourseCard, LessonSummary, dan ResourcePanel memakai background terang, border halus, padding serupa, serta radius sama, itu kandidat token. Sebaliknya, offset 1px khusus untuk icon yang belum dipakai tempat lain belum perlu diberi nama global. Token yang baik menyederhanakan pilihan visual, bukan menciptakan katalog nilai yang lebih sulit dicari daripada CSS sebelumnya.",
    },
    {
      id: "design-tokens-example",
      type: "code-example",
      title: "Nilai card diberi nama berdasarkan perannya",
      language: "css",
      code: `:root {
  --color-surface: #ffffff;
  --color-border-subtle: #d8dee9;
  --space-card: 1.5rem;
  --radius-card: 0.75rem;
}

.course-card,
.lesson-summary {
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-card);
  padding: var(--space-card);
}`,
      explanation:
        "Nama --color-surface menjelaskan peran background, bukan fakta bahwa nilainya saat ini putih. --color-border-subtle membedakannya dari border focus atau destructive. --space-card dan --radius-card memang terhubung ke satu pattern card yang berulang. Pada sistem yang lebih besar token dapat menjadi scale yang lebih umum, tetapi module ini mengutamakan nama yang jelas bagi kebutuhan project saat ini.",
    },
    {
      id: "design-tokens-coding-practice",
      type: "coding-practice",
      challengeId: "name-course-card-design-tokens",
    },
    {
      id: "design-tokens-quick-check",
      type: "quick-check",
      question:
        "Nilai mana yang paling layak menjadi design token pada tahap awal project?",
      options: [
        "Border halus yang dipakai berulang pada CourseCard, LessonSummary, dan ResourcePanel.",
        "Offset 1px untuk satu icon yang hanya muncul sekali karena asset-nya tidak simetris.",
        "Setiap angka atau color value yang pernah ditulis developer di CSS.",
        "Nilai layout eksperimen yang belum dipakai pada UI mana pun.",
      ],
      correctAnswer:
        "Border halus yang dipakai berulang pada CourseCard, LessonSummary, dan ResourcePanel.",
      explanation:
        "Token menangkap aturan visual yang berulang dan ingin dijaga konsisten. Nilai khusus satu kasus tidak perlu segera menjadi contract global.",
    },
    {
      id: "design-tokens-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan membuat token hanya untuk menyembunyikan angka",
      content:
        "--blue-7, --space-17, atau --value-12 dapat menghilangkan nilai mentah tetapi belum memberi alasan pemakaian. Mulai dengan nama yang dapat dibaca consumer seperti --color-action-primary, --color-text-muted, atau --space-card. Bila project sudah memiliki scale serta aturan naming yang stabil, raw token dan semantic token dapat dipisah. Itu belum diperlukan untuk setiap project kecil.",
    },
    {
      id: "design-tokens-summary",
      type: "summary",
      points: [
        "Design token adalah nilai visual bernama yang digunakan ulang sebagai aturan UI.",
        "Buat token dari pengulangan nyata, bukan dari setiap angka atau hex code di codebase.",
        "Nama token sebaiknya menjelaskan peran visual agar perubahan di masa depan tetap masuk akal.",
        "Token awal yang kecil lebih berguna daripada sistem nilai besar tanpa consumer nyata.",
        "Berikutnya, kita membuat color serta spacing tokens dengan CSS custom properties yang dipakai beberapa component.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "design-tokens-intro",
      "design-tokens-example",
      "design-tokens-coding-practice",
      "design-tokens-quick-check",
      "design-tokens-summary",
    ],
  },
};

export const colorSpacingTokensLesson: Lesson = {
  id: "color-spacing-tokens",
  trackId: "frontend-engineering",
  moduleId: "design-tokens-and-variants",
  title: "Color and Spacing Tokens",
  slug: "color-spacing-tokens",
  description:
    "Membuat color dan spacing tokens dengan CSS custom properties lalu mengganti nilai visual yang berulang pada UI course.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Mendefinisikan color dan spacing tokens pada scope yang sesuai",
    "Menggunakan var() untuk mengganti nilai mentah yang berulang",
    "Membedakan background, text, border, dan action color berdasarkan peran UI",
    "Membuat spacing scale kecil yang lebih konsisten daripada margin satu kali pakai",
  ],
  skillTags: ["CSS", "CSS Custom Properties", "Color Tokens", "Spacing Tokens"],
  blocks: [
    {
      id: "color-spacing-tokens-intro",
      type: "text",
      title: "Color dan spacing harus menjelaskan hubungan antarelemen",
      content:
        "Color token bukan sekadar mengganti #0f172a menjadi variabel. UI biasanya memiliki peran berbeda: surface, text utama, text muted, border, action primary, dan text di atas action. Memberi nama berdasarkan peran membantu kamu mengubah action color tanpa tidak sengaja mengubah semua text gelap. Hal yang sama berlaku untuk spacing. Ketika gap, padding, dan section spacing memakai beberapa ukuran yang berulang, scale kecil membuat rhythm layout lebih mudah dijaga.\n\nCSS custom properties dideklarasikan dengan prefix -- dan dipakai melalui var(). Scope :root cocok untuk token yang dipakai banyak component; scope component cocok untuk token lokal pattern yang tidak ingin dijadikan aturan halaman. Jangan membuat semua component mendefinisikan --space-4 sendiri dengan nilai berbeda. Pilih beberapa ukuran yang telah muncul di UI dan gunakan secara konsisten, lalu review visual serta contrast setelah refactor.",
    },
    {
      id: "color-spacing-tokens-example",
      type: "code-example",
      title: "Token color dan spacing untuk course panel",
      language: "css",
      code: `:root {
  --color-surface: #ffffff;
  --color-text: #172033;
  --color-text-muted: #536176;
  --color-border-subtle: #d8dee9;
  --color-action-primary: #0f6fda;
  --color-on-action: #ffffff;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
}

.course-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text);
  padding: var(--space-6);
}

.course-panel p {
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}

.course-panel a {
  background: var(--color-action-primary);
  color: var(--color-on-action);
  display: inline-block;
  margin-top: var(--space-4);
  padding: var(--space-2) var(--space-4);
}`,
      explanation:
        "Token action memiliki pasangan --color-on-action agar foreground dan background dapat direview sebagai satu keputusan contrast. Spacing kecil --space-2, --space-4, dan --space-6 memberi pilihan yang cukup untuk panel ini tanpa membuat setiap pixel menjadi token. Saat value berubah, semua consumer yang memakai role yang sama berubah bersama; periksa apakah itu memang dampak yang diinginkan sebelum mengubah token global.",
    },
    {
      id: "color-spacing-tokens-coding-practice",
      type: "coding-practice",
      challengeId: "create-course-color-spacing-tokens",
    },
    {
      id: "color-spacing-tokens-quick-check",
      type: "quick-check",
      question:
        "Mengapa --color-on-action lebih baik daripada memakai --white langsung di semua Button primary?",
      options: [
        "Karena nama tersebut menunjukkan peran foreground di atas action dan dapat direview bersama action background-nya.",
        "Karena token warna tidak boleh memiliki nilai putih.",
        "Karena setiap color token harus memakai angka urut.",
        "Karena white tidak dapat dipakai pada CSS custom property.",
      ],
      correctAnswer:
        "Karena nama tersebut menunjukkan peran foreground di atas action dan dapat direview bersama action background-nya.",
      explanation:
        "Semantic token membantu memahami dampak perubahan. Nilai white mungkin tetap menjadi nilai awal, tetapi consumer tidak perlu mengetahui detail itu untuk memilih color yang benar.",
    },
    {
      id: "color-spacing-tokens-callout",
      type: "callout",
      variant: "important",
      title: "Token tidak menjamin contrast secara otomatis",
      content:
        "Mengganti color literal dengan token tidak otomatis membuat text dapat dibaca. Periksa pasangan foreground/background pada state default, hover, focus, disabled, dan theme yang tersedia. Jangan hanya mengandalkan warna untuk menyampaikan error atau destructive state; copy, icon, dan semantic structure tetap dapat diperlukan sesuai konteks UI.",
    },
    {
      id: "color-spacing-tokens-summary",
      type: "summary",
      points: [
        "Color token diberi nama berdasarkan peran seperti surface, text, border, dan action.",
        "Spacing scale kecil mengurangi margin serta padding satu kali pakai yang tidak konsisten.",
        "CSS custom properties memakai -- saat deklarasi dan var() saat dipakai.",
        "Token global perlu diubah dengan hati-hati karena beberapa consumer dapat ikut berubah.",
        "Berikutnya, radius dan typography tokens melengkapi visual rhythm tanpa menambah nilai acak pada setiap component.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "color-spacing-tokens-intro",
      "color-spacing-tokens-example",
      "color-spacing-tokens-coding-practice",
      "color-spacing-tokens-quick-check",
      "color-spacing-tokens-summary",
    ],
  },
};

export const radiusTypographyTokensLesson: Lesson = {
  id: "radius-typography-tokens",
  trackId: "frontend-engineering",
  moduleId: "design-tokens-and-variants",
  title: "Radius and Typography",
  slug: "radius-typography-tokens",
  description:
    "Menambahkan radius dan typography tokens agar hierarchy text serta surface UI tidak berubah-ubah antar component.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menggunakan radius token untuk surface dengan peran yang konsisten",
    "Mendefinisikan typography token untuk body, title, dan supporting text",
    "Menjaga line-height dan font weight sebagai bagian dari readability, bukan hanya font-size",
    "Menghindari pemakaian radius serta ukuran text yang berbeda tanpa alasan product",
  ],
  skillTags: ["CSS", "Design Tokens", "Border Radius", "Typography", "Visual Hierarchy"],
  blocks: [
    {
      id: "radius-typography-tokens-intro",
      type: "text",
      title: "Hierarchy dan surface perlu aturan yang dapat dikenali",
      content:
        "Radius memberi sinyal apakah surface adalah field kecil, card, dialog, atau control yang menempel pada layout. Jika setiap component memilih 6px, 10px, 12px, 14px, dan 16px tanpa pattern, UI terasa tidak sengaja dirancang. Token radius tidak harus banyak: small untuk control, medium untuk card, dan large untuk surface yang benar-benar besar sudah cukup sebagai awal.\n\nTypography juga bukan font-size saja. Title biasanya membutuhkan size, weight, serta line-height yang berbeda dari body atau supporting text. Token typography membantu menjaga hierarchy saat author menambah card atau panel baru. Namun jangan memakai token sebagai alasan memperkecil text terlalu jauh atau mengandalkan font-weight untuk memperbaiki contrast yang buruk. Ukuran, line-height, color, dan ruang di sekitar text perlu dibaca bersama pada viewport nyata.",
    },
    {
      id: "radius-typography-tokens-example",
      type: "code-example",
      title: "Surface dan text mengikuti token yang terbatas",
      language: "css",
      code: `:root {
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --font-sans: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  --font-size-body: 1rem;
  --line-height-body: 1.6;
  --font-size-title: 1.25rem;
  --line-height-title: 1.3;
  --font-weight-title: 700;
}

.course-card {
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
}

.course-card h2 {
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-title);
  line-height: var(--line-height-title);
}

.course-card p {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}`,
      explanation:
        "--radius-md dipakai untuk surface card, sedangkan --radius-sm dapat dipakai untuk control atau badge bila pattern tersebut nyata. Typography token membuat h2 dan paragraph memakai hierarchy yang sama pada banyak card tanpa mengulang angka. Nama token dapat mengikuti sistem project, tetapi jangan mencampur --title-20, --body-large, dan --font-size-3 tanpa convention yang dapat dijelaskan pada consumer berikutnya.",
    },
    {
      id: "radius-typography-tokens-coding-practice",
      type: "coding-practice",
      challengeId: "add-course-radius-typography-tokens",
    },
    {
      id: "radius-typography-tokens-quick-check",
      type: "quick-check",
      question:
        "Token typography mana yang paling membantu menjaga heading card dapat dibaca konsisten?",
      options: [
        "font-size title, font-weight title, dan line-height title yang dipakai bersama.",
        "Hanya satu font-size besar tanpa line-height atau weight.",
        "Nilai font-size baru untuk setiap heading agar semua card tampak berbeda.",
        "Border radius yang lebih besar pada setiap text heading.",
      ],
      correctAnswer:
        "font-size title, font-weight title, dan line-height title yang dipakai bersama.",
      explanation:
        "Hierarchy text datang dari beberapa properti yang bekerja bersama. Token membuat keputusan tersebut konsisten dan lebih mudah direview pada banyak component.",
    },
    {
      id: "radius-typography-tokens-summary",
      type: "summary",
      points: [
        "Radius token membuat hubungan antara control dan surface lebih konsisten.",
        "Typography token mencakup size, weight, dan line-height sesuai peran text.",
        "Pilih scale kecil yang sudah memiliki consumer nyata sebelum memperluasnya.",
        "Visual hierarchy tetap perlu diperiksa dalam context layout, contrast, dan viewport nyata.",
        "Berikutnya, Button variants memakai token dan union type untuk menjelaskan intent, size, focus, serta disabled state.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "radius-typography-tokens-intro",
      "radius-typography-tokens-example",
      "radius-typography-tokens-coding-practice",
      "radius-typography-tokens-quick-check",
      "radius-typography-tokens-summary",
    ],
  },
};

export const buttonVariantsLesson: Lesson = {
  id: "button-variants",
  trackId: "frontend-engineering",
  moduleId: "design-tokens-and-variants",
  title: "Button Variants",
  slug: "button-variants",
  description:
    "Mendesain Button primary, secondary, dan destructive dengan variant yang typed serta state disabled dan focus yang dapat diakses.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan intent primary, secondary, dan destructive dari sekadar warna button",
    "Membatasi variants dengan union type yang dapat diperiksa caller",
    "Menjaga disabled attribute serta visible focus state pada control native",
    "Menghindari boolean visual yang bertentangan seperti isPrimary dan isDanger sekaligus",
  ],
  skillTags: ["React", "Button", "Variants", "TypeScript", "Accessibility"],
  blocks: [
    {
      id: "button-variants-intro",
      type: "text",
      title: "Variant menyatakan intent, bukan sekadar cat warna",
      content:
        "Button primary biasanya membawa action utama pada context saat ini, secondary mendukung action alternatif, dan destructive memberi sinyal tindakan yang berisiko atau sulit dibatalkan. Variant bukan dekorasi bebas; ia adalah contract product dan accessibility. Jika semua action memakai primary, user tidak tahu mana langkah utama. Jika destructive hanya dibedakan lewat merah tanpa label atau context, user tetap dapat salah mengerti dampaknya.\n\nPada component Button, union type seperti primary | secondary | destructive membuat caller memilih intent yang didukung. size juga dapat menjadi union kecil bila memang diperlukan oleh beberapa context. Gunakan button native, disabled attribute saat action belum boleh dijalankan, dan focus-visible style yang tetap terlihat pada semua variant. Jangan memakai isPrimary, isSecondary, dan isDanger karena kombinasi boolean itu dapat menciptakan state yang saling bertentangan.",
    },
    {
      id: "button-variants-example",
      type: "code-example",
      title: "Button API dengan intent dan size yang terbatas",
      language: "tsx",
      code: `import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "destructive";
type ButtonSize = "sm" | "md";

type CourseButtonProps = {
  children: ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
};

export function CourseButton({
  children,
  variant,
  size = "md",
  disabled = false,
  onClick,
}: CourseButtonProps) {
  return (
    <button
      type="button"
      className={"button button--" + variant + " button--" + size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
      explanation:
        "variant wajib karena caller perlu memilih intent action secara sadar. size default md karena ini pilihan ukuran umum yang tidak perlu diulang di setiap caller. disabled memakai native attribute agar interaction serta accessibility semantics mengikuti element button. CSS untuk button--primary, button--secondary, dan button--destructive kemudian memakai token color, spacing, radius, serta focus ring yang sesuai.",
    },
    {
      id: "button-variants-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-button-variants",
    },
    {
      id: "button-variants-quick-check",
      type: "quick-check",
      question:
        "Mengapa Button variant lebih aman memakai union type daripada isPrimary dan isDestructive?",
      options: [
        "Union membatasi caller pada satu intent yang didukung dan menghindari kombinasi boolean yang bertentangan.",
        "Union membuat button tidak perlu memiliki CSS classes.",
        "Boolean tidak dapat dipakai sama sekali pada React component.",
        "Union otomatis menjamin semua warna sudah memenuhi contrast tanpa QA.",
      ],
      correctAnswer:
        "Union membatasi caller pada satu intent yang didukung dan menghindari kombinasi boolean yang bertentangan.",
      explanation:
        "Satu prop variant menggambarkan satu pilihan yang saling eksklusif. Type membantu caller, tetapi visual state, focus, disabled, dan contrast tetap harus diimplementasikan serta diuji.",
    },
    {
      id: "button-variants-callout",
      type: "callout",
      variant: "warning",
      title: "Disabled bukan alasan menghilangkan focus feedback",
      content:
        "Button disabled memang tidak dapat diaktifkan, tetapi button yang aktif harus memiliki focus indicator yang terlihat ketika user bernavigasi dengan keyboard. Pastikan focus-visible tidak tertutup oleh background variant, dan jangan memakai disabled hanya untuk menyembunyikan error validation tanpa menjelaskan apa yang perlu diperbaiki. Jika action destructive, gunakan copy yang jelas serta confirmation flow bila dampaknya besar.",
    },
    {
      id: "button-variants-summary",
      type: "summary",
      points: [
        "Button variant menyatakan intent product primary, secondary, atau destructive.",
        "Union type mencegah kombinasi boolean visual yang saling bertentangan.",
        "Button native, disabled attribute, dan focus-visible adalah bagian dari contract variant.",
        "Token color, spacing, dan radius membuat CSS variant tidak mengulang nilai satu kali pakai.",
        "Berikutnya, Card variants menerapkan prinsip yang sama pada surface product yang membawa content lebih banyak.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "button-variants-intro",
      "button-variants-example",
      "button-variants-coding-practice",
      "button-variants-quick-check",
      "button-variants-summary",
    ],
  },
};

export const cardVariantsLesson: Lesson = {
  id: "card-variants",
  trackId: "frontend-engineering",
  moduleId: "design-tokens-and-variants",
  title: "Card Variants",
  slug: "card-variants",
  description:
    "Membuat card default, featured, dan muted sebagai product surface yang tetap menjaga hierarchy content serta tidak berubah menjadi container universal.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan card variant berdasarkan peran content, bukan sekadar warna berbeda",
    "Membatasi variant card dengan type yang jelas",
    "Menjaga article, heading, description, dan optional content sebagai structure yang dapat dibaca",
    "Menghindari Card generic dengan banyak mode untuk dialog, table, form, dan dashboard sekaligus",
  ],
  skillTags: ["React", "Card", "Variants", "Component API", "Design Tokens"],
  blocks: [
    {
      id: "card-variants-intro",
      type: "text",
      title: "Card adalah surface product, bukan div dengan nama lebih panjang",
      content:
        "Card membantu ketika beberapa content item memiliki surface, padding, border, hierarchy, dan optional emphasis yang sama. Default dapat dipakai untuk daftar course biasa, featured dapat menandai rekomendasi atau course yang sedang dilanjutkan, dan muted dapat memberi context sekunder. Variant perlu menjelaskan peran content sehingga developer tahu kapan memilihnya. Jika featured hanya berarti warna lebih terang tanpa alasan product, variant itu belum memiliki contract yang kuat.\n\nJaga API Card dekat dengan content yang dibawanya. Card course dapat menerima title, description, variant, dan children opsional untuk detail tambahan. Ia tidak perlu sekaligus menjadi wrapper modal, form field, table row, dan marketing hero. Ketika structure serta interaction berubah jauh, buat primitive atau component domain lain daripada menambah props mode baru.",
    },
    {
      id: "card-variants-example",
      type: "code-example",
      title: "CourseCard dengan surface variant yang terbatas",
      language: "tsx",
      code: `import type { ReactNode } from "react";

type CourseCardVariant = "default" | "featured" | "muted";

type CourseCardProps = {
  title: string;
  description: string;
  variant?: CourseCardVariant;
  children?: ReactNode;
};

export function CourseCard({
  title,
  description,
  variant = "default",
  children,
}: CourseCardProps) {
  return (
    <article className={"course-card course-card--" + variant}>
      <h2>{title}</h2>
      <p>{description}</p>
      {children ? <div className="course-card__content">{children}</div> : null}
    </article>
  );
}`,
      explanation:
        "article dan h2 memberi structure content yang dapat dibaca screen reader maupun developer. variant default membuat caller tidak perlu menulis prop untuk card biasa. children memberi area tambahan saat content memang masih bagian dari card course, misalnya progress atau link. Bila children selalu berisi layout besar yang berbeda, itu sinyal Card perlu dipecah atau consumer sebaiknya memakai composition lain.",
    },
    {
      id: "card-variants-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-card-variants",
    },
    {
      id: "card-variants-quick-check",
      type: "quick-check",
      question:
        "Kapan CourseCard variant featured paling tepat dipakai?",
      options: [
        "Saat product ingin menandai content yang memang memiliki prioritas khusus, seperti course yang sedang dilanjutkan learner.",
        "Untuk setiap card agar semua item tampak sama kuatnya.",
        "Setiap kali card memiliki paragraph lebih dari satu.",
        "Untuk menyembunyikan bahwa content tidak memiliki hierarchy yang jelas.",
      ],
      correctAnswer:
        "Saat product ingin menandai content yang memang memiliki prioritas khusus, seperti course yang sedang dilanjutkan learner.",
      explanation:
        "Variant harus menyatakan peran product. Jika semua card featured, user tidak lagi dapat membedakan information hierarchy yang ingin disampaikan UI.",
    },
    {
      id: "card-variants-summary",
      type: "summary",
      points: [
        "Card variants menandai peran content seperti default, featured, atau muted.",
        "API card tetap perlu menjaga semantic structure title, description, dan content tambahan.",
        "children berguna untuk detail yang masih sesuai dengan purpose card, bukan untuk menerima seluruh layout bebas.",
        "Jangan mengubah Card menjadi container universal dengan mode untuk product pattern yang berbeda.",
        "Uji Kompetensi berikutnya menggabungkan tokens, Button, Card, focus, disabled, serta contrast review pada satu UI kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "card-variants-intro",
      "card-variants-example",
      "card-variants-coding-practice",
      "card-variants-quick-check",
      "card-variants-summary",
    ],
  },
};

export const designTokensVariantsAssessmentLesson: Lesson = {
  id: "design-tokens-variants-assessment",
  trackId: "frontend-engineering",
  moduleId: "design-tokens-and-variants",
  title: "Uji Kompetensi Design Tokens and Variants",
  slug: "design-tokens-variants-assessment",
  description:
    "Membuktikan kesiapan membuat token visual sederhana serta Button dan Card variants yang konsisten, typed, dan dapat diakses.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Mengubah nilai color, spacing, radius, dan typography yang berulang menjadi token yang bernama jelas",
    "Mendesain Button dan Card variants dengan intent serta scope yang dapat dijelaskan",
    "Memeriksa state focus, disabled, dan contrast sebelum menganggap component siap dipakai ulang",
    "Menulis refactor note yang menjelaskan nilai yang sengaja belum ditokenisasi atau dijadikan variant",
  ],
  skillTags: ["Design Tokens", "CSS", "Variants", "Accessibility", "Readiness Checkpoint"],
  blocks: [
    {
      id: "design-tokens-variants-assessment-recap",
      type: "text",
      title: "Checkpoint: rapikan course action UI tanpa membuat design system besar",
      content:
        "Tim memiliki course action panel dengan warna literal berulang, padding serta radius berbeda, button utama dan hapus yang hanya berbeda class acak, dan card rekomendasi yang tidak terlihat berbeda dari card biasa. Mereka ingin hasil lebih konsisten, tetapi belum membutuhkan multi-brand theme, token pipeline, package publishing, atau Storybook automation. Pada checkpoint ini, buat token kecil untuk visual rules yang benar-benar dipakai, lalu gunakan Button dan Card variants yang menjelaskan intent. Pastikan action utama, secondary, dan destructive tidak saling bertentangan; focus ring terlihat; button disabled memiliki state yang jelas; dan card featured memiliki alasan product. Tujuannya bukan menambah abstraction, melainkan membuat perubahan visual berikutnya lebih aman serta lebih mudah direview.",
    },
    {
      id: "design-tokens-variants-assessment-quiz",
      type: "quiz",
      quizId: "design-tokens-variants-assessment-quiz",
    },
    {
      id: "design-tokens-variants-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-token-driven-course-ui-checkpoint",
    },
    {
      id: "design-tokens-variants-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis refactor note untuk satu Button dan Card pada local React atau Next.js project, atau gunakan course action panel pada checkpoint ini. Jelaskan token color, spacing, radius, dan typography yang kamu pilih; variant Button/Card yang didukung; state focus, disabled, serta contrast yang kamu periksa; satu nilai yang sengaja tidak kamu jadikan token; dan satu variant yang sengaja tidak kamu tambahkan. Hubungkan keputusanmu dengan consumer atau workflow product yang nyata, bukan hanya karena UI terlihat lebih rapi.",
      placeholder:
        "Saya membuat --color-action-primary, --color-action-destructive, --color-on-action, --space-2, --space-4, --space-6, --radius-md, serta token title/body yang dipakai CourseActionPanel. Button mendukung primary, secondary, dan destructive karena ketiganya mewakili action lanjut lesson, kembali, dan hapus draft. Saya memeriksa focus-visible pada semua variant, disabled native attribute pada submit yang belum valid, dan contrast foreground/background untuk primary serta destructive. CourseCard memiliki default dan featured karena featured dipakai untuk course yang sedang dilanjutkan. Saya tidak membuat token untuk offset icon 1px karena hanya dipakai satu asset. Saya juga tidak menambah button variant success karena belum ada consumer dengan intent tersebut; status success tampil sebagai content state, bukan action button baru.",
      minimumCharacters: 850,
      checklist: [
        "Menyebut token color, spacing, radius, dan typography yang benar-benar dipakai consumer.",
        "Menjelaskan intent variant Button dan Card yang didukung.",
        "Menyebut QA focus-visible, disabled state, dan contrast foreground/background.",
        "Menjelaskan satu nilai yang sengaja belum dijadikan token.",
        "Menjelaskan satu variant yang ditunda karena belum memiliki kebutuhan product nyata.",
      ],
      modelAnswer:
        "Saya merapikan CourseActionPanel dengan --color-surface, --color-text, --color-border-subtle, --color-action-primary, --color-action-destructive, --color-on-action, --space-2, --space-4, --space-6, --radius-md, serta token body dan title. Nilai tersebut dipakai kembali oleh CourseCard dan action button sehingga perubahan warna atau padding tidak lagi perlu mencari hex serta angka mentah. Button mendukung primary untuk Lanjutkan lesson, secondary untuk Kembali ke module, dan destructive untuk Hapus draft. Saya memastikan setiap variant memiliki focus-visible ring, disabled native attribute, dan contrast foreground/background yang masih terbaca. CourseCard hanya memiliki default serta featured; featured dipakai course yang sedang dilanjutkan learner sehingga hierarchy product tetap jelas. Saya tidak membuat token untuk offset icon 1px karena hanya dipakai sekali. Saya juga tidak menambah variant success karena belum ada action product yang memerlukannya; completion ditampilkan sebagai status content, bukan button intent."
    },
    {
      id: "design-tokens-variants-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk menjaga token tetap berupa aturan CSS yang dapat diperiksa",
      description:
        "Baca referensi resmi saat membuat atau mengubah token. CSS custom properties mengikuti cascade dan scope, sedangkan variant component tetap membutuhkan semantic HTML, contrast review, serta props contract yang jelas. Dokumentasi membantu memeriksa behavior teknologi, bukan menggantikan keputusan visual dan product yang perlu dibuktikan consumer.",
      links: [
        {
          source: "MDN",
          title: "Using CSS custom properties (variables)",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties",
          focus: [
            "Deklarasi custom property dengan prefix -- dan pemakaian var().",
            "Scope serta inheritance token pada :root dan component boundary.",
            "Fallback value ketika custom property belum memiliki nilai yang dapat dipakai.",
          ],
          ignoreForNow: [
            "@property registration, animasi token, dan custom property type system yang belum diperlukan project ini.",
          ],
        },
        {
          source: "MDN",
          title: "Understanding Colors and Luminance",
          url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Colors_and_Luminance",
          focus: [
            "Contrast foreground/background sebagai bagian dari readability token color.",
            "Mengapa hue saja tidak cukup untuk menyampaikan information state.",
            "Hubungan ukuran dan weight text dengan kemampuan membaca.",
          ],
          ignoreForNow: [
            "Color science dan guideline animation yang lebih luas dari Button/Card practice ini.",
          ],
        },
        {
          source: "React",
          title: "Passing Props to a Component",
          url: "https://react.dev/learn/passing-props-to-a-component",
          focus: [
            "Props sebagai contract untuk variant serta disabled state component.",
            "Default props yang hanya dipakai ketika membantu consumer memahami penggunaan utama.",
            "Memisahkan API Button/Card dari implementation CSS internal.",
          ],
          ignoreForNow: [
            "Membuat component menerima semua props HTML atau configuration object tanpa API domain yang jelas.",
          ],
        },
        {
          source: "TypeScript",
          title: "Everyday Types: Union Types",
          url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",
          focus: [
            "Union untuk membatasi variant dan size yang memang didukung component.",
            "Membaca compiler error ketika caller mengirim variant yang tidak tersedia.",
            "Menjaga state variant saling eksklusif daripada memakai beberapa boolean visual.",
          ],
          ignoreForNow: [
            "Conditional types, generic variant helpers, dan type-level design system yang kompleks.",
          ],
        },
      ],
      followUpAction:
        "Pilih satu Button dan satu Card di local project. Catat nilai visual yang berulang, buat token CSS kecil untuk nilai yang benar-benar dipakai bersama, lalu batasi variant yang memiliki intent product nyata. QA dengan keyboard untuk focus, cek disabled state, bandingkan contrast foreground/background, dan tulis refactor note tentang satu token atau variant yang sengaja belum dibuat.",
    },
    {
      id: "design-tokens-variants-assessment-summary",
      type: "summary",
      points: [
        "Token memberi nama pada color, spacing, radius, dan typography yang dipakai ulang sebagai aturan visual.",
        "Button dan Card variants menyatakan intent serta peran product, bukan variasi visual tanpa alasan.",
        "Union type, native control, focus-visible, disabled, dan contrast review menjaga variant tetap dapat dipakai dengan aman.",
        "Token dan variant kecil yang punya consumer nyata lebih berguna daripada design system besar yang belum dibutuhkan.",
        "Berikutnya, Module Product Components membangun form, table, modal, toast, tabs, dan select di atas primitive yang sudah lebih konsisten.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "design-tokens-variants-assessment-recap",
      "design-tokens-variants-assessment-quiz",
      "design-tokens-variants-assessment-coding-practice",
      "design-tokens-variants-assessment-writing-practice",
      "design-tokens-variants-assessment-documentation-bridge",
      "design-tokens-variants-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const designTokensVariantsAssessmentQuiz: Quiz = {
  id: "design-tokens-variants-assessment-quiz",
  lessonId: "design-tokens-variants-assessment",
  title: "Uji Kompetensi Design Tokens and Variants",
  passingScore: 70,
  questions: [
    {
      id: "token-purpose",
      type: "multiple-choice",
      question: "Tujuan utama design token pada project frontend adalah",
      options: [
        "Memberi nama pada aturan visual yang digunakan ulang agar perubahan dan review lebih konsisten.",
        "Menyembunyikan semua nilai CSS termasuk nilai yang hanya dipakai sekali.",
        "Mengganti semantic HTML dengan className baru.",
        "Membuat semua page memiliki warna serta layout yang sama persis.",
      ],
      correctAnswer:
        "Memberi nama pada aturan visual yang digunakan ulang agar perubahan dan review lebih konsisten.",
      explanation:
        "Token menangkap nilai yang sudah menjadi rule visual, seperti surface, action color, spacing, radius, atau typography. Ia tidak mengharuskan setiap nilai khusus menjadi contract global.",
    },
    {
      id: "custom-property-syntax",
      type: "multiple-choice",
      question: "Cara yang tepat memakai CSS custom property --space-4 adalah",
      options: ["padding: var(--space-4);", "padding: --space-4;", "padding: token(--space-4);", "padding: $space-4;"],
      correctAnswer: "padding: var(--space-4);",
      explanation:
        "Custom property dideklarasikan dengan prefix -- dan direferensikan sebagai value melalui fungsi var().",
    },
    {
      id: "semantic-color-token",
      type: "multiple-choice",
      question:
        "Nama token mana yang paling membantu developer memahami foreground pada action primary?",
      options: ["--color-on-action", "--white-1", "--color-7", "--text-hex"],
      correctAnswer: "--color-on-action",
      explanation:
        "Nama semantic menjelaskan peran color terhadap background action. Nilai aktual dapat berubah setelah contrast review tanpa caller perlu mencari raw color token yang tepat.",
    },
    {
      id: "spacing-scale",
      type: "multiple-choice",
      question: "Kapan spacing token seperti --space-4 paling bermanfaat?",
      options: [
        "Saat ukuran jarak tersebut dipakai berulang untuk gap, padding, atau margin pada pattern UI yang terkait.",
        "Saat satu icon butuh offset unik yang tidak dipakai di mana pun.",
        "Saat ingin menghapus semua spacing dari CSS.",
        "Saat setiap component harus memiliki scale spacing yang berbeda sendiri.",
      ],
      correctAnswer:
        "Saat ukuran jarak tersebut dipakai berulang untuk gap, padding, atau margin pada pattern UI yang terkait.",
      explanation:
        "Spacing token membantu menjaga rhythm layout. Nilai unik yang tidak memiliki consumer bersama dapat tetap local sampai pola nyata muncul.",
    },
    {
      id: "button-variant-union",
      type: "multiple-choice",
      question:
        "Mengapa Button lebih baik memakai variant: \"primary\" | \"secondary\" | \"destructive\" daripada beberapa boolean visual?",
      options: [
        "Variant membatasi intent yang saling eksklusif dan mencegah kombinasi seperti primary sekaligus destructive.",
        "Variant menghapus kebutuhan focus state dan disabled attribute.",
        "Boolean tidak pernah boleh dipakai untuk state component apa pun.",
        "Variant otomatis membuat semua button menjadi link navigation.",
      ],
      correctAnswer:
        "Variant membatasi intent yang saling eksklusif dan mencegah kombinasi seperti primary sekaligus destructive.",
      explanation:
        "Union type memperjelas pilihan yang didukung component. Boolean tetap tepat untuk state independen seperti disabled, tetapi bukan untuk pilihan intent yang saling meniadakan.",
    },
    {
      id: "button-accessibility",
      type: "multiple-choice",
      question: "Hal yang tetap perlu diperiksa pada semua Button variant aktif adalah",
      options: [
        "Visible focus state dan contrast foreground/background yang dapat dibaca.",
        "Apakah semua button memakai warna primary.",
        "Apakah button disabled masih dapat diklik mouse.",
        "Apakah variant memiliki className terpanjang.",
      ],
      correctAnswer:
        "Visible focus state dan contrast foreground/background yang dapat dibaca.",
      explanation:
        "Variant yang bagus tetap harus operable serta dapat dipahami. Focus-visible dan contrast perlu dicek pada kondisi UI nyata, bukan hanya dari nama tokennya.",
    },
    {
      id: "card-variant-purpose",
      type: "multiple-choice",
      question: "Kapan Card variant featured layak dibuat?",
      options: [
        "Saat ada content dengan prioritas product yang nyata, seperti course yang sedang dilanjutkan learner.",
        "Saat ingin membuat semua card lebih mencolok.",
        "Saat card memiliki border radius lebih dari satu nilai.",
        "Saat ingin mengganti semua component dengan satu div generic.",
      ],
      correctAnswer:
        "Saat ada content dengan prioritas product yang nyata, seperti course yang sedang dilanjutkan learner.",
      explanation:
        "Variant harus membantu hierarchy information. Jika dipakai untuk semua content, featured kehilangan makna dan UI menjadi lebih sulit dipindai.",
    },
  ],
};

export const nameCourseCardDesignTokensChallenge: CodingChallenge = {
  id: "name-course-card-design-tokens",
  lessonId: "design-tokens",
  title: "Name course card design tokens",
  description:
    "Ganti nilai surface, border, padding, dan radius yang berulang dengan token CSS bernama berdasarkan peran card.",
  instructions: [
    "Fokus di tab CSS.",
    "Tambahkan :root dengan --color-surface, --color-border-subtle, --space-card, dan --radius-card.",
    "Gunakan token tersebut pada .course-card dan .lesson-summary.",
    "Pertahankan background, border, padding, dan radius pada kedua surface.",
    "Jangan mempertahankan hex, padding, atau radius mentah pada selector kedua card.",
    "Cek otomatis membaca CSS tokens. Preview menampilkan dua surface course yang memakai rule sama.",
  ],
  starterCode: {
    html: `<main class="course-layout">
  <article class="course-card">
    <h1>JavaScript Dasar</h1>
    <p>Mulai dari values dan functions.</p>
  </article>
  <section class="lesson-summary">
    <h2>Ringkasan lesson</h2>
    <p>Simpan satu pola visual untuk surface belajar.</p>
  </section>
</main>`,
    css: `.course-layout {
  display: grid;
  gap: 16px;
  max-width: 42rem;
  margin: 32px auto;
}

.course-card {
  background: #ffffff;
  border: 1px solid #d8dee9;
  border-radius: 12px;
  padding: 24px;
}

.lesson-summary {
  background: #ffffff;
  border: 1px solid #d8dee9;
  border-radius: 12px;
  padding: 24px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="course-layout">
  <article class="course-card">
    <h1>JavaScript Dasar</h1>
    <p>Mulai dari values dan functions.</p>
  </article>
  <section class="lesson-summary">
    <h2>Ringkasan lesson</h2>
    <p>Simpan satu pola visual untuk surface belajar.</p>
  </section>
</main>`,
    css: `:root {
  --color-surface: #ffffff;
  --color-border-subtle: #d8dee9;
  --space-card: 24px;
  --radius-card: 12px;
}

.course-layout {
  display: grid;
  gap: 16px;
  max-width: 42rem;
  margin: 32px auto;
}

.course-card,
.lesson-summary {
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-card);
  padding: var(--space-card);
}`,
    js: "",
  },
  checklist: [
    "Nilai surface, border, padding, dan radius yang berulang memiliki token bernama.",
    "Token memakai nama berdasarkan peran visual, bukan angka atau hex mentah saja.",
    "CourseCard dan LessonSummary memakai rule token yang sama.",
    "Token baru dibuat dari pengulangan nyata pada dua surface belajar.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "surface-token", label: "Root memiliki token surface.", type: "contains", valueIncludes: "--color-surface: #ffffff;" },
      { id: "border-token", label: "Root memiliki token border subtle.", type: "contains", valueIncludes: "--color-border-subtle: #d8dee9;" },
      { id: "space-radius-token", label: "Root memiliki token spacing dan radius card.", type: "contains", valueIncludes: "--space-card: 24px;\n  --radius-card: 12px;" },
      { id: "shared-rule", label: "Dua surface memakai rule bersama.", type: "contains", valueIncludes: ".course-card,\n.lesson-summary {" },
      { id: "token-usage", label: "Rule memakai semua token card.", type: "contains", valueIncludes: "background: var(--color-surface);\n  border: 1px solid var(--color-border-subtle);\n  border-radius: var(--radius-card);\n  padding: var(--space-card);" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview token surface",
    description:
      "Preview memperlihatkan CourseCard dan LessonSummary dengan surface yang sama. Cek otomatis membaca CSS token serta pemakaiannya pada dua component.",
    lines: [
      "Dua surface memakai background, border, padding, dan radius yang konsisten.",
      "Perubahan value token akan memengaruhi kedua consumer bersama-sama.",
      "Nama token menjelaskan peran visual yang dipakai pattern card.",
    ],
  },
  skillTags: ["CSS", "Design Tokens", "Visual Consistency"],
};

export const createCourseColorSpacingTokensChallenge: CodingChallenge = {
  id: "create-course-color-spacing-tokens",
  lessonId: "color-spacing-tokens",
  title: "Create course color and spacing tokens",
  description:
    "Buat color dan spacing tokens untuk course panel, lalu gunakan var() pada surface, text, paragraph, dan action link.",
  instructions: [
    "Fokus di tab CSS.",
    "Tambahkan color tokens untuk surface, text, text muted, border, action primary, dan on action.",
    "Tambahkan --space-2, --space-4, dan --space-6.",
    "Gunakan token pada .course-panel, paragraph, dan action link.",
    "Pastikan action link memakai action background serta foreground token yang sesuai.",
    "Cek otomatis membaca color dan spacing token. Preview menunjukkan panel course dengan action link.",
  ],
  starterCode: {
    html: `<section class="course-panel">
  <h1>React Fundamentals</h1>
  <p>Pelajari component, props, dan state melalui practice kecil.</p>
  <a href="#start">Mulai lesson</a>
</section>`,
    css: `.course-panel {
  background: #ffffff;
  border: 1px solid #d8dee9;
  color: #172033;
  padding: 24px;
}

.course-panel p {
  color: #536176;
  margin-top: 8px;
}

.course-panel a {
  background: #0f6fda;
  color: #ffffff;
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="course-panel">
  <h1>React Fundamentals</h1>
  <p>Pelajari component, props, dan state melalui practice kecil.</p>
  <a href="#start">Mulai lesson</a>
</section>`,
    css: `:root {
  --color-surface: #ffffff;
  --color-text: #172033;
  --color-text-muted: #536176;
  --color-border-subtle: #d8dee9;
  --color-action-primary: #0f6fda;
  --color-on-action: #ffffff;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
}

.course-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text);
  padding: var(--space-6);
}

.course-panel p {
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}

.course-panel a {
  background: var(--color-action-primary);
  color: var(--color-on-action);
  display: inline-block;
  margin-top: var(--space-4);
  padding: var(--space-2) var(--space-4);
}`,
    js: "",
  },
  checklist: [
    "Color token membedakan surface, main text, muted text, border, action, dan foreground action.",
    "Spacing scale kecil dipakai ulang untuk margin serta padding.",
    "Course panel serta link tidak lagi memakai color dan spacing literal berulang.",
    "Action foreground/background dapat direview sebagai satu pasangan contrast.",
    "Token tetap cukup kecil untuk kebutuhan panel saat ini.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "colors", label: "Root memiliki enam color tokens utama.", type: "contains", valueIncludes: "--color-surface: #ffffff;\n  --color-text: #172033;\n  --color-text-muted: #536176;\n  --color-border-subtle: #d8dee9;\n  --color-action-primary: #0f6fda;\n  --color-on-action: #ffffff;" },
      { id: "spaces", label: "Root memiliki spacing tokens kecil.", type: "contains", valueIncludes: "--space-2: 8px;\n  --space-4: 16px;\n  --space-6: 24px;" },
      { id: "panel", label: "Panel memakai color dan spacing tokens.", type: "contains", valueIncludes: "background: var(--color-surface);\n  border: 1px solid var(--color-border-subtle);\n  color: var(--color-text);\n  padding: var(--space-6);" },
      { id: "muted-copy", label: "Paragraph memakai muted text dan small spacing.", type: "contains", valueIncludes: "color: var(--color-text-muted);\n  margin-top: var(--space-2);" },
      { id: "action", label: "Action link memakai action color serta spacing tokens.", type: "contains", valueIncludes: "background: var(--color-action-primary);\n  color: var(--color-on-action);\n  display: inline-block;\n  margin-top: var(--space-4);\n  padding: var(--space-2) var(--space-4);" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview color and spacing tokens",
    description:
      "Preview menunjukkan course panel dengan hierarchy text dan action link. Cek otomatis membaca token CSS serta pemakaiannya pada setiap area panel.",
    lines: [
      "Surface, text, muted text, border, serta action memakai peran color yang berbeda.",
      "Spacing panel, paragraph, dan action berasal dari scale kecil yang konsisten.",
      "Action foreground dan background dapat diperiksa sebagai pasangan contrast.",
    ],
  },
  skillTags: ["CSS", "CSS Custom Properties", "Color Tokens", "Spacing Tokens"],
};

export const addCourseRadiusTypographyTokensChallenge: CodingChallenge = {
  id: "add-course-radius-typography-tokens",
  lessonId: "radius-typography-tokens",
  title: "Add course radius and typography tokens",
  description:
    "Tambahkan radius serta typography tokens agar CourseCard memiliki surface dan hierarchy title/body yang konsisten.",
  instructions: [
    "Fokus di tab CSS.",
    "Tambahkan --radius-sm, --radius-md, dan font tokens untuk sans, body, serta title.",
    "Gunakan radius md dan font sans pada .course-card.",
    "Gunakan title font-size, weight, serta line-height pada h2.",
    "Gunakan body font-size dan line-height pada paragraph.",
    "Cek otomatis membaca radius dan typography tokens. Preview menunjukkan hierarchy text pada CourseCard.",
  ],
  starterCode: {
    html: `<article class="course-card">
  <p class="eyebrow">Frontend Engineering</p>
  <h2>Belajar desain system secara bertahap</h2>
  <p>Gunakan token kecil untuk menjaga text dan surface tetap konsisten.</p>
</article>`,
    css: `.course-card {
  border: 1px solid #d8dee9;
  border-radius: 12px;
  padding: 24px;
}

.course-card h2 {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
}

.course-card p {
  font-size: 16px;
  line-height: 1.6;
}`,
    js: "",
  },
  solutionCode: {
    html: `<article class="course-card">
  <p class="eyebrow">Frontend Engineering</p>
  <h2>Belajar desain system secara bertahap</h2>
  <p>Gunakan token kecil untuk menjaga text dan surface tetap konsisten.</p>
</article>`,
    css: `:root {
  --radius-sm: 6px;
  --radius-md: 12px;
  --font-sans: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  --font-size-body: 16px;
  --line-height-body: 1.6;
  --font-size-title: 20px;
  --line-height-title: 1.3;
  --font-weight-title: 700;
}

.course-card {
  border: 1px solid #d8dee9;
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  padding: 24px;
}

.course-card h2 {
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-title);
  line-height: var(--line-height-title);
}

.course-card p {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}`,
    js: "",
  },
  checklist: [
    "Radius small dan medium tersedia sebagai token yang dapat dipakai pattern lain.",
    "CourseCard memakai radius serta font family token.",
    "Heading memiliki size, weight, dan line-height token yang bekerja bersama.",
    "Body copy memakai size dan line-height token yang konsisten.",
    "Hierarchy text tetap perlu dicek dalam layout serta viewport nyata.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "radius", label: "Root memiliki radius small serta medium.", type: "contains", valueIncludes: "--radius-sm: 6px;\n  --radius-md: 12px;" },
      { id: "font-tokens", label: "Root memiliki font dan typography tokens.", type: "contains", valueIncludes: "--font-sans: \"Montserrat\", ui-sans-serif, system-ui, sans-serif;\n  --font-size-body: 16px;\n  --line-height-body: 1.6;\n  --font-size-title: 20px;\n  --line-height-title: 1.3;\n  --font-weight-title: 700;" },
      { id: "card", label: "CourseCard memakai radius dan font tokens.", type: "contains", valueIncludes: "border-radius: var(--radius-md);\n  font-family: var(--font-sans);" },
      { id: "title", label: "Heading memakai tiga typography tokens.", type: "contains", valueIncludes: "font-size: var(--font-size-title);\n  font-weight: var(--font-weight-title);\n  line-height: var(--line-height-title);" },
      { id: "body", label: "Body memakai size serta line-height tokens.", type: "contains", valueIncludes: "font-size: var(--font-size-body);\n  line-height: var(--line-height-body);" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview radius and typography",
    description:
      "Preview menunjukkan surface CourseCard serta hierarchy eyebrow, title, dan body. Cek otomatis membaca token radius dan typography yang dipakai selector terkait.",
    lines: [
      "Surface card memakai radius yang konsisten.",
      "Title dan body memiliki hierarchy size, weight, serta line-height yang berbeda.",
      "Typography decision dapat digunakan ulang tanpa menyalin nilai mentah ke setiap card.",
    ],
  },
  skillTags: ["CSS", "Design Tokens", "Border Radius", "Typography"],
};

export const buildCourseButtonVariantsChallenge: CodingChallenge = {
  id: "build-course-button-variants",
  lessonId: "button-variants",
  title: "Build course button variants",
  description:
    "Buat CourseButton dengan primary, secondary, dan destructive intent; size kecil/medium; serta disabled state native.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor ReactNode sebagai type.",
    "Buat ButtonVariant untuk primary, secondary, dan destructive; lalu ButtonSize untuk sm serta md.",
    "Buat CourseButtonProps dengan children, variant, size opsional, disabled opsional, dan onClick opsional.",
    "Gunakan default size md dan disabled false.",
    "Render button native dengan className berdasarkan variant serta size dan teruskan disabled/onClick.",
    "Jangan memakai isPrimary, isSecondary, atau isDanger booleans.",
    "Cek otomatis membaca contract TSX. Preview tidak menjalankan React component pada practice struktur ini.",
  ],
  starterCode: {
    ...designSystemPracticeCode,
    tsx: `import type { ReactNode } from "react";

type CourseButtonProps = {
  children: ReactNode;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDanger?: boolean;
  small?: boolean;
  disabled?: boolean;
};

export function CourseButton({ children }: CourseButtonProps) {
  return <div>{children}</div>;
}`,
  },
  solutionCode: {
    ...designSystemPracticeCode,
    tsx: `import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "destructive";
type ButtonSize = "sm" | "md";

type CourseButtonProps = {
  children: ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
};

export function CourseButton({
  children,
  variant,
  size = "md",
  disabled = false,
  onClick,
}: CourseButtonProps) {
  return (
    <button
      type="button"
      className={"button button--" + variant + " button--" + size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
  },
  checklist: [
    "Variant membatasi intent button pada primary, secondary, dan destructive.",
    "Size kecil serta medium memiliki contract yang jelas tanpa menambah ukuran acak.",
    "Button memakai element native dan disabled attribute yang sesuai.",
    "Class button dibentuk dari variant dan size sehingga CSS dapat memakai token visual yang konsisten.",
    "Focus-visible dan contrast variant tetap perlu diimplementasikan serta diuji pada CSS lokal.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-node", label: "ReactNode diimpor sebagai type.", type: "contains", valueIncludes: 'import type { ReactNode } from "react";' },
      { id: "variant", label: "ButtonVariant membatasi tiga intent.", type: "contains", valueIncludes: 'type ButtonVariant = "primary" | "secondary" | "destructive";' },
      { id: "size", label: "ButtonSize membatasi dua ukuran.", type: "contains", valueIncludes: 'type ButtonSize = "sm" | "md";' },
      { id: "props", label: "Props memiliki variant, size, disabled, serta onClick.", type: "contains", valueIncludes: "type CourseButtonProps = {\n  children: ReactNode;\n  variant: ButtonVariant;\n  size?: ButtonSize;\n  disabled?: boolean;\n  onClick?: () => void;\n};" },
      { id: "defaults", label: "Component memakai default size dan disabled.", type: "contains", valueIncludes: 'size = "md",\n  disabled = false,' },
      { id: "native-button", label: "Component merender button native dengan classes variant.", type: "contains", valueIncludes: 'type="button"\n      className={"button button--" + variant + " button--" + size}\n      disabled={disabled}\n      onClick={onClick}' },
      { id: "no-primary-boolean", label: "Tidak memakai isPrimary boolean.", type: "doesNotContain", valueIncludes: "isPrimary" },
      { id: "no-danger-boolean", label: "Tidak memakai isDanger boolean.", type: "doesNotContain", valueIncludes: "isDanger" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Button variant API",
    description:
      "Cek otomatis membaca CourseButton contract. Preview tidak menjalankan React runtime; implementasikan class CSS token, focus-visible, disabled, dan contrast state pada local component sebelum memakainya di product.",
    lines: [
      "Caller memilih satu intent primary, secondary, atau destructive.",
      "Button tetap memakai semantic native element dan disabled state.",
      "Class variant serta size memberi CSS hook yang dapat menggunakan token konsisten.",
    ],
  },
  skillTags: ["React", "Button", "Variants", "TypeScript", "Accessibility"],
};

export const buildCourseCardVariantsChallenge: CodingChallenge = {
  id: "build-course-card-variants",
  lessonId: "card-variants",
  title: "Build course card variants",
  description:
    "Buat CourseCard default, featured, dan muted dengan semantic article, content hierarchy, serta optional content area yang tetap sesuai purpose card.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor ReactNode sebagai type.",
    "Buat CourseCardVariant untuk default, featured, dan muted.",
    "Buat CourseCardProps dengan title, description, variant opsional, dan children opsional.",
    "Gunakan default variant default.",
    "Render article dengan className variant, h2 title, description, dan content area hanya bila children tersedia.",
    "Jangan memakai mode, layout, isFeatured, atau isMuted booleans.",
    "Cek otomatis membaca structure Card. Preview tidak menjalankan React component pada practice struktur ini.",
  ],
  starterCode: {
    ...designSystemPracticeCode,
    tsx: `import type { ReactNode } from "react";

type CourseCardProps = {
  titleText: string;
  bodyText: string;
  mode?: string;
  layout?: string;
  isFeatured?: boolean;
  isMuted?: boolean;
  body?: ReactNode;
};

export function CourseCard({ titleText, bodyText }: CourseCardProps) {
  return (
    <div>
      <strong>{titleText}</strong>
      <p>{bodyText}</p>
    </div>
  );
}`,
  },
  solutionCode: {
    ...designSystemPracticeCode,
    tsx: `import type { ReactNode } from "react";

type CourseCardVariant = "default" | "featured" | "muted";

type CourseCardProps = {
  title: string;
  description: string;
  variant?: CourseCardVariant;
  children?: ReactNode;
};

export function CourseCard({
  title,
  description,
  variant = "default",
  children,
}: CourseCardProps) {
  return (
    <article className={"course-card course-card--" + variant}>
      <h2>{title}</h2>
      <p>{description}</p>
      {children ? <div className="course-card__content">{children}</div> : null}
    </article>
  );
}`,
  },
  checklist: [
    "Card variant dibatasi pada default, featured, dan muted dengan satu union type.",
    "Article, heading, description, dan optional content area memberi hierarchy yang jelas.",
    "Featured hanya dipakai ketika content memiliki prioritas product yang nyata.",
    "Children tetap sesuai untuk detail content card, bukan layout bebas yang tidak berkaitan.",
    "Card tidak berubah menjadi wrapper generic untuk dialog, table, atau form yang memiliki interaction berbeda.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-node", label: "ReactNode diimpor sebagai type.", type: "contains", valueIncludes: 'import type { ReactNode } from "react";' },
      { id: "variant", label: "CourseCardVariant membatasi tiga surface role.", type: "contains", valueIncludes: 'type CourseCardVariant = "default" | "featured" | "muted";' },
      { id: "props", label: "Card props memiliki title, description, variant, serta children.", type: "contains", valueIncludes: "type CourseCardProps = {\n  title: string;\n  description: string;\n  variant?: CourseCardVariant;\n  children?: ReactNode;\n};" },
      { id: "default", label: "Card memakai default variant.", type: "contains", valueIncludes: 'variant = "default",' },
      { id: "structure", label: "Card merender article dengan title, description, serta optional content.", type: "contains", valueIncludes: '<article className={"course-card course-card--" + variant}>\n      <h2>{title}</h2>\n      <p>{description}</p>\n      {children ? <div className="course-card__content">{children}</div> : null}' },
      { id: "no-featured-boolean", label: "Tidak memakai isFeatured boolean.", type: "doesNotContain", valueIncludes: "isFeatured" },
      { id: "no-muted-boolean", label: "Tidak memakai isMuted boolean.", type: "doesNotContain", valueIncludes: "isMuted" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Card variant API",
    description:
      "Cek otomatis membaca CourseCard structure. Preview tidak menjalankan React runtime; gunakan consumer lokal untuk memeriksa apakah featured dan muted benar-benar memiliki alasan hierarchy product sebelum menambah variant baru.",
    lines: [
      "Card memiliki default, featured, dan muted role yang saling eksklusif.",
      "Article serta heading menjaga hierarchy content di dalam surface card.",
      "Children hanya menambah detail yang masih sesuai dengan purpose CourseCard.",
    ],
  },
  skillTags: ["React", "Card", "Variants", "Component API", "Design Tokens"],
};

export const buildTokenDrivenCourseUiCheckpointChallenge: CodingChallenge = {
  id: "build-token-driven-course-ui-checkpoint",
  lessonId: "design-tokens-variants-assessment",
  title: "Build token-driven course UI checkpoint",
  description:
    "Bangun CSS kecil untuk course action panel dengan tokens, Button variants, Card featured state, focus-visible ring, dan disabled state yang jelas.",
  instructions: [
    "Fokus di tab CSS.",
    "Tambahkan token untuk surface, text, border, action primary, destructive, on action, spacing, radius, serta title/body typography.",
    "Gunakan token pada .course-panel dan .course-card.",
    "Buat .button--primary, .button--secondary, dan .button--destructive dengan token yang sesuai.",
    "Tambahkan .button:focus-visible dengan outline token dan .button:disabled dengan state yang jelas.",
    "Buat .course-card--featured agar memiliki emphasis product yang terlihat.",
    "Jangan mempertahankan nilai color utama mentah di selector Button/Card setelah token didefinisikan.",
    "Cek otomatis membaca token dan state CSS. Preview menampilkan course panel dengan Button serta Card variants.",
  ],
  starterCode: {
    html: `<main class="course-panel">
  <header>
    <p class="eyebrow">Frontend Engineering</p>
    <h1>JavaScript Arrays</h1>
    <p>Gunakan action yang memiliki intent jelas dan surface yang konsisten.</p>
  </header>
  <div class="actions">
    <button class="button button--primary" type="button">Lanjutkan lesson</button>
    <button class="button button--secondary" type="button">Kembali ke module</button>
    <button class="button button--destructive" type="button" disabled>Hapus draft</button>
  </div>
  <article class="course-card course-card--featured">
    <h2>Course sedang dilanjutkan</h2>
    <p>Lesson berikutnya: Array methods untuk data UI.</p>
  </article>
</main>`,
    css: `.course-panel {
  background: #ffffff;
  border: 1px solid #d8dee9;
  color: #172033;
  padding: 24px;
}

.button {
  border-radius: 8px;
  padding: 8px 16px;
}

.button--primary {
  background: #0f6fda;
  color: #ffffff;
}

.button--secondary {
  background: #ffffff;
  color: #172033;
}

.button--destructive {
  background: #b42318;
  color: #ffffff;
}

.course-card {
  border: 1px solid #d8dee9;
  border-radius: 12px;
  margin-top: 24px;
  padding: 24px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="course-panel">
  <header>
    <p class="eyebrow">Frontend Engineering</p>
    <h1>JavaScript Arrays</h1>
    <p>Gunakan action yang memiliki intent jelas dan surface yang konsisten.</p>
  </header>
  <div class="actions">
    <button class="button button--primary" type="button">Lanjutkan lesson</button>
    <button class="button button--secondary" type="button">Kembali ke module</button>
    <button class="button button--destructive" type="button" disabled>Hapus draft</button>
  </div>
  <article class="course-card course-card--featured">
    <h2>Course sedang dilanjutkan</h2>
    <p>Lesson berikutnya: Array methods untuk data UI.</p>
  </article>
</main>`,
    css: `:root {
  --color-surface: #ffffff;
  --color-text: #172033;
  --color-border-subtle: #d8dee9;
  --color-action-primary: #0f6fda;
  --color-action-destructive: #b42318;
  --color-on-action: #ffffff;
  --color-focus: #7c3aed;
  --color-featured-surface: #eef6ff;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --radius-md: 12px;
  --font-size-body: 16px;
  --line-height-body: 1.6;
  --font-size-title: 20px;
  --line-height-title: 1.3;
  --font-weight-title: 700;
}

.course-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text);
  padding: var(--space-6);
}

.course-panel h1,
.course-card h2 {
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-title);
  line-height: var(--line-height-title);
}

.course-panel p,
.course-card p {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.button {
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
}

.button--primary {
  background: var(--color-action-primary);
  color: var(--color-on-action);
}

.button--secondary {
  background: var(--color-surface);
  border-color: var(--color-border-subtle);
  color: var(--color-text);
}

.button--destructive {
  background: var(--color-action-destructive);
  color: var(--color-on-action);
}

.button:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.course-card {
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  margin-top: var(--space-6);
  padding: var(--space-6);
}

.course-card--featured {
  background: var(--color-featured-surface);
}`,
    js: "",
  },
  checklist: [
    "Course panel, Button, dan Card memakai token color, spacing, radius, serta typography yang jelas.",
    "Primary, secondary, dan destructive Button memiliki intent visual yang berbeda tetapi tetap menggunakan token bersama.",
    "Focus-visible ring dan disabled state tersedia untuk button native.",
    "Featured card memiliki emphasis yang menjelaskan hierarchy product.",
    "Token atau variant baru hanya dibuat untuk rule yang memiliki consumer nyata pada UI ini.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "color-tokens", label: "Root memiliki token color untuk surface, text, border, action, focus, dan featured.", type: "contains", valueIncludes: "--color-surface: #ffffff;\n  --color-text: #172033;\n  --color-border-subtle: #d8dee9;\n  --color-action-primary: #0f6fda;\n  --color-action-destructive: #b42318;\n  --color-on-action: #ffffff;\n  --color-focus: #7c3aed;\n  --color-featured-surface: #eef6ff;" },
      { id: "system-tokens", label: "Root memiliki spacing, radius, serta typography tokens.", type: "contains", valueIncludes: "--space-2: 8px;\n  --space-4: 16px;\n  --space-6: 24px;\n  --radius-md: 12px;\n  --font-size-body: 16px;\n  --line-height-body: 1.6;\n  --font-size-title: 20px;\n  --line-height-title: 1.3;\n  --font-weight-title: 700;" },
      { id: "panel", label: "Course panel memakai token surface dan spacing.", type: "contains", valueIncludes: "background: var(--color-surface);\n  border: 1px solid var(--color-border-subtle);\n  color: var(--color-text);\n  padding: var(--space-6);" },
      { id: "primary", label: "Primary button memakai action primary token.", type: "contains", valueIncludes: "background: var(--color-action-primary);\n  color: var(--color-on-action);" },
      { id: "secondary", label: "Secondary button memakai surface, border, dan text tokens.", type: "contains", valueIncludes: "background: var(--color-surface);\n  border-color: var(--color-border-subtle);\n  color: var(--color-text);" },
      { id: "destructive", label: "Destructive button memakai destructive action token.", type: "contains", valueIncludes: "background: var(--color-action-destructive);\n  color: var(--color-on-action);" },
      { id: "focus", label: "Button mempunyai focus-visible ring.", type: "contains", valueIncludes: ".button:focus-visible {\n  outline: 3px solid var(--color-focus);\n  outline-offset: 2px;" },
      { id: "disabled", label: "Button disabled memiliki state jelas.", type: "contains", valueIncludes: ".button:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;" },
      { id: "featured", label: "Featured card memiliki surface token khusus.", type: "contains", valueIncludes: ".course-card--featured {\n  background: var(--color-featured-surface);" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview token-driven course UI",
    description:
      "Preview menunjukkan course panel, tiga Button intent, disabled state, dan featured Card. Cek otomatis membaca token serta CSS state; gunakan keyboard untuk memeriksa focus ring di preview.",
    lines: [
      "Button primary, secondary, dan destructive memakai token yang menjelaskan intent masing-masing.",
      "Button aktif memiliki focus-visible ring dan button disabled memiliki state yang jelas.",
      "Featured Card memiliki emphasis untuk course yang sedang dilanjutkan tanpa mengubah semua card.",
    ],
  },
  skillTags: ["CSS", "Design Tokens", "Button Variants", "Card Variants", "Accessibility", "Assessment"],
};
