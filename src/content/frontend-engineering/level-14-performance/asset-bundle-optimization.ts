import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const assetBundlePracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const assetBundleOptimizationModule: Module = {
  id: "asset-bundle-optimization",
  trackId: "frontend-engineering",
  title: "Asset and Bundle Optimization",
  slug: "asset-bundle-optimization",
  description:
    "Mengurangi biaya image, font, dan JavaScript dengan memilih resource serta loading strategy yang sesuai kebutuhan user.",
  order: 45,
  lessonIds: [
    "image-optimization",
    "font-optimization",
    "bundle-awareness",
    "code-splitting",
    "dynamic-imports",
    "asset-bundle-optimization-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Next.js Image",
    "next/font",
    "Bundle Cost",
    "Code Splitting",
    "Dynamic Imports",
    "Performance",
  ],
};

export const imageOptimizationLesson: Lesson = {
  id: "image-optimization",
  trackId: "frontend-engineering",
  moduleId: "asset-bundle-optimization",
  title: "Image Optimization",
  slug: "image-optimization",
  description:
    "Memilih ukuran, dimensi, responsive loading, dan preload image berdasarkan perannya pada halaman.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan biaya image bagi loading dan layout stability",
    "Membedakan image utama dari image yang tidak kritis",
    "Menggunakan next/image dengan dimensi dan sizes yang sesuai",
    "Memilih preload hanya ketika image benar-benar perlu diprioritaskan",
  ],
  skillTags: ["Next.js", "Image Optimization", "LCP", "Responsive Images"],
  blocks: [
    {
      id: "image-optimization-intro",
      type: "text",
      title: "Image yang tepat perlu cepat, stabil, dan sesuai area tampil",
      content:
        "Image sering menjadi resource terbesar pada halaman. Biayanya bukan hanya ukuran file: browser juga perlu mengetahui ruangnya agar layout tidak meloncat, memilih source yang cocok untuk viewport, dan menentukan apakah image tersebut benar-benar harus dimuat lebih awal. next/image memberi pattern yang lebih aman untuk image aplikasi Next.js, tetapi bukan alasan untuk menandai semua image sebagai penting. Mulai dari peran visualnya. Hero yang menjadi kandidat LCP dapat membutuhkan preload; thumbnail di bawah fold biasanya tidak. Sertakan alt yang bermakna, dimensi yang merepresentasikan rasio asset, dan sizes yang menjelaskan lebar tampilan image pada breakpoint yang kamu dukung.",
    },
    {
      id: "image-optimization-example",
      type: "code-example",
      title: "Hero course yang diprioritaskan dengan alasan jelas",
      language: "tsx",
      code: `import Image from "next/image";

export default function CourseHero() {
  return (
    <section>
      <Image
        src="/courses/frontend-hero.webp"
        alt="Preview track Frontend Engineering"
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, 960px"
        preload
      />
      <h1>Frontend Engineering</h1>
    </section>
  );
}`,
      explanation:
        "Image ini berada di awal route dan menjadi kandidat konten utama, sehingga preload dapat dibenarkan setelah diukur. width serta height memberi rasio untuk layout, sedangkan sizes memberi browser konteks ukuran tampil yang diharapkan. Untuk thumbnail daftar atau image dekoratif, jangan menyalin preload secara otomatis.",
    },
    {
      id: "image-optimization-coding-practice",
      type: "coding-practice",
      challengeId: "optimize-course-hero-image",
    },
    {
      id: "image-optimization-quick-check",
      type: "quick-check",
      question:
        "Kapan preload paling layak dipertimbangkan pada next/image?",
      options: [
        "Saat image adalah kandidat LCP atau hero penting di viewport awal.",
        "Untuk setiap thumbnail agar semua image tiba bersamaan.",
        "Hanya ketika image berada jauh di bawah halaman.",
        "Untuk menggantikan width dan height pada image.",
      ],
      correctAnswer:
        "Saat image adalah kandidat LCP atau hero penting di viewport awal.",
      explanation:
        "Preload memberi prioritas lebih awal pada resource. Gunakan dengan hemat untuk image penting di viewport awal yang benar-benar memengaruhi pengalaman loading, bukan sebagai default semua image.",
    },
    {
      id: "image-optimization-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan optimalkan image hanya dengan mengganti component",
      content:
        "next/image tidak membuat asset source yang terlalu besar menjadi tepat secara otomatis. Tetap periksa crop, dimensi, format, kualitas, dan apakah image memang diperlukan pada route tersebut. Optimasi image yang baik menjaga makna visual sambil mengurangi biaya resource yang benar-benar dikirim ke user.",
    },
    {
      id: "image-optimization-summary",
      type: "summary",
      points: [
        "Image perlu dipilih berdasarkan peran pada journey user dan posisi viewport.",
        "Dimensi membantu menjaga layout stabil, sedangkan sizes membantu responsive loading.",
        "Preload hanya layak untuk image penting seperti kandidat LCP yang telah dipahami.",
        "Ukuran dan kualitas source asset tetap perlu ditinjau meskipun memakai next/image.",
        "Berikutnya, font perlu diperlakukan sebagai resource UI yang memengaruhi keterbacaan dan layout.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "image-optimization-intro",
      "image-optimization-example",
      "image-optimization-coding-practice",
      "image-optimization-quick-check",
      "image-optimization-callout",
      "image-optimization-summary",
    ],
  },
};

