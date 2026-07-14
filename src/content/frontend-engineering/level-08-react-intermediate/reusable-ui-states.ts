import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const reusableUiStatesModule: Module = {
  id: "react-reusable-ui-states",
  trackId: "frontend-engineering",
  title: "Reusable UI States",
  slug: "react-reusable-ui-states",
  description:
    "Membangun loading, error, empty, success, dan retry UI yang jelas agar React feature tetap membantu saat data belum siap atau gagal dimuat.",
  order: 27,
  lessonIds: [
    "react-loading-state",
    "react-error-state",
    "react-empty-state",
    "react-retry-pattern",
    "react-reusable-ui-states-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["React", "UI States", "Error Handling", "Retry", "Accessibility"],
};

export const reactLoadingStateLesson: Lesson = {
  id: "react-loading-state",
  trackId: "frontend-engineering",
  moduleId: "react-reusable-ui-states",
  title: "Loading State",
  slug: "react-loading-state",
  description:
    "Menampilkan status loading yang jujur dan reusable saat content belum siap ditampilkan.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan tujuan loading state",
    "Membuat LoadingMessage reusable dengan status accessibility dasar",
    "Membedakan loading dari empty dan error state",
  ],
  skillTags: ["React", "Loading State", "Accessibility", "Conditional Rendering"],
  blocks: [
    {
      id: "react-loading-state-intro",
      type: "text",
      title: "Loading memberi tahu bahwa proses masih berlangsung",
      content:
        "Saat content belum siap, UI tidak boleh terlihat seperti halaman rusak atau daftar yang benar-benar kosong. Loading state memberi tahu bahwa aplikasi sedang menyiapkan sesuatu dan user tidak perlu menebak apakah action mereka berhasil.\n\nLoading bukan data kosong dan bukan error. Ia adalah keadaan sementara sebelum content, error, atau empty result diketahui. Pesan singkat yang spesifik biasanya lebih berguna daripada spinner tanpa konteks.",
    },
    {
      id: "react-loading-state-example",
      type: "code-example",
      title: "LoadingMessage yang bisa dipakai ulang",
      language: "tsx",
      code: `function LoadingMessage({ label }: { label: string }) {
  return (
    <p role="status" aria-live="polite">
      {label}
    </p>
  );
}

function LessonPanel({ isLoading }: { isLoading: boolean }) {
  if (isLoading) {
    return <LoadingMessage label="Memuat daftar lesson..." />;
  }

  return <p>Lesson siap ditampilkan.</p>;
}`,
      explanation:
        "`role=\"status\"` dan `aria-live=\"polite\"` membantu teknologi bantu mengenali perubahan status tanpa memotong fokus user. Component menerima label agar pesan tetap sesuai konteks feature.",
    },
    {
      id: "react-loading-state-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Jelaskan apa yang sedang disiapkan",
      content:
        "Pilih pesan seperti “Memuat daftar lesson...” atau “Menyiapkan pengaturan...” daripada hanya “Loading”. Jangan tampilkan loading tanpa batas untuk error yang sudah diketahui. Saat proses gagal, pindahkan UI ke error state dengan informasi dan tindakan berikutnya.",
    },
    {
      id: "react-loading-state-coding-practice",
      type: "coding-practice",
      challengeId: "build-react-loading-message",
    },
    {
      id: "react-loading-state-quick-check",
      type: "quick-check",
      question: "Kapan loading state paling tepat ditampilkan?",
      options: [
        "Saat aplikasi masih menyiapkan data atau content",
        "Saat data sudah dipastikan kosong",
        "Saat request sudah gagal dan tidak akan dicoba lagi",
        "Saat user berhasil menyimpan form",
      ],
      correctAnswer: "Saat aplikasi masih menyiapkan data atau content",
      explanation:
        "Loading adalah keadaan sementara selama proses berjalan. Empty, error, dan success membutuhkan UI yang berbeda.",
    },
    {
      id: "react-loading-state-summary",
      type: "summary",
      points: [
        "Loading state menjelaskan bahwa proses masih berlangsung.",
        "Pesan loading sebaiknya menyebut content atau action yang sedang disiapkan.",
        "Loading berbeda dari empty result dan error.",
        "role status dan aria-live polite memberi feedback accessibility dasar.",
        "Berikutnya, kamu akan membuat error state yang membantu user pulih dari kegagalan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-loading-state-intro",
      "react-loading-state-example",
      "react-loading-state-decision-rule",
      "react-loading-state-coding-practice",
      "react-loading-state-quick-check",
      "react-loading-state-summary",
    ],
  },
};

export const reactErrorStateLesson: Lesson = {
  id: "react-error-state",
  trackId: "frontend-engineering",
  moduleId: "react-reusable-ui-states",
  title: "Error State",
  slug: "react-error-state",
  description:
    "Menampilkan kegagalan dengan pesan yang dapat dipahami, recovery hint, dan status accessibility dasar.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan error state dari loading state",
    "Membuat ErrorMessage dengan pesan dan tindakan recovery",
    "Memakai role alert secara tepat untuk error penting",
  ],
  skillTags: ["React", "Error State", "Accessibility", "Recovery"],
  blocks: [
    {
      id: "react-error-state-intro",
      type: "text",
      title: "Error yang baik tidak membuat user buntu",
      content:
        "Error state memberi tahu bahwa proses selesai tetapi tidak berhasil. UI yang baik tidak hanya menulis “Terjadi kesalahan”. Ia menjelaskan area yang gagal, menjaga pesan tetap tenang, dan memberi tindakan yang masuk akal seperti mencoba lagi atau memeriksa koneksi.\n\nJangan menyamakan error dengan empty state. Empty berarti proses berhasil tetapi tidak menemukan data. Error berarti aplikasi belum bisa memastikan atau menampilkan hasil yang diminta.",
    },
    {
      id: "react-error-state-example",
      type: "code-example",
      title: "ErrorMessage dengan recovery hint",
      language: "tsx",
      code: `function ErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <section role="alert">
      <h2>Daftar lesson belum dapat dimuat</h2>
      <p>Periksa koneksi kamu, lalu coba lagi.</p>
      <button type="button" onClick={onRetry}>
        Coba lagi
      </button>
    </section>
  );
}`,
      explanation:
        "`role=\"alert\"` cocok untuk error penting yang perlu segera diketahui. Headline menjelaskan area yang gagal, sementara paragraf dan button memberi jalur recovery yang konkret.",
    },
    {
      id: "react-error-state-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan lempar detail teknis mentah ke user",
      content:
        "User tidak perlu membaca stack trace, status object panjang, atau pesan internal server untuk mengambil tindakan. Simpan detail teknis untuk logging atau debugging. Di UI, jelaskan dampak, langkah yang bisa dicoba, dan kapan user perlu kembali lagi nanti.",
    },
    {
      id: "react-error-state-coding-practice",
      type: "coding-practice",
      challengeId: "render-react-error-message",
    },
    {
      id: "react-error-state-summary",
      type: "summary",
      points: [
        "Error state berarti proses tidak berhasil, bukan data kosong.",
        "Pesan error perlu menyebut apa yang gagal dan tindakan yang bisa dilakukan.",
        "role alert membantu error penting disampaikan ke teknologi bantu.",
        "Jangan menampilkan detail debugging mentah sebagai copy user-facing.",
        "Berikutnya, kamu akan menangani empty state saat proses berhasil tetapi tidak ada data.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-error-state-intro",
      "react-error-state-example",
      "react-error-state-common-mistake",
      "react-error-state-coding-practice",
      "react-error-state-summary",
    ],
  },
};

export const reactEmptyStateLesson: Lesson = {
  id: "react-empty-state",
  trackId: "frontend-engineering",
  moduleId: "react-reusable-ui-states",
  title: "Empty State",
  slug: "react-empty-state",
  description:
    "Membuat empty state yang menjelaskan mengapa list kosong dan memberi langkah berikutnya yang relevan.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan empty state dari loading dan error",
    "Menulis empty message yang spesifik terhadap konteks",
    "Memberi next action saat user belum memiliki data",
  ],
  skillTags: ["React", "Empty State", "UX", "Conditional Rendering"],
  blocks: [
    {
      id: "react-empty-state-intro",
      type: "text",
      title: "List kosong tetap membutuhkan desain",
      content:
        "Empty state muncul ketika proses berhasil, tetapi belum ada data untuk ditampilkan. Ini bukan halaman tanpa isi. User perlu tahu apa yang kosong, apakah kondisi itu normal, dan apa yang dapat dilakukan berikutnya.\n\nUntuk daftar lesson tersimpan, empty state bisa menjelaskan bahwa belum ada lesson yang disimpan lalu menawarkan action untuk menambahkan contoh atau kembali memilih lesson. Hindari pesan generik yang tidak memberi arah seperti “Tidak ada data”.",
    },
    {
      id: "react-empty-state-example",
      type: "code-example",
      title: "EmptyState dengan action yang relevan",
      language: "tsx",
      code: `function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <section>
      <h2>Belum ada lesson tersimpan</h2>
      <p>Simpan satu lesson untuk mulai membuat daftar belajar pribadi.</p>
      <button type="button" onClick={onCreate}>
        Tambahkan contoh lesson
      </button>
    </section>
  );
}`,
      explanation:
        "Judul menyebut apa yang kosong. Paragraf menjelaskan kondisi tanpa menyalahkan user. Button memberi action yang langsung membantu list berpindah ke content state.",
    },
    {
      id: "react-empty-state-checklist",
      type: "callout",
      variant: "important",
      title: "Checklist empty state yang membantu",
      content:
        "Sebutkan area yang kosong. Jelaskan apakah kondisi itu normal. Beri satu action yang relevan bila user memang bisa melanjutkan. Jangan memakai CTA yang tidak berhubungan, dan jangan menampilkan empty state ketika aplikasi sebenarnya masih loading atau mengalami error.",
    },
    {
      id: "react-empty-state-coding-practice",
      type: "coding-practice",
      challengeId: "build-helpful-empty-state",
    },
    {
      id: "react-empty-state-summary",
      type: "summary",
      points: [
        "Empty state muncul setelah proses berhasil tetapi tidak ada data.",
        "Pesan perlu menyebut apa yang kosong dan mengapa user melihatnya.",
        "Action empty state harus relevan dengan langkah berikutnya user.",
        "Empty bukan loading dan bukan error.",
        "Berikutnya, kamu akan menghubungkan error state dengan retry flow yang jujur.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-empty-state-intro",
      "react-empty-state-example",
      "react-empty-state-checklist",
      "react-empty-state-coding-practice",
      "react-empty-state-summary",
    ],
  },
};

export const reactRetryPatternLesson: Lesson = {
  id: "react-retry-pattern",
  trackId: "frontend-engineering",
  moduleId: "react-reusable-ui-states",
  title: "Retry Pattern",
  slug: "react-retry-pattern",
  description:
    "Menambahkan retry flow yang mengembalikan error UI ke loading state sebelum menampilkan hasil baru.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan retry sebagai flow state, bukan hanya button",
    "Memindahkan UI dari error ke loading lalu success",
    "Membuat Retry button yang memanggil action yang jelas",
  ],
  skillTags: ["React", "Retry", "Async UI", "Error Recovery"],
  blocks: [
    {
      id: "react-retry-pattern-intro",
      type: "text",
      title: "Retry harus membuat UI jujur selama percobaan baru berjalan",
      content:
        "Button “Coba lagi” bukan sekadar cara untuk menyembunyikan error. Saat user menekan retry, UI perlu kembali memberi status loading. Setelah percobaan selesai, barulah UI pindah ke success, empty, atau error lagi. Flow ini membantu user memahami bahwa aplikasi benar-benar mencoba proses baru.\n\nDi practice ini, kita mensimulasikan request dengan timer kecil. Fokusnya bukan membuat data-fetching production, tetapi membaca urutan state yang dialami user: error, loading, lalu success.",
    },
    {
      id: "react-retry-pattern-example",
      type: "code-example",
      title: "Retry dari error ke loading lalu success",
      language: "tsx",
      code: `function handleRetry() {
  setStatus("loading");

  window.setTimeout(() => {
    setStatus("success");
  }, 600);
}

if (status === "loading") {
  return <LoadingMessage label="Memuat ulang lesson..." />;
}

if (status === "error") {
  return <ErrorMessage onRetry={handleRetry} />;
}`,
      explanation:
        "Setelah retry dipilih, error lama tidak lagi ditampilkan sebagai seolah proses masih gagal. UI berpindah ke loading sampai hasil percobaan baru tersedia.",
    },
    {
      id: "react-retry-pattern-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Gunakan retry saat user memang bisa mencoba ulang",
      content:
        "Retry cocok untuk kegagalan sementara, misalnya koneksi atau request yang belum berhasil. Jangan menawarkan retry untuk masalah yang butuh action lain, seperti akses ditolak atau form yang belum valid. Copy button harus menjelaskan action, misalnya “Coba lagi” atau “Muat ulang lesson”.",
    },
    {
      id: "react-retry-pattern-coding-practice",
      type: "coding-practice",
      challengeId: "add-retry-to-lesson-feed",
    },
    {
      id: "react-retry-pattern-summary",
      points: [
        "Retry adalah perubahan flow dari error ke loading lalu hasil baru.",
        "Loading perlu terlihat kembali selama percobaan ulang berjalan.",
        "Retry hanya ditawarkan saat user memang dapat mencoba action yang sama lagi.",
        "Error message dan retry action sebaiknya dipisah menjadi component yang bisa dipakai ulang.",
        "Berikutnya, Uji Kompetensi menggabungkan seluruh UI state dalam satu feature kecil.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-retry-pattern-intro",
      "react-retry-pattern-example",
      "react-retry-pattern-decision-rule",
      "react-retry-pattern-coding-practice",
      "react-retry-pattern-summary",
    ],
  },
};

export const reactReusableUiStatesAssessmentLesson: Lesson = {
  id: "react-reusable-ui-states-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-reusable-ui-states",
  title: "Uji Kompetensi Reusable UI States",
  slug: "react-reusable-ui-states-assessment",
  description:
    "Checkpoint kesiapan membangun loading, error, empty, success, dan retry UI yang jelas dalam satu React feature kecil.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 90,
  objectives: [
    "Membedakan seluruh state UI utama pada feature data",
    "Membuat component loading, error, dan empty yang reusable",
    "Menerapkan retry flow dan menjelaskan dampaknya bagi user",
  ],
  skillTags: ["React", "UI States", "Accessibility", "Assessment"],
  blocks: [
    {
      id: "react-reusable-ui-states-assessment-recap",
      type: "text",
      title: "Checkpoint: user tetap tahu apa yang terjadi",
      content:
        "Uji Kompetensi ini menggabungkan state yang paling sering muncul di feature berbasis data: loading, error, empty, dan success. Kamu akan memakai component kecil untuk menyampaikan tiap kondisi, lalu memberi retry action pada error state.\n\nFocus checkpoint ini adalah pengalaman user, bukan library data. Gunakan conditional rendering dan state lokal yang jelas. Kamu belum perlu React Query, Suspense, caching, toast system, atau optimistic update.",
    },
    {
      id: "react-reusable-ui-states-assessment-quiz",
      type: "quiz",
      quizId: "react-reusable-ui-states-assessment-quiz",
    },
    {
      id: "react-reusable-ui-states-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-reusable-ui-states-checkpoint",
    },
    {
      id: "react-reusable-ui-states-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Jelaskan pengalaman user pada feature daftar lesson untuk empat kondisi berikut:\n- Loading\n- Error\n- Empty\n- Success\n\nLalu jelaskan apa yang terjadi setelah user menekan “Coba lagi” dari error state. Sebutkan satu pilihan accessibility dasar yang kamu gunakan untuk status atau error message.",
      placeholder:
        "Loading: user melihat bahwa daftar lesson sedang disiapkan, bukan daftar kosong.\nError: user tahu daftar belum bisa dimuat dan mendapat button Coba lagi.\nEmpty: request berhasil tetapi belum ada lesson tersimpan, jadi user mendapat action Tambahkan contoh lesson.\nSuccess: daftar lesson tampil.\nRetry: UI kembali ke loading lalu menampilkan success bila percobaan berhasil.\nAccessibility: loading memakai role status dan aria-live polite, sedangkan error penting memakai role alert.",
      minimumCharacters: 360,
      checklist: [
        "Membedakan loading, error, empty, dan success dengan tepat.",
        "Menyebut tindakan user yang tersedia di error atau empty state.",
        "Menjelaskan retry sebagai error ke loading lalu hasil baru.",
        "Menyebut role status, aria-live, atau role alert dengan alasan yang relevan.",
      ],
      modelAnswer:
        "Saat loading, user melihat bahwa daftar lesson sedang disiapkan sehingga list kosong tidak terlihat seperti bug. Saat error, UI menjelaskan daftar belum dapat dimuat dan memberi button Coba lagi. Saat empty, proses sudah berhasil tetapi belum ada lesson tersimpan, sehingga user mendapat action untuk menambahkan contoh. Saat success, daftar lesson tampil seperti biasa. Ketika user menekan Coba lagi dari error, UI pindah ke loading selama percobaan baru berjalan lalu masuk ke success jika berhasil. LoadingMessage memakai role status dan aria-live polite; ErrorMessage memakai role alert karena kegagalan penting perlu diketahui.",
    },
    {
      id: "react-reusable-ui-states-assessment-docs",
      type: "documentation-bridge",
      title: "Perkuat UI state lewat docs resmi",
      description:
        "Baca referensi ini untuk menguji keputusan conditional rendering, struktur state, dan feedback accessibility dasar pada feature kecilmu.",
      links: [
        {
          source: "React",
          title: "Conditional Rendering",
          url: "https://react.dev/learn/conditional-rendering",
          focus: [
            "memilih branch UI berdasarkan state",
            "menghindari tampilan state yang saling bertabrakan",
            "membaca conditional rendering secara bertahap",
          ],
          ignoreForNow: ["pola rendering yang sangat abstrak"],
        },
        {
          source: "React",
          title: "State: A Component's Memory",
          url: "https://react.dev/learn/state-a-components-memory",
          focus: [
            "state sebagai memory UI",
            "event yang mengubah state",
            "mengapa setiap state UI membutuhkan value yang jelas",
          ],
          ignoreForNow: ["optimasi state tingkat lanjut"],
        },
        {
          source: "React",
          title: "Choosing the State Structure",
          url: "https://react.dev/learn/choosing-the-state-structure",
          focus: [
            "memilih status UI yang cukup jelas",
            "menghindari state yang bertentangan",
            "menjaga satu sumber kebenaran untuk feature kecil",
          ],
          ignoreForNow: ["arsitektur state application skala besar"],
        },
        {
          source: "MDN Web Docs",
          title: "ARIA: aria-live attribute",
          url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live",
          focus: [
            "perbedaan polite dan assertive",
            "status yang berubah di halaman",
            "menghindari pengumuman yang berlebihan",
          ],
          ignoreForNow: ["implementasi live region yang kompleks"],
        },
      ],
      followUpAction:
        "Di Local React App kamu, pilih satu daftar atau panel. Tulis empat branch yang akan ditampilkan untuk loading, error, empty, dan success. Tambahkan satu retry action hanya untuk kegagalan yang memang bisa dicoba ulang.",
    },
    {
      id: "react-reusable-ui-states-assessment-summary",
      type: "summary",
      points: [
        "Loading menjelaskan proses masih berjalan, sedangkan error menjelaskan proses gagal.",
        "Empty state memberi arah saat proses berhasil tetapi tidak ada data.",
        "Success menampilkan content setelah state lain tidak lagi aktif.",
        "Retry memindahkan UI dari error ke loading lalu hasil baru.",
        "Kamu siap masuk ke React Advanced dengan dasar UI yang lebih resilient dan mudah dipahami user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-reusable-ui-states-assessment-recap",
      "react-reusable-ui-states-assessment-quiz",
      "react-reusable-ui-states-assessment-coding-practice",
      "react-reusable-ui-states-assessment-writing-practice",
      "react-reusable-ui-states-assessment-docs",
      "react-reusable-ui-states-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactReusableUiStatesAssessmentQuiz: Quiz = {
  id: "react-reusable-ui-states-assessment-quiz",
  lessonId: "react-reusable-ui-states-assessment",
  title: "Uji Kompetensi Reusable UI States",
  passingScore: 70,
  questions: [
    {
      id: "react-reusable-ui-states-q1",
      type: "multiple-choice",
      question: "Apa yang paling membedakan empty state dari error state?",
      options: [
        "Empty berarti proses berhasil tetapi tidak ada data; error berarti proses gagal",
        "Empty selalu membutuhkan retry; error tidak boleh punya action",
        "Empty hanya dipakai di mobile; error hanya dipakai di desktop",
        "Keduanya adalah nama lain untuk loading state",
      ],
      correctAnswer:
        "Empty berarti proses berhasil tetapi tidak ada data; error berarti proses gagal",
      explanation:
        "Empty dan error membutuhkan copy serta next action yang berbeda karena kondisi yang dialami user juga berbeda.",
    },
    {
      id: "react-reusable-ui-states-q2",
      type: "multiple-choice",
      question: "Setelah user menekan retry dari error state, UI sebaiknya...",
      options: [
        "Masuk ke loading selama percobaan baru berjalan",
        "Tetap menampilkan error tanpa perubahan",
        "Langsung menampilkan empty state tanpa proses",
        "Menyembunyikan seluruh feature",
      ],
      correctAnswer: "Masuk ke loading selama percobaan baru berjalan",
      explanation:
        "Retry memulai percobaan baru. Loading membuat user tahu action tersebut sedang diproses sebelum hasil baru tersedia.",
    },
    {
      id: "react-reusable-ui-states-q3",
      type: "true-false",
      question:
        "Pesan “Memuat daftar lesson...” lebih informatif daripada hanya menampilkan area kosong tanpa status.",
      correctAnswer: true,
      explanation:
        "Pesan spesifik menjelaskan apa yang sedang terjadi sehingga user tidak mengira content kosong atau aplikasi berhenti bekerja.",
    },
    {
      id: "react-reusable-ui-states-q4",
      type: "multiple-choice",
      question: "Kapan role alert paling tepat dipakai?",
      options: [
        "Untuk error penting yang perlu segera diketahui user",
        "Untuk setiap teks biasa di halaman",
        "Untuk list content yang berhasil dimuat",
        "Untuk label input yang selalu terlihat",
      ],
      correctAnswer: "Untuk error penting yang perlu segera diketahui user",
      explanation:
        "role alert memberi sinyal kuat untuk error penting. Jangan gunakan untuk semua pesan agar teknologi bantu tidak menerima pengumuman berlebihan.",
    },
    {
      id: "react-reusable-ui-states-q5",
      type: "multiple-choice",
      question: "Mengapa LoadingMessage, ErrorMessage, dan EmptyState layak diekstrak?",
      options: [
        "Agar pola UI state yang berulang punya copy dan behavior yang konsisten",
        "Agar setiap component harus memakai context",
        "Agar data tidak perlu lagi disimpan di state",
        "Agar retry tidak perlu punya action",
      ],
      correctAnswer:
        "Agar pola UI state yang berulang punya copy dan behavior yang konsisten",
      explanation:
        "Component kecil membantu menjaga pesan, accessibility, dan action UI state tetap konsisten saat dipakai di beberapa feature.",
    },
  ],
};

const reusableUiStatesPreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React UI States</h1>
  <p>Fokus di tab TSX, cek struktur, lalu jalankan preview untuk mencoba transisi state UI.</p>
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

export const buildReactLoadingMessageChallenge: CodingChallenge = {
  id: "build-react-loading-message",
  lessonId: "react-loading-state",
  title: "Buat LoadingMessage reusable",
  description:
    "Latihan membuat loading component dengan label spesifik dan status accessibility dasar.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat LoadingMessage yang menerima label string.",
    "Gunakan role status dan aria-live polite pada pesan loading.",
    "Tampilkan LoadingMessage saat isLoading bernilai true.",
    "Gunakan button untuk melihat transisi ke content siap.",
  ],
  starterCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

function LessonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section>
      <h2>Daftar lesson</h2>
      {isLoading ? <p>Memuat...</p> : <p>Lesson siap ditampilkan.</p>}
      <button type="button" onClick={() => setIsLoading(false)}>
        Selesaikan loading
      </button>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

function LoadingMessage({ label }: { label: string }) {
  return (
    <p role="status" aria-live="polite">
      {label}
    </p>
  );
}

function LessonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section>
      <h2>Daftar lesson</h2>
      {isLoading ? <LoadingMessage label="Memuat daftar lesson..." /> : <p>Lesson siap ditampilkan.</p>}
      <button type="button" onClick={() => setIsLoading(false)}>
        Selesaikan loading
      </button>
    </section>
  );
}`,
  },
  checklist: [
    "LoadingMessage menerima label string.",
    "Pesan memakai role status dan aria-live polite.",
    "LessonLoader menampilkan LoadingMessage saat loading.",
    "Button memperlihatkan transisi ke content siap.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonLoader",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "loading-component", label: "LoadingMessage dibuat.", type: "contains", target: "function LoadingMessage({ label }: { label: string })", valueIncludes: "function LoadingMessage({ label }: { label: string })" },
      { id: "status-role", label: "Pesan memakai role status.", type: "contains", target: 'role="status"', valueIncludes: 'role="status"' },
      { id: "live-region", label: "Pesan memakai aria-live polite.", type: "contains", target: 'aria-live="polite"', valueIncludes: 'aria-live="polite"' },
      { id: "loading-branch", label: "isLoading merender LoadingMessage.", type: "contains", target: '<LoadingMessage label="Memuat daftar lesson..." />', valueIncludes: '<LoadingMessage label="Memuat daftar lesson..." />' },
      { id: "loading-button", label: "Button menyelesaikan loading.", type: "contains", target: "onClick={() => setIsLoading(false)}", valueIncludes: "onClick={() => setIsLoading(false)}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "LoadingMessage memberi status spesifik sebelum content siap. Jalankan preview lalu gunakan button untuk melihat loading state berganti ke content.",
    lines: [
      "Pesan loading menyebut daftar lesson yang sedang disiapkan.",
      "role status dan aria-live polite memberi feedback accessibility dasar.",
      "Setelah loading selesai, content siap ditampilkan.",
    ],
  },
  skillTags: ["React", "Loading State", "Accessibility"],
};

export const renderReactErrorMessageChallenge: CodingChallenge = {
  id: "render-react-error-message",
  lessonId: "react-error-state",
  title: "Render ErrorMessage dengan recovery hint",
  description:
    "Latihan membuat error UI yang menjelaskan kegagalan dan memberi button recovery yang jelas.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat ErrorMessage yang menerima onRetry.",
    "Gunakan role alert pada error penting.",
    "Tampilkan heading, recovery hint, dan button Coba lagi.",
    "Hubungkan retry untuk menghilangkan error pada preview.",
  ],
  starterCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

function LessonRequest() {
  const [hasError, setHasError] = useState(true);

  return (
    <section>
      <h2>Daftar lesson</h2>
      {hasError ? <p>Terjadi kesalahan.</p> : <p>Daftar lesson berhasil dimuat.</p>}
      <button type="button" onClick={() => setHasError(false)}>
        Coba lagi
      </button>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

function ErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <section role="alert">
      <h2>Daftar lesson belum dapat dimuat</h2>
      <p>Periksa koneksi kamu, lalu coba lagi.</p>
      <button type="button" onClick={onRetry}>
        Coba lagi
      </button>
    </section>
  );
}

function LessonRequest() {
  const [hasError, setHasError] = useState(true);

  return (
    <section>
      <h2>Daftar lesson</h2>
      {hasError ? <ErrorMessage onRetry={() => setHasError(false)} /> : <p>Daftar lesson berhasil dimuat.</p>}
    </section>
  );
}`,
  },
  checklist: [
    "ErrorMessage menerima onRetry.",
    "Error penting memakai role alert.",
    "Pesan menyebut daftar lesson dan recovery hint.",
    "Button Coba lagi memanggil onRetry.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonRequest",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "error-component", label: "ErrorMessage dibuat.", type: "contains", target: "function ErrorMessage({ onRetry }: { onRetry: () => void })", valueIncludes: "function ErrorMessage({ onRetry }: { onRetry: () => void })" },
      { id: "alert-role", label: "Error memakai role alert.", type: "contains", target: 'role="alert"', valueIncludes: 'role="alert"' },
      { id: "error-heading", label: "Heading menjelaskan daftar lesson gagal.", type: "contains", target: "Daftar lesson belum dapat dimuat", valueIncludes: "Daftar lesson belum dapat dimuat" },
      { id: "recovery-hint", label: "Recovery hint ditampilkan.", type: "contains", target: "Periksa koneksi kamu, lalu coba lagi.", valueIncludes: "Periksa koneksi kamu, lalu coba lagi." },
      { id: "retry-button", label: "Button memanggil onRetry.", type: "contains", target: "onClick={onRetry}", valueIncludes: "onClick={onRetry}" },
      { id: "error-branch", label: "hasError merender ErrorMessage.", type: "contains", target: "<ErrorMessage onRetry={() => setHasError(false)} />", valueIncludes: "<ErrorMessage onRetry={() => setHasError(false)} />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "ErrorMessage menjelaskan area yang gagal dan memberi recovery action. Jalankan preview lalu klik Coba lagi untuk melihat error state menghilang.",
    lines: [
      "Error penting memakai role alert.",
      "User mendapat konteks kegagalan dan recovery hint.",
      "Button Coba lagi menjalankan onRetry.",
    ],
  },
  skillTags: ["React", "Error State", "Accessibility", "Recovery"],
};

