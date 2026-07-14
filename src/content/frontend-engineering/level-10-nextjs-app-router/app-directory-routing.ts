import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const appDirectoryAndRoutingModule: Module = {
  id: "nextjs-app-directory-routing",
  trackId: "frontend-engineering",
  title: "App Directory and Routing",
  slug: "app-directory-and-routing",
  description:
    "Memahami bagaimana folder dan file khusus di App Router membentuk page, layout, nested route, dynamic segment, dan route group.",
  order: 31,
  lessonIds: [
    "nextjs-app-directory",
    "nextjs-page-and-layout-files",
    "nextjs-nested-routes",
    "nextjs-dynamic-routes",
    "nextjs-route-groups",
    "nextjs-app-directory-routing-assessment",
  ],
  estimatedHours: 7,
  skillTags: ["Next.js", "App Router", "Routing", "Layouts", "Route Structure"],
};

export const nextjsAppDirectoryLesson: Lesson = {
  id: "nextjs-app-directory",
  trackId: "frontend-engineering",
  moduleId: "nextjs-app-directory-routing",
  title: "app Directory",
  slug: "nextjs-app-directory",
  description:
    "Mengenal app directory sebagai sumber struktur route pada Next.js App Router.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan peran app directory pada App Router",
    "Membedakan folder route segment dan file khusus",
    "Membaca folder tree kecil lalu memperkirakan URL-nya",
  ],
  skillTags: ["Next.js", "App Router", "Routing", "Project Structure"],
  blocks: [
    {
      id: "nextjs-app-directory-intro",
      type: "text",
      title: "Route dimulai dari struktur file",
      content:
        "Di Next.js App Router, folder di dalam app membentuk route segment. File khusus seperti page.tsx dan layout.tsx memberi tahu Next.js UI mana yang harus ditampilkan untuk segment tersebut. Ini berbeda dari React app biasa yang sering menentukan route lewat konfigurasi JavaScript terpisah.\n\nJangan menganggap setiap folder otomatis bisa dibuka lewat URL. Folder menjadi bagian route ketika memiliki file page.tsx atau memiliki child route yang dapat diakses. Pada module ini, fokuskan perhatian pada hubungan sederhana antara folder, file khusus, dan URL sebelum masuk ke Server Components atau data loading.",
    },
    {
      id: "nextjs-app-directory-tree",
      type: "code-example",
      title: "Baca route tree kecil dari folder app",
      language: "bash",
      code: `app/
├── layout.tsx
├── page.tsx
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   └── settings/
│       └── page.tsx
└── courses/
    └── [slug]/
        └── page.tsx`,
      explanation:
        "app/page.tsx membuat route /. app/dashboard/page.tsx membuat /dashboard, lalu app/dashboard/settings/page.tsx membuat /dashboard/settings. Folder [slug] adalah dynamic segment, sehingga app/courses/[slug]/page.tsx dapat menangani URL seperti /courses/react-basics. layout.tsx tidak menambah URL baru; ia membungkus page dan child layout pada segment tersebut.",
    },
    {
      id: "nextjs-app-directory-important",
      type: "callout",
      variant: "important",
      title: "File khusus menentukan peran, bukan nama component saja",
      content:
        "Next.js mengenali page.tsx dan layout.tsx dari nama file serta lokasinya. Menamai file CoursePage.tsx di dalam app/courses belum cukup untuk membuat route /courses. File tersebut dapat menjadi component pendukung, tetapi page.tsx adalah entry UI untuk route yang dapat diakses.",
    },
    {
      id: "nextjs-app-directory-quick-check",
      type: "quick-check",
      question:
        "Folder tree mana yang membuat route /dashboard/settings dapat diakses?",
      options: [
        "app/dashboard/settings/page.tsx",
        "app/dashboard/settings/Settings.tsx",
        "components/dashboard/settings.tsx",
        "app/settings/dashboard.tsx",
      ],
      correctAnswer: "app/dashboard/settings/page.tsx",
      explanation:
        "Pada App Router, folder dashboard dan settings membentuk segment URL, lalu page.tsx menjadi UI yang dapat diakses pada segment tersebut.",
    },
    {
      id: "nextjs-app-directory-summary",
      type: "summary",
      points: [
        "app directory adalah sumber struktur route pada App Router.",
        "Folder membentuk route segment; page.tsx membuat segment tersebut dapat diakses sebagai page.",
        "layout.tsx membungkus UI pada segment dan child route tanpa menambah URL sendiri.",
        "Berikutnya, kamu akan membedakan pekerjaan page.tsx dan layout.tsx dengan contoh dashboard kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-app-directory-intro",
      "nextjs-app-directory-tree",
      "nextjs-app-directory-important",
      "nextjs-app-directory-quick-check",
      "nextjs-app-directory-summary",
    ],
  },
};

