import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const reactStateStrategyModule: Module = {
  id: "react-state-strategy",
  trackId: "frontend-engineering",
  title: "State Strategy",
  slug: "react-state-strategy",
  description:
    "Memilih lokasi state yang tepat, menghitung value turunan saat render, memakai reducer untuk transisi terkait, dan memakai context hanya saat sharing memang diperlukan.",
  order: 26,
  lessonIds: [
    "react-state-colocation",
    "react-derived-state",
    "react-reducer-pattern",
    "react-context-when-needed",
    "react-state-strategy-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["React", "State", "useReducer", "Context", "State Design"],
};

export const reactStateColocationLesson: Lesson = {
  id: "react-state-colocation",
  trackId: "frontend-engineering",
  moduleId: "react-state-strategy",
  title: "State Colocation",
  slug: "react-state-colocation",
  description:
    "Menjaga state tetap dekat dengan component yang benar-benar memakai dan mengubahnya.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan state colocation sebagai penempatan state dekat dengan pemakainya",
    "Membedakan state lokal dari state yang perlu dibagikan",
    "Memindahkan state UI kecil ke component yang memilikinya",
  ],
  skillTags: ["React", "State", "Component Design"],
  blocks: [
    {
      id: "react-state-colocation-intro",
      type: "text",
      title: "State sebaiknya tinggal dekat dengan alasan ia ada",
      content:
        "State tidak harus selalu berada di component paling atas. Jika hanya satu component yang membaca dan mengubah sebuah value, simpan state di component itu. Ini disebut state colocation: data interaktif tinggal sedekat mungkin dengan UI yang memilikinya.\n\nContohnya, apakah deskripsi satu card sedang terbuka biasanya hanya penting bagi card tersebut. Parent tidak perlu mengelola `isOpen` hanya untuk meneruskannya kembali lewat props. Parent baru perlu memiliki state ketika beberapa child perlu membaca atau mengubah value yang sama.",
    },
    {
      id: "react-state-colocation-case-study",
      type: "code-example",
      title: "State buka-tutup milik card",
      language: "tsx",
      code: `import { useState } from "react";

type Lesson = {
  title: string;
  description: string;
};

function LessonCard({ lesson }: { lesson: Lesson }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <h2>{lesson.title}</h2>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Sembunyikan detail" : "Lihat detail"}
      </button>
      {isOpen ? <p>{lesson.description}</p> : null}
    </article>
  );
}`,
      explanation:
        "`isOpen` hanya memengaruhi satu `LessonCard`, jadi state tinggal di sana. Parent cukup mengirim data lesson dan tidak perlu mengetahui apakah detail card sedang terlihat.",
    },
    {
      id: "react-state-colocation-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Naikkan state hanya saat ada pemakai bersama",
      content:
        "Mulai dari component yang paling dekat. Naikkan state ke parent terdekat jika dua atau lebih child perlu membaca atau mengubah value yang sama. Jangan menaikkan state hanya agar semua state terlihat di satu file; props yang berlebihan justru bisa menyamarkan siapa pemilik behavior itu.",
    },
    {
      id: "react-state-colocation-coding-practice",
      type: "coding-practice",
      challengeId: "move-panel-state-to-card",
    },
    {
      id: "react-state-colocation-quick-check",
      type: "quick-check",
      question:
        "`isEditing` hanya mengatur form kecil di dalam satu `ProfileCard`. Lokasi state yang paling masuk akal adalah...",
      options: [
        "Di ProfileCard", "Di root application", "Di Context sejak awal", "Di variable global biasa"],
      correctAnswer: "Di ProfileCard",
      explanation:
        "Karena hanya ProfileCard yang membaca dan mengubah `isEditing`, state sebaiknya tetap lokal di component tersebut.",
    },
    {
      id: "react-state-colocation-summary",
      type: "summary",
      points: [
        "Mulai dari state lokal di component yang memakai behavior tersebut.",
        "Naikkan state hanya saat ada beberapa pemakai yang membutuhkan sumber value sama.",
        "State colocation mengurangi props yang hanya diteruskan tanpa alasan kuat.",
        "Pemilik state seharusnya mudah dijelaskan dari UI yang dikendalikan.",
        "Berikutnya, kamu akan menghapus state yang sebenarnya bisa dihitung saat render.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-state-colocation-intro",
      "react-state-colocation-case-study",
      "react-state-colocation-decision-rule",
      "react-state-colocation-coding-practice",
      "react-state-colocation-quick-check",
      "react-state-colocation-summary",
    ],
  },
};

export const reactDerivedStateLesson: Lesson = {
  id: "react-derived-state",
  trackId: "frontend-engineering",
  moduleId: "react-state-strategy",
  title: "Derived State",
  slug: "react-derived-state",
  description:
    "Menghitung filtered list, count, dan label dari state atau props yang sudah ada tanpa menyimpan salinan data baru.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 55,
  objectives: [
    "Mengenali duplicate state sebagai sumber UI tidak sinkron",
    "Menghitung data turunan saat render",
    "Merender filtered list dari sumber data dan filter yang ada",
  ],
  skillTags: ["React", "Derived State", "Refactoring", "State Design"],
  blocks: [
    {
      id: "react-derived-state-intro",
      type: "text",
      title: "Jangan simpan salinan dari data yang sudah kamu punya",
      content:
        "Derived state adalah value yang dapat dihitung dari props atau state lain. Contohnya: jumlah lesson selesai, total harga, filtered list, dan label ringkasan. Jika kamu menyimpan value turunan sebagai state terpisah, dua sumber data harus selalu diperbarui bersama. Inilah duplicate state.\n\nDuplicate state mudah terlihat benar pada awalnya, tetapi gagal saat satu update terlupa. Lebih aman menyimpan sumber data asli dan input yang benar-benar berubah, lalu menghitung hasil turunannya setiap render.",
    },
    {
      id: "react-derived-state-example",
      type: "code-example",
      title: "Filter list tanpa visibleLessons state",
      language: "tsx",
      code: `const lessons = [
  { id: "state", title: "State Colocation", required: true },
  { id: "context", title: "Context When Needed", required: false },
];

function LessonSearch() {
  const [query, setQuery] = useState("");
  const visibleLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <p>{visibleLessons.length} lesson ditemukan.</p>
    </section>
  );
}`,
      explanation:
        "Hanya `query` yang berubah karena input user. `visibleLessons` selalu dihitung dari `lessons` dan `query`, sehingga hasilnya tidak dapat tertinggal dari filter terbaru.",
    },
    {
      id: "react-derived-state-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Effect tidak memperbaiki duplicate state",
      content:
        "Menyimpan `visibleLessons` lalu memperbaruinya lewat `useEffect` hanya menambah satu langkah sinkronisasi. Jika hasil bisa dihitung dari `lessons` dan `query`, hitung langsung di render. Simpan state hanya untuk value yang menjadi sumber perubahan, bukan hasil hitungannya.",
    },
    {
      id: "react-derived-state-coding-practice",
      type: "coding-practice",
      challengeId: "derive-filtered-lesson-list",
    },
    {
      id: "react-derived-state-summary",
      type: "summary",
      points: [
        "Derived state adalah hasil hitung dari props atau state yang sudah ada.",
        "Filtered list, count, dan label ringkasan sering tidak perlu disimpan sebagai state.",
        "Duplicate state membuat UI berisiko tidak sinkron.",
        "Hitung value turunan saat render jika tidak ada alasan kuat untuk menyimpannya.",
        "Berikutnya, kamu akan memakai reducer saat beberapa update state mulai membentuk satu flow terkait.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-derived-state-intro",
      "react-derived-state-example",
      "react-derived-state-common-mistake",
      "react-derived-state-coding-practice",
      "react-derived-state-summary",
    ],
  },
};

export const reactReducerPatternLesson: Lesson = {
  id: "react-reducer-pattern",
  trackId: "frontend-engineering",
  moduleId: "react-state-strategy",
  title: "Reducer Pattern",
  slug: "react-reducer-pattern",
  description:
    "Mengelola beberapa transisi state yang saling terkait dengan action bernama dan reducer yang mudah dibaca.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan kapan reducer lebih jelas daripada beberapa setter state",
    "Membuat action type untuk transisi state",
    "Mengirim action lewat dispatch dari UI",
  ],
  skillTags: ["React", "useReducer", "State Transitions", "Refactoring"],
  blocks: [
    {
      id: "react-reducer-pattern-intro",
      type: "text",
      title: "Reducer memberi nama pada perubahan state",
      content:
        "`useState` tetap tepat untuk satu atau dua value sederhana. Saat banyak state berubah sebagai satu flow yang saling terkait, beberapa setter bisa membuat event handler sulit dibaca. Reducer mengumpulkan aturan perubahan itu dalam satu function.\n\nUI mengirim action yang menjelaskan kejadian, misalnya `query-changed` atau `required-toggled`. Reducer menerima state saat ini dan action, lalu mengembalikan state berikutnya. Ini membuat transisi lebih mudah dilacak daripada menyebarkan aturan update ke banyak handler.",
    },
    {
      id: "react-reducer-pattern-example",
      type: "code-example",
      title: "Reducer untuk filter lesson",
      language: "tsx",
      code: `type FilterState = {
  query: string;
  onlyRequired: boolean;
};

type FilterAction =
  | { type: "query-changed"; query: string }
  | { type: "required-toggled" };

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "query-changed":
      return { ...state, query: action.query };
    case "required-toggled":
      return { ...state, onlyRequired: !state.onlyRequired };
    default:
      return state;
  }
}`,
      explanation:
        "Action menyebut kejadian, bukan detail UI seperti `setInput`. Reducer menjadi satu tempat untuk melihat perubahan query dan filter wajib.",
    },
    {
      id: "react-reducer-pattern-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Reducer bukan pengganti wajib untuk useState",
      content:
        "Pilih reducer saat beberapa value berubah dalam flow yang sama, banyak handler mengubah bagian state yang sama, atau action name membuat aturan bisnis lebih jelas. Untuk toggle sederhana atau satu input lokal, `useState` biasanya lebih ringkas dan lebih mudah dibaca.",
    },
    {
      id: "react-reducer-pattern-coding-practice",
      type: "coding-practice",
      challengeId: "refactor-lesson-filters-to-reducer",
    },
    {
      id: "react-reducer-pattern-summary",
      type: "summary",
      points: [
        "Reducer mengumpulkan transisi state terkait ke satu function.",
        "Action type menjelaskan kejadian yang memicu perubahan.",
        "dispatch mengirim action dari UI ke reducer.",
        "useReducer berguna saat flow state lebih rumit dari beberapa setter sederhana.",
        "Berikutnya, kamu akan melihat kapan context membantu sharing value lintas component tree.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-reducer-pattern-intro",
      "react-reducer-pattern-example",
      "react-reducer-pattern-decision-rule",
      "react-reducer-pattern-coding-practice",
      "react-reducer-pattern-summary",
    ],
  },
};

export const reactContextWhenNeededLesson: Lesson = {
  id: "react-context-when-needed",
  trackId: "frontend-engineering",
  moduleId: "react-state-strategy",
  title: "Context When Needed",
  slug: "react-context-when-needed",
  description:
    "Membagikan preference kecil ke beberapa component yang berjauhan tanpa menjadikan context sebagai default semua state.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan masalah prop drilling yang nyata",
    "Membuat context kecil untuk shared preference",
    "Memilih props biasa saat component masih dekat dan alurnya jelas",
  ],
  skillTags: ["React", "Context", "Props", "State Sharing"],
  blocks: [
    {
      id: "react-context-when-needed-intro",
      type: "text",
      title: "Context menyelesaikan sharing, bukan semua state",
      content:
        "Context berguna saat value yang sama perlu dibaca oleh beberapa component yang berjauhan di tree, misalnya theme preference, locale, atau informasi user yang memang dipakai luas. Dengan context, component perantara tidak perlu menerima props yang hanya diteruskan.\n\nNamun context bukan pengganti props untuk semua hal. Jika parent dan child dekat, props masih paling jelas karena aliran datanya terlihat langsung. Membuat context terlalu awal dapat menyembunyikan pemilik state dan membuat component sulit dipakai ulang di luar provider.",
    },
    {
      id: "react-context-when-needed-example",
      type: "code-example",
      title: "Theme preference kecil lewat context",
      language: "tsx",
      code: `import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

function ThemeLabel() {
  const theme = useContext(ThemeContext);
  return <p>Tema aktif: {theme}</p>;
}

function SettingsPage() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button type="button" onClick={() => setTheme("dark")}>
        Gunakan dark mode
      </button>
      <ThemeLabel />
    </ThemeContext.Provider>
  );
}`,
      explanation:
        "SettingsPage tetap memiliki state preference. Provider membagikan value ke child yang membutuhkannya, termasuk jika suatu saat child berada beberapa level lebih dalam.",
    },
    {
      id: "react-context-when-needed-checklist",
      type: "callout",
      variant: "important",
      title: "Checklist sebelum membuat context",
      content:
        "Pastikan value memang dibutuhkan beberapa component yang berjauhan. Coba props biasa terlebih dahulu bila alurnya pendek. Buat context kecil dengan satu tanggung jawab, misalnya theme preference. Jangan memasukkan semua state application ke satu context besar hanya untuk menghindari props.",
    },
    {
      id: "react-context-when-needed-coding-practice",
      type: "coding-practice",
      challengeId: "share-theme-with-react-context",
    },
    {
      id: "react-context-when-needed-summary",
      type: "summary",
      points: [
        "Context membantu saat shared value diperlukan lintas component tree.",
        "Props tetap tepat untuk data yang mengalir dekat dan jelas.",
        "Provider membagikan value dari pemilik state ke component pemakai.",
        "Context kecil dengan tanggung jawab tunggal lebih mudah dipahami daripada context besar.",
        "Berikutnya, Uji Kompetensi akan menggabungkan keputusan lokasi state, derived value, reducer, dan context.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-context-when-needed-intro",
      "react-context-when-needed-example",
      "react-context-when-needed-checklist",
      "react-context-when-needed-coding-practice",
      "react-context-when-needed-summary",
    ],
  },
};

export const reactStateStrategyAssessmentLesson: Lesson = {
  id: "react-state-strategy-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-state-strategy",
  title: "Uji Kompetensi State Strategy",
  slug: "react-state-strategy-assessment",
  description:
    "Checkpoint kesiapan memilih state lokal, derived value, reducer, dan context berdasarkan masalah yang benar-benar dihadapi component.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 90,
  objectives: [
    "Memilih lokasi state berdasarkan pemilik behavior",
    "Membedakan derived value dari state sumber",
    "Menerapkan reducer sederhana dan menjelaskan kapan context layak dipakai",
  ],
  skillTags: ["React", "State", "useReducer", "Context", "Assessment"],
  blocks: [
    {
      id: "react-state-strategy-assessment-recap",
      type: "text",
      title: "Checkpoint: setiap state harus punya alasan tempat tinggal",
      content:
        "Di module ini, fokusnya bukan mengumpulkan API React. Kamu sedang melatih keputusan desain: siapa yang memiliki state, apakah value perlu disimpan, apakah perubahan sudah cukup terkait untuk reducer, dan apakah sharing lintas tree memang nyata.\n\nUji Kompetensi ini memakai filter lesson kecil. Kamu akan mengorganisasi transisi filter dengan reducer dan menghitung hasil list saat render. Setelah itu, kamu akan menjelaskan pilihan state untuk beberapa kasus UI yang berbeda.",
    },
    {
      id: "react-state-strategy-assessment-quiz",
      type: "quiz",
      quizId: "react-state-strategy-assessment-quiz",
    },
    {
      id: "react-state-strategy-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-state-strategy-checkpoint",
    },
    {
      id: "react-state-strategy-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Jelaskan keputusan state untuk empat kasus berikut:\n1. `isExpanded` hanya dipakai oleh satu LessonCard.\n2. `selectedCategory` dibaca oleh FilterBar dan LessonList yang bersaudara.\n3. Query, filter wajib, dan urutan list berubah lewat beberapa action terkait.\n4. Theme preference dibaca oleh toolbar dan preview yang berjauhan di tree.\n\nUntuk setiap kasus, sebutkan lokasi atau pola state yang kamu pilih dan alasan singkatnya.",
      placeholder:
        "1. isExpanded tetap lokal di LessonCard karena hanya card itu yang mengubah dan membacanya.\n2. selectedCategory dinaikkan ke parent terdekat dari FilterBar dan LessonList karena keduanya perlu sumber value sama.\n3. Gunakan reducer bila action filter mulai saling terkait agar aturan transisi berada di satu tempat.\n4. Theme preference dapat memakai context kecil karena beberapa component jauh perlu membacanya; provider tetap menyimpan state sumber.",
      minimumCharacters: 360,
      checklist: [
        "Membedakan state lokal dan state shared sibling.",
        "Menjelaskan reducer sebagai pola untuk transisi yang terkait.",
        "Menjelaskan context hanya untuk sharing lintas tree yang nyata.",
        "Tidak menyimpan hasil filter atau count sebagai state tanpa alasan.",
      ],
      modelAnswer:
        "isExpanded tetap lokal di LessonCard karena hanya card tersebut yang membacanya dan mengubahnya. selectedCategory dinaikkan ke parent terdekat karena FilterBar dan LessonList adalah sibling yang membutuhkan sumber value yang sama. Query, onlyRequired, dan sort dapat dikelola reducer jika action-nya mulai terkait sehingga aturan perubahan terkumpul di satu function. Theme preference boleh memakai context kecil karena toolbar dan preview berada di cabang tree berbeda, tetapi state theme tetap dimiliki provider. visibleLessons dan total hasil dihitung dari data dan filter saat render, jadi tidak perlu state tambahan.",
    },
    {
      id: "react-state-strategy-assessment-docs",
      type: "documentation-bridge",
      title: "Baca state design dari docs React",
      description:
        "Gunakan dokumentasi ini untuk membandingkan keputusan state kamu dengan pola React resmi, bukan untuk mencari satu pola yang wajib untuk semua feature.",
      links: [
        {
          source: "React",
          title: "Choosing the State Structure",
          url: "https://react.dev/learn/choosing-the-state-structure",
          focus: [
            "menghindari redundant state",
            "menyimpan sumber data, bukan salinannya",
            "mengelompokkan state yang berubah bersama",
          ],
          ignoreForNow: ["optimasi dengan memoization"],
        },
        {
          source: "React",
          title: "Sharing State Between Components",
          url: "https://react.dev/learn/sharing-state-between-components",
          focus: [
            "closest common parent",
            "satu sumber state untuk sibling",
            "perbedaan state lokal dan lifted state",
          ],
          ignoreForNow: ["component hierarchy yang sangat besar"],
        },
        {
          source: "React",
          title: "Extracting State Logic into a Reducer",
          url: "https://react.dev/learn/extracting-state-logic-into-a-reducer",
          focus: [
            "action type sebagai nama kejadian",
            "reducer sebagai tempat transisi state",
            "kapan reducer membuat event handler lebih ringkas",
          ],
          ignoreForNow: ["reducer dan context pada app skala besar"],
        },
        {
          source: "React",
          title: "Passing Data Deeply with Context",
          url: "https://react.dev/learn/passing-data-deeply-with-context",
          focus: [
            "masalah prop drilling yang nyata",
            "provider dan useContext",
            "batas context kecil yang spesifik",
          ],
          ignoreForNow: ["global state libraries", "provider nesting yang kompleks"],
        },
      ],
      followUpAction:
        "Buka Local React App kamu. Pilih satu state yang ada lalu tulis satu kalimat: tetap lokal, dinaikkan ke parent, dihitung saat render, dipindah ke reducer, atau dibagikan lewat context. Sertakan alasannya.",
    },
    {
      id: "react-state-strategy-assessment-summary",
      type: "summary",
      points: [
        "State tinggal dekat dengan component yang memilikinya sampai ada kebutuhan berbagi nyata.",
        "Derived value dihitung dari data sumber agar UI tidak menyimpan salinan yang mudah tertinggal.",
        "Reducer membantu saat beberapa transisi state sudah membentuk satu flow terkait.",
        "Context menyelesaikan sharing lintas tree, bukan semua props atau semua state application.",
        "Kamu siap masuk ke Reusable UI States untuk membangun loading, error, empty, dan retry UI yang konsisten.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-state-strategy-assessment-recap",
      "react-state-strategy-assessment-quiz",
      "react-state-strategy-assessment-coding-practice",
      "react-state-strategy-assessment-writing-practice",
      "react-state-strategy-assessment-docs",
      "react-state-strategy-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactStateStrategyAssessmentQuiz: Quiz = {
  id: "react-state-strategy-assessment-quiz",
  lessonId: "react-state-strategy-assessment",
  title: "Uji Kompetensi State Strategy",
  passingScore: 70,
  questions: [
    {
      id: "react-state-strategy-q1",
      type: "multiple-choice",
      question:
        "Dua sibling, FilterBar dan LessonList, membutuhkan selectedCategory yang sama. State paling tepat berada di...",
      options: [
        "Parent terdekat dari kedua sibling", "FilterBar saja", "LessonList saja", "Variable global biasa"],
      correctAnswer: "Parent terdekat dari kedua sibling",
      explanation:
        "Parent terdekat dapat menjadi satu sumber selectedCategory lalu mengirim data dan handler ke kedua sibling.",
    },
    {
      id: "react-state-strategy-q2",
      type: "true-false",
      question:
        "visibleLessons yang selalu berasal dari lessons dan query sebaiknya disimpan sebagai state tambahan.",
      correctAnswer: false,
      explanation:
        "visibleLessons adalah derived value. Hitung dari lessons dan query saat render agar tidak menciptakan duplicate state.",
    },
    {
      id: "react-state-strategy-q3",
      type: "multiple-choice",
      question: "Kapan useReducer biasanya lebih membantu daripada beberapa useState?",
      options: [
        "Saat banyak transisi state saling terkait dan action membuat alur lebih jelas",
        "Saat hanya ada satu boolean toggle kecil",
        "Saat ingin menghapus semua event handler",
        "Saat component tidak punya state sama sekali",
      ],
      correctAnswer:
        "Saat banyak transisi state saling terkait dan action membuat alur lebih jelas",
      explanation:
        "Reducer membantu mengumpulkan aturan update untuk flow state yang saling berhubungan. State kecil tetap bisa memakai useState.",
    },
    {
      id: "react-state-strategy-q4",
      type: "multiple-choice",
      question: "Masalah apa yang paling tepat diselesaikan context kecil?",
      options: [
        "Theme preference dibaca oleh beberapa component yang berjauhan",
        "Satu input lokal di dalam form kecil",
        "Jumlah item hasil filter yang bisa dihitung saat render",
        "Prop title dari parent langsung ke satu child",
      ],
      correctAnswer:
        "Theme preference dibaca oleh beberapa component yang berjauhan",
      explanation:
        "Context membantu membagikan value lintas tree ketika props harus melewati banyak component perantara. Props biasa lebih jelas untuk alur pendek.",
    },
    {
      id: "react-state-strategy-q5",
      type: "multiple-choice",
      question: "Action reducer `required-toggled` sebaiknya menggambarkan...",
      options: [
        "Kejadian atau perubahan domain yang terjadi",
        "Nama semua variable local di component",
        "Warna button yang sedang terlihat",
        "Nama file tempat reducer ditulis",
      ],
      correctAnswer: "Kejadian atau perubahan domain yang terjadi",
      explanation:
        "Action name menjelaskan apa yang terjadi, sehingga reducer dan event handler lebih mudah dibaca saat flow bertambah.",
    },
  ],
};

const reactStateStrategyPreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React State Strategy</h1>
  <p>Fokus di tab TSX, cek struktur, lalu jalankan preview untuk mencoba behavior component.</p>
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

export const movePanelStateToCardChallenge: CodingChallenge = {
  id: "move-panel-state-to-card",
  lessonId: "react-state-colocation",
  title: "Pindahkan state panel ke LessonCard",
  description:
    "Latihan menjaga state buka-tutup tetap di component card yang memilikinya.",
  instructions: [
    "Fokus di tab TSX.",
    "Pindahkan isOpen state dari LearningPage ke LessonCard.",
    "LessonCard cukup menerima lesson sebagai props.",
    "Buat button di LessonCard untuk membalik isOpen.",
    "Render description hanya saat isOpen bernilai true.",
  ],
  starterCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useState } from "react";

type Lesson = {
  title: string;
  description: string;
};

const lesson: Lesson = {
  title: "State Colocation",
  description: "State kecil tinggal dekat dengan component yang memakainya.",
};

function LessonCard({ lesson, isOpen, onToggle }: { lesson: Lesson; isOpen: boolean; onToggle: () => void }) {
  return (
    <article>
      <h2>{lesson.title}</h2>
      <button type="button" onClick={onToggle}>
        {isOpen ? "Sembunyikan detail" : "Lihat detail"}
      </button>
      {isOpen ? <p>{lesson.description}</p> : null}
    </article>
  );
}

function LearningPage() {
  const [isOpen, setIsOpen] = useState(false);

  return <LessonCard lesson={lesson} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
}`,
  },
  solutionCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useState } from "react";

type Lesson = {
  title: string;
  description: string;
};

const lesson: Lesson = {
  title: "State Colocation",
  description: "State kecil tinggal dekat dengan component yang memakainya.",
};

function LessonCard({ lesson }: { lesson: Lesson }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <h2>{lesson.title}</h2>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Sembunyikan detail" : "Lihat detail"}
      </button>
      {isOpen ? <p>{lesson.description}</p> : null}
    </article>
  );
}

function LearningPage() {
  return <LessonCard lesson={lesson} />;
}`,
  },
  checklist: [
    "LessonCard menjadi pemilik isOpen state.",
    "LearningPage hanya mengirim data lesson.",
    "Button card membalik isOpen.",
    "Description hanya dirender saat detail terbuka.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LearningPage",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "card-prop", label: "LessonCard menerima lesson saja.", type: "contains", target: "function LessonCard({ lesson }: { lesson: Lesson })", valueIncludes: "function LessonCard({ lesson }: { lesson: Lesson })" },
      { id: "open-state", label: "LessonCard memiliki isOpen state.", type: "contains", target: "const [isOpen, setIsOpen] = useState(false);", valueIncludes: "const [isOpen, setIsOpen] = useState(false);" },
      { id: "toggle-button", label: "Button membalik isOpen.", type: "contains", target: "onClick={() => setIsOpen(!isOpen)}", valueIncludes: "onClick={() => setIsOpen(!isOpen)}" },
      { id: "conditional-description", label: "Description memakai conditional rendering.", type: "contains", target: "{isOpen ? <p>{lesson.description}</p> : null}", valueIncludes: "{isOpen ? <p>{lesson.description}</p> : null}" },
      { id: "parent-card", label: "LearningPage hanya mengirim lesson.", type: "contains", target: "return <LessonCard lesson={lesson} />;", valueIncludes: "return <LessonCard lesson={lesson} />;" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "LessonCard mengelola buka-tutup detail sendiri. Jalankan preview lalu gunakan button untuk memastikan parent tidak perlu mengatur state UI lokal tersebut.",
    lines: [
      "LearningPage hanya menyusun dan memberi data lesson.",
      "LessonCard memiliki isOpen dan action toggle sendiri.",
      "Detail muncul dan hilang saat button diklik.",
    ],
  },
  skillTags: ["React", "State Colocation", "Component Design"],
};

export const deriveFilteredLessonListChallenge: CodingChallenge = {
  id: "derive-filtered-lesson-list",
  lessonId: "react-derived-state",
  title: "Hitung filtered lesson list saat render",
  description:
    "Latihan menghapus salinan list dari state dan menghitung visibleLessons dari data sumber serta query.",
  instructions: [
    "Fokus di tab TSX.",
    "Pertahankan query sebagai satu-satunya state untuk input filter.",
    "Hitung visibleLessons dari lessons dan query.",
    "Hubungkan input langsung ke setQuery.",
    "Render visibleLessons dan tampilkan jumlah hasilnya.",
  ],
  starterCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useState } from "react";

const lessons = [
  { id: "colocation", title: "State Colocation" },
  { id: "derived", title: "Derived State" },
  { id: "context", title: "Context When Needed" },
];

function LessonSearch() {
  const [query, setQuery] = useState("");
  const [visibleLessons, setVisibleLessons] = useState(lessons);

  function handleQueryChange(event: { target: { value: string } }) {
    const nextQuery = event.target.value;
    setQuery(nextQuery);
    setVisibleLessons(
      lessons.filter((lesson) => lesson.title.toLowerCase().includes(nextQuery.toLowerCase())),
    );
  }

  return (
    <section>
      <h2>Cari lesson</h2>
      <input value={query} onChange={handleQueryChange} />
      <p>{visibleLessons.length} lesson ditemukan.</p>
      <ul>
        {visibleLessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useState } from "react";

const lessons = [
  { id: "colocation", title: "State Colocation" },
  { id: "derived", title: "Derived State" },
  { id: "context", title: "Context When Needed" },
];

function LessonSearch() {
  const [query, setQuery] = useState("");
  const visibleLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <h2>Cari lesson</h2>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <p>{visibleLessons.length} lesson ditemukan.</p>
      <ul>
        {visibleLessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "query menjadi state input yang benar-benar berubah.",
    "visibleLessons dihitung dari lessons dan query.",
    "Input mengubah query langsung lewat setQuery.",
    "Jumlah hasil dan list memakai visibleLessons yang sama.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonSearch",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "query-state", label: "query state dibuat.", type: "contains", target: `const [query, setQuery] = useState("");`, valueIncludes: `const [query, setQuery] = useState("");` },
      { id: "visible-lessons", label: "visibleLessons dihitung dengan filter.", type: "contains", target: "const visibleLessons = lessons.filter((lesson) =>", valueIncludes: "const visibleLessons = lessons.filter((lesson) =>" },
      { id: "query-filter", label: "Filter memakai query lowercase.", type: "contains", target: "includes(query.toLowerCase())", valueIncludes: "includes(query.toLowerCase())" },
      { id: "input-change", label: "Input langsung mengubah query.", type: "contains", target: "onChange={(event) => setQuery(event.target.value)}", valueIncludes: "onChange={(event) => setQuery(event.target.value)}" },
      { id: "result-count", label: "Jumlah memakai visibleLessons.length.", type: "contains", target: "{visibleLessons.length} lesson ditemukan.", valueIncludes: "{visibleLessons.length} lesson ditemukan." },
      { id: "result-list", label: "List merender visibleLessons.", type: "contains", target: "visibleLessons.map((lesson) => (", valueIncludes: "visibleLessons.map((lesson) => (" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Ketik kata kunci untuk menghitung ulang hasil dari lessons dan query yang sudah ada. Jalankan preview lalu coba filter beberapa judul lesson.",
    lines: [
      "query adalah state sumber dari input.",
      "visibleLessons dihitung saat render, bukan disimpan sebagai state tambahan.",
      "Count dan list selalu memakai hasil filter yang sama.",
    ],
  },
  skillTags: ["React", "Derived State", "Filtering"],
};

export const refactorLessonFiltersToReducerChallenge: CodingChallenge = {
  id: "refactor-lesson-filters-to-reducer",
  lessonId: "react-reducer-pattern",
  title: "Refactor lesson filters ke reducer",
  description:
    "Latihan menggabungkan query dan filter wajib ke reducer dengan action yang menjelaskan perubahan.",
  instructions: [
    "Fokus di tab TSX.",
    "Import useReducer dari react.",
    "Buat FilterState dan FilterAction.",
    "Buat filterReducer untuk query-changed dan required-toggled.",
    "Ganti dua useState dengan useReducer dan dispatch dari input serta checkbox.",
  ],
  starterCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useState } from "react";

const lessons = [
  { id: "colocation", title: "State Colocation", required: true },
  { id: "derived", title: "Derived State", required: true },
  { id: "context", title: "Context When Needed", required: false },
];

function LessonFilters() {
  const [query, setQuery] = useState("");
  const [onlyRequired, setOnlyRequired] = useState(false);
  const visibleLessons = lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(query.toLowerCase()) &&
      (!onlyRequired || lesson.required),
  );

  return (
    <section>
      <h2>Filter lesson</h2>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <label>
        <input
          type="checkbox"
          checked={onlyRequired}
          onChange={() => setOnlyRequired(!onlyRequired)}
        />
        Hanya wajib
      </label>
      <p>{visibleLessons.length} lesson terlihat.</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useReducer } from "react";

type FilterState = {
  query: string;
  onlyRequired: boolean;
};

type FilterAction =
  | { type: "query-changed"; query: string }
  | { type: "required-toggled" };

const initialFilter: FilterState = {
  query: "",
  onlyRequired: false,
};

const lessons = [
  { id: "colocation", title: "State Colocation", required: true },
  { id: "derived", title: "Derived State", required: true },
  { id: "context", title: "Context When Needed", required: false },
];

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "query-changed":
      return { ...state, query: action.query };
    case "required-toggled":
      return { ...state, onlyRequired: !state.onlyRequired };
    default:
      return state;
  }
}

function LessonFilters() {
  const [filter, dispatch] = useReducer(filterReducer, initialFilter);
  const visibleLessons = lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(filter.query.toLowerCase()) &&
      (!filter.onlyRequired || lesson.required),
  );

  return (
    <section>
      <h2>Filter lesson</h2>
      <input
        value={filter.query}
        onChange={(event) => dispatch({ type: "query-changed", query: event.target.value })}
      />
      <label>
        <input
          type="checkbox"
          checked={filter.onlyRequired}
          onChange={() => dispatch({ type: "required-toggled" })}
        />
        Hanya wajib
      </label>
      <p>{visibleLessons.length} lesson terlihat.</p>
    </section>
  );
}`,
  },
  checklist: [
    "FilterState menyimpan query dan onlyRequired.",
    "FilterAction memberi nama dua perubahan filter.",
    "filterReducer menangani kedua action.",
    "Input dan checkbox mengirim action lewat dispatch.",
    "visibleLessons tetap dihitung saat render.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonFilters",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "import-reducer", label: "useReducer diimport.", type: "contains", target: `import { useReducer } from "react";`, valueIncludes: `import { useReducer } from "react";` },
      { id: "filter-state", label: "FilterState dibuat.", type: "contains", target: "type FilterState = {", valueIncludes: "type FilterState = {" },
      { id: "filter-action", label: "FilterAction dibuat.", type: "contains", target: "type FilterAction =", valueIncludes: "type FilterAction =" },
      { id: "filter-reducer", label: "filterReducer dibuat.", type: "contains", target: "function filterReducer(state: FilterState, action: FilterAction): FilterState", valueIncludes: "function filterReducer(state: FilterState, action: FilterAction): FilterState" },
      { id: "query-action", label: "Action query-changed ditangani.", type: "contains", target: "case \"query-changed\":", valueIncludes: "case \"query-changed\":" },
      { id: "required-action", label: "Action required-toggled ditangani.", type: "contains", target: "case \"required-toggled\":", valueIncludes: "case \"required-toggled\":" },
      { id: "use-reducer", label: "LessonFilters memakai useReducer.", type: "contains", target: "const [filter, dispatch] = useReducer(filterReducer, initialFilter);", valueIncludes: "const [filter, dispatch] = useReducer(filterReducer, initialFilter);" },
      { id: "query-dispatch", label: "Input mengirim action query.", type: "contains", target: "dispatch({ type: \"query-changed\", query: event.target.value })", valueIncludes: "dispatch({ type: \"query-changed\", query: event.target.value })" },
      { id: "toggle-dispatch", label: "Checkbox mengirim action toggle.", type: "contains", target: "dispatch({ type: \"required-toggled\" })", valueIncludes: "dispatch({ type: \"required-toggled\" })" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Input dan checkbox mengirim action ke reducer yang sama. Jalankan preview lalu cari lesson dan aktifkan filter wajib untuk mencoba kedua transisi.",
    lines: [
      "query-changed mengubah query di reducer.",
      "required-toggled membalik filter wajib di reducer.",
      "visibleLessons tetap dihitung dari data dan filter saat render.",
    ],
  },
  skillTags: ["React", "useReducer", "State Transitions"],
};

export const shareThemeWithReactContextChallenge: CodingChallenge = {
  id: "share-theme-with-react-context",
  lessonId: "react-context-when-needed",
  title: "Bagikan theme lewat React context",
  description:
    "Latihan membuat context kecil untuk theme yang dibaca oleh preview dan toggle di dalam settings page.",
  instructions: [
    "Fokus di tab TSX.",
    "Import createContext dan useContext dari react.",
    "Buat ThemeContext untuk theme dan toggleTheme.",
    "Bungkus ThemePreview dan ThemeToggle dengan Provider.",
    "Gunakan useContext di kedua child agar tidak menerima props theme atau toggleTheme.",
  ],
  starterCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useState } from "react";

type Theme = "light" | "dark";

function ThemePreview({ theme }: { theme: Theme }) {
  return <p>Tema aktif: {theme}</p>;
}

function ThemeToggle({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <button type="button" onClick={toggleTheme}>
      Ganti tema
    </button>
  );
}

function SettingsPage() {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <section>
      <h2>Theme preference</h2>
      <ThemePreview theme={theme} />
      <ThemeToggle toggleTheme={toggleTheme} />
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemePreview() {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  return <p>Tema aktif: {context.theme}</p>;
}

function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  return (
    <button type="button" onClick={context.toggleTheme}>
      Ganti tema
    </button>
  );
}

function SettingsPage() {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section>
        <h2>Theme preference</h2>
        <ThemePreview />
        <ThemeToggle />
      </section>
    </ThemeContext.Provider>
  );
}`,
  },
  checklist: [
    "ThemeContext memiliki value theme dan toggleTheme.",
    "SettingsPage tetap menjadi pemilik state theme.",
    "Provider membagikan theme dan toggleTheme ke child.",
    "ThemePreview dan ThemeToggle memakai useContext.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "SettingsPage",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "context-import", label: "createContext dan useContext diimport.", type: "contains", target: `import { createContext, useContext, useState } from "react";`, valueIncludes: `import { createContext, useContext, useState } from "react";` },
      { id: "context-value", label: "ThemeContextValue dibuat.", type: "contains", target: "type ThemeContextValue = {", valueIncludes: "type ThemeContextValue = {" },
      { id: "theme-context", label: "ThemeContext dibuat.", type: "contains", target: "const ThemeContext = createContext<ThemeContextValue | null>(null);", valueIncludes: "const ThemeContext = createContext<ThemeContextValue | null>(null);" },
      { id: "preview-context", label: "ThemePreview memakai useContext.", type: "contains", target: "const context = useContext(ThemeContext);", valueIncludes: "const context = useContext(ThemeContext);" },
      { id: "toggle-context", label: "ThemeToggle memakai context theme.", type: "contains", target: "onClick={context.toggleTheme}", valueIncludes: "onClick={context.toggleTheme}" },
      { id: "theme-toggle", label: "toggleTheme membalik theme.", type: "contains", target: "setTheme((current) => (current === \"light\" ? \"dark\" : \"light\"));", valueIncludes: "setTheme((current) => (current === \"light\" ? \"dark\" : \"light\"));" },
      { id: "theme-provider", label: "Provider membagikan theme dan toggleTheme.", type: "contains", target: "<ThemeContext.Provider value={{ theme, toggleTheme }}>", valueIncludes: "<ThemeContext.Provider value={{ theme, toggleTheme }}>" },
      { id: "preview-without-props", label: "ThemePreview tidak menerima props.", type: "contains", target: "<ThemePreview />", valueIncludes: "<ThemePreview />" },
      { id: "toggle-without-props", label: "ThemeToggle tidak menerima props.", type: "contains", target: "<ThemeToggle />", valueIncludes: "<ThemeToggle />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "ThemePreview dan ThemeToggle membaca context yang sama di bawah Provider. Jalankan preview lalu klik Ganti tema untuk melihat label berubah tanpa props diteruskan manual.",
    lines: [
      "SettingsPage tetap memiliki state theme dan toggleTheme.",
      "Provider membagikan value ke child di dalam tree.",
      "Kedua child membaca context tanpa menerima props theme atau toggleTheme.",
    ],
  },
  skillTags: ["React", "Context", "State Sharing"],
};

export const buildStateStrategyCheckpointChallenge: CodingChallenge = {
  id: "build-state-strategy-checkpoint",
  lessonId: "react-state-strategy-assessment",
  title: "Bangun state strategy checkpoint",
  description:
    "Checkpoint mengelola filter terkait dengan reducer dan menghitung visibleLessons dari data sumber saat render.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat ViewState untuk query dan onlyCompleted.",
    "Buat viewReducer dengan action query-changed dan completed-toggled.",
    "Gunakan useReducer di LearningWorkspace.",
    "Hitung visibleLessons dari lessons dan view, lalu render count serta list.",
  ],
  starterCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useState } from "react";