export const fontOptimizationLesson: Lesson = {
  id: "font-optimization",
  trackId: "frontend-engineering",
  moduleId: "asset-bundle-optimization",
  title: "Font Optimization",
  slug: "font-optimization",
  description:
    "Memuat font yang tetap nyaman dibaca tanpa menambah request eksternal atau layout shift yang tidak perlu.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan dampak font terhadap loading dan layout stability",
    "Menggunakan next/font untuk font aplikasi yang terkelola",
    "Memilih subset dan display yang sesuai kebutuhan",
    "Menghindari pemuatan banyak font serta weight tanpa alasan",
  ],
  skillTags: ["Next.js", "next/font", "Typography", "CLS"],
  blocks: [
    {
      id: "font-optimization-intro",
      type: "text",
      title: "Typography adalah bagian dari performance, bukan hanya styling",
      content:
        "Font menentukan keterbacaan, hierarchy, dan ruang layout. Ketika browser harus menunggu stylesheet atau file font eksternal, text dapat muncul terlambat atau berubah ukuran setelah fallback diganti. next/font mengelola font sebagai bagian dari build dan self-hosting, sehingga aplikasi tidak mengandalkan request font dari browser ke provider luar. Namun, optimasi tetap membutuhkan keputusan: pakai family yang memang diperlukan, pilih subset yang relevan, hindari banyak weight atau font dekoratif yang tidak dipakai, dan pastikan fallback serta display tidak merusak pengalaman baca. Tujuannya bukan menghapus identitas visual, melainkan menjaga text utama cepat dan stabil.",
    },
    {
      id: "font-optimization-example",
      type: "code-example",
      title: "Konfigurasi font utama pada root layout",
      language: "tsx",
      code: `import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}`,
      explanation:
        "Contoh ini membuat Montserrat menjadi font aplikasi yang dikelola next/font. Subset menyatakan karakter yang benar-benar diperlukan, sedangkan display membantu browser tetap menampilkan text dengan fallback bila font belum siap. Jangan menambah banyak family atau configuration font ke root layout tanpa melihat route dan UI yang benar-benar memakainya.",
    },
    {
      id: "font-optimization-coding-practice",
      type: "coding-practice",
      challengeId: "configure-learning-font-with-next-font",
    },
    {
      id: "font-optimization-quick-check",
      type: "quick-check",
      question:
        "Review mana yang paling berguna sebelum menambah font baru ke root layout?",
      options: [
        "Apakah family, subset, dan weight tersebut benar-benar dipakai lintas route.",
        "Apakah nama font terdengar lebih premium dari font lama.",
        "Apakah semua text dapat memakai font dekoratif yang sama.",
        "Apakah font baru dapat ditambahkan tanpa melihat ukuran atau fallback.",
      ],
      correctAnswer:
        "Apakah family, subset, dan weight tersebut benar-benar dipakai lintas route.",
      explanation:
        "Root layout memengaruhi banyak route. Review pemakaian nyata membantu menghindari memuat resource tipografi yang tidak memberi nilai pada pengalaman learner.",
    },
    {
      id: "font-optimization-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menjadikan semua font asset global",
      content:
        "Menaruh banyak font atau weight di root layout terlihat praktis, tetapi dapat memperbesar biaya untuk setiap route. Jika font hanya mendukung satu visual khusus, pertimbangkan apakah ia benar-benar perlu, apakah dapat dibatasi scope-nya, atau apakah pengalaman dapat tetap jelas dengan font yang sudah tersedia.",
    },
    {
      id: "font-optimization-summary",
      points: [
        "Font memengaruhi keterbacaan, loading text, dan potensi layout shift.",
        "next/font mengelola font aplikasi melalui build dan self-hosting.",
        "Pilih subset, family, dan weight berdasarkan pemakaian nyata.",
        "Root layout perlu dijaga agar tidak mengirim resource tipografi yang tidak diperlukan semua route.",
        "Berikutnya, bundle awareness membantu membaca biaya JavaScript yang ikut dikirim ke browser.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "font-optimization-intro",
      "font-optimization-example",
      "font-optimization-coding-practice",
      "font-optimization-quick-check",
      "font-optimization-callout",
      "font-optimization-summary",
    ],
  },
};

export const bundleAwarenessLesson: Lesson = {
  id: "bundle-awareness",
  trackId: "frontend-engineering",
  moduleId: "asset-bundle-optimization",
  title: "Bundle Awareness",
  slug: "bundle-awareness",
  description:
    "Membaca biaya JavaScript dari dependency, client boundary, dan feature yang dikirim sebelum user membutuhkannya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan mengapa JavaScript browser memiliki biaya user-facing",
    "Mengenali dependency atau feature yang tidak kritis untuk initial route",
    "Membaca build output atau report sebagai arah investigasi",
    "Memilih trade-off tanpa menghapus feature secara membabi buta",
  ],
  skillTags: ["JavaScript Bundle", "Client Components", "Build Output", "Dependencies"],
  blocks: [
    {
      id: "bundle-awareness-intro",
      type: "text",
      title: "JavaScript yang dikirim ke browser adalah biaya yang harus dibaca",
      content:
        "Setiap Client Component, dependency browser, dan feature interaktif membawa biaya download, parse, serta execution di device user. Bukan berarti semua JavaScript buruk. Filter, editor, chart, modal, dan analytics dapat memberi nilai nyata. Pertanyaan engineering-nya adalah: apakah user membutuhkan code tersebut untuk melihat route pertama, atau baru ketika memilih action tertentu? Production build dan bundle report membantu menemukan kandidat, tetapi nama file besar saja belum cukup untuk menghapus dependency. Hubungkan temuan dengan journey, client boundary, route, dan behavior yang akan hilang atau tertunda bila code dipindahkan.",
    },
    {
      id: "bundle-awareness-example",
      type: "code-example",
      title: "Catatan dari route yang perlu ditelusuri",
      language: "json",
      code: `{
  "route": "/learn/frontend-engineering",
  "initialClientFeatures": [
    "course filters",
    "search library",
    "insights chart",
    "help modal"
  ],
  "observation": "Insights chart dan help modal baru dipakai setelah learner memilih action."
}`,
      explanation:
        "Catatan ini belum membuktikan sebuah dependency harus dihapus. Ia memberi kandidat untuk ditinjau: apakah chart perlu masuk initial route, apakah modal dapat dimuat setelah click, dan apakah search library harus tersedia sebelum learner mengetik. Uji perubahan terhadap journey penting, bukan hanya ukuran bundle.",
    },
    {
      id: "bundle-awareness-writing-practice",
      type: "writing-practice",
      prompt:
        "Buat bundle review note dari catatan route di atas. Pilih satu feature yang paling layak ditelusuri, jelaskan mengapa feature itu bukan kebutuhan initial route, sebutkan user action yang akan memicu pemuatannya, risiko jika feature ditunda, dan bukti yang akan kamu bandingkan sebelum serta sesudah perubahan.",
      placeholder:
        "Saya akan meninjau insights chart karena learner baru membutuhkannya setelah membuka area insight. Action pemicunya adalah click Lihat insight. Risiko penundaan adalah panel mungkin terasa kosong atau terlambat saat dibuka, jadi saya perlu menyediakan loading state yang jelas. Saya akan membandingkan ukuran atau loading behavior initial route dan memastikan learner masih dapat membuka insight dengan benar setelah component dimuat.",
      minimumCharacters: 300,
      checklist: [
        "Memilih feature berdasarkan kapan user benar-benar membutuhkannya.",
        "Menyebut action yang memicu feature.",
        "Menyebut risiko UX bila code ditunda.",
        "Menentukan bukti sebelum dan sesudah perubahan.",
      ],
      modelAnswer:
        "Saya akan meninjau insights chart karena learner tidak memerlukannya untuk membaca track dan memilih lesson pertama. Chart baru relevan setelah learner menekan Lihat insight. Karena itu, ia kandidat untuk dipisahkan dari code awal, bukan untuk dihapus tanpa alasan. Risiko utamanya adalah panel insight terasa lambat atau membingungkan ketika pertama dibuka. Saya akan menyediakan state memuat yang menjelaskan apa yang sedang disiapkan. Sebelum dan sesudah perubahan, saya membandingkan biaya initial route serta mencoba journey membuka insight pada device dan network yang relevan. Saya juga memastikan chart tetap menerima data yang benar setelah pemuatannya ditunda.",
    },
    {
      id: "bundle-awareness-quick-check",
      type: "quick-check",
      question:
        "Apa pertanyaan yang paling tepat sebelum memindahkan dependency dari initial bundle?",
      options: [
        "Kapan dalam journey user dependency ini benar-benar diperlukan?",
        "Apakah nama package terlihat panjang di package.json?",
        "Apakah seluruh JavaScript dapat dihapus dari route?",
        "Apakah dependency ini baru ditambahkan minggu ini?",
      ],
      correctAnswer:
        "Kapan dalam journey user dependency ini benar-benar diperlukan?",
      explanation:
        "Waktu kebutuhan user memberi dasar keputusan loading. Dependency besar bisa tetap tepat bila dibutuhkan untuk initial experience, sedangkan dependency kecil bisa ditunda bila benar-benar non-kritis.",
    },
    {
      id: "bundle-awareness-callout",
      type: "callout",
      variant: "important",
      title: "Bundle awareness bukan perburuan angka tanpa konteks",
      content:
        "Memecah semua component kecil dapat menambah request, loading state, dan complexity tanpa dampak berarti. Cari biaya yang dapat dihindari pada route atau interaction nyata, lalu bandingkan hasilnya. Ukuran bundle adalah satu sinyal; pengalaman membuka page dan menggunakan feature tetap menjadi tujuan.",
    },
    {
      id: "bundle-awareness-summary",
      type: "summary",
      points: [
        "JavaScript client memiliki biaya download, parse, dan execution pada device user.",
        "Build output atau report memberi kandidat investigasi, bukan instruksi otomatis untuk menghapus code.",
        "Nilai feature ditentukan oleh journey dan kapan user membutuhkannya.",
        "Feature yang ditunda perlu tetap memiliki loading state serta behavior yang jelas.",
        "Berikutnya, code splitting memisahkan code berdasarkan route atau component yang memang tidak perlu tersedia sejak awal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "bundle-awareness-intro",
      "bundle-awareness-example",
      "bundle-awareness-writing-practice",
      "bundle-awareness-quick-check",
      "bundle-awareness-callout",
      "bundle-awareness-summary",
    ],
  },
};

