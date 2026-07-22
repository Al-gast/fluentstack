import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const renderingPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const renderingCostHydrationModule: Module = {
  id: "rendering-cost-hydration",
  trackId: "frontend-engineering",
  title: "Rendering Cost and Hydration",
  slug: "rendering-cost-hydration",
  description:
    "Menjaga biaya browser tetap proporsional lewat boundary Server dan Client Component yang jelas serta perbaikan render yang terukur.",
  order: 46,
  lessonIds: [
    "hydration-cost",
    "server-vs-client-rendering-decisions",
    "client-component-boundaries",
    "expensive-rerenders",
    "rendering-cost-hydration-assessment",
  ],
  estimatedHours: 6,
  skillTags: [
    "Hydration",
    "Server Components",
    "Client Components",
    "use client",
    "React Rendering",
    "Profiler",
  ],
};

export const hydrationCostLesson: Lesson = {
  id: "hydration-cost",
  trackId: "frontend-engineering",
  moduleId: "rendering-cost-hydration",
  title: "Hydration Cost",
  slug: "hydration-cost",
  description:
    "Memahami browser work yang membuat HTML hasil render menjadi UI React yang benar-benar interaktif.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan hydration dengan bahasa yang berpusat pada pengalaman user",
    "Membedakan HTML awal dengan interactivity Client Component",
    "Menghubungkan client JavaScript dengan biaya download dan browser work",
    "Mengidentifikasi UI yang tidak memerlukan hydration",
  ],
  skillTags: ["Hydration", "React", "Next.js", "Client JavaScript"],
  blocks: [
    {
      id: "hydration-cost-intro",
      type: "text",
      title: "HTML dapat terlihat sebelum seluruh UI siap menerima action",
      content:
        "Pada initial load Next.js, browser dapat menampilkan HTML hasil render sehingga learner segera melihat heading, lesson list, dan content route. Agar bagian interaktif seperti filter, input, toggle, atau button state dapat merespons, browser masih perlu memuat JavaScript Client Component lalu React menghubungkan event handler ke DOM. Proses ini disebut hydration. Hydration memberi manfaat nyata ketika UI membutuhkan state atau browser API, tetapi ia juga membawa biaya download, parse, dan execution JavaScript. Karena itu, pertanyaannya bukan apakah hydration buruk. Pertanyaannya adalah bagian mana yang benar-benar perlu hidup di browser untuk menyelesaikan tugas user.",
    },
    {
      id: "hydration-cost-example",
      type: "code-example",
      title: "Content server dengan satu pulau interaktif",
      language: "tsx",
      code: `// app/courses/page.tsx - Server Component by default
import CourseFilter from "./course-filter";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main>
      <h1>Course</h1>
      <p>Pilih lesson yang ingin kamu lanjutkan.</p>
      <CourseFilter courses={courses} />
    </main>
  );
}

// app/courses/course-filter.tsx - Client Component
"use client";

export default function CourseFilter({ courses }: { courses: string[] }) {
  // query state dan onChange hidup di browser
  return <input aria-label="Cari course" />;
}`,
      explanation:
        "Heading dan explanatory content dapat tetap server-rendered. CourseFilter menjadi pulau client kecil karena ia membutuhkan input serta state. User tetap dapat melihat page lebih awal, sementara browser hanya perlu menghydrate area yang benar-benar interaktif. Pada project lokal, file ini perlu dipisah menjadi module nyata; contoh ini memperlihatkan peran masing-masing file.",
    },
    {
      id: "hydration-cost-writing-practice",
      type: "writing-practice",
      prompt:
        'Jelaskan hydration cost untuk halaman track FluentStack kepada rekan satu tim. Bedakan apa yang dapat user lihat lebih awal dari apa yang membutuhkan JavaScript browser, sebutkan dua UI yang layak menjadi Client Component, satu UI yang dapat tetap server-rendered, dan alasan mengapa seluruh page tidak perlu diberi "use client".',
      placeholder:
        "Learner dapat melihat heading track, deskripsi, dan daftar module dari HTML awal. Filter module dan tombol bookmark yang menyimpan state perlu JavaScript browser karena memakai input atau click state. Heading dan deskripsi dapat tetap server-rendered karena tidak memerlukan event handler. Jika seluruh page diberi use client, lebih banyak content serta import masuk ke client bundle padahal hanya beberapa control yang perlu interaktif.",
      minimumCharacters: 300,
      checklist: [
        "Membedakan HTML awal dari interactivity browser.",
        "Menyebut UI yang memang memerlukan state, event, atau browser API.",
        "Menyebut content yang tidak perlu menjadi client.",
        "Menjelaskan biaya dari boundary client yang terlalu luas.",
      ],
      modelAnswer:
        "Pada halaman track, learner dapat melihat heading, deskripsi, dan daftar module dari HTML awal sebelum semua control interaktif siap. Filter module dan tombol bookmark yang menyimpan state perlu JavaScript browser karena keduanya memakai input atau click handler. Sebaliknya, heading, deskripsi, dan daftar content awal dapat tetap server-rendered bila hanya menampilkan data. Saya tidak akan memberi use client ke seluruh page karena directive itu menjadikan file serta import di bawahnya bagian dari client graph. Boundary yang lebih kecil membuat browser hanya menghydrate bagian yang benar-benar dipakai untuk interaksi.",
    },
    {
      id: "hydration-cost-quick-check",
      type: "quick-check",
      question:
        "Bagian mana yang paling jelas membutuhkan hydration pada halaman course?",
      options: [
        "Filter course yang menyimpan query dan menangani onChange.",
        "Heading statis yang hanya menampilkan judul course.",
        "Paragraph deskripsi yang tidak berubah.",
        "List ringkasan yang sudah lengkap tanpa interaction.",
      ],
      correctAnswer:
        "Filter course yang menyimpan query dan menangani onChange.",
      explanation:
        "State dan event handler membutuhkan JavaScript browser. Content statis dapat tetap server-rendered sampai ada alasan interaktif yang jelas.",
    },
    {
      id: "hydration-cost-callout",
      type: "callout",
      variant: "important",
      title: "Hydration adalah biaya untuk capability, bukan hukuman",
      content:
        "Jangan memindahkan interaksi penting ke server hanya untuk mengurangi JavaScript. Jika user perlu mengetik, membuka panel, atau menggunakan browser API, Client Component tepat. Yang perlu dihindari adalah membayar hydration untuk content besar yang tidak memiliki behavior client.",
    },
    {
      id: "hydration-cost-summary",
      type: "summary",
      points: [
        "Hydration menghubungkan Client Component dengan JavaScript serta event handler di browser.",
        "HTML awal dapat memberi orientasi sebelum seluruh interaction siap.",
        "State, event handler, custom hook, dan browser API adalah alasan kuat memakai client.",
        "Content statis tidak perlu menjadi client hanya karena berada dekat dengan control interaktif.",
        "Berikutnya, kamu akan memilih Server dan Client Component berdasarkan capability serta journey user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "hydration-cost-intro",
      "hydration-cost-example",
      "hydration-cost-writing-practice",
      "hydration-cost-quick-check",
      "hydration-cost-callout",
      "hydration-cost-summary",
    ],
  },
};