export const buildHelpfulEmptyStateChallenge: CodingChallenge = {
  id: "build-helpful-empty-state",
  lessonId: "react-empty-state",
  title: "Buat EmptyState yang membantu",
  description:
    "Latihan membuat empty state dengan konteks daftar kosong dan action untuk memulai content pertama.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat EmptyState yang menerima onCreate.",
    "Tampilkan heading yang menyebut lesson tersimpan masih kosong.",
    "Tambahkan penjelasan singkat dan button untuk menambahkan contoh lesson.",
    "Render list setelah onCreate menambahkan sample lesson.",
  ],
  starterCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

type Lesson = {
  id: string;
  title: string;
};

const sampleLesson: Lesson = {
  id: "ui-states",
  title: "Reusable UI States",
};

function SavedLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  return (
    <section>
      <h2>Lesson tersimpan</h2>
      <p>Belum ada data.</p>
      <button type="button" onClick={() => setLessons([sampleLesson])}>
        Tambahkan lesson
      </button>
      <p>Total: {lessons.length}</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

type Lesson = {
  id: string;
  title: string;
};

const sampleLesson: Lesson = {
  id: "ui-states",
  title: "Reusable UI States",
};

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <section>
      <h2>Belum ada lesson tersimpan</h2>
      <p>Simpan satu lesson untuk mulai membuat daftar belajar pribadi.</p>
      <button type="button" onClick={onCreate}>
        Tambahkan contoh lesson
      </button>
    </section>
  );
}

function SavedLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  if (lessons.length === 0) {
    return <EmptyState onCreate={() => setLessons([sampleLesson])} />;
  }

  return (
    <section>
      <h2>Lesson tersimpan</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "EmptyState menerima onCreate.",
    "Heading menjelaskan list lesson tersimpan kosong.",
    "Copy memberi alasan dan action yang relevan.",
    "Action menambahkan sample lesson lalu menampilkan content state.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "SavedLessons",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "empty-component", label: "EmptyState dibuat.", type: "contains", target: "function EmptyState({ onCreate }: { onCreate: () => void })", valueIncludes: "function EmptyState({ onCreate }: { onCreate: () => void })" },
      { id: "empty-heading", label: "Heading menjelaskan list kosong.", type: "contains", target: "Belum ada lesson tersimpan", valueIncludes: "Belum ada lesson tersimpan" },
      { id: "empty-description", label: "Penjelasan empty state ditampilkan.", type: "contains", target: "Simpan satu lesson untuk mulai membuat daftar belajar pribadi.", valueIncludes: "Simpan satu lesson untuk mulai membuat daftar belajar pribadi." },
      { id: "empty-button", label: "Button memanggil onCreate.", type: "contains", target: "onClick={onCreate}", valueIncludes: "onClick={onCreate}" },
      { id: "empty-branch", label: "List kosong merender EmptyState.", type: "contains", target: "return <EmptyState onCreate={() => setLessons([sampleLesson])} />;", valueIncludes: "return <EmptyState onCreate={() => setLessons([sampleLesson])} />;" },
      { id: "content-list", label: "Content state merender lessons.", type: "contains", target: "lessons.map((lesson) => (", valueIncludes: "lessons.map((lesson) => (" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Saat list kosong, EmptyState menjelaskan kondisi dan memberi action yang relevan. Jalankan preview lalu tambahkan contoh lesson untuk masuk ke content state.",
    lines: [
      "Empty state menyebut lesson tersimpan yang belum ada.",
      "User mendapat action untuk membuat content pertama.",
      "Setelah action, list content ditampilkan.",
    ],
  },
  skillTags: ["React", "Empty State", "UX"],
};