export const codeSplittingLesson: Lesson = {
  id: "code-splitting",
  trackId: "frontend-engineering",
  moduleId: "asset-bundle-optimization",
  title: "Code Splitting",
  slug: "code-splitting",
  description:
    "Memisahkan code non-kritis agar initial route memuat hal yang benar-benar dibutuhkan learner terlebih dahulu.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan tujuan code splitting pada route dan component",
    "Membedakan code penting awal dari feature yang dapat menunggu action user",
    "Memakai next/dynamic untuk Client Component non-kritis",
    "Menambahkan loading state yang menjaga konteks user",
  ],
  skillTags: ["Code Splitting", "next/dynamic", "Client Components", "Loading States"],
  blocks: [
    {
      id: "code-splitting-intro",
      type: "text",
      title: "Pisahkan code berdasarkan kapan ia dibutuhkan, bukan berdasarkan kebiasaan",
      content:
        "Next.js sudah memisahkan Server Components berdasarkan route segment. Code splitting tambahan berguna ketika sebuah Client Component berat tidak dibutuhkan untuk initial content route. Contohnya insight chart yang hanya muncul setelah learner memilih Lihat insight. Dengan next/dynamic, component dapat ditempatkan pada bundle terpisah dan dimuat ketika dirender. Keputusan ini membawa tanggung jawab UX: user tetap perlu melihat loading state yang menjelaskan panel sedang disiapkan, dan feature tidak boleh menjadi lebih lambat dari manfaat yang diberikan. Jangan memecah button kecil atau text statis hanya karena dynamic import tersedia.",
    },
    {
      id: "code-splitting-example",
      type: "code-example",
      title: "Pisahkan panel insight dari content route awal",
      language: "tsx",
      code: `"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CourseInsights = dynamic(
  () => import("@/components/course-insights"),
  { loading: () => <p>Menyiapkan insight course...</p> },
);

export default function CourseOverview({ courseId }: { courseId: string }) {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setShowInsights(true)}>
        Lihat insight
      </button>
      {showInsights ? <CourseInsights courseId={courseId} /> : null}
    </section>
  );
}`,
      explanation:
        "CourseOverview membutuhkan client boundary karena ia menyimpan state click. CourseInsights dipisahkan karena hanya dibutuhkan setelah action user. Loading callback membuat penundaan dapat dipahami. Pattern ini masuk akal bila insight cukup mahal atau jarang dipakai pada initial journey; ukur dulu agar tidak memecah UI kecil yang tidak memberi penghematan berarti.",
    },
    {
      id: "code-splitting-coding-practice",
      type: "coding-practice",
      challengeId: "split-course-insights-panel",
    },
    {
      id: "code-splitting-quick-check",
      type: "quick-check",
      question:
        "Component mana yang paling layak menjadi kandidat code splitting tambahan?",
      options: [
        "Chart insight yang hanya muncul setelah learner menekan Lihat insight.",
        "Heading statis yang selalu terlihat pada route.",
        "Satu label singkat di dalam button.",
        "Layout route yang diperlukan semua child content.",
      ],
      correctAnswer:
        "Chart insight yang hanya muncul setelah learner menekan Lihat insight.",
      explanation:
        "Component yang tidak dibutuhkan pada initial journey dan memiliki biaya bermakna adalah kandidat yang lebih baik. Content awal yang selalu dibaca learner sebaiknya tetap tersedia tanpa menambah tahap pemuatan yang tidak perlu.",
    },
    {
      id: "code-splitting-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menukar loading awal dengan delay yang lebih mengganggu",
      content:
        "Code splitting dapat memperbaiki initial route, tetapi user akan tetap membayar saat membuka feature. Pastikan feature memiliki loading state, error handling bila relevan, dan alasan jelas mengapa ia boleh menunggu. Evaluasi journey lengkap, bukan hanya angka first load.",
    },
    {
      id: "code-splitting-summary",
      type: "summary",
      points: [
        "Code splitting memindahkan code ke titik ketika feature benar-benar dibutuhkan.",
        "Next.js sudah memisahkan Server Components berdasarkan route; dynamic split terutama relevan untuk Client Component non-kritis.",
        "Loading state adalah bagian dari decision, bukan tambahan kosmetik.",
        "Jangan lazy-load component kecil tanpa bukti biaya dan manfaat.",
        "Berikutnya, dynamic imports memperluas pattern ini untuk component dan library yang dipakai setelah action tertentu.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "code-splitting-intro",
      "code-splitting-example",
      "code-splitting-coding-practice",
      "code-splitting-quick-check",
      "code-splitting-callout",
      "code-splitting-summary",
    ],
  },
};

