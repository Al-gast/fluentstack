import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const nextjsServerClientComponentsModule: Module = {
  id: "nextjs-server-client-components",
  trackId: "frontend-engineering",
  title: "Server Components and Client Components",
  slug: "server-components-and-client-components",
  description:
    "Menentukan batas server dan client pada App Router agar UI tetap interaktif tanpa menjadikan seluruh route sebagai Client Component.",
  order: 32,
  lessonIds: [
    "nextjs-server-components",
    "nextjs-client-components",
    "nextjs-use-client-boundary",
    "nextjs-passing-props-across-boundaries",
    "nextjs-common-boundary-mistakes",
    "nextjs-server-client-components-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Next.js",
    "App Router",
    "Server Components",
    "Client Components",
    "Component Boundaries",
  ],
};

export const nextjsServerComponentsLesson: Lesson = {
  id: "nextjs-server-components",
  trackId: "frontend-engineering",
  moduleId: "nextjs-server-client-components",
  title: "Server Components",
  slug: "nextjs-server-components",
  description:
    "Mengenal Server Components sebagai default pada App Router dan memilih UI yang tidak membutuhkan interaksi browser.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan bahwa page dan layout App Router adalah Server Components secara default",
    "Mengidentifikasi UI statis yang dapat tetap berada di server",
    "Membedakan render server dari kebutuhan interaksi browser",
  ],
  skillTags: ["Next.js", "Server Components", "App Router", "Rendering"],
  blocks: [
    {
      id: "nextjs-server-components-intro",
      type: "text",
      title: "Mulai dari server, lalu tambahkan client bila memang diperlukan",
      content:
        "Pada App Router, page dan layout adalah Server Components secara default. Artinya, kamu tidak perlu menulis directive khusus hanya untuk menampilkan heading, daftar course, navigation statis, atau content route biasa. Ini adalah titik awal yang baik: pikirkan dulu bagian UI yang hanya perlu menerima dan menampilkan data.\n\nServer Component bukan berarti setiap hal harus dibuat rumit atau langsung terhubung ke database. Di lesson ini, contoh data masih sederhana. Yang penting adalah keputusan batasnya: bila bagian UI tidak membutuhkan state, event handler, effect, atau browser API, biarkan ia tetap sebagai Server Component.",
    },
    {
      id: "nextjs-server-components-example",
      type: "code-example",
      title: "Page dashboard tanpa kebutuhan browser interaktif",
      language: "tsx",
      code: `const learner = {
  name: "Rina",
  activeCourses: 3,
};

export default function DashboardPage() {
  return (
    <main>
      <h1>Halo, {learner.name}</h1>
      <p>Kamu sedang mengikuti {learner.activeCourses} course aktif.</p>
    </main>
  );
}`,
      explanation:
        "Tidak ada useState, onClick, useEffect, window, atau localStorage pada page ini. Karena itu, app/dashboard/page.tsx dapat tetap menjadi Server Component tanpa menambahkan \"use client\". Component masih boleh menerima data dan merender JSX; yang dibatasi adalah kemampuan browser interaktif.",
    },
    {
      id: "nextjs-server-components-rule",
      type: "callout",
      variant: "important",
      title: "Server Component adalah default, bukan hadiah yang harus dipertahankan dengan paksa",
      content:
        "Jangan menambahkan \"use client\" hanya karena file memakai React atau JSX. Sebaliknya, jangan memaksa sebuah component tetap di server jika ia benar-benar membutuhkan state atau event handler. Keputusan yang baik dimulai dari kebutuhan UI, bukan dari nama folder atau ukuran component.",
    },
    {
      id: "nextjs-server-components-quick-check",
      type: "quick-check",
      question:
        "Bagian dashboard mana yang paling tepat tetap menjadi Server Component pada contoh sederhana ini?",
      options: [
        "Heading dan ringkasan course yang hanya menampilkan data",
        "Tombol like yang menyimpan jumlah klik dengan useState",
        "Input pencarian yang merespons setiap ketikan user",
        "Component yang membaca localStorage di browser",
      ],
      correctAnswer: "Heading dan ringkasan course yang hanya menampilkan data",
      explanation:
        "UI yang hanya menampilkan data tidak memerlukan kemampuan browser interaktif. State, event handler, dan browser API akan dibahas sebagai alasan memilih Client Component pada lesson berikutnya.",
    },
    {
      id: "nextjs-server-components-summary",
      type: "summary",
      points: [
        "Pada App Router, page dan layout adalah Server Components secara default.",
        "Static content dan presentasi data sederhana tidak perlu diberi \"use client\".",
        "Pilih client berdasarkan kebutuhan interaksi browser, bukan karena component memakai JSX.",
        "Berikutnya, kamu akan melihat kondisi yang memang membutuhkan Client Component.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-server-components-intro",
      "nextjs-server-components-example",
      "nextjs-server-components-rule",
      "nextjs-server-components-quick-check",
      "nextjs-server-components-summary",
    ],
  },
};

