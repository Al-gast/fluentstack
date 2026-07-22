import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const integrationPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const integrationApiMockingModule: Module = {
  id: "integration-api-mocking",
  trackId: "frontend-engineering",
  title: "Integration and API Mocking",
  slug: "integration-api-mocking",
  description:
    "Menguji flow feature yang memakai data async dengan mock API yang jelas, tanpa bergantung pada backend atau credential asli.",
  order: 42,
  lessonIds: [
    "integration-test-scope",
    "msw-basics",
    "testing-api-loading-error-success",
    "auth-adjacent-test-cases",
    "integration-api-mocking-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Integration Testing",
    "MSW",
    "API Mocking",
    "Async Testing",
    "React Testing Library",
  ],
};

export const integrationTestScopeLesson: Lesson = {
  id: "integration-test-scope",
  trackId: "frontend-engineering",
  moduleId: "integration-api-mocking",
  title: "Integration Test Scope",
  slug: "integration-test-scope",
  description:
    "Memilih satu flow feature yang memberi confidence saat component, request data, dan output UI bekerja bersama.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan integration test dari unit dan component test kecil",
    "Memilih satu flow feature yang memberi confidence nyata",
    "Menentukan UI state yang penting dalam test async",
    "Menghindari test yang mengulang detail internal setiap component",
  ],
  skillTags: ["Integration Testing", "Test Scope", "Async UI", "Quality"],
  blocks: [
    {
      id: "integration-test-scope-intro",
      type: "text",
      title: "Uji flow feature ketika beberapa bagian perlu bekerja bersama",
      content:
        "Unit test cocok untuk contract function kecil. Component test cocok untuk satu component dan satu interaction. Integration test mengambil satu langkah lebih jauh: render feature, biarkan feature meminta data lewat batas network yang dimock, lalu periksa state yang user lihat. Contohnya bukan menguji setiap CourseCard satu per satu lagi, melainkan memastikan katalog course menampilkan loading, menerima daftar course, dan memberi pesan yang berguna ketika request gagal. Scope yang baik cukup lebar untuk melindungi flow, tetapi tidak berubah menjadi simulasi seluruh aplikasi.",
    },
    {
      id: "integration-test-scope-example",
      type: "code-example",
      title: "Satu flow katalog yang layak diuji",
      language: "tsx",
      code: `it("shows courses returned by the API", async () => {
  render(<CourseCatalog />);

  expect(screen.getByText("Memuat course...")).toBeInTheDocument();

  expect(
    await screen.findByRole("heading", { name: "Belajar Flexbox" }),
  ).toBeInTheDocument();
});`,
      explanation:
        "Test ini tidak perlu tahu apakah CourseCatalog memakai useEffect, custom hook, atau helper mapping tertentu. Contract-nya adalah flow yang terlihat: feature mulai memuat lalu menampilkan course dari response. Pada lesson berikutnya, response tersebut akan disiapkan melalui handler MSW, bukan dengan memanggil setter atau mock function internal component.",
    },
    {
      id: "integration-test-scope-coding-practice",
      type: "coding-practice",
      challengeId: "choose-course-catalog-integration-boundary",
    },
    {
      id: "integration-test-scope-quick-check",
      type: "quick-check",
      question:
        "Manakah scope integration test yang paling tepat untuk feature daftar course?",
      options: [
        "Render katalog, mock response API, lalu periksa loading dan judul course yang tampil.",
        "Memeriksa setiap class CSS pada seluruh CourseCard.",
        "Memanggil semua helper internal secara langsung dari test.",
        "Menjalankan login production dengan akun dan API key asli.",
      ],
      correctAnswer:
        "Render katalog, mock response API, lalu periksa loading dan judul course yang tampil.",
      explanation:
        "Scope ini menguji flow feature yang nyata tanpa mengikat test pada styling atau implementation detail. Credential dan backend asli tidak perlu dipakai untuk membuktikan behavior UI tersebut.",
    },
    {
      id: "integration-test-scope-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan jadikan satu test sebagai seluruh aplikasi",
      content:
        "Satu test yang mendaftarkan user, memuat semua dashboard, mengubah profile, lalu membuat bookmark akan sulit dibaca dan sulit menunjukkan penyebab failure. Pilih satu user goal, satu response data, serta state UI yang paling penting. Flow lintas aplikasi yang benar-benar kritis akan dibahas pada strategi E2E, bukan dipaksakan ke integration test ini.",
    },
    {
      id: "integration-test-scope-summary",
      type: "summary",
      points: [
        "Integration test memeriksa flow feature ketika beberapa bagian bekerja bersama.",
        "Pilih user goal dan state UI yang penting, bukan semua component atau styling.",
        "Test dapat memeriksa loading lalu output success atau error dari response yang dimock.",
        "Backend asli dan credential tidak diperlukan untuk scope ini.",
        "Berikutnya, MSW memberi cara untuk menyiapkan response pada batas network.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "integration-test-scope-intro",
      "integration-test-scope-example",
      "integration-test-scope-coding-practice",
      "integration-test-scope-quick-check",
      "integration-test-scope-callout",
      "integration-test-scope-summary",
    ],
  },
};

