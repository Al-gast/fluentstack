import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const nextProductionPracticePreviewCode = {
  html: "",
  css: "",
  js: "",
};

export const productionOperationsModule: Module = {
  id: "nextjs-production-operations",
  trackId: "frontend-engineering",
  title: "Production Operations",
  slug: "production-operations",
  description:
    "Mendeploy Next.js app, menyiapkan environment production, membaca log, membangun mental model caching dasar, dan men-debug deployment secara terarah.",
  order: 37,
  lessonIds: [
    "nextjs-vercel-deployment",
    "nextjs-production-environment-setup",
    "nextjs-production-logs",
    "nextjs-caching-basics",
    "nextjs-deployment-debugging",
    "nextjs-production-operations-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Next.js",
    "Vercel",
    "Deployment",
    "Environment Variables",
    "Logs",
    "Caching",
    "Debugging",
  ],
};

export const nextjsVercelDeploymentLesson: Lesson = {
  id: "nextjs-vercel-deployment",
  trackId: "frontend-engineering",
  moduleId: "nextjs-production-operations",
  title: "Vercel Deployment",
  slug: "nextjs-vercel-deployment",
  description:
    "Memahami alur dari GitHub repository ke Preview Deployment dan Production Deployment, lalu menyiapkan deployment pertama dengan pemeriksaan yang nyata.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan hubungan Git branch, Preview Deployment, dan Production Deployment",
    "Memastikan app dapat dibuild sebelum dikirim ke hosting",
    "Mengurutkan langkah import GitHub repository ke Vercel",
    "Memeriksa URL deployment dan route utama setelah deploy",
  ],
  skillTags: ["Next.js", "Vercel", "GitHub", "Deployment", "Production"],
  blocks: [
    {
      id: "nextjs-vercel-deployment-intro",
      type: "text",
      title: "Deploy adalah kelanjutan dari Git workflow, bukan tombol terakhir",
      content:
        "Saat repository GitHub terhubung ke Vercel, push ke branch biasanya memicu deployment. Branch selain production branch menghasilkan Preview Deployment untuk memeriksa perubahan, sedangkan push atau merge ke production branch, umumnya main, menghasilkan Production Deployment. Dengan alur ini, URL preview dipakai untuk review sebelum perubahan menjadi versi utama yang dilihat user.\n\nSebelum import project, pastikan app lolos npm run build di mesin lokal. Build lokal tidak menjamin production pasti berhasil, tetapi ia menghilangkan kelas error dasar seperti import rusak, type error, atau script build yang belum siap. Saat import di Vercel, periksa repository, framework preset, root directory bila project berada di subfolder, build setting, dan environment variable yang diperlukan. Setelah deploy selesai, buka URL hasil deployment dan cek route yang paling penting, bukan hanya halaman beranda.",
    },
    {
      id: "nextjs-vercel-deployment-example",
      type: "code-example",
      title: "Urutan minimum sebelum dan sesudah deploy",
      language: "bash",
      code: `# Di repository lokal
npm run build
git status
git add .
git commit -m "Prepare production deployment"
git push origin main

# Di Vercel Dashboard
# New Project -> Import Git Repository -> pilih repository
# Periksa framework, root directory, dan environment variable
# Deploy -> buka deployment URL -> cek route utama`,
      explanation:
        "Contoh ini bukan perintah yang boleh dijalankan secara buta. npm run build perlu benar-benar selesai sebelum kamu menganggap project siap. Jika main adalah production branch project, push ke main dapat memicu Production Deployment setelah repository terhubung. Untuk perubahan yang belum siap rilis, gunakan branch feature agar review terjadi pada Preview Deployment terlebih dahulu.",
    },
    {
      id: "nextjs-vercel-deployment-coding-practice",
      type: "coding-practice",
      challengeId: "plan-vercel-git-deployment",
    },
    {
      id: "nextjs-vercel-deployment-quick-check",
      type: "quick-check",
      question:
        "Setelah repository terhubung ke Vercel dengan main sebagai production branch, perubahan feature perlu direview terlebih dahulu. Ke branch mana perubahan paling tepat dipush?",
      options: [
        "Feature branch agar Vercel membuat Preview Deployment",
        "main langsung agar tidak perlu memeriksa URL",
        "node_modules agar dependency ikut terdeploy",
        ".env.local agar environment production ikut masuk Git",
      ],
      correctAnswer: "Feature branch agar Vercel membuat Preview Deployment",
      explanation:
        "Preview Deployment memberi URL untuk memeriksa perubahan sebelum merge ke production branch. Jangan commit node_modules atau .env.local; dependency dipasang dari package manifest dan secret diatur pada platform deployment.",
    },
    {
      id: "nextjs-vercel-deployment-callout",
      type: "callout",
      variant: "important",
      title: "Deployment berhasil bukan berarti feature sudah terverifikasi",
      content:
        "Status Ready hanya menyatakan build dan deployment selesai. Tetap buka deployment URL, cek route yang relevan, coba flow auth jika ada, dan pastikan data atau fallback yang diharapkan muncul. Gunakan Preview Deployment untuk review perubahan; jangan menjadikan production URL sebagai tempat pertama menemukan error yang seharusnya dapat ditangkap sebelum merge.",
    },
    {
      id: "nextjs-vercel-deployment-summary",
      type: "summary",
      points: [
        "Push ke branch dapat memicu deployment setelah repository terhubung ke Vercel.",
        "Feature branch cocok untuk Preview Deployment, sedangkan main umumnya menjadi production branch.",
        "Jalankan npm run build secara lokal sebelum mengirim perubahan ke deployment.",
        "Setelah status Ready, cek URL dan route penting secara nyata.",
        "Berikutnya, kamu akan memisahkan konfigurasi lokal, Preview, dan Production tanpa membocorkan credential.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-vercel-deployment-intro",
      "nextjs-vercel-deployment-example",
      "nextjs-vercel-deployment-coding-practice",
      "nextjs-vercel-deployment-quick-check",
      "nextjs-vercel-deployment-callout",
      "nextjs-vercel-deployment-summary",
    ],
  },
};

