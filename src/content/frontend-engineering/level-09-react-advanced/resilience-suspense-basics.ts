import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const resilienceSuspenseBasicsModule: Module = {
  id: "react-resilience-suspense-basics",
  trackId: "frontend-engineering",
  title: "Resilience and Suspense Basics",
  slug: "react-resilience-suspense-basics",
  description:
    "Membuat React feature lebih tahan terhadap render error, memberi fallback yang membantu, memahami lazy loading dengan Suspense, dan menyediakan jalur recovery yang jelas.",
  order: 28,
  lessonIds: [
    "react-error-boundaries",
    "react-fallback-ui",
    "react-suspense-basics",
    "react-retry-recovery-patterns",
    "react-resilience-suspense-basics-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["React", "Error Boundaries", "Suspense", "Fallback UI", "Recovery"],
};

export const reactErrorBoundariesLesson: Lesson = {
  id: "react-error-boundaries",
  trackId: "frontend-engineering",
  moduleId: "react-resilience-suspense-basics",
  title: "Error Boundaries",
  slug: "react-error-boundaries",
  description:
    "Memahami batas area UI yang dapat menangkap render error lalu menggantinya dengan fallback yang aman.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan tujuan Error Boundary",
    "Membedakan render error dari event handler error",
    "Menentukan area feature yang layak dibungkus boundary",
  ],
  skillTags: ["React", "Error Boundary", "Resilience", "Debugging"],
  blocks: [
    {
      id: "react-error-boundaries-intro",
      type: "text",
      title: "Satu feature gagal tidak harus menjatuhkan seluruh halaman",
      content:
        "Render error pada satu bagian React UI dapat membuat area di sekitarnya tidak lagi dapat dipakai. Error Boundary adalah component khusus yang menangkap render error dari child tree-nya lalu menampilkan fallback UI. Boundary membantu menjaga halaman tetap punya jalur yang jelas saat satu feature bermasalah.\n\nBoundary bukan alat untuk menyembunyikan semua error. Ia tidak menangkap error di event handler, callback async, server rendering, atau error yang terjadi di dalam boundary itu sendiri. Error tersebut tetap perlu ditangani di tempat asalnya, misalnya di event handler atau flow request.",
    },
    {
      id: "react-error-boundaries-example",
      type: "code-example",
      title: "Boundary kecil untuk feature preview",
      language: "tsx",
      code: `import { Component, type ErrorInfo, type ReactNode } from "react";

type FeatureErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type FeatureErrorBoundaryState = {
  hasError: boolean;
};

class FeatureErrorBoundary extends Component<
  FeatureErrorBoundaryProps,
  FeatureErrorBoundaryState
> {
  state: FeatureErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): FeatureErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Preview feature gagal dirender", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}`,
      explanation:
        "Boundary menyimpan `hasError` untuk memilih fallback atau children. `getDerivedStateFromError` mengganti UI, sedangkan `componentDidCatch` adalah tempat yang wajar untuk logging. Di aplikasi production, logging dapat dikirim ke monitoring tool yang dipilih tim.",
    },
    {
      id: "react-error-boundaries-case-study",
      type: "callout",
      variant: "important",
      title: "Tangkap error sesuai sumbernya",
      content:
        "Jika `ProfilePreview` melempar error saat render, boundary di sekitar feature itu dapat menampilkan fallback. Jika user menekan button lalu request gagal, tangani error di event handler dan tampilkan error state biasa. Memasang Error Boundary di setiap component kecil tidak selalu membantu; pilih batas feature yang memang dapat pulih secara mandiri.",
    },
    {
      id: "react-error-boundaries-quick-check",
      type: "quick-check",
      question: "Error mana yang dapat ditangkap Error Boundary?",
      options: [
        "Error saat child component dirender",
        "Error di onClick handler",
        "Error dari Promise yang belum di-handle",
        "Error di dalam Error Boundary itu sendiri",
      ],
      correctAnswer: "Error saat child component dirender",
      explanation:
        "Error Boundary menangkap render error dari child tree. Event handler dan Promise perlu ditangani oleh flow event atau async masing-masing.",
    },
    {
      id: "react-error-boundaries-summary",
      type: "summary",
      points: [
        "Error Boundary menangkap render error dari child tree.",
        "Boundary mengganti area feature yang gagal dengan fallback UI.",
        "Event handler dan async error tidak otomatis ditangkap boundary.",
        "Batas boundary sebaiknya mengikuti feature yang dapat pulih sendiri.",
        "Berikutnya, kamu akan merancang fallback UI yang tetap membantu user bergerak.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-error-boundaries-intro",
      "react-error-boundaries-example",
      "react-error-boundaries-case-study",
      "react-error-boundaries-quick-check",
      "react-error-boundaries-summary",
    ],
  },
};

export const reactFallbackUiLesson: Lesson = {
  id: "react-fallback-ui",
  trackId: "frontend-engineering",
  moduleId: "react-resilience-suspense-basics",
  title: "Fallback UI",
  slug: "react-fallback-ui",
  description:
    "Membuat layar fallback yang menjelaskan feature mana yang bermasalah dan memberi user pilihan untuk pulih.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan fallback UI dari pesan error generik",
    "Menulis copy fallback yang tenang dan spesifik",
    "Menambahkan reset action yang dapat dicoba user",
  ],
  skillTags: ["React", "Fallback UI", "Error Recovery", "UX"],
  blocks: [
    {
      id: "react-fallback-ui-intro",
      type: "text",
      title: "Fallback adalah UI pengganti, bukan pesan panik",
      content:
        "Saat boundary menangkap render error, fallback UI mengambil tempat feature yang gagal. Fallback yang baik menjelaskan bagian mana yang belum dapat ditampilkan, menjaga sisa halaman tetap berguna, dan memberi action recovery bila recovery memang tersedia.\n\nHindari fallback yang menakutkan atau terlalu samar. “Ada masalah” tidak memberi cukup konteks. Sebaliknya, “Preview profil belum dapat ditampilkan. Coba muat ulang preview.” membantu user memahami dampak dan langkah berikutnya.",
    },
    {
      id: "react-fallback-ui-example",
      type: "code-example",
      title: "Fallback feature dengan reset action",
      language: "tsx",
      code: `function FeatureFallback({ onReset }: { onReset: () => void }) {
  return (
    <section role="alert">
      <h2>Preview profil belum dapat ditampilkan</h2>
      <p>Perubahan lain di halaman tetap aman. Coba muat ulang preview ini.</p>
      <button type="button" onClick={onReset}>
        Muat ulang preview
      </button>
    </section>
  );
}`,
      explanation:
        "Heading menyebut feature yang gagal. Paragraf memberi batas dampak supaya user tidak mengira seluruh halaman hilang. Button memanggil action reset yang dimiliki parent atau boundary wrapper.",
    },
    {
      id: "react-fallback-ui-checklist",
      type: "callout",
      variant: "tip",
      title: "Checklist fallback yang sehat",
      content:
        "Sebutkan feature yang bermasalah. Jangan menyalahkan user. Jelaskan apakah bagian lain masih aman. Beri satu action yang sesuai, misalnya muat ulang feature atau kembali ke daftar. Jangan janji bahwa retry akan selalu berhasil bila penyebab error belum diketahui.",
    },
    {
      id: "react-fallback-ui-coding-practice",
      type: "coding-practice",
      challengeId: "build-friendly-error-fallback",
    },
    {
      id: "react-fallback-ui-summary",
      type: "summary",
      points: [
        "Fallback UI menggantikan feature yang gagal tanpa harus menghapus seluruh halaman.",
        "Copy fallback perlu menyebut feature, dampak, dan action recovery.",
        "Reset action dimiliki parent atau boundary wrapper yang tahu cara memulai ulang feature.",
        "Fallback yang baik tenang, spesifik, dan tidak menampilkan detail debugging mentah.",
        "Berikutnya, kamu akan melihat Suspense saat component belum siap dimuat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-fallback-ui-intro",
      "react-fallback-ui-example",
      "react-fallback-ui-checklist",
      "react-fallback-ui-coding-practice",
      "react-fallback-ui-summary",
    ],
  },
};

export const reactSuspenseBasicsLesson: Lesson = {
  id: "react-suspense-basics",
  trackId: "frontend-engineering",
  moduleId: "react-resilience-suspense-basics",
  title: "Suspense Basics",
  slug: "react-suspense-basics",
  description:
    "Memahami React.lazy dan Suspense sebagai pola menunggu component yang dimuat secara lazy.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan React.lazy untuk memuat component secara lazy",
    "Menjelaskan fallback Suspense saat component belum siap",
    "Membedakan Suspense lazy loading dari data-fetching architecture",
  ],
  skillTags: ["React", "Suspense", "React.lazy", "Code Splitting"],
  blocks: [
    {
      id: "react-suspense-basics-intro",
      type: "text",
      title: "Suspense memberi UI saat component sedang disiapkan",
      content:
        "`React.lazy` menunda pemuatan satu component sampai component itu benar-benar perlu dirender. Saat module component sedang dimuat, `<Suspense>` menampilkan fallback sementara. Pola ini berguna untuk bagian UI non-kritis yang tidak perlu ikut dimuat pada awal halaman.\n\nDi module ini, Suspense dipakai hanya untuk lazy-loaded component. Kita belum membangun Suspense untuk data fetching, streaming, atau framework routing. Fokusnya adalah membaca hubungan sederhana antara component lazy, boundary Suspense, dan fallback yang tepat.",
    },
    {
      id: "react-suspense-basics-example",
      type: "code-example",
      title: "Lazy component di dalam Suspense",
      language: "tsx",
      code: `import { lazy, Suspense } from "react";

const ActivityPanel = lazy(() => import("./ActivityPanel"));

function ProfilePage() {
  return (
    <section>
      <h1>Profil learner</h1>
      <Suspense fallback={<p role="status">Memuat aktivitas...</p>}>
        <ActivityPanel />
      </Suspense>
    </section>
  );
}`,
      explanation:
        "`lazy` menerima function dynamic import. Saat `ActivityPanel` belum siap, Suspense menampilkan fallback. Setelah module tersedia, React merender ActivityPanel di area yang sama.",
    },
    {
      id: "react-suspense-basics-workspace-note",
      type: "callout",
      variant: "important",
      title: "Practice ini memeriksa struktur, bukan menjalankan dynamic import",
      content:
        "Practice workspace saat ini belum menyediakan module loader untuk file yang diimport secara dynamic. Karena itu, cek otomatis akan memeriksa struktur `lazy`, `Suspense`, dan fallback di tab TSX. Preview tidak menjalankan dynamic import pada latihan ini. Di Local React App, kamu dapat mencoba pola ini dengan file component sungguhan.",
    },
    {
      id: "react-suspense-basics-coding-practice",
      type: "coding-practice",
      challengeId: "lazy-load-profile-activity-panel",
    },
    {
      id: "react-suspense-basics-summary",
      type: "summary",
      points: [
        "React.lazy menunda pemuatan module component sampai dibutuhkan.",
        "Suspense menampilkan fallback selama component lazy belum siap.",
        "Fallback Suspense perlu menjelaskan area yang sedang dimuat.",
        "Module ini tidak memakai Suspense untuk data fetching atau streaming.",
        "Berikutnya, kamu akan membedakan retry request dan reset UI setelah feature gagal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-suspense-basics-intro",
      "react-suspense-basics-example",
      "react-suspense-basics-workspace-note",
      "react-suspense-basics-coding-practice",
      "react-suspense-basics-summary",
    ],
  },
};

export const reactRetryRecoveryPatternsLesson: Lesson = {
  id: "react-retry-recovery-patterns",
  trackId: "frontend-engineering",
  moduleId: "react-resilience-suspense-basics",
  title: "Retry and Recovery Patterns",
  slug: "react-retry-recovery-patterns",
  description:
    "Mereset feature yang gagal ke kondisi aman dan membedakan reset UI dari retry request eksternal.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan retry request dari reset UI feature",
    "Membuat recovery action yang memulihkan feature ke kondisi aman",
    "Menjelaskan flow recovery kepada user dengan copy yang jelas",
  ],
  skillTags: ["React", "Recovery", "Retry", "Resilience"],
  blocks: [
    {
      id: "react-retry-recovery-patterns-intro",
      type: "text",
      title: "Recovery perlu mengembalikan feature ke state yang dapat dipakai",
      content:
        "Retry biasanya mencoba kembali pekerjaan eksternal yang sama, misalnya request yang gagal karena koneksi sementara. Reset UI mengembalikan feature ke state aman agar dapat dirender lagi. Keduanya kadang dilakukan bersama, tetapi bukan hal yang sama.\n\nUntuk fallback dari render error, reset dapat berarti membuat instance feature baru dengan key atau state yang bersih. Untuk request error, recovery mungkin memindahkan status dari error ke loading lalu menjalankan request lagi. Action yang tepat bergantung pada sumber kegagalannya.",
    },
    {
      id: "react-retry-recovery-patterns-example",
      type: "code-example",
      title: "Reset fallback ke feature yang aman",
      language: "tsx",
      code: `function ProfileRecovery() {
  const [hasError, setHasError] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  function handleReset() {
    setHasError(false);
    setResetKey((current) => current + 1);
  }

  if (hasError) {
    return <FeatureFallback onReset={handleReset} />;
  }

  return <ProfilePreview key={resetKey} />;
}`,
      explanation:
        "Saat fallback aktif, handleReset mengizinkan feature dirender lagi. `resetKey` memberi React instance baru untuk ProfilePreview bila feature memang perlu memulai local state dari awal.",
    },
    {
      id: "react-retry-recovery-patterns-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Pilih action berdasarkan penyebab kegagalan",
      content:
        "Gunakan retry jika ada operasi yang masuk akal untuk dijalankan ulang. Gunakan reset jika kamu perlu mengembalikan boundary atau component ke state awal. Jika user tidak memiliki izin atau input belum valid, tampilkan penjelasan dan action yang benar, bukan button retry yang tidak akan mengubah apa pun.",
    },
    {
      id: "react-retry-recovery-patterns-coding-practice",
      type: "coding-practice",
      challengeId: "add-profile-recovery-reset",
    },
    {
      id: "react-retry-recovery-patterns-summary",
      type: "summary",
      points: [
        "Retry mencoba ulang pekerjaan yang dapat diulang, biasanya request atau action eksternal.",
        "Reset mengembalikan feature atau boundary ke kondisi UI yang aman.",
        "Recovery action perlu sesuai dengan penyebab kegagalan.",
        "Key dapat dipakai untuk membuat instance feature baru saat reset memang diperlukan.",
        "Berikutnya, Uji Kompetensi menggabungkan fallback, recovery, dan keputusan Suspense dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-retry-recovery-patterns-intro",
      "react-retry-recovery-patterns-example",
      "react-retry-recovery-patterns-decision-rule",
      "react-retry-recovery-patterns-coding-practice",
      "react-retry-recovery-patterns-summary",
    ],
  },
};

export const reactResilienceSuspenseBasicsAssessmentLesson: Lesson = {
  id: "react-resilience-suspense-basics-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-resilience-suspense-basics",
  title: "Uji Kompetensi Resilience and Suspense Basics",
  slug: "react-resilience-suspense-basics-assessment",
  description:
    "Checkpoint kesiapan menambahkan fallback, reset recovery, dan keputusan Suspense dasar pada React feature kecil.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Mengecek pemahaman Error Boundary dan fallback UI",
    "Membuat recovery flow untuk feature yang gagal",
    "Menjelaskan kapan Suspense lazy loading sesuai digunakan",
  ],
  skillTags: ["React", "Resilience", "Suspense", "Error Recovery", "Assessment"],
  blocks: [
    {
      id: "react-resilience-suspense-basics-assessment-recap",
      type: "text",
      title: "Checkpoint: gagal dengan jelas, pulih dengan masuk akal",
      content:
        "Uji Kompetensi ini berfokus pada area UI yang tetap membantu ketika satu feature bermasalah. Kamu akan membuat fallback kecil dan reset recovery yang dapat dicoba user. Quiz dan refleksi akan mengecek batas Error Boundary serta pola lazy loading dengan Suspense.\n\nKamu belum perlu error monitoring platform, data-fetching Suspense, framework error route, atau retry backoff yang kompleks. Fokusnya adalah feature-level resilience dengan tindakan yang jelas.",
    },
    {
      id: "react-resilience-suspense-basics-assessment-quiz",
      type: "quiz",
      quizId: "react-resilience-suspense-basics-assessment-quiz",
    },
    {
      id: "react-resilience-suspense-basics-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-resilient-preview-checkpoint",
    },
    {
      id: "react-resilience-suspense-basics-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Jelaskan resilience plan untuk feature `ProfilePreview` dengan format berikut:\n- Render error yang perlu dibatasi:\n- Apa yang Error Boundary dapat dan tidak dapat tangkap:\n- Isi fallback UI dan recovery action:\n- Kapan lazy loading dengan Suspense layak digunakan:\n- Hal yang sengaja belum dibangun di module ini:\n\nTulis sebagai catatan implementasi singkat untuk rekan satu tim.",
      placeholder:
        "Render error yang perlu dibatasi: ProfilePreview dapat gagal saat membaca data profil yang tidak lengkap.\nApa yang Error Boundary dapat dan tidak dapat tangkap: boundary menangkap render error di child tree, tetapi event handler dan Promise harus ditangani di flow masing-masing.\nIsi fallback UI dan recovery action: fallback menjelaskan preview belum dapat ditampilkan dan memberi button Muat ulang preview untuk mereset feature.\nKapan lazy loading dengan Suspense layak digunakan: untuk panel aktivitas non-kritis yang tidak perlu dimuat pada awal halaman.\nHal yang sengaja belum dibangun: data-fetching Suspense, monitoring platform, dan retry backoff.",
      minimumCharacters: 420,
      checklist: [
        "Membedakan render error dari event handler atau async error.",
        "Menjelaskan feature yang dibungkus boundary dan dampaknya.",
        "Menyebut fallback UI serta recovery action yang konkret.",
        "Menjelaskan lazy loading dan Suspense tanpa menganggapnya sebagai data-fetching architecture.",
        "Menyebut satu batas scope yang memang belum dibangun.",
      ],
      modelAnswer:
        "ProfilePreview perlu dibungkus Error Boundary karena render feature tersebut dapat gagal saat data profil tidak sesuai bentuk yang diharapkan. Boundary menangkap render error dari child tree, tetapi tidak menangkap error dari click handler atau Promise; keduanya harus ditangani di event dan async flow masing-masing. Fallback menjelaskan bahwa preview belum dapat ditampilkan, menegaskan area lain tetap aman, lalu memberi button Muat ulang preview untuk mereset feature. ActivityPanel dapat di-lazy-load bila panel itu non-kritis saat halaman pertama dibuka; Suspense menampilkan status pemuatan module sementara. Module ini belum membangun data-fetching Suspense, error monitoring platform, atau retry backoff karena fokusnya masih feature-level recovery.",
    },
    {
      id: "react-resilience-suspense-basics-assessment-docs",
      type: "documentation-bridge",
      title: "Baca resilience pattern dari docs React",
      description:
        "Gunakan docs ini untuk membedakan tanggung jawab boundary, fallback, lazy loading, dan reset state sebelum menerapkannya di Local React App.",
      links: [
        {
          source: "React",
          title: "Catching Rendering Errors with an Error Boundary",
          url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
          focus: [
            "render error yang dapat ditangkap boundary",
            "fallback UI setelah boundary aktif",
            "batas boundary terhadap event handler dan async code",
          ],
          ignoreForNow: ["error monitoring service"],
        },
        {
          source: "React",
          title: "lazy",
          url: "https://react.dev/reference/react/lazy",
          focus: [
            "dynamic import untuk component lazy",
            "default export yang dibutuhkan lazy",
            "hubungan lazy dengan Suspense",
          ],
          ignoreForNow: ["bundle analysis yang kompleks"],
        },
        {
          source: "React",
          title: "Suspense",
          url: "https://react.dev/reference/react/Suspense",
          focus: [
            "fallback saat component lazy belum siap",
            "batas area Suspense",
            "copy fallback yang tidak mengganggu UI lain",
          ],
          ignoreForNow: ["Suspense data fetching", "streaming server rendering"],
        },
        {
          source: "React",
          title: "Preserving and Resetting State",
          url: "https://react.dev/learn/preserving-and-resetting-state",
          focus: [
            "state reset dengan key",
            "kapan component instance perlu dibuat ulang",
            "perbedaan reset dan update biasa",
          ],
          ignoreForNow: ["form reset yang sangat besar"],
        },
      ],
      followUpAction:
        "Di Local React App kamu, pilih satu feature yang berisiko gagal. Tulis batas Error Boundary-nya, fallback copy, dan satu recovery action. Jika ada panel non-kritis, putuskan apakah lazy loading benar-benar memberi manfaat sebelum menggunakannya.",
    },
    {
      id: "react-resilience-suspense-basics-assessment-summary",
      type: "summary",
      points: [
        "Error Boundary melindungi child tree dari render error, bukan semua jenis error.",
        "Fallback UI memberi konteks dan recovery action saat satu feature tidak tersedia.",
        "React.lazy dan Suspense mengelola pemuatan component lazy dengan fallback sementara.",
        "Retry dan reset dipilih berdasarkan sumber kegagalan, bukan sebagai button universal.",
        "Berikutnya, Performance Awareness akan mengajarkan cara mengukur sebelum mengoptimalkan React feature.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-resilience-suspense-basics-assessment-recap",
      "react-resilience-suspense-basics-assessment-quiz",
      "react-resilience-suspense-basics-assessment-coding-practice",
      "react-resilience-suspense-basics-assessment-writing-practice",
      "react-resilience-suspense-basics-assessment-docs",
      "react-resilience-suspense-basics-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactResilienceSuspenseBasicsAssessmentQuiz: Quiz = {
  id: "react-resilience-suspense-basics-assessment-quiz",
  lessonId: "react-resilience-suspense-basics-assessment",
  title: "Uji Kompetensi Resilience and Suspense Basics",
  passingScore: 70,
  questions: [
    {
      id: "react-resilience-suspense-q1",
      type: "multiple-choice",
      question: "Apa tujuan utama Error Boundary?",
      options: [
        "Menangkap render error di child tree dan menampilkan fallback UI",
        "Menangkap semua error dari browser dan server",
        "Menggantikan semua try/catch di event handler",
        "Memuat component secara lazy tanpa Suspense",
      ],
      correctAnswer:
        "Menangkap render error di child tree dan menampilkan fallback UI",
      explanation:
        "Error Boundary membatasi dampak render error pada bagian UI tertentu. Event handler dan async error masih perlu ditangani pada flow masing-masing.",
    },
    {
      id: "react-resilience-suspense-q2",
      type: "true-false",
      question: "Error Boundary otomatis menangkap error yang dilempar dari onClick handler.",
      correctAnswer: false,
      explanation:
        "Error di event handler tidak ditangkap Error Boundary. Tangani dengan try/catch atau state error di handler tersebut.",
    },
    {
      id: "react-resilience-suspense-q3",
      type: "multiple-choice",
      question: "Apa yang ditampilkan Suspense saat lazy-loaded component belum siap?",
      options: [
        "Fallback yang diberikan ke Suspense", "Error Boundary otomatis", "Seluruh halaman kosong", "Component default tanpa props"],
      correctAnswer: "Fallback yang diberikan ke Suspense",
      explanation:
        "Suspense menunjukkan fallback sementara saat module component lazy sedang dipersiapkan.",
    },
    {
      id: "react-resilience-suspense-q4",
      type: "multiple-choice",
      question: "Kapan reset UI lebih tepat daripada retry request?",
      options: [
        "Saat feature perlu dirender ulang dari state aman setelah render error",
        "Saat user mengetik satu karakter di input",
        "Saat list berhasil menampilkan content",
        "Saat component belum pernah dipasang",
      ],
      correctAnswer:
        "Saat feature perlu dirender ulang dari state aman setelah render error",
      explanation:
        "Reset memulihkan UI feature atau boundary. Retry biasanya menjalankan ulang operasi eksternal seperti request yang gagal sementara.",
    },
    {
      id: "react-resilience-suspense-q5",
      type: "multiple-choice",
      question: "Fallback UI yang paling membantu adalah...",
      options: [
        "Menyebut feature yang gagal dan memberi action recovery yang sesuai",
        "Menampilkan stack trace penuh ke user",
        "Menghapus seluruh halaman tanpa pesan",
        "Selalu menampilkan button retry tanpa melihat penyebab error",
      ],
      correctAnswer:
        "Menyebut feature yang gagal dan memberi action recovery yang sesuai",
      explanation:
        "Fallback yang baik memberi konteks, mengurangi kebingungan, dan menawarkan langkah yang memang bisa membantu user pulih.",
    },
  ],
};

const resiliencePracticePreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React Resilience</h1>
  <p>Fokus di tab TSX, cek struktur, lalu jalankan preview untuk mencoba fallback dan recovery UI.</p>
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

export const buildFriendlyErrorFallbackChallenge: CodingChallenge = {
  id: "build-friendly-error-fallback",
  lessonId: "react-fallback-ui",
  title: "Buat fallback UI yang membantu",
  description:
    "Latihan membuat fallback untuk preview profil dengan pesan spesifik dan action reset yang dapat dicoba user.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat FeatureFallback yang menerima onReset.",
    "Gunakan role alert untuk fallback error penting.",
    "Tampilkan feature yang gagal, dampak singkat, dan button Muat ulang preview.",
    "Gunakan hasError untuk berganti antara fallback dan preview aman.",
  ],
  starterCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { useState } from "react";

function ProfilePreview() {
  return <p>Preview profil siap ditampilkan.</p>;
}

function ProfileArea() {
  const [hasError, setHasError] = useState(true);

  return (
    <section>
      <h2>Profil learner</h2>
      {hasError ? <p>Terjadi masalah.</p> : <ProfilePreview />}
      <button type="button" onClick={() => setHasError(false)}>
        Coba lagi
      </button>
    </section>
  );
}`,
  },
  solutionCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { useState } from "react";

function FeatureFallback({ onReset }: { onReset: () => void }) {
  return (
    <section role="alert">
      <h2>Preview profil belum dapat ditampilkan</h2>
      <p>Perubahan lain di halaman tetap aman. Coba muat ulang preview ini.</p>
      <button type="button" onClick={onReset}>
        Muat ulang preview
      </button>
    </section>
  );
}

function ProfilePreview() {
  return <p>Preview profil siap ditampilkan.</p>;
}

function ProfileArea() {
  const [hasError, setHasError] = useState(true);

  if (hasError) {
    return <FeatureFallback onReset={() => setHasError(false)} />;
  }

  return <ProfilePreview />;
}`,
  },
  checklist: [
    "FeatureFallback menerima onReset.",
    "Fallback memakai role alert.",
    "Copy menyebut Preview profil dan action muat ulang.",
    "ProfileArea merender fallback atau preview sesuai hasError.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ProfileArea",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "fallback-component", label: "FeatureFallback dibuat.", type: "contains", target: "function FeatureFallback({ onReset }: { onReset: () => void })", valueIncludes: "function FeatureFallback({ onReset }: { onReset: () => void })" },
      { id: "fallback-alert", label: "Fallback memakai role alert.", type: "contains", target: 'role="alert"', valueIncludes: 'role="alert"' },
      { id: "fallback-heading", label: "Fallback menyebut preview profil.", type: "contains", target: "Preview profil belum dapat ditampilkan", valueIncludes: "Preview profil belum dapat ditampilkan" },
      { id: "fallback-copy", label: "Fallback menjelaskan dampak dan recovery.", type: "contains", target: "Perubahan lain di halaman tetap aman. Coba muat ulang preview ini.", valueIncludes: "Perubahan lain di halaman tetap aman. Coba muat ulang preview ini." },
      { id: "reset-action", label: "Button memanggil onReset.", type: "contains", target: "onClick={onReset}", valueIncludes: "onClick={onReset}" },
      { id: "error-branch", label: "hasError merender FeatureFallback.", type: "contains", target: "return <FeatureFallback onReset={() => setHasError(false)} />;", valueIncludes: "return <FeatureFallback onReset={() => setHasError(false)} />;" },
      { id: "safe-preview", label: "State aman merender ProfilePreview.", type: "contains", target: "return <ProfilePreview />;", valueIncludes: "return <ProfilePreview />;" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Fallback menjelaskan area yang gagal dan memberi reset action. Jalankan preview lalu klik Muat ulang preview untuk melihat ProfilePreview kembali tampil.",
    lines: [
      "Fallback memakai role alert untuk error penting.",
      "Copy menjelaskan bahwa preview saja yang bermasalah.",
      "Reset action membawa UI ke preview yang aman.",
    ],
  },
  skillTags: ["React", "Fallback UI", "Error Recovery"],
};

export const lazyLoadProfileActivityPanelChallenge: CodingChallenge = {
  id: "lazy-load-profile-activity-panel",
  lessonId: "react-suspense-basics",
  title: "Lazy-load activity panel dengan Suspense",
  description:
    "Latihan menulis struktur React.lazy dan Suspense untuk panel aktivitas yang tidak kritis saat halaman pertama dibuka.",
  instructions: [
    "Fokus di tab TSX.",
    "Import lazy dan Suspense dari react.",
    "Buat ActivityPanel dengan lazy dynamic import.",
    "Bungkus ActivityPanel di dalam Suspense.",
    "Tambahkan fallback yang menjelaskan aktivitas sedang dimuat.",
  ],
  starterCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { Suspense } from "react";

function ActivityPanel() {
  return <p>Aktivitas learner.</p>;
}

function ProfilePage() {
  return (
    <section>
      <h1>Profil learner</h1>
      <ActivityPanel />
    </section>
  );
}`,
  },
  solutionCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { lazy, Suspense } from "react";

const ActivityPanel = lazy(() => import("./ActivityPanel"));

function ProfilePage() {
  return (
    <section>
      <h1>Profil learner</h1>
      <Suspense fallback={<p role="status">Memuat aktivitas...</p>}>
        <ActivityPanel />
      </Suspense>
    </section>
  );
}`,
  },
  checklist: [
    "lazy dan Suspense diimport dari react.",
    "ActivityPanel dibuat lewat lazy dynamic import.",
    "ActivityPanel berada di dalam Suspense.",
    "Fallback menjelaskan aktivitas sedang dimuat.",
  ],
  reactPractice: {
    mode: "structure",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "suspense-import", label: "lazy dan Suspense diimport.", type: "contains", target: 'import { lazy, Suspense } from "react";', valueIncludes: 'import { lazy, Suspense } from "react";' },
      { id: "lazy-component", label: "ActivityPanel memakai lazy dynamic import.", type: "contains", target: 'const ActivityPanel = lazy(() => import("./ActivityPanel"));', valueIncludes: 'const ActivityPanel = lazy(() => import("./ActivityPanel"));' },
      { id: "suspense-wrapper", label: "ActivityPanel dibungkus Suspense.", type: "contains", target: '<Suspense fallback={<p role="status">Memuat aktivitas...</p>}>', valueIncludes: '<Suspense fallback={<p role="status">Memuat aktivitas...</p>}>' },
      { id: "lazy-child", label: "ActivityPanel dirender di dalam Suspense.", type: "contains", target: "<ActivityPanel />", valueIncludes: "<ActivityPanel />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis memeriksa struktur lazy dan Suspense. Dynamic import belum dijalankan di preview practice; gunakan Local React App untuk mencoba file ActivityPanel yang nyata.",
    lines: [
      "ActivityPanel dibuat lewat React.lazy dan dynamic import.",
      "Suspense menampilkan fallback saat module belum siap.",
      "Fallback menjelaskan aktivitas sedang dimuat.",
    ],
  },
  skillTags: ["React", "Suspense", "React.lazy", "Code Splitting"],
};