const lessons = [
  { id: "colocation", title: "State Colocation", completed: true },
  { id: "derived", title: "Derived State", completed: false },
  { id: "reducer", title: "Reducer Pattern", completed: false },
];

function LearningWorkspace() {
  const [query, setQuery] = useState("");
  const [onlyCompleted, setOnlyCompleted] = useState(false);

  return (
    <section>
      <h2>Learning workspace</h2>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <label>
        <input
          type="checkbox"
          checked={onlyCompleted}
          onChange={() => setOnlyCompleted(!onlyCompleted)}
        />
        Hanya selesai
      </label>
      <p>Lengkapi reducer dan visibleLessons.</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStateStrategyPreviewCode,
    tsx: `import { useReducer } from "react";

type ViewState = {
  query: string;
  onlyCompleted: boolean;
};

type ViewAction =
  | { type: "query-changed"; query: string }
  | { type: "completed-toggled" };

const initialView: ViewState = {
  query: "",
  onlyCompleted: false,
};

const lessons = [
  { id: "colocation", title: "State Colocation", completed: true },
  { id: "derived", title: "Derived State", completed: false },
  { id: "reducer", title: "Reducer Pattern", completed: false },
];

function viewReducer(state: ViewState, action: ViewAction): ViewState {
  switch (action.type) {
    case "query-changed":
      return { ...state, query: action.query };
    case "completed-toggled":
      return { ...state, onlyCompleted: !state.onlyCompleted };
    default:
      return state;
  }
}

function LearningWorkspace() {
  const [view, dispatch] = useReducer(viewReducer, initialView);
  const visibleLessons = lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(view.query.toLowerCase()) &&
      (!view.onlyCompleted || lesson.completed),
  );

  return (
    <section>
      <h2>Learning workspace</h2>
      <input
        value={view.query}
        onChange={(event) => dispatch({ type: "query-changed", query: event.target.value })}
      />
      <label>
        <input
          type="checkbox"
          checked={view.onlyCompleted}
          onChange={() => dispatch({ type: "completed-toggled" })}
        />
        Hanya selesai
      </label>
      <p>{visibleLessons.length} lesson terlihat.</p>
      <ul>
        {visibleLessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "ViewState mengelola query dan onlyCompleted.",
    "Reducer memberi nama action query dan completed filter.",
    "LearningWorkspace memakai useReducer.",
    "visibleLessons dihitung dari lessons serta view.",
    "Count dan list memakai visibleLessons yang sama.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LearningWorkspace",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "import-reducer", label: "useReducer diimport.", type: "contains", target: `import { useReducer } from "react";`, valueIncludes: `import { useReducer } from "react";` },
      { id: "view-state", label: "ViewState dibuat.", type: "contains", target: "type ViewState = {", valueIncludes: "type ViewState = {" },
      { id: "view-action", label: "ViewAction dibuat.", type: "contains", target: "type ViewAction =", valueIncludes: "type ViewAction =" },
      { id: "view-reducer", label: "viewReducer dibuat.", type: "contains", target: "function viewReducer(state: ViewState, action: ViewAction): ViewState", valueIncludes: "function viewReducer(state: ViewState, action: ViewAction): ViewState" },
      { id: "query-case", label: "query-changed ditangani.", type: "contains", target: "case \"query-changed\":", valueIncludes: "case \"query-changed\":" },
      { id: "completed-case", label: "completed-toggled ditangani.", type: "contains", target: "case \"completed-toggled\":", valueIncludes: "case \"completed-toggled\":" },
      { id: "use-reducer", label: "LearningWorkspace memakai useReducer.", type: "contains", target: "const [view, dispatch] = useReducer(viewReducer, initialView);", valueIncludes: "const [view, dispatch] = useReducer(viewReducer, initialView);" },
      { id: "visible-lessons", label: "visibleLessons dihitung dari lessons.", type: "contains", target: "const visibleLessons = lessons.filter(", valueIncludes: "const visibleLessons = lessons.filter(" },
      { id: "query-dispatch", label: "Input mengirim query-changed.", type: "contains", target: "dispatch({ type: \"query-changed\", query: event.target.value })", valueIncludes: "dispatch({ type: \"query-changed\", query: event.target.value })" },
      { id: "completed-dispatch", label: "Checkbox mengirim completed-toggled.", type: "contains", target: "dispatch({ type: \"completed-toggled\" })", valueIncludes: "dispatch({ type: \"completed-toggled\" })" },
      { id: "visible-list", label: "List merender visibleLessons.", type: "contains", target: "visibleLessons.map((lesson) => (", valueIncludes: "visibleLessons.map((lesson) => (" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "LearningWorkspace mengelola dua filter terkait lewat reducer dan menghitung hasil list saat render. Jalankan preview lalu coba pencarian serta checkbox Hanya selesai.",
    lines: [
      "Reducer menangani action query dan completed filter.",
      "visibleLessons berasal dari lessons dan state filter saat ini.",
      "Count dan list berubah bersama tanpa visibleLessons state terpisah.",
    ],
  },
  skillTags: ["React", "State Strategy", "useReducer", "Assessment"],
};