export const nextjsProductionEnvironmentSetupLesson: Lesson = {
  id: "nextjs-production-environment-setup",
  trackId: "frontend-engineering",
  moduleId: "nextjs-production-operations",
  title: "Environment Setup",
  slug: "nextjs-production-environment-setup",
  description:
    "Menempatkan nama environment variable pada scope Preview atau Production yang tepat, membedakan browser-safe configuration dari secret server-only, dan memahami kapan deployment perlu dibuat ulang.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan .env.local dari environment variable pada platform deployment",
    "Memilih scope Preview dan Production sesuai kebutuhan app",
    "Menjaga secret tetap server-only tanpa prefix NEXT_PUBLIC_",
    "Menjelaskan mengapa perubahan environment variable memerlukan deployment baru",
  ],
  skillTags: ["Next.js", "Vercel", "Environment Variables", "Security", "Supabase"],
  blocks: [
    {
      id: "nextjs-production-environment-setup-intro",
      type: "text",
      title: "Nama variable boleh dibahas; nilainya tidak perlu dibagikan",
      content:
        ".env.local membantu project lokal membaca configuration tanpa memasukkan nilai ke source control. Saat app dideploy, Vercel tidak membaca file lokalmu. Tambahkan nama dan nilai variable melalui Project Settings, lalu pilih environment yang memang membutuhkan variable tersebut, misalnya Preview, Production, atau keduanya. Gunakan nilai test untuk Preview bila service yang dipakai mendukungnya; jangan tanpa sengaja mengarahkan branch eksperimen ke data production.\n\nPrefix NEXT_PUBLIC_ membuat nilai tersedia pada browser bundle. Ini cocok untuk configuration publik seperti NEXT_PUBLIC_SUPABASE_URL atau publishable key yang memang didesain untuk browser bersama RLS. Service role key, session secret, API secret, dan password database harus tetap server-only tanpa prefix tersebut. Saat variable berubah di Vercel, deployment yang sudah ada tidak menerima perubahan itu secara retroaktif. Buat deployment baru, lalu verifikasi URL yang tepat agar app benar-benar memakai configuration baru.",
    },
    {
      id: "nextjs-production-environment-setup-example",
      type: "code-example",
      title: "Pisahkan browser-safe config dari secret server-only",
      language: "ts",
      code: `// Aman tersedia di browser bila memang diperlukan oleh client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Hanya dipakai pada server. Jangan beri prefix NEXT_PUBLIC_.
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const sessionSecret = process.env.SESSION_SECRET;

// Jangan commit nilai production ke .env.local atau source code.
// Di Vercel, pilih scope Preview dan/atau Production lalu redeploy.`,
      explanation:
        "Yang penting pada contoh ini adalah boundary, bukan nilai variablenya. Browser-safe tidak berarti memberi akses tanpa batas: Supabase tetap membutuhkan RLS policy. Sebaliknya, satu secret yang diawali NEXT_PUBLIC_ akan ikut dibundel untuk browser dan harus dianggap bocor. Variable baru atau perubahan value berlaku untuk deployment berikutnya, sehingga redeploy adalah bagian dari perubahan configuration.",
    },
    {
      id: "nextjs-production-environment-setup-coding-practice",
      type: "coding-practice",
      challengeId: "classify-production-environment-values",
    },
    {
      id: "nextjs-production-environment-setup-quick-check",
      type: "quick-check",
      question:
        "Kamu memperbarui SESSION_SECRET pada Project Settings Vercel. Apa langkah berikutnya agar Production Deployment memakai nilai baru?",
      options: [
        "Buat deployment baru lalu verifikasi URL production yang dihasilkan",
        "Commit nilai secret ke .env.local dan push file itu",
        "Tambahkan prefix NEXT_PUBLIC_ agar browser memuatnya",
        "Tidak perlu melakukan apa pun karena deployment lama berubah otomatis",
      ],
      correctAnswer:
        "Buat deployment baru lalu verifikasi URL production yang dihasilkan",
      explanation:
        "Perubahan environment variable diterapkan pada deployment baru, bukan deployment yang sudah ada. Secret tetap berada di Project Settings dan tidak boleh dipindahkan ke browser atau source control.",
    },
    {
      id: "nextjs-production-environment-setup-callout",
      type: "callout",
      variant: "warning",
      title: "Preview bukan tempat aman untuk semua production credential",
      content:
        "Preview Deployment adalah environment deploy yang terpisah, bukan sekadar localhost dengan URL lain. Tentukan data dan provider mana yang boleh disentuh preview. Untuk auth, pastikan callback URL yang digunakan memang sesuai environment. Untuk data, gunakan test project atau batasi operation bila tersedia. Jangan memakai production secret pada setiap branch hanya karena setup paling cepat.",
    },
    {
      id: "nextjs-production-environment-setup-summary",
      type: "summary",
      points: [
        ".env.local hanya untuk local workflow; deployment memakai configuration platformnya sendiri.",
        "Pilih scope Preview dan Production secara sengaja untuk setiap variable.",
        "NEXT_PUBLIC_ hanya untuk nilai yang memang boleh masuk browser bundle.",
        "Secret server-only tidak boleh di-commit atau diberikan prefix public.",
        "Perubahan variable memerlukan deployment baru sebelum dapat diverifikasi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-production-environment-setup-intro",
      "nextjs-production-environment-setup-example",
      "nextjs-production-environment-setup-coding-practice",
      "nextjs-production-environment-setup-quick-check",
      "nextjs-production-environment-setup-callout",
      "nextjs-production-environment-setup-summary",
    ],
  },
};

export const nextjsProductionLogsLesson: Lesson = {
  id: "nextjs-production-logs",
  trackId: "frontend-engineering",
  moduleId: "nextjs-production-operations",
  title: "Production Logs",
  slug: "nextjs-production-logs",
  description:
    "Membedakan build log dan runtime log, lalu memakai bukti yang tepat sebelum menebak penyebab masalah production.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan kegagalan build dari error saat app menerima request",
    "Membaca message error, lokasi, dan waktu sebelum menyimpulkan penyebab",
    "Menyusun next action yang kecil dan dapat diverifikasi",
    "Menghindari pencatatan secret atau data user sensitif pada log",
  ],
  skillTags: ["Vercel", "Logs", "Production", "Debugging", "Observability"],
  blocks: [
    {
      id: "nextjs-production-logs-intro",
      type: "text",
      title: "Tentukan kapan error terjadi sebelum mencari cara memperbaikinya",
      content:
        "Build log menjelaskan proses menyiapkan deployment: dependency yang dipasang, file yang dikompilasi, serta warning atau error selama build. Jika deployment gagal sebelum memiliki URL Ready, mulai dari build log. Runtime log menjelaskan apa yang terjadi ketika deployment yang sudah berjalan menerima request. Jika halaman siap dibuka tetapi route tertentu menghasilkan 500 atau data gagal dimuat, cari bukti di runtime log.\n\nBaca log dengan urutan yang sederhana: pilih deployment dan waktu kejadian yang benar, temukan error pertama yang relevan, catat route atau operasi yang gagal, lalu hubungkan dengan perubahan terakhir. Jangan menyalin token, Authorization header, password, atau object user lengkap ke console. Log harus membantu diagnosis tanpa menjadi saluran kebocoran data. Satu log message yang aman dan terstruktur jauh lebih berguna daripada banyak console.log tanpa context.",
    },
    {
      id: "nextjs-production-logs-example",
      type: "code-example",
      title: "Contoh log yang memberi context tanpa membocorkan nilai rahasia",
      language: "ts",
      code: `export async function getProfileForDashboard(userId: string) {
  try {
    return await readProfile(userId);
  } catch (error) {
    console.error("dashboard profile load failed", {
      route: "/dashboard",
      operation: "readProfile",
      hasUserId: Boolean(userId),
      error: error instanceof Error ? error.message : "unknown error",
    });

    throw new Error("Profile belum bisa dimuat.");
  }
}

// Jangan log service role key, cookie session, atau seluruh profile user.`,
      explanation:
        "Log ini mencatat route, operasi, dan bentuk error yang diperlukan untuk mencari kejadian tanpa mencatat userId mentah atau credential. Pada app nyata, sesuaikan detail yang dicatat dengan kebutuhan dan kebijakan privasi product. Error internal tetap diterjemahkan menjadi pesan yang aman untuk UI; detail diagnosis dibaca developer di tempat yang memiliki akses ke log.",
    },
    {
      id: "nextjs-production-logs-coding-practice",
      type: "coding-practice",
      challengeId: "triage-production-log-case",
    },
    {
      id: "nextjs-production-logs-quick-check",
      type: "quick-check",
      question:
        "Deployment gagal sebelum URL Ready dan log menunjukkan Module not found. Log mana yang harus diperiksa lebih dulu?",
      options: [
        "Build log untuk deployment yang gagal",
        "Runtime log untuk request user yang belum pernah terjadi",
        "Browser localStorage dari user lain",
        "Riwayat commit tanpa melihat message error",
      ],
      correctAnswer: "Build log untuk deployment yang gagal",
      explanation:
        "Module not found ketika build menunjukkan deployment belum selesai dibangun. Runtime log dipakai saat deployment telah berjalan dan menerima request. Tetap baca error pertama beserta file atau dependency yang disebut sebelum mengubah kode.",
    },
    {
      id: "nextjs-production-logs-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menganggap semua error production adalah bug kode",
      content:
        "Satu error dapat berasal dari variable yang tidak tersedia pada scope environment, callback URL auth yang belum terdaftar, root directory yang salah, dependency berbeda, atau route yang hanya gagal dengan data production. Log membantu mengurangi tebakan, tetapi ia perlu dibaca bersama deployment status, setting project, dan perubahan terakhir. Mulai dari bukti paling dekat dengan titik gagal.",
    },
    {
      id: "nextjs-production-logs-summary",
      type: "summary",
      points: [
        "Build log dipakai untuk masalah saat deployment dibangun; runtime log dipakai setelah app menerima request.",
        "Pilih deployment, waktu, dan route yang benar sebelum membaca log.",
        "Cari error pertama yang relevan dan ubah satu hipotesis kecil pada satu waktu.",
        "Log perlu context, tetapi tidak boleh memuat secret atau data user sensitif.",
        "Berikutnya, kamu akan membedakan data yang dapat dibagikan cache dari data yang harus tetap segar per user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-production-logs-intro",
      "nextjs-production-logs-example",
      "nextjs-production-logs-coding-practice",
      "nextjs-production-logs-quick-check",
      "nextjs-production-logs-callout",
      "nextjs-production-logs-summary",
    ],
  },
};