export const addRetryToLessonFeedChallenge: CodingChallenge = {
  id: "add-retry-to-lesson-feed",
  lessonId: "react-retry-pattern",
  title: "Tambahkan retry ke lesson feed",
  description:
    "Latihan membuat flow retry dari error ke loading lalu success dengan komponen loading dan error kecil.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat RequestStatus berisi loading, error, dan success.",
    "Buat LoadingMessage dan ErrorMessage yang menerima onRetry.",
    "Buat handleRetry yang memindahkan status ke loading.",
    "Setelah timer kecil, pindahkan status ke success dan render content.",
  ],
  starterCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

type RequestStatus = "error" | "success";

function LessonFeed() {
  const [status, setStatus] = useState<RequestStatus>("error");

  return (
    <section>
      <h2>Lesson feed</h2>
      {status === "error" ? <p>Daftar lesson gagal dimuat.</p> : <p>Daftar lesson siap.</p>}
      <button type="button" onClick={() => setStatus("success")}>
        Coba lagi
      </button>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

type RequestStatus = "loading" | "error" | "success";

function LoadingMessage() {
  return <p role="status" aria-live="polite">Memuat ulang lesson...</p>;
}

function ErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <section role="alert">
      <h2>Daftar lesson belum dapat dimuat</h2>
      <button type="button" onClick={onRetry}>
        Coba lagi
      </button>
    </section>
  );
}