export const dynamicImportsLesson: Lesson = {
  id: "dynamic-imports",
  trackId: "frontend-engineering",
  moduleId: "asset-bundle-optimization",
  title: "Dynamic Imports",
  slug: "dynamic-imports",
  description:
    "Memuat component atau library berat hanya setelah user membutuhkan behavior yang bergantung padanya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan static import dari import yang dipicu action user",
    "Memakai import() untuk library client-side yang non-kritis",
    "Menjaga feedback UI saat dependency sedang dimuat",
    "Menilai trade-off sebelum menunda feature",
  ],
  skillTags: ["Dynamic Imports", "JavaScript", "Next.js", "Dependencies"],
  blocks: [
    {
      id: "dynamic-imports-intro",
      type: "text",
      title: "Dependency dapat menunggu ketika behavior-nya juga menunggu",
      content:
        "Static import membuat dependency menjadi bagian dari code yang harus tersedia saat module dimuat. Dynamic import melalui import() memberi pilihan untuk memuat library ketika action user benar-benar memerlukannya. Contoh yang masuk akal adalah fuzzy search yang baru dipakai setelah learner mulai mengetik, editor tambahan yang dibuka dari button, atau parser besar untuk import file. Ini bukan pattern untuk menyembunyikan biaya tanpa UX. User perlu tahu ketika feature sedang disiapkan, hasil action harus tetap benar, dan dependency harus sudah tersedia di project lokal. Jangan menunda code yang dibutuhkan untuk content atau interaction utama hanya demi mengecilkan angka awal.",
    },
    {
      id: "dynamic-imports-example",
      type: "code-example",
      title: "Muat library pencarian setelah learner mengetik",
      language: "tsx",
      code: `"use client";

import { useState } from "react";

const courses = ["React Fundamentals", "Testing UI", "Next.js App Router"];

export default function CourseSearch() {
  const [results, setResults] = useState<string[]>([]);

  async function handleSearch(query: string) {
    const Fuse = (await import("fuse.js")).default;
    const fuse = new Fuse(courses);

    setResults(fuse.search(query).map((result) => result.item));
  }

  return (
    <label>
      Cari course
      <input onChange={(event) => void handleSearch(event.target.value)} />
      <p>{results.length} hasil</p>
    </label>
  );
}`,
      explanation:
        "Fuse baru dimuat ketika learner mulai menggunakan search. Pada local project, package harus sudah dipasang dan hasil pencarian perlu diuji dengan input nyata. Bila search adalah bagian utama yang dibutuhkan sejak route terbuka, menunda library dapat memperburuk interaction awal. Pilih berdasarkan journey, bukan karena dynamic import selalu terlihat lebih canggih.",
    },
    {
      id: "dynamic-imports-coding-practice",
      type: "coding-practice",
      challengeId: "load-course-search-library-on-demand",
    },
    {
      id: "dynamic-imports-quick-check",
      type: "quick-check",
      question:
        "Kapan import() untuk library pencarian paling masuk akal?",
      options: [
        "Saat library baru dibutuhkan setelah learner mulai memakai search yang bukan initial content route.",
        "Saat library diperlukan untuk merender heading pertama.",
        "Saat ingin menghindari memasang dependency di local project.",
        "Saat tidak ingin menampilkan hasil pencarian sama sekali.",
      ],
      correctAnswer:
        "Saat library baru dibutuhkan setelah learner mulai memakai search yang bukan initial content route.",
      explanation:
        "Dynamic import menunda biaya sampai behavior dibutuhkan. Dependency tetap perlu tersedia di project dan UX search tetap harus jelas saat library serta hasil sedang diproses.",
    },
    {
      id: "dynamic-imports-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Dynamic import bukan pengganti desain interaction",
      content:
        "Membuat import asynchronous berarti kamu menambah state menunggu serta kemungkinan error. Pastikan user tidak kehilangan input, tidak melihat hasil lama yang menyesatkan, dan mendapat feedback yang tepat. Untuk feature kecil yang sudah dibutuhkan segera, static import dapat lebih sederhana dan lebih baik.",
    },
    {
      id: "dynamic-imports-summary",
      type: "summary",
      points: [
        "Dynamic import memuat code saat behavior membutuhkannya, bukan selalu saat route pertama dibuka.",
        "Library on-demand harus tetap terpasang dan diuji di local project.",
        "Feedback, state menunggu, dan hasil action adalah bagian dari kualitas feature.",
        "Jangan menunda code yang penting untuk content atau interaction awal.",
        "Berikutnya, Uji Kompetensi menggabungkan keputusan image, font, bundle, split, dan import menjadi satu rekomendasi yang dapat dijelaskan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "dynamic-imports-intro",
      "dynamic-imports-example",
      "dynamic-imports-coding-practice",
      "dynamic-imports-quick-check",
      "dynamic-imports-callout",
      "dynamic-imports-summary",
    ],
  },
};