export const nextjsCachingBasicsLesson: Lesson = {
  id: "nextjs-caching-basics",
  trackId: "frontend-engineering",
  moduleId: "nextjs-production-operations",
  title: "Caching Basics",
  slug: "nextjs-caching-basics",
  description:
    "Membangun mental model sederhana tentang data shared, data user-specific, fresh data, dan alasan perubahan tampak berbeda setelah app masuk production.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan cache sebagai keputusan tentang kapan data boleh digunakan kembali",
    "Membedakan data shared dari data yang bergantung pada identity user",
    "Menentukan kapan perubahan membutuhkan revalidation atau request-time data",
    "Mendiagnosis dugaan stale data tanpa langsung menghapus seluruh cache",
  ],
  skillTags: ["Next.js", "Caching", "Revalidation", "Data Fetching", "Production"],
  blocks: [
    {
      id: "nextjs-caching-basics-intro",
      type: "text",
      title: "Cache adalah kontrak freshness, bukan tombol percepat universal",
      content:
        "Cache menyimpan hasil agar pekerjaan yang sama tidak selalu diulang. Pertanyaan utamanya bukan hanya apakah data dapat dicache, melainkan siapa yang boleh menerima hasil yang sama dan berapa lama hasil itu masih boleh dianggap cukup baru. Daftar artikel publik yang berubah jarang mungkin dapat dibagikan. Dashboard learner, session, atau data yang bergantung pada identity user tidak boleh diperlakukan seperti konten publik bersama.\n\nPada model caching Next.js saat ini, fetch tidak dicache secara default; cache perlu dipilih secara eksplisit. Revalidation juga menjadi keputusan produk: setelah editor memperbarui katalog course, kapan learner lain perlu melihat perubahan? Untuk module ini, jangan mengejar konfigurasi cache yang rumit. Gunakan mental model: tentukan scope data, tentukan kebutuhan freshness, pilih strategi yang terdokumentasi, lalu uji perubahan pada deployment yang benar. Bila UI tampak lama, pastikan terlebih dahulu deployment dan source data yang dibuka memang yang terbaru.",
    },
    {
      id: "nextjs-caching-basics-example",
      type: "code-example",
      title: "Cache public content secara eksplisit, jangan menyamakan dengan profile user",
      language: "tsx",
      code: `type Course = { slug: string; title: string };

export async function getPublicCourses(): Promise<Course[]> {
  const response = await fetch("https://example.com/api/courses", {
    cache: "force-cache",
  });

  return response.json();
}

export async function getCurrentProfile(userId: string) {
  // Data ini bergantung pada identity user.
  // Tentukan request-time behavior dan authorization secara terpisah.
  return readProfileForUser(userId);
}`,
      explanation:
        "Contoh hanya menunjukkan perbedaan keputusan. Data course publik dapat menjadi kandidat cache bila product menerima hasil yang tidak berubah pada setiap request. Profile user tidak otomatis boleh memakai strategi itu hanya karena dibaca dari server. Sebelum menambahkan cache, baca dokumentasi versi Next.js yang dipakai project dan tentukan siapa yang menerima data, bagaimana data berubah, serta bagaimana perubahan itu divalidasi.",
    },
    {
      id: "nextjs-caching-basics-coding-practice",
      type: "coding-practice",
      challengeId: "classify-production-data-freshness",
    },
    {
      id: "nextjs-caching-basics-quick-check",
      type: "quick-check",
      question:
        "Manakah data yang paling membutuhkan keputusan request-time dan authorization per user, bukan diperlakukan sebagai konten publik bersama?",
      options: [
        "Dashboard profile learner yang bergantung pada session saat ini",
        "Daftar judul course publik yang diperbarui oleh editor mingguan",
        "Logo statis product",
        "Halaman dokumentasi yang sudah tidak berubah",
      ],
      correctAnswer: "Dashboard profile learner yang bergantung pada session saat ini",
      explanation:
        "Profile dashboard bergantung pada identity dan authorization. Ia tidak boleh begitu saja dibagikan sebagai hasil cache publik. Konten publik masih perlu keputusan freshness, tetapi scope-nya berbeda dari data user-owned.",
    },
    {
      id: "nextjs-caching-basics-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan memakai cache untuk menutupi data flow yang belum benar",
      content:
        "Jika app menampilkan data lama, jangan langsung menambah force-cache, no-store, revalidatePath, atau revalidateTag secara acak. Konfirmasi URL deployment, commit yang aktif, environment yang dipakai, dan sumber data terlebih dahulu. Caching dan revalidation punya API yang berkembang antar versi Next.js, jadi selalu cocokkan keputusan dengan dokumentasi versi project, bukan potongan konfigurasi lama dari internet.",
    },
    {
      id: "nextjs-caching-basics-summary",
      points: [
        "Cache adalah keputusan tentang scope dan freshness hasil data.",
        "Data shared dan data user-specific memiliki risiko serta strategi yang berbeda.",
        "Pada Next.js saat ini, fetch tidak dicache secara default; caching dipilih secara eksplisit.",
        "Periksa deployment, source data, dan requirement freshness sebelum mengubah konfigurasi cache.",
        "Berikutnya, kamu akan menyatukan bukti build, environment, log, auth, dan data untuk men-debug deployment secara terarah.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-caching-basics-intro",
      "nextjs-caching-basics-example",
      "nextjs-caching-basics-coding-practice",
      "nextjs-caching-basics-quick-check",
      "nextjs-caching-basics-callout",
      "nextjs-caching-basics-summary",
    ],
  },
};