export const nextjsPageAndLayoutFilesLesson: Lesson = {
  id: "nextjs-page-and-layout-files",
  trackId: "frontend-engineering",
  moduleId: "nextjs-app-directory-routing",
  title: "page.tsx and layout.tsx",
  slug: "nextjs-page-and-layout-files",
  description:
    "Membedakan UI khusus route pada page.tsx dari UI bersama yang dijaga layout.tsx.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan tanggung jawab page.tsx dan layout.tsx",
    "Membuat layout dashboard yang menerima children",
    "Memilih UI yang seharusnya dibagikan atau tetap berada di page",
  ],
  skillTags: ["Next.js", "Layouts", "Pages", "Composition"],
  blocks: [
    {
      id: "nextjs-page-and-layout-files-intro",
      type: "text",
      title: "Page menampilkan tujuan route, layout menjaga shell bersama",
      content:
        "page.tsx adalah UI untuk route tertentu. Sebagai contoh, app/dashboard/page.tsx menampilkan overview dashboard. layout.tsx adalah UI bersama yang membungkus page dan child route dalam segment yang sama. Dashboard layout dapat menampilkan navigation atau heading area yang tetap tersedia saat user berpindah dari /dashboard ke /dashboard/settings.\n\nJangan memindahkan semua markup ke layout hanya karena ia terlihat di satu page saat ini. Layout sebaiknya menampung shell yang memang dibagi oleh beberapa child route. Content khusus overview tetap lebih mudah dipahami ketika berada di page.tsx.",
    },
    {
      id: "nextjs-page-and-layout-files-layout-example",
      type: "code-example",
      title: "app/dashboard/layout.tsx membungkus dashboard routes",
      language: "tsx",
      code: `import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section aria-label="Dashboard area">
      <aside>
        <nav aria-label="Dashboard navigation">Dashboard navigation</nav>
      </aside>
      <main>{children}</main>
    </section>
  );
}`,
      explanation:
        "children adalah page atau nested layout yang berada di bawah app/dashboard. Layout tidak perlu mengetahui apakah children saat ini adalah overview atau settings. Ia hanya menyediakan shell bersama dan area untuk content route tersebut.",
    },
    {
      id: "nextjs-page-and-layout-files-page-example",
      type: "code-example",
      title: "app/dashboard/page.tsx menampilkan content overview",
      language: "tsx",
      code: `export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard overview</h1>
      <p>Lihat progres belajar dan lanjutkan lesson berikutnya.</p>
    </div>
  );
}`,
      explanation:
        "DashboardPage hanya menangani content route /dashboard. Saat file layout.tsx berada di folder yang sama, Next.js merender content ini di dalam children layout dashboard.",
    },
    {
      id: "nextjs-page-and-layout-files-coding-practice",
      type: "coding-practice",
      challengeId: "build-dashboard-layout-shell",
    },
    {
      id: "nextjs-page-and-layout-files-summary",
      type: "summary",
      points: [
        "page.tsx memberi UI untuk satu route yang dapat diakses.",
        "layout.tsx memberi shell bersama dan menerima children dari page atau nested layout.",
        "Letakkan UI bersama di layout hanya bila child route memang membutuhkannya bersama-sama.",
        "Berikutnya, kamu akan melihat bagaimana folder bersarang membentuk URL yang bersarang juga.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-page-and-layout-files-intro",
      "nextjs-page-and-layout-files-layout-example",
      "nextjs-page-and-layout-files-page-example",
      "nextjs-page-and-layout-files-coding-practice",
      "nextjs-page-and-layout-files-summary",
    ],
  },
};

export const nextjsNestedRoutesLesson: Lesson = {
  id: "nextjs-nested-routes",
  trackId: "frontend-engineering",
  moduleId: "nextjs-app-directory-routing",
  title: "Nested Routes",
  slug: "nextjs-nested-routes",
  description:
    "Membaca dan merencanakan route bersarang dari folder dashboard, settings, dan child layout.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Memetakan folder bersarang ke URL bersarang",
    "Menentukan lokasi page dan layout untuk dashboard sub-route",
    "Membedakan folder organisasi biasa dari segment route yang dapat diakses",
  ],
  skillTags: ["Next.js", "Routing", "Nested Routes", "Layouts"],
  blocks: [
    {
      id: "nextjs-nested-routes-intro",
      type: "text",
      title: "Setiap folder menambah satu segment URL",
      content:
        "Folder bersarang di dalam app membuat URL bersarang dengan urutan yang sama. app/dashboard/settings/page.tsx menjadi /dashboard/settings. Jika app/dashboard/layout.tsx ada, settings page juga berada di dalam shell dashboard karena layout membungkus child route.\n\nStruktur ini membantu menjaga feature tetap dekat dengan route-nya. Jangan membuat satu folder dashboard raksasa berisi semua page tanpa segment yang jelas. Gunakan folder ketika URL dan batas feature memang bertingkat, bukan hanya karena ingin mengelompokkan file secara visual.",
    },
    {
      id: "nextjs-nested-routes-tree",
      type: "code-example",
      title: "Dashboard dan settings sebagai nested route",
      language: "bash",
      code: `app/
└── dashboard/
    ├── layout.tsx          # shell untuk /dashboard dan child route
    ├── page.tsx            # /dashboard
    ├── settings/
    │   └── page.tsx        # /dashboard/settings
    └── lessons/
        └── page.tsx        # /dashboard/lessons`,
      explanation:
        "dashboard adalah segment pertama. settings dan lessons adalah child segment. Ketiga page berada dalam layout dashboard, tetapi masing-masing page tetap memiliki tanggung jawab content route sendiri.",
    },
    {
      id: "nextjs-nested-routes-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Folder tanpa page bukan otomatis route yang bisa dikunjungi",
      content:
        "app/dashboard/settings/Preferences.tsx adalah component pendukung, bukan route /dashboard/settings. Agar URL tersebut dapat diakses, folder settings memerlukan page.tsx. Component pendukung boleh diletakkan dekat dengan route, tetapi nama file khusus tetap menentukan entry route.",
    },
    {
      id: "nextjs-nested-routes-coding-practice",
      type: "coding-practice",
      challengeId: "plan-dashboard-settings-route-tree",
    },
    {
      id: "nextjs-nested-routes-summary",
      type: "summary",
      points: [
        "Folder bersarang membentuk segment URL bersarang.",
        "page.tsx menjadikan satu segment dapat diakses sebagai route.",
        "Layout pada parent segment membungkus page dan child route di bawahnya.",
        "Berikutnya, kamu akan membuat satu segment yang nilainya datang dari URL melalui folder [slug].",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-nested-routes-intro",
      "nextjs-nested-routes-tree",
      "nextjs-nested-routes-callout",
      "nextjs-nested-routes-coding-practice",
      "nextjs-nested-routes-summary",
    ],
  },
};

