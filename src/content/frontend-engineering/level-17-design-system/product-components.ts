import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const productPracticeCode = { html: "", css: "", js: "" };

export const productComponentsModule: Module = {
  id: "product-components",
  trackId: "frontend-engineering",
  title: "Product Components",
  slug: "product-components",
  description:
    "Membangun form field, table, dialog, feedback, dan selection control dengan API jelas, state yang terlihat, serta accessibility expectation yang praktis.",
  order: 54,
  lessonIds: [
    "form-components",
    "table-components",
    "product-modal",
    "toast-components",
    "tabs-and-select",
    "product-components-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["Product Components", "Forms", "Tables", "Modal", "Toast", "Accessibility"],
};

export const formComponentsLesson: Lesson = {
  id: "form-components",
  trackId: "frontend-engineering",
  moduleId: "product-components",
  title: "Form Components",
  slug: "form-components",
  description:
    "Menyusun field reusable dari label, input, hint, error, dan state tanpa menyembunyikan semantic HTML yang dibutuhkan browser.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan layout field dari native input control yang menerima value dan event",
    "Menghubungkan label, hint, error, dan input dengan id yang dapat dibaca browser",
    "Mendesain props field agar disabled, error, dan help text jelas bagi consumer",
    "Menghindari generic input yang menyembunyikan type atau validation behavior penting",
  ],
  skillTags: ["React", "Forms", "Labels", "Validation UX", "Accessibility"],
  blocks: [
    {
      id: "form-components-intro",
      type: "text",
      title: "Mulai dari hubungan label, control, hint, dan error",
      content:
        "Product form yang nyaman tidak dimulai dari wrapper bernama Input dengan puluhan props. Mulailah dari struktur yang harus benar pada setiap field: label mengidentifikasi control, hint menjelaskan format atau dampak, error menjelaskan perbaikan, dan input mempertahankan type serta state native-nya. Jika pola itu berulang pada profile, invite, atau settings, component kecil dapat menjaga token dan relationship accessibility tanpa menghapus context domain.\n\nPisahkan tanggung jawabnya. FormField dapat mengatur label, hint, dan error; input atau select tetap bertanggung jawab pada value, disabled, type, dan event. Practice ini memakai CourseTextField agar anatomy terlihat dalam satu file. Di product nyata, jangan menyembunyikan type=email, required, autoComplete, atau nama field hanya demi API yang tampak singkat. Consumer perlu tetap memahami data yang dikirim browser.",
    },
    {
      id: "form-components-example",
      type: "code-example",
      title: "Text field dengan label, hint, dan error",
      language: "tsx",
      code: `type CourseTextFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  value: string;
  onChange: (nextValue: string) => void;
};

export function CourseTextField({ id, label, hint, error, value, onChange }: CourseTextFieldProps) {
  const hintId = id + "-hint";
  const errorId = id + "-error";

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {hint ? <p id={hintId}>{hint}</p> : null}
      <input
        id={id}
        type="email"
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p id={errorId} role="alert">{error}</p> : null}
    </div>
  );
}`,
      explanation:
        "label memakai htmlFor yang sama dengan id input. Hint atau error aktif menjadi aria-describedby sehingga user mendapat context tambahan saat masuk ke control. aria-invalid tidak menggantikan pesan error; ia hanya menandai bahwa value perlu diperbaiki. Schema dan submit flow tetap milik form owner.",
    },
    { id: "form-components-coding-practice", type: "coding-practice", challengeId: "build-course-text-field" },
    {
      id: "form-components-quick-check",
      type: "quick-check",
      question: "Mengapa error text tidak cukup hanya diberi warna merah?",
      options: [
        "Input perlu relationship programatis ke pesan agar user yang tidak mengandalkan warna juga mendapat context masalahnya.",
        "Semua error harus memakai icon merah besar.",
        "Browser tidak mendukung pesan error pada form.",
        "Label boleh dihapus ketika error sudah tampil.",
      ],
      correctAnswer:
        "Input perlu relationship programatis ke pesan agar user yang tidak mengandalkan warna juga mendapat context masalahnya.",
      explanation:
        "Color dapat membantu melihat state, tetapi label dan pesan yang terhubung tetap diperlukan. Pesan harus menyebutkan perbaikan yang bisa dilakukan user.",
    },
    {
      id: "form-components-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan membuat satu Input untuk setiap kemungkinan",
      content:
        "Input universal dengan mode, size, isPassword, prefix, suffix, tooltip, dan banyak boolean menyamarkan semantics serta membuat kombinasi state sulit diuji. Mulai dari field yang jelas. Buat component khusus hanya saat consumer, interaction, atau accessibility requirement memang berbeda.",
    },
    {
      id: "form-components-summary",
      type: "summary",
      points: [
        "Field reusable tetap mempertahankan label, control native, hint, dan error yang dapat dibaca user.",
        "id, htmlFor, aria-describedby, dan aria-invalid menjaga relationship field saat UI tumbuh.",
        "Error perlu menjelaskan perbaikan, bukan hanya menandai warna state.",
        "Component field tidak perlu mengambil alih schema atau setiap jenis input sekaligus.",
        "Berikutnya, prinsip anatomy dan state yang sama diterapkan pada table data.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "form-components-intro",
      "form-components-example",
      "form-components-coding-practice",
      "form-components-quick-check",
      "form-components-summary",
    ],
  },
};

export const tableComponentsLesson: Lesson = {
  id: "table-components",
  trackId: "frontend-engineering",
  moduleId: "product-components",
  title: "Table Components",
  slug: "table-components",
  description:
    "Membuat table data yang mempertahankan semantic header dan memberi context saat data dimuat atau belum tersedia.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Memilih table untuk data yang perlu dibandingkan per row dan column",
    "Menyusun caption, thead, tbody, dan th scope agar header data dapat dipahami",
    "Menampilkan loading dan empty state secara eksplisit",
    "Membuat table API yang memisahkan row data dari fetch state",
  ],
  skillTags: ["React", "Tables", "Loading State", "Empty State", "Semantic HTML"],
  blocks: [
    {
      id: "table-components-intro",
      type: "text",
      title: "Gunakan table ketika hubungan antarkolom penting",
      content:
        "Table tepat untuk data yang user bandingkan menurut kolom: course, status, owner, atau tanggal update. Jika setiap item lebih mirip card dengan hierarchy dan action bebas, list atau card grid lebih mudah dibaca. Memaksa semua collection menjadi table menghasilkan scroll horizontal serta header yang tidak membantu keputusan user.\n\nSaat table tepat, header bukan dekorasi. Gunakan table, caption, thead, tbody, dan th scope. Tentukan state sebelum data ada: loading memberi tahu request sedang berjalan, empty state menjelaskan bahwa result memang tidak ada, dan error memberi recovery bila request dapat dicoba lagi. Jangan menampilkan header kosong lalu berharap user menebak apa yang terjadi.",
    },
    {
      id: "table-components-example",
      type: "code-example",
      title: "Table course dengan loading dan empty state",
      language: "tsx",
      code: `type CourseRow = { id: string; title: string; status: string; updatedAt: string };
type CourseTableProps = { rows: CourseRow[]; isLoading?: boolean };

export function CourseTable({ rows, isLoading = false }: CourseTableProps) {
  if (isLoading) return <p role="status">Memuat daftar course...</p>;
  if (rows.length === 0) return <p>Belum ada course. Buat course pertama saat siap.</p>;

  return (
    <table>
      <caption>Daftar course aktif</caption>
      <thead><tr><th scope="col">Course</th><th scope="col">Status</th><th scope="col">Terakhir diubah</th></tr></thead>
      <tbody>{rows.map((row) => <tr key={row.id}><td>{row.title}</td><td>{row.status}</td><td>{row.updatedAt}</td></tr>)}</tbody>
    </table>
  );
}`,
      explanation:
        "Loading dan empty berada di luar table karena belum ada grid data yang bermakna. Setelah data tersedia, caption memberi nama table dan th scope=\"col\" menjelaskan column. API menerima data typed serta state eksplisit; ia tidak menebak bentuk row saat render.",
    },
    { id: "table-components-coding-practice", type: "coding-practice", challengeId: "build-course-results-table" },
    {
      id: "table-components-quick-check",
      type: "quick-check",
      question: "Kapan card list lebih tepat daripada table?",
      options: [
        "Saat tiap item membutuhkan hierarchy, deskripsi, dan action berbeda sehingga perbandingan antarkolom bukan tujuan utama.",
        "Saat data memiliki lebih dari dua field text.",
        "Saat ingin menghapus heading setiap item.",
        "Saat user membandingkan status dan tanggal banyak row sekaligus.",
      ],
      correctAnswer:
        "Saat tiap item membutuhkan hierarchy, deskripsi, dan action berbeda sehingga perbandingan antarkolom bukan tujuan utama.",
      explanation:
        "Table membantu membaca hubungan grid. Card/list lebih tepat untuk item dengan layout serta action yang mandiri.",
    },
    {
      id: "table-components-callout",
      type: "callout",
      variant: "tip",
      title: "Empty state adalah hasil product, bukan error visual",
      content:
        "Jika filter tidak menghasilkan course, empty state dapat menyebut filter aktif dan menawarkan reset. Jika account baru memang belum punya data, jelaskan langkah pertama. Jangan memakai error untuk data kosong normal atau skeleton yang terus tampil setelah request selesai.",
    },
    {
      id: "table-components-summary",
      type: "summary",
      points: [
        "Gunakan table untuk data yang perlu dibandingkan menurut row dan column.",
        "Caption, thead, tbody, dan th scope menjaga struktur data dapat dipahami di luar tampilan visualnya.",
        "Loading, empty, dan error adalah state product dengan copy serta action berbeda.",
        "API table menerima row typed dan state yang eksplisit.",
        "Berikutnya, kita meninjau modal sebagai component yang membutuhkan focus behavior, bukan hanya overlay.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "table-components-intro",
      "table-components-example",
      "table-components-coding-practice",
      "table-components-quick-check",
      "table-components-summary",
    ],
  },
};

export const productModalLesson: Lesson = {
  id: "product-modal",
  trackId: "frontend-engineering",
  moduleId: "product-components",
  title: "Modal",
  slug: "product-modal",
  description:
    "Mendesain modal konfirmasi dengan purpose, close action, dan contract yang jujur tentang focus behavior yang harus diuji saat runtime.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Memilih modal hanya untuk keputusan atau task yang membutuhkan interruption sementara",
    "Menyusun dialog dengan title, description, dan action yang sesuai risiko task",
    "Menjelaskan focus entry, containment, Escape, close action, serta focus return",
    "Membedakan structure statis dari behavior modal yang wajib diuji saat runtime",
  ],
  skillTags: ["React", "Modal", "Dialog", "Focus Management", "Accessibility"],
  blocks: [
    {
      id: "product-modal-intro",
      type: "text",
      title: "Modal harus menyelesaikan satu interruption yang jelas",
      content:
        "Modal cocok untuk keputusan sementara seperti mengonfirmasi penghapusan draft. Ia bukan tempat default untuk informasi, navigation, atau form panjang. Bila content dapat berada di page, drawer, atau route tersendiri, pilihan itu sering lebih mudah dibagikan, direfresh, dan dioperasikan keyboard. Setiap modal menambah state open/close, fokus, scroll, serta recovery yang perlu dimiliki feature owner.\n\nDialog reusable perlu contract sempit: apakah terbuka, title, description singkat, content area, cancel action, dan confirm action. Tetapi role=dialog tidak otomatis menyelesaikan modal. Focus harus masuk ke dialog saat terbuka, Tab dan Shift+Tab tidak boleh keluar, Escape serta close action harus memiliki aturan, background harus inert, dan focus biasanya kembali ke trigger setelah ditutup. Practice memeriksa structure; runtime behavior wajib diuji pada local project atau primitive dialog teruji.",
    },
    {
      id: "product-modal-example",
      type: "code-example",
      title: "Confirm dialog dengan action yang dapat dibaca",
      language: "tsx",
      code: `type CourseConfirmDialogProps = {
  isOpen: boolean;
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export function CourseConfirmDialog({ isOpen, title, description, onCancel, onConfirm }: CourseConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <section role="dialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-description">
      <h2 id="confirm-title">{title}</h2>
      <p id="confirm-description">{description}</p>
      <button type="button" onClick={onCancel} autoFocus>Batal</button>
      <button type="button" onClick={onConfirm}>Hapus draft</button>
    </section>
  );
}`,
      explanation:
        "Title dan description memberi nama serta context dialog. Batal dapat menjadi focus awal pada confirm destructive yang kecil. Contoh ini belum mengklaim production-ready: focus loop, background inert, Escape, scroll behavior, dan focus return harus ditangani serta diuji saat runtime.",
    },
    { id: "product-modal-coding-practice", type: "coding-practice", challengeId: "audit-course-confirm-dialog" },
    {
      id: "product-modal-quick-check",
      type: "quick-check",
      question: "Setelah modal penghapusan draft ditutup dengan Batal, focus biasanya harus",
      options: [
        "Kembali ke button yang membuka modal agar user dapat melanjutkan context sebelumnya.",
        "Pindah ke awal halaman tanpa alasan.",
        "Tetap pada element tersembunyi di dalam modal.",
        "Dihapus dari halaman agar overlay tidak terlihat aktif.",
      ],
      correctAnswer:
        "Kembali ke button yang membuka modal agar user dapat melanjutkan context sebelumnya.",
      explanation:
        "Focus return menjaga alur keyboard. Jika trigger sudah hilang, feature owner perlu memilih target workflow lain secara disengaja.",
    },
    {
      id: "product-modal-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menandai aria-modal bila background masih interaktif",
      content:
        "aria-modal=true menyatakan content di luar dialog tidak dapat diakses. Jika code masih membiarkan pointer atau keyboard berinteraksi dengan page belakang, user menerima pengalaman saling bertentangan. Gunakan primitive teruji atau implementasikan behavior modal lengkap sebelum menyebutnya modal.",
    },
    {
      id: "product-modal-summary",
      type: "summary",
      points: [
        "Modal adalah interruption untuk satu keputusan atau task yang jelas.",
        "Dialog membutuhkan title, context, close path, dan action yang sesuai risiko task.",
        "Focus entry, containment, Escape, background inert, serta focus return adalah behavior runtime.",
        "API kecil membuat feature owner tetap bertanggung jawab pada flow serta outcome user.",
        "Berikutnya, toast memberi feedback singkat tanpa meminta keputusan aktif.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "product-modal-intro",
      "product-modal-example",
      "product-modal-coding-practice",
      "product-modal-quick-check",
      "product-modal-summary",
    ],
  },
};

export const toastComponentsLesson: Lesson = {
  id: "toast-components",
  trackId: "frontend-engineering",
  moduleId: "product-components",
  title: "Toast",
  slug: "toast-components",
  description:
    "Menyampaikan feedback singkat lewat status message tanpa memakai toast untuk error penting atau keputusan yang membutuhkan perhatian penuh.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan feedback non-blocking dari error atau keputusan yang harus tetap terlihat dekat task",
    "Membuat toast API dengan tone, title, message, dan dismiss action",
    "Memilih status atau alert announcement berdasarkan urgency",
    "Menghindari toast serta announcement yang menciptakan noise",
  ],
  skillTags: ["React", "Toast", "Status Message", "ARIA Live Regions", "Feedback UX"],
  blocks: [
    {
      id: "toast-components-intro",
      type: "text",
      title: "Toast memberi feedback, bukan menggantikan context penting",
      content:
        "Toast berguna untuk feedback singkat setelah action selesai: draft tersimpan, filter diterapkan, atau link disalin. Karena biasanya muncul sementara dan jauh dari control asal, toast tidak boleh menjadi satu-satunya tempat untuk menjelaskan masalah penting. Error validasi tetap berada dekat field. Error pembayaran, publish failure, atau perubahan yang perlu dipulihkan membutuhkan surface yang bertahan serta recovery action jelas.\n\nToast dapat memiliki tone success atau error, title, message, dan dismiss action. API visual tidak menentukan apakah announcement pantas. Feature owner menentukan kapan feedback non-blocking cukup dan kapan user perlu persistent error. status cocok untuk update tidak mendesak; alert digunakan hemat untuk pesan yang harus segera disadari. Jangan mengumumkan setiap perubahan kecil karena screen reader user menerima noise yang sama mengganggunya dengan toast visual berlebihan.",
    },
    {
      id: "toast-components-example",
      type: "code-example",
      title: "Toast status dengan tone dan dismiss action",
      language: "tsx",
      code: `type CourseToastTone = "success" | "error";
type CourseToastProps = { tone: CourseToastTone; title: string; message: string; onDismiss?: () => void };

export function CourseToast({ tone, title, message, onDismiss }: CourseToastProps) {
  const isError = tone === "error";
  return (
    <section className={"toast toast--" + tone} role={isError ? "alert" : "status"} aria-live={isError ? "assertive" : "polite"}>
      <strong>{title}</strong>
      <p>{message}</p>
      {onDismiss ? <button type="button" onClick={onDismiss} aria-label="Tutup notifikasi">Tutup</button> : null}
    </section>
  );
}`,
      explanation:
        "Success memakai status/polite karena user tidak perlu dipaksa menghentikan alur. Error memakai alert/assertive hanya bila pesan memang perlu diketahui segera. Auto-dismiss, queue, dan timing perlu diputuskan dari dampak pesan lalu diuji di product.",
    },
    { id: "toast-components-coding-practice", type: "coding-practice", challengeId: "build-course-toast-status" },
    {
      id: "toast-components-quick-check",
      type: "quick-check",
      question: "Feedback mana yang paling tepat memakai toast success non-blocking?",
      options: [
        "Draft lesson berhasil tersimpan otomatis tanpa membutuhkan keputusan tambahan.",
        "Email wajib diisi sebelum form dapat dikirim.",
        "User akan menghapus project yang tidak dapat dipulihkan.",
        "Pembayaran gagal dan user perlu memperbaiki metode pembayaran.",
      ],
      correctAnswer: "Draft lesson berhasil tersimpan otomatis tanpa membutuhkan keputusan tambahan.",
      explanation:
        "Autosave success adalah informasi singkat. Validation error perlu dekat control, destructive action perlu confirmation, dan failure penting perlu error surface yang bertahan.",
    },
    {
      id: "toast-components-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Toast tidak boleh menjadi satu-satunya error state",
      content:
        "Toast yang menghilang membuat user sulit membaca detail atau mencoba recovery. Jika action tidak selesai, simpan error di area yang tetap terlihat bersama action retry atau bantuan. Toast boleh melengkapi feedback, tetapi jangan menyembunyikan state penting dari page.",
    },
    {
      id: "toast-components-summary",
      type: "summary",
      points: [
        "Toast cocok untuk feedback singkat yang tidak memblokir workflow.",
        "Validasi inline, error persistent, dan confirm action memiliki surface lebih tepat daripada toast.",
        "Tone, copy, dismiss action, dan live announcement perlu mencerminkan urgency nyata.",
        "Feedback terlalu sering menciptakan noise visual dan auditory.",
        "Berikutnya, pilih tabs atau native select dari tugas user, bukan tren visual.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "toast-components-intro",
      "toast-components-example",
      "toast-components-coding-practice",
      "toast-components-quick-check",
      "toast-components-summary",
    ],
  },
};

export const tabsSelectComponentsLesson: Lesson = {
  id: "tabs-and-select",
  trackId: "frontend-engineering",
  moduleId: "product-components",
  title: "Tabs and Select",
  slug: "tabs-and-select",
  description:
    "Memilih tabs atau native select berdasarkan bentuk content dan interaction tanpa membuat custom control terlalu awal.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan tabs untuk section content sejajar dari select untuk satu value atau filter",
    "Menjelaskan tablist, tab, tabpanel, active state, serta keyboard expectation",
    "Membuat wrapper native select dengan label eksplisit",
    "Menunda custom select atau combobox sampai requirement product membutuhkannya",
  ],
  skillTags: ["React", "Tabs", "Select", "Native HTML", "Keyboard Navigation"],
  blocks: [
    {
      id: "tabs-and-select-intro",
      type: "text",
      title: "Pilih control dari tugas user, bukan dari bentuk modern",
      content:
        "Tabs menampilkan section content sejajar di satu context, misalnya Overview, Curriculum, dan Reviews pada detail course. User berpindah panel tanpa mengganti object utama yang dibaca. Pattern ini memiliki tablist, tab aktif, tabpanel terkait, serta keyboard behavior yang perlu diuji. Tabs bukan pengganti navigation utama, filter data, atau langkah form.\n\nSelect lebih cocok untuk memilih satu value: sort order, level filter, timezone, atau assignee. Native select sudah membawa keyboard, focus, mobile behavior, serta semantics browser. Bungkus hanya ketika label, hint, error, spacing, atau token perlu konsisten. Jangan membuat custom select karena visual native terasa kurang menarik. Combobox dan listbox membawa contract keyboard, active option, focus, announcement, search, serta pointer behavior yang jauh lebih besar.",
    },
    {
      id: "tabs-and-select-example",
      type: "code-example",
      title: "Native select wrapper untuk filter course",
      language: "tsx",
      code: `type CourseFilterOption = { value: string; label: string };
type CourseFilterSelectProps = { id: string; label: string; value: string; options: CourseFilterOption[]; onChange: (nextValue: string) => void };

export function CourseFilterSelect({ id, label, value, options, onChange }: CourseFilterSelectProps) {
  return (
    <div className="filter-select">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}`,
      explanation:
        "Props menyatakan data yang dibutuhkan select: id, label, current value, options, dan callback. Bila product nanti benar-benar membutuhkan search, multi-select, rich option, atau async result, buat keputusan component baru dengan accessibility contract eksplisit; jangan mengubah wrapper ini diam-diam menjadi combobox.",
    },
    { id: "tabs-and-select-coding-practice", type: "coding-practice", challengeId: "build-course-filter-select" },
    {
      id: "tabs-and-select-quick-check",
      type: "quick-check",
      question: "Situasi mana yang paling tepat memakai tabs?",
      options: [
        "Membuka Overview, Curriculum, dan Reviews dari satu detail course dengan satu panel aktif.",
        "Memilih satu level course dari filter yang dapat berubah.",
        "Mencari assignee dari ribuan account dengan query text.",
        "Mengonfirmasi penghapusan data sebelum action dijalankan.",
      ],
      correctAnswer: "Membuka Overview, Curriculum, dan Reviews dari satu detail course dengan satu panel aktif.",
      explanation:
        "Tabs mengatur section content sejajar. Filter satu value biasanya select, daftar besar dapat memerlukan combobox khusus, dan confirmation memerlukan dialog.",
    },
    {
      id: "tabs-and-select-callout",
      type: "callout",
      variant: "important",
      title: "Custom select adalah keputusan accessibility besar",
      content:
        "Native select sudah operable dengan keyboard dan platform behavior familiar. Sebelum membuat custom version, tulis requirement nyata: search, multi-select, rich option, atau async result. Jika ada, gunakan primitive teruji dan QA keyboard, Escape, focus return, active option, mouse, touch, serta mobile behavior.",
    },
    {
      id: "tabs-and-select-summary",
      type: "summary",
      points: [
        "Tabs mengatur panel content sejajar; select memilih satu value dari daftar.",
        "Tabs membawa tablist, active tab, tabpanel, dan keyboard behavior yang perlu diuji saat runtime.",
        "Native select adalah pilihan kuat ketika requirement hanya memilih value.",
        "Custom control dibangun dari requirement product dan accessibility contract, bukan visual preference.",
        "Berikutnya, Uji Kompetensi menggabungkan anatomy form, feedback, API, dan keputusan pattern.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "tabs-and-select-intro",
      "tabs-and-select-example",
      "tabs-and-select-coding-practice",
      "tabs-and-select-quick-check",
      "tabs-and-select-summary",
    ],
  },
};

export const productComponentsAssessmentLesson: Lesson = {
  id: "product-components-assessment",
  trackId: "frontend-engineering",
  moduleId: "product-components",
  title: "Uji Kompetensi Product Components",
  slug: "product-components-assessment",
  description:
    "Membuktikan kesiapan membangun satu product component dengan state, semantics, accessibility expectation, dan usage note yang dapat dijelaskan kepada tim.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Menyatukan field anatomy, submit state, status feedback, dan button behavior pada form kecil",
    "Membedakan state yang memerlukan persistent feedback dari feedback toast singkat",
    "Menjelaskan pilihan native table, dialog, tabs, atau select dari kebutuhan user",
    "Menulis usage note tentang purpose, props, states, accessibility expectation, dan batas component",
  ],
  skillTags: ["Product Components", "Forms", "Component API", "Accessibility", "Readiness Checkpoint"],
  blocks: [
    {
      id: "product-components-assessment-recap",
      type: "text",
      title: "Checkpoint: buat invite form yang jelas pada setiap state",
      content:
        "Tim membutuhkan InviteMemberForm pada course settings. Versi awal memakai div clickable, placeholder tanpa label, boolean isLoading dan hasError tanpa message, serta toast untuk semua state. Hasilnya singkat tetapi consumer sulit menjelaskan data, visual state, serta accessibility behavior.\n\nPada checkpoint ini, buat contract yang jujur: field memakai label dan input email native; error terhubung ke control; status submit dibatasi union; button memakai disabled native saat saving; status feedback memiliki role yang sesuai; dan caller tetap memiliki onSubmit serta onEmailChange. Ini bukan full form library atau backend integration. Tujuannya membuktikan component memiliki purpose, state, dan boundary yang dapat dibaca sebelum dipakai banyak feature.",
    },
    { id: "product-components-assessment-quiz", type: "quiz", quizId: "product-components-assessment-quiz" },
    { id: "product-components-assessment-coding-practice", type: "coding-practice", challengeId: "build-course-invite-form-checkpoint" },
    {
      id: "product-components-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih satu product component di local React atau Next.js project, atau gunakan InviteMemberForm pada checkpoint ini. Tulis usage note: purpose dan consumer component, props serta state, semantic HTML/control native, default/loading/error/empty atau success state, accessibility expectation untuk QA, satu happy-path usage example, satu batas penggunaan, dan satu complexity yang sengaja tidak dibangun. Jelaskan alasan native versus custom bila component memilih select, dialog, tabs, atau status message.",
      placeholder:
        "InviteMemberForm dipakai di course settings untuk mengundang satu member lewat email. Props-nya email, error?, status, onEmailChange, dan onSubmit. status dibatasi idle, saving, success, atau error agar caller tidak menggabungkan boolean kontradiktif. Component memakai form, label, input type=email, button native, aria-invalid, dan error yang terhubung ke input. Saat saving, button disabled dan label berubah. Success memakai status singkat; error request yang penting tetap terlihat di form bersama recovery action. Component ini tidak dipakai untuk bulk invite atau pencarian user karena flow tersebut membutuhkan table dan filter. QA saya mencakup keyboard, label, error announcement, submit dengan Enter, disabled state, dan hasil request. Saya belum membuat custom select karena native control belum dibutuhkan.",
      minimumCharacters: 900,
      checklist: [
        "Menjelaskan tujuan, consumer, serta data component secara spesifik.",
        "Menyebutkan props dan state tanpa boolean yang dapat bertentangan.",
        "Mencatat native control, label, serta feedback/error relationship yang dipakai.",
        "Menyertakan happy path, state penting, accessibility QA, dan batas penggunaan.",
        "Menjelaskan satu keputusan native versus custom atau complexity yang ditunda.",
      ],
      modelAnswer:
        "InviteMemberForm dipakai pada course settings untuk mengundang satu member lewat email. Consumer memberi email, error opsional, status, onEmailChange, dan onSubmit. Saya memakai union idle, saving, success, dan error agar form tidak memiliki isLoading serta isSuccess bersamaan. Component memakai form dan button native sehingga submit dengan Enter tetap bekerja, label terhubung ke input type=email, dan error menjadi context input saat aktif. Saat saving, button disabled serta copy berubah menjadi Mengirim undangan. Success memakai role status singkat; error request tetap ditampilkan dalam form bersama retry bila tersedia. Component tidak digunakan untuk bulk invite, pencarian account, atau pengaturan role karena flow itu membutuhkan data dan interaction berbeda. QA mencakup keyboard, label, error, status announcement, disabled state, serta hasil request. Saya tidak membuat custom select karena native control belum dibutuhkan.",
    },
    {
      id: "product-components-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Periksa pattern sebelum menambah complexity",
      description:
        "Dokumentasi resmi membantu memeriksa semantic dan keyboard contract yang tidak terlihat dari screenshot. Baca pattern sesuai task, lalu gunakan purpose product serta manual QA untuk memutuskan apakah native element sudah cukup atau component khusus memang diperlukan.",
      links: [
        {
          source: "MDN",
          title: "Your first form",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form",
          focus: ["Hubungan label dengan form control.", "Struktur form dan submit behavior native.", "Memeriksa field sebelum membungkusnya dengan React component."],
          ignoreForNow: ["Membuat form library sendiri atau memindahkan seluruh validation ke generic input."],
        },
        {
          source: "MDN",
          title: "HTML table basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics",
          focus: ["Kapan table tepat untuk row dan column.", "Caption dan table header.", "Struktur semantic sebelum data grid feature."],
          ignoreForNow: ["Virtualization atau data grid enterprise."],
        },
        {
          source: "W3C WAI",
          title: "Dialog (Modal) Pattern",
          url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
          focus: ["Focus entry, Tab containment, Escape, close action, dan focus return.", "role dialog, aria-modal, dan visible title.", "Kapan background harus benar-benar inert."],
          ignoreForNow: ["Menulis modal library dari nol untuk semua variasi content."],
        },
        {
          source: "W3C WAI",
          title: "Tabs Pattern",
          url: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
          focus: ["Hubungan tablist, tab aktif, dan tabpanel.", "Kapan tabs tepat untuk content.", "Keyboard behavior sebelum custom tabs."],
          ignoreForNow: ["Memakai tabs untuk filter, navigation utama, atau wizard tanpa alasan."],
        },
        {
          source: "MDN",
          title: "ARIA live regions",
          url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions",
          focus: ["Announcement polite dan assertive.", "Feedback yang perlu diberitahukan user.", "Menghindari notification noise."],
          ignoreForNow: ["Menggunakan live region untuk setiap perubahan visual kecil."],
        },
      ],
      followUpAction:
        "Pilih satu product component lokal. Tulis props serta state yang didukung, cek dengan keyboard dari trigger sampai recovery action, tambahkan usage example dan note tentang semantics/focus/announcement behavior, lalu jalankan typecheck serta QA route consumer-nya.",
    },
    {
      id: "product-components-assessment-summary",
      type: "summary",
      points: [
        "Product component reusable memiliki purpose, API, semantic structure, dan state yang dapat dijelaskan consumer.",
        "Field, table, modal, toast, tabs, dan select menangani problem berbeda; component universal bukan jawaban default.",
        "Native HTML sering memberi interaction serta accessibility behavior lebih kuat daripada custom control awal.",
        "Loading, empty, error, success, disabled, dan focus dipilih dari dampak task user.",
        "Berikutnya, Storybook and Package Basics mendokumentasikan variant, state, serta quality check component di luar route product.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "product-components-assessment-recap",
      "product-components-assessment-quiz",
      "product-components-assessment-coding-practice",
      "product-components-assessment-writing-practice",
      "product-components-assessment-documentation-bridge",
      "product-components-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const productComponentsAssessmentQuiz: Quiz = {
  id: "product-components-assessment-quiz",
  lessonId: "product-components-assessment",
  title: "Uji Kompetensi Product Components",
  passingScore: 70,
  questions: [
    {
      id: "form-field-anatomy",
      type: "multiple-choice",
      question: "Hubungan yang paling tepat pada reusable text field adalah",
      options: [
        "label terhubung ke input; hint/error aktif dapat menjadi context tambahan; input tetap native.",
        "placeholder menggantikan label agar field lebih ringkas.",
        "Error hanya perlu warna merah.",
        "Semua input harus memakai div.",
      ],
      correctAnswer: "label terhubung ke input; hint/error aktif dapat menjadi context tambahan; input tetap native.",
      explanation: "Label memberi nama control, sedangkan hint/error dapat memberi context. Native input menjaga keyboard, type, value, disabled, dan submit behavior browser.",
    },
    {
      id: "table-choice",
      type: "multiple-choice",
      question: "Table paling tepat digunakan ketika",
      options: [
        "user perlu membandingkan data menurut row dan column konsisten.",
        "item adalah panel bebas dengan action berbeda.",
        "page hanya menampilkan empty state.",
        "ingin membuat list terlihat teknis.",
      ],
      correctAnswer: "user perlu membandingkan data menurut row dan column konsisten.",
      explanation: "Table menjelaskan hubungan grid. Card/list lebih tepat ketika item punya hierarchy serta action mandiri.",
    },
    {
      id: "table-states",
      type: "multiple-choice",
      question: "Saat request selesai tetapi rows kosong, UI yang tepat adalah",
      options: [
        "Menampilkan empty state dengan explanation dan action bila relevan.",
        "Menampilkan loading skeleton tanpa batas.",
        "Menggunakan error karena data kosong selalu gagal.",
        "Menyembunyikan section tanpa explanation.",
      ],
      correctAnswer: "Menampilkan empty state dengan explanation dan action bila relevan.",
      explanation: "Empty adalah result normal; loading berarti request belum selesai dan error berarti request/processing gagal.",
    },
    {
      id: "modal-focus",
      type: "multiple-choice",
      question: "Requirement modal yang tidak selesai hanya dengan role=dialog adalah",
      options: [
        "Focus masuk dan tetap di dialog, Escape/close, background inert, serta focus return diuji saat runtime.",
        "Dialog memiliki shadow konsisten.",
        "Confirm selalu memakai warna destructive.",
        "Dialog selalu memiliki tiga action.",
      ],
      correctAnswer: "Focus masuk dan tetap di dialog, Escape/close, background inert, serta focus return diuji saat runtime.",
      explanation: "ARIA role memberi semantics, tetapi tidak memindahkan/mengunci focus atau membuat background inert.",
    },
    {
      id: "toast-purpose",
      type: "multiple-choice",
      question: "Kapan toast bukan pilihan utama?",
      options: [
        "Saat email form invalid dan user perlu memperbaiki field tertentu.",
        "Saat autosave berhasil tanpa keputusan tambahan.",
        "Saat filter diterapkan dan result terlihat di page.",
        "Saat link berhasil disalin.",
      ],
      correctAnswer: "Saat email form invalid dan user perlu memperbaiki field tertentu.",
      explanation: "Validation error perlu dekat control. Toast dapat menghilang sebelum user menemukan field yang harus diubah.",
    },
    {
      id: "tabs-select-decision",
      type: "multiple-choice",
      question: "Pernyataan tepat tentang tabs dan native select adalah",
      options: [
        "Tabs mengatur panel content sejajar; native select kuat untuk memilih satu value tanpa custom requirement khusus.",
        "Tabs selalu lebih accessible untuk filter data.",
        "Native select hanya untuk login.",
        "Custom select lebih baik setiap kali option membutuhkan icon.",
      ],
      correctAnswer: "Tabs mengatur panel content sejajar; native select kuat untuk memilih satu value tanpa custom requirement khusus.",
      explanation: "Pilih pattern dari task user. Custom select membawa keyboard serta announcement contract lebih kompleks.",
    },
    {
      id: "component-state-api",
      type: "multiple-choice",
      question: "API status submit paling aman untuk InviteMemberForm adalah",
      options: [
        "status: \"idle\" | \"saving\" | \"success\" | \"error\" bersama error message bila perlu.",
        "isLoading, isSaving, isSuccess, isError, hasError, dan hasSaved sebagai boolean bebas.",
        "status: string agar caller menulis apa saja.",
        "Tanpa status karena semua feedback cukup toast.",
      ],
      correctAnswer: "status: \"idle\" | \"saving\" | \"success\" | \"error\" bersama error message bila perlu.",
      explanation: "Union membuat state didukung terlihat dan menghindari kombinasi boolean kontradiktif.",
    },
  ],
};

export const buildCourseTextFieldChallenge: CodingChallenge = {
  id: "build-course-text-field",
  lessonId: "form-components",
  title: "Build course text field",
  description: "Buat CourseTextField dengan label, hint/error relationship, input email native, dan disabled state.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat props id, label, hint opsional, error opsional, value, disabled opsional, dan onChange.",
    "Hubungkan label ke input dengan htmlFor dan id.",
    "Gunakan input type email, aria-invalid, serta aria-describedby untuk hint atau error aktif.",
    "Render error dengan role alert dan teruskan disabled state ke input.",
    "Cek otomatis membaca structure TSX. Preview tidak menjalankan React component pada practice ini.",
  ],
  starterCode: {
    ...productPracticeCode,
    tsx: `type CourseTextFieldProps = {
  labelText: string;
  helperText?: string;
  invalid?: boolean;
  text: string;
};

export function CourseTextField({ labelText, text }: CourseTextFieldProps) {
  return <div>{labelText}: {text}</div>;
}`,
  },
  solutionCode: {
    ...productPracticeCode,
    tsx: `type CourseTextFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  value: string;
  disabled?: boolean;
  onChange: (nextValue: string) => void;
};

export function CourseTextField({ id, label, hint, error, value, disabled = false, onChange }: CourseTextFieldProps) {
  const hintId = id + "-hint";
  const errorId = id + "-error";

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {hint ? <p id={hintId}>{hint}</p> : null}
      <input
        id={id}
        type="email"
        value={value}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p id={errorId} role="alert">{error}</p> : null}
    </div>
  );
}`,
  },
  checklist: [
    "Label dan input terhubung dengan id yang sama.",
    "Hint atau error memberi context hanya saat diperlukan.",
    "Input mempertahankan type email dan disabled behavior native.",
    "Error menjelaskan masalah dekat field, bukan hanya lewat warna.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "props", label: "Props field yang jelas tersedia.", type: "contains", valueIncludes: "type CourseTextFieldProps = {\n  id: string;\n  label: string;\n  hint?: string;\n  error?: string;\n  value: string;\n  disabled?: boolean;\n  onChange: (nextValue: string) => void;\n};" },
      { id: "ids", label: "Hint dan error id dibentuk dari field id.", type: "contains", valueIncludes: 'const hintId = id + "-hint";\n  const errorId = id + "-error";' },
      { id: "label", label: "Label terhubung ke input.", type: "contains", valueIncludes: "<label htmlFor={id}>{label}</label>" },
      { id: "input", label: "Input email punya state serta relationship yang diperlukan.", type: "contains", valueIncludes: 'type="email"\n        value={value}\n        disabled={disabled}\n        aria-invalid={Boolean(error)}\n        aria-describedby={error ? errorId : hint ? hintId : undefined}' },
      { id: "error", label: "Error dirender sebagai alert.", type: "contains", valueIncludes: '{error ? <p id={errorId} role="alert">{error}</p> : null}' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target FormField API",
    description: "Cek otomatis membaca structure CourseTextField. Preview tidak menjalankan React runtime; QA native input, label, error copy, keyboard, dan submit flow pada local component.",
    lines: ["Label, hint, error, dan input memiliki relationship yang jelas.", "Disabled serta email type tetap memakai behavior native.", "Error dapat dibaca sebagai context field, bukan hanya warna."],
  },
  skillTags: ["React", "Forms", "Accessibility", "Component API"],
};

export const buildCourseResultsTableChallenge: CodingChallenge = {
  id: "build-course-results-table",
  lessonId: "table-components",
  title: "Build course results table",
  description: "Buat table course dengan loading, empty state, caption, column headers, dan typed row mapping.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat CourseRow dan CourseTableProps dengan rows serta isLoading opsional.",
    "Tampilkan status loading dengan role status.",
    "Tampilkan empty message saat rows kosong.",
    "Saat data tersedia, render table dengan caption, thead, th scope col, tbody, dan key row.id.",
    "Cek otomatis membaca structure TSX. Preview tidak menjalankan React component pada practice ini.",
  ],
  starterCode: {
    ...productPracticeCode,
    tsx: `type CourseTableProps = { items: string[] };
export function CourseTable({ items }: CourseTableProps) {
  return <div>{items.join(", ")}</div>;
}`,
  },
  solutionCode: {
    ...productPracticeCode,
    tsx: `type CourseRow = { id: string; title: string; status: string; updatedAt: string };
type CourseTableProps = { rows: CourseRow[]; isLoading?: boolean };

export function CourseTable({ rows, isLoading = false }: CourseTableProps) {
  if (isLoading) return <p role="status">Memuat daftar course...</p>;
  if (rows.length === 0) return <p>Belum ada course. Buat course pertama saat siap.</p>;

  return (
    <table>
      <caption>Daftar course aktif</caption>
      <thead>
        <tr><th scope="col">Course</th><th scope="col">Status</th><th scope="col">Terakhir diubah</th></tr>
      </thead>
      <tbody>
        {rows.map((row) => <tr key={row.id}><td>{row.title}</td><td>{row.status}</td><td>{row.updatedAt}</td></tr>)}
      </tbody>
    </table>
  );
}`,
  },
  checklist: ["Loading dan empty state menjelaskan kondisi data.", "Table memakai caption dan column headers semantic.", "Row data typed serta key stabil dipakai saat render.", "Table dipilih karena user membandingkan row serta column."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "types", label: "Row dan table props typed tersedia.", type: "contains", valueIncludes: "type CourseRow = { id: string; title: string; status: string; updatedAt: string };\ntype CourseTableProps = { rows: CourseRow[]; isLoading?: boolean };" },
      { id: "loading", label: "Loading state memakai role status.", type: "contains", valueIncludes: 'if (isLoading) return <p role="status">Memuat daftar course...</p>;' },
      { id: "empty", label: "Empty state jelas tersedia.", type: "contains", valueIncludes: "if (rows.length === 0) return <p>Belum ada course. Buat course pertama saat siap.</p>;" },
      { id: "headers", label: "Table memiliki caption dan column headers.", type: "contains", valueIncludes: '<caption>Daftar course aktif</caption>\n      <thead>\n        <tr><th scope="col">Course</th><th scope="col">Status</th><th scope="col">Terakhir diubah</th></tr>' },
      { id: "rows", label: "Rows dirender dengan key stabil.", type: "contains", valueIncludes: "{rows.map((row) => <tr key={row.id}><td>{row.title}</td><td>{row.status}</td><td>{row.updatedAt}</td></tr>)}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Table states",
    description: "Cek otomatis membaca structure CourseTable. Preview tidak menjalankan React runtime; QA loading, empty, responsive overflow, dan data panjang pada consumer lokal.",
    lines: ["Loading dan empty state tidak meninggalkan grid kosong.", "Caption serta headers menjelaskan data table.", "Setiap row memakai key dari id stabil."],
  },
  skillTags: ["React", "Tables", "Loading State", "Empty State"],
};

export const auditCourseConfirmDialogChallenge: CodingChallenge = {
  id: "audit-course-confirm-dialog",
  lessonId: "product-modal",
  title: "Audit course confirm dialog",
  description: "Bangun structure confirm dialog dengan state open, label, description, safe cancel action, dan destructive confirm action.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat props isOpen, title, description, onCancel, dan onConfirm.",
    "Kembalikan null saat dialog tidak terbuka.",
    "Gunakan role dialog, aria-modal, aria-labelledby, dan aria-describedby.",
    "Render title, description, button Batal yang aman, serta action Hapus draft.",
    "Catat bahwa focus loop, Escape, background inert, dan focus return harus diuji saat runtime.",
    "Cek otomatis membaca structure TSX. Preview tidak menjalankan React component pada practice ini.",
  ],
  starterCode: {
    ...productPracticeCode,
    tsx: `type CourseConfirmDialogProps = { open?: boolean; heading: string };
export function CourseConfirmDialog({ heading }: CourseConfirmDialogProps) {
  return <div>{heading}</div>;
}`,
  },
  solutionCode: {
    ...productPracticeCode,
    tsx: `type CourseConfirmDialogProps = {
  isOpen: boolean;
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export function CourseConfirmDialog({ isOpen, title, description, onCancel, onConfirm }: CourseConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <section role="dialog" aria-modal="true" aria-labelledby="course-confirm-title" aria-describedby="course-confirm-description">
      <h2 id="course-confirm-title">{title}</h2>
      <p id="course-confirm-description">{description}</p>
      <button type="button" onClick={onCancel} autoFocus>Batal</button>
      <button type="button" onClick={onConfirm}>Hapus draft</button>
    </section>
  );
}`,
  },
  checklist: ["Dialog hanya dirender saat isOpen true.", "Dialog memiliki title serta description yang terhubung.", "Cancel dan confirm memiliki intent yang berbeda.", "Focus behavior lengkap tetap diuji saat runtime."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "props", label: "Modal props jelas tersedia.", type: "contains", valueIncludes: "type CourseConfirmDialogProps = {\n  isOpen: boolean;\n  title: string;\n  description: string;\n  onCancel: () => void;\n  onConfirm: () => void;\n};" },
      { id: "closed", label: "Dialog tidak dirender saat closed.", type: "contains", valueIncludes: "if (!isOpen) return null;" },
      { id: "dialog", label: "Dialog memiliki semantic modal label.", type: "contains", valueIncludes: '<section role="dialog" aria-modal="true" aria-labelledby="course-confirm-title" aria-describedby="course-confirm-description">' },
      { id: "content", label: "Title dan description terhubung ke dialog.", type: "contains", valueIncludes: '<h2 id="course-confirm-title">{title}</h2>\n      <p id="course-confirm-description">{description}</p>' },
      { id: "actions", label: "Safe dan destructive action tersedia.", type: "contains", valueIncludes: '<button type="button" onClick={onCancel} autoFocus>Batal</button>\n      <button type="button" onClick={onConfirm}>Hapus draft</button>' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Confirm dialog API",
    description: "Cek otomatis membaca structure dialog. Preview tidak menjalankan React runtime; QA focus entry, Tab containment, Escape, inert background, dan focus return dengan keyboard di local component.",
    lines: ["Dialog memiliki nama, description, cancel, serta confirm action.", "Dialog tidak dirender saat closed.", "Behavior modal lengkap tetap merupakan runtime responsibility."],
  },
  skillTags: ["React", "Modal", "Dialog", "Accessibility"],
};

export const buildCourseToastStatusChallenge: CodingChallenge = {
  id: "build-course-toast-status",
  lessonId: "toast-components",
  title: "Build course toast status",
  description: "Buat CourseToast dengan success/error tone, status announcement, dan dismiss action opsional.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat CourseToastTone untuk success dan error.",
    "Buat props tone, title, message, dan onDismiss opsional.",
    "Gunakan status/polite untuk success dan alert/assertive untuk error.",
    "Render dismiss button hanya bila onDismiss tersedia.",
    "Cek otomatis membaca structure TSX. Preview tidak menjalankan React component pada practice ini.",
  ],
  starterCode: {
    ...productPracticeCode,
    tsx: `type CourseToastProps = { text: string; isBad?: boolean };
export function CourseToast({ text }: CourseToastProps) { return <div>{text}</div>; }`,
  },
  solutionCode: {
    ...productPracticeCode,
    tsx: `type CourseToastTone = "success" | "error";
type CourseToastProps = { tone: CourseToastTone; title: string; message: string; onDismiss?: () => void };

export function CourseToast({ tone, title, message, onDismiss }: CourseToastProps) {
  const isError = tone === "error";
  return (
    <section className={"toast toast--" + tone} role={isError ? "alert" : "status"} aria-live={isError ? "assertive" : "polite"}>
      <strong>{title}</strong>
      <p>{message}</p>
      {onDismiss ? <button type="button" onClick={onDismiss} aria-label="Tutup notifikasi">Tutup</button> : null}
    </section>
  );
}`,
  },
  checklist: ["Tone membatasi intent feedback.", "Success dan error memakai urgency announcement berbeda.", "Dismiss hanya tampil bila action tersedia.", "Toast tidak menggantikan validation atau error persistent."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "tone", label: "Toast tone dibatasi union.", type: "contains", valueIncludes: 'type CourseToastTone = "success" | "error";' },
      { id: "props", label: "Toast props jelas tersedia.", type: "contains", valueIncludes: "type CourseToastProps = { tone: CourseToastTone; title: string; message: string; onDismiss?: () => void };" },
      { id: "urgency", label: "Role dan live region mengikuti urgency tone.", type: "contains", valueIncludes: '<section className={"toast toast--" + tone} role={isError ? "alert" : "status"} aria-live={isError ? "assertive" : "polite"}>' },
      { id: "dismiss", label: "Dismiss action opsional tersedia.", type: "contains", valueIncludes: '{onDismiss ? <button type="button" onClick={onDismiss} aria-label="Tutup notifikasi">Tutup</button> : null}' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Toast API",
    description: "Cek otomatis membaca structure CourseToast. Preview tidak menjalankan React runtime; QA timing, dismiss, queue, dan apakah feedback seharusnya persistent pada local consumer.",
    lines: ["Success dan error memiliki intent feedback yang eksplisit.", "Urgency announcement mengikuti tone.", "Toast tidak menggantikan error yang membutuhkan recovery."],
  },
  skillTags: ["React", "Toast", "ARIA Live Regions", "Feedback UX"],
};

