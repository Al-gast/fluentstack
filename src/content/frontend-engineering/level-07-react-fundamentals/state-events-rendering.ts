import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const reactStateEventsRenderingModule: Module = {
  id: "react-state-events-rendering",
  trackId: "frontend-engineering",
  title: "State, Events, and Rendering",
  slug: "react-state-events-rendering",
  description:
    "Membuat React UI merespons interaksi lewat useState, event handler, conditional rendering, list, keys, dan derived display.",
  order: 22,
  lessonIds: [
    "react-use-state-basics",
    "react-event-handling",
    "react-conditional-rendering",
    "react-lists-and-keys",
    "react-derived-display",
    "react-state-events-rendering-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["React", "State", "Events", "Rendering", "Lists"],
};

export const reactUseStateBasicsLesson: Lesson = {
  id: "react-use-state-basics",
  trackId: "frontend-engineering",
  moduleId: "react-state-events-rendering",
  title: "`useState` Dasar",
  slug: "react-use-state-basics",
  description:
    "Memakai state sebagai memory kecil milik component untuk menyimpan value yang berubah.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan state sebagai memory component",
    "Membuat state dengan useState",
    "Mengubah state lewat setter function",
  ],
  skillTags: ["React", "useState", "State"],
  blocks: [
    {
      id: "react-use-state-basics-intro",
      type: "text",
      title: "Component perlu mengingat value yang berubah",
      content:
        "Di module sebelumnya, component menerima data lewat props. Props datang dari luar component. State berbeda: state adalah memory kecil di dalam component untuk value yang bisa berubah saat user berinteraksi.\n\nContoh sederhana: jumlah counter, status panel terbuka, teks input, atau item yang sedang dipilih. Jika value perlu berubah dan perubahan itu harus membuat UI render ulang, biasanya value itu menjadi state.",
    },
    {
      id: "react-use-state-basics-example",
      type: "code-example",
      title: "Counter kecil dengan useState",
      language: "tsx",
      code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Jumlah klik: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Tambah
      </button>
    </section>
  );
}`,
      explanation:
        "`count` adalah value state saat ini. `setCount` adalah function untuk meminta React mengganti value itu dan render ulang UI.",
    },
    {
      id: "react-use-state-basics-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan ubah state langsung",
      content:
        "State tidak diubah dengan assignment seperti `count = count + 1`. Gunakan setter dari `useState`, misalnya `setCount(count + 1)`, agar React tahu UI perlu dirender ulang.",
    },
    {
      id: "react-use-state-basics-coding-practice",
      type: "coding-practice",
      challengeId: "build-react-counter-toggle",
    },
    {
      id: "react-use-state-basics-quick-check",
      type: "quick-check",
      question: "Kapan value paling tepat dijadikan state?",
      options: [
        "Saat value bisa berubah karena interaksi dan perubahan itu memengaruhi UI",
        "Saat value selalu sama dan tidak pernah berubah",
        "Saat ingin menghapus semua props",
        "Saat CSS butuh warna baru",
      ],
      correctAnswer: "Saat value bisa berubah karena interaksi dan perubahan itu memengaruhi UI",
      explanation:
        "State cocok untuk value yang berubah dan perubahan itu harus terlihat pada render berikutnya.",
    },
    {
      id: "react-use-state-basics-summary",
      type: "summary",
      points: [
        "State adalah memory kecil milik component.",
        "`useState` mengembalikan value state dan setter function.",
        "Setter function meminta React mengganti state dan render ulang.",
        "Jangan mengubah state langsung dengan assignment.",
        "Berikutnya, kamu akan menghubungkan state dengan event handler.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-use-state-basics-intro",
      "react-use-state-basics-example",
      "react-use-state-basics-common-mistake",
      "react-use-state-basics-coding-practice",
      "react-use-state-basics-quick-check",
      "react-use-state-basics-summary",
    ],
  },
};

export const reactEventHandlingLesson: Lesson = {
  id: "react-event-handling",
  trackId: "frontend-engineering",
  moduleId: "react-state-events-rendering",
  title: "Event Handling",
  slug: "react-event-handling",
  description:
    "Merespons aksi user seperti click dan input change dengan event handler React.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan event handler sebagai function untuk merespons interaksi",
    "Memasang onClick pada button",
    "Memasang onChange pada input untuk memperbarui state",
  ],
  skillTags: ["React", "Events", "Input"],
  blocks: [
    {
      id: "react-event-handling-intro",
      type: "text",
      title: "Event handler menghubungkan user dan state",
      content:
        "State menyimpan value yang berubah. Event handler adalah function yang berjalan saat user melakukan aksi, misalnya klik button atau mengetik di input.\n\nDi React, nama event biasanya memakai camelCase: `onClick`, `onChange`, `onSubmit`. Kamu mengirim function ke event tersebut, bukan memanggil function langsung saat render.",
    },
    {
      id: "react-event-handling-example",
      type: "code-example",
      title: "Click dan input change",
      language: "tsx",
      code: `import { useState } from "react";

function NamePreview() {
  const [name, setName] = useState("");

  function handleReset() {
    setName("");
  }

  return (
    <section>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <p>Halo, {name || "teman"}.</p>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </section>
  );
}`,
      explanation:
        "`onChange` membaca value input terbaru dan menyimpannya ke state. `onClick` menjalankan function reset saat button diklik.",
    },
    {
      id: "react-event-handling-warning",
      type: "callout",
      variant: "warning",
      title: "Kirim function, jangan hasil function",
      content:
        "Tulis `onClick={handleReset}`, bukan `onClick={handleReset()}`. Bentuk kedua memanggil function saat render, bukan saat user klik.",
    },
    {
      id: "react-event-handling-coding-practice",
      type: "coding-practice",
      challengeId: "add-button-input-interactions",
    },
    {
      id: "react-event-handling-summary",
      type: "summary",
      points: [
        "Event handler adalah function yang merespons aksi user.",
        "React memakai camelCase event seperti `onClick` dan `onChange`.",
        "Input controlled memakai `value` dari state dan `onChange` untuk update state.",
        "Jangan memanggil handler saat render jika tujuannya menunggu user action.",
        "Berikutnya, kamu akan menampilkan UI berbeda berdasarkan state.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-event-handling-intro",
      "react-event-handling-example",
      "react-event-handling-warning",
      "react-event-handling-coding-practice",
      "react-event-handling-summary",
    ],
  },
};

export const reactConditionalRenderingLesson: Lesson = {
  id: "react-conditional-rendering",
  trackId: "frontend-engineering",
  moduleId: "react-state-events-rendering",
  title: "Conditional Rendering",
  slug: "react-conditional-rendering",
  description:
    "Menampilkan UI berbeda berdasarkan state seperti empty, success, atau error.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan conditional rendering sebagai UI yang mengikuti state",
    "Memakai union status sederhana untuk state UI",
    "Menampilkan empty, success, dan error view",
  ],
  skillTags: ["React", "Conditional Rendering", "UI State"],
  blocks: [
    {
      id: "react-conditional-rendering-intro",
      type: "text",
      title: "UI sering berganti bentuk",
      content:
        "React component tidak selalu menampilkan hal yang sama. Saat data kosong, UI bisa menampilkan empty state. Saat data tersedia, UI menampilkan konten. Saat ada masalah, UI menampilkan pesan error.\n\nConditional rendering berarti JSX yang ditampilkan dipilih berdasarkan state. Ini membuat component bisa menjawab: status sekarang apa, lalu UI apa yang harus terlihat?",
    },
    {
      id: "react-conditional-rendering-example",
      type: "code-example",
      title: "Status menentukan UI",
      language: "tsx",
      code: `import { useState } from "react";

type Status = "empty" | "success" | "error";

function LessonStatusPanel() {
  const [status, setStatus] = useState<Status>("empty");

  return (
    <section>
      {status === "empty" ? <p>Belum ada lesson dipilih.</p> : null}
      {status === "success" ? <p>Lesson siap dipelajari.</p> : null}
      {status === "error" ? <p>Lesson gagal dimuat.</p> : null}
      <button type="button" onClick={() => setStatus("success")}>
        Tampilkan lesson
      </button>
    </section>
  );
}`,
      explanation:
        "Setiap branch membaca status yang sama. Saat status berubah, React menghitung ulang JSX yang harus ditampilkan.",
    },
    {
      id: "react-conditional-rendering-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Mulai dari state yang jelas",
      content:
        "Sebelum menulis banyak ternary, tentukan dulu status yang mungkin terjadi. Untuk UI awal, string union seperti `empty`, `success`, dan `error` sering cukup jelas.",
    },
    {
      id: "react-conditional-rendering-coding-practice",
      type: "coding-practice",
      challengeId: "render-conditional-ui-states",
    },
    {
      id: "react-conditional-rendering-quick-check",
      type: "quick-check",
      question: "Apa tujuan conditional rendering?",
      options: [
        "Menampilkan UI berbeda berdasarkan state atau data",
        "Menghapus kebutuhan component",
        "Menjalankan CSS di server",
        "Mengganti semua props dengan global variable",
      ],
      correctAnswer: "Menampilkan UI berbeda berdasarkan state atau data",
      explanation:
        "Conditional rendering memilih JSX yang terlihat berdasarkan kondisi tertentu.",
    },
    {
      id: "react-conditional-rendering-summary",
      type: "summary",
      points: [
        "Conditional rendering memilih UI berdasarkan state.",
        "Status yang jelas membuat branch UI lebih mudah dibaca.",
        "Ternary dan `&&` berguna, tetapi jangan sampai membuat JSX sulit diikuti.",
        "Branch empty, success, dan error adalah pola umum UI.",
        "Berikutnya, kamu akan merender banyak item dari array.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-conditional-rendering-intro",
      "react-conditional-rendering-example",
      "react-conditional-rendering-decision-rule",
      "react-conditional-rendering-coding-practice",
      "react-conditional-rendering-quick-check",
      "react-conditional-rendering-summary",
    ],
  },
};

export const reactListsAndKeysLesson: Lesson = {
  id: "react-lists-and-keys",
  trackId: "frontend-engineering",
  moduleId: "react-state-events-rendering",
  title: "Lists and Keys",
  slug: "react-lists-and-keys",
  description:
    "Merender array menjadi list UI dengan map dan key yang stabil.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Merender array dengan map",
    "Memakai key stabil pada list item",
    "Menghindari index sebagai key saat data punya id",
  ],
  skillTags: ["React", "Lists", "Keys"],
  blocks: [
    {
      id: "react-lists-and-keys-intro",
      type: "text",
      title: "Banyak UI berasal dari array",
      content:
        "Daftar lesson, komentar, notifikasi, task, dan produk biasanya disimpan sebagai array. Di React, array diubah menjadi JSX dengan `map`.\n\nSaat merender list, setiap item perlu `key`. Key membantu React mengenali item mana yang sama saat list berubah. Jika data punya `id`, gunakan `id` sebagai key.",
    },
    {
      id: "react-lists-and-keys-example",
      type: "code-example",
      title: "Render lesson cards",
      language: "tsx",
      code: `type Lesson = {
  id: string;
  title: string;
  minutes: number;
};

const lessons: Lesson[] = [
  { id: "state", title: "useState Dasar", minutes: 35 },
  { id: "events", title: "Event Handling", minutes: 40 },
];

function LessonList() {
  return (
    <section>
      {lessons.map((lesson) => (
        <article key={lesson.id}>
          <h2>{lesson.title}</h2>
          <p>{lesson.minutes} menit</p>
        </article>
      ))}
    </section>
  );
}`,
      explanation:
        "`map` mengubah setiap lesson menjadi card. `key={lesson.id}` memberi identitas stabil untuk setiap item.",
    },
    {
      id: "react-lists-and-keys-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan pakai index jika item punya id",
      content:
        "Index array terlihat mudah, tetapi bisa membuat UI sulit diprediksi saat item berubah urutan, ditambah, atau dihapus. Jika data punya `id`, pakai `id` sebagai key.",
    },
    {
      id: "react-lists-and-keys-coding-practice",
      type: "coding-practice",
      challengeId: "render-react-list-with-keys",
    },
    {
      id: "react-lists-and-keys-summary",
      type: "summary",
      points: [
        "`map` mengubah array menjadi list JSX.",
        "Setiap item list perlu key.",
        "Key sebaiknya stabil dan berasal dari data, misalnya `id`.",
        "Hindari index sebagai key jika data punya identitas sendiri.",
        "Berikutnya, kamu akan menghitung display dari state yang sudah ada.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-lists-and-keys-intro",
      "react-lists-and-keys-example",
      "react-lists-and-keys-common-mistake",
      "react-lists-and-keys-coding-practice",
      "react-lists-and-keys-summary",
    ],
  },
};

export const reactDerivedDisplayLesson: Lesson = {
  id: "react-derived-display",
  trackId: "frontend-engineering",
  moduleId: "react-state-events-rendering",
  title: "Derived Display",
  slug: "react-derived-display",
  description:
    "Menghitung tampilan dari state yang sudah ada agar state tidak perlu diduplikasi.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan derived display sebagai nilai hasil hitung dari state/data",
    "Menghindari duplicate state yang tidak perlu",
    "Menampilkan count, filter, dan summary dari state yang ada",
  ],
  skillTags: ["React", "Derived State", "Rendering"],
  blocks: [
    {
      id: "react-derived-display-intro",
      type: "text",
      title: "Tidak semua value perlu menjadi state",
      content:
        "Saat UI makin interaktif, mudah tergoda menyimpan semua hal sebagai state: query, list yang sudah difilter, jumlah item, dan summary text. Padahal sebagian value bisa dihitung dari state yang sudah ada.\n\nDerived display adalah value tampilan yang dihitung saat render. Jika value bisa dihitung dari state atau props yang sudah tersedia, biasanya tidak perlu disimpan sebagai state terpisah.",
    },
    {
      id: "react-derived-display-case-study",
      type: "code-example",
      title: "Filter dan count dari state yang sama",
      language: "tsx",
      code: `import { useState } from "react";

const lessons = [
  { id: "state", title: "useState Dasar", completed: true },
  { id: "events", title: "Event Handling", completed: false },
];

function LessonSummary() {
  const [query, setQuery] = useState("");
  const visibleLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(query.toLowerCase()),
  );
  const completedCount = visibleLessons.filter((lesson) => lesson.completed).length;

  return <p>{completedCount} dari {visibleLessons.length} lesson selesai.</p>;
}`,
      explanation:
        "`visibleLessons` dan `completedCount` dihitung dari `query` dan `lessons`. Keduanya tidak perlu state sendiri.",
    },
    {
      id: "react-derived-display-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Simpan sumbernya, hitung tampilannya",
      content:
        "Jika sebuah value bisa dihitung dari state lain tanpa efek samping, hitung saja saat render. Simpan state untuk input user, pilihan aktif, data yang berubah, atau status UI yang memang tidak bisa diturunkan dari value lain.",
    },
    {
      id: "react-derived-display-coding-practice",
      type: "coding-practice",
      challengeId: "refactor-derived-display-values",
    },
    {
      id: "react-derived-display-summary",
      type: "summary",
      points: [
        "Derived display dihitung dari state atau props yang sudah ada.",
        "Tidak semua nilai tampilan perlu disimpan sebagai state.",
        "Duplicate state bisa membuat UI tidak sinkron.",
        "Filter, count, dan summary text sering bisa dihitung saat render.",
        "Berikutnya, Uji Kompetensi mengecek state, events, conditional rendering, lists, keys, dan derived display.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-derived-display-intro",
      "react-derived-display-case-study",
      "react-derived-display-decision-rule",
      "react-derived-display-coding-practice",
      "react-derived-display-summary",
    ],
  },
};

export const reactStateEventsRenderingAssessmentLesson: Lesson = {
  id: "react-state-events-rendering-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-state-events-rendering",
  title: "Uji Kompetensi State, Events, and Rendering",
  slug: "react-state-events-rendering-assessment",
  description:
    "Checkpoint kesiapan membangun UI React kecil dengan state, event handler, conditional rendering, list, keys, dan derived display.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 85,
  objectives: [
    "Mengecek pemahaman state dan event handler React",
    "Merender conditional UI dan list dengan key",
    "Menghitung display dari state yang sudah ada tanpa duplicate state",
  ],
  skillTags: ["React", "State", "Events", "Assessment"],
  blocks: [
    {
      id: "react-state-events-rendering-assessment-recap",
      type: "text",
      title: "Checkpoint: apakah UI kamu bisa merespons interaksi?",
      content:
        "Uji Kompetensi ini mengecek dasar interaksi React. Kamu akan memakai `useState`, event handler, conditional rendering, list rendering, key, dan derived display dalam satu konteks kecil.\n\nKamu belum perlu memakai `useEffect`, data fetching, reducer, context, atau library state. Fokusnya adalah UI yang berubah karena state dan tetap mudah dibaca.",
    },
    {
      id: "react-state-events-rendering-assessment-quiz",
      type: "quiz",
      quizId: "react-state-events-rendering-assessment-quiz",
    },
    {
      id: "react-state-events-rendering-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-interactive-list-checkpoint",
    },
    {
      id: "react-state-events-rendering-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis penjelasan singkat tentang UI interaktif yang kamu bangun. Jelaskan state apa yang disimpan, event apa yang mengubah state, list apa yang dirender, dan display apa yang dihitung dari state.\n\nGunakan format:\n- State yang disimpan:\n- Event handler:\n- List dan key:\n- Derived display:\n- Hal yang sengaja belum memakai useEffect:",
      placeholder:
        "State yang disimpan: selectedCategory.\nEvent handler: button filter mengubah selectedCategory.\nList dan key: visibleLessons dirender dengan key lesson.id.\nDerived display: completedCount dihitung dari visibleLessons.\nHal yang belum memakai useEffect: data masih lokal.",
      minimumCharacters: 200,
      checklist: [
        "Menyebut state yang disimpan.",
        "Menyebut event handler yang mengubah state.",
        "Menyebut list dan key yang dipakai.",
        "Menjelaskan derived display.",
        "Tidak memakai useEffect untuk masalah yang belum membutuhkan effect.",
      ],
      modelAnswer:
        "State yang disimpan adalah selectedCategory karena pilihan filter berubah saat user klik button. Event handler pada button memanggil setSelectedCategory. List yang dirender adalah visibleLessons dan key memakai lesson.id. Derived display berupa completedCount dihitung dari visibleLessons, bukan disimpan sebagai state terpisah. Saya belum memakai useEffect karena data masih lokal dan belum ada sinkronisasi dengan sistem luar.",
    },
    {
      id: "react-state-events-rendering-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge state dan rendering",
      description:
        "Baca dokumentasi React resmi untuk memperkuat dasar interaksi. Fokus pada state, event, conditional rendering, list, dan struktur state.",
      links: [
        {
          source: "React Learn",
          title: "State: A Component's Memory",
          url: "https://react.dev/learn/state-a-components-memory",
          focus: ["useState", "state sebagai memory component", "setter function"],
          ignoreForNow: ["useReducer", "state management library", "performance optimization"],
        },
        {
          source: "React Learn",
          title: "Responding to Events",
          url: "https://react.dev/learn/responding-to-events",
          focus: ["event handler", "onClick", "mengirim function ke event"],
          ignoreForNow: ["event propagation detail", "advanced event patterns"],
        },
        {
          source: "React Learn",
          title: "Conditional Rendering",
          url: "https://react.dev/learn/conditional-rendering",
          focus: ["branch UI", "ternary", "conditional return"],
          ignoreForNow: ["advanced composition pattern"],
        },
        {
          source: "React Learn",
          title: "Rendering Lists",
          url: "https://react.dev/learn/rendering-lists",
          focus: ["map", "key", "stable id"],
          ignoreForNow: ["complex list virtualization", "performance tuning"],
        },
        {
          source: "React Learn",
          title: "Choosing the State Structure",
          url: "https://react.dev/learn/choosing-the-state-structure",
          focus: ["avoid redundant state", "avoid duplicated state", "derive values when possible"],
          ignoreForNow: ["deep state normalization", "reducer refactor"],
        },
      ],
      followUpAction:
        "Buka State: A Component's Memory dan Rendering Lists, lalu bandingkan contoh docs dengan checkpoint list UI kamu.",
    },
    {
      id: "react-state-events-rendering-assessment-summary",
      type: "summary",
      points: [
        "State menyimpan value yang berubah dan memengaruhi render.",
        "Event handler mengubah state saat user berinteraksi.",
        "Conditional rendering menampilkan UI berbeda berdasarkan state.",
        "List rendering memakai map dan key stabil.",
        "Berikutnya, Forms and Composition akan memakai state dan event untuk controlled input dan form submit.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-state-events-rendering-assessment-recap",
      "react-state-events-rendering-assessment-quiz",
      "react-state-events-rendering-assessment-coding-practice",
      "react-state-events-rendering-assessment-writing-practice",
      "react-state-events-rendering-assessment-docs",
      "react-state-events-rendering-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactStateEventsRenderingAssessmentQuiz: Quiz = {
  id: "react-state-events-rendering-assessment-quiz",
  lessonId: "react-state-events-rendering-assessment",
  title: "Uji Kompetensi State, Events, and Rendering",
  passingScore: 70,
  questions: [
    {
      id: "react-state-events-rendering-q1",
      type: "multiple-choice",
      question: "Apa fungsi utama `useState` di React?",
      options: [
        "Menyimpan value yang berubah dan memicu render ulang saat diupdate",
        "Menghapus semua props",
        "Menjalankan fetch otomatis",
        "Mengubah CSS menjadi global",
      ],
      correctAnswer: "Menyimpan value yang berubah dan memicu render ulang saat diupdate",
      explanation:
        "`useState` memberi component memory kecil untuk value yang memengaruhi UI.",
    },
    {
      id: "react-state-events-rendering-q2",
      type: "multiple-choice",
      question: "Bentuk event handler click yang benar adalah...",
      options: ["onClick={handleClick}", "onclick=\"handleClick()\"", "onClick={handleClick()}", "click={handleClick}"],
      correctAnswer: "onClick={handleClick}",
      explanation:
        "React memakai camelCase event dan menerima function reference untuk dijalankan saat event terjadi.",
    },
    {
      id: "react-state-events-rendering-q3",
      type: "true-false",
      question:
        "Conditional rendering berarti component bisa menampilkan JSX berbeda berdasarkan state atau data.",
      correctAnswer: true,
      explanation:
        "Conditional rendering memilih UI berdasarkan kondisi, misalnya empty, success, atau error.",
    },
    {
      id: "react-state-events-rendering-q4",
      type: "multiple-choice",
      question: "Saat render list dari array yang punya `id`, key sebaiknya memakai...",
      options: ["item.id", "index array", "Math.random()", "judul halaman"],
      correctAnswer: "item.id",
      explanation:
        "Key yang stabil dari data membantu React mengenali item yang sama saat list berubah.",
    },
    {
      id: "react-state-events-rendering-q5",
      type: "multiple-choice",
      question: "Contoh derived display yang baik adalah...",
      options: [
        "completedCount dihitung dari visibleLessons",
        "completedCount disimpan terpisah padahal selalu bisa dihitung",
        "query dan filtered query disimpan tanpa alasan",
        "semua value dijadikan state",
      ],
      correctAnswer: "completedCount dihitung dari visibleLessons",
      explanation:
        "Jika count bisa dihitung dari data yang sudah ada, lebih aman menghitungnya saat render daripada menyimpan duplicate state.",
    },
  ],
};

const reactStatePracticePreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React State</h1>
  <p>Fokus di tab TSX, lalu jalankan preview untuk mencoba interaksinya.</p>
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

export const buildReactCounterToggleChallenge: CodingChallenge = {
  id: "build-react-counter-toggle",
  lessonId: "react-use-state-basics",
  title: "Buat counter dan toggle dengan useState",
  description:
    "Latihan memakai dua state kecil: count untuk angka dan isOpen untuk status panel.",
  instructions: [
    "Fokus di tab TSX.",
    "Import useState dari react.",
    "Buat state count dengan nilai awal 0.",
    "Buat state isOpen dengan nilai awal false.",
    "Tambahkan button untuk menaikkan count dan button untuk toggle panel.",
  ],
  starterCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

function CounterToggle() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-toggle">
      <p>Jumlah klik: {count}</p>
      <button type="button">Tambah</button>
      <p>Status panel: Tertutup</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

function CounterToggle() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="counter-toggle">
      <p>Jumlah klik: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Tambah
      </button>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle panel
      </button>
      <p>Status panel: {isOpen ? "Terbuka" : "Tertutup"}</p>
    </section>
  );
}`,
  },
  checklist: [
    "count dibuat dengan useState.",
    "isOpen dibuat dengan useState.",
    "Button count memanggil setCount.",
    "Button toggle memanggil setIsOpen.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "CounterToggle",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "import-use-state", label: "useState diimport.", type: "contains", target: `import { useState } from "react";`, valueIncludes: `import { useState } from "react";` },
      { id: "count-state", label: "count state dibuat.", type: "contains", target: "const [count, setCount] = useState(0);", valueIncludes: "const [count, setCount] = useState(0);" },
      { id: "open-state", label: "isOpen state dibuat.", type: "contains", target: "const [isOpen, setIsOpen] = useState(false);", valueIncludes: "const [isOpen, setIsOpen] = useState(false);" },
      { id: "count-click", label: "Button count menaikkan count.", type: "contains", target: "onClick={() => setCount(count + 1)}", valueIncludes: "onClick={() => setCount(count + 1)}" },
      { id: "toggle-click", label: "Button toggle mengubah isOpen.", type: "contains", target: "onClick={() => setIsOpen(!isOpen)}", valueIncludes: "onClick={() => setIsOpen(!isOpen)}" },
      { id: "open-label", label: "Status panel memakai isOpen.", type: "contains", target: `{isOpen ? "Terbuka" : "Tertutup"}`, valueIncludes: `{isOpen ? "Terbuka" : "Tertutup"}` },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Component memakai useState untuk counter dan toggle. Jalankan preview lalu coba kedua button.",
    lines: [
      "Klik Tambah seharusnya menaikkan count.",
      "Klik Toggle panel seharusnya mengganti label Terbuka/Tertutup.",
      "State diubah lewat setter, bukan assignment langsung.",
    ],
  },
  skillTags: ["React", "useState", "State"],
};

