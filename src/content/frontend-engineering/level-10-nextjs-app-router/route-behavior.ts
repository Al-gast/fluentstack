import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const nextjsRouteBehaviorModule: Module = {
  id: "nextjs-route-behavior",
  trackId: "frontend-engineering",
  title: "Loading, Error UI, Route Handlers, Metadata, and Env",
  slug: "loading-error-route-handlers-metadata-env",
  description:
    "Menambahkan perilaku route App Router yang jelas melalui loading UI, error recovery, endpoint GET sederhana, metadata, dan environment variable yang aman.",
  order: 33,
  lessonIds: [
    "nextjs-loading-ui",
    "nextjs-error-ui",
    "nextjs-route-handlers",
    "nextjs-metadata",
    "nextjs-environment-variables",
    "nextjs-route-behavior-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Next.js",
    "App Router",
    "Loading UI",
    "Error Handling",
    "Route Handlers",
    "Metadata",
    "Environment Variables",
  ],
};

export const nextjsLoadingUiLesson: Lesson = {
  id: "nextjs-loading-ui",
  trackId: "frontend-engineering",
  moduleId: "nextjs-route-behavior",
  title: "loading.tsx",
  slug: "nextjs-loading-ui",
  description:
    "Menambahkan loading UI ringan pada route segment agar navigasi tidak terasa diam saat content sedang disiapkan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan fungsi loading.tsx pada route segment App Router",
    "Menempatkan loading UI di folder route yang tepat",
    "Membuat fallback yang memberi konteks, bukan spinner tanpa makna",
  ],
  skillTags: ["Next.js", "App Router", "Loading UI", "Route Segments"],
  blocks: [
    {
      id: "nextjs-loading-ui-intro",
      type: "text",
      title: "Tunjukkan bahwa route sedang merespons",
      content:
        "Saat user berpindah ke route yang content-nya belum siap, halaman yang tampak diam terasa seperti aplikasi tidak merespons. File khusus loading.tsx memberi Next.js fallback UI untuk satu route segment. Letakkan file itu di folder segment yang ingin kamu lindungi, misalnya app/courses/loading.tsx untuk route /courses dan child route di bawahnya.\n\nLoading UI bukan tempat untuk meniru seluruh page secara sempurna. Tampilkan struktur ringan yang memberi orientasi: judul, daftar item, atau skeleton yang mendekati content berikutnya. Pada tahap ini, fokus pada penempatan file dan pesan yang berguna; kita tidak membahas strategi streaming atau cache yang lebih dalam.",
    },
    {
      id: "nextjs-loading-ui-example",
      type: "code-example",
      title: "Fallback untuk route courses",
      language: "tsx",
      code: `// app/courses/loading.tsx
export default function Loading() {
  return (
    <section aria-busy="true" aria-label="Memuat daftar course">
      <h1>Course</h1>
      <p>Menyiapkan daftar course untukmu...</p>
      <ul aria-hidden="true">
        <li>Memuat item course</li>
        <li>Memuat item course</li>
        <li>Memuat item course</li>
      </ul>
    </section>
  );
}`,
      explanation:
        "Nama file dan lokasi membuatnya menjadi loading UI untuk segment courses. Component Loading tidak perlu props dan tidak perlu \"use client\" hanya untuk menampilkan fallback ini. aria-busy memberi sinyal bahwa area tersebut sedang diperbarui, sedangkan teks membuat status tetap mudah dipahami tanpa mengandalkan animasi saja.",
    },
    {
      id: "nextjs-loading-ui-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-loading-ui",
    },
    {
      id: "nextjs-loading-ui-quick-check",
      type: "quick-check",
      question:
        "File mana yang paling tepat untuk menampilkan fallback saat route /courses sedang menyiapkan content?",
      options: [
        "app/courses/loading.tsx",
        "app/loading.tsx/courses",
        "components/courses/Spinner.tsx saja",
        "app/courses/page.loading.tsx",
      ],
      correctAnswer: "app/courses/loading.tsx",
      explanation:
        "loading.tsx adalah file khusus App Router. Ketika berada di folder courses, file tersebut menangani loading UI untuk route segment courses dan child route-nya.",
    },
    {
      id: "nextjs-loading-ui-summary",
      type: "summary",
      points: [
        "loading.tsx memberi fallback UI untuk route segment dan child route-nya.",
        "Letakkan file di folder segment yang membutuhkan loading UI.",
        "Gunakan fallback ringan yang memberi konteks tentang content yang sedang disiapkan.",
        "Berikutnya, kamu akan menangani situasi ketika route tidak dapat merender content seperti yang diharapkan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-loading-ui-intro",
      "nextjs-loading-ui-example",
      "nextjs-loading-ui-coding-practice",
      "nextjs-loading-ui-quick-check",
      "nextjs-loading-ui-summary",
    ],
  },
};