export const serverVsClientRenderingDecisionsLesson: Lesson = {
  id: "server-vs-client-rendering-decisions",
  trackId: "frontend-engineering",
  moduleId: "rendering-cost-hydration",
  title: "Server vs Client Rendering Decisions",
  slug: "server-vs-client-rendering-decisions",
  description:
    "Memilih rendering boundary dari kebutuhan data, interaksi, browser API, dan biaya JavaScript yang benar-benar relevan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan pekerjaan yang lebih tepat di server dan di browser",
    "Membuat keputusan boundary dari capability, bukan dari nama component",
    "Menjaga props ke Client Component tetap serializable",
    "Menjelaskan trade-off sebuah keputusan rendering",
  ],
  skillTags: ["Next.js", "Server Components", "Client Components", "Rendering Boundaries"],
  blocks: [
    {
      id: "server-vs-client-rendering-decisions-intro",
      type: "text",
      title: "Mulai dari kebutuhan component, bukan dari page yang sedang dibuka",
      content:
        "Page dan layout App Router adalah Server Components secara default. Itu cocok untuk data fetching, content route, secret server, serta UI yang tidak membutuhkan browser capability. Client Component diperlukan ketika component memakai state, event handler, lifecycle, custom hook, atau API seperti localStorage dan window. Sebuah page sering memakai keduanya: server parent menyiapkan data serta content, lalu meneruskan data serializable ke child interaktif. Hindari keputusan global seperti “dashboard harus client” atau “semua list harus server”. Baca kebutuhan component yang paling kecil dan lihat apa yang benar-benar harus terjadi di browser.",
    },
    {
      id: "server-vs-client-rendering-decisions-example",
      type: "code-example",
      title: "Peta keputusan untuk satu route course",
      language: "ts",
      code: `const coursePageParts = [
  {
    component: "CoursePage",
    rendering: "server",
    reason: "fetch course data and render title, description, and lesson list",
  },
  {
    component: "CourseFilter",
    rendering: "client",
    reason: "stores query state and handles input onChange",
    receives: "courses: CourseSummary[]",
  },
  {
    component: "LessonSummary",
    rendering: "server",
    reason: "displays serializable lesson data without browser interaction",
  },
];`,
      explanation:
        "Keputusan ini tidak menilai component dari ukuran atau lokasi foldernya. CourseFilter client karena capability-nya, sedangkan parent dan LessonSummary dapat tetap server karena hanya menyiapkan atau menampilkan data. Props dari server ke client harus berupa data yang dapat diserialisasi, bukan callback function server.",
    },
    {
      id: "server-vs-client-rendering-decisions-coding-practice",
      type: "coding-practice",
      challengeId: "classify-course-rendering-boundaries",
    },
    {
      id: "server-vs-client-rendering-decisions-quick-check",
      type: "quick-check",
      question:
        "Manakah alasan paling kuat untuk menjadikan component sebagai Client Component?",
      options: [
        "Component menyimpan state query dan menangani event onChange.",
        "Component hanya merender heading dari data course.",
        "Component menampilkan paragraph deskripsi statis.",
        "Component menerima data yang sudah diambil server tanpa interaction.",
      ],
      correctAnswer:
        "Component menyimpan state query dan menangani event onChange.",
      explanation:
        "State dan event handler adalah capability browser. Content yang hanya menampilkan data tidak memerlukan client boundary tanpa alasan lain.",
    },
    {
      id: "server-vs-client-rendering-decisions-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan meneruskan callback server sebagai props client",
      content:
        "Props yang mengalir dari Server Component ke Client Component perlu dapat diserialisasi. Rancang data dan action boundary dengan jelas. Bila component client perlu melakukan mutation, gunakan pattern Next.js yang sesuai alih-alih memperlakukan function server biasa sebagai props browser.",
    },
    {
      id: "server-vs-client-rendering-decisions-summary",
      type: "summary",
      points: [
        "Server cocok untuk data, content route, secret, dan UI tanpa browser behavior.",
        "Client cocok untuk state, event, lifecycle, custom hook, dan browser API.",
        "Satu route dapat menggabungkan server parent dengan child client kecil.",
        "Props lintas boundary harus dapat diserialisasi.",
        "Berikutnya, boundary client akan diperkecil secara praktis agar tidak menarik seluruh page ke browser.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "server-vs-client-rendering-decisions-intro",
      "server-vs-client-rendering-decisions-example",
      "server-vs-client-rendering-decisions-coding-practice",
      "server-vs-client-rendering-decisions-quick-check",
      "server-vs-client-rendering-decisions-callout",
      "server-vs-client-rendering-decisions-summary",
    ],
  },
};

