import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const reactFormsCompositionModule: Module = {
  id: "react-forms-composition",
  trackId: "frontend-engineering",
  title: "Forms and Composition",
  slug: "react-forms-composition",
  description:
    "Membangun controlled form sederhana, menangani submit, menyusun component kecil, dan memindahkan state saat benar-benar perlu dibagi.",
  order: 23,
  lessonIds: [
    "react-controlled-inputs",
    "react-form-submit",
    "react-composition-patterns",
    "react-lifting-state-when-needed",
    "react-forms-composition-assessment",
  ],
  estimatedHours: 5,
  skillTags: ["React", "Forms", "Composition", "State"],
};

export const reactControlledInputsLesson: Lesson = {
  id: "react-controlled-inputs",
  trackId: "frontend-engineering",
  moduleId: "react-forms-composition",
  title: "Controlled Inputs",
  slug: "react-controlled-inputs",
  description:
    "Menghubungkan value input dengan state agar React menjadi sumber kebenaran untuk field form.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan controlled input sebagai input yang value-nya dikendalikan state",
    "Menghubungkan value input ke state",
    "Memakai onChange untuk memperbarui state saat user mengetik",
  ],
  skillTags: ["React", "Forms", "Controlled Input"],
  blocks: [
    {
      id: "react-controlled-inputs-intro",
      type: "text",
      title: "Input bisa dikendalikan oleh state",
      content:
        "Di HTML biasa, input menyimpan value-nya sendiri di browser. Di React, kita sering membuat controlled input: value input dibaca dari state, lalu setiap perubahan input mengupdate state.\n\nPola ini membuat React tahu isi field saat ini. Nanti saat form disubmit, divalidasi, atau dipakai untuk menampilkan preview, component tidak perlu menebak isi input dari DOM.",
    },
    {
      id: "react-controlled-inputs-example",
      type: "code-example",
      title: "Text input yang mengikuti state",
      language: "tsx",
      code: `import { useState } from "react";

function NameField() {
  const [name, setName] = useState("");

  return (
    <section>
      <label>
        Nama
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <p>Preview: {name || "Belum diisi"}</p>
    </section>
  );
}`,
      explanation:
        "`value={name}` membuat input membaca state. `onChange` menyimpan teks terbaru ke state setiap kali user mengetik.",
    },
    {
      id: "react-controlled-inputs-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan pasang value tanpa onChange",
      content:
        "Jika input punya `value` dari state tetapi tidak punya `onChange`, field bisa terasa terkunci. Untuk controlled input, selalu pikirkan pasangan: value membaca state, onChange mengubah state.",
    },
    {
      id: "react-controlled-inputs-coding-practice",
      type: "coding-practice",
      challengeId: "build-controlled-text-input",
    },
    {
      id: "react-controlled-inputs-quick-check",
      type: "quick-check",
      question: "Apa pasangan utama dalam controlled input React?",
      options: [
        "value dari state dan onChange untuk update state",
        "className dan id",
        "onClick dan key",
        "useEffect dan fetch",
      ],
      correctAnswer: "value dari state dan onChange untuk update state",
      explanation:
        "Controlled input memakai state sebagai sumber value dan onChange untuk menyimpan perubahan terbaru.",
    },
    {
      id: "react-controlled-inputs-summary",
      type: "summary",
      points: [
        "Controlled input adalah input yang value-nya dibaca dari state.",
        "`onChange` menyimpan perubahan input ke state.",
        "Pola value + onChange membuat isi field mudah dipakai untuk preview, submit, atau validasi sederhana.",
        "Input yang punya value tanpa onChange bisa terasa terkunci.",
        "Berikutnya, kamu akan menangani submit form tanpa reload halaman.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-controlled-inputs-intro",
      "react-controlled-inputs-example",
      "react-controlled-inputs-common-mistake",
      "react-controlled-inputs-coding-practice",
      "react-controlled-inputs-quick-check",
      "react-controlled-inputs-summary",
    ],
  },
};