export const nextjsDeploymentDebuggingLesson: Lesson = {
  id: "nextjs-deployment-debugging",
  trackId: "frontend-engineering",
  moduleId: "nextjs-production-operations",
  title: "Deployment Debugging",
  slug: "nextjs-deployment-debugging",
  description:
    "Menggunakan flow debugging production yang memisahkan build failure, configuration issue, runtime failure, auth callback issue, dan data freshness problem.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Menyusun langkah diagnosis dari symptom ke bukti dan next action",
    "Membedakan build, environment, runtime, auth callback, dan cache issue",
    "Mengurangi perubahan acak saat deployment bermasalah",
    "Menulis catatan deployment yang dapat dipakai rekan developer",
  ],
  skillTags: ["Next.js", "Vercel", "Debugging", "Authentication", "Production"],
  blocks: [
    {
      id: "nextjs-deployment-debugging-intro",
      type: "text",
      title: "Mulai dari symptom yang dapat diulang, bukan dari solusi favorit",
      content:
        "Deployment debugging menjadi jauh lebih tenang bila kamu memisahkan lima pertanyaan. Pertama, apakah build selesai atau gagal? Kedua, deployment mana dan commit mana yang sedang dibuka? Ketiga, apakah environment variable ada pada scope yang benar? Keempat, apakah error muncul ketika route menerima request dan dapat dibuktikan melalui runtime log? Kelima, untuk auth dan data, apakah callback URL, identity, RLS, atau freshness data sesuai dengan environment tersebut?\n\nPilih satu symptom yang dapat diulang, misalnya /dashboard memberi 500 pada Production tetapi bekerja lokal. Catat URL, waktu, user state, dan commit. Periksa build status lalu log yang sesuai. Jika ada variable yang baru ditambahkan, cek nama, scope, dan apakah deployment dibuat ulang. Jika auth redirect gagal, cek callback URL yang terdaftar pada provider dan aplikasi. Setelah membuat satu perubahan, redeploy atau ulangi request, lalu catat hasilnya. Flow ini menghasilkan bukti yang dapat dibagikan kepada tim, bukan rangkaian perubahan spekulatif.",
    },
    {
      id: "nextjs-deployment-debugging-example",
      type: "code-example",
      title: "Catatan investigasi yang kecil tetapi dapat ditindaklanjuti",
      language: "ts",
      code: `type DeploymentInvestigation = {
  symptom: string;
  evidence: string;
  nextAction: string;
};

export const investigation: DeploymentInvestigation[] = [
  {
    symptom: "Deployment stopped during build",
    evidence: "Build log: Module not found: @/lib/profile-service",
    nextAction: "Fix the import path, run npm run build locally, then redeploy.",
  },
  {
    symptom: "Production dashboard returns 500",
    evidence: "Runtime log: Missing NEXT_PUBLIC_SUPABASE_URL",
    nextAction: "Add the variable to Production, redeploy, then retest /dashboard.",
  },
];`,
      explanation:
        "Struktur ini memisahkan apa yang terlihat, bukti yang sudah ada, dan langkah berikutnya. Ia tidak menganggap semua 500 berasal dari kode yang sama. Dalam situasi nyata, simpan link deployment atau timestamp jika tooling tim mendukungnya, lalu tulis perubahan yang benar-benar dilakukan. Jangan memasukkan secret ke ticket, commit message, atau screenshot log.",
    },
    {
      id: "nextjs-deployment-debugging-coding-practice",
      type: "coding-practice",
      challengeId: "plan-deployment-debugging-response",
    },
    {
      id: "nextjs-deployment-debugging-quick-check",
      type: "quick-check",
      question:
        "Login berhasil pada localhost tetapi setelah login user kembali ke URL yang salah di Production. Bukti dan setting mana yang paling relevan diperiksa lebih dulu?",
      options: [
        "Callback URL auth untuk production URL dan deployment/environment yang sedang dipakai",
        "Tambahkan service role key ke Client Component",
        "Hapus semua cache tanpa membaca redirect target",
        "Commit .env.local agar provider melihat URL lokal",
      ],
      correctAnswer:
        "Callback URL auth untuk production URL dan deployment/environment yang sedang dipakai",
      explanation:
        "Redirect auth bergantung pada URL dan configuration environment yang benar. Secret tidak menyelesaikan callback mismatch, dan .env.local tidak seharusnya di-commit. Mulai dari redirect target, provider setting, serta deployment URL yang benar.",
    },
    {
      id: "nextjs-deployment-debugging-callout",
      type: "callout",
      variant: "tip",
      title: "Production note adalah alat debugging, bukan laporan panjang",
      content:
        "Setelah deploy, tulis satu catatan ringkas: commit atau perubahan yang dirilis, URL yang dicek, route atau flow yang diuji, variable baru menurut namanya saja, dan risiko atau follow-up yang tersisa. Format ini membuat review lebih mudah dan memberi baseline ketika error muncul setelah rilis. Hindari menulis nilai secret, token, atau data user pada catatan tersebut.",
    },
    {
      id: "nextjs-deployment-debugging-summary",
      type: "summary",
      points: [
        "Debugging deployment dimulai dari symptom yang dapat diulang dan deployment yang tepat.",
        "Pisahkan build failure, configuration issue, runtime error, auth callback, dan freshness data.",
        "Gunakan log sebagai bukti, lalu lakukan satu perubahan kecil yang dapat diuji.",
        "Redeploy atau ulangi request setelah configuration berubah.",
        "Berikutnya, Uji Kompetensi memeriksa apakah kamu siap membawa Local Next.js App ke production dengan flow yang aman.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-deployment-debugging-intro",
      "nextjs-deployment-debugging-example",
      "nextjs-deployment-debugging-coding-practice",
      "nextjs-deployment-debugging-quick-check",
      "nextjs-deployment-debugging-callout",
      "nextjs-deployment-debugging-summary",
    ],
  },
};