export const addButtonInputInteractionsChallenge: CodingChallenge = {
  id: "add-button-input-interactions",
  lessonId: "react-event-handling",
  title: "Tambahkan button dan input interactions",
  description:
    "Latihan memasang onClick dan onChange untuk mengubah state dari aksi user.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat state name dan savedName.",
    "Buat handleSave untuk menyimpan name ke savedName.",
    "Hubungkan input dengan value dan onChange.",
    "Hubungkan button Simpan dengan onClick.",
  ],
  starterCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

function NameInteraction() {
  const [name, setName] = useState("");

  return (
    <section className="name-interaction">
      <label>
        Nama
        <input value={name} />
      </label>
      <button type="button">Simpan</button>
      <p>Nama tersimpan: belum ada</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

function NameInteraction() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  function handleSave() {
    setSavedName(name);
  }

  return (
    <section className="name-interaction">
      <label>
        Nama
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <button type="button" onClick={handleSave}>
        Simpan
      </button>
      <p>Nama tersimpan: {savedName || "belum ada"}</p>
    </section>
  );
}`,
  },
  checklist: [
    "Input controlled memakai value dari state.",
    "onChange mengupdate name.",
    "Button onClick menjalankan handleSave.",
    "savedName ditampilkan dengan fallback.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "NameInteraction",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "name-state", label: "name state dibuat.", type: "contains", target: `const [name, setName] = useState("");`, valueIncludes: `const [name, setName] = useState("");` },
      { id: "saved-state", label: "savedName state dibuat.", type: "contains", target: `const [savedName, setSavedName] = useState("");`, valueIncludes: `const [savedName, setSavedName] = useState("");` },
      { id: "handle-save", label: "handleSave dibuat.", type: "contains", target: "function handleSave()", valueIncludes: "function handleSave()" },
      { id: "save-name", label: "handleSave memanggil setSavedName.", type: "contains", target: "setSavedName(name);", valueIncludes: "setSavedName(name);" },
      { id: "input-change", label: "Input memakai onChange.", type: "contains", target: "onChange={(event) => setName(event.target.value)}", valueIncludes: "onChange={(event) => setName(event.target.value)}" },
      { id: "button-click", label: "Button memakai onClick handler.", type: "contains", target: "onClick={handleSave}", valueIncludes: "onClick={handleSave}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Input mengubah name, lalu button menyimpan name ke savedName. Jalankan preview untuk mencoba flow ini.",
    lines: [
      "Input controlled memakai value dan onChange.",
      "Button Simpan menjalankan handleSave.",
      "Nama tersimpan memakai savedName dengan fallback.",
    ],
  },
  skillTags: ["React", "Events", "Input"],
};

export const renderConditionalUiStatesChallenge: CodingChallenge = {
  id: "render-conditional-ui-states",
  lessonId: "react-conditional-rendering",
  title: "Render UI berdasarkan status",
  description:
    "Latihan menampilkan empty, success, dan error UI dari satu state status.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat type Status berisi empty, success, dan error.",
    "Buat state status dengan nilai awal empty.",
    "Tambahkan button untuk mengubah status.",
    "Render pesan berbeda untuk empty, success, dan error.",
  ],
  starterCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

type Status = "empty" | "success" | "error";

function StatusPanel() {
  const [status, setStatus] = useState<Status>("empty");

  return (
    <section className="status-panel">
      <button type="button">Tampilkan lesson</button>
      <button type="button">Tampilkan error</button>
      <p>Status saat ini: {status}</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

type Status = "empty" | "success" | "error";

function StatusPanel() {
  const [status, setStatus] = useState<Status>("empty");

  return (
    <section className="status-panel">
      <button type="button" onClick={() => setStatus("success")}>
        Tampilkan lesson
      </button>
      <button type="button" onClick={() => setStatus("error")}>
        Tampilkan error
      </button>
      {status === "empty" ? <p>Belum ada lesson dipilih.</p> : null}
      {status === "success" ? <p>Lesson siap dipelajari.</p> : null}
      {status === "error" ? <p>Lesson gagal dimuat.</p> : null}
    </section>
  );
}`,
  },
  checklist: [
    "Status dibatasi dengan union type.",
    "Button mengubah status.",
    "Setiap status punya branch UI.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "StatusPanel",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "status-type", label: "Status union dibuat.", type: "contains", target: `type Status = "empty" | "success" | "error";`, valueIncludes: `type Status = "empty" | "success" | "error";` },
      { id: "status-state", label: "status state dibuat.", type: "contains", target: `const [status, setStatus] = useState<Status>("empty");`, valueIncludes: `const [status, setStatus] = useState<Status>("empty");` },
      { id: "success-click", label: "Button success mengubah status.", type: "contains", target: `onClick={() => setStatus("success")}`, valueIncludes: `onClick={() => setStatus("success")}` },
      { id: "error-click", label: "Button error mengubah status.", type: "contains", target: `onClick={() => setStatus("error")}`, valueIncludes: `onClick={() => setStatus("error")}` },
      { id: "empty-branch", label: "Empty branch dirender.", type: "contains", target: `status === "empty"`, valueIncludes: `status === "empty"` },
      { id: "success-branch", label: "Success branch dirender.", type: "contains", target: `status === "success"`, valueIncludes: `status === "success"` },
      { id: "error-branch", label: "Error branch dirender.", type: "contains", target: `status === "error"`, valueIncludes: `status === "error"` },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Status menentukan branch UI yang terlihat. Jalankan preview lalu coba kedua button status.",
    lines: [
      "Status awal empty menampilkan pesan kosong.",
      "Button success menampilkan pesan lesson siap.",
      "Button error menampilkan pesan gagal.",
    ],
  },
  skillTags: ["React", "Conditional Rendering", "UI State"],
};

