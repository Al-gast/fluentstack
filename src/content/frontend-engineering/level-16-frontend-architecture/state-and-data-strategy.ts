import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const stateStrategyPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const stateAndDataStrategyModule: Module = {
  id: "state-and-data-strategy",
  trackId: "frontend-engineering",
  title: "State and Data Strategy",
  slug: "state-and-data-strategy",
  description:
    "Memilih rumah yang tepat untuk data server, state URL, UI lokal, persistence, dan recovery tanpa menjadikan global state sebagai jawaban default.",
  order: 51,
  lessonIds: [
    "architecture-server-state-client-state",
    "architecture-url-state",
    "architecture-local-state",
    "architecture-persistence-boundaries",
    "architecture-error-strategy",
    "state-and-data-strategy-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "State Strategy",
    "Server State",
    "URL State",
    "Persistence",
    "Error Recovery",
  ],
};

export const architectureServerStateClientStateLesson: Lesson = {
  id: "architecture-server-state-client-state",
  trackId: "frontend-engineering",
  moduleId: "state-and-data-strategy",
  title: "Server State vs Client State",
  slug: "architecture-server-state-client-state",
  description:
    "Memetakan sumber kebenaran data pada sebuah feature sebelum memilih hook, storage, atau global state.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan source of truth server dari state yang hanya mengatur pengalaman UI saat ini",
    "Membaca satu feature sebagai kumpulan data dengan lifecycle yang berbeda",
    "Menghindari penyalinan server data ke state lokal tanpa alasan yang jelas",
    "Memilih rumah state sebelum memilih library atau global store",
  ],
  skillTags: ["State Strategy", "Server State", "Client State", "React"],
  blocks: [
    {
      id: "architecture-server-state-client-state-intro",
      type: "text",
      title: "Mulai dari sumber kebenaran, bukan nama hook",
      content:
        "Satu feature courses dapat memiliki daftar course dari backend, query pencarian yang ingin dibagikan, panel filter yang hanya terbuka pada layar user saat ini, serta preferensi yang ingin diingat setelah browser ditutup. Semuanya sering disebut state, tetapi lifecycle dan owner-nya berbeda. Server state memiliki sumber kebenaran di backend atau layanan eksternal. Client state adalah istilah payung untuk state yang dikelola browser, lalu perlu dipecah lagi: URL state untuk keputusan yang dapat dibagikan, local UI state untuk interaksi sementara, dan persisted state untuk preferensi atau draft yang memang perlu bertahan.\n\nSebelum membuat Context, reducer, atau store, tulis data apa yang dimiliki feature dan tanyakan empat hal: siapa sumber kebenarannya, apakah state harus selamat setelah refresh, apakah user lain perlu dapat membuka URL yang sama, dan apa yang terjadi jika data gagal didapat. Jawaban itu biasanya membuat rumah state terlihat lebih jelas daripada memilih library lebih dahulu.",
    },
    {
      id: "architecture-server-state-client-state-example",
      type: "code-example",
      title: "Peta awal untuk feature course catalog",
      language: "ts",
      code: `type StateHome = "server" | "url" | "local" | "persisted";

const courseCatalogState = {
  courses: "server",
  completionByCourseId: "server",
  searchQuery: "url",
  page: "url",
  isFilterPanelOpen: "local",
  dismissedKeyboardTip: "persisted",
} satisfies Record<string, StateHome>;`,
      explanation:
        "courses dan completionByCourseId perlu dikonfirmasi backend. searchQuery dan page layak berada di URL karena hasilnya dapat di-refresh, diberi bookmark, atau dikirim ke rekan kerja. isFilterPanelOpen hanya relevan selama user berinteraksi dengan page saat ini. dismissedKeyboardTip boleh disimpan lokal bila itu preferensi personal non-kritis. Peta ini belum menentukan API atau library; ia hanya menjaga keputusan arsitektur tetap dapat dijelaskan.",
    },
    {
      id: "architecture-server-state-client-state-coding-practice",
      type: "coding-practice",
      challengeId: "classify-course-state-owners",
    },
    {
      id: "architecture-server-state-client-state-quick-check",
      type: "quick-check",
      question:
        "Data manakah yang paling tepat dianggap server state pada feature course catalog?",
      options: [
        "Status completion lesson yang disimpan pada akun learner.",
        "Panel filter yang sedang terbuka di browser saat ini.",
        "Tab visual yang dipilih untuk melihat filter atau urutan.",
        "Tinggi panel yang sementara diubah user saat ini.",
      ],
      correctAnswer: "Status completion lesson yang disimpan pada akun learner.",
      explanation:
        "Completion harus dapat dipercaya lintas device dan dapat berubah dari workflow lain, sehingga backend menjadi sumber kebenarannya. Panel, tab, atau ukuran sementara hanya mengatur UI saat ini.",
    },
    {
      id: "architecture-server-state-client-state-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menyimpan hasil perhitungan sebagai state kedua",
      content:
        "Jika visibleCourses dapat dihitung dari courses, query, dan filter aktif, jangan buat state tambahan yang menyimpan daftar hasilnya kecuali ada alasan lifecycle yang konkret. Dua salinan data mudah tidak sinkron setelah fetch, mutation, atau perubahan URL. Simpan source yang dibutuhkan, lalu hitung nilai turunan saat render atau di boundary yang tepat.",
    },
    {
      id: "architecture-server-state-client-state-summary",
      type: "summary",
      points: [
        "Server state memiliki sumber kebenaran di backend atau layanan eksternal.",
        "Client state perlu dipisah lagi menjadi URL, local UI, dan persisted state berdasarkan lifecycle-nya.",
        "Peta ownership dibuat sebelum memilih Context, query library, atau global store.",
        "Nilai turunan sebaiknya dihitung dari source yang ada agar tidak membuat state duplikat.",
        "Berikutnya, kita memindahkan keputusan filter yang shareable ke URL.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "architecture-server-state-client-state-intro",
      "architecture-server-state-client-state-example",
      "architecture-server-state-client-state-coding-practice",
      "architecture-server-state-client-state-quick-check",
      "architecture-server-state-client-state-summary",
    ],
  },
};

export const architectureUrlStateLesson: Lesson = {
  id: "architecture-url-state",
  trackId: "frontend-engineering",
  moduleId: "state-and-data-strategy",
  title: "URL State",
  slug: "architecture-url-state",
  description:
    "Menaruh filter, pencarian, pagination, dan pilihan yang dapat dibagikan di URL tanpa menjadikan semua interaksi UI sebagai query parameter.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Mengidentifikasi state yang harus selamat saat refresh atau dapat dibagikan lewat URL",
    "Membedakan filter data dari UI panel filter yang membukanya",
    "Menyusun query parameter yang memiliki default dan parsing yang eksplisit",
    "Menghindari URL sebagai tempat untuk setiap detail visual sementara",
  ],
  skillTags: ["URL State", "Next.js", "Search Params", "Product UX"],
  blocks: [
    {
      id: "architecture-url-state-intro",
      type: "text",
      title: "URL adalah contract untuk keadaan yang dapat dibuka kembali",
      content:
        "Ketika learner mencari course dengan query, memilih level, lalu membuka page kedua, URL yang mewakili keputusan tersebut memberi dua manfaat nyata: refresh tidak menghapus konteks dan link dapat dibagikan ke orang lain. URL state juga membuat browser back, forward, bookmark, serta analytics memiliki arti yang konsisten. Sebaliknya, isFilterPanelOpen, tooltip yang sedang terlihat, dan focus input tidak perlu masuk URL karena tidak membantu orang lain memahami hasil yang sedang dilihat.\n\nJaga parameter kecil, bernama jelas, dan memiliki default. URL bukan database untuk seluruh object filter atau setiap keystroke sementara. Tentukan juga siapa yang membaca parameter dan kapan nilai tidak valid dikembalikan ke default aman. Pada App Router, search params menjadi input page atau client interaction yang perlu diperlakukan sebagai input eksternal, bukan sekadar string acak yang langsung dipercaya.",
    },
    {
      id: "architecture-url-state-example",
      type: "code-example",
      title: "Membuat URL course list dari filter shareable",
      language: "ts",
      code: `type CourseFilter = {
  query: string;
  level: "beginner" | "intermediate" | "advanced";
  page: number;
};

export function getCourseListUrl(filter: CourseFilter) {
  const params = new URLSearchParams();

  if (filter.query) params.set("query", filter.query);
  params.set("level", filter.level);
  params.set("page", String(filter.page));

  return "/courses?" + params.toString();
}`,
      explanation:
        "Function ini mengubah keputusan yang terlihat user menjadi link yang dapat dibuka ulang. Di page nyata, parse query, level, dan page dengan default sebelum melakukan query data. Jangan ikut menaruh isFilterPanelOpen ke URL: ia hanya menentukan apakah control terlihat, bukan course mana yang menjadi hasil catalog.",
    },
    {
      id: "architecture-url-state-coding-practice",
      type: "coding-practice",
      challengeId: "move-course-filter-to-url-state",
    },
    {
      id: "architecture-url-state-quick-check",
      type: "quick-check",
      question:
        "Manakah pasangan yang paling tepat untuk URL state pada halaman catalog course?",
      options: [
        "Query pencarian, level, dan nomor halaman hasil.",
        "Status popover bantuan, focus field, dan animasi card yang sedang berjalan.",
        "Password login, draft jawaban pribadi, dan token session.",
        "Tinggi viewport, posisi cursor, dan warna hover button.",
      ],
      correctAnswer: "Query pencarian, level, dan nomor halaman hasil.",
      explanation:
        "Ketiganya menjelaskan hasil catalog yang user lihat dan layak selamat saat refresh atau dibagikan. Detail UI sementara serta data sensitif tidak cocok menjadi query parameter.",
    },
    {
      id: "architecture-url-state-callout",
      type: "callout",
      variant: "important",
      title: "URL state adalah input yang perlu divalidasi",
      content:
        "User dapat mengedit query parameter secara manual atau membuka link lama. Parse page sebagai angka yang aman, batasi enum seperti level, dan tentukan default bila nilai tidak valid. Jangan mengasumsikan parameter URL selalu memenuhi type internal hanya karena TypeScript memberi type yang rapi setelah parsing.",
    },
    {
      id: "architecture-url-state-summary",
      type: "summary",
      points: [
        "Gunakan URL state untuk keputusan data yang perlu selamat saat refresh atau dapat dibagikan.",
        "Filter, search, sort, dan pagination adalah kandidat yang umum; panel UI yang membukanya biasanya bukan.",
        "Parameter perlu nama jelas, default, serta parsing yang defensif.",
        "Jangan menaruh data sensitif atau detail visual sementara di URL.",
        "Berikutnya, kita menjaga state interaksi yang tidak perlu dibagikan tetap dekat component pemiliknya.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "architecture-url-state-intro",
      "architecture-url-state-example",
      "architecture-url-state-coding-practice",
      "architecture-url-state-quick-check",
      "architecture-url-state-summary",
    ],
  },
};