export const reactFormSubmitLesson: Lesson = {
  id: "react-form-submit",
  trackId: "frontend-engineering",
  moduleId: "react-forms-composition",
  title: "Form Submit",
  slug: "react-form-submit",
  description:
    "Menangani submit form React dengan onSubmit, preventDefault, dan update UI dari data form.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Memakai onSubmit pada form",
    "Mencegah reload halaman dengan event.preventDefault",
    "Menambahkan data form ke list state sederhana",
  ],
  skillTags: ["React", "Forms", "Submit"],
  blocks: [
    {
      id: "react-form-submit-intro",
      type: "text",
      title: "Submit form tidak boleh membuat halaman reload",
      content:
        "Form HTML punya perilaku bawaan: saat submit, browser mencoba mengirim form dan memuat ulang halaman. Dalam React app, kita biasanya ingin menangani submit di component, membaca state field, lalu memperbarui UI tanpa reload.\n\nCaranya: pasang `onSubmit` di `<form>`, buat handler, lalu panggil `event.preventDefault()` di awal handler.",
    },
    {
      id: "react-form-submit-example",
      type: "code-example",
      title: "Submit menambahkan item ke list",
      language: "tsx",
      code: `import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, title]);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <button type="submit">Tambah</button>
    </form>
  );
}`,
      explanation:
        "`event.preventDefault()` mencegah reload. Setelah item ditambahkan ke `tasks`, input dikosongkan lagi dengan `setTitle(\"\")`.",
    },
    {
      id: "react-form-submit-troubleshooting",
      type: "callout",
      variant: "warning",
      title: "Button submit berbeda dari button biasa",
      content:
        "Di dalam form, button tanpa `type` bisa dianggap submit. Gunakan `type=\"submit\"` untuk tombol kirim form, dan `type=\"button\"` untuk tombol aksi biasa seperti reset, toggle, atau filter.",
    },
    {
      id: "react-form-submit-coding-practice",
      type: "coding-practice",
      challengeId: "handle-react-form-submit",
    },
    {
      id: "react-form-submit-summary",
      type: "summary",
      points: [
        "Form React biasanya ditangani lewat `onSubmit`.",
        "`event.preventDefault()` mencegah reload halaman.",
        "Data form bisa dipakai untuk update state lain, misalnya menambah item ke list.",
        "Setelah submit, field bisa dikosongkan dengan setter state.",
        "Berikutnya, kamu akan memecah form dan list menjadi component kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-form-submit-intro",
      "react-form-submit-example",
      "react-form-submit-troubleshooting",
      "react-form-submit-coding-practice",
      "react-form-submit-summary",
    ],
  },
};

export const reactCompositionPatternsLesson: Lesson = {
  id: "react-composition-patterns",
  trackId: "frontend-engineering",
  moduleId: "react-forms-composition",
  title: "Composition Patterns",
  slug: "react-composition-patterns",
  description:
    "Menyusun form, list, dan item sebagai component kecil dengan batas tanggung jawab yang jelas.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan composition sebagai menyusun UI dari component kecil",
    "Memisahkan form, list, dan item component",
    "Mengirim data dan handler lewat props secukupnya",
  ],
  skillTags: ["React", "Composition", "Props"],
  blocks: [
    {
      id: "react-composition-patterns-intro",
      type: "text",
      title: "Composition menjaga UI tetap terbaca",
      content:
        "Saat form mulai punya input, tombol, preview, dan list hasil submit, satu component bisa cepat menjadi ramai. Composition berarti kita menyusun UI dari component kecil yang punya tugas jelas.\n\nUntuk form-to-list sederhana, batas yang enak dibaca biasanya: satu component untuk form, satu untuk list, dan satu untuk item. Parent component menyusun semuanya.",
    },
    {
      id: "react-composition-patterns-example",
      type: "code-example",
      title: "Form, list, dan item sebagai component",
      language: "tsx",
      code: `type Note = {
  id: string;
  title: string;
};

function NoteItem({ note }: { note: Note }) {
  return <li>{note.title}</li>;
}

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}`,
      explanation:
        "`NoteList` tidak perlu tahu detail form. `NoteItem` hanya fokus menampilkan satu note. Ini membuat batas component lebih bersih.",
    },
    {
      id: "react-composition-patterns-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Pisahkan karena tanggung jawab, bukan karena jumlah baris",
      content:
        "Component kecil bagus jika membuat maksud UI lebih jelas. Jangan memecah terlalu dini hanya karena file terlihat panjang. Cari batas alami: Form mengumpulkan data, List menampilkan kumpulan data, Item menampilkan satu data.",
    },
    {
      id: "react-composition-patterns-coding-practice",
      type: "coding-practice",
      challengeId: "compose-form-list-components",
    },
    {
      id: "react-composition-patterns-summary",
      type: "summary",
      points: [
        "Composition berarti menyusun UI dari component kecil.",
        "Component yang baik punya tanggung jawab yang mudah dijelaskan.",
        "Form, List, dan Item adalah batas awal yang praktis.",
        "Props menghubungkan component tanpa membuat semua component tahu semua hal.",
        "Berikutnya, kamu akan menentukan kapan state perlu dipindah ke parent.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-composition-patterns-intro",
      "react-composition-patterns-example",
      "react-composition-patterns-decision-rule",
      "react-composition-patterns-coding-practice",
      "react-composition-patterns-summary",
    ],
  },
};