export const renderReactListWithKeysChallenge: CodingChallenge = {
  id: "render-react-list-with-keys",
  lessonId: "react-lists-and-keys",
  title: "Render list dengan map dan key",
  description:
    "Latihan mengubah array lesson menjadi list card dengan key stabil.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat type LessonItem.",
    "Pastikan lessons bertipe LessonItem[].",
    "Render lessons dengan map.",
    "Gunakan key dari lesson.id.",
  ],
  starterCode: {
    ...reactStatePracticePreviewCode,
    tsx: `type LessonItem = {
  id: string;
  title: string;
  minutes: number;
};

const lessons: LessonItem[] = [
  { id: "state", title: "useState Dasar", minutes: 35 },
  { id: "events", title: "Event Handling", minutes: 40 },
];

function LessonList() {
  return (
    <section className="lesson-list">
      <p>Render daftar lesson di sini.</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStatePracticePreviewCode,
    tsx: `type LessonItem = {
  id: string;
  title: string;
  minutes: number;
};

const lessons: LessonItem[] = [
  { id: "state", title: "useState Dasar", minutes: 35 },
  { id: "events", title: "Event Handling", minutes: 40 },
];

function LessonList() {
  return (
    <section className="lesson-list">
      {lessons.map((lesson) => (
        <article key={lesson.id} className="lesson-card">
          <h2>{lesson.title}</h2>
          <p>{lesson.minutes} menit</p>
        </article>
      ))}
    </section>
  );
}`,
  },
  checklist: [
    "Array lessons punya type.",
    "map dipakai untuk render list.",
    "key memakai lesson.id.",
    "Setiap card menampilkan title dan minutes.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonList",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "lesson-item-type", label: "LessonItem type dibuat.", type: "contains", target: "type LessonItem = {", valueIncludes: "type LessonItem = {" },
      { id: "lessons-array", label: "lessons memakai LessonItem[].", type: "contains", target: "const lessons: LessonItem[] =", valueIncludes: "const lessons: LessonItem[] =" },
      { id: "map-lessons", label: "lessons dirender dengan map.", type: "contains", target: "lessons.map((lesson) => (", valueIncludes: "lessons.map((lesson) => (" },
      { id: "key-id", label: "key memakai lesson.id.", type: "contains", target: "key={lesson.id}", valueIncludes: "key={lesson.id}" },
      { id: "lesson-card", label: "Item list memakai card.", type: "contains", target: `className="lesson-card"`, valueIncludes: `className="lesson-card"` },
      { id: "minutes-label", label: "Minutes ditampilkan.", type: "contains", target: "{lesson.minutes} menit", valueIncludes: "{lesson.minutes} menit" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Array lessons dirender menjadi list card dengan key stabil. Jalankan preview untuk melihat hasil map.",
    lines: [
      "Setiap lesson menjadi article card.",
      "Key memakai lesson.id, bukan index.",
      "Title dan durasi lesson tampil di setiap card.",
    ],
  },
  skillTags: ["React", "Lists", "Keys"],
};

export const refactorDerivedDisplayValuesChallenge: CodingChallenge = {
  id: "refactor-derived-display-values",
  lessonId: "react-derived-display",
  title: "Hitung display dari state yang ada",
  description:
    "Latihan membuat filtered list, count, dan summary text sebagai derived display.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat state query untuk input filter.",
    "Hitung visibleLessons dari lessons dan query.",
    "Hitung completedCount dari visibleLessons.",
    "Tampilkan summaryText dari completedCount dan visibleLessons.length.",
  ],
  starterCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

const lessons = [
  { id: "state", title: "useState Dasar", completed: true },
  { id: "events", title: "Event Handling", completed: false },
  { id: "lists", title: "Lists and Keys", completed: false },
];

function LessonProgressSummary() {
  const [query, setQuery] = useState("");

  return (
    <section className="lesson-summary">
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <p>Hitung summary dari lessons dan query.</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

const lessons = [
  { id: "state", title: "useState Dasar", completed: true },
  { id: "events", title: "Event Handling", completed: false },
  { id: "lists", title: "Lists and Keys", completed: false },
];

function LessonProgressSummary() {
  const [query, setQuery] = useState("");
  const visibleLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(query.toLowerCase()),
  );
  const completedCount = visibleLessons.filter((lesson) => lesson.completed).length;
  const summaryText = completedCount + " dari " + visibleLessons.length + " lesson selesai";

  return (
    <section className="lesson-summary">
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <p>{summaryText}</p>
    </section>
  );
}`,
  },
  checklist: [
    "query menjadi satu-satunya state untuk filter.",
    "visibleLessons dihitung dari lessons dan query.",
    "completedCount dihitung dari visibleLessons.",
    "summaryText dihitung dari count dan visibleLessons.length.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonProgressSummary",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "query-state", label: "query state dibuat.", type: "contains", target: `const [query, setQuery] = useState("");`, valueIncludes: `const [query, setQuery] = useState("");` },
      { id: "visible-lessons", label: "visibleLessons dihitung dengan filter.", type: "contains", target: "const visibleLessons = lessons.filter((lesson) =>", valueIncludes: "const visibleLessons = lessons.filter((lesson) =>" },
      { id: "query-filter", label: "Filter memakai query lowercase.", type: "contains", target: "includes(query.toLowerCase())", valueIncludes: "includes(query.toLowerCase())" },
      { id: "completed-count", label: "completedCount dihitung dari visibleLessons.", type: "contains", target: "const completedCount = visibleLessons.filter((lesson) => lesson.completed).length;", valueIncludes: "const completedCount = visibleLessons.filter((lesson) => lesson.completed).length;" },
      { id: "summary-text", label: "summaryText dihitung.", type: "contains", target: "const summaryText = completedCount +", valueIncludes: "const summaryText = completedCount +" },
      { id: "summary-render", label: "summaryText dirender.", type: "contains", target: "{summaryText}", valueIncludes: "{summaryText}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Filter, count, dan summary dihitung dari data yang sudah ada. Jalankan preview lalu isi input filter.",
    lines: [
      "query disimpan sebagai state karena berubah dari input.",
      "visibleLessons dihitung dari lessons dan query.",
      "completedCount dan summaryText tidak disimpan sebagai state terpisah.",
    ],
  },
  skillTags: ["React", "Derived Display", "State Structure"],
};