export const architectureLocalStateLesson: Lesson = {
  id: "architecture-local-state",
  trackId: "frontend-engineering",
  moduleId: "state-and-data-strategy",
  title: "Local State",
  slug: "architecture-local-state",
  description:
    "Menjaga modal, input, toggle, dan detail interaksi dekat component yang memakai state tersebut.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Memilih owner terdekat untuk state UI sementara",
    "Membedakan state yang perlu diangkat dari state yang cukup colocated",
    "Menghindari Context atau global store untuk satu interaksi component",
    "Membuat state UI lebih mudah dihapus, diubah, dan diuji bersama component-nya",
  ],
  skillTags: ["React", "Local State", "State Colocation", "Component Design"],
  blocks: [
    {
      id: "architecture-local-state-intro",
      type: "text",
      title: "Letakkan state sedekat mungkin dengan consumer-nya",
      content:
        "State modal, disclosure, input sementara, selected tab, dan toggle biasanya tidak perlu diketahui seluruh page. Menaruhnya pada component terdekat membuat code menjawab pertanyaan dasar dengan cepat: siapa yang mengubah state, UI mana yang merespons, dan kapan state hilang. Ini juga membatasi rerender, coupling, dan jumlah file yang harus dibaca saat behavior kecil berubah.\n\nState perlu diangkat hanya ketika beberapa component benar-benar harus tetap sinkron atau parent perlu menentukan hasilnya. Bahkan dalam situasi itu, angkat ke common parent terdekat, bukan langsung ke global store. Context cocok untuk concern lintas tree yang stabil seperti theme atau session data yang memang dipakai banyak area; ia bukan jalan pintas agar props tidak terlihat. Mulai local, lalu pindahkan hanya ketika consumer dan lifecycle membuktikan kebutuhan baru.",
    },
    {
      id: "architecture-local-state-example",
      type: "code-example",
      title: "Panel filter memiliki toggle-nya sendiri",
      language: "tsx",
      code: `import { useState } from "react";

type CourseFilterPanelProps = {
  initialQuery: string;
};

export function CourseFilterPanel({ initialQuery }: CourseFilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setIsOpen((current) => !current)}>
        {isOpen ? "Tutup filter" : "Buka filter"}
      </button>
      {isOpen ? <p>Filter untuk: {initialQuery}</p> : null}
    </section>
  );
}`,
      explanation:
        "Hanya CourseFilterPanel yang membutuhkan isOpen, maka state tinggal di sana. initialQuery dapat datang dari URL state atau parent sebagai input; panel hanya mengatur apakah control detail sedang terbuka. Jika beberapa component perlu membuka panel yang sama, pindahkan state ke parent yang menaungi mereka dan tetap jaga API event-nya kecil.",
    },
    {
      id: "architecture-local-state-coding-practice",
      type: "coding-practice",
      challengeId: "keep-course-panel-state-local",
    },
    {
      id: "architecture-local-state-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih satu state UI pada project React atau Next.js lokal, misalnya modal, dropdown, filter panel, selected tab, atau input pencarian. Jelaskan component yang benar-benar membaca dan mengubah state tersebut, apakah ada sibling yang harus sinkron, serta owner paling kecil yang kamu pilih. Sebutkan alasan state ini tidak perlu langsung memakai Context atau global store. Jika state perlu diangkat, jelaskan common parent terdekatnya.",
      placeholder:
        "Saya memilih isResourcePanelOpen pada LessonResources. State ini hanya dibaca untuk menampilkan daftar link dan diubah oleh button di component yang sama. Tidak ada sibling yang perlu mengetahui panel terbuka, sehingga state berada di LessonResources dengan useState. Parent lesson hanya mengirim resources sebagai props. Saya tidak memakai Context karena tidak ada consumer lintas tree dan tidak ada requirement agar panel terbuka bertahan setelah berpindah route. Jika header lesson nanti juga harus membuka panel yang sama, saya akan mengangkat isResourcePanelOpen ke LessonDetail sebagai common parent, bukan ke store global.",
      minimumCharacters: 500,
      checklist: [
        "Menyebut state UI serta component yang membaca dan mengubahnya.",
        "Menjelaskan apakah sibling perlu tetap sinkron.",
        "Memilih owner paling kecil atau common parent yang spesifik.",
        "Menjelaskan alasan Context atau global store belum diperlukan.",
      ],
      modelAnswer:
        "Saya meninjau isNotesPanelOpen pada LessonNotes. State ini hanya menentukan apakah panel catatan terlihat, dibaca oleh LessonNotes, dan diubah oleh trigger pada component yang sama. Tidak ada sibling yang harus menyesuaikan tampilan ketika panel terbuka, sehingga useState berada langsung di LessonNotes. Lesson page tetap mengirim noteCount sebagai props bila diperlukan, tetapi page tidak perlu mengetahui detail open atau close. Saya tidak memakai Context atau global store karena state tidak shareable, tidak perlu bertahan setelah route berubah, dan tidak dipakai area lain. Bila action di LessonToolbar dan LessonNotes nantinya sama-sama perlu membuka panel, saya akan mengangkat state ke LessonDetail, yaitu common parent terdekat, lalu memberi callback yang jelas ke kedua component.",
    },
    {
      id: "architecture-local-state-quick-check",
      type: "quick-check",
      question:
        "Kapan isOpen sebuah dialog paling tepat diangkat dari Dialog component ke parent?",
      options: [
        "Ketika parent atau sibling perlu membuka, menutup, atau merespons dialog yang sama secara terkoordinasi.",
        "Setiap kali dialog hanya memiliki satu trigger di component yang sama.",
        "Saat developer ingin mengurangi jumlah useState tanpa melihat consumer-nya.",
        "Saat dialog belum pernah dipakai dalam product.",
      ],
      correctAnswer:
        "Ketika parent atau sibling perlu membuka, menutup, atau merespons dialog yang sama secara terkoordinasi.",
      explanation:
        "State perlu berada pada owner terendah yang dapat mengoordinasikan seluruh consumer. Jika hanya dialog dan trigger internal yang memakainya, colocation di component tetap lebih jelas.",
    },
    {
      id: "architecture-local-state-summary",
      type: "summary",
      points: [
        "Local UI state dimulai dekat component yang membaca dan mengubahnya.",
        "Angkat state ke common parent terdekat hanya ketika consumer perlu sinkron.",
        "Context dan global store bukan pengganti keputusan ownership yang jelas.",
        "Colocation membuat interaksi kecil lebih mudah diuji, diubah, dan dihapus.",
        "Berikutnya, kita menentukan state mana yang memang perlu bertahan setelah refresh dan di mana ia disimpan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "architecture-local-state-intro",
      "architecture-local-state-example",
      "architecture-local-state-coding-practice",
      "architecture-local-state-writing-practice",
      "architecture-local-state-quick-check",
      "architecture-local-state-summary",
    ],
  },
};

