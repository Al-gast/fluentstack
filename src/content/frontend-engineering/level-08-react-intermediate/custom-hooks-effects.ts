import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const customHooksEffectsModule: Module = {
  id: "react-custom-hooks-effects",
  trackId: "frontend-engineering",
  title: "Custom Hooks and Effects",
  slug: "react-custom-hooks-effects",
  description:
    "Menentukan kapan useEffect benar-benar diperlukan, membersihkan subscription, dan mengekstrak behavior berulang menjadi custom hook kecil.",
  order: 25,
  lessonIds: [
    "react-when-use-effect",
    "react-effect-cleanup-dependencies",
    "react-custom-hook-basics",
    "react-browser-subscription-hook",
    "react-custom-hooks-effects-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["React", "useEffect", "Custom Hooks", "Cleanup", "Browser APIs"],
};

export const reactWhenUseEffectLesson: Lesson = {
  id: "react-when-use-effect",
  trackId: "frontend-engineering",
  moduleId: "react-custom-hooks-effects",
  title: "Kapan Perlu `useEffect`?",
  slug: "react-when-use-effect",
  description:
    "Membedakan pekerjaan yang cukup dihitung saat render dari pekerjaan yang perlu menyinkronkan React dengan sistem di luar React.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan tujuan useEffect secara sederhana",
    "Membedakan derived value dari synchronization dengan sistem luar",
    "Memilih untuk tidak memakai effect saat perhitungan cukup dilakukan saat render",
  ],
  skillTags: ["React", "useEffect", "Derived State", "Decision Making"],
  blocks: [
    {
      id: "react-when-use-effect-intro",
      type: "text",
      title: "Effect bukan tempat untuk semua kode setelah render",
      content:
        "`useEffect` dipakai saat component perlu menyinkronkan diri dengan sesuatu di luar React. Contohnya: memasang event listener browser, menjalankan timer, mengubah judul dokumen, atau terhubung ke API browser. Effect memberi React tempat untuk memulai dan menghentikan hubungan itu.\n\nTidak semua perubahan UI membutuhkan effect. Jika sebuah value bisa dihitung dari props atau state yang sudah ada, hitung saja saat render. Ini menjaga sumber data tetap sedikit dan membuat UI lebih mudah diikuti.",
    },
    {
      id: "react-when-use-effect-case-study",
      type: "code-example",
      title: "Hitung saat render, sinkronkan dengan effect",
      language: "tsx",
      code: `import { useEffect, useState } from "react";

function LessonSummary({ lessons }: { lessons: string[] }) {
  const totalLessons = lessons.length;

  useEffect(() => {
    document.title = "Daftar lesson";
  }, []);

  return <p>Total lesson: {totalLessons}</p>;
}`,
      explanation:
        "`totalLessons` berasal langsung dari props, jadi cukup dihitung saat render. Sebaliknya, `document.title` berada di luar React. Effect dipakai untuk menyinkronkan judul dokumen dengan component.",
    },
    {
      id: "react-when-use-effect-decision-rule",
      type: "callout",
      variant: "important",
      title: "Tanya dua hal sebelum menulis effect",
      content:
        "Pertama, apakah pekerjaan ini menyentuh sesuatu di luar React, seperti browser API, timer, subscription, atau library eksternal? Jika ya, effect mungkin diperlukan. Kedua, apakah value ini bisa dihitung dari props dan state yang sudah ada? Jika ya, jangan simpan atau hitung ulang lewat effect.",
    },
    {
      id: "react-when-use-effect-quick-check",
      type: "quick-check",
      question:
        "Sebuah component menampilkan jumlah item dari `items.length`. Pilihan yang paling tepat adalah...",
      options: [
        "Hitung `items.length` saat render tanpa useEffect",
        "Simpan `items.length` ke state lewat useEffect setiap render",
        "Pakai useEffect untuk membuat array baru pada setiap klik",
        "Tambah library state agar jumlah item bisa tampil",
      ],
      correctAnswer: "Hitung `items.length` saat render tanpa useEffect",
      explanation:
        "Jumlah item sudah bisa diperoleh dari props atau state yang ada. Effect tidak dibutuhkan untuk perhitungan sederhana seperti ini.",
    },
    {
      id: "react-when-use-effect-summary",
      type: "summary",
      points: [
        "Effect menyinkronkan component dengan sistem di luar React.",
        "Nilai yang bisa dihitung dari props atau state sebaiknya dihitung saat render.",
        "Browser API, timer, dan event listener adalah contoh alasan memakai effect.",
        "Memilih untuk tidak memakai effect juga merupakan keputusan desain yang baik.",
        "Berikutnya, kamu akan melihat bagaimana dependency dan cleanup menjaga effect tetap aman.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-when-use-effect-intro",
      "react-when-use-effect-case-study",
      "react-when-use-effect-decision-rule",
      "react-when-use-effect-quick-check",
      "react-when-use-effect-summary",
    ],
  },
};

export const reactEffectCleanupDependenciesLesson: Lesson = {
  id: "react-effect-cleanup-dependencies",
  trackId: "frontend-engineering",
  moduleId: "react-custom-hooks-effects",
  title: "Cleanup dan Dependency Array",
  slug: "react-effect-cleanup-dependencies",
  description:
    "Memahami kapan effect dijalankan ulang, mengapa cleanup diperlukan, dan cara memperbaiki timer sederhana agar tidak menumpuk.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan fungsi dependency array",
    "Menjelaskan kapan cleanup dijalankan",
    "Memperbaiki timer agar memakai cleanup dan functional state update",
  ],
  skillTags: ["React", "useEffect", "Cleanup", "Dependencies"],
  blocks: [
    {
      id: "react-effect-cleanup-dependencies-intro",
      type: "text",
      title: "Effect punya siklus hidup sendiri",
      content:
        "Setelah React merender component, effect dapat berjalan untuk memulai sinkronisasi. Sebelum effect lama diganti karena dependency berubah, React menjalankan cleanup jika kamu mengembalikannya dari effect. Cleanup juga berjalan saat component dilepas dari halaman.\n\nDependency array memberi tahu React value reaktif mana yang dipakai effect. Array kosong `[]` berarti effect ini tidak membaca state atau props dari component dan cukup dipasang saat component mulai. Jika effect membaca sebuah value, value itu harus dipertimbangkan sebagai dependency atau logikanya perlu disusun ulang.",
    },
    {
      id: "react-effect-cleanup-dependencies-timeline",
      type: "code-example",
      title: "Pasang timer, lalu bersihkan timer",
      language: "tsx",
      code: `useEffect(() => {
  const timerId = window.setInterval(() => {
    setSeconds((current) => current + 1);
  }, 1000);

  return () => {
    window.clearInterval(timerId);
  };
}, []);`,
      explanation:
        "Effect memasang satu timer. Functional update membaca value terbaru tanpa membuat effect bergantung pada `seconds`. Cleanup menghentikan timer saat component tidak lagi memakainya.",
    },
    {
      id: "react-effect-cleanup-dependencies-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan biarkan timer dan listener tertinggal",
      content:
        "Tanpa cleanup, timer atau event listener bisa tetap aktif setelah component berganti. Gejalanya bisa berupa callback berjalan ganda, memory leak, atau UI yang berubah dari sumber lama. Setiap effect yang memasang sesuatu biasanya perlu memikirkan cara melepasnya.",
    },
    {
      id: "react-effect-cleanup-dependencies-coding-practice",
      type: "coding-practice",
      challengeId: "fix-react-timer-cleanup",
    },
    {
      id: "react-effect-cleanup-dependencies-summary",
      type: "summary",
      points: [
        "Dependency array menjelaskan kapan effect perlu disinkronkan ulang.",
        "Cleanup berjalan sebelum effect lama diganti dan saat component dilepas.",
        "Timer dan event listener perlu dibersihkan ketika tidak dipakai lagi.",
        "Functional state update membantu callback timer membaca value terbaru.",
        "Berikutnya, kamu akan memindahkan behavior berulang ke custom hook.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-effect-cleanup-dependencies-intro",
      "react-effect-cleanup-dependencies-timeline",
      "react-effect-cleanup-dependencies-common-mistake",
      "react-effect-cleanup-dependencies-coding-practice",
      "react-effect-cleanup-dependencies-summary",
    ],
  },
};

export const reactCustomHookBasicsLesson: Lesson = {
  id: "react-custom-hook-basics",
  trackId: "frontend-engineering",
  moduleId: "react-custom-hooks-effects",
  title: "Custom Hook Dasar",
  slug: "react-custom-hook-basics",
  description:
    "Mengekstrak stateful behavior yang berulang ke function bernama use agar component UI tetap fokus pada tampilan.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan custom hook sebagai cara memakai ulang logic React",
    "Menamai custom hook dengan awalan use",
    "Mengembalikan state dan action yang dibutuhkan component",
  ],
  skillTags: ["React", "Custom Hooks", "useState", "Refactoring"],
  blocks: [
    {
      id: "react-custom-hook-basics-intro",
      type: "text",
      title: "Ulangi behavior, bukan markup",
      content:
        "Saat dua component membutuhkan stateful behavior yang sama, kamu tidak perlu menyalin `useState` dan handler ke setiap component. Extract bagian behavior itu ke custom hook. Custom hook adalah function biasa yang memakai Hook React lain dan namanya selalu dimulai dengan `use`.\n\nCustom hook tidak membagi satu state yang sama ke semua pemanggilnya. Setiap component yang memanggil hook mendapat state instance sendiri. Yang dipakai ulang adalah aturan dan action-nya, bukan value state yang sama.",
    },
    {
      id: "react-custom-hook-basics-example",
      type: "code-example",
      title: "`useToggle` mengemas boolean state",
      language: "tsx",
      code: `import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  function toggle() {
    setIsOn((current) => !current);
  }

  return { isOn, toggle };
}

function HelpPanel() {
  const { isOn, toggle } = useToggle();

  return <button onClick={toggle}>{isOn ? "Tutup" : "Buka"}</button>;
}`,
      explanation:
        "`useToggle` menyimpan detail state boolean dan action `toggle`. Component hanya memilih cara menampilkan dan kapan menjalankan action itu.",
    },
    {
      id: "react-custom-hook-basics-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Ekstrak saat tanggung jawab mulai berulang",
      content:
        "Jangan membuat hook hanya agar semua code terlihat abstrak. Extract saat beberapa component memakai aturan state, event, atau effect yang sama dan nama hook membuat maksudnya lebih jelas. Hook kecil seperti `useToggle` atau `useWindowWidth` sering cukup untuk satu tanggung jawab.",
    },
    {
      id: "react-custom-hook-basics-coding-practice",
      type: "coding-practice",
      challengeId: "extract-use-toggle-hook",
    },
    {
      id: "react-custom-hook-basics-summary",
      type: "summary",
      points: [
        "Custom hook memakai ulang logic React, bukan markup UI.",
        "Nama custom hook dimulai dengan `use`.",
        "Setiap pemanggil hook tetap mendapat state sendiri.",
        "Return hook sebaiknya menyatakan state dan action yang diperlukan component.",
        "Berikutnya, custom hook akan dipakai untuk subscription browser yang membutuhkan cleanup.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-custom-hook-basics-intro",
      "react-custom-hook-basics-example",
      "react-custom-hook-basics-decision-rule",
      "react-custom-hook-basics-coding-practice",
      "react-custom-hook-basics-summary",
    ],
  },
};

export const reactBrowserSubscriptionHookLesson: Lesson = {
  id: "react-browser-subscription-hook",
  trackId: "frontend-engineering",
  moduleId: "react-custom-hooks-effects",
  title: "Browser Subscription Hook",
  slug: "react-browser-subscription-hook",
  description:
    "Membuat custom hook kecil yang membaca ukuran browser dan membersihkan event listener resize dengan aman.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 60,
  objectives: [
    "Memasang event listener browser lewat useEffect",
    "Melepas event listener lewat cleanup",
    "Mengembalikan data browser dari custom hook kecil",
  ],
  skillTags: ["React", "Custom Hooks", "Browser API", "addEventListener"],
  blocks: [
    {
      id: "react-browser-subscription-hook-intro",
      type: "text",
      title: "Subscription menghubungkan React dengan browser",
      content:
        "Ukuran window, koneksi online, dan keyboard event berasal dari browser, bukan dari state React. Saat component perlu merespons perubahan itu, component dapat berlangganan ke browser dengan event listener. Karena listener berada di luar React, effect memasang dan cleanup melepasnya.\n\nCustom hook memberi batas yang rapi: component UI tidak perlu tahu detail `addEventListener` dan `removeEventListener`. Ia cukup menerima data seperti `width` lalu menentukan tampilan yang tepat.",
    },
    {
      id: "react-browser-subscription-hook-example",
      type: "code-example",
      title: "`useWindowWidth` dengan cleanup",
      language: "tsx",
      code: `import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}`,
      explanation:
        "Hook membaca ukuran awal, memasang satu listener resize, lalu menghapus listener yang sama saat hook tidak lagi dipakai. Handler diberi nama agar pasangan pasang/lepas mudah terlihat.",
    },
    {
      id: "react-browser-subscription-hook-checklist",
      type: "callout",
      variant: "important",
      title: "Checklist subscription yang aman",
      content:
        "Simpan handler dalam function bernama. Pasang event dengan handler itu. Kembalikan cleanup yang melepas event dengan event name dan handler yang sama. Hindari menaruh `addEventListener` langsung di body component karena ia akan berjalan setiap render.",
    },
    {
      id: "react-browser-subscription-hook-coding-practice",
      type: "coding-practice",
      challengeId: "build-window-width-hook",
    },
    {
      id: "react-browser-subscription-hook-summary",
      type: "summary",
      points: [
        "Browser event adalah sistem luar React yang cocok disinkronkan lewat effect.",
        "Event listener harus dipasang dan dilepas dengan handler yang sama.",
        "Custom hook menyembunyikan detail subscription dari component UI.",
        "Component pemakai hook bisa fokus pada data yang dikembalikan hook.",
        "Berikutnya, Uji Kompetensi mengecek keputusan effect, cleanup, dan tanggung jawab custom hook.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-browser-subscription-hook-intro",
      "react-browser-subscription-hook-example",
      "react-browser-subscription-hook-checklist",
      "react-browser-subscription-hook-coding-practice",
      "react-browser-subscription-hook-summary",
    ],
  },
};

export const reactCustomHooksEffectsAssessmentLesson: Lesson = {
  id: "react-custom-hooks-effects-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-custom-hooks-effects",
  title: "Uji Kompetensi Custom Hooks and Effects",
  slug: "react-custom-hooks-effects-assessment",
  description:
    "Checkpoint kesiapan memilih useEffect dengan tepat, membersihkan subscription, dan menjelaskan tanggung jawab custom hook.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 90,
  objectives: [
    "Mengecek keputusan kapan useEffect diperlukan",
    "Menerapkan cleanup pada browser event subscription",
    "Menjelaskan tanggung jawab custom hook secara ringkas dan tepat",
  ],
  skillTags: ["React", "useEffect", "Custom Hooks", "Assessment"],
  blocks: [
    {
      id: "react-custom-hooks-effects-assessment-recap",
      type: "text",
      title: "Checkpoint: behavior React yang terorganisasi",
      content:
        "Uji Kompetensi ini menggabungkan keputusan effect, dependency, cleanup, dan custom hook. Kamu akan menyelesaikan subscription browser kecil, lalu menjelaskan alasan hook tersebut ada.\n\nKamu belum perlu memakai data fetching, caching, React Router, context, reducer, atau library state. Fokusnya adalah satu behavior yang jelas: membaca data browser, menyinkronkannya dengan React, dan membereskan subscription saat selesai.",
    },
    {
      id: "react-custom-hooks-effects-assessment-quiz",
      type: "quiz",
      quizId: "react-custom-hooks-effects-assessment-quiz",
    },
    {
      id: "react-custom-hooks-effects-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-window-width-hook-checkpoint",
    },
    {
      id: "react-custom-hooks-effects-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Jelaskan custom hook `useWindowWidth` yang kamu buat dengan format berikut:\n- Sistem luar React yang dipakai:\n- Data yang dikembalikan hook:\n- Mengapa useEffect diperlukan:\n- Cleanup yang dilakukan:\n- Hal yang sengaja tidak dimasukkan ke hook:\n\nTulis dengan bahasa teknis yang ringkas. Fokus pada tanggung jawab hook, bukan menjelaskan semua syntax React.",
      placeholder:
        "Sistem luar React yang dipakai: event resize dari window.\nData yang dikembalikan hook: lebar window saat ini.\nMengapa useEffect diperlukan: listener browser perlu dipasang setelah component dirender.\nCleanup yang dilakukan: removeEventListener untuk handler resize yang sama.\nHal yang sengaja tidak dimasukkan ke hook: keputusan UI mobile atau desktop, karena itu tugas component pemakai.",
      minimumCharacters: 260,
      checklist: [
        "Menyebut browser event atau window sebagai sistem luar React.",
        "Menjelaskan data yang dikembalikan hook.",
        "Menjelaskan alasan useEffect diperlukan.",
        "Menyebut cleanup removeEventListener.",
        "Memisahkan tanggung jawab hook dari keputusan UI component.",
      ],
      modelAnswer:
        "Sistem luar React yang dipakai: event resize dari window browser. Data yang dikembalikan hook: width terbaru dari window. useEffect diperlukan karena component perlu memasang subscription ke event browser setelah render. Cleanup menghapus listener resize dengan handler yang sama agar tidak tertinggal saat component tidak dipakai. Hook hanya menyediakan data width; keputusan apakah UI memakai layout mobile atau desktop tetap berada di component pemakai.",
    },
    {
      id: "react-custom-hooks-effects-assessment-docs",
      type: "documentation-bridge",
      title: "Baca docs React dengan tujuan yang jelas",
      description:
        "Gunakan docs resmi untuk menguatkan keputusan effect dan cleanup, bukan untuk menghafal setiap API sekaligus.",
      links: [
        {
          source: "React",
          title: "Synchronizing with Effects",
          url: "https://react.dev/learn/synchronizing-with-effects",
          focus: [
            "kapan React perlu disinkronkan dengan sistem luar",
            "mengapa effect berjalan setelah render",
            "contoh effect yang punya cleanup",
          ],
          ignoreForNow: [
            "integrasi library eksternal yang kompleks",
            "contoh data fetching yang lebih besar",
          ],
        },
        {
          source: "React",
          title: "You Might Not Need an Effect",
          url: "https://react.dev/learn/you-might-not-need-an-effect",
          focus: [
            "perhitungan yang cukup dilakukan saat render",
            "cara menghindari duplicate state",
            "tanda bahwa effect dipakai terlalu cepat",
          ],
          ignoreForNow: ["optimasi performa lanjutan"],
        },
        {
          source: "React",
          title: "Reusing Logic with Custom Hooks",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
          focus: [
            "nama custom hook dimulai dengan use",
            "hook memakai ulang logic, bukan satu state global",
            "cara menentukan return value hook",
          ],
          ignoreForNow: ["custom hook library pihak ketiga", "generic TypeScript hook yang kompleks"],
        },
        {
          source: "MDN Web Docs",
          title: "EventTarget: addEventListener()",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
          focus: [
            "event name resize",
            "function handler yang dipasang ke browser",
            "hubungan handler dengan removeEventListener",
          ],
          ignoreForNow: ["opsi listener tingkat lanjut"],
        },
      ],
      followUpAction:
        "Di Local React App kamu, pilih satu behavior yang berulang. Tulis satu kalimat tentang apakah behavior itu cukup dihitung saat render, perlu effect, atau layak diekstrak menjadi custom hook.",
    },
    {
      id: "react-custom-hooks-effects-assessment-summary",
      type: "summary",
      points: [
        "useEffect dipakai untuk sinkronisasi dengan sistem di luar React, bukan untuk semua perhitungan.",
        "Dependency dan cleanup menjaga effect tetap sesuai lifecycle component.",
        "Timer dan browser listener perlu dibersihkan saat tidak lagi dipakai.",
        "Custom hook mengemas satu behavior reusable dengan tanggung jawab yang jelas.",
        "Kamu siap masuk ke State Strategy untuk memilih lokasi dan bentuk state yang paling tepat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-custom-hooks-effects-assessment-recap",
      "react-custom-hooks-effects-assessment-quiz",
      "react-custom-hooks-effects-assessment-coding-practice",
      "react-custom-hooks-effects-assessment-writing-practice",
      "react-custom-hooks-effects-assessment-docs",
      "react-custom-hooks-effects-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactCustomHooksEffectsAssessmentQuiz: Quiz = {
  id: "react-custom-hooks-effects-assessment-quiz",
  lessonId: "react-custom-hooks-effects-assessment",
  title: "Uji Kompetensi Custom Hooks and Effects",
  passingScore: 70,
  questions: [
    {
      id: "react-custom-hooks-effects-q1",
      type: "multiple-choice",
      question: "Kapan useEffect paling tepat digunakan?",
      options: [
        "Saat component perlu memasang event listener browser",
        "Saat menghitung jumlah item dari array props",
        "Saat memberi key pada item list",
        "Saat menulis className di JSX",
      ],
      correctAnswer: "Saat component perlu memasang event listener browser",
      explanation:
        "Event listener browser adalah subscription ke sistem di luar React. Perhitungan dari props cukup dilakukan saat render.",
    },
    {
      id: "react-custom-hooks-effects-q2",
      type: "multiple-choice",
      question: "Apa tujuan utama cleanup pada effect yang memasang event listener?",
      options: [
        "Melepas listener saat effect tidak lagi dipakai",
        "Memaksa component selalu render ulang",
        "Membuat props bisa diubah langsung",
        "Mengganti state menjadi variable biasa",
      ],
      correctAnswer: "Melepas listener saat effect tidak lagi dipakai",
      explanation:
        "Cleanup mencegah subscription lama tertinggal saat component dilepas atau effect perlu disinkronkan ulang.",
    },
    {
      id: "react-custom-hooks-effects-q3",
      type: "true-false",
      question:
        "Jika `total` selalu berasal dari `items.length`, total sebaiknya disimpan di state lalu diupdate lewat useEffect.",
      correctAnswer: false,
      explanation:
        "`total` adalah derived value. Hitung langsung dari `items.length` saat render agar tidak membuat duplicate state.",
    },
    {
      id: "react-custom-hooks-effects-q4",
      type: "multiple-choice",
      question: "Mengapa nama custom hook dimulai dengan `use`?",
      options: [
        "Agar React dan pembaca code mengenalinya sebagai function yang memakai Hook",
        "Agar hook otomatis berbagi state global",
        "Agar hook tidak boleh menerima parameter",
        "Agar hook selalu membutuhkan useEffect",
      ],
      correctAnswer:
        "Agar React dan pembaca code mengenalinya sebagai function yang memakai Hook",
      explanation:
        "Awalan `use` adalah konvensi penting untuk function yang memanggil Hook React. Custom hook bisa memakai useState saja atau useEffect bila memang diperlukan.",
    },
    {
      id: "react-custom-hooks-effects-q5",
      type: "multiple-choice",
      question:
        "Agar cleanup berhasil, `removeEventListener` harus memakai...",
      options: [
        "event name dan function handler yang sama seperti saat memasang listener",
        "event name yang berbeda agar listener lama ditemukan",
        "state baru setiap kali component render",
        "component name sebagai parameter kedua",
      ],
      correctAnswer:
        "event name dan function handler yang sama seperti saat memasang listener",
      explanation:
        "Browser perlu mengetahui event dan reference handler yang sama untuk melepas listener yang sebelumnya dipasang.",
    },
  ],
};

const reactEffectsPracticePreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React Effects</h1>
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

export const fixReactTimerCleanupChallenge: CodingChallenge = {
  id: "fix-react-timer-cleanup",
  lessonId: "react-effect-cleanup-dependencies",
  title: "Perbaiki timer React dengan cleanup",
  description:
    "Latihan memperbaiki effect timer agar memakai functional update, dependency array yang tepat, dan cleanup.",
  instructions: [
    "Fokus di tab TSX.",
    "Import useEffect dan useState dari react.",
    "Ubah update seconds menjadi functional state update.",
    "Kembalikan cleanup yang memanggil clearInterval.",
    "Gunakan dependency array kosong setelah callback tidak lagi membaca seconds.",
  ],
  starterCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useEffect, useState } from "react";

function FocusTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, [seconds]);

  return (
    <section>
      <h2>Focus timer</h2>
      <p>Berjalan: {seconds} detik</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useEffect, useState } from "react";

function FocusTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <section>
      <h2>Focus timer</h2>
      <p>Berjalan: {seconds} detik</p>
    </section>
  );
}`,
  },
  checklist: [
    "Effect memasang satu interval.",
    "Callback interval memakai functional state update.",
    "Cleanup menghapus interval yang sama.",
    "Effect tidak lagi bergantung pada seconds.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "FocusTimer",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "import-effects", label: "useEffect dan useState diimport.", type: "contains", target: `import { useEffect, useState } from "react";`, valueIncludes: `import { useEffect, useState } from "react";` },
      { id: "timer-id", label: "timerId dibuat dari setInterval.", type: "contains", target: "const timerId = window.setInterval(() => {", valueIncludes: "const timerId = window.setInterval(() => {" },
      { id: "functional-update", label: "seconds memakai functional update.", type: "contains", target: "setSeconds((current) => current + 1);", valueIncludes: "setSeconds((current) => current + 1);" },
      { id: "clear-interval", label: "Cleanup memanggil clearInterval.", type: "contains", target: "window.clearInterval(timerId);", valueIncludes: "window.clearInterval(timerId);" },
      { id: "empty-dependencies", label: "Effect memakai dependency array kosong.", type: "contains", target: "}, []);", valueIncludes: "}, []);" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Timer bertambah satu detik sekali tanpa memasang interval berulang. Jalankan preview lalu amati angka selama beberapa detik.",
    lines: [
      "Angka detik terus bertambah dengan satu timer.",
      "Callback memakai functional update agar membaca value terbaru.",
      "Cleanup menghentikan interval saat component tidak lagi dipakai.",
    ],
  },
  skillTags: ["React", "useEffect", "Cleanup", "Timer"],
};

export const extractUseToggleHookChallenge: CodingChallenge = {
  id: "extract-use-toggle-hook",
  lessonId: "react-custom-hook-basics",
  title: "Ekstrak behavior ke useToggle",
  description:
    "Latihan membuat custom hook useToggle yang mengembalikan boolean state dan action toggle.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat function useToggle dengan initialValue default false.",
    "Simpan isOpen dengan useState.",
    "Buat function toggle yang membalik isOpen dengan functional update.",
    "Return isOpen dan toggle, lalu pakai keduanya di SettingsPanel.",
  ],
  starterCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  return { isOpen };
}

function SettingsPanel() {
  const { isOpen } = useToggle();

  return (
    <section>
      <h2>Pengaturan lesson</h2>
      <button type="button">{isOpen ? "Tutup detail" : "Buka detail"}</button>
      {isOpen ? <p>Detail pengaturan terlihat.</p> : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  function toggle() {
    setIsOpen((current) => !current);
  }

  return { isOpen, toggle };
}

function SettingsPanel() {
  const { isOpen, toggle } = useToggle();

  return (
    <section>
      <h2>Pengaturan lesson</h2>
      <button type="button" onClick={toggle}>
        {isOpen ? "Tutup detail" : "Buka detail"}
      </button>
      {isOpen ? <p>Detail pengaturan terlihat.</p> : null}
    </section>
  );
}`,
  },
  checklist: [
    "Custom hook bernama useToggle.",
    "useToggle menyimpan boolean state sendiri.",
    "toggle membalik state dengan functional update.",
    "SettingsPanel memakai state dan action dari hook.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "SettingsPanel",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "toggle-hook", label: "Function useToggle dibuat.", type: "contains", target: "function useToggle(initialValue = false)", valueIncludes: "function useToggle(initialValue = false)" },
      { id: "open-state", label: "isOpen state dibuat.", type: "contains", target: "const [isOpen, setIsOpen] = useState(initialValue);", valueIncludes: "const [isOpen, setIsOpen] = useState(initialValue);" },
      { id: "toggle-function", label: "Function toggle dibuat.", type: "contains", target: "function toggle()", valueIncludes: "function toggle()" },
      { id: "toggle-update", label: "toggle membalik isOpen.", type: "contains", target: "setIsOpen((current) => !current);", valueIncludes: "setIsOpen((current) => !current);" },
      { id: "toggle-return", label: "Hook mengembalikan isOpen dan toggle.", type: "contains", target: "return { isOpen, toggle };", valueIncludes: "return { isOpen, toggle };" },
      { id: "toggle-consume", label: "SettingsPanel mengambil toggle dari hook.", type: "contains", target: "const { isOpen, toggle } = useToggle();", valueIncludes: "const { isOpen, toggle } = useToggle();" },
      { id: "toggle-click", label: "Button menjalankan toggle.", type: "contains", target: "onClick={toggle}", valueIncludes: "onClick={toggle}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "SettingsPanel memakai behavior useToggle tanpa mengetahui detail setState. Jalankan preview lalu buka dan tutup detail pengaturan.",
    lines: [
      "Button memakai action toggle dari custom hook.",
      "Detail hanya terlihat saat isOpen bernilai true.",
      "Hook memakai ulang behavior boolean, bukan markup panel.",
    ],
  },
  skillTags: ["React", "Custom Hooks", "useState", "Refactoring"],
};

export const buildWindowWidthHookChallenge: CodingChallenge = {
  id: "build-window-width-hook",
  lessonId: "react-browser-subscription-hook",
  title: "Buat useWindowWidth dengan cleanup",
  description:
    "Latihan membuat custom hook yang membaca lebar window dan membersihkan listener resize.",
  instructions: [
    "Fokus di tab TSX.",
    "Import useEffect dan useState dari react.",
    "Buat state width dari window.innerWidth.",
    "Buat handleResize yang mengupdate width.",
    "Pasang resize listener dan cleanup removeEventListener dengan handler yang sama.",
  ],
  starterCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width;
}

function WorkspaceWidth() {
  const width = useWindowWidth();

  return (
    <section>
      <h2>Lebar workspace</h2>
      <p>{width}px</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

function WorkspaceWidth() {
  const width = useWindowWidth();

  return (
    <section>
      <h2>Lebar workspace</h2>
      <p>{width}px</p>
    </section>
  );
}`,
  },
  checklist: [
    "Hook membaca width awal dari window.innerWidth.",
    "Handler resize punya nama agar bisa dilepas kembali.",
    "Listener dipasang di dalam useEffect.",
    "Cleanup melepas listener resize dengan handler yang sama.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "WorkspaceWidth",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "window-hook", label: "Function useWindowWidth dibuat.", type: "contains", target: "function useWindowWidth()", valueIncludes: "function useWindowWidth()" },
      { id: "width-state", label: "width state membaca window.innerWidth.", type: "contains", target: "const [width, setWidth] = useState(() => window.innerWidth);", valueIncludes: "const [width, setWidth] = useState(() => window.innerWidth);" },
      { id: "resize-handler", label: "handleResize dibuat.", type: "contains", target: "function handleResize()", valueIncludes: "function handleResize()" },
      { id: "set-width", label: "handleResize mengupdate width.", type: "contains", target: "setWidth(window.innerWidth);", valueIncludes: "setWidth(window.innerWidth);" },
      { id: "add-listener", label: "Listener resize dipasang dengan handleResize.", type: "contains", target: "window.addEventListener(\"resize\", handleResize);", valueIncludes: "window.addEventListener(\"resize\", handleResize);" },
      { id: "remove-listener", label: "Cleanup melepas listener yang sama.", type: "contains", target: "window.removeEventListener(\"resize\", handleResize);", valueIncludes: "window.removeEventListener(\"resize\", handleResize);" },
      { id: "return-width", label: "Hook mengembalikan width.", type: "contains", target: "return width;", valueIncludes: "return width;" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Component menampilkan width dari browser melalui custom hook. Jalankan preview untuk melihat nilai awal; struktur hook memastikan perubahan resize dapat disinkronkan dan dibersihkan.",
    lines: [
      "useWindowWidth mengembalikan lebar browser saat ini.",
      "handleResize mengupdate state saat browser mengirim event resize.",
      "Cleanup melepas listener resize saat hook tidak lagi dipakai.",
    ],
  },
  skillTags: ["React", "Custom Hooks", "Browser API", "Cleanup"],
};

export const buildWindowWidthHookCheckpointChallenge: CodingChallenge = {
  id: "build-window-width-hook-checkpoint",
  lessonId: "react-custom-hooks-effects-assessment",
  title: "Bangun window width hook checkpoint",
  description:
    "Checkpoint membuat custom hook browser subscription yang mengembalikan width dan memasang cleanup dengan benar.",
  instructions: [
    "Fokus di tab TSX.",
    "Lengkapi useWindowWidth sebagai custom hook browser subscription.",
    "Gunakan useState untuk width awal dari window.innerWidth.",
    "Pasang dan lepas listener resize dengan handleResize yang sama.",
    "Gunakan width dari hook untuk menentukan label compact atau luas.",
  ],
  starterCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Pasang subscription resize dan cleanup di sini.
  }, []);

  return width;
}

function ReadingWorkspace() {
  const width = useWindowWidth();
  const layoutLabel = width < 720 ? "Compact" : "Luas";

  return (
    <section>
      <h2>Reading workspace</h2>
      <p>Lebar saat ini: {width}px</p>
      <p>Layout: {layoutLabel}</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactEffectsPracticePreviewCode,
    tsx: `import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

function ReadingWorkspace() {
  const width = useWindowWidth();
  const layoutLabel = width < 720 ? "Compact" : "Luas";

  return (
    <section>
      <h2>Reading workspace</h2>
      <p>Lebar saat ini: {width}px</p>
      <p>Layout: {layoutLabel}</p>
    </section>
  );
}`,
  },
  checklist: [
    "useWindowWidth memakai useState dan useEffect.",
    "Hook membaca width awal dari window.innerWidth.",
    "resize listener memakai handleResize bernama.",
    "Cleanup memakai removeEventListener dengan handler yang sama.",
    "ReadingWorkspace memakai data hook untuk label layout.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ReadingWorkspace",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "hook-name", label: "Custom hook useWindowWidth dibuat.", type: "contains", target: "function useWindowWidth()", valueIncludes: "function useWindowWidth()" },
      { id: "width-initial", label: "width dimulai dari window.innerWidth.", type: "contains", target: "const [width, setWidth] = useState(() => window.innerWidth);", valueIncludes: "const [width, setWidth] = useState(() => window.innerWidth);" },
      { id: "resize-handler", label: "handleResize dibuat.", type: "contains", target: "function handleResize()", valueIncludes: "function handleResize()" },
      { id: "resize-state", label: "Resize mengupdate width.", type: "contains", target: "setWidth(window.innerWidth);", valueIncludes: "setWidth(window.innerWidth);" },
      { id: "listener-add", label: "resize listener dipasang.", type: "contains", target: "window.addEventListener(\"resize\", handleResize);", valueIncludes: "window.addEventListener(\"resize\", handleResize);" },
      { id: "listener-cleanup", label: "resize listener dibersihkan.", type: "contains", target: "window.removeEventListener(\"resize\", handleResize);", valueIncludes: "window.removeEventListener(\"resize\", handleResize);" },
      { id: "hook-return", label: "Hook mengembalikan width.", type: "contains", target: "return width;", valueIncludes: "return width;" },
      { id: "layout-label", label: "Layout label dihitung dari width.", type: "contains", target: "const layoutLabel = width < 720 ? \"Compact\" : \"Luas\";", valueIncludes: "const layoutLabel = width < 720 ? \"Compact\" : \"Luas\";" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "ReadingWorkspace membaca lebar browser lewat useWindowWidth dan memilih label layout dari data itu. Jalankan preview untuk melihat nilai awal serta memastikan component berhasil dirender.",
    lines: [
      "Custom hook menjadi satu tempat untuk subscription resize dan cleanup.",
      "Component menerima width tanpa menulis detail addEventListener.",
      "layoutLabel dihitung saat render, bukan disimpan sebagai state terpisah.",
    ],
  },
  skillTags: ["React", "useEffect", "Custom Hooks", "Assessment"],
};