export const buildInteractiveListCheckpointChallenge: CodingChallenge = {
  id: "build-interactive-list-checkpoint",
  lessonId: "react-state-events-rendering-assessment",
  title: "Bangun interactive list checkpoint",
  description:
    "Latihan akhir membuat list UI kecil dengan filter state, event handler, key, dan derived display.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat Category union dan LessonItem type.",
    "Buat selectedCategory state.",
    "Hitung visibleLessons dari selectedCategory.",
    "Render visibleLessons dengan key lesson.id.",
    "Hitung completedCount dari visibleLessons.",
  ],
  starterCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

type Category = "all" | "required" | "optional";

type LessonItem = {
  id: string;
  title: string;
  category: "required" | "optional";
  completed: boolean;
};

const lessons: LessonItem[] = [
  { id: "state", title: "useState Dasar", category: "required", completed: true },
  { id: "events", title: "Event Handling", category: "required", completed: false },
  { id: "extra", title: "Catatan tambahan", category: "optional", completed: false },
];

function StateEventsCheckpoint() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  return (
    <section className="state-events-checkpoint">
      <button type="button">Semua</button>
      <button type="button">Wajib</button>
      <button type="button">Opsional</button>
      <p>Kategori aktif: {selectedCategory}</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactStatePracticePreviewCode,
    tsx: `import { useState } from "react";

type Category = "all" | "required" | "optional";

type LessonItem = {
  id: string;
  title: string;
  category: "required" | "optional";
  completed: boolean;
};

const lessons: LessonItem[] = [
  { id: "state", title: "useState Dasar", category: "required", completed: true },
  { id: "events", title: "Event Handling", category: "required", completed: false },
  { id: "extra", title: "Catatan tambahan", category: "optional", completed: false },
];

function StateEventsCheckpoint() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const visibleLessons = lessons.filter((lesson) =>
    selectedCategory === "all" ? true : lesson.category === selectedCategory,
  );
  const completedCount = visibleLessons.filter((lesson) => lesson.completed).length;

  return (
    <section className="state-events-checkpoint">
      <button type="button" onClick={() => setSelectedCategory("all")}>
        Semua
      </button>
      <button type="button" onClick={() => setSelectedCategory("required")}>
        Wajib
      </button>
      <button type="button" onClick={() => setSelectedCategory("optional")}>
        Opsional
      </button>
      <p>{completedCount} dari {visibleLessons.length} lesson selesai.</p>
      {visibleLessons.map((lesson) => (
        <article key={lesson.id} className="lesson-card">
          <h2>{lesson.title}</h2>
          <p>{lesson.completed ? "Selesai" : "Belum selesai"}</p>
        </article>
      ))}
    </section>
  );
}`,
  },
  checklist: [
    "selectedCategory menyimpan filter aktif.",
    "Button mengubah selectedCategory.",
    "visibleLessons dihitung dari selectedCategory.",
    "List dirender dengan key stabil.",
    "completedCount dihitung dari visibleLessons.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "StateEventsCheckpoint",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "category-type", label: "Category union dibuat.", type: "contains", target: `type Category = "all" | "required" | "optional";`, valueIncludes: `type Category = "all" | "required" | "optional";` },
      { id: "lesson-item-type", label: "LessonItem type dibuat.", type: "contains", target: "type LessonItem = {", valueIncludes: "type LessonItem = {" },
      { id: "selected-state", label: "selectedCategory state dibuat.", type: "contains", target: `const [selectedCategory, setSelectedCategory] = useState<Category>("all");`, valueIncludes: `const [selectedCategory, setSelectedCategory] = useState<Category>("all");` },
      { id: "visible-lessons", label: "visibleLessons dihitung.", type: "contains", target: "const visibleLessons = lessons.filter((lesson) =>", valueIncludes: "const visibleLessons = lessons.filter((lesson) =>" },
      { id: "required-button", label: "Button Wajib mengubah category.", type: "contains", target: `onClick={() => setSelectedCategory("required")}`, valueIncludes: `onClick={() => setSelectedCategory("required")}` },
      { id: "optional-button", label: "Button Opsional mengubah category.", type: "contains", target: `onClick={() => setSelectedCategory("optional")}`, valueIncludes: `onClick={() => setSelectedCategory("optional")}` },
      { id: "completed-count", label: "completedCount dihitung dari visibleLessons.", type: "contains", target: "const completedCount = visibleLessons.filter((lesson) => lesson.completed).length;", valueIncludes: "const completedCount = visibleLessons.filter((lesson) => lesson.completed).length;" },
      { id: "list-map", label: "visibleLessons dirender dengan map.", type: "contains", target: "visibleLessons.map((lesson) => (", valueIncludes: "visibleLessons.map((lesson) => (" },
      { id: "stable-key", label: "key memakai lesson.id.", type: "contains", target: "key={lesson.id}", valueIncludes: "key={lesson.id}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Checkpoint menggabungkan state, events, filtering, list rendering, keys, dan derived display. Jalankan preview lalu coba filter category.",
    lines: [
      "Filter category berubah saat button diklik.",
      "visibleLessons dihitung dari selectedCategory.",
      "List memakai key={lesson.id}.",
      "completedCount dihitung dari visibleLessons, bukan duplicate state.",
    ],
  },
  skillTags: ["React", "State", "Events", "Assessment"],
};