export const clientComponentBoundariesLesson: Lesson = {
  id: "client-component-boundaries",
  trackId: "frontend-engineering",
  moduleId: "rendering-cost-hydration",
  title: "Client Component Boundaries",
  slug: "client-component-boundaries",
  description:
    "Menempatkan use client pada pulau interaktif kecil tanpa menarik content route yang tidak perlu ke client bundle.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan use client sebagai entry point module graph",
    "Mengecilkan boundary ke UI yang benar-benar interaktif",
    "Meneruskan data serializable dari server parent ke client child",
    "Menghindari page atau layout besar menjadi client tanpa alasan",
  ],
  skillTags: ["Next.js", "use client", "Client Boundary", "Hydration"],
  blocks: [
    {
      id: "client-component-boundaries-intro",
      type: "text",
      title: "Letakkan boundary sedekat mungkin dengan interaction",
      content:
        'Directive "use client" bukan label visual untuk sebuah component. Ia menandai entry point client module graph: import dan child component dari file tersebut dapat ikut menjadi bagian client bundle. Karena itu, letakkan directive pada pulau interaktif yang paling kecil. Pada page course, heading, lesson content, dan resource links tidak perlu ikut client hanya karena filter berada di halaman yang sama. Buat CourseFilter sebagai file client yang menerima data course sederhana dari parent server. Pendekatan ini menjaga content tetap mudah dibaca, memperkecil hydration work, dan membuat alasan interaktif setiap file lebih mudah direview.',
    },
    {
      id: "client-component-boundaries-example",
      type: "code-example",
      title: "Client island menerima data, bukan mengambil alih page",
      language: "tsx",
      code: `// app/courses/course-filter.tsx
"use client";

import { useState } from "react";

type CourseFilterProps = {
  courses: string[];
};

export default function CourseFilter({ courses }: CourseFilterProps) {
  const [query, setQuery] = useState("");
  const visibleCourses = courses.filter((course) =>
    course.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <label>
      Cari course
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <span>{visibleCourses.length} course ditemukan.</span>
    </label>
  );
}`,
      explanation:
        "File ini menjadi client karena menyimpan query dan onChange. Parent server dapat tetap mengambil courses serta merender content route. courses adalah array string yang serializable, sehingga data dapat diteruskan dengan jelas tanpa menjadikan seluruh page client.",
    },
    {
      id: "client-component-boundaries-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-filter-client-island",
    },
    {
      id: "client-component-boundaries-quick-check",
      type: "quick-check",
      question:
        "Penempatan use client yang paling tepat untuk page course dengan satu filter interaktif adalah",
      options: [
        "Di file CourseFilter yang menangani query dan onChange.",
        "Di root layout agar semua route siap memakai input.",
        "Di CoursePage walaupun heading dan list hanya menampilkan data.",
        "Di setiap file component tanpa melihat capability-nya.",
      ],
      correctAnswer:
        "Di file CourseFilter yang menangani query dan onChange.",
      explanation:
        "Boundary kecil membatasi JavaScript serta hydration pada UI yang memang membutuhkan browser capability. Parent server tetap dapat meneruskan data ke child client.",
    },
    {
      id: "client-component-boundaries-callout",
      type: "callout",
      variant: "warning",
      title: "Kecil bukan berarti terpecah tanpa arah",
      content:
        "Jangan memisahkan setiap button ke file client terpisah tanpa melihat cohesion interaction. Boundary yang baik cukup kecil untuk membatasi client graph, tetapi tetap mengelompokkan state dan event yang memang bekerja bersama. Mulai dari behavior user, lalu ukur bila cost-nya relevan.",
    },
    {
      id: "client-component-boundaries-summary",
      type: "summary",
      points: [
        "use client menandai entry point client graph, bukan sekadar file yang boleh memakai JSX.",
        "Letakkan boundary pada pulau yang menyimpan state, event, atau browser API.",
        "Server parent dapat menyiapkan data lalu meneruskannya sebagai props serializable.",
        "Hindari menjadikan page atau layout besar client hanya karena satu control interaktif.",
        "Berikutnya, kamu akan membaca re-render mahal setelah scope browser sudah dijaga dengan boundary yang tepat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "client-component-boundaries-intro",
      "client-component-boundaries-example",
      "client-component-boundaries-coding-practice",
      "client-component-boundaries-quick-check",
      "client-component-boundaries-callout",
      "client-component-boundaries-summary",
    ],
  },
};

export const expensiveRerendersLesson: Lesson = {
  id: "expensive-rerenders",
  trackId: "frontend-engineering",
  moduleId: "rendering-cost-hydration",
  title: "Expensive Re-renders",
  slug: "expensive-rerenders",
  description:
    "Mendiagnosis render work yang mahal sebelum memilih memoization atau perubahan component structure.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan React render dari DOM commit yang benar-benar terlihat user",
    "Mengenali derived calculation yang berulang saat state berubah",
    "Memakai React DevTools Profiler untuk mencari jalur yang relevan",
    "Menggunakan useMemo setelah ada alasan measurement yang jelas",
  ],
  skillTags: ["React", "Re-render", "Profiler", "useMemo", "Performance"],
  blocks: [
    {
      id: "expensive-rerenders-intro",
      type: "text",
      title: "Re-render bukan otomatis masalah, tetapi work berulang perlu dibaca",
      content:
        "React dapat merender component lagi ketika state atau props berubah. Itu belum berarti DOM selalu berubah atau user langsung mengalami lambat. Masalah muncul ketika render memicu derived calculation, sorting, filtering, atau tree besar yang memang mahal pada interaction yang sering terjadi. Jangan memasang memoization hanya karena melihat component render lebih dari sekali. Mulai dari symptom user, buat baseline, lalu gunakan React DevTools Profiler untuk melihat commit serta component yang memakan waktu. Setelah jalur mahal ditemukan, pilih perbaikan paling kecil yang menjaga code tetap dapat dibaca.",
    },
    {
      id: "expensive-rerenders-example",
      type: "code-example",
      title: "Cache derived lesson list setelah measurement",
      language: "tsx",
      code: `import { useMemo, useState } from "react";

type Lesson = {
  title: string;
  duration: number;
  status: "ready" | "draft";
};

function LessonFilterBoard({ lessons }: { lessons: Lesson[] }) {
  const [query, setQuery] = useState("");
  const [showReady, setShowReady] = useState(false);

  const visibleLessons = useMemo(() => {
    return lessons
      .filter((lesson) => !showReady || lesson.status === "ready")
      .filter((lesson) =>
        lesson.title.toLowerCase().includes(query.toLowerCase()),
      )
      .slice()
      .sort((a, b) => b.duration - a.duration);
  }, [lessons, query, showReady]);

  return <p>{visibleLessons.length} lesson terlihat.</p>;
}`,
      explanation:
        "useMemo digunakan di sini untuk meng-cache hasil filter dan sort sampai lessons, query, atau showReady berubah. Ia bukan jaminan global bahwa component lebih cepat. Sebelum memilihnya, pastikan calculation memang muncul pada profiler atau memengaruhi interaction user. React masih dapat merender component untuk alasan lain, dan DOM tetap hanya diubah ketika output yang relevan berbeda.",
    },
    {
      id: "expensive-rerenders-coding-practice",
      type: "coding-practice",
      challengeId: "memoize-measured-lesson-filter",
    },
    {
      id: "expensive-rerenders-quick-check",
      type: "quick-check",
      question:
        "Apa langkah paling tepat sebelum menambah useMemo ke sebuah derived calculation?",
      options: [
        "Pastikan interaction user dan measurement menunjukkan calculation itu benar-benar relevan.",
        "Tambahkan useMemo ke setiap array method agar code selalu cepat.",
        "Anggap setiap re-render selalu menghasilkan DOM update mahal.",
        "Pindahkan semua state ke global store tanpa membaca profiler.",
      ],
      correctAnswer:
        "Pastikan interaction user dan measurement menunjukkan calculation itu benar-benar relevan.",
      explanation:
        "Memoization adalah alat untuk biaya yang sudah dipahami. Profiling menjaga perbaikan tetap terarah dan menghindari dependency array atau code tambahan yang tidak memberi dampak nyata.",
    },
    {
      id: "expensive-rerenders-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Profiler menjawab pertanyaan yang lebih baik daripada asumsi",
      content:
        "Jangan menilai performance dari satu angka render atau dari dugaan bahwa list pasti lambat. Rekam interaction spesifik, lihat component serta commit yang relevan, dan bandingkan setelah perubahan. Jika user tidak mengalami masalah dan profile tidak menunjukkan work bermakna, code sederhana sering menjadi pilihan yang lebih baik.",
    },
    {
      id: "expensive-rerenders-summary",
      type: "summary",
      points: [
        "React render ulang tidak otomatis berarti DOM atau pengalaman user memburuk.",
        "Cari symptom dan jalur interaction sebelum mengubah component.",
        "React DevTools Profiler membantu membaca commit serta component yang relevan.",
        "useMemo cocok untuk calculation mahal yang telah diukur dan memiliki dependency jelas.",
        "Berikutnya, Uji Kompetensi menggabungkan hydration, boundary client, dan reasoning perbaikan render dalam satu kasus route.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "expensive-rerenders-intro",
      "expensive-rerenders-example",
      "expensive-rerenders-coding-practice",
      "expensive-rerenders-quick-check",
      "expensive-rerenders-callout",
      "expensive-rerenders-summary",
    ],
  },
};