export const nextjsClientComponentsLesson: Lesson = {
  id: "nextjs-client-components",
  trackId: "frontend-engineering",
  moduleId: "nextjs-server-client-components",
  title: "Client Components",
  slug: "nextjs-client-components",
  description:
    "Memilih Client Component ketika UI membutuhkan state, event handler, effect, custom hook, atau browser API.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Mengenali kebutuhan UI yang memerlukan Client Component",
    "Menjelaskan fungsi directive \"use client\" secara tepat",
    "Membedakan content statis dari bagian UI yang interaktif",
  ],
  skillTags: ["Next.js", "Client Components", "useState", "Events", "Browser APIs"],
  blocks: [
    {
      id: "nextjs-client-components-intro",
      type: "text",
      title: "Client Component dipakai untuk kemampuan yang hidup di browser",
      content:
        "Gunakan Client Component saat sebuah bagian UI perlu merespons user atau memakai kemampuan browser. Contoh paling umum adalah state dengan useState, event handler seperti onClick dan onChange, effect, custom hook, localStorage, atau window. Directive \"use client\" menyatakan entry point client pada file tersebut.\n\nIni bukan pilihan antara aplikasi server atau aplikasi client. Satu page dapat tetap menjadi Server Component lalu merender child kecil yang menjadi Client Component. Dengan pola ini, kamu menaruh interaktivitas tepat di tempat yang membutuhkannya dan menjaga shell route tetap sederhana.",
    },
    {
      id: "nextjs-client-components-example",
      type: "code-example",
      title: "Filter kecil membutuhkan state dan event handler",
      language: "tsx",
      code: `"use client";

import { useState } from "react";

export default function CourseFilter() {
  const [query, setQuery] = useState("");

  return (
    <label>
      Cari course
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </label>
  );
}`,
      explanation:
        "CourseFilter memerlukan useState dan onChange agar input dapat merespons ketikan user. Karena itu, directive \"use client\" diletakkan di bagian paling atas file, sebelum import. Page parent yang hanya merender heading dan memasang CourseFilter tidak harus ikut menjadi Client Component.",
    },
    {
      id: "nextjs-client-components-decision",
      type: "quick-check",
      question:
        "Manakah alasan yang paling tepat untuk menjadikan component sebagai Client Component?",
      options: [
        "Component memakai useState untuk mengubah tampilan setelah user menekan tombol",
        "Component menampilkan judul halaman dengan h1",
        "Component berada di dalam folder app",
        "Component ingin memakai TypeScript",
      ],
      correctAnswer:
        "Component memakai useState untuk mengubah tampilan setelah user menekan tombol",
      explanation:
        "useState dan event handler memerlukan kemampuan client. JSX, TypeScript, atau lokasi file di dalam app tidak otomatis membuat component harus menjadi client.",
    },
    {
      id: "nextjs-client-components-callout",
      type: "callout",
      variant: "tip",
      title: "Mulai dari bagian interaktif yang paling kecil",
      content:
        "Jika hanya search input yang interaktif, buat SearchInput atau CourseFilter sebagai Client Component. Jangan langsung memberi \"use client\" pada seluruh layout dashboard. Boundary yang kecil membuat keputusan kode lebih mudah dibaca dan menghindari client JavaScript yang tidak perlu.",
    },
    {
      id: "nextjs-client-components-summary",
      type: "summary",
      points: [
        "Client Components diperlukan untuk state, event handler, effect, custom hook, dan browser API.",
        "\"use client\" diletakkan pada entry point client, sebelum import.",
        "Server parent tetap dapat merender Client Component sebagai child.",
        "Berikutnya, kamu akan berlatih menempatkan boundary pada file yang tepat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-client-components-intro",
      "nextjs-client-components-example",
      "nextjs-client-components-decision",
      "nextjs-client-components-callout",
      "nextjs-client-components-summary",
    ],
  },
};

export const nextjsUseClientBoundaryLesson: Lesson = {
  id: "nextjs-use-client-boundary",
  trackId: "frontend-engineering",
  moduleId: "nextjs-server-client-components",
  title: "use client Boundary",
  slug: "nextjs-use-client-boundary",
  description:
    "Menempatkan \"use client\" pada component interaktif agar batas client tetap kecil dan mudah dipahami.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menempatkan \"use client\" sebelum import pada file yang tepat",
    "Membuat component filter kecil yang memakai state",
    "Menjelaskan mengapa layout atau page parent tidak perlu ikut menjadi client",
  ],
  skillTags: ["Next.js", "Client Boundary", "use client", "useState"],
  blocks: [
    {
      id: "nextjs-use-client-boundary-intro",
      type: "text",
      title: "Directive menandai batas module, bukan sekadar baris pembuka",
      content:
        "Saat sebuah file diberi \"use client\", file itu menjadi entry point untuk Client Component. Import dan child component yang digunakan dari sana ikut masuk ke sisi client. Karena itu, letakkan directive pada component interaktif yang spesifik, bukan pada page atau layout besar hanya agar satu tombol dapat diklik.\n\nPada contoh dashboard, page dapat menyimpan heading dan data course. CourseFilter hanya menangani query input. Dengan pemisahan ini, kebutuhan client terlihat jelas dari nama dan isi file tanpa menyebar ke seluruh route.",
    },
    {
      id: "nextjs-use-client-boundary-example",
      type: "code-example",
      title: "Batas kecil pada file filter",
      language: "tsx",
      code: `// app/dashboard/page.tsx
import CourseFilter from "./course-filter";

const courses = ["React Fundamentals", "Next.js App Router"];

export default function DashboardPage() {
  return (
    <main>
      <h1>Course saya</h1>
      <CourseFilter courses={courses} />
    </main>
  );
}

// app/dashboard/course-filter.tsx
"use client";

import { useState } from "react";

export default function CourseFilter({ courses }: { courses: string[] }) {
  const [query, setQuery] = useState("");
  const visibleCourses = courses.filter((course) =>
    course.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <p>{visibleCourses.length} course ditemukan.</p>
    </section>
  );
}`,
      explanation:
        "DashboardPage tidak memakai browser API atau state, jadi tetap default server. CourseFilter adalah batas client karena ia menangani input dan state. Dalam project nyata, kedua bagian ini berada pada file terpisah seperti komentar path di atas.",
    },
    {
      id: "nextjs-use-client-boundary-coding-practice",
      type: "coding-practice",
      challengeId: "create-course-filter-client-boundary",
    },
    {
      id: "nextjs-use-client-boundary-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menjadikan page client hanya untuk satu input",
      content:
        "Menaruh \"use client\" di app/dashboard/page.tsx mungkin membuat input bekerja, tetapi boundary menjadi terlalu lebar. Coba ekstrak bagian interaktif menjadi child terlebih dahulu. Bila satu component memang seluruhnya interaktif, barulah boundary pada file itu masuk akal.",
    },
    {
      id: "nextjs-use-client-boundary-summary",
      type: "summary",
      points: [
        "\"use client\" menandai entry point client dan harus berada sebelum import.",
        "Letakkan boundary pada component interaktif yang paling kecil dan jelas.",
        "Server page boleh mengimpor serta merender Client Component.",
        "Berikutnya, kamu akan mengirim data sederhana dari server parent ke client child melalui props.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-use-client-boundary-intro",
      "nextjs-use-client-boundary-example",
      "nextjs-use-client-boundary-coding-practice",
      "nextjs-use-client-boundary-callout",
      "nextjs-use-client-boundary-summary",
    ],
  },
};