export const nextjsDynamicRoutesLesson: Lesson = {
  id: "nextjs-dynamic-routes",
  trackId: "frontend-engineering",
  moduleId: "nextjs-app-directory-routing",
  title: "Dynamic Routes",
  slug: "nextjs-dynamic-routes",
  description:
    "Menggunakan folder dynamic segment seperti [slug] untuk page detail yang URL-nya ditentukan data atau user input.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan tujuan dynamic segment [slug]",
    "Membaca params pada App Router page saat ini",
    "Membedakan dynamic segment dari folder URL biasa",
  ],
  skillTags: ["Next.js", "Routing", "Dynamic Routes", "Params"],
  blocks: [
    {
      id: "nextjs-dynamic-routes-intro",
      type: "text",
      title: "Satu page template untuk banyak URL detail",
      content:
        "Dynamic route digunakan ketika bagian URL belum diketahui saat kamu menulis folder tree. Contoh umum adalah course detail, blog post, atau product page. Folder [slug] berarti nilai segment itu akan tersedia sebagai params ketika route dibuka. app/courses/[slug]/page.tsx dapat menangani /courses/react-basics dan /courses/next-routing dengan page template yang sama.\n\nPada App Router Next.js saat ini, params pada page dapat diterima sebagai Promise. Page async menunggu params lalu membaca slug. Jangan masuk ke catch-all segment, static generation, atau data fetching dahulu; tujuan lesson ini hanya memahami hubungan folder [slug], URL, dan params.",
    },
    {
      id: "nextjs-dynamic-routes-example",
      type: "code-example",
      title: "app/courses/[slug]/page.tsx membaca slug dari params",
      language: "tsx",
      code: `type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Course: {slug}</h1>
      <p>Route ini menggunakan satu page template untuk banyak course.</p>
    </main>
  );
}`,
      explanation:
        "Nama folder [slug] menjadi nama property slug. Untuk URL /courses/next-routing, nilai slug adalah next-routing. Page tidak perlu membuat satu file baru untuk setiap course selama struktur UI detailnya sama.",
    },
    {
      id: "nextjs-dynamic-routes-warning",
      type: "callout",
      variant: "warning",
      title: "Dynamic segment bukan nama folder literal",
      content:
        "Folder bernama slug tanpa tanda kurung siku akan membuat URL /courses/slug secara literal. Hanya [slug] yang memberi tahu Next.js bahwa segment tersebut dinamis. Gunakan nama params yang menjelaskan data yang diharapkan, misalnya [courseSlug] atau [productId] bila itu membuat route lebih mudah dibaca.",
    },
    {
      id: "nextjs-dynamic-routes-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-slug-page",
    },
    {
      id: "nextjs-dynamic-routes-summary",
      type: "summary",
      points: [
        "Folder [slug] membuat dynamic segment yang nilainya berasal dari URL.",
        "params memberi page akses ke nilai segment tersebut.",
        "Satu page template dapat menangani banyak URL detail dengan struktur yang sama.",
        "Berikutnya, kamu akan menggunakan route groups untuk organisasi folder tanpa menambah segment URL.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-dynamic-routes-intro",
      "nextjs-dynamic-routes-example",
      "nextjs-dynamic-routes-warning",
      "nextjs-dynamic-routes-coding-practice",
      "nextjs-dynamic-routes-summary",
    ],
  },
};