export const architecturePersistenceBoundariesLesson: Lesson = {
  id: "architecture-persistence-boundaries",
  trackId: "frontend-engineering",
  moduleId: "state-and-data-strategy",
  title: "Persistence Boundaries",
  slug: "architecture-persistence-boundaries",
  description:
    "Memilih antara URL, localStorage, sessionStorage, dan backend berdasarkan nilai data, lifecycle, serta kebutuhan lintas device.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menentukan state yang perlu bertahan setelah refresh atau browser ditutup",
    "Membedakan localStorage, sessionStorage, URL, dan backend persistence",
    "Menjaga data akun serta source of truth tetap berada di backend",
    "Menghindari penyimpanan data sensitif atau object besar di browser storage tanpa alasan",
  ],
  skillTags: ["Persistence", "localStorage", "sessionStorage", "Backend", "Browser APIs"],
  blocks: [
    {
      id: "architecture-persistence-boundaries-intro",
      type: "text",
      title: "Persist hanya ketika lifecycle product memintanya",
      content:
        "State tidak perlu disimpan hanya karena dapat disimpan. URL cocok untuk keadaan yang dapat dibagikan seperti query, filter, dan halaman. localStorage cocok untuk preferensi personal non-sensitif yang dapat bertahan antar sesi pada browser yang sama, misalnya theme atau tip onboarding yang sudah ditutup. sessionStorage cocok untuk data sementara per tab seperti draft flow pendek yang boleh hilang saat tab ditutup. Backend diperlukan untuk data akun, progress belajar, bookmark, atau keputusan yang perlu konsisten lintas device dan dapat diverifikasi server.\n\nBrowser storage bukan pengganti database. localStorage dan sessionStorage bersifat synchronous, dapat dibersihkan user, serta tidak aman untuk secret, token sensitif, atau source of truth data product. Tentukan juga fallback ketika storage tidak tersedia dan jangan membuat page gagal render hanya karena satu preferensi tidak dapat dibaca. Data yang hanya membantu kenyamanan UI perlu diperlakukan sebagai cache atau preference, bukan fakta produk.",
    },
    {
      id: "architecture-persistence-boundaries-example",
      type: "code-example",
      title: "Matriks persistence untuk learning feature",
      language: "ts",
      code: `type PersistenceHome =
  | "url"
  | "localStorage"
  | "sessionStorage"
  | "backend";

const learningFeaturePersistence = {
  searchQuery: "url",
  selectedLevel: "url",
  preferredTheme: "localStorage",
  unfinishedFeedbackDraft: "sessionStorage",
  lessonCompletion: "backend",
} satisfies Record<string, PersistenceHome>;`,
      explanation:
        "searchQuery dan selectedLevel perlu membuat hasil yang dapat dibuka ulang. preferredTheme adalah preferensi personal pada satu browser. Draft feedback sementara dapat hilang ketika tab ditutup tanpa merusak data akun. lessonCompletion harus tetap konsisten saat learner berganti device, sehingga backend adalah source of truth. Kalau draft memiliki nilai kerja nyata, persyaratan product mungkin berubah dan backend draft menjadi pilihan yang lebih tepat.",
    },
    {
      id: "architecture-persistence-boundaries-coding-practice",
      type: "coding-practice",
      challengeId: "choose-course-persistence-boundary",
    },
    {
      id: "architecture-persistence-boundaries-quick-check",
      type: "quick-check",
      question:
        "Di mana completion lesson learner seharusnya disimpan sebagai sumber kebenaran?",
      options: [
        "Backend yang terkait dengan akun learner.",
        "localStorage saja karena mudah diakses dari browser.",
        "sessionStorage karena data akan hilang saat tab ditutup.",
        "URL query parameter agar completion dapat dibagikan.",
      ],
      correctAnswer: "Backend yang terkait dengan akun learner.",
      explanation:
        "Completion adalah data product yang perlu bertahan lintas device, dapat diproses oleh aturan server, dan tidak boleh hilang ketika storage browser dibersihkan. Browser storage dapat membantu cache atau guest mode, tetapi bukan source of truth akun.",
    },
    {
      id: "architecture-persistence-boundaries-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan simpan secret atau identitas sensitif sebagai convenience cache",
      content:
        "Jangan menyimpan password, access token sensitif, atau data pribadi yang tidak diperlukan di localStorage demi menghemat satu request. Setiap data browser storage dapat dibaca JavaScript pada origin tersebut dan lifecycle-nya berbeda dari security policy aplikasi. Ikuti pola auth dan session yang dirancang aplikasi, lalu batasi browser storage untuk data yang memang aman serta dapat hilang.",
    },
    {
      id: "architecture-persistence-boundaries-summary",
      type: "summary",
      points: [
        "URL menyimpan state shareable; localStorage menyimpan preferensi browser yang non-sensitif; sessionStorage cocok untuk konteks sementara per tab.",
        "Backend memegang data akun dan fakta product yang perlu konsisten lintas device.",
        "Browser storage adalah cache atau preference, bukan pengganti database serta security boundary.",
        "Pilih persistence berdasarkan nilai data, lifecycle, privacy, dan recovery ketika storage hilang.",
        "Berikutnya, kita memetakan kondisi gagal dan tindakan pemulihan pada setiap flow data.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "architecture-persistence-boundaries-intro",
      "architecture-persistence-boundaries-example",
      "architecture-persistence-boundaries-coding-practice",
      "architecture-persistence-boundaries-quick-check",
      "architecture-persistence-boundaries-summary",
    ],
  },
};