export const mswBasicsLesson: Lesson = {
  id: "msw-basics",
  trackId: "frontend-engineering",
  moduleId: "integration-api-mocking",
  title: "MSW Basics",
  slug: "msw-basics",
  description:
    "Menulis handler MSW sederhana untuk memberi response API yang dapat dipakai feature test secara deterministik.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Menjelaskan mengapa mock di network boundary lebih berguna daripada mock setiap helper",
    "Mengenali http.get dan HttpResponse.json pada handler MSW",
    "Menulis response success kecil yang mudah dibaca",
    "Membedakan mock response dari bukti bahwa backend asli sehat",
  ],
  skillTags: ["MSW", "Network Boundary", "API Mocking", "Integration Testing"],
  blocks: [
    {
      id: "msw-basics-intro",
      type: "text",
      title: "Mock response di batas network, bukan di dalam setiap component",
      content:
        "MSW atau Mock Service Worker mencegat request pada batas network lalu memberi response yang kamu tentukan. Dengan begitu, CourseCatalog tetap memanggil fetch seperti saat aplikasi berjalan, tetapi test tidak bergantung pada server yang sedang online. Pendekatan ini membantu test tetap dekat dengan alur feature dan tidak perlu mengetahui helper internal mana yang dipanggil component. Handler harus kecil, jelas, dan hanya memuat data yang dibutuhkan scenario test.",
    },
    {
      id: "msw-basics-example",
      type: "code-example",
      title: "Handler success untuk endpoint course",
      language: "ts",
      code: `import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/courses", () => {
    return HttpResponse.json({
      courses: [{ id: "flexbox", title: "Belajar Flexbox" }],
    });
  }),
];`,
      explanation:
        "http.get menyatakan request yang akan direspons. Handler ini tidak mengubah component dan tidak melakukan request ke backend asli. Ia hanya menyiapkan response untuk scenario test. Pada setup lokal, handler tersebut perlu dihubungkan ke server MSW sesuai dokumentasi dan test environment project-mu.",
    },
    {
      id: "msw-basics-coding-practice",
      type: "coding-practice",
      challengeId: "mock-course-catalog-api-response",
    },
    {
      id: "msw-basics-callout",
      type: "callout",
      variant: "warning",
      title: "Mock API bukan health check backend",
      content:
        "Handler success membuat test UI deterministik, tetapi tidak membuktikan endpoint production tersedia, schema backend terbaru, atau authorization provider bekerja. Gunakan integration test untuk confidence pada behavior frontend terhadap response yang telah disepakati. Gunakan contract check, environment staging, atau observability production untuk pertanyaan yang berbeda.",
    },
    {
      id: "msw-basics-summary",
      type: "summary",
      points: [
        "MSW merespons request pada network boundary tanpa mengubah implementation component.",
        "Handler http.get dan HttpResponse.json cukup untuk scenario REST success awal.",
        "Gunakan mock data kecil agar intent test mudah dibaca.",
        "Setup MSW dan output runner tetap harus diverifikasi di local project.",
        "Berikutnya, handler success dan failure dipakai untuk menguji state API yang terlihat user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "msw-basics-intro",
      "msw-basics-example",
      "msw-basics-coding-practice",
      "msw-basics-callout",
      "msw-basics-summary",
    ],
  },
};