export const nextjsRouteGroupsLesson: Lesson = {
  id: "nextjs-route-groups",
  trackId: "frontend-engineering",
  moduleId: "nextjs-app-directory-routing",
  title: "Route Groups",
  slug: "nextjs-route-groups",
  description:
    "Mengorganisasi route dengan folder dalam tanda kurung tanpa memasukkan nama folder tersebut ke URL.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan convention folder route group",
    "Memprediksi URL saat folder group digunakan",
    "Menghindari konflik path dan pengelompokan yang tidak perlu",
  ],
  skillTags: ["Next.js", "Routing", "Route Groups", "Project Organization"],
  blocks: [
    {
      id: "nextjs-route-groups-intro",
      type: "text",
      title: "Organisasi folder yang tidak mengubah URL",
      content:
        "Route group adalah folder dengan nama di dalam tanda kurung, misalnya (marketing) atau (app). Folder ini membantu memisahkan route berdasarkan area produk, tim, atau layout concern tanpa menambahkan nama group ke URL. app/(marketing)/about/page.tsx tetap menghasilkan /about, bukan /marketing/about.\n\nGunakan route group saat struktur project perlu lebih jelas. Jangan membuat group hanya untuk setiap folder kecil. Group juga tidak boleh menghasilkan URL yang konflik, misalnya dua page /about dari group berbeda. Fokus module ini adalah organisasi dasar, bukan multiple root layout atau perilaku navigation yang lebih kompleks.",
    },
    {
      id: "nextjs-route-groups-example",
      type: "code-example",
      title: "Route group memisahkan marketing dan area aplikasi",
      language: "bash",
      code: `app/
├── (marketing)/
│   ├── page.tsx             # /
│   └── about/
│       └── page.tsx         # /about
└── (app)/
    └── dashboard/
        └── page.tsx         # /dashboard`,
      explanation:
        "(marketing) dan (app) membantu pembaca folder tree melihat area produk yang berbeda. Tanda kurung membuat kedua folder ini tidak ikut menjadi segment URL. Folder dashboard tetap menjadi segment /dashboard karena namanya tidak memakai tanda kurung.",
    },
    {
      id: "nextjs-route-groups-checklist",
      type: "callout",
      variant: "tip",
      title: "Checklist sebelum menambah route group",
      content:
        "Pastikan group menjelaskan concern yang nyata seperti marketing dan app. Periksa bahwa dua group tidak membuat URL yang sama. Tetap letakkan page.tsx pada segment yang memang dapat diakses. Jika folder tree sudah jelas tanpa group, tidak ada kebutuhan untuk menambahnya sekarang.",
    },
    {
      id: "nextjs-route-groups-quick-check",
      type: "quick-check",
      question:
        "URL apa yang dibuat oleh app/(marketing)/about/page.tsx?",
      options: ["/about", "/marketing/about", "/(marketing)/about", "/app/marketing/about"],
      correctAnswer: "/about",
      explanation:
        "Nama folder route group di dalam tanda kurung hanya dipakai untuk organisasi. Ia tidak masuk ke URL path.",
    },
    {
      id: "nextjs-route-groups-summary",
      type: "summary",
      points: [
        "Route group memakai folder dalam tanda kurung seperti (marketing).",
        "Nama route group tidak menjadi bagian URL.",
        "Gunakan group untuk organization concern yang nyata dan hindari path conflict.",
        "Berikutnya, Uji Kompetensi akan menggabungkan page, layout, nested route, dynamic segment, dan route group dalam satu route tree kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-route-groups-intro",
      "nextjs-route-groups-example",
      "nextjs-route-groups-checklist",
      "nextjs-route-groups-quick-check",
      "nextjs-route-groups-summary",
    ],
  },
};