export const nextjsProductionOperationsAssessmentLesson: Lesson = {
  id: "nextjs-production-operations-assessment",
  trackId: "frontend-engineering",
  moduleId: "nextjs-production-operations",
  title: "Uji Kompetensi Production Operations",
  slug: "nextjs-production-operations-assessment",
  description:
    "Memeriksa readiness untuk mendeploy Next.js app, menempatkan environment variable dengan aman, membaca log, dan merespons masalah production secara terstruktur.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 80,
  objectives: [
    "Menentukan alur GitHub ke Preview dan Production Deployment",
    "Menempatkan configuration browser-safe dan secret pada boundary yang tepat",
    "Membedakan bukti build, runtime, auth, dan cache saat terjadi masalah",
    "Menulis production note yang dapat dipakai rekan developer",
  ],
  skillTags: ["Deployment", "Vercel", "Environment Variables", "Logs", "Readiness Checkpoint"],
  blocks: [
    {
      id: "nextjs-production-operations-assessment-recap",
      type: "text",
      title: "Checkpoint: deployment adalah workflow yang dapat dijelaskan ulang",
      content:
        "Kamu sudah mempelajari alur yang perlu saling terhubung: build lokal sebelum push, Preview Deployment untuk review, Production Deployment dari branch yang tepat, environment variable yang scoped dan tidak bocor, log sesuai waktu error, serta cache sebagai keputusan freshness. Semua bagian ini perlu diperiksa bersama ketika app tidak bekerja seperti di localhost.\n\nUji Kompetensi ini tidak dapat mengakses GitHub repository, Vercel Dashboard, environment variable, callback URL, atau log production kamu. Gunakan hasilnya sebagai readiness checkpoint. Tandai self-review hanya setelah kamu melakukan langkah nyata pada Local Next.js App dan menyimpan catatan deployment tanpa credential. Bila belum memiliki project, selesaikan checkpoint struktural terlebih dahulu lalu jadikan daftar ini rencana implementasi lokal.",
    },
    {
      id: "nextjs-production-operations-assessment-quiz",
      type: "quiz",
      quizId: "nextjs-production-operations-assessment-quiz",
    },
    {
      id: "nextjs-production-operations-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-production-readiness-checkpoint",
    },
    {
      id: "nextjs-production-operations-assessment-local-checklist",
      type: "text",
      title: "Self-review deployment nyata",
      content:
        "Pada Local Next.js App yang sudah siap, lakukan cek manual berikut:\n\n- npm run build selesai di local tanpa mengandalkan warning yang tidak dipahami.\n- Repository sudah dipush ke GitHub dan terhubung ke Vercel Project yang benar.\n- Preview URL dibuka sebelum perubahan dipromosikan ke production branch.\n- Nama variable environment sudah dipetakan ke Preview atau Production tanpa menaruh nilainya di source control.\n- Secret server-only tidak memakai prefix NEXT_PUBLIC_.\n- Production URL, route penting, dan flow auth diperiksa setelah deploy.\n- Build log atau runtime log dibaca bila terjadi kegagalan; jangan log credential untuk diagnosis.\n- README atau production note menyebut cara deploy, route yang dicek, dan follow-up tanpa secret.\n\nFluentStack tidak dapat memverifikasi dashboard atau project lokalmu. Jangan menandai selesai hanya karena checklist dibaca; gunakan hasil pengujian nyata sebagai dasar completion.",
    },
    {
      id: "nextjs-production-operations-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis production note 120-180 kata untuk rekan developer. Sebut perubahan yang akan dideploy, jalur Preview ke Production, nama variable environment tanpa nilainya, route atau flow yang akan dicek, satu jenis log yang akan dibaca jika gagal, dan satu risiko atau follow-up. Jangan tulis credential, token, atau data user.",
      placeholder:
        "Perubahan ... akan direview melalui Preview Deployment dari branch ... Setelah merge ke main, saya akan cek ... Variable yang perlu tersedia adalah ... Bila deploy gagal, saya akan membaca ... Follow-up ...",
      minimumWords: 120,
      modelAnswer:
        "Perubahan profile learner akan direview lebih dulu melalui Preview Deployment dari branch feature/profile-settings. Setelah reviewer menyetujui URL preview dan perubahan di-merge ke main, saya akan memeriksa Production Deployment serta route /dashboard dan /settings dengan akun uji. Variable yang perlu tersedia adalah NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, dan SESSION_SECRET; nilainya hanya diatur melalui Project Settings sesuai scope yang tepat. Bila deployment berhenti sebelum Ready, saya akan membaca build log untuk error import atau build command. Bila dashboard menghasilkan 500 setelah Ready, saya akan memeriksa runtime log dan memastikan variable Production ada lalu redeploy. Follow-up yang tersisa adalah memastikan callback URL auth production terdaftar dan menulis hasil pemeriksaan di README tanpa menyertakan credential.",
      checklist: [
        "Menyebut Preview dan Production sebagai tahap yang berbeda.",
        "Menyebut nama environment variable tanpa menyertakan nilainya.",
        "Menentukan route atau flow nyata yang diperiksa setelah deploy.",
        "Membedakan build log atau runtime log sesuai symptom.",
        "Menyebut satu risiko atau follow-up yang dapat ditindaklanjuti.",
      ],
    },
    {
      id: "nextjs-production-operations-assessment-docs",
      type: "documentation-bridge",
      title: "Gunakan dokumentasi sebagai playbook production awal",
      description:
        "Baca source resmi ini saat melakukan deployment pertama. Fokus pada alur yang sedang kamu jalankan; jangan memperluas scope ke custom CI/CD, Docker, observability lanjutan, atau strategi multi-region pada tahap ini.",
      links: [
        {
          source: "Vercel Docs",
          title: "Git integrations",
          url: "https://vercel.com/docs/git",
          focus: [
            "import Git repository ke Vercel",
            "Preview Deployment dari branch non-production",
            "Production Deployment dari production branch",
          ],
          ignoreForNow: ["custom Git provider automation", "monorepo workflow lanjutan"],
        },
        {
          source: "Vercel Docs",
          title: "Environment Variables",
          url: "https://vercel.com/docs/environment-variables",
          focus: [
            "scope Preview dan Production",
            "perubahan variable hanya berlaku pada deployment baru",
            "nama variable yang diperlukan app tanpa membagikan value",
          ],
          ignoreForNow: ["team-wide variable management", "CLI automation"],
        },
        {
          source: "Vercel Docs",
          title: "Logs",
          url: "https://vercel.com/docs/logs",
          focus: [
            "perbedaan build log dan runtime log",
            "mencari deployment dan route yang relevan",
            "membaca error tanpa memaparkan credential",
          ],
          ignoreForNow: ["log drains", "enterprise audit logs", "advanced observability"],
        },
        {
          source: "Next.js Docs",
          title: "Deploying",
          url: "https://nextjs.org/docs/app/getting-started/deploying",
          focus: [
            "npm run build sebelum deploy",
            "script build dan start pada project Next.js",
            "jenis deployment yang didukung Next.js",
          ],
          ignoreForNow: ["Docker deployment", "adapter implementation", "custom infrastructure"],
        },
        {
          source: "Next.js Docs",
          title: "Caching and Revalidating",
          url: "https://nextjs.org/docs/app/guides/caching-without-cache-components",
          focus: [
            "fetch caching yang dipilih secara eksplisit",
            "revalidation sebagai keputusan freshness",
            "perbedaan data public dan user-specific",
          ],
          ignoreForNow: ["advanced cache invalidation", "cache handler custom", "cache API yang belum dibutuhkan"],
        },
      ],
      followUpAction:
        "Buat section Deployment di README Local Next.js App: tulis production branch, route yang wajib dicek, nama variable menurut scope, lokasi membaca build/runtime log, dan langkah rollback atau follow-up tim. Jangan masukkan value credential ke README.",
    },
    {
      id: "nextjs-production-operations-assessment-summary",
      type: "summary",
      points: [
        "Ready untuk production berarti dapat menjelaskan dan menjalankan deploy workflow, bukan hanya melihat status Ready.",
        "Configuration dipisahkan menurut environment dan boundary browser/server agar credential tidak bocor.",
        "Build log, runtime log, auth callback, dan caching adalah bukti yang perlu dibedakan saat mendiagnosis error.",
        "Self-review lokal dan production note harus didasarkan pada pengujian nyata, bukan completion otomatis.",
        "Berikutnya, kamu dapat memperdalam Forms, Validation, and Data Fetching untuk membuat flow data production lebih kuat dan teruji.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-production-operations-assessment-recap",
      "nextjs-production-operations-assessment-quiz",
      "nextjs-production-operations-assessment-coding-practice",
      "nextjs-production-operations-assessment-local-checklist",
      "nextjs-production-operations-assessment-writing-practice",
      "nextjs-production-operations-assessment-docs",
      "nextjs-production-operations-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const nextjsProductionOperationsAssessmentQuiz: Quiz = {
  id: "nextjs-production-operations-assessment-quiz",
  lessonId: "nextjs-production-operations-assessment",
  title: "Uji Kompetensi Production Operations",
  passingScore: 70,
  questions: [
    {
      id: "production-preview-branch",
      type: "multiple-choice",
      question:
        "Apa tujuan utama push perubahan ke feature branch setelah repository terhubung ke Vercel?",
      options: [
        "Membuat Preview Deployment agar perubahan dapat direview sebelum production",
        "Memasukkan .env.local ke deployment production",
        "Menghapus kebutuhan build lokal",
        "Membuat secret tersedia otomatis di browser",
      ],
      correctAnswer:
        "Membuat Preview Deployment agar perubahan dapat direview sebelum production",
      explanation:
        "Preview Deployment memberi URL review untuk branch non-production. Build lokal dan pengelolaan secret tetap merupakan tanggung jawab terpisah.",
    },
    {
      id: "production-build-local",
      type: "multiple-choice",
      question: "Mengapa npm run build perlu dijalankan sebelum deploy?",
      options: [
        "Untuk menemukan error build dasar sebelum perubahan dikirim ke platform deployment",
        "Untuk mengirim node_modules ke GitHub",
        "Untuk mengubah semua environment variable menjadi public",
        "Untuk menjamin tidak ada error production apa pun",
      ],
      correctAnswer:
        "Untuk menemukan error build dasar sebelum perubahan dikirim ke platform deployment",
      explanation:
        "Build lokal menangkap banyak masalah script, import, dan type lebih awal, tetapi tidak menggantikan pemeriksaan configuration atau runtime pada deployment nyata.",
    },
    {
      id: "production-environment-scope",
      type: "multiple-choice",
      question:
        "Kamu menambahkan variable untuk flow auth production. Di mana ia harus dikonfigurasi agar deployment utama dapat membacanya?",
      options: [
        "Di environment Production pada Project Settings, lalu buat deployment baru",
        "Di source code yang dipush ke main",
        "Di browser localStorage user",
        "Di README agar semua contributor dapat melihat nilainya",
      ],
      correctAnswer:
        "Di environment Production pada Project Settings, lalu buat deployment baru",
      explanation:
        "Vercel environment variable dipilih menurut scope dan diterapkan pada deployment baru. Jangan menaruh value credential di source code atau dokumentasi publik.",
    },
    {
      id: "production-public-prefix",
      type: "multiple-choice",
      question:
        "Kapan prefix NEXT_PUBLIC_ boleh dipakai?",
      options: [
        "Saat nilai memang boleh tersedia di browser bundle, seperti configuration publik yang dibutuhkan client",
        "Untuk service role key agar query database lebih mudah",
        "Untuk session secret agar cookie dapat dibaca UI",
        "Untuk password database supaya build dapat menyelesaikan type check",
      ],
      correctAnswer:
        "Saat nilai memang boleh tersedia di browser bundle, seperti configuration publik yang dibutuhkan client",
      explanation:
        "NEXT_PUBLIC_ mengekspos nilai ke browser bundle. Secret, password, dan privileged key harus tetap server-only.",
    },
    {
      id: "production-build-logs",
      type: "multiple-choice",
      question:
        "Deployment berhenti saat installing dependency dan belum memiliki URL Ready. Bukti utama mana yang dibaca?",
      options: [
        "Build log pada deployment tersebut",
        "Runtime log dari request /dashboard",
        "Cache browser user",
        "Profile row pada database",
      ],
      correctAnswer: "Build log pada deployment tersebut",
      explanation:
        "Build log memuat progress, warning, dan error selama deployment dibangun. Runtime log menjadi relevan setelah deployment sudah berjalan dan menerima request.",
    },
    {
      id: "production-runtime-logs",
      type: "multiple-choice",
      question:
        "Production URL sudah Ready, tetapi /dashboard memberi 500 setelah user login. Apa langkah awal yang paling tepat?",
      options: [
        "Reproduksi route pada deployment yang tepat lalu periksa runtime log dan environment terkait",
        "Hapus semua cache tanpa memeriksa error",
        "Commit nilai SESSION_SECRET ke repository",
        "Mengubah semua Server Component menjadi Client Component",
      ],
      correctAnswer:
        "Reproduksi route pada deployment yang tepat lalu periksa runtime log dan environment terkait",
      explanation:
        "Karena error terjadi saat deployment yang sudah Ready menerima request, runtime log dan scope configuration yang dipakai route adalah bukti awal yang relevan.",
    },
    {
      id: "production-cache-scope",
      type: "multiple-choice",
      question:
        "Mengapa dashboard profile user tidak boleh langsung diperlakukan seperti daftar course publik yang dapat dibagikan cache?",
      options: [
        "Karena dashboard bergantung pada identity, authorization, dan kebutuhan freshness user saat ini",
        "Karena data user tidak boleh pernah dibaca dari server",
        "Karena semua cache otomatis menyimpan secret",
        "Karena daftar course publik tidak pernah membutuhkan keputusan freshness",
      ],
      correctAnswer:
        "Karena dashboard bergantung pada identity, authorization, dan kebutuhan freshness user saat ini",
      explanation:
        "Scope data menentukan strategi. Konten publik masih memerlukan keputusan freshness, sedangkan data user-specific membutuhkan perhatian khusus pada identity dan authorization.",
    },
    {
      id: "production-auth-callback",
      type: "true-false",
      question:
        "Jika login bekerja lokal tetapi redirect salah di Production, callback URL production adalah salah satu setting yang perlu diperiksa.",
      correctAnswer: true,
      explanation:
        "Provider auth dan aplikasi perlu mengenal URL environment yang benar. Periksa target redirect, deployment URL, serta configuration terkait sebelum mengubah bagian lain secara spekulatif.",
    },
  ],
};

export const planVercelGitDeploymentChallenge: CodingChallenge = {
  id: "plan-vercel-git-deployment",
  lessonId: "nextjs-vercel-deployment",
  title: "Plan Vercel Git deployment",
  description:
    "Lengkapi deployment map untuk alur feature branch menuju Preview dan merge ke main menuju Production.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah deployment plan, bukan koneksi ke GitHub atau Vercel.",
    "Lengkapi langkah Preview dari feature branch.",
    "Lengkapi langkah Production dari merge ke main.",
    "Sertakan pemeriksaan URL atau route setelah setiap deployment.",
    "Cek otomatis membaca struktur plan. Preview tidak membuat deployment nyata.",
  ],
  starterCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type DeploymentStep = {
  environment: "preview" | "production";
  trigger: string;
  check: string;
};

export const deploymentSteps: DeploymentStep[] = [
  {
    environment: "preview",
    trigger: "",
    check: "",
  },
  {
    environment: "production",
    trigger: "",
    check: "",
  },
];`,
  },
  solutionCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type DeploymentStep = {
  environment: "preview" | "production";
  trigger: string;
  check: string;
};

export const deploymentSteps: DeploymentStep[] = [
  {
    environment: "preview",
    trigger: "push feature branch",
    check: "open preview URL and verify the changed route",
  },
  {
    environment: "production",
    trigger: "merge to main",
    check: "open production URL and verify the primary route",
  },
];`,
  },
  checklist: [
    "Feature branch diarahkan ke Preview Deployment untuk review.",
    "Merge ke main menjadi trigger Production Deployment pada plan ini.",
    "Setiap environment memiliki pemeriksaan URL atau route yang nyata.",
    "Plan tidak menganggap status Ready sebagai pengganti pengujian route.",
    "Preview tidak menjalankan GitHub atau Vercel deployment sungguhan.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "deployment-step-type", label: "DeploymentStep membedakan environment, trigger, dan check.", type: "contains", valueIncludes: 'environment: "preview" | "production";\n  trigger: string;\n  check: string;' },
      { id: "preview-step", label: "Feature branch memicu Preview Deployment untuk memeriksa route.", type: "contains", valueIncludes: 'environment: "preview",\n    trigger: "push feature branch",\n    check: "open preview URL and verify the changed route"' },
      { id: "production-step", label: "Merge ke main memicu Production Deployment untuk route utama.", type: "contains", valueIncludes: 'environment: "production",\n    trigger: "merge to main",\n    check: "open production URL and verify the primary route"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca deployment plan. Preview tidak menghubungkan GitHub, membuat Vercel project, atau membuat deployment nyata.",
    lines: [
      "Feature branch memiliki jalur review melalui Preview Deployment.",
      "Merge ke main memiliki jalur Production Deployment.",
      "Setiap deployment tetap diikuti pemeriksaan URL dan route.",
    ],
  },
  skillTags: ["Next.js", "Vercel", "GitHub", "Deployment"],
};

export const classifyProductionEnvironmentValuesChallenge: CodingChallenge = {
  id: "classify-production-environment-values",
  lessonId: "nextjs-production-environment-setup",
  title: "Classify production environment values",
  description:
    "Lengkapi configuration map yang membedakan browser-safe value, secret server-only, dan scope deployment tanpa menulis nilai credential.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah configuration map, bukan akses ke Project Settings Vercel.",
    "Tandai project URL dan publishable key sebagai browser-safe untuk Preview dan Production.",
    "Tandai service role key sebagai server-only untuk Production.",
    "Jangan menulis nilai credential dalam map ini.",
    "Cek otomatis membaca struktur map. Preview tidak membaca environment variable nyata.",
  ],
  starterCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type EnvironmentEntry = {
  name: string;
  visibility: "browser" | "server";
  scopes: Array<"preview" | "production">;
  rule: string;
};

export const environmentEntries: EnvironmentEntry[] = [
  {
    name: "NEXT_PUBLIC_SUPABASE_URL",
    visibility: "server",
    scopes: ["production"],
    rule: "",
  },
];`,
  },
  solutionCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type EnvironmentEntry = {
  name: string;
  visibility: "browser" | "server";
  scopes: Array<"preview" | "production">;
  rule: string;
};

export const environmentEntries: EnvironmentEntry[] = [
  {
    name: "NEXT_PUBLIC_SUPABASE_URL",
    visibility: "browser",
    scopes: ["preview", "production"],
    rule: "public project URL is configured in Vercel and is never committed with a value",
  },
  {
    name: "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    visibility: "browser",
    scopes: ["preview", "production"],
    rule: "publishable key is browser-safe only with correct RLS policies",
  },
  {
    name: "SUPABASE_SERVICE_ROLE_KEY",
    visibility: "server",
    scopes: ["production"],
    rule: "secret stays server-only and never uses NEXT_PUBLIC_",
  },
];`,
  },
  checklist: [
    "Browser-safe configuration dibedakan dari server-only secret.",
    "Preview dan Production dipilih dengan sengaja, bukan dianggap sama.",
    "Service role key tidak memakai prefix NEXT_PUBLIC_.",
    "Map hanya memuat nama dan aturan, bukan nilai credential.",
    "Preview tidak membaca Project Settings atau environment variable nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "environment-entry-type", label: "EnvironmentEntry memetakan visibility dan scope.", type: "contains", valueIncludes: 'visibility: "browser" | "server";\n  scopes: Array<"preview" | "production">;' },
      { id: "public-url", label: "Project URL tersedia di Preview dan Production sebagai browser-safe config.", type: "contains", valueIncludes: 'name: "NEXT_PUBLIC_SUPABASE_URL",\n    visibility: "browser",\n    scopes: ["preview", "production"]' },
      { id: "publishable-key", label: "Publishable key dibedakan dari secret dan tetap bergantung pada RLS.", type: "contains", valueIncludes: 'name: "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",\n    visibility: "browser",\n    scopes: ["preview", "production"],\n    rule: "publishable key is browser-safe only with correct RLS policies"' },
      { id: "service-role-key", label: "Service role key tetap server-only tanpa NEXT_PUBLIC_.", type: "contains", valueIncludes: 'name: "SUPABASE_SERVICE_ROLE_KEY",\n    visibility: "server",\n    scopes: ["production"],\n    rule: "secret stays server-only and never uses NEXT_PUBLIC_"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca configuration map. Preview tidak membaca Vercel environment, memvalidasi credential, atau membuat nilai environment variable.",
    lines: [
      "Browser-safe config dan server-only secret memiliki boundary berbeda.",
      "Scope Preview dan Production dipilih secara eksplisit.",
      "Nilai credential tidak pernah muncul dalam source code latihan.",
    ],
  },
  skillTags: ["Next.js", "Vercel", "Environment Variables", "Security"],
};

export const triageProductionLogCaseChallenge: CodingChallenge = {
  id: "triage-production-log-case",
  lessonId: "nextjs-production-logs",
  title: "Triage production log case",
  description:
    "Lengkapi incident map agar build failure dan runtime failure mengarah ke bukti serta next action yang berbeda.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah incident map, bukan pembacaan log Vercel asli.",
    "Tambahkan kasus build untuk error Module not found.",
    "Tambahkan kasus runtime untuk environment variable yang hilang.",
    "Pilih bukti dan next action yang sesuai symptom.",
    "Cek otomatis membaca struktur incident map. Preview tidak memuat deployment log nyata.",
  ],
  starterCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type Incident = {
  layer: "build" | "runtime";
  symptom: string;
  evidence: string;
  nextAction: string;
};

export const incidents: Incident[] = [
  {
    layer: "build",
    symptom: "",
    evidence: "",
    nextAction: "",
  },
];`,
  },
  solutionCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type Incident = {
  layer: "build" | "runtime";
  symptom: string;
  evidence: string;
  nextAction: string;
};

export const incidents: Incident[] = [
  {
    layer: "build",
    symptom: "deployment stopped before Ready",
    evidence: "Build log: Module not found: @/lib/profile-service",
    nextAction: "fix the import path, run npm run build, then redeploy",
  },
  {
    layer: "runtime",
    symptom: "dashboard returns 500 after Ready",
    evidence: "Runtime log: Missing NEXT_PUBLIC_SUPABASE_URL",
    nextAction: "add the variable to Production, redeploy, then retest /dashboard",
  },
];`,
  },
  checklist: [
    "Build failure dibedakan dari runtime error setelah deployment Ready.",
    "Evidence menyebut jenis log yang relevan tanpa memasukkan secret.",
    "Setiap incident memiliki next action yang dapat diuji.",
    "Perubahan environment diikuti redeploy sebelum retest.",
    "Preview tidak memuat log atau dashboard production yang nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "incident-type", label: "Incident membedakan layer build dan runtime.", type: "contains", valueIncludes: 'layer: "build" | "runtime";\n  symptom: string;\n  evidence: string;\n  nextAction: string;' },
      { id: "build-incident", label: "Build failure menggunakan build log dan retest lokal sebelum redeploy.", type: "contains", valueIncludes: 'layer: "build",\n    symptom: "deployment stopped before Ready",\n    evidence: "Build log: Module not found: @/lib/profile-service",\n    nextAction: "fix the import path, run npm run build, then redeploy"' },
      { id: "runtime-incident", label: "Runtime failure memakai runtime log dan memperbaiki scope Production.", type: "contains", valueIncludes: 'layer: "runtime",\n    symptom: "dashboard returns 500 after Ready",\n    evidence: "Runtime log: Missing NEXT_PUBLIC_SUPABASE_URL",\n    nextAction: "add the variable to Production, redeploy, then retest /dashboard"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca incident map. Preview tidak membuka Vercel log, meminta credential, atau menguji deployment production.",
    lines: [
      "Build failure dan runtime failure memiliki sumber bukti yang berbeda.",
      "Configuration change membutuhkan redeploy sebelum hasilnya diuji.",
      "Log memberi context tanpa menyertakan secret.",
    ],
  },
  skillTags: ["Vercel", "Logs", "Production", "Debugging"],
};