export const nextjsPassingPropsAcrossBoundariesLesson: Lesson = {
  id: "nextjs-passing-props-across-boundaries",
  trackId: "frontend-engineering",
  moduleId: "nextjs-server-client-components",
  title: "Passing Props Across Boundaries",
  slug: "nextjs-passing-props-across-boundaries",
  description:
    "Mengirim data sederhana dari Server Component ke Client Component melalui props yang dapat diserialisasi.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Meneruskan data sederhana dari server parent ke client child",
    "Mengenali props yang aman untuk contoh awal boundary",
    "Menjelaskan mengapa function callback bukan props server-to-client biasa",
  ],
  skillTags: ["Next.js", "Props", "Server Components", "Client Components", "Data Flow"],
  blocks: [
    {
      id: "nextjs-passing-props-across-boundaries-intro",
      type: "text",
      title: "Server parent dapat memberi data, client child menangani interaksi",
      content:
        "Pola paling mudah untuk dibaca adalah server parent menyiapkan data, lalu Client Component menerima data itu melalui props dan menambahkan behavior. Mulailah dengan data sederhana seperti string, number, array, atau plain object kecil. Next.js mengirim props dari server ke client dalam bentuk yang harus dapat diserialisasi oleh React.\n\nPada tahap ini, jangan menghafal semua detail serialisasi. Gunakan aturan praktis: kirim nilai data, bukan function callback, instance class, atau objek browser. Event handler sebaiknya didefinisikan di dalam Client Component yang memang menangani interaksi tersebut.",
    },
    {
      id: "nextjs-passing-props-across-boundaries-example",
      type: "code-example",
      title: "Server page mengirim array string ke filter client",
      language: "tsx",
      code: `// app/dashboard/page.tsx (Server Component by default)
import CourseFilter from "./course-filter";

const courses = ["React Fundamentals", "Next.js App Router", "Testing UI"];

export default function DashboardPage() {
  return (
    <main>
      <h1>Course saya</h1>
      <CourseFilter courses={courses} />
    </main>
  );
}

// app/dashboard/course-filter.tsx (Client Component)
"use client";

type CourseFilterProps = {
  courses: string[];
};

export default function CourseFilter({ courses }: CourseFilterProps) {
  return <p>{courses.length} course siap difilter di browser.</p>;
}`,
      explanation:
        "courses adalah array string, sehingga contoh ini aman sebagai data yang dikirim melalui props. DashboardPage tetap memegang content route, sedangkan CourseFilter memiliki tempat yang jelas untuk menambah state dan event handler. Client child tidak perlu mengetahui bagaimana parent memperoleh data tersebut.",
    },
    {
      id: "nextjs-passing-props-across-boundaries-coding-practice",
      type: "coding-practice",
      challengeId: "pass-course-data-to-client-filter",
    },
    {
      id: "nextjs-passing-props-across-boundaries-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan meneruskan event handler dari server parent",
      content:
        "Props untuk Client Component harus dapat diserialisasi. Function seperti onSelect tidak cocok dikirim sebagai props biasa dari Server Component ke Client Component. Buat handler di component client, atau rancang ulang interaksi setelah kamu memahami pola yang relevan di module berikutnya. Untuk sekarang, kirim data sederhana dan jaga arah data tetap jelas.",
    },
    {
      id: "nextjs-passing-props-across-boundaries-summary",
      type: "summary",
      points: [
        "Server Component dapat meneruskan data sederhana ke Client Component melalui props.",
        "Gunakan string, number, array, dan plain object kecil sebagai contoh aman untuk tahap ini.",
        "Event handler dibuat pada sisi client, bukan dikirim dari server parent sebagai function props biasa.",
        "Berikutnya, kamu akan memperbaiki beberapa kesalahan boundary yang sering muncul saat mengembangkan dashboard.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-passing-props-across-boundaries-intro",
      "nextjs-passing-props-across-boundaries-example",
      "nextjs-passing-props-across-boundaries-coding-practice",
      "nextjs-passing-props-across-boundaries-callout",
      "nextjs-passing-props-across-boundaries-summary",
    ],
  },
};

