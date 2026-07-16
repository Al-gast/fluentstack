import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const localNextjsAppModule: Module = {
  id: "local-nextjs-app",
  trackId: "frontend-engineering",
  title: "Local Next.js App",
  slug: "local-nextjs-app",
  description:
    "Membuat, menjalankan, mengembangkan, menyimpan, dan menjelaskan Next.js App Router project kecil di perangkat sendiri dengan Git dan GitHub.",
  order: 34,
  lessonIds: [
    "setup-local-nextjs-project",
    "run-nextjs-dev-server",
    "create-nextjs-route-layout",
    "add-nextjs-loading-error-ui",
    "add-nextjs-metadata",
    "push-nextjs-project-to-github",
    "local-nextjs-app-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["Next.js", "App Router", "Local Workflow", "npm", "Git", "GitHub"],
};

export const setupLocalNextjsProjectLesson: Lesson = {
  id: "setup-local-nextjs-project",
  trackId: "frontend-engineering",
  moduleId: "local-nextjs-app",
  title: "Membuat Next.js Project Lokal",
  slug: "setup-local-nextjs-project",
  description:
    "Membuat Next.js App Router project kecil di perangkat sendiri dengan create-next-app.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan tujuan Local Next.js App milestone",
    "Mengecek kesiapan Node.js, npm, dan Git",
    "Membuat Next.js project dengan App Router",
    "Membuka project sebagai workspace di code editor",
  ],
  skillTags: ["Next.js", "create-next-app", "npm", "Local Workflow"],
  blocks: [
    {
      id: "setup-local-nextjs-project-intro",
      type: "text",
      title: "Saatnya menjalankan App Router di perangkat kamu",
      content:
        "Lesson dan practice FluentStack sudah membantu kamu membaca App Router, boundary server/client, serta route behavior. Pada Local Next.js App, kamu menggabungkannya dalam project nyata: membuat folder project, menjalankan dev server, mengedit app directory, lalu menyimpan perubahan dengan Git dan GitHub.\n\nTargetnya tetap kecil. Buat dashboard belajar sederhana, mini documentation site, atau product/info site dengan beberapa route. Yang dilatih adalah workflow source code, terminal, browser lokal, file structure, dan commit yang dapat dijelaskan.",
    },
    {
      id: "setup-local-nextjs-project-prerequisite",
      type: "callout",
      variant: "important",
      title: "Prasyarat sebelum mulai",
      content:
        "Pastikan Node.js, npm, dan Git tersedia. Jalankan `node -v`, `npm -v`, dan `git --version`. Dokumentasi Next.js saat ini membutuhkan Node.js minimal versi 20.9. Jika salah satu command tidak dikenali, selesaikan instalasi tool tersebut sebelum membuat project.",
    },
    {
      id: "setup-local-nextjs-project-resources",
      type: "resource-links",
      title: "Tool dan dokumentasi setup",
      description: "Gunakan sumber resmi ini bila tool belum tersedia atau kamu ingin mengecek pilihan create-next-app.",
      links: [
        { source: "Next.js Docs", title: "Installation", description: "Panduan create-next-app, syarat Node.js, dan struktur awal App Router.", url: "https://nextjs.org/docs/app/getting-started/installation", label: "Buka Next.js Installation", kind: "required" },
        { source: "Node.js", title: "Download Node.js", description: "Install Node.js agar node dan npm tersedia di terminal.", url: "https://nodejs.org/en/download", label: "Download Node.js", kind: "required" },
        { source: "Git", title: "Git Downloads", description: "Install Git bila command git belum tersedia di perangkat kamu.", url: "https://git-scm.com/downloads", label: "Download Git", kind: "recommended" },
      ],
    },
    {
      id: "setup-local-nextjs-project-command",
      type: "code-example",
      title: "Buat project dengan create-next-app",
      language: "bash",
      code: "npx create-next-app@latest fluent-next-dashboard",
      explanation:
        "Jalankan command ini dari lokasi tempat kamu menyimpan project. Saat prompt muncul, pilih recommended defaults atau pastikan TypeScript, ESLint, dan App Router aktif. create-next-app membuat folder project sekaligus menginstall dependencies awalnya.",
    },
    {
      id: "setup-local-nextjs-project-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di perangkat kamu:\n\n- Buka terminal pada folder kerja yang mudah ditemukan.\n- Jalankan `node -v`, `npm -v`, dan `git --version`.\n- Jalankan create-next-app dengan nama `fluent-next-dashboard`.\n- Pilih recommended defaults atau aktifkan TypeScript, ESLint, dan App Router.\n- Masuk ke folder project dengan `cd fluent-next-dashboard`.\n- Buka folder tersebut di code editor.\n- Pastikan terdapat `package.json`, `app` atau `src/app`, dan `.gitignore`.\n\nFluentStack tidak dapat memeriksa folder perangkat kamu. Tandai selesai hanya setelah project benar-benar dibuat dan terbuka sebagai workspace.",
    },
    {
      id: "setup-local-nextjs-project-troubleshooting",
      type: "callout",
      variant: "common-mistake",
      title: "Command gagal sebelum folder project dibuat",
      content:
        "Jika `npx` atau `node` tidak dikenali, jangan mengulang command create-next-app berkali-kali. Cek Node.js dan npm dari terminal baru. Jika koneksi terputus, cek koneksi lalu jalankan ulang dari folder kerja yang sama setelah tooling tersedia. Jangan membuat project di dalam folder FluentStack atau project lain yang sudah ada.",
    },
    {
      id: "setup-local-nextjs-project-summary",
      type: "summary",
      points: [
        "Local Next.js App adalah milestone workflow di perangkat sendiri.",
        "create-next-app memberi setup awal dengan tooling dan App Router.",
        "Pastikan Node.js, npm, dan Git tersedia sebelum meneruskan setup.",
        "Buka folder project sebagai workspace agar terminal dan editor mengarah ke project yang sama.",
        "Berikutnya kamu akan menjalankan development server dan membuka app melalui localhost.",
      ],
    },
  ],
  completionRule: { requiredBlockIds: ["setup-local-nextjs-project-intro", "setup-local-nextjs-project-prerequisite", "setup-local-nextjs-project-command", "setup-local-nextjs-project-local-task", "setup-local-nextjs-project-summary"] },
};