export const assetBundleOptimizationAssessmentLesson: Lesson = {
  id: "asset-bundle-optimization-assessment",
  trackId: "frontend-engineering",
  moduleId: "asset-bundle-optimization",
  title: "Uji Kompetensi Asset and Bundle Optimization",
  slug: "asset-bundle-optimization-assessment",
  description:
    "Checkpoint untuk memilih perbaikan image, font, dan JavaScript berdasarkan journey user serta trade-off yang dapat diuji.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Memilih image dan font pattern yang tepat untuk route",
    "Menjelaskan biaya bundle dari feature client-side",
    "Membedakan code splitting serta dynamic import yang beralasan",
    "Menyusun rekomendasi optimasi dengan bukti dan trade-off",
  ],
  skillTags: [
    "Asset Optimization",
    "Bundle Awareness",
    "Next.js",
    "Dynamic Imports",
    "Readiness Checkpoint",
  ],
  blocks: [
    {
      id: "asset-bundle-optimization-assessment-recap",
      type: "text",
      title: "Checkpoint: resource perlu hadir saat user membutuhkannya",
      content:
        "Image utama perlu stabil dan sesuai viewport; font perlu mendukung keterbacaan tanpa menjadi beban global yang tidak perlu; JavaScript client perlu dikirim berdasarkan kebutuhan journey. next/image, next/font, code splitting, dan import() adalah pattern, bukan target akhir. Gunakan pattern itu ketika ia mengurangi biaya yang benar-benar dapat dihindari tanpa merusak content, interaction, atau clarity user. Untuk setiap perubahan, catat baseline, alasan feature boleh ditunda atau perlu segera hadir, state yang user lihat saat menunggu, lalu ukur ulang pada route yang relevan.",
    },
    {
      id: "asset-bundle-optimization-assessment-quiz",
      type: "quiz",
      quizId: "asset-bundle-optimization-assessment-quiz",
    },
    {
      id: "asset-bundle-optimization-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-optimized-course-page-checkpoint",
    },
    {
      id: "asset-bundle-optimization-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis optimization note untuk route course mobile dengan kondisi berikut: hero image menjadi kandidat LCP, root layout memuat tiga font family tetapi hanya satu yang dipakai, dan route awal ikut membawa chart insight serta library pencarian yang baru dipakai setelah action user. Sebutkan prioritas perubahan, alasan image atau font perlu diubah, feature mana yang dapat dipisahkan atau dimuat on-demand, feedback UI yang diperlukan, bukti yang akan dibandingkan sebelum dan sesudah, serta satu trade-off yang tetap kamu pertimbangkan.",
      placeholder:
        "Saya memprioritaskan hero image karena ia kandidat LCP. Saya akan memastikan source, dimensi, sizes, dan preload hanya dipakai bila image tersebut benar-benar konten utama di viewport awal. Saya meninjau tiga font family dan mempertahankan satu family yang dipakai dengan subset relevan. Chart insight dapat dipisahkan karena hanya dibuka setelah click; saya menambahkan loading state saat panel disiapkan. Library pencarian dapat diimport ketika learner mulai mencari, asalkan input dan hasil tetap jelas. Saya membandingkan route initial load, layout stability, dan journey membuka chart atau search. Trade-offnya adalah user akan melihat delay kecil saat membuka insight, sehingga loading state perlu jujur dan feature perlu tetap dapat dipakai.",
      minimumCharacters: 600,
      checklist: [
        "Menetapkan prioritas berdasarkan journey dan kandidat masalah, bukan semua resource sekaligus.",
        "Menjelaskan keputusan image serta font dengan alasan yang user-facing.",
        "Memilih code splitting atau dynamic import untuk feature non-kritis yang tepat.",
        "Menyebut feedback UI saat feature ditunda.",
        "Menyebut baseline, pengukuran ulang, dan trade-off.",
      ],
      modelAnswer:
        "Saya memprioritaskan hero image karena ia kandidat LCP pada route mobile. Saya akan memastikan asset source tidak terlalu besar, width dan height memberi rasio yang tepat, sizes sesuai area hero mobile, dan preload hanya digunakan bila image benar-benar terlihat di viewport awal. Berikutnya saya mengaudit root layout: bila tiga family font dimuat tetapi hanya satu dipakai, saya mempertahankan family yang dibutuhkan dengan subset yang relevan agar text utama tetap stabil. Chart insight adalah kandidat code splitting karena learner baru membutuhkannya setelah menekan Lihat insight. Saya akan menyediakan loading state yang menjelaskan panel sedang disiapkan. Library fuzzy search dapat diimport saat learner mulai mencari, selama package tersedia dan input tidak kehilangan state. Saya membandingkan biaya route awal serta journey membuka insight dan search sebelum serta sesudah perubahan. Trade-off-nya adalah penundaan saat feature pertama kali dipakai; bila delay merusak tugas utama user, feature perlu tetap tersedia lebih awal atau pattern perlu dipertimbangkan ulang.",
    },
    {
      id: "asset-bundle-optimization-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk mengoptimalkan satu route Next.js yang nyata",
      description:
        "Buka dokumentasi sesuai resource yang benar-benar kamu ubah. Gunakan satu route local atau deployed, catat baseline, lakukan satu perubahan, lalu bandingkan outcome. FluentStack membaca struktur exercise, bukan menjalankan build atau dependency project lokalmu.",
      links: [
        {
          source: "Next.js",
          title: "Image Component",
          url: "https://nextjs.org/docs/app/api-reference/components/image",
          focus: [
            "Dimensi, sizes, dan preload image berdasarkan posisi serta peran di viewport.",
            "Image local, remote, dan layout stability.",
            "Kapan default lazy loading lebih tepat daripada memprioritaskan resource.",
          ],
          ignoreForNow: [
            "Custom image loader dan CDN architecture.",
            "Advanced remote image security configuration di luar kebutuhan route-mu.",
          ],
        },
        {
          source: "Next.js",
          title: "Font Module",
          url: "https://nextjs.org/docs/app/api-reference/components/font",
          focus: [
            "next/font untuk font Google atau local.",
            "Subset, display, fallback, dan pemakaian font yang sesuai scope.",
            "Menghindari resource font yang tidak dibutuhkan route.",
          ],
          ignoreForNow: [
            "Advanced font subsetting pipeline.",
            "Menambah banyak family atau variable font tanpa review pemakaian.",
          ],
        },
        {
          source: "Next.js",
          title: "Lazy Loading",
          url: "https://nextjs.org/docs/app/guides/lazy-loading",
          focus: [
            "next/dynamic untuk Client Component dan library yang non-kritis.",
            "Loading UI saat code dipisahkan.",
            "Batas antara route awal dan feature yang dipicu action user.",
          ],
          ignoreForNow: [
            "Manual chunk strategy dan webpack internals.",
            "Mematikan SSR tanpa alasan product atau browser API yang jelas.",
          ],
        },
      ],
      followUpAction:
        "Di Local Next.js App, pilih satu page yang memiliki image atau feature client-side. Catat baseline, ganti satu pattern image atau font bila relevan, atau pisahkan satu feature non-kritis dengan loading state. Jalankan production build dan coba journey user terkait sebelum menulis apa yang berubah, apa yang belum pasti, dan trade-off yang kamu terima.",
    },
    {
      id: "asset-bundle-optimization-assessment-summary",
      type: "summary",
      points: [
        "Optimasi asset dan bundle dimulai dari journey user serta resource yang benar-benar dapat dihindari pada initial route.",
        "Image, font, dan JavaScript membutuhkan keputusan berbeda tentang ruang, prioritas, scope, serta waktu pemuatan.",
        "Code splitting dan dynamic import harus menjaga loading state serta behavior feature.",
        "Bandingkan baseline dan hasil perubahan; jangan menerima atau menolak pattern berdasarkan score saja.",
        "Kamu siap melanjutkan ke Rendering Cost and Hydration untuk memeriksa biaya browser setelah UI sampai ke halaman.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "asset-bundle-optimization-assessment-recap",
      "asset-bundle-optimization-assessment-quiz",
      "asset-bundle-optimization-assessment-coding-practice",
      "asset-bundle-optimization-assessment-writing-practice",
      "asset-bundle-optimization-assessment-documentation-bridge",
      "asset-bundle-optimization-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const assetBundleOptimizationAssessmentQuiz: Quiz = {
  id: "asset-bundle-optimization-assessment-quiz",
  lessonId: "asset-bundle-optimization-assessment",
  title: "Uji Kompetensi Asset and Bundle Optimization",
  passingScore: 70,
  questions: [
    {
      id: "asset-image-priority",
      type: "multiple-choice",
      question:
        "Kapan hero image layak memakai preload pada route Next.js?",
      options: [
        "Saat image benar-benar kandidat LCP atau konten penting di viewport awal.",
        "Saat image menjadi thumbnail ke-12 pada daftar course.",
        "Saat belum mengetahui apakah image terlihat pada route awal.",
        "Saat ingin menggantikan alt text pada image.",
      ],
      correctAnswer:
        "Saat image benar-benar kandidat LCP atau konten penting di viewport awal.",
      explanation:
        "Preload digunakan secara hemat untuk resource yang penting pada loading awal. Posisikan keputusan ini pada bukti route dan viewport, bukan sebagai default semua image.",
    },
    {
      id: "asset-font-scope",
      type: "multiple-choice",
      question:
        "Mengapa menambah banyak family font ke root layout perlu ditinjau?",
      options: [
        "Karena resource itu dapat memengaruhi banyak route meskipun tidak semua memakainya.",
        "Karena text tidak boleh memakai font apa pun.",
        "Karena next/font hanya dapat mengelola satu font di seluruh project.",
        "Karena font tidak memengaruhi keterbacaan atau layout.",
      ],
      correctAnswer:
        "Karena resource itu dapat memengaruhi banyak route meskipun tidak semua memakainya.",
      explanation:
        "Root layout memiliki scope luas. Review family, subset, dan weight yang dipakai membantu menjaga resource tipografi tetap proporsional dengan nilai UI yang diberikan.",
    },
    {
      id: "asset-bundle-journey",
      type: "multiple-choice",
      question:
        "Pertimbangan utama sebelum memisahkan insights chart dari initial route adalah",
      options: [
        "Apakah learner baru membutuhkan chart setelah action tertentu dan bagaimana loading state-nya.",
        "Apakah nama component cukup panjang.",
        "Apakah chart dapat dihapus dari product.",
        "Apakah semua component wajib menjadi dynamic import.",
      ],
      correctAnswer:
        "Apakah learner baru membutuhkan chart setelah action tertentu dan bagaimana loading state-nya.",
      explanation:
        "Code splitting harus mengikuti waktu kebutuhan user. Feature yang ditunda tetap memerlukan loading state dan journey yang jelas ketika pertama kali dibuka.",
    },
    {
      id: "asset-dynamic-import",
      type: "multiple-choice",
      question:
        "Use case import() yang paling tepat adalah",
      options: [
        "Memuat library fuzzy search ketika learner mulai memakai search non-kritis.",
        "Memuat heading utama setelah user menekan tombol.",
        "Menghindari pemasangan package pada project lokal.",
        "Mengganti semua static import tanpa pemeriksaan.",
      ],
      correctAnswer:
        "Memuat library fuzzy search ketika learner mulai memakai search non-kritis.",
      explanation:
        "Dynamic import menunda dependency hingga behavior memerlukannya. Ia tidak menghapus kebutuhan package atau pengujian behavior pada project lokal.",
    },
    {
      id: "asset-trade-off",
      type: "multiple-choice",
      question:
        "Langkah validasi yang paling matang setelah memisahkan feature non-kritis adalah",
      options: [
        "Bandingkan biaya route awal dan coba journey membuka feature dengan loading state-nya.",
        "Anggap perubahan berhasil karena bundle terlihat lebih kecil.",
        "Hilangkan semua feedback UI ketika component dimuat.",
        "Menunda setiap dependency tanpa meninjau user journey.",
      ],
      correctAnswer:
        "Bandingkan biaya route awal dan coba journey membuka feature dengan loading state-nya.",
      explanation:
        "Perbaikan performance harus tetap menjaga usability feature. Bandingkan baseline serta behavior initial route dan interaction yang memuat feature.",
    },
  ],
};

export const optimizeCourseHeroImageChallenge: CodingChallenge = {
  id: "optimize-course-hero-image",
  lessonId: "image-optimization",
  title: "Optimize course hero image",
  description:
    "Lengkapi component hero agar memakai next/image dengan dimensi, sizes, dan preload yang sesuai untuk kandidat LCP route.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/courses/page.tsx untuk route dengan hero di viewport awal.",
    "Import Image dari next/image.",
    "Ganti img biasa dengan Image yang memiliki alt, width, height, dan sizes.",
    "Tambahkan preload karena hero ini sudah ditetapkan sebagai kandidat LCP.",
    "Cek otomatis membaca struktur Next.js. Route dan optimasi image tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...assetBundlePracticeCode,
    tsx: `export default function CoursesPage() {
  return (
    <main>
      <img
        src="/courses/frontend-hero.webp"
        alt="Preview track Frontend Engineering"
      />
      <h1>Frontend Engineering</h1>
    </main>
  );
}`,
  },
  solutionCode: {
    ...assetBundlePracticeCode,
    tsx: `import Image from "next/image";

export default function CoursesPage() {
  return (
    <main>
      <Image
        src="/courses/frontend-hero.webp"
        alt="Preview track Frontend Engineering"
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, 960px"
        preload
      />
      <h1>Frontend Engineering</h1>
    </main>
  );
}`,
  },
  checklist: [
    "File target dipahami sebagai route dengan hero di viewport awal.",
    "Image diimport dari next/image.",
    "Hero memiliki alt, width, height, dan sizes.",
    "preload dipakai karena hero sudah menjadi kandidat LCP yang dipahami.",
    "Heading route tetap tersedia setelah image.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "image-import", label: "Image diimport dari next/image.", type: "contains", target: 'import Image from "next/image";', valueIncludes: 'import Image from "next/image";' },
      { id: "image-component", label: "Hero memakai component Image.", type: "contains", target: "<Image", valueIncludes: "<Image" },
      { id: "image-source", label: "Source hero tetap memakai asset course.", type: "contains", target: 'src="/courses/frontend-hero.webp"', valueIncludes: 'src="/courses/frontend-hero.webp"' },
      { id: "image-alt", label: "Hero memiliki alt yang bermakna.", type: "contains", target: 'alt="Preview track Frontend Engineering"', valueIncludes: 'alt="Preview track Frontend Engineering"' },
      { id: "image-width", label: "Hero memiliki width intrinsic.", type: "contains", target: "width={1200}", valueIncludes: "width={1200}" },
      { id: "image-height", label: "Hero memiliki height intrinsic.", type: "contains", target: "height={675}", valueIncludes: "height={675}" },
      { id: "image-sizes", label: "Hero memiliki sizes responsive.", type: "contains", target: 'sizes="(max-width: 768px) 100vw, 960px"', valueIncludes: 'sizes="(max-width: 768px) 100vw, 960px"' },
      { id: "image-preload", label: "Hero kandidat LCP diprioritaskan dengan preload.", type: "contains", target: "preload", valueIncludes: "preload" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca struktur Image untuk hero route. Preview tidak menjalankan Next.js image optimizer, mengukur LCP, atau memuat asset project lokal.",
    lines: [
      "Hero memakai next/image dengan rasio intrinsic yang jelas.",
      "sizes memberi konteks ukuran tampil pada viewport mobile dan desktop.",
      "preload hanya digunakan karena hero sudah diperlakukan sebagai kandidat LCP.",
    ],
  },
  skillTags: ["Next.js", "Image Optimization", "LCP", "Responsive Images"],
};

export const configureLearningFontWithNextFontChallenge: CodingChallenge = {
  id: "configure-learning-font-with-next-font",
  lessonId: "font-optimization",
  title: "Configure learning font with next/font",
  description:
    "Konfigurasi Montserrat pada root layout lewat next/font agar font utama dikelola oleh build aplikasi.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai app/layout.tsx.",
    "Import Montserrat dari next/font/google.",
    "Buat konfigurasi dengan subset latin dan display swap.",
    "Terapkan className font pada html dengan lang id.",
    "Cek otomatis membaca struktur Next.js. Font build dan request browser tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...assetBundlePracticeCode,
    tsx: `export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}`,
  },
  solutionCode: {
    ...assetBundlePracticeCode,
    tsx: `import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}`,
  },
  checklist: [
    "File target dipahami sebagai app/layout.tsx.",
    "Montserrat diimport dari next/font/google.",
    "Konfigurasi memilih subset latin dan display swap.",
    "className font diterapkan pada html root.",
    "Layout tetap menjaga lang id dan children.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "font-import", label: "Montserrat diimport dari next/font/google.", type: "contains", target: 'import { Montserrat } from "next/font/google";', valueIncludes: 'import { Montserrat } from "next/font/google";' },
      { id: "font-config", label: "Konfigurasi Montserrat dibuat.", type: "contains", target: "const montserrat = Montserrat({", valueIncludes: "const montserrat = Montserrat({" },
      { id: "font-subset", label: "Subset latin dipilih.", type: "contains", target: 'subsets: ["latin"]', valueIncludes: 'subsets: ["latin"]' },
      { id: "font-display", label: "Display swap dipilih.", type: "contains", target: 'display: "swap"', valueIncludes: 'display: "swap"' },
      { id: "root-language", label: "Root html tetap memakai lang id.", type: "contains", target: 'lang="id"', valueIncludes: 'lang="id"' },
      { id: "font-classname", label: "className Montserrat diterapkan pada html.", type: "contains", target: "className={montserrat.className}", valueIncludes: "className={montserrat.className}" },
      { id: "layout-export", label: "RootLayout tetap menjadi default export.", type: "contains", target: "export default function RootLayout({", valueIncludes: "export default function RootLayout({" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca konfigurasi next/font pada root layout. Preview tidak menjalankan build font, mengunduh file font, atau mengukur layout shift project lokal.",
    lines: [
      "Montserrat dikelola oleh next/font untuk aplikasi.",
      "Subset latin dan display swap menjelaskan kebutuhan pemuatan awal.",
      "Font diterapkan pada html root tanpa menambah client boundary.",
    ],
  },
  skillTags: ["Next.js", "next/font", "Typography", "CLS"],
};

export const splitCourseInsightsPanelChallenge: CodingChallenge = {
  id: "split-course-insights-panel",
  lessonId: "code-splitting",
  title: "Split course insights panel",
  description:
    "Pisahkan CourseInsights yang non-kritis dari initial route dan muat setelah learner memilih Lihat insight.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai Client Component app/courses/course-overview.tsx.",
    "Import useState dan dynamic dari Next.js.",
    "Buat CourseInsights memakai dynamic import dari @/components/course-insights.",
    "Tampilkan loading copy saat panel disiapkan dan render panel setelah click.",
    "Cek otomatis membaca struktur Next.js. Component split serta route tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...assetBundlePracticeCode,
    tsx: `"use client";

import { useState } from "react";
import CourseInsights from "@/components/course-insights";

export default function CourseOverview({ courseId }: { courseId: string }) {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setShowInsights(true)}>
        Lihat insight
      </button>
      {showInsights ? <CourseInsights courseId={courseId} /> : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...assetBundlePracticeCode,
    tsx: `"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CourseInsights = dynamic(
  () => import("@/components/course-insights"),
  { loading: () => <p>Menyiapkan insight course...</p> },
);

export default function CourseOverview({ courseId }: { courseId: string }) {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setShowInsights(true)}>
        Lihat insight
      </button>
      {showInsights ? <CourseInsights courseId={courseId} /> : null}
    </section>
  );
}`,
  },
  checklist: [
    "CourseOverview tetap Client Component untuk click state.",
    "CourseInsights diimport dengan dynamic(), bukan static import.",
    "Panel hanya dirender setelah learner memilih Lihat insight.",
    "Loading state menjelaskan bahwa insight sedang disiapkan.",
    "courseId tetap diteruskan ke CourseInsights.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "client-directive", label: "use client berada di atas file.", type: "contains", target: '"use client";', valueIncludes: '"use client";' },
      { id: "state-import", label: "useState diimport untuk click state.", type: "contains", target: 'import { useState } from "react";', valueIncludes: 'import { useState } from "react";' },
      { id: "dynamic-import", label: "dynamic diimport dari next/dynamic.", type: "contains", target: 'import dynamic from "next/dynamic";', valueIncludes: 'import dynamic from "next/dynamic";' },
      { id: "no-static-insights-import", label: "CourseInsights tidak diimport secara static.", type: "doesNotContain", valueIncludes: 'import CourseInsights from "@/components/course-insights";' },
      { id: "insights-loader", label: "CourseInsights memakai dynamic import.", type: "contains", target: '() => import("@/components/course-insights")', valueIncludes: '() => import("@/components/course-insights")' },
      { id: "loading-copy", label: "Panel memiliki loading copy.", type: "contains", target: "Menyiapkan insight course...", valueIncludes: "Menyiapkan insight course..." },
      { id: "insights-state", label: "showInsights memakai useState.", type: "contains", target: "const [showInsights, setShowInsights] = useState(false);", valueIncludes: "const [showInsights, setShowInsights] = useState(false);" },
      { id: "insights-action", label: "Button membuka panel insight.", type: "contains", target: "onClick={() => setShowInsights(true)}", valueIncludes: "onClick={() => setShowInsights(true)}" },
      { id: "conditional-panel", label: "Panel hanya dirender setelah action user.", type: "contains", target: "{showInsights ? <CourseInsights courseId={courseId} /> : null}", valueIncludes: "{showInsights ? <CourseInsights courseId={courseId} /> : null}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca dynamic import dan loading state CourseInsights. Preview tidak menjalankan route Next.js, memecah bundle, atau memuat component project lokal.",
    lines: [
      "Initial route tidak memakai static import untuk CourseInsights.",
      "Learner memilih Lihat insight sebelum panel dimuat dan dirender.",
      "Loading copy memberi konteks ketika component non-kritis sedang disiapkan.",
    ],
  },
  skillTags: ["Next.js", "Code Splitting", "next/dynamic", "Loading States"],
};

export const loadCourseSearchLibraryOnDemandChallenge: CodingChallenge = {
  id: "load-course-search-library-on-demand",
  lessonId: "dynamic-imports",
  title: "Load course search library on demand",
  description:
    "Muat Fuse hanya ketika learner mulai mencari course, bukan sebagai static import pada initial component.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai Client Component CourseSearch.",
    "Gunakan import() untuk memuat Fuse dari fuse.js di dalam handleSearch.",
    "Buat Fuse dari daftar courses dan simpan item hasil pencarian.",
    "Input memanggil handleSearch ketika learner mengetik.",
    "Cek otomatis membaca struktur dynamic import. Package dan route tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...assetBundlePracticeCode,
    tsx: `"use client";