export const nextjsCommonBoundaryMistakesLesson: Lesson = {
  id: "nextjs-common-boundary-mistakes",
  trackId: "frontend-engineering",
  moduleId: "nextjs-server-client-components",
  title: "Common Boundary Mistakes",
  slug: "nextjs-common-boundary-mistakes",
  description:
    "Mendeteksi hook, event handler, browser API, dan props function yang ditempatkan pada sisi boundary yang keliru.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Mendeteksi state dan event handler yang salah ditempatkan pada Server Component",
    "Memilih file client yang lebih kecil daripada menjadikan seluruh page client",
    "Mengenali props function sebagai masalah pada contoh server-to-client sederhana",
  ],
  skillTags: ["Next.js", "Debugging", "Client Boundary", "Props", "Browser APIs"],
  blocks: [
    {
      id: "nextjs-common-boundary-mistakes-intro",
      type: "text",
      title: "Debug boundary dengan membaca kebutuhan tiap file",
      content:
        "Error boundary sering terasa membingungkan karena JSX masih terlihat normal. Cara membacanya sederhana: cari hook, event handler, atau browser API. Jika salah satu ada pada file default server, pindahkan behavior ke Client Component kecil atau jadikan file itu entry point client bila memang seluruh isinya interaktif.\n\nSetelah itu, periksa arah props. Server parent boleh memberi data sederhana ke client child. Namun callback function dari server parent bukan pola props biasa yang dapat dikirim melintasi boundary. Jangan menyelesaikan semua error dengan menambahkan \"use client\" pada root layout; itu justru membuat batas client terlalu luas.",
    },
    {
      id: "nextjs-common-boundary-mistakes-example",
      type: "code-example",
      title: "Dua masalah yang perlu dipisahkan",
      language: "tsx",
      code: `// app/dashboard/page.tsx
// Masalah: default Server Component memakai state dan event handler.
import { useState } from "react";

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false);

  return <button onClick={() => setIsOpen(!isOpen)}>Buka filter</button>;
}

// Masalah lain: function callback dikirim dari server parent ke client child.
<CourseFilter
  courses={["React Fundamentals"]}
  onSelect={(course) => console.log(course)}
/>`,
      explanation:
        "Masalah pertama diperbaiki dengan menaruh state dan button interaktif pada file Client Component, misalnya course-filter.tsx. Masalah kedua tidak diselesaikan dengan meneruskan onSelect dari Server Component. Untuk tahap ini, biarkan client child memiliki handler-nya sendiri dan kirim data course sebagai props serializable.",
    },
    {
      id: "nextjs-common-boundary-mistakes-coding-practice",
      type: "coding-practice",
      challengeId: "fix-course-boundary-placement",
    },
    {
      id: "nextjs-common-boundary-mistakes-quick-check",
      type: "quick-check",
      question:
        "Dashboard page berisi heading statis dan satu tombol filter dengan onClick. Keputusan boundary yang paling tepat adalah?",
      options: [
        "Biarkan page server dan pindahkan tombol filter ke Client Component kecil",
        "Tambahkan \"use client\" ke root layout agar semua route aman",
        "Hapus onClick karena Server Component tidak boleh punya button",
        "Kirim function handler dari server page ke child client",
      ],
      correctAnswer:
        "Biarkan page server dan pindahkan tombol filter ke Client Component kecil",
      explanation:
        "Heading dan content statis masih cocok di server. Hanya tombol yang membutuhkan event handler perlu berada pada boundary client. Ini menjaga boundary tetap kecil dan alasan setiap file tetap jelas.",
    },
    {
      id: "nextjs-common-boundary-mistakes-summary",
      type: "summary",
      points: [
        "Cari hook, event handler, effect, atau browser API ketika membaca error boundary.",
        "Pindahkan behavior interaktif ke Client Component kecil sebelum menjadikan seluruh page atau layout client.",
        "Kirim data sederhana dari server ke client; jangan memakai function callback sebagai props server-to-client biasa.",
        "Berikutnya, Uji Kompetensi akan meminta kamu membuat keputusan boundary untuk dashboard kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-common-boundary-mistakes-intro",
      "nextjs-common-boundary-mistakes-example",
      "nextjs-common-boundary-mistakes-coding-practice",
      "nextjs-common-boundary-mistakes-quick-check",
      "nextjs-common-boundary-mistakes-summary",
    ],
  },
};