export const reactLiftingStateWhenNeededLesson: Lesson = {
  id: "react-lifting-state-when-needed",
  trackId: "frontend-engineering",
  moduleId: "react-forms-composition",
  title: "Lifting State When Needed",
  slug: "react-lifting-state-when-needed",
  description:
    "Memindahkan state ke parent terdekat saat beberapa component perlu membaca atau mengubah data yang sama.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan alasan state dipindah ke parent",
    "Menentukan closest shared parent untuk state bersama",
    "Mengirim handler dari parent ke child lewat props",
  ],
  skillTags: ["React", "State", "Composition"],
  blocks: [
    {
      id: "react-lifting-state-when-needed-intro",
      type: "text",
      title: "State tinggal di tempat yang membutuhkan kendali",
      content:
        "Tidak semua state harus naik ke parent. Jika state hanya dipakai oleh satu component, biarkan di component itu. Tetapi saat dua component perlu membaca atau mengubah data yang sama, state biasanya dipindah ke parent terdekat yang menaungi keduanya.\n\nIni disebut lifting state up. Tujuannya bukan membuat parent menjadi besar, tetapi membuat sumber data bersama berada di satu tempat yang jelas.",
    },
    {
      id: "react-lifting-state-when-needed-case-study",
      type: "code-example",
      title: "Parent menyimpan notes, child mengirim submit",
      language: "tsx",
      code: `import { useState } from "react";

type Note = {
  id: string;
  title: string;
};

function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handleAddNote(title: string) {
    setNotes([...notes, { id: title.toLowerCase(), title }]);
  }

  return (
    <section>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} />
    </section>
  );
}`,
      explanation:
        "`NotesApp` menyimpan notes karena form perlu menambah note dan list perlu membaca notes. Form cukup menerima handler `onAddNote`.",
    },
    {
      id: "react-lifting-state-when-needed-checklist",
      type: "callout",
      variant: "tip",
      title: "Checklist sebelum mengangkat state",
      content:
        "Tanya tiga hal: component mana yang membaca data ini, component mana yang mengubah data ini, dan parent terdekat mana yang menaungi mereka. Letakkan state di parent itu, lalu kirim data dan handler lewat props.",
    },
    {
      id: "react-lifting-state-when-needed-coding-practice",
      type: "coding-practice",
      challengeId: "lift-form-list-state",
    },
    {
      id: "react-lifting-state-when-needed-quick-check",
      type: "quick-check",
      question: "Kapan state sebaiknya dipindah ke parent?",
      options: [
        "Saat beberapa component perlu membaca atau mengubah data yang sama",
        "Setiap kali component punya lebih dari sepuluh baris",
        "Saat ingin menghindari semua props",
        "Saat component memakai CSS",
      ],
      correctAnswer: "Saat beberapa component perlu membaca atau mengubah data yang sama",
      explanation:
        "State bersama sebaiknya tinggal di closest shared parent agar sumber data tetap satu dan mudah diikuti.",
    },
    {
      id: "react-lifting-state-when-needed-summary",
      type: "summary",
      points: [
        "State lokal tetap lokal jika hanya satu component yang membutuhkannya.",
        "State diangkat ke parent saat beberapa component perlu berbagi data.",
        "Closest shared parent adalah tempat awal yang paling masuk akal.",
        "Child bisa mengubah state parent lewat handler props.",
        "Berikutnya, Uji Kompetensi menggabungkan controlled input, submit, composition, dan state boundary.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-lifting-state-when-needed-intro",
      "react-lifting-state-when-needed-case-study",
      "react-lifting-state-when-needed-checklist",
      "react-lifting-state-when-needed-coding-practice",
      "react-lifting-state-when-needed-quick-check",
      "react-lifting-state-when-needed-summary",
    ],
  },
};

