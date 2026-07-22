import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const e2ePracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const e2eTestingStrategyModule: Module = {
  id: "e2e-testing-strategy",
  trackId: "frontend-engineering",
  title: "End-to-End Testing Strategy",
  slug: "e2e-testing-strategy",
  description:
    "Memilih critical user journey, menulis dasar Playwright, dan menjaga browser test tetap bernilai serta tidak mudah flaky.",
  order: 43,
  lessonIds: [
    "what-e2e-should-cover",
    "playwright-basics",
    "critical-user-journeys",
    "flaky-test-causes",
    "e2e-testing-strategy-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "End-to-End Testing",
    "Playwright",
    "User Journeys",
    "Locators",
    "Test Reliability",
  ],
};

export const whatE2eShouldCoverLesson: Lesson = {
  id: "what-e2e-should-cover",
  trackId: "frontend-engineering",
  moduleId: "e2e-testing-strategy",
  title: "What E2E Should Cover",
  slug: "what-e2e-should-cover",
  description:
    "Memilih perjalanan user yang paling penting untuk diuji di browser tanpa membuat suite E2E terlalu besar.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan peran E2E test dalam strategi quality frontend",
    "Membedakan critical journey dari detail UI kecil",
    "Memilih journey berdasarkan risiko dan nilai bagi user",
    "Menentukan test yang lebih tepat ditaruh di unit atau integration layer",
  ],
  skillTags: ["E2E Strategy", "User Journeys", "Risk", "Test Pyramid"],
  blocks: [
    {
      id: "what-e2e-should-cover-intro",
      type: "text",
      title: "E2E membuktikan perjalanan penting, bukan setiap detail halaman",
      content:
        "End-to-end atau E2E test membuka aplikasi seperti user, melakukan action melalui browser, lalu memeriksa hasil perjalanan itu. Karena browser test lebih lambat dan membawa lebih banyak dependency, pilih hanya journey yang kegagalannya benar-benar merusak nilai produk. Contohnya learner dapat membuka track, masuk ke lesson, mengerjakan action penting, dan mendapat hasil yang benar. Sebaliknya, format satu label, mapper data kecil, atau satu error state component biasanya lebih cepat dan lebih jelas diuji lewat unit atau integration test.",
    },
    {
      id: "what-e2e-should-cover-example",
      type: "code-example",
      title: "Peta sederhana untuk memilih layer test",
      language: "ts",
      code: `Unit
formatDuration(24) memberi "24 menit"

Integration
CourseCatalog menampilkan loading lalu course dari mocked API

E2E
Learner membuka track, memilih lesson, lalu melihat lesson yang dituju`,
      explanation:
        "Ketiga test sama-sama penting, tetapi pertanyaannya berbeda. E2E tidak perlu mengulang semua detail yang sudah dilindungi test di bawahnya. Gunakan ia untuk menghubungkan bagian-bagian yang paling penting dari sudut pandang perjalanan user.",
    },
    {
      id: "what-e2e-should-cover-coding-practice",
      type: "coding-practice",
      challengeId: "choose-course-bookmark-e2e-journey",
    },
    {
      id: "what-e2e-should-cover-quick-check",
      type: "quick-check",
      question:
        "Manakah kandidat E2E test yang paling bernilai untuk aplikasi belajar?",
      options: [
        "Learner membuka track, memilih lesson, lalu mencapai lesson yang benar.",
        "Function formatDuration mengembalikan string 24 menit.",
        "Satu component memakai class CSS tertentu.",
        "Setiap paragraph memiliki jumlah karakter yang sama.",
      ],
      correctAnswer:
        "Learner membuka track, memilih lesson, lalu mencapai lesson yang benar.",
      explanation:
        "Journey navigasi menyatukan route, link, page rendering, dan output yang user lihat. Function kecil atau styling internal lebih tepat dan lebih cepat dilindungi di layer test lain.",
    },
    {
      id: "what-e2e-should-cover-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan membuat semua test menjadi E2E",
      content:
        "Bila semua assertion dijalankan dari browser, feedback menjadi lambat dan penyebab failure makin sulit dibaca. E2E memberi confidence yang luas, bukan detail diagnosis terbaik. Biarkan unit dan integration test menjaga behavior kecil serta response feature; simpan E2E untuk beberapa jalur produk yang paling bernilai.",
    },
    {
      id: "what-e2e-should-cover-summary",
      type: "summary",
      points: [
        "E2E test mengikuti perjalanan user di browser sungguhan.",
        "Pilih journey berdasarkan risiko, nilai user, dan dampak ketika gagal.",
        "Jangan mengulang semua unit atau integration assertion di E2E.",
        "Test kecil tetap lebih cepat dan lebih mudah didiagnosis di layer bawah.",
        "Berikutnya, Playwright memberi runner, browser, locator, dan assertion untuk menjalankan journey ini secara lokal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-e2e-should-cover-intro",
      "what-e2e-should-cover-example",
      "what-e2e-should-cover-coding-practice",
      "what-e2e-should-cover-quick-check",
      "what-e2e-should-cover-callout",
      "what-e2e-should-cover-summary",
    ],
  },
};