export const runNextjsDevServerLesson: Lesson = {
  id: "run-nextjs-dev-server",
  trackId: "frontend-engineering",
  moduleId: "local-nextjs-app",
  title: "Menjalankan npm run dev",
  slug: "run-nextjs-dev-server",
  description: "Menjalankan development server Next.js, membuka URL lokal, dan memahami alur edit-save-refresh.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 45,
  objectives: ["Menjalankan dev server dari root project", "Membuka local URL yang ditampilkan terminal", "Memahami hubungan terminal, source code, dan browser lokal", "Membedakan dev server dari deployment"],
  skillTags: ["Next.js", "npm Scripts", "Dev Server", "Browser"],
  blocks: [
    {
      id: "run-nextjs-dev-server-intro",
      type: "text",
      title: "Next.js app berjalan lewat development server",
      content:
        "Next.js memproses module, route, dan App Router sebelum browser menampilkan app. Jalankan development server dari root project yang berisi package.json. Terminal akan memberi local URL, biasanya `http://localhost:3000`, yang dapat dibuka di browser.\n\nBiarkan terminal dev server tetap aktif saat mengembangkan app. Setelah file disimpan, Next.js biasanya memperbarui halaman secara otomatis. URL localhost hanya tersedia di perangkat kamu dan belum berarti project sudah online atau ter-deploy.",
    },
    { id: "run-nextjs-dev-server-command", type: "code-example", title: "Jalankan development server", language: "bash", code: "npm run dev", explanation: "Command ini menjalankan script dev dari package.json. Jalankan setelah masuk ke folder `fluent-next-dashboard`. Baca URL yang ditampilkan terminal, lalu buka URL tersebut di browser daripada menebak port sendiri." },
    {
      id: "run-nextjs-dev-server-browser-check",
      type: "text",
      title: "Cek app di browser lokal",
      content:
        "Kerjakan di perangkat kamu:\n\n- Jalankan `npm run dev` dari root project.\n- Buka local URL yang muncul di terminal.\n- Pastikan starter page Next.js tampil tanpa error.\n- Ubah satu teks kecil di app/page.tsx, simpan, lalu lihat apakah browser memperbarui hasilnya.\n- Biarkan terminal tetap berjalan saat mengedit project.\n\nTindakan ini tidak bisa divalidasi otomatis oleh FluentStack. Pastikan browser benar-benar menampilkan app lokal sebelum menandai selesai.",
    },
    { id: "run-nextjs-dev-server-quick-check", type: "quick-check", question: "Dari folder mana `npm run dev` seharusnya dijalankan?", options: ["Root project yang berisi package.json", "Folder app saja", "Folder node_modules", "Folder Download browser"], correctAnswer: "Root project yang berisi package.json", explanation: "npm membaca scripts dari package.json. Karena itu, jalankan command dari root project, bukan dari folder app atau folder lain." },
    { id: "run-nextjs-dev-server-troubleshooting", type: "callout", variant: "common-mistake", title: "Port sudah digunakan atau script tidak ditemukan", content: "Jika terminal menyebut port sudah digunakan, tutup dev server project lain atau gunakan port yang ditawarkan Next.js. Jika script dev tidak ditemukan, cek apakah terminal berada di folder yang punya package.json. Jangan menghapus node_modules sebagai langkah pertama; baca pesan error dan cek lokasi folder terlebih dahulu." },
    { id: "run-nextjs-dev-server-summary", type: "summary", points: ["npm run dev menjalankan development server dari package.json.", "Buka URL yang diberikan terminal, biasanya localhost:3000.", "Terminal perlu tetap aktif saat app dikembangkan.", "Edit dan simpan satu file untuk memastikan workflow lokal benar-benar berjalan.", "Berikutnya, kamu akan membangun route dan layout kecil di app directory."] },
  ],
  completionRule: { requiredBlockIds: ["run-nextjs-dev-server-intro", "run-nextjs-dev-server-command", "run-nextjs-dev-server-browser-check", "run-nextjs-dev-server-quick-check", "run-nextjs-dev-server-summary"] },
};