function LessonFeed() {
  const [status, setStatus] = useState<RequestStatus>("error");

  function handleRetry() {
    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
    }, 600);
  }

  if (status === "loading") {
    return <LoadingMessage />;
  }

  if (status === "error") {
    return <ErrorMessage onRetry={handleRetry} />;
  }

  return <p>Daftar lesson siap.</p>;
}`,
  },
  checklist: [
    "RequestStatus memiliki loading, error, dan success.",
    "ErrorMessage memberi retry action.",
    "handleRetry mengubah status ke loading terlebih dahulu.",
    "Timer kecil mensimulasikan hasil success baru.",
    "Setiap status merender branch UI yang berbeda.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonFeed",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "status-type", label: "RequestStatus memuat loading, error, dan success.", type: "contains", target: 'type RequestStatus = "loading" | "error" | "success";', valueIncludes: 'type RequestStatus = "loading" | "error" | "success";' },
      { id: "loading-component", label: "LoadingMessage dibuat.", type: "contains", target: "function LoadingMessage()", valueIncludes: "function LoadingMessage()" },
      { id: "error-component", label: "ErrorMessage menerima onRetry.", type: "contains", target: "function ErrorMessage({ onRetry }: { onRetry: () => void })", valueIncludes: "function ErrorMessage({ onRetry }: { onRetry: () => void })" },
      { id: "retry-handler", label: "handleRetry dibuat.", type: "contains", target: "function handleRetry()", valueIncludes: "function handleRetry()" },
      { id: "loading-status", label: "Retry memindahkan status ke loading.", type: "contains", target: 'setStatus("loading");', valueIncludes: 'setStatus("loading");' },
      { id: "success-status", label: "Timer memindahkan status ke success.", type: "contains", target: 'setStatus("success");', valueIncludes: 'setStatus("success");' },
      { id: "loading-branch", label: "Loading branch merender LoadingMessage.", type: "contains", target: 'if (status === "loading")', valueIncludes: 'if (status === "loading")' },
      { id: "error-branch", label: "Error branch merender ErrorMessage.", type: "contains", target: 'if (status === "error")', valueIncludes: 'if (status === "error")' },
      { id: "retry-prop", label: "ErrorMessage menerima handleRetry.", type: "contains", target: "<ErrorMessage onRetry={handleRetry} />", valueIncludes: "<ErrorMessage onRetry={handleRetry} />" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Mulai dari error, lalu Coba lagi menampilkan loading sementara sebelum lesson feed berhasil dimuat. Jalankan preview dan klik retry untuk melihat transisinya.",
    lines: [
      "Error state memberi button Coba lagi.",
      "Retry mengubah UI ke loading, bukan langsung menyembunyikan error tanpa status.",
      "Setelah timer, success content tampil.",
    ],
  },
  skillTags: ["React", "Retry", "Error Recovery", "Async UI"],
};

export const buildReusableUiStatesCheckpointChallenge: CodingChallenge = {
  id: "build-reusable-ui-states-checkpoint",
  lessonId: "react-reusable-ui-states-assessment",
  title: "Bangun reusable UI states checkpoint",
  description:
    "Checkpoint membangun feature lesson dengan loading, error, empty, success, retry, dan component state yang reusable.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat UiStatus berisi loading, error, empty, dan success.",
    "Buat LoadingMessage, ErrorMessage, dan EmptyState reusable.",
    "Render satu branch UI untuk setiap status.",
    "Buat handleRetry dari error ke loading lalu success, dan action empty menuju success.",
  ],
  starterCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

type UiStatus = "loading" | "error" | "empty" | "success";

function LessonHub() {
  const [status, setStatus] = useState<UiStatus>("loading");

  return (
    <section>
      <h2>Lesson hub</h2>
      <p>Status: {status}</p>
      <button type="button" onClick={() => setStatus("error")}>
        Simulasikan error
      </button>
      <button type="button" onClick={() => setStatus("empty")}>
        Simulasikan kosong
      </button>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reusableUiStatesPreviewCode,
    tsx: `import { useState } from "react";