export const addProfileRecoveryResetChallenge: CodingChallenge = {
  id: "add-profile-recovery-reset",
  lessonId: "react-retry-recovery-patterns",
  title: "Tambahkan reset recovery untuk ProfilePreview",
  description:
    "Latihan memulihkan feature dari fallback ke preview aman dengan reset action dan key baru.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat FeatureFallback yang menerima onReset.",
    "Simpan hasError dan resetKey di ProfileRecovery.",
    "Buat handleReset untuk menghapus error dan menaikkan resetKey.",
    "Render ProfilePreview dengan key resetKey setelah recovery.",
  ],
  starterCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { useState } from "react";

function ProfilePreview() {
  return <p>Preview profil siap ditampilkan.</p>;
}

function ProfileRecovery() {
  const [hasError, setHasError] = useState(true);

  return (
    <section>
      {hasError ? <p>Preview profil gagal.</p> : <ProfilePreview />}
      <button type="button" onClick={() => setHasError(false)}>
        Muat ulang preview
      </button>
    </section>
  );
}`,
  },
  solutionCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { useState } from "react";

function FeatureFallback({ onReset }: { onReset: () => void }) {
  return (
    <section role="alert">
      <h2>Preview profil belum dapat ditampilkan</h2>
      <button type="button" onClick={onReset}>
        Muat ulang preview
      </button>
    </section>
  );
}

function ProfilePreview() {
  return <p>Preview profil siap ditampilkan.</p>;
}

function ProfileRecovery() {
  const [hasError, setHasError] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  function handleReset() {
    setHasError(false);
    setResetKey((current) => current + 1);
  }

  if (hasError) {
    return <FeatureFallback onReset={handleReset} />;
  }

  return (
    <section>
      <ProfilePreview key={resetKey} />
      <button type="button" onClick={() => setHasError(true)}>
        Simulasikan error lagi
      </button>
    </section>
  );
}`,
  },
  checklist: [
    "ProfileRecovery menyimpan hasError dan resetKey.",
    "handleReset menghapus error dan menaikkan resetKey.",
    "Fallback menerima handleReset sebagai onReset.",
    "ProfilePreview memakai key resetKey setelah recovery.",
    "Preview aman dapat disimulasikan gagal lagi untuk menguji recovery.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ProfileRecovery",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "fallback-component", label: "FeatureFallback dibuat.", type: "contains", target: "function FeatureFallback({ onReset }: { onReset: () => void })", valueIncludes: "function FeatureFallback({ onReset }: { onReset: () => void })" },
      { id: "error-state", label: "hasError state dibuat.", type: "contains", target: "const [hasError, setHasError] = useState(true);", valueIncludes: "const [hasError, setHasError] = useState(true);" },
      { id: "reset-key", label: "resetKey state dibuat.", type: "contains", target: "const [resetKey, setResetKey] = useState(0);", valueIncludes: "const [resetKey, setResetKey] = useState(0);" },
      { id: "reset-handler", label: "handleReset dibuat.", type: "contains", target: "function handleReset()", valueIncludes: "function handleReset()" },
      { id: "clear-error", label: "Reset menghapus error.", type: "contains", target: "setHasError(false);", valueIncludes: "setHasError(false);" },
      { id: "increment-key", label: "Reset menaikkan resetKey.", type: "contains", target: "setResetKey((current) => current + 1);", valueIncludes: "setResetKey((current) => current + 1);" },
      { id: "fallback-reset", label: "Fallback menerima handleReset.", type: "contains", target: "<FeatureFallback onReset={handleReset} />", valueIncludes: "<FeatureFallback onReset={handleReset} />" },
      { id: "preview-key", label: "ProfilePreview memakai resetKey.", type: "contains", target: "<ProfilePreview key={resetKey} />", valueIncludes: "<ProfilePreview key={resetKey} />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "ProfileRecovery mulai dari fallback lalu membuat preview aman setelah reset. Jalankan preview, pulihkan feature, kemudian simulasikan error lagi untuk mencoba recovery kedua kali.",
    lines: [
      "Fallback memberi action Muat ulang preview.",
      "handleReset menghapus error dan membuat reset key baru.",
      "ProfilePreview dirender dengan instance baru setelah recovery.",
    ],
  },
  skillTags: ["React", "Recovery", "Reset", "Resilience"],
};