export const architectureErrorStrategyLesson: Lesson = {
  id: "architecture-error-strategy",
  trackId: "frontend-engineering",
  moduleId: "state-and-data-strategy",
  title: "Error Strategy",
  slug: "architecture-error-strategy",
  description:
    "Menyusun owner, copy, dan recovery path yang berbeda untuk loading, error, empty, serta success state sebuah feature.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan error dari empty state dan state yang belum selesai dimuat",
    "Menentukan siapa yang dapat melakukan recovery untuk setiap failure",
    "Menulis error copy yang menjelaskan dampak serta tindakan berikutnya",
    "Menghindari fallback yang menyembunyikan kegagalan sebagai data kosong",
  ],
  skillTags: ["Error Strategy", "Recovery", "Server State", "UX Writing"],
  blocks: [
    {
      id: "architecture-error-strategy-intro",
      type: "text",
      title: "Setiap failure harus memiliki owner dan jalan pulih",
      content:
        "Error strategy bukan sekadar menambahkan catch lalu menampilkan pesan merah. Mulai dengan membedakan scope failure: page tidak dapat memuat catalog, card individual gagal menampilkan thumbnail, mutation bookmark ditolak, atau parameter URL tidak valid. Scope menentukan UI mana yang tetap berguna, siapa yang menawarkan recovery, dan apakah retry aman. Error pada list course tidak boleh berubah menjadi Belum ada course karena user akan mengambil keputusan dari informasi yang salah.\n\nSetiap data flow perlu state minimal yang jujur: loading, error, empty, dan ready atau success. Error copy sebaiknya menyebut apa yang gagal tanpa membocorkan detail teknis yang tidak membantu, lalu menawarkan action yang benar seperti Coba lagi, Ubah filter, Masuk kembali, atau Hubungi support. Action recovery harus memiliki owner nyata; tombol retry yang tidak memanggil operation ulang hanya menciptakan harapan palsu.",
    },
    {
      id: "architecture-error-strategy-example",
      type: "code-example",
      title: "Course feed membedakan error dari hasil kosong",
      language: "tsx",
      code: `type CourseFeedState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; total: number };

type CourseFeedProps = {
  state: CourseFeedState;
  onRetry: () => void;
};

export function CourseFeed({ state, onRetry }: CourseFeedProps) {
  if (state.status === "loading") {
    return <p aria-busy="true">Memuat course...</p>;
  }

  if (state.status === "error") {
    return (
      <section role="alert">
        <p>{state.message}</p>
        <button type="button" onClick={onRetry}>Coba lagi</button>
      </section>
    );
  }

  if (state.status === "empty") {
    return <p>Belum ada course yang cocok. Ubah filter lalu coba lagi.</p>;
  }

  return <p>{state.total} course siap dipelajari.</p>;
}`,
      explanation:
        "Error membawa pesan serta callback recovery. Empty bukan kegagalan: request berhasil, tetapi hasil memang tidak ada sehingga action yang tepat adalah mengubah filter. onRetry dimiliki caller yang mengetahui cara menjalankan request kembali. Pada implementation nyata, hindari retry otomatis tanpa batas dan pertahankan context filter saat user mencoba lagi.",
    },
    {
      id: "architecture-error-strategy-coding-practice",
      type: "coding-practice",
      challengeId: "map-course-error-recovery",
    },
    {
      id: "architecture-error-strategy-writing-practice",
      type: "writing-practice",
      prompt:
        "Buat error strategy ringkas untuk satu feature yang memuat data, misalnya course catalog, saved lessons, atau profile. Jelaskan loading, error, empty, dan success state. Untuk error, sebutkan scope failure, copy yang akan dilihat user, action recovery, owner yang menjalankan recovery, dan kapan retry tidak boleh otomatis dilakukan. Tambahkan satu hal yang harus tetap dapat dipakai user ketika sebagian data gagal.",
      placeholder:
        "Pada saved lessons, loading menampilkan skeleton list dan label Memuat lesson tersimpan. Jika request daftar gagal, page menampilkan alert: Lesson tersimpan belum dapat dimuat. Coba lagi dalam beberapa saat, dengan button Coba lagi yang memanggil refetch dari hook list. Empty hanya muncul ketika response berhasil tetapi daftar memang kosong; copy-nya mengarahkan learner kembali ke catalog. Success menampilkan list dan tanggal pembaruan. Retry tidak otomatis untuk error 401; user perlu masuk kembali. Jika thumbnail satu card gagal, title serta link lesson tetap tampil dan thumbnail memakai fallback, sehingga learner masih dapat membuka lesson.",
      minimumCharacters: 600,
      checklist: [
        "Membedakan loading, error, empty, dan success secara jelas.",
        "Menjelaskan scope failure serta copy yang relevan bagi user.",
        "Menyebut action recovery dan owner yang menjalankan action tersebut.",
        "Menjelaskan satu kondisi ketika retry tidak boleh otomatis.",
        "Menyebut UI atau action yang tetap tersedia saat sebagian data gagal.",
      ],
      modelAnswer:
        "Untuk course catalog, loading menampilkan skeleton yang mempertahankan ruang list dan copy Memuat course sesuai filter kamu. Bila request catalog gagal, section utama menampilkan alert: Course belum dapat dimuat. Periksa koneksi lalu coba lagi, dengan button Coba lagi yang memanggil refetch pada owner data query. Empty hanya muncul setelah response berhasil tanpa item, dengan action Ubah filter agar learner dapat kembali ke hasil yang mungkin ada. Success menampilkan list, jumlah hasil, dan filter aktif. Saya tidak menjalankan retry otomatis untuk error 401 atau 403 karena masalahnya bukan koneksi sementara; UI perlu mengarahkan user untuk masuk kembali atau menunjukkan akses yang diperlukan. Jika satu image course gagal, CourseCard tetap menunjukkan title, level, dan link detail dengan placeholder image sehingga catalog tetap dapat dipakai."
    },
    {
      id: "architecture-error-strategy-quick-check",
      type: "quick-check",
      question:
        "Respons terbaik saat request catalog gagal karena jaringan adalah",
      options: [
        "Tampilkan error yang jelas dan tombol retry yang benar-benar menjalankan request ulang.",
        "Tampilkan empty state agar page tetap terlihat tenang.",
        "Kosongkan array lalu simpan hasil kosong sebagai cache baru.",
        "Selalu reload seluruh browser tanpa memberi context kepada user.",
      ],
      correctAnswer:
        "Tampilkan error yang jelas dan tombol retry yang benar-benar menjalankan request ulang.",
      explanation:
        "User perlu mengetahui bahwa data belum dapat dipercaya. Recovery yang tepat mempertahankan context dan memberi mereka kontrol untuk mencoba operation yang gagal lagi.",
    },
    {
      id: "architecture-error-strategy-summary",
      type: "summary",
      points: [
        "Loading, error, empty, dan success menjawab kondisi yang berbeda dan membutuhkan copy berbeda.",
        "Error strategy menentukan scope failure, owner recovery, dan action yang benar-benar bekerja.",
        "Jangan menyamarkan error sebagai empty state atau menyembunyikan failure di balik fallback data kosong.",
        "Partial failure dapat tetap menyisakan action atau content yang berguna bila boundary UI dirancang dengan tepat.",
        "Uji Kompetensi berikutnya meminta kamu memetakan seluruh state serta recovery satu feature tanpa menjadikan global store sebagai default.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "architecture-error-strategy-intro",
      "architecture-error-strategy-example",
      "architecture-error-strategy-coding-practice",
      "architecture-error-strategy-writing-practice",
      "architecture-error-strategy-quick-check",
      "architecture-error-strategy-summary",
    ],
  },
};