export const createNextjsRouteLayoutLesson: Lesson = {
  id: "create-nextjs-route-layout",
  trackId: "frontend-engineering",
  moduleId: "local-nextjs-app",
  title: "Membuat Route dan Layout",
  slug: "create-nextjs-route-layout",
  description: "Membuat route dashboard dan courses kecil dengan page.tsx serta layout bersama di App Router project lokal.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: ["Membuat folder route dan page.tsx pada local project", "Menambahkan layout bersama yang menerima children", "Membaca hubungan folder app dengan URL browser", "Menguji route lokal setelah file dibuat"],
  skillTags: ["Next.js", "App Router", "Routes", "Layouts", "Local Workflow"],
  blocks: [
    { id: "create-nextjs-route-layout-intro", type: "text", title: "Gunakan project lokal untuk melihat folder menjadi URL", content: "Sekarang hubungkan struktur folder dan browser. Buat route dashboard dengan page utama serta child route courses. Root layout sudah disediakan oleh create-next-app. Tambahkan layout dashboard hanya untuk navigation atau shell yang dibagikan dashboard dan child route-nya.\n\nJaga feature tetap kecil. Tujuannya bukan membuat desain akhir, melainkan membuktikan bahwa page.tsx membuat route, layout.tsx membungkus children, dan folder bersarang membentuk URL. Setelah membuat file, buka route tersebut di browser lokal untuk memastikan struktur benar-benar bekerja." },
    { id: "create-nextjs-route-layout-tree", type: "code-example", title: "Route tree dashboard kecil", language: "bash", code: "app/\n├── layout.tsx\n├── page.tsx\n└── dashboard/\n    ├── layout.tsx\n    ├── page.tsx\n    └── courses/\n        └── page.tsx", explanation: "app/page.tsx menjadi `/`. app/dashboard/page.tsx menjadi `/dashboard`, dan app/dashboard/courses/page.tsx menjadi `/dashboard/courses`. dashboard/layout.tsx membungkus dashboard page dan courses page tanpa menambah URL." },
    { id: "create-nextjs-route-layout-example", type: "code-example", title: "Layout dashboard menerima children", language: "tsx", code: "import type { ReactNode } from \"react\";\n\ntype DashboardLayoutProps = {\n  children: ReactNode;\n};\n\nexport default function DashboardLayout({ children }: DashboardLayoutProps) {\n  return (\n    <section>\n      <nav aria-label=\"Dashboard navigation\">Dashboard</nav>\n      <main>{children}</main>\n    </section>\n  );\n}", explanation: "Layout hanya memberi shell bersama. Content khusus `/dashboard` dan `/dashboard/courses` tetap berada di page.tsx masing-masing. Kamu boleh menyesuaikan markup selama children tetap memiliki area yang jelas." },
    { id: "create-nextjs-route-layout-local-task", type: "text", title: "Bangun route pada project lokal", content: "Kerjakan di perangkat kamu:\n\n- Buat `app/dashboard/page.tsx` dengan heading dashboard kecil.\n- Buat `app/dashboard/layout.tsx` yang menerima children dan navigation sederhana.\n- Buat `app/dashboard/courses/page.tsx` dengan daftar atau pesan course sederhana.\n- Simpan file saat dev server masih berjalan.\n- Buka `/dashboard` dan `/dashboard/courses` di browser lokal.\n- Pastikan navigation dari layout tampil pada kedua route.\n\nFluentStack tidak dapat melihat file dan URL pada perangkat kamu. Tandai selesai setelah dua URL benar-benar dapat dibuka." },
    { id: "create-nextjs-route-layout-troubleshooting", type: "callout", variant: "common-mistake", title: "Route 404 atau layout tidak terlihat", content: "Cek nama file dan lokasi terlebih dahulu. Route memerlukan `page.tsx`, bukan `DashboardPage.tsx`. Pastikan folder courses berada di dalam dashboard untuk URL `/dashboard/courses`. Bila layout tidak terlihat, pastikan default export layout menerima dan merender `children`." },
    { id: "create-nextjs-route-layout-summary", type: "summary", points: ["Folder di app membentuk segment URL, sedangkan page.tsx membuat route dapat dibuka.", "layout.tsx memberi shell bersama dan merender children dari page atau child route.", "Project lokal memberi bukti langsung bahwa struktur folder benar-benar menjadi route browser.", "Berikutnya, kamu akan menambahkan loading dan error UI pada route courses."] },
  ],
  completionRule: { requiredBlockIds: ["create-nextjs-route-layout-intro", "create-nextjs-route-layout-tree", "create-nextjs-route-layout-example", "create-nextjs-route-layout-local-task", "create-nextjs-route-layout-summary"] },
};

