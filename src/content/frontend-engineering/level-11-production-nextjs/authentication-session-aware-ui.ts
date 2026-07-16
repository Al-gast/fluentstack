import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const nextAuthPracticePreviewCode = {
  html: "",
  css: "",
  js: "",
};

export const authenticationSessionAwareUiModule: Module = {
  id: "nextjs-authentication-session-aware-ui",
  trackId: "frontend-engineering",
  title: "Authentication and Session-Aware UI",
  slug: "authentication-session-aware-ui",
  description:
    "Mendesain UI login dan register, navigation berbasis session, akses route yang tepat, serta error state auth yang membantu user tanpa membocorkan detail sensitif.",
  order: 35,
  lessonIds: [
    "nextjs-login-register-ux",
    "nextjs-logout-session-aware-nav",
    "nextjs-public-protected-routes",
    "nextjs-auth-error-states",
    "nextjs-authentication-session-aware-ui-assessment",
  ],
  estimatedHours: 6,
  skillTags: [
    "Next.js",
    "Authentication",
    "Sessions",
    "Authorization",
    "Route Protection",
    "UX",
  ],
};

export const nextjsLoginRegisterUxLesson: Lesson = {
  id: "nextjs-login-register-ux",
  trackId: "frontend-engineering",
  moduleId: "nextjs-authentication-session-aware-ui",
  title: "Login/Register UX",
  slug: "nextjs-login-register-ux",
  description:
    "Mendesain form login dan register yang menjelaskan status submit, kesalahan, dan langkah berikutnya dengan jelas.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan authentication, session management, dan authorization",
    "Menyusun field serta label form login yang mudah dipahami",
    "Menampilkan status submitting dan error tanpa membuat user menebak",
    "Menentukan kapan login dan register perlu dipisahkan",
  ],
  skillTags: ["Next.js", "Authentication", "Forms", "UX", "Accessibility"],
  blocks: [
    {
      id: "nextjs-login-register-ux-intro",
      type: "text",
      title: "Auth dimulai dari alur yang dapat dipahami user",
      content:
        "Authentication membuktikan identitas user, session management menyimpan keadaan user tersebut di antara request, dan authorization menentukan route atau data yang boleh diakses. Tiga hal ini berhubungan, tetapi tidak sama. Pada module ini, mulailah dari UI: user harus tahu apakah ia sedang masuk, sedang mendaftar, menunggu respons, atau perlu memperbaiki input.\n\nJangan membuat satu form dengan tombol yang ambigu seperti \"Lanjutkan\" tanpa konteks. Untuk flow email/password sederhana, pisahkan tujuan login dan register dengan heading, tombol, serta link perpindahan yang jelas. Jika register memerlukan konfirmasi email, beri tahu user bahwa langkah berikutnya terjadi di inbox, bukan membuatnya mengira akun langsung aktif.",
    },
    {
      id: "nextjs-login-register-ux-example",
      type: "code-example",
      title: "Struktur login form dengan state yang terlihat",
      language: "tsx",
      code: `type LoginFormState = {
  status: "idle" | "submitting" | "error";
  message?: string;
};

const state: LoginFormState = {
  status: "error",
  message: "Email atau password belum sesuai. Coba periksa kembali.",
};

export default function LoginForm() {
  const isSubmitting = state.status === "submitting";

  return (
    <form aria-describedby={state.message ? "login-error" : undefined}>
      <h1>Masuk ke akun</h1>

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
      />

      {state.message ? (
        <p id="login-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Memeriksa akun..." : "Masuk"}
      </button>
    </form>
  );
}`,
      explanation:
        "Contoh ini memisahkan tiga state yang user perlu lihat: idle, submitting, dan error. Label terhubung ke input lewat htmlFor dan id. Error diberi role alert sehingga perubahan penting tidak hanya bergantung pada warna. Dalam app nyata, state dapat datang dari Server Action atau auth provider; contoh ini hanya menunjukkan struktur UI, bukan pemeriksaan password di browser.",
    },
    {
      id: "nextjs-login-register-ux-coding-practice",
      type: "coding-practice",
      challengeId: "build-auth-login-form-states",
    },
    {
      id: "nextjs-login-register-ux-quick-check",
      type: "quick-check",
      question:
        "Apa tindakan paling membantu saat login request sedang diproses?",
      options: [
        "Nonaktifkan tombol submit dan jelaskan bahwa akun sedang diperiksa",
        "Biarkan tombol bisa ditekan berulang kali tanpa perubahan UI",
        "Langsung tampilkan password user di halaman untuk membantu debugging",
        "Sembunyikan seluruh form tanpa status apa pun",
      ],
      correctAnswer:
        "Nonaktifkan tombol submit dan jelaskan bahwa akun sedang diperiksa",
      explanation:
        "Status submitting mencegah submit berulang dan memberi konteks pada user. Pesan singkat seperti \"Memeriksa akun...\" lebih membantu daripada tampilan yang diam.",
    },
    {
      id: "nextjs-login-register-ux-callout",
      type: "callout",
      variant: "important",
      title: "Form bukan tempat menyimpan atau memeriksa password sendiri",
      content:
        "UI hanya menangkap input dan menampilkan state. Pemeriksaan kredensial, pembuatan session, dan penyimpanan cookie harus ditangani di server atau oleh auth provider. Jangan menyimpan password di localStorage, menulis password ke console, atau membuat validasi client sebagai satu-satunya pemeriksaan keamanan.",
    },
    {
      id: "nextjs-login-register-ux-summary",
      type: "summary",
      points: [
        "Authentication, session management, dan authorization memiliki peran yang berbeda.",
        "Login/register UX harus menjelaskan tujuan form, state submit, dan langkah setelah berhasil atau gagal.",
        "Label, autocomplete, dan error yang jelas membuat auth form lebih mudah digunakan.",
        "Password dan session tidak diproses sebagai state browser biasa.",
        "Berikutnya, kamu akan memakai session untuk mengubah navigation yang dilihat user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-login-register-ux-intro",
      "nextjs-login-register-ux-example",
      "nextjs-login-register-ux-coding-practice",
      "nextjs-login-register-ux-quick-check",
      "nextjs-login-register-ux-callout",
      "nextjs-login-register-ux-summary",
    ],
  },
};

