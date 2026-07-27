import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const secretsPermissionsPracticeCode = { html: "", css: "", js: "" };

export const secretsTokensPermissionsModule: Module = {
  id: "secrets-tokens-permissions",
  trackId: "frontend-engineering",
  title: "Secrets, Tokens, and Permissions",
  slug: "secrets-tokens-and-permissions",
  description:
    "Menjaga secret tetap server-only, membaca trade-off session, serta membuat Permission UI tanpa memindahkan enforcement ke browser.",
  order: 60,
  lessonIds: [
    "env-leakage",
    "token-storage",
    "permission-secure-cookies",
    "permission-ui",
    "auth-guards",
    "secrets-tokens-permissions-assessment",
  ],
  estimatedHours: 9,
  skillTags: ["Environment Variables", "Tokens", "Cookies", "Permissions", "Authorization", "RLS"],
};

export const envLeakageLesson: Lesson = {
  id: "env-leakage",
  trackId: "frontend-engineering",
  moduleId: "secrets-tokens-permissions",
  title: "Env Leakage",
  slug: "env-leakage",
  description:
    "Membedakan configuration browser yang memang public dari secret yang hanya boleh hidup pada server environment.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan public browser configuration dan server-only secret",
    "Memahami bahwa NEXT_PUBLIC_ dapat membuat value tersedia di browser bundle",
    "Mengenali configuration yang tidak boleh diekspos client",
    "Mengumpulkan evidence leakage tanpa menyalin credential",
  ],
  skillTags: ["Environment Variables", "Next.js", "Secrets Management", "Client Boundaries"],
  blocks: [
    {
      id: "env-leakage-intro",
      type: "text",
      title: "Prefix public menentukan browser dapat melihat value",
      content:
        "Environment variable memisahkan configuration dari source code, tetapi tidak semua variable aman untuk browser. Dalam Next.js, variable dengan prefix NEXT_PUBLIC_ dapat di-inline ke JavaScript yang dikirim ke browser saat build. Prefix itu hanya untuk configuration yang memang dirancang public, seperti app origin atau publishable project identifier yang tetap tunduk pada policy backend. Jangan memberi prefix public pada service role key, database URL, signing secret, private API credential, atau value yang dapat menjalankan privileged operation.\n\nSecret server-only hanya dipakai Server Component, Route Handler, Server Action, atau service layer. Menyimpan value di .env.local tidak cukup bila code client mengeksposnya melalui bundle, response, log, error message, atau repository. Saat menduga leakage, catat nama variable, runtime yang memakainya, lokasi exposure, environment, dan owner yang perlu memeriksa atau merotasi credential. Jangan menyalin value-nya ke issue.",
    },
    {
      id: "env-leakage-example",
      type: "code-example",
      title: "Klasifikasi nama configuration tanpa value",
      language: "ts",
      code: [
        "const environmentBoundary = {",
        '  NEXT_PUBLIC_APP_ORIGIN: "public browser configuration",',
        '  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "public browser configuration with RLS",',
        '  SUPABASE_SERVICE_ROLE_KEY: "server-only secret",',
        '  DATABASE_URL: "server-only secret",',
        "};",
      ].join("\n"),
      explanation:
        "Contoh memakai nama variable dan kategori saja. Publishable configuration tidak memberi browser privileged access; API dan RLS tetap menegakkan policy. Service role key serta database URL tidak boleh berada di Client Component, public log, atau source control.",
    },
    { id: "env-leakage-coding-practice", type: "coding-practice", challengeId: "classify-course-environment-boundaries" },
    {
      id: "env-leakage-quick-check",
      type: "quick-check",
      question: "Mana perubahan yang paling berisiko pada Next.js app?",
      options: ["Menambahkan NEXT_PUBLIC_ pada service role key agar Client Component dapat memakainya.", "Memakai app origin sebagai configuration browser.", "Menyimpan database URL pada server environment.", "Mencatat nama variable tanpa value saat membuat issue."],
      correctAnswer: "Menambahkan NEXT_PUBLIC_ pada service role key agar Client Component dapat memakainya.",
      explanation: "NEXT_PUBLIC_ membuat value tersedia di browser bundle. Service role key adalah privileged secret dan harus tetap server-only.",
    },
    {
      id: "env-leakage-callout",
      type: "callout",
      variant: "warning",
      title: "Secret exposure adalah incident, bukan bug copy",
      content:
        "Jangan cukup menyembunyikan secret dari UI atau log. Hentikan exposure, beri tahu owner sesuai proses team, rotasi credential bila perlu, dan audit pemakaian sesuai akses yang sah. Frontend contributor tidak perlu membuka atau menyebarkan value untuk membuktikan risk.",
    },
    {
      id: "env-leakage-summary",
      type: "summary",
      points: [
        "NEXT_PUBLIC_ berarti value dapat tersedia di browser bundle.",
        "Publishable configuration berbeda dari secret yang memberi privileged access.",
        "Secret tidak boleh masuk Client Component, response, log public, atau repository.",
        "Evidence leakage mencatat lokasi dan impact tanpa credential value.",
        "Berikutnya, kita membaca trade-off lokasi token dan session evidence.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["env-leakage-intro", "env-leakage-example", "env-leakage-coding-practice", "env-leakage-quick-check", "env-leakage-callout", "env-leakage-summary"],
  },
};

export const tokenStorageLesson: Lesson = {
  id: "token-storage",
  trackId: "frontend-engineering",
  moduleId: "secrets-tokens-permissions",
  title: "Token Storage",
  slug: "token-storage",
  description:
    "Membaca trade-off cookie, memory, dan persistent browser storage tanpa menganggap ada satu pilihan universal.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan bahwa lokasi token/session evidence memengaruhi risk dan UX",
    "Membedakan HttpOnly cookie, in-memory state, dan persistent browser storage",
    "Memahami bahwa client decode bukan authorization check",
    "Menentukan pertanyaan architecture sebelum memilih storage",
  ],
  skillTags: ["Tokens", "Sessions", "Cookies", "Browser Storage", "Authentication"],
  blocks: [
    {
      id: "token-storage-intro",
      type: "text",
      title: "Storage choice adalah contract security dan experience",
      content:
        "Tidak ada satu lokasi token yang otomatis paling aman untuk setiap application. HttpOnly cookie dikelola browser dan JavaScript tidak dapat membaca valuenya, tetapi mutation berbasis cookie tetap perlu CSRF-aware server contract. In-memory state hilang saat refresh sehingga mengurangi persistence di browser, tetapi app perlu session recovery flow. Persistent browser storage mudah dipakai untuk beberapa data UI, namun value di sana dapat dibaca JavaScript yang berjalan di origin aplikasi sehingga penggunaan token memerlukan risk review yang jelas.\n\nToken atau session evidence tidak boleh diperlakukan seperti data profile. Jangan taruh di URL, analytics event, error report, screenshot, local draft, atau console log. Decode token di client bukan proof permission untuk resource saat ini; server/provider tetap memverifikasi session, token, dan policy sebelum memberi data atau menjalankan action.",
    },
    {
      id: "token-storage-example",
      type: "code-example",
      title: "Bandingkan property, bukan jawaban universal",
      language: "ts",
      code: [
        "const sessionStorageTradeoffs = {",
        '  httpOnlyCookie: "browser-managed; JavaScript cannot read value; needs CSRF-aware server contract",',
        '  inMemory: "clears on refresh; avoids persistent browser token storage",',
        '  persistentBrowserStorage: "JavaScript-readable; requires explicit risk review",',
        "};",
      ].join("\n"),
      explanation:
        "Object ini bukan configuration auth dan tidak menyimpan token. Pilihan nyata bergantung provider, architecture, session refresh behavior, cross-site need, dan backend enforcement. Jangan mengubah storage berdasarkan satu tutorial tanpa memahami seluruh boundary.",
    },
    { id: "token-storage-coding-practice", type: "coding-practice", challengeId: "explain-course-token-storage-tradeoffs" },
    {
      id: "token-storage-quick-check",
      type: "quick-check",
      question: "Mengapa decode token di browser tidak cukup untuk membolehkan action admin?",
      options: ["Server/provider tetap harus memverifikasi session/token dan authorization resource.", "Browser tidak dapat membaca string.", "Token selalu sama dengan cookie.", "Decode otomatis menghapus credential."],
      correctAnswer: "Server/provider tetap harus memverifikasi session/token dan authorization resource.",
      explanation: "Client decode hanya dapat membantu membaca shape bila contract mengizinkan. Ia tidak menggantikan verification dan policy pada boundary terpercaya.",
    },
    {
      id: "token-storage-callout",
      type: "callout",
      variant: "important",
      title: "Jangan masukkan token ke observability",
      content:
        "Saat debugging auth, catat endpoint, method, status, origin, environment, cookie attributes tanpa value, dan UI symptom. Jangan menempelkan token atau session ID ke chat, issue, analytics, console, atau screen recording. Jika value terekspos, perlakukan sebagai security incident dan ikuti process team.",
    },
    {
      id: "token-storage-summary",
      type: "summary",
      points: [
        "Token storage memengaruhi security boundary, session UX, dan recovery behavior.",
        "HttpOnly cookie, memory, dan persistent storage mempunyai trade-off berbeda.",
        "Client decode bukan authorization check; server/provider membuat keputusan access.",
        "Token dan session value tidak boleh masuk URL, log, analytics, atau issue.",
        "Berikutnya, kita membaca attributes cookie sebagai bagian dari session contract.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["token-storage-intro", "token-storage-example", "token-storage-coding-practice", "token-storage-quick-check", "token-storage-callout", "token-storage-summary"],
  },
};

export const permissionSecureCookiesLesson: Lesson = {
  id: "permission-secure-cookies",
  trackId: "frontend-engineering",
  moduleId: "secrets-tokens-permissions",
  title: "Secure Cookies",
  slug: "permission-secure-cookies",
  description:
    "Membaca HttpOnly, Secure, SameSite, scope, dan expiry sebagai contract cookie session tanpa menyalin value.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan fungsi HttpOnly, Secure, SameSite, Path, dan expiry",
    "Membedakan cookie attributes dari authorization policy",
    "Mencatat evidence cookie dengan aman melalui DevTools",
    "Menyadari server/provider menetapkan cookie nyata",
  ],
  skillTags: ["Cookies", "HttpOnly", "Secure", "SameSite", "Sessions"],
  blocks: [
    {
      id: "permission-secure-cookies-intro",
      type: "text",
      title: "Cookie attributes membatasi behavior, bukan permission",
      content:
        "Session cookie biasanya ditetapkan server melalui Set-Cookie lalu dikelola browser sesuai domain, path, expiry, and attributes. HttpOnly membantu mencegah JavaScript browser membaca value cookie. Secure membatasi pengiriman ke HTTPS dengan perlakuan localhost tertentu saat development. SameSite memengaruhi kapan cookie dibawa pada cross-site request. Path dan domain membatasi scope, sedangkan expiry atau Max-Age menentukan lifetime. Semua attributes dibaca bersama deployment dan auth contract.\n\nCookie attributes bukan authorization. Cookie dapat menunjukkan session context, tetapi server/database tetap menentukan apakah identity boleh membuka organization, membaca row, atau menjalankan action. Frontend boleh menampilkan signed-in state, sign-in recovery, atau access denied. Jangan menyimpulkan permission hanya karena cookie ada atau mengubah cookie value untuk debugging.",
    },
    {
      id: "permission-secure-cookies-example",
      type: "code-example",
      title: "Header session untuk dibaca, bukan dibuat browser",
      language: "bash",
      code: [
        "Set-Cookie: __Host-session=opaque-session-id;",
        "Path=/;",
        "Secure;",
        "HttpOnly;",
        "SameSite=Lax;",
        "Max-Age=3600",
      ].join("\n"),
      explanation:
        "opaque-session-id adalah placeholder, bukan credential. Server/provider menetapkan header nyata. Catat name kategori, scope, dan attributes di DevTools tanpa value. Policy tepat dapat berbeda menurut provider, domain, dan deployment topology.",
    },
    { id: "permission-secure-cookies-coding-practice", type: "coding-practice", challengeId: "read-course-secure-cookie-contract" },
    {
      id: "permission-secure-cookies-quick-check",
      type: "quick-check",
      question: "Apa yang dilakukan HttpOnly pada session cookie?",
      options: ["Membatasi JavaScript browser agar tidak dapat membaca value cookie.", "Membuat user otomatis menjadi admin.", "Mengirim cookie ke semua origin.", "Menghapus kebutuhan Secure dan SameSite."],
      correctAnswer: "Membatasi JavaScript browser agar tidak dapat membaca value cookie.",
      explanation: "HttpOnly mengurangi akses script terhadap cookie value. Ia tidak menggantikan HTTPS, SameSite, authorization policy, atau security review.",
    },
    {
      id: "permission-secure-cookies-callout",
      type: "callout",
      variant: "warning",
      title: "Cookie value bukan bukti debugging",
      content:
        "Untuk report session issue, catat domain, path, expiry, HttpOnly, Secure, SameSite, request context, environment, dan symptom. Jangan menyalin cookie value, token, password, atau screenshot penuh. Jika localhost berbeda dari deployment HTTPS, tulis perbedaan environment dan minta owner memeriksa configuration yang benar.",
    },
    {
      id: "permission-secure-cookies-summary",
      type: "summary",
      points: [
        "HttpOnly, Secure, SameSite, scope, dan lifetime mengatur behavior session cookie.",
        "Server/provider menetapkan cookie; browser mengirimnya sesuai rules.",
        "Cookie presence bukan bukti authorization terhadap resource.",
        "DevTools evidence aman tidak memuat session value atau credential.",
        "Berikutnya, kita membuat Permission UI yang jujur terhadap capability user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["permission-secure-cookies-intro", "permission-secure-cookies-example", "permission-secure-cookies-coding-practice", "permission-secure-cookies-quick-check", "permission-secure-cookies-callout", "permission-secure-cookies-summary"],
  },
};

export const permissionUiLesson: Lesson = {
  id: "permission-ui",
  trackId: "frontend-engineering",
  moduleId: "secrets-tokens-permissions",
  title: "Permission UI",
  slug: "permission-ui",
  description:
    "Membuat UI yang mencerminkan capability user tanpa menjadikan button visibility sebagai security enforcement.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan peran Permission UI untuk clarity dan recovery",
    "Membedakan hidden/disabled/read-only state dari server authorization",
    "Memilih copy saat action tidak tersedia bagi user",
    "Mendeteksi role flag client yang bukan bukti permission",
  ],
  skillTags: ["Permissions", "Authorization", "UX", "Access Denied", "RLS"],
  blocks: [
    {
      id: "permission-ui-intro",
      type: "text",
      title: "UI menjelaskan access, bukan memutuskan access",
      content:
        "Permission UI memberi context: learner dapat melihat course, editor dapat mengubah course, dan user tanpa access melihat penjelasan read-only atau request-access path. Hiding action dapat mengurangi kebingungan; disabled action dengan alasan dapat membantu ketika user perlu tahu capability yang hilang. Pilihan UX bergantung context product.\n\nNamun role flag di browser, hidden menu, disabled button, atau client-side condition bukan enforcement. User dapat mengubah route, memanggil endpoint di luar UI, atau mendapat state client stale. API server, service layer, dan database policy seperti RLS tetap memeriksa identity serta permission pada data/action penting. Jika server menolak request, UI perlu menampilkan access denied yang jujur, bukan memalsukan success.",
    },
    {
      id: "permission-ui-example",
      type: "code-example",
      title: "Role UI dan enforcement data dipisahkan",
      language: "ts",
      code: [
        "const coursePermissionUi = {",
        '  canEditCourse: "show edit action",',
        '  cannotEditCourse: "show read-only explanation or request-access path",',
        '  clientRoleHint: "helps UI decisions only",',
        '  serverEnforcement: "verify permission for every protected data action",',
        "};",
      ].join("\n"),
      explanation:
        "clientRoleHint dapat membuat UI relevan, tetapi serverEnforcement memeriksa request yang mencapai data. Jangan infer sensitive permission dari profile field yang dapat diubah user. Jika project memakai Supabase browser access, RLS menjadi enforcement database, bukan button state.",
    },
    { id: "permission-ui-coding-practice", type: "coding-practice", challengeId: "design-course-permission-ui-boundary" },
    {
      id: "permission-ui-quick-check",
      type: "quick-check",
      question: "Apa respons UI yang tepat saat server menolak update course dengan 403?",
      options: ["Tampilkan access denied yang jelas dan jangan menganggap hidden button sebagai enforcement.", "Ubah role flag di browser lalu kirim ulang request.", "Tampilkan success tanpa response.", "Simpan permission admin di localStorage."],
      correctAnswer: "Tampilkan access denied yang jelas dan jangan menganggap hidden button sebagai enforcement.",
      explanation: "403 perlu diterjemahkan menjadi recovery UI yang jujur. Server tetap owner authorization resource.",
    },
    {
      id: "permission-ui-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Client permission bukan source of truth",
      content:
        "Client state bisa stale, dimodifikasi, atau tidak lengkap. Jangan memakai flag isAdmin yang dapat diubah user sebagai bukti backend boleh melakukan action. Untuk issue permission, catat resource, action, endpoint/method, status, environment, dan expected versus actual UI. Jangan mengubah local client state untuk melewati denial.",
    },
    {
      id: "permission-ui-summary",
      type: "summary",
      points: [
        "Permission UI memberi clarity, guidance, dan recovery bagi user.",
        "Hidden/disabled action serta role hint client bukan enforcement security.",
        "Server/API/RLS tetap memverifikasi permission pada protected data/action.",
        "403 harus menjadi access denied UI yang jujur, bukan fake success atau workaround.",
        "Berikutnya, kita melihat apa yang dapat dan tidak dapat dilindungi auth guard frontend.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["permission-ui-intro", "permission-ui-example", "permission-ui-coding-practice", "permission-ui-quick-check", "permission-ui-callout", "permission-ui-summary"],
  },
};

export const authGuardsLesson: Lesson = {
  id: "auth-guards",
  trackId: "frontend-engineering",
  moduleId: "secrets-tokens-permissions",
  title: "Auth Guards",
  slug: "auth-guards",
  description:
    "Membedakan redirect guard dari route, API, dan database authorization agar protected experience tidak memberi rasa aman palsu.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan nilai UX dari client dan server route guard",
    "Membedakan route response protection dari data authorization",
    "Menentukan layer yang menegakkan protected data action",
    "Menyusun QA scenario untuk guard dan access denial",
  ],
  skillTags: ["Auth Guards", "Authorization", "Route Protection", "RLS", "Security Boundaries"],
  blocks: [
    {
      id: "auth-guards-intro",
      type: "text",
      title: "Guard mengarahkan user, data policy tetap berdiri sendiri",
      content:
        "Auth guard frontend dapat membuat experience lebih baik: user signed-out diarahkan ke sign-in, route menunjukkan loading session, atau action tidak tersedia sampai capability diketahui. Server-side route check dapat mencegah protected page response dirender bagi user tanpa identity sesuai contract. Tetapi data yang sudah diberikan ke browser tidak dapat ditarik kembali oleh client guard, dan route redirect tidak melindungi API endpoint atau database row secara otomatis.\n\nSetiap protected data action memerlukan authorization pada layer yang benar: API/service server memeriksa identity and permission, and database RLS/policy dapat menegakkan row access bila architecture menggunakannya. Guard adalah defense untuk navigation and UX, bukan pengganti validation server. QA yang baik mencoba signed-out route, signed-in user tanpa permission, direct navigation, refresh, dan protected mutation pada local/staging aman, lalu memeriksa UI recovery serta server response tanpa mencoba bypass.",
    },
    {
      id: "auth-guards-example",
      type: "code-example",
      title: "Empat layer protected course settings",
      language: "ts",
      code: [
        "const courseSettingsBoundary = {",
        '  clientGuard: "reduce confusion and direct to sign-in",',
        '  serverRouteCheck: "protect route response before rendering when architecture supports it",',
        '  apiAuthorization: "verify identity and permission for every protected action",',
        '  databasePolicy: "enforce row access when RLS or equivalent policy is used",',
        "};",
      ].join("\n"),
      explanation:
        "Layer berbeda menurut project, tetapi satu layer tidak menghapus kebutuhan layer lain. Client guard membantu navigation, server route check membantu response page, API authorization melindungi action, dan database policy melindungi row access bila digunakan.",
    },
    { id: "auth-guards-coding-practice", type: "coding-practice", challengeId: "classify-course-auth-guard-boundary" },
    {
      id: "auth-guards-quick-check",
      type: "quick-check",
      question: "Apa yang harus tetap dilakukan API saat client guard sudah mengarahkan user signed-out ke sign-in?",
      options: ["Memverifikasi identity dan permission untuk setiap protected action.", "Menerima semua request karena page sudah guarded.", "Membaca isAdmin dari localStorage.", "Menghapus RLS karena route redirect."],
      correctAnswer: "Memverifikasi identity dan permission untuk setiap protected action.",
      explanation: "Route guard membantu navigation, tetapi API/data boundary tetap menegakkan authorization pada request yang diterima.",
    },
    {
      id: "auth-guards-callout",
      type: "callout",
      variant: "warning",
      title: "Redirect bukan bukti data terlindungi",
      content:
        "Jangan mengklaim feature secure hanya karena route redirect bekerja. Pastikan action dan data policy diuji pada boundary server/database sesuai architecture. Jika user melihat data sebelum redirect atau mendapat 403 sesudah page load, catat timing, route, action, status, environment, dan UI state. Escalate ke owner auth/data tanpa credential workaround.",
    },
    {
      id: "auth-guards-summary",
      type: "summary",
      points: [
        "Client guard membantu navigation dan clarity; server route check dapat menjaga page response.",
        "API/service authorization dan database policy tetap melindungi protected data/action.",
        "Satu guard tidak menggantikan enforcement lain.",
        "QA mencakup signed-out, no-permission, direct navigation, refresh, dan protected mutation.",
        "Berikutnya, Uji Kompetensi menyatukan env, token, cookie, Permission UI, dan guard boundary.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["auth-guards-intro", "auth-guards-example", "auth-guards-coding-practice", "auth-guards-quick-check", "auth-guards-callout", "auth-guards-summary"],
  },
};

export const secretsTokensPermissionsAssessmentLesson: Lesson = {
  id: "secrets-tokens-permissions-assessment",
  trackId: "frontend-engineering",
  moduleId: "secrets-tokens-permissions",
  title: "Uji Kompetensi Secrets, Tokens, and Permissions",
  slug: "secrets-tokens-permissions-assessment",
  description:
    "Checkpoint untuk mereview secret exposure, session boundary, Permission UI, dan enforcement backend secara jujur.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Mengklasifikasikan configuration public dan server-only secret",
    "Menjelaskan storage/cookie trade-off tanpa credential",
    "Mendesain Permission UI selaras dengan backend enforcement",
    "Memetakan route guard, API authorization, dan RLS/data policy",
  ],
  skillTags: ["Secrets", "Tokens", "Cookies", "Permissions", "Authorization", "Readiness Checkpoint"],
  blocks: [
    {
      id: "secrets-tokens-permissions-assessment-recap",
      type: "text",
      title: "Checkpoint: review access feature tanpa rasa aman palsu",
      content:
        "Course Admin memiliki settings page untuk editor. Team menemukan variable baru berprefix NEXT_PUBLIC_ yang tampaknya dipakai service server. App memakai cookie session, menyimpan role hint untuk UI, dan memiliki client redirect untuk learner signed-out. Pada staging, editor tanpa permission dapat membuka page tetapi mutation settings mendapat 403. Data course dikelola melalui API dan RLS policy. Team ingin memperbaiki cepat dengan mengubah role hint client serta memindahkan service configuration ke Client Component.\n\nCheckpoint ini tidak meminta kamu melihat secret value, mengubah token storage, mengedit cookie, atau membuat bypass. Petakan public versus private configuration, session evidence, Permission UI recovery, route guard scope, API/data enforcement, dan owner contract. Readiness berarti dapat menyebut tindakan frontend benar tanpa memindahkan credential atau authorization ke browser.",
    },
    { id: "secrets-tokens-permissions-assessment-quiz", type: "quiz", quizId: "secrets-tokens-permissions-assessment-quiz" },
    { id: "secrets-tokens-permissions-assessment-coding-practice", type: "coding-practice", challengeId: "diagnose-course-secrets-permission-checkpoint" },
    {
      id: "secrets-tokens-permissions-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis security boundary review untuk Course Admin settings. Klasifikasikan configuration public versus server-only, jelaskan cookie/token evidence aman, Permission UI untuk editor tanpa access, scope client/server guard, serta API/RLS authorization. Tambahkan satu QA scenario, satu pertanyaan untuk owner, satu evidence aman, dan satu tindakan browser yang tidak boleh dilakukan. Jangan menulis credential, token/session value, bypass, atau klaim enforcement yang belum diuji.",
      placeholder:
        "Variable NEXT_PUBLIC_ dapat tersedia bagi browser sehingga hanya public configuration yang boleh memakai prefix itu. Service role key, database URL, dan signing secret tetap server-only. Untuk session issue, saya mencatat domain/path/HttpOnly/Secure/SameSite tanpa cookie value, endpoint/method/status, environment, dan symptom. Editor tanpa permission mendapat read-only atau access denied; role hint client tidak mengubah 403 server. Client/server guard membantu navigation and route response, tetapi API memverifikasi action dan RLS membatasi row. Saya QA signed-out route, editor tanpa permission, refresh, dan rejected mutation di staging aman. Saya tidak menambahkan secret ke NEXT_PUBLIC_, mengubah local role, atau menyalin token ke issue.",
      minimumCharacters: 900,
      checklist: ["Membedakan public configuration dari server-only secret.", "Mencatat cookie/token evidence tanpa credential value.", "Membedakan Permission UI dari API/RLS authorization.", "Menyebut scope guard dan satu QA scenario.", "Tidak memakai bypass atau client role change sebagai enforcement."],
      modelAnswer:
        "Saya mulai dengan configuration boundary. Nilai NEXT_PUBLIC_ dapat tersedia di browser bundle, sehingga hanya app origin atau publishable configuration yang memang public yang boleh berada di sana. Service role key, database URL, signing secret, dan credential provider tetap server-only. Saya tidak menyalin value; saya mencatat nama variable, runtime pemakaian, file/component, environment, dan apakah ia muncul di bundle, log, atau response. Untuk cookie session, saya membaca domain, Path, expiry, HttpOnly, Secure, and SameSite tanpa value, lalu mencatat endpoint/method/status dan UI symptom. Editor tanpa permission menerima read-only explanation atau access denied; role hint client hanya membantu UX. Client guard membantu navigation dan server route check membantu page response, tetapi API tetap memverifikasi action dan RLS/data policy membatasi row. Saya QA signed-out direct navigation, editor tanpa permission, refresh, and settings mutation 403 di staging aman. Saya bertanya kepada owner policy mana yang mengizinkan update settings. Saya tidak menambahkan secret ke NEXT_PUBLIC_, mengubah local role, menaruh token di log, atau mencoba bypass.",
    },
    {
      id: "secrets-tokens-permissions-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca docs untuk menempatkan credential dan permission dengan benar",
      description:
        "Fokus pada public/private configuration, session behavior, cookie attributes, dan authorization policy. Abaikan token theft, bypass, cryptography internals, custom auth, dan enterprise role-model design.",
      links: [
        {
          source: "Next.js",
          title: "Environment Variables",
          url: "https://nextjs.org/docs/app/guides/environment-variables",
          focus: ["NEXT_PUBLIC_ values dapat tersedia di browser bundle.", "Server-only variable dan .env loading.", "Public build configuration versus private credential."],
          ignoreForNow: ["Advanced deployment secret management and custom build tooling."],
        },
        {
          source: "OWASP",
          title: "Authentication Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
          focus: ["Authentication versus session management.", "Sensitive account boundary and safe error communication."],
          ignoreForNow: ["Password implementation, OAuth/OIDC internals, MFA, and custom authentication design."],
        },
        {
          source: "OWASP",
          title: "Session Management Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
          focus: ["Session lifecycle and browser session considerations.", "Why session identifiers stay out of logs and URLs."],
          ignoreForNow: ["Session ID generation, hijacking techniques, and full incident response implementation."],
        },
        {
          source: "OWASP",
          title: "JSON Web Token Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html",
          focus: ["Token as security-sensitive session evidence.", "Verification belongs to trusted backend/provider boundary."],
          ignoreForNow: ["Java implementation, cryptography detail, token theft, and bypass techniques."],
        },
        {
          source: "MDN Web Docs",
          title: "Using HTTP cookies",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
          focus: ["Set-Cookie and Cookie flow.", "HttpOnly, Secure, SameSite, scope, and lifetime."],
          ignoreForNow: ["Tracking implementations and production cookie policy without owner."],
        },
        {
          source: "Supabase Docs",
          title: "Auth security",
          url: "https://supabase.com/docs/guides/auth/security",
          focus: ["Auth integration security context.", "Verified identity and server-side boundary questions."],
          ignoreForNow: ["Custom provider setup and OAuth details."],
        },
        {
          source: "Supabase Docs",
          title: "Row Level Security",
          url: "https://supabase.com/docs/guides/database/postgres/row-level-security",
          focus: ["RLS as database-level authorization.", "Why client UI does not replace table policy."],
          ignoreForNow: ["Writing policy SQL before ownership rules are reviewed."],
        },
      ],
      followUpAction:
        "Review one authenticated local or staging app. List environment variable names without values, classify public versus server-only, inspect Permission UI and one protected route, lalu QA bahwa API/RLS/backend tetap menolak action user yang tidak diizinkan. Tulis satu risk dan satu safer alternative. Jangan copy credential, token, cookie value, atau modify client state untuk bypass access.",
    },
    {
      id: "secrets-tokens-permissions-assessment-summary",
      type: "summary",
      points: [
        "Public browser configuration dan server-only secret membutuhkan naming, runtime, dan review berbeda.",
        "Token/cookie memiliki trade-off; value tidak masuk URL, log, atau issue.",
        "Permission UI dan guards meningkatkan clarity, sementara API/RLS/data policy enforce access.",
        "403 menjadi recovery UI dan evidence untuk owner, bukan browser workaround.",
        "Kamu siap melanjutkan ke File Upload and Third-Party Risk untuk menilai untrusted file, embed, dan package boundary.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["secrets-tokens-permissions-assessment-recap", "secrets-tokens-permissions-assessment-quiz", "secrets-tokens-permissions-assessment-coding-practice", "secrets-tokens-permissions-assessment-writing-practice", "secrets-tokens-permissions-assessment-documentation-bridge", "secrets-tokens-permissions-assessment-summary"],
    passingQuizScore: 70,
  },
};

export const secretsTokensPermissionsAssessmentQuiz: Quiz = {
  id: "secrets-tokens-permissions-assessment-quiz",
  lessonId: "secrets-tokens-permissions-assessment",
  title: "Uji Kompetensi Secrets, Tokens, and Permissions",
  passingScore: 70,
  questions: [
    {
      id: "public-env",
      type: "multiple-choice",
      question: "Apa arti NEXT_PUBLIC_ pada environment variable Next.js?",
      options: ["Value dapat tersedia di browser bundle sehingga hanya public configuration yang boleh memakainya.", "Value otomatis menjadi service role key.", "Value hanya dibaca database.", "Value tidak pernah masuk browser."],
      correctAnswer: "Value dapat tersedia di browser bundle sehingga hanya public configuration yang boleh memakainya.",
      explanation: "Prefix public tidak membuat secret aman untuk browser.",
    },
    {
      id: "secret-boundary",
      type: "multiple-choice",
      question: "Mana yang harus tetap server-only?",
      options: ["Service role key atau database URL.", "App origin yang memang public.", "Label button UI.", "Course title dari API."],
      correctAnswer: "Service role key atau database URL.",
      explanation: "Credential privileged tidak boleh masuk browser bundle, public response, analytics, atau source control.",
    },
    {
      id: "token-tradeoff",
      type: "multiple-choice",
      question: "Pernyataan mana yang tepat tentang token/session storage?",
      options: ["Setiap pilihan memiliki trade-off dan perlu dipilih bersama architecture serta backend enforcement.", "Persistent browser storage selalu aman untuk token.", "HttpOnly cookie menghapus semua concern.", "Decode token client adalah authorization check."],
      correctAnswer: "Setiap pilihan memiliki trade-off dan perlu dipilih bersama architecture serta backend enforcement.",
      explanation: "Cookie, memory, dan persistent storage mempunyai property berbeda. Server/provider tetap memverifikasi identity dan permission.",
    },
    {
      id: "cookie-http-only",
      type: "multiple-choice",
      question: "Apa fungsi HttpOnly pada cookie session?",
      options: ["Membatasi JavaScript browser agar tidak membaca value cookie.", "Membuat cookie menjadi authorization policy.", "Mengirim cookie ke semua origin.", "Menghapus kebutuhan HTTPS."],
      correctAnswer: "Membatasi JavaScript browser agar tidak membaca value cookie.",
      explanation: "HttpOnly hanya satu attribute; Secure, SameSite, server validation, dan authorization tetap berperan.",
    },
    {
      id: "permission-ui",
      type: "multiple-choice",
      question: "Apa peran utama Permission UI?",
      options: ["Membuat capability dan recovery user jelas, sementara backend menegakkan permission.", "Menggantikan API authorization dengan hidden button.", "Membuat role client sebagai source of truth.", "Membolehkan data tanpa policy server."],
      correctAnswer: "Membuat capability dan recovery user jelas, sementara backend menegakkan permission.",
      explanation: "Permission UI meningkatkan experience. API/service dan RLS/data policy tetap memeriksa access pada request sebenarnya.",
    },
    {
      id: "guard-boundary",
      type: "multiple-choice",
      question: "Apa yang tidak dapat dijamin client auth guard sendirian?",
      options: ["Authorization setiap protected API/data action.", "Arah navigasi menuju sign-in.", "Loading state session.", "Copy read-only UI."],
      correctAnswer: "Authorization setiap protected API/data action.",
      explanation: "Client guard membantu UX/navigation. Server/API/database boundary perlu memeriksa identity dan permission.",
    },
  ],
};

export const classifyCourseEnvironmentBoundariesChallenge: CodingChallenge = {
  id: "classify-course-environment-boundaries",
  lessonId: "env-leakage",
  title: "Classify course environment boundaries",
  description: "Klasifikasikan configuration tanpa memakai value credential atau runtime environment.",
  instructions: [
    "Fokus di tab TS.",
    "Buat environmentBoundary dengan dua NEXT_PUBLIC_ variable sebagai public browser configuration.",
    "Nyatakan SUPABASE_SERVICE_ROLE_KEY dan DATABASE_URL sebagai server-only secret.",
    "Jangan memakai value environment nyata atau process.env.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...secretsPermissionsPracticeCode,
    ts: ["const environmentBoundary = {", "  // Klasifikasikan nama variable, bukan valuenya.", "};"].join("\n"),
  },
  solutionCode: {
    ...secretsPermissionsPracticeCode,
    ts: [
      "const environmentBoundary = {",
      '  NEXT_PUBLIC_APP_ORIGIN: "public browser configuration",',
      '  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "public browser configuration",',
      '  SUPABASE_SERVICE_ROLE_KEY: "server-only secret",',
      '  DATABASE_URL: "server-only secret",',
      "};",
    ].join("\n"),
  },
  checklist: ["Public variable dibedakan dari secret.", "Tidak ada value credential.", "Service role dan database URL tetap server-only.", "Preview tidak membutuhkan runtime environment."],
  validation: {
    mode: "ts",
    checks: [
      { id: "app-origin", label: "App origin diklasifikasikan public.", type: "contains", valueIncludes: 'NEXT_PUBLIC_APP_ORIGIN: "public browser configuration"' },
      { id: "publishable-key", label: "Publishable key diklasifikasikan public.", type: "contains", valueIncludes: 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "public browser configuration"' },
      { id: "service-role", label: "Service role tetap server-only.", type: "contains", valueIncludes: 'SUPABASE_SERVICE_ROLE_KEY: "server-only secret"' },
      { id: "database-url", label: "Database URL tetap server-only.", type: "contains", valueIncludes: 'DATABASE_URL: "server-only secret"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target environment boundary",
    description: "Cek otomatis membaca klasifikasi TypeScript. Preview tidak membaca process.env, mengakses secret, atau menghubungkan service.",
    lines: ["Public configuration dipisahkan dari server-only secret.", "Tidak ada credential nyata di practice.", "Browser bundle tidak menerima privileged configuration."],
  },
  skillTags: ["Environment Variables", "Next.js", "Secrets Management", "TypeScript"],
};

export const explainCourseTokenStorageTradeoffsChallenge: CodingChallenge = {
  id: "explain-course-token-storage-tradeoffs",
  lessonId: "token-storage",
  title: "Explain course token storage trade-offs",
  description: "Nyatakan trade-off storage tanpa membuat atau menyimpan token.",
  instructions: [
    "Fokus di tab TS.",
    "Buat sessionStorageTradeoffs untuk httpOnlyCookie, inMemory, dan persistentBrowserStorage.",
    "Nyatakan HttpOnly cookie browser-managed dan JavaScript cannot read value.",
    "Nyatakan persistent browser storage JavaScript-readable dan memerlukan explicit risk review.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...secretsPermissionsPracticeCode,
    ts: ["const sessionStorageTradeoffs = {", "  // Jelaskan property tanpa token.", "};"].join("\n"),
  },
  solutionCode: {
    ...secretsPermissionsPracticeCode,
    ts: [
      "const sessionStorageTradeoffs = {",
      '  httpOnlyCookie: "browser-managed; JavaScript cannot read value; needs CSRF-aware server contract",',
      '  inMemory: "clears on refresh; avoids persistent browser token storage",',
      '  persistentBrowserStorage: "JavaScript-readable; requires explicit risk review",',
      "};",
    ].join("\n"),
  },
  checklist: ["Cookie, memory, dan persistent storage dibedakan.", "Tidak ada token value.", "Server contract disebut pada cookie context.", "Tidak ada storage recommendation universal."],
  validation: {
    mode: "ts",
    checks: [
      { id: "cookie", label: "HttpOnly cookie trade-off tersedia.", type: "contains", valueIncludes: 'httpOnlyCookie: "browser-managed; JavaScript cannot read value; needs CSRF-aware server contract"' },
      { id: "memory", label: "In-memory trade-off tersedia.", type: "contains", valueIncludes: 'inMemory: "clears on refresh; avoids persistent browser token storage"' },
      { id: "persistent", label: "Persistent storage trade-off tersedia.", type: "contains", valueIncludes: 'persistentBrowserStorage: "JavaScript-readable; requires explicit risk review"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target token storage trade-off",
    description: "Cek otomatis membaca reasoning TypeScript. Preview tidak membuat token, cookie, browser storage, atau auth runtime.",
    lines: ["Cookie, memory, dan persistent storage memiliki property berbeda.", "Storage choice tetap membutuhkan architecture serta risk review.", "Token value tidak masuk practice atau UI."],
  },
  skillTags: ["Tokens", "Sessions", "Cookies", "Browser Storage", "TypeScript"],
};

export const readCourseSecureCookieContractChallenge: CodingChallenge = {
  id: "read-course-secure-cookie-contract",
  lessonId: "permission-secure-cookies",
  title: "Read course secure cookie contract",
  description: "Representasikan attributes session cookie tanpa membuat cookie browser.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseSessionCookie dengan name __Host-session, path /, httpOnly true, secure true, sameSite Lax, dan maxAgeSeconds 3600.",
    "Gunakan name dan attributes saja; jangan memakai cookie value, document.cookie, atau localStorage.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...secretsPermissionsPracticeCode,
    ts: ["const courseSessionCookie = {", "  // Baca contract cookie tanpa value.", "};"].join("\n"),
  },
  solutionCode: {
    ...secretsPermissionsPracticeCode,
    ts: [
      "const courseSessionCookie = {",
      '  name: "__Host-session",',
      '  path: "/",',
      "  httpOnly: true,",
      "  secure: true,",
      '  sameSite: "Lax",',
      "  maxAgeSeconds: 3600,",
      "};",
    ].join("\n"),
  },
  checklist: ["Cookie name tidak menyertakan value.", "HttpOnly, Secure, SameSite, scope, dan lifetime terlihat.", "Server/provider owner header nyata.", "Tidak ada browser storage API."],
  validation: {
    mode: "ts",
    checks: [
      { id: "name", label: "Cookie name tersedia.", type: "contains", valueIncludes: 'name: "__Host-session"' },
      { id: "path", label: "Path root tersedia.", type: "contains", valueIncludes: 'path: "/"' },
      { id: "http-only", label: "HttpOnly tersedia.", type: "contains", valueIncludes: "httpOnly: true" },
      { id: "secure", label: "Secure tersedia.", type: "contains", valueIncludes: "secure: true" },
      { id: "same-site", label: "SameSite Lax tersedia.", type: "contains", valueIncludes: 'sameSite: "Lax"' },
      { id: "max-age", label: "Max age tersedia.", type: "contains", valueIncludes: "maxAgeSeconds: 3600" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target secure cookie reading",
    description: "Cek otomatis membaca attributes TypeScript. Preview tidak menetapkan cookie, membaca browser storage, atau memverifikasi deployment policy.",
    lines: ["Cookie value tidak masuk review.", "Scope, HttpOnly, Secure, SameSite, dan lifetime dapat dicatat.", "Server/provider tetap menetapkan session header nyata."],
  },
  skillTags: ["Cookies", "HttpOnly", "Secure", "SameSite", "TypeScript"],
};

export const designCoursePermissionUiBoundaryChallenge: CodingChallenge = {
  id: "design-course-permission-ui-boundary",
  lessonId: "permission-ui",
  title: "Design course permission UI boundary",
  description: "Map clarity UI dan server enforcement pada capability editor tanpa client role access control.",
  instructions: [
    "Fokus di tab TS.",
    "Buat coursePermissionUi dengan canEditCourse show edit action dan cannotEditCourse show read-only explanation or request-access path.",
    "Nyatakan clientRoleHint helps UI decisions only.",
    "Nyatakan serverEnforcement verify permission for every protected data action.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...secretsPermissionsPracticeCode,
    ts: ["const coursePermissionUi = {", "  // Pisahkan clarity UI dan enforcement.", "};"].join("\n"),
  },
  solutionCode: {
    ...secretsPermissionsPracticeCode,
    ts: [
      "const coursePermissionUi = {",
      '  canEditCourse: "show edit action",',
      '  cannotEditCourse: "show read-only explanation or request-access path",',
      '  clientRoleHint: "helps UI decisions only",',
      '  serverEnforcement: "verify permission for every protected data action",',
      "};",
    ].join("\n"),
  },
  checklist: ["UI memberi action atau explanation relevan.", "Client role hanya UX hint.", "Server checks protected action.", "Tidak ada role bypass."],
  validation: {
    mode: "ts",
    checks: [
      { id: "edit", label: "Edit action tersedia.", type: "contains", valueIncludes: 'canEditCourse: "show edit action"' },
      { id: "read-only", label: "Read-only recovery tersedia.", type: "contains", valueIncludes: 'cannotEditCourse: "show read-only explanation or request-access path"' },
      { id: "client-hint", label: "Client role dibatasi sebagai UI hint.", type: "contains", valueIncludes: 'clientRoleHint: "helps UI decisions only"' },
      { id: "server", label: "Server enforcement tersedia.", type: "contains", valueIncludes: 'serverEnforcement: "verify permission for every protected data action"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Permission UI boundary",
    description: "Cek otomatis membaca mapping TypeScript. Preview tidak mengubah role, mengirim protected action, atau memverifikasi server permission.",
    lines: ["UI memberi action atau access explanation.", "Client role hint bukan source of truth.", "Server/data policy tetap enforce permission."],
  },
  skillTags: ["Permissions", "Authorization", "UX", "RLS", "TypeScript"],
};

export const classifyCourseAuthGuardBoundaryChallenge: CodingChallenge = {
  id: "classify-course-auth-guard-boundary",
  lessonId: "auth-guards",
  title: "Classify course auth guard boundary",
  description: "Pisahkan client guard, server route check, API authorization, dan database policy pada protected settings.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseSettingsBoundary dengan clientGuard reduce confusion and direct to sign-in.",
    "Nyatakan serverRouteCheck protect route response before rendering when architecture supports it.",
    "Tambahkan apiAuthorization dan databasePolicy untuk protected action serta row access.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...secretsPermissionsPracticeCode,
    ts: ["const courseSettingsBoundary = {", "  // Map layer protection tanpa runtime guard.", "};"].join("\n"),
  },
  solutionCode: {
    ...secretsPermissionsPracticeCode,
    ts: [
      "const courseSettingsBoundary = {",
      '  clientGuard: "reduce confusion and direct to sign-in",',
      '  serverRouteCheck: "protect route response before rendering when architecture supports it",',
      '  apiAuthorization: "verify identity and permission for every protected action",',
      '  databasePolicy: "enforce row access when RLS or equivalent policy is used",',
      "};",
    ].join("\n"),
  },
  checklist: ["Client guard dibatasi pada navigation UX.", "Server route check dan API authorization dibedakan.", "Database policy disebut untuk row access.", "Redirect tidak dianggap melindungi semua data."],
  validation: {
    mode: "ts",
    checks: [
      { id: "client", label: "Client guard tersedia.", type: "contains", valueIncludes: 'clientGuard: "reduce confusion and direct to sign-in"' },
      { id: "server-route", label: "Server route check tersedia.", type: "contains", valueIncludes: 'serverRouteCheck: "protect route response before rendering when architecture supports it"' },
      { id: "api", label: "API authorization tersedia.", type: "contains", valueIncludes: 'apiAuthorization: "verify identity and permission for every protected action"' },
      { id: "database", label: "Database policy tersedia.", type: "contains", valueIncludes: 'databasePolicy: "enforce row access when RLS or equivalent policy is used"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target auth guard boundary",
    description: "Cek otomatis membaca reasoning TypeScript. Preview tidak menjalankan guard, login, API request, atau RLS policy.",
    lines: ["Client guard membantu navigation.", "API authorization memeriksa protected action.", "Database policy dapat enforce row access."],
  },
  skillTags: ["Auth Guards", "Authorization", "Route Protection", "RLS", "TypeScript"],
};

export const diagnoseCourseSecretsPermissionCheckpointChallenge: CodingChallenge = {
  id: "diagnose-course-secrets-permission-checkpoint",
  lessonId: "secrets-tokens-permissions-assessment",
  title: "Diagnose course secrets permission checkpoint",
  description: "Map secret/permission symptom ke safer next step tanpa credential atau client role change.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type SecurityBoundaryIssue untuk public-secret, session-symptom, permission-denied, dan protected-action.",
    "Map issue ke keep-server-only, inspect-safe-session-evidence, show-access-denied-and-escalate-policy, dan verify-api-and-data-authorization.",
    "Jangan menulis credential, token value, role override, atau bypass.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...secretsPermissionsPracticeCode,
    ts: ['type SecurityBoundaryIssue = "public-secret";', "", "function getSecurityNextStep(issue: SecurityBoundaryIssue) {", '  return "keep-server-only";', "}"].join("\n"),
  },
  solutionCode: {
    ...secretsPermissionsPracticeCode,
    ts: [
      'type SecurityBoundaryIssue = "public-secret" | "session-symptom" | "permission-denied" | "protected-action";',
      "",
      "function getSecurityNextStep(issue: SecurityBoundaryIssue) {",
      '  if (issue === "public-secret") return "keep-server-only";',
      '  if (issue === "session-symptom") return "inspect-safe-session-evidence";',
      '  if (issue === "permission-denied") return "show-access-denied-and-escalate-policy";',
      '  return "verify-api-and-data-authorization";',
      "}",
    ].join("\n"),
  },
  checklist: ["Secret tetap server-only.", "Session diagnosis memakai evidence aman.", "Permission denial memberi recovery serta escalation.", "Protected action kembali ke API/data authorization."],
  validation: {
    mode: "ts",
    checks: [
      { id: "issue-type", label: "Security boundary issue union lengkap.", type: "contains", valueIncludes: '"public-secret" | "session-symptom" | "permission-denied" | "protected-action"' },
      { id: "secret", label: "Secret tetap server-only.", type: "contains", valueIncludes: 'issue === "public-secret") return "keep-server-only"' },
      { id: "session", label: "Session memakai evidence aman.", type: "contains", valueIncludes: 'issue === "session-symptom") return "inspect-safe-session-evidence"' },
      { id: "permission", label: "Permission denial memiliki recovery.", type: "contains", valueIncludes: 'issue === "permission-denied") return "show-access-denied-and-escalate-policy"' },
      { id: "action", label: "Protected action kembali ke authorization.", type: "contains", valueIncludes: 'return "verify-api-and-data-authorization"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target secrets and permission diagnosis",
    description: "Cek otomatis membaca mapper TypeScript. Preview tidak membaca environment, cookie, token, role, API, atau database policy.",
    lines: ["Secret, session, permission, dan protected action dipisahkan.", "Frontend memberi recovery serta evidence aman.", "Authorization tetap berada pada API/data boundary."],
  },
  skillTags: ["Secrets", "Tokens", "Permissions", "Authorization", "Assessment", "TypeScript"],
};