export const nextjsAppDirectoryRoutingAssessmentLesson: Lesson = {
  id: "nextjs-app-directory-routing-assessment",
  trackId: "frontend-engineering",
  moduleId: "nextjs-app-directory-routing",
  title: "Uji Kompetensi App Directory and Routing",
  slug: "nextjs-app-directory-routing-assessment",
  description:
    "Checkpoint kesiapan membaca dan merencanakan route tree App Router yang kecil dengan page, layout, nested route, dynamic segment, dan route group.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Mengecek pemahaman folder dan file route App Router",
    "Menyusun route tree yang menghasilkan URL sesuai kebutuhan",
    "Menjelaskan alasan page, layout, dynamic segment, dan route group dipakai",
  ],
  skillTags: ["Next.js", "App Router", "Routing", "Assessment"],
  blocks: [
    {
      id: "nextjs-app-directory-routing-assessment-recap",
      type: "text",
      title: "Checkpoint: baca struktur dulu, baru menulis feature",
      content:
        "Uji Kompetensi ini memeriksa apakah kamu dapat melihat folder tree App Router lalu menjelaskan URL dan peran setiap file khusus. Kamu akan menyusun route map kecil untuk marketing page, dashboard shell, course detail dinamis, dan route group.\n\nKamu belum perlu middleware, parallel route, intercepting route, server action, authentication, database, caching strategy, atau deployment. Fokusnya tetap pada mapping folder dan file ke route yang dapat dipahami tim.",
    },
    {
      id: "nextjs-app-directory-routing-assessment-quiz",
      type: "quiz",
      quizId: "nextjs-app-directory-routing-assessment-quiz",
    },
    {
      id: "nextjs-app-directory-routing-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-learning-route-tree-checkpoint",
    },
    {
      id: "nextjs-app-directory-routing-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis route architecture note singkat untuk feature learning app dengan format berikut:\n- Route yang perlu tersedia:\n- Folder dan file page.tsx yang membuat setiap route dapat diakses:\n- Layout yang dibagikan dan area yang dibungkusnya:\n- Dynamic segment yang dipakai serta nilai params-nya:\n- Route group yang dipakai atau alasan tidak memakainya:\n- Satu risiko path conflict atau file placement yang perlu dihindari:\n\nTulis sebagai catatan implementasi untuk engineer lain, bukan daftar istilah.",
      placeholder:
        "Route yang perlu tersedia: /, /dashboard, /dashboard/courses/react-basics, dan /about.\nFolder dan file page.tsx: app/(marketing)/page.tsx untuk /, app/(marketing)/about/page.tsx untuk /about, app/(app)/dashboard/page.tsx untuk /dashboard, serta app/(app)/dashboard/courses/[slug]/page.tsx untuk detail course.\nLayout: app/(app)/dashboard/layout.tsx membungkus dashboard dan seluruh child route course.\nDynamic segment: [slug] memberi params.slug seperti react-basics.\nRoute group: (marketing) dan (app) memisahkan concern tanpa mengubah URL.\nRisiko: jangan membuat about page lagi di group lain karena keduanya akan menghasilkan /about.",
      minimumCharacters: 520,
      checklist: [
        "Menyebut URL dan file page.tsx yang sesuai.",
        "Menjelaskan layout beserta child route yang dibungkusnya.",
        "Menyebut dynamic segment dan nilai params yang tersedia.",
        "Membedakan route group dari segment URL biasa.",
        "Menyebut satu risiko conflict atau placement yang konkret.",
      ],
      modelAnswer:
        "Feature learning app membutuhkan / untuk landing, /about untuk informasi, /dashboard untuk overview learner, dan /dashboard/courses/[slug] untuk detail course. Saya menaruh landing serta about di app/(marketing) agar concern marketing terpisah tanpa mengubah URL. Dashboard memakai app/(app)/dashboard/page.tsx dan dashboard/layout.tsx agar navigation dashboard membungkus overview serta course detail. Folder app/(app)/dashboard/courses/[slug]/page.tsx menerima params.slug, misalnya react-basics. Saya tidak membuat /about lagi di group app karena dua page dari group berbeda yang menghasilkan path sama akan konflik. Component pendukung seperti CourseCard tetap berada dekat route bila perlu, tetapi tidak menggantikan page.tsx sebagai entry route.",
    },
    {
      id: "nextjs-app-directory-routing-assessment-docs",
      type: "documentation-bridge",
      title: "Baca file conventions dari docs Next.js",
      description:
        "Gunakan docs resmi ini untuk memeriksa route tree sebelum membuatnya di Local Next.js App. Fokus pada nama file, folder segment, dan URL yang dihasilkan.",
      links: [
        {
          source: "Next.js",
          title: "App Router",
          url: "https://nextjs.org/docs/app",
          focus: [
            "peran App Router",
            "hubungan project structure dan routing",
            "bagian dasar yang perlu dipelajari berikutnya",
          ],
          ignoreForNow: ["Server Functions", "advanced navigation optimization"],
        },
        {
          source: "Next.js",
          title: "Layouts and Pages",
          url: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
          focus: [
            "page.tsx sebagai page route",
            "layout.tsx dan children",
            "nested folders untuk nested route",
          ],
          ignoreForNow: ["Link optimization details"],
        },
        {
          source: "Next.js",
          title: "Dynamic Route Segments",
          url: "https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes",
          focus: [
            "folder [slug]",
            "params pada page",
            "satu template untuk URL detail berbeda",
          ],
          ignoreForNow: ["catch-all segments", "generateStaticParams"],
        },
        {
          source: "Next.js",
          title: "Route Groups",
          url: "https://nextjs.org/docs/app/api-reference/file-conventions/route-groups",
          focus: [
            "folder dalam tanda kurung",
            "organization tanpa URL segment",
            "path conflict antar group",
          ],
          ignoreForNow: ["multiple root layouts"],
        },
      ],
      followUpAction:
        "Di Local Next.js App, buat satu route tree kecil dengan home page, dashboard layout, dashboard settings page, dan course detail [slug]. Sebelum menjalankan app, tulis prediksi URL setiap page lalu bandingkan dengan route yang benar di browser.",
    },
    {
      id: "nextjs-app-directory-routing-assessment-summary",
      type: "summary",
      points: [
        "app directory memakai folder dan file khusus untuk membentuk App Router route.",
        "page.tsx membuat UI route; layout.tsx membungkus page dan child route pada segmentnya.",
        "Nested folder, [slug], dan route group masing-masing memiliki dampak URL yang berbeda.",
        "Route tree yang jelas memudahkan feature tumbuh tanpa kehilangan batas file dan URL.",
        "Berikutnya, Server Components and Client Components akan menjelaskan batas rendering dan interactivity di dalam route tersebut.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-app-directory-routing-assessment-recap",
      "nextjs-app-directory-routing-assessment-quiz",
      "nextjs-app-directory-routing-assessment-coding-practice",
      "nextjs-app-directory-routing-assessment-writing-practice",
      "nextjs-app-directory-routing-assessment-docs",
      "nextjs-app-directory-routing-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const nextjsAppDirectoryRoutingAssessmentQuiz: Quiz = {
  id: "nextjs-app-directory-routing-assessment-quiz",
  lessonId: "nextjs-app-directory-routing-assessment",
  title: "Uji Kompetensi App Directory and Routing",
  passingScore: 70,
  questions: [
    {
      id: "nextjs-app-directory-routing-q1",
      type: "multiple-choice",
      question: "Apa peran utama app/page.tsx pada App Router?",
      options: [
        "Menyediakan UI untuk route root / melalui default export component",
        "Menyimpan semua shared navigation aplikasi",
        "Menjadi file konfigurasi Next.js",
        "Membuat semua folder di project menjadi URL",
      ],
      correctAnswer: "Menyediakan UI untuk route root / melalui default export component",
      explanation:
        "page.tsx adalah file khusus yang membuat segment route dapat diakses. app/page.tsx berada pada root app sehingga menjadi route /.",
    },
    {
      id: "nextjs-app-directory-routing-q2",
      type: "multiple-choice",
      question: "Apa manfaat app/dashboard/layout.tsx?",
      options: [
        "Membungkus page dashboard dan child route dengan UI bersama melalui children",
        "Membuat URL /layout/dashboard",
        "Menggantikan kebutuhan page.tsx pada dashboard",
        "Membaca semua params dynamic route secara global",
      ],
      correctAnswer:
        "Membungkus page dashboard dan child route dengan UI bersama melalui children",
      explanation:
        "Layout memberi shell bersama untuk segment dan child route. page.tsx tetap diperlukan agar route tertentu memiliki UI yang dapat diakses.",
    },
    {
      id: "nextjs-app-directory-routing-q3",
      type: "multiple-choice",
      question: "Folder mana yang membuat dynamic segment bernama slug?",
      options: ["[slug]", "slug", "(slug)", "{slug}"],
      correctAnswer: "[slug]",
      explanation:
        "Tanda kurung siku membuat dynamic segment. Nilainya tersedia sebagai params.slug untuk route yang memakai segment tersebut.",
    },
    {
      id: "nextjs-app-directory-routing-q4",
      type: "multiple-choice",
      question: "URL apa yang dihasilkan oleh app/(marketing)/about/page.tsx?",
      options: ["/about", "/marketing/about", "/(marketing)/about", "/app/about"],
      correctAnswer: "/about",
      explanation:
        "Route group memakai folder dalam tanda kurung hanya untuk organization. Nama group tidak menjadi bagian URL.",
    },
    {
      id: "nextjs-app-directory-routing-q5",
      type: "true-false",
      question: "Dua route group berbeda boleh memiliki page yang sama-sama menghasilkan URL /about.",
      correctAnswer: false,
      explanation:
        "Route groups tidak masuk URL. Karena itu, dua page dari group berbeda yang sama-sama menghasilkan /about akan membuat path conflict.",
    },
  ],
};

const nextRoutePracticePreviewCode = {
  html: "",
  css: "",
  js: "",
};

export const buildDashboardLayoutShellChallenge: CodingChallenge = {
  id: "build-dashboard-layout-shell",
  lessonId: "nextjs-page-and-layout-files",
  title: "Build dashboard layout shell",
  description:
    "Lengkapi app/dashboard/layout.tsx agar menyediakan navigation shell dan area children untuk dashboard routes.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/dashboard/layout.tsx.",
    "Gunakan ReactNode untuk children pada DashboardLayout props.",
    "Buat section yang diberi aria-label Dashboard area.",
    "Tambahkan aside dengan nav dashboard dan main untuk children.",
    "Cek otomatis membaca struktur file Next.js; layout tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <main>{children}</main>;
}`,
  },
  solutionCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section aria-label="Dashboard area">
      <aside>
        <nav aria-label="Dashboard navigation">Dashboard navigation</nav>
      </aside>
      <main>{children}</main>
    </section>
  );
}`,
  },
  checklist: [
    "DashboardLayout menerima children sebagai ReactNode.",
    "Layout default export dibuat untuk app/dashboard/layout.tsx.",
    "Section dashboard memiliki aria-label.",
    "Navigation berada di aside dengan aria-label yang jelas.",
    "children dirender di main sebagai area content route.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-node", label: "ReactNode diimport untuk children.", type: "contains", target: 'import type { ReactNode } from "react";', valueIncludes: 'import type { ReactNode } from "react";' },
      { id: "layout-props", label: "DashboardLayoutProps memiliki children.", type: "contains", target: "children: ReactNode;", valueIncludes: "children: ReactNode;" },
      { id: "layout-export", label: "DashboardLayout diexport sebagai default.", type: "contains", target: "export default function DashboardLayout({ children }: DashboardLayoutProps)", valueIncludes: "export default function DashboardLayout({ children }: DashboardLayoutProps)" },
      { id: "dashboard-area", label: "Layout memiliki dashboard area berlabel.", type: "contains", target: '<section aria-label="Dashboard area">', valueIncludes: '<section aria-label="Dashboard area">' },
      { id: "aside", label: "Layout memiliki aside navigation.", type: "contains", target: "<aside>", valueIncludes: "<aside>" },
      { id: "nav", label: "Navigation memiliki aria-label.", type: "contains", target: '<nav aria-label="Dashboard navigation">', valueIncludes: '<nav aria-label="Dashboard navigation">' },
      { id: "children", label: "children dirender di main.", type: "contains", target: "<main>{children}</main>", valueIncludes: "<main>{children}</main>" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah app/dashboard/layout.tsx. Cek otomatis membaca shell route; layout ini tidak dijalankan di preview practice karena workspace belum menjalankan App Router.",
    lines: [
      "DashboardLayout adalah default export untuk segment dashboard.",
      "Navigation shell berada di aside.",
      "children menjadi area page atau child route di main.",
    ],
  },
  skillTags: ["Next.js", "App Router", "Layouts", "Accessibility"],
};