export const buildCourseFilterSelectChallenge: CodingChallenge = {
  id: "build-course-filter-select",
  lessonId: "tabs-and-select",
  title: "Build course filter select",
  description: "Buat native select wrapper dengan label, typed options, current value, dan onChange callback.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat CourseFilterOption dengan value dan label.",
    "Buat props id, label, value, options, dan onChange.",
    "Gunakan label htmlFor dan select native dengan id yang sama.",
    "Render options dengan key dan value yang stabil.",
    "Cek otomatis membaca structure TSX. Preview tidak menjalankan React component pada practice ini.",
  ],
  starterCode: {
    ...productPracticeCode,
    tsx: `type CourseFilterProps = { selected?: string; choices: string[] };
export function CourseFilter({ choices }: CourseFilterProps) { return <div>{choices.length}</div>; }`,
  },
  solutionCode: {
    ...productPracticeCode,
    tsx: `type CourseFilterOption = { value: string; label: string };
type CourseFilterSelectProps = { id: string; label: string; value: string; options: CourseFilterOption[]; onChange: (nextValue: string) => void };

export function CourseFilterSelect({ id, label, value, options, onChange }: CourseFilterSelectProps) {
  return (
    <div className="filter-select">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}`,
  },
  checklist: ["Select memakai control native dan label eksplisit.", "Options typed serta key stabil dipakai saat render.", "Current value dan change event tetap milik caller.", "Custom select tidak dibuat tanpa requirement nyata."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "types", label: "Option serta select props typed tersedia.", type: "contains", valueIncludes: "type CourseFilterOption = { value: string; label: string };\ntype CourseFilterSelectProps = { id: string; label: string; value: string; options: CourseFilterOption[]; onChange: (nextValue: string) => void };" },
      { id: "label", label: "Label terhubung ke native select.", type: "contains", valueIncludes: "<label htmlFor={id}>{label}</label>\n      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>" },
      { id: "options", label: "Options memakai key dan value stabil.", type: "contains", valueIncludes: "{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target native Select API",
    description: "Cek otomatis membaca structure CourseFilterSelect. Preview tidak menjalankan React runtime; QA keyboard, mobile behavior, label, dan filter result pada local consumer.",
    lines: ["Select memakai browser-native interaction untuk memilih satu value.", "Label dan option data dapat dibaca jelas.", "State value tetap dikontrol oleh caller."],
  },
  skillTags: ["React", "Select", "Native HTML", "Accessibility"],
};