import { useState } from "react";
import Fuse from "fuse.js";

const courses = ["React Fundamentals", "Testing UI", "Next.js App Router"];

export default function CourseSearch() {
  const [results, setResults] = useState<string[]>([]);

  function handleSearch(query: string) {
    const fuse = new Fuse(courses);
    setResults(fuse.search(query).map((result) => result.item));
  }

  return (
    <label>
      Cari course
      <input onChange={(event) => handleSearch(event.target.value)} />
      <p>{results.length} hasil</p>
    </label>
  );
}`,
  },
  solutionCode: {
    ...assetBundlePracticeCode,
    tsx: `"use client";

import { useState } from "react";

const courses = ["React Fundamentals", "Testing UI", "Next.js App Router"];

export default function CourseSearch() {
  const [results, setResults] = useState<string[]>([]);

  async function handleSearch(query: string) {
    const Fuse = (await import("fuse.js")).default;
    const fuse = new Fuse(courses);

    setResults(fuse.search(query).map((result) => result.item));
  }

  return (
    <label>
      Cari course
      <input onChange={(event) => void handleSearch(event.target.value)} />
      <p>{results.length} hasil</p>
    </label>
  );
}`,
  },
  checklist: [
    "CourseSearch tetap Client Component untuk input serta results state.",
    "Fuse tidak lagi menjadi static import.",
    "handleSearch memuat Fuse dengan await import().",
    "Hasil Fuse dipetakan menjadi item course.",
    "Input tetap meneruskan text learner ke handleSearch.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "client-directive", label: "use client berada di atas file.", type: "contains", target: '"use client";', valueIncludes: '"use client";' },
      { id: "state-import", label: "useState diimport dari React.", type: "contains", target: 'import { useState } from "react";', valueIncludes: 'import { useState } from "react";' },
      { id: "no-static-fuse-import", label: "Fuse tidak diimport secara static.", type: "doesNotContain", valueIncludes: 'import Fuse from "fuse.js";' },
      { id: "async-search", label: "handleSearch dibuat async.", type: "contains", target: "async function handleSearch(query: string)", valueIncludes: "async function handleSearch(query: string)" },
      { id: "dynamic-fuse-import", label: "Fuse dimuat dengan import() saat search.", type: "contains", target: 'const Fuse = (await import("fuse.js")).default;', valueIncludes: 'const Fuse = (await import("fuse.js")).default;' },
      { id: "fuse-instance", label: "Fuse dibuat dari daftar courses.", type: "contains", target: "const fuse = new Fuse(courses);", valueIncludes: "const fuse = new Fuse(courses);" },
      { id: "search-results", label: "Hasil pencarian disimpan sebagai item.", type: "contains", target: "setResults(fuse.search(query).map((result) => result.item));", valueIncludes: "setResults(fuse.search(query).map((result) => result.item));" },
      { id: "search-input", label: "Input memanggil handleSearch.", type: "contains", target: "onChange={(event) => void handleSearch(event.target.value)}", valueIncludes: "onChange={(event) => void handleSearch(event.target.value)}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca import() di dalam interaction search. Preview tidak memasang Fuse, menjalankan package, atau mengukur biaya bundle project lokal.",
    lines: [
      "Fuse tidak masuk sebagai static import untuk component awal.",
      "Library dimuat saat learner memakai input pencarian.",
      "Hasil Fuse tetap dipetakan menjadi daftar course yang dapat ditampilkan.",
    ],
  },
  skillTags: ["Next.js", "Dynamic Imports", "JavaScript", "Dependencies"],
};

export const buildOptimizedCoursePageCheckpointChallenge: CodingChallenge = {
  id: "build-optimized-course-page-checkpoint",
  lessonId: "asset-bundle-optimization-assessment",
  title: "Build optimized course page checkpoint",
  description:
    "Susun route course yang memprioritaskan hero LCP dan memisahkan panel insight non-kritis sampai learner membutuhkannya.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai Client Component app/courses/page.tsx karena ia membuka panel insight lewat click.",
    "Import Image, dynamic, dan useState.",
    "Render hero Image dengan dimensi, sizes, dan preload untuk kandidat LCP.",
    "Muat CourseInsights melalui dynamic() dengan loading copy.",
    "Render panel insight hanya setelah learner menekan Lihat insight.",
    "Cek otomatis membaca struktur checkpoint. Route, asset optimizer, dan bundle split tidak dijalankan di preview practice.",
  ],
  starterCode: {
    ...assetBundlePracticeCode,
    tsx: `"use client";