export const addNextjsLoadingErrorUiLesson: Lesson = {
  id: "add-nextjs-loading-error-ui",
  trackId: "frontend-engineering",
  moduleId: "local-nextjs-app",
  title: "Menambahkan Loading dan Error UI",
  slug: "add-nextjs-loading-error-ui",
  description: "Menambahkan loading.tsx dan error.tsx pada route courses di local Next.js project.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: ["Menambahkan loading.tsx pada route segment lokal", "Menambahkan error.tsx sebagai Client Component dengan recovery", "Menguji file placement dan error fallback secara aman", "Membedakan pengujian lokal dari validasi otomatis"],
  skillTags: ["Next.js", "Loading UI", "Error UI", "Local Workflow", "Debugging"],
  blocks: [
    { id: "add-nextjs-loading-error-ui-intro", type: "text", title: "Tambahkan feedback route pada project yang berjalan", content: "Sebelumnya kamu sudah mempelajari loading.tsx dan error.tsx melalui contoh terstruktur. Di project lokal, tempatkan keduanya di route `app/dashboard/courses` agar behavior menempel pada route yang kamu buat. Loading UI memberi feedback saat content belum siap. Error UI memberi fallback dan recovery ketika error render terjadi.\n\nPada project kecil yang sangat cepat, loading UI mungkin sulit terlihat setiap saat. Itu bukan berarti file salah. Fokus pada lokasi file dan build yang bersih. Untuk error UI, lakukan pengujian sementara dengan hati-hati, lalu hapus kode pemicu error sebelum commit." },
    { id: "add-nextjs-loading-error-ui-example", type: "code-example", title: "Dua file route behavior di courses", language: "tsx", code: "// app/dashboard/courses/loading.tsx\nexport default function Loading() {\n  return <p aria-busy=\"true\">Memuat course...</p>;\n}\n\n// app/dashboard/courses/error.tsx\n\"use client\";\n\nexport default function CourseError({\n  unstable_retry,\n}: {\n  unstable_retry: () => void;\n}) {\n  return (\n    <section role=\"alert\">\n      <p>Course belum bisa dimuat.</p>\n      <button type=\"button\" onClick={() => unstable_retry()}>\n        Coba lagi\n      </button>\n    </section>\n  );\n}", explanation: "loading.tsx dapat tetap sebagai Server Component. error.tsx memakai \"use client\" karena tombol recovery memerlukan event handler. Pada versi Next.js project ini, callback recovery dari contoh resmi bernama unstable_retry. Simpan kedua file di folder courses yang sama agar scope behavior jelas." },
    { id: "add-nextjs-loading-error-ui-local-task", type: "text", title: "Tambahkan dan cek route behavior lokal", content: "Kerjakan di perangkat kamu:\n\n- Buat `app/dashboard/courses/loading.tsx` dengan pesan loading spesifik.\n- Buat `app/dashboard/courses/error.tsx` dengan \"use client\", fallback, dan tombol recovery.\n- Pastikan dev server berjalan tanpa build error.\n- Buka `/dashboard/courses` dan cek route tetap dapat dimuat.\n- Untuk menguji error UI, tambahkan sementara `throw new Error(\"Test course route error\")` di page courses, lihat fallback, lalu hapus throw tersebut segera setelah selesai.\n- Jangan commit kode pemicu error test.\n\nFluentStack tidak menjalankan project lokalmu. Tandai selesai berdasarkan file dan browser kamu sendiri." },
    { id: "add-nextjs-loading-error-ui-troubleshooting", type: "callout", variant: "common-mistake", title: "Error UI tidak muncul atau tombol tidak bisa dipakai", content: "Pastikan error.tsx berada di folder route yang ingin dilindungi dan \"use client\" berada di baris paling atas. Jika memakai contoh dari sumber lain, cek callback recovery pada dokumentasi yang sesuai versi Next.js projectmu. Jangan membiarkan `throw new Error` test di page sebelum melanjutkan lesson atau membuat commit." },
    { id: "add-nextjs-loading-error-ui-summary", type: "summary", points: ["loading.tsx dan error.tsx ditempatkan di folder route yang ingin diberi behavior.", "error.tsx menjadi Client Component saat menyediakan tombol recovery.", "Project kecil mungkin tidak selalu memperlihatkan loading state, tetapi file placement tetap dapat diperiksa.", "Uji error sementara harus dibersihkan sebelum project disimpan ke Git.", "Berikutnya, kamu akan memberi metadata title dan description pada route."] },
  ],
  completionRule: { requiredBlockIds: ["add-nextjs-loading-error-ui-intro", "add-nextjs-loading-error-ui-example", "add-nextjs-loading-error-ui-local-task", "add-nextjs-loading-error-ui-summary"] },
};