export const classifyProductionDataFreshnessChallenge: CodingChallenge = {
  id: "classify-production-data-freshness",
  lessonId: "nextjs-caching-basics",
  title: "Classify production data freshness",
  description:
    "Lengkapi data decision map untuk membedakan konten shared yang dapat dipertimbangkan untuk cache dan data user-specific yang membutuhkan request-time authorization.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah decision map, bukan konfigurasi cache Next.js yang dijalankan.",
    "Tambahkan keputusan untuk course catalog publik.",
    "Tambahkan keputusan untuk dashboard profile user saat ini.",
    "Jelaskan alasan scope dan freshness secara singkat.",
    "Cek otomatis membaca struktur decision map. Preview tidak menyimpan atau meng-invalidasi cache nyata.",
  ],
  starterCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type DataDecision = {
  data: string;
  scope: "shared" | "user";
  strategy: string;
  reason: string;
};

export const dataDecisions: DataDecision[] = [
  {
    data: "",
    scope: "shared",
    strategy: "",
    reason: "",
  },
];`,
  },
  solutionCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type DataDecision = {
  data: string;
  scope: "shared" | "user";
  strategy: string;
  reason: string;
};

export const dataDecisions: DataDecision[] = [
  {
    data: "public course catalog",
    scope: "shared",
    strategy: "consider explicit cache and documented revalidation",
    reason: "many learners can receive the same public content",
  },
  {
    data: "current learner dashboard profile",
    scope: "user",
    strategy: "request-time auth-aware data access",
    reason: "identity and authorization determine which profile can be shown",
  },
];`,
  },
  checklist: [
    "Konten publik shared dibedakan dari profile user-specific.",
    "Cache diperlakukan sebagai keputusan eksplisit, bukan default universal.",
    "Data profile menyebut identity dan authorization sebagai alasan.",
    "Tidak ada klaim bahwa latihan ini menjalankan konfigurasi cache project.",
    "Preview tidak menyimpan, menghapus, atau meng-invalidasi cache nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "data-decision-type", label: "DataDecision memetakan scope, strategy, dan reason.", type: "contains", valueIncludes: 'scope: "shared" | "user";\n  strategy: string;\n  reason: string;' },
      { id: "shared-course-data", label: "Course catalog public dipetakan sebagai data shared dengan keputusan cache eksplisit.", type: "contains", valueIncludes: 'data: "public course catalog",\n    scope: "shared",\n    strategy: "consider explicit cache and documented revalidation",\n    reason: "many learners can receive the same public content"' },
      { id: "user-profile-data", label: "Dashboard profile dipetakan sebagai data user dengan auth-aware access.", type: "contains", valueIncludes: 'data: "current learner dashboard profile",\n    scope: "user",\n    strategy: "request-time auth-aware data access",\n    reason: "identity and authorization determine which profile can be shown"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca data decision map. Preview tidak menjalankan fetch, menyimpan cache, atau meng-invalidasi data production.",
    lines: [
      "Data shared dan data user-specific memiliki kebutuhan berbeda.",
      "Freshness serta revalidation perlu diputuskan secara eksplisit.",
      "Identity dan authorization tetap menjadi batas data profile user.",
    ],
  },
  skillTags: ["Next.js", "Caching", "Revalidation", "Data Fetching"],
};

