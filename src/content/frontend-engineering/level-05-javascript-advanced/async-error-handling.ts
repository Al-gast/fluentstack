import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const javascriptAsyncErrorHandlingModule: Module = {
  id: "javascript-async-error-handling",
  trackId: "frontend-engineering",
  title: "Async JavaScript and Error Handling",
  slug: "javascript-async-error-handling",
  description:
    "Menangani Promise, async/await, try/catch, UI state, failed request, dan retry dasar dengan Vanilla JavaScript.",
  order: 15,
  lessonIds: [
    "javascript-promise-basic",
    "javascript-async-await-basic",
    "javascript-try-catch-basic",
    "javascript-async-ui-states",
    "javascript-basic-retry",
    "javascript-async-error-handling-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["JavaScript", "Promise", "async/await", "Error Handling"],
};

export const javascriptPromiseBasicLesson: Lesson = {
  id: "javascript-promise-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-async-error-handling",
  title: "Promise Dasar",
  slug: "javascript-promise-basic",
  description:
    "Memahami Promise sebagai hasil async yang sedang menunggu, berhasil, atau gagal.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 40,
  objectives: [
    "Memahami kenapa operasi async tidak langsung memberi hasil final",
    "Membedakan pending, fulfilled, dan rejected",
    "Membaca alur Promise sederhana",
  ],
  skillTags: ["JavaScript", "Promise", "Async"],
  blocks: [
    {
      id: "javascript-promise-basic-intro",
      type: "text",
      title: "Tidak semua hasil datang langsung",
      content:
        "Di module sebelumnya, kamu sudah memakai fetch dasar. Saat JavaScript meminta data, hasilnya tidak selalu tersedia saat itu juga. Browser mungkin masih menunggu network, file, atau operasi lain.\n\nPromise adalah object yang mewakili hasil async yang akan selesai nanti. Ia membantu kode menangani tiga kemungkinan: masih menunggu, berhasil, atau gagal.",
    },
    {
      id: "javascript-promise-basic-timeline",
      type: "text",
      title: "Promise punya tiga state penting",
      content:
        "pending berarti operasi masih berjalan. fulfilled berarti operasi berhasil dan punya value. rejected berarti operasi gagal dan punya alasan error.\n\nSaat membaca kode async, jangan langsung bertanya output akhirnya apa. Tanyakan dulu: saat ini Promise masih pending, akan fulfilled, atau bisa rejected?",
    },
    {
      id: "javascript-promise-basic-code-example",
      type: "code-example",
      title: "Promise yang berhasil",
      language: "js",
      code: `const lessonsPromise = Promise.resolve(["Scope", "Closure", "Async"]);

lessonsPromise.then((lessons) => {
  console.log("Jumlah lesson:", lessons.length);
});`,
      explanation:
        "Promise.resolve membuat Promise yang fulfilled dengan array lesson. then menjalankan callback saat Promise berhasil.",
    },
    {
      id: "javascript-promise-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Promise bukan hasil finalnya",
      content:
        "Variable yang berisi Promise bukan langsung data final. Kalau kamu console.log promise-nya, kamu melihat object Promise, bukan array atau data yang ingin dipakai. Data final dibaca setelah Promise fulfilled.",
    },
    {
      id: "javascript-promise-basic-quick-check",
      type: "quick-check",
      question:
        "Promise yang masih menunggu hasil request berada pada state apa?",
      options: ["pending", "fulfilled", "rejected", "rendered"],
      correctAnswer: "pending",
      explanation:
        "pending berarti operasi async belum selesai. Promise bisa berubah menjadi fulfilled jika berhasil atau rejected jika gagal.",
    },
    {
      id: "javascript-promise-basic-coding-practice",
      type: "coding-practice",
      challengeId: "predict-promise-states",
    },
    {
      id: "javascript-promise-basic-summary",
      type: "summary",
      points: [
        "Promise mewakili hasil operasi async yang selesai nanti.",
        "pending berarti masih menunggu.",
        "fulfilled berarti operasi berhasil.",
        "rejected berarti operasi gagal.",
        "Berikutnya, kamu akan menulis async flow yang lebih mudah dibaca dengan async/await.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-promise-basic-intro",
      "javascript-promise-basic-timeline",
      "javascript-promise-basic-code-example",
      "javascript-promise-basic-common-mistake",
      "javascript-promise-basic-quick-check",
      "javascript-promise-basic-coding-practice",
      "javascript-promise-basic-summary",
    ],
  },
};

export const javascriptAsyncAwaitBasicLesson: Lesson = {
  id: "javascript-async-await-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-async-error-handling",
  title: "async / await",
  slug: "javascript-async-await-basic",
  description:
    "Menulis flow async yang lebih mudah dibaca dengan async function dan await.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami async function sebagai function yang mengembalikan Promise",
    "Memakai await untuk menunggu hasil Promise",
    "Membaca ulang flow .then sebagai flow async/await",
  ],
  skillTags: ["JavaScript", "async/await", "Promise"],
  blocks: [
    {
      id: "javascript-async-await-basic-intro",
      type: "text",
      title: "Async flow bisa dibaca dari atas ke bawah",
      content:
        "Promise dengan then tetap valid, tetapi chain yang panjang bisa membuat alur sulit dibaca. async/await membantu kamu menulis operasi async seperti urutan langkah: tunggu data, olah data, lalu render hasil.\n\nawait hanya bisa dipakai di dalam async function atau di module context tertentu. Untuk tahap ini, anggap pola utama kamu adalah membuat async function lalu memakai await di dalamnya.",
    },
    {
      id: "javascript-async-await-basic-then-example",
      type: "code-example",
      title: "Flow dengan then",
      language: "js",
      code: `function loadLessons() {
  return getLessons().then((lessons) => {
    renderLessons(lessons);
  });
}`,
      explanation:
        "Kode ini menunggu getLessons selesai lewat then. Saat Promise fulfilled, lessons dirender.",
    },
    {
      id: "javascript-async-await-basic-await-example",
      type: "code-example",
      title: "Flow yang sama dengan async/await",
      language: "js",
      code: `async function loadLessons() {
  const lessons = await getLessons();
  renderLessons(lessons);
}`,
      explanation:
        "await menunggu getLessons selesai, lalu hasilnya disimpan ke lessons. Alurnya lebih mudah dibaca dari atas ke bawah.",
    },
    {
      id: "javascript-async-await-basic-tip",
      type: "callout",
      variant: "tip",
      title: "await bukan membuat network jadi instan",
      content:
        "await tidak mempercepat request. await hanya membuat kode async lebih mudah dibaca. Selama menunggu, browser tetap bisa mengerjakan hal lain.",
    },
    {
      id: "javascript-async-await-basic-coding-practice",
      type: "coding-practice",
      challengeId: "refactor-then-to-async-await",
    },
    {
      id: "javascript-async-await-basic-summary",
      type: "summary",
      points: [
        "async function mengembalikan Promise.",
        "await menunggu Promise selesai sebelum lanjut ke baris berikutnya.",
        "async/await sering membuat flow request lebih mudah dibaca.",
        "await tidak otomatis menangani error.",
        "Berikutnya, kamu akan menambahkan try/catch untuk menangani kegagalan async.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-async-await-basic-intro",
      "javascript-async-await-basic-then-example",
      "javascript-async-await-basic-await-example",
      "javascript-async-await-basic-tip",
      "javascript-async-await-basic-coding-practice",
      "javascript-async-await-basic-summary",
    ],
  },
};

export const javascriptTryCatchBasicLesson: Lesson = {
  id: "javascript-try-catch-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-async-error-handling",
  title: "try / catch",
  slug: "javascript-try-catch-basic",
  description:
    "Menangani async function yang gagal dengan try/catch dan pesan error yang jelas.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami bahwa await bisa gagal jika Promise rejected",
    "Memakai try/catch di async function",
    "Menampilkan pesan error yang membantu user",
  ],
  skillTags: ["JavaScript", "try/catch", "Error Handling"],
  blocks: [
    {
      id: "javascript-try-catch-basic-intro",
      type: "text",
      title: "Async code perlu rencana saat gagal",
      content:
        "Request bisa gagal karena network bermasalah, URL salah, server error, data kosong, atau respons tidak sesuai. Kalau kode hanya menulis await tanpa rencana error, user bisa melihat UI diam, console error, atau state yang menggantung.\n\ntry/catch memberi tempat yang jelas: coba jalankan operasi async di try, lalu tangani error di catch jika operasi gagal.",
    },
    {
      id: "javascript-try-catch-basic-broken-example",
      type: "code-example",
      title: "Contoh rapuh tanpa catch",
      language: "js",
      code: `async function loadProfile() {
  showStatus("Memuat profile...");

  const profile = await getProfile();
  renderProfile(profile);

  showStatus("Profile berhasil dimuat.");
}`,
      explanation:
        "Jika getProfile rejected, baris setelah await tidak berjalan. Tanpa catch, UI bisa berhenti di status loading dan user tidak tahu apa yang terjadi.",
    },
    {
      id: "javascript-try-catch-basic-fixed-example",
      type: "code-example",
      title: "Flow yang punya rencana error",
      language: "js",
      code: `async function loadProfile() {
  showStatus("Memuat profile...");

  try {
    const profile = await getProfile();
    renderProfile(profile);
    showStatus("Profile berhasil dimuat.");
  } catch (error) {
    showStatus("Profile gagal dimuat. Coba lagi nanti.");
    console.error(error);
  }
}`,
      explanation:
        "try berisi operasi yang mungkin gagal. catch memberi pesan UI yang jujur dan tetap menyimpan detail error di console untuk debugging.",
    },
    {
      id: "javascript-try-catch-basic-quick-check",
      type: "quick-check",
      question:
        "Dalam async function, bagian mana yang menangani Promise rejected saat memakai try/catch?",
      options: ["catch", "await", "const", "render"],
      correctAnswer: "catch",
      explanation:
        "catch berjalan saat kode di dalam try melempar error atau Promise yang ditunggu dengan await menjadi rejected.",
    },
    {
      id: "javascript-try-catch-basic-coding-practice",
      type: "coding-practice",
      challengeId: "add-try-catch-to-async-function",
    },
    {
      id: "javascript-try-catch-basic-summary",
      type: "summary",
      points: [
        "await bisa gagal jika Promise yang ditunggu rejected.",
        "try/catch membuat rencana error lebih eksplisit.",
        "catch sebaiknya memberi pesan UI yang membantu dan menyimpan detail error untuk debugging.",
        "Berikutnya, kamu akan menampilkan loading, error, empty, dan success state dengan lebih rapi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-try-catch-basic-intro",
      "javascript-try-catch-basic-broken-example",
      "javascript-try-catch-basic-fixed-example",
      "javascript-try-catch-basic-quick-check",
      "javascript-try-catch-basic-coding-practice",
      "javascript-try-catch-basic-summary",
    ],
  },
};

export const javascriptAsyncUiStatesLesson: Lesson = {
  id: "javascript-async-ui-states",
  trackId: "frontend-engineering",
  moduleId: "javascript-async-error-handling",
  title: "Loading, Error, Empty, dan Success State",
  slug: "javascript-async-ui-states",
  description:
    "Membuat UI async yang jujur saat data sedang dimuat, kosong, gagal, atau berhasil.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan loading, error, empty, dan success state",
    "Menampilkan status yang jujur untuk user",
    "Menghindari UI yang menggantung saat request gagal",
  ],
  skillTags: ["JavaScript", "UI State", "Async"],
  blocks: [
    {
      id: "javascript-async-ui-states-intro",
      type: "text",
      title: "Async UI harus menjawab apa yang sedang terjadi",
      content:
        "User tidak melihat Promise. User melihat halaman. Karena itu, async code yang baik tidak cukup hanya berhasil di console. UI perlu menjelaskan apa yang terjadi: data sedang dimuat, tidak ada data, data gagal dimuat, atau data berhasil tampil.\n\nEmpat state ini membuat app terasa lebih jujur dan tidak membuat user menebak-nebak.",
    },
    {
      id: "javascript-async-ui-states-case-study",
      type: "callout",
      variant: "important",
      title: "Empty berbeda dari error",
      content:
        "Empty berarti request berhasil, tetapi datanya kosong. Error berarti request atau proses membaca data gagal. Dua kondisi ini perlu pesan yang berbeda karena tindakan user berikutnya juga berbeda.",
    },
    {
      id: "javascript-async-ui-states-code-example",
      type: "code-example",
      title: "Empat state dalam flow async",
      language: "js",
      code: `async function loadTips() {
  showLoading();

  try {
    const tips = await getTips();

    if (tips.length === 0) {
      showEmpty();
      return;
    }

    showSuccess(tips);
  } catch (error) {
    showError("Tips gagal dimuat.");
    console.error(error);
  }
}`,
      explanation:
        "Flow ini selalu memberi state yang jelas: loading saat mulai, empty jika data kosong, success jika data ada, dan error jika proses gagal.",
    },
    {
      id: "javascript-async-ui-states-coding-practice",
      type: "coding-practice",
      challengeId: "render-async-ui-states",
    },
    {
      id: "javascript-async-ui-states-local-checklist",
      type: "text",
      title: "Checklist local app",
      content:
        "Cek local Vanilla JavaScript app kamu:\n\n- Ada pesan loading saat data mulai diminta.\n- Ada empty state jika request berhasil tetapi data kosong.\n- Ada error state jika request gagal.\n- Ada success state jika data berhasil dirender.\n- User tidak dibiarkan melihat loading selamanya.\n- Console tetap menyimpan detail error untuk debugging.\n\nChecklist ini untuk local project kamu. Tandai selesai setelah kamu benar-benar mengecek behavior di browser.",
    },
    {
      id: "javascript-async-ui-states-summary",
      type: "summary",
      points: [
        "Loading state memberi tahu user bahwa proses sedang berjalan.",
        "Empty state menjelaskan data kosong tanpa menyebutnya error.",
        "Error state menjelaskan kegagalan dengan pesan yang bisa dipahami.",
        "Success state menampilkan data saat operasi berhasil.",
        "Berikutnya, kamu akan memberi user tindakan retry saat request gagal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-async-ui-states-intro",
      "javascript-async-ui-states-case-study",
      "javascript-async-ui-states-code-example",
      "javascript-async-ui-states-coding-practice",
      "javascript-async-ui-states-local-checklist",
      "javascript-async-ui-states-summary",
    ],
  },
};

export const javascriptBasicRetryLesson: Lesson = {
  id: "javascript-basic-retry",
  trackId: "frontend-engineering",
  moduleId: "javascript-async-error-handling",
  title: "Retry Dasar",
  slug: "javascript-basic-retry",
  description:
    "Menambahkan tombol coba lagi untuk async operation yang gagal.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami kapan retry berguna untuk user",
    "Menampilkan tombol retry hanya saat error",
    "Menjalankan ulang async function dari event listener",
  ],
  skillTags: ["JavaScript", "Retry", "Error State"],
  blocks: [
    {
      id: "javascript-basic-retry-intro",
      type: "text",
      title: "Error state sebaiknya memberi jalan keluar",
      content:
        "Pesan error yang baik menjelaskan masalah. Tetapi untuk banyak async operation, user juga butuh tindakan berikutnya. Tombol retry memberi cara sederhana untuk mencoba ulang tanpa reload halaman.\n\nRetry dasar cocok untuk request yang mungkin gagal sementara, misalnya network putus sebentar atau server sedang lambat. Untuk tahap ini, cukup buat tombol coba lagi yang menjalankan async function yang sama.",
    },
    {
      id: "javascript-basic-retry-code-example",
      type: "code-example",
      title: "Tombol retry memanggil ulang async function",
      language: "js",
      code: `const retryButton = document.querySelector("#retryButton");

async function loadProfile() {
  retryButton.hidden = true;
  showLoading();

  try {
    const profile = await getProfile();
    showSuccess(profile);
  } catch (error) {
    showError("Profile gagal dimuat.");
    retryButton.hidden = false;
    console.error(error);
  }
}

retryButton.addEventListener("click", () => {
  loadProfile();
});

loadProfile();`,
      explanation:
        "Saat request gagal, tombol retry ditampilkan. Saat user klik tombol, loadProfile dijalankan ulang.",
    },
    {
      id: "javascript-basic-retry-warning",
      type: "callout",
      variant: "warning",
      title: "Retry bukan jawaban untuk semua error",
      content:
        "Jika error terjadi karena data tidak valid atau user belum login, retry tanpa perubahan tidak akan membantu. Retry paling berguna untuk kegagalan sementara seperti network atau server yang tidak stabil.",
    },
    {
      id: "javascript-basic-retry-coding-practice",
      type: "coding-practice",
      challengeId: "add-basic-retry-button",
    },
    {
      id: "javascript-basic-retry-summary",
      type: "summary",
      points: [
        "Retry memberi user tindakan setelah request gagal.",
        "Tombol retry sebaiknya muncul saat error, bukan sepanjang waktu.",
        "Retry dasar bisa menjalankan ulang async function yang sama.",
        "Untuk sekarang, hindari retry/backoff algorithm yang kompleks.",
        "Berikutnya, Uji Kompetensi akan mengecek async flow, UI state, error handling, dan retry dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-basic-retry-intro",
      "javascript-basic-retry-code-example",
      "javascript-basic-retry-warning",
      "javascript-basic-retry-coding-practice",
      "javascript-basic-retry-summary",
    ],
  },
};

export const javascriptAsyncErrorHandlingAssessmentLesson: Lesson = {
  id: "javascript-async-error-handling-assessment",
  trackId: "frontend-engineering",
  moduleId: "javascript-async-error-handling",
  title: "Uji Kompetensi Async JavaScript and Error Handling",
  slug: "javascript-async-error-handling-assessment",
  description:
    "Cek readiness menulis async function, menangani error, menampilkan UI state, dan menambahkan retry dasar.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 75,
  objectives: [
    "Mengecek pemahaman Promise states",
    "Mengecek penggunaan async/await",
    "Mengecek try/catch untuk failed async operation",
    "Mengecek loading, empty, error, dan success state",
    "Mengecek retry behavior dasar",
  ],
  skillTags: ["JavaScript", "Async", "Error Handling", "Checkpoint"],
  blocks: [
    {
      id: "javascript-async-error-handling-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini mengecek apakah kamu bisa menangani operasi async dengan jujur. Bukan hanya membuat request berhasil, tetapi juga menjelaskan apa yang user lihat saat data sedang dimuat, kosong, gagal, atau berhasil.\n\nKamu belum perlu advanced concurrency, AbortController, queue, stream, service worker, atau retry backoff algorithm. Fokusnya adalah async function yang bisa dibaca, try/catch yang jelas, UI state yang tidak menggantung, dan retry dasar saat error sementara.",
    },
    {
      id: "javascript-async-error-handling-assessment-quiz-block",
      type: "quiz",
      quizId: "javascript-async-error-handling-assessment-quiz",
    },
    {
      id: "javascript-async-error-handling-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "fix-async-ui-flow-checkpoint",
    },
    {
      id: "javascript-async-error-handling-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi secara terarah",
      description:
        "Gunakan dokumentasi ini untuk memperkuat konsep yang sering membingungkan saat async flow mulai nyata.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Promise",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
          focus: [
            "pending, fulfilled, dan rejected",
            "Promise sebagai hasil async yang selesai nanti",
            "then dan catch sebagai handler",
          ],
          ignoreForNow: [
            "Promise concurrency methods",
            "Promise subclassing",
            "cancellation detail",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "async function",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",
          focus: [
            "async function mengembalikan Promise",
            "flow async yang bisa dibaca dengan await",
            "hubungan async function dan error",
          ],
          ignoreForNow: [
            "async function expression edge cases",
            "top-level await detail",
            "advanced scheduling",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "await",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await",
          focus: [
            "menunggu Promise fulfilled",
            "apa yang terjadi saat Promise rejected",
            "await di dalam async function",
          ],
          ignoreForNow: [
            "top-level await di module kompleks",
            "microtask detail",
            "stack trace nuance",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "try...catch",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",
          focus: [
            "try block",
            "catch block",
            "menangani exception atau rejected async flow",
          ],
          ignoreForNow: [
            "conditional catch blocks",
            "finally detail",
            "nested try/catch yang kompleks",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Using the Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
          focus: [
            "fetch mengembalikan Promise",
            "membaca response",
            "menangani request yang gagal dengan jujur",
          ],
          ignoreForNow: [
            "streaming body",
            "AbortController",
            "advanced request options",
          ],
        },
      ],
      followUpAction:
        "Buka local app kamu, pilih satu async operation, lalu tulis state apa yang user lihat saat loading, empty, success, dan error.",
    },
    {
      id: "javascript-async-error-handling-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan debugging singkat untuk async flow. Jelaskan Promise/request apa yang berjalan, state UI yang tampil, error yang mungkin terjadi, dan bagaimana retry bekerja.",
      placeholder:
        "Saat user membuka halaman, app menjalankan... UI menampilkan loading... Jika request gagal...",
      minimumCharacters: 300,
      checklist: [
        "Menyebut async operation yang berjalan",
        "Menjelaskan loading state",
        "Membedakan empty dan error state",
        "Menjelaskan success state",
        "Menjelaskan catch atau error handling",
        "Menjelaskan retry behavior",
      ],
      modelAnswer:
        "Saat user membuka dashboard, app menjalankan async function loadDashboard untuk mengambil data lesson. UI pertama menampilkan loading agar user tahu proses sedang berjalan. Jika request berhasil tetapi data kosong, UI menampilkan empty state, bukan error. Jika data tersedia, success state merender daftar lesson. Jika request gagal, catch menampilkan pesan error dan menyimpan detail di Console. Tombol retry muncul di error state dan menjalankan loadDashboard lagi saat diklik.",
    },
    {
      id: "javascript-async-error-handling-assessment-summary",
      type: "summary",
      points: [
        "Readiness module ini berarti kamu bisa membaca Promise states dan menulis async/await flow.",
        "try/catch membuat kegagalan async punya rencana yang jelas.",
        "UI async yang baik membedakan loading, empty, error, dan success.",
        "Retry dasar memberi user jalan keluar saat request gagal sementara.",
        "Jika belum siap, ulangi Promise state prediction, async/await refactor, try/catch, UI states, dan retry practice.",
        "Jika sudah siap, kamu bisa lanjut ke Browser APIs, Data Transformation, and Debugging.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-async-error-handling-assessment-recap",
      "javascript-async-error-handling-assessment-quiz-block",
      "javascript-async-error-handling-assessment-coding-practice",
      "javascript-async-error-handling-assessment-writing-practice",
      "javascript-async-error-handling-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const javascriptAsyncErrorHandlingAssessmentQuiz: Quiz = {
  id: "javascript-async-error-handling-assessment-quiz",
  lessonId: "javascript-async-error-handling-assessment",
  title: "Uji Kompetensi Async JavaScript and Error Handling",
  passingScore: 70,
  questions: [
    {
      id: "javascript-async-error-handling-assessment-q1",
      type: "multiple-choice",
      question:
        "Apa state Promise saat operasi async masih menunggu hasil?",
      options: ["pending", "fulfilled", "rejected", "empty"],
      correctAnswer: "pending",
      explanation:
        "pending berarti Promise belum fulfilled dan belum rejected. Operasi async masih berjalan.",
    },
    {
      id: "javascript-async-error-handling-assessment-q2",
      type: "multiple-choice",
      question:
        "Apa peran await di dalam async function?",
      options: [
        "Menunggu Promise selesai sebelum lanjut ke baris berikutnya",
        "Membuat request selalu berhasil",
        "Menghapus kebutuhan try/catch",
        "Mengubah HTML menjadi module",
      ],
      correctAnswer: "Menunggu Promise selesai sebelum lanjut ke baris berikutnya",
      explanation:
        "await menunggu Promise settle. Jika fulfilled, hasilnya bisa dipakai. Jika rejected, error perlu ditangani.",
    },
    {
      id: "javascript-async-error-handling-assessment-q3",
      type: "multiple-choice",
      question:
        "Di async function, bagian mana yang menangani error saat await menunggu Promise rejected?",
      options: ["catch", "const", "render", "return"],
      correctAnswer: "catch",
      explanation:
        "catch menangani error yang terjadi di dalam try, termasuk Promise rejected yang ditunggu dengan await.",
    },
    {
      id: "javascript-async-error-handling-assessment-q4",
      type: "multiple-choice",
      question:
        "Apa beda empty state dan error state?",
      options: [
        "Empty berarti request berhasil tetapi data kosong; error berarti proses gagal",
        "Empty dan error selalu berarti hal yang sama",
        "Empty hanya dipakai untuk CSS; error hanya untuk HTML",
        "Error berarti data berhasil dirender",
      ],
      correctAnswer:
        "Empty berarti request berhasil tetapi data kosong; error berarti proses gagal",
      explanation:
        "Empty state adalah kondisi sukses dengan data kosong. Error state berarti request atau proses membaca data gagal.",
    },
    {
      id: "javascript-async-error-handling-assessment-q5",
      type: "true-false",
      question:
        "Tombol retry dasar bisa menjalankan ulang async function yang sama setelah request gagal.",
      correctAnswer: true,
      explanation:
        "Untuk retry dasar, event listener pada tombol bisa memanggil ulang async function yang sebelumnya gagal.",
    },
  ],
};

export const predictPromiseStatesChallenge: CodingChallenge = {
  id: "predict-promise-states",
  lessonId: "javascript-promise-basic",
  title: "Prediksi Promise states",
  description:
    "Latihan mengenali pending, fulfilled, dan rejected dalam flow Promise sederhana.",
  instructions: [
    "Fokus di tab JS.",
    "Isi initialState dengan string \"pending\".",
    "Isi successState dengan string \"fulfilled\".",
    "Isi failureState dengan string \"rejected\".",
    "Gunakan string persis agar cek otomatis bisa membaca jawaban.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan Promise states</h1>
  <p>Gunakan tab JS untuk mengisi state Promise.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const initialState = "";
const successState = "";
const failureState = "";

console.log(initialState);
console.log(successState);
console.log(failureState);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan Promise states</h1>
  <p>Gunakan tab JS untuk mengisi state Promise.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const initialState = "pending";
const successState = "fulfilled";
const failureState = "rejected";

console.log(initialState);
console.log(successState);
console.log(failureState);`,
  },
  checklist: [
    "pending berarti Promise masih menunggu.",
    "fulfilled berarti Promise berhasil.",
    "rejected berarti Promise gagal.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "promise-pending-state",
        label: "initialState diisi pending.",
        type: "contains",
        target: `const initialState = "pending";`,
        valueIncludes: `const initialState = "pending";`,
      },
      {
        id: "promise-fulfilled-state",
        label: "successState diisi fulfilled.",
        type: "contains",
        target: `const successState = "fulfilled";`,
        valueIncludes: `const successState = "fulfilled";`,
      },
      {
        id: "promise-rejected-state",
        label: "failureState diisi rejected.",
        type: "contains",
        target: `const failureState = "rejected";`,
        valueIncludes: `const failureState = "rejected";`,
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Console menampilkan tiga state Promise yang perlu kamu kenali.",
    lines: ["pending", "fulfilled", "rejected"],
  },
  skillTags: ["JavaScript", "Promise", "Async"],
};

export const refactorThenToAsyncAwaitChallenge: CodingChallenge = {
  id: "refactor-then-to-async-await",
  lessonId: "javascript-async-await-basic",
  title: "Refactor then ke async/await",
  description:
    "Latihan mengubah flow Promise dengan then menjadi async function dengan await.",
  instructions: [
    "Fokus di tab JS.",
    "Ubah loadLessons menjadi async function.",
    "Tunggu getLessons dengan await.",
    "Simpan hasilnya ke const lessons.",
    "Render lessons dengan renderLessons(lessons).",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan async/await</h1>
  <ul id="lessonList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getLessons() {
  return Promise.resolve(["Promise Dasar", "async / await", "try / catch"]);
}

function renderLessons(lessons) {
  console.log(lessons.join(", "));
}

function loadLessons() {
  return getLessons().then((lessons) => {
    renderLessons(lessons);
  });
}

loadLessons();`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan async/await</h1>
  <ul id="lessonList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getLessons() {
  return Promise.resolve(["Promise Dasar", "async / await", "try / catch"]);
}

function renderLessons(lessons) {
  console.log(lessons.join(", "));
}

async function loadLessons() {
  const lessons = await getLessons();
  renderLessons(lessons);
}

loadLessons();`,
  },
  checklist: [
    "loadLessons memakai async function.",
    "getLessons ditunggu dengan await.",
    "Hasil Promise disimpan ke lessons.",
    "renderLessons tetap menerima lessons.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "load-lessons-async",
        label: "loadLessons ditulis sebagai async function.",
        type: "contains",
        target: "async function loadLessons()",
        valueIncludes: "async function loadLessons()",
      },
      {
        id: "await-get-lessons",
        label: "getLessons ditunggu dengan await.",
        type: "contains",
        target: "const lessons = await getLessons();",
        valueIncludes: "const lessons = await getLessons();",
      },
      {
        id: "render-lessons",
        label: "lessons dirender setelah await.",
        type: "contains",
        target: "renderLessons(lessons);",
        valueIncludes: "renderLessons(lessons);",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Flow async/await tetap menampilkan data lesson yang sama.",
    lines: ["Promise Dasar, async / await, try / catch"],
  },
  skillTags: ["JavaScript", "async/await", "Promise"],
};

export const addTryCatchToAsyncFunctionChallenge: CodingChallenge = {
  id: "add-try-catch-to-async-function",
  lessonId: "javascript-try-catch-basic",
  title: "Tambahkan try/catch",
  description:
    "Latihan memberi rencana error pada async function yang bisa gagal.",
  instructions: [
    "Fokus di tab JS.",
    "Tambahkan try di dalam loadProfile.",
    "Tunggu getProfile dengan await di dalam try.",
    "Jika berhasil, panggil showProfile(profile).",
    "Jika gagal, catch error dan panggil showError(\"Data gagal dimuat.\").",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan try/catch</h1>
  <p id="statusText">Belum memuat profile.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getProfile() {
  return Promise.reject(new Error("Network gagal"));
}

function showProfile(profile) {
  console.log("Profile:", profile.name);
}

function showError(message) {
  console.log(message);
}

async function loadProfile() {
  const profile = await getProfile();
  showProfile(profile);
}

loadProfile();`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan try/catch</h1>
  <p id="statusText">Belum memuat profile.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getProfile() {
  return Promise.reject(new Error("Network gagal"));
}

function showProfile(profile) {
  console.log("Profile:", profile.name);
}

function showError(message) {
  console.log(message);
}

async function loadProfile() {
  try {
    const profile = await getProfile();
    showProfile(profile);
  } catch (error) {
    showError("Data gagal dimuat.");
    console.error(error);
  }
}

loadProfile();`,
  },
  checklist: [
    "Operasi await berada di dalam try.",
    "catch menangani error.",
    "showError dipanggil saat proses gagal.",
    "Detail error tetap disimpan di console.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "try-block",
        label: "loadProfile punya try block.",
        type: "contains",
        target: "try {",
        valueIncludes: "try {",
      },
      {
        id: "await-profile",
        label: "getProfile ditunggu dengan await.",
        type: "contains",
        target: "const profile = await getProfile();",
        valueIncludes: "const profile = await getProfile();",
      },
      {
        id: "catch-error",
        label: "Error ditangani dengan catch.",
        type: "contains",
        target: "catch (error) {",
        valueIncludes: "catch (error) {",
      },
      {
        id: "show-error-message",
        label: "Pesan error ditampilkan.",
        type: "contains",
        target: `showError("Data gagal dimuat.");`,
        valueIncludes: `showError("Data gagal dimuat.");`,
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Karena getProfile dibuat gagal, catch menampilkan pesan error yang jelas.",
    lines: ["Data gagal dimuat."],
  },
  skillTags: ["JavaScript", "try/catch", "Error Handling"],
};

export const renderAsyncUiStatesChallenge: CodingChallenge = {
  id: "render-async-ui-states",
  lessonId: "javascript-async-ui-states",
  title: "Render async UI states",
  description:
    "Latihan menampilkan loading, empty, success, dan error state untuk async operation.",
  instructions: [
    "Fokus di tab JS.",
    "Panggil showLoading saat loadTips dimulai.",
    "Tunggu getTips dengan await di dalam try.",
    "Jika tips kosong, panggil showEmpty lalu return.",
    "Jika tips ada, panggil showSuccess(tips).",
    "Jika gagal, panggil showError(\"Tips gagal dimuat.\").",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan async UI state</h1>
  <p id="statusText">Belum memuat tips.</p>
  <ul id="tipsList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getTips() {
  return Promise.resolve(["Tampilkan loading", "Tangani error"]);
}

function showLoading() {
  console.log("Memuat tips...");
}

function showEmpty() {
  console.log("Belum ada tips.");
}

function showSuccess(tips) {
  console.log("Tips:", tips.join(", "));
}

function showError(message) {
  console.log(message);
}

async function loadTips() {
  // Lengkapi flow async state di sini.
}

loadTips();`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan async UI state</h1>
  <p id="statusText">Belum memuat tips.</p>
  <ul id="tipsList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function getTips() {
  return Promise.resolve(["Tampilkan loading", "Tangani error"]);
}

function showLoading() {
  console.log("Memuat tips...");
}

function showEmpty() {
  console.log("Belum ada tips.");
}

function showSuccess(tips) {
  console.log("Tips:", tips.join(", "));
}

function showError(message) {
  console.log(message);
}

async function loadTips() {
  showLoading();

  try {
    const tips = await getTips();

    if (tips.length === 0) {
      showEmpty();
      return;
    }

    showSuccess(tips);
  } catch (error) {
    showError("Tips gagal dimuat.");
    console.error(error);
  }
}

loadTips();`,
  },
  checklist: [
    "Loading state muncul sebelum request selesai.",
    "Empty state berbeda dari error state.",
    "Success state menampilkan data.",
    "Error state ditangani di catch.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "show-loading",
        label: "Loading state dipanggil saat mulai.",
        type: "contains",
        target: "showLoading();",
        valueIncludes: "showLoading();",
      },
      {
        id: "await-tips",
        label: "getTips ditunggu dengan await.",
        type: "contains",
        target: "const tips = await getTips();",
        valueIncludes: "const tips = await getTips();",
      },
      {
        id: "empty-branch",
        label: "Flow mengecek data kosong.",
        type: "contains",
        target: "if (tips.length === 0) {",
        valueIncludes: "if (tips.length === 0) {",
      },
      {
        id: "show-empty",
        label: "Empty state dipanggil.",
        type: "contains",
        target: "showEmpty();",
        valueIncludes: "showEmpty();",
      },
      {
        id: "show-success",
        label: "Success state menerima tips.",
        type: "contains",
        target: "showSuccess(tips);",
        valueIncludes: "showSuccess(tips);",
      },
      {
        id: "show-error",
        label: "Error state menampilkan pesan.",
        type: "contains",
        target: `showError("Tips gagal dimuat.");`,
        valueIncludes: `showError("Tips gagal dimuat.");`,
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Dengan data berhasil, console menunjukkan loading lalu success state.",
    lines: ["Memuat tips...", "Tips: Tampilkan loading, Tangani error"],
  },
  skillTags: ["JavaScript", "Async", "UI State"],
};

export const addBasicRetryButtonChallenge: CodingChallenge = {
  id: "add-basic-retry-button",
  lessonId: "javascript-basic-retry",
  title: "Tambahkan retry button",
  description:
    "Latihan menampilkan tombol retry saat async operation gagal.",
  instructions: [
    "Fokus di tab JS.",
    "Sembunyikan retryButton saat loadProfile mulai.",
    "Jika getProfile berhasil, panggil showSuccess(profile).",
    "Jika gagal, panggil showError dan tampilkan retryButton.",
    "Tambahkan click listener yang memanggil loadProfile lagi.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Latihan retry</h1>
  <p id="statusText">Profile belum dimuat.</p>
  <button id="retryButton" hidden>Coba lagi</button>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const retryButton = document.querySelector("#retryButton");

function getProfile() {
  return Promise.reject(new Error("Server sibuk"));
}

function showLoading() {
  console.log("Memuat profile...");
}

function showSuccess(profile) {
  console.log("Profile:", profile.name);
}

function showError(message) {
  console.log(message);
}

async function loadProfile() {
  showLoading();
}

// Tambahkan event listener retry di sini.

loadProfile();`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Latihan retry</h1>
  <p id="statusText">Profile belum dimuat.</p>
  <button id="retryButton" hidden>Coba lagi</button>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const retryButton = document.querySelector("#retryButton");

function getProfile() {
  return Promise.reject(new Error("Server sibuk"));
}

function showLoading() {
  console.log("Memuat profile...");
}

function showSuccess(profile) {
  console.log("Profile:", profile.name);
}

function showError(message) {
  console.log(message);
}

async function loadProfile() {
  retryButton.hidden = true;
  showLoading();

  try {
    const profile = await getProfile();
    showSuccess(profile);
  } catch (error) {
    showError("Profile gagal dimuat.");
    retryButton.hidden = false;
    console.error(error);
  }
}

retryButton.addEventListener("click", () => {
  loadProfile();
});

loadProfile();`,
  },
  checklist: [
    "Retry button disembunyikan saat proses mulai.",
    "Retry button muncul saat error.",
    "Click retry menjalankan ulang async function.",
    "Error detail tetap tersedia di console.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "hide-retry-at-start",
        label: "retryButton disembunyikan saat mulai.",
        type: "contains",
        target: "retryButton.hidden = true;",
        valueIncludes: "retryButton.hidden = true;",
      },
      {
        id: "show-retry-on-error",
        label: "retryButton ditampilkan saat error.",
        type: "contains",
        target: "retryButton.hidden = false;",
        valueIncludes: "retryButton.hidden = false;",
      },
      {
        id: "retry-click-listener",
        label: "Retry button menjalankan loadProfile saat diklik.",
        type: "contains",
        target: `retryButton.addEventListener("click", () => {
  loadProfile();
});`,
        valueIncludes: `retryButton.addEventListener("click", () => {
  loadProfile();
});`,
      },
      {
        id: "profile-error-message",
        label: "Error state menampilkan pesan profile.",
        type: "contains",
        target: `showError("Profile gagal dimuat.");`,
        valueIncludes: `showError("Profile gagal dimuat.");`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Behavior yang diharapkan",
    description:
      "Saat request gagal, UI menampilkan error dan tombol retry. Saat tombol retry diklik, loadProfile dijalankan ulang.",
  },
  skillTags: ["JavaScript", "Retry", "Error Handling"],
};

export const fixAsyncUiFlowCheckpointChallenge: CodingChallenge = {
  id: "fix-async-ui-flow-checkpoint",
  lessonId: "javascript-async-error-handling-assessment",
  title: "Perbaiki async dashboard flow",
  description:
    "Checkpoint practice untuk memperbaiki loading, empty, success, error, dan retry flow.",
  instructions: [
    "Fokus di tab JS.",
    "Ubah loadDashboard menjadi async function.",
    "Panggil showLoading saat mulai.",
    "Tunggu fetchDashboardLessons dengan await di dalam try.",
    "Jika lessons kosong, panggil showEmpty lalu return.",
    "Jika lessons ada, panggil showSuccess(lessons).",
    "Jika gagal, panggil showError(\"Dashboard gagal dimuat.\").",
    "Tambahkan retryButton click listener yang menjalankan loadDashboard lagi.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Dashboard lesson</h1>
  <p id="statusText">Belum memuat dashboard.</p>
  <button id="retryButton" hidden>Coba lagi</button>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const retryButton = document.querySelector("#retryButton");

function fetchDashboardLessons() {
  return Promise.resolve(["Promise Dasar", "async / await"]);
}

function showLoading() {
  retryButton.hidden = true;
  console.log("Memuat dashboard...");
}

function showEmpty() {
  console.log("Belum ada lesson.");
}

function showSuccess(lessons) {
  console.log("Lesson:", lessons.join(", "));
}

function showError(message) {
  retryButton.hidden = false;
  console.log(message);
}

function loadDashboard() {
  // Lengkapi async flow checkpoint di sini.
}

// Tambahkan retry listener di sini.

loadDashboard();`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Dashboard lesson</h1>
  <p id="statusText">Belum memuat dashboard.</p>
  <button id="retryButton" hidden>Coba lagi</button>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const retryButton = document.querySelector("#retryButton");

function fetchDashboardLessons() {
  return Promise.resolve(["Promise Dasar", "async / await"]);
}

function showLoading() {
  retryButton.hidden = true;
  console.log("Memuat dashboard...");
}

function showEmpty() {
  console.log("Belum ada lesson.");
}

function showSuccess(lessons) {
  console.log("Lesson:", lessons.join(", "));
}

function showError(message) {
  retryButton.hidden = false;
  console.log(message);
}

async function loadDashboard() {
  showLoading();

  try {
    const lessons = await fetchDashboardLessons();

    if (lessons.length === 0) {
      showEmpty();
      return;
    }

    showSuccess(lessons);
  } catch (error) {
    showError("Dashboard gagal dimuat.");
    console.error(error);
  }
}

retryButton.addEventListener("click", () => {
  loadDashboard();
});

loadDashboard();`,
  },
  checklist: [
    "loadDashboard memakai async function.",
    "Loading state muncul saat flow mulai.",
    "Empty state dipisahkan dari error state.",
    "Success state menerima lessons.",
    "Error state berada di catch.",
    "Retry button menjalankan ulang loadDashboard.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "dashboard-async-function",
        label: "loadDashboard ditulis sebagai async function.",
        type: "contains",
        target: "async function loadDashboard()",
        valueIncludes: "async function loadDashboard()",
      },
      {
        id: "dashboard-loading",
        label: "showLoading dipanggil saat mulai.",
        type: "contains",
        target: "showLoading();",
        valueIncludes: "showLoading();",
      },
      {
        id: "dashboard-await",
        label: "fetchDashboardLessons ditunggu dengan await.",
        type: "contains",
        target: "const lessons = await fetchDashboardLessons();",
        valueIncludes: "const lessons = await fetchDashboardLessons();",
      },
      {
        id: "dashboard-empty-check",
        label: "Data kosong dicek.",
        type: "contains",
        target: "if (lessons.length === 0) {",
        valueIncludes: "if (lessons.length === 0) {",
      },
      {
        id: "dashboard-empty-state",
        label: "Empty state dipanggil.",
        type: "contains",
        target: "showEmpty();",
        valueIncludes: "showEmpty();",
      },
      {
        id: "dashboard-success-state",
        label: "Success state menerima lessons.",
        type: "contains",
        target: "showSuccess(lessons);",
        valueIncludes: "showSuccess(lessons);",
      },
      {
        id: "dashboard-catch",
        label: "Error ditangani dengan catch.",
        type: "contains",
        target: "catch (error) {",
        valueIncludes: "catch (error) {",
      },
      {
        id: "dashboard-error-state",
        label: "Error state menampilkan pesan dashboard.",
        type: "contains",
        target: `showError("Dashboard gagal dimuat.");`,
        valueIncludes: `showError("Dashboard gagal dimuat.");`,
      },
      {
        id: "dashboard-retry-listener",
        label: "Retry button menjalankan loadDashboard saat diklik.",
        type: "contains",
        target: `retryButton.addEventListener("click", () => {
  loadDashboard();
});`,
        valueIncludes: `retryButton.addEventListener("click", () => {
  loadDashboard();
});`,
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Dengan data berhasil, console menunjukkan loading lalu success state.",
    lines: ["Memuat dashboard...", "Lesson: Promise Dasar, async / await"],
  },
  skillTags: ["JavaScript", "Async", "Error Handling", "UI State", "Retry"],
};