export const reactFormsCompositionAssessmentLesson: Lesson = {
  id: "react-forms-composition-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-forms-composition",
  title: "Uji Kompetensi Forms and Composition",
  slug: "react-forms-composition-assessment",
  description:
    "Checkpoint kesiapan membangun flow form React kecil dengan controlled input, submit, component composition, dan state boundary.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 85,
  objectives: [
    "Mengecek controlled input dan submit handler",
    "Menyusun form, list, dan item component",
    "Menjelaskan alasan state berada di parent atau child",
  ],
  skillTags: ["React", "Forms", "Composition", "Assessment"],
  blocks: [
    {
      id: "react-forms-composition-assessment-recap",
      type: "text",
      title: "Checkpoint: apakah form flow kamu sudah bisa dipercaya?",
      content:
        "Uji Kompetensi ini mengecek kemampuan membuat flow kecil berbasis form. Kamu akan memakai controlled input, submit handler, `event.preventDefault()`, list state, composition, dan keputusan sederhana tentang tempat state.\n\nKamu belum perlu memakai form library, schema validation, server actions, atau multi-step form. Fokusnya adalah flow yang jelas: user mengisi field, submit tidak reload, data masuk ke state, dan UI tersusun dari component yang mudah dibaca.",
    },
    {
      id: "react-forms-composition-assessment-quiz",
      type: "quiz",
      quizId: "react-forms-composition-assessment-quiz",
    },
    {
      id: "react-forms-composition-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-form-driven-flow-checkpoint",
    },
    {
      id: "react-forms-composition-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis penjelasan singkat tentang flow form yang kamu bangun. Jelaskan field controlled input, apa yang terjadi saat submit, component apa saja yang kamu pisahkan, dan kenapa state utama berada di parent.\n\nGunakan format:\n- Controlled input:\n- Submit handler:\n- Component boundary:\n- State placement:\n- Hal yang sengaja belum memakai form library:",
      placeholder:
        "Controlled input: title disimpan di state dan input memakai value + onChange.\nSubmit handler: handleSubmit memanggil event.preventDefault, menambah note, lalu mengosongkan title.\nComponent boundary: NoteForm mengumpulkan input, NoteList menampilkan list, NoteItem menampilkan satu note.\nState placement: notes berada di NotesApp karena form menambah notes dan list membaca notes.\nHal yang belum memakai form library: validasi masih sederhana dan lokal.",
      minimumCharacters: 220,
      checklist: [
        "Menyebut controlled input dan pasangan value/onChange.",
        "Menyebut event.preventDefault di submit handler.",
        "Menyebut component yang dipisahkan.",
        "Menjelaskan alasan state berada di parent.",
        "Tidak memaksa form library untuk flow sederhana.",
      ],
      modelAnswer:
        "Controlled input memakai title sebagai state, input membaca value={title}, dan onChange memanggil setTitle. Submit handler handleSubmit memanggil event.preventDefault, menambah note baru ke notes, lalu mengosongkan title. Component boundary dipisah menjadi NoteForm untuk input, NoteList untuk daftar, dan NoteItem untuk satu item. State notes berada di NotesApp karena form perlu menambah data dan list perlu membaca data yang sama. Saya belum memakai form library karena flow masih kecil dan validasinya lokal.",
    },
    {
      id: "react-forms-composition-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge forms dan composition",
      description:
        "Baca dokumentasi React resmi untuk memperkuat mental model form, sharing state, dan composition sebelum masuk local React app.",
      links: [
        {
          source: "React Learn",
          title: "Reacting to Input with State",
          url: "https://react.dev/learn/reacting-to-input-with-state",
          focus: ["controlled input", "state sebagai sumber value", "UI merespons input"],
          ignoreForNow: ["complex form libraries", "server validation"],
        },
        {
          source: "React Learn",
          title: "Sharing State Between Components",
          url: "https://react.dev/learn/sharing-state-between-components",
          focus: ["lifting state", "shared parent", "data dan handler lewat props"],
          ignoreForNow: ["context", "global state libraries"],
        },
        {
          source: "React Learn",
          title: "Choosing the State Structure",
          url: "https://react.dev/learn/choosing-the-state-structure",
          focus: ["avoid duplicated state", "state minimal", "derived values"],
          ignoreForNow: ["large reducer refactor", "normalization detail"],
        },
        {
          source: "React Learn",
          title: "Passing Props to a Component",
          url: "https://react.dev/learn/passing-props-to-a-component",
          focus: ["props untuk data", "props untuk handler", "component reuse"],
          ignoreForNow: ["advanced TypeScript component API"],
        },
        {
          source: "React Learn",
          title: "Thinking in React",
          url: "https://react.dev/learn/thinking-in-react",
          focus: ["component hierarchy", "minimal state", "where state should live"],
          ignoreForNow: ["full product architecture", "large app state management"],
        },
      ],
      followUpAction:
        "Buka Reacting to Input with State dan Sharing State Between Components, lalu bandingkan contoh docs dengan form checkpoint kamu.",
    },
    {
      id: "react-forms-composition-assessment-summary",
      type: "summary",
      points: [
        "Controlled input memakai value dari state dan onChange untuk update state.",
        "Submit handler form memanggil event.preventDefault agar halaman tidak reload.",
        "Composition memecah form, list, dan item sesuai tanggung jawab.",
        "State dinaikkan ke parent saat beberapa component perlu berbagi data.",
        "Berikutnya, Local React App membawa component, state, events, lists, dan forms ke project lokal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-forms-composition-assessment-recap",
      "react-forms-composition-assessment-quiz",
      "react-forms-composition-assessment-coding-practice",
      "react-forms-composition-assessment-writing-practice",
      "react-forms-composition-assessment-docs",
      "react-forms-composition-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactFormsCompositionAssessmentQuiz: Quiz = {
  id: "react-forms-composition-assessment-quiz",
  lessonId: "react-forms-composition-assessment",
  title: "Uji Kompetensi Forms and Composition",
  passingScore: 70,
  questions: [
    {
      id: "react-forms-composition-q1",
      type: "multiple-choice",
      question: "Controlled input React biasanya memakai pasangan...",
      options: [
        "value dari state dan onChange untuk update state",
        "key dan map",
        "useEffect dan fetch",
        "className dan alt",
      ],
      correctAnswer: "value dari state dan onChange untuk update state",
      explanation:
        "Controlled input membaca value dari state dan menyimpan perubahan lewat onChange.",
    },
    {
      id: "react-forms-composition-q2",
      type: "multiple-choice",
      question: "Kenapa submit handler form React sering memanggil event.preventDefault()?",
      options: [
        "Agar browser tidak reload halaman saat form disubmit",
        "Agar CSS bisa diterapkan",
        "Agar semua state menjadi global",
        "Agar component tidak menerima props",
      ],
      correctAnswer: "Agar browser tidak reload halaman saat form disubmit",
      explanation:
        "Form HTML punya perilaku submit bawaan. React app biasanya menangani submit di component tanpa reload.",
    },
    {
      id: "react-forms-composition-q3",
      type: "true-false",
      question:
        "Composition yang baik memecah component berdasarkan tanggung jawab UI, bukan sekadar jumlah baris.",
      correctAnswer: true,
      explanation:
        "Batas component sebaiknya membantu pembacaan tanggung jawab, misalnya Form, List, dan Item.",
    },
    {
      id: "react-forms-composition-q4",
      type: "multiple-choice",
      question: "State sebaiknya diangkat ke parent saat...",
      options: [
        "beberapa component perlu membaca atau mengubah data yang sama",
        "satu input punya placeholder",
        "component memakai className",
        "list punya dua item",
      ],
      correctAnswer: "beberapa component perlu membaca atau mengubah data yang sama",
      explanation:
        "Shared state tinggal di closest shared parent agar satu sumber data bisa dipakai oleh component yang membutuhkannya.",
    },
    {
      id: "react-forms-composition-q5",
      type: "multiple-choice",
      question: "Untuk flow form sederhana di module ini, yang sebaiknya dihindari dulu adalah...",
      options: [
        "menambahkan form library atau schema validation kompleks",
        "memakai onSubmit",
        "memakai value dan onChange",
        "memecah form dan list menjadi component kecil",
      ],
      correctAnswer: "menambahkan form library atau schema validation kompleks",
      explanation:
        "Module ini fokus pada dasar React forms dan composition. Library form dan schema validation masuk lebih tepat di level Forms, Validation, and Data Fetching.",
    },
  ],
};

const reactFormsPracticePreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React Forms</h1>
  <p>Fokus di tab TSX. React runtime belum aktif di preview.</p>
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

export const buildControlledTextInputChallenge: CodingChallenge = {
  id: "build-controlled-text-input",
  lessonId: "react-controlled-inputs",
  title: "Buat controlled text input",
  description:
    "Latihan menghubungkan input title dengan state dan menampilkan preview dari value terbaru.",
  instructions: [
    "Fokus di tab TSX.",
    "Import useState dari react.",
    "Buat state title dengan nilai awal string kosong.",
    "Hubungkan input dengan value={title}.",
    "Tambahkan onChange untuk memanggil setTitle.",
    "Tampilkan preview title dengan fallback Belum diisi.",
  ],
  starterCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

function TitleField() {
  return (
    <section className="title-field">
      <label>
        Judul catatan
        <input placeholder="Tulis judul" />
      </label>
      <p>Preview: Belum diisi</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

function TitleField() {
  const [title, setTitle] = useState("");

  return (
    <section className="title-field">
      <label>
        Judul catatan
        <input
          placeholder="Tulis judul"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <p>Preview: {title || "Belum diisi"}</p>
    </section>
  );
}`,
  },
  checklist: [
    "title dibuat dengan useState.",
    "Input membaca value dari title.",
    "onChange memanggil setTitle dengan event.target.value.",
    "Preview menampilkan title atau fallback.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      { id: "import-use-state", label: "useState diimport.", type: "contains", target: `import { useState } from "react";`, valueIncludes: `import { useState } from "react";` },
      { id: "title-state", label: "title state dibuat.", type: "contains", target: `const [title, setTitle] = useState("");`, valueIncludes: `const [title, setTitle] = useState("");` },
      { id: "input-value", label: "Input memakai value dari title.", type: "contains", target: "value={title}", valueIncludes: "value={title}" },
      { id: "input-change", label: "Input memakai onChange.", type: "contains", target: "onChange={(event) => setTitle(event.target.value)}", valueIncludes: "onChange={(event) => setTitle(event.target.value)}" },
      { id: "preview-fallback", label: "Preview memakai fallback.", type: "contains", target: `{title || "Belum diisi"}`, valueIncludes: `{title || "Belum diisi"}` },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Input title dikendalikan oleh state dan preview membaca title terbaru. React runtime belum aktif di preview.",
    lines: [
      "Input memakai value={title}.",
      "onChange menyimpan event.target.value ke state.",
      "Preview menampilkan title atau fallback Belum diisi.",
    ],
  },
  skillTags: ["React", "Forms", "Controlled Input"],
};

export const handleReactFormSubmitChallenge: CodingChallenge = {
  id: "handle-react-form-submit",
  lessonId: "react-form-submit",
  title: "Handle submit tanpa reload",
  description:
    "Latihan membuat form submit yang menambah item ke list dan mengosongkan input.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat state title dan notes.",
    "Buat handleSubmit untuk menerima event.",
    "Panggil event.preventDefault() di dalam handleSubmit.",
    "Tambahkan title ke notes dengan setNotes.",
    "Kosongkan title setelah submit.",
  ],
  starterCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

function NoteSubmitForm() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  return (
    <section className="note-submit">
      <form>
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
        <button type="submit">Tambah note</button>
      </form>
      <p>Total note: {notes.length}</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

function NoteSubmitForm() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  function handleSubmit(event) {
    event.preventDefault();
    setNotes([...notes, title]);
    setTitle("");
  }

  return (
    <section className="note-submit">
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
        <button type="submit">Tambah note</button>
      </form>
      <p>Total note: {notes.length}</p>
    </section>
  );
}`,
  },
  checklist: [
    "Form memakai onSubmit.",
    "handleSubmit mencegah reload.",
    "notes ditambah dari title.",
    "title dikosongkan setelah submit.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      { id: "title-state", label: "title state dibuat.", type: "contains", target: `const [title, setTitle] = useState("");`, valueIncludes: `const [title, setTitle] = useState("");` },
      { id: "notes-state", label: "notes state dibuat.", type: "contains", target: "const [notes, setNotes] = useState<string[]>([]);", valueIncludes: "const [notes, setNotes] = useState<string[]>([]);" },
      { id: "handle-submit", label: "handleSubmit dibuat.", type: "contains", target: "function handleSubmit(event)", valueIncludes: "function handleSubmit(event)" },
      { id: "prevent-default", label: "Submit mencegah reload.", type: "contains", target: "event.preventDefault();", valueIncludes: "event.preventDefault();" },
      { id: "set-notes", label: "notes ditambah dari title.", type: "contains", target: "setNotes([...notes, title]);", valueIncludes: "setNotes([...notes, title]);" },
      { id: "clear-title", label: "title dikosongkan.", type: "contains", target: `setTitle("");`, valueIncludes: `setTitle("");` },
      { id: "form-submit", label: "Form memakai onSubmit.", type: "contains", target: "onSubmit={handleSubmit}", valueIncludes: "onSubmit={handleSubmit}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Form submit menambah title ke notes tanpa reload, lalu mengosongkan input. React runtime belum aktif di preview.",
    lines: [
      "Submit menjalankan handleSubmit.",
      "event.preventDefault mencegah reload.",
      "notes bertambah dari title dan title dikosongkan.",
    ],
  },
  skillTags: ["React", "Forms", "Submit"],
};

export const composeFormListComponentsChallenge: CodingChallenge = {
  id: "compose-form-list-components",
  lessonId: "react-composition-patterns",
  title: "Compose form, list, dan item",
  description:
    "Latihan memecah UI notes menjadi NoteForm, NoteList, dan NoteItem dengan props yang jelas.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat type Note dengan id dan title.",
    "Buat NoteItem yang menerima note.",
    "Buat NoteList yang menerima notes dan render NoteItem.",
    "Buat NoteForm yang menerima onAddNote.",
    "Susun NoteForm dan NoteList di NotesPanel.",
  ],
  starterCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `type Note = {
  id: string;
  title: string;
};

const notes: Note[] = [
  { id: "daily", title: "Daily update" },
  { id: "bug", title: "Bug note" },
];

function NotesPanel() {
  return (
    <section className="notes-panel">
      <h1>Notes</h1>
      <p>Susun form dan list di sini.</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `type Note = {
  id: string;
  title: string;
};

const notes: Note[] = [
  { id: "daily", title: "Daily update" },
  { id: "bug", title: "Bug note" },
];

function NoteItem({ note }: { note: Note }) {
  return <li>{note.title}</li>;
}

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

function NoteForm({ onAddNote }: { onAddNote: (title: string) => void }) {
  return (
    <form>
      <input placeholder="Judul note" />
      <button type="button" onClick={() => onAddNote("Note baru")}>
        Tambah
      </button>
    </form>
  );
}

function NotesPanel() {
  return (
    <section className="notes-panel">
      <NoteForm onAddNote={(title) => console.log(title)} />
      <NoteList notes={notes} />
    </section>
  );
}`,
  },
  checklist: [
    "NoteItem menerima satu note.",
    "NoteList menerima notes dan merender NoteItem.",
    "NoteForm menerima onAddNote.",
    "NotesPanel menyusun NoteForm dan NoteList.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      { id: "note-type", label: "Note type dibuat.", type: "contains", target: "type Note = {", valueIncludes: "type Note = {" },
      { id: "note-item", label: "NoteItem dibuat.", type: "contains", target: "function NoteItem({ note }: { note: Note })", valueIncludes: "function NoteItem({ note }: { note: Note })" },
      { id: "note-list", label: "NoteList dibuat.", type: "contains", target: "function NoteList({ notes }: { notes: Note[] })", valueIncludes: "function NoteList({ notes }: { notes: Note[] })" },
      { id: "map-notes", label: "notes dirender dengan map.", type: "contains", target: "notes.map((note) => (", valueIncludes: "notes.map((note) => (" },
      { id: "note-item-key", label: "NoteItem memakai key.", type: "contains", target: "<NoteItem key={note.id} note={note} />", valueIncludes: "<NoteItem key={note.id} note={note} />" },
      { id: "note-form", label: "NoteForm menerima onAddNote.", type: "contains", target: "function NoteForm({ onAddNote }: { onAddNote: (title: string) => void })", valueIncludes: "function NoteForm({ onAddNote }: { onAddNote: (title: string) => void })" },
      { id: "compose-form", label: "NotesPanel memakai NoteForm.", type: "contains", target: "<NoteForm", valueIncludes: "<NoteForm" },
      { id: "compose-list", label: "NotesPanel memakai NoteList.", type: "contains", target: "<NoteList notes={notes} />", valueIncludes: "<NoteList notes={notes} />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "UI notes disusun dari NoteForm, NoteList, dan NoteItem. React runtime belum aktif di preview.",
    lines: [
      "NoteItem fokus menampilkan satu note.",
      "NoteList merender notes dengan key note.id.",
      "NotesPanel menyusun form dan list.",
    ],
  },
  skillTags: ["React", "Composition", "Props"],
};

export const liftFormListStateChallenge: CodingChallenge = {
  id: "lift-form-list-state",
  lessonId: "react-lifting-state-when-needed",
  title: "Lift state untuk form dan list",
  description:
    "Latihan menaruh notes di parent agar NoteForm bisa menambah data dan NoteList bisa membaca data.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat state notes di NotesApp.",
    "Buat handleAddNote yang menambah note baru.",
    "Kirim handleAddNote ke NoteForm sebagai onAddNote.",
    "Kirim notes ke NoteList.",
    "Pastikan NoteForm punya state title lokal.",
  ],
  starterCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

type Note = {
  id: string;
  title: string;
};

function NoteForm() {
  const [title, setTitle] = useState("");

  return (
    <form>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <button type="submit">Tambah</button>
    </form>
  );
}

function NoteList({ notes }: { notes: Note[] }) {
  return <p>Total note: {notes.length}</p>;
}

function NotesApp() {
  return (
    <section className="notes-app">
      <NoteForm />
      <NoteList notes={[]} />
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

type Note = {
  id: string;
  title: string;
};

function NoteForm({ onAddNote }: { onAddNote: (title: string) => void }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddNote(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <button type="submit">Tambah</button>
    </form>
  );
}

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}

function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handleAddNote(title: string) {
    setNotes([...notes, { id: title.toLowerCase(), title }]);
  }

  return (
    <section className="notes-app">
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} />
    </section>
  );
}`,
  },
  checklist: [
    "notes tinggal di NotesApp.",
    "NoteForm tetap menyimpan title lokal.",
    "NoteForm mengirim title lewat onAddNote.",
    "NoteList membaca notes dari parent.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      { id: "notes-state", label: "notes state dibuat di parent.", type: "contains", target: "const [notes, setNotes] = useState<Note[]>([]);", valueIncludes: "const [notes, setNotes] = useState<Note[]>([]);" },
      { id: "note-form-prop", label: "NoteForm menerima onAddNote.", type: "contains", target: "function NoteForm({ onAddNote }: { onAddNote: (title: string) => void })", valueIncludes: "function NoteForm({ onAddNote }: { onAddNote: (title: string) => void })" },
      { id: "title-state", label: "title tetap state lokal di NoteForm.", type: "contains", target: `const [title, setTitle] = useState("");`, valueIncludes: `const [title, setTitle] = useState("");` },
      { id: "prevent-default", label: "Submit mencegah reload.", type: "contains", target: "event.preventDefault();", valueIncludes: "event.preventDefault();" },
      { id: "call-on-add-note", label: "NoteForm memanggil onAddNote.", type: "contains", target: "onAddNote(title);", valueIncludes: "onAddNote(title);" },
      { id: "handle-add-note", label: "handleAddNote dibuat di parent.", type: "contains", target: "function handleAddNote(title: string)", valueIncludes: "function handleAddNote(title: string)" },
      { id: "set-notes", label: "Parent menambah notes.", type: "contains", target: "setNotes([...notes, { id: title.toLowerCase(), title }]);", valueIncludes: "setNotes([...notes, { id: title.toLowerCase(), title }]);" },
      { id: "pass-handler", label: "Handler dikirim ke NoteForm.", type: "contains", target: "<NoteForm onAddNote={handleAddNote} />", valueIncludes: "<NoteForm onAddNote={handleAddNote} />" },
      { id: "pass-notes", label: "notes dikirim ke NoteList.", type: "contains", target: "<NoteList notes={notes} />", valueIncludes: "<NoteList notes={notes} />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "notes tinggal di parent, NoteForm mengirim data lewat handler, dan NoteList membaca notes. React runtime belum aktif di preview.",
    lines: [
      "NotesApp menyimpan notes sebagai shared state.",
      "NoteForm menyimpan title lokal dan memanggil onAddNote saat submit.",
      "NoteList menerima notes dari parent.",
    ],
  },
  skillTags: ["React", "State", "Composition"],
};

export const buildFormDrivenFlowCheckpointChallenge: CodingChallenge = {
  id: "build-form-driven-flow-checkpoint",
  lessonId: "react-forms-composition-assessment",
  title: "Bangun form-driven component flow",
  description:
    "Checkpoint akhir untuk membuat flow notes kecil dengan controlled input, submit, composition, list rendering, dan state placement.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat type Note dengan id dan title.",
    "Simpan notes di NotesApp dengan useState.",
    "Buat NoteForm dengan title state lokal.",
    "Handle submit dengan event.preventDefault dan onAddNote(title).",
    "Render notes lewat NoteList dan NoteItem dengan key note.id.",
  ],
  starterCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

type Note = {
  id: string;
  title: string;
};

function NotesApp() {
  return (
    <section className="notes-app">
      <h1>Notes</h1>
      <p>Bangun form-driven flow di sini.</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactFormsPracticePreviewCode,
    tsx: `import { useState } from "react";

type Note = {
  id: string;
  title: string;
};

function NoteItem({ note }: { note: Note }) {
  return <li>{note.title}</li>;
}

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

function NoteForm({ onAddNote }: { onAddNote: (title: string) => void }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddNote(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Judul note
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <button type="submit">Tambah note</button>
    </form>
  );
}

function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handleAddNote(title: string) {
    setNotes([...notes, { id: title.toLowerCase(), title }]);
  }

  return (
    <section className="notes-app">
      <h1>Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} />
      <p>Total note: {notes.length}</p>
    </section>
  );
}`,
  },
  checklist: [
    "Note type dibuat.",
    "NotesApp menyimpan notes.",
    "NoteForm memakai controlled input dan onSubmit.",
    "NoteList dan NoteItem merender list dengan key.",
    "Total note dihitung dari notes.length.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      { id: "note-type", label: "Note type dibuat.", type: "contains", target: "type Note = {", valueIncludes: "type Note = {" },
      { id: "notes-state", label: "notes state dibuat.", type: "contains", target: "const [notes, setNotes] = useState<Note[]>([]);", valueIncludes: "const [notes, setNotes] = useState<Note[]>([]);" },
      { id: "note-item", label: "NoteItem dibuat.", type: "contains", target: "function NoteItem({ note }: { note: Note })", valueIncludes: "function NoteItem({ note }: { note: Note })" },
      { id: "note-list", label: "NoteList dibuat.", type: "contains", target: "function NoteList({ notes }: { notes: Note[] })", valueIncludes: "function NoteList({ notes }: { notes: Note[] })" },
      { id: "note-form", label: "NoteForm menerima onAddNote.", type: "contains", target: "function NoteForm({ onAddNote }: { onAddNote: (title: string) => void })", valueIncludes: "function NoteForm({ onAddNote }: { onAddNote: (title: string) => void })" },
      { id: "title-state", label: "title state dibuat di NoteForm.", type: "contains", target: `const [title, setTitle] = useState("");`, valueIncludes: `const [title, setTitle] = useState("");` },
      { id: "form-submit", label: "Form memakai onSubmit.", type: "contains", target: "onSubmit={handleSubmit}", valueIncludes: "onSubmit={handleSubmit}" },
      { id: "prevent-default", label: "Submit mencegah reload.", type: "contains", target: "event.preventDefault();", valueIncludes: "event.preventDefault();" },
      { id: "on-add-note", label: "Submit mengirim title ke parent.", type: "contains", target: "onAddNote(title);", valueIncludes: "onAddNote(title);" },
      { id: "map-notes", label: "notes dirender dengan map.", type: "contains", target: "notes.map((note) => (", valueIncludes: "notes.map((note) => (" },
      { id: "stable-key", label: "key memakai note.id.", type: "contains", target: "<NoteItem key={note.id} note={note} />", valueIncludes: "<NoteItem key={note.id} note={note} />" },
      { id: "total-note", label: "Total note dihitung dari notes.length.", type: "contains", target: "{notes.length}", valueIncludes: "{notes.length}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Flow notes menggabungkan controlled input, submit, composition, list rendering, dan shared state. React runtime belum aktif di preview.",
    lines: [
      "NoteForm mengelola title lokal dengan value dan onChange.",
      "Submit mencegah reload dan mengirim title ke NotesApp.",
      "NotesApp menyimpan notes dan mengirimnya ke NoteList.",
      "NoteList merender NoteItem dengan key note.id.",
    ],
  },
  skillTags: ["React", "Forms", "Composition", "Assessment"],
};