export const addNextjsMetadataLesson: Lesson = {
  id: "add-nextjs-metadata",
  trackId: "frontend-engineering",
  moduleId: "local-nextjs-app",
  title: "Menambahkan Metadata",
  slug: "add-nextjs-metadata",
  description: "Menambahkan metadata title dan description pada route courses di local Next.js project.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 45,
  objectives: ["Menambahkan metadata statis pada Server Component page", "Memeriksa title route di browser lokal", "Menulis description yang menjelaskan tujuan route"],
  skillTags: ["Next.js", "Metadata", "SEO Basics", "Local Workflow"],
  blocks: [
    { id: "add-nextjs-metadata-intro", type: "text", title: "Beri nama yang jelas pada setiap route", content: "Metadata membuat route lebih mudah dikenali di tab browser dan saat dibagikan. Pada project lokal ini, tambahkan metadata statis pada page courses. Gunakan title yang menyebut konteks project dan description yang menjelaskan apa yang user lihat di route.\n\nMetadata tetap diletakkan pada Server Component page. Jangan menjadikan page client hanya untuk title. Jika route courses memiliki interaksi, pertahankan interaksi itu pada Client Component kecil dan biarkan page mengekspor metadata." },
    { id: "add-nextjs-metadata-example", type: "code-example", title: "Metadata untuk route courses lokal", language: "tsx", code: "import type { Metadata } from \"next\";\n\nexport const metadata: Metadata = {\n  title: \"Courses | Fluent Next Dashboard\",\n  description: \"Daftar course dan lesson yang sedang dipelajari.\",\n};\n\nexport default function CoursesPage() {\n  return <h1>Courses</h1>;\n}", explanation: "metadata object berada di luar component. Type Metadata memberi bentuk yang jelas untuk title dan description. Setelah file disimpan, lihat title tab browser pada URL courses untuk memastikan local app benar-benar memakai metadata." },
    { id: "add-nextjs-metadata-local-task", type: "text", title: "Tambahkan metadata dan cek di browser", content: "Kerjakan di perangkat kamu:\n\n- Buka `app/dashboard/courses/page.tsx`.\n- Import type `Metadata` dari `next`.\n- Tambahkan metadata title dan description sesuai project kamu.\n- Simpan file ketika dev server berjalan.\n- Buka `/dashboard/courses` dan cek title tab browser.\n- Pastikan title tidak lagi memakai title starter project yang umum.\n\nFluentStack tidak dapat membaca head tag browser lokalmu. Tandai selesai setelah title yang kamu tulis benar-benar terlihat." },
    { id: "add-nextjs-metadata-troubleshooting", type: "callout", variant: "common-mistake", title: "Metadata tidak berubah atau page memakai use client", content: "Cek bahwa metadata diexport dari page Server Component dan dev server menjalankan project yang sama. Reload browser bila title lama terlihat. Jika page punya \"use client\", pindahkan interaksi ke child Client Component lalu hapus directive dari page sebelum memakai metadata export." },
    { id: "add-nextjs-metadata-summary", type: "summary", points: ["Metadata title dan description memberi konteks pada route.", "metadata export berada pada Server Component page.", "Cek title tab browser sebagai verifikasi lokal sederhana.", "Berikutnya, kamu akan menyimpan project dan mengirimnya ke repository GitHub."] },
  ],
  completionRule: { requiredBlockIds: ["add-nextjs-metadata-intro", "add-nextjs-metadata-example", "add-nextjs-metadata-local-task", "add-nextjs-metadata-summary"] },
};