export const nextjsLogoutSessionAwareNavLesson: Lesson = {
  id: "nextjs-logout-session-aware-nav",
  trackId: "frontend-engineering",
  moduleId: "nextjs-authentication-session-aware-ui",
  title: "Logout and Session-Aware Nav",
  slug: "nextjs-logout-session-aware-nav",
  description:
    "Menampilkan navigation yang berbeda untuk user signed out dan signed in, serta memberi logout action yang jelas.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menentukan informasi session minimum yang dibutuhkan navigation",
    "Menampilkan login link saat user belum memiliki session",
    "Menampilkan identitas ringan dan logout action saat user memiliki session",
    "Menjelaskan mengapa logout harus menghapus session di server",
  ],
  skillTags: ["Next.js", "Sessions", "Navigation", "Logout", "Server Components"],
  blocks: [
    {
      id: "nextjs-logout-session-aware-nav-intro",
      type: "text",
      title: "Navigation adalah bukti paling cepat bahwa UI memahami session",
      content:
        "Satu navigation dapat menampilkan dua keadaan yang berbeda. User signed out memerlukan jalan masuk yang jelas, misalnya link Masuk dan Daftar. User signed in memerlukan orientasi: nama atau label akun singkat, link ke dashboard, serta tindakan Keluar. Jangan menampilkan Masuk dan Keluar bersamaan tanpa alasan karena user tidak tahu state mana yang sebenarnya berlaku.\n\nSession-aware UI tidak berarti seluruh layout harus menjadi Client Component. Page atau layout server dapat membaca ringkasan session dari server, lalu meneruskannya ke component navigation. Jadikan batas client hanya bila navigation benar-benar membutuhkan interaksi browser yang tidak dapat ditangani oleh form action atau link biasa.",
    },
    {
      id: "nextjs-logout-session-aware-nav-example",
      type: "code-example",
      title: "Navigation yang membaca ringkasan session",
      language: "tsx",
      code: `type SessionSummary = {
  userName: string;
} | null;

type AppNavigationProps = {
  session: SessionSummary;
};

export default function AppNavigation({ session }: AppNavigationProps) {
  return (
    <nav aria-label="Navigation utama">
      <a href="/">FluentStack</a>

      {session ? (
        <>
          <a href="/dashboard">Halo, {session.userName}</a>
          <form action="/logout">
            <button type="submit">Keluar</button>
          </form>
        </>
      ) : (
        <>
          <a href="/login">Masuk</a>
          <a href="/register">Daftar</a>
        </>
      )}
    </nav>
  );
}`,
      explanation:
        "SessionSummary hanya membawa nama untuk kebutuhan navigation, bukan seluruh object user atau token. Saat session bernilai null, navigation menawarkan Masuk dan Daftar. Saat ada session, navigation menawarkan dashboard dan form logout. Target /logout pada contoh adalah placeholder struktur; app nyata perlu Server Action atau Route Handler yang menghapus session di server lalu redirect ke route public.",
    },
    {
      id: "nextjs-logout-session-aware-nav-coding-practice",
      type: "coding-practice",
      challengeId: "build-session-aware-app-navigation",
    },
    {
      id: "nextjs-logout-session-aware-nav-quick-check",
      type: "quick-check",
      question:
        "Data mana yang cukup untuk personalisasi navigation sederhana?",
      options: [
        "Ringkasan aman seperti userName yang memang akan ditampilkan",
        "Password user agar tombol Keluar dapat bekerja",
        "Seluruh token session yang dirender ke browser",
        "Riwayat seluruh login user sejak akun dibuat",
      ],
      correctAnswer:
        "Ringkasan aman seperti userName yang memang akan ditampilkan",
      explanation:
        "Navigation biasanya hanya memerlukan informasi kecil untuk orientasi. Jangan meneruskan password, raw token, atau data sensitif hanya karena component ingin menampilkan sapaan.",
    },
    {
      id: "nextjs-logout-session-aware-nav-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Menghapus tampilan bukan berarti logout",
      content:
        "Mengubah state React agar nama user hilang hanya mengubah tampilan saat ini. Logout yang benar harus meminta server atau auth provider menghapus atau membatalkan session, kemudian UI membaca keadaan baru dan mengarahkan user ke route yang sesuai. Jangan menganggap tombol yang menyembunyikan menu sebagai logout.",
    },
    {
      id: "nextjs-logout-session-aware-nav-summary",
      type: "summary",
      points: [
        "Navigation signed out dan signed in harus menampilkan tindakan yang berbeda dan konsisten.",
        "Teruskan hanya ringkasan session yang diperlukan UI.",
        "Logout perlu menghapus session pada server atau auth provider, bukan hanya state visual.",
        "Server Component dapat tetap merender navigation berbasis session.",
        "Berikutnya, kamu akan memutuskan route mana yang boleh dibuka tanpa session.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-logout-session-aware-nav-intro",
      "nextjs-logout-session-aware-nav-example",
      "nextjs-logout-session-aware-nav-coding-practice",
      "nextjs-logout-session-aware-nav-quick-check",
      "nextjs-logout-session-aware-nav-callout",
      "nextjs-logout-session-aware-nav-summary",
    ],
  },
};