export const nextjsErrorUiLesson: Lesson = {
  id: "nextjs-error-ui",
  trackId: "frontend-engineering",
  moduleId: "nextjs-route-behavior",
  title: "error.tsx",
  slug: "nextjs-error-ui",
  description:
    "Menambahkan error UI pada route segment dan menyediakan tindakan recovery yang jelas untuk user.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan peran error.tsx sebagai error boundary route segment",
    "Menempatkan \"use client\" pada error UI yang menyediakan recovery",
    "Membuat pesan error dan tombol coba lagi yang jelas",
  ],
  skillTags: ["Next.js", "Error UI", "Error Boundary", "Client Components", "Recovery"],
  blocks: [
    {
      id: "nextjs-error-ui-intro",
      type: "text",
      title: "Error UI menjaga route tetap dapat dipulihkan",
      content:
        "loading.tsx membantu saat content belum siap. error.tsx menangani error tak terduga saat route segment sedang dirender, lalu menampilkan fallback alih-alih membiarkan seluruh area tampak rusak. Karena error UI biasanya perlu tombol recovery dan event handler, file ini adalah Client Component dan memakai \"use client\".\n\nUntuk versi Next.js yang digunakan project ini, callback recovery pada contoh resmi bernama unstable_retry. Ia meminta Next.js mencoba merender ulang segment yang gagal. Kamu tidak perlu menghafal detail implementasinya sekarang. Yang penting: tampilkan pesan yang tenang, jangan bocorkan detail teknis ke user, dan sediakan tindakan yang berarti bila recovery aman dilakukan.",
    },
    {
      id: "nextjs-error-ui-example",
      type: "code-example",
      title: "Error UI untuk route courses",
      language: "tsx",
      code: `// app/courses/error.tsx
"use client";

type CourseErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function CourseError({
  error,
  unstable_retry,
}: CourseErrorProps) {
  console.error(error);

  return (
    <section role="alert">
      <h1>Daftar course belum bisa dimuat</h1>
      <p>Coba muat ulang bagian ini beberapa saat lagi.</p>
      <button type="button" onClick={() => unstable_retry()}>
        Coba lagi
      </button>
    </section>
  );
}`,
      explanation:
        "error.tsx berada di folder courses sehingga menjadi boundary untuk segment itu. Directive berada sebelum type atau import. Error teknis dicatat untuk developer, sedangkan user mendapat pesan yang menjelaskan keadaan dan tombol recovery. Error boundary ini bukan pengganti penanganan error pada event handler yang berjalan setelah proses render.",
    },
    {
      id: "nextjs-error-ui-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-error-recovery-ui",
    },
    {
      id: "nextjs-error-ui-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan gunakan error.tsx untuk semua jenis masalah",
      content:
        "error.tsx menangkap error tak terduga yang muncul saat rendering pada boundary tersebut. Validasi input yang gagal atau error setelah user menekan tombol tetap perlu ditangani oleh flow UI yang relevan. Untuk sekarang, gunakan error.tsx sebagai fallback route-level dengan recovery yang sederhana.",
    },
    {
      id: "nextjs-error-ui-summary",
      type: "summary",
      points: [
        "error.tsx memberi fallback untuk error render pada route segment.",
        "Error UI adalah Client Component ketika menyediakan recovery melalui event handler.",
        "Sediakan pesan yang jelas dan tindakan coba lagi yang sesuai.",
        "Berikutnya, kamu akan membuat endpoint GET kecil dengan file route.ts.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-error-ui-intro",
      "nextjs-error-ui-example",
      "nextjs-error-ui-coding-practice",
      "nextjs-error-ui-callout",
      "nextjs-error-ui-summary",
    ],
  },
};

export const nextjsRouteHandlersLesson: Lesson = {
  id: "nextjs-route-handlers",
  trackId: "frontend-engineering",
  moduleId: "nextjs-route-behavior",
  title: "Route Handlers",
  slug: "nextjs-route-handlers",
  description:
    "Membuat Route Handler GET kecil di app directory yang mengembalikan JSON dengan Web Response API.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan fungsi route.ts pada App Router",
    "Membuat handler GET sederhana dengan Response.json",
    "Membedakan route.ts dari page.tsx pada route segment yang sama",
  ],
  skillTags: ["Next.js", "Route Handlers", "HTTP", "GET", "JSON"],
  blocks: [
    {
      id: "nextjs-route-handlers-intro",
      type: "text",
      title: "Route Handler adalah endpoint kecil di dalam app directory",
      content:
        "Route Handler memakai file khusus route.ts di dalam app directory untuk menangani request HTTP dengan Web Request dan Response APIs. Untuk contoh awal, gunakan GET yang mengembalikan JSON sederhana. Ini berguna untuk memahami bahwa App Router dapat memiliki endpoint kecil tanpa membuat server Express terpisah.\n\nRoute Handler bukan page UI dan tidak ikut dirender di layout seperti page.tsx. Jangan menaruh route.ts pada segment yang sama dengan page.tsx karena keduanya akan mengambil alih route yang sama. Gunakan segment API seperti app/api/course-summary/route.ts agar URL endpoint dan UI route tetap jelas terpisah.",
    },
    {
      id: "nextjs-route-handlers-example",
      type: "code-example",
      title: "Endpoint GET untuk ringkasan course",
      language: "ts",
      code: `// app/api/course-summary/route.ts
export async function GET() {
  return Response.json({
    totalCourses: 3,
    nextLesson: "Server Components",
  });
}`,
      explanation:
        "File ini menangani GET /api/course-summary dan mengembalikan JSON. Belum ada database, auth, fetch eksternal, atau cache policy pada contoh ini. Itu disengaja agar kamu dapat fokus pada hubungan antara lokasi file, method GET, dan Response.json.",
    },
    {
      id: "nextjs-route-handlers-coding-practice",
      type: "coding-practice",
      challengeId: "create-course-summary-route-handler",
    },
    {
      id: "nextjs-route-handlers-quick-check",
      type: "quick-check",
      question:
        "Struktur mana yang benar untuk endpoint GET /api/course-summary?",
      options: [
        "app/api/course-summary/route.ts",
        "app/api/course-summary/page.tsx",
        "app/course-summary/route.ts dan app/course-summary/page.tsx pada folder yang sama",
        "components/api/course-summary.ts",
      ],
      correctAnswer: "app/api/course-summary/route.ts",
      explanation:
        "route.ts di bawah app dapat menangani request. Folder api memberi pemisahan yang jelas dari UI page. route.ts tidak boleh berada pada segment yang sama dengan page.tsx karena keduanya mengambil route tersebut.",
    },
    {
      id: "nextjs-route-handlers-summary",
      type: "summary",
      points: [
        "route.ts membuat request handler di dalam app directory.",
        "GET sederhana dapat mengembalikan JSON melalui Response.json.",
        "Pisahkan endpoint dari UI route dan jangan konflik dengan page.tsx pada segment yang sama.",
        "Berikutnya, kamu akan menambahkan title dan description route melalui Metadata API.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-route-handlers-intro",
      "nextjs-route-handlers-example",
      "nextjs-route-handlers-coding-practice",
      "nextjs-route-handlers-quick-check",
      "nextjs-route-handlers-summary",
    ],
  },
};