export const planDeploymentDebuggingResponseChallenge: CodingChallenge = {
  id: "plan-deployment-debugging-response",
  lessonId: "nextjs-deployment-debugging",
  title: "Plan deployment debugging response",
  description:
    "Lengkapi investigation plan untuk masalah build, environment, dan auth callback tanpa menebak atau mencatat credential.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah investigation plan, bukan debugging deployment atau provider auth sungguhan.",
    "Tambahkan case build import yang rusak.",
    "Tambahkan case environment Production yang hilang.",
    "Tambahkan case callback URL auth yang tidak cocok.",
    "Cek otomatis membaca struktur plan. Preview tidak membuka log, dashboard, atau auth provider nyata.",
  ],
  starterCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type Investigation = {
  symptom: string;
  evidence: string;
  nextAction: string;
};

export const investigations: Investigation[] = [
  {
    symptom: "",
    evidence: "",
    nextAction: "",
  },
];`,
  },
  solutionCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type Investigation = {
  symptom: string;
  evidence: string;
  nextAction: string;
};

export const investigations: Investigation[] = [
  {
    symptom: "deployment stopped during build",
    evidence: "Build log shows a missing import",
    nextAction: "fix the import, run npm run build, then redeploy",
  },
  {
    symptom: "production route returns 500 after Ready",
    evidence: "Runtime log shows a missing Production variable",
    nextAction: "check the variable name and Production scope, redeploy, then retest the route",
  },
  {
    symptom: "login redirects to an unexpected URL only in Production",
    evidence: "redirect target differs from the configured production callback URL",
    nextAction: "update the auth callback URL, redeploy if configuration changed, then test login again",
  },
];`,
  },
  checklist: [
    "Setiap symptom dipisahkan dari evidence dan next action.",
    "Build problem ditangani lewat build log lalu build lokal sebelum redeploy.",
    "Environment problem memeriksa nama, scope Production, dan redeploy.",
    "Auth redirect problem memeriksa callback URL tanpa menambahkan secret ke client.",
    "Preview tidak membuka dashboard deployment atau provider auth sungguhan.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "investigation-type", label: "Investigation memisahkan symptom, evidence, dan next action.", type: "contains", valueIncludes: 'symptom: string;\n  evidence: string;\n  nextAction: string;' },
      { id: "build-investigation", label: "Build issue diperbaiki dan diuji lokal sebelum redeploy.", type: "contains", valueIncludes: 'symptom: "deployment stopped during build",\n    evidence: "Build log shows a missing import",\n    nextAction: "fix the import, run npm run build, then redeploy"' },
      { id: "environment-investigation", label: "Runtime configuration issue memeriksa scope Production lalu retest route.", type: "contains", valueIncludes: 'symptom: "production route returns 500 after Ready",\n    evidence: "Runtime log shows a missing Production variable",\n    nextAction: "check the variable name and Production scope, redeploy, then retest the route"' },
      { id: "auth-investigation", label: "Redirect auth memeriksa callback URL Production.", type: "contains", valueIncludes: 'symptom: "login redirects to an unexpected URL only in Production",\n    evidence: "redirect target differs from the configured production callback URL",\n    nextAction: "update the auth callback URL, redeploy if configuration changed, then test login again"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca investigation plan. Preview tidak membuka Vercel, memeriksa environment, atau menjalankan redirect auth nyata.",
    lines: [
      "Build, configuration, dan auth callback memiliki bukti awal yang berbeda.",
      "Setiap perubahan diikuti langkah retest yang jelas.",
      "Credential tidak muncul dalam investigation plan.",
    ],
  },
  skillTags: ["Next.js", "Vercel", "Debugging", "Authentication"],
};

