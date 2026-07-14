import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const performanceAwarenessModule: Module = {
  id: "react-performance-awareness",
  trackId: "frontend-engineering",
  title: "Performance Awareness",
  slug: "react-performance-awareness",
  description:
    "Memahami biaya render React, mengukur sebelum mengubah kode, lalu memakai memoization hanya untuk masalah yang benar-benar terbukti.",
  order: 29,
  lessonIds: [
    "react-render-cost",
    "react-measuring-before-optimizing",
    "react-usememo-usecallback-when-useful",
    "react-expensive-lists",
    "react-performance-awareness-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["React", "Performance", "Profiler", "Memoization", "Rendering"],
};

export const reactRenderCostLesson: Lesson = {
  id: "react-render-cost",
  trackId: "frontend-engineering",
  moduleId: "react-performance-awareness",
  title: "Render Cost",
  slug: "react-render-cost",
  description:
    "Memahami bahwa re-render punya biaya, tetapi tidak setiap render adalah masalah yang perlu dioptimalkan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan kapan React component dapat re-render",
    "Membedakan re-render dari perubahan DOM yang terlihat",
    "Menentukan kapan render perlu diselidiki lebih lanjut",
  ],
  skillTags: ["React", "Rendering", "Performance", "Debugging"],
  blocks: [
    {
      id: "react-render-cost-intro",
      type: "text",
      title: "Render adalah pekerjaan, bukan alarm",
      content:
        "React perlu menjalankan component lagi saat state berubah, props berubah, atau parent merender ulang. Proses ini disebut re-render. React kemudian membandingkan hasil render baru dengan UI sebelumnya dan hanya menerapkan perubahan DOM yang diperlukan. Karena itu, re-render tidak otomatis berarti browser membangun ulang seluruh halaman.\n\nRender tetap punya biaya: function component dijalankan kembali, nilai turunan dihitung lagi, dan child component dapat ikut dievaluasi. Pada UI kecil, biaya ini sering tidak terasa. Masalah baru layak diselidiki ketika user merasakan lag, interaksi tertunda, list besar terasa berat, atau profiler menunjukkan pekerjaan berulang yang berarti.",
    },
    {
      id: "react-render-cost-example",
      type: "code-example",
      title: "Satu perubahan input dapat melewati beberapa component",
      language: "tsx",
      code: `import { useState } from "react";

type Lesson = {
  id: string;
  title: string;
};

function LessonSearch({ query, onQueryChange }: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <label>
      Cari lesson
      <input value={query} onChange={(event) => onQueryChange(event.target.value)} />
    </label>
  );
}

function LessonList({ lessons }: { lessons: Lesson[] }) {
  return <p>{lessons.length} lesson terlihat.</p>;
}

export function LessonCatalog({ lessons }: { lessons: Lesson[] }) {
  const [query, setQuery] = useState("");
  const visibleLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <LessonSearch query={query} onQueryChange={setQuery} />
      <LessonList lessons={visibleLessons} />
    </section>
  );
}`,
      explanation:
        "Saat query berubah, LessonCatalog merender ulang untuk menghitung visibleLessons terbaru. LessonSearch dan LessonList juga menerima props baru atau dievaluasi kembali sebagai bagian dari tree. Itu wajar karena hasil UI memang harus mengikuti input. Sebelum menambah memoization, cari dulu bukti bahwa perhitungan atau render ini benar-benar mengganggu pengalaman user.",
    },
    {
      id: "react-render-cost-important",
      type: "callout",
      variant: "important",
      title: "Re-render berbeda dengan DOM update besar",
      content:
        "React dapat memanggil function component tanpa mengubah banyak elemen di browser. Jangan menyimpulkan UI lambat hanya karena melihat render log bertambah. Amati interaksi user dan ukur dengan tool yang tepat sebelum mengubah struktur component.",
    },
    {
      id: "react-render-cost-quick-check",
      type: "quick-check",
      question:
        "Saat user mengetik di LessonSearch, kapan re-render tersebut patut dianggap sebagai masalah performance?",
      options: [
        "Saat ada gejala nyata atau hasil pengukuran menunjukkan pekerjaan render yang mahal",
        "Setiap kali state query berubah",
        "Saat console menampilkan satu render log",
        "Hanya karena LessonList menerima props",
      ],
      correctAnswer:
        "Saat ada gejala nyata atau hasil pengukuran menunjukkan pekerjaan render yang mahal",
      explanation:
        "State update memang dapat memicu re-render. Optimasi baru memiliki alasan ketika ada gejala atau data pengukuran yang menunjukkan biaya nyata, misalnya input terasa lambat atau perhitungan list besar berulang tanpa perlu.",
    },
    {
      id: "react-render-cost-summary",
      type: "summary",
      points: [
        "Re-render terjadi saat React perlu menghitung UI terbaru dari state, props, atau parent render.",
        "Re-render tidak selalu berarti seluruh DOM berubah atau UI bermasalah.",
        "Cari gejala dan bukti sebelum menambah optimasi.",
        "Berikutnya, kamu akan menggunakan Profiler untuk mengamati pekerjaan render dengan lebih terarah.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-render-cost-intro",
      "react-render-cost-example",
      "react-render-cost-important",
      "react-render-cost-quick-check",
      "react-render-cost-summary",
    ],
  },
};

export const reactMeasuringBeforeOptimizingLesson: Lesson = {
  id: "react-measuring-before-optimizing",
  trackId: "frontend-engineering",
  moduleId: "react-performance-awareness",
  title: "Measuring Before Optimizing",
  slug: "react-measuring-before-optimizing",
  description:
    "Mengamati interaksi, render, dan hasil Profiler sebelum memutuskan perubahan performance pada React feature.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menentukan gejala performance yang perlu diamati",
    "Menggunakan alur dasar React DevTools Profiler",
    "Membuat keputusan berdasarkan observasi, termasuk keputusan untuk tidak mengoptimalkan",
  ],
  skillTags: ["React", "Profiler", "Performance", "Debugging"],
  blocks: [
    {
      id: "react-measuring-before-optimizing-intro",
      type: "text",
      title: "Mulai dari interaksi yang terasa, bukan dari API",
      content:
        "Performance work yang baik dimulai dari pertanyaan konkret: interaksi mana yang terasa lambat, pada data seperti apa, dan apa yang terjadi ketika user mengulanginya? React DevTools Profiler membantu merekam commit render sehingga kamu dapat melihat component mana yang ikut bekerja dan berapa lama pekerjaan itu berlangsung.\n\nProfiler bukan perintah untuk mengejar render count paling kecil. Gunakan hasilnya bersama gejala yang dirasakan user. Bila rekaman menunjukkan pekerjaan kecil dan UI tetap responsif, keputusan yang benar bisa saja membiarkan kode tetap sederhana.",
    },
    {
      id: "react-measuring-before-optimizing-process",
      type: "code-example",
      title: "Alur observasi kecil di Local React App",
      language: "tsx",
      code: `1. Pilih satu interaksi yang terasa lambat, misalnya mengetik filter list.
2. Siapkan data yang cukup untuk mereproduksi gejalanya.
3. Buka React DevTools, pilih tab Profiler, lalu mulai merekam.
4. Lakukan satu interaksi yang sama seperti user lakukan.
5. Hentikan rekaman dan lihat component yang merender serta durasinya.
6. Tulis dugaan yang didukung rekaman, atau catat bahwa tidak ada masalah yang terbukti.
7. Ubah satu hal kecil hanya jika ada alasan yang jelas, lalu rekam ulang interaksi yang sama.`,
      explanation:
        "Urutan ini menjaga perbandingan tetap adil. Jangan mengubah banyak hal sekaligus, karena kamu tidak lagi tahu perubahan mana yang benar-benar membantu. Untuk module ini, kamu tidak perlu flamegraph kompleks atau micro-benchmark.",
    },
    {
      id: "react-measuring-before-optimizing-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menganggap console.log sebagai profiler",
      content:
        "Render log berguna untuk orientasi awal, tetapi tidak menjelaskan biaya render atau dampak pada interaksi user. Hindari menyimpulkan component lambat hanya dari jumlah log. Gunakan Profiler atau observasi browser untuk mengonfirmasi masalah yang ingin kamu perbaiki.",
    },
    {
      id: "react-measuring-before-optimizing-writing-practice",
      type: "writing-practice",
      prompt:
        "Di Local React App, pilih satu interaksi yang ingin kamu amati. Tulis catatan singkat dengan format berikut:\n- Interaksi yang direkam:\n- Data atau kondisi yang dipakai:\n- Component yang terlihat bekerja:\n- Gejala yang user rasakan atau tidak rasakan:\n- Keputusan: optimasi sekarang atau biarkan sederhana, beserta alasannya:\n\nIni adalah self-review lokal. FluentStack tidak dapat memeriksa rekaman Profiler kamu secara otomatis.",
      placeholder:
        "Interaksi yang direkam: mengetik filter pada daftar lesson.\nData atau kondisi yang dipakai: 80 lesson contoh.\nComponent yang terlihat bekerja: LessonCatalog dan LessonRow yang tampil.\nGejala yang user rasakan atau tidak rasakan: input tetap responsif, tidak ada jeda yang terasa.\nKeputusan: biarkan sederhana karena rekaman tidak menunjukkan biaya yang mengganggu dan filter masih ringan.",
      minimumCharacters: 320,
      checklist: [
        "Menyebut satu interaksi yang spesifik.",
        "Menjelaskan kondisi observasi, bukan hanya pendapat umum.",
        "Membedakan hasil yang terlihat dari dugaan awal.",
        "Menyatakan keputusan dan alasan yang dapat ditinjau rekan satu tim.",
      ],
      modelAnswer:
        "Interaksi yang direkam: mengetik filter pada daftar lesson. Data yang dipakai adalah 80 lesson contoh agar kondisi lebih mirip pemakaian nyata. Di Profiler, LessonCatalog dan row yang masih terlihat ikut dirender ketika query berubah. Input tidak terasa tertunda dan commit yang terlihat singkat. Saya memilih tidak menambah useMemo atau memo sekarang karena belum ada gejala yang perlu diperbaiki. Catatan ini tetap berguna sebagai baseline bila data bertambah dan perilaku berubah nanti.",
    },
    {
      id: "react-measuring-before-optimizing-summary",
      type: "summary",
      points: [
        "Tentukan interaksi dan kondisi yang ingin diamati sebelum membuka Profiler.",
        "Rekam satu perubahan kecil, lalu gunakan hasilnya untuk mendukung keputusan.",
        "Tidak mengoptimalkan adalah keputusan yang valid bila masalah belum terbukti.",
        "Berikutnya, kamu akan mempelajari kapan useMemo dan useCallback benar-benar membantu.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-measuring-before-optimizing-intro",
      "react-measuring-before-optimizing-process",
      "react-measuring-before-optimizing-common-mistake",
      "react-measuring-before-optimizing-summary",
    ],
  },
};

export const reactUseMemoUseCallbackWhenUsefulLesson: Lesson = {
  id: "react-usememo-usecallback-when-useful",
  trackId: "frontend-engineering",
  moduleId: "react-performance-awareness",
  title: "useMemo and useCallback When Useful",
  slug: "react-usememo-usecallback-when-useful",
  description:
    "Menggunakan useMemo dan useCallback untuk kasus terukur, bukan sebagai default di setiap React component.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan nilai yang di-cache useMemo dan function reference yang di-cache useCallback",
    "Menjelaskan hubungan useCallback dengan child yang dimemoize",
    "Menerapkan memoization pada list yang memiliki alasan jelas",
  ],
  skillTags: ["React", "useMemo", "useCallback", "memo", "Performance"],
  blocks: [
    {
      id: "react-usememo-usecallback-when-useful-intro",
      type: "text",
      title: "Memoization adalah alat keputusan",
      content:
        "useMemo menyimpan hasil perhitungan agar React dapat memakai kembali nilai yang sama selama dependency tidak berubah. useCallback menyimpan referensi function dengan aturan dependency yang sama. Keduanya menambah kode, dependency, dan hal yang perlu dipikirkan saat review.\n\nGunakan useMemo ketika perhitungan memang terbukti mahal atau nilai stabil diperlukan oleh consumer yang dimemoize. Gunakan useCallback ketika function reference yang berubah membuat child memoized melakukan pekerjaan yang tidak perlu. Jika tidak ada masalah terukur atau consumer yang membutuhkan stabilitas referensi, function dan perhitungan biasa biasanya lebih mudah dirawat.",
    },
    {
      id: "react-usememo-usecallback-when-useful-example",
      type: "code-example",
      title: "Filter list dan handler stabil untuk row yang dimemoize",
      language: "tsx",
      code: `import { memo, useCallback, useMemo, useState } from "react";

type Lesson = {
  id: string;
  title: string;
};

const lessons: Lesson[] = [
  { id: "html", title: "Semantic HTML" },
  { id: "react", title: "React Performance" },
];

const LessonRow = memo(function LessonRow({
  lesson,
  selected,
  onSelect,
}: {
  lesson: Lesson;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(lesson.id)}>
        {selected ? "Dipilih: " : ""}{lesson.title}
      </button>
    </li>
  );
});

export function LessonCatalog() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("html");
  const visibleLessons = useMemo(
    () => lessons.filter((lesson) => lesson.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const handleSelect = useCallback((id: string) => setSelectedId(id), []);

  return (
    <section>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <ul>
        {visibleLessons.map((lesson) => (
          <LessonRow
            key={lesson.id}
            lesson={lesson}
            selected={lesson.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </section>
  );
}`,
      explanation:
        "visibleLessons hanya dihitung ulang saat query berubah. handleSelect memiliki referensi stabil sehingga LessonRow yang dibungkus memo dapat membandingkan props dengan lebih berguna ketika perubahan lain terjadi. Contoh ini masuk akal bila pengukuran menunjukkan list atau row memang menjadi biaya. Untuk dua item sederhana tanpa gejala, pola yang lebih langsung dapat lebih baik.",
    },
    {
      id: "react-usememo-usecallback-when-useful-warning",
      type: "callout",
      variant: "warning",
      title: "Memoization tidak membuat semua render menjadi gratis",
      content:
        "useMemo dan useCallback juga menjalankan perbandingan dependency dan menyimpan nilai. memo hanya membantu bila props child benar-benar tetap sama dan child memiliki pekerjaan yang layak dihindari. Jangan membungkus semua component, object, dan callback hanya untuk terlihat optimized.",
    },
    {
      id: "react-usememo-usecallback-when-useful-coding-practice",
      type: "coding-practice",
      challengeId: "memoize-filtered-lesson-list",
    },
    {
      id: "react-usememo-usecallback-when-useful-summary",
      type: "summary",
      points: [
        "useMemo menyimpan hasil perhitungan; useCallback menyimpan referensi function.",
        "memoization perlu alasan dari pengukuran atau kebutuhan consumer yang dimemoize.",
        "Dependency harus menggambarkan nilai yang benar-benar dipakai oleh calculation atau callback.",
        "Berikutnya, kamu akan menerapkan keputusan ini pada filter dan sorting list yang lebih mahal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-usememo-usecallback-when-useful-intro",
      "react-usememo-usecallback-when-useful-example",
      "react-usememo-usecallback-when-useful-warning",
      "react-usememo-usecallback-when-useful-coding-practice",
      "react-usememo-usecallback-when-useful-summary",
    ],
  },
};

export const reactExpensiveListsLesson: Lesson = {
  id: "react-expensive-lists",
  trackId: "frontend-engineering",
  moduleId: "react-performance-awareness",
  title: "Expensive Lists",
  slug: "react-expensive-lists",
  description:
    "Mengamati biaya filter dan sorting list lalu memperbaiki jalur kalkulasi hanya bila perubahan itu dibutuhkan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Mengenali perhitungan list yang dapat dilakukan ulang saat render",
    "Memilih dependency useMemo untuk filter dan sorting",
    "Menjelaskan batas useMemo sebelum membutuhkan virtualisasi atau arsitektur lain",
  ],
  skillTags: ["React", "Lists", "useMemo", "Performance", "Data Transformation"],
  blocks: [
    {
      id: "react-expensive-lists-intro",
      type: "text",
      title: "List besar sering mahal karena kerja turunannya",
      content:
        "Masalah list tidak selalu berasal dari jumlah elemen yang terlihat. Filter, sorting, mapping data, format tanggal, atau pencarian beberapa field dapat menjadi pekerjaan berulang setiap render. Jika state lain berubah, perhitungan yang tidak terkait dapat ikut berjalan lagi bila ditulis langsung di body component.\n\nMulailah dengan membedakan data sumber, input filter, dan hasil turunan. Bila Profiler atau gejala user menunjukkan calculation tersebut mahal, useMemo dapat menyimpan hasilnya sampai input yang relevan berubah. Ini bukan pengganti virtualization untuk data yang benar-benar sangat besar; virtualization dan library khusus memang belum menjadi scope module ini.",
    },
    {
      id: "react-expensive-lists-example",
      type: "code-example",
      title: "Memoize filter dan sorting dari data sumber yang sama",
      language: "tsx",
      code: `import { useMemo, useState } from "react";

type Activity = {
  id: string;
  title: string;
  status: "open" | "done";
  updatedAt: number;
};

export function ActivityBoard({ activities }: { activities: Activity[] }) {
  const [query, setQuery] = useState("");
  const [showOnlyOpen, setShowOnlyOpen] = useState(false);

  const visibleActivities = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return activities
      .filter((activity) => !showOnlyOpen || activity.status === "open")
      .filter((activity) => activity.title.toLowerCase().includes(normalizedQuery))
      .slice()
      .sort((first, second) => second.updatedAt - first.updatedAt);
  }, [activities, query, showOnlyOpen]);

  return (
    <section>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <label>
        <input
          type="checkbox"
          checked={showOnlyOpen}
          onChange={(event) => setShowOnlyOpen(event.target.checked)}
        />
        Hanya activity terbuka
      </label>
      <p>{visibleActivities.length} activity terlihat.</p>
    </section>
  );
}`,
      explanation:
        "activities, query, dan showOnlyOpen adalah seluruh input calculation. Jika salah satunya berubah, hasil harus dihitung lagi. Jika state lain yang tidak dipakai calculation berubah, useMemo dapat mengembalikan nilai sebelumnya. Jangan menghilangkan dependency hanya agar cache lebih sering dipakai, karena hasil UI dapat menjadi usang.",
    },
    {
      id: "react-expensive-lists-tip",
      type: "callout",
      variant: "tip",
      title: "Ukur input yang realistis",
      content:
        "List berisi tiga item jarang memberi sinyal performance yang berguna. Saat menyelidiki masalah, gunakan jumlah data dan pola interaksi yang mendekati kondisi user. Setelah itu, ubah satu jalur calculation dan ukur ulang dengan skenario yang sama.",
    },
    {
      id: "react-expensive-lists-coding-practice",
      type: "coding-practice",
      challengeId: "memoize-sorted-activity-list",
    },
    {
      id: "react-expensive-lists-summary",
      type: "summary",
      points: [
        "Filter dan sorting adalah derived calculation yang dapat terulang saat component merender.",
        "useMemo memakai data sumber dan semua input filter sebagai dependency.",
        "Cache tidak boleh mengorbankan hasil UI yang benar atau dependency yang jujur.",
        "Berikutnya, Uji Kompetensi akan meminta kamu mengukur, menjelaskan, dan memperbaiki satu jalur performance secara terarah.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-expensive-lists-intro",
      "react-expensive-lists-example",
      "react-expensive-lists-tip",
      "react-expensive-lists-coding-practice",
      "react-expensive-lists-summary",
    ],
  },
};

export const reactPerformanceAwarenessAssessmentLesson: Lesson = {
  id: "react-performance-awareness-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-performance-awareness",
  title: "Uji Kompetensi Performance Awareness",
  slug: "react-performance-awareness-assessment",
  description:
    "Checkpoint kesiapan untuk menjelaskan render cost, mengukur masalah, dan menerapkan memoization yang memiliki alasan nyata.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Mengecek alasan re-render dan biaya calculation",
    "Menentukan kapan memoization perlu atau tidak perlu",
    "Menjelaskan hasil measurement sebagai catatan engineering yang dapat ditinjau",
  ],
  skillTags: ["React", "Performance", "Profiler", "Memoization", "Assessment"],
  blocks: [
    {
      id: "react-performance-awareness-assessment-recap",
      type: "text",
      title: "Checkpoint: optimasi yang dapat dijelaskan",
      content:
        "Uji Kompetensi ini tidak meminta kamu menghilangkan semua re-render. Fokusnya adalah membuat keputusan yang dapat dipertanggungjawabkan: pahami apa yang merender, ukur interaksi yang relevan, lalu gunakan memoization bila perhitungan atau props child memang membutuhkan bantuan.\n\nKamu belum perlu virtualization library, micro-benchmark, bundle splitting strategy, atau analisis flamegraph kompleks. Satu perubahan kecil dengan alasan dan hasil yang jelas lebih bernilai daripada banyak wrapper memo tanpa bukti.",
    },
    {
      id: "react-performance-awareness-assessment-quiz",
      type: "quiz",
      quizId: "react-performance-awareness-assessment-quiz",
    },
    {
      id: "react-performance-awareness-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "improve-measured-activity-board",
    },
    {
      id: "react-performance-awareness-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis performance note untuk rekan satu tim tentang feature ActivityBoard. Gunakan format berikut:\n- Interaksi dan gejala yang diamati:\n- Data atau kondisi yang dipakai:\n- Hasil pengukuran atau observasi:\n- Calculation atau props yang dipilih untuk diperbaiki:\n- Mengapa useMemo, useCallback, atau memo diperlukan atau tidak diperlukan:\n- Cara kamu akan mengukur ulang setelah perubahan:\n\nJangan mengklaim optimasi berhasil tanpa menyebut bukti yang perlu dicek.",
      placeholder:
        "Interaksi dan gejala yang diamati: mengetik filter activity dengan data contoh yang lebih besar terasa tertunda.\nData atau kondisi yang dipakai: 200 activity dengan sorting berdasarkan updatedAt.\nHasil pengukuran atau observasi: ActivityBoard menjalankan filter dan sorting lagi ketika state pilihan berubah.\nCalculation atau props yang dipilih untuk diperbaiki: visibleActivities dimemoize dari activities, query, dan showOnlyOpen.\nMengapa useMemo diperlukan: calculation tersebut memakai data lebih besar dan terbukti berulang pada interaksi yang tidak mengubah inputnya.\nCara mengukur ulang: rekam interaksi yang sama di Profiler lalu bandingkan respons input dan commit terkait.",
      minimumCharacters: 480,
      checklist: [
        "Menjelaskan interaksi dan kondisi yang dapat direproduksi.",
        "Membedakan observasi dari asumsi tentang performance.",
        "Menyebut dependency yang relevan bila memakai useMemo atau useCallback.",
        "Menjelaskan alasan tidak memakai optimasi bila itu keputusannya.",
        "Menyebut cara mengukur ulang setelah perubahan.",
      ],
      modelAnswer:
        "Interaksi yang diamati adalah mengetik filter pada ActivityBoard dengan 200 activity dan sorting berdasarkan updatedAt. Pada kondisi ini, input sempat terasa tertunda. Rekaman Profiler menunjukkan calculation filter dan sorting dijalankan ulang ketika user mengubah state pilihan yang tidak memengaruhi hasil list. Saya memindahkan calculation visibleActivities ke useMemo dengan dependency activities, query, dan showOnlyOpen. Saya tidak membungkus seluruh component dengan memo karena belum ada child mahal yang props-nya stabil. Setelah perubahan, saya akan merekam interaksi yang sama dengan data dan query yang sama untuk mengecek respons input dan commit terkait. Jika perbedaannya tidak berarti, saya akan mempertimbangkan kembali tambahan complexity tersebut.",
    },
    {
      id: "react-performance-awareness-assessment-docs",
      type: "documentation-bridge",
      title: "Baca keputusan performance dari docs React",
      description:
        "Gunakan docs ini untuk menguji asumsi sebelum menambah memoization ke Local React App. Fokus pada alasan, dependency, dan cara mengukur hasilnya.",
      links: [
        {
          source: "React",
          title: "Keeping Components Pure",
          url: "https://react.dev/learn/keeping-components-pure",
          focus: [
            "render sebagai perhitungan UI",
            "menghindari side effect saat render",
            "alasan component perlu mudah ditelusuri",
          ],
          ignoreForNow: ["React Compiler"],
        },
        {
          source: "React",
          title: "useMemo",
          url: "https://react.dev/reference/react/useMemo",
          focus: [
            "caching calculation",
            "dependency yang benar",
            "kapan useMemo tidak diperlukan",
          ],
          ignoreForNow: ["compiler directives"],
        },
        {
          source: "React",
          title: "useCallback",
          url: "https://react.dev/reference/react/useCallback",
          focus: [
            "caching function reference",
            "hubungan callback dan child memoized",
            "menghindari memoization berlebihan",
          ],
          ignoreForNow: ["library API design yang kompleks"],
        },
        {
          source: "React",
          title: "React Developer Tools",
          url: "https://react.dev/learn/react-developer-tools",
          focus: [
            "menemukan tab Profiler",
            "merekam satu interaksi",
            "membaca hasil sebelum mengubah kode",
          ],
          ignoreForNow: ["flamegraph analysis yang kompleks"],
        },
      ],
      followUpAction:
        "Di Local React App, pilih satu feature list atau calculation. Rekam satu interaksi realistis di Profiler, tulis hasilnya, lalu lakukan satu perubahan kecil hanya bila hasil itu menunjukkan alasan yang jelas. Simpan before/after note di README atau pull request note lokal.",
    },
    {
      id: "react-performance-awareness-assessment-summary",
      type: "summary",
      points: [
        "Re-render bukan masalah secara otomatis; gejala dan measurement menentukan prioritasnya.",
        "useMemo menyimpan calculation, useCallback menyimpan function reference, dan keduanya perlu dependency yang benar.",
        "List mahal sering membutuhkan perhatian pada filter, sorting, dan mapping sebelum optimasi lain.",
        "Optimasi yang baik punya alasan, perubahan kecil, dan pengukuran ulang.",
        "Berikutnya, Advanced Component Patterns akan membahas reusable API yang tetap sederhana dan tidak over-abstracted.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-performance-awareness-assessment-recap",
      "react-performance-awareness-assessment-quiz",
      "react-performance-awareness-assessment-coding-practice",
      "react-performance-awareness-assessment-writing-practice",
      "react-performance-awareness-assessment-docs",
      "react-performance-awareness-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactPerformanceAwarenessAssessmentQuiz: Quiz = {
  id: "react-performance-awareness-assessment-quiz",
  lessonId: "react-performance-awareness-assessment",
  title: "Uji Kompetensi Performance Awareness",
  passingScore: 70,
  questions: [
    {
      id: "react-performance-awareness-q1",
      type: "multiple-choice",
      question: "Pernyataan yang paling tepat tentang React re-render adalah...",
      options: [
        "Re-render perlu dipahami, tetapi tidak otomatis berarti seluruh DOM berubah atau UI lambat",
        "Setiap re-render adalah bug yang harus dihilangkan",
        "Re-render hanya terjadi ketika browser mengubah seluruh halaman",
        "Re-render tidak punya biaya sama sekali",
      ],
      correctAnswer:
        "Re-render perlu dipahami, tetapi tidak otomatis berarti seluruh DOM berubah atau UI lambat",
      explanation:
        "React merender untuk menghitung UI terbaru lalu membandingkan hasilnya. Biaya ada, tetapi optimasi perlu didasarkan pada gejala dan measurement, bukan render count semata.",
    },
    {
      id: "react-performance-awareness-q2",
      type: "multiple-choice",
      question: "Langkah pertama sebelum menambah useMemo ke calculation list adalah...",
      options: [
        "Mereproduksi interaksi dan mengamati apakah ada biaya atau gejala yang nyata",
        "Membungkus semua function dengan useCallback",
        "Menghapus dependency agar cache selalu dipakai",
        "Menambah memo ke setiap child component",
      ],
      correctAnswer:
        "Mereproduksi interaksi dan mengamati apakah ada biaya atau gejala yang nyata",
      explanation:
        "Measurement membantu membedakan masalah nyata dari optimasi prematur. Setelah itu, pilih perubahan terkecil yang sesuai penyebabnya.",
    },
    {
      id: "react-performance-awareness-q3",
      type: "multiple-choice",
      question: "Kapan useMemo paling relevan?",
      options: [
        "Saat calculation yang terbukti mahal dapat memakai hasil sebelumnya sampai inputnya berubah",
        "Setiap kali membuat string pendek",
        "Untuk menjalankan side effect setelah render",
        "Untuk menggantikan seluruh state component",
      ],
      correctAnswer:
        "Saat calculation yang terbukti mahal dapat memakai hasil sebelumnya sampai inputnya berubah",
      explanation:
        "useMemo menyimpan hasil calculation. Ia bukan alat untuk side effect dan tidak perlu dipasang pada perhitungan ringan tanpa alasan.",
    },
    {
      id: "react-performance-awareness-q4",
      type: "multiple-choice",
      question: "Kapan useCallback dapat berguna?",
      options: [
        "Saat child memoized membutuhkan function prop dengan referensi stabil agar pekerjaan berulang dapat dihindari",
        "Untuk membuat request API selalu berhasil",
        "Untuk mengubah DOM tanpa React",
        "Saat ingin menghapus semua dependency hook",
      ],
      correctAnswer:
        "Saat child memoized membutuhkan function prop dengan referensi stabil agar pekerjaan berulang dapat dihindari",
      explanation:
        "useCallback menjaga referensi function. Manfaatnya bergantung pada consumer seperti child memoized atau dependency hook lain, bukan pada callback itu sendiri saja.",
    },
    {
      id: "react-performance-awareness-q5",
      type: "true-false",
      question: "Menghapus dependency useMemo agar calculation tidak berjalan lagi adalah optimasi yang aman.",
      correctAnswer: false,
      explanation:
        "Dependency yang hilang dapat membuat hasil UI usang atau salah. Daftar dependency harus mencerminkan semua input yang dipakai calculation.",
    },
  ],
};

const performancePracticePreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React Performance</h1>
  <p>Fokus di tab TSX. Jalankan preview untuk mencoba filter, pilihan item, dan derived list.</p>
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

export const memoizeFilteredLessonListChallenge: CodingChallenge = {
  id: "memoize-filtered-lesson-list",
  lessonId: "react-usememo-usecallback-when-useful",
  title: "Memoize filtered lesson list",
  description:
    "Memoize calculation filter dan stabilkan handler untuk row lesson yang dimemoize setelah ada alasan untuk mengurangi pekerjaan berulang.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan useMemo untuk visibleLessons dengan dependency query.",
    "Buat LessonRow dengan memo agar props stabil memiliki manfaat.",
    "Gunakan useCallback untuk handleSelect lalu kirimkan ke setiap LessonRow.",
    "Jalankan preview untuk memastikan filter dan pemilihan lesson tetap bekerja.",
  ],
  starterCode: {
    ...performancePracticePreviewCode,
    tsx: `import { useState } from "react";

type Lesson = {
  id: string;
  title: string;
};

const lessons: Lesson[] = [
  { id: "html", title: "Semantic HTML" },
  { id: "state", title: "React State Strategy" },
  { id: "performance", title: "React Performance" },
];

function LessonRow({
  lesson,
  selected,
  onSelect,
}: {
  lesson: Lesson;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(lesson.id)}>
        {selected ? "Dipilih: " : ""}{lesson.title}
      </button>
    </li>
  );
}

function LessonCatalog() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("html");
  const visibleLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(query.toLowerCase()),
  );

  function handleSelect(id: string) {
    setSelectedId(id);
  }

  return (
    <section>
      <h1>Lesson catalog</h1>
      <label>
        Cari lesson
        <input value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <ul>
        {visibleLessons.map((lesson) => (
          <LessonRow
            key={lesson.id}
            lesson={lesson}
            selected={lesson.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </section>
  );
}`,
  },
  solutionCode: {
    ...performancePracticePreviewCode,
    tsx: `import { memo, useCallback, useMemo, useState } from "react";

type Lesson = {
  id: string;
  title: string;
};

const lessons: Lesson[] = [
  { id: "html", title: "Semantic HTML" },
  { id: "state", title: "React State Strategy" },
  { id: "performance", title: "React Performance" },
];

const LessonRow = memo(function LessonRow({
  lesson,
  selected,
  onSelect,
}: {
  lesson: Lesson;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(lesson.id)}>
        {selected ? "Dipilih: " : ""}{lesson.title}
      </button>
    </li>
  );
});

function LessonCatalog() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("html");
  const visibleLessons = useMemo(
    () => lessons.filter((lesson) => lesson.title.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const handleSelect = useCallback((id: string) => setSelectedId(id), []);

  return (
    <section>
      <h1>Lesson catalog</h1>
      <label>
        Cari lesson
        <input value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <ul>
        {visibleLessons.map((lesson) => (
          <LessonRow
            key={lesson.id}
            lesson={lesson}
            selected={lesson.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "visibleLessons dihitung dengan useMemo dan dependency query.",
    "LessonRow dibungkus memo.",
    "handleSelect dibuat dengan useCallback.",
    "handleSelect diteruskan ke LessonRow sebagai onSelect.",
    "Filter dan pemilihan lesson tetap bekerja di preview.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonCatalog",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-import", label: "memo, useCallback, useMemo, dan useState diimport dari React.", type: "contains", target: 'import { memo, useCallback, useMemo, useState } from "react";', valueIncludes: 'import { memo, useCallback, useMemo, useState } from "react";' },
      { id: "memo-row", label: "LessonRow dibungkus memo.", type: "contains", target: "const LessonRow = memo(function LessonRow(", valueIncludes: "const LessonRow = memo(function LessonRow(" },
      { id: "memo-calculation", label: "visibleLessons memakai useMemo.", type: "contains", target: "const visibleLessons = useMemo(", valueIncludes: "const visibleLessons = useMemo(" },
      { id: "query-dependency", label: "Filter bergantung pada query.", type: "contains", target: "[query]", valueIncludes: "[query]" },
      { id: "callback", label: "handleSelect memakai useCallback.", type: "contains", target: "const handleSelect = useCallback((id: string) => setSelectedId(id), []);", valueIncludes: "const handleSelect = useCallback((id: string) => setSelectedId(id), []);" },
      { id: "row-callback", label: "LessonRow menerima handleSelect.", type: "contains", target: "onSelect={handleSelect}", valueIncludes: "onSelect={handleSelect}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Preview tetap memfilter lesson dan menandai lesson yang dipilih. Cek otomatis membaca struktur memoization; gunakan pola ini hanya bila measurement memberi alasan yang jelas.",
    lines: [
      "visibleLessons dihitung dari query dengan useMemo.",
      "LessonRow yang dimemoize menerima callback stabil.",
      "Interaksi filter dan pilih lesson tetap benar di preview.",
    ],
  },
  skillTags: ["React", "useMemo", "useCallback", "memo", "Performance"],
};

export const memoizeSortedActivityListChallenge: CodingChallenge = {
  id: "memoize-sorted-activity-list",
  lessonId: "react-expensive-lists",
  title: "Memoize sorted activity list",
  description:
    "Pindahkan filter dan sorting activity ke useMemo agar derived list hanya dihitung ulang ketika inputnya berubah.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan useMemo untuk visibleActivities.",
    "Filter berdasarkan query dan showOnlyOpen.",
    "Urutkan activity terbaru terlebih dahulu tanpa mengubah array sumber.",
    "Gunakan activities, query, dan showOnlyOpen sebagai dependency calculation.",
    "Jalankan preview untuk mencoba filter dan checkbox.",
  ],
  starterCode: {
    ...performancePracticePreviewCode,
    tsx: `import { useState } from "react";

type Activity = {
  id: string;
  title: string;
  status: "open" | "done";
  updatedAt: number;
};

const activities: Activity[] = [
  { id: "a1", title: "Review lesson content", status: "open", updatedAt: 5 },
  { id: "a2", title: "Fix profile fallback", status: "done", updatedAt: 8 },
  { id: "a3", title: "Measure activity list", status: "open", updatedAt: 10 },
];

function ActivityBoard() {
  const [query, setQuery] = useState("");
  const [showOnlyOpen, setShowOnlyOpen] = useState(false);
  const visibleActivities = activities
    .filter((activity) => !showOnlyOpen || activity.status === "open")
    .filter((activity) => activity.title.toLowerCase().includes(query.toLowerCase()))
    .slice()
    .sort((first, second) => second.updatedAt - first.updatedAt);

  return (
    <section>
      <h1>Activity board</h1>
      <label>
        Cari activity
        <input value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showOnlyOpen}
          onChange={(event) => setShowOnlyOpen(event.target.checked)}
        />
        Hanya activity terbuka
      </label>
      <p>{visibleActivities.length} activity terlihat.</p>
      <ul>
        {visibleActivities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  solutionCode: {
    ...performancePracticePreviewCode,
    tsx: `import { useMemo, useState } from "react";

type Activity = {
  id: string;
  title: string;
  status: "open" | "done";
  updatedAt: number;
};

const activities: Activity[] = [
  { id: "a1", title: "Review lesson content", status: "open", updatedAt: 5 },
  { id: "a2", title: "Fix profile fallback", status: "done", updatedAt: 8 },
  { id: "a3", title: "Measure activity list", status: "open", updatedAt: 10 },
];

function ActivityBoard() {
  const [query, setQuery] = useState("");
  const [showOnlyOpen, setShowOnlyOpen] = useState(false);
  const visibleActivities = useMemo(() => {
    return activities
      .filter((activity) => !showOnlyOpen || activity.status === "open")
      .filter((activity) => activity.title.toLowerCase().includes(query.toLowerCase()))
      .slice()
      .sort((first, second) => second.updatedAt - first.updatedAt);
  }, [activities, query, showOnlyOpen]);

  return (
    <section>
      <h1>Activity board</h1>
      <label>
        Cari activity
        <input value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showOnlyOpen}
          onChange={(event) => setShowOnlyOpen(event.target.checked)}
        />
        Hanya activity terbuka
      </label>
      <p>{visibleActivities.length} activity terlihat.</p>
      <ul>
        {visibleActivities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "visibleActivities memakai useMemo.",
    "Filter query dan showOnlyOpen berada di dalam calculation.",
    "Hasil diurutkan berdasarkan updatedAt dari terbaru ke terlama.",
    "activities, query, dan showOnlyOpen menjadi dependency.",
    "Filter dan checkbox tetap memperbarui preview dengan benar.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ActivityBoard",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-import", label: "useMemo dan useState diimport dari React.", type: "contains", target: 'import { useMemo, useState } from "react";', valueIncludes: 'import { useMemo, useState } from "react";' },
      { id: "memo-calculation", label: "visibleActivities memakai useMemo.", type: "contains", target: "const visibleActivities = useMemo(() => {", valueIncludes: "const visibleActivities = useMemo(() => {" },
      { id: "open-filter", label: "Filter activity terbuka dipakai.", type: "contains", target: 'activity.status === "open"', valueIncludes: 'activity.status === "open"' },
      { id: "query-filter", label: "Filter query dipakai.", type: "contains", target: "activity.title.toLowerCase().includes(query.toLowerCase())", valueIncludes: "activity.title.toLowerCase().includes(query.toLowerCase())" },
      { id: "sort-copy", label: "Array sumber disalin sebelum diurutkan.", type: "contains", target: ".slice()", valueIncludes: ".slice()" },
      { id: "sort", label: "Activity diurutkan dari yang terbaru.", type: "contains", target: ".sort((first, second) => second.updatedAt - first.updatedAt)", valueIncludes: ".sort((first, second) => second.updatedAt - first.updatedAt)" },
      { id: "dependencies", label: "Calculation bergantung pada seluruh inputnya.", type: "contains", target: "[activities, query, showOnlyOpen]", valueIncludes: "[activities, query, showOnlyOpen]" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Preview memfilter dan mengurutkan activity sesuai input. Cek otomatis memastikan derived calculation memakai dependency yang lengkap; keputusan memakai useMemo tetap perlu didukung measurement pada aplikasi nyata.",
    lines: [
      "Query mempersempit activity yang tampil.",
      "Checkbox hanya menampilkan activity berstatus open.",
      "Daftar tetap berurutan dari updatedAt terbaru.",
    ],
  },
  skillTags: ["React", "Lists", "useMemo", "Performance"],
};

export const improveMeasuredActivityBoardChallenge: CodingChallenge = {
  id: "improve-measured-activity-board",
  lessonId: "react-performance-awareness-assessment",
  title: "Improve a measured activity board",
  description:
    "Terapkan memoization yang dapat dijelaskan pada ActivityBoard: cache derived list dan stabilkan handler untuk row yang dimemoize.",
  instructions: [
    "Fokus di tab TSX.",
    "Baca starter: calculation list dan callback row masih dibuat ulang pada setiap render.",
    "Gunakan useMemo untuk visibleActivities dengan dependency lengkap.",
    "Bungkus ActivityRow dengan memo dan buat handleSelect memakai useCallback.",
    "Jalankan preview, filter activity, lalu pilih satu item untuk memastikan behavior tidak berubah.",
    "Anggap ini sebagai perubahan setelah measurement, bukan template yang wajib dipakai di semua list.",
  ],
  starterCode: {
    ...performancePracticePreviewCode,
    tsx: `import { useState } from "react";

type Activity = {
  id: string;
  title: string;
  status: "open" | "done";
  updatedAt: number;
};

const activities: Activity[] = [
  { id: "a1", title: "Review lesson content", status: "open", updatedAt: 5 },
  { id: "a2", title: "Fix profile fallback", status: "done", updatedAt: 8 },
  { id: "a3", title: "Measure activity list", status: "open", updatedAt: 10 },
];

function ActivityRow({
  activity,
  selected,
  onSelect,
}: {
  activity: Activity;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(activity.id)}>
        {selected ? "Dipilih: " : ""}{activity.title}
      </button>
    </li>
  );
}

function ActivityBoard() {
  const [query, setQuery] = useState("");
  const [showOnlyOpen, setShowOnlyOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("a1");
  const visibleActivities = activities
    .filter((activity) => !showOnlyOpen || activity.status === "open")
    .filter((activity) => activity.title.toLowerCase().includes(query.toLowerCase()))
    .slice()
    .sort((first, second) => second.updatedAt - first.updatedAt);

  function handleSelect(id: string) {
    setSelectedId(id);
  }

  return (
    <section>
      <h1>Activity board</h1>
      <label>
        Cari activity
        <input value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showOnlyOpen}
          onChange={(event) => setShowOnlyOpen(event.target.checked)}
        />
        Hanya activity terbuka
      </label>
      <p>{visibleActivities.length} activity terlihat.</p>
      <ul>
        {visibleActivities.map((activity) => (
          <ActivityRow
            key={activity.id}
            activity={activity}
            selected={activity.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </section>
  );
}`,
  },
  solutionCode: {
    ...performancePracticePreviewCode,
    tsx: `import { memo, useCallback, useMemo, useState } from "react";

type Activity = {
  id: string;
  title: string;
  status: "open" | "done";
  updatedAt: number;
};

const activities: Activity[] = [
  { id: "a1", title: "Review lesson content", status: "open", updatedAt: 5 },
  { id: "a2", title: "Fix profile fallback", status: "done", updatedAt: 8 },
  { id: "a3", title: "Measure activity list", status: "open", updatedAt: 10 },
];

const ActivityRow = memo(function ActivityRow({
  activity,
  selected,
  onSelect,
}: {
  activity: Activity;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(activity.id)}>
        {selected ? "Dipilih: " : ""}{activity.title}
      </button>
    </li>
  );
});

function ActivityBoard() {
  const [query, setQuery] = useState("");
  const [showOnlyOpen, setShowOnlyOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("a1");
  const visibleActivities = useMemo(() => {
    return activities
      .filter((activity) => !showOnlyOpen || activity.status === "open")
      .filter((activity) => activity.title.toLowerCase().includes(query.toLowerCase()))
      .slice()
      .sort((first, second) => second.updatedAt - first.updatedAt);
  }, [activities, query, showOnlyOpen]);
  const handleSelect = useCallback((id: string) => setSelectedId(id), []);

  return (
    <section>
      <h1>Activity board</h1>
      <label>
        Cari activity
        <input value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showOnlyOpen}
          onChange={(event) => setShowOnlyOpen(event.target.checked)}
        />
        Hanya activity terbuka
      </label>
      <p>{visibleActivities.length} activity terlihat.</p>
      <ul>
        {visibleActivities.map((activity) => (
          <ActivityRow
            key={activity.id}
            activity={activity}
            selected={activity.id === selectedId}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "ActivityRow dibungkus memo.",
    "visibleActivities memakai useMemo dengan dependency lengkap.",
    "handleSelect memakai useCallback.",
    "ActivityRow menerima handleSelect yang stabil.",
    "Filter, checkbox, dan pemilihan activity tetap bekerja di preview.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ActivityBoard",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-import", label: "memo, useCallback, useMemo, dan useState diimport dari React.", type: "contains", target: 'import { memo, useCallback, useMemo, useState } from "react";', valueIncludes: 'import { memo, useCallback, useMemo, useState } from "react";' },
      { id: "memo-row", label: "ActivityRow dibungkus memo.", type: "contains", target: "const ActivityRow = memo(function ActivityRow(", valueIncludes: "const ActivityRow = memo(function ActivityRow(" },
      { id: "memo-calculation", label: "visibleActivities memakai useMemo.", type: "contains", target: "const visibleActivities = useMemo(() => {", valueIncludes: "const visibleActivities = useMemo(() => {" },
      { id: "dependencies", label: "Calculation memakai dependency lengkap.", type: "contains", target: "[activities, query, showOnlyOpen]", valueIncludes: "[activities, query, showOnlyOpen]" },
      { id: "callback", label: "handleSelect memakai useCallback.", type: "contains", target: "const handleSelect = useCallback((id: string) => setSelectedId(id), []);", valueIncludes: "const handleSelect = useCallback((id: string) => setSelectedId(id), []);" },
      { id: "row-callback", label: "ActivityRow menerima handleSelect.", type: "contains", target: "onSelect={handleSelect}", valueIncludes: "onSelect={handleSelect}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Preview tetap mendukung filter, checkbox, dan pemilihan activity. Cek otomatis memeriksa pola memoization; pada aplikasi nyata, gunakan perubahan ini hanya setelah measurement menemukan biaya yang relevan.",
    lines: [
      "Derived list memakai input activities, query, dan showOnlyOpen.",
      "Row memoized menerima callback stabil.",
      "Behavior user tetap sama setelah optimasi yang terukur.",
    ],
  },
  skillTags: ["React", "Performance", "useMemo", "useCallback", "memo", "Assessment"],
};