export const nextjsMetadataLesson: Lesson = {
  id: "nextjs-metadata",
  trackId: "frontend-engineering",
  moduleId: "nextjs-route-behavior",
  title: "Metadata",
  slug: "nextjs-metadata",
  description:
    "Menambahkan title dan description route dengan export metadata statis pada Server Component.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan fungsi metadata title dan description pada route",
    "Membuat export metadata statis dengan type Metadata",
    "Membedakan Metadata API dari JSX content page",
  ],
  skillTags: ["Next.js", "Metadata", "SEO", "App Router", "Server Components"],
  blocks: [
    {
      id: "nextjs-metadata-intro",
      type: "text",
      title: "Metadata memberi konteks sebelum user membaca content page",
      content:
        "Metadata adalah informasi route yang Next.js gunakan untuk menghasilkan head tags seperti title dan description. Untuk page statis, mulai dari export metadata object yang kecil. Title membantu membedakan tab browser dan hasil share, sedangkan description merangkum tujuan route dengan kalimat yang relevan.\n\nMetadata API hanya didukung pada Server Components. Jangan menambahkan \"use client\" pada page hanya untuk metadata. Jika satu bagian page membutuhkan interaksi, pisahkan bagian tersebut menjadi Client Component seperti yang kamu pelajari pada module sebelumnya, sementara page tetap dapat mengekspor metadata.",
    },
    {
      id: "nextjs-metadata-example",
      type: "code-example",
      title: "Metadata statis untuk halaman courses",
      language: "tsx",
      code: `// app/courses/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course | FluentStack",
  description: "Pilih lesson dan lanjutkan progres belajar frontend.",
};

export default function CoursesPage() {
  return (
    <main>
      <h1>Course</h1>
      <p>Pilih lesson yang ingin kamu lanjutkan.</p>
    </main>
  );
}`,
      explanation:
        "metadata berada di level module, terpisah dari JSX yang dirender ke halaman. Type Metadata membantu menjaga bentuk object tetap jelas. Contoh ini sengaja memakai metadata statis; generateMetadata, metadata dinamis, Open Graph image, dan detail SEO lebih lanjut belum diperlukan sekarang.",
    },
    {
      id: "nextjs-metadata-coding-practice",
      type: "coding-practice",
      challengeId: "add-course-route-metadata",
    },
    {
      id: "nextjs-metadata-callout",
      type: "callout",
      variant: "important",
      title: "Metadata bukan alasan untuk mengubah page menjadi Client Component",
      content:
        "Jika page membutuhkan title dan description, pertahankan page sebagai Server Component. Bila ada filter atau button interaktif di dalamnya, ekstrak bagian itu ke Client Component kecil. Dengan begitu, metadata tetap valid dan boundary client tidak melebar tanpa alasan.",
    },
    {
      id: "nextjs-metadata-summary",
      points: [
        "metadata object menambahkan informasi route seperti title dan description.",
        "Metadata API didukung pada Server Components.",
        "Mulai dengan metadata statis yang menjelaskan tujuan route secara spesifik.",
        "Berikutnya, kamu akan membedakan value environment yang aman untuk server dari value yang sengaja diekspos ke browser.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-metadata-intro",
      "nextjs-metadata-example",
      "nextjs-metadata-coding-practice",
      "nextjs-metadata-callout",
      "nextjs-metadata-summary",
    ],
  },
};

export const nextjsEnvironmentVariablesLesson: Lesson = {
  id: "nextjs-environment-variables",
  trackId: "frontend-engineering",
  moduleId: "nextjs-route-behavior",
  title: "Environment Variables",
  slug: "nextjs-environment-variables",
  description:
    "Menyimpan konfigurasi lokal di .env.local serta membedakan value server-only dari value browser yang memakai prefix NEXT_PUBLIC_.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan peran .env.local untuk konfigurasi lokal",
    "Membedakan environment variable server-only dan NEXT_PUBLIC_",
    "Menghindari commit secret ke repository",
  ],
  skillTags: ["Next.js", "Environment Variables", "Security Basics", "Configuration"],
  blocks: [
    {
      id: "nextjs-environment-variables-intro",
      type: "text",
      title: "Simpan konfigurasi, bukan rahasia di source code",
      content:
        "Environment variables membantu project membaca value yang berbeda tanpa menulisnya langsung di source code. Untuk pengembangan lokal, .env.local adalah tempat yang umum untuk value tersebut dan seharusnya tidak masuk Git. Letakkan file ini di root project, bukan di dalam src.\n\nSecara default, environment variable hanya tersedia di server. Prefix NEXT_PUBLIC_ membuat value tersedia ke browser dan nilainya dibundel saat build. Karena itu, prefix tersebut bukan cara menyimpan secret. Gunakan hanya untuk value yang memang aman dilihat user, misalnya nama aplikasi atau public analytics identifier yang memang dirancang untuk diekspos.",
    },
    {
      id: "nextjs-environment-variables-example",
      type: "code-example",
      title: "Pisahkan value private dan public",
      language: "bash",
      code: `# .env.local
COURSE_CATALOG_TOKEN=replace-with-local-value
NEXT_PUBLIC_APP_NAME=FluentStack

# app/api/course-summary/route.ts
const token = process.env.COURSE_CATALOG_TOKEN;

# app/ui/app-name.tsx
const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "FluentStack";`,
      explanation:
        "COURSE_CATALOG_TOKEN hanya dibaca pada sisi server dan tidak boleh dikirim ke browser. NEXT_PUBLIC_APP_NAME boleh dipakai pada UI browser karena bukan secret. Walaupun sebuah value public, file .env.local tetap tidak perlu di-commit; gunakan contoh file terpisah bila tim perlu mengetahui nama variable yang harus diisi.",
    },
    {
      id: "nextjs-environment-variables-coding-practice",
      type: "coding-practice",
      challengeId: "classify-next-environment-values",
    },
    {
      id: "nextjs-environment-variables-callout",
      type: "callout",
      variant: "warning",
      title: "NEXT_PUBLIC_ berarti value dapat dilihat di browser",
      content:
        "Jangan memberi prefix NEXT_PUBLIC_ pada token, private key, password, service role key, atau value yang hanya boleh hidup di server. Prefix itu membuat nilai tersedia dalam JavaScript browser pada build. Jika ragu apakah value boleh dibuka user, perlakukan value tersebut sebagai private sampai kamu memahami kebutuhan integrasinya.",
    },
    {
      id: "nextjs-environment-variables-quick-check",
      type: "quick-check",
      question:
        "Variable mana yang aman dijadikan NEXT_PUBLIC_ pada contoh awal ini?",
      options: [
        "Nama aplikasi yang memang ditampilkan di UI",
        "Database password",
        "Service role key",
        "Token untuk service course internal",
      ],
      correctAnswer: "Nama aplikasi yang memang ditampilkan di UI",
      explanation:
        "NEXT_PUBLIC_ membuat value tersedia di browser. Nama aplikasi dapat ditampilkan user, sedangkan password dan token harus tetap berada di server dan tidak boleh di-commit.",
    },
    {
      id: "nextjs-environment-variables-summary",
      type: "summary",
      points: [
        ".env.local menyimpan konfigurasi lokal dan tidak boleh di-commit.",
        "Variable tanpa NEXT_PUBLIC_ hanya tersedia di server secara default.",
        "NEXT_PUBLIC_ hanya untuk value yang memang aman terlihat di browser, bukan secret.",
        "Berikutnya, Uji Kompetensi akan menggabungkan loading, error, route handler, metadata, dan env pada satu route plan kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-environment-variables-intro",
      "nextjs-environment-variables-example",
      "nextjs-environment-variables-coding-practice",
      "nextjs-environment-variables-callout",
      "nextjs-environment-variables-quick-check",
      "nextjs-environment-variables-summary",
    ],
  },
};