export const nextjsPublicProtectedRoutesLesson: Lesson = {
  id: "nextjs-public-protected-routes",
  trackId: "frontend-engineering",
  moduleId: "nextjs-authentication-session-aware-ui",
  title: "Public vs Protected Routes",
  slug: "nextjs-public-protected-routes",
  description:
    "Memetakan route public dan protected, lalu memahami redirect awal tanpa menganggapnya sebagai satu-satunya pemeriksaan keamanan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan route public dan protected berdasarkan tujuan user",
    "Menentukan redirect untuk user tanpa session",
    "Memahami peran proxy.ts sebagai pemeriksaan awal yang opsional",
    "Menjelaskan mengapa authorization perlu diperiksa dekat data atau action",
  ],
  skillTags: ["Next.js", "Routes", "Authorization", "Proxy", "Redirects"],
  blocks: [
    {
      id: "nextjs-public-protected-routes-intro",
      type: "text",
      title: "Tentukan akses route sebelum menulis redirect",
      content:
        "Route public dapat dibuka tanpa session, misalnya landing page, login, register, dan halaman bantuan. Route protected membutuhkan session, misalnya dashboard pribadi, pengaturan akun, atau riwayat belajar. Tuliskan keputusan ini sebagai route map terlebih dahulu. Cara ini mencegah redirect tersebar di banyak component dan membuat product behavior lebih mudah dibicarakan bersama tim.\n\nUntuk app Next.js modern, proxy.ts dapat melakukan pemeriksaan awal dan redirect cepat berdasarkan session cookie. Namun Proxy bukan satu-satunya pertahanan data. Page, Server Action, Route Handler, atau data access layer tetap perlu memeriksa authorization di dekat data atau aksi yang dilindungi. User yang berhasil melewati navigation tidak otomatis berhak membaca data milik user lain.",
    },
    {
      id: "nextjs-public-protected-routes-example",
      type: "code-example",
      title: "Redirect awal untuk dashboard yang protected",
      language: "tsx",
      code: `// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/settings"];

export function proxy(request: NextRequest) {
  const hasSession = request.cookies.has("session");
  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute && !hasSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};`,
      explanation:
        "Contoh ini melakukan redirect awal bila cookie session belum ada. Pada Next.js saat ini, convention bernama proxy.ts; middleware telah diganti namanya. Gunakan pola ini untuk orientasi route, tetapi jangan menganggap keberadaan cookie sebagai keputusan authorization akhir. Saat membaca data atau menjalankan action sensitif, verifikasi session dan hak akses kembali di server.",
    },
    {
      id: "nextjs-public-protected-routes-coding-practice",
      type: "coding-practice",
      challengeId: "plan-auth-route-access-map",
    },
    {
      id: "nextjs-public-protected-routes-quick-check",
      type: "quick-check",
      question:
        "Pernyataan mana yang paling tepat tentang route protection?",
      options: [
        "Proxy dapat membantu redirect awal, tetapi authorization tetap perlu dicek dekat data atau action",
        "Jika navigation menyembunyikan link dashboard, data dashboard sudah aman",
        "Client-side redirect adalah satu-satunya pemeriksaan yang diperlukan",
        "Setiap route harus public agar user tidak mendapat error",
      ],
      correctAnswer:
        "Proxy dapat membantu redirect awal, tetapi authorization tetap perlu dicek dekat data atau action",
      explanation:
        "Redirect route membantu pengalaman user, tetapi data dan action sensitif membutuhkan pemeriksaan server-side yang lebih dekat dengan sumber data atau operasi tersebut.",
    },
    {
      id: "nextjs-public-protected-routes-security-callout",
      type: "callout",
      variant: "warning",
      title: "NEXT_PUBLIC_ berarti nilai dapat dilihat browser",
      content:
        "Di Next.js, environment variable dengan prefix NEXT_PUBLIC_ dibundel ke JavaScript browser. Gunakan prefix ini hanya untuk nilai yang memang dirancang public, seperti project URL atau publishable key sesuai dokumentasi provider. Jangan memberi prefix ini pada session secret, service role key, password, atau token server-only. File .env.local juga tidak seharusnya di-commit.",
    },
    {
      id: "nextjs-public-protected-routes-summary",
      type: "summary",
      points: [
        "Route public dan protected perlu dipetakan berdasarkan kebutuhan akses user.",
        "User tanpa session biasanya diarahkan dari route protected ke login.",
        "proxy.ts dapat membantu pemeriksaan redirect awal pada Next.js modern.",
        "Authorization dekat data atau action tetap diperlukan untuk keamanan sebenarnya.",
        "Berikutnya, kamu akan merancang pesan saat auth flow tidak dapat melanjutkan seperti yang diharapkan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-public-protected-routes-intro",
      "nextjs-public-protected-routes-example",
      "nextjs-public-protected-routes-coding-practice",
      "nextjs-public-protected-routes-quick-check",
      "nextjs-public-protected-routes-security-callout",
      "nextjs-public-protected-routes-summary",
    ],
  },
};

export const nextjsAuthErrorStatesLesson: Lesson = {
  id: "nextjs-auth-error-states",
  trackId: "frontend-engineering",
  moduleId: "nextjs-authentication-session-aware-ui",
  title: "Auth Error States",
  slug: "nextjs-auth-error-states",
  description:
    "Menerjemahkan kegagalan login, konfirmasi email, session, dan akses menjadi pesan serta tindakan yang jelas untuk user.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan error kredensial, email belum dikonfirmasi, session berakhir, dan akses ditolak",
    "Menulis pesan error yang membantu tanpa membocorkan detail provider",
    "Menghubungkan setiap error dengan tindakan pemulihan yang tepat",
    "Menampilkan perubahan error sebagai informasi penting bagi assistive technology",
  ],
  skillTags: ["Next.js", "Authentication", "Error States", "UX", "Accessibility"],
  blocks: [
    {
      id: "nextjs-auth-error-states-intro",
      type: "text",
      title: "Pesan auth harus menjelaskan keadaan dan tindakan berikutnya",
      content:
        "Auth error bukan satu keadaan umum. Email atau password yang tidak cocok membutuhkan kesempatan mencoba lagi. Email yang belum dikonfirmasi membutuhkan arahan membuka inbox atau mengirim ulang email. Session yang berakhir membutuhkan link Masuk. Akses yang ditolak membutuhkan penjelasan bahwa route atau data tersebut tidak tersedia untuk akun saat ini.\n\nHindari meneruskan raw error dari provider ke halaman. Pesan teknis dapat membingungkan user dan kadang membocorkan detail yang tidak diperlukan. Simpan detail yang aman untuk developer melalui logging server-side, lalu tampilkan copy yang spesifik dan tenang di UI. Error yang muncul setelah submit juga harus dapat dikenali tanpa mengandalkan warna merah saja.",
    },
    {
      id: "nextjs-auth-error-states-example",
      type: "code-example",
      title: "Peta pesan auth yang spesifik",
      language: "tsx",
      code: `type AuthErrorCode =
  | "invalid_credentials"
  | "email_unconfirmed"
  | "session_expired"
  | "forbidden";

const authErrorMessage: Record<AuthErrorCode, string> = {
  invalid_credentials: "Email atau password belum sesuai. Coba periksa kembali.",
  email_unconfirmed: "Buka inbox untuk mengonfirmasi email sebelum masuk.",
  session_expired: "Sesi kamu berakhir. Masuk kembali untuk melanjutkan.",
  forbidden: "Akun ini belum memiliki akses ke halaman tersebut.",
};

export default function AuthErrorMessage({
  code,
}: {
  code: AuthErrorCode;
}) {
  return <p role="alert">{authErrorMessage[code]}</p>;
}`,
      explanation:
        "Error code internal dipetakan ke pesan yang user dapat tindak lanjuti. Invalid credentials tidak perlu menyebut apakah email tertentu terdaftar. Session expired memberi jalan untuk masuk lagi, sedangkan forbidden tidak mengarahkan user mencoba login berulang kali. role alert memberi tahu teknologi bantu bahwa pesan penting baru muncul.",
    },
    {
      id: "nextjs-auth-error-states-coding-practice",
      type: "coding-practice",
      challengeId: "write-helpful-auth-error-state-map",
    },
    {
      id: "nextjs-auth-error-states-quick-check",
      type: "quick-check",
      question:
        "Pesan mana yang paling tepat untuk session yang sudah tidak berlaku?",
      options: [
        "Sesi kamu berakhir. Masuk kembali untuk melanjutkan.",
        "Internal token refresh exception: null payload.",
        "Kamu salah dan tidak boleh melanjutkan.",
        "Terjadi error.",
      ],
      correctAnswer:
        "Sesi kamu berakhir. Masuk kembali untuk melanjutkan.",
      explanation:
        "Pesan yang baik menyebut keadaan dengan bahasa yang dipahami user dan memberi tindakan berikutnya. Hindari raw error teknis, nada menyalahkan, atau pesan terlalu umum.",
    },
    {
      id: "nextjs-auth-error-states-callout",
      type: "callout",
      variant: "tip",
      title: "Tentukan tindakan, bukan hanya kalimat error",
      content:
        "Setiap error perlu pemulihan yang sepadan. Invalid credentials dapat mempertahankan email yang sudah diisi dan fokus kembali ke field relevan. Email unconfirmed dapat menawarkan kirim ulang email. Session expired dapat membuka login. Forbidden dapat memberi link kembali ke dashboard. Jangan memberi tombol Coba lagi pada kondisi yang tidak akan berubah tanpa tindakan user lain.",
    },
    {
      id: "nextjs-auth-error-states-summary",
      type: "summary",
      points: [
        "Auth error perlu dibedakan berdasarkan penyebab dan tindakan pemulihannya.",
        "Pesan user-facing tidak perlu membeberkan raw error provider.",
        "role alert membantu error submit diketahui tanpa bergantung pada warna.",
        "Error state yang baik mengarahkan user ke tindakan berikutnya yang realistis.",
        "Berikutnya, kamu akan menguji kesiapan auth-aware UI pada Uji Kompetensi module.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-auth-error-states-intro",
      "nextjs-auth-error-states-example",
      "nextjs-auth-error-states-coding-practice",
      "nextjs-auth-error-states-quick-check",
      "nextjs-auth-error-states-callout",
      "nextjs-auth-error-states-summary",
    ],
  },
};