export const nextjsServerClientComponentsAssessmentLesson: Lesson = {
  id: "nextjs-server-client-components-assessment",
  trackId: "frontend-engineering",
  moduleId: "nextjs-server-client-components",
  title: "Uji Kompetensi Server and Client Components",
  slug: "nextjs-server-client-components-assessment",
  description:
    "Checkpoint kesiapan untuk menentukan boundary server/client, menggunakan \"use client\" secara tepat, dan meneruskan props sederhana.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menentukan peran server atau client untuk bagian dashboard kecil",
    "Memilih lokasi \"use client\" yang tepat",
    "Menjelaskan data props yang aman untuk dikirim dari server ke client",
  ],
  skillTags: ["Next.js", "Server Components", "Client Components", "Readiness Checkpoint"],
  blocks: [
    {
      id: "nextjs-server-client-components-assessment-recap",
      type: "text",
      title: "Checkpoint: pilih boundary berdasarkan kebutuhan UI",
      content:
        "Pada module ini kamu tidak diminta menghafal istilah rendering yang dalam. Gunakan keputusan praktis: content statis dan route shell dimulai sebagai Server Components; state, event handler, effect, custom hook, dan browser API memerlukan Client Component. Letakkan \"use client\" pada entry point interaktif yang kecil, lalu teruskan data sederhana melalui props.\n\nCheckpoint ini menguji apakah kamu dapat membaca sebuah dashboard kecil, memisahkan page server dari filter client, dan menjelaskan keputusan tersebut dengan bahasa yang jelas. Semua yang dinilai sudah muncul pada regular lesson sebelumnya.",
    },
    {
      id: "nextjs-server-client-components-assessment-quiz",
      type: "quiz",
      quizId: "nextjs-server-client-components-assessment-quiz",
    },
    {
      id: "nextjs-server-client-components-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-boundary-checkpoint",
    },
    {
      id: "nextjs-server-client-components-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis 60-120 kata untuk implementation note dashboard. Jelaskan file mana yang tetap Server Component, file mana yang menjadi Client Component, alasan penempatan \"use client\", dan satu contoh props sederhana yang dikirim dari server ke client.",
      placeholder:
        "Contoh: app/dashboard/page.tsx tetap Server Component karena hanya menyiapkan heading dan daftar course. ...",
      minimumWords: 60,
      checklist: [
        "Menyebut satu file Server Component dan alasannya.",
        "Menyebut satu file Client Component dan kebutuhan interaksinya.",
        "Menjelaskan mengapa \"use client\" tidak diletakkan pada seluruh layout.",
        "Memberi contoh props data sederhana, misalnya courses: string[].",
      ],
    },
    {
      id: "nextjs-server-client-components-assessment-docs",
      type: "documentation-bridge",
      title: "Baca dokumentasi Next.js dengan tujuan yang jelas",
      description:
        "Gunakan dokumentasi resmi untuk menegaskan keputusan boundary yang baru kamu buat. Baca contoh file kecil terlebih dahulu; kamu belum perlu mempelajari Server Actions, caching, atau arsitektur streaming.",
      links: [
        {
          source: "Next.js Docs",
          title: "Server and Client Components",
          url: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
          focus: [
            "Mengapa layout dan page dimulai sebagai Server Components.",
            "Kapan state, event handler, dan browser API membutuhkan Client Component.",
            "Contoh server parent yang merender child client.",
          ],
          ignoreForNow: [
            "React Server Component Payload dan hydration detail.",
            "Context provider, third-party wrapping, dan environment poisoning.",
          ],
        },
        {
          source: "Next.js Docs",
          title: "use client directive",
          url: "https://nextjs.org/docs/app/api-reference/directives/use-client",
          focus: [
            "Directive harus berada di atas file sebelum import.",
            "Boundary cukup diletakkan pada entry point client, bukan setiap child file.",
            "Props Client Component perlu dapat diserialisasi.",
          ],
          ignoreForNow: [
            "Server Actions dan pola data kompleks.",
          ],
        },
      ],
      followUpAction:
        "Di Local Next.js App, pertahankan page dan layout statis sebagai server. Pindahkan satu tombol, filter, atau form kecil ke file Client Component, teruskan props sederhana, lalu tulis satu kalimat alasan penempatan \"use client\" pada file tersebut.",
    },
    {
      id: "nextjs-server-client-components-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap melanjutkan bila dapat memilih server atau client berdasarkan kebutuhan UI, bukan kebiasaan.",
        "\"use client\" berada pada entry point interaktif yang kecil dan sebelum import.",
        "Server parent dapat memberi props sederhana kepada Client Component.",
        "Module berikutnya membahas perilaku route: loading UI, error UI, route handlers, metadata, dan environment variables.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-server-client-components-assessment-recap",
      "nextjs-server-client-components-assessment-quiz",
      "nextjs-server-client-components-assessment-coding-practice",
      "nextjs-server-client-components-assessment-writing-practice",
      "nextjs-server-client-components-assessment-docs",
      "nextjs-server-client-components-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const nextjsServerClientComponentsAssessmentQuiz: Quiz = {
  id: "nextjs-server-client-components-assessment-quiz",
  lessonId: "nextjs-server-client-components-assessment",
  title: "Uji Kompetensi Server and Client Components",
  passingScore: 70,
  questions: [
    {
      id: "nextjs-server-client-components-q1",
      type: "multiple-choice",
      question: "Apa status default page dan layout pada Next.js App Router?",
      options: [
        "Server Components",
        "Client Components",
        "Static HTML tanpa React",
        "Route Handlers",
      ],
      correctAnswer: "Server Components",
      explanation:
        "Pada App Router, page dan layout dimulai sebagai Server Components. Tambahkan client boundary hanya pada bagian yang membutuhkan kemampuan browser interaktif.",
    },
    {
      id: "nextjs-server-client-components-q2",
      type: "multiple-choice",
      question: "Kapan sebuah component membutuhkan \"use client\"?",
      options: [
        "Saat memakai state atau event handler untuk interaksi user",
        "Saat merender h1 dan p",
        "Saat file memakai ekstensi .tsx",
        "Saat component diimpor oleh page",
      ],
      correctAnswer: "Saat memakai state atau event handler untuk interaksi user",
      explanation:
        "State, event handler, effect, custom hook, dan browser API adalah alasan umum untuk memakai Client Component. JSX dan TypeScript saja bukan alasan.",
    },
    {
      id: "nextjs-server-client-components-q3",
      type: "multiple-choice",
      question: "Di mana lokasi \"use client\" yang benar pada file Client Component?",
      options: [
        "Di baris paling atas, sebelum import",
        "Setelah semua import agar import terbaca dulu",
        "Di dalam function component sebelum return",
        "Di file layout root untuk seluruh aplikasi",
      ],
      correctAnswer: "Di baris paling atas, sebelum import",
      explanation:
        "Directive menandai entry point client pada level file, sehingga harus berada di atas file sebelum import.",
    },
    {
      id: "nextjs-server-client-components-q4",
      type: "multiple-choice",
      question:
        "Props mana yang paling aman untuk contoh awal dari Server Component ke Client Component?",
      options: [
        "courses: string[]",
        "onSelect: (course: string) => void",
        "window: Window",
        "editor: MonacoEditorInstance",
      ],
      correctAnswer: "courses: string[]",
      explanation:
        "Array string adalah data sederhana yang dapat diserialisasi. Function callback dan browser object bukan props server-to-client biasa untuk pola awal ini.",
    },
    {
      id: "nextjs-server-client-components-q5",
      type: "true-false",
      question:
        "Jika hanya search input yang membutuhkan onChange, memberi \"use client\" pada seluruh root layout adalah pilihan boundary yang paling baik.",
      correctAnswer: false,
      explanation:
        "Lebih baik ekstrak search input atau filter kecil sebagai Client Component. Boundary yang kecil menjaga layout dan content statis tetap sebagai Server Components.",
    },
  ],
};

const nextBoundaryPracticePreviewCode = {
  html: "",
  css: "",
  js: "",
};

export const createCourseFilterClientBoundaryChallenge: CodingChallenge = {
  id: "create-course-filter-client-boundary",
  lessonId: "nextjs-use-client-boundary",
  title: "Create course filter client boundary",
  description:
    "Lengkapi app/dashboard/course-filter.tsx sebagai Client Component kecil yang menyimpan query filter dan menerima daftar course.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/dashboard/course-filter.tsx.",
    "Tambahkan \"use client\" di atas file sebelum import.",
    "Import useState, lalu buat state query untuk input filter.",
    "Terima courses sebagai string[] dan tampilkan jumlah course yang cocok.",
    "Cek otomatis membaca struktur Next.js. Route tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextBoundaryPracticePreviewCode,
    tsx: `type CourseFilterProps = {
  courses: string[];
};

export default function CourseFilter({ courses }: CourseFilterProps) {
  return <p>{courses.length} course tersedia.</p>;
}`,
  },
  solutionCode: {
    ...nextBoundaryPracticePreviewCode,
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
    <section>
      <label>
        Cari course
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <p>{visibleCourses.length} course ditemukan.</p>
    </section>
  );
}`,
  },
  checklist: [
    "File target dipahami sebagai app/dashboard/course-filter.tsx.",
    "\"use client\" berada sebelum import.",
    "CourseFilter menerima courses sebagai string[].",
    "query disimpan memakai useState.",
    "Input memperbarui query melalui onChange.",
    "Daftar course difilter dan jumlah hasil ditampilkan.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "client-directive", label: "use client berada di atas file.", type: "contains", target: '"use client";', valueIncludes: '"use client";' },
      { id: "use-state-import", label: "useState diimport dari React.", type: "contains", target: 'import { useState } from "react";', valueIncludes: 'import { useState } from "react";' },
      { id: "course-props", label: "Props menerima courses string array.", type: "contains", target: "courses: string[];", valueIncludes: "courses: string[];" },
      { id: "query-state", label: "Query memakai useState.", type: "contains", target: 'const [query, setQuery] = useState("");', valueIncludes: 'const [query, setQuery] = useState("");' },
      { id: "filter-courses", label: "Courses difilter berdasarkan query.", type: "contains", target: "const visibleCourses = courses.filter", valueIncludes: "const visibleCourses = courses.filter" },
      { id: "controlled-input", label: "Input membaca dan memperbarui query.", type: "contains", target: "onChange={(event) => setQuery(event.target.value)}", valueIncludes: "onChange={(event) => setQuery(event.target.value)}" },
      { id: "result-count", label: "Jumlah course hasil filter ditampilkan.", type: "contains", target: "{visibleCourses.length} course ditemukan.", valueIncludes: "{visibleCourses.length} course ditemukan." },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah Client Component kecil untuk filter dashboard. Cek otomatis membaca struktur TSX; route Next.js tidak dijalankan di preview practice.",
    lines: [
      "course-filter.tsx menjadi entry point client melalui \"use client\".",
      "State query dan onChange tinggal di component interaktif ini.",
      "courses tetap diterima sebagai data sederhana dari server parent.",
    ],
  },
  skillTags: ["Next.js", "Client Components", "use client", "useState"],
};

export const passCourseDataToClientFilterChallenge: CodingChallenge = {
  id: "pass-course-data-to-client-filter",
  lessonId: "nextjs-passing-props-across-boundaries",
  title: "Pass course data to client filter",
  description:
    "Lengkapi app/dashboard/page.tsx agar Server Component menyiapkan course data sederhana dan meneruskannya ke CourseFilter client child.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/dashboard/page.tsx yang tetap Server Component secara default.",
    "Import CourseFilter dari file course-filter.",
    "Buat daftar courses sebagai string array di server parent.",
    "Render CourseFilter dengan props courses.",
    "Cek otomatis membaca struktur data flow. Page tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextBoundaryPracticePreviewCode,
    tsx: `export default function DashboardPage() {
  return (
    <main>
      <h1>Course saya</h1>
    </main>
  );
}`,
  },
  solutionCode: {
    ...nextBoundaryPracticePreviewCode,
    tsx: `import CourseFilter from "./course-filter";

