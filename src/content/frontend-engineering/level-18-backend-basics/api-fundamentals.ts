import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const apiPracticeCode = { html: "", css: "", js: "" };

export const apiFundamentalsModule: Module = {
  id: "api-fundamentals",
  trackId: "frontend-engineering",
  title: "API Fundamentals",
  slug: "api-fundamentals",
  description:
    "Membaca endpoint, request, response, status code, pagination, dan webhook dari sudut pandang frontend integration tanpa membangun backend baru.",
  order: 56,
  lessonIds: [
    "rest-api-basics",
    "graphql-basics",
    "http-status-codes",
    "api-request-response-shape",
    "api-pagination-webhooks",
    "api-fundamentals-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["API", "HTTP", "REST", "GraphQL", "TypeScript", "Data Contracts", "Pagination"],
};

export const restApiBasicsLesson: Lesson = {
  id: "rest-api-basics",
  trackId: "frontend-engineering",
  moduleId: "api-fundamentals",
  title: "REST API Basics",
  slug: "rest-api-basics",
  description:
    "Membaca resource, endpoint, method, query parameter, serta request/response dasar sebelum menghubungkan UI ke data server.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan API sebagai contract antara frontend dan server",
    "Membaca resource, endpoint, method, query parameter, dan response body pada REST API sederhana",
    "Membedakan GET untuk membaca dari POST untuk membuat data pada contoh dasar",
    "Menentukan pertanyaan contract sebelum mulai menulis fetch",
  ],
  skillTags: ["API", "HTTP", "REST", "Request", "Response"],
  blocks: [
    {
      id: "rest-api-basics-intro",
      type: "text",
      title: "API adalah contract, bukan sekadar URL fetch",
      content:
        "Saat frontend meminta daftar course, browser tidak perlu tahu database atau framework yang dipakai server. Frontend perlu contract yang dapat dibaca: resource apa yang diminta, endpoint mana yang dipakai, method apa yang diizinkan, input apa yang dikirim, bentuk response apa yang diterima, dan apa arti setiap error. REST adalah salah satu gaya umum untuk menyusun contract ini di atas HTTP. Resource biasanya berupa kata benda seperti courses, profiles, atau enrollments; endpoint adalah alamat untuk mengakses atau mengubah resource tersebut.\n\nSebelum menulis fetch, baca contoh request dan response seperti membaca interface antar tim. GET /api/courses?level=advanced dapat berarti meminta kumpulan course dengan filter. POST /api/courses dapat berarti mengirim body untuk membuat course. Jangan menebak method, nama field, atau success response dari nama endpoint saja. Contract milik provider atau backend team adalah sumber kebenaran.",
    },
    {
      id: "rest-api-basics-example",
      type: "code-example",
      title: "Membaca satu request daftar course",
      language: "bash",
      code: [
        "GET /api/courses?level=advanced HTTP/1.1",
        "Accept: application/json",
        "",
        "HTTP/1.1 200 OK",
        "Content-Type: application/json",
        "",
        '{ "data": [{ "id": "html-forms", "title": "HTML Forms" }], "next_cursor": "course_2" }',
      ].join("\n"),
      explanation:
        "GET adalah method request. /api/courses adalah endpoint resource, sedangkan level=advanced adalah query parameter yang mengubah hasil tanpa menjadi bagian path resource. Response 200 membawa JSON. Pada contract ini, array berada di data dan next_cursor dapat dipakai untuk meminta halaman berikutnya. Metadata seperti next_cursor perlu dipetakan, bukan dibuang atau dipakai component tanpa konteks.",
    },
    { id: "rest-api-basics-coding-practice", type: "coding-practice", challengeId: "read-course-rest-request" },
    {
      id: "rest-api-basics-quick-check",
      type: "quick-check",
      question: "Pada REST API sederhana, request mana paling tepat untuk membaca daftar course dengan filter level?",
      options: ["GET /api/courses?level=advanced", "POST /api/courses/level/advanced tanpa body untuk membaca daftar", "DELETE /api/courses agar browser mendapatkan semua course", "PATCH /api/courses hanya karena UI memiliki filter"],
      correctAnswer: "GET /api/courses?level=advanced",
      explanation: "GET lazim dipakai untuk meminta data. Query parameter mengekspresikan filter pada koleksi tanpa mengubah resource. Contract nyata tetap dapat memakai bentuk berbeda, jadi baca docs endpoint sebelum mengasumsikan pola.",
    },
    {
      id: "rest-api-basics-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Nama endpoint tidak cukup untuk menjelaskan contract",
      content:
        "Endpoint yang terlihat sederhana tetap dapat memiliki pagination, permission, query parameter wajib, format tanggal, atau error shape khusus. Jangan membuat URL sendiri dari nama component lalu berharap server menebak maksudnya. Catat method, input, success response, dan failure response sebelum mulai integration.",
    },
    {
      id: "rest-api-basics-summary",
      type: "summary",
      points: [
        "API contract menjelaskan cara frontend dan server bertukar data.",
        "REST sering memakai resource, endpoint, HTTP method, query parameter, request body, dan response body.",
        "GET membaca data; POST, PATCH, atau DELETE punya intent berbeda sesuai contract.",
        "Baca contoh request serta response sebelum menulis fetch atau JSX.",
        "Berikutnya, kita membandingkan REST dengan GraphQL tanpa menganggap salah satunya selalu lebih baik.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["rest-api-basics-intro", "rest-api-basics-example", "rest-api-basics-coding-practice", "rest-api-basics-quick-check", "rest-api-basics-callout", "rest-api-basics-summary"],
  },
};

export const graphqlBasicsLesson: Lesson = {
  id: "graphql-basics",
  trackId: "frontend-engineering",
  moduleId: "api-fundamentals",
  title: "GraphQL Basics",
  slug: "graphql-basics",
  description:
    "Membaca GraphQL query sebagai permintaan data dengan field yang dipilih frontend, lalu membandingkannya dengan REST secara praktis.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan GraphQL query sebagai permintaan field dari schema yang tersedia",
    "Membaca query, variable, dan response data GraphQL sederhana",
    "Membedakan bentuk request GraphQL dan REST tanpa membuat klaim absolut",
    "Memilih field sesuai kebutuhan UI, bukan mengambil seluruh data secara acak",
  ],
  skillTags: ["API", "GraphQL", "REST", "Data Contracts", "TypeScript"],
  blocks: [
    {
      id: "graphql-basics-intro",
      type: "text",
      title: "GraphQL meminta bentuk data yang dibutuhkan UI",
      content:
        "Pada REST, frontend biasanya mengikuti beberapa endpoint yang ditentukan provider, misalnya GET /api/courses dan GET /api/courses/:id. Pada GraphQL, frontend mengirim query yang menyebut field yang ingin dibaca dari schema yang disediakan server. Query tidak memberi browser izin untuk membaca field apa saja; schema, authorization, dan resolver server tetap menentukan data yang tersedia.\n\nPerbedaan yang perlu dipahami frontend adalah bentuk contract. REST sering terlihat pada path dan method. GraphQL sering terlihat pada operation, variable, serta selection set field. Keduanya tetap membutuhkan loading, error handling, type, mapping, dan QA response. Pilih berdasarkan contract, tooling, team, dan kebutuhan product yang nyata, bukan karena satu gaya terlihat lebih modern.",
    },
    {
      id: "graphql-basics-example",
      type: "code-example",
      title: "Query hanya mengambil field untuk CourseCard",
      language: "ts",
      code: [
        "const courseCardQuery = [",
        '  "query CourseCard($id: ID!) {",',
        '  "  course(id: $id) { id title level lessonCount }",',
        '  "}",',
        '].join("\\n");',
        "",
        'const variables = { id: "html-forms" };',
      ].join("\n"),
      explanation:
        "Operation bernama CourseCard menerima variable id. Selection set di dalam course menunjukkan field yang ingin dipakai UI. Jika CourseCard tidak membutuhkan field lain, jangan meminta field itu tanpa alasan. Response biasanya berada di data.course, tetapi error GraphQL dapat memiliki bentuk sendiri; baca provider docs serta type project sebelum menganggap semua request berhasil sama.",
    },
    { id: "graphql-basics-coding-practice", type: "coding-practice", challengeId: "select-course-graphql-fields" },
    {
      id: "graphql-basics-quick-check",
      type: "quick-check",
      question: "Apa yang paling tepat disimpulkan dari field title dan lessonCount di dalam GraphQL query?",
      options: ["Frontend meminta field itu dari type yang diizinkan schema untuk menyiapkan CourseCard.", "Frontend dapat membaca seluruh database tanpa authorization.", "Server pasti mengirim setiap field course walau tidak tertulis di query.", "Query itu otomatis membuat course baru."],
      correctAnswer: "Frontend meminta field itu dari type yang diizinkan schema untuk menyiapkan CourseCard.",
      explanation: "Selection set menyatakan data yang ingin dibaca. Schema dan aturan server tetap menentukan apakah field tersedia serta boleh diakses.",
    },
    {
      id: "graphql-basics-callout",
      type: "callout",
      variant: "important",
      title: "REST dan GraphQL bukan pilihan menang-kalah",
      content:
        "REST dapat sangat jelas untuk resource dan HTTP semantics, sedangkan GraphQL dapat membantu UI meminta field sesuai kebutuhan. Keduanya dapat memiliki cache problem, error shape, pagination, permission, dan dokumentasi yang buruk bila contract tidak dirawat. Fokus pertama adalah membaca contract yang tersedia lalu membuat data boundary yang jujur.",
    },
    {
      id: "graphql-basics-summary",
      type: "summary",
      points: [
        "GraphQL query menyebut operation, variable, dan field yang dibutuhkan UI dari schema.",
        "REST umumnya mengekspresikan operation melalui path dan HTTP method.",
        "Schema serta authorization tetap membatasi data yang dapat diakses GraphQL.",
        "Pilih field sesuai model UI dan baca error shape provider, bukan hanya success example.",
        "Berikutnya, response status membantu frontend menentukan UI recovery pada HTTP-based API.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["graphql-basics-intro", "graphql-basics-example", "graphql-basics-coding-practice", "graphql-basics-quick-check", "graphql-basics-callout", "graphql-basics-summary"],
  },
};

export const httpStatusCodesLesson: Lesson = {
  id: "http-status-codes",
  trackId: "frontend-engineering",
  moduleId: "api-fundamentals",
  title: "Status Codes",
  slug: "http-status-codes",
  description:
    "Memetakan status HTTP yang umum ke UI state, recovery action, dan informasi debugging tanpa menampilkan detail server mentah ke user.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan success 2xx, client-side request issue 4xx, dan server issue 5xx",
    "Memetakan 200, 401, 403, 404, 422, 429, dan 500 ke respons frontend yang tepat",
    "Membedakan HTTP response error dari network failure tanpa status",
    "Menulis UI error yang memberi recovery action tanpa membocorkan detail internal",
  ],
  skillTags: ["HTTP", "Status Codes", "Error Handling", "Debugging", "UX"],
  blocks: [
    {
      id: "http-status-codes-intro",
      type: "text",
      title: "Status code membantu UI memilih langkah berikutnya",
      content:
        "Status code adalah sinyal dari server tentang hasil request HTTP. 2xx biasanya menandakan request berhasil, 4xx menandakan request tidak dapat dipenuhi karena request, identity, permission, atau input, dan 5xx menandakan server gagal memproses request. Angka bukan copy yang langsung ditampilkan ke user. Frontend perlu mengubahnya menjadi state dan action yang sesuai context.\n\nContohnya, 401 dapat membawa user kembali ke sign-in flow, 403 berarti user sudah dikenali tetapi tidak memiliki izin, 404 dapat menjadi not-found page, 422 dapat menandai validation error field, 429 meminta retry yang lebih hati-hati, dan 500 membutuhkan error state serta observability. Network failure berbeda: browser mungkin tidak menerima HTTP response sama sekali, sehingga tidak ada status code untuk dipetakan.",
    },
    {
      id: "http-status-codes-example",
      type: "code-example",
      title: "Memilih UI state dari status response",
      language: "ts",
      code: [
        'type CourseListUiState = "ready" | "sign-in" | "not-found" | "retry-later" | "request-error";',
        "",
        "function getCourseListUiState(status: number): CourseListUiState {",
        '  if (status >= 200 && status < 300) return "ready";',
        '  if (status === 401) return "sign-in";',
        '  if (status === 404) return "not-found";',
        '  if (status === 429) return "retry-later";',
        '  return "request-error";',
        "}",
      ].join("\n"),
      explanation:
        "Contoh ini mengubah status transport menjadi state yang dapat dipakai UI. 422 sering dipetakan ke error field pada form, bukan list error umum. 403 membutuhkan copy access denied, bukan tombol sign-in. API nyata dapat memakai error code application-level tambahan; type dan mapper project perlu menyimpan detail yang berguna untuk recovery tanpa menyebarkan status check ke seluruh component.",
    },
    { id: "http-status-codes-coding-practice", type: "coding-practice", challengeId: "map-course-status-to-ui" },
    {
      id: "http-status-codes-quick-check",
      type: "quick-check",
      question: "Apa respons frontend paling tepat ketika request course detail mendapat 404?",
      options: ["Tampilkan state course tidak ditemukan dengan jalan kembali yang relevan.", "Tampilkan daftar kosong seolah request berhasil.", "Paksa user sign in ulang tanpa membaca contract.", "Tampilkan raw error server ke halaman."],
      correctAnswer: "Tampilkan state course tidak ditemukan dengan jalan kembali yang relevan.",
      explanation: "404 menunjukkan resource yang diminta tidak ditemukan pada endpoint itu. UI perlu memberi context serta recovery, misalnya kembali ke catalog. Identity dan permission perlu dibedakan dari 401 atau 403.",
    },
    {
      id: "http-status-codes-callout",
      type: "callout",
      variant: "warning",
      title: "fetch tidak otomatis melempar error untuk 404 atau 500",
      content:
        "Promise fetch dapat selesai ketika server mengirim 404 atau 500. Periksa response.ok atau status sebelum memperlakukan body sebagai success data. Sebaliknya, kegagalan jaringan, DNS, request dibatalkan, atau CORS browser dapat menghasilkan exception tanpa HTTP status. Beri user copy dan recovery yang dapat dilakukan, bukan raw server error.",
    },
    {
      id: "http-status-codes-summary",
      type: "summary",
      points: [
        "Status code memberi sinyal transport yang perlu diterjemahkan menjadi UI behavior.",
        "401, 403, 404, 422, 429, dan 5xx tidak memiliki recovery yang sama.",
        "Network failure dapat terjadi tanpa status code.",
        "Jangan tampilkan raw server error atau menyamakan error dengan empty state.",
        "Berikutnya, kita membaca request dan response sebagai data contract yang dapat diberi type serta mapper.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["http-status-codes-intro", "http-status-codes-example", "http-status-codes-coding-practice", "http-status-codes-quick-check", "http-status-codes-callout", "http-status-codes-summary"],
  },
};

export const apiRequestResponseShapeLesson: Lesson = {
  id: "api-request-response-shape",
  trackId: "frontend-engineering",
  moduleId: "api-fundamentals",
  title: "Request and Response Shape",
  slug: "api-request-response-shape",
  description:
    "Memperlakukan payload success dan error sebagai contract yang perlu diberi type serta dipetakan sebelum masuk ke component UI.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Membaca path, method, header, request body, success response, dan error response sebagai satu contract",
    "Membedakan API response transport dari model yang dibutuhkan component",
    "Membuat type response serta mapper kecil untuk data course",
    "Menggunakan validation error field tanpa menganggap semua failure sebagai error umum",
  ],
  skillTags: ["API Contract", "TypeScript", "Response Mapping", "Validation Errors", "Data Boundary"],
  blocks: [
    {
      id: "api-request-response-shape-intro",
      type: "text",
      title: "Bentuk data adalah bagian dari contract",
      content:
        "API contract tidak berhenti pada endpoint. Untuk satu mutation, frontend perlu tahu method, request body, header yang dibutuhkan, bentuk success response, dan bentuk error response. Misalnya POST /api/course-notes dapat menerima course_id serta body, mengembalikan note baru saat berhasil, dan mengembalikan field errors bila input tidak valid. TypeScript membantu memberi nama pada bentuk yang diharapkan, tetapi type di browser bukan bukti server selalu mengirim data valid.\n\nJangan membuat component mengenal setiap detail transport. API mungkin memakai snake_case, null, wrapper data, timestamp ISO, pagination metadata, atau error code internal. Mapper di data boundary mengubah response menjadi model UI yang jelas, misalnya title, lessonCount, dan updatedLabel. Component lalu fokus menampilkan state. Saat contract berubah, satu mapper dan type lebih mudah direview dibanding detail endpoint yang tersebar di banyak JSX.",
    },
    {
      id: "api-request-response-shape-example",
      type: "code-example",
      title: "Type transport lalu map ke model CourseCard",
      language: "ts",
      code: [
        "type CourseApiResponse = { id: string; title: string; lesson_count: number; updated_at: string };",
        "type CourseCardModel = { id: string; title: string; lessonCount: number; updatedLabel: string };",
        "",
        "function mapCourseResponse(course: CourseApiResponse): CourseCardModel {",
        "  return {",
        "    id: course.id,",
        "    title: course.title,",
        "    lessonCount: course.lesson_count,",
        '    updatedLabel: new Date(course.updated_at).toLocaleDateString("id-ID"),',
        "  };",
        "}",
      ].join("\n"),
      explanation:
        "CourseApiResponse mengikuti nama field transport dari endpoint. CourseCardModel mengikuti kebutuhan component. Mapper adalah tempat yang tepat untuk rename sederhana dan format yang memang dipakai UI. Untuk input user, baca error shape API juga: 422 mungkin mengembalikan errors.body yang perlu disambungkan ke field, sedangkan 500 tidak boleh diperlakukan sebagai kesalahan field user.",
    },
    { id: "api-request-response-shape-coding-practice", type: "coding-practice", challengeId: "type-and-map-course-api-response" },
    {
      id: "api-request-response-shape-quick-check",
      type: "quick-check",
      question: "Mengapa CourseCard sebaiknya menerima CourseCardModel, bukan response API mentah?",
      options: ["Agar component menerima data sesuai kebutuhan UI dan detail transport tidak tersebar di JSX.", "Agar browser tidak perlu menerima id dari API.", "Agar TypeScript mengubah response server otomatis.", "Agar semua error response dapat diabaikan."],
      correctAnswer: "Agar component menerima data sesuai kebutuhan UI dan detail transport tidak tersebar di JSX.",
      explanation: "Mapper memisahkan contract transport dari model UI. Component tidak perlu tahu apakah endpoint memakai lesson_count, updated_at, wrapper data, atau format lain yang dapat berubah.",
    },
    {
      id: "api-request-response-shape-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Type client bukan pengganti contract validation",
      content:
        "Menulis type CourseApiResponse tidak membuat server, network, atau third-party API otomatis benar. Gunakan type untuk membuat code client lebih jelas, lalu tambahkan runtime validation bila boundary project memang membutuhkannya. Untuk module ini, fokus pada kebiasaan membaca contoh response, menangani null dan error shape, serta tidak menyebarkan field transport ke component.",
    },
    {
      id: "api-request-response-shape-summary",
      type: "summary",
      points: [
        "Endpoint, input, success response, dan error response adalah satu API contract.",
        "Type transport dapat berbeda dari model yang ingin dirender component.",
        "Mapper menjaga rename, formatting, dan detail response di satu boundary.",
        "Validation error field dan server error umum membutuhkan UI recovery berbeda.",
        "Berikutnya, kita melihat daftar data yang tidak selalu dikirim dalam satu response serta event webhook yang tidak langsung masuk ke browser.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["api-request-response-shape-intro", "api-request-response-shape-example", "api-request-response-shape-coding-practice", "api-request-response-shape-quick-check", "api-request-response-shape-callout", "api-request-response-shape-summary"],
  },
};

export const apiPaginationWebhooksLesson: Lesson = {
  id: "api-pagination-webhooks",
  trackId: "frontend-engineering",
  moduleId: "api-fundamentals",
  title: "Pagination and Webhooks",
  slug: "api-pagination-webhooks",
  description:
    "Membaca pagination response dan memahami webhook sebagai notifikasi server-ke-server yang memengaruhi refresh UI, bukan request langsung dari browser.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan offset/page dan cursor sebagai informasi pagination tingkat dasar",
    "Membaca item serta metadata halaman tanpa menganggap array pertama selalu lengkap",
    "Memetakan next cursor ke action Load more atau request berikutnya",
    "Menjelaskan webhook sebagai notifikasi server-ke-server yang tidak dieksekusi langsung oleh browser",
  ],
  skillTags: ["API", "Pagination", "Cursor", "Webhooks", "Data Fetching"],
  blocks: [
    {
      id: "api-pagination-webhooks-intro",
      type: "text",
      title: "Daftar panjang dan event eksternal memerlukan context tambahan",
      content:
        "Endpoint koleksi sering tidak mengirim semua item sekaligus. Pagination membagi hasil menjadi page atau cursor agar request dan UI tetap terkendali. Offset/page biasanya mengirim nilai seperti page=2, sedangkan cursor memakai penanda dari response sebelumnya seperti next_cursor. Tugas frontend adalah membaca contract, menyimpan metadata yang diperlukan, mencegah request berikutnya saat tidak ada halaman lagi, dan memberi user feedback yang jujur.\n\nWebhook adalah hal berbeda. Ia adalah notifikasi dari satu server ke server lain ketika event terjadi, misalnya payment provider memberi tahu application server bahwa pembayaran telah dikonfirmasi. Browser tidak seharusnya menerima webhook secret atau memverifikasi signature provider. Setelah server memproses event, frontend dapat melihat perubahan lewat refresh data, polling, realtime channel, atau navigasi berikutnya sesuai product.",
    },
    {
      id: "api-pagination-webhooks-example",
      type: "code-example",
      title: "Response cursor page menjadi action Load more",
      language: "ts",
      code: [
        "type CoursePageResponse = {",
        "  data: Array<{ id: string; title: string }>;",
        "  next_cursor: string | null;",
        "};",
        "",
        "function mapCoursePage(response: CoursePageResponse) {",
        "  return {",
        "    courses: response.data,",
        "    nextCursor: response.next_cursor,",
        "    canLoadMore: response.next_cursor !== null,",
        "  };",
        "}",
      ].join("\n"),
      explanation:
        "data berisi item halaman saat ini. next_cursor adalah token contract yang dikirim kembali pada request berikutnya bila tidak null. UI memakai canLoadMore untuk menentukan apakah action perlu tersedia, tetapi request berikutnya tetap harus menangani loading, duplicate click, dan response error. Untuk webhook, alur yang perlu diingat adalah provider ke application server, data berubah, lalu frontend membaca data baru.",
    },
    { id: "api-pagination-webhooks-coding-practice", type: "coding-practice", challengeId: "map-course-cursor-page" },
    {
      id: "api-pagination-webhooks-quick-check",
      type: "quick-check",
      question: "Manakah alur webhook yang tepat pada payment event?",
      options: ["Payment provider mengirim event ke application server, server memprosesnya, lalu frontend membaca data terbaru melalui mekanisme product yang aman.", "Browser menyimpan webhook secret lalu payment provider memanggil Client Component.", "Button browser mengirim webhook langsung ke provider tanpa server.", "Webhook menggantikan semua request data dan pagination."],
      correctAnswer: "Payment provider mengirim event ke application server, server memprosesnya, lalu frontend membaca data terbaru melalui mekanisme product yang aman.",
      explanation: "Webhook adalah server-to-server notification. Frontend merespons perubahan data setelah server memproses event, bukan menjadi endpoint penerima provider atau pemegang secret.",
    },
    {
      id: "api-pagination-webhooks-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menganggap halaman pertama adalah seluruh koleksi",
      content:
        "Jika response memiliki next cursor, total, page info, atau has_more, UI perlu memutuskan bagaimana user meminta data berikutnya dan bagaimana state loading/error-nya terlihat. Jangan menghapus metadata saat memetakan response. Untuk webhook, jangan membuka secret, endpoint internal, atau detail signature ke browser. Module auth dan security berikutnya akan memperluas boundary ini.",
    },
    {
      id: "api-pagination-webhooks-summary",
      type: "summary",
      points: [
        "Pagination response berisi item serta metadata untuk mengetahui apakah halaman berikutnya tersedia.",
        "Cursor berasal dari contract server dan perlu dipakai apa adanya pada request berikutnya.",
        "Load more atau infinite scroll tetap membutuhkan loading, error, dan duplicate-request handling.",
        "Webhook adalah notifikasi server-ke-server; browser melihat hasil setelah data server berubah.",
        "Berikutnya, Uji Kompetensi menggabungkan pembacaan endpoint, status, response shape, pagination, dan webhook concept.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["api-pagination-webhooks-intro", "api-pagination-webhooks-example", "api-pagination-webhooks-coding-practice", "api-pagination-webhooks-quick-check", "api-pagination-webhooks-callout", "api-pagination-webhooks-summary"],
  },
};

export const apiFundamentalsAssessmentLesson: Lesson = {
  id: "api-fundamentals-assessment",
  trackId: "frontend-engineering",
  moduleId: "api-fundamentals",
  title: "Uji Kompetensi API Fundamentals",
  slug: "api-fundamentals-assessment",
  description:
    "Checkpoint kesiapan membaca API contract, memetakan response serta status, dan menjelaskan pagination maupun webhook dari sudut pandang frontend.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 85,
  objectives: [
    "Menganalisis endpoint, method, input, success response, dan error response",
    "Memilih frontend behavior dari status HTTP yang umum",
    "Memetakan API response dan pagination metadata menjadi model UI",
    "Menjelaskan webhook tanpa menggeser secret atau tanggung jawab server ke browser",
  ],
  skillTags: ["API", "HTTP", "REST", "GraphQL", "Data Contracts", "Pagination", "Readiness Checkpoint"],
  blocks: [
    {
      id: "api-fundamentals-assessment-recap",
      type: "text",
      title: "Checkpoint: baca contract sebelum menulis integration",
      content:
        "Feature Course Catalog perlu menampilkan daftar course, membuka detail, menambahkan note, dan memuat hasil berikutnya. Backend docs menyebut GET /api/courses?cursor=... untuk daftar, GET /api/courses/:id untuk detail, dan POST /api/course-notes untuk membuat note. Daftar success mengirim data serta next_cursor. Input note yang tidak valid menghasilkan 422 dengan field errors. Resource yang tidak ada menghasilkan 404. Request terlalu sering dapat menghasilkan 429. Payment status dapat berubah setelah payment provider memberi webhook ke application server.\n\nPada checkpoint ini, jangan membuat endpoint atau kode backend baru. Buktikan bahwa kamu dapat membaca contract, menentukan data yang harus diberi type, memetakan snake_case ke model UI, memilih UI recovery untuk status berbeda, serta menjelaskan kapan user dapat memuat halaman berikutnya. Kesiapan bukan berarti menghafal semua HTTP code; readiness berarti tahu pertanyaan contract dan tindakan frontend yang benar.",
    },
    { id: "api-fundamentals-assessment-quiz", type: "quiz", quizId: "api-fundamentals-assessment-quiz" },
    { id: "api-fundamentals-assessment-coding-practice", type: "coding-practice", challengeId: "analyze-course-api-contract-checkpoint" },
    {
      id: "api-fundamentals-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis API integration note untuk Course Catalog. Sebutkan endpoint dan method untuk list, detail, serta create note; query atau body yang relevan; success response dan model UI yang kamu butuhkan; cara membedakan 401/403, 404, 422, 429, 5xx, dan network failure; pagination metadata dan behavior Load more; serta alur webhook payment dari provider sampai UI melihat data baru. Tutup dengan satu pertanyaan contract yang perlu kamu konfirmasi ke backend team dan satu QA scenario local. Jangan mengklaim request telah berjalan jika belum benar-benar diuji.",
      placeholder:
        "Catalog memakai GET /api/courses?cursor=... dan response data plus next_cursor. Detail memakai GET /api/courses/:id. Create note memakai POST /api/course-notes dengan course_id serta body. Mapper mengubah lesson_count menjadi lessonCount dan next_cursor menjadi nextCursor. 404 detail menjadi not-found, 422 menjadi error field form, 429 memberi retry-later, 5xx memberi error umum, sedangkan network failure tidak punya status. Payment provider memberi webhook ke application server; setelah server memperbarui status, UI refetch atau revalidate data. Saya perlu mengonfirmasi apakah next_cursor null selalu berarti tidak ada item lagi. Saya akan QA response empty, 422, 429, serta Load more yang gagal.",
      minimumCharacters: 850,
      checklist: [
        "Menyebut endpoint, method, input, dan response contract secara spesifik.",
        "Memetakan status atau network failure ke UI state serta recovery yang berbeda.",
        "Menjelaskan mapper transport ke model UI dan metadata pagination.",
        "Menjelaskan webhook sebagai server-to-server notification tanpa secret browser.",
        "Mencatat satu pertanyaan backend dan satu local QA scenario secara jujur.",
      ],
      modelAnswer:
        "Course Catalog membaca GET /api/courses?cursor=... dan response { data, next_cursor }. Detail memakai GET /api/courses/:id, sedangkan note memakai POST /api/course-notes dengan course_id serta body. Saya memberi type transport untuk id, title, lesson_count, updated_at, dan next_cursor lalu memetakan lesson_count menjadi lessonCount serta next_cursor menjadi nextCursor sebelum CourseCard dirender. 401 membawa user ke sign-in flow, 403 menjadi access denied, 404 menjadi not-found, 422 menampilkan error field note, 429 memberi copy retry-later, dan 5xx menjadi error umum dengan retry bila aman. Network failure tidak memiliki status sehingga perlu state terpisah. Load more hanya aktif bila nextCursor tidak null dan harus memiliki pending/error state. Payment provider mengirim webhook ke application server; setelah status disimpan, Catalog refetch atau revalidate data. Saya perlu mengonfirmasi apakah cursor kedaluwarsa dan apakah error 422 selalu memakai errors.body. Saya akan QA empty success, 422, 429, response lambat, dan Load more yang gagal tanpa menghapus item lama.",
    },
    {
      id: "api-fundamentals-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca docs API sebagai contract kerja, bukan daftar istilah",
      description:
        "Buka sumber resmi sesuai contract yang sedang kamu integrasikan. Fokus pada contoh request, response, error, dan pagination; jangan melompat ke desain backend, schema GraphQL lanjutan, atau webhook security implementation sebelum module berikutnya.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Overview of HTTP",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
          focus: ["Request versus response dan peran client-server.", "Method, path, header, body, serta status code pada message HTTP.", "HTTP sebagai dasar API data exchange."],
          ignoreForNow: ["Detail connection HTTP/1.x, HTTP/2 frame, dan proxy architecture.", "CORS dan cookies yang menjadi fokus module auth/security berikutnya."],
        },
        {
          source: "MDN Web Docs",
          title: "HTTP request methods",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods",
          focus: ["Intent GET, POST, PATCH, dan DELETE pada API contract.", "Membaca safe serta idempotent sebagai label semantics, bukan aturan UI instan."],
          ignoreForNow: ["Semua method jarang seperti CONNECT atau TRACE."],
        },
        {
          source: "MDN Web Docs",
          title: "HTTP response status codes",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
          focus: ["Perbedaan kelompok 2xx, 4xx, dan 5xx.", "Arti 401, 403, 404, 422, 429, dan 500 untuk recovery frontend."],
          ignoreForNow: ["Menghafal setiap status code yang tidak dipakai project."],
        },
        {
          source: "MDN Web Docs",
          title: "Using the Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
          focus: ["Memeriksa response.ok atau status sebelum memakai success data.", "Membedakan HTTP response error dan network exception.", "Membaca JSON setelah contract dipahami."],
          ignoreForNow: ["Streaming body, upload, dan Request configuration advanced."],
        },
        {
          source: "GraphQL",
          title: "GraphQL Learn",
          url: "https://graphql.org/learn/",
          focus: ["Query, variable, schema, dan response data pada contoh sederhana.", "Selection set field sesuai kebutuhan UI."],
          ignoreForNow: ["Schema design, resolver implementation, federation, dan performance tuning."],
        },
      ],
      followUpAction:
        "Pilih satu request nyata dari Local React App atau Local Next.js App. Catat endpoint, method, input, success/error response, status yang perlu ditangani, dan pagination metadata bila ada. Buat mapper ke model UI, lalu QA loading, empty, error, serta request berikutnya. Jika ada provider event, gambarkan alur server-to-server tanpa menyimpan secret di browser.",
    },
    {
      id: "api-fundamentals-assessment-summary",
      type: "summary",
      points: [
        "API contract mencakup endpoint, method, input, success response, error response, serta pagination metadata.",
        "REST dan GraphQL memiliki bentuk contract berbeda tetapi sama-sama membutuhkan type, mapper, error handling, dan QA.",
        "Status HTTP dan network failure perlu diterjemahkan ke UI recovery yang sesuai context.",
        "Pagination membuat frontend membaca metadata halaman; webhook memberi notifikasi server-ke-server, bukan secret untuk browser.",
        "Kamu siap masuk ke Auth, Cookies, and Browser Security Boundaries untuk memahami identity serta security boundary di balik request tersebut.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["api-fundamentals-assessment-recap", "api-fundamentals-assessment-quiz", "api-fundamentals-assessment-coding-practice", "api-fundamentals-assessment-writing-practice", "api-fundamentals-assessment-documentation-bridge", "api-fundamentals-assessment-summary"],
    passingQuizScore: 70,
  },
};

export const apiFundamentalsAssessmentQuiz: Quiz = {
  id: "api-fundamentals-assessment-quiz",
  lessonId: "api-fundamentals-assessment",
  title: "Uji Kompetensi API Fundamentals",
  passingScore: 70,
  questions: [
    {
      id: "api-rest-endpoint",
      type: "multiple-choice",
      question: "Bagian paling penting yang perlu dibaca sebelum menghubungkan UI ke endpoint adalah",
      options: ["Method, input, success response, error response, dan pagination contract bila ada.", "Hanya nama endpoint agar URL terlihat benar.", "Warna button Load more.", "Framework database yang dipakai server."],
      correctAnswer: "Method, input, success response, error response, dan pagination contract bila ada.",
      explanation: "Frontend bekerja dari contract. Nama path saja tidak memberi tahu body, error field, status, atau metadata halaman yang harus ditangani.",
    },
    {
      id: "api-graphql-selection",
      type: "multiple-choice",
      question: "Mengapa GraphQL query CourseCard hanya meminta id, title, level, dan lessonCount?",
      options: ["Agar UI meminta field yang dibutuhkan dari schema yang mengizinkannya.", "Agar authorization server tidak lagi diperlukan.", "Agar query otomatis melakukan mutation.", "Agar browser menerima semua table database."],
      correctAnswer: "Agar UI meminta field yang dibutuhkan dari schema yang mengizinkannya.",
      explanation: "Selection set menyatakan data yang dibutuhkan UI. Schema dan authorization tetap menentukan field yang tersedia.",
    },
    {
      id: "api-status-422",
      type: "multiple-choice",
      question: "Response 422 dari POST create note paling sering perlu diperlakukan sebagai",
      options: ["Validation error pada input yang dapat dipetakan ke field form.", "Daftar course kosong.", "Not-found page.", "Success state dengan toast hijau."],
      correctAnswer: "Validation error pada input yang dapat dipetakan ke field form.",
      explanation: "422 biasanya menunjukkan request dapat dipahami tetapi data input tidak memenuhi aturan. Baca error shape API untuk menghubungkannya ke field yang relevan.",
    },
    {
      id: "api-network-failure",
      type: "multiple-choice",
      question: "Apa perbedaan penting network failure dan 500?",
      options: ["Network failure dapat terjadi tanpa HTTP response atau status; 500 adalah response server dengan status HTTP.", "Keduanya selalu berarti 404.", "500 hanya terjadi pada browser offline.", "Network failure dapat dipetakan ke 200."],
      correctAnswer: "Network failure dapat terjadi tanpa HTTP response atau status; 500 adalah response server dengan status HTTP.",
      explanation: "fetch dapat reject untuk kegagalan jaringan, tetapi HTTP 500 tetap berupa response yang perlu diperiksa melalui status atau response.ok.",
    },
    {
      id: "api-mapper",
      type: "multiple-choice",
      question: "Peran mapper dari CourseApiResponse ke CourseCardModel adalah",
      options: ["Menjaga detail transport seperti lesson_count dan next_cursor tidak tersebar di component UI.", "Menghapus kebutuhan id pada UI.", "Menggantikan server validation.", "Menjalankan webhook di browser."],
      correctAnswer: "Menjaga detail transport seperti lesson_count dan next_cursor tidak tersebar di component UI.",
      explanation: "Mapper membuat data UI jelas dan menjaga perubahan contract endpoint berada pada boundary yang dapat direview.",
    },
    {
      id: "api-pagination",
      type: "multiple-choice",
      question: "Jika response list memiliki next_cursor bernilai null, frontend paling tepat",
      options: ["Tidak menawarkan request halaman berikutnya karena contract menyatakan tidak ada cursor lanjutan.", "Mengarang cursor dari item terakhir.", "Menghapus semua data yang sudah tampil.", "Mengirim webhook dari browser."],
      correctAnswer: "Tidak menawarkan request halaman berikutnya karena contract menyatakan tidak ada cursor lanjutan.",
      explanation: "Cursor adalah token dari server. next_cursor null biasanya berarti tidak ada halaman berikutnya pada contract tersebut.",
    },
    {
      id: "api-webhook",
      type: "multiple-choice",
      question: "Manakah pernyataan paling benar tentang webhook payment?",
      options: ["Provider memberi event ke application server; setelah server memprosesnya, UI membaca status terbaru melalui flow product.", "Browser menerima webhook secret agar UI dapat memverifikasi signature.", "Webhook adalah pengganti GET request dan database.", "Client Component harus menjadi endpoint provider."],
      correctAnswer: "Provider memberi event ke application server; setelah server memprosesnya, UI membaca status terbaru melalui flow product.",
      explanation: "Webhook adalah notifikasi server-ke-server. Browser tidak boleh menjadi tempat secret atau verification provider.",
    },
  ],
};

export const readCourseRestRequestChallenge: CodingChallenge = {
  id: "read-course-rest-request",
  lessonId: "rest-api-basics",
  title: "Read course REST request",
  description: "Tulis model request GET untuk daftar course advanced dan catat bagian contract yang dibaca sebelum fetch.",
  instructions: [
    "Fokus di tab TS.",
    "Buat const courseListRequest dengan method GET, path /api/courses, dan query level advanced.",
    "Tambahkan expectedResponseFields yang memuat data dan next_cursor.",
    "Jangan menjalankan request; latihan ini menguji kemampuan membaca contract.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...apiPracticeCode,
    ts: ["const courseListRequest = {", "  // Tambahkan method, path, dan query sesuai contract.", "};"].join("\n"),
  },
  solutionCode: {
    ...apiPracticeCode,
    ts: [
      "const courseListRequest = {",
      '  method: "GET",',
      '  path: "/api/courses",',
      '  query: { level: "advanced" },',
      "};",
      "",
      'const expectedResponseFields = ["data", "next_cursor"];',
    ].join("\n"),
  },
  checklist: ["Method sesuai intent membaca data.", "Path menunjuk collection resource.", "Filter disimpan sebagai query.", "Response metadata pagination ikut dibaca."],
  validation: {
    mode: "ts",
    checks: [
      { id: "method", label: "Request memakai GET.", type: "contains", valueIncludes: 'method: "GET"' },
      { id: "path", label: "Path course collection tersedia.", type: "contains", valueIncludes: 'path: "/api/courses"' },
      { id: "query", label: "Filter level advanced tersedia.", type: "contains", valueIncludes: 'level: "advanced"' },
      { id: "data", label: "Field data dicatat.", type: "contains", valueIncludes: '"data"' },
      { id: "cursor", label: "Metadata next_cursor dicatat.", type: "contains", valueIncludes: '"next_cursor"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target request contract",
    description: "Cek otomatis membaca struktur request TypeScript. Preview tidak menjalankan API; gunakan docs endpoint dan local app untuk request nyata.",
    lines: ["GET membaca collection course.", "Query level menyaring hasil sesuai contract.", "data dan next_cursor perlu diperiksa sebelum UI dirender."],
  },
  skillTags: ["REST", "HTTP", "API Contract", "TypeScript"],
};

export const selectCourseGraphqlFieldsChallenge: CodingChallenge = {
  id: "select-course-graphql-fields",
  lessonId: "graphql-basics",
  title: "Select course GraphQL fields",
  description: "Tulis query CourseCard yang menerima id dan hanya meminta field untuk UI card.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseCardQuery dengan operation CourseCard dan variable $id: ID!.",
    "Minta field id, title, level, dan lessonCount di dalam course.",
    "Jangan menambahkan field internal yang tidak dipakai card.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...apiPracticeCode,
    ts: ['const courseCardQuery = "";'].join("\n"),
  },
  solutionCode: {
    ...apiPracticeCode,
    ts: [
      "const courseCardQuery = [",
      '  "query CourseCard($id: ID!) {",',
      '  "  course(id: $id) { id title level lessonCount }",',
      '  "}",',
      '].join("\\n");',
    ].join("\n"),
  },
  checklist: ["Operation memiliki nama yang dapat dibaca.", "Variable id mengikuti contract.", "Field mencerminkan kebutuhan CourseCard.", "Query tidak berpura-pura menjadi runtime request."],
  validation: {
    mode: "ts",
    checks: [
      { id: "operation", label: "Operation CourseCard tersedia.", type: "contains", valueIncludes: "query CourseCard($id: ID!)" },
      { id: "course", label: "Field course memakai variable id.", type: "contains", valueIncludes: "course(id: $id)" },
      { id: "title", label: "Field title diminta.", type: "contains", valueIncludes: "title" },
      { id: "level", label: "Field level diminta.", type: "contains", valueIncludes: "level" },
      { id: "lesson-count", label: "Field lessonCount diminta.", type: "contains", valueIncludes: "lessonCount" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target GraphQL query",
    description: "Cek otomatis membaca document query TypeScript. Preview tidak menjalankan GraphQL runtime; schema dan authorization provider tetap menentukan hasil nyata.",
    lines: ["CourseCard meminta field yang dipakai UI.", "Variable id mengidentifikasi course.", "Selection set tidak memberi akses di luar schema."],
  },
  skillTags: ["GraphQL", "API Contract", "Queries", "TypeScript"],
};

export const mapCourseStatusToUiChallenge: CodingChallenge = {
  id: "map-course-status-to-ui",
  lessonId: "http-status-codes",
  title: "Map course status to UI",
  description: "Buat mapper kecil yang membedakan success, sign-in, not-found, retry-later, dan request error.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type CourseListUiState untuk ready, sign-in, not-found, retry-later, dan request-error.",
    "Map 2xx ke ready, 401 ke sign-in, 404 ke not-found, dan 429 ke retry-later.",
    "Gunakan fallback request-error untuk status lain.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...apiPracticeCode,
    ts: ['type CourseListUiState = "ready";', "", "function getCourseListUiState(status: number): CourseListUiState {", '  return "ready";', "}"].join("\n"),
  },
  solutionCode: {
    ...apiPracticeCode,
    ts: [
      'type CourseListUiState = "ready" | "sign-in" | "not-found" | "retry-later" | "request-error";',
      "",
      "function getCourseListUiState(status: number): CourseListUiState {",
      '  if (status >= 200 && status < 300) return "ready";',
      '  if (status === 401) return "sign-in";',
      '  if (status === 404) return "not-found";',
      '  if (status === 429) return "retry-later";',
      '  return "request-error";',
      "}",
    ].join("\n"),
  },
  checklist: ["Success tidak dicampur dengan failure.", "401 dan 404 memiliki UI state berbeda.", "429 tidak diperlakukan sebagai empty state.", "Fallback tidak membocorkan raw error ke user."],
  validation: {
    mode: "ts",
    checks: [
      { id: "ready", label: "2xx dipetakan ke ready.", type: "contains", valueIncludes: 'status >= 200 && status < 300) return "ready"' },
      { id: "sign-in", label: "401 dipetakan ke sign-in.", type: "contains", valueIncludes: 'status === 401) return "sign-in"' },
      { id: "not-found", label: "404 dipetakan ke not-found.", type: "contains", valueIncludes: 'status === 404) return "not-found"' },
      { id: "retry", label: "429 dipetakan ke retry-later.", type: "contains", valueIncludes: 'status === 429) return "retry-later"' },
      { id: "fallback", label: "Fallback request error tersedia.", type: "contains", valueIncludes: 'return "request-error"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target status-to-UI mapping",
    description: "Cek otomatis membaca mapper TypeScript. Preview tidak menerima HTTP response; local request tetap perlu menangani network failure secara terpisah.",
    lines: ["2xx menjadi ready.", "401, 404, dan 429 memiliki recovery UI berbeda.", "Status lain memakai request-error sebagai fallback."],
  },
  skillTags: ["HTTP", "Status Codes", "Error Handling", "TypeScript"],
};

export const typeAndMapCourseApiResponseChallenge: CodingChallenge = {
  id: "type-and-map-course-api-response",
  lessonId: "api-request-response-shape",
  title: "Type and map course API response",
  description: "Beri type pada response course transport lalu map lesson_count dan updated_at ke model CourseCard UI.",
  instructions: [
    "Fokus di tab TS.",
    "Buat CourseApiResponse dengan id, title, lesson_count, dan updated_at.",
    "Buat CourseCardModel dengan lessonCount dan updatedLabel.",
    "Map lesson_count ke lessonCount dan format updated_at untuk updatedLabel.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...apiPracticeCode,
    ts: ["type CourseApiResponse = { id: string; title: string };", "", "function mapCourseResponse(course: CourseApiResponse) {", "  return course;", "}"].join("\n"),
  },
  solutionCode: {
    ...apiPracticeCode,
    ts: [
      "type CourseApiResponse = { id: string; title: string; lesson_count: number; updated_at: string };",
      "type CourseCardModel = { id: string; title: string; lessonCount: number; updatedLabel: string };",
      "",
      "function mapCourseResponse(course: CourseApiResponse): CourseCardModel {",
      "  return {",
      "    id: course.id,",
      "    title: course.title,",
      "    lessonCount: course.lesson_count,",
      '    updatedLabel: new Date(course.updated_at).toLocaleDateString("id-ID"),',
      "  };",
      "}",
    ].join("\n"),
  },
  checklist: ["Transport field diberi type.", "Model UI memakai nama yang dibaca component.", "Mapper menampung rename transport.", "Format tanggal tidak disebar ke JSX."],
  validation: {
    mode: "ts",
    checks: [
      { id: "transport", label: "lesson_count tersedia pada transport type.", type: "contains", valueIncludes: "lesson_count: number" },
      { id: "timestamp", label: "updated_at tersedia pada transport type.", type: "contains", valueIncludes: "updated_at: string" },
      { id: "model", label: "Model memakai lessonCount.", type: "contains", valueIncludes: "lessonCount: number" },
      { id: "rename", label: "Mapper mengubah lesson_count.", type: "contains", valueIncludes: "lessonCount: course.lesson_count" },
      { id: "date", label: "Mapper mengubah updated_at menjadi label.", type: "contains", valueIncludes: 'new Date(course.updated_at).toLocaleDateString("id-ID")' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target response mapper",
    description: "Cek otomatis membaca type serta mapper TypeScript. Preview tidak menjalankan API atau memvalidasi runtime response; gunakan boundary project untuk data nyata.",
    lines: ["Transport memakai lesson_count dan updated_at.", "CourseCard menerima lessonCount serta updatedLabel.", "Rename dan format tinggal di mapper."],
  },
  skillTags: ["API Contract", "TypeScript", "Response Mapping", "Data Boundary"],
};

export const mapCourseCursorPageChallenge: CodingChallenge = {
  id: "map-course-cursor-page",
  lessonId: "api-pagination-webhooks",
  title: "Map course cursor page",
  description: "Map data dan next_cursor dari response pagination menjadi model Load more yang jelas untuk UI.",
  instructions: [
    "Fokus di tab TS.",
    "Buat CoursePageResponse dengan data dan next_cursor.",
    "Buat CoursePageModel dengan nextCursor serta canLoadMore.",
    "Map next_cursor ke nextCursor dan set canLoadMore saat cursor tidak null.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...apiPracticeCode,
    ts: ["type CoursePageResponse = { data: Array<{ id: string; title: string }> };", "", "function mapCoursePage(response: CoursePageResponse) {", "  return { courses: response.data };", "}"].join("\n"),
  },
  solutionCode: {
    ...apiPracticeCode,
    ts: [
      "type CoursePageResponse = { data: Array<{ id: string; title: string }>; next_cursor: string | null };",
      "type CoursePageModel = { courses: Array<{ id: string; title: string }>; nextCursor: string | null; canLoadMore: boolean };",
      "",
      "function mapCoursePage(response: CoursePageResponse): CoursePageModel {",
      "  return {",
      "    courses: response.data,",
      "    nextCursor: response.next_cursor,",
      "    canLoadMore: response.next_cursor !== null,",
      "  };",
      "}",
    ].join("\n"),
  },
  checklist: ["Items halaman saat ini tetap dipertahankan.", "Cursor transport diberi type null-aware.", "Model UI memiliki nextCursor.", "Action Load more mengikuti metadata server."],
  validation: {
    mode: "ts",
    checks: [
      { id: "cursor", label: "Transport next_cursor tersedia.", type: "contains", valueIncludes: "next_cursor: string | null" },
      { id: "model", label: "Model memiliki nextCursor.", type: "contains", valueIncludes: "nextCursor: string | null" },
      { id: "rename", label: "Mapper mengubah next_cursor.", type: "contains", valueIncludes: "nextCursor: response.next_cursor" },
      { id: "load-more", label: "canLoadMore mengikuti cursor.", type: "contains", valueIncludes: "canLoadMore: response.next_cursor !== null" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target cursor pagination model",
    description: "Cek otomatis membaca mapper TypeScript. Preview tidak meminta halaman baru; local UI tetap perlu menangani pending, duplicate click, dan failure request berikutnya.",
    lines: ["data menjadi courses halaman saat ini.", "next_cursor menjadi nextCursor untuk request lanjutan.", "canLoadMore false saat cursor null."],
  },
  skillTags: ["Pagination", "Cursor", "API Contract", "TypeScript"],
};

export const analyzeCourseApiContractCheckpointChallenge: CodingChallenge = {
  id: "analyze-course-api-contract-checkpoint",
  lessonId: "api-fundamentals-assessment",
  title: "Analyze course API contract checkpoint",
  description: "Satukan type transport, status UI, dan cursor metadata untuk Course Catalog tanpa menjalankan API runtime.",
  instructions: [
    "Fokus di tab TS.",
    "Type response list dengan data dan next_cursor.",
    "Map next_cursor menjadi nextCursor dan canLoadMore.",
    "Buat getCourseListUiState yang membedakan 2xx, 401, 404, 429, dan fallback error.",
    "Jangan menjalankan fetch atau menyimpan webhook secret; latihan ini memeriksa pembacaan contract.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...apiPracticeCode,
    ts: ["type CourseListResponse = { data: Array<{ id: string; title: string }> };", "", "function mapCourseList(response: CourseListResponse) {", "  return { courses: response.data };", "}"].join("\n"),
  },
  solutionCode: {
    ...apiPracticeCode,
    ts: [
      "type CourseListResponse = { data: Array<{ id: string; title: string }>; next_cursor: string | null };",
      "type CourseListModel = { courses: Array<{ id: string; title: string }>; nextCursor: string | null; canLoadMore: boolean };",
      'type CourseListUiState = "ready" | "sign-in" | "not-found" | "retry-later" | "request-error";',
      "",
      "function mapCourseList(response: CourseListResponse): CourseListModel {",
      "  return { courses: response.data, nextCursor: response.next_cursor, canLoadMore: response.next_cursor !== null };",
      "}",
      "",
      "function getCourseListUiState(status: number): CourseListUiState {",
      '  if (status >= 200 && status < 300) return "ready";',
      '  if (status === 401) return "sign-in";',
      '  if (status === 404) return "not-found";',
      '  if (status === 429) return "retry-later";',
      '  return "request-error";',
      "}",
    ].join("\n"),
  },
  checklist: ["Response transport dan model UI dipisahkan.", "Cursor tidak dibuang sebelum UI memutuskan Load more.", "Status memiliki recovery state berbeda.", "Network failure tetap perlu state terpisah di request nyata.", "Webhook tidak dipindahkan ke browser."],
  validation: {
    mode: "ts",
    checks: [
      { id: "cursor", label: "Response memiliki next_cursor.", type: "contains", valueIncludes: "next_cursor: string | null" },
      { id: "next-cursor", label: "Model memakai nextCursor.", type: "contains", valueIncludes: "nextCursor: response.next_cursor" },
      { id: "load-more", label: "Model memiliki canLoadMore.", type: "contains", valueIncludes: "canLoadMore: response.next_cursor !== null" },
      { id: "sign-in", label: "401 memiliki sign-in state.", type: "contains", valueIncludes: 'status === 401) return "sign-in"' },
      { id: "not-found", label: "404 memiliki not-found state.", type: "contains", valueIncludes: 'status === 404) return "not-found"' },
      { id: "retry", label: "429 memiliki retry-later state.", type: "contains", valueIncludes: 'status === 429) return "retry-later"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target API integration checkpoint",
    description: "Cek otomatis membaca type dan mapper TypeScript. Preview tidak menjalankan endpoint, payment webhook, atau server validation; gunakan Local App untuk QA request nyata.",
    lines: ["List response mempertahankan cursor metadata.", "UI membedakan sign-in, not-found, retry-later, dan request error.", "Webhook tetap berada pada boundary server-to-server."],
  },
  skillTags: ["API", "HTTP", "Data Contracts", "Pagination", "TypeScript", "Assessment"],
};
