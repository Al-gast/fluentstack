import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const javascriptBrowserApisDataDebuggingModule: Module = {
  id: "javascript-browser-apis-data-transformation-debugging",
  trackId: "frontend-engineering",
  title: "Browser APIs, Data Transformation, and Debugging",
  slug: "javascript-browser-apis-data-transformation-debugging",
  description:
    "Menggunakan Browser API terpilih, merapikan data sebelum render, dan melakukan debugging JavaScript browser dengan strategi yang jelas.",
  order: 16,
  lessonIds: [
    "javascript-url-timer-api-basic",
    "javascript-clipboard-storage-patterns",
    "javascript-data-transformation-ui",
    "javascript-network-debugging",
    "javascript-breakpoints-console-strategy",
    "javascript-browser-apis-debugging-assessment",
  ],
  estimatedHours: 6,
  skillTags: ["JavaScript", "Browser APIs", "Data Transformation", "Debugging"],
};

export const javascriptUrlTimerApiBasicLesson: Lesson = {
  id: "javascript-url-timer-api-basic",
  trackId: "frontend-engineering",
  moduleId: "javascript-browser-apis-data-transformation-debugging",
  title: "URL dan Timer API Dasar",
  slug: "javascript-url-timer-api-basic",
  description:
    "Membaca query parameter dengan URL API dan menjalankan aksi sederhana dengan timer.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 40,
  objectives: [
    "Membaca nilai dari URL query parameter",
    "Memakai setTimeout untuk aksi sekali jalan",
    "Memakai setInterval untuk aksi berulang yang bisa dihentikan",
  ],
  skillTags: ["JavaScript", "URL API", "Timer"],
  blocks: [
    {
      id: "javascript-url-timer-api-basic-intro",
      type: "text",
      title: "Browser punya API yang bisa dipakai JavaScript",
      content:
        "Di module sebelumnya, kamu sudah membuat async flow yang lebih jujur untuk user. Sekarang kita mulai memakai kemampuan browser dengan lebih sengaja.\n\nBrowser API adalah fitur yang disediakan browser untuk JavaScript. Di lesson ini, fokusnya kecil dulu: membaca URL dan menjalankan timer. Dua hal ini sering muncul di app nyata, misalnya filter dari query string, notifikasi sementara, countdown, atau refresh status berkala.",
    },
    {
      id: "javascript-url-timer-api-basic-concept",
      type: "text",
      title: "URL menyimpan konteks halaman",
      content:
        "Query parameter adalah bagian URL setelah tanda tanya. Contoh: `/dashboard?tab=active`. Nilai `tab` bisa dipakai JavaScript untuk menentukan tampilan awal.\n\nTimer punya dua bentuk dasar. `setTimeout` menjalankan function setelah jeda tertentu. `setInterval` menjalankan function berulang sampai kamu menghentikannya dengan `clearInterval`.",
    },
    {
      id: "javascript-url-timer-api-basic-code-example",
      type: "code-example",
      title: "Membaca query dan menjalankan timer kecil",
      language: "js",
      code: `const currentUrl = new URL(window.location.href);
const selectedTab = currentUrl.searchParams.get("tab") ?? "overview";

console.log("Tab aktif:", selectedTab);

setTimeout(() => {
  console.log("Pesan ini muncul sekali setelah 1 detik.");
}, 1000);

let tick = 0;
const timerId = setInterval(() => {
  tick += 1;
  console.log("Tick:", tick);

  if (tick === 3) {
    clearInterval(timerId);
  }
}, 1000);`,
      explanation:
        "URL dipakai untuk membaca query parameter. setTimeout cocok untuk aksi sekali jalan, sedangkan setInterval perlu dihentikan saat tugasnya selesai.",
    },
    {
      id: "javascript-url-timer-api-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Timer yang tidak dihentikan bisa membuat app terasa aneh",
      content:
        "Jangan memakai setInterval tanpa rencana berhenti. Kalau interval terus berjalan setelah UI tidak membutuhkannya, app bisa menjalankan kerja yang tidak perlu dan membuat debugging lebih sulit.",
    },
    {
      id: "javascript-url-timer-api-basic-quick-check",
      type: "quick-check",
      question:
        "API mana yang paling tepat untuk menjalankan function sekali setelah jeda tertentu?",
      options: ["setTimeout", "setInterval", "localStorage", "URLSearchParams"],
      correctAnswer: "setTimeout",
      explanation:
        "setTimeout menjalankan function sekali setelah delay. setInterval menjalankan function berulang sampai dihentikan.",
    },
    {
      id: "javascript-url-timer-api-basic-coding-practice",
      type: "coding-practice",
      challengeId: "read-url-param-and-timer",
    },
    {
      id: "javascript-url-timer-api-basic-summary",
      type: "summary",
      points: [
        "URL API membantu JavaScript membaca bagian URL dengan lebih aman daripada parsing string manual.",
        "URLSearchParams dipakai untuk mengambil query parameter.",
        "setTimeout cocok untuk aksi sekali jalan.",
        "setInterval cocok untuk aksi berulang, tetapi harus punya strategi berhenti.",
        "Berikutnya, kamu akan memakai Clipboard dan localStorage untuk fitur UI kecil yang sering muncul di app.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-url-timer-api-basic-intro",
      "javascript-url-timer-api-basic-concept",
      "javascript-url-timer-api-basic-code-example",
      "javascript-url-timer-api-basic-common-mistake",
      "javascript-url-timer-api-basic-quick-check",
      "javascript-url-timer-api-basic-coding-practice",
      "javascript-url-timer-api-basic-summary",
    ],
  },
};

export const javascriptClipboardStoragePatternsLesson: Lesson = {
  id: "javascript-clipboard-storage-patterns",
  trackId: "frontend-engineering",
  moduleId: "javascript-browser-apis-data-transformation-debugging",
  title: "Clipboard dan Storage Patterns",
  slug: "javascript-clipboard-storage-patterns",
  description:
    "Memakai Clipboard API dan localStorage untuk interaksi kecil yang terasa praktis.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami kapan Clipboard API berguna",
    "Menyimpan state kecil dengan localStorage",
    "Membedakan data UI kecil dari data penting yang perlu backend",
  ],
  skillTags: ["JavaScript", "Clipboard API", "localStorage"],
  blocks: [
    {
      id: "javascript-clipboard-storage-patterns-intro",
      type: "text",
      title: "API kecil bisa membuat workflow terasa rapi",
      content:
        "Tidak semua fitur browser API harus besar. Tombol copy, preferensi tema, tab terakhir, atau draft kecil bisa membuat app terasa lebih nyaman.\n\nLesson ini fokus pada dua pola: menyalin teks dengan Clipboard API dan menyimpan state kecil dengan localStorage. Keduanya berguna, tetapi harus dipakai dengan batas yang jelas.",
    },
    {
      id: "javascript-clipboard-storage-patterns-code-example",
      type: "code-example",
      title: "Copy text dan simpan pilihan kecil",
      language: "js",
      code: `const shareText = "https://fluentstack.local/lesson/async";
const selectedTheme = "paper";

async function copyShareLink() {
  try {
    await navigator.clipboard.writeText(shareText);
    console.log("Link disalin.");
  } catch (error) {
    console.log("Browser belum mengizinkan akses clipboard.");
    console.error(error);
  }
}

localStorage.setItem("preferred-theme", selectedTheme);
const savedTheme = localStorage.getItem("preferred-theme") ?? "dark";`,
      explanation:
        "Clipboard API bersifat async dan bisa gagal karena izin atau konteks browser. localStorage cocok untuk nilai kecil berbentuk string.",
    },
    {
      id: "javascript-clipboard-storage-patterns-warning",
      type: "callout",
      variant: "warning",
      title: "Jangan simpan data sensitif di localStorage",
      content:
        "localStorage mudah dibaca oleh JavaScript di halaman yang sama. Jangan simpan token penting, password, data pembayaran, atau informasi sensitif di sana. Untuk module ini, localStorage hanya dipakai untuk state UI kecil.",
    },
    {
      id: "javascript-clipboard-storage-patterns-coding-practice",
      type: "coding-practice",
      challengeId: "copy-and-save-ui-state",
    },
    {
      id: "javascript-clipboard-storage-patterns-summary",
      type: "summary",
      points: [
        "Clipboard API cocok untuk aksi copy yang eksplisit dari user.",
        "Akses clipboard bisa gagal, jadi siapkan pesan fallback.",
        "localStorage menyimpan string di browser user.",
        "Gunakan localStorage untuk preferensi kecil, bukan data sensitif.",
        "Berikutnya, kamu akan mengubah data mentah menjadi data yang siap dirender.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-clipboard-storage-patterns-intro",
      "javascript-clipboard-storage-patterns-code-example",
      "javascript-clipboard-storage-patterns-warning",
      "javascript-clipboard-storage-patterns-coding-practice",
      "javascript-clipboard-storage-patterns-summary",
    ],
  },
};

export const javascriptDataTransformationUiLesson: Lesson = {
  id: "javascript-data-transformation-ui",
  trackId: "frontend-engineering",
  moduleId: "javascript-browser-apis-data-transformation-debugging",
  title: "Transformasi Data untuk UI",
  slug: "javascript-data-transformation-ui",
  description:
    "Merapikan data mentah dengan map, filter, sort, dan bentuk object yang siap dirender.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Membedakan data mentah dari data siap render",
    "Memakai filter, sort, dan map secara berurutan",
    "Membuat object UI yang lebih mudah dipakai render function",
  ],
  skillTags: ["JavaScript", "Array", "Data Transformation"],
  blocks: [
    {
      id: "javascript-data-transformation-ui-intro",
      type: "text",
      title: "UI sebaiknya tidak menanggung data mentah",
      content:
        "Data dari API, localStorage, atau file sering belum nyaman untuk langsung dirender. Nama field bisa terlalu teknis, urutannya belum benar, sebagian item tidak aktif, atau value masih perlu dirapikan.\n\nTransformasi data berarti menyiapkan data sebelum masuk ke render function. Hasilnya, render function bisa fokus menampilkan UI, bukan membersihkan data di tengah template.",
    },
    {
      id: "javascript-data-transformation-ui-before-after",
      type: "code-example",
      title: "Dari data mentah ke data siap render",
      language: "js",
      code: `const rawLessons = [
  { title: " Async ", minutes: 30, published: true, order: 2 },
  { title: "Scope", minutes: 25, published: true, order: 1 },
  { title: "Draft", minutes: 10, published: false, order: 3 },
];

const visibleLessons = rawLessons
  .filter((lesson) => lesson.published)
  .sort((first, second) => first.order - second.order)
  .map((lesson) => ({
    title: lesson.title.trim(),
    meta: lesson.minutes + " menit",
  }));

console.log(visibleLessons);`,
      explanation:
        "filter membuang data yang tidak perlu tampil, sort mengatur urutan, dan map membentuk object yang lebih siap dipakai UI.",
    },
    {
      id: "javascript-data-transformation-ui-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Pisahkan transform dan render",
      content:
        "Kalau render function mulai penuh dengan if kecil, trim, sort, dan label formatting, pindahkan pekerjaan itu ke function transform. Ini membuat bug data lebih mudah dicari.",
    },
    {
      id: "javascript-data-transformation-ui-coding-practice",
      type: "coding-practice",
      challengeId: "transform-raw-data-for-ui",
    },
    {
      id: "javascript-data-transformation-ui-summary",
      type: "summary",
      points: [
        "Data mentah belum tentu cocok langsung masuk UI.",
        "filter, sort, dan map bisa disusun menjadi pipeline yang mudah dibaca.",
        "Render function lebih bersih jika menerima data yang sudah siap tampil.",
        "Berikutnya, kamu akan memakai Network panel untuk mencari masalah data dari request.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-data-transformation-ui-intro",
      "javascript-data-transformation-ui-before-after",
      "javascript-data-transformation-ui-decision-rule",
      "javascript-data-transformation-ui-coding-practice",
      "javascript-data-transformation-ui-summary",
    ],
  },
};

export const javascriptNetworkDebuggingLesson: Lesson = {
  id: "javascript-network-debugging",
  trackId: "frontend-engineering",
  moduleId: "javascript-browser-apis-data-transformation-debugging",
  title: "Network Debugging",
  slug: "javascript-network-debugging",
  description:
    "Memakai Network panel untuk membaca request, response, status, dan tanda awal masalah data.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Memahami apa yang perlu dilihat di Network panel",
    "Membedakan masalah request, response, dan render",
    "Membuat catatan debugging yang tidak hanya menebak",
  ],
  skillTags: ["JavaScript", "DevTools", "Network Debugging"],
  blocks: [
    {
      id: "javascript-network-debugging-intro",
      type: "text",
      title: "Jangan langsung menyalahkan render",
      content:
        "Saat data tidak tampil, penyebabnya belum tentu DOM atau render function. Bisa jadi request gagal, URL salah, response kosong, status error, atau bentuk data berbeda dari yang kamu kira.\n\nNetwork panel membantu kamu melihat apa yang benar-benar terjadi antara browser dan server. Ini membuat debugging lebih berbasis bukti.",
    },
    {
      id: "javascript-network-debugging-case-study",
      type: "callout",
      variant: "important",
      title: "Urutan cek yang praktis",
      content:
        "Mulai dari request. Apakah request terkirim? Lalu cek status. Apakah 200, 404, 500, atau gagal network? Setelah itu cek response. Apakah datanya ada dan bentuknya sesuai? Baru setelah itu cek transformasi dan render.",
    },
    {
      id: "javascript-network-debugging-local-checklist",
      type: "text",
      title: "Checklist debugging di local project",
      content:
        "Buka Local Vanilla JavaScript App kamu, lalu lakukan satu debugging pass:\n\n- Buka DevTools dan masuk ke tab Network.\n- Reload halaman agar request terlihat dari awal.\n- Pilih satu request data atau file JavaScript.\n- Catat URL request, status, tipe response, dan preview response.\n- Jika ada error, tentukan apakah masalahnya request, response, transformasi data, atau render.\n- Tulis satu kalimat fix path: bagian mana yang perlu dicek atau diubah dulu.",
    },
    {
      id: "javascript-network-debugging-docs",
      type: "documentation-bridge",
      title: "Baca dokumentasi Network panel",
      description:
        "Gunakan dokumentasi resmi Chrome DevTools sebagai peta. Jangan hafalkan semua fitur panel.",
      links: [
        {
          source: "Chrome DevTools",
          title: "Inspect network activity",
          url: "https://developer.chrome.com/docs/devtools/network",
          focus: [
            "cara membuka Network panel",
            "cara melihat request yang terjadi",
            "status, headers, preview, dan response",
            "kapan reload halaman diperlukan",
          ],
          ignoreForNow: [
            "advanced filtering",
            "performance throttling detail",
            "export HAR workflow",
          ],
        },
      ],
      followUpAction:
        "Buka satu request di local project kamu dan tulis: URL, status, response shape, dan dugaan awal sumber masalah.",
    },
    {
      id: "javascript-network-debugging-summary",
      type: "summary",
      points: [
        "Network panel membantu memastikan request benar-benar terjadi.",
        "Status dan response perlu dicek sebelum menyalahkan render.",
        "Debugging yang baik dimulai dari bukti kecil yang bisa dilihat.",
        "Berikutnya, kamu akan menyusun strategi console dan breakpoint untuk mengisolasi bug JavaScript.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-network-debugging-intro",
      "javascript-network-debugging-case-study",
      "javascript-network-debugging-local-checklist",
      "javascript-network-debugging-docs",
      "javascript-network-debugging-summary",
    ],
  },
};

export const javascriptBreakpointsConsoleStrategyLesson: Lesson = {
  id: "javascript-breakpoints-console-strategy",
  trackId: "frontend-engineering",
  moduleId: "javascript-browser-apis-data-transformation-debugging",
  title: "Breakpoints dan Console Strategy",
  slug: "javascript-breakpoints-console-strategy",
  description:
    "Menggunakan console dan breakpoint untuk mengisolasi bug JavaScript dengan lebih terarah.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menentukan lokasi bug dengan pertanyaan kecil",
    "Memakai console log secara sengaja",
    "Memahami kapan breakpoint lebih cocok daripada menambah log",
  ],
  skillTags: ["JavaScript", "Debugging", "Breakpoints"],
  blocks: [
    {
      id: "javascript-breakpoints-console-strategy-intro",
      type: "text",
      title: "Debugging bukan menebak secepat mungkin",
      content:
        "Semakin besar JavaScript app, semakin mahal kalau kamu hanya menebak. Debugging yang baik mengecilkan area masalah.\n\nGunakan console untuk melihat nilai penting di titik tertentu. Gunakan breakpoint saat kamu perlu menghentikan kode dan melihat perubahan value langkah demi langkah.",
    },
    {
      id: "javascript-breakpoints-console-strategy-case-study",
      type: "code-example",
      title: "Bug kecil: total belanja menjadi string aneh",
      language: "js",
      code: `const cartItems = [
  { name: "Keyboard", price: "500000" },
  { name: "Mouse", price: "200000" },
];

const total = cartItems.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(total); // "0500000200000"`,
      explanation:
        "Bug ini terjadi karena price masih string. Console membantu melihat value, tetapi breakpoint akan lebih jelas jika kamu ingin melihat perubahan sum di setiap iterasi.",
    },
    {
      id: "javascript-breakpoints-console-strategy-rule",
      type: "callout",
      variant: "tip",
      title: "Pakai pertanyaan debugging",
      content:
        "Tanyakan tiga hal: nilai apa yang aku harapkan, nilai apa yang benar-benar terjadi, dan di baris mana nilai mulai berbeda? Pertanyaan ini membuat console dan breakpoint punya tujuan.",
    },
    {
      id: "javascript-breakpoints-console-strategy-coding-practice",
      type: "coding-practice",
      challengeId: "fix-total-bug-with-debug-logs",
    },
    {
      id: "javascript-breakpoints-console-strategy-summary",
      type: "summary",
      points: [
        "Console log sebaiknya menjawab pertanyaan debugging yang spesifik.",
        "Breakpoint berguna saat kamu perlu melihat perubahan value langkah demi langkah.",
        "Bug lebih mudah diperbaiki setelah kamu tahu kapan value mulai menyimpang.",
        "Berikutnya, Uji Kompetensi akan mengecek Browser API, transformasi data, dan debugging strategy dalam satu flow.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-breakpoints-console-strategy-intro",
      "javascript-breakpoints-console-strategy-case-study",
      "javascript-breakpoints-console-strategy-rule",
      "javascript-breakpoints-console-strategy-coding-practice",
      "javascript-breakpoints-console-strategy-summary",
    ],
  },
};

export const javascriptBrowserApisDebuggingAssessmentLesson: Lesson = {
  id: "javascript-browser-apis-debugging-assessment",
  trackId: "frontend-engineering",
  moduleId: "javascript-browser-apis-data-transformation-debugging",
  title: "Uji Kompetensi Browser APIs and Debugging",
  slug: "javascript-browser-apis-debugging-assessment",
  description:
    "Checkpoint kesiapan untuk Browser API dasar, transformasi data, dan strategi debugging JavaScript browser.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 70,
  objectives: [
    "Mengecek pemahaman Browser API dasar",
    "Memperbaiki flow data sebelum render",
    "Menjelaskan bug dan langkah perbaikannya dengan jelas",
  ],
  skillTags: ["JavaScript", "Browser APIs", "Debugging", "Assessment"],
  blocks: [
    {
      id: "javascript-browser-apis-debugging-assessment-recap",
      type: "text",
      title: "Checkpoint: apakah kamu bisa memakai browser sebagai alat kerja?",
      content:
        "Module ini bukan tentang menghafal semua API browser. Yang dicek adalah kemampuan memilih API kecil dengan tepat, merapikan data sebelum render, dan mencari bug dengan bukti.\n\nKalau kamu bisa membaca URL, memakai timer sederhana, menyimpan state kecil, mengubah data mentah, mengecek Network panel, dan menjelaskan bug dengan jelas, kamu siap masuk ke TypeScript dengan pondasi JavaScript yang lebih rapi.",
    },
    {
      id: "javascript-browser-apis-debugging-assessment-quiz",
      type: "quiz",
      quizId: "javascript-browser-apis-debugging-assessment-quiz",
    },
    {
      id: "javascript-browser-apis-debugging-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "debug-browser-data-flow-checkpoint",
    },
    {
      id: "javascript-browser-apis-debugging-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan debugging singkat dalam Bahasa Indonesia. Jelaskan bug yang kamu temukan, bukti yang kamu lihat, kemungkinan penyebab, dan fix path yang akan kamu ambil.\n\nGunakan format:\n- Bug:\n- Bukti:\n- Dugaan penyebab:\n- Fix path:",
      placeholder:
        "Bug: Data lesson tidak tampil saat kategori dipilih.\nBukti: Network status 200, response berisi data, tetapi hasil filter kosong.\nDugaan penyebab: Nilai category dari URL tidak sama dengan field category di data.\nFix path: Log selectedCategory dan item.category, lalu rapikan normalisasi sebelum filter.",
      minimumCharacters: 160,
      checklist: [
        "Bug ditulis spesifik.",
        "Bukti berasal dari console, Network panel, atau nilai data.",
        "Dugaan penyebab tidak hanya menebak UI.",
        "Fix path menyebut bagian kode yang perlu dicek lebih dulu.",
      ],
      modelAnswer:
        "Bug: Daftar lesson kosong saat category dari URL dipakai. Bukti: Network panel menunjukkan request berhasil dengan status 200 dan response berisi beberapa lesson. Console menunjukkan selectedCategory bernilai \"js\", sedangkan item.category bernilai \"javascript\". Dugaan penyebab: filter memakai nilai category yang tidak dinormalisasi. Fix path: normalisasi category dari URL atau samakan value category di data sebelum filter dijalankan.",
    },
    {
      id: "javascript-browser-apis-debugging-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge sebelum TypeScript",
      description:
        "Baca dokumentasi resmi sebagai referensi kerja, bukan daftar yang harus dihafalkan.",
      links: [
        {
          source: "MDN",
          title: "URL API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/URL",
          focus: [
            "membuat URL object",
            "membaca searchParams",
            "membedakan href, pathname, dan search",
          ],
          ignoreForNow: ["blob URL", "advanced URL encoding details"],
        },
        {
          source: "MDN",
          title: "URLSearchParams",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",
          focus: [
            "mengambil nilai query dengan get",
            "membaca beberapa parameter sederhana",
            "hubungan URLSearchParams dengan URL.searchParams",
          ],
          ignoreForNow: ["iterator detail", "advanced serialization"],
        },
        {
          source: "MDN",
          title: "Window setTimeout",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
          focus: [
            "aksi sekali jalan setelah delay",
            "callback function",
            "timer id untuk clearTimeout saat dibutuhkan",
          ],
          ignoreForNow: ["nested timeout behavior detail"],
        },
        {
          source: "MDN",
          title: "Window setInterval",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval",
          focus: [
            "aksi berulang",
            "timer id",
            "kapan clearInterval diperlukan",
          ],
          ignoreForNow: ["this binding edge case", "advanced scheduling"],
        },
        {
          source: "MDN",
          title: "Clipboard API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",
          focus: [
            "aksi copy dari user",
            "permission dan secure context",
            "kenapa clipboard operation bisa gagal",
          ],
          ignoreForNow: ["custom clipboard formats"],
        },
        {
          source: "MDN",
          title: "Web Storage API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
          focus: [
            "localStorage untuk data kecil",
            "sessionStorage vs localStorage",
            "batas aman pemakaian storage di browser",
          ],
          ignoreForNow: ["storage quota detail", "IndexedDB"],
        },
        {
          source: "Chrome DevTools",
          title: "Inspect network activity",
          url: "https://developer.chrome.com/docs/devtools/network",
          focus: [
            "melihat request",
            "membaca status dan response",
            "menggunakan reload untuk menangkap request awal",
          ],
          ignoreForNow: ["HAR export", "advanced throttling"],
        },
        {
          source: "Chrome DevTools",
          title: "Debug JavaScript",
          url: "https://developer.chrome.com/docs/devtools/javascript",
          focus: [
            "menaruh breakpoint",
            "melihat variable saat pause",
            "melangkah melalui kode untuk menemukan nilai yang berubah",
          ],
          ignoreForNow: ["source maps detail", "blackboxing scripts"],
        },
      ],
      followUpAction:
        "Pilih satu bug kecil di local project, lalu tulis satu catatan README: gejala, bukti, penyebab, dan perubahan yang kamu lakukan.",
    },
    {
      id: "javascript-browser-apis-debugging-assessment-summary",
      type: "summary",
      points: [
        "Browser API dipakai saat ada kebutuhan produk yang jelas.",
        "Data sebaiknya ditransformasi sebelum render.",
        "Network panel membantu memastikan request dan response.",
        "Console dan breakpoint membantu mengisolasi nilai yang salah.",
        "Setelah ini, TypeScript akan membantu memberi struktur yang lebih kuat pada data dan function yang mulai kompleks.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "javascript-browser-apis-debugging-assessment-recap",
      "javascript-browser-apis-debugging-assessment-quiz",
      "javascript-browser-apis-debugging-assessment-coding-practice",
      "javascript-browser-apis-debugging-assessment-writing-practice",
      "javascript-browser-apis-debugging-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const javascriptBrowserApisDebuggingAssessmentQuiz: Quiz = {
  id: "javascript-browser-apis-debugging-assessment-quiz",
  lessonId: "javascript-browser-apis-debugging-assessment",
  title: "Uji Kompetensi Browser APIs and Debugging",
  passingScore: 70,
  questions: [
    {
      id: "browser-apis-debugging-q1",
      type: "multiple-choice",
      question:
        "Saat ingin membaca nilai `?tab=active` dari URL halaman, API apa yang paling tepat?",
      options: ["URL dan searchParams", "setInterval", "Clipboard API", "console.error"],
      correctAnswer: "URL dan searchParams",
      explanation:
        "URL dan URLSearchParams membantu membaca query parameter tanpa parsing string manual.",
    },
    {
      id: "browser-apis-debugging-q2",
      type: "multiple-choice",
      question:
        "Kapan setInterval perlu dihentikan dengan clearInterval?",
      options: [
        "Saat aksi berulang sudah tidak dibutuhkan",
        "Setiap kali console.log dipanggil",
        "Sebelum URL dibaca",
        "Saat localStorage kosong",
      ],
      correctAnswer: "Saat aksi berulang sudah tidak dibutuhkan",
      explanation:
        "Interval terus berjalan sampai dihentikan. Jika tidak diperlukan lagi, hentikan agar app tidak menjalankan kerja yang tidak perlu.",
    },
    {
      id: "browser-apis-debugging-q3",
      type: "true-false",
      question:
        "localStorage cocok untuk menyimpan password user karena datanya tersimpan di browser.",
      correctAnswer: false,
      explanation:
        "localStorage tidak cocok untuk data sensitif. Gunakan hanya untuk state UI kecil atau data non-sensitif.",
    },
    {
      id: "browser-apis-debugging-q4",
      type: "multiple-choice",
      question:
        "Urutan yang paling masuk akal untuk menyiapkan data sebelum render adalah...",
      options: [
        "filter data yang perlu tampil, sort urutan, lalu map ke bentuk UI",
        "render semua data, lalu hapus item dari DOM satu per satu",
        "console.log data dan langsung abaikan",
        "simpan semua data mentah ke localStorage dulu",
      ],
      correctAnswer: "filter data yang perlu tampil, sort urutan, lalu map ke bentuk UI",
      explanation:
        "Pipeline filter, sort, lalu map membuat render function menerima data yang lebih siap tampil.",
    },
    {
      id: "browser-apis-debugging-q5",
      type: "multiple-choice",
      question:
        "Jika data tidak tampil, tetapi Network panel menunjukkan status 200 dan response berisi data, area berikutnya yang perlu dicek adalah...",
      options: [
        "transformasi data dan render logic",
        "apakah komputer menyala",
        "warna background halaman",
        "nama tab browser",
      ],
      correctAnswer: "transformasi data dan render logic",
      explanation:
        "Jika request berhasil dan data ada, masalah mungkin terjadi saat data difilter, dimap, atau dirender.",
    },
  ],
};

export const readUrlParamAndTimerChallenge: CodingChallenge = {
  id: "read-url-param-and-timer",
  lessonId: "javascript-url-timer-api-basic",
  title: "Baca query dan jalankan timer",
  description:
    "Latihan membaca query parameter dari URL dan membuat timer kecil yang berhenti sendiri.",
  instructions: [
    "Fokus di tab JS.",
    "Buat currentUrl dari window.location.href.",
    "Ambil nilai mode dari currentUrl.searchParams dengan fallback \"practice\".",
    "Tampilkan mode dengan showMode(mode).",
    "Jalankan setTimeout untuk memanggil showMessage(\"Timer selesai.\").",
    "Jalankan setInterval dan hentikan dengan clearInterval saat count mencapai 3.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>URL dan timer</h1>
  <p id="statusText">Belum membaca URL.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function showMode(mode) {
  console.log("Mode:", mode);
}

function showMessage(message) {
  console.log(message);
}

let count = 0;

// Lengkapi URL dan timer di sini.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>URL dan timer</h1>
  <p id="statusText">Belum membaca URL.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `function showMode(mode) {
  console.log("Mode:", mode);
}

function showMessage(message) {
  console.log(message);
}

let count = 0;

const currentUrl = new URL(window.location.href);
const mode = currentUrl.searchParams.get("mode") ?? "practice";

showMode(mode);

setTimeout(() => {
  showMessage("Timer selesai.");
}, 1000);

const timerId = setInterval(() => {
  count += 1;
  console.log("Count:", count);

  if (count === 3) {
    clearInterval(timerId);
  }
}, 1000);`,
  },
  checklist: [
    "URL dibuat dari window.location.href.",
    "mode dibaca dari searchParams.",
    "setTimeout menjalankan aksi sekali.",
    "setInterval punya clearInterval.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "creates-url",
        label: "currentUrl dibuat dari window.location.href.",
        type: "contains",
        target: "const currentUrl = new URL(window.location.href);",
        valueIncludes: "const currentUrl = new URL(window.location.href);",
      },
      {
        id: "reads-mode-param",
        label: "mode dibaca dari searchParams dengan fallback.",
        type: "contains",
        target: `const mode = currentUrl.searchParams.get("mode") ?? "practice";`,
        valueIncludes: `const mode = currentUrl.searchParams.get("mode") ?? "practice";`,
      },
      {
        id: "shows-mode",
        label: "Mode ditampilkan.",
        type: "contains",
        target: "showMode(mode);",
        valueIncludes: "showMode(mode);",
      },
      {
        id: "uses-set-timeout",
        label: "setTimeout dipakai untuk aksi sekali.",
        type: "contains",
        target: "setTimeout(() => {",
        valueIncludes: "setTimeout(() => {",
      },
      {
        id: "uses-set-interval",
        label: "setInterval dipakai untuk aksi berulang.",
        type: "contains",
        target: "const timerId = setInterval(() => {",
        valueIncludes: "const timerId = setInterval(() => {",
      },
      {
        id: "clears-interval",
        label: "Interval dihentikan.",
        type: "contains",
        target: "clearInterval(timerId);",
        valueIncludes: "clearInterval(timerId);",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Mode tampil lebih dulu, lalu timer sekali dan count berulang sampai berhenti.",
    lines: ["Mode: practice", "Timer selesai.", "Count: 1", "Count: 2", "Count: 3"],
  },
  skillTags: ["JavaScript", "URL API", "Timer"],
};

export const copyAndSaveUiStateChallenge: CodingChallenge = {
  id: "copy-and-save-ui-state",
  lessonId: "javascript-clipboard-storage-patterns",
  title: "Copy text dan simpan state UI",
  description:
    "Latihan memakai Clipboard API dan localStorage untuk interaksi kecil.",
  instructions: [
    "Fokus di tab JS.",
    "Di dalam copyProfileLink, panggil navigator.clipboard.writeText(profileUrl).",
    "Tangani kegagalan clipboard dengan catch.",
    "Simpan selectedTheme ke localStorage dengan key \"profile-theme\".",
    "Baca kembali theme dengan localStorage.getItem dan fallback \"dark\".",
    "Panggil applyTheme(savedTheme).",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Profile share</h1>
  <button id="copyButton">Copy link</button>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const profileUrl = "https://fluentstack.local/profile/rina";
const selectedTheme = "paper";

function showStatus(message) {
  console.log(message);
}

function applyTheme(theme) {
  console.log("Theme:", theme);
}

async function copyProfileLink() {
  // Copy profileUrl di sini.
}

// Simpan dan baca theme di sini.`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Profile share</h1>
  <button id="copyButton">Copy link</button>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const profileUrl = "https://fluentstack.local/profile/rina";
const selectedTheme = "paper";

function showStatus(message) {
  console.log(message);
}

function applyTheme(theme) {
  console.log("Theme:", theme);
}

async function copyProfileLink() {
  try {
    await navigator.clipboard.writeText(profileUrl);
    showStatus("Link disalin.");
  } catch (error) {
    showStatus("Clipboard belum bisa dipakai.");
    console.error(error);
  }
}

localStorage.setItem("profile-theme", selectedTheme);
const savedTheme = localStorage.getItem("profile-theme") ?? "dark";
applyTheme(savedTheme);`,
  },
  checklist: [
    "Clipboard writeText dipanggil dengan profileUrl.",
    "Kegagalan clipboard ditangani.",
    "selectedTheme disimpan ke localStorage.",
    "savedTheme punya fallback.",
    "Theme yang tersimpan diterapkan lagi.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "clipboard-write",
        label: "Clipboard API menyalin profileUrl.",
        type: "contains",
        target: "await navigator.clipboard.writeText(profileUrl);",
        valueIncludes: "await navigator.clipboard.writeText(profileUrl);",
      },
      {
        id: "clipboard-catch",
        label: "Kegagalan clipboard ditangani.",
        type: "contains",
        target: "catch (error) {",
        valueIncludes: "catch (error) {",
      },
      {
        id: "storage-set-theme",
        label: "Theme disimpan ke localStorage.",
        type: "contains",
        target: `localStorage.setItem("profile-theme", selectedTheme);`,
        valueIncludes: `localStorage.setItem("profile-theme", selectedTheme);`,
      },
      {
        id: "storage-get-theme",
        label: "Theme dibaca dengan fallback.",
        type: "contains",
        target: `const savedTheme = localStorage.getItem("profile-theme") ?? "dark";`,
        valueIncludes: `const savedTheme = localStorage.getItem("profile-theme") ?? "dark";`,
      },
      {
        id: "apply-theme",
        label: "Theme yang tersimpan diterapkan.",
        type: "contains",
        target: "applyTheme(savedTheme);",
        valueIncludes: "applyTheme(savedTheme);",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Theme yang disimpan dibaca kembali. Aksi copy bisa berhasil atau gagal tergantung izin browser.",
    lines: ["Theme: paper"],
  },
  skillTags: ["JavaScript", "Clipboard API", "localStorage"],
};

export const transformRawDataForUiChallenge: CodingChallenge = {
  id: "transform-raw-data-for-ui",
  lessonId: "javascript-data-transformation-ui",
  title: "Transform data mentah untuk UI",
  description:
    "Latihan menyiapkan data lesson agar render function menerima data yang sudah rapi.",
  instructions: [
    "Fokus di tab JS.",
    "Buat visibleLessons dari rawLessons.",
    "Filter hanya lesson yang published.",
    "Urutkan berdasarkan order dari kecil ke besar.",
    "Map setiap lesson menjadi object berisi title dan label.",
    "title harus memakai lesson.title.trim().",
    "label harus berisi title dan durasi menit.",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Lesson list</h1>
  <ul id="lessonList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const rawLessons = [
  { title: " Async JavaScript ", minutes: 40, published: true, order: 2 },
  { title: "Scope", minutes: 35, published: true, order: 1 },
  { title: "Draft browser API", minutes: 20, published: false, order: 3 },
];

function renderLessons(lessons) {
  console.log(lessons);
}

// Buat visibleLessons di sini.

renderLessons(visibleLessons);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Lesson list</h1>
  <ul id="lessonList"></ul>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const rawLessons = [
  { title: " Async JavaScript ", minutes: 40, published: true, order: 2 },
  { title: "Scope", minutes: 35, published: true, order: 1 },
  { title: "Draft browser API", minutes: 20, published: false, order: 3 },
];

function renderLessons(lessons) {
  console.log(lessons);
}

const visibleLessons = rawLessons
  .filter((lesson) => lesson.published)
  .sort((first, second) => first.order - second.order)
  .map((lesson) => ({
    title: lesson.title.trim(),
    label: lesson.title.trim() + " - " + lesson.minutes + " menit",
  }));

renderLessons(visibleLessons);`,
  },
  checklist: [
    "Data draft tidak ikut tampil.",
    "Lesson diurutkan berdasarkan order.",
    "Title dirapikan dengan trim.",
    "Label siap dipakai UI.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "creates-visible-lessons",
        label: "visibleLessons dibuat dari rawLessons.",
        type: "contains",
        target: "const visibleLessons = rawLessons",
        valueIncludes: "const visibleLessons = rawLessons",
      },
      {
        id: "filters-published",
        label: "Hanya lesson published yang dipakai.",
        type: "contains",
        target: ".filter((lesson) => lesson.published)",
        valueIncludes: ".filter((lesson) => lesson.published)",
      },
      {
        id: "sorts-by-order",
        label: "Lesson diurutkan berdasarkan order.",
        type: "contains",
        target: ".sort((first, second) => first.order - second.order)",
        valueIncludes: ".sort((first, second) => first.order - second.order)",
      },
      {
        id: "maps-data",
        label: "Data dimap ke bentuk object UI.",
        type: "contains",
        target: ".map((lesson) => ({",
        valueIncludes: ".map((lesson) => ({",
      },
      {
        id: "trims-title",
        label: "Title dirapikan.",
        type: "contains",
        target: "title: lesson.title.trim(),",
        valueIncludes: "title: lesson.title.trim(),",
      },
      {
        id: "creates-label",
        label: "Label berisi title dan durasi.",
        type: "contains",
        target: `label: lesson.title.trim() + " - " + lesson.minutes + " menit",`,
        valueIncludes: `label: lesson.title.trim() + " - " + lesson.minutes + " menit",`,
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Console berisi dua lesson published, sudah urut dan punya label siap render.",
    lines: ["Scope - 35 menit", "Async JavaScript - 40 menit"],
  },
  skillTags: ["JavaScript", "Array", "Data Transformation"],
};

export const fixTotalBugWithDebugLogsChallenge: CodingChallenge = {
  id: "fix-total-bug-with-debug-logs",
  lessonId: "javascript-breakpoints-console-strategy",
  title: "Perbaiki bug total dengan log yang jelas",
  description:
    "Latihan mengisolasi bug string price dan memperbaiki perhitungan total.",
  instructions: [
    "Fokus di tab JS.",
    "Tambahkan console.log untuk cartItems agar nilai awal terlihat.",
    "Buat numericPrices dengan map dan Number(item.price).",
    "Hitung total dari numericPrices dengan reduce.",
    "Panggil showTotal(total).",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Total belanja</h1>
  <p id="totalText">Total belum dihitung.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const cartItems = [
  { name: "Keyboard", price: "500000" },
  { name: "Mouse", price: "200000" },
];

function showTotal(total) {
  console.log("Total:", total);
}

// Bug: hasil total menjadi string panjang.
const total = cartItems.reduce((sum, item) => {
  return sum + item.price;
}, 0);

showTotal(total);`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Total belanja</h1>
  <p id="totalText">Total belum dihitung.</p>
</main>`,
    css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const cartItems = [
  { name: "Keyboard", price: "500000" },
  { name: "Mouse", price: "200000" },
];

function showTotal(total) {
  console.log("Total:", total);
}

console.log("cartItems", cartItems);

const numericPrices = cartItems.map((item) => Number(item.price));
const total = numericPrices.reduce((sum, price) => sum + price, 0);

showTotal(total);`,
  },
  checklist: [
    "Log membantu melihat data awal.",
    "Price string diubah menjadi number.",
    "reduce menjumlahkan angka, bukan string.",
    "showTotal menerima total yang benar.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "logs-cart-items",
        label: "cartItems dilog untuk debugging.",
        type: "contains",
        target: `console.log("cartItems", cartItems);`,
        valueIncludes: `console.log("cartItems", cartItems);`,
      },
      {
        id: "creates-numeric-prices",
        label: "price dikonversi ke number.",
        type: "contains",
        target: "const numericPrices = cartItems.map((item) => Number(item.price));",
        valueIncludes: "const numericPrices = cartItems.map((item) => Number(item.price));",
      },
      {
        id: "reduces-number-prices",
        label: "total dihitung dari numericPrices.",
        type: "contains",
        target: "const total = numericPrices.reduce((sum, price) => sum + price, 0);",
        valueIncludes: "const total = numericPrices.reduce((sum, price) => sum + price, 0);",
      },
      {
        id: "shows-fixed-total",
        label: "showTotal menerima total.",
        type: "contains",
        target: "showTotal(total);",
        valueIncludes: "showTotal(total);",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Console membantu melihat input awal dan total akhir sudah berupa angka.",
    lines: ["cartItems", "Total: 700000"],
  },
  skillTags: ["JavaScript", "Debugging", "Console"],
};

export const debugBrowserDataFlowCheckpointChallenge: CodingChallenge = {
  id: "debug-browser-data-flow-checkpoint",
  lessonId: "javascript-browser-apis-debugging-assessment",
  title: "Debug browser data flow",
  description:
    "Checkpoint untuk membaca URL, menyimpan state kecil, mentransform data, dan menampilkan state UI yang benar.",
  instructions: [
    "Fokus di tab JS.",
    "Buat currentUrl dari window.location.href.",
    "Baca selectedCategory dari query category dengan fallback \"all\".",
    "Simpan selectedCategory ke localStorage dengan key \"last-category\".",
    "Tambahkan console.log untuk selectedCategory.",
    "Buat visibleItems dari rawItems.",
    "Jika selectedCategory bukan \"all\", filter item berdasarkan category.",
    "Urutkan berdasarkan order, lalu map menjadi object berisi title dan label.",
    "Jika visibleItems kosong, panggil showEmpty lalu return.",
    "Jika ada data, panggil showSuccess(visibleItems).",
  ],
  starterCode: {
    html: `<main class="practice-card">
  <h1>Debug data flow</h1>
  <p id="statusText">Belum memproses data.</p>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const rawItems = [
  { title: " URL API ", category: "browser", order: 2, minutes: 20 },
  { title: "Data Transform", category: "data", order: 1, minutes: 35 },
  { title: "Network Debugging", category: "debugging", order: 3, minutes: 30 },
];

function showEmpty() {
  console.log("Tidak ada item.");
}

function showSuccess(items) {
  console.log("Items:", items);
}

function loadItems() {
  // Lengkapi flow data browser di sini.
}

loadItems();`,
  },
  solutionCode: {
    html: `<main class="practice-card">
  <h1>Debug data flow</h1>
  <p id="statusText">Belum memproses data.</p>
</main>`,
    css: `.practice-card {
  max-width: 620px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
    js: `const rawItems = [
  { title: " URL API ", category: "browser", order: 2, minutes: 20 },
  { title: "Data Transform", category: "data", order: 1, minutes: 35 },
  { title: "Network Debugging", category: "debugging", order: 3, minutes: 30 },
];

function showEmpty() {
  console.log("Tidak ada item.");
}

function showSuccess(items) {
  console.log("Items:", items);
}

function loadItems() {
  const currentUrl = new URL(window.location.href);
  const selectedCategory = currentUrl.searchParams.get("category") ?? "all";

  localStorage.setItem("last-category", selectedCategory);
  console.log("selectedCategory", selectedCategory);

  const visibleItems = rawItems
    .filter((item) => selectedCategory === "all" || item.category === selectedCategory)
    .sort((first, second) => first.order - second.order)
    .map((item) => ({
      title: item.title.trim(),
      label: item.title.trim() + " - " + item.minutes + " menit",
    }));

  if (visibleItems.length === 0) {
    showEmpty();
    return;
  }

  showSuccess(visibleItems);
}

loadItems();`,
  },
  checklist: [
    "URL category dibaca dengan fallback.",
    "Category terakhir disimpan ke localStorage.",
    "Console log membantu melihat category aktif.",
    "Data difilter, diurutkan, dan dimap sebelum render.",
    "Empty state berbeda dari success state.",
  ],
  validation: {
    mode: "js",
    checks: [
      {
        id: "checkpoint-url",
        label: "currentUrl dibuat dari window.location.href.",
        type: "contains",
        target: "const currentUrl = new URL(window.location.href);",
        valueIncludes: "const currentUrl = new URL(window.location.href);",
      },
      {
        id: "checkpoint-category",
        label: "selectedCategory dibaca dengan fallback.",
        type: "contains",
        target: `const selectedCategory = currentUrl.searchParams.get("category") ?? "all";`,
        valueIncludes: `const selectedCategory = currentUrl.searchParams.get("category") ?? "all";`,
      },
      {
        id: "checkpoint-storage",
        label: "Category terakhir disimpan.",
        type: "contains",
        target: `localStorage.setItem("last-category", selectedCategory);`,
        valueIncludes: `localStorage.setItem("last-category", selectedCategory);`,
      },
      {
        id: "checkpoint-debug-log",
        label: "selectedCategory dilog untuk debugging.",
        type: "contains",
        target: `console.log("selectedCategory", selectedCategory);`,
        valueIncludes: `console.log("selectedCategory", selectedCategory);`,
      },
      {
        id: "checkpoint-filter",
        label: "Data difilter berdasarkan category.",
        type: "contains",
        target:
          `.filter((item) => selectedCategory === "all" || item.category === selectedCategory)`,
        valueIncludes:
          `.filter((item) => selectedCategory === "all" || item.category === selectedCategory)`,
      },
      {
        id: "checkpoint-sort",
        label: "Data diurutkan berdasarkan order.",
        type: "contains",
        target: ".sort((first, second) => first.order - second.order)",
        valueIncludes: ".sort((first, second) => first.order - second.order)",
      },
      {
        id: "checkpoint-map",
        label: "Data dimap menjadi object UI.",
        type: "contains",
        target: ".map((item) => ({",
        valueIncludes: ".map((item) => ({",
      },
      {
        id: "checkpoint-empty",
        label: "Empty state ditangani.",
        type: "contains",
        target: "if (visibleItems.length === 0) {",
        valueIncludes: "if (visibleItems.length === 0) {",
      },
      {
        id: "checkpoint-show-empty",
        label: "showEmpty dipanggil saat data kosong.",
        type: "contains",
        target: "showEmpty();",
        valueIncludes: "showEmpty();",
      },
      {
        id: "checkpoint-show-success",
        label: "showSuccess menerima visibleItems.",
        type: "contains",
        target: "showSuccess(visibleItems);",
        valueIncludes: "showSuccess(visibleItems);",
      },
    ],
  },
  expectedOutput: {
    kind: "console",
    title: "Output console yang diharapkan",
    description:
      "Dengan category all, console menampilkan category aktif dan item yang sudah ditransformasi.",
    lines: ["selectedCategory all", "Items:"],
  },
  skillTags: ["JavaScript", "Browser APIs", "Data Transformation", "Debugging"],
};