export const planDashboardSettingsRouteTreeChallenge: CodingChallenge = {
  id: "plan-dashboard-settings-route-tree",
  lessonId: "nextjs-nested-routes",
  title: "Plan dashboard settings route tree",
  description:
    "Lengkapi file map untuk dashboard overview, settings, dan lessons agar setiap URL memiliki page.tsx serta dashboard memiliki layout bersama.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah route map untuk direncanakan sebelum membuat file di Local Next.js App.",
    "Tambahkan dashboard layout, dashboard page, settings page, dan lessons page.",
    "Isi URL yang dihasilkan oleh setiap page route.",
    "Jangan menambahkan Preferences.tsx sebagai pengganti settings/page.tsx.",
    "Cek otomatis membaca struktur route map; workspace tidak membuat folder di device kamu.",
  ],
  starterCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `type RouteFile = {
  path: string;
  purpose: string;
  url?: string;
};

const routeFiles: RouteFile[] = [
  { path: "app/dashboard/page.tsx", purpose: "dashboard overview", url: "/dashboard" },
];

export default routeFiles;`,
  },
  solutionCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `type RouteFile = {
  path: string;
  purpose: string;
  url?: string;
};

const routeFiles: RouteFile[] = [
  { path: "app/dashboard/layout.tsx", purpose: "shared dashboard shell" },
  { path: "app/dashboard/page.tsx", purpose: "dashboard overview", url: "/dashboard" },
  { path: "app/dashboard/settings/page.tsx", purpose: "settings page", url: "/dashboard/settings" },
  { path: "app/dashboard/lessons/page.tsx", purpose: "lessons page", url: "/dashboard/lessons" },
];

export default routeFiles;`,
  },
  checklist: [
    "Route map mencantumkan dashboard layout bersama.",
    "dashboard/page.tsx menghasilkan /dashboard.",
    "settings/page.tsx menghasilkan /dashboard/settings.",
    "lessons/page.tsx menghasilkan /dashboard/lessons.",
    "Setiap URL yang dapat diakses memiliki page.tsx.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "route-file-type", label: "RouteFile map dibuat.", type: "contains", target: "type RouteFile = {", valueIncludes: "type RouteFile = {" },
      { id: "layout", label: "Dashboard memiliki layout bersama.", type: "contains", target: 'path: "app/dashboard/layout.tsx"', valueIncludes: 'path: "app/dashboard/layout.tsx"' },
      { id: "dashboard-page", label: "Dashboard page dibuat.", type: "contains", target: 'path: "app/dashboard/page.tsx"', valueIncludes: 'path: "app/dashboard/page.tsx"' },
      { id: "dashboard-url", label: "Dashboard page memetakan /dashboard.", type: "contains", target: 'url: "/dashboard"', valueIncludes: 'url: "/dashboard"' },
      { id: "settings-page", label: "Settings page dibuat sebagai nested route.", type: "contains", target: 'path: "app/dashboard/settings/page.tsx"', valueIncludes: 'path: "app/dashboard/settings/page.tsx"' },
      { id: "settings-url", label: "Settings memetakan /dashboard/settings.", type: "contains", target: 'url: "/dashboard/settings"', valueIncludes: 'url: "/dashboard/settings"' },
      { id: "lessons-page", label: "Lessons page dibuat sebagai nested route.", type: "contains", target: 'path: "app/dashboard/lessons/page.tsx"', valueIncludes: 'path: "app/dashboard/lessons/page.tsx"' },
      { id: "lessons-url", label: "Lessons memetakan /dashboard/lessons.", type: "contains", target: 'url: "/dashboard/lessons"', valueIncludes: 'url: "/dashboard/lessons"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target latihan adalah route map yang dapat kamu terjemahkan ke folder nyata di Local Next.js App. Cek otomatis memeriksa path dan URL; preview tidak menjalankan route atau membuat folder project secara otomatis.",
    lines: [
      "Dashboard layout membungkus overview, settings, dan lessons.",
      "Nested folder menghasilkan URL nested yang sama urutannya.",
      "page.tsx tetap diperlukan pada setiap route yang dapat dibuka.",
    ],
  },
  skillTags: ["Next.js", "App Router", "Nested Routes", "Project Structure"],
};

export const buildCourseSlugPageChallenge: CodingChallenge = {
  id: "build-course-slug-page",
  lessonId: "nextjs-dynamic-routes",
  title: "Build course slug page",
  description:
    "Lengkapi app/courses/[slug]/page.tsx agar membaca params.slug dan menampilkan course detail sesuai URL dynamic segment.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/courses/[slug]/page.tsx.",
    "Buat CoursePageProps dengan params Promise yang memuat slug string.",
    "Buat CoursePage sebagai async default export.",
    "Tunggu params, lalu baca slug dan tampilkan di heading.",
    "Cek otomatis membaca struktur dynamic route; route tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `export default function CoursePage() {
  return (
    <main>
      <h1>Course detail</h1>
    </main>
  );
}`,
  },
  solutionCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Course: {slug}</h1>
      <p>Route ini menggunakan satu page template untuk banyak course.</p>
    </main>
  );
}`,
  },
  checklist: [
    "CoursePageProps memiliki params Promise dengan slug string.",
    "CoursePage adalah async default export.",
    "params ditunggu sebelum membaca slug.",
    "Heading menampilkan nilai slug dari URL.",
    "File target dipahami sebagai app/courses/[slug]/page.tsx.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "page-props", label: "CoursePageProps memiliki params slug.", type: "contains", target: "params: Promise<{ slug: string }>;", valueIncludes: "params: Promise<{ slug: string }>;" },
      { id: "async-page", label: "CoursePage diexport sebagai async default function.", type: "contains", target: "export default async function CoursePage({ params }: CoursePageProps)", valueIncludes: "export default async function CoursePage({ params }: CoursePageProps)" },
      { id: "await-params", label: "params ditunggu sebelum dibaca.", type: "contains", target: "const { slug } = await params;", valueIncludes: "const { slug } = await params;" },
      { id: "heading", label: "Heading menampilkan slug.", type: "contains", target: "<h1>Course: {slug}</h1>", valueIncludes: "<h1>Course: {slug}</h1>" },
      { id: "route-copy", label: "Page menjelaskan template dynamic route.", type: "contains", target: "satu page template untuk banyak course", valueIncludes: "satu page template untuk banyak course" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target file adalah app/courses/[slug]/page.tsx. Untuk URL /courses/next-routing, params.slug bernilai next-routing; cek otomatis memeriksa struktur page tanpa menjalankan App Router preview.",
    lines: [
      "Folder [slug] menjadi dynamic segment URL.",
      "params menyediakan nilai slug untuk page detail.",
      "Satu CoursePage dapat menangani banyak URL course.",
    ],
  },
  skillTags: ["Next.js", "App Router", "Dynamic Routes", "Params"],
};

export const buildLearningRouteTreeCheckpointChallenge: CodingChallenge = {
  id: "build-learning-route-tree-checkpoint",
  lessonId: "nextjs-app-directory-routing-assessment",
  title: "Build learning route tree checkpoint",
  description:
    "Susun route map kecil untuk marketing, dashboard shell, course detail dinamis, dan route groups tanpa membuat URL yang keliru.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan routeFiles untuk merencanakan file App Router sebelum membuatnya di Local Next.js App.",
    "Tambahkan marketing home dan about di route group (marketing).",
    "Tambahkan dashboard layout dan dashboard overview di route group (app).",
    "Tambahkan course detail di dashboard/courses/[slug]/page.tsx.",
    "Pastikan URL tidak memasukkan nama route group dan course detail menyimpan params slug.",
    "Cek otomatis membaca route map, bukan membuat atau menjalankan project Next.js.",
  ],
  starterCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `type RouteFile = {
  path: string;
  purpose: string;
  url?: string;
  params?: string;
};

const routeFiles: RouteFile[] = [
  { path: "app/(marketing)/page.tsx", purpose: "marketing home", url: "/" },
];

export default routeFiles;`,
  },
  solutionCode: {
    ...nextRoutePracticePreviewCode,
    tsx: `type RouteFile = {
  path: string;
  purpose: string;
  url?: string;
  params?: string;
};

const routeFiles: RouteFile[] = [
  { path: "app/(marketing)/page.tsx", purpose: "marketing home", url: "/" },
  { path: "app/(marketing)/about/page.tsx", purpose: "about page", url: "/about" },
  { path: "app/(app)/dashboard/layout.tsx", purpose: "shared dashboard shell" },
  { path: "app/(app)/dashboard/page.tsx", purpose: "dashboard overview", url: "/dashboard" },
  {
    path: "app/(app)/dashboard/courses/[slug]/page.tsx",
    purpose: "course detail",
    url: "/dashboard/courses/[slug]",
    params: "slug",
  },
];

export default routeFiles;`,
  },
  checklist: [
    "Marketing group memiliki home dan about page tanpa segment marketing di URL.",
    "App group memiliki dashboard layout dan overview page.",
    "Course detail berada di nested route dashboard/courses/[slug].",
    "Course detail memetakan URL /dashboard/courses/[slug] dan params slug.",
    "Setiap route yang dapat dibuka memakai page.tsx.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "route-file-type", label: "RouteFile map dibuat.", type: "contains", target: "type RouteFile = {", valueIncludes: "type RouteFile = {" },
      { id: "marketing-home", label: "Marketing home memakai route group.", type: "contains", target: 'path: "app/(marketing)/page.tsx"', valueIncludes: 'path: "app/(marketing)/page.tsx"' },
      { id: "marketing-about", label: "Marketing about dibuat.", type: "contains", target: 'path: "app/(marketing)/about/page.tsx"', valueIncludes: 'path: "app/(marketing)/about/page.tsx"' },
      { id: "about-url", label: "About memetakan /about tanpa nama group.", type: "contains", target: 'url: "/about"', valueIncludes: 'url: "/about"' },
      { id: "dashboard-layout", label: "Dashboard layout dibuat dalam app group.", type: "contains", target: 'path: "app/(app)/dashboard/layout.tsx"', valueIncludes: 'path: "app/(app)/dashboard/layout.tsx"' },
      { id: "dashboard-page", label: "Dashboard overview dibuat.", type: "contains", target: 'path: "app/(app)/dashboard/page.tsx"', valueIncludes: 'path: "app/(app)/dashboard/page.tsx"' },
      { id: "dashboard-url", label: "Dashboard memetakan /dashboard.", type: "contains", target: 'url: "/dashboard"', valueIncludes: 'url: "/dashboard"' },
      { id: "dynamic-page", label: "Course detail memakai dynamic segment slug.", type: "contains", target: 'path: "app/(app)/dashboard/courses/[slug]/page.tsx"', valueIncludes: 'path: "app/(app)/dashboard/courses/[slug]/page.tsx"' },
      { id: "dynamic-url", label: "Course detail memetakan URL dynamic.", type: "contains", target: 'url: "/dashboard/courses/[slug]"', valueIncludes: 'url: "/dashboard/courses/[slug]"' },
      { id: "slug-param", label: "Course detail menyimpan params slug.", type: "contains", target: 'params: "slug"', valueIncludes: 'params: "slug"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Target latihan adalah route tree untuk diterapkan di Local Next.js App. Cek otomatis memeriksa file path, URL, dan params; preview tidak menjalankan folder App Router atau route sebenarnya.",
    lines: [
      "Route group mengorganisasi marketing dan app tanpa menjadi URL segment.",
      "Dashboard layout membungkus overview serta course detail.",
      "[slug] menangani banyak route detail melalui satu page template.",
    ],
  },
  skillTags: ["Next.js", "App Router", "Routing", "Route Groups", "Assessment"],
};