export const buildProductionReadinessCheckpointChallenge: CodingChallenge = {
  id: "build-production-readiness-checkpoint",
  lessonId: "nextjs-production-operations-assessment",
  title: "Build production readiness checkpoint",
  description:
    "Lengkapi readiness map yang menyatukan Git workflow, environment boundary, log diagnosis, dan pemeriksaan production tanpa mengklaim deployment sudah terjadi.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah readiness map, bukan bukti bahwa app sudah dideploy.",
    "Tambahkan item Git workflow untuk Preview dan Production.",
    "Tambahkan item environment server-only untuk secret.",
    "Tambahkan item observability untuk build dan runtime log.",
    "Cek otomatis membaca struktur checkpoint. Preview tidak memeriksa repository, Vercel project, atau deployment nyata.",
  ],
  starterCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type ReadinessItem = {
  area: "git" | "environment" | "observability" | "verification";
  status: "planned" | "checked";
  detail: string;
};

export const readinessItems: ReadinessItem[] = [
  {
    area: "git",
    status: "planned",
    detail: "",
  },
];`,
  },
  solutionCode: {
    ...nextProductionPracticePreviewCode,
    tsx: `type ReadinessItem = {
  area: "git" | "environment" | "observability" | "verification";
  status: "planned" | "checked";
  detail: string;
};

export const readinessItems: ReadinessItem[] = [
  {
    area: "git",
    status: "checked",
    detail: "feature branch is reviewed in Preview before merge to main Production",
  },
  {
    area: "environment",
    status: "checked",
    detail: "server-only secrets have no NEXT_PUBLIC_ prefix and are scoped before redeploy",
  },
  {
    area: "observability",
    status: "checked",
    detail: "build log is used before Ready and runtime log is used after request failures",
  },
  {
    area: "verification",
    status: "planned",
    detail: "open the production URL, test primary routes, and write a credential-free production note",
  },
];`,
  },
  checklist: [
    "Readiness membedakan rencana dengan pemeriksaan yang sudah benar-benar dilakukan.",
    "Git workflow menyebut Preview review sebelum Production merge.",
    "Secret server-only tidak memakai prefix NEXT_PUBLIC_.",
    "Build dan runtime log dipakai sesuai jenis failure.",
    "Preview tidak memeriksa repository, environment, URL, atau deployment nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "readiness-type", label: "ReadinessItem memetakan area, status, dan detail.", type: "contains", valueIncludes: 'area: "git" | "environment" | "observability" | "verification";\n  status: "planned" | "checked";\n  detail: string;' },
      { id: "git-readiness", label: "Git readiness mencakup Preview review sebelum merge ke main Production.", type: "contains", valueIncludes: 'area: "git",\n    status: "checked",\n    detail: "feature branch is reviewed in Preview before merge to main Production"' },
      { id: "environment-readiness", label: "Environment readiness menjaga secret server-only sebelum redeploy.", type: "contains", valueIncludes: 'area: "environment",\n    status: "checked",\n    detail: "server-only secrets have no NEXT_PUBLIC_ prefix and are scoped before redeploy"' },
      { id: "observability-readiness", label: "Observability readiness membedakan build dan runtime log.", type: "contains", valueIncludes: 'area: "observability",\n    status: "checked",\n    detail: "build log is used before Ready and runtime log is used after request failures"' },
      { id: "verification-readiness", label: "Verification plan mencakup URL production, route utama, dan production note aman.", type: "contains", valueIncludes: 'area: "verification",\n    status: "planned",\n    detail: "open the production URL, test primary routes, and write a credential-free production note"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca readiness map. Preview tidak mengakses GitHub, membuka Vercel dashboard, memeriksa secret, atau memvalidasi deployment nyata.",
    lines: [
      "Readiness memisahkan hal yang sudah dicek dari rencana pemeriksaan nyata.",
      "Git, environment, log, dan verification memiliki tanggung jawab berbeda.",
      "Production note dapat dibagikan tanpa credential.",
    ],
  },
  skillTags: ["Next.js", "Vercel", "Deployment", "Logs", "Readiness Checkpoint"],
};