const courses = ["React Fundamentals", "Next.js App Router", "Testing UI"];

export default function DashboardPage() {
  return (
    <main>
      <h1>Course saya</h1>
      <CourseFilter courses={courses} />
    </main>
  );
}`,
  },
  checklist: [
    "DashboardPage tetap tidak memakai \"use client\".",
    "CourseFilter diimport dari file child.",
    "courses dibuat sebagai string array sederhana.",
    "CourseFilter menerima courses melalui props.",
    "Server page tetap menangani heading dan content route.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "filter-import", label: "CourseFilter diimport dari file child.", type: "contains", target: 'import CourseFilter from "./course-filter";', valueIncludes: 'import CourseFilter from "./course-filter";' },
      { id: "courses-data", label: "Courses dibuat sebagai array string.", type: "contains", target: 'const courses = ["React Fundamentals", "Next.js App Router", "Testing UI"];', valueIncludes: 'const courses = ["React Fundamentals", "Next.js App Router", "Testing UI"];' },
      { id: "page-export", label: "DashboardPage tetap menjadi default export.", type: "contains", target: "export default function DashboardPage()", valueIncludes: "export default function DashboardPage()" },
      { id: "course-heading", label: "Page menampilkan heading course.", type: "contains", target: "<h1>Course saya</h1>", valueIncludes: "<h1>Course saya</h1>" },
      { id: "client-child", label: "Courses diteruskan ke CourseFilter client child.", type: "contains", target: "<CourseFilter courses={courses} />", valueIncludes: "<CourseFilter courses={courses} />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah Server Component default untuk route dashboard. Cek otomatis memeriksa data flow ke child client; page tidak dijalankan di preview practice.",
    lines: [
      "DashboardPage menyiapkan content route dan data course.",
      "courses: string[] diteruskan sebagai props sederhana ke CourseFilter.",
      "Interaksi filter tetap menjadi tanggung jawab file client child.",
    ],
  },
  skillTags: ["Next.js", "Server Components", "Client Components", "Props"],
};

export const fixCourseBoundaryPlacementChallenge: CodingChallenge = {
  id: "fix-course-boundary-placement",
  lessonId: "nextjs-common-boundary-mistakes",
  title: "Fix course boundary placement",
  description:
    "Lengkapi boundary map agar dashboard page tetap server, sedangkan filter interaktif menjadi file client yang menerima data course sederhana.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah boundary map sebelum kamu membuat file nyata di Local Next.js App.",
    "Tambahkan dashboard page sebagai server file tanpa directive.",
    "Tambahkan course-filter sebagai client file dengan directive \"use client\".",
    "Catat bahwa filter menerima courses: string[] dan menangani query input.",
    "Cek otomatis membaca keputusan boundary. Workspace tidak membuat file atau menjalankan Next.js preview.",
  ],
  starterCode: {
    ...nextBoundaryPracticePreviewCode,
    tsx: `type BoundaryFile = {
  path: string;
  role: "server" | "client";
  directive?: "use client";
  purpose: string;
  props?: string;
};