export const nextjsRouteBehaviorAssessmentLesson: Lesson = {
  id: "nextjs-route-behavior-assessment",
  trackId: "frontend-engineering",
  moduleId: "nextjs-route-behavior",
  title: "Uji Kompetensi Next.js Route Behavior",
  slug: "nextjs-route-behavior-assessment",
  description:
    "Checkpoint kesiapan untuk menambahkan loading UI, error recovery, Route Handler, metadata, dan environment variable yang aman pada route kecil.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Memetakan file khusus untuk route behavior kecil",
    "Membedakan fallback loading, recovery error, endpoint GET, dan metadata",
    "Menjelaskan pemisahan environment value private dan public",
  ],
  skillTags: ["Next.js", "Route Behavior", "Readiness Checkpoint", "Configuration"],
  blocks: [
    {
      id: "nextjs-route-behavior-assessment-recap",
      type: "text",
      title: "Checkpoint: lengkapi route tanpa mencampur tanggung jawab",
      content:
        "Route App Router tidak hanya terdiri dari page.tsx. loading.tsx memberi fallback saat content belum siap, error.tsx memberi recovery saat render gagal, route.ts menangani request HTTP, metadata menjelaskan route pada head, dan .env.local menyimpan konfigurasi lokal di luar source code. Setiap file punya peran yang berbeda.\n\nCheckpoint ini menguji apakah kamu dapat memetakan file tersebut pada feature courses kecil. Kamu tidak diminta mengatur cache, database, auth, Server Actions, atau deployment. Fokuskan jawaban pada file placement, UI yang berguna, GET sederhana, metadata title/description, serta value env yang aman atau tidak aman untuk browser.",
    },
    {
      id: "nextjs-route-behavior-assessment-quiz",
      type: "quiz",
      quizId: "nextjs-route-behavior-assessment-quiz",
    },
    {
      id: "nextjs-route-behavior-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-route-behavior-checkpoint",
    },
    {
      id: "nextjs-route-behavior-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis 70-130 kata sebagai implementation note untuk route courses. Jelaskan lokasi loading.tsx dan error.tsx, apa yang dilakukan tombol recovery, lokasi endpoint GET, metadata yang ditambahkan, serta satu value env yang harus tetap private.",
      placeholder:
        "Contoh: app/courses/loading.tsx menampilkan fallback saat daftar course sedang disiapkan. ...",
      minimumWords: 70,
      checklist: [
        "Menyebut loading.tsx dan tujuan fallback-nya.",
        "Menyebut error.tsx sebagai Client Component untuk recovery.",
        "Menyebut lokasi route.ts untuk endpoint GET.",
        "Menyebut title atau description metadata route.",
        "Menyebut satu environment variable yang tidak boleh diekspos atau di-commit.",
      ],
    },
    {
      id: "nextjs-route-behavior-assessment-docs",
      type: "documentation-bridge",
      title: "Gunakan dokumentasi resmi saat menambah perilaku route",
      description:
        "Buka hanya halaman yang sesuai dengan file yang sedang kamu buat. Dokumentasi ini menjadi referensi saat kamu melanjutkan Local Next.js App, bukan daftar topik yang harus dibaca sekaligus.",
      links: [
        {
          source: "Next.js Docs",
          title: "loading.js file convention",
          url: "https://nextjs.org/docs/app/api-reference/file-conventions/loading",
          focus: [
            "Lokasi loading.tsx di route segment.",
            "Fallback ringan yang muncul saat content route belum siap.",
          ],
          ignoreForNow: [
            "Streaming status code dan Suspense custom boundaries.",
          ],
        },
        {
          source: "Next.js Docs",
          title: "Error Handling",
          url: "https://nextjs.org/docs/app/getting-started/error-handling",
          focus: [
            "error.tsx sebagai boundary untuk error render tak terduga.",
            "Client Component dan callback recovery pada error UI.",
          ],
          ignoreForNow: [
            "Server Functions, global errors, dan component-level error boundary.",
          ],
        },
        {
          source: "Next.js Docs",
          title: "Route Handlers",
          url: "https://nextjs.org/docs/app/getting-started/route-handlers",
          focus: [
            "Konvensi route.ts di dalam app directory.",
            "GET sederhana dengan Response.json.",
            "Konflik route.ts dan page.tsx pada segment yang sama.",
          ],
          ignoreForNow: [
            "Caching, database, middleware, dan HTTP method selain GET.",
          ],
        },
        {
          source: "Next.js Docs",
          title: "Metadata and OG images",
          url: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images",
          focus: [
            "metadata object untuk title dan description.",
            "Metadata API hanya di Server Components.",
          ],
          ignoreForNow: [
            "generateMetadata, Open Graph image, dan metadata streaming.",
          ],
        },
        {
          source: "Next.js Docs",
          title: "Environment Variables",
          url: "https://nextjs.org/docs/app/guides/environment-variables",
          focus: [
            ".env.local dan process.env.",
            "NEXT_PUBLIC_ hanya untuk value yang memang boleh tersedia di browser.",
            "Menghindari commit .env files yang berisi konfigurasi lokal atau secret.",
          ],
          ignoreForNow: [
            "Runtime environment strategy, test env, dan production deployment configuration.",
          ],
        },
      ],
      followUpAction:
        "Di Local Next.js App, tambahkan app/courses/loading.tsx dan app/courses/error.tsx, buat satu GET route handler di app/api, tambahkan metadata title/description pada page, lalu cek bahwa .env.local tidak masuk commit Git.",
    },
    {
      id: "nextjs-route-behavior-assessment-summary",
      type: "summary",
      points: [
        "Kamu siap lanjut bila dapat memilih file khusus sesuai perilaku route yang dibutuhkan.",
        "loading.tsx dan error.tsx memberi feedback serta recovery yang jelas pada route segment.",
        "route.ts, metadata, dan env memiliki tanggung jawab terpisah dari page UI.",
        "Module berikutnya adalah Local Next.js App, tempat kamu menerapkan route, layout, loading, error UI, metadata, dan Git dalam project nyata.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-route-behavior-assessment-recap",
      "nextjs-route-behavior-assessment-quiz",
      "nextjs-route-behavior-assessment-coding-practice",
      "nextjs-route-behavior-assessment-writing-practice",
      "nextjs-route-behavior-assessment-docs",
      "nextjs-route-behavior-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const nextjsRouteBehaviorAssessmentQuiz: Quiz = {
  id: "nextjs-route-behavior-assessment-quiz",
  lessonId: "nextjs-route-behavior-assessment",
  title: "Uji Kompetensi Next.js Route Behavior",
  passingScore: 70,
  questions: [
    {
      id: "nextjs-route-behavior-q1",
      type: "multiple-choice",
      question: "Apa fungsi app/courses/loading.tsx?",
      options: [
        "Menampilkan fallback UI saat route courses belum siap dirender",
        "Membuat endpoint GET /courses",
        "Menyimpan environment variable course",
        "Menentukan title browser untuk seluruh aplikasi",
      ],
      correctAnswer: "Menampilkan fallback UI saat route courses belum siap dirender",
      explanation:
        "loading.tsx adalah file khusus untuk loading UI pada route segment. Letaknya di folder courses, sehingga fallback berlaku pada segment tersebut dan child route-nya.",
    },
    {
      id: "nextjs-route-behavior-q2",
      type: "multiple-choice",
      question: "Mengapa error.tsx biasanya memakai \"use client\"?",
      options: [
        "Karena UI error menyediakan event handler untuk mencoba recovery",
        "Karena semua file khusus Next.js harus menjadi client",
        "Karena metadata hanya dapat dibuat di client",
        "Karena route handler hanya berjalan di browser",
      ],
      correctAnswer: "Karena UI error menyediakan event handler untuk mencoba recovery",
      explanation:
        "Error UI menyediakan tombol recovery yang memerlukan event handler. Karena itu, error.tsx menjadi Client Component. loading.tsx tidak otomatis memerlukan client boundary.",
    },
    {
      id: "nextjs-route-behavior-q3",
      type: "multiple-choice",
      question: "File mana yang benar untuk endpoint GET /api/course-summary?",
      options: [
        "app/api/course-summary/route.ts",
        "app/api/course-summary/page.tsx",
        "app/course-summary/loading.tsx",
        "components/api/course-summary.tsx",
      ],
      correctAnswer: "app/api/course-summary/route.ts",
      explanation:
        "Route Handlers menggunakan route.ts di dalam app directory. Folder api membantu memisahkannya dari page UI.",
    },
    {
      id: "nextjs-route-behavior-q4",
      type: "multiple-choice",
      question: "Di mana metadata title dan description statis dapat diekspor?",
      options: [
        "Pada Server Component seperti app/courses/page.tsx",
        "Hanya di Client Component dengan \"use client\"",
        "Hanya di .env.local",
        "Di dalam route.ts GET handler",
      ],
      correctAnswer: "Pada Server Component seperti app/courses/page.tsx",
      explanation:
        "Metadata API didukung pada Server Components. Page dapat mengekspor metadata sambil merender UI route seperti biasa.",
    },
    {
      id: "nextjs-route-behavior-q5",
      type: "multiple-choice",
      question: "Manakah penanganan environment variable yang paling aman?",
      options: [
        "Simpan token di .env.local tanpa NEXT_PUBLIC_ dan jangan commit file tersebut",
        "Tambahkan NEXT_PUBLIC_ ke semua token agar mudah dipakai di UI",
        "Tulis password langsung di page.tsx agar mudah ditemukan",
        "Commit .env.local supaya seluruh tim memakai secret yang sama",
      ],
      correctAnswer:
        "Simpan token di .env.local tanpa NEXT_PUBLIC_ dan jangan commit file tersebut",
      explanation:
        "Variable tanpa NEXT_PUBLIC_ hanya tersedia di server secara default. .env.local untuk konfigurasi lokal tidak perlu masuk Git, terutama bila memuat secret atau token.",
    },
  ],
};

const nextRouteBehaviorPracticePreviewCode = {
  html: "",
  css: "",
  js: "",
};

export const buildCourseLoadingUiChallenge: CodingChallenge = {
  id: "build-course-loading-ui",
  lessonId: "nextjs-loading-ui",
  title: "Build course loading UI",
  description:
    "Lengkapi app/courses/loading.tsx sebagai fallback ringan yang memberi konteks saat daftar course sedang disiapkan.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/courses/loading.tsx.",
    "Buat Loading sebagai default export tanpa \"use client\".",
    "Tambahkan section dengan aria-busy dan aria-label yang jelas.",
    "Tampilkan heading, pesan loading, dan tiga item skeleton sederhana.",
    "Cek otomatis membaca struktur file Next.js. Route tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `export default function Loading() {
  return <p>Memuat...</p>;
}`,
  },
  solutionCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `export default function Loading() {
  return (
    <section aria-busy="true" aria-label="Memuat daftar course">
      <h1>Course</h1>
      <p>Menyiapkan daftar course untukmu...</p>
      <ul aria-hidden="true">
        <li>Memuat item course</li>
        <li>Memuat item course</li>
        <li>Memuat item course</li>
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "File target dipahami sebagai app/courses/loading.tsx.",
    "Loading diexport sebagai default component tanpa client directive.",
    "Area loading memiliki aria-busy dan aria-label.",
    "Heading dan pesan menjelaskan content yang sedang disiapkan.",
    "Tiga item skeleton memberi bentuk awal daftar course.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "loading-export", label: "Loading diexport sebagai default function.", type: "contains", target: "export default function Loading()", valueIncludes: "export default function Loading()" },
      { id: "loading-section", label: "Loading UI memiliki section berlabel.", type: "contains", target: '<section aria-busy="true" aria-label="Memuat daftar course">', valueIncludes: '<section aria-busy="true" aria-label="Memuat daftar course">' },
      { id: "course-heading", label: "Loading UI menampilkan heading course.", type: "contains", target: "<h1>Course</h1>", valueIncludes: "<h1>Course</h1>" },
      { id: "loading-message", label: "Pesan loading memberi konteks.", type: "contains", target: "Menyiapkan daftar course untukmu...", valueIncludes: "Menyiapkan daftar course untukmu..." },
      { id: "skeleton-list", label: "Loading UI memiliki daftar skeleton.", type: "contains", target: '<ul aria-hidden="true">', valueIncludes: '<ul aria-hidden="true">' },
      { id: "skeleton-item", label: "Skeleton item course ditampilkan.", type: "contains", target: "<li>Memuat item course</li>", valueIncludes: "<li>Memuat item course</li>" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah loading.tsx untuk route courses. Cek otomatis membaca fallback UI; route Next.js tidak dijalankan di preview practice.",
    lines: [
      "loading.tsx memberi fallback untuk segment courses.",
      "User melihat context daftar course yang sedang disiapkan.",
      "Fallback tetap ringan dan tidak memerlukan client boundary.",
    ],
  },
  skillTags: ["Next.js", "Loading UI", "App Router", "Accessibility"],
};

export const buildCourseErrorRecoveryUiChallenge: CodingChallenge = {
  id: "build-course-error-recovery-ui",
  lessonId: "nextjs-error-ui",
  title: "Build course error recovery UI",
  description:
    "Lengkapi app/courses/error.tsx sebagai Client Component yang menampilkan pesan error route dan tombol recovery.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/courses/error.tsx.",
    "Tambahkan \"use client\" di atas file karena recovery memakai event handler.",
    "Terima error dan unstable_retry pada props CourseError.",
    "Tampilkan section role alert, pesan yang jelas, dan tombol Coba lagi.",
    "Cek otomatis membaca struktur error boundary. Route tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `export default function CourseError() {
  return <p>Terjadi masalah.</p>;
}`,
  },
  solutionCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `"use client";

type CourseErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function CourseError({
  error,
  unstable_retry,
}: CourseErrorProps) {
  console.error(error);

  return (
    <section role="alert">
      <h1>Daftar course belum bisa dimuat</h1>
      <p>Coba muat ulang bagian ini beberapa saat lagi.</p>
      <button type="button" onClick={() => unstable_retry()}>
        Coba lagi
      </button>
    </section>
  );
}`,
  },
  checklist: [
    "File target dipahami sebagai app/courses/error.tsx.",
    "\"use client\" berada sebelum declaration lain.",
    "CourseError menerima error dan unstable_retry.",
    "Pesan error memiliki role alert dan menjelaskan keadaan dengan tenang.",
    "Tombol Coba lagi memanggil unstable_retry.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "client-directive", label: "use client berada di atas file.", type: "contains", target: '"use client";', valueIncludes: '"use client";' },
      { id: "error-props", label: "Props memiliki error dengan digest opsional.", type: "contains", target: "error: Error & { digest?: string };", valueIncludes: "error: Error & { digest?: string };" },
      { id: "retry-props", label: "Props memiliki callback unstable_retry.", type: "contains", target: "unstable_retry: () => void;", valueIncludes: "unstable_retry: () => void;" },
      { id: "error-export", label: "CourseError diexport sebagai default function.", type: "contains", target: "export default function CourseError({", valueIncludes: "export default function CourseError({" },
      { id: "error-log", label: "Error dicatat untuk developer.", type: "contains", target: "console.error(error);", valueIncludes: "console.error(error);" },
      { id: "alert", label: "Fallback menggunakan role alert.", type: "contains", target: '<section role="alert">', valueIncludes: '<section role="alert">' },
      { id: "recovery-button", label: "Tombol memanggil unstable_retry.", type: "contains", target: "onClick={() => unstable_retry()}", valueIncludes: "onClick={() => unstable_retry()}" },
      { id: "recovery-copy", label: "Tombol memiliki copy recovery yang jelas.", type: "contains", target: "Coba lagi", valueIncludes: "Coba lagi" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah error.tsx untuk route courses. Cek otomatis membaca struktur Client Component dan recovery callback; route tidak dijalankan di preview practice.",
    lines: [
      "error.tsx menjadi Client Component untuk menyediakan recovery button.",
      "Error render route mendapat fallback yang tenang dan mudah dipahami.",
      "Tombol Coba lagi meminta Next.js mencoba segment tersebut kembali.",
    ],
  },
  skillTags: ["Next.js", "Error UI", "Client Components", "Recovery"],
};

export const createCourseSummaryRouteHandlerChallenge: CodingChallenge = {
  id: "create-course-summary-route-handler",
  lessonId: "nextjs-route-handlers",
  title: "Create course summary route handler",
  description:
    "Lengkapi app/api/course-summary/route.ts agar menyediakan Route Handler GET kecil yang mengembalikan JSON ringkasan course.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/api/course-summary/route.ts.",
    "Buat GET sebagai async function yang diexport.",
    "Kembalikan Response.json dengan totalCourses dan nextLesson.",
    "Jangan membuat page.tsx pada segment endpoint yang sama.",
    "Cek otomatis membaca struktur Route Handler. Endpoint tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `export async function GET() {
  return Response.json({});
}`,
  },
  solutionCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `export async function GET() {
  return Response.json({
    totalCourses: 3,
    nextLesson: "Server Components",
  });
}`,
  },
  checklist: [
    "File target dipahami sebagai app/api/course-summary/route.ts.",
    "GET diexport sebagai async function.",
    "Response.json dipakai untuk mengembalikan JSON.",
    "Payload memiliki totalCourses dan nextLesson.",
    "Endpoint dipisahkan dari page UI route.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "get-handler", label: "GET diexport sebagai async function.", type: "contains", target: "export async function GET()", valueIncludes: "export async function GET()" },
      { id: "json-response", label: "Handler mengembalikan Response.json.", type: "contains", target: "return Response.json({", valueIncludes: "return Response.json({" },
      { id: "total-courses", label: "Payload memiliki totalCourses.", type: "contains", target: "totalCourses: 3", valueIncludes: "totalCourses: 3" },
      { id: "next-lesson", label: "Payload memiliki nextLesson.", type: "contains", target: 'nextLesson: "Server Components"', valueIncludes: 'nextLesson: "Server Components"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah route.ts untuk endpoint GET. Cek otomatis membaca method dan JSON response; endpoint tidak dijalankan di preview practice.",
    lines: [
      "GET menangani request ke /api/course-summary.",
      "Response.json mengirim ringkasan course sebagai JSON.",
      "Route Handler tetap terpisah dari page UI.",
    ],
  },
  skillTags: ["Next.js", "Route Handlers", "GET", "JSON"],
};

export const addCourseRouteMetadataChallenge: CodingChallenge = {
  id: "add-course-route-metadata",
  lessonId: "nextjs-metadata",
  title: "Add course route metadata",
  description:
    "Lengkapi app/courses/page.tsx agar mengekspor metadata title dan description sambil tetap menjadi Server Component route page.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/courses/page.tsx.",
    "Import type Metadata dari next.",
    "Export metadata title dan description yang menjelaskan halaman courses.",
    "Pertahankan CoursesPage sebagai default export tanpa \"use client\".",
    "Cek otomatis membaca struktur metadata. Page tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `export default function CoursesPage() {
  return (
    <main>
      <h1>Course</h1>
    </main>
  );
}`,
  },
  solutionCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course | FluentStack",
  description: "Pilih lesson dan lanjutkan progres belajar frontend.",
};

export default function CoursesPage() {
  return (
    <main>
      <h1>Course</h1>
      <p>Pilih lesson yang ingin kamu lanjutkan.</p>
    </main>
  );
}`,
  },
  checklist: [
    "File target dipahami sebagai app/courses/page.tsx.",
    "Type Metadata diimport dari next.",
    "metadata menambahkan title dan description halaman courses.",
    "CoursesPage tetap default export tanpa client directive.",
    "Content route tetap terpisah dari metadata object.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "metadata-type", label: "Type Metadata diimport dari next.", type: "contains", target: 'import type { Metadata } from "next";', valueIncludes: 'import type { Metadata } from "next";' },
      { id: "metadata-export", label: "metadata diexport dengan type Metadata.", type: "contains", target: "export const metadata: Metadata = {", valueIncludes: "export const metadata: Metadata = {" },
      { id: "metadata-title", label: "Metadata memiliki title halaman courses.", type: "contains", target: 'title: "Course | FluentStack"', valueIncludes: 'title: "Course | FluentStack"' },
      { id: "metadata-description", label: "Metadata memiliki description halaman courses.", type: "contains", target: 'description: "Pilih lesson dan lanjutkan progres belajar frontend."', valueIncludes: 'description: "Pilih lesson dan lanjutkan progres belajar frontend."' },
      { id: "page-export", label: "CoursesPage tetap menjadi default export.", type: "contains", target: "export default function CoursesPage()", valueIncludes: "export default function CoursesPage()" },
      { id: "page-heading", label: "Page menampilkan heading course.", type: "contains", target: "<h1>Course</h1>", valueIncludes: "<h1>Course</h1>" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah Server Component page dengan metadata statis. Cek otomatis membaca export title dan description; page tidak dijalankan di preview practice.",
    lines: [
      "Metadata memberi title dan description untuk route courses.",
      "CoursesPage tetap menangani JSX content route.",
      "Tidak ada client boundary hanya untuk menambahkan metadata.",
    ],
  },
  skillTags: ["Next.js", "Metadata", "App Router", "SEO"],
};

export const classifyNextEnvironmentValuesChallenge: CodingChallenge = {
  id: "classify-next-environment-values",
  lessonId: "nextjs-environment-variables",
  title: "Classify Next environment values",
  description:
    "Lengkapi env map untuk membedakan token server-only dari nama aplikasi public serta memastikan .env.local tidak masuk commit.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah env map sebelum kamu membuat .env.local di Local Next.js App.",
    "Tambahkan COURSE_CATALOG_TOKEN sebagai server-only value di .env.local.",
    "Tambahkan NEXT_PUBLIC_APP_NAME sebagai browser value yang aman ditampilkan.",
    "Tandai kedua value tidak boleh di-commit melalui .env.local.",
    "Cek otomatis membaca klasifikasi env. Workspace tidak membaca atau membuat environment variable di device kamu.",
  ],
  starterCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `type EnvValue = {
  name: string;
  visibility: "server" | "browser";
  file: string;
  commit: boolean;
  purpose: string;
};

const envValues: EnvValue[] = [
  {
    name: "COURSE_CATALOG_TOKEN",
    visibility: "browser",
    file: ".env.local",
    commit: true,
    purpose: "course token",
  },
];

export default envValues;`,
  },
  solutionCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `type EnvValue = {
  name: string;
  visibility: "server" | "browser";
  file: string;
  commit: boolean;
  purpose: string;
};

const envValues: EnvValue[] = [
  {
    name: "COURSE_CATALOG_TOKEN",
    visibility: "server",
    file: ".env.local",
    commit: false,
    purpose: "private course service token",
  },
  {
    name: "NEXT_PUBLIC_APP_NAME",
    visibility: "browser",
    file: ".env.local",
    commit: false,
    purpose: "public app name shown in UI",
  },
];

export default envValues;`,
  },
  checklist: [
    "Env map membedakan server dan browser visibility.",
    "COURSE_CATALOG_TOKEN tetap server-only di .env.local.",
    "NEXT_PUBLIC_APP_NAME dipakai hanya untuk nama aplikasi public.",
    "Kedua value tidak di-commit bersama .env.local.",
    "Practice ini adalah klasifikasi struktur, bukan pembacaan env device secara nyata.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "env-type", label: "EnvValue map dibuat.", type: "contains", target: "type EnvValue = {", valueIncludes: "type EnvValue = {" },
      { id: "private-token", label: "Course token dicatat sebagai server-only.", type: "contains", target: 'name: "COURSE_CATALOG_TOKEN",\n    visibility: "server"', valueIncludes: 'name: "COURSE_CATALOG_TOKEN",\n    visibility: "server"' },
      { id: "token-file", label: "Course token berada di .env.local.", type: "contains", target: 'file: ".env.local",\n    commit: false,\n    purpose: "private course service token"', valueIncludes: 'file: ".env.local",\n    commit: false,\n    purpose: "private course service token"' },
      { id: "public-name", label: "Nama aplikasi memakai prefix NEXT_PUBLIC_.", type: "contains", target: 'name: "NEXT_PUBLIC_APP_NAME",\n    visibility: "browser"', valueIncludes: 'name: "NEXT_PUBLIC_APP_NAME",\n    visibility: "browser"' },
      { id: "public-name-file", label: "Nama aplikasi tetap berada di .env.local tanpa commit.", type: "contains", target: 'file: ".env.local",\n    commit: false,\n    purpose: "public app name shown in UI"', valueIncludes: 'file: ".env.local",\n    commit: false,\n    purpose: "public app name shown in UI"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target latihan adalah env map untuk Local Next.js App. Cek otomatis membaca visibility dan commit policy; preview tidak membaca value environment dari device kamu.",
    lines: [
      "COURSE_CATALOG_TOKEN tetap server-only dan tidak di-commit.",
      "NEXT_PUBLIC_APP_NAME boleh tersedia di browser karena bukan secret.",
      ".env.local menyimpan konfigurasi lokal di luar source code.",
    ],
  },
  skillTags: ["Next.js", "Environment Variables", "Security Basics"],
};

export const buildCourseRouteBehaviorCheckpointChallenge: CodingChallenge = {
  id: "build-course-route-behavior-checkpoint",
  lessonId: "nextjs-route-behavior-assessment",
  title: "Build course route behavior checkpoint",
  description:
    "Susun route feature map untuk courses yang memiliki loading UI, error recovery, endpoint GET, metadata, dan environment variable private yang tidak di-commit.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah checkpoint struktur App Router, bukan runtime preview.",
    "Tambahkan loading.tsx dan error.tsx untuk route courses.",
    "Tambahkan route.ts untuk endpoint GET di app/api/course-summary.",
    "Catat metadata title/description pada page courses.",
    "Tambahkan COURSE_CATALOG_TOKEN sebagai server-only value di .env.local tanpa commit.",
  ],
  starterCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `type RouteFeatureFile = {
  path: string;
  role: string;
  client?: boolean;
  detail: string;
};

const routeFeatureFiles: RouteFeatureFile[] = [
  {
    path: "app/courses/page.tsx",
    role: "page",
    client: true,
    detail: "course page and all route behavior",
  },
];

export default routeFeatureFiles;`,
  },
  solutionCode: {
    ...nextRouteBehaviorPracticePreviewCode,
    tsx: `type RouteFeatureFile = {
  path: string;
  role: string;
  client?: boolean;
  detail: string;
};

const routeFeatureFiles: RouteFeatureFile[] = [
  {
    path: "app/courses/loading.tsx",
    role: "loading UI",
    detail: "fallback for course route segment",
  },
  {
    path: "app/courses/error.tsx",
    role: "error recovery UI",
    client: true,
    detail: "shows recovery button with unstable_retry",
  },
  {
    path: "app/api/course-summary/route.ts",
    role: "GET route handler",
    detail: "returns course summary JSON",
  },
  {
    path: "app/courses/page.tsx",
    role: "server page metadata",
    detail: "title and description for courses route",
  },
  {
    path: ".env.local",
    role: "server environment",
    detail: "COURSE_CATALOG_TOKEN stays private and is not committed",
  },
];

export default routeFeatureFiles;`,
  },
  checklist: [
    "loading.tsx dipetakan sebagai fallback route courses.",
    "error.tsx dipetakan sebagai Client Component untuk recovery.",
    "route.ts dipetakan sebagai GET endpoint terpisah dari page UI.",
    "page.tsx tetap server untuk metadata title dan description.",
    ".env.local menyimpan token private tanpa commit.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "feature-type", label: "RouteFeatureFile map dibuat.", type: "contains", target: "type RouteFeatureFile = {", valueIncludes: "type RouteFeatureFile = {" },
      { id: "loading-file", label: "Loading UI ditempatkan di route courses.", type: "contains", target: 'path: "app/courses/loading.tsx",\n    role: "loading UI"', valueIncludes: 'path: "app/courses/loading.tsx",\n    role: "loading UI"' },
      { id: "error-file", label: "Error UI ditempatkan di route courses.", type: "contains", target: 'path: "app/courses/error.tsx",\n    role: "error recovery UI",\n    client: true', valueIncludes: 'path: "app/courses/error.tsx",\n    role: "error recovery UI",\n    client: true' },
      { id: "error-retry", label: "Error UI mencatat recovery callback.", type: "contains", target: 'detail: "shows recovery button with unstable_retry"', valueIncludes: 'detail: "shows recovery button with unstable_retry"' },
      { id: "handler-file", label: "GET route handler berada di app/api.", type: "contains", target: 'path: "app/api/course-summary/route.ts",\n    role: "GET route handler"', valueIncludes: 'path: "app/api/course-summary/route.ts",\n    role: "GET route handler"' },
      { id: "metadata-page", label: "Page server memiliki metadata route.", type: "contains", target: 'path: "app/courses/page.tsx",\n    role: "server page metadata"', valueIncludes: 'path: "app/courses/page.tsx",\n    role: "server page metadata"' },
      { id: "env-file", label: "Token private dipetakan ke .env.local.", type: "contains", target: 'path: ".env.local",\n    role: "server environment"', valueIncludes: 'path: ".env.local",\n    role: "server environment"' },
      { id: "env-private", label: "Token env tetap private dan tidak di-commit.", type: "contains", target: 'detail: "COURSE_CATALOG_TOKEN stays private and is not committed"', valueIncludes: 'detail: "COURSE_CATALOG_TOKEN stays private and is not committed"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Checkpoint memeriksa file map untuk route behavior courses. Cek otomatis membaca placement dan tanggung jawab file; preview tidak menjalankan route, endpoint, atau environment variable nyata.",
    lines: [
      "Route courses memiliki loading fallback dan error recovery yang terpisah.",
      "Endpoint GET, metadata page, dan env private tidak dicampur dengan UI behavior.",
      "COURSE_CATALOG_TOKEN tetap server-only dan tidak di-commit.",
    ],
  },
  skillTags: ["Next.js", "Route Behavior", "Configuration", "Readiness Checkpoint"],
};