export const buildCourseInviteFormCheckpointChallenge: CodingChallenge = {
  id: "build-course-invite-form-checkpoint",
  lessonId: "product-components-assessment",
  title: "Build course invite form checkpoint",
  description: "Bangun InviteMemberForm dengan email field, status union, disabled submit, error relationship, dan live feedback yang sesuai.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat InviteFormStatus untuk idle, saving, success, dan error.",
    "Buat props email, error opsional, status, onEmailChange, dan onSubmit.",
    "Gunakan form, label, input type email, error alert, dan button disabled saat saving.",
    "Tampilkan status success sebagai status/polite dan request error sebagai alert/assertive.",
    "Jangan memakai boolean submit state yang dapat aktif bersamaan.",
    "Cek otomatis membaca structure TSX. Preview tidak menjalankan React component pada practice ini.",
  ],
  starterCode: {
    ...productPracticeCode,
    tsx: `type InviteMemberFormProps = { value: string; isLoading?: boolean; isSuccess?: boolean; hasError?: boolean };
export function InviteMemberForm({ value }: InviteMemberFormProps) { return <div>{value}</div>; }`,
  },
  solutionCode: {
    ...productPracticeCode,
    tsx: `type InviteFormStatus = "idle" | "saving" | "success" | "error";
type InviteMemberFormProps = {
  email: string;
  error?: string;
  status: InviteFormStatus;
  onEmailChange: (nextEmail: string) => void;
  onSubmit: () => void;
};

export function InviteMemberForm({ email, error, status, onEmailChange, onSubmit }: InviteMemberFormProps) {
  const errorId = "invite-email-error";
  const isSaving = status === "saving";
  const isSuccess = status === "success";
  const isRequestError = status === "error";

  return (
    <form onSubmit={(event) => { event.preventDefault(); onSubmit(); }}>
      <label htmlFor="invite-email">Email member</label>
      <input
        id="invite-email"
        type="email"
        value={email}
        disabled={isSaving}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onEmailChange(event.target.value)}
      />
      {error ? <p id={errorId} role="alert">{error}</p> : null}
      <button type="submit" disabled={isSaving}>{isSaving ? "Mengirim undangan..." : "Kirim undangan"}</button>
      {isSuccess ? <p role="status" aria-live="polite">Undangan terkirim.</p> : null}
      {isRequestError ? <p role="alert" aria-live="assertive">Undangan belum terkirim. Coba lagi.</p> : null}
    </form>
  );
}`,
  },
  checklist: ["Submit status dibatasi union tanpa boolean kontradiktif.", "Email field, label, error, dan button tetap memakai semantics native.", "Saving mengunci submit dan mengubah copy action.", "Success dan request error memakai feedback yang berbeda."],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "status", label: "Status submit dibatasi union.", type: "contains", valueIncludes: 'type InviteFormStatus = "idle" | "saving" | "success" | "error";' },
      { id: "props", label: "Invite form props jelas tersedia.", type: "contains", valueIncludes: "type InviteMemberFormProps = {\n  email: string;\n  error?: string;\n  status: InviteFormStatus;\n  onEmailChange: (nextEmail: string) => void;\n  onSubmit: () => void;\n};" },
      { id: "form", label: "Form mencegah reload dan memanggil submit owner.", type: "contains", valueIncludes: "<form onSubmit={(event) => { event.preventDefault(); onSubmit(); }}>" },
      { id: "field", label: "Email field memiliki semantic state yang benar.", type: "contains", valueIncludes: 'id="invite-email"\n        type="email"\n        value={email}\n        disabled={isSaving}\n        aria-invalid={Boolean(error)}\n        aria-describedby={error ? errorId : undefined}' },
      { id: "feedback", label: "Success dan request error memakai live feedback berbeda.", type: "contains", valueIncludes: '{isSuccess ? <p role="status" aria-live="polite">Undangan terkirim.</p> : null}\n      {isRequestError ? <p role="alert" aria-live="assertive">Undangan belum terkirim. Coba lagi.</p> : null}' },
      { id: "no-boolean", label: "Tidak memakai isLoading boolean lama.", type: "doesNotContain", valueIncludes: "isLoading" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Invite form checkpoint",
    description: "Cek otomatis membaca structure InviteMemberForm. Preview tidak menjalankan React runtime; QA submit dengan Enter, loading, error recovery, success announcement, focus, dan server response pada local consumer.",
    lines: ["Submit state tidak memiliki boolean yang saling bertentangan.", "Email field dan validation feedback tetap dapat dipahami user.", "Success serta request error memberi announcement sesuai urgency."],
  },
  skillTags: ["React", "Forms", "Status State", "Accessibility", "Assessment"],
};