type UiStatus = "loading" | "error" | "empty" | "success";

const lessons = [
  { id: "loading", title: "Loading State" },
  { id: "retry", title: "Retry Pattern" },
];

function LoadingMessage() {
  return <p role="status" aria-live="polite">Memuat daftar lesson...</p>;
}

function ErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <section role="alert">
      <h2>Daftar lesson belum dapat dimuat</h2>
      <p>Periksa koneksi kamu, lalu coba lagi.</p>
      <button type="button" onClick={onRetry}>
        Coba lagi
      </button>
    </section>
  );
}

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <section>
      <h2>Belum ada lesson tersimpan</h2>
      <p>Tambahkan contoh lesson untuk mulai belajar.</p>
      <button type="button" onClick={onCreate}>
        Tambahkan contoh lesson
      </button>
    </section>
  );
}

function LessonHub() {
  const [status, setStatus] = useState<UiStatus>("loading");

  function handleRetry() {
    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
    }, 600);
  }

  if (status === "loading") {
    return (
      <section>
        <LoadingMessage />
        <button type="button" onClick={() => setStatus("error")}>
          Simulasikan error
        </button>
        <button type="button" onClick={() => setStatus("empty")}>
          Simulasikan kosong
        </button>
        <button type="button" onClick={() => setStatus("success")}>
          Tampilkan lesson
        </button>
      </section>
    );
  }

  if (status === "error") {
    return <ErrorMessage onRetry={handleRetry} />;
  }

  if (status === "empty") {
    return <EmptyState onCreate={() => setStatus("success")} />;
  }

  return (
    <section>
      <h2>Daftar lesson</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "UiStatus membedakan loading, error, empty, dan success.",
    "LoadingMessage memakai role status dan aria-live polite.",
    "ErrorMessage memakai role alert dan menerima retry action.",
    "EmptyState menjelaskan kondisi kosong dan memberi action.",
    "Retry berpindah dari error ke loading lalu success.",
    "Success merender daftar lesson.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonHub",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "status-type", label: "UiStatus memuat empat UI state.", type: "contains", target: 'type UiStatus = "loading" | "error" | "empty" | "success";', valueIncludes: 'type UiStatus = "loading" | "error" | "empty" | "success";' },
      { id: "loading-component", label: "LoadingMessage dibuat.", type: "contains", target: "function LoadingMessage()", valueIncludes: "function LoadingMessage()" },
      { id: "loading-accessibility", label: "Loading memakai role status dan aria-live polite.", type: "contains", target: 'role="status" aria-live="polite"', valueIncludes: 'role="status" aria-live="polite"' },
      { id: "error-component", label: "ErrorMessage menerima onRetry.", type: "contains", target: "function ErrorMessage({ onRetry }: { onRetry: () => void })", valueIncludes: "function ErrorMessage({ onRetry }: { onRetry: () => void })" },
      { id: "error-accessibility", label: "Error memakai role alert.", type: "contains", target: 'role="alert"', valueIncludes: 'role="alert"' },
      { id: "empty-component", label: "EmptyState menerima onCreate.", type: "contains", target: "function EmptyState({ onCreate }: { onCreate: () => void })", valueIncludes: "function EmptyState({ onCreate }: { onCreate: () => void })" },
      { id: "retry-handler", label: "handleRetry dibuat.", type: "contains", target: "function handleRetry()", valueIncludes: "function handleRetry()" },
      { id: "retry-loading", label: "Retry masuk ke loading.", type: "contains", target: 'setStatus("loading");', valueIncludes: 'setStatus("loading");' },
      { id: "retry-success", label: "Retry dapat masuk ke success.", type: "contains", target: 'setStatus("success");', valueIncludes: 'setStatus("success");' },
      { id: "loading-branch", label: "Loading branch dibuat.", type: "contains", target: 'if (status === "loading")', valueIncludes: 'if (status === "loading")' },
      { id: "error-branch", label: "Error branch dibuat.", type: "contains", target: 'if (status === "error")', valueIncludes: 'if (status === "error")' },
      { id: "empty-branch", label: "Empty branch dibuat.", type: "contains", target: 'if (status === "empty")', valueIncludes: 'if (status === "empty")' },
      { id: "success-list", label: "Success merender lessons dengan map.", type: "contains", target: "lessons.map((lesson) => (", valueIncludes: "lessons.map((lesson) => (" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "LessonHub menampilkan satu UI state yang jelas pada satu waktu. Jalankan preview, gunakan tombol simulasi saat loading, lalu coba retry dari error dan action dari empty state.",
    lines: [
      "Loading, error, empty, dan success memiliki branch UI terpisah.",
      "Error menawarkan retry yang kembali menunjukkan loading sebelum success.",
      "Empty state memberi action untuk membuat content tersedia.",
      "Success menampilkan daftar lesson.",
    ],
  },
  skillTags: ["React", "UI States", "Retry", "Accessibility", "Assessment"],
};