export const testingApiLoadingErrorSuccessLesson: Lesson = {
  id: "testing-api-loading-error-success",
  trackId: "frontend-engineering",
  moduleId: "integration-api-mocking",
  title: "Loading, Error, and Success API States",
  slug: "testing-api-loading-error-success",
  description:
    "Menguji state loading, success, dan error yang user lihat saat feature memuat response API.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 85,
  objectives: [
    "Menentukan state API yang penting untuk sebuah feature",
    "Memakai findBy untuk output async yang muncul setelah response",
    "Menguji loading sebelum response success tersedia",
    "Menguji error UI dari response failure yang dimock",
  ],
  skillTags: ["Async Testing", "MSW", "Loading State", "Error State", "React Testing Library"],
  blocks: [
    {
      id: "testing-api-states-intro",
      type: "text",
      title: "User mengalami perubahan state, bukan hanya response JSON",
      content:
        "Response API tidak langsung terlihat oleh user. Yang terlihat adalah loading indicator, daftar yang berhasil dimuat, empty state, atau error message beserta action berikutnya. Karena response bersifat async, assertion success biasanya perlu menunggu UI muncul. Testing Library menyediakan findBy untuk element yang diharapkan muncul kemudian. Jangan menambah delay acak agar test lulus; buat scenario response jelas, tunggu output yang relevan, lalu baca error test ketika output itu tidak muncul.",
    },
    {
      id: "testing-api-states-example",
      type: "code-example",
      title: "Periksa loading lalu course dari response success",
      language: "tsx",
      code: `it("shows courses after a successful response", async () => {
  render(<CourseCatalog />);

  expect(screen.getByText("Memuat course...")).toBeInTheDocument();

  expect(
    await screen.findByRole("heading", { name: "Belajar Flexbox" }),
  ).toBeInTheDocument();
});`,
      explanation:
        "getByText cocok untuk loading yang sudah ada setelah render. findByRole mengembalikan Promise dan menunggu heading course muncul setelah request selesai. Untuk scenario failure, handler dapat memberi status 500 lalu test mencari alert atau error message yang benar-benar membantu user.",
    },
    {
      id: "testing-api-states-coding-practice",
      type: "coding-practice",
      challengeId: "test-course-catalog-api-states",
    },
    {
      id: "testing-api-states-quick-check",
      type: "quick-check",
      question:
        "Kapan findByRole lebih tepat daripada getByRole pada test API?",
      options: [
        "Ketika heading atau alert baru muncul setelah request async selesai.",
        "Ketika element pasti tidak ada di UI.",
        "Ketika ingin memeriksa class CSS internal component.",
        "Ketika test tidak memiliki assertion apa pun.",
      ],
      correctAnswer:
        "Ketika heading atau alert baru muncul setelah request async selesai.",
      explanation:
        "findBy menunggu element muncul dan mengembalikan Promise. Untuk element yang harus langsung tersedia setelah render, gunakan getBy; untuk assertion bahwa element tidak ada, gunakan queryBy.",
    },
    {
      id: "testing-api-states-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan hanya menguji happy path",
      content:
        "Feature data yang hanya diuji dengan success response dapat tetap gagal saat request error atau response kosong. Pilih error UI yang memang memberi keputusan bagi user, misalnya pesan gagal memuat dan button Coba lagi bila feature memilikinya. Tidak semua state perlu masuk ke satu test; satu scenario success dan satu scenario failure yang jelas sering lebih mudah dirawat.",
    },
    {
      id: "testing-api-states-summary",
      points: [
        "Loading, success, error, dan empty state adalah contract UI dari flow API.",
        "Gunakan getBy untuk output yang langsung ada dan findBy untuk output async yang muncul.",
        "Mock response success dan failure secara terpisah agar intent scenario jelas.",
        "Jangan memakai delay acak untuk menutupi assertion yang salah.",
        "Berikutnya, prinsip mock yang sama dipakai untuk UI yang session-aware tanpa auth backend asli.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "testing-api-states-intro",
      "testing-api-states-example",
      "testing-api-states-coding-practice",
      "testing-api-states-quick-check",
      "testing-api-states-callout",
      "testing-api-states-summary",
    ],
  },
};

export const authAdjacentTestCasesLesson: Lesson = {
  id: "auth-adjacent-test-cases",
  trackId: "frontend-engineering",
  moduleId: "integration-api-mocking",
  title: "Auth-Adjacent Test Cases",
  slug: "auth-adjacent-test-cases",
  description:
    "Menguji UI yang berubah berdasarkan session atau akses tanpa membuat test bergantung pada provider auth nyata.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan session-aware UI dari test auth provider penuh",
    "Menyediakan session mock kecil untuk scenario signed-in dan guest",
    "Menguji action user-visible untuk tiap state akses",
    "Menjelaskan batas confidence dari test auth-adjacent",
  ],
  skillTags: ["Authentication", "Session-aware UI", "Integration Testing", "Access States"],
  blocks: [
    {
      id: "auth-adjacent-test-cases-intro",
      type: "text",
      title: "Uji keputusan UI dari session, bukan provider auth production",
      content:
        "Banyak feature berubah berdasarkan apakah learner sudah memiliki session: guest melihat button Masuk untuk menyimpan bookmark, sedangkan learner signed-in melihat bookmark tersimpan atau action lain. Integration test dapat memberi session object kecil sebagai data masuk dan memeriksa keputusan UI itu. Test ini tidak perlu login ke provider sebenarnya, membuat user database, atau memakai token real. Tujuannya adalah memastikan feature merespons state akses yang telah diterima dengan benar.",
    },
    {
      id: "auth-adjacent-test-cases-example",
      type: "code-example",
      title: "Test UI guest tanpa login ke backend",
      language: "tsx",
      code: `it("asks a guest to sign in before saving a course", () => {
  render(<CourseSaveAction session={null} />);

  expect(
    screen.getByRole("link", { name: "Masuk untuk menyimpan" }),
  ).toBeInTheDocument();
});`,
      explanation:
        "session null adalah input scenario, bukan hasil login sungguhan. Test mencari link yang dapat ditemukan guest dan tidak membaca token, cookie, atau implementation provider. Test auth provider, redirect middleware, dan database policy memerlukan scope serta environment yang berbeda.",
    },
    {
      id: "auth-adjacent-test-cases-coding-practice",
      type: "coding-practice",
      challengeId: "test-session-aware-course-access",
    },
    {
      id: "auth-adjacent-test-cases-quick-check",
      type: "quick-check",
      question:
        "Apa yang dibuktikan test session-aware UI dengan session mock?",
      options: [
        "Feature menampilkan action yang tepat untuk state session yang diterima.",
        "Provider auth production selalu online.",
        "Database RLS sudah melindungi seluruh row user.",
        "Token user asli dapat dibuat dari browser test.",
      ],
      correctAnswer:
        "Feature menampilkan action yang tepat untuk state session yang diterima.",
      explanation:
        "Session mock memberi confidence pada keputusan UI. Ia tidak menggantikan test policy database, middleware, provider, atau integration environment auth yang sesungguhnya.",
    },
    {
      id: "auth-adjacent-test-cases-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan memasukkan credential asli ke test",
      content:
        "Jangan menaruh password, token, API key, atau akun production di source test. Gunakan session mock dengan field minimum yang dibutuhkan UI. Jika flow real login perlu diuji, gunakan environment khusus, akun test yang dikelola dengan aman, dan scope E2E yang jelas.",
    },
    {
      id: "auth-adjacent-test-cases-summary",
      type: "summary",
      points: [
        "Session mock membantu menguji keputusan UI untuk guest dan user signed-in.",
        "Test mencari action yang user lihat, bukan token atau detail provider.",
        "Mock session tidak membuktikan backend auth, middleware, atau RLS production.",
        "Credential asli tidak boleh berada di practice atau source test.",
        "Berikutnya, Uji Kompetensi menggabungkan scope flow, MSW, state API, dan batas confidence mock.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "auth-adjacent-test-cases-intro",
      "auth-adjacent-test-cases-example",
      "auth-adjacent-test-cases-coding-practice",
      "auth-adjacent-test-cases-quick-check",
      "auth-adjacent-test-cases-callout",
      "auth-adjacent-test-cases-summary",
    ],
  },
};

export const integrationApiMockingAssessmentLesson: Lesson = {
  id: "integration-api-mocking-assessment",
  trackId: "frontend-engineering",
  moduleId: "integration-api-mocking",
  title: "Uji Kompetensi Integration and API Mocking",
  slug: "integration-api-mocking-assessment",
  description:
    "Checkpoint untuk menilai kesiapan menguji flow feature dengan mocked API response, state async, dan UI session-aware.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Menentukan scope feature-level test yang masuk akal",
    "Menulis handler success dan failure pada network boundary",
    "Memeriksa state API async yang terlihat user",
    "Menjelaskan batas confidence dari API dan session mock",
  ],
  skillTags: ["Integration Testing", "MSW", "Async Testing", "Auth", "Readiness Checkpoint"],
  blocks: [
    {
      id: "integration-api-mocking-assessment-recap",
      type: "text",
      title: "Checkpoint: uji flow yang user alami saat data berubah",
      content:
        "Pilih satu feature seperti CourseCatalog, bukan seluruh aplikasi. Handler MSW memberi success dan failure response pada batas network supaya component tetap mengikuti alur request normal. Test kemudian memeriksa loading, course yang tampil, atau alert failure melalui query yang user-oriented. Session mock boleh dipakai untuk menguji keputusan UI guest dan signed-in, tetapi tidak menggantikan backend auth, database policy, atau health check API asli.",
    },
    {
      id: "integration-api-mocking-assessment-quiz",
      type: "quiz",
      quizId: "integration-api-mocking-assessment-quiz",
    },
    {
      id: "integration-api-mocking-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-api-integration-checkpoint",
    },
    {
      id: "integration-api-mocking-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note untuk satu integration test feature data. Sebutkan user goal, network request yang dimock, mock success dan failure response, loading/success/error UI yang diassert, query async yang dipilih dan alasannya, serta satu hal yang test ini tidak buktikan tentang backend atau auth. Jelaskan command yang akan kamu jalankan di local project tanpa mengklaim practice workspace menjalankan test.",
      placeholder:
        "Saya menguji CourseCatalog agar learner dapat melihat course dari endpoint GET /api/courses. MSW memberi success response dengan satu course Belajar Flexbox dan failure response status 500. Test success memeriksa Memuat course lalu menunggu heading Belajar Flexbox dengan findByRole. Test failure memakai handler override dan menunggu alert Gagal memuat course. Saya memilih findByRole karena output muncul setelah fetch selesai. Test ini tidak membuktikan backend production, schema database, atau auth provider sehat. Di local project saya menjalankan npm run test dan membaca nama scenario atau query yang gagal.",
      minimumCharacters: 550,
      checklist: [
        "Menyebut user goal dan scope satu feature.",
        "Menjelaskan request serta mock success dan failure response.",
        "Menyebut loading, success, dan error UI yang diassert.",
        "Menjelaskan alasan memakai query async atau accessible query.",
        "Menyebut batas confidence mock dan command test lokal.",
      ],
      modelAnswer:
        "Integration test saya melindungi flow CourseCatalog: learner membuka katalog dan melihat course yang tersedia, atau mendapat pesan yang jelas bila request gagal. Saya memakai MSW untuk GET /api/courses. Handler default mengembalikan courses berisi Belajar Flexbox, sedangkan scenario failure meng-override endpoint dengan status 500. Sesudah render, test memeriksa Memuat course sebagai state awal lalu menunggu heading Belajar Flexbox menggunakan findByRole. Untuk failure, test menunggu role alert berisi Gagal memuat course. Saya sengaja tidak menguji detail useEffect, fungsi mapper internal, atau request backend nyata. Test ini memberi confidence pada UI terhadap response mock, bukan bukti API production, RLS, atau provider auth sehat. Di local project saya menjalankan npm run test dan membaca output scenario yang gagal.",
    },
    {
      id: "integration-api-mocking-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk setup dan membaca failure test async",
      description:
        "Baca satu bagian yang sesuai dengan setup project-mu, lalu jalankan satu scenario success dan satu scenario failure secara lokal. Jangan menambah lifecycle, cache, atau mocking kompleks sebelum handler kecilmu dapat dipahami.",
      links: [
        {
          source: "MSW",
          title: "Getting started and network mocking",
          url: "https://mswjs.io/",
          focus: [
            "Konsep request interception pada network boundary.",
            "Handler HTTP dan response JSON untuk scenario test.",
            "Cara memakai MSW pada environment yang sesuai project.",
          ],
          ignoreForNow: [
            "GraphQL, mock generation, dan handler lifecycle kompleks.",
            "Mock API pihak ketiga atau setup production observability.",
          ],
        },
        {
          source: "Testing Library",
          title: "Async Methods",
          url: "https://testing-library.com/docs/dom-testing-library/api-async/",
          focus: [
            "Kapan memakai findBy untuk output yang muncul async.",
            "Mengapa async query perlu await.",
            "Kapan waitFor berguna dan mengapa tidak dipakai sembarangan.",
          ],
          ignoreForNow: [
            "Timeout custom sebagai cara menutupi test yang salah.",
            "Polling atau helper async di luar scenario feature-mu.",
          ],
        },
        {
          source: "Testing Library",
          title: "Appearance and Disappearance",
          url: "https://testing-library.com/docs/guide-disappearance/",
          focus: [
            "Membedakan getBy, findBy, dan queryBy pada element yang berubah.",
            "Menguji loading atau error UI yang tampil dan hilang.",
            "Menggunakan query untuk assertion element tidak ada.",
          ],
          ignoreForNow: [
            "Menulis assertion absence pada setiap node UI.",
            "Optimasi test suite sebelum scenario dasar stabil.",
          ],
        },
      ],
      followUpAction:
        "Di Local React App atau Local Next.js App, pilih satu feature data. Buat handler success dan failure, jalankan dua test yang memeriksa loading lalu output akhir, dan tulis satu kalimat tentang hal yang belum dibuktikan mock tersebut. Jangan tandai selesai hanya karena cek struktur practice sudah lolos.",
    },
    {
      id: "integration-api-mocking-assessment-summary",
      type: "summary",
      points: [
        "Integration test memilih satu flow feature yang berharga, bukan seluruh aplikasi.",
        "MSW memock response di network boundary sehingga UI tetap mengikuti alur request biasa.",
        "Loading, success, dan error adalah contract UI yang perlu diuji dengan query yang tepat.",
        "Session mock memberi confidence pada keputusan UI, bukan pada provider auth atau backend production.",
        "Berikutnya, End-to-End Testing Strategy memilih critical journey yang perlu berjalan di browser sungguhan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "integration-api-mocking-assessment-recap",
      "integration-api-mocking-assessment-quiz",
      "integration-api-mocking-assessment-coding-practice",
      "integration-api-mocking-assessment-writing-practice",
      "integration-api-mocking-assessment-documentation-bridge",
      "integration-api-mocking-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const integrationApiMockingAssessmentQuiz: Quiz = {
  id: "integration-api-mocking-assessment-quiz",
  lessonId: "integration-api-mocking-assessment",
  title: "Uji Kompetensi Integration and API Mocking",
  passingScore: 70,
  questions: [
    {
      id: "integration-scope",
      type: "multiple-choice",
      question:
        "Manakah test yang paling sesuai untuk integration scope CourseCatalog?",
      options: [
        "Render katalog, mock GET /api/courses, lalu assert state loading dan course yang tampil.",
        "Memeriksa setiap nama class CSS di CourseCard.",
        "Menjalankan seluruh dashboard dengan backend production.",
        "Memanggil setter useState component langsung dari test.",
      ],
      correctAnswer:
        "Render katalog, mock GET /api/courses, lalu assert state loading dan course yang tampil.",
      explanation:
        "Integration test melindungi flow feature yang user alami ketika UI, request, dan response bekerja bersama. Ia tidak perlu mengikat pada styling atau state internal.",
    },
    {
      id: "msw-boundary",
      type: "multiple-choice",
      question: "Mengapa MSW dipakai pada network boundary?",
      options: [
        "Agar feature tetap melakukan request normal tetapi menerima response test yang deterministik.",
        "Agar component tidak lagi perlu memakai fetch.",
        "Agar backend production otomatis menjadi sehat.",
        "Agar semua helper internal harus dimock satu per satu.",
      ],
      correctAnswer:
        "Agar feature tetap melakukan request normal tetapi menerima response test yang deterministik.",
      explanation:
        "MSW menyiapkan response pada batas request sehingga test dapat fokus pada behavior feature tanpa server atau credential asli.",
    },
    {
      id: "async-query",
      type: "multiple-choice",
      question:
        "Sesudah request success, heading course baru muncul. Query mana yang sesuai?",
      options: [
        "await screen.findByRole dengan role heading dan nama course",
        "screen.queryByRole tanpa assertion",
        "document.querySelector untuk class internal",
        "Memanggil setCourses dari test",
      ],
      correctAnswer:
        "await screen.findByRole dengan role heading dan nama course",
      explanation:
        "findBy menunggu output async muncul. Role dan accessible name menjaga assertion tetap dekat dengan apa yang ditemukan user.",
    },
    {
      id: "failure-coverage",
      type: "multiple-choice",
      question:
        "Apa tambahan yang bernilai setelah success response sudah diuji?",
      options: [
        "Handler failure terpisah dan assertion pada error UI yang user lihat.",
        "Menambah timeout acak sampai test lulus.",
        "Menghapus loading state dari component.",
        "Menyalin assertion success ke banyak file tanpa scenario baru.",
      ],
      correctAnswer:
        "Handler failure terpisah dan assertion pada error UI yang user lihat.",
      explanation:
        "Response failure perlu menghasilkan keputusan UI yang jelas. Handler terpisah membuat scenario dan failure output mudah dipahami.",
    },
    {
      id: "auth-limit",
      type: "multiple-choice",
      question:
        "Apa batas utama dari session mock pada integration test UI?",
      options: [
        "Ia tidak membuktikan provider auth, backend, atau RLS production bekerja.",
        "Ia tidak boleh dipakai untuk menampilkan UI guest.",
        "Ia otomatis menguji password user.",
        "Ia menggantikan semua E2E test.",
      ],
      correctAnswer:
        "Ia tidak membuktikan provider auth, backend, atau RLS production bekerja.",
      explanation:
        "Session mock memberi confidence pada keputusan UI dari data session yang diterima. Sistem auth dan data production membutuhkan pemeriksaan dengan scope lain.",
    },
  ],
};

export const chooseCourseCatalogIntegrationBoundaryChallenge: CodingChallenge = {
  id: "choose-course-catalog-integration-boundary",
  lessonId: "integration-test-scope",
  title: "Choose course catalog integration boundary",
  description:
    "Lengkapi test flow CourseCatalog yang memeriksa loading dan course user-visible. Preview tidak menjalankan request atau Vitest.",
  instructions: [
    "Fokus di tab TSX.",
    "Render CourseCatalog sebagai satu feature, bukan memanggil helper internal.",
    "Assert label loading yang tampil setelah render.",
    "Tunggu heading Belajar Flexbox muncul dengan findByRole.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan request atau Vitest.",
  ],
  starterCode: {
    ...integrationPracticeCode,
    tsx: `import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function CourseCatalog() {
  return <p>TODO: tampilkan flow katalog course</p>;
}

describe("CourseCatalog", () => {
  it("TODO: test one course catalog flow", async () => {
    render(<CourseCatalog />);
  });
});`,
  },
  solutionCode: {
    ...integrationPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function CourseCatalog() {
  return (
    <section>
      <p>Memuat course...</p>
      <h2>Belajar Flexbox</h2>
    </section>
  );
}

describe("CourseCatalog", () => {
  it("shows a course after the catalog flow resolves", async () => {
    render(<CourseCatalog />);

    expect(screen.getByText("Memuat course...")).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { name: "Belajar Flexbox" }),
    ).toBeInTheDocument();
  });
});`,
  },
  checklist: [
    "Test merender CourseCatalog sebagai feature yang utuh.",
    "Assertion memeriksa loading UI yang user lihat.",
    "Output course dicari sebagai heading dengan accessible name.",
    "Test menunggu output async menggunakan await dan findByRole.",
    "Preview tidak menjalankan request, MSW, atau Vitest.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "render-catalog", label: "CourseCatalog dirender sebagai feature.", type: "contains", valueIncludes: "render(<CourseCatalog />);" },
      { id: "loading-assertion", label: "Loading UI diassert setelah render.", type: "contains", valueIncludes: 'expect(screen.getByText("Memuat course...")).toBeInTheDocument();' },
      { id: "async-heading", label: "Test menunggu heading course dengan findByRole.", type: "contains", valueIncludes: 'await screen.findByRole("heading", { name: "Belajar Flexbox" })' },
      { id: "behavior-name", label: "Nama test menyebut flow katalog.", type: "contains", valueIncludes: 'it("shows a course after the catalog flow resolves", async () => {' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target integrasi",
    description:
      "Cek otomatis membaca scope integration test. Preview tidak menjalankan network request, handler MSW, atau Vitest.",
    lines: [
      "Test memilih satu flow katalog dan output yang user lihat.",
      "Loading diperiksa sebelum course async ditemukan.",
      "Handler network akan ditambahkan pada lesson MSW berikutnya.",
    ],
  },
  skillTags: ["Integration Testing", "Test Scope", "Async UI"],
};

export const mockCourseCatalogApiResponseChallenge: CodingChallenge = {
  id: "mock-course-catalog-api-response",
  lessonId: "msw-basics",
  title: "Mock course catalog API response",
  description:
    "Tulis handler MSW success untuk GET /api/courses dengan response course yang kecil dan mudah dibaca. Preview tidak mengaktifkan MSW.",
  instructions: [
    "Fokus di tab TSX.",
    "Import http dan HttpResponse dari msw.",
    "Buat handlers array dengan http.get untuk /api/courses.",
    "Kembalikan HttpResponse.json berisi satu course Belajar Flexbox.",
    "Cek otomatis membaca struktur handler. Preview tidak mengaktifkan MSW.",
  ],
  starterCode: {
    ...integrationPracticeCode,
    tsx: `export const handlers = [
  // TODO: mock GET /api/courses.
];`,
  },
  solutionCode: {
    ...integrationPracticeCode,
    tsx: `import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/courses", () => {
    return HttpResponse.json({
      courses: [{ id: "flexbox", title: "Belajar Flexbox" }],
    });
  }),
];`,
  },
  checklist: [
    "Handler mengimport http dan HttpResponse dari MSW.",
    "Handler merespons GET /api/courses.",
    "Response memakai HttpResponse.json.",
    "Mock data berisi course dengan title Belajar Flexbox.",
    "Preview tidak mengaktifkan MSW atau memeriksa API asli.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "msw-import", label: "http dan HttpResponse di-import dari MSW.", type: "contains", valueIncludes: 'import { http, HttpResponse } from "msw";' },
      { id: "get-handler", label: "Handler menangani GET /api/courses.", type: "contains", valueIncludes: 'http.get("/api/courses", () => {' },
      { id: "json-response", label: "Handler mengembalikan JSON response.", type: "contains", valueIncludes: "return HttpResponse.json({" },
      { id: "course-title", label: "Response menyediakan title course.", type: "contains", valueIncludes: 'title: "Belajar Flexbox"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target handler API",
    description:
      "Cek otomatis membaca struktur handler MSW. Preview tidak mengaktifkan interception network atau menghubungi API asli.",
    lines: [
      "GET /api/courses memiliki response success yang dapat dibaca test.",
      "Mock data cukup kecil untuk menjelaskan scenario katalog.",
      "Hubungkan handler ke setup MSW di local project untuk menjalankan test nyata.",
    ],
  },
  skillTags: ["MSW", "API Mocking", "REST", "Network Boundary"],
};

export const testCourseCatalogApiStatesChallenge: CodingChallenge = {
  id: "test-course-catalog-api-states",
  lessonId: "testing-api-loading-error-success",
  title: "Test course catalog API states",
  description:
    "Uji CourseCatalog dengan MSW success dan failure response, lalu periksa loading, course, dan alert yang user lihat. Preview tidak menjalankan server MSW.",
  instructions: [
    "Fokus di tab TSX.",
    "Siapkan setupServer dengan handler success untuk GET /api/courses.",
    "Assert Memuat course lalu tunggu heading Belajar Flexbox.",
    "Override handler dengan status 500 lalu tunggu alert Gagal memuat course.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan MSW atau Vitest.",
  ],
  starterCode: {
    ...integrationPracticeCode,
    tsx: `import { useEffect, useState } from "react";