import { useState } from "react";
import CourseInsights from "@/components/course-insights";

export default function CoursesPage() {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <main>
      <img
        src="/courses/frontend-hero.webp"
        alt="Preview track Frontend Engineering"
      />
      <button type="button" onClick={() => setShowInsights(true)}>
        Lihat insight
      </button>
      {showInsights ? <CourseInsights courseId="frontend-engineering" /> : null}
    </main>
  );
}`,
  },
  solutionCode: {
    ...assetBundlePracticeCode,
    tsx: `"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const CourseInsights = dynamic(
  () => import("@/components/course-insights"),
  { loading: () => <p>Menyiapkan insight course...</p> },
);

export default function CoursesPage() {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <main>
      <Image
        src="/courses/frontend-hero.webp"
        alt="Preview track Frontend Engineering"
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, 960px"
        preload
      />
      <button type="button" onClick={() => setShowInsights(true)}>
        Lihat insight
      </button>
      {showInsights ? (
        <CourseInsights courseId="frontend-engineering" />
      ) : null}
    </main>
  );
}`,
  },
  checklist: [
    "CoursesPage memakai client boundary hanya untuk click state insight.",
    "Hero route memakai next/image dengan dimensi, sizes, dan preload yang dibenarkan.",
    "CourseInsights tidak menjadi static import initial route.",
    "Dynamic component memiliki loading copy yang jelas.",
    "Panel insight hanya muncul setelah action learner.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "client-directive", label: "use client berada di atas file untuk click state.", type: "contains", target: '"use client";', valueIncludes: '"use client";' },
      { id: "image-import", label: "Image diimport dari next/image.", type: "contains", target: 'import Image from "next/image";', valueIncludes: 'import Image from "next/image";' },
      { id: "dynamic-import", label: "dynamic diimport dari next/dynamic.", type: "contains", target: 'import dynamic from "next/dynamic";', valueIncludes: 'import dynamic from "next/dynamic";' },
      { id: "no-static-insights-import", label: "CourseInsights tidak menjadi static import.", type: "doesNotContain", valueIncludes: 'import CourseInsights from "@/components/course-insights";' },
      { id: "hero-image", label: "Hero memakai component Image.", type: "contains", target: "<Image", valueIncludes: "<Image" },
      { id: "hero-width", label: "Hero memiliki width intrinsic.", type: "contains", target: "width={1200}", valueIncludes: "width={1200}" },
      { id: "hero-height", label: "Hero memiliki height intrinsic.", type: "contains", target: "height={675}", valueIncludes: "height={675}" },
      { id: "hero-sizes", label: "Hero memiliki sizes responsive.", type: "contains", target: 'sizes="(max-width: 768px) 100vw, 960px"', valueIncludes: 'sizes="(max-width: 768px) 100vw, 960px"' },
      { id: "hero-preload", label: "Hero kandidat LCP memakai preload.", type: "contains", target: "preload", valueIncludes: "preload" },
      { id: "insights-loader", label: "CourseInsights memakai dynamic import.", type: "contains", target: '() => import("@/components/course-insights")', valueIncludes: '() => import("@/components/course-insights")' },
      { id: "loading-copy", label: "Dynamic panel memiliki loading copy.", type: "contains", target: "Menyiapkan insight course...", valueIncludes: "Menyiapkan insight course..." },
      { id: "conditional-panel", label: "Insight hanya dirender setelah action learner.", type: "contains", target: "{showInsights ? (", valueIncludes: "{showInsights ? (" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Checkpoint membaca keputusan Image dan dynamic import pada satu route. Preview tidak menjalankan Next.js route, mengoptimalkan asset, atau menghasilkan bundle split nyata.",
    lines: [
      "Hero kandidat LCP memiliki struktur image yang stabil dan diprioritaskan secara sadar.",
      "CourseInsights ditunda sampai learner meminta feature tersebut.",
      "Loading copy menjaga konteks ketika feature non-kritis sedang disiapkan.",
    ],
  },
  skillTags: ["Next.js", "Image Optimization", "Code Splitting", "Readiness Checkpoint"],
};
