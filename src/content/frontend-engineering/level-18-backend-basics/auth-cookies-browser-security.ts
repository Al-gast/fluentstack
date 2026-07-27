import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const authBoundaryPracticeCode = { html: "", css: "", js: "" };

export const authCookiesBrowserSecurityModule: Module = {
  id: "auth-cookies-browser-security-boundaries",
  trackId: "frontend-engineering",
  title: "Auth, Cookies, and Browser Security Boundaries",
  slug: "auth-cookies-browser-security-boundaries",
  description:
    "Memahami identity, session, cookie, CORS, CSRF, dan secure cookie behavior agar frontend dapat debug auth issue tanpa membuat asumsi keamanan yang berbahaya.",
  order: 57,
  lessonIds: [
    "auth-concepts",
    "cookies",
    "jwt-vs-session",
    "cors",
    "csrf",
    "secure-cookies",
    "auth-browser-security-assessment",
  ],
  estimatedHours: 9,
  skillTags: ["Authentication", "Authorization", "Cookies", "Sessions", "CORS", "CSRF", "Browser Security"],
};

export const authConceptsLesson: Lesson = {
  id: "auth-concepts",
  trackId: "frontend-engineering",
  moduleId: "auth-cookies-browser-security-boundaries",
  title: "Auth Concepts",
  slug: "auth-concepts",
  description:
    "Membedakan identity, authentication, session, dan authorization agar UI tidak dianggap sebagai penjaga akses satu-satunya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan identity, authentication, session, dan authorization",
    "Menjelaskan peran browser, auth provider, application server, dan database pada flow sederhana",
    "Memahami bahwa UI navigation bukan bukti akses data sudah aman",
    "Menentukan symptom frontend yang perlu disertakan saat melaporkan auth issue",
  ],
  skillTags: ["Authentication", "Authorization", "Sessions", "Frontend Security"],
  blocks: [
    {
      id: "auth-concepts-intro",
      type: "text",
      title: "Masuk, diingat, dan diizinkan adalah tiga hal berbeda",
      content:
        "Authentication menjawab siapa user ini dengan memeriksa credential atau authenticator. Session management memungkinkan server mengenali keadaan user itu pada request berikutnya. Authorization menjawab apakah identity tersebut boleh membaca route, menjalankan action, atau mengakses row data tertentu. UI yang menyembunyikan button admin dapat membantu experience, tetapi tidak menggantikan authorization server atau database.\n\nBayangkan learner berhasil login. Server atau auth provider memverifikasi identity, membuat atau memperbarui session, lalu browser mengirim bukti session pada request berikutnya sesuai contract. Saat learner membuka dashboard, server tetap memeriksa identity dan permission sebelum mengirim data. Frontend menampilkan loading, signed-in state, access denied, atau sign-in recovery, tetapi tidak boleh memutuskan sendiri bahwa role admin hanya dari value yang bisa diubah browser.",
    },
    {
      id: "auth-concepts-example",
      type: "code-example",
      title: "Flow auth sederhana dari sudut frontend",
      language: "bash",
      code: [
        "1. User mengirim credential ke endpoint login melalui HTTPS.",
        "2. Server atau provider memverifikasi identity.",
        "3. Server membuat atau memperbarui session sesuai auth contract.",
        "4. Browser membawa bukti session pada request berikutnya bila aturan cookie atau token mengizinkan.",
        "5. Server memeriksa identity dan authorization sebelum mengirim data.",
        "6. Frontend menerjemahkan hasil menjadi UI signed-in, access denied, atau sign-in recovery.",
      ].join("\n"),
      explanation:
        "Frontend perlu memahami alur untuk membaca symptom secara benar. Login berhasil tetapi API berikutnya 403 adalah authorization issue atau policy issue, bukan bukti login form rusak. Dashboard yang masih tampil signed out setelah login dapat berkaitan dengan session cookie, callback URL, cache, atau state client. Jangan memperbaiki dengan menyimpan password atau secret di localStorage.",
    },
    {
      id: "auth-concepts-quick-check",
      type: "quick-check",
      question: "Manakah contoh authorization, bukan authentication?",
      options: ["Server menolak user signed-in membuka billing workspace milik organisasi lain.", "Server memeriksa email dan password saat login.", "Browser menyimpan cookie session setelah response login.", "Form menampilkan loading saat request login berjalan."],
      correctAnswer: "Server menolak user signed-in membuka billing workspace milik organisasi lain.",
      explanation: "User sudah memiliki identity, tetapi permission untuk resource tersebut ditolak. Itu adalah authorization. Authentication hanya membuktikan siapa usernya.",
    },
    {
      id: "auth-concepts-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menjadikan UI sebagai security boundary",
      content:
        "Menyembunyikan route, button, atau menu bukan enforcement akses. User dapat mengubah URL atau membuat request sendiri. Frontend bertanggung jawab membuat state akses jelas bagi user; server, provider, dan database bertanggung jawab memverifikasi identity serta authorization pada boundary yang dapat dipercaya.",
    },
    {
      id: "auth-concepts-summary",
      type: "summary",
      points: [
        "Authentication membuktikan identity; authorization memeriksa permission.",
        "Session membantu server mengenali identity pada request berikutnya.",
        "UI membantu experience tetapi tidak menjadi penjaga data atau role.",
        "Auth issue perlu dilaporkan dengan endpoint, status, symptom UI, dan waktu kejadian.",
        "Berikutnya, kita melihat cookie sebagai salah satu mekanisme browser membawa state session.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["auth-concepts-intro", "auth-concepts-example", "auth-concepts-quick-check", "auth-concepts-callout", "auth-concepts-summary"],
  },
};

export const cookiesLesson: Lesson = {
  id: "cookies",
  trackId: "frontend-engineering",
  moduleId: "auth-cookies-browser-security-boundaries",
  title: "Cookies",
  slug: "cookies",
  description:
    "Memahami cookie sebagai data browser-managed yang dapat dibawa pada request sesuai scope dan attributes, lalu melakukan inspeksi DevTools secara jujur.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan cookie dan Set-Cookie dari sudut browser request",
    "Membedakan cookie session dari storage UI umum",
    "Membaca name, domain, path, expiry, Secure, HttpOnly, dan SameSite di DevTools",
    "Mencatat symptom cookie tanpa membagikan value atau session identifier",
  ],
  skillTags: ["Cookies", "Sessions", "Browser DevTools", "HTTP"],
  blocks: [
    {
      id: "cookies-intro",
      type: "text",
      title: "Cookie adalah state yang dikelola browser untuk request",
      content:
        "Cookie adalah data kecil yang server kirim ke browser melalui Set-Cookie. Browser dapat menyimpannya lalu mengirimkannya kembali ke server pada request yang scope-nya cocok. Pola ini sering dipakai untuk session: server menyimpan atau memverifikasi session, browser membawa identifier sesuai rules cookie, dan server tetap memeriksa apakah session itu valid. Cookie bukan tempat frontend menaruh password, secret, atau data profile lengkap.\n\nKarena cookie dapat ikut pada request, ia berbeda dari localStorage untuk preference UI. Cookies juga memiliki scope domain, path, expiry, dan attributes security. Bila login terlihat berhasil tetapi request berikutnya signed out, jangan langsung menulis workaround di client. Periksa response login, request setelahnya, cookie attributes, origin, dan server logs sesuai akses team.",
    },
    {
      id: "cookies-example",
      type: "code-example",
      title: "Response server dapat menetapkan cookie session",
      language: "bash",
      code: [
        "HTTP/1.1 200 OK",
        "Set-Cookie: __Host-session=opaque-session-id; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=3600",
      ].join("\n"),
      explanation:
        "Server mengirim Set-Cookie; browser yang menyimpan dan mengirim cookie sesuai scope. HttpOnly berarti JavaScript tidak dapat membaca value cookie. Secure membatasi pengiriman ke HTTPS, kecuali perlakuan localhost tertentu browser. SameSite mengontrol kapan cookie dikirim pada cross-site request. Contoh ini menjelaskan attribute, bukan recipe universal; provider dan deployment topology menentukan contract yang tepat.",
    },
    {
      id: "cookies-devtools-note",
      type: "writing-practice",
      prompt:
        "Pada local app atau browser profile aman, buka DevTools Application/Storage dan Network. Periksa satu cookie tanpa menyalin value-nya. Tulis nama non-sensitif atau kategori cookie, domain/path, apakah HttpOnly/Secure/SameSite terlihat, request mana yang menetapkannya atau memakai session, symptom UI yang kamu cek, serta blocker bila tidak ada auth setup. Jangan menulis token, session ID, password, atau screenshot value cookie.",
      placeholder:
        "Saya melihat cookie session pada domain localhost dengan Path=/ dan flag HttpOnly. Value tidak saya catat. Cookie ditetapkan oleh response login dan request dashboard berikutnya membawa cookie sesuai Network panel. Saya memeriksa apakah UI navigation berubah setelah refresh. Saya belum dapat memeriksa Secure di localhost karena environment development; saya akan memeriksa deployment preview melalui konfigurasi yang aman dan docs provider.",
      minimumCharacters: 400,
      checklist: ["Tidak menyalin value credential atau session.", "Menyebut scope atau attributes yang benar-benar terlihat.", "Menghubungkan cookie dengan request atau symptom UI.", "Mencatat blocker secara spesifik bila belum ada setup auth."],
      modelAnswer:
        "Saya membuka Application panel dan melihat cookie session untuk domain localhost dengan Path=/. Saya tidak menyalin value-nya. Flag HttpOnly terlihat sehingga script browser tidak dapat membaca cookie tersebut. Saya lalu memeriksa response login yang menetapkan cookie dan request dashboard setelah refresh untuk melihat apakah browser membawa session. Di local development, behavior Secure dapat berbeda dari HTTPS deployment, jadi saya tidak menyimpulkan configuration production hanya dari localhost. Saya akan membandingkan attributes dengan docs provider serta preview environment yang aman.",
    },
    {
      id: "cookies-summary",
      type: "summary",
      points: [
        "Server menetapkan cookie melalui Set-Cookie; browser mengirimnya kembali sesuai rules.",
        "Cookie session bukan tempat menyimpan password atau seluruh profile user.",
        "DevTools dapat membantu memeriksa attributes dan request tanpa menyalin value sensitif.",
        "Cookie issue perlu dibedakan dari auth, authorization, CORS, atau UI state issue.",
        "Berikutnya, kita membandingkan mental model JWT dan session tanpa memilih salah satunya secara dogmatis.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["cookies-intro", "cookies-example", "cookies-devtools-note", "cookies-summary"],
  },
};

export const jwtVsSessionLesson: Lesson = {
  id: "jwt-vs-session",
  trackId: "frontend-engineering",
  moduleId: "auth-cookies-browser-security-boundaries",
  title: "JWT vs Session",
  slug: "jwt-vs-session",
  description:
    "Membandingkan mental model session identifier dan JWT tanpa masuk ke token signing, OAuth, atau membangun auth server sendiri.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan session identifier sebagai rujukan state yang server kenali",
    "Menjelaskan JWT sebagai token dengan claims yang diverifikasi sesuai provider contract",
    "Membedakan lokasi penyimpanan dari mekanisme authorization",
    "Menghindari asumsi bahwa decode client adalah verifikasi security",
  ],
  skillTags: ["JWT", "Sessions", "Authentication", "Authorization", "Security Boundaries"],
  blocks: [
    {
      id: "jwt-vs-session-intro",
      type: "text",
      title: "JWT dan session adalah contract, bukan label keamanan",
      content:
        "Session-based auth sering memakai identifier opaque yang browser kirim ke server. Server mencari atau memverifikasi session lalu memutuskan identity dan permission. JWT adalah token yang dapat membawa claims dan biasanya diverifikasi oleh server atau provider sesuai key serta policy mereka. Keduanya dapat dikirim melalui cookie atau mekanisme lain; cara token sampai ke browser tidak otomatis membuat authorization aman atau tidak aman.\n\nUntuk frontend, pertanyaan praktisnya adalah: siapa menetapkan credential, request mana yang membawanya, apakah browser perlu credentials option, kapan session kedaluwarsa, bagaimana refresh terjadi, dan endpoint mana yang memverifikasi authorization. Membaca payload JWT di browser bukan verifikasi signature dan tidak boleh menjadi satu-satunya dasar role atau akses data. Ikuti contract provider serta server boundary yang sudah dipilih project.",
    },
    {
      id: "jwt-vs-session-example",
      type: "code-example",
      title: "Bandingkan pertanyaan debug, bukan algoritma token",
      language: "ts",
      code: [
        "const sessionQuestions = [",
        '  "Apakah response login menetapkan cookie session?",',
        '  "Apakah request dashboard membawa cookie sesuai scope?",',
        '  "Apakah server masih menganggap session valid?",',
        "];",
        "",
        "const jwtQuestions = [",
        '  "Siapa menerbitkan token dan siapa memverifikasinya?",',
        '  "Kapan token atau refresh flow kedaluwarsa?",',
        '  "Apakah server memverifikasi claims sebelum memberi data?",',
        "];",
      ].join("\n"),
      explanation:
        "Dua daftar ini membantu frontend mengajukan pertanyaan yang dapat dijawab oleh Network panel, provider docs, atau backend team. Jangan mencoba membuat token, mengubah claims, atau memverifikasi cryptography di exercise ini. Project dapat memakai provider yang mengelola session serta token di balik API; yang penting adalah mengetahui boundary dan symptom yang dapat dilihat frontend.",
    },
    {
      id: "jwt-vs-session-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis note singkat untuk team tentang satu auth flow: apakah project memakai session cookie, JWT, atau provider-managed flow yang belum kamu pastikan. Jelaskan apa yang diketahui dari request/response, apa yang belum diketahui, request atau browser state yang akan diperiksa, dan mengapa browser decode bukan authorization check. Jangan menyalin token atau mengklaim format token menentukan semua security property.",
      placeholder:
        "Dari Network panel saya melihat login diikuti request dashboard yang membawa credential browser, jadi saya akan mengonfirmasi apakah provider memakai session cookie. Saya belum menyimpulkan cookie itu JWT atau session identifier hanya dari nama. Saya akan memeriksa expiry, response sign-out, serta server behavior saat dashboard meminta data. Walau token dapat didecode di client, authorization tetap diverifikasi server atau provider sebelum data dikirim.",
      minimumCharacters: 350,
      checklist: ["Membedakan fakta request dari asumsi implementasi.", "Menyebut session atau JWT secara konseptual.", "Tidak menyalin token atau credential.", "Menjelaskan server verification sebagai boundary authorization."],
      modelAnswer:
        "Saya belum menganggap project memakai JWT hanya karena ada token pada response provider. Dari Network panel, saya akan mencatat endpoint login, response yang menetapkan credential, request sesudah login, serta behavior setelah refresh atau sign-out tanpa menyalin value token. Jika flow memakai session cookie, server memeriksa identifier session pada request berikutnya. Jika memakai JWT, server atau provider tetap memverifikasi token dan claims sesuai contract. Decode di browser hanya dapat membantu memahami shape untuk debugging dan tidak menggantikan signature verification atau authorization server.",
    },
    {
      id: "jwt-vs-session-summary",
      type: "summary",
      points: [
        "Session identifier dan JWT adalah dua mental model auth contract yang berbeda.",
        "Keduanya dapat berinteraksi dengan cookie atau provider-managed browser flow.",
        "Decode client bukan verification atau authorization check.",
        "Debug dari request, expiry, response logout, serta server behavior yang dapat dibuktikan.",
        "Berikutnya, kita melihat same-origin policy dan CORS saat browser perlu membaca API dari origin lain.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["jwt-vs-session-intro", "jwt-vs-session-example", "jwt-vs-session-writing-practice", "jwt-vs-session-summary"],
  },
};

export const corsLesson: Lesson = {
  id: "cors",
  trackId: "frontend-engineering",
  moduleId: "auth-cookies-browser-security-boundaries",
  title: "CORS",
  slug: "cors",
  description:
    "Memahami CORS sebagai browser enforcement pada cross-origin read, lalu mengumpulkan bukti frontend untuk diagnosis tanpa mencoba bypass policy.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan origin dan same-origin policy pada browser",
    "Membedakan CORS browser error dari status API normal",
    "Membaca origin, request method, credentials, preflight, dan response headers sebagai bukti diagnosis",
    "Menentukan hal yang perlu dikonfirmasi backend atau platform team",
  ],
  skillTags: ["CORS", "Same-Origin Policy", "HTTP", "Browser DevTools", "Debugging"],
  blocks: [
    {
      id: "cors-intro",
      type: "text",
      title: "CORS adalah keputusan browser tentang cross-origin read",
      content:
        "Origin terdiri dari scheme, host, dan port. Browser menerapkan same-origin policy agar script dari satu origin tidak bebas membaca response dari origin lain. CORS adalah mekanisme server melalui response headers yang memberi tahu browser origin mana yang boleh membaca response tertentu. CORS bukan authentication, bukan authorization, dan bukan setting yang seharusnya frontend coba akali.\n\nJika app di http://localhost:3000 memanggil API di https://api.example.com, request dapat memerlukan CORS permission. Browser dapat mengirim preflight OPTIONS sebelum request utama untuk metode atau header tertentu. Saat policy tidak cocok, server mungkin menerima request tetapi browser tetap memblokir JavaScript membaca response. Kumpulkan URL frontend, URL API, method, credentials setting, Network detail, dan error console; lalu konfirmasi header serta allowed origin ke owner server.",
    },
    {
      id: "cors-example",
      type: "code-example",
      title: "Bukti yang dibutuhkan untuk CORS diagnosis",
      language: "ts",
      code: [
        "const corsEvidence = {",
        '  appOrigin: "http://localhost:3000",',
        '  apiOrigin: "https://api.example.com",',
        '  method: "POST",',
        "  credentialsIncluded: true,",
        '  browserMessage: "blocked by CORS policy",',
        "};",
      ].join("\n"),
      explanation:
        "Evidence ini belum membuktikan header server salah, tetapi cukup untuk membedakan problem browser boundary dari error UI biasa. Bila cookies credential dipakai lintas origin, server harus mengatur origin serta credentials dengan tepat; wildcard tidak cocok untuk credentialed requests. Jangan menyelesaikan error dengan menonaktifkan browser security, menaruh secret di client, atau mengubah URL production secara acak.",
    },
    { id: "cors-coding-practice", type: "coding-practice", challengeId: "diagnose-course-cors-boundary" },
    {
      id: "cors-quick-check",
      type: "quick-check",
      question: "Siapa yang menetapkan header CORS yang mengizinkan browser membaca response API?",
      options: ["API server atau gateway yang mengirim response.", "Client Component dengan mengubah state.", "CSS global application.", "Cookie HttpOnly di browser."],
      correctAnswer: "API server atau gateway yang mengirim response.",
      explanation: "Browser mengevaluasi policy dari response server. Frontend dapat memberi bukti origin, method, dan symptom, tetapi server atau gateway perlu mengonfigurasi policy.",
    },
    {
      id: "cors-callout",
      type: "callout",
      variant: "warning",
      title: "CORS error tidak berarti API pasti down",
      content:
        "Browser CORS error dapat terjadi walau API dapat diakses dari server, tool API, atau origin lain. Sebaliknya, 401, 403, 404, atau 500 adalah HTTP response yang berbeda dari CORS block. Jangan melaporkan semuanya sebagai backend rusak. Kirim bukti origin, endpoint, method, credential setting, preflight bila ada, dan console message tanpa menyertakan credential.",
    },
    {
      id: "cors-summary",
      type: "summary",
      points: [
        "Same-origin policy membatasi script membaca response lintas origin.",
        "CORS memakai policy dari server response agar browser mengetahui origin yang diizinkan.",
        "CORS berbeda dari authentication, authorization, dan HTTP status error.",
        "Frontend mendiagnosis dengan evidence; owner server memperbaiki policy bila perlu.",
        "Berikutnya, kita melihat CSRF pada request yang membawa credential cookie.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["cors-intro", "cors-example", "cors-coding-practice", "cors-quick-check", "cors-callout", "cors-summary"],
  },
};

export const csrfLesson: Lesson = {
  id: "csrf",
  trackId: "frontend-engineering",
  moduleId: "auth-cookies-browser-security-boundaries",
  title: "CSRF",
  slug: "csrf",
  description:
    "Memahami CSRF sebagai risiko unwanted authenticated request pada flow cookie-based, lalu mengenali boundary frontend dan server yang benar.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan mengapa cookie dapat ikut pada request tanpa UI app utama",
    "Membedakan CSRF dari CORS dan XSS pada level konsep",
    "Menjelaskan SameSite serta server-validated CSRF defense sebagai defense in depth",
    "Menghindari pemindahan secret atau security enforcement ke Client Component",
  ],
  skillTags: ["CSRF", "Cookies", "SameSite", "Authentication", "Security Boundaries"],
  blocks: [
    {
      id: "csrf-intro",
      type: "text",
      title: "CSRF memanfaatkan request yang tampak sudah terautentikasi",
      content:
        "Pada cookie-based auth, browser dapat mengirim cookie session ke domain yang sesuai ketika request memenuhi aturan cookie. CSRF adalah risiko ketika site lain memicu request state-changing ke aplikasi target dan browser membawa credential user tanpa aplikasi target benar-benar meminta action itu. Ini bukan berarti setiap cookie flow rentan atau setiap POST harus ditolak. Server perlu memilih defense sesuai architecture, termasuk SameSite policy dan server-side request validation seperti CSRF token atau origin checks bila relevan.\n\nFrontend perlu memahami symptom dan boundary. Jangan menaruh session secret atau token validasi rahasia di source code. Jangan menganggap CORS menutup semua CSRF risk; CORS terutama membatasi pembacaan response oleh script, sedangkan CSRF berkaitan dengan unwanted request yang membawa credential. Untuk action sensitif, UI juga dapat membantu dengan confirmation serta re-authentication flow, tetapi server tetap memvalidasi request.",
    },
    {
      id: "csrf-example",
      type: "code-example",
      title: "Catat boundary request state-changing",
      language: "ts",
      code: [
        "const noteMutationBoundary = {",
        '  method: "POST",',
        '  authMechanism: "cookie session",',
        '  requestIntent: "create course note",',
        '  serverDefense: "validate SameSite policy and CSRF protection",',
        '  browserRole: "send approved app request and show result",',
        "};",
      ].join("\n"),
      explanation:
        "Object ini bukan implementation security. Ia membantu melihat pemisahan tanggung jawab: app frontend mengirim action user melalui contract yang sah dan menampilkan result; server memeriksa identity, authorization, dan defense request sesuai architecture. Token anti-CSRF bila dipakai dibuat serta divalidasi server-side atau provider mechanism, bukan string yang dibuat secara acak di Client Component.",
    },
    { id: "csrf-coding-practice", type: "coding-practice", challengeId: "describe-course-note-csrf-boundary" },
    {
      id: "csrf-quick-check",
      type: "quick-check",
      question: "Mengapa CORS tidak boleh dianggap sebagai satu-satunya defense CSRF?",
      options: ["CORS membatasi pembacaan response lintas origin, sedangkan CSRF berkaitan dengan request terautentikasi yang mungkin tetap dikirim browser.", "CORS membuat semua cookie selalu HttpOnly.", "CORS memverifikasi password pada server.", "CORS menggantikan authorization database."],
      correctAnswer: "CORS membatasi pembacaan response lintas origin, sedangkan CSRF berkaitan dengan request terautentikasi yang mungkin tetap dikirim browser.",
      explanation: "Keduanya berkaitan dengan browser boundary tetapi mengatasi masalah berbeda. Server perlu menggunakan defense yang sesuai dengan credential flow dan action yang dilindungi.",
    },
    {
      id: "csrf-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan implementasi defense dari potongan snippet tanpa contract",
      content:
        "CSRF defense bergantung pada apakah app memakai cookie session, token bearer, domain terpisah, framework protection, atau provider auth. Jangan menyalin token ke localStorage atau menonaktifkan SameSite hanya agar request lokal cepat bekerja. Catat deployment origin, request method, cookie attributes, dan provider guidance; eskalasi ke backend atau security owner bila contract tidak jelas.",
    },
    {
      id: "csrf-summary",
      type: "summary",
      points: [
        "CSRF adalah risiko unwanted authenticated request, terutama pada credential cookie flow.",
        "CORS dan CSRF adalah konsep berbeda walau sama-sama menyentuh browser boundary.",
        "SameSite dan server-validated defense bekerja sebagai defense in depth.",
        "Frontend tidak menyimpan secret atau menggantikan request validation server.",
        "Berikutnya, kita membaca attribute cookie yang membantu membatasi access, transport, scope, dan lifetime.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["csrf-intro", "csrf-example", "csrf-coding-practice", "csrf-quick-check", "csrf-callout", "csrf-summary"],
  },
};

export const secureCookiesLesson: Lesson = {
  id: "secure-cookies",
  trackId: "frontend-engineering",
  moduleId: "auth-cookies-browser-security-boundaries",
  title: "Secure Cookies",
  slug: "secure-cookies",
  description:
    "Membaca HttpOnly, Secure, SameSite, Path, dan Max-Age sebagai attributes cookie yang dibentuk server untuk membatasi browser behavior.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan fungsi HttpOnly, Secure, SameSite, Path, dan Max-Age",
    "Membedakan cookie configuration server dari JavaScript client setting",
    "Membaca secure cookie header tanpa menyalin session value",
    "Menentukan symptom frontend yang perlu dikonfirmasi ke server atau provider",
  ],
  skillTags: ["Cookies", "HttpOnly", "Secure", "SameSite", "Sessions"],
  blocks: [
    {
      id: "secure-cookies-intro",
      type: "text",
      title: "Cookie attributes membatasi behavior browser",
      content:
        "HttpOnly mencegah JavaScript membaca cookie, sehingga session cookie tidak tersedia melalui document.cookie. Secure membuat browser mengirim cookie melalui HTTPS, dengan perlakuan khusus localhost pada browser. SameSite mengontrol kapan cookie dapat ikut pada cross-site request. Path dan Domain mengatur scope pengiriman; Max-Age atau Expires mengatur lifetime. Attributes ini dibentuk server melalui Set-Cookie dan perlu dipilih sesuai domain, deployment, provider, serta flow product.\n\nTidak ada satu configuration yang boleh ditempel ke semua project. SameSite=None membutuhkan Secure dan sering muncul pada kebutuhan cross-site tertentu; Lax atau Strict dapat berdampak pada navigation, callback, dan embedded flow. Jangan menghapus HttpOnly agar client bisa membaca session, atau menonaktifkan Secure untuk memperbaiki deployment. Pahami symptom, lalu cek contract provider dan environment.",
    },
    {
      id: "secure-cookies-example",
      type: "code-example",
      title: "Header session cookie yang perlu dibaca, bukan dibuat browser",
      language: "bash",
      code: "Set-Cookie: __Host-session=opaque-id; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=3600",
      explanation:
        "Nama dengan prefix __Host- dapat memberi pembatasan tambahan pada browser yang mendukungnya; server tetap perlu memeriksa nama serta session tersebut. HttpOnly tidak membuat cookie kebal terhadap semua risk, dan Path bukan access control. Anggap header sebagai contract browser-server yang perlu direview bersama provider docs, bukan string yang harus dibuat Client Component.",
    },
    { id: "secure-cookies-coding-practice", type: "coding-practice", challengeId: "read-secure-session-cookie-attributes" },
    {
      id: "secure-cookies-quick-check",
      type: "quick-check",
      question: "Attribute mana yang mencegah JavaScript browser membaca session cookie?",
      options: ["HttpOnly", "Path=/", "Max-Age=3600", "Content-Type"],
      correctAnswer: "HttpOnly",
      explanation: "HttpOnly membatasi akses cookie melalui API JavaScript seperti document.cookie. Server tetap dapat menerima cookie sesuai rules lain seperti Secure dan SameSite.",
    },
    {
      id: "secure-cookies-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Path bukan authorization dan cookie value bukan debug log",
      content:
        "Path membatasi URL mana yang mengirim cookie, tetapi bukan perlindungan untuk mencegah script yang sama membaca cookie tanpa HttpOnly. Jangan paste session value ke issue, console, chat, screenshot, atau model answer. Catat hanya attribute, domain, path, expiry, request symptom, dan environment. Bila cookie tidak terkirim di production, periksa HTTPS, SameSite, origin, provider callback, serta response Set-Cookie bersama server owner.",
    },
    {
      id: "secure-cookies-summary",
      type: "summary",
      points: [
        "HttpOnly, Secure, SameSite, scope, dan expiry mengatur behavior cookie pada browser.",
        "Server atau provider menetapkan session cookie melalui Set-Cookie.",
        "Cookie attributes perlu dibaca bersama deployment dan auth contract.",
        "Jangan melemahkan attributes atau membocorkan session value demi debugging cepat.",
        "Berikutnya, checkpoint menyatukan diagnosis auth, cookie, CORS, CSRF, dan frontend-server boundary.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["secure-cookies-intro", "secure-cookies-example", "secure-cookies-coding-practice", "secure-cookies-quick-check", "secure-cookies-callout", "secure-cookies-summary"],
  },
};

export const authBrowserSecurityAssessmentLesson: Lesson = {
  id: "auth-browser-security-assessment",
  trackId: "frontend-engineering",
  moduleId: "auth-cookies-browser-security-boundaries",
  title: "Uji Kompetensi Auth and Browser Security Boundaries",
  slug: "auth-browser-security-assessment",
  description:
    "Checkpoint untuk mendiagnosis symptom auth/browser secara defensif dan mengkomunikasikan boundary frontend, server, serta provider dengan jelas.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Membedakan authentication, authorization, CORS, CSRF, dan cookie issue dari symptom frontend",
    "Menentukan bukti aman yang dapat dikumpulkan melalui DevTools",
    "Menjelaskan secure cookie attributes tanpa menyalin credential",
    "Menyusun escalation note yang tidak mengklaim frontend dapat memverifikasi server security",
  ],
  skillTags: ["Authentication", "Cookies", "CORS", "CSRF", "Debugging", "Readiness Checkpoint"],
  blocks: [
    {
      id: "auth-browser-security-assessment-recap",
      type: "text",
      title: "Checkpoint: diagnosis dimulai dari boundary yang tepat",
      content:
        "Course Admin dapat login, tetapi setelah refresh dashboard request profile kadang signed out. Pada staging, app berada di https://app.example.com dan API di https://api.example.com. Network panel menunjukkan request profile memakai credentials. Pada kasus lain, user signed in mendapat 403 saat membuka organization berbeda. Form create note dapat menerima 422 error field. Team juga menanyakan apakah cookie session memiliki HttpOnly, Secure, SameSite, serta expiry yang sesuai deployment.\n\nCheckpoint ini tidak meminta kamu memperbaiki server, membuat token, atau mencoba bypass browser policy. Petakan dahulu apakah symptom berkaitan dengan identity/session, authorization, CORS, CSRF protection, validation, atau UI cache. Kumpulkan endpoint, origin, method, status atau console error, cookie attributes tanpa value, dan environment. Lalu jelaskan owner yang perlu memeriksa contract berikutnya.",
    },
    { id: "auth-browser-security-assessment-quiz", type: "quiz", quizId: "auth-browser-security-assessment-quiz" },
    { id: "auth-browser-security-assessment-coding-practice", type: "coding-practice", challengeId: "diagnose-auth-browser-boundary-checkpoint" },
    {
      id: "auth-browser-security-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis auth debugging note untuk kasus Course Admin. Jelaskan symptom UI, endpoint/method/origin yang diperiksa, perbedaan kemungkinan 401, 403, CORS block, atau session issue, cookie attributes yang aman dicatat tanpa value, hubungan CSRF dengan mutation cookie-based, dan owner atau docs yang perlu memeriksa server-side contract. Tambahkan satu local QA scenario serta satu informasi yang tidak boleh dibagikan.",
      placeholder:
        "Saya memeriksa GET profile dari app origin ke API origin, status response atau CORS console message, serta apakah request membawa credentials. 401 berarti session/identity perlu diperiksa; 403 berarti identity mungkin ada tetapi permission ditolak. Saya mencatat HttpOnly, Secure, SameSite, Path, dan expiry tanpa nilai cookie. Untuk POST note, server perlu memvalidasi defense CSRF sesuai contract; CORS bukan pengganti defense itu. Saya akan QA refresh, sign-out, cross-origin error, dan 403 organisasi. Saya tidak akan mengirim cookie value atau token dalam issue.",
      minimumCharacters: 750,
      checklist: ["Membedakan issue auth, authorization, CORS, dan CSRF secara konseptual.", "Mencatat evidence aman tanpa credential.", "Menentukan server/provider boundary yang perlu diperiksa.", "Menyebut satu local QA scenario dan informasi yang tidak boleh dibagikan.", "Tidak mengklaim browser dapat memverifikasi security server."],
      modelAnswer:
        "Saya mulai dari symptom: login terlihat berhasil tetapi GET profile sesudah refresh tidak memberi data. Saya catat app origin, API origin, endpoint, method, status bila ada, credential mode, serta console CORS message bila browser memblokir response. 401 mengarah ke session atau authentication flow; 403 berarti identity dapat ada tetapi authorization untuk resource ditolak. CORS block berbeda karena browser tidak mengizinkan script membaca response lintas origin sesuai policy server. Untuk POST note dengan cookie auth, server perlu menerapkan CSRF defense sesuai architecture; CORS bukan penggantinya. Saya memeriksa name kategori cookie, Path, HttpOnly, Secure, SameSite, dan expiry tanpa menyalin value. Saya akan QA login, refresh, sign-out, 403 organization, dan mutation error pada local atau staging aman. Saya tidak akan mengirim session ID, token, password, secret, atau screenshot cookie value ke issue.",
    },
    {
      id: "auth-browser-security-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk membaca browser boundary dan auth contract",
      description:
        "Pilih docs sesuai symptom yang sedang diuji. Fokus pada behavior request dan cookies yang dapat dilihat frontend; abaikan implementasi crypto, exploit, atau custom auth server.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Using HTTP cookies",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
          focus: ["Set-Cookie dan Cookie pada flow session.", "HttpOnly, Secure, SameSite, scope, dan expiry.", "DevTools inspection tanpa membagikan value."],
          ignoreForNow: ["Tracking implementation dan cookie prefix detail yang belum dipakai project."],
        },
        {
          source: "MDN Web Docs",
          title: "Cross-Origin Resource Sharing",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
          focus: ["Origin, preflight, credentials, dan response policy.", "Membedakan CORS browser error dari HTTP response."],
          ignoreForNow: ["Menulis proxy atau bypass policy tanpa owner server."],
        },
        {
          source: "MDN Web Docs",
          title: "Same-origin policy",
          url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy",
          focus: ["Mengapa browser membatasi cross-origin read.", "Hubungan same-origin policy dan CORS."],
          ignoreForNow: ["Detail isolasi browser yang tidak muncul pada feature saat ini."],
        },
        {
          source: "OWASP",
          title: "CSRF Prevention Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
          focus: ["CSRF sebagai unwanted authenticated request.", "Defense in depth dan server-side validation concept."],
          ignoreForNow: ["Attack payload, bypass technique, dan framework implementation detail."],
        },
        {
          source: "OWASP",
          title: "Authentication Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
          focus: ["Authentication versus session management.", "TLS dan error response sebagai product/security concern."],
          ignoreForNow: ["Password hashing, OAuth provider, MFA, dan identity provider implementation."],
        },
      ],
      followUpAction:
        "Di local atau staging app yang aman, trace satu sign-in sampai request protected page. Catat endpoint, origin, status, cookie attributes tanpa value, UI setelah refresh, serta owner contract yang perlu dicek. Coba failure yang aman seperti sign-out atau route tanpa permission. Jangan membuat token, menonaktifkan browser protection, atau membagikan credential.",
    },
    {
      id: "auth-browser-security-assessment-summary",
      type: "summary",
      points: [
        "Authentication, session, authorization, CORS, CSRF, dan cookie attributes memiliki peran berbeda.",
        "Frontend mendiagnosis symptom serta evidence aman; server/provider menegakkan security contract.",
        "Cookie value, token, password, secret, dan raw credential tidak boleh masuk issue atau log client.",
        "CORS browser block, HTTP status, dan CSRF protection tidak dapat disamakan.",
        "Kamu siap melanjutkan ke Data and Infrastructure Basics untuk memahami storage serta service yang berada di balik contract frontend.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["auth-browser-security-assessment-recap", "auth-browser-security-assessment-quiz", "auth-browser-security-assessment-coding-practice", "auth-browser-security-assessment-writing-practice", "auth-browser-security-assessment-documentation-bridge", "auth-browser-security-assessment-summary"],
    passingQuizScore: 70,
  },
};

export const authBrowserSecurityAssessmentQuiz: Quiz = {
  id: "auth-browser-security-assessment-quiz",
  lessonId: "auth-browser-security-assessment",
  title: "Uji Kompetensi Auth and Browser Security Boundaries",
  passingScore: 70,
  questions: [
    {
      id: "authn-authz",
      type: "multiple-choice",
      question: "User signed in tetapi mendapat 403 saat membuka organization lain. Ini paling dekat dengan",
      options: ["Authorization issue yang perlu diperiksa pada server policy atau resource access.", "Login form selalu rusak.", "CORS block yang pasti terjadi.", "Cookie preference UI."],
      correctAnswer: "Authorization issue yang perlu diperiksa pada server policy atau resource access.",
      explanation: "403 umumnya berarti request dipahami tetapi access ditolak. Identity dapat sudah ada; server tetap perlu memeriksa permission resource.",
    },
    {
      id: "cookie-http-only",
      type: "multiple-choice",
      question: "Apa fungsi HttpOnly pada cookie session?",
      options: ["Mencegah JavaScript browser membaca value cookie.", "Mengirim cookie ke semua origin.", "Membuat cookie menjadi authorization server.", "Menghapus kebutuhan HTTPS."],
      correctAnswer: "Mencegah JavaScript browser membaca value cookie.",
      explanation: "HttpOnly mengurangi akses script ke cookie. Ia tetap bukan pengganti Secure, SameSite, authorization server, atau security review lain.",
    },
    {
      id: "jwt-client-decode",
      type: "multiple-choice",
      question: "Mengapa decode JWT di browser bukan authorization check?",
      options: ["Decode tidak memverifikasi signature atau permission server untuk resource saat ini.", "Browser tidak dapat menampilkan JSON.", "JWT selalu identik dengan cookie.", "Decode otomatis menghapus session."],
      correctAnswer: "Decode tidak memverifikasi signature atau permission server untuk resource saat ini.",
      explanation: "Server atau provider perlu memverifikasi token dan policy sebelum memberi data. Client decode hanya dapat membantu observasi shape bila contract mengizinkan.",
    },
    {
      id: "cors-owner",
      type: "multiple-choice",
      question: "Siapa yang mengatur header CORS agar browser dapat membaca response lintas origin?",
      options: ["API server atau gateway yang mengirim response.", "Button React di Client Component.", "CSS app shell.", "Cookie Path attribute."],
      correctAnswer: "API server atau gateway yang mengirim response.",
      explanation: "Browser mengevaluasi policy dari response server. Frontend menyediakan evidence origin, method, credentials, dan symptom untuk diagnosis.",
    },
    {
      id: "csrf-concept",
      type: "multiple-choice",
      question: "Mengapa CSRF perlu dipikirkan pada mutation dengan cookie auth?",
      options: ["Browser dapat membawa credential pada request yang tidak diinisiasi oleh UI app, sehingga server perlu defense sesuai contract.", "Cookie selalu menyimpan password.", "CORS selalu mencegah setiap mutation.", "Client Component dapat memverifikasi semua request sendiri."],
      correctAnswer: "Browser dapat membawa credential pada request yang tidak diinisiasi oleh UI app, sehingga server perlu defense sesuai contract.",
      explanation: "CSRF berkaitan dengan unwanted authenticated request. Defense bergantung architecture dan harus divalidasi server-side atau provider mechanism.",
    },
    {
      id: "cookie-secure",
      type: "multiple-choice",
      question: "Apa yang perlu dicatat di issue saat cookie session diduga bermasalah?",
      options: ["Domain, path, expiry, HttpOnly, Secure, SameSite, environment, serta symptom tanpa cookie value.", "Cookie value lengkap dan password user.", "Hanya warna error banner.", "Semua secret environment variable."],
      correctAnswer: "Domain, path, expiry, HttpOnly, Secure, SameSite, environment, serta symptom tanpa cookie value.",
      explanation: "Attributes dan evidence request berguna untuk diagnosis tanpa menyebarkan credential atau session identifier.",
    },
  ],
};

export const diagnoseCourseCorsBoundaryChallenge: CodingChallenge = {
  id: "diagnose-course-cors-boundary",
  lessonId: "cors",
  title: "Diagnose course CORS boundary",
  description: "Catat evidence CORS yang perlu dikumpulkan sebelum meminta owner API memeriksa policy server.",
  instructions: [
    "Fokus di tab TS.",
    "Buat corsEvidence dengan appOrigin, apiOrigin, method POST, dan credentialsIncluded true.",
    "Tambahkan browserMessage yang menyebut CORS policy.",
    "Jangan menulis bypass, proxy, token, atau header server palsu.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...authBoundaryPracticeCode,
    ts: ["const corsEvidence = {", "  // Catat evidence browser yang aman.", "};"].join("\n"),
  },
  solutionCode: {
    ...authBoundaryPracticeCode,
    ts: [
      "const corsEvidence = {",
      '  appOrigin: "http://localhost:3000",',
      '  apiOrigin: "https://api.example.com",',
      '  method: "POST",',
      "  credentialsIncluded: true,",
      '  browserMessage: "blocked by CORS policy",',
      "};",
    ].join("\n"),
  },
  checklist: ["Origin aplikasi dan API dicatat.", "Method dan credentials ikut dicatat.", "Symptom browser dibedakan dari HTTP status.", "Tidak ada credential atau bypass."],
  validation: {
    mode: "ts",
    checks: [
      { id: "app-origin", label: "App origin tersedia.", type: "contains", valueIncludes: 'appOrigin: "http://localhost:3000"' },
      { id: "api-origin", label: "API origin tersedia.", type: "contains", valueIncludes: 'apiOrigin: "https://api.example.com"' },
      { id: "method", label: "Method POST dicatat.", type: "contains", valueIncludes: 'method: "POST"' },
      { id: "credentials", label: "Credential mode dicatat.", type: "contains", valueIncludes: "credentialsIncluded: true" },
      { id: "message", label: "CORS message dicatat.", type: "contains", valueIncludes: "CORS policy" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target CORS evidence",
    description: "Cek otomatis membaca evidence TypeScript. Preview tidak mengirim cross-origin request atau menguji policy server.",
    lines: ["Origin, method, dan credential mode dapat dilaporkan.", "CORS symptom dipisahkan dari HTTP status.", "Owner API dapat memeriksa policy response berikutnya."],
  },
  skillTags: ["CORS", "Same-Origin Policy", "Debugging", "TypeScript"],
};

export const describeCourseNoteCsrfBoundaryChallenge: CodingChallenge = {
  id: "describe-course-note-csrf-boundary",
  lessonId: "csrf",
  title: "Describe course note CSRF boundary",
  description: "Nyatakan boundary mutation cookie-based tanpa membuat token palsu atau memindahkan validation server ke browser.",
  instructions: [
    "Fokus di tab TS.",
    "Buat noteMutationBoundary dengan method POST dan authMechanism cookie session.",
    "Nyatakan bahwa server memvalidasi SameSite policy dan CSRF protection.",
    "Nyatakan browser hanya mengirim approved app request serta menampilkan hasil.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...authBoundaryPracticeCode,
    ts: ["const noteMutationBoundary = {", "  // Jelaskan boundary request ini.", "};"].join("\n"),
  },
  solutionCode: {
    ...authBoundaryPracticeCode,
    ts: [
      "const noteMutationBoundary = {",
      '  method: "POST",',
      '  authMechanism: "cookie session",',
      '  serverDefense: "validate SameSite policy and CSRF protection",',
      '  browserRole: "send approved app request and show result",',
      "};",
    ].join("\n"),
  },
  checklist: ["Mutation dan credential mechanism jelas.", "Server defense disebut sebagai boundary server.", "Browser role tidak menjadi validator security.", "Tidak ada token atau secret contoh."],
  validation: {
    mode: "ts",
    checks: [
      { id: "method", label: "Mutation memakai POST.", type: "contains", valueIncludes: 'method: "POST"' },
      { id: "cookie", label: "Cookie session dicatat.", type: "contains", valueIncludes: 'authMechanism: "cookie session"' },
      { id: "server", label: "Server defense dicatat.", type: "contains", valueIncludes: "CSRF protection" },
      { id: "browser", label: "Browser role dibatasi.", type: "contains", valueIncludes: "send approved app request" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target CSRF boundary",
    description: "Cek otomatis membaca reasoning TypeScript. Preview tidak membuat CSRF token, menjalankan mutation, atau memverifikasi server defense.",
    lines: ["POST memakai cookie session sesuai contract.", "Server memvalidasi defense request.", "Browser mengirim action user dan menampilkan result."],
  },
  skillTags: ["CSRF", "Cookies", "Security Boundaries", "TypeScript"],
};

export const readSecureSessionCookieAttributesChallenge: CodingChallenge = {
  id: "read-secure-session-cookie-attributes",
  lessonId: "secure-cookies",
  title: "Read secure session cookie attributes",
  description: "Susun representasi header session cookie untuk membaca attributes yang dibentuk server, bukan membuat cookie runtime di browser.",
  instructions: [
    "Fokus di tab TS.",
    "Buat sessionCookieHeader dengan __Host-session, Path=/, Secure, HttpOnly, SameSite=Lax, dan Max-Age=3600.",
    "Gunakan opaque session identifier contoh, bukan token atau credential nyata.",
    "Jangan memakai document.cookie atau localStorage pada latihan ini.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...authBoundaryPracticeCode,
    ts: 'const sessionCookieHeader = "";',
  },
  solutionCode: {
    ...authBoundaryPracticeCode,
    ts: [
      'const sessionCookieHeader = "__Host-session=opaque-id; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=3600";',
    ].join("\n"),
  },
  checklist: ["Session ID hanya opaque placeholder.", "Path dan lifetime terlihat.", "Secure serta HttpOnly terlihat.", "SameSite dibaca sebagai browser behavior contract."],
  validation: {
    mode: "ts",
    checks: [
      { id: "name", label: "Cookie memakai __Host-session.", type: "contains", valueIncludes: "__Host-session=opaque-id" },
      { id: "path", label: "Path root tersedia.", type: "contains", valueIncludes: "Path=/" },
      { id: "secure", label: "Secure tersedia.", type: "contains", valueIncludes: "Secure" },
      { id: "http-only", label: "HttpOnly tersedia.", type: "contains", valueIncludes: "HttpOnly" },
      { id: "same-site", label: "SameSite Lax tersedia.", type: "contains", valueIncludes: "SameSite=Lax" },
      { id: "age", label: "Max-Age tersedia.", type: "contains", valueIncludes: "Max-Age=3600" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target secure cookie reading",
    description: "Cek otomatis membaca attributes header. Preview tidak menetapkan cookie, mengakses browser storage, atau memverifikasi deployment configuration.",
    lines: ["Session value tetap opaque.", "HttpOnly, Secure, SameSite, scope, dan lifetime dapat direview.", "Server atau provider tetap menetapkan header nyata."],
  },
  skillTags: ["Cookies", "HttpOnly", "Secure", "SameSite", "TypeScript"],
};

export const diagnoseAuthBrowserBoundaryCheckpointChallenge: CodingChallenge = {
  id: "diagnose-auth-browser-boundary-checkpoint",
  lessonId: "auth-browser-security-assessment",
  title: "Diagnose auth browser boundary checkpoint",
  description: "Map symptom auth/browser ke recovery frontend dan owner boundary tanpa menjalankan request atau menyimpan credential.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type AuthBrowserIssue untuk missing-session, access-denied, cors-policy, dan csrf-rejected.",
    "Map setiap issue ke recovery yang sesuai.",
    "Gunakan sign-in, show-access-denied, check-api-cors-policy, dan review-server-csrf-defense.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...authBoundaryPracticeCode,
    ts: ['type AuthBrowserIssue = "missing-session";', "", "function getAuthRecovery(issue: AuthBrowserIssue) {", '  return "sign-in";', "}"].join("\n"),
  },
  solutionCode: {
    ...authBoundaryPracticeCode,
    ts: [
      'type AuthBrowserIssue = "missing-session" | "access-denied" | "cors-policy" | "csrf-rejected";',
      "",
      "function getAuthRecovery(issue: AuthBrowserIssue) {",
      '  if (issue === "missing-session") return "sign-in";',
      '  if (issue === "access-denied") return "show-access-denied";',
      '  if (issue === "cors-policy") return "check-api-cors-policy";',
      '  return "review-server-csrf-defense";',
      "}",
    ].join("\n"),
  },
  checklist: ["Session dan authorization issue dibedakan.", "CORS diarahkan ke policy API.", "CSRF tetap menjadi defense server.", "Recovery tidak memalsukan security check di browser."],
  validation: {
    mode: "ts",
    checks: [
      { id: "issue-type", label: "Issue union lengkap tersedia.", type: "contains", valueIncludes: '"missing-session" | "access-denied" | "cors-policy" | "csrf-rejected"' },
      { id: "session", label: "Missing session menuju sign-in.", type: "contains", valueIncludes: 'issue === "missing-session") return "sign-in"' },
      { id: "access", label: "Access denied memiliki UI khusus.", type: "contains", valueIncludes: 'issue === "access-denied") return "show-access-denied"' },
      { id: "cors", label: "CORS diarahkan ke policy API.", type: "contains", valueIncludes: 'issue === "cors-policy") return "check-api-cors-policy"' },
      { id: "csrf", label: "CSRF tetap review server defense.", type: "contains", valueIncludes: 'return "review-server-csrf-defense"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target auth/browser diagnosis",
    description: "Cek otomatis membaca mapper reasoning TypeScript. Preview tidak memverifikasi identity, CORS policy, cookie, atau CSRF server.",
    lines: ["Session, authorization, CORS, dan CSRF dipisahkan.", "Recovery frontend memberi context yang tepat.", "Security enforcement tetap berada pada server/provider boundary."],
  },
  skillTags: ["Authentication", "Cookies", "CORS", "CSRF", "Debugging", "Assessment"],
};