const boundaryFiles: BoundaryFile[] = [
  {
    path: "app/dashboard/page.tsx",
    role: "client",
    directive: "use client",
    purpose: "dashboard heading and filter",
  },
];

export default boundaryFiles;`,
  },
  solutionCode: {
    ...nextBoundaryPracticePreviewCode,
    tsx: `type BoundaryFile = {
  path: string;
  role: "server" | "client";
  directive?: "use client";
  purpose: string;
  props?: string;
};

const boundaryFiles: BoundaryFile[] = [
  {
    path: "app/dashboard/page.tsx",
    role: "server",
    purpose: "dashboard heading and course data",
  },
  {
    path: "app/dashboard/course-filter.tsx",
    role: "client",
    directive: "use client",
    purpose: "query input and filter interaction",
    props: "courses: string[]",
  },
];

export default boundaryFiles;`,
  },
  checklist: [
    "Dashboard page tetap dicatat sebagai server file tanpa client directive.",
    "CourseFilter berada pada file terpisah untuk behavior interaktif.",
    "CourseFilter menjadi client entry point dengan \"use client\".",
    "courses: string[] diteruskan sebagai data sederhana.",
    "Query input dan filtering berada pada file client, bukan dashboard page.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "boundary-type", label: "BoundaryFile map dibuat.", type: "contains", target: "type BoundaryFile = {", valueIncludes: "type BoundaryFile = {" },
      { id: "server-page", label: "Dashboard page ditetapkan sebagai server.", type: "contains", target: 'path: "app/dashboard/page.tsx",\n    role: "server"', valueIncludes: 'path: "app/dashboard/page.tsx",\n    role: "server"' },
      { id: "server-purpose", label: "Page memegang heading dan course data.", type: "contains", target: 'purpose: "dashboard heading and course data"', valueIncludes: 'purpose: "dashboard heading and course data"' },
      { id: "client-filter", label: "CourseFilter dicatat sebagai client file terpisah.", type: "contains", target: 'path: "app/dashboard/course-filter.tsx",\n    role: "client"', valueIncludes: 'path: "app/dashboard/course-filter.tsx",\n    role: "client"' },
      { id: "client-directive", label: "CourseFilter memiliki use client directive.", type: "contains", target: 'directive: "use client"', valueIncludes: 'directive: "use client"' },
      { id: "serializable-props", label: "Filter menerima courses sebagai string array.", type: "contains", target: 'props: "courses: string[]"', valueIncludes: 'props: "courses: string[]"' },
      { id: "client-purpose", label: "Filter menangani query dan interaksi.", type: "contains", target: 'purpose: "query input and filter interaction"', valueIncludes: 'purpose: "query input and filter interaction"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target latihan adalah boundary map yang dapat kamu terjemahkan ke file Next.js nyata. Cek otomatis membaca peran file dan props; preview tidak menjalankan route atau membuat project di device kamu.",
    lines: [
      "page.tsx tetap server untuk content route dan data course.",
      "course-filter.tsx menjadi client boundary untuk query dan onChange.",
      "courses: string[] mengalir dari server parent ke client child.",
    ],
  },
  skillTags: ["Next.js", "Debugging", "Client Boundary", "Props"],
};

export const buildCourseBoundaryCheckpointChallenge: CodingChallenge = {
  id: "build-course-boundary-checkpoint",
  lessonId: "nextjs-server-client-components-assessment",
  title: "Build course boundary checkpoint",
  description:
    "Susun component boundary untuk dashboard course: server page menjaga content route, client filter menangani query, dan props course tetap berupa data sederhana.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah checkpoint struktur Next.js, bukan runtime preview.",
    "Tambahkan DashboardPage sebagai server component tanpa directive.",
    "Tambahkan CourseFilter sebagai client component dengan \"use client\".",
    "Pastikan CourseFilter menerima courses: string[] dan memakai state untuk query.",
    "Cek otomatis membaca struktur boundary. React dan Next.js tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextBoundaryPracticePreviewCode,
    tsx: `type ComponentBoundary = {
  path: string;
  component: string;
  role: "server" | "client";
  directive?: "use client";
  receives?: string;
  responsibility: string;
};