type Course = { id: string; title: string };

function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // TODO: load courses and render UI states.
    setCourses([]);
  }, []);

  return <p>TODO: render catalog state</p>;
}`,
  },
  solutionCode: {
    ...integrationPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { useEffect, useState } from "react";

type Course = { id: string; title: string };

const server = setupServer(
  http.get("/api/courses", () => {
    return HttpResponse.json({
      courses: [{ id: "flexbox", title: "Belajar Flexbox" }],
    });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await fetch("/api/courses");

        if (!response.ok) {
          throw new Error("Course request failed");
        }

        const data = (await response.json()) as { courses: Course[] };
        setCourses(data.courses);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }

    void loadCourses();
  }, []);

  if (status === "loading") {
    return <p>Memuat course...</p>;
  }

  if (status === "error") {
    return <p role="alert">Gagal memuat course</p>;
  }

  return (
    <section>
      {courses.map((course) => (
        <h2 key={course.id}>{course.title}</h2>
      ))}
    </section>
  );
}

describe("CourseCatalog API states", () => {
  it("shows loading then the course after a successful response", async () => {
    render(<CourseCatalog />);

    expect(screen.getByText("Memuat course...")).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { name: "Belajar Flexbox" }),
    ).toBeInTheDocument();
  });

  it("shows an error message after a failed response", async () => {
    server.use(
      http.get("/api/courses", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    render(<CourseCatalog />);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Gagal memuat course",
    );
  });
});`,
  },
  checklist: [
    "MSW server memiliki handler success untuk GET /api/courses.",
    "Test success mengassert loading lalu menunggu heading course.",
    "Scenario failure memakai handler override dengan status 500.",
    "Test failure mencari error UI melalui role alert.",
    "Preview tidak menjalankan MSW server, fetch, atau Vitest.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "msw-server", label: "Test menyiapkan MSW test server.", type: "contains", valueIncludes: 'import { setupServer } from "msw/node";' },
      { id: "success-handler", label: "Handler success melayani GET /api/courses.", type: "contains", valueIncludes: 'http.get("/api/courses", () => {' },
      { id: "loading-assertion", label: "Test memeriksa loading UI.", type: "contains", valueIncludes: 'expect(screen.getByText("Memuat course...")).toBeInTheDocument();' },
      { id: "success-assertion", label: "Test menunggu heading course success.", type: "contains", valueIncludes: 'await screen.findByRole("heading", { name: "Belajar Flexbox" })' },
      { id: "failure-handler", label: "Scenario failure mengembalikan status 500.", type: "contains", valueIncludes: "return new HttpResponse(null, { status: 500 });" },
      { id: "error-assertion", label: "Test menunggu alert error.", type: "contains", valueIncludes: 'expect(await screen.findByRole("alert")).toHaveTextContent(' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pengujian API",
    description:
      "Cek otomatis membaca struktur MSW dan test async. Preview tidak menjalankan server MSW, fetch, DOM environment, atau Vitest.",
    lines: [
      "Success scenario memeriksa loading lalu course yang muncul.",
      "Failure scenario meng-override response dan mencari alert user-visible.",
      "Jalankan test di local project untuk melihat lifecycle handler serta result runner sebenarnya.",
    ],
  },
  skillTags: ["MSW", "Async Testing", "Loading State", "Error State", "React Testing Library"],
};

