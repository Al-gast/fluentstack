import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const advancedComponentPatternsModule: Module = {
  id: "react-advanced-component-patterns",
  trackId: "frontend-engineering",
  title: "Advanced Component Patterns",
  slug: "react-advanced-component-patterns",
  description:
    "Membangun composition, children, slot-like props, compound components, dan form field yang reusable tanpa membuat API component menjadi berlebihan.",
  order: 30,
  lessonIds: [
    "react-compound-components",
    "react-slots-and-children-patterns",
    "react-reusable-form-field-pattern",
    "react-avoiding-over-abstraction",
    "react-advanced-component-patterns-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["React", "Composition", "Children", "Compound Components", "Accessibility"],
};

export const reactCompoundComponentsLesson: Lesson = {
  id: "react-compound-components",
  trackId: "frontend-engineering",
  moduleId: "react-advanced-component-patterns",
  title: "Compound Components",
  slug: "react-compound-components",
  description:
    "Menyusun component terkait yang berbagi state melalui parent pattern agar API UI tetap mudah dibaca di tempat pemakaian.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan kapan beberapa component layak membentuk satu compound pattern",
    "Membaca hubungan parent, trigger, dan panel yang berbagi state",
    "Membangun tabs kecil dengan API yang tetap terlihat jelas di JSX",
  ],
  skillTags: ["React", "Composition", "Context", "Compound Components"],
  blocks: [
    {
      id: "react-compound-components-intro",
      type: "text",
      title: "Saat beberapa bagian selalu bekerja sebagai satu unit",
      content:
        "Compound components adalah beberapa component kecil yang membentuk satu pola UI dan berbagi koordinasi dari parent. Tabs adalah contoh yang mudah: Tabs menyimpan item aktif, TabsList menampung trigger, TabsTrigger meminta perubahan pilihan, dan TabsPanel menampilkan content yang sesuai.\n\nPola ini berguna ketika beberapa bagian memang selalu memiliki hubungan yang sama, tetapi isi dan susunannya perlu fleksibel di tempat pemakaian. Ia bukan alasan untuk memecah satu component sederhana menjadi banyak file. Mulailah dari pola yang sudah berulang dan memiliki state atau aturan bersama yang nyata.",
    },
    {
      id: "react-compound-components-example",
      type: "code-example",
      title: "Tabs kecil dengan state yang dibagikan melalui context",
      language: "tsx",
      code: `import { createContext, useContext, useState, type ReactNode } from "react";

type TabsContextValue = {
  activeValue: string;
  setActiveValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const value = useContext(TabsContext);

  if (!value) {
    throw new Error("Tabs child harus dipakai di dalam Tabs.");
  }

  return value;
}

function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue }}>
      <section>{children}</section>
    </TabsContext.Provider>
  );
}

function TabsList({ children }: { children: ReactNode }) {
  return <div role="tablist">{children}</div>;
}

function TabsTrigger({ value, children }: { value: string; children: ReactNode }) {
  const { activeValue, setActiveValue } = useTabs();
  const isActive = activeValue === value;

  return (
    <button
      id={value}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={value + "-panel"}
      onClick={() => setActiveValue(value)}
    >
      {children}
    </button>
  );
}

function TabsPanel({ value, children }: { value: string; children: ReactNode }) {
  const { activeValue } = useTabs();

  if (activeValue !== value) {
    return null;
  }

  return <section id={value + "-panel"} role="tabpanel" aria-labelledby={value}>{children}</section>;
}

export function CourseTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="practice">Practice</TabsTrigger>
      </TabsList>
      <TabsPanel value="overview">Mulai dari tujuan module.</TabsPanel>
      <TabsPanel value="practice">Buka practice setelah memahami konsep.</TabsPanel>
    </Tabs>
  );
}`,
      explanation:
        "Tabs adalah pemilik state aktif. Child tidak menerima activeValue dari CourseTabs satu per satu; mereka membaca dan mengubah value melalui context yang hanya berlaku di dalam pattern Tabs. Di tempat pemakaian, susunan JSX tetap menunjukkan struktur UI sebenarnya. Pattern ini layak bila trigger dan panel berulang sebagai satu kelompok, bukan untuk dua button yang kebetulan berdampingan sekali.",
    },
    {
      id: "react-compound-components-callout",
      type: "callout",
      variant: "important",
      title: "Context dibatasi pada pola yang membutuhkannya",
      content:
        "Context di contoh ini bukan global state aplikasi. Ia hanya menjadi jalur koordinasi untuk child Tabs. Batasi context pada API component yang jelas agar consumer dapat memahami component mana yang harus dipakai bersama dan error penggunaan dapat ditemukan lebih awal.",
    },
    {
      id: "react-compound-components-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-tabs-compound-pattern",
    },
    {
      id: "react-compound-components-summary",
      type: "summary",
      points: [
        "Compound components membantu saat beberapa bagian UI memiliki state dan aturan bersama.",
        "Parent pattern menyimpan koordinasi; child menjaga API JSX tetap mudah dibaca.",
        "Context lokal bukan pengganti state management global.",
        "Berikutnya, kamu akan menggunakan children dan slot-like props untuk fleksibilitas layout tanpa context.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-compound-components-intro",
      "react-compound-components-example",
      "react-compound-components-callout",
      "react-compound-components-coding-practice",
      "react-compound-components-summary",
    ],
  },
};

export const reactSlotsAndChildrenPatternsLesson: Lesson = {
  id: "react-slots-and-children-patterns",
  trackId: "frontend-engineering",
  moduleId: "react-advanced-component-patterns",
  title: "Slots and Children Patterns",
  slug: "react-slots-and-children-patterns",
  description:
    "Membuat layout component yang fleksibel dengan children dan area props bernama tanpa mengaburkan struktur UI.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan children dengan slot-like props seperti actions dan footer",
    "Memilih API Panel yang tetap menunjukkan struktur content",
    "Merefactor markup berulang menjadi layout component yang jelas",
  ],
  skillTags: ["React", "Composition", "Children", "Component API"],
  blocks: [
    {
      id: "react-slots-and-children-patterns-intro",
      type: "text",
      title: "Fleksibel tanpa prop boolean berlapis",
      content:
        "children cocok untuk area utama yang memang diisi caller. Slot-like props seperti actions dan footer cocok untuk area layout bernama yang muncul pada tempat tertentu. Dengan API ini, Panel dapat menyimpan struktur header, body, dan footer tanpa memaksa consumer mengirim banyak boolean seperti showSaveButton atau showHelpLink.\n\nPilih slot ketika area tersebut punya arti yang stabil bagi pola UI. Jangan membuat prop untuk setiap elemen kecil yang mungkin berubah. Jika consumer perlu kebebasan penuh atas seluruh layout, composition dengan children biasa sering lebih jujur dan lebih sederhana.",
    },
    {
      id: "react-slots-and-children-patterns-example",
      type: "code-example",
      title: "Panel dengan area content, actions, dan footer",
      language: "tsx",
      code: `import type { ReactNode } from "react";

type PanelProps = {
  titleId: string;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

function Panel({ titleId, title, actions, children, footer }: PanelProps) {
  return (
    <section aria-labelledby={titleId}>
      <header>
        <h2 id={titleId}>{title}</h2>
        {actions ? <div>{actions}</div> : null}
      </header>
      <div>{children}</div>
      {footer ? <footer>{footer}</footer> : null}
    </section>
  );
}

export function ProfileSettings() {
  return (
    <Panel
      titleId="profile-settings-title"
      title="Profile settings"
      actions={<button type="button">Simpan draft</button>}
      footer={<p>Perubahan belum dikirim ke server.</p>}
    >
      <p>Atur nama tampilan dan bio kamu di area ini.</p>
    </Panel>
  );
}`,
      explanation:
        "Panel menentukan markup yang konsisten untuk heading dan area utama. Consumer menentukan isi body melalui children, lalu hanya mengisi actions atau footer bila area tersebut memang relevan. titleId membuat hubungan heading dan section tetap jelas meskipun beberapa Panel dipakai dalam satu halaman.",
    },
    {
      id: "react-slots-and-children-patterns-quick-check",
      type: "quick-check",
      question:
        "Kapan prop bernama seperti footer lebih tepat daripada memasukkannya ke children tanpa struktur?",
      options: [
        "Saat footer adalah area layout yang punya posisi dan makna stabil pada setiap Panel",
        "Setiap kali ingin menambah satu paragraf baru",
        "Saat ingin menghindari semua penggunaan children",
        "Agar semua component memiliki sebanyak mungkin props",
      ],
      correctAnswer:
        "Saat footer adalah area layout yang punya posisi dan makna stabil pada setiap Panel",
      explanation:
        "Slot bernama membantu ketika sebuah area berulang dengan posisi dan peran yang konsisten. Untuk content yang bebas atau hanya sekali dipakai, children biasa dapat lebih mudah dipahami.",
    },
    {
      id: "react-slots-and-children-patterns-coding-practice",
      type: "coding-practice",
      challengeId: "compose-profile-panel-with-slots",
    },
    {
      id: "react-slots-and-children-patterns-summary",
      type: "summary",
      points: [
        "children memberi area utama yang fleksibel bagi consumer component.",
        "Slot-like props cocok untuk area layout bernama seperti actions dan footer.",
        "API yang baik menampilkan struktur UI tanpa menumpuk boolean prop.",
        "Berikutnya, kamu akan menerapkan pola yang sama pada form field dengan label, hint, dan error yang konsisten.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-slots-and-children-patterns-intro",
      "react-slots-and-children-patterns-example",
      "react-slots-and-children-patterns-quick-check",
      "react-slots-and-children-patterns-coding-practice",
      "react-slots-and-children-patterns-summary",
    ],
  },
};

export const reactReusableFormFieldPatternLesson: Lesson = {
  id: "react-reusable-form-field-pattern",
  trackId: "frontend-engineering",
  moduleId: "react-advanced-component-patterns",
  title: "Reusable Form Field Pattern",
  slug: "react-reusable-form-field-pattern",
  description:
    "Menyusun label, input, hint, dan error menjadi pola form field yang konsisten sekaligus mudah diakses.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Menjelaskan bagian accessibility yang perlu konsisten pada form field",
    "Membuat FormField sebagai wrapper layout yang jelas",
    "Menghubungkan input dengan label, hint, dan error yang relevan",
  ],
  skillTags: ["React", "Forms", "Accessibility", "Composition", "Component API"],
  blocks: [
    {
      id: "react-reusable-form-field-pattern-intro",
      type: "text",
      title: "Pengulangan form biasanya membawa aturan yang sama",
      content:
        "Form field sering mengulang struktur yang sama: label, control, hint, dan pesan error. Pengulangan ini bukan hanya soal spacing. Label harus menunjuk input yang tepat, hint dan error perlu memiliki id yang bisa dirujuk, dan error perlu muncul dengan cara yang dapat dipahami user.\n\nFormField di module ini adalah layout wrapper kecil. Ia tidak mencoba menangani semua jenis input, validasi server, mask, atau library form. Input tetap dimasukkan lewat children sehingga component ini dapat dipakai untuk text input, textarea, atau select tanpa API generik yang sulit dibaca.",
    },
    {
      id: "react-reusable-form-field-pattern-example",
      type: "code-example",
      title: "FormField menjaga hubungan label, hint, dan error",
      language: "tsx",
      code: `import { useState, type ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
};

function FormField({ id, label, hint, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? <p id={id + "-hint"}>{hint}</p> : null}
      {error ? <p id={id + "-error"} role="alert">{error}</p> : null}
    </div>
  );
}

export function ProfileForm() {
  const [displayName, setDisplayName] = useState("Rina");
  const error = displayName.trim().length < 3 ? "Nama tampilan minimal 3 karakter." : "";
  const describedBy = error
    ? "display-name-hint display-name-error"
    : "display-name-hint";

  return (
    <form>
      <FormField
        id="display-name"
        label="Nama tampilan"
        hint="Nama ini terlihat pada profile kamu."
        error={error}
      >
        <input
          id="display-name"
          value={displayName}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          onChange={(event) => setDisplayName(event.target.value)}
        />
      </FormField>
    </form>
  );
}`,
      explanation:
        "FormField membuat label dan pesan pendukung pada tempat yang konsisten. Input tetap dimiliki ProfileForm karena nilai, validasi, dan aria-describedby bergantung pada state form saat itu. Jangan membuat FormField mengambil alih seluruh state semua input hanya karena markup label berulang.",
    },
    {
      id: "react-reusable-form-field-pattern-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Wrapper visual saja belum cukup",
      content:
        "Jangan menyebut component sebagai FormField jika ia hanya menambah border lalu melupakan htmlFor, id, hint, atau error relationship. Reusability yang baik menjaga aturan yang mudah terlupa, bukan hanya memindahkan div ke file lain.",
    },
    {
      id: "react-reusable-form-field-pattern-coding-practice",
      type: "coding-practice",
      challengeId: "build-accessible-profile-form-field",
    },
    {
      id: "react-reusable-form-field-pattern-summary",
      type: "summary",
      points: [
        "FormField dapat menyatukan markup label, hint, dan error yang berulang.",
        "Input tetap menerima id, aria-describedby, dan aria-invalid sesuai state form saat ini.",
        "Abstraction yang baik melindungi aturan accessibility yang mudah terlewat.",
        "Berikutnya, kamu akan memilih kapan pola seperti ini membantu dan kapan component sederhana lebih baik dibiarkan lokal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-reusable-form-field-pattern-intro",
      "react-reusable-form-field-pattern-example",
      "react-reusable-form-field-pattern-common-mistake",
      "react-reusable-form-field-pattern-coding-practice",
      "react-reusable-form-field-pattern-summary",
    ],
  },
};

export const reactAvoidingOverAbstractionLesson: Lesson = {
  id: "react-avoiding-over-abstraction",
  trackId: "frontend-engineering",
  moduleId: "react-advanced-component-patterns",
  title: "Avoiding Over-Abstraction",
  slug: "react-avoiding-over-abstraction",
  description:
    "Memutuskan kapan repetition adalah pola yang layak diekstrak dan kapan code lokal yang sederhana lebih mudah dirawat.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan repetition dangkal dari pola yang memiliki aturan bersama",
    "Menilai biaya API component baru terhadap manfaatnya",
    "Menulis alasan teknis untuk mengekstrak atau mempertahankan code lokal",
  ],
  skillTags: ["React", "Refactoring", "Component API", "Maintainability"],
  blocks: [
    {
      id: "react-avoiding-over-abstraction-intro",
      type: "text",
      title: "Jangan abstraksikan bentuk sebelum memahami alasan",
      content:
        "Dua potong JSX yang mirip belum selalu berarti harus menjadi component baru. Pertanyaan pentingnya: apakah mereka punya struktur yang stabil, behavior atau accessibility rule yang sama, dan kemungkinan perubahan yang akan bergerak bersama? Jika ya, extraction dapat mengurangi bug serta membuat API lebih jelas.\n\nSebaliknya, component seperti BaseBox, GenericSection, atau UniversalField sering memindahkan complexity ke prop yang panjang, conditional bercabang, dan caller yang sulit dibaca. Code lokal yang pendek dapat lebih murah dipahami daripada abstraction yang hanya dipakai sekali. Biarkan pola terbukti melalui penggunaan sebelum membuat API besar.",
    },
    {
      id: "react-avoiding-over-abstraction-example",
      type: "code-example",
      title: "Bandingkan bentuk yang kebetulan mirip dan aturan yang benar-benar sama",
      language: "tsx",
      code: `// Biarkan lokal: dua label status sederhana dengan content berbeda.
function ProfileStatus() {
  return <p>Status profile: aktif</p>;
}

function BillingStatus() {
  return <p>Pembayaran berikutnya: 12 Juni</p>;
}

// Ekstrak bila rule label, hint, error, dan input dipakai berulang.
function FormField({ id, label, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? <p id={id + "-hint"}>{hint}</p> : null}
      {error ? <p id={id + "-error"} role="alert">{error}</p> : null}
    </div>
  );
}`,
      explanation:
        "Dua status di atas hanya memiliki bentuk paragraf yang sama; tujuan dan perubahan masa depannya tidak terbukti sama. FormField membawa aturan berulang yang lebih bermakna: hubungan label-input, hint, error, dan layout. Extraction pada kasus kedua dapat mengurangi kesalahan saat form bertambah.",
    },
    {
      id: "react-avoiding-over-abstraction-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Pakai empat pertanyaan sebelum extract",
      content:
        "Tanyakan: apakah pattern sudah dipakai lebih dari sekali atau segera akan dipakai ulang? Apakah bagian yang sama memiliki aturan atau behavior bersama? Apakah nama component baru menjelaskan tanggung jawabnya? Apakah caller setelah refactor lebih mudah dibaca? Bila sebagian besar jawabannya tidak, pertahankan code lokal dulu.",
    },
    {
      id: "react-avoiding-over-abstraction-quick-check",
      type: "quick-check",
      question:
        "Manakah alasan paling kuat untuk mengekstrak component baru?",
      options: [
        "Beberapa form memakai aturan label, hint, error, dan input yang sama sehingga perubahan harus tetap konsisten",
        "Dua div memiliki className yang sama sekali",
        "Ingin mengurangi jumlah baris file walau API menjadi tidak jelas",
        "Agar semua markup berada di component bernama BaseComponent",
      ],
      correctAnswer:
        "Beberapa form memakai aturan label, hint, error, dan input yang sama sehingga perubahan harus tetap konsisten",
      explanation:
        "Extraction bernilai ketika ia menggabungkan aturan yang bergerak bersama dan memberi nama tanggung jawab yang jelas. Kesamaan visual kecil saja belum cukup.",
    },
    {
      id: "react-avoiding-over-abstraction-summary",
      type: "summary",
      points: [
        "Repetition yang memiliki aturan bersama lebih layak diekstrak daripada kesamaan bentuk kecil.",
        "API component harus membuat caller lebih mudah dibaca, bukan menyembunyikan conditional di banyak prop.",
        "Code lokal yang pendek sering menjadi pilihan yang tepat sampai pola benar-benar terbukti.",
        "Berikutnya, Uji Kompetensi akan meminta kamu membangun satu pattern yang reusable dan menjelaskan batasnya.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-avoiding-over-abstraction-intro",
      "react-avoiding-over-abstraction-example",
      "react-avoiding-over-abstraction-decision-rule",
      "react-avoiding-over-abstraction-quick-check",
      "react-avoiding-over-abstraction-summary",
    ],
  },
};

export const reactAdvancedComponentPatternsAssessmentLesson: Lesson = {
  id: "react-advanced-component-patterns-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-advanced-component-patterns",
  title: "Uji Kompetensi Advanced Component Patterns",
  slug: "react-advanced-component-patterns-assessment",
  description:
    "Checkpoint kesiapan untuk membangun composition yang reusable, menjaga form field accessible, dan menjelaskan alasan abstraction.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Mengecek pemahaman compound components, children, dan slot-like props",
    "Membangun panel dan form field yang dapat dipakai ulang",
    "Menjelaskan alasan abstraction serta batas API component",
  ],
  skillTags: ["React", "Composition", "Forms", "Accessibility", "Assessment"],
  blocks: [
    {
      id: "react-advanced-component-patterns-assessment-recap",
      type: "text",
      title: "Checkpoint: pattern yang membantu, bukan sekadar terlihat reusable",
      content:
        "Uji Kompetensi ini berfokus pada keputusan component API. Kamu akan menyusun Panel dengan area bernama dan FormField yang menjaga hubungan accessibility dasar. Quiz serta catatan implementasi akan mengecek apakah kamu dapat membedakan compound components, composition biasa, dan abstraction yang belum memiliki alasan.\n\nKamu belum perlu membuat design system lengkap, headless component, polymorphic API, advanced generic TypeScript, atau package publish. Fokusnya adalah satu pattern kecil yang mudah dipakai, mudah dijelaskan, dan tidak menyembunyikan behavior penting.",
    },
    {
      id: "react-advanced-component-patterns-assessment-quiz",
      type: "quiz",
      quizId: "react-advanced-component-patterns-assessment-quiz",
    },
    {
      id: "react-advanced-component-patterns-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-composable-profile-panel",
    },
    {
      id: "react-advanced-component-patterns-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note untuk rekan satu tim tentang pattern ProfilePanel yang kamu buat. Gunakan format berikut:\n- Masalah repetition yang ingin diselesaikan:\n- Component yang diekstrak dan tanggung jawabnya:\n- Props atau children yang dipilih, beserta alasan:\n- Aturan accessibility yang dijaga:\n- Bagian yang sengaja tidak dibuat generic:\n- Kapan pattern ini perlu dievaluasi ulang:\n\nJelaskan trade-off secara spesifik, bukan hanya mengatakan component ini reusable.",
      placeholder:
        "Masalah repetition yang ingin diselesaikan: beberapa halaman profile memakai heading, action, body, dan catatan footer dengan struktur yang sama.\nComponent yang diekstrak dan tanggung jawabnya: Panel menjaga struktur section, heading, actions, content, dan footer. FormField menjaga label, hint, serta error.\nProps atau children yang dipilih: children dipakai untuk content form yang bebas; actions dan footer adalah slot bernama karena posisinya tetap.\nAturan accessibility yang dijaga: section memakai aria-labelledby, label memakai htmlFor, input merujuk hint dan error dengan aria-describedby.\nBagian yang sengaja tidak dibuat generic: FormField tidak mengelola semua state form atau semua jenis control.\nKapan dievaluasi ulang: saat beberapa form membutuhkan behavior yang sama dan API saat ini mulai berulang.",
      minimumCharacters: 500,
      checklist: [
        "Menyebut masalah repetition yang nyata.",
        "Menjelaskan batas tanggung jawab setiap component.",
        "Membedakan children dari slot bernama dengan alasan layout.",
        "Menyebut hubungan accessibility yang dipertahankan.",
        "Menyebut satu hal yang sengaja tidak diabstraksikan.",
      ],
      modelAnswer:
        "ProfilePanel diekstrak karena beberapa feature profile memakai struktur section yang sama: heading, action kecil, content utama, dan catatan footer. Panel bertanggung jawab atas struktur tersebut serta hubungan aria-labelledby dengan heading. children dipakai untuk content form yang berbeda-beda, sedangkan actions dan footer menjadi slot bernama karena posisinya konsisten. FormField bertanggung jawab atas label, hint, dan error; input tetap menerima state serta aria-describedby dari form karena aturan itu bergantung pada validasi saat ini. Saya tidak membuat UniversalFormControl karena textarea, select, dan input dapat membutuhkan behavior yang berbeda. Pattern ini perlu dievaluasi ulang bila props mulai dipenuhi conditional atau caller tidak lagi mudah dibaca.",
    },
    {
      id: "react-advanced-component-patterns-assessment-docs",
      type: "documentation-bridge",
      title: "Baca composition dan form semantics dari docs resmi",
      description:
        "Gunakan docs ini untuk menilai API component sebelum menambah abstraction ke Local React App. Fokus pada composition yang jelas dan hubungan form control yang dapat diakses.",
      links: [
        {
          source: "React",
          title: "Passing JSX as Children",
          url: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children",
          focus: [
            "children sebagai nested content",
            "membuat wrapper component tetap fleksibel",
            "kapan composition lebih jelas daripada banyak prop",
          ],
          ignoreForNow: ["polymorphic component API"],
        },
        {
          source: "React",
          title: "Sharing State Between Components",
          url: "https://react.dev/learn/sharing-state-between-components",
          focus: [
            "parent sebagai pemilik state bersama",
            "coordinating related child components",
            "batas state local dan state yang diangkat",
          ],
          ignoreForNow: ["global state library"],
        },
        {
          source: "React",
          title: "Thinking in React",
          url: "https://react.dev/learn/thinking-in-react",
          focus: [
            "memecah UI menjadi component dengan tanggung jawab jelas",
            "mencari state minimal",
            "menghindari component boundary yang dibuat terlalu cepat",
          ],
          ignoreForNow: ["full product architecture"],
        },
        {
          source: "MDN",
          title: "label element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
          focus: [
            "hubungan label dan control",
            "id dan htmlFor",
            "menghindari label yang tidak memberi nama input",
          ],
          ignoreForNow: ["custom widget ARIA yang kompleks"],
        },
      ],
      followUpAction:
        "Di Local React App, pilih satu area yang memiliki heading, action, body, atau form field berulang. Buat satu Panel atau FormField kecil, tulis API-nya di README, lalu catat alasan mengapa component itu berguna dan bagian yang sengaja kamu biarkan lokal.",
    },
    {
      id: "react-advanced-component-patterns-assessment-summary",
      type: "summary",
      points: [
        "Compound components berguna untuk child yang berbagi koordinasi dari parent pattern.",
        "children dan slot bernama membantu layout reusable tanpa boolean prop berlapis.",
        "FormField yang baik menjaga hubungan label, hint, error, dan control.",
        "Abstraction perlu mengurangi aturan berulang serta membuat caller lebih jelas.",
        "Level berikutnya, Next.js App Router, akan membawa pola React ini ke route dan structure aplikasi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-advanced-component-patterns-assessment-recap",
      "react-advanced-component-patterns-assessment-quiz",
      "react-advanced-component-patterns-assessment-coding-practice",
      "react-advanced-component-patterns-assessment-writing-practice",
      "react-advanced-component-patterns-assessment-docs",
      "react-advanced-component-patterns-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactAdvancedComponentPatternsAssessmentQuiz: Quiz = {
  id: "react-advanced-component-patterns-assessment-quiz",
  lessonId: "react-advanced-component-patterns-assessment",
  title: "Uji Kompetensi Advanced Component Patterns",
  passingScore: 70,
  questions: [
    {
      id: "react-advanced-component-patterns-q1",
      type: "multiple-choice",
      question: "Kapan compound components paling sesuai digunakan?",
      options: [
        "Saat beberapa child component membentuk satu pola UI dan perlu berbagi koordinasi dari parent",
        "Saat ingin mengganti semua div dengan context",
        "Untuk membuat satu button sederhana",
        "Saat semua state harus dipindahkan ke global store",
      ],
      correctAnswer:
        "Saat beberapa child component membentuk satu pola UI dan perlu berbagi koordinasi dari parent",
      explanation:
        "Compound pattern berguna untuk kelompok component terkait seperti tabs. Parent menyimpan koordinasi, sementara child mempertahankan API JSX yang jelas.",
    },
    {
      id: "react-advanced-component-patterns-q2",
      type: "multiple-choice",
      question: "Apa peran children pada Panel yang composable?",
      options: [
        "Menjadi area content utama yang diisi consumer tanpa Panel mengetahui detail isinya",
        "Menggantikan semua props component",
        "Menyimpan state form secara global",
        "Menghilangkan kebutuhan heading pada section",
      ],
      correctAnswer:
        "Menjadi area content utama yang diisi consumer tanpa Panel mengetahui detail isinya",
      explanation:
        "children membuat wrapper component tetap fleksibel. Slot bernama dapat dipakai untuk area yang punya posisi tetap seperti actions atau footer.",
    },
    {
      id: "react-advanced-component-patterns-q3",
      type: "multiple-choice",
      question: "Hubungan accessibility dasar yang perlu dijaga FormField adalah...",
      options: [
        "label memakai htmlFor ke id input, lalu input merujuk hint dan error yang relevan",
        "Semua input diberi placeholder panjang tanpa label",
        "Error hanya diberi warna merah",
        "Setiap input memakai id yang sama agar singkat",
      ],
      correctAnswer:
        "label memakai htmlFor ke id input, lalu input merujuk hint dan error yang relevan",
      explanation:
        "Label memberi nama control. Hint dan error yang relevan dapat dirujuk melalui aria-describedby, sementara aria-invalid memberi status error pada control.",
    },
    {
      id: "react-advanced-component-patterns-q4",
      type: "multiple-choice",
      question: "Kapan abstraction perlu ditunda?",
      options: [
        "Saat code masih lokal, pendek, dan belum terbukti memiliki aturan bersama yang akan berubah bersama",
        "Saat component memakai lebih dari satu div",
        "Saat JSX memiliki label",
        "Saat ingin menamai semua file dengan Base",
      ],
      correctAnswer:
        "Saat code masih lokal, pendek, dan belum terbukti memiliki aturan bersama yang akan berubah bersama",
      explanation:
        "Abstraction membawa biaya API dan maintenance. Tunggu sampai pola dan tanggung jawabnya cukup jelas untuk membuat caller lebih mudah dipahami.",
    },
    {
      id: "react-advanced-component-patterns-q5",
      type: "true-false",
      question: "Component reusable yang baik harus dapat menangani semua variasi UI melalui banyak boolean props.",
      correctAnswer: false,
      explanation:
        "Banyak boolean prop sering menjadi tanda API terlalu lebar. Gunakan children, slot bernama, atau component terpisah ketika itu membuat struktur lebih jelas; biarkan code lokal bila belum ada pattern nyata.",
    },
  ],
};

const componentPatternsPreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React Composition</h1>
  <p>Fokus di tab TSX. Jalankan preview untuk memeriksa struktur component dan interaksi kecilnya.</p>
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

export const buildCourseTabsCompoundPatternChallenge: CodingChallenge = {
  id: "build-course-tabs-compound-pattern",
  lessonId: "react-compound-components",
  title: "Build course tabs compound pattern",
  description:
    "Ubah tabs lokal menjadi compound components yang berbagi active value melalui context kecil di dalam pattern Tabs.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat TabsContext dan useTabs untuk koordinasi child Tabs.",
    "Buat Tabs, TabsList, TabsTrigger, dan TabsPanel sebagai component terkait.",
    "TabsTrigger harus mengubah active value dan memberi aria-selected.",
    "TabsPanel hanya menampilkan content untuk value aktif.",
    "Jalankan preview lalu pindah antara Overview dan Practice.",
  ],
  starterCode: {
    ...componentPatternsPreviewCode,
    tsx: `import { useState } from "react";

function CourseTabs() {
  const [activeValue, setActiveValue] = useState("overview");

  return (
    <section>
      <div>
        <button type="button" onClick={() => setActiveValue("overview")}>
          Overview
        </button>
        <button type="button" onClick={() => setActiveValue("practice")}>
          Practice
        </button>
      </div>
      {activeValue === "overview" ? (
        <p>Mulai dari tujuan module.</p>
      ) : (
        <p>Buka practice setelah memahami konsep.</p>
      )}
    </section>
  );
}`,
  },
  solutionCode: {
    ...componentPatternsPreviewCode,
    tsx: `import { createContext, useContext, useState, type ReactNode } from "react";

type TabsContextValue = {
  activeValue: string;
  setActiveValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const value = useContext(TabsContext);

  if (!value) {
    throw new Error("Tabs child harus dipakai di dalam Tabs.");
  }

  return value;
}

function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue }}>
      <section>{children}</section>
    </TabsContext.Provider>
  );
}

function TabsList({ children }: { children: ReactNode }) {
  return <div role="tablist">{children}</div>;
}

function TabsTrigger({ value, children }: { value: string; children: ReactNode }) {
  const { activeValue, setActiveValue } = useTabs();
  const isActive = activeValue === value;

  return (
    <button
      id={value}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={value + "-panel"}
      onClick={() => setActiveValue(value)}
    >
      {children}
    </button>
  );
}

function TabsPanel({ value, children }: { value: string; children: ReactNode }) {
  const { activeValue } = useTabs();

  if (activeValue !== value) {
    return null;
  }

  return <section id={value + "-panel"} role="tabpanel" aria-labelledby={value}>{children}</section>;
}

function CourseTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="practice">Practice</TabsTrigger>
      </TabsList>
      <TabsPanel value="overview">Mulai dari tujuan module.</TabsPanel>
      <TabsPanel value="practice">Buka practice setelah memahami konsep.</TabsPanel>
    </Tabs>
  );
}`,
  },
  checklist: [
    "TabsContext menyediakan activeValue dan setActiveValue untuk child pattern.",
    "Tabs menjadi pemilik state active value.",
    "TabsList, TabsTrigger, dan TabsPanel memakai context melalui useTabs.",
    "TabsTrigger memberi aria-selected dan mengubah value aktif.",
    "TabsPanel hanya menampilkan content sesuai pilihan aktif.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "CourseTabs",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-import", label: "Context, hooks, dan ReactNode diimport dari React.", type: "contains", target: 'import { createContext, useContext, useState, type ReactNode } from "react";', valueIncludes: 'import { createContext, useContext, useState, type ReactNode } from "react";' },
      { id: "tabs-context", label: "TabsContext dibuat.", type: "contains", target: "const TabsContext = createContext<TabsContextValue | null>(null);", valueIncludes: "const TabsContext = createContext<TabsContextValue | null>(null);" },
      { id: "use-tabs", label: "useTabs membaca TabsContext.", type: "contains", target: "function useTabs()", valueIncludes: "function useTabs()" },
      { id: "tabs-owner", label: "Tabs menyimpan active value.", type: "contains", target: "function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode })", valueIncludes: "function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode })" },
      { id: "tabs-list", label: "TabsList dibuat sebagai tablist.", type: "contains", target: 'role="tablist"', valueIncludes: 'role="tablist"' },
      { id: "tabs-trigger", label: "TabsTrigger memberi aria-selected.", type: "contains", target: "aria-selected={isActive}", valueIncludes: "aria-selected={isActive}" },
      { id: "tabs-panel", label: "TabsPanel hanya tampil saat active.", type: "contains", target: "if (activeValue !== value)", valueIncludes: "if (activeValue !== value)" },
      { id: "tabs-composition", label: "CourseTabs memakai compound Tabs.", type: "contains", target: "<Tabs defaultValue=\"overview\">", valueIncludes: "<Tabs defaultValue=\"overview\">" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Preview menunjukkan satu panel aktif. Saat trigger Overview atau Practice diklik, content panel berganti tanpa CourseTabs perlu mengoper setiap prop state ke child satu per satu.",
    lines: [
      "Tabs menyimpan pilihan aktif di parent pattern.",
      "TabsTrigger mengubah selection dan menandai tab aktif.",
      "TabsPanel menampilkan content sesuai value aktif.",
    ],
  },
  skillTags: ["React", "Composition", "Context", "Compound Components"],
};

export const composeProfilePanelWithSlotsChallenge: CodingChallenge = {
  id: "compose-profile-panel-with-slots",
  lessonId: "react-slots-and-children-patterns",
  title: "Compose profile panel with slots",
  description:
    "Refactor markup profile berulang menjadi Panel yang menerima children untuk content utama serta actions dan footer sebagai slot bernama.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat Panel dengan titleId, title, children, actions opsional, dan footer opsional.",
    "Gunakan section dengan aria-labelledby ke heading Panel.",
    "Letakkan actions di header dan footer di elemen footer hanya saat tersedia.",
    "Gunakan Panel untuk ProfileSettings dan NotificationSettings.",
    "Jalankan preview untuk memeriksa kedua layout Panel.",
  ],
  starterCode: {
    ...componentPatternsPreviewCode,
    tsx: `function ProfileSettings() {
  return (
    <section>
      <header>
        <h2>Profile settings</h2>
        <button type="button">Simpan draft</button>
      </header>
      <p>Atur nama tampilan dan bio kamu di area ini.</p>
      <footer>Perubahan belum dikirim ke server.</footer>
    </section>
  );
}

function NotificationSettings() {
  return (
    <section>
      <header>
        <h2>Notification settings</h2>
      </header>
      <p>Atur email pengingat yang ingin kamu terima.</p>
    </section>
  );
}

function SettingsPage() {
  return (
    <main>
      <ProfileSettings />
      <NotificationSettings />
    </main>
  );
}`,
  },
  solutionCode: {
    ...componentPatternsPreviewCode,
    tsx: `import type { ReactNode } from "react";

type PanelProps = {
  titleId: string;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

function Panel({ titleId, title, actions, children, footer }: PanelProps) {
  return (
    <section aria-labelledby={titleId}>
      <header>
        <h2 id={titleId}>{title}</h2>
        {actions ? <div>{actions}</div> : null}
      </header>
      <div>{children}</div>
      {footer ? <footer>{footer}</footer> : null}
    </section>
  );
}

function ProfileSettings() {
  return (
    <Panel
      titleId="profile-settings-title"
      title="Profile settings"
      actions={<button type="button">Simpan draft</button>}
      footer={<p>Perubahan belum dikirim ke server.</p>}
    >
      <p>Atur nama tampilan dan bio kamu di area ini.</p>
    </Panel>
  );
}

function NotificationSettings() {
  return (
    <Panel titleId="notification-settings-title" title="Notification settings">
      <p>Atur email pengingat yang ingin kamu terima.</p>
    </Panel>
  );
}

function SettingsPage() {
  return (
    <main>
      <ProfileSettings />
      <NotificationSettings />
    </main>
  );
}`,
  },
  checklist: [
    "Panel menerima children, actions opsional, dan footer opsional.",
    "Panel menghubungkan section dengan heading melalui aria-labelledby.",
    "actions muncul di header ketika disediakan.",
    "footer hanya dirender ketika disediakan.",
    "Dua settings section memakai Panel dengan content yang berbeda.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "SettingsPage",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-node", label: "ReactNode diimport untuk Panel props.", type: "contains", target: 'import type { ReactNode } from "react";', valueIncludes: 'import type { ReactNode } from "react";' },
      { id: "panel-props", label: "PanelProps memiliki titleId, title, children, actions, dan footer.", type: "contains", target: "type PanelProps = {", valueIncludes: "type PanelProps = {" },
      { id: "actions-slot", label: "actions didefinisikan sebagai slot opsional.", type: "contains", target: "actions?: ReactNode;", valueIncludes: "actions?: ReactNode;" },
      { id: "footer-slot", label: "footer didefinisikan sebagai slot opsional.", type: "contains", target: "footer?: ReactNode;", valueIncludes: "footer?: ReactNode;" },
      { id: "labelled-section", label: "Panel memakai aria-labelledby.", type: "contains", target: "<section aria-labelledby={titleId}>", valueIncludes: "<section aria-labelledby={titleId}>" },
      { id: "header-actions", label: "actions dirender di header saat tersedia.", type: "contains", target: "{actions ? <div>{actions}</div> : null}", valueIncludes: "{actions ? <div>{actions}</div> : null}" },
      { id: "footer", label: "footer dirender saat tersedia.", type: "contains", target: "{footer ? <footer>{footer}</footer> : null}", valueIncludes: "{footer ? <footer>{footer}</footer> : null}" },
      { id: "profile-panel", label: "ProfileSettings memakai Panel.", type: "contains", target: "<Panel", valueIncludes: "<Panel" },
      { id: "notification-panel", label: "NotificationSettings memakai Panel.", type: "contains", target: "notification-settings-title", valueIncludes: "notification-settings-title" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Preview menampilkan dua settings Panel dengan struktur heading yang konsisten. Profile settings mengisi actions dan footer, sedangkan notification settings memakai content utama tanpa slot tambahan.",
    lines: [
      "Panel menyediakan struktur section dan heading yang konsisten.",
      "children menampung content utama dari setiap settings area.",
      "actions dan footer hanya muncul pada Panel yang membutuhkannya.",
    ],
  },
  skillTags: ["React", "Composition", "Children", "Component API"],
};

export const buildAccessibleProfileFormFieldChallenge: CodingChallenge = {
  id: "build-accessible-profile-form-field",
  lessonId: "react-reusable-form-field-pattern",
  title: "Build accessible profile form field",
  description:
    "Buat FormField kecil yang menjaga label, hint, error, dan input profile tetap terhubung saat user mengubah nama tampilan.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat FormField yang menerima id, label, hint, error, dan children.",
    "Gunakan label htmlFor, hint id, dan error id dengan role alert.",
    "Buat input display-name sebagai controlled input.",
    "Saat nama lebih pendek dari 3 karakter, tampilkan error dan set aria-invalid.",
    "Gunakan aria-describedby untuk menghubungkan input ke hint dan error yang relevan.",
    "Jalankan preview lalu hapus isi input untuk mencoba error state.",
  ],
  starterCode: {
    ...componentPatternsPreviewCode,
    tsx: `import { useState } from "react";

function ProfileForm() {
  const [displayName, setDisplayName] = useState("Rina");
  const error = displayName.trim().length < 3 ? "Nama tampilan minimal 3 karakter." : "";

  return (
    <form>
      <div>
        <label>Nama tampilan</label>
        <input
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
        <p>Nama ini terlihat pada profile kamu.</p>
        {error ? <p>{error}</p> : null}
      </div>
    </form>
  );
}`,
  },
  solutionCode: {
    ...componentPatternsPreviewCode,
    tsx: `import { useState, type ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
};

function FormField({ id, label, hint, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? <p id={id + "-hint"}>{hint}</p> : null}
      {error ? <p id={id + "-error"} role="alert">{error}</p> : null}
    </div>
  );
}

function ProfileForm() {
  const [displayName, setDisplayName] = useState("Rina");
  const error = displayName.trim().length < 3 ? "Nama tampilan minimal 3 karakter." : "";
  const describedBy = error
    ? "display-name-hint display-name-error"
    : "display-name-hint";

  return (
    <form>
      <FormField
        id="display-name"
        label="Nama tampilan"
        hint="Nama ini terlihat pada profile kamu."
        error={error}
      >
        <input
          id="display-name"
          value={displayName}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          onChange={(event) => setDisplayName(event.target.value)}
        />
      </FormField>
    </form>
  );
}`,
  },
  checklist: [
    "FormField menerima id, label, hint, error, dan children.",
    "label memakai htmlFor menuju id input.",
    "Hint dan error memiliki id yang dapat dirujuk input.",
    "Error memakai role alert saat tersedia.",
    "Input memakai aria-describedby dan aria-invalid berdasarkan error state.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ProfileForm",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-import", label: "useState dan ReactNode diimport dari React.", type: "contains", target: 'import { useState, type ReactNode } from "react";', valueIncludes: 'import { useState, type ReactNode } from "react";' },
      { id: "field-props", label: "FormFieldProps dibuat.", type: "contains", target: "type FormFieldProps = {", valueIncludes: "type FormFieldProps = {" },
      { id: "field-children", label: "FormField menerima children.", type: "contains", target: "children: ReactNode;", valueIncludes: "children: ReactNode;" },
      { id: "label", label: "Label terhubung dengan input lewat htmlFor.", type: "contains", target: "<label htmlFor={id}>{label}</label>", valueIncludes: "<label htmlFor={id}>{label}</label>" },
      { id: "hint", label: "Hint memiliki id.", type: "contains", target: '<p id={id + "-hint"}>{hint}</p>', valueIncludes: '<p id={id + "-hint"}>{hint}</p>' },
      { id: "error", label: "Error memiliki id dan role alert.", type: "contains", target: '<p id={id + "-error"} role="alert">{error}</p>', valueIncludes: '<p id={id + "-error"} role="alert">{error}</p>' },
      { id: "input-id", label: "Input memiliki id display-name.", type: "contains", target: 'id="display-name"', valueIncludes: 'id="display-name"' },
      { id: "described-by", label: "Input merujuk hint dan error yang relevan.", type: "contains", target: "aria-describedby={describedBy}", valueIncludes: "aria-describedby={describedBy}" },
      { id: "invalid", label: "Input memakai aria-invalid dari error state.", type: "contains", target: "aria-invalid={Boolean(error)}", valueIncludes: "aria-invalid={Boolean(error)}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Preview menampilkan input nama tampilan dengan label dan hint. Saat input dibuat lebih pendek dari 3 karakter, pesan error muncul dan input mendapat status invalid yang dapat dibaca teknologi bantu.",
    lines: [
      "Label memberi nama untuk input display-name.",
      "Hint selalu menjelaskan konteks input.",
      "Error muncul bersama aria-invalid dan aria-describedby yang sesuai.",
    ],
  },
  skillTags: ["React", "Forms", "Accessibility", "Composition"],
};

export const buildComposableProfilePanelChallenge: CodingChallenge = {
  id: "build-composable-profile-panel",
  lessonId: "react-advanced-component-patterns-assessment",
  title: "Build composable profile panel",
  description:
    "Bangun ProfilePanel dengan Panel composable dan FormField accessible, lalu pertahankan API yang kecil serta jelas di tempat pemakaian.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat Panel dengan titleId, title, actions, children, dan footer.",
    "Buat FormField dengan label, hint, error, dan children.",
    "Gunakan Panel untuk membungkus profile form, dengan reset draft sebagai action dan catatan sebagai footer.",
    "Gunakan input display-name yang terhubung ke label, hint, dan error.",
    "Jalankan preview, ubah nama menjadi pendek untuk melihat error, lalu klik Reset draft.",
    "Jaga scope: jangan membuat UniversalForm atau component generik untuk setiap variasi UI.",
  ],
  starterCode: {
    ...componentPatternsPreviewCode,
    tsx: `import { useState } from "react";

function ProfilePanel() {
  const [displayName, setDisplayName] = useState("Rina");
  const error = displayName.trim().length < 3 ? "Nama tampilan minimal 3 karakter." : "";

  return (
    <section>
      <header>
        <h1>Profile settings</h1>
        <button type="button" onClick={() => setDisplayName("Rina")}>
          Reset draft
        </button>
      </header>
      <form>
        <div>
          <label>Nama tampilan</label>
          <input
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
          />
          <p>Nama ini terlihat pada profile kamu.</p>
          {error ? <p>{error}</p> : null}
        </div>
      </form>
      <footer>Perubahan belum dikirim ke server.</footer>
    </section>
  );
}`,
  },
  solutionCode: {
    ...componentPatternsPreviewCode,
    tsx: `import { useState, type ReactNode } from "react";

type PanelProps = {
  titleId: string;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

function Panel({ titleId, title, actions, children, footer }: PanelProps) {
  return (
    <section aria-labelledby={titleId}>
      <header>
        <h1 id={titleId}>{title}</h1>
        {actions ? <div>{actions}</div> : null}
      </header>
      <div>{children}</div>
      {footer ? <footer>{footer}</footer> : null}
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
};

function FormField({ id, label, hint, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? <p id={id + "-hint"}>{hint}</p> : null}
      {error ? <p id={id + "-error"} role="alert">{error}</p> : null}
    </div>
  );
}

function ProfilePanel() {
  const [displayName, setDisplayName] = useState("Rina");
  const error = displayName.trim().length < 3 ? "Nama tampilan minimal 3 karakter." : "";
  const describedBy = error
    ? "display-name-hint display-name-error"
    : "display-name-hint";

  return (
    <Panel
      titleId="profile-settings-title"
      title="Profile settings"
      actions={
        <button type="button" onClick={() => setDisplayName("Rina")}>
          Reset draft
        </button>
      }
      footer={<p>Perubahan belum dikirim ke server.</p>}
    >
      <form>
        <FormField
          id="display-name"
          label="Nama tampilan"
          hint="Nama ini terlihat pada profile kamu."
          error={error}
        >
          <input
            id="display-name"
            value={displayName}
            aria-describedby={describedBy}
            aria-invalid={Boolean(error)}
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </FormField>
      </form>
    </Panel>
  );
}`,
  },
  checklist: [
    "Panel memiliki titleId, title, actions, children, dan footer.",
    "Panel memakai aria-labelledby untuk hubungan section dan heading.",
    "FormField menjaga label, hint, error, serta children input.",
    "Input display-name memakai aria-describedby dan aria-invalid.",
    "Reset draft memulihkan nama dan preview tetap usable.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ProfilePanel",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-import", label: "useState dan ReactNode diimport dari React.", type: "contains", target: 'import { useState, type ReactNode } from "react";', valueIncludes: 'import { useState, type ReactNode } from "react";' },
      { id: "panel", label: "Panel dibuat.", type: "contains", target: "function Panel({ titleId, title, actions, children, footer }: PanelProps)", valueIncludes: "function Panel({ titleId, title, actions, children, footer }: PanelProps)" },
      { id: "panel-heading", label: "Panel menghubungkan section dan heading.", type: "contains", target: "<section aria-labelledby={titleId}>", valueIncludes: "<section aria-labelledby={titleId}>" },
      { id: "panel-footer", label: "Panel menampilkan footer jika tersedia.", type: "contains", target: "{footer ? <footer>{footer}</footer> : null}", valueIncludes: "{footer ? <footer>{footer}</footer> : null}" },
      { id: "field", label: "FormField dibuat.", type: "contains", target: "function FormField({ id, label, hint, error, children }: FormFieldProps)", valueIncludes: "function FormField({ id, label, hint, error, children }: FormFieldProps)" },
      { id: "field-label", label: "FormField menghubungkan label.", type: "contains", target: "<label htmlFor={id}>{label}</label>", valueIncludes: "<label htmlFor={id}>{label}</label>" },
      { id: "field-error", label: "FormField memberi error role alert.", type: "contains", target: '<p id={id + "-error"} role="alert">{error}</p>', valueIncludes: '<p id={id + "-error"} role="alert">{error}</p>' },
      { id: "profile-uses-panel", label: "ProfilePanel memakai Panel.", type: "contains", target: "<Panel", valueIncludes: "<Panel" },
      { id: "profile-uses-field", label: "ProfilePanel memakai FormField.", type: "contains", target: "<FormField", valueIncludes: "<FormField" },
      { id: "described-by", label: "Input menghubungkan hint dan error.", type: "contains", target: "aria-describedby={describedBy}", valueIncludes: "aria-describedby={describedBy}" },
      { id: "invalid", label: "Input memakai aria-invalid.", type: "contains", target: "aria-invalid={Boolean(error)}", valueIncludes: "aria-invalid={Boolean(error)}" },
      { id: "reset", label: "Reset draft memulihkan nama awal.", type: "contains", target: 'onClick={() => setDisplayName("Rina")}', valueIncludes: 'onClick={() => setDisplayName("Rina")}' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Preview menampilkan ProfilePanel dengan heading, action reset, form field berlabel, hint, dan footer. Input pendek memunculkan error; Reset draft memulihkan nilai awal tanpa mengubah struktur component.",
    lines: [
      "Panel mengatur area heading, actions, content, dan footer.",
      "FormField menghubungkan label, hint, error, dan input profile.",
      "Reset draft mengembalikan display name menjadi Rina.",
    ],
  },
  skillTags: ["React", "Composition", "Forms", "Accessibility", "Assessment"],
};