const components: ComponentBoundary[] = [
  {
    path: "app/dashboard/page.tsx",
    component: "DashboardPage",
    role: "client",
    directive: "use client",
    responsibility: "dashboard page and filter behavior",
  },
];

export default components;`,
  },
  solutionCode: {
    ...nextBoundaryPracticePreviewCode,
    tsx: `type ComponentBoundary = {
  path: string;
  component: string;
  role: "server" | "client";
  directive?: "use client";
  receives?: string;
  responsibility: string;
};

const components: ComponentBoundary[] = [
  {
    path: "app/dashboard/page.tsx",
    component: "DashboardPage",
    role: "server",
    responsibility: "dashboard heading and course data",
  },
  {
    path: "app/dashboard/course-filter.tsx",
    component: "CourseFilter",
    role: "client",
    directive: "use client",
    receives: "courses: string[]",
    responsibility: "query state and filter interaction",
  },
];

export default components;`,
  },
  checklist: [
    "DashboardPage dipilih sebagai Server Component untuk heading dan data course.",
    "CourseFilter dipilih sebagai Client Component untuk state dan interaksi.",
    "\"use client\" hanya ada pada entry point CourseFilter.",
    "CourseFilter menerima courses: string[] sebagai props sederhana.",
    "Keputusan boundary tidak menjadikan page atau layout besar sebagai client tanpa alasan.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "component-boundary-type", label: "ComponentBoundary map dibuat.", type: "contains", target: "type ComponentBoundary = {", valueIncludes: "type ComponentBoundary = {" },
      { id: "dashboard-page", label: "DashboardPage dicatat sebagai server component.", type: "contains", target: 'path: "app/dashboard/page.tsx",\n    component: "DashboardPage",\n    role: "server"', valueIncludes: 'path: "app/dashboard/page.tsx",\n    component: "DashboardPage",\n    role: "server"' },
      { id: "dashboard-responsibility", label: "DashboardPage memegang content dan data course.", type: "contains", target: 'responsibility: "dashboard heading and course data"', valueIncludes: 'responsibility: "dashboard heading and course data"' },
      { id: "course-filter", label: "CourseFilter dicatat sebagai client component.", type: "contains", target: 'path: "app/dashboard/course-filter.tsx",\n    component: "CourseFilter",\n    role: "client"', valueIncludes: 'path: "app/dashboard/course-filter.tsx",\n    component: "CourseFilter",\n    role: "client"' },
      { id: "course-filter-directive", label: "CourseFilter memiliki use client directive.", type: "contains", target: 'directive: "use client"', valueIncludes: 'directive: "use client"' },
      { id: "course-props", label: "CourseFilter menerima courses string array.", type: "contains", target: 'receives: "courses: string[]"', valueIncludes: 'receives: "courses: string[]"' },
      { id: "course-responsibility", label: "CourseFilter menangani query dan filter.", type: "contains", target: 'responsibility: "query state and filter interaction"', valueIncludes: 'responsibility: "query state and filter interaction"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Checkpoint ini memeriksa keputusan boundary dalam bentuk file map. Cek otomatis membaca struktur dan data flow; preview tidak menjalankan React atau Next.js runtime.",
    lines: [
      "DashboardPage tetap default server untuk route content dan data sederhana.",
      "CourseFilter menjadi entry point client untuk state dan event handler.",
      "courses: string[] adalah props sederhana dari server parent ke client child.",
    ],
  },
  skillTags: ["Next.js", "Server Components", "Client Components", "Readiness Checkpoint"],
};