export const stateAndDataStrategyAssessmentLesson: Lesson = {
  id: "state-and-data-strategy-assessment",
  trackId: "frontend-engineering",
  moduleId: "state-and-data-strategy",
  title: "Uji Kompetensi State and Data Strategy",
  slug: "state-and-data-strategy-assessment",
  description:
    "Membuktikan kesiapan memetakan ownership state, persistence, serta recovery path untuk satu feature frontend berukuran menengah.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Menyusun peta state dan data ownership untuk satu feature nyata",
    "Memilih URL, local UI, browser persistence, atau backend dengan alasan lifecycle yang jelas",
    "Mendefinisikan loading, error, empty, success, serta recovery path",
    "Menjelaskan mengapa global state tidak diperlukan sebelum ada consumer dan lifecycle yang nyata",
  ],
  skillTags: ["State Strategy", "Data Ownership", "Error Recovery", "Next.js", "Readiness Checkpoint"],
  blocks: [
    {
      id: "state-and-data-strategy-assessment-recap",
      type: "text",
      title: "Checkpoint: buat state course catalog dapat dijelaskan dari lifecycle-nya",
      content:
        "Tim sedang membangun course catalog dengan daftar course dari backend, completion learner, query pencarian, level filter, nomor halaman, panel filter, theme preference, draft feedback pendek, dan error saat catalog gagal dimuat. Mereka mempertimbangkan satu global store untuk seluruh data karena jumlah state mulai terlihat banyak. Pada checkpoint ini, pilih rumah berdasarkan lifecycle: backend memegang course dan completion, URL memegang keputusan hasil yang dapat dibagikan, component memegang panel sementara, browser storage hanya membantu preference atau draft dengan batas yang jelas, dan error memiliki recovery owner. Tujuanmu bukan menunjukkan banyak tooling, tetapi membuat engineer lain dapat menjawab mengapa setiap data tinggal di tempatnya dan apa yang terjadi bila user refresh, membagikan URL, mengganti device, atau request gagal.",
    },
    {
      id: "state-and-data-strategy-assessment-quiz",
      type: "quiz",
      quizId: "state-and-data-strategy-assessment-quiz",
    },
    {
      id: "state-and-data-strategy-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-state-data-strategy-checkpoint",
    },
    {
      id: "state-and-data-strategy-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis state and data strategy note untuk feature course catalog pada project lokal atau case study ini. Daftarkan setidaknya satu server state, URL state, local UI state, persisted browser state, dan backend-persisted data. Untuk setiap keputusan, jelaskan source of truth, apakah harus selamat saat refresh, apakah boleh dibagikan lewat URL, dan alasan memilih rumah tersebut. Tambahkan peta loading/error/empty/success beserta satu recovery path. Tutup dengan alasan mengapa Context atau global store dipakai atau sengaja belum dipakai.",
      placeholder:
        "courses dan completion berada di backend karena sumber kebenarannya lintas device. query, level, dan page berada di URL karena menentukan hasil catalog, bertahan saat refresh, dan dapat dibagikan. isFilterPanelOpen berada di CourseFilterPanel karena hanya mengatur UI sementara. preferredTheme memakai localStorage karena merupakan preferensi non-sensitif pada browser ini; draft feedback pendek memakai sessionStorage agar tidak menjadi data akun. Saat catalog loading, tampilkan skeleton; saat error, tampilkan alert dan retry yang memanggil refetch; saat empty, arahkan user mengubah filter; saat success, tampilkan list. Saya belum memakai global store karena state memiliki consumer dan lifecycle yang berbeda; CourseFilterPanel cukup local dan page dapat membaca URL serta data query melalui boundary yang jelas.",
      minimumCharacters: 850,
      checklist: [
        "Membedakan server, URL, local UI, browser-persisted, dan backend-persisted data dengan contoh nyata.",
        "Menjelaskan source of truth, refresh behavior, dan shareability untuk tiap keputusan penting.",
        "Membedakan loading, error, empty, serta success state dengan action recovery yang jelas.",
        "Menyebut batas keamanan atau lifecycle browser storage bila digunakan.",
        "Menjelaskan alasan memakai atau menunda Context/global store berdasarkan consumer nyata.",
      ],
      modelAnswer:
        "Pada feature course catalog, courses dan completionByCourseId adalah server state dengan backend sebagai source of truth karena learner dapat membuka app dari device lain dan completion mungkin berubah setelah mutation. query, level, dan page adalah URL state: semuanya menentukan hasil yang tampil, harus bertahan saat refresh, dan perlu dapat dibagikan lewat link. isFilterPanelOpen tetap ada di CourseFilterPanel karena hanya button serta panel tersebut yang membacanya; bila toolbar dan panel kelak perlu sinkron, state akan naik ke CourseCatalog sebagai common parent. preferredTheme dapat berada di localStorage sebagai preference non-sensitif pada browser ini, sedangkan draft feedback yang hanya relevan selama tab terbuka dapat memakai sessionStorage. Saya tidak memakai storage browser untuk completion atau token sensitif. Catalog menampilkan skeleton saat loading, alert serta retry yang memanggil refetch saat request gagal, empty state dengan action ubah filter ketika response sukses tanpa item, dan list saat success. Saya belum membuat global store karena setiap state sudah memiliki owner kecil yang jelas; Context baru dipertimbangkan bila consumer lintas tree yang stabil benar-benar muncul."
    },
    {
      id: "state-and-data-strategy-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk memeriksa lifecycle, bukan mencari alasan memakai store",
      description:
        "Baca referensi resmi sesuai boundary yang sedang kamu putuskan. Dokumentasi membantu memeriksa lifecycle state, search params, data fetching, dan browser storage; ia tidak menggantikan keputusan product tentang siapa source of truth data tersebut.",
      links: [
        {
          source: "React",
          title: "Choosing the State Structure",
          url: "https://react.dev/learn/choosing-the-state-structure",
          focus: [
            "Menghindari state kontradiktif, redundant, serta duplikat.",
            "Menyimpan source yang diperlukan dan menghitung nilai turunan ketika memungkinkan.",
            "Menjaga bentuk state tetap mudah diubah serta di-debug.",
          ],
          ignoreForNow: [
            "Refactor nested state besar yang tidak sedang kamu miliki.",
          ],
        },
        {
          source: "React",
          title: "Sharing State Between Components",
          url: "https://react.dev/learn/sharing-state-between-components",
          focus: [
            "Mengangkat state ke common parent terdekat ketika component harus sinkron.",
            "Memakai props untuk membuat ownership dan event flow tetap terlihat.",
            "Menunda global state ketika consumer masih lokal pada satu feature.",
          ],
          ignoreForNow: [
            "State management library sebelum kebutuhan consumer lintas tree terbukti.",
          ],
        },
        {
          source: "Next.js",
          title: "Layouts and Pages: searchParams",
          url: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
          focus: [
            "Menggunakan searchParams sebagai input untuk pagination atau filtering data.",
            "Menjaga route state tetap sesuai convention App Router.",
            "Memisahkan parameter route dari state visual sementara component.",
          ],
          ignoreForNow: [
            "Dynamic segments kompleks, route groups, serta parallel routes.",
          ],
        },
        {
          source: "MDN",
          title: "Web Storage API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
          focus: [
            "Perbedaan lifecycle localStorage dan sessionStorage.",
            "Penyimpanan browser bersifat synchronous dan dapat hilang atau dibersihkan user.",
            "Membatasi storage untuk preference atau data sementara yang aman.",
          ],
          ignoreForNow: [
            "Storage quota detail dan third-party iframe policy yang tidak relevan untuk feature ini.",
          ],
        },
      ],
      followUpAction:
        "Pilih satu feature pada local React atau Next.js app. Buat tabel state/data dengan kolom owner, source of truth, refresh behavior, shareable URL, persistence, loading/error/empty/success, dan recovery. Pindahkan satu keputusan yang salah tempat, lalu jalankan typecheck serta manual test refresh, back/forward, dan recovery path yang terdampak.",
    },
    {
      id: "state-and-data-strategy-assessment-summary",
      type: "summary",
      points: [
        "State strategy dimulai dari source of truth, lifecycle, refresh, shareability, dan recovery, bukan dari library yang ingin dipakai.",
        "Server data, URL state, local UI, browser persistence, dan backend persistence memiliki peran yang berbeda.",
        "Error perlu dibedakan dari loading dan empty, lalu memiliki recovery owner yang nyata.",
        "Global store hanya berguna ketika consumer serta lifecycle lintas tree benar-benar membutuhkannya.",
        "Berikutnya, Component API and Documentation menggunakan boundary ini untuk merancang props, content-driven rendering, dan usage example yang mudah dipahami tim.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "state-and-data-strategy-assessment-recap",
      "state-and-data-strategy-assessment-quiz",
      "state-and-data-strategy-assessment-coding-practice",
      "state-and-data-strategy-assessment-writing-practice",
      "state-and-data-strategy-assessment-documentation-bridge",
      "state-and-data-strategy-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const stateAndDataStrategyAssessmentQuiz: Quiz = {
  id: "state-and-data-strategy-assessment-quiz",
  lessonId: "state-and-data-strategy-assessment",
  title: "Uji Kompetensi State and Data Strategy",
  passingScore: 70,
  questions: [
    {
      id: "state-strategy-source-of-truth",
      type: "multiple-choice",
      question:
        "Pertanyaan pertama yang paling membantu saat menentukan rumah sebuah data adalah",
      options: [
        "Siapa sumber kebenaran data ini dan bagaimana lifecycle-nya?",
        "Library state management mana yang paling sering dipakai tim lain?",
        "Apakah data dapat dimasukkan ke satu object global?",
        "Berapa banyak useState yang sudah ada di page?",
      ],
      correctAnswer: "Siapa sumber kebenaran data ini dan bagaimana lifecycle-nya?",
      explanation:
        "Source of truth, refresh behavior, shareability, dan recovery memberi dasar untuk memilih server, URL, local UI, atau persisted state. Tooling dipilih setelah kebutuhan ownership terlihat.",
    },
    {
      id: "state-strategy-url-state",
      type: "multiple-choice",
      question:
        "State manakah yang paling tepat menjadi URL state untuk course catalog?",
      options: [
        "Query, level filter, dan page hasil.",
        "Focus input pencarian serta status hover card.",
        "Token session dan nomor telepon learner.",
        "isFilterPanelOpen yang hanya dipakai panel filter.",
      ],
      correctAnswer: "Query, level filter, dan page hasil.",
      explanation:
        "Ketiganya menentukan hasil data yang user lihat dan perlu dapat dibuka kembali atau dibagikan. State UI sementara serta data sensitif tidak cocok untuk URL.",
    },
    {
      id: "state-strategy-local-owner",
      type: "multiple-choice",
      question:
        "Di mana isOpen panel resource sebaiknya dimulai bila hanya trigger dan panel itu sendiri yang memakainya?",
      options: [
        "Di ResourcePanel dengan local state.",
        "Di global store seluruh aplikasi.",
        "Di URL agar panel selalu terbuka setelah refresh.",
        "Di backend karena state harus dapat dibaca user lain.",
      ],
      correctAnswer: "Di ResourcePanel dengan local state.",
      explanation:
        "Owner paling kecil membuat behavior lebih mudah dibaca. State baru perlu diangkat ketika component lain benar-benar harus mengoordinasikan panel yang sama.",
    },
    {
      id: "state-strategy-persistence",
      type: "multiple-choice",
      question:
        "Tempat yang paling tepat untuk preferred theme non-sensitif pada browser user adalah",
      options: [
        "localStorage, dengan fallback bila storage tidak tersedia.",
        "Backend wajib untuk setiap preferensi visual kecil.",
        "URL query parameter untuk seluruh page aplikasi.",
        "sessionStorage agar theme hilang setiap tab ditutup tanpa mempertimbangkan product requirement.",
      ],
      correctAnswer: "localStorage, dengan fallback bila storage tidak tersedia.",
      explanation:
        "Theme personal umumnya perlu bertahan antarsesi pada browser yang sama dan bukan data sensitif. Tetap perlakukan browser storage sebagai preference yang dapat dibersihkan user.",
    },
    {
      id: "state-strategy-backend",
      type: "multiple-choice",
      question:
        "Mengapa completion lesson tidak boleh hanya bergantung pada localStorage?",
      options: [
        "Completion perlu source of truth lintas device, dapat diverifikasi server, dan tidak hilang saat browser dibersihkan.",
        "localStorage tidak dapat menyimpan string apa pun.",
        "URL harus menyimpan semua completion user.",
        "Completion tidak pernah berubah setelah page pertama dibuka.",
      ],
      correctAnswer:
        "Completion perlu source of truth lintas device, dapat diverifikasi server, dan tidak hilang saat browser dibersihkan.",
      explanation:
        "Browser storage dapat mendukung guest mode atau cache, tetapi data akun perlu backend sebagai sumber kebenaran agar konsisten dan dapat dipulihkan.",
    },
    {
      id: "state-strategy-error-empty",
      type: "multiple-choice",
      question:
        "Kapan empty state boleh ditampilkan pada hasil pencarian course?",
      options: [
        "Setelah request berhasil dan hasilnya memang tidak memiliki item.",
        "Saat request gagal karena jaringan.",
        "Saat request masih loading.",
        "Setiap kali URL memiliki parameter query.",
      ],
      correctAnswer:
        "Setelah request berhasil dan hasilnya memang tidak memiliki item.",
      explanation:
        "Error dan loading perlu feedback sendiri. Menyamaratakan kegagalan sebagai empty state menyembunyikan masalah dan memberi next action yang salah.",
    },
    {
      id: "state-strategy-recovery-owner",
      type: "multiple-choice",
      question:
        "Agar button Coba lagi bermakna, ia harus",
      options: [
        "Memanggil recovery yang dimiliki boundary data dan benar-benar menjalankan request ulang saat aman.",
        "Hanya menutup pesan error agar UI kembali kosong.",
        "Selalu me-refresh seluruh browser tanpa melihat scope failure.",
        "Mengubah error menjadi empty state supaya user tidak melihat failure.",
      ],
      correctAnswer:
        "Memanggil recovery yang dimiliki boundary data dan benar-benar menjalankan request ulang saat aman.",
      explanation:
        "Recovery action harus terhubung ke operation yang gagal. Scope failure menentukan apakah retry dilakukan pada card, list, page, atau memerlukan tindakan lain seperti login kembali.",
    },
  ],
};

export const classifyCourseStateOwnersChallenge: CodingChallenge = {
  id: "classify-course-state-owners",
  lessonId: "architecture-server-state-client-state",
  title: "Classify course state owners",
  description:
    "Petakan data course catalog ke server, URL, local UI, atau persisted state berdasarkan sumber kebenaran serta lifecycle-nya.",
  instructions: [
    "Fokus di tab TS.",
    "Definisikan StateHome untuk server, url, local, dan persisted.",
    "Tandai courses serta completionByCourseId sebagai server state.",
    "Tandai searchQuery serta page sebagai URL state.",
    "Tandai isFilterPanelOpen sebagai local state dan dismissedKeyboardTip sebagai persisted state.",
    "Cek otomatis membaca peta ownership. Kode TypeScript tidak dijalankan di preview.",
  ],
  starterCode: {
    ...stateStrategyPracticeCode,
    ts: `type StateHome = "client";

const courseCatalogState = {
  courses: "client",
  completionByCourseId: "client",
  searchQuery: "client",
  page: "client",
  isFilterPanelOpen: "client",
  dismissedKeyboardTip: "client",
} satisfies Record<string, StateHome>;`,
  },
  solutionCode: {
    ...stateStrategyPracticeCode,
    ts: `type StateHome = "server" | "url" | "local" | "persisted";

const courseCatalogState = {
  courses: "server",
  completionByCourseId: "server",
  searchQuery: "url",
  page: "url",
  isFilterPanelOpen: "local",
  dismissedKeyboardTip: "persisted",
} satisfies Record<string, StateHome>;`,
  },
  checklist: [
    "Data course dan completion dibedakan dari state UI browser.",
    "Search serta page dapat menjadi contract URL yang shareable.",
    "Panel filter tetap menjadi state UI lokal.",
    "Tip yang sudah ditutup diperlakukan sebagai preferensi persisted, bukan fakta backend.",
    "Peta ownership dibuat sebelum memilih global store atau library state.",
  ],
  validation: {
    mode: "ts",
    checks: [
      { id: "state-home", label: "StateHome membedakan empat rumah state.", type: "contains", valueIncludes: 'type StateHome = "server" | "url" | "local" | "persisted";' },
      { id: "server-data", label: "Courses dan completion adalah server state.", type: "contains", valueIncludes: 'courses: "server",\n  completionByCourseId: "server",' },
      { id: "url-data", label: "Search serta page adalah URL state.", type: "contains", valueIncludes: 'searchQuery: "url",\n  page: "url",' },
      { id: "local-persisted", label: "Panel dan keyboard tip memakai lifecycle yang berbeda.", type: "contains", valueIncludes: 'isFilterPanelOpen: "local",\n  dismissedKeyboardTip: "persisted",' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target state ownership",
    description:
      "Cek otomatis membaca klasifikasi state. Kode TypeScript tidak dijalankan di preview; gunakan peta yang sama saat memeriksa lifecycle feature lokal.",
    lines: [
      "Courses dan completion memiliki source of truth server.",
      "Search serta page dapat dipertahankan melalui URL.",
      "Panel dan tip memiliki lifecycle UI yang lebih kecil dari data product.",
    ],
  },
  skillTags: ["State Strategy", "Server State", "URL State", "TypeScript"],
};

export const moveCourseFilterToUrlStateChallenge: CodingChallenge = {
  id: "move-course-filter-to-url-state",
  lessonId: "architecture-url-state",
  title: "Move course filter to URL state",
  description:
    "Buat URL catalog dari query, level, dan page agar hasil course dapat di-refresh serta dibagikan tanpa menyimpan detail panel UI.",
  instructions: [
    "Fokus di tab TS.",
    "Definisikan CourseFilter dengan query, level, dan page.",
    "Gunakan URLSearchParams di getCourseListUrl.",
    "Simpan query bila tidak kosong, lalu simpan level dan page sebagai query parameter.",
    "Kembalikan URL /courses? diikuti parameter yang sudah dibuat.",
    "Jangan menambahkan isFilterPanelOpen ke URL state ini.",
    "Cek otomatis membaca struktur URL state. Kode TypeScript tidak dijalankan di preview.",
  ],
  starterCode: {
    ...stateStrategyPracticeCode,
    ts: `type CourseFilter = {
  query: string;
  level: string;
  page: number;
  isFilterPanelOpen: boolean;
};

export function getCourseListUrl(filter: CourseFilter) {
  return "/courses";
}`,
  },
  solutionCode: {
    ...stateStrategyPracticeCode,
    ts: `type CourseFilter = {
  query: string;
  level: "beginner" | "intermediate" | "advanced";
  page: number;
};

export function getCourseListUrl(filter: CourseFilter) {
  const params = new URLSearchParams();

  if (filter.query) params.set("query", filter.query);
  params.set("level", filter.level);
  params.set("page", String(filter.page));

  return "/courses?" + params.toString();
}`,
  },
  checklist: [
    "CourseFilter hanya memuat keputusan yang mengubah hasil catalog.",
    "Query, level, dan page dibuat menjadi parameter URL yang dapat dibuka ulang.",
    "Panel filter tidak menjadi query parameter karena hanya detail UI sementara.",
    "Implementasi nyata tetap perlu parse serta default defensif untuk parameter dari URL.",
  ],
  validation: {
    mode: "ts",
    checks: [
      { id: "filter-shape", label: "CourseFilter memuat query, level enum, dan page.", type: "contains", valueIncludes: 'type CourseFilter = {\n  query: string;\n  level: "beginner" | "intermediate" | "advanced";\n  page: number;\n};' },
      { id: "url-params", label: "URLSearchParams dibuat untuk contract URL.", type: "contains", valueIncludes: "const params = new URLSearchParams();" },
      { id: "query", label: "Query hanya ditambahkan saat ada nilai.", type: "contains", valueIncludes: 'if (filter.query) params.set("query", filter.query);' },
      { id: "level-page", label: "Level dan page menjadi URL state.", type: "contains", valueIncludes: 'params.set("level", filter.level);\n  params.set("page", String(filter.page));' },
      { id: "url-result", label: "Function mengembalikan URL course yang shareable.", type: "contains", valueIncludes: 'return "/courses?" + params.toString();' },
      { id: "no-panel", label: "Panel UI tidak menjadi URL state.", type: "doesNotContain", valueIncludes: "isFilterPanelOpen" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target URL state",
    description:
      "Cek otomatis membaca construction URL. Kode TypeScript tidak dijalankan di preview; parse parameter dengan default aman pada page atau route yang memakainya.",
    lines: [
      "Query, level, dan page membentuk link hasil catalog yang dapat dibuka ulang.",
      "Panel filter tidak ikut masuk URL karena tidak menjelaskan hasil data.",
      "Parameter URL tetap diperlakukan sebagai input eksternal yang perlu diparse.",
    ],
  },
  skillTags: ["URL State", "Next.js", "Search Params", "TypeScript"],
};

export const keepCoursePanelStateLocalChallenge: CodingChallenge = {
  id: "keep-course-panel-state-local",
  lessonId: "architecture-local-state",
  title: "Keep course panel state local",
  description:
    "Pindahkan toggle panel filter ke CourseFilterPanel agar parent tidak perlu menerima serta meneruskan detail UI sementara.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor useState dari React.",
    "Hapus isOpen dari CourseFilterPanelProps.",
    "Buat isOpen local dengan useState(false).",
    "Buat button yang membalik isOpen dan menampilkan label Buka filter atau Tutup filter.",
    "Tampilkan detail filter hanya ketika isOpen bernilai true.",
    "Cek otomatis membaca structure component. Preview menjalankan toggle React ini sebagai latihan local UI state.",
  ],
  starterCode: {
    ...stateStrategyPracticeCode,
    tsx: `type CourseFilterPanelProps = {
  initialQuery: string;
  isOpen: boolean;
};

export function CourseFilterPanel({
  initialQuery,
  isOpen,
}: CourseFilterPanelProps) {
  return (
    <section>
      <button type="button">Buka filter</button>
      {isOpen ? <p>Filter untuk: {initialQuery}</p> : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...stateStrategyPracticeCode,
    tsx: `import { useState } from "react";

type CourseFilterPanelProps = {
  initialQuery: string;
};

export function CourseFilterPanel({ initialQuery }: CourseFilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setIsOpen((current) => !current)}>
        {isOpen ? "Tutup filter" : "Buka filter"}
      </button>
      {isOpen ? <p>Filter untuk: {initialQuery}</p> : null}
    </section>
  );
}`,
  },
  checklist: [
    "Toggle panel berada pada component yang benar-benar membacanya.",
    "Parent hanya perlu mengirim input data seperti initialQuery, bukan mengelola detail open atau close.",
    "Button memiliki label yang berubah sesuai state panel.",
    "State baru diangkat hanya bila component lain perlu mengoordinasikan panel yang sama.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "CourseFilterPanel",
    framework: "react",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "use-state-import", label: "useState diimpor dari React.", type: "contains", valueIncludes: 'import { useState } from "react";' },
      { id: "props", label: "Props hanya menerima initialQuery.", type: "contains", valueIncludes: "type CourseFilterPanelProps = {\n  initialQuery: string;\n};" },
      { id: "local-state", label: "isOpen dikelola local dengan useState.", type: "contains", valueIncludes: "const [isOpen, setIsOpen] = useState(false);" },
      { id: "toggle", label: "Button membalik state panel.", type: "contains", valueIncludes: 'onClick={() => setIsOpen((current) => !current)}' },
      { id: "conditional-copy", label: "Label dan detail panel mengikuti isOpen.", type: "contains", valueIncludes: '{isOpen ? "Tutup filter" : "Buka filter"}\n      </button>\n      {isOpen ? <p>Filter untuk: {initialQuery}</p> : null}' },
      { id: "no-open-prop", label: "isOpen tidak lagi menjadi props.", type: "doesNotContain", valueIncludes: "isOpen: boolean;" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Local state berjalan di React",
    description:
      "Preview menjalankan CourseFilterPanel. Cek otomatis membaca structure TSX; klik button untuk memastikan state panel berubah tanpa memerlukan owner global.",
    lines: [
      "Button membuka dan menutup detail filter pada component yang sama.",
      "initialQuery tetap menjadi input data dari parent atau URL state.",
      "isOpen tidak perlu diteruskan sebagai props bila tidak dipakai component lain.",
    ],
  },
  skillTags: ["React", "Local State", "State Colocation", "Component Design"],
};

export const chooseCoursePersistenceBoundaryChallenge: CodingChallenge = {
  id: "choose-course-persistence-boundary",
  lessonId: "architecture-persistence-boundaries",
  title: "Choose course persistence boundary",
  description:
    "Pilih persistence home untuk filter shareable, preference browser, draft per tab, dan completion akun learner.",
  instructions: [
    "Fokus di tab TS.",
    "Definisikan PersistenceHome untuk url, localStorage, sessionStorage, dan backend.",
    "Tandai searchQuery serta selectedLevel sebagai URL state.",
    "Tandai preferredTheme sebagai localStorage dan unfinishedFeedbackDraft sebagai sessionStorage.",
    "Tandai lessonCompletion sebagai backend persistence.",
    "Cek otomatis membaca decision matrix. Kode TypeScript tidak dijalankan di preview.",
  ],
  starterCode: {
    ...stateStrategyPracticeCode,
    ts: `type PersistenceHome = "localStorage";

const learningFeaturePersistence = {
  searchQuery: "localStorage",
  selectedLevel: "localStorage",
  preferredTheme: "localStorage",
  unfinishedFeedbackDraft: "localStorage",
  lessonCompletion: "localStorage",
} satisfies Record<string, PersistenceHome>;`,
  },
  solutionCode: {
    ...stateStrategyPracticeCode,
    ts: `type PersistenceHome =
  | "url"
  | "localStorage"
  | "sessionStorage"
  | "backend";

const learningFeaturePersistence = {
  searchQuery: "url",
  selectedLevel: "url",
  preferredTheme: "localStorage",
  unfinishedFeedbackDraft: "sessionStorage",
  lessonCompletion: "backend",
} satisfies Record<string, PersistenceHome>;`,
  },
  checklist: [
    "Filter yang shareable berada pada URL, bukan browser storage.",
    "Theme menjadi preference localStorage yang non-sensitif.",
    "Draft per tab dapat memakai sessionStorage bila product menerima lifecycle tersebut.",
    "Completion akun tetap memiliki source of truth backend.",
    "Browser storage tidak dipakai untuk secret atau fakta product yang perlu lintas device.",
  ],
  validation: {
    mode: "ts",
    checks: [
      { id: "persistence-home", label: "PersistenceHome membedakan empat boundary.", type: "contains", valueIncludes: 'type PersistenceHome =\n  | "url"\n  | "localStorage"\n  | "sessionStorage"\n  | "backend";' },
      { id: "url-filter", label: "Filter shareable berada di URL.", type: "contains", valueIncludes: 'searchQuery: "url",\n  selectedLevel: "url",' },
      { id: "browser-preferences", label: "Theme dan draft memakai lifecycle browser yang tepat.", type: "contains", valueIncludes: 'preferredTheme: "localStorage",\n  unfinishedFeedbackDraft: "sessionStorage",' },
      { id: "completion-backend", label: "Completion tetap milik backend.", type: "contains", valueIncludes: 'lessonCompletion: "backend",' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target persistence boundary",
    description:
      "Cek otomatis membaca decision matrix. Kode TypeScript tidak dijalankan di preview; saat local implementation, tangani storage yang tidak tersedia dan jangan memperlakukan cache browser sebagai source of truth.",
    lines: [
      "Filter course dapat dibuka ulang lewat URL.",
      "Preference serta draft browser memiliki lifecycle yang berbeda.",
      "Completion akun tetap konsisten melalui backend.",
    ],
  },
  skillTags: ["Persistence", "localStorage", "sessionStorage", "Backend"],
};

export const mapCourseErrorRecoveryChallenge: CodingChallenge = {
  id: "map-course-error-recovery",
  lessonId: "architecture-error-strategy",
  title: "Map course error recovery",
  description:
    "Buat UI course feed yang membedakan loading, error, empty, dan ready; error harus menawarkan recovery yang dimiliki caller data.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat CourseFeedState untuk loading, error, empty, dan ready.",
    "Tambahkan onRetry pada props CourseFeed.",
    "Render loading dengan aria-busy, error dengan role alert serta button Coba lagi, dan empty dengan arahan ubah filter.",
    "Panggil onRetry dari button error.",
    "Cek otomatis membaca structure error recovery. Preview tidak menjalankan request course atau retry network nyata.",
  ],
  starterCode: {
    ...stateStrategyPracticeCode,
    tsx: `type CourseFeedState = {
  status: "ready";
  total: number;
};

export function CourseFeed({ state }: { state: CourseFeedState }) {
  return <p>{state.total} course siap dipelajari.</p>;
}`,
  },
  solutionCode: {
    ...stateStrategyPracticeCode,
    tsx: `type CourseFeedState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; total: number };

type CourseFeedProps = {
  state: CourseFeedState;
  onRetry: () => void;
};

export function CourseFeed({ state, onRetry }: CourseFeedProps) {
  if (state.status === "loading") {
    return <p aria-busy="true">Memuat course...</p>;
  }

  if (state.status === "error") {
    return (
      <section role="alert">
        <p>{state.message}</p>
        <button type="button" onClick={onRetry}>Coba lagi</button>
      </section>
    );
  }

  if (state.status === "empty") {
    return <p>Belum ada course yang cocok. Ubah filter lalu coba lagi.</p>;
  }

  return <p>{state.total} course siap dipelajari.</p>;
}`,
  },
  checklist: [
    "Loading, error, empty, dan ready tidak memakai copy yang sama.",
    "Error memiliki message serta recovery action yang dapat dipanggil caller.",
    "Empty mengarahkan user mengubah filter, bukan berpura-pura request gagal.",
    "Preview tidak memanggil network; hubungkan onRetry ke operation nyata pada local app.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "react",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "state-union", label: "CourseFeedState membedakan empat state.", type: "contains", valueIncludes: 'type CourseFeedState =\n  | { status: "loading" }\n  | { status: "error"; message: string }\n  | { status: "empty" }\n  | { status: "ready"; total: number };' },
      { id: "retry-prop", label: "Caller memberi onRetry kepada CourseFeed.", type: "contains", valueIncludes: "type CourseFeedProps = {\n  state: CourseFeedState;\n  onRetry: () => void;\n};" },
      { id: "loading", label: "Loading memberi busy feedback.", type: "contains", valueIncludes: '<p aria-busy="true">Memuat course...</p>' },
      { id: "error", label: "Error memakai alert dan recovery action.", type: "contains", valueIncludes: '<section role="alert">\n        <p>{state.message}</p>\n        <button type="button" onClick={onRetry}>Coba lagi</button>' },
      { id: "empty", label: "Empty mengarahkan user memperbaiki filter.", type: "contains", valueIncludes: "Belum ada course yang cocok. Ubah filter lalu coba lagi." },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target error recovery",
    description:
      "Cek otomatis membaca structure state dan recovery. Preview tidak menjalankan request course; sambungkan onRetry ke data boundary saat mengimplementasikan feature lokal.",
    lines: [
      "Loading, error, empty, dan ready memiliki UI yang jujur.",
      "Error dapat menampilkan message serta recovery action.",
      "Empty memberi next action berbeda dari kegagalan request.",
    ],
  },
  skillTags: ["React", "Error Strategy", "Recovery", "Server State"],
};

export const buildCourseStateDataStrategyCheckpointChallenge: CodingChallenge = {
  id: "build-course-state-data-strategy-checkpoint",
  lessonId: "state-and-data-strategy-assessment",
  title: "Build course state and data strategy checkpoint",
  description:
    "Buat peta ownership course catalog yang mencakup data server, URL state, local UI, browser persistence, dan recovery tanpa store global.",
  instructions: [
    "Fokus di tab TS.",
    "Definisikan StateHome dan RecoveryAction.",
    "Buat FeatureStatePlan dengan home, survivesRefresh, shareable, dan recovery.",
    "Petakan courses serta completionByCourseId ke server dengan recovery retry.",
    "Petakan searchQuery serta page ke URL, isFilterPanelOpen ke local, dan preferredTheme ke persisted.",
    "Jangan menggunakan globalStore atau Context pada checkpoint ini.",
    "Cek otomatis membaca strategy map. Kode TypeScript tidak dijalankan di preview.",
  ],
  starterCode: {
    ...stateStrategyPracticeCode,
    ts: `type StateHome = "global";
type RecoveryAction = "ignore";

type FeatureStatePlan = {
  home: StateHome;
};

const courseCatalogStrategy = {
  courses: { home: "global" },
  completionByCourseId: { home: "global" },
  searchQuery: { home: "global" },
  page: { home: "global" },
  isFilterPanelOpen: { home: "global" },
  preferredTheme: { home: "global" },
} satisfies Record<string, FeatureStatePlan>;`,
  },
  solutionCode: {
    ...stateStrategyPracticeCode,
    ts: `type StateHome = "server" | "url" | "local" | "persisted";
type RecoveryAction = "retry" | "change-filter" | "continue";

type FeatureStatePlan = {
  home: StateHome;
  survivesRefresh: boolean;
  shareable: boolean;
  recovery: RecoveryAction;
};

const courseCatalogStrategy = {
  courses: {
    home: "server",
    survivesRefresh: true,
    shareable: false,
    recovery: "retry",
  },
  completionByCourseId: {
    home: "server",
    survivesRefresh: true,
    shareable: false,
    recovery: "retry",
  },
  searchQuery: {
    home: "url",
    survivesRefresh: true,
    shareable: true,
    recovery: "change-filter",
  },
  page: {
    home: "url",
    survivesRefresh: true,
    shareable: true,
    recovery: "change-filter",
  },
  isFilterPanelOpen: {
    home: "local",
    survivesRefresh: false,
    shareable: false,
    recovery: "continue",
  },
  preferredTheme: {
    home: "persisted",
    survivesRefresh: true,
    shareable: false,
    recovery: "continue",
  },
} satisfies Record<string, FeatureStatePlan>;`,
  },
  checklist: [
    "Setiap state memiliki home, refresh behavior, shareability, dan recovery action yang eksplisit.",
    "Data course serta completion tetap server-owned dan dapat di-retry.",
    "Search dan page berada di URL sehingga hasil dapat dibuka ulang atau dibagikan.",
    "Panel filter tetap local, sementara theme adalah persisted preference.",
    "Checkpoint tidak memakai global state sebagai jawaban default untuk lifecycle yang berbeda.",
  ],
  validation: {
    mode: "ts",
    checks: [
      { id: "homes", label: "StateHome membedakan server, URL, local, dan persisted.", type: "contains", valueIncludes: 'type StateHome = "server" | "url" | "local" | "persisted";' },
      { id: "recovery", label: "RecoveryAction menjelaskan tindakan pemulihan.", type: "contains", valueIncludes: 'type RecoveryAction = "retry" | "change-filter" | "continue";' },
      { id: "plan-shape", label: "FeatureStatePlan mencatat lifecycle dan recovery.", type: "contains", valueIncludes: "type FeatureStatePlan = {\n  home: StateHome;\n  survivesRefresh: boolean;\n  shareable: boolean;\n  recovery: RecoveryAction;\n};" },
      { id: "server-plan", label: "Courses dan completion menjadi server plan dengan retry.", type: "contains", valueIncludes: 'courses: {\n    home: "server",\n    survivesRefresh: true,\n    shareable: false,\n    recovery: "retry",\n  },\n  completionByCourseId: {\n    home: "server",\n    survivesRefresh: true,\n    shareable: false,\n    recovery: "retry",' },
      { id: "url-plan", label: "Search dan page menjadi URL state yang shareable.", type: "contains", valueIncludes: 'searchQuery: {\n    home: "url",\n    survivesRefresh: true,\n    shareable: true,\n    recovery: "change-filter",\n  },\n  page: {\n    home: "url",\n    survivesRefresh: true,\n    shareable: true,\n    recovery: "change-filter",' },
      { id: "local-persisted-plan", label: "Panel dan theme memakai lifecycle berbeda.", type: "contains", valueIncludes: 'isFilterPanelOpen: {\n    home: "local",\n    survivesRefresh: false,\n    shareable: false,\n    recovery: "continue",\n  },\n  preferredTheme: {\n    home: "persisted",\n    survivesRefresh: true,\n    shareable: false,\n    recovery: "continue",' },
      { id: "no-global-store", label: "Tidak memakai global store sebagai default.", type: "doesNotContain", valueIncludes: "globalStore" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target state and data strategy",
    description:
      "Cek otomatis membaca strategy map. Kode TypeScript tidak dijalankan di preview; gunakan tabel ini sebagai awal review feature sebelum menambah Context, cache library, atau global store.",
    lines: [
      "Server data, URL state, local UI, dan persisted preference memiliki owner serta lifecycle yang berbeda.",
      "Refresh, shareability, dan recovery membuat keputusan state dapat diperiksa tim.",
      "Global state tidak diperlukan ketika owner kecil sudah jelas.",
    ],
  },
  skillTags: ["State Strategy", "Data Ownership", "Persistence", "Error Recovery", "Assessment"],
};