export const nextjsAuthenticationSessionAwareUiAssessmentLesson: Lesson = {
  id: "nextjs-authentication-session-aware-ui-assessment",
  trackId: "frontend-engineering",
  moduleId: "nextjs-authentication-session-aware-ui",
  title: "Uji Kompetensi Authentication and Session-Aware UI",
  slug: "nextjs-authentication-session-aware-ui-assessment",
  description:
    "Memeriksa kesiapan merancang auth-aware UI, akses route, dan error state sebelum menghubungkan app ke Supabase atau backend.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan perbedaan authentication, session, dan authorization",
    "Menyusun form serta navigation yang berubah sesuai session",
    "Memetakan route public dan protected dengan redirect yang tepat",
    "Memilih error copy dan environment variable policy yang aman",
  ],
  skillTags: [
    "Next.js",
    "Authentication",
    "Sessions",
    "Route Protection",
    "Readiness Checkpoint",
  ],
  blocks: [
    {
      id: "nextjs-authentication-session-aware-ui-assessment-recap",
      type: "text",
      title: "Checkpoint: UI dan route sudah siap memahami identitas user",
      content:
        "Pada module ini kamu belum membangun auth provider atau database sendiri. Kamu sudah membangun keputusan yang harus benar sebelum integrasi: form menjelaskan state, navigation berubah menurut session, route memiliki akses yang dipetakan, redirect awal tidak dianggap sebagai keamanan satu-satunya, dan error membantu user bertindak.\n\nGunakan Uji Kompetensi ini sebagai checkpoint readiness. Jika kamu masih ragu membedakan session dan authorization, kembali ke lesson terkait sebelum meneruskan ke integrasi Supabase atau backend. Integrasi berikutnya akan lebih aman ketika UI dan route behavior sudah jelas.",
    },
    {
      id: "nextjs-authentication-session-aware-ui-assessment-quiz",
      type: "quiz",
      quizId: "nextjs-authentication-session-aware-ui-assessment-quiz",
    },
    {
      id: "nextjs-authentication-session-aware-ui-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-auth-aware-route-checkpoint",
    },
    {
      id: "nextjs-authentication-session-aware-ui-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan implementasi 100-160 kata untuk Local Next.js App kamu. Jelaskan route mana yang public, route mana yang protected, apa yang dilihat navigation saat user signed out/signed in, dan satu auth error yang perlu ditangani. Tulis untuk rekan developer yang akan melanjutkan integrasi auth.",
      placeholder:
        "Route public pada app ini adalah ... Saat user belum memiliki session, navigation ... Route dashboard ... Error ... ditampilkan dengan ...",
      minimumWords: 100,
      modelAnswer:
        "Route public pada app ini adalah /, /login, dan /register. Route /dashboard dan /settings hanya untuk user yang sudah memiliki session. Saat user signed out, navigation menampilkan link Masuk dan Daftar. Setelah session tersedia, navigation menampilkan sapaan singkat, link Dashboard, dan tombol Keluar. Redirect awal dapat membawa user tanpa session dari /dashboard ke /login, tetapi data dashboard tetap harus memeriksa authorization di server. Jika login gagal karena kredensial tidak cocok, form menampilkan pesan bahwa email atau password perlu diperiksa kembali tanpa menampilkan raw error provider. Session yang berakhir mengarahkan user untuk masuk lagi.",
      checklist: [
        "Menyebut minimal satu route public dan satu route protected.",
        "Menjelaskan dua keadaan navigation berdasarkan session.",
        "Menyebut satu auth error dan tindakan yang dapat dilakukan user.",
        "Tidak menulis secret, password, atau raw token di catatan.",
      ],
    },
    {
      id: "nextjs-authentication-session-aware-ui-assessment-docs",
      type: "documentation-bridge",
      title: "Baca dokumentasi auth dengan tujuan yang sempit",
      description:
        "Gunakan tiga sumber resmi ini untuk menyiapkan Local Next.js App sebelum menghubungkan auth provider. Fokus pada alur dan boundary, bukan pada semua pilihan provider atau enterprise auth.",
      links: [
        {
          source: "Next.js Docs",
          title: "How to implement authentication in Next.js",
          url: "https://nextjs.org/docs/app/guides/authentication",
          focus: [
            "bedakan authentication, session management, dan authorization",
            "alur form, session, logout, serta redirect",
            "mengapa pemeriksaan data tidak cukup hanya lewat redirect route",
          ],
          ignoreForNow: [
            "membangun custom auth cryptography sendiri",
            "multi-role authorization dan enterprise SSO",
          ],
        },
        {
          source: "Supabase Docs",
          title: "Creating a Supabase client for SSR",
          url: "https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=nextjs",
          focus: [
            "mengapa SSR client memakai cookies",
            "pemisahan browser client dan server client",
            "kapan identity perlu diverifikasi untuk halaman dan data",
          ],
          ignoreForNow: [
            "realtime subscription dan advanced caching",
            "provider OAuth dan account linking",
          ],
        },
        {
          source: "Next.js Docs",
          title: "Environment Variables",
          url: "https://nextjs.org/docs/app/guides/environment-variables",
          focus: [
            "nilai non-NEXT_PUBLIC_ tetap di server",
            "NEXT_PUBLIC_ akan tersedia di bundle browser",
            ".env.local tidak di-commit",
          ],
          ignoreForNow: [
            "strategi environment multi-region dan deployment pipeline",
          ],
        },
      ],
      followUpAction:
        "Tambahkan auth route map ke README Local Next.js App: tulis public route, protected route, redirect awal, dan nama variable yang harus tetap server-only. Jangan menyalin value secret ke README.",
    },
    {
      id: "nextjs-authentication-session-aware-ui-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap melanjutkan jika dapat membedakan identity, session, dan authorization.",
        "Auth-aware UI menunjukkan state signed out, signed in, submitting, dan error secara jelas.",
        "Route protection dimulai dari route map dan redirect, lalu dilengkapi authorization server-side dekat data atau action.",
        "NEXT_PUBLIC_ bukan tempat untuk secret dan .env.local tidak di-commit.",
        "Berikutnya, kamu akan menghubungkan Next.js app ke Supabase atau backend dengan client boundary dan data user yang lebih nyata.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-authentication-session-aware-ui-assessment-recap",
      "nextjs-authentication-session-aware-ui-assessment-quiz",
      "nextjs-authentication-session-aware-ui-assessment-coding-practice",
      "nextjs-authentication-session-aware-ui-assessment-writing-practice",
      "nextjs-authentication-session-aware-ui-assessment-docs",
      "nextjs-authentication-session-aware-ui-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const nextjsAuthenticationSessionAwareUiAssessmentQuiz: Quiz = {
  id: "nextjs-authentication-session-aware-ui-assessment-quiz",
  lessonId: "nextjs-authentication-session-aware-ui-assessment",
  title: "Uji Kompetensi Authentication and Session-Aware UI",
  passingScore: 70,
  questions: [
    {
      id: "auth-session-authorization-roles",
      type: "multiple-choice",
      question:
        "Urutan penjelasan mana yang paling tepat untuk authentication, session management, dan authorization?",
      options: [
        "Membuktikan identity, melacak state auth antar request, lalu menentukan akses route atau data",
        "Menentukan warna form, menyimpan password di browser, lalu membuat route public",
        "Menyimpan token ke UI, menyembunyikan navigation, lalu menghapus database",
        "Membuat register page, mengubah title, lalu menampilkan loader",
      ],
      correctAnswer:
        "Membuktikan identity, melacak state auth antar request, lalu menentukan akses route atau data",
      explanation:
        "Authentication menjawab siapa user, session management menjaga state auth lintas request, dan authorization memutuskan apa yang boleh diakses user tersebut.",
    },
    {
      id: "login-submitting-state",
      type: "multiple-choice",
      question:
        "Saat login sedang diproses, UI yang paling tepat adalah...",
      options: [
        "Menonaktifkan submit dan memberi status bahwa akun sedang diperiksa",
        "Menghapus form tanpa menjelaskan apa pun",
        "Menampilkan password user untuk memastikan input benar",
        "Membiarkan user mengirim request berkali-kali",
      ],
      correctAnswer:
        "Menonaktifkan submit dan memberi status bahwa akun sedang diperiksa",
      explanation:
        "Pending state memberi feedback dan mengurangi submit berulang. Password tidak boleh ditampilkan atau dicatat untuk tujuan UI.",
    },
    {
      id: "session-aware-nav",
      type: "multiple-choice",
      question:
        "Apa yang sebaiknya muncul di navigation ketika session tersedia?",
      options: [
        "Sapaan atau link dashboard yang relevan serta tindakan Keluar",
        "Masuk dan Daftar saja agar user tidak tahu bahwa ia sudah signed in",
        "Raw access token agar component dapat menampilkannya",
        "Riwayat seluruh password yang pernah digunakan",
      ],
      correctAnswer:
        "Sapaan atau link dashboard yang relevan serta tindakan Keluar",
      explanation:
        "Navigation signed in perlu memberi orientasi dan logout action. UI hanya memerlukan ringkasan user yang aman untuk ditampilkan.",
    },
    {
      id: "public-protected-route-decision",
      type: "multiple-choice",
      question:
        "Route mana yang paling wajar menjadi protected dalam app belajar pribadi?",
      options: ["/dashboard", "/login", "/register", "/help"],
      correctAnswer: "/dashboard",
      explanation:
        "Dashboard pribadi biasanya menampilkan data atau aktivitas user sehingga membutuhkan session. Login, register, dan bantuan umumnya dapat dibuka sebelum user memiliki session.",
    },
    {
      id: "proxy-not-only-defense",
      type: "true-false",
      question:
        "Jika proxy.ts sudah redirect user tanpa session dari dashboard, data dashboard tidak perlu memeriksa authorization lagi.",
      correctAnswer: false,
      explanation:
        "Proxy dapat membantu pemeriksaan awal, tetapi authorization tetap perlu diperiksa dekat data, Server Action, atau Route Handler yang sensitif.",
    },
    {
      id: "helpful-session-error",
      type: "multiple-choice",
      question:
        "Copy mana yang paling membantu ketika session sudah berakhir?",
      options: [
        "Sesi kamu berakhir. Masuk kembali untuk melanjutkan.",
        "JWT refresh failed: undefined user id.",
        "Kamu tidak boleh ada di sini.",
        "Error umum.",
      ],
      correctAnswer: "Sesi kamu berakhir. Masuk kembali untuk melanjutkan.",
      explanation:
        "Pesan menyebut keadaan dan tindakan yang dapat dilakukan user tanpa membeberkan error internal provider.",
    },
    {
      id: "public-environment-value",
      type: "multiple-choice",
      question:
        "Nilai environment seperti apa yang boleh memakai prefix NEXT_PUBLIC_?",
      options: [
        "Nilai yang memang aman tersedia di JavaScript browser",
        "Session secret untuk menandatangani cookie",
        "Service role key database",
        "Password user yang baru dikirim dari form",
      ],
      correctAnswer: "Nilai yang memang aman tersedia di JavaScript browser",
      explanation:
        "NEXT_PUBLIC_ membuat nilai tersedia di bundle browser. Secret, service role key, dan password tidak boleh memakai prefix ini.",
    },
  ],
};

export const buildAuthLoginFormStatesChallenge: CodingChallenge = {
  id: "build-auth-login-form-states",
  lessonId: "nextjs-login-register-ux",
  title: "Build auth login form states",
  description:
    "Lengkapi component login form yang memiliki label, state submitting, dan pesan error yang dapat dipahami user.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah struktur LoginForm, bukan form yang menghubungkan auth provider nyata.",
    "Tambahkan input email dan password dengan label serta autocomplete yang sesuai.",
    "Buat tombol submit nonaktif ketika status bernilai submitting.",
    "Tampilkan pesan error dengan role alert ketika state memiliki message.",
    "Cek otomatis membaca struktur TSX. Password dan kredensial tidak dikirim dari workspace ini.",
  ],
  starterCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type LoginFormState = {
  status: "idle" | "submitting" | "error";
  message?: string;
};

const state: LoginFormState = {
  status: "idle",
};

export default function LoginForm() {
  return (
    <form>
      <h1>Masuk ke akun</h1>
      <button type="submit">Masuk</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type LoginFormState = {
  status: "idle" | "submitting" | "error";
  message?: string;
};

const state: LoginFormState = {
  status: "error",
  message: "Email atau password belum sesuai. Coba periksa kembali.",
};

export default function LoginForm() {
  const isSubmitting = state.status === "submitting";

  return (
    <form aria-describedby={state.message ? "login-error" : undefined}>
      <h1>Masuk ke akun</h1>

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
      />

      {state.message ? (
        <p id="login-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Memeriksa akun..." : "Masuk"}
      </button>
    </form>
  );
}`,
  },
  checklist: [
    "LoginForm memiliki field email dan password yang dapat dikenali browser.",
    "State submitting menonaktifkan tombol submit.",
    "Error memiliki role alert dan terkait dengan form.",
    "Copy error membantu user memperbaiki langkah berikutnya.",
    "Practice ini tidak mengirim atau memvalidasi kredensial nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "form-state", label: "LoginFormState memuat status dan message opsional.", type: "contains", target: "status: \"idle\" | \"submitting\" | \"error\";", valueIncludes: "status: \"idle\" | \"submitting\" | \"error\";" },
      { id: "email-field", label: "Field email memakai type dan autocomplete yang sesuai.", type: "contains", target: 'id="email" name="email" type="email" autoComplete="email"', valueIncludes: 'id="email" name="email" type="email" autoComplete="email"' },
      { id: "password-field", label: "Field password memakai autocomplete current-password.", type: "contains", target: 'id="password"\n        name="password"\n        type="password"\n        autoComplete="current-password"', valueIncludes: 'id="password"\n        name="password"\n        type="password"\n        autoComplete="current-password"' },
      { id: "submitting-state", label: "Status submitting dihitung untuk tombol submit.", type: "contains", target: 'const isSubmitting = state.status === "submitting";', valueIncludes: 'const isSubmitting = state.status === "submitting";' },
      { id: "submit-disabled", label: "Tombol submit terkunci ketika submitting.", type: "contains", target: 'type="submit" disabled={isSubmitting}', valueIncludes: 'type="submit" disabled={isSubmitting}' },
      { id: "form-error-link", label: "Form terhubung dengan pesan error.", type: "contains", target: '<form aria-describedby={state.message ? "login-error" : undefined}>', valueIncludes: '<form aria-describedby={state.message ? "login-error" : undefined}>' },
      { id: "alert-message", label: "Pesan error memakai role alert.", type: "contains", target: '<p id="login-error" role="alert">', valueIncludes: '<p id="login-error" role="alert">' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca struktur LoginForm. Preview tidak mengirim kredensial, membuat session, atau menjalankan auth provider.",
    lines: [
      "User melihat label email dan password yang jelas.",
      "Tombol memberi status dan tidak dapat ditekan saat submitting.",
      "Error login muncul sebagai informasi penting dengan langkah yang dapat dipahami.",
    ],
  },
  skillTags: ["Next.js", "Authentication", "Forms", "Accessibility"],
};

export const buildSessionAwareAppNavigationChallenge: CodingChallenge = {
  id: "build-session-aware-app-navigation",
  lessonId: "nextjs-logout-session-aware-nav",
  title: "Build session-aware app navigation",
  description:
    "Lengkapi navigation yang menampilkan link Masuk/Daftar atau dashboard/logout sesuai ringkasan session.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap session dibaca oleh parent di server lalu diberikan sebagai props sederhana.",
    "Definisikan SessionSummary sebagai userName atau null.",
    "Saat session ada, tampilkan sapaan dashboard dan form tombol Keluar.",
    "Saat session null, tampilkan link Masuk dan Daftar.",
    "Cek otomatis membaca percabangan UI; logout tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type SessionSummary = null;

type AppNavigationProps = {
  session: SessionSummary;
};

export default function AppNavigation({ session }: AppNavigationProps) {
  return (
    <nav aria-label="Navigation utama">
      <a href="/">FluentStack</a>
      <a href="/login">Masuk</a>
    </nav>
  );
}`,
  },
  solutionCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type SessionSummary = {
  userName: string;
} | null;

type AppNavigationProps = {
  session: SessionSummary;
};

export default function AppNavigation({ session }: AppNavigationProps) {
  return (
    <nav aria-label="Navigation utama">
      <a href="/">FluentStack</a>

      {session ? (
        <>
          <a href="/dashboard">Halo, {session.userName}</a>
          <form action="/logout">
            <button type="submit">Keluar</button>
          </form>
        </>
      ) : (
        <>
          <a href="/login">Masuk</a>
          <a href="/register">Daftar</a>
        </>
      )}
    </nav>
  );
}`,
  },
  checklist: [
    "SessionSummary hanya membawa userName yang memang digunakan UI.",
    "State signed in menampilkan dashboard dan tombol Keluar.",
    "State signed out menampilkan Masuk dan Daftar.",
    "Logout memakai action placeholder yang akan ditangani server pada app nyata.",
    "Practice ini tidak membaca raw token atau menjalankan session nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "session-summary", label: "SessionSummary memuat userName atau null.", type: "contains", target: "type SessionSummary = {\n  userName: string;\n} | null;", valueIncludes: "type SessionSummary = {\n  userName: string;\n} | null;" },
      { id: "nav-label", label: "Navigation memiliki accessible label.", type: "contains", target: '<nav aria-label="Navigation utama">', valueIncludes: '<nav aria-label="Navigation utama">' },
      { id: "session-branch", label: "Navigation bercabang berdasarkan session.", type: "contains", target: "{session ? (", valueIncludes: "{session ? (" },
      { id: "dashboard-link", label: "User signed in mendapat link dashboard dengan sapaan.", type: "contains", target: '<a href="/dashboard">Halo, {session.userName}</a>', valueIncludes: '<a href="/dashboard">Halo, {session.userName}</a>' },
      { id: "logout-action", label: "Logout memakai form action placeholder.", type: "contains", target: '<form action="/logout">', valueIncludes: '<form action="/logout">' },
      { id: "logout-button", label: "Tombol Keluar tersedia untuk user signed in.", type: "contains", target: '<button type="submit">Keluar</button>', valueIncludes: '<button type="submit">Keluar</button>' },
      { id: "signed-out-links", label: "User signed out mendapat Masuk dan Daftar.", type: "contains", target: '<a href="/login">Masuk</a>\n          <a href="/register">Daftar</a>', valueIncludes: '<a href="/login">Masuk</a>\n          <a href="/register">Daftar</a>' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca dua cabang navigation berdasarkan session. Preview tidak membaca cookie atau menjalankan logout endpoint.",
    lines: [
      "User signed out melihat Masuk dan Daftar.",
      "User signed in melihat sapaan dashboard dan tindakan Keluar.",
      "Navigation hanya menerima ringkasan aman yang diperlukan UI.",
    ],
  },
  skillTags: ["Next.js", "Sessions", "Navigation", "Logout"],
};

export const planAuthRouteAccessMapChallenge: CodingChallenge = {
  id: "plan-auth-route-access-map",
  lessonId: "nextjs-public-protected-routes",
  title: "Plan auth route access map",
  description:
    "Susun route map untuk membedakan login/register yang public dari dashboard/settings yang protected.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah route decision map sebelum menulis proxy atau auth provider nyata.",
    "Tandai /login dan /register sebagai public serta redirect signed-in ke /dashboard.",
    "Tandai /dashboard dan /settings sebagai protected serta redirect signed-out ke /login.",
    "Jangan menganggap route map ini sebagai authorization check untuk data.",
    "Cek otomatis membaca struktur map. Proxy dan redirect tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type RouteAccess = {
  path: string;
  access: "public" | "protected";
  redirect?: string;
};

export const routeAccess: RouteAccess[] = [
  {
    path: "/dashboard",
    access: "public",
  },
];`,
  },
  solutionCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type RouteAccess = {
  path: string;
  access: "public" | "protected";
  redirect?: string;
};

export const routeAccess: RouteAccess[] = [
  {
    path: "/login",
    access: "public",
    redirect: "/dashboard",
  },
  {
    path: "/register",
    access: "public",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    access: "protected",
    redirect: "/login",
  },
  {
    path: "/settings",
    access: "protected",
    redirect: "/login",
  },
];`,
  },
  checklist: [
    "Route public menjelaskan tujuan user yang belum memiliki session.",
    "Route protected mengarahkan user tanpa session ke login.",
    "Route public dapat mengarahkan user yang sudah signed in ke dashboard.",
    "Map tidak menggantikan authorization server-side dekat data atau action.",
    "Practice tidak menjalankan proxy atau membaca cookie nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "route-type", label: "RouteAccess membedakan public dan protected.", type: "contains", target: 'access: "public" | "protected";', valueIncludes: 'access: "public" | "protected";' },
      { id: "login-public", label: "Login dipetakan sebagai route public.", type: "contains", target: 'path: "/login",\n    access: "public",\n    redirect: "/dashboard"', valueIncludes: 'path: "/login",\n    access: "public",\n    redirect: "/dashboard"' },
      { id: "register-public", label: "Register dipetakan sebagai route public.", type: "contains", target: 'path: "/register",\n    access: "public",\n    redirect: "/dashboard"', valueIncludes: 'path: "/register",\n    access: "public",\n    redirect: "/dashboard"' },
      { id: "dashboard-protected", label: "Dashboard dipetakan sebagai route protected.", type: "contains", target: 'path: "/dashboard",\n    access: "protected",\n    redirect: "/login"', valueIncludes: 'path: "/dashboard",\n    access: "protected",\n    redirect: "/login"' },
      { id: "settings-protected", label: "Settings dipetakan sebagai route protected.", type: "contains", target: 'path: "/settings",\n    access: "protected",\n    redirect: "/login"', valueIncludes: 'path: "/settings",\n    access: "protected",\n    redirect: "/login"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca keputusan akses route. Preview tidak menjalankan redirect; map membantu merancang route dan bukan pengganti pemeriksaan authorization pada server.",
    lines: [
      "Login dan register tetap dapat dibuka sebelum user memiliki session.",
      "Dashboard dan settings meminta user masuk terlebih dahulu.",
      "Signed-in user tidak perlu tetap berada di halaman login atau register.",
    ],
  },
  skillTags: ["Next.js", "Authentication", "Routes", "Authorization"],
};

export const writeHelpfulAuthErrorStateMapChallenge: CodingChallenge = {
  id: "write-helpful-auth-error-state-map",
  lessonId: "nextjs-auth-error-states",
  title: "Write helpful auth error state map",
  description:
    "Lengkapi peta error auth dengan pesan yang spesifik untuk kredensial, email, session, dan akses.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat union untuk empat auth error yang dibahas pada lesson.",
    "Tambahkan pesan untuk invalid credentials, email unconfirmed, session expired, dan forbidden.",
    "Tampilkan pesan yang dipilih dalam element dengan role alert.",
    "Gunakan copy yang menjelaskan tindakan user tanpa menampilkan raw provider error.",
    "Cek otomatis membaca struktur TSX. Provider auth dan error runtime tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type AuthErrorCode = "invalid_credentials";

const authErrorMessage: Record<AuthErrorCode, string> = {
  invalid_credentials: "Terjadi error.",
};

export default function AuthErrorMessage({
  code,
}: {
  code: AuthErrorCode;
}) {
  return <p>{authErrorMessage[code]}</p>;
}`,
  },
  solutionCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type AuthErrorCode =
  | "invalid_credentials"
  | "email_unconfirmed"
  | "session_expired"
  | "forbidden";

const authErrorMessage: Record<AuthErrorCode, string> = {
  invalid_credentials: "Email atau password belum sesuai. Coba periksa kembali.",
  email_unconfirmed: "Buka inbox untuk mengonfirmasi email sebelum masuk.",
  session_expired: "Sesi kamu berakhir. Masuk kembali untuk melanjutkan.",
  forbidden: "Akun ini belum memiliki akses ke halaman tersebut.",
};

export default function AuthErrorMessage({
  code,
}: {
  code: AuthErrorCode;
}) {
  return <p role="alert">{authErrorMessage[code]}</p>;
}`,
  },
  checklist: [
    "Error code membedakan empat situasi auth yang memiliki tindakan berbeda.",
    "Pesan kredensial tidak mengungkap apakah email tertentu terdaftar.",
    "Pesan session expired mengarahkan user untuk masuk kembali.",
    "Pesan forbidden tidak menyuruh user mencoba login berulang kali.",
    "Error message memakai role alert tanpa raw provider error.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "error-union", label: "Union memuat empat error code auth.", type: "contains", target: 'type AuthErrorCode =\n  | "invalid_credentials"\n  | "email_unconfirmed"\n  | "session_expired"\n  | "forbidden";', valueIncludes: 'type AuthErrorCode =\n  | "invalid_credentials"\n  | "email_unconfirmed"\n  | "session_expired"\n  | "forbidden";' },
      { id: "error-record", label: "Pesan dipetakan dengan Record berdasarkan error code.", type: "contains", target: "const authErrorMessage: Record<AuthErrorCode, string> = {", valueIncludes: "const authErrorMessage: Record<AuthErrorCode, string> = {" },
      { id: "credential-copy", label: "Kredensial error memiliki copy yang membantu.", type: "contains", target: 'invalid_credentials: "Email atau password belum sesuai. Coba periksa kembali."', valueIncludes: 'invalid_credentials: "Email atau password belum sesuai. Coba periksa kembali."' },
      { id: "email-copy", label: "Email unconfirmed mengarahkan user membuka inbox.", type: "contains", target: 'email_unconfirmed: "Buka inbox untuk mengonfirmasi email sebelum masuk."', valueIncludes: 'email_unconfirmed: "Buka inbox untuk mengonfirmasi email sebelum masuk."' },
      { id: "session-copy", label: "Session expired mengarahkan user masuk kembali.", type: "contains", target: 'session_expired: "Sesi kamu berakhir. Masuk kembali untuk melanjutkan."', valueIncludes: 'session_expired: "Sesi kamu berakhir. Masuk kembali untuk melanjutkan."' },
      { id: "forbidden-copy", label: "Forbidden memiliki pesan akses yang spesifik.", type: "contains", target: 'forbidden: "Akun ini belum memiliki akses ke halaman tersebut."', valueIncludes: 'forbidden: "Akun ini belum memiliki akses ke halaman tersebut."' },
      { id: "alert-role", label: "Pesan error memakai role alert.", type: "contains", target: '<p role="alert">{authErrorMessage[code]}</p>', valueIncludes: '<p role="alert">{authErrorMessage[code]}</p>' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca peta error user-facing. Preview tidak memanggil auth provider atau memperlihatkan raw error runtime.",
    lines: [
      "Setiap error auth memiliki copy yang sesuai dengan keadaan user.",
      "Pesan memberi tindakan berikutnya tanpa detail provider yang tidak perlu.",
      "role alert membuat perubahan error menjadi informasi penting bagi teknologi bantu.",
    ],
  },
  skillTags: ["Next.js", "Authentication", "Error States", "Accessibility"],
};

export const buildAuthAwareRouteCheckpointChallenge: CodingChallenge = {
  id: "build-auth-aware-route-checkpoint",
  lessonId: "nextjs-authentication-session-aware-ui-assessment",
  title: "Build auth-aware route checkpoint",
  description:
    "Susun feature map auth untuk login, register, dashboard, navigation, error UI, dan session secret server-only.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah readiness checkpoint struktur, bukan auth runtime preview.",
    "Tambahkan login/register sebagai public route yang mengarah ke dashboard saat signed in.",
    "Tambahkan dashboard sebagai protected route yang mengarah ke login saat signed out.",
    "Tambahkan navigation berbasis session dan auth error UI dengan role alert.",
    "Catat AUTH_SESSION_SECRET sebagai server-only value di .env.local tanpa commit.",
  ],
  starterCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type AuthFeature = {
  path: string;
  role: string;
  access: "public" | "protected" | "server-only";
  detail: string;
};

const authFeatures: AuthFeature[] = [
  {
    path: "app/dashboard/page.tsx",
    role: "dashboard page",
    access: "public",
    detail: "shows learning progress",
  },
];

export default authFeatures;`,
  },
  solutionCode: {
    ...nextAuthPracticePreviewCode,
    tsx: `type AuthFeature = {
  path: string;
  role: string;
  access: "public" | "protected" | "server-only";
  detail: string;
};

const authFeatures: AuthFeature[] = [
  {
    path: "app/login/page.tsx",
    role: "login form",
    access: "public",
    detail: "redirects signed-in user to /dashboard",
  },
  {
    path: "app/register/page.tsx",
    role: "register form",
    access: "public",
    detail: "redirects signed-in user to /dashboard",
  },
  {
    path: "app/dashboard/page.tsx",
    role: "learner dashboard",
    access: "protected",
    detail: "redirects signed-out user to /login",
  },
  {
    path: "app/ui/app-navigation.tsx",
    role: "session-aware navigation",
    access: "protected",
    detail: "shows Masuk/Daftar or dashboard/Keluar based on session",
  },
  {
    path: "app/ui/auth-error-message.tsx",
    role: "auth error UI",
    access: "public",
    detail: "uses role alert for credentials, email, session, and access errors",
  },
  {
    path: ".env.local",
    role: "auth session configuration",
    access: "server-only",
    detail: "AUTH_SESSION_SECRET stays private and is not committed",
  },
];

export default authFeatures;`,
  },
  checklist: [
    "Login/register dan dashboard memiliki policy akses yang berbeda.",
    "Navigation menjelaskan dua state berdasarkan session.",
    "Auth error UI mencatat role alert dan empat keadaan utama.",
    "AUTH_SESSION_SECRET tetap server-only di .env.local dan tidak di-commit.",
    "Feature map tidak menggantikan auth provider atau authorization check nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "feature-type", label: "AuthFeature map dibuat.", type: "contains", target: "type AuthFeature = {", valueIncludes: "type AuthFeature = {" },
      { id: "login-feature", label: "Login dipetakan sebagai route public.", type: "contains", target: 'path: "app/login/page.tsx",\n    role: "login form",\n    access: "public"', valueIncludes: 'path: "app/login/page.tsx",\n    role: "login form",\n    access: "public"' },
      { id: "register-feature", label: "Register dipetakan sebagai route public.", type: "contains", target: 'path: "app/register/page.tsx",\n    role: "register form",\n    access: "public"', valueIncludes: 'path: "app/register/page.tsx",\n    role: "register form",\n    access: "public"' },
      { id: "dashboard-feature", label: "Dashboard dipetakan sebagai route protected.", type: "contains", target: 'path: "app/dashboard/page.tsx",\n    role: "learner dashboard",\n    access: "protected"', valueIncludes: 'path: "app/dashboard/page.tsx",\n    role: "learner dashboard",\n    access: "protected"' },
      { id: "navigation-feature", label: "Navigation berbasis session dipetakan terpisah.", type: "contains", target: 'path: "app/ui/app-navigation.tsx",\n    role: "session-aware navigation"', valueIncludes: 'path: "app/ui/app-navigation.tsx",\n    role: "session-aware navigation"' },
      { id: "error-feature", label: "Auth error UI dipetakan dengan role alert.", type: "contains", target: 'path: "app/ui/auth-error-message.tsx",\n    role: "auth error UI",\n    access: "public",\n    detail: "uses role alert', valueIncludes: 'path: "app/ui/auth-error-message.tsx",\n    role: "auth error UI",\n    access: "public",\n    detail: "uses role alert' },
      { id: "secret-feature", label: "Session secret tetap server-only dan tidak di-commit.", type: "contains", target: 'path: ".env.local",\n    role: "auth session configuration",\n    access: "server-only",\n    detail: "AUTH_SESSION_SECRET stays private and is not committed"', valueIncludes: 'path: ".env.local",\n    role: "auth session configuration",\n    access: "server-only",\n    detail: "AUTH_SESSION_SECRET stays private and is not committed"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Checkpoint membaca peta feature auth. Preview tidak menjalankan proxy, auth provider, cookie, redirect, atau environment variable nyata.",
    lines: [
      "Login/register, dashboard, navigation, dan auth error memiliki tanggung jawab yang jelas.",
      "Route access dan redirect awal dirancang sebelum integrasi provider.",
      "Session secret tidak dipindahkan ke browser atau source control.",
    ],
  },
  skillTags: ["Next.js", "Authentication", "Sessions", "Authorization", "Readiness Checkpoint"],
};