export const playwrightBasicsLesson: Lesson = {
  id: "playwright-basics",
  trackId: "frontend-engineering",
  moduleId: "e2e-testing-strategy",
  title: "Playwright Basics",
  slug: "playwright-basics",
  description:
    "Menulis test Playwright kecil yang membuka route, menemukan UI melalui locator, dan memeriksa hasilnya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Menjelaskan peran Playwright sebagai browser test runner",
    "Mengenali test, page, goto, locator, dan expect",
    "Menulis satu journey browser yang kecil",
    "Menjalankan test dari project lokal setelah setup tersedia",
  ],
  skillTags: ["Playwright", "Browser Testing", "Locators", "Assertions"],
  blocks: [
    {
      id: "playwright-basics-intro",
      type: "text",
      title: "Mulai dari satu file dan satu journey browser",
      content:
        "Playwright Test menyediakan test runner, browser automation, locator, dan assertion untuk aplikasi web. Setiap test menerima page yang mewakili halaman browser terisolasi. Journey paling kecil biasanya dimulai dari page.goto, mencari satu element dengan locator yang user-facing, lalu memakai expect untuk menyatakan output yang harus terlihat. Jalankan installer dan browser download hanya dari folder project lokal yang benar. FluentStack membaca struktur code; practice workspace tidak membuka browser Playwright atau menjalankan command test.",
    },
    {
      id: "playwright-basics-install",
      type: "code-example",
      title: "Setup Playwright dari project lokal",
      language: "bash",
      code: `npm init playwright@latest
npx playwright test`,
      explanation:
        "Command pertama menambah atau menginisialisasi Playwright sesuai prompt setup. Command kedua menjalankan test setelah browser serta konfigurasi yang diperlukan tersedia. Baca perubahan package.json, playwright.config, dan folder test sebelum mengubah opsi lanjutan. Jangan menyalin setup dari project lain tanpa mengecek framework serta command lokalmu.",
    },
    {
      id: "playwright-basics-example",
      type: "code-example",
      title: "Buka route lalu periksa heading yang terlihat",
      language: "ts",
      code: `import { expect, test } from "@playwright/test";

test("opens the learning page", async ({ page }) => {
  await page.goto("/learn");

  await expect(
    page.getByRole("heading", { name: "Frontend Engineering" }),
  ).toBeVisible();
});`,
      explanation:
        "page.goto membuka route target. getByRole mencari heading berdasarkan semantics dan accessible name, lalu expect menunggu kondisi visible yang relevan. Base URL, web server, dan browser binary adalah bagian setup lokal, sehingga result yang sebenarnya harus dibaca dari terminal Playwright.",
    },
    {
      id: "playwright-basics-coding-practice",
      type: "coding-practice",
      challengeId: "write-first-playwright-lesson-test",
    },
    {
      id: "playwright-basics-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan memulai dari suite atau config yang kompleks",
      content:
        "Jangan langsung menambah banyak project browser, retry, fixture custom, auth storage, atau CI workflow. Pastikan satu route dan satu assertion dapat berjalan terlebih dahulu. Bila test gagal, lihat route, locator, server lokal, dan error report sebelum mengubah timeout.",
    },
    {
      id: "playwright-basics-summary",
      type: "summary",
      points: [
        "Playwright menjalankan action dan assertion pada browser yang terisolasi.",
        "Test awal cukup berisi goto, locator user-facing, serta satu assertion visible.",
        "Setup browser, base URL, dan result test merupakan tanggung jawab local project.",
        "Jangan memperbesar config sebelum test kecil dapat dibaca dan dijalankan.",
        "Berikutnya, journey akan disusun sebagai flow produk yang jelas, bukan kumpulan click acak.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "playwright-basics-intro",
      "playwright-basics-install",
      "playwright-basics-example",
      "playwright-basics-coding-practice",
      "playwright-basics-callout",
      "playwright-basics-summary",
    ],
  },
};