export const renderingCostHydrationAssessmentLesson: Lesson = {
  id: "rendering-cost-hydration-assessment",
  trackId: "frontend-engineering",
  moduleId: "rendering-cost-hydration",
  title: "Uji Kompetensi Rendering Cost and Hydration",
  slug: "rendering-cost-hydration-assessment",
  description:
    "Membuktikan kesiapan memilih boundary browser yang kecil dan memperbaiki render work dengan alasan terukur.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 85,
  objectives: [
    "Menjelaskan hydration sebagai browser work yang disengaja",
    "Memilih Server atau Client Component berdasarkan capability",
    "Mengecilkan client boundary pada route Next.js",
    "Menyusun rencana measurement untuk render work yang mahal",
  ],
  skillTags: ["Hydration", "Next.js", "Client Boundary", "Profiler", "Readiness Checkpoint"],
  blocks: [
    {
      id: "rendering-cost-hydration-assessment-recap",
      type: "text",
      title: "Checkpoint: biaya browser perlu punya alasan yang jelas",
      content:
        "Sebuah route course baru diberi use client pada page root karena ada filter, toggle progress, dan sorting lesson. Akibatnya heading, description, resource links, serta seluruh lesson list ikut masuk ke client graph. Tim juga menambahkan useMemo pada beberapa tempat tanpa baseline. Pada checkpoint ini, jangan mencari satu trick. Tunjukkan bahwa kamu dapat memisahkan content server dari interaction kecil, menjelaskan hydration yang tetap diperlukan, dan memilih measurement sebelum mengubah jalur render yang mahal.",
    },
    {
      id: "rendering-cost-hydration-assessment-quiz",
      type: "quiz",
      quizId: "rendering-cost-hydration-assessment-quiz",
    },
    {
      id: "rendering-cost-hydration-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-rendering-cost-checkpoint",
    },
    {
      id: "rendering-cost-hydration-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note untuk route course yang sekarang memakai use client di page root. Jelaskan content mana yang tetap server-rendered, client island apa yang kamu buat dan mengapa ia tetap perlu hydration, data apa yang aman diteruskan ke client, serta bagaimana kamu akan mengukur sorting lesson sebelum menambah memoization. Tulis juga satu trade-off yang masih perlu diuji bersama tim.",
      placeholder:
        "Saya akan menjaga CoursePage sebagai Server Component untuk mengambil dan merender data course, heading, description, serta list awal. CourseFilter menjadi Client Component karena memegang query state dan onChange; ia menerima array lesson sederhana yang serializable. Toggle progress dapat berada di island yang sama bila keduanya mengatur list yang sama. Saya akan merekam interaction filter dan toggle di React DevTools Profiler, lalu membandingkan commit sebelum dan sesudah memoization jika filter dan sort terlihat mahal. Trade-off yang perlu diuji adalah apakah state filter perlu mempertahankan query di URL agar shareable tanpa memperluas client boundary.",
      minimumCharacters: 600,
      checklist: [
        "Menetapkan content server dan capability client secara eksplisit.",
        "Menjelaskan mengapa hydration masih diperlukan pada island interaktif.",
        "Menyebut data serializable yang diteruskan ke client.",
        "Menyusun baseline dan measurement sebelum memoization.",
        "Menyebut satu trade-off atau pertanyaan untuk tim.",
      ],
      modelAnswer:
        "Saya akan mengembalikan CoursePage menjadi Server Component agar data course, heading, description, resource links, dan lesson list awal tidak menjadi client hanya karena ada filter. CourseFilter menjadi Client Component kecil yang menyimpan query serta menangani onChange. Jika toggle progress mengubah daftar yang sama, toggle dapat tinggal di island itu agar state yang saling terkait tidak tersebar. Island tersebut tetap perlu hydration karena input dan click handler baru dapat bekerja di browser setelah JavaScript dimuat. Parent server cukup meneruskan array lesson yang serializable, misalnya id, title, duration, dan status; tidak perlu meneruskan callback server biasa. Sebelum memakai useMemo untuk filter dan sort, saya akan membuka route, merekam interaction mengetik dan toggle di React DevTools Profiler, lalu melihat apakah calculation atau commit memang memakan waktu yang berarti. Saya akan membandingkan baseline dengan perubahan kecil setelahnya. Trade-off yang perlu dibahas adalah apakah query perlu disimpan di URL supaya dapat dibagikan; keputusan itu dapat memengaruhi ownership state dan journey navigation, sehingga tidak cukup diputuskan hanya dari jumlah render.",
    },
    {
      id: "rendering-cost-hydration-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca boundary dan render dengan pertanyaan nyata",
      description:
        "Dokumentasi membantu kamu meninjau server/client boundary dari capability yang tepat, sedangkan Profiler membantu mengganti asumsi performance dengan bukti interaction yang direkam.",
      links: [
        {
          source: "Next.js",
          title: "Server and Client Components",
          url: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
          focus: [
            "Kapan Client Component diperlukan dan bagaimana use client membentuk client module graph.",
            "Batas props serializable ketika data mengalir dari server ke client.",
            "Menjaga content server sambil membuat interaction browser sebagai island kecil.",
          ],
          ignoreForNow: [
            "Streaming, cache strategy, dan architecture level route yang belum muncul pada kasus ini.",
          ],
        },
        {
          source: "React",
          title: "React Developer Tools",
          url: "https://react.dev/learn/react-developer-tools",
          focus: [
            "Cara membuka Profiler untuk merekam interaction yang spesifik.",
            "Membaca commit dan component yang relevan sebelum menambah memoization.",
            "Membandingkan baseline dengan satu perubahan kecil yang dapat dijelaskan.",
          ],
          ignoreForNow: [
            "Profiling architecture kompleks dan React Compiler.",
          ],
        },
      ],
      followUpAction:
        "Tinjau satu route project lokal: tandai file yang memakai use client, tulis capability browsernya, lalu catat satu candidate interaction yang perlu direkam sebelum dioptimalkan.",
    },
    {
      id: "rendering-cost-hydration-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap menjelaskan hydration sebagai biaya untuk interaction browser yang memang dibutuhkan.",
        "Kamu dapat menjaga server parent untuk content dan data sambil membuat client island yang terarah.",
        "Kamu memahami bahwa use client yang lebar dapat memperluas client graph tanpa nilai user yang sepadan.",
        "Kamu dapat memakai Profiler serta baseline sebelum memilih memoization atau refactor render.",
        "Level Performance selesai. Berikutnya, kamu akan berpindah ke Accessibility untuk meninjau semantic HTML dan keyboard navigation sebagai kualitas produk yang juga dapat diuji.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "rendering-cost-hydration-assessment-recap",
      "rendering-cost-hydration-assessment-quiz",
      "rendering-cost-hydration-assessment-coding-practice",
      "rendering-cost-hydration-assessment-writing-practice",
      "rendering-cost-hydration-assessment-documentation-bridge",
      "rendering-cost-hydration-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const renderingCostHydrationAssessmentQuiz: Quiz = {
  id: "rendering-cost-hydration-assessment-quiz",
  lessonId: "rendering-cost-hydration-assessment",
  title: "Uji Kompetensi Rendering Cost and Hydration",
  passingScore: 70,
  questions: [
    {
      id: "rendering-hydration-purpose",
      type: "multiple-choice",
      question:
        "Apa yang paling tepat menggambarkan hydration pada route Next.js?",
      options: [
        "Browser memuat JavaScript Client Component lalu React menghubungkan interaction seperti event handler ke UI yang sudah terlihat.",
        "Server menghapus semua JavaScript supaya UI dapat menerima input.",
        "Browser hanya mengganti CSS setelah page selesai dimuat.",
        "React selalu mengirim seluruh route sebagai Client Component.",
      ],
      correctAnswer:
        "Browser memuat JavaScript Client Component lalu React menghubungkan interaction seperti event handler ke UI yang sudah terlihat.",
      explanation:
        "Hydration memberi interactivity pada bagian client. Karena membawa browser work, gunakan pada capability seperti state atau event yang benar-benar dibutuhkan user.",
    },
    {
      id: "rendering-small-boundary",
      type: "multiple-choice",
      question:
        "Route course memiliki heading, description, lesson list, dan filter yang menyimpan query. Boundary yang paling proporsional adalah",
      options: [
        "CoursePage tetap server-rendered, sedangkan CourseFilter menjadi Client Component kecil.",
        "Root layout diberi use client agar seluruh aplikasi mendukung filter.",
        "Setiap heading dibuat Client Component agar konsisten dengan filter.",
        "Filter dipaksa server-only meskipun harus menangani onChange di browser.",
      ],
      correctAnswer:
        "CoursePage tetap server-rendered, sedangkan CourseFilter menjadi Client Component kecil.",
      explanation:
        "Content route dan data dapat tinggal di server. Island client kecil menerima data serializable dan menangani state atau event yang memang terjadi di browser.",
    },
    {
      id: "rendering-serializable-props",
      type: "multiple-choice",
      question:
        "Data mana yang paling aman diteruskan dari Server Component ke Client Component untuk filter course?",
      options: [
        "Array object sederhana berisi id, title, duration, dan status course.",
        "Callback function server biasa untuk menjalankan query internal.",
        "Database connection aktif yang dipakai parent server.",
        "Object class yang menyimpan method serta secret server.",
      ],
      correctAnswer:
        "Array object sederhana berisi id, title, duration, dan status course.",
      explanation:
        "Props lintas server-client boundary perlu serializable. Kirim data yang dibutuhkan UI, bukan connection, secret, atau function server biasa.",
    },
    {
      id: "rendering-measure-first",
      type: "multiple-choice",
      question:
        "Seorang engineer menduga sorting lesson membuat filter lambat. Langkah berikutnya yang paling matang adalah",
      options: [
        "Rekam interaction filter, baca Profiler, lalu bandingkan baseline sebelum dan sesudah perbaikan kecil.",
        "Tambahkan memo ke semua component tanpa menguji interaction.",
        "Hapus sorting agar tidak ada component yang re-render.",
        "Pindahkan semua data ke browser tanpa melihat cost awal route.",
      ],
      correctAnswer:
        "Rekam interaction filter, baca Profiler, lalu bandingkan baseline sebelum dan sesudah perbaikan kecil.",
      explanation:
        "Profiler dan baseline mengarahkan optimasi pada work yang benar-benar memengaruhi user. Memoization adalah pilihan setelah cost dan dependency dipahami.",
    },
    {
      id: "rendering-client-graph",
      type: "multiple-choice",
      question:
        "Mengapa memberi use client pada page root perlu dihindari bila hanya satu panel kecil yang interaktif?",
      options: [
        "Karena import dan child di bawah boundary dapat ikut masuk ke client graph sehingga hydration lebih luas dari kebutuhan interaction.",
        "Karena page root tidak pernah boleh memiliki JSX.",
        "Karena Client Component tidak dapat menerima data apa pun.",
        "Karena use client otomatis menghapus event handler dari panel kecil.",
      ],
      correctAnswer:
        "Karena import dan child di bawah boundary dapat ikut masuk ke client graph sehingga hydration lebih luas dari kebutuhan interaction.",
      explanation:
        "Boundary yang kecil menjaga browser work pada bagian yang benar-benar memerlukan capability client tanpa mengorbankan interaction yang penting.",
    },
  ],
};

export const classifyCourseRenderingBoundariesChallenge: CodingChallenge = {
  id: "classify-course-rendering-boundaries",
  lessonId: "server-vs-client-rendering-decisions",
  title: "Classify course rendering boundaries",
  description:
    "Petakan bagian route course sebagai server atau client berdasarkan pekerjaan yang benar-benar dilakukan di browser.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap map ini mendeskripsikan route app/courses/page.tsx dan file pendukungnya.",
    "Tandai CoursePage sebagai server karena mengambil serta menampilkan data course.",
    "Tandai CourseFilter sebagai client karena menyimpan query dan menangani onChange.",
    "Tandai LessonSummary sebagai server karena hanya menampilkan data lesson.",
    "Tambahkan alasan hydration pada CourseFilter dan props courses yang serializable.",
    "Cek otomatis membaca struktur keputusan. Preview tidak menjalankan route Next.js atau hydration nyata.",
  ],
  starterCode: {
    ...renderingPracticeCode,
    tsx: `type RenderDecision = {
  component: string;
  rendering: "server" | "client";
  responsibility: string;
  receives?: string;
  hydrationReason?: string;
};

const decisions: RenderDecision[] = [
  {
    component: "CoursePage",
    rendering: "client",
    responsibility: "fetch course data and render course content",
  },
  {
    component: "CourseFilter",
    rendering: "client",
    responsibility: "stores query state and handles input onChange",
  },
  {
    component: "LessonSummary",
    rendering: "client",
    responsibility: "displays lesson data without browser interaction",
  },
];

export default decisions;`,
  },
  solutionCode: {
    ...renderingPracticeCode,
    tsx: `type RenderDecision = {
  component: string;
  rendering: "server" | "client";
  responsibility: string;
  receives?: string;
  hydrationReason?: string;
};

const decisions: RenderDecision[] = [
  {
    component: "CoursePage",
    rendering: "server",
    responsibility: "fetch course data and render course content",
  },
  {
    component: "CourseFilter",
    rendering: "client",
    responsibility: "stores query state and handles input onChange",
    receives: "courses: CourseSummary[]",
    hydrationReason: "input interaction needs browser state and event handlers",
  },
  {
    component: "LessonSummary",
    rendering: "server",
    responsibility: "displays lesson data without browser interaction",
  },
];

export default decisions;`,
  },
  checklist: [
    "CoursePage tetap server untuk data serta content route.",
    "CourseFilter menjadi client karena query state dan onChange.",
    "CourseFilter menerima data course yang serializable.",
    "Alasan hydration hanya ada pada interaction browser yang nyata.",
    "LessonSummary tetap server ketika hanya menampilkan data.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "decision-type", label: "Type RenderDecision tersedia.", type: "contains", target: "type RenderDecision =", valueIncludes: "type RenderDecision =" },
      { id: "course-page", label: "CoursePage ditandai server.", type: "contains", target: 'component: "CoursePage",\n    rendering: "server"', valueIncludes: 'component: "CoursePage",\n    rendering: "server"' },
      { id: "course-filter", label: "CourseFilter ditandai client.", type: "contains", target: 'component: "CourseFilter",\n    rendering: "client"', valueIncludes: 'component: "CourseFilter",\n    rendering: "client"' },
      { id: "serializable-courses", label: "CourseFilter menerima courses serializable.", type: "contains", target: 'receives: "courses: CourseSummary[]"', valueIncludes: 'receives: "courses: CourseSummary[]"' },
      { id: "hydration-reason", label: "Alasan hydration menjelaskan interaction browser.", type: "contains", target: "hydrationReason: \"input interaction needs browser state and event handlers\"", valueIncludes: "hydrationReason: \"input interaction needs browser state and event handlers\"" },
      { id: "lesson-summary", label: "LessonSummary tetap server.", type: "contains", target: 'component: "LessonSummary",\n    rendering: "server"', valueIncludes: 'component: "LessonSummary",\n    rendering: "server"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca keputusan boundary pada map route. Preview tidak menjalankan Next.js, mengirim props lintas server-client, atau melakukan hydration nyata.",
    lines: [
      "Content route tetap server-rendered ketika tidak memakai browser capability.",
      "Filter kecil menjadi client karena memiliki state dan event input.",
      "Alasan hydration dan bentuk data lintas boundary ditulis dengan jelas.",
    ],
  },
  skillTags: ["Next.js", "Server Components", "Client Components", "Hydration"],
};

export const buildCourseFilterClientIslandChallenge: CodingChallenge = {
  id: "build-course-filter-client-island",
  lessonId: "client-component-boundaries",
  title: "Build course filter client island",
  description:
    "Buat CourseFilter kecil yang menyimpan query serta menerima data course sederhana dari parent server.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/courses/course-filter.tsx.",
    "Tambahkan use client pada bagian paling atas file.",
    "Import useState dan buat state query bertipe string.",
    "Filter courses berdasarkan query secara case-insensitive.",
    "Hubungkan input ke value query dan onChange yang memperbarui query.",
    "Cek otomatis membaca struktur Client Component. Preview tidak menjalankan route Next.js atau hydration nyata.",
  ],
  starterCode: {
    ...renderingPracticeCode,
    tsx: `type CourseFilterProps = {
  courses: string[];
};

export default function CourseFilter({ courses }: CourseFilterProps) {
  return (
    <label>
      Cari course
      <input aria-label="Cari course" />
      <p>{courses.length} course ditemukan.</p>
    </label>
  );
}`,
  },
  solutionCode: {
    ...renderingPracticeCode,
    tsx: `"use client";

import { useState } from "react";

type CourseFilterProps = {
  courses: string[];
};

export default function CourseFilter({ courses }: CourseFilterProps) {
  const [query, setQuery] = useState("");
  const visibleCourses = courses.filter((course) =>
    course.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <label>
      Cari course
      <input
        aria-label="Cari course"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p>{visibleCourses.length} course ditemukan.</p>
    </label>
  );
}`,
  },
  checklist: [
    "File memulai client boundary untuk state serta event input.",
    "CourseFilter menerima array course sederhana dari server parent.",
    "query dan onChange hidup di island kecil, bukan di page besar.",
    "Filter mencocokkan text secara case-insensitive.",
    "Jumlah course yang terlihat memakai hasil filter.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "client-directive", label: "use client berada di atas file.", type: "contains", target: '"use client";', valueIncludes: '"use client";' },
      { id: "state-import", label: "useState diimport dari React.", type: "contains", target: 'import { useState } from "react";', valueIncludes: 'import { useState } from "react";' },
      { id: "query-state", label: "State query tersedia.", type: "contains", target: 'const [query, setQuery] = useState("");', valueIncludes: 'const [query, setQuery] = useState("");' },
      { id: "course-filter", label: "courses difilter dari query.", type: "contains", target: "const visibleCourses = courses.filter((course) =>", valueIncludes: "const visibleCourses = courses.filter((course) =>" },
      { id: "case-insensitive", label: "Filter memakai normalisasi lowercase.", type: "contains", target: "course.toLowerCase().includes(query.toLowerCase())", valueIncludes: "course.toLowerCase().includes(query.toLowerCase())" },
      { id: "input-value", label: "Input membaca value query.", type: "contains", target: "value={query}", valueIncludes: "value={query}" },
      { id: "input-change", label: "Input memperbarui query saat berubah.", type: "contains", target: "onChange={(event) => setQuery(event.target.value)}", valueIncludes: "onChange={(event) => setQuery(event.target.value)}" },
      { id: "visible-count", label: "Jumlah memakai visibleCourses.", type: "contains", target: "{visibleCourses.length} course ditemukan.", valueIncludes: "{visibleCourses.length} course ditemukan." },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca boundary dan state CourseFilter. Preview tidak menjalankan route Next.js, meneruskan data dari server, atau melakukan hydration nyata.",
    lines: [
      "CourseFilter menjadi pulau client untuk query serta onChange.",
      "Data course tetap masuk sebagai props sederhana dari parent server.",
      "Boundary tidak menarik heading dan content route yang tidak interaktif ke browser.",
    ],
  },
  skillTags: ["Next.js", "use client", "useState", "Client Boundary"],
};

export const memoizeMeasuredLessonFilterChallenge: CodingChallenge = {
  id: "memoize-measured-lesson-filter",
  lessonId: "expensive-rerenders",
  title: "Memoize measured lesson filter",
  description:
    "Cache filter dan sorting lesson setelah measurement menunjukkan derived calculation ini perlu diperhatikan.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap Profiler sudah menunjukkan filter dan sort ini relevan saat learner mengetik atau menyalakan toggle.",
    "Import useMemo bersama useState dari React.",
    "Bungkus derived calculation visibleLessons dengan useMemo.",
    "Masukkan lessons, query, dan showReady ke dependency array.",
    "Jaga filter query, filter status ready, dan sort duration tetap bekerja.",
    "Preview menjalankan component React kecil untuk melihat hasil filter; ia bukan pengganti profiling project nyata.",
  ],
  starterCode: {
    ...renderingPracticeCode,
    tsx: `import { useState } from "react";

type Lesson = {
  id: string;
  title: string;
  duration: number;
  status: "ready" | "draft";
};

const lessons: Lesson[] = [
  { id: "html", title: "Semantic HTML", duration: 35, status: "ready" },
  { id: "react", title: "React Rendering", duration: 50, status: "draft" },
  { id: "next", title: "Next.js Boundaries", duration: 45, status: "ready" },
];

export default function LessonFilterBoard() {
  const [query, setQuery] = useState("");
  const [showReady, setShowReady] = useState(false);

  const visibleLessons = lessons
    .filter((lesson) => !showReady || lesson.status === "ready")
    .filter((lesson) =>
      lesson.title.toLowerCase().includes(query.toLowerCase()),
    )
    .slice()
    .sort((a, b) => b.duration - a.duration);

  return (
    <section>
      <h2>Lesson filter</h2>
      <label>
        Cari lesson
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showReady}
          onChange={(event) => setShowReady(event.target.checked)}
        />
        Hanya siap
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
  solutionCode: {
    ...renderingPracticeCode,
    tsx: `import { useMemo, useState } from "react";

type Lesson = {
  id: string;
  title: string;
  duration: number;
  status: "ready" | "draft";
};

const lessons: Lesson[] = [
  { id: "html", title: "Semantic HTML", duration: 35, status: "ready" },
  { id: "react", title: "React Rendering", duration: 50, status: "draft" },
  { id: "next", title: "Next.js Boundaries", duration: 45, status: "ready" },
];

export default function LessonFilterBoard() {
  const [query, setQuery] = useState("");
  const [showReady, setShowReady] = useState(false);

  const visibleLessons = useMemo(() => {
    return lessons
      .filter((lesson) => !showReady || lesson.status === "ready")
      .filter((lesson) =>
        lesson.title.toLowerCase().includes(query.toLowerCase()),
      )
      .slice()
      .sort((a, b) => b.duration - a.duration);
  }, [lessons, query, showReady]);

  return (
    <section>
      <h2>Lesson filter</h2>
      <label>
        Cari lesson
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showReady}
          onChange={(event) => setShowReady(event.target.checked)}
        />
        Hanya siap
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
    "useMemo hanya dipakai karena case ini telah diukur pada Profiler.",
    "Filter status dan query tetap berada di dalam derived calculation yang sama.",
    "Sort duration tidak mengubah array source secara langsung.",
    "Dependency array merepresentasikan input calculation yang digunakan.",
    "Preview tetap dapat memfilter lesson saat learner berinteraksi.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonFilterBoard",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "memo-import", label: "useMemo diimport bersama useState.", type: "contains", target: 'import { useMemo, useState } from "react";', valueIncludes: 'import { useMemo, useState } from "react";' },
      { id: "memo-boundary", label: "visibleLessons menggunakan useMemo.", type: "contains", target: "const visibleLessons = useMemo(() => {", valueIncludes: "const visibleLessons = useMemo(() => {" },
      { id: "ready-filter", label: "Filter status ready tetap ada.", type: "contains", target: 'lesson.status === "ready"', valueIncludes: 'lesson.status === "ready"' },
      { id: "query-filter", label: "Filter query tetap ada.", type: "contains", target: "lesson.title.toLowerCase().includes(query.toLowerCase())", valueIncludes: "lesson.title.toLowerCase().includes(query.toLowerCase())" },
      { id: "copy-before-sort", label: "Array disalin sebelum sorting.", type: "contains", target: ".slice()", valueIncludes: ".slice()" },
      { id: "duration-sort", label: "Lesson diurutkan menurut duration.", type: "contains", target: ".sort((a, b) => b.duration - a.duration)", valueIncludes: ".sort((a, b) => b.duration - a.duration)" },
      { id: "memo-dependencies", label: "Dependency array memuat lessons, query, dan showReady.", type: "contains", target: "}, [lessons, query, showReady]);", valueIncludes: "}, [lessons, query, showReady]);" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview React",
    description:
      "Preview menjalankan filter React kecil agar learner dapat mencoba query dan toggle. Cek otomatis membaca struktur useMemo, sedangkan profiling tetap dilakukan pada project nyata.",
    lines: [
      "Ketik query untuk menyaring lesson berdasarkan title.",
      "Nyalakan Hanya siap untuk melihat lesson berstatus ready.",
      "Filter dan sort di-cache sampai input calculation berubah.",
    ],
  },
  skillTags: ["React", "useMemo", "Derived State", "React DevTools Profiler"],
};

export const buildRenderingCostCheckpointChallenge: CodingChallenge = {
  id: "build-rendering-cost-checkpoint",
  lessonId: "rendering-cost-hydration-assessment",
  title: "Build rendering cost checkpoint",
  description:
    "Susun peta boundary route course agar content tetap server-rendered dan interaction browser berada pada island yang tepat.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap map ini sebagai review sebelum memecah app/courses/page.tsx yang sekarang terlalu luas memakai use client.",
    "Tandai CoursePage, CourseHeader, dan LessonList sebagai server.",
    "Tandai CourseControls sebagai client untuk query dan toggle progress.",
    "Tambahkan props serializable lessonItems ke CourseControls.",
    "Tuliskan alasan hydration yang menyebut state serta event browser.",
    "Cek otomatis membaca checkpoint struktur. Preview tidak menjalankan route, Profiler, atau hydration Next.js nyata.",
  ],
  starterCode: {
    ...renderingPracticeCode,
    tsx: `type RoutePart = {
  component: string;
  rendering: "server" | "client";
  responsibility: string;
  receives?: string;
  hydrationReason?: string;
};

const routeParts: RoutePart[] = [
  {
    component: "CoursePage",
    rendering: "client",
    responsibility: "fetches course data and composes the route",
  },
  {
    component: "CourseHeader",
    rendering: "client",
    responsibility: "shows title and description",
  },
  {
    component: "CourseControls",
    rendering: "client",
    responsibility: "stores query and progress toggle state",
  },
  {
    component: "LessonList",
    rendering: "client",
    responsibility: "renders lesson content",
  },
];

export default routeParts;`,
  },
  solutionCode: {
    ...renderingPracticeCode,
    tsx: `type RoutePart = {
  component: string;
  rendering: "server" | "client";
  responsibility: string;
  receives?: string;
  hydrationReason?: string;
};

const routeParts: RoutePart[] = [
  {
    component: "CoursePage",
    rendering: "server",
    responsibility: "fetches course data and composes the route",
  },
  {
    component: "CourseHeader",
    rendering: "server",
    responsibility: "shows title and description",
  },
  {
    component: "CourseControls",
    rendering: "client",
    responsibility: "stores query and progress toggle state",
    receives: "lessonItems: LessonItem[]",
    hydrationReason: "query state and input or toggle events run in the browser",
  },
  {
    component: "LessonList",
    rendering: "server",
    responsibility: "renders lesson content",
  },
];

export default routeParts;`,
  },
  checklist: [
    "Page root kembali menjadi server untuk data dan route composition.",
    "Header dan lesson list tidak menjadi client tanpa capability browser.",
    "Controls menjadi satu island untuk query serta toggle yang saling terkait.",
    "Data lesson lintas boundary ditulis sebagai props serializable.",
    "Hydration dijelaskan sebagai biaya untuk state dan event, bukan untuk seluruh page.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "route-part-type", label: "Type RoutePart tersedia.", type: "contains", target: "type RoutePart =", valueIncludes: "type RoutePart =" },
      { id: "page-server", label: "CoursePage kembali server.", type: "contains", target: 'component: "CoursePage",\n    rendering: "server"', valueIncludes: 'component: "CoursePage",\n    rendering: "server"' },
      { id: "header-server", label: "CourseHeader tetap server.", type: "contains", target: 'component: "CourseHeader",\n    rendering: "server"', valueIncludes: 'component: "CourseHeader",\n    rendering: "server"' },
      { id: "controls-client", label: "CourseControls menjadi client island.", type: "contains", target: 'component: "CourseControls",\n    rendering: "client"', valueIncludes: 'component: "CourseControls",\n    rendering: "client"' },
      { id: "controls-props", label: "Controls menerima lessonItems serializable.", type: "contains", target: 'receives: "lessonItems: LessonItem[]"', valueIncludes: 'receives: "lessonItems: LessonItem[]"' },
      { id: "controls-hydration", label: "Alasan hydration menyebut state dan event browser.", type: "contains", target: "hydrationReason: \"query state and input or toggle events run in the browser\"", valueIncludes: "hydrationReason: \"query state and input or toggle events run in the browser\"" },
      { id: "list-server", label: "LessonList tetap server.", type: "contains", target: 'component: "LessonList",\n    rendering: "server"', valueIncludes: 'component: "LessonList",\n    rendering: "server"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca refactor boundary route. Preview tidak menjalankan route Next.js, mengukur hydration, atau merekam Profiler project lokal.",
    lines: [
      "Content course dapat tetap server-rendered pada route awal.",
      "CourseControls membawa state dan event pada client island yang terarah.",
      "Data lintas boundary dan alasan hydration dapat direview sebelum implementasi lokal.",
    ],
  },
  skillTags: ["Next.js", "Hydration", "Client Boundary", "Readiness Checkpoint"],
};