export const testSessionAwareCourseAccessChallenge: CodingChallenge = {
  id: "test-session-aware-course-access",
  lessonId: "auth-adjacent-test-cases",
  title: "Test session-aware course access",
  description:
    "Uji action save course untuk guest dan learner signed-in memakai data session mock. Preview tidak menjalankan provider auth.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat CourseSaveAction yang menerima session sebagai prop.",
    "Untuk session null, tampilkan link Masuk untuk menyimpan.",
    "Untuk session learner, tampilkan button Simpan course.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan provider auth atau login nyata.",
  ],
  starterCode: {
    ...integrationPracticeCode,
    tsx: `type Session = { user: { id: string; name: string } } | null;

function CourseSaveAction({ session }: { session: Session }) {
  return <p>TODO: pilih action berdasarkan session</p>;
}`,
  },
  solutionCode: {
    ...integrationPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

type Session = { user: { id: string; name: string } } | null;

function CourseSaveAction({ session }: { session: Session }) {
  if (!session) {
    return <a href="/login">Masuk untuk menyimpan</a>;
  }

  return <button type="button">Simpan course</button>;
}

describe("CourseSaveAction", () => {
  it("asks a guest to sign in before saving a course", () => {
    render(<CourseSaveAction session={null} />);

    expect(
      screen.getByRole("link", { name: "Masuk untuk menyimpan" }),
    ).toBeInTheDocument();
  });

  it("shows the save action for a signed-in learner", () => {
    render(
      <CourseSaveAction session={{ user: { id: "u-1", name: "Rina" } }} />,
    );

    expect(
      screen.getByRole("button", { name: "Simpan course" }),
    ).toBeInTheDocument();
  });
});`,
  },
  checklist: [
    "Session type memungkinkan nilai null untuk guest.",
    "Guest menerima link Masuk untuk menyimpan.",
    "Learner signed-in menerima button Simpan course.",
    "Test mencari action lewat role dan accessible name.",
    "Preview tidak menjalankan login, provider auth, atau token asli.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "guest-link", label: "Guest melihat link masuk.", type: "contains", valueIncludes: '<a href="/login">Masuk untuk menyimpan</a>' },
      { id: "signed-in-button", label: "Learner melihat button simpan.", type: "contains", valueIncludes: '<button type="button">Simpan course</button>' },
      { id: "guest-render", label: "Test merender scenario guest.", type: "contains", valueIncludes: "render(<CourseSaveAction session={null} />);" },
      { id: "guest-query", label: "Test mencari action guest lewat role link.", type: "contains", valueIncludes: 'screen.getByRole("link", { name: "Masuk untuk menyimpan" })' },
      { id: "learner-query", label: "Test mencari action learner lewat role button.", type: "contains", valueIncludes: 'screen.getByRole("button", { name: "Simpan course" })' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target UI session-aware",
    description:
      "Cek otomatis membaca structure session-aware UI test. Preview tidak menjalankan provider auth, login browser, atau token asli.",
    lines: [
      "Guest melihat action masuk yang sesuai.",
      "Learner signed-in melihat action simpan course.",
      "Test memberi confidence pada keputusan UI, bukan sistem auth production.",
    ],
  },
  skillTags: ["Authentication", "Session-aware UI", "React Testing Library", "Integration Testing"],
};

export const buildCourseApiIntegrationCheckpointChallenge: CodingChallenge = {
  id: "build-course-api-integration-checkpoint",
  lessonId: "integration-api-mocking-assessment",
  title: "Build course API integration checkpoint",
  description:
    "Lengkapi checkpoint test CourseCatalog dengan handler MSW success dan failure serta assertion async pada UI. Preview tidak menjalankan API atau Vitest.",
  instructions: [
    "Fokus di tab TSX.",
    "Siapkan MSW server dan handler GET /api/courses success.",
    "Test loading lalu heading course dari response success.",
    "Override response menjadi status 500 lalu test alert error.",
    "Simpan batas confidence: mock tidak membuktikan backend production sehat.",
    "Cek otomatis membaca struktur checkpoint. Preview tidak menjalankan API atau Vitest.",
  ],
  starterCode: {
    ...integrationPracticeCode,
    tsx: `import { useEffect, useState } from "react";

type Course = { id: string; title: string };

function CourseCatalog() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    // TODO: request /api/courses and render UI states.
    setStatus("loading");
  }, []);

  return <p>{status}</p>;
}`,
  },
  solutionCode: {
    ...integrationPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { useEffect, useState } from "react";

type Course = { id: string; title: string };

const server = setupServer(
  http.get("/api/courses", () => {
    return HttpResponse.json({
      courses: [{ id: "flexbox", title: "Belajar Flexbox" }],
    });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await fetch("/api/courses");

        if (!response.ok) {
          throw new Error("Course request failed");
        }

        const data = (await response.json()) as { courses: Course[] };
        setCourses(data.courses);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }

    void loadCourses();
  }, []);

  if (status === "loading") {
    return <p>Memuat course...</p>;
  }

  if (status === "error") {
    return <p role="alert">Gagal memuat course</p>;
  }

  return (
    <section>
      {courses.map((course) => (
        <h2 key={course.id}>{course.title}</h2>
      ))}
    </section>
  );
}

describe("CourseCatalog integration checkpoint", () => {
  it("shows a course after a successful API response", async () => {
    render(<CourseCatalog />);

    expect(screen.getByText("Memuat course...")).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { name: "Belajar Flexbox" }),
    ).toBeInTheDocument();
  });

  it("shows an alert after a failed API response", async () => {
    server.use(
      http.get("/api/courses", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    render(<CourseCatalog />);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Gagal memuat course",
    );
  });
});`,
  },
  checklist: [
    "MSW handler success menyediakan course yang dapat ditampilkan catalog.",
    "Test success memeriksa loading lalu output course async.",
    "Handler override mensimulasikan response failure status 500.",
    "Test failure mengassert alert yang user lihat.",
    "Preview tidak menjalankan MSW, fetch, backend, atau Vitest.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "server-setup", label: "Checkpoint mengimport setupServer MSW.", type: "contains", valueIncludes: 'import { setupServer } from "msw/node";' },
      { id: "success-response", label: "Handler success menyediakan course.", type: "contains", valueIncludes: 'title: "Belajar Flexbox"' },
      { id: "loading", label: "Test memeriksa loading awal.", type: "contains", valueIncludes: 'expect(screen.getByText("Memuat course...")).toBeInTheDocument();' },
      { id: "success", label: "Test menunggu heading course success.", type: "contains", valueIncludes: 'await screen.findByRole("heading", { name: "Belajar Flexbox" })' },
      { id: "failure-response", label: "Handler failure merespons status 500.", type: "contains", valueIncludes: "return new HttpResponse(null, { status: 500 });" },
      { id: "failure", label: "Test mencari alert failure.", type: "contains", valueIncludes: 'expect(await screen.findByRole("alert")).toHaveTextContent(' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target checkpoint integrasi",
    description:
      "Cek otomatis membaca struktur feature-level API test. Preview tidak menjalankan MSW, fetch, backend, DOM environment, atau Vitest.",
    lines: [
      "Success path melindungi loading dan course yang user lihat.",
      "Failure path melindungi alert ketika API memberi error.",
      "Mock memberi confidence pada behavior UI terhadap response yang disepakati, bukan pada kesehatan backend production.",
    ],
  },
  skillTags: ["Integration Testing", "MSW", "Async Testing", "Error Handling", "Readiness Checkpoint"],
};