export const criticalUserJourneysLesson: Lesson = {
  id: "critical-user-journeys",
  trackId: "frontend-engineering",
  moduleId: "e2e-testing-strategy",
  title: "Critical User Journeys",
  slug: "critical-user-journeys",
  description:
    "Menyusun E2E flow yang menjelaskan tujuan user, action utama, dan hasil yang harus tercapai.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 80,
  objectives: [
    "Mengubah user goal menjadi langkah E2E yang terukur",
    "Memilih locator berdasarkan role, label, dan text yang stabil",
    "Membuat assertion pada milestone penting journey",
    "Menghindari journey yang bergantung pada data atau state acak",
  ],
  skillTags: ["User Journeys", "Playwright", "Navigation", "Stable Locators"],
  blocks: [
    {
      id: "critical-user-journeys-intro",
      type: "text",
      title: "Journey yang baik memiliki tujuan dan titik selesai yang jelas",
      content:
        "Tulis journey dari alasan user memakai produk, bukan dari urutan DOM. Untuk FluentStack, satu flow bernilai adalah learner membuka halaman belajar, memilih track Frontend Engineering, lalu memastikan halaman track terbuka. Setiap langkah harus punya alasan: navigasi ke titik awal, action yang dapat dilakukan user, dan assertion pada perubahan yang membuktikan tujuan tercapai. Locator berdasarkan role dan nama membuat langkah itu lebih dekat dengan UI yang dipakai keyboard serta teknologi bantu.",
    },
    {
      id: "critical-user-journeys-example",
      type: "code-example",
      title: "Journey navigasi track dengan locator user-facing",
      language: "ts",
      code: `import { expect, test } from "@playwright/test";

test("learner opens the Frontend Engineering track", async ({ page }) => {
  await page.goto("/learn");

  await page.getByRole("link", { name: "Frontend Engineering" }).click();

  await expect(page).toHaveURL(/frontend-engineering/);
  await expect(
    page.getByRole("heading", { name: "Frontend Engineering" }),
  ).toBeVisible();
});`,
      explanation:
        "Journey ini tidak memeriksa animasi atau setiap card yang ada di halaman. Ia memastikan action link membawa learner ke tujuan yang benar dan halaman target memberi sinyal yang dapat dilihat user. URL assertion dan heading saling melengkapi tanpa membaca class CSS atau urutan element.",
    },
    {
      id: "critical-user-journeys-coding-practice",
      type: "coding-practice",
      challengeId: "test-course-navigation-journey",
    },
    {
      id: "critical-user-journeys-quick-check",
      type: "quick-check",
      question:
        "Setelah learner menekan link ke track, assertion mana yang paling menunjukkan journey selesai?",
      options: [
        "URL target sesuai dan heading track terlihat.",
        "Jumlah semua div di halaman berubah.",
        "Warna hover link sesuai nilai CSS tertentu.",
        "Test membaca nomor index link di navigation.",
      ],
      correctAnswer: "URL target sesuai dan heading track terlihat.",
      explanation:
        "URL dan heading memeriksa tujuan navigasi serta output halaman yang user lihat. Struktur DOM dan style dapat berubah tanpa mengubah journey produk.",
    },
    {
      id: "critical-user-journeys-callout",
      type: "callout",
      variant: "tip",
      title: "Simpan data test tetap kecil dan dapat diulang",
      content:
        "Gunakan data atau state yang membuat journey dapat diulang. Hindari test yang bergantung pada nama user production, data yang berubah setiap hari, atau urutan item dari API sungguhan. Bila journey membutuhkan data khusus, siapkan fixture atau environment test secara eksplisit saat local setup sudah siap.",
    },
    {
      id: "critical-user-journeys-summary",
      type: "summary",
      points: [
        "E2E journey dimulai dari user goal, bukan urutan DOM.",
        "Setiap journey perlu start point, action utama, dan bukti tujuan tercapai.",
        "Gunakan role, label, dan text stabil sebelum memakai locator implementation detail.",
        "Pastikan data test dapat diulang dan tidak memakai state production acak.",
        "Berikutnya, flaky test causes membantu mendiagnosis journey yang kadang lulus dan kadang gagal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "critical-user-journeys-intro",
      "critical-user-journeys-example",
      "critical-user-journeys-coding-practice",
      "critical-user-journeys-quick-check",
      "critical-user-journeys-callout",
      "critical-user-journeys-summary",
    ],
  },
};

export const flakyTestCausesLesson: Lesson = {
  id: "flaky-test-causes",
  trackId: "frontend-engineering",
  moduleId: "e2e-testing-strategy",
  title: "Flaky Test Causes",
  slug: "flaky-test-causes",
  description:
    "Mengenali locator, waiting, data, dan dependency luar yang membuat E2E test kadang gagal tanpa perubahan feature.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Mengenali sinyal flaky test dan membedakannya dari regression nyata",
    "Memilih locator yang lebih stabil daripada selector implementation detail",
    "Mengandalkan action dan web-first assertion sebelum menambah manual wait",
    "Mendiagnosis dependency data serta service luar yang tidak deterministik",
  ],
  skillTags: ["Flaky Tests", "Playwright", "Locators", "Debugging", "Reliability"],
  blocks: [
    {
      id: "flaky-test-causes-intro",
      type: "text",
      title: "Flaky berarti hasil test tidak dapat dipercaya",
      content:
        "Test disebut flaky ketika ia kadang lulus dan kadang gagal tanpa perubahan behavior yang diuji. Penyebab umum adalah locator yang bergantung pada urutan atau class internal, timeout manual, data test yang tidak tetap, network atau service luar, serta action yang berjalan sebelum UI benar-benar dapat digunakan. Jangan langsung menambah retry atau timeout besar. Mulai dari failure output: apakah locator menemukan element yang benar, apakah route serta data test tersedia, dan apakah assertion menunggu kondisi user-visible yang tepat?",
    },
    {
      id: "flaky-test-causes-example",
      type: "code-example",
      title: "Ganti locator rapuh dengan contract user-facing",
      language: "ts",
      code: `// Rapuh: bergantung pada class dan urutan implementation.
await page.getByText("Simpan course").click();

// Lebih jelas: button yang dapat ditemukan user.
await page.getByRole("button", { name: "Simpan course" }).click();

await expect(
  page.getByRole("status", { name: "Course tersimpan" }),
).toBeVisible();`,
      explanation:
        "Text query dapat ambigu bila label yang sama muncul di tempat lain. Role dengan accessible name menyatakan control yang dituju. Assertion visible menunggu feedback yang benar-benar muncul, sehingga kamu tidak perlu menambah sleep tetap hanya untuk mengejar perubahan UI.",
    },
    {
      id: "flaky-test-causes-coding-practice",
      type: "coding-practice",
      challengeId: "fix-flaky-course-save-test",
    },
    {
      id: "flaky-test-causes-quick-check",
      type: "quick-check",
      question:
        "Apa langkah pertama yang paling tepat ketika E2E test kadang gagal?",
      options: [
        "Baca failure output, periksa locator, data test, dan assertion sebelum mengubah timeout.",
        "Menambah retry tinggi pada seluruh suite.",
        "Mengganti semua test menjadi screenshot.",
        "Menonaktifkan test yang gagal tanpa melihat penyebabnya.",
      ],
      correctAnswer:
        "Baca failure output, periksa locator, data test, dan assertion sebelum mengubah timeout.",
      explanation:
        "Retry atau timeout dapat menyembunyikan masalah. Diagnosis dimulai dari bukti failure dan contract user yang sedang diuji.",
    },
    {
      id: "flaky-test-causes-callout",
      type: "callout",
      variant: "warning",
      title: "Retry bukan perbaikan pertama",
      content:
        "Retry dapat berguna sebagai sinyal bahwa suite perlu perhatian, terutama pada CI, tetapi tidak membuat locator atau dependency rapuh menjadi benar. Catat test yang flake, ambil trace atau report bila tersedia, dan perbaiki kondisi yang tidak deterministik. Hindari sleep tetap sebagai solusi default.",
    },
    {
      id: "flaky-test-causes-summary",
      type: "summary",
      points: [
        "Flaky test melemahkan confidence karena hasilnya tidak konsisten.",
        "Locator user-facing lebih stabil daripada class, index, atau selector implementation detail.",
        "Action dan assertion Playwright sudah menunggu kondisi yang relevan; jangan mulai dari manual sleep.",
        "Data test, route, network, dan external dependency perlu dibuat deterministik.",
        "Berikutnya, Uji Kompetensi menyatukan pemilihan journey, locator, assertion, dan diagnosis failure.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "flaky-test-causes-intro",
      "flaky-test-causes-example",
      "flaky-test-causes-coding-practice",
      "flaky-test-causes-quick-check",
      "flaky-test-causes-callout",
      "flaky-test-causes-summary",
    ],
  },
};

export const e2eTestingStrategyAssessmentLesson: Lesson = {
  id: "e2e-testing-strategy-assessment",
  trackId: "frontend-engineering",
  moduleId: "e2e-testing-strategy",
  title: "Uji Kompetensi E2E Testing Strategy",
  slug: "e2e-testing-strategy-assessment",
  description:
    "Checkpoint untuk menilai kesiapan memilih, menulis, dan mendiagnosis satu critical user journey Playwright.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Memilih user journey yang tepat untuk E2E coverage",
    "Menyusun goto, action, locator, dan assertion yang berurutan",
    "Membedakan E2E dari unit dan integration coverage",
    "Menjelaskan diagnosis awal untuk failure atau flaky test",
  ],
  skillTags: ["E2E Testing", "Playwright", "User Journeys", "Reliability", "Readiness Checkpoint"],
  blocks: [
    {
      id: "e2e-testing-strategy-assessment-recap",
      type: "text",
      title: "Checkpoint: browser test harus menjaga journey yang bernilai",
      content:
        "Pada module ini, targetnya bukan membuat suite browser besar. Pilih satu journey yang penting bagi learner, mulai dari route yang jelas, lakukan action lewat locator user-facing, lalu assert milestone yang membuktikan tujuan tercapai. Test yang gagal perlu dibaca sebagai sinyal: bisa terjadi regression, locator rapuh, data test tidak stabil, server belum siap, atau dependency luar berubah. Unit dan integration test tetap menjaga detail serta feature state agar E2E tidak memikul seluruh quality burden.",
    },
    {
      id: "e2e-testing-strategy-assessment-quiz",
      type: "quiz",
      quizId: "e2e-testing-strategy-assessment-quiz",
    },
    {
      id: "e2e-testing-strategy-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-critical-lesson-journey-checkpoint",
    },
    {
      id: "e2e-testing-strategy-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis E2E test strategy note untuk satu journey aplikasi belajar. Sebutkan user goal, route awal, action utama, locator yang akan dipakai, assertion pada hasil journey, data atau dependency yang perlu stabil, satu hal yang lebih tepat diuji lewat unit atau integration test, serta langkah pertama bila test menjadi flaky. Jelaskan command Playwright yang akan kamu jalankan di local project tanpa mengklaim practice workspace menjalankan browser.",
      placeholder:
        "Saya memilih journey learner membuka Frontend Engineering dari halaman /learn karena bila navigation ini rusak, learner tidak dapat memulai path belajar. Test membuka /learn, mencari link Frontend Engineering dengan getByRole, melakukan click, lalu mengassert URL memuat frontend-engineering dan heading Frontend Engineering terlihat. Saya memakai role dan accessible name agar locator mengikuti UI user. Test environment perlu menyediakan route dan data track yang stabil. Saya tidak menguji format duration atau setiap state card di E2E karena itu lebih cepat diuji di unit atau integration layer. Bila test flaky, saya membaca report atau trace, memeriksa locator, server lokal, dan data test sebelum menambah timeout. Di local project saya menjalankan npx playwright test.",
      minimumCharacters: 550,
      checklist: [
        "Menyebut user goal dan alasan journey layak masuk E2E.",
        "Menyebut route awal, action, locator, dan assertion target.",
        "Menjelaskan data atau dependency yang harus dibuat stabil.",
        "Membedakan satu coverage unit atau integration dari coverage E2E.",
        "Menyebut diagnosis flaky dan command test lokal tanpa klaim runtime practice.",
      ],
      modelAnswer:
        "Saya menguji journey learner memilih track Frontend Engineering dari halaman belajar. Journey ini layak E2E karena ia menghubungkan navigation, route, dan halaman target yang harus dapat diakses untuk memulai belajar. Test mulai dari /learn, mencari link Frontend Engineering melalui getByRole, lalu click. Saya mengassert URL mengarah ke frontend-engineering dan heading Frontend Engineering terlihat. Role dan accessible name membuat locator dekat dengan UI user dan lebih stabil dari selector class. Environment perlu memberi data track yang konsisten serta web server lokal yang siap. Saya tidak menguji mapping data course atau loading state component di E2E karena unit dan integration test lebih cepat memberi diagnosis. Bila test kadang gagal, saya membuka report atau trace, memeriksa locator, data test, route, dan server sebelum menambah timeout atau retry. Saya menjalankan npx playwright test dari project lokal.",
    },
    {
      id: "e2e-testing-strategy-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk menjalankan dan men-debug satu journey lokal",
      description:
        "Buka dokumentasi Playwright sesuai masalah yang benar-benar kamu hadapi. Mulai dari satu test yang dapat dijalankan dan satu failure yang dapat dibaca sebelum menambah browser matrix, CI parallelism, atau fixture kompleks.",
      links: [
        {
          source: "Playwright",
          title: "Installation",
          url: "https://playwright.dev/docs/intro",
          focus: [
            "Inisialisasi Playwright di project yang sudah ada.",
            "Browser binary, folder test, dan command menjalankan test.",
            "Membaca report dasar setelah test run.",
          ],
          ignoreForNow: [
            "Cross-browser project matrix dan CI setup.",
            "Retry, sharding, serta parallelism tuning.",
          ],
        },
        {
          source: "Playwright",
          title: "Writing tests and locators",
          url: "https://playwright.dev/docs/writing-tests",
          focus: [
            "Urutan goto, locator action, dan web-first assertion.",
            "Mengapa action serta assertion tidak perlu manual sleep.",
            "Test isolation dasar.",
          ],
          ignoreForNow: [
            "Fixture custom dan hook suite besar.",
            "Code generation sebagai pengganti memahami journey.",
          ],
        },
        {
          source: "Playwright",
          title: "Locators and Trace Viewer",
          url: "https://playwright.dev/docs/locators",
          focus: [
            "Prioritas role, label, text, dan locator user-facing.",
            "Mendiagnosis locator rapuh atau ambigu.",
            "Kapan membuka trace viewer setelah failure nyata.",
          ],
          ignoreForNow: [
            "Visual regression dan locator implementation detail.",
            "Advanced browser debugging yang belum dibutuhkan journey pertama.",
          ],
        },
      ],
      followUpAction:
        "Di Local React App atau Local Next.js App, setup atau konfirmasi Playwright, jalankan satu E2E test journey, dan catat route, locator, assertion, serta satu failure atau report yang kamu pahami. Jangan tandai selesai hanya karena cek struktur E2E di practice workspace sudah lolos.",
    },
    {
      id: "e2e-testing-strategy-assessment-summary",
      type: "summary",
      points: [
        "E2E test menjaga critical journey yang tidak cukup dibuktikan dari satu component atau response mock.",
        "Playwright test yang kecil memakai route jelas, locator user-facing, action, dan assertion pada milestone.",
        "Browser test tidak perlu mengulang seluruh unit atau integration suite.",
        "Failure dan flakiness perlu didiagnosis dari locator, data, dependency, serta report sebelum timeout atau retry.",
        "Level Testing selesai: gunakan layer test yang tepat untuk behavior, feature flow, dan journey browser.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "e2e-testing-strategy-assessment-recap",
      "e2e-testing-strategy-assessment-quiz",
      "e2e-testing-strategy-assessment-coding-practice",
      "e2e-testing-strategy-assessment-writing-practice",
      "e2e-testing-strategy-assessment-documentation-bridge",
      "e2e-testing-strategy-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const e2eTestingStrategyAssessmentQuiz: Quiz = {
  id: "e2e-testing-strategy-assessment-quiz",
  lessonId: "e2e-testing-strategy-assessment",
  title: "Uji Kompetensi E2E Testing Strategy",
  passingScore: 70,
  questions: [
    {
      id: "e2e-value",
      type: "multiple-choice",
      question: "Kapan sebuah flow layak menjadi kandidat E2E test?",
      options: [
        "Saat kegagalan flow merusak tujuan penting user dan melibatkan beberapa bagian aplikasi.",
        "Saat ingin memeriksa satu helper string kecil.",
        "Saat ingin menghitung semua div pada halaman.",
        "Saat ingin menggantikan seluruh unit test.",
      ],
      correctAnswer:
        "Saat kegagalan flow merusak tujuan penting user dan melibatkan beberapa bagian aplikasi.",
      explanation:
        "E2E tepat untuk critical journey yang memberi confidence luas. Detail kecil tetap sebaiknya diuji pada layer yang lebih cepat dan lebih fokus.",
    },
    {
      id: "playwright-flow",
      type: "multiple-choice",
      question: "Urutan dasar Playwright test yang paling jelas adalah",
      options: [
        "Buka route, temukan UI, lakukan action, lalu assert hasil journey.",
        "Tambah timeout, click selector CSS, lalu hapus assertion.",
        "Ubah state React langsung, lalu cek console.",
        "Jalankan semua browser dan semua route sebelum menulis satu test.",
      ],
      correctAnswer:
        "Buka route, temukan UI, lakukan action, lalu assert hasil journey.",
      explanation:
        "Urutan ini mengikuti pengalaman user dan membuat failure lebih mudah dipahami. Locator serta assertion perlu menyatakan contract UI yang penting.",
    },
    {
      id: "stable-locator",
      type: "multiple-choice",
      question:
        "Locator mana yang paling stabil untuk menekan action Simpan course?",
      options: [
        'page.getByRole("button", { name: "Simpan course" })',
        'page.locator(".card:nth-child(3) button")',
        'page.getByText("Simpan") tanpa membedakan control',
        "Mencari index button pertama di halaman",
      ],
      correctAnswer:
        'page.getByRole("button", { name: "Simpan course" })',
      explanation:
        "Role dan accessible name adalah contract user-facing. Selector class dan index mudah berubah saat layout atau implementation dirapikan.",
    },
    {
      id: "flaky-diagnosis",
      type: "multiple-choice",
      question:
        "Apa respons awal yang benar ketika E2E test kadang gagal tanpa perubahan feature?",
      options: [
        "Baca failure report, lalu periksa locator, data test, route, dan dependency.",
        "Menambah sleep panjang ke setiap test.",
        "Mematikan test agar CI hijau.",
        "Mengganti semua assertion menjadi screenshot.",
      ],
      correctAnswer:
        "Baca failure report, lalu periksa locator, data test, route, dan dependency.",
      explanation:
        "Flakiness perlu diagnosis dari kondisi yang tidak deterministik. Timeout dan retry dapat menyembunyikan penyebab sebenarnya.",
    },
    {
      id: "layer-balance",
      type: "multiple-choice",
      question:
        "Bagaimana E2E test bekerja bersama unit dan integration test?",
      options: [
        "E2E menjaga critical journey, sedangkan layer bawah menjaga detail behavior dan feature flow.",
        "E2E menggantikan semua layer test lain.",
        "Unit test hanya dipakai setelah E2E gagal.",
        "Integration test tidak relevan jika Playwright sudah ada.",
      ],
      correctAnswer:
        "E2E menjaga critical journey, sedangkan layer bawah menjaga detail behavior dan feature flow.",
      explanation:
        "Layer test saling melengkapi. Unit dan integration memberi feedback lebih cepat serta diagnosis lebih fokus, sementara E2E memberi confidence pada perjalanan browser.",
    },
  ],
};

export const chooseCourseBookmarkE2eJourneyChallenge: CodingChallenge = {
  id: "choose-course-bookmark-e2e-journey",
  lessonId: "what-e2e-should-cover",
  title: "Choose a track navigation E2E journey",
  description:
    "Susun satu journey browser bernilai: learner membuka halaman belajar, memilih track, lalu mencapai tujuan. Preview tidak menjalankan Playwright.",
  instructions: [
    "Fokus di tab TSX.",
    "Import test dan expect dari @playwright/test.",
    "Buka route /learn sebagai awal journey.",
    "Klik link Frontend Engineering melalui role dan accessible name.",
    "Assert URL serta heading track setelah navigation.",
    "Cek otomatis membaca struktur E2E. Preview tidak menjalankan Playwright.",
  ],
  starterCode: {
    ...e2ePracticeCode,
    tsx: `import { test } from "@playwright/test";

test("TODO: learner reaches the selected track", async ({ page }) => {
  await page.goto("/learn");
});`,
  },
  solutionCode: {
    ...e2ePracticeCode,
    tsx: `import { expect, test } from "@playwright/test";

test("learner opens the Frontend Engineering track", async ({ page }) => {
  await page.goto("/learn");

  await page.getByRole("link", { name: "Frontend Engineering" }).click();

  await expect(page).toHaveURL(/frontend-engineering/);
  await expect(
    page.getByRole("heading", { name: "Frontend Engineering" }),
  ).toBeVisible();
});`,
  },
  checklist: [
    "Test membuka route awal /learn.",
    "Action track memakai role link dan accessible name.",
    "Test mengassert tujuan navigation melalui URL.",
    "Test mengassert heading track yang terlihat user.",
    "Preview tidak menjalankan browser Playwright atau route lokal.",
  ],
  reactPractice: { mode: "structure", framework: "e2e" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "playwright-import", label: "test dan expect di-import dari Playwright.", type: "contains", valueIncludes: 'import { expect, test } from "@playwright/test";' },
      { id: "start-route", label: "Journey membuka halaman belajar.", type: "contains", valueIncludes: 'await page.goto("/learn");' },
      { id: "track-action", label: "Journey memilih track lewat link semantic.", type: "contains", valueIncludes: 'await page.getByRole("link", { name: "Frontend Engineering" }).click();' },
      { id: "url-assertion", label: "Test mengassert URL tujuan.", type: "contains", valueIncludes: "await expect(page).toHaveURL(/frontend-engineering/);" },
      { id: "heading-assertion", label: "Test mengassert heading track.", type: "contains", valueIncludes: 'page.getByRole("heading", { name: "Frontend Engineering" })' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target journey E2E",
    description:
      "Cek otomatis membaca struktur journey Playwright. Preview tidak membuka browser Playwright, menjalankan route, atau menghasilkan report test.",
    lines: [
      "Journey dimulai dari halaman belajar dan action link user-facing.",
      "URL serta heading membuktikan learner mencapai track yang dituju.",
      "Jalankan test dari local project untuk melihat browser dan result sebenarnya.",
    ],
  },
  skillTags: ["E2E Strategy", "Playwright", "Navigation", "User Journeys"],
};

export const writeFirstPlaywrightLessonTestChallenge: CodingChallenge = {
  id: "write-first-playwright-lesson-test",
  lessonId: "playwright-basics",
  title: "Write first Playwright lesson test",
  description:
    "Tulis test Playwright kecil yang membuka lesson lalu memastikan heading lesson terlihat. Preview tidak menjalankan browser test.",
  instructions: [
    "Fokus di tab TSX.",
    "Import expect dan test dari @playwright/test.",
    "Gunakan page.goto untuk membuka lesson html-css-js-roles.",
    "Cari heading Peran HTML, CSS, dan JavaScript lewat role.",
    "Assert heading tersebut visible.",
    "Cek otomatis membaca struktur E2E. Preview tidak menjalankan browser test.",
  ],
  starterCode: {
    ...e2ePracticeCode,
    tsx: `import { test } from "@playwright/test";

test("TODO: opens a lesson", async ({ page }) => {
  // TODO: navigate and assert the lesson heading.
});`,
  },
  solutionCode: {
    ...e2ePracticeCode,
    tsx: `import { expect, test } from "@playwright/test";

test("opens the HTML CSS JavaScript roles lesson", async ({ page }) => {
  await page.goto("/lesson/html-css-js-roles");

  await expect(
    page.getByRole("heading", { name: "Peran HTML, CSS, dan JavaScript" }),
  ).toBeVisible();
});`,
  },
  checklist: [
    "Playwright test mengimport test dan expect.",
    "Test membuka route lesson yang spesifik.",
    "Heading dicari lewat role serta accessible name.",
    "Assertion memakai toBeVisible.",
    "Preview tidak menjalankan browser Playwright, web server, atau test report.",
  ],
  reactPractice: { mode: "structure", framework: "e2e" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "playwright-import", label: "expect dan test di-import dari Playwright.", type: "contains", valueIncludes: 'import { expect, test } from "@playwright/test";' },
      { id: "lesson-route", label: "Test membuka route lesson.", type: "contains", valueIncludes: 'await page.goto("/lesson/html-css-js-roles");' },
      { id: "heading-locator", label: "Heading lesson dicari lewat role.", type: "contains", valueIncludes: 'page.getByRole("heading", { name: "Peran HTML, CSS, dan JavaScript" })' },
      { id: "visible-assertion", label: "Heading diassert visible.", type: "contains", valueIncludes: ").toBeVisible();" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Playwright dasar",
    description:
      "Cek otomatis membaca struktur test Playwright. Preview tidak menjalankan browser, local web server, atau command Playwright.",
    lines: [
      "Test membuka satu route yang jelas.",
      "Heading lesson dicari melalui contract UI user-facing.",
      "Local Playwright menjalankan journey ini setelah setup dan browser tersedia.",
    ],
  },
  skillTags: ["Playwright", "Browser Testing", "Locators", "Assertions"],
};

export const testCourseNavigationJourneyChallenge: CodingChallenge = {
  id: "test-course-navigation-journey",
  lessonId: "critical-user-journeys",
  title: "Test course navigation journey",
  description:
    "Lengkapi journey learner dari halaman belajar ke track Frontend Engineering dengan locator stabil dan assertion milestone. Preview tidak menjalankan navigation browser.",
  instructions: [
    "Fokus di tab TSX.",
    "Buka /learn sebagai start point journey.",
    "Klik Frontend Engineering melalui role link.",
    "Assert URL memuat frontend-engineering.",
    "Assert heading Frontend Engineering terlihat pada halaman target.",
    "Cek otomatis membaca struktur E2E. Preview tidak menjalankan navigation browser.",
  ],
  starterCode: {
    ...e2ePracticeCode,
    tsx: `import { expect, test } from "@playwright/test";

test("learner can start a frontend learning journey", async ({ page }) => {
  await page.goto("/learn");

  // TODO: select the track and verify the destination.
});`,
  },
  solutionCode: {
    ...e2ePracticeCode,
    tsx: `import { expect, test } from "@playwright/test";

test("learner can start a frontend learning journey", async ({ page }) => {
  await page.goto("/learn");

  await page.getByRole("link", { name: "Frontend Engineering" }).click();

  await expect(page).toHaveURL(/frontend-engineering/);
  await expect(
    page.getByRole("heading", { name: "Frontend Engineering" }),
  ).toBeVisible();
});`,
  },
  checklist: [
    "Journey memiliki start point /learn.",
    "Action memilih track menggunakan locator link user-facing.",
    "Milestone URL memeriksa tujuan navigation.",
    "Milestone heading memeriksa halaman target yang terlihat.",
    "Preview tidak menjalankan browser, link click, atau route sebenarnya.",
  ],
  reactPractice: { mode: "structure", framework: "e2e" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "start", label: "Journey dimulai dari /learn.", type: "contains", valueIncludes: 'await page.goto("/learn");' },
      { id: "click", label: "Track dipilih lewat link semantic.", type: "contains", valueIncludes: 'await page.getByRole("link", { name: "Frontend Engineering" }).click();' },
      { id: "url", label: "URL tujuan diassert.", type: "contains", valueIncludes: "await expect(page).toHaveURL(/frontend-engineering/);" },
      { id: "heading", label: "Heading tujuan diassert visible.", type: "contains", valueIncludes: 'page.getByRole("heading", { name: "Frontend Engineering" })' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target critical journey",
    description:
      "Cek otomatis membaca route, action, locator, dan assertion journey. Preview tidak menjalankan Playwright atau navigation browser nyata.",
    lines: [
      "Learner berpindah dari halaman belajar ke track yang dipilih.",
      "URL serta heading memberi dua sinyal tujuan journey.",
      "Tambahkan data test stabil saat menjalankan journey di local project.",
    ],
  },
  skillTags: ["User Journeys", "Playwright", "Navigation", "Stable Locators"],
};

export const fixFlakyCourseSaveTestChallenge: CodingChallenge = {
  id: "fix-flaky-course-save-test",
  lessonId: "flaky-test-causes",
  title: "Fix flaky course save test",
  description:
    "Ganti action dan assertion rapuh dengan locator role serta feedback user-visible. Preview tidak menjalankan browser atau retry.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan getByRole button dengan name Simpan course untuk action.",
    "Jangan memakai waitForTimeout atau selector berdasarkan urutan UI.",
    "Assert feedback Course tersimpan melalui role status.",
    "Cek otomatis membaca struktur E2E. Preview tidak menjalankan browser atau retry.",
  ],
  starterCode: {
    ...e2ePracticeCode,
    tsx: `import { test } from "@playwright/test";

test("saves a course", async ({ page }) => {
  await page.goto("/learn/frontend-engineering");

  // TODO: replace a fragile action and manual wait.
});`,
  },
  solutionCode: {
    ...e2ePracticeCode,
    tsx: `import { expect, test } from "@playwright/test";

test("saves a course", async ({ page }) => {
  await page.goto("/learn/frontend-engineering");

  await page.getByRole("button", { name: "Simpan course" }).click();

  await expect(
    page.getByRole("status", { name: "Course tersimpan" }),
  ).toBeVisible();
});`,
  },
  checklist: [
    "Test memakai locator button berdasarkan role dan accessible name.",
    "Action tidak memakai manual sleep atau waitForTimeout.",
    "Feedback disimpan dicari lewat role status.",
    "Assertion menunggu feedback user-visible.",
    "Preview tidak menjalankan browser, retry, atau status save sebenarnya.",
  ],
  reactPractice: { mode: "structure", framework: "e2e" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "button-locator", label: "Action memakai button semantic.", type: "contains", valueIncludes: 'await page.getByRole("button", { name: "Simpan course" }).click();' },
      { id: "status-locator", label: "Feedback memakai role status.", type: "contains", valueIncludes: 'page.getByRole("status", { name: "Course tersimpan" })' },
      { id: "visible", label: "Feedback diassert visible.", type: "contains", valueIncludes: ").toBeVisible();" },
      { id: "no-timeout", label: "Test tidak memakai manual timeout.", type: "doesNotContain", valueIncludes: "waitForTimeout" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target test yang lebih stabil",
    description:
      "Cek otomatis membaca locator dan assertion user-facing. Preview tidak menjalankan browser, retry, timeout, atau status save nyata.",
    lines: [
      "Action menyatakan control yang benar melalui role dan nama.",
      "Assertion menunggu feedback yang user lihat setelah action.",
      "Baca report lokal bila journey masih gagal sebelum menambah retry atau timeout.",
    ],
  },
  skillTags: ["Flaky Tests", "Playwright", "Locators", "Assertions", "Debugging"],
};

export const buildCriticalLessonJourneyCheckpointChallenge: CodingChallenge = {
  id: "build-critical-lesson-journey-checkpoint",
  lessonId: "e2e-testing-strategy-assessment",
  title: "Build critical lesson journey checkpoint",
  description:
    "Lengkapi checkpoint Playwright untuk journey learner dari halaman belajar menuju track Frontend Engineering. Preview tidak menjalankan browser test.",
  instructions: [
    "Fokus di tab TSX.",
    "Import expect dan test dari @playwright/test.",
    "Buka /learn lalu pilih link Frontend Engineering.",
    "Assert URL tujuan dan heading Frontend Engineering visible.",
    "Gunakan role serta accessible name, bukan class atau index DOM.",
    "Cek otomatis membaca struktur checkpoint. Preview tidak menjalankan browser test.",
  ],
  starterCode: {
    ...e2ePracticeCode,
    tsx: `import { test } from "@playwright/test";

test("learner reaches the selected frontend track", async ({ page }) => {
  await page.goto("/learn");

  // TODO: complete the critical journey.
});`,
  },
  solutionCode: {
    ...e2ePracticeCode,
    tsx: `import { expect, test } from "@playwright/test";

test("learner reaches the selected frontend track", async ({ page }) => {
  await page.goto("/learn");

  await page.getByRole("link", { name: "Frontend Engineering" }).click();

  await expect(page).toHaveURL(/frontend-engineering/);
  await expect(
    page.getByRole("heading", { name: "Frontend Engineering" }),
  ).toBeVisible();
});`,
  },
  checklist: [
    "Test membuka halaman belajar sebagai start point.",
    "Action track memakai role link serta accessible name.",
    "Test mengassert URL track yang dituju.",
    "Test mengassert heading target terlihat.",
    "Preview tidak menjalankan Playwright, browser, web server, atau report.",
  ],
  reactPractice: { mode: "structure", framework: "e2e" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "imports", label: "expect dan test di-import dari Playwright.", type: "contains", valueIncludes: 'import { expect, test } from "@playwright/test";' },
      { id: "start-route", label: "Checkpoint membuka /learn.", type: "contains", valueIncludes: 'await page.goto("/learn");' },
      { id: "track-link", label: "Checkpoint memilih link track semantic.", type: "contains", valueIncludes: 'await page.getByRole("link", { name: "Frontend Engineering" }).click();' },
      { id: "url", label: "Checkpoint mengassert URL track.", type: "contains", valueIncludes: "await expect(page).toHaveURL(/frontend-engineering/);" },
      { id: "heading", label: "Checkpoint mengassert heading track visible.", type: "contains", valueIncludes: 'page.getByRole("heading", { name: "Frontend Engineering" })' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target checkpoint E2E",
    description:
      "Cek otomatis membaca critical journey Playwright. Preview tidak menjalankan browser, route lokal, web server, atau report test.",
    lines: [
      "Journey melindungi kemampuan learner mencapai track yang dipilih.",
      "Role, accessible name, URL, dan heading menjadi contract test yang mudah dibaca.",
      "Jalankan npx playwright test di local project untuk memeriksa browser journey sebenarnya.",
    ],
  },
  skillTags: ["Playwright", "E2E Testing", "User Journeys", "Stable Locators", "Readiness Checkpoint"],
};