export const buildResilientPreviewCheckpointChallenge: CodingChallenge = {
  id: "build-resilient-preview-checkpoint",
  lessonId: "react-resilience-suspense-basics-assessment",
  title: "Bangun resilient preview checkpoint",
  description:
    "Checkpoint membangun fallback dan reset recovery untuk Preview Profil agar feature dapat kembali ke state aman.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat FeatureFallback dengan role alert dan onReset.",
    "Buat ProfilePreview yang menerima resetKey.",
    "Simpan hasError serta resetKey di ResilientPreview.",
    "Buat handleReset yang memulihkan preview, lalu sediakan simulasi error ulang.",
  ],
  starterCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { useState } from "react";

function ResilientPreview() {
  const [hasError, setHasError] = useState(true);

  return (
    <section>
      <h2>Preview profil</h2>
      <p>Status: {hasError ? "gagal" : "siap"}</p>
      <button type="button" onClick={() => setHasError(false)}>
        Coba pulihkan
      </button>
    </section>
  );
}`,
  },
  solutionCode: {
    ...resiliencePracticePreviewCode,
    tsx: `import { useState } from "react";

function FeatureFallback({ onReset }: { onReset: () => void }) {
  return (
    <section role="alert">
      <h2>Preview profil belum dapat ditampilkan</h2>
      <p>Kamu masih dapat melanjutkan bagian lain. Coba muat ulang preview ini.</p>
      <button type="button" onClick={onReset}>
        Muat ulang preview
      </button>
    </section>
  );
}