export const pushNextjsProjectToGithubLesson: Lesson = {
  id: "push-nextjs-project-to-github",
  trackId: "frontend-engineering",
  moduleId: "local-nextjs-app",
  title: "Push ke GitHub",
  slug: "push-nextjs-project-to-github",
  description: "Memeriksa perubahan, membuat commit yang menjelaskan milestone, lalu mendorong local Next.js project ke repository GitHub.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: ["Memeriksa file sebelum commit", "Membuat commit lokal yang menjelaskan perubahan", "Menambahkan remote GitHub dan push awal", "Menghindari secret atau file lokal masuk repository"],
  skillTags: ["Git", "GitHub", "Commit", "Local Workflow", "Security Basics"],
  blocks: [
    { id: "push-nextjs-project-to-github-intro", type: "text", title: "Simpan workflow, bukan hanya hasil akhir", content: "Git menyimpan riwayat perubahan di perangkat kamu. GitHub membuat repository dapat dibagikan, dipelajari kembali, dan menjadi bukti project yang bisa dijelaskan. Sebelum commit, baca `git status` agar kamu tahu file apa yang akan masuk, terutama setelah memakai .env.local atau file test sementara.\n\nUntuk push awal, buat repository kosong di GitHub. Saat project lokal sudah memiliki README dan .gitignore dari create-next-app, jangan menginisialisasi remote dengan README, license, atau gitignore baru karena history awal dapat bertabrakan." },
    { id: "push-nextjs-project-to-github-resources", type: "resource-links", title: "Panduan GitHub untuk project lokal", description: "Buka dokumentasi ini saat membuat remote repository atau bila push pertama meminta autentikasi.", links: [{ source: "GitHub Docs", title: "Adding locally hosted code to GitHub", description: "Panduan inisialisasi Git, remote, dan push project lokal.", url: "https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github", label: "Buka GitHub Guide", kind: "required" }, { source: "GitHub Docs", title: "Creating a new repository", description: "Panduan membuat repository kosong sebelum menghubungkan project lokal.", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository", label: "Buat Repository", kind: "recommended" }] },
    { id: "push-nextjs-project-to-github-commit-command", type: "code-example", title: "Periksa dan commit project lokal", language: "bash", code: "git status\ngit add .\ngit commit -m \"feat: build local next dashboard\"", explanation: "Mulai dari `git status` untuk memeriksa file yang berubah. Setelah yakin tidak ada secret atau test throw tersisa, stage file dengan `git add .` lalu buat commit yang menjelaskan milestone. Pesan commit boleh disesuaikan dengan isi project." },
    { id: "push-nextjs-project-to-github-push-command", type: "code-example", title: "Hubungkan remote dan push awal", language: "bash", code: "git remote add origin https://github.com/USERNAME/fluent-next-dashboard.git\ngit branch -M main\ngit push -u origin main", explanation: "Ganti `USERNAME` dengan akun GitHub kamu dan gunakan URL repository dari GitHub. Jika branch lokal tidak bernama main, cek `git branch --show-current` sebelum push. GitHub mungkin meminta autentikasi melalui browser atau credential manager." },
    { id: "push-nextjs-project-to-github-local-task", type: "text", title: "Checklist push project lokal", content: "Kerjakan di perangkat kamu:\n\n- Jalankan `git status` dan baca daftar file sebelum stage.\n- Pastikan `.env.local`, token, password, dan code error test tidak masuk daftar commit.\n- Buat commit yang menjelaskan Next.js dashboard kecil yang kamu bangun.\n- Buat repository kosong di GitHub tanpa README, license, atau gitignore tambahan.\n- Tambahkan remote origin dengan URL repository kamu.\n- Push branch utama ke GitHub.\n- Buka repository di browser dan cek source project serta commit terlihat.\n\nFluentStack tidak memiliki akses ke GitHub account atau repository kamu. Tandai selesai hanya setelah push berhasil atau setelah kamu menyelesaikan blocker autentikasi dengan dokumentasi resmi." },
    { id: "push-nextjs-project-to-github-security-callout", type: "callout", variant: "warning", title: "Jangan commit secret untuk membuat push lebih cepat", content: "Sebelum `git add .`, cek bahwa .env.local diabaikan Git dan tidak ada token atau password tertulis di source code. Menghapus secret setelah dipush bukan pengganti pencegahan, karena value dapat tetap berada di history Git. Jika ragu, berhenti dan cek `git status` sebelum commit." },
    { id: "push-nextjs-project-to-github-summary", type: "summary", points: ["git status adalah pemeriksaan pertama sebelum commit.", "Commit harus menjelaskan perubahan project nyata.", "Repository remote kosong menghindari konflik history awal.", "Secret, .env.local, dan test code sementara tidak boleh masuk commit.", "Berikutnya, Uji Kompetensi mengecek kesiapan project lokal secara menyeluruh."] },
  ],
  completionRule: { requiredBlockIds: ["push-nextjs-project-to-github-intro", "push-nextjs-project-to-github-commit-command", "push-nextjs-project-to-github-push-command", "push-nextjs-project-to-github-local-task", "push-nextjs-project-to-github-security-callout", "push-nextjs-project-to-github-summary"] },
};

export const localNextjsAppAssessmentLesson: Lesson = {
  id: "local-nextjs-app-assessment",
  trackId: "frontend-engineering",
  moduleId: "local-nextjs-app",
  title: "Uji Kompetensi Local Next.js App",
  slug: "local-nextjs-app-assessment",
  description: "Checkpoint kesiapan untuk menjalankan, menjelaskan, dan menyimpan Next.js App Router project kecil di perangkat sendiri.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: ["Memeriksa project lokal terhadap checklist App Router", "Menjelaskan route, layout, loading/error UI, metadata, dan GitHub workflow", "Menyusun project note yang dapat dipakai di README atau portfolio"],
  skillTags: ["Next.js", "App Router", "Local Workflow", "GitHub", "Readiness Checkpoint"],
  blocks: [
    { id: "local-nextjs-app-assessment-recap", type: "text", title: "Checkpoint: project lokal harus dapat dijalankan dan dijelaskan", content: "Project Local Next.js tidak dinilai dari seberapa besar UI-nya. Yang diperiksa adalah workflow dan struktur: project memakai App Router, dev server berjalan, route dan layout dapat dibuka, loading/error UI berada pada route relevan, metadata memberi konteks, dan project tersimpan di GitHub tanpa secret.\n\nUji Kompetensi ini adalah self-review jujur. FluentStack tidak dapat membuka terminal, file system, browser localhost, atau repository kamu. Lengkapi checklist di perangkat kamu, lalu gunakan writing practice untuk menjelaskan project seperti kepada reviewer teknis." },
    { id: "local-nextjs-app-assessment-quiz", type: "quiz", quizId: "local-nextjs-app-assessment-quiz" },
    { id: "local-nextjs-app-assessment-project-checklist", type: "text", title: "Project self-review checklist", content: "Cek project lokal satu per satu:\n\n- Project dibuat dengan create-next-app dan memakai App Router.\n- `npm run dev` berjalan dari root project dan app terbuka di browser lokal.\n- Ada root layout dan route dashboard serta child route courses.\n- Dashboard layout merender children untuk page dan child route.\n- Route courses memiliki loading.tsx dan error.tsx di folder yang benar.\n- Error UI memakai client boundary hanya untuk recovery.\n- Page courses memiliki metadata title dan description.\n- .env.local, token, password, dan code test error tidak masuk commit.\n- `git status` bersih setelah commit relevan.\n- Project sudah dipush ke GitHub atau kamu memahami blocker autentikasi yang perlu diselesaikan.\n\nChecklist ini bukan auto-validation. Jangan menandai selesai bila project belum pernah dijalankan atau belum diperiksa langsung." },
    { id: "local-nextjs-app-assessment-writing-practice", type: "writing-practice", prompt: "Tulis 100-160 kata untuk bagian README atau project note. Jelaskan tujuan app, cara menjalankannya secara lokal, dua route yang tersedia, peran layout, loading/error UI, metadata, dan status repository GitHub. Tulis seolah-olah menyerahkan project kepada reviewer teknis.", placeholder: "Contoh: Fluent Next Dashboard adalah dashboard belajar kecil berbasis Next.js App Router. Untuk menjalankannya, install dependencies lalu gunakan npm run dev. ...", minimumWords: 100, checklist: ["Menyebut tujuan app secara konkret.", "Menjelaskan command atau langkah menjalankan app lokal.", "Menyebut minimal dua route serta peran layout bersama.", "Menyebut loading/error UI atau metadata yang ditambahkan.", "Menyebut status GitHub tanpa mengungkap secret atau URL private."], modelAnswer: "Fluent Next Dashboard adalah dashboard belajar kecil berbasis Next.js App Router. Jalankan project dengan npm install lalu npm run dev dari root project, kemudian buka URL localhost dari terminal. Route /dashboard menampilkan overview, sedangkan /dashboard/courses menampilkan daftar course. Dashboard layout menyediakan navigation bersama melalui children. Route courses memiliki loading.tsx untuk feedback saat content disiapkan dan error.tsx dengan tombol recovery. Page courses juga mengekspor metadata title dan description. Project sudah disimpan dalam repository GitHub setelah saya memeriksa bahwa .env.local dan kode test error tidak ikut di-commit." },
    { id: "local-nextjs-app-assessment-docs", type: "documentation-bridge", title: "Dokumentasi untuk melanjutkan project lokal dengan mandiri", description: "Gunakan halaman resmi saat kamu menemukan kebutuhan nyata di project, bukan untuk dibaca sekaligus. Setelah milestone ini, dokumentasi menjadi bagian workflow pengembangan lokalmu.", links: [
      { source: "Next.js Docs", title: "Installation", url: "https://nextjs.org/docs/app/getting-started/installation", focus: ["create-next-app dan recommended defaults.", "Script dev dari package.json dan local URL."], ignoreForNow: ["Manual installation dan configuration bundler lanjutan."] },
      { source: "Next.js Docs", title: "Layouts and Pages", url: "https://nextjs.org/docs/app/getting-started/layouts-and-pages", focus: ["page.tsx sebagai UI route.", "layout.tsx dan children untuk shared shell.", "Folder App Router yang membentuk URL."], ignoreForNow: ["Dynamic segment dan route group yang tidak dipakai project kecilmu."] },
      { source: "Next.js Docs", title: "loading.js file convention", url: "https://nextjs.org/docs/app/api-reference/file-conventions/loading", focus: ["Lokasi loading.tsx di route segment.", "Fallback ringan yang memberi context kepada user."], ignoreForNow: ["Streaming status code dan Suspense custom boundary."] },
      { source: "Next.js Docs", title: "Error Handling", url: "https://nextjs.org/docs/app/getting-started/error-handling", focus: ["error.tsx sebagai route error boundary.", "Client Component dan recovery callback pada error UI."], ignoreForNow: ["Server Functions, global error, dan error boundary tingkat component."] },
      { source: "Next.js Docs", title: "Metadata and OG images", url: "https://nextjs.org/docs/app/getting-started/metadata-and-og-images", focus: ["metadata object untuk title dan description route.", "Metadata API pada Server Component."], ignoreForNow: ["Dynamic metadata dan Open Graph image."] },
      { source: "GitHub Docs", title: "Adding locally hosted code to GitHub", url: "https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github", focus: ["git status, commit, remote origin, dan push awal.", "Peringatan agar secret tidak di-add atau di-push."], ignoreForNow: ["GitHub CLI, organization setup, dan migration kompleks."] },
    ], followUpAction: "Rapikan README project lokal dengan tujuan app, cara menjalankan, route yang tersedia, dan satu screenshot bila kamu sudah nyaman. Lanjutkan hanya ketika repository tidak berisi .env.local, token, atau kode test error sementara." },
    { id: "local-nextjs-app-assessment-summary", type: "summary", points: ["Kamu siap melanjutkan bila dapat menjalankan App Router project lokal dan menjelaskan struktur utamanya.", "Route, layout, loading/error UI, metadata, dan Git workflow memiliki tanggung jawab berbeda namun terhubung.", "Self-review lokal dilakukan di perangkat dan repository sendiri, bukan dianggap lolos otomatis oleh FluentStack.", "Level berikutnya memasuki Production Next.js, dimulai dari Authentication and Session-Aware UI."] },
  ],
  completionRule: { requiredBlockIds: ["local-nextjs-app-assessment-recap", "local-nextjs-app-assessment-quiz", "local-nextjs-app-assessment-project-checklist", "local-nextjs-app-assessment-writing-practice", "local-nextjs-app-assessment-docs", "local-nextjs-app-assessment-summary"], passingQuizScore: 70 },
};

export const localNextjsAppAssessmentQuiz: Quiz = {
  id: "local-nextjs-app-assessment-quiz",
  lessonId: "local-nextjs-app-assessment",
  title: "Uji Kompetensi Local Next.js App",
  passingScore: 70,
  questions: [
    { id: "local-nextjs-app-q1", type: "multiple-choice", question: "Apa tujuan utama Local Next.js App milestone?", options: ["Menjalankan dan menggabungkan workflow App Router pada project nyata di perangkat sendiri", "Membuat aplikasi dengan fitur sebanyak mungkin", "Menggantikan semua built-in practice FluentStack", "Langsung men-deploy aplikasi ke production"], correctAnswer: "Menjalankan dan menggabungkan workflow App Router pada project nyata di perangkat sendiri", explanation: "Milestone ini melatih workflow lokal: membuat project, menjalankan dev server, mengedit route, memeriksa browser, dan menyimpan perubahan dengan Git. Scope project sengaja kecil." },
    { id: "local-nextjs-app-q2", type: "multiple-choice", question: "Di mana kamu menjalankan `npm run dev` untuk Next.js project?", options: ["Di root project yang memiliki package.json", "Di dalam folder app saja", "Di folder .next", "Di repository GitHub melalui browser"], correctAnswer: "Di root project yang memiliki package.json", explanation: "npm menjalankan script di package.json. Root project adalah lokasi tepat untuk dev server." },
    { id: "local-nextjs-app-q3", type: "multiple-choice", question: "File mana yang membuat route `/dashboard/courses` dapat dibuka?", options: ["app/dashboard/courses/page.tsx", "app/dashboard/courses/CoursesPage.tsx", "app/courses/dashboard/layout.tsx", "components/dashboard/courses.tsx"], correctAnswer: "app/dashboard/courses/page.tsx", explanation: "Folder membentuk segment URL dan page.tsx menjadi entry UI route. Component pendukung tidak otomatis membuat URL." },
    { id: "local-nextjs-app-q4", type: "multiple-choice", question: "Mengapa app/dashboard/courses/error.tsx memakai \"use client\"?", options: ["Karena fallback error menyediakan tombol recovery dengan event handler", "Karena semua route Next.js wajib menjadi Client Component", "Karena metadata hanya tersedia di browser", "Karena loading.tsx tidak boleh berada di server"], correctAnswer: "Karena fallback error menyediakan tombol recovery dengan event handler", explanation: "Error UI memerlukan event handler untuk mencoba recovery, sehingga menjadi Client Component. Page dan loading UI tidak otomatis membutuhkan client boundary." },
    { id: "local-nextjs-app-q5", type: "multiple-choice", question: "Apa pemeriksaan paling penting sebelum menjalankan `git add .`?", options: ["Baca git status dan pastikan .env.local, token, serta code test tidak ikut di-stage", "Menutup browser agar Git dapat bekerja", "Menghapus package.json", "Menambahkan NEXT_PUBLIC_ pada semua variable environment"], correctAnswer: "Baca git status dan pastikan .env.local, token, serta code test tidak ikut di-stage", explanation: "git status membantu memeriksa file yang akan masuk commit. Secret dan konfigurasi lokal tidak boleh di-commit." },
    { id: "local-nextjs-app-q6", type: "true-false", question: "FluentStack dapat memeriksa otomatis bahwa folder project lokal, browser localhost, dan repository GitHub learner sudah benar.", correctAnswer: false, explanation: "FluentStack tidak memiliki akses ke perangkat atau account learner. Local milestone memakai checklist, browser check, dan self-review jujur." },
  ],
};