function ProfilePreview({ resetKey }: { resetKey: number }) {
  return <p>Preview profil siap. Reset ke-{resetKey}.</p>;
}

function ResilientPreview() {
  const [hasError, setHasError] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  function handleReset() {
    setHasError(false);
    setResetKey((current) => current + 1);
  }

  if (hasError) {
    return <FeatureFallback onReset={handleReset} />;
  }

  return (
    <section>
      <ProfilePreview resetKey={resetKey} />
      <button type="button" onClick={() => setHasError(true)}>
        Simulasikan error lagi
      </button>
    </section>
  );
}`,
  },
  checklist: [
    "FeatureFallback menjelaskan preview yang gagal dan memberi reset action.",
    "Fallback memakai role alert.",
    "ResilientPreview menyimpan hasError dan resetKey.",
    "handleReset memulihkan UI dan menaikkan resetKey.",
    "ProfilePreview menerima resetKey setelah recovery.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "ResilientPreview",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "fallback-component", label: "FeatureFallback dibuat.", type: "contains", target: "function FeatureFallback({ onReset }: { onReset: () => void })", valueIncludes: "function FeatureFallback({ onReset }: { onReset: () => void })" },
      { id: "fallback-alert", label: "Fallback memakai role alert.", type: "contains", target: 'role="alert"', valueIncludes: 'role="alert"' },
      { id: "fallback-copy", label: "Fallback menjelaskan recovery preview.", type: "contains", target: "Kamu masih dapat melanjutkan bagian lain. Coba muat ulang preview ini.", valueIncludes: "Kamu masih dapat melanjutkan bagian lain. Coba muat ulang preview ini." },
      { id: "preview-props", label: "ProfilePreview menerima resetKey.", type: "contains", target: "function ProfilePreview({ resetKey }: { resetKey: number })", valueIncludes: "function ProfilePreview({ resetKey }: { resetKey: number })" },
      { id: "error-state", label: "hasError state dibuat.", type: "contains", target: "const [hasError, setHasError] = useState(true);", valueIncludes: "const [hasError, setHasError] = useState(true);" },
      { id: "reset-key", label: "resetKey state dibuat.", type: "contains", target: "const [resetKey, setResetKey] = useState(0);", valueIncludes: "const [resetKey, setResetKey] = useState(0);" },
      { id: "reset-handler", label: "handleReset dibuat.", type: "contains", target: "function handleReset()", valueIncludes: "function handleReset()" },
      { id: "clear-error", label: "Reset menghapus error.", type: "contains", target: "setHasError(false);", valueIncludes: "setHasError(false);" },
      { id: "increment-key", label: "Reset menaikkan resetKey.", type: "contains", target: "setResetKey((current) => current + 1);", valueIncludes: "setResetKey((current) => current + 1);" },
      { id: "fallback-branch", label: "hasError merender fallback.", type: "contains", target: "return <FeatureFallback onReset={handleReset} />;", valueIncludes: "return <FeatureFallback onReset={handleReset} />;" },
      { id: "preview-branch", label: "State aman merender ProfilePreview.", type: "contains", target: "<ProfilePreview resetKey={resetKey} />", valueIncludes: "<ProfilePreview resetKey={resetKey} />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "ResilientPreview mengganti fallback dengan preview aman setelah reset. Jalankan preview, klik Muat ulang preview, lalu simulasikan error lagi untuk memastikan recovery tetap tersedia.",
    lines: [
      "Fallback menyebut area yang gagal dan memberi action jelas.",
      "Reset menghapus error serta membuat reset key baru.",
      "Preview dapat dipulihkan dan diuji lagi tanpa menjatuhkan halaman lain.",
    ],
  },
  skillTags: ["React", "Resilience", "Fallback UI", "Recovery", "Assessment"],
};
