import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const responsiveVisualSystemModule: Module = {
  id: "responsive-visual-system",
  trackId: "frontend-engineering",
  title: "Responsive Visual System",
  slug: "responsive-visual-system",
  description:
    "Pelajari mobile-first CSS, breakpoint dasar, fluid spacing, typography, CSS variables, dan dark mode dasar.",
  order: 9,
  lessonIds: [
    "mobile-first-css",
    "css-breakpoints-basic",
    "fluid-spacing-typography-basic",
    "css-variables-dark-mode-basic",
    "responsive-visual-system-assessment",
  ],
  estimatedHours: 4,
  skillTags: ["CSS", "Responsive Design", "Visual System", "Dark Mode"],
};

export const mobileFirstCssLesson: Lesson = {
  id: "mobile-first-css",
  trackId: "frontend-engineering",
  moduleId: "responsive-visual-system",
  title: "Mobile-first CSS",
  slug: "mobile-first-css",
  description:
    "Pahami cara menulis CSS dari layar kecil terlebih dahulu sebelum menambahkan aturan untuk layar lebih besar.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Memahami mobile-first sebagai pendekatan mulai dari layar kecil",
    "Menulis style dasar yang aman untuk mobile",
    "Menambahkan peningkatan untuk layar lebih besar",
    "Menghindari layout yang hanya nyaman di desktop",
  ],
  skillTags: ["CSS", "Responsive Design", "Mobile First"],
  blocks: [
    {
      id: "mobile-first-css-intro",
      type: "text",
      title: "Mulai dari layar kecil",
      content:
        "Mobile-first berarti style dasar ditulis untuk layar kecil terlebih dahulu. Setelah itu, media query dipakai untuk menambahkan aturan ketika layar lebih besar.\n\nPendekatan ini membantu UI tetap terbaca di HP. Kamu tidak mulai dari desktop besar lalu panik memperbaiki mobile di akhir. Fokusnya sederhana: buat tampilan dasar aman dulu, lalu tingkatkan saat ruang layar bertambah.",
    },
    {
      id: "mobile-first-css-html",
      type: "code-example",
      title: "HTML section sederhana",
      language: "html",
      code: `<section class="section">
  <h1 class="title">Belajar Responsive CSS</h1>
  <p class="description">Mulai dari layar kecil, lalu tingkatkan untuk layar lebih besar.</p>
</section>`,
      explanation:
        "Struktur ini sengaja kecil. Responsive behavior akan diatur lewat CSS, bukan dengan menambah banyak markup.",
    },
    {
      id: "mobile-first-css-code",
      type: "code-example",
      title: "CSS mobile-first",
      language: "css",
      code: `.section {
  padding: 16px;
}

.title {
  font-size: 28px;
}

@media (min-width: 768px) {
  .section {
    padding: 32px;
  }

  .title {
    font-size: 40px;
  }
}`,
      explanation:
        "Aturan awal berlaku untuk layar kecil. Media query menambahkan padding dan ukuran title yang lebih besar saat layar punya ruang lebih.",
    },
    {
      id: "mobile-first-css-callout",
      type: "callout",
      variant: "important",
      title: "Mobile-first bukan mobile-only",
      content:
        "Mobile-first bukan berarti hanya peduli mobile. Artinya style dasar harus aman untuk layar kecil, lalu diperbaiki untuk layar yang lebih besar.",
    },
    {
      id: "mobile-first-css-quick-check",
      type: "quick-check",
      question:
        "Dalam pendekatan mobile-first, style dasar biasanya ditulis untuk ukuran layar apa?",
      options: [
        "Desktop besar terlebih dahulu",
        "Layar kecil terlebih dahulu",
        "Hanya tablet",
        "Hanya printer",
      ],
      correctAnswer: "Layar kecil terlebih dahulu",
      explanation:
        "Mobile-first memulai dari layar kecil agar tampilan dasar tetap aman dan mudah dibaca.",
    },
    {
      id: "mobile-first-css-coding-practice",
      type: "coding-practice",
      challengeId: "practice-mobile-first-section",
    },
    {
      id: "mobile-first-css-summary",
      type: "summary",
      points: [
        "Mobile-first mulai dari layar kecil.",
        "Media query bisa menambah aturan untuk layar lebih besar.",
        "Style dasar harus tetap readable tanpa bergantung pada desktop.",
        "Berikutnya kamu akan belajar breakpoint dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "mobile-first-css-intro",
      "mobile-first-css-html",
      "mobile-first-css-code",
      "mobile-first-css-quick-check",
      "mobile-first-css-coding-practice",
      "mobile-first-css-summary",
    ],
  },
};

export const cssBreakpointsBasicLesson: Lesson = {
  id: "css-breakpoints-basic",
  trackId: "frontend-engineering",
  moduleId: "responsive-visual-system",
  title: "Breakpoints Dasar",
  slug: "css-breakpoints-basic",
  description:
    "Pelajari cara memakai media query dan breakpoint untuk menyesuaikan layout pada ukuran layar berbeda.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Memahami breakpoint sebagai titik perubahan layout",
    "Mengenal media query min-width",
    "Menggunakan breakpoint untuk mengubah grid atau layout",
    "Tidak membuat terlalu banyak breakpoint tanpa alasan",
  ],
  skillTags: ["CSS", "Media Queries", "Breakpoints"],
  blocks: [
    {
      id: "css-breakpoints-basic-intro",
      type: "text",
      title: "Breakpoint adalah titik layout berubah",
      content:
        "Breakpoint adalah titik ukuran layar saat layout perlu berubah. Media query seperti @media (min-width: 768px) dipakai untuk menambahkan aturan ketika layar mencapai ukuran tertentu.\n\nBreakpoint sebaiknya muncul karena layout butuh ruang, bukan karena menghafal semua ukuran device. Untuk pemula, cukup mulai dari satu atau dua breakpoint.",
    },
    {
      id: "css-breakpoints-basic-code",
      type: "code-example",
      title: "Grid dengan breakpoint sederhana",
      language: "css",
      code: `.card-grid {
  display: grid;
  gap: 16px;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
      explanation:
        "Style dasar membuat grid satu kolom. Saat layar lebih lebar, media query menambah kolom.",
    },
    {
      id: "css-breakpoints-basic-callout",
      type: "callout",
      variant: "tip",
      title: "Jangan hafal semua ukuran device",
      content:
        "Perhatikan kapan konten mulai terasa sempit atau terlalu lebar. Breakpoint yang baik muncul dari kebutuhan layout dan konten.",
    },
    {
      id: "css-breakpoints-basic-quick-check",
      type: "quick-check",
      question: "Breakpoint sebaiknya dibuat berdasarkan apa?",
      options: [
        "Warna favorit developer",
        "Semua ukuran HP yang ada di pasar",
        "Saat layout membutuhkan perubahan agar tetap nyaman",
        "Nama browser yang dipakai",
      ],
      correctAnswer: "Saat layout membutuhkan perubahan agar tetap nyaman",
      explanation:
        "Breakpoint yang baik muncul dari kebutuhan layout dan konten, bukan dari menghafal semua device.",
    },
    {
      id: "css-breakpoints-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-breakpoint-card-grid",
    },
    {
      id: "css-breakpoints-basic-summary",
      type: "summary",
      points: [
        "Breakpoint adalah titik layout berubah.",
        "Media query membantu menambahkan style untuk layar lebih besar.",
        "Gunakan breakpoint seperlunya.",
        "Berikutnya kamu akan membuat spacing dan typography yang lebih fleksibel.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-breakpoints-basic-intro",
      "css-breakpoints-basic-code",
      "css-breakpoints-basic-quick-check",
      "css-breakpoints-basic-coding-practice",
      "css-breakpoints-basic-summary",
    ],
  },
};

export const fluidSpacingTypographyBasicLesson: Lesson = {
  id: "fluid-spacing-typography-basic",
  trackId: "frontend-engineering",
  moduleId: "responsive-visual-system",
  title: "Fluid Spacing dan Typography Dasar",
  slug: "fluid-spacing-typography-basic",
  description:
    "Latih cara membuat jarak dan ukuran teks yang tetap nyaman di berbagai ukuran layar.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Memahami spacing yang konsisten dan fleksibel",
    "Menggunakan max-width agar teks tidak terlalu panjang",
    "Menggunakan line-height untuk keterbacaan",
    "Mengenal clamp secara ringan untuk ukuran teks atau spacing yang lebih fleksibel",
  ],
  skillTags: ["CSS", "Spacing", "Typography", "Responsive Design"],
  blocks: [
    {
      id: "fluid-spacing-typography-basic-intro",
      type: "text",
      title: "Responsive juga soal teks dan spacing",
      content:
        "Responsive bukan hanya layout kolom. Teks juga harus tetap mudah dibaca. max-width membantu paragraf tidak terlalu panjang. line-height membantu jarak antar baris. clamp bisa membantu nilai berubah dalam batas aman, tetapi tidak perlu dipakai untuk semua hal.",
    },
    {
      id: "fluid-spacing-typography-basic-code",
      type: "code-example",
      title: "Spacing dan typography yang fleksibel",
      language: "css",
      code: `.container {
  max-width: 720px;
  margin: 0 auto;
  padding: clamp(16px, 4vw, 40px);
}

.title {
  font-size: clamp(32px, 6vw, 56px);
  line-height: 1.1;
}

.description {
  font-size: 18px;
  line-height: 1.7;
}`,
      explanation:
        "max-width menjaga panjang teks. padding dan font-size bisa dibuat lebih fleksibel dengan clamp. line-height membantu teks nyaman dibaca.",
    },
    {
      id: "fluid-spacing-typography-basic-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Teks terlalu lebar",
      content:
        "Jangan membuat teks terlalu lebar. Paragraf yang terlalu panjang melelahkan dibaca, terutama di desktop besar.",
    },
    {
      id: "fluid-spacing-typography-basic-quick-check",
      type: "quick-check",
      question:
        "Property apa yang sering membantu paragraf tidak terlalu melebar di layar besar?",
      options: [
        "z-index",
        "border-radius",
        "color",
        "max-width",
      ],
      correctAnswer: "max-width",
      explanation:
        "max-width membatasi lebar maksimum sehingga teks tetap nyaman dibaca.",
    },
    {
      id: "fluid-spacing-typography-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-fluid-spacing-typography",
    },
    {
      id: "fluid-spacing-typography-basic-summary",
      type: "summary",
      points: [
        "Responsive visual system juga mencakup teks dan spacing.",
        "max-width menjaga teks tidak terlalu panjang.",
        "line-height membantu keterbacaan.",
        "clamp bisa dipakai untuk nilai yang berubah secara fleksibel dalam batas aman.",
        "Berikutnya kamu akan memakai CSS variables untuk nilai visual reusable.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "fluid-spacing-typography-basic-intro",
      "fluid-spacing-typography-basic-code",
      "fluid-spacing-typography-basic-quick-check",
      "fluid-spacing-typography-basic-coding-practice",
      "fluid-spacing-typography-basic-summary",
    ],
  },
};

export const cssVariablesDarkModeBasicLesson: Lesson = {
  id: "css-variables-dark-mode-basic",
  trackId: "frontend-engineering",
  moduleId: "responsive-visual-system",
  title: "CSS Variables dan Dark Mode Dasar",
  slug: "css-variables-dark-mode-basic",
  description:
    "Gunakan CSS variables untuk menyimpan nilai visual dan mengenal pola dasar dark mode.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Memahami CSS variables sebagai nilai reusable",
    "Menggunakan variable untuk warna dan spacing",
    "Mengenal pola light/dark values secara sederhana",
    "Menghindari nilai warna acak yang berulang di banyak tempat",
  ],
  skillTags: ["CSS", "CSS Variables", "Dark Mode", "Visual System"],
  blocks: [
    {
      id: "css-variables-dark-mode-basic-intro",
      type: "text",
      title: "CSS variables menyimpan nilai visual",
      content:
        "CSS variables menyimpan nilai yang bisa dipakai ulang. Ini membantu warna, spacing, radius, dan typography lebih konsisten.\n\nDark mode bisa dibuat dengan mengganti nilai variable, bukan menulis ulang semua komponen. Untuk pemula, fokus ke sedikit variable dulu agar pola besarnya jelas.",
    },
    {
      id: "css-variables-dark-mode-basic-code",
      type: "code-example",
      title: "Variable warna dan dark mode sederhana",
      language: "css",
      code: `.page {
  --color-bg: #ffffff;
  --color-text: #18181b;
  --color-card: #f4f4f5;
  --space-page: 24px;

  background: var(--color-bg);
  color: var(--color-text);
  padding: var(--space-page);
}

.card {
  background: var(--color-card);
  padding: 16px;
  border-radius: 12px;
}

.page.dark {
  --color-bg: #18181b;
  --color-text: #fafafa;
  --color-card: #27272a;
}`,
      explanation:
        "Variable disimpan di .page. Komponen memakai var(...). Saat .page punya class dark, nilai variable berubah sehingga tampilan ikut berubah.",
    },
    {
      id: "css-variables-dark-mode-basic-callout",
      type: "callout",
      variant: "important",
      title: "Dark mode tetap harus readable",
      content:
        "Dark mode yang baik bukan hanya membalik warna. Pastikan kontras tetap nyaman dibaca.",
    },
    {
      id: "css-variables-dark-mode-basic-quick-check",
      type: "quick-check",
      question: "Apa manfaat utama CSS variables dalam visual system?",
      options: [
        "Membuat database",
        "Menyimpan nilai visual agar bisa dipakai ulang",
        "Mengganti Git",
        "Menghapus semua HTML",
      ],
      correctAnswer: "Menyimpan nilai visual agar bisa dipakai ulang",
      explanation:
        "CSS variables membantu nilai seperti warna dan spacing konsisten di banyak komponen.",
    },
    {
      id: "css-variables-dark-mode-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-variables-theme-card",
    },
    {
      id: "css-variables-dark-mode-basic-summary",
      type: "summary",
      points: [
        "CSS variables menyimpan nilai visual reusable.",
        "Visual system membantu UI tetap konsisten.",
        "Dark mode dasar bisa dibuat dengan mengganti nilai variable.",
        "Tetap cek kontras dan keterbacaan.",
        "Berikutnya kamu akan menguji Responsive Visual System.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-variables-dark-mode-basic-intro",
      "css-variables-dark-mode-basic-code",
      "css-variables-dark-mode-basic-quick-check",
      "css-variables-dark-mode-basic-coding-practice",
      "css-variables-dark-mode-basic-summary",
    ],
  },
};

export const responsiveVisualSystemAssessmentLesson: Lesson = {
  id: "responsive-visual-system-assessment",
  trackId: "frontend-engineering",
  moduleId: "responsive-visual-system",
  title: "Uji Kompetensi Responsive Visual System",
  slug: "responsive-visual-system-assessment",
  description:
    "Uji pemahaman mobile-first CSS, breakpoint, fluid spacing, typography, CSS variables, dan dark mode dasar.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 55,
  objectives: [
    "Mengecek pemahaman mobile-first CSS",
    "Mengecek penggunaan breakpoint dasar",
    "Mengecek pemahaman responsive spacing dan typography",
    "Mengecek penggunaan CSS variables",
    "Mengecek pemahaman dark mode dasar",
    "Mengarahkan learner membaca dokumentasi resmi dengan fokus",
  ],
  skillTags: ["CSS", "Responsive Design", "Visual System", "Assessment"],
  blocks: [
    {
      id: "responsive-visual-system-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini mengecek responsive visual system dasar. Kamu akan membuktikan bahwa kamu memahami mobile-first CSS, breakpoint, media query, max-width, line-height, clamp secara ringan, CSS variables, dan pola dark mode dasar.",
    },
    {
      id: "responsive-visual-system-assessment-quiz-block",
      type: "quiz",
      quizId: "responsive-visual-system-assessment-quiz",
    },
    {
      id: "responsive-visual-system-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-responsive-visual-section",
    },
    {
      id: "responsive-visual-system-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan dokumentasi ini untuk menguatkan pemahaman responsive visual system. Fokus pada konsep yang sudah kamu pakai di latihan.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Responsive design",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
          focus: [
            "mobile-first responsive thinking",
            "layout yang menyesuaikan layar",
            "media query secara umum",
          ],
          ignoreForNow: [
            "complex responsive patterns",
            "advanced layout systems",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Media queries",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries",
          focus: [
            "min-width",
            "menambahkan aturan untuk layar lebih besar",
            "kapan media query dipakai",
          ],
          ignoreForNow: [
            "container queries",
            "complex media features",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Using CSS custom properties",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties",
          focus: [
            "custom properties",
            "var()",
            "nilai visual reusable",
          ],
          ignoreForNow: [
            "advanced theming",
            "CSS architecture",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "clamp()",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp",
          focus: [
            "nilai minimum",
            "nilai fleksibel",
            "nilai maksimum",
          ],
          ignoreForNow: [
            "complex formulas",
            "animation systems",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "prefers-color-scheme",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
          focus: [
            "dark mode preference basics",
            "light dan dark values",
            "readable contrast",
          ],
          ignoreForNow: [
            "complex theme switching",
            "system integration details",
          ],
        },
      ],
      followUpAction:
        "Kembali ke latihan kamu dan tunjukkan bagian mana yang membuat layout responsive, bagian mana yang menjaga teks readable, dan nilai visual apa yang bisa dijadikan CSS variable.",
    },
    {
      id: "responsive-visual-system-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu memahami mobile-first CSS dan breakpoint dasar.",
        "Kamu membuktikan bahwa kamu bisa memakai max-width dan line-height untuk readability.",
        "Kamu membuktikan bahwa kamu memahami CSS variables sebagai nilai visual reusable.",
        "Jika belum siap, review lagi mobile-first CSS, breakpoints, max-width, line-height, clamp basics, CSS variables, dan dark mode value swapping.",
        "Setelah memahami CSS visual system dasar, berikutnya kamu akan mulai masuk ke JavaScript Fundamentals.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "responsive-visual-system-assessment-recap",
      "responsive-visual-system-assessment-quiz-block",
      "responsive-visual-system-assessment-coding-practice",
      "responsive-visual-system-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const responsiveVisualSystemAssessmentQuiz: Quiz = {
  id: "responsive-visual-system-assessment-quiz",
  lessonId: "responsive-visual-system-assessment",
  title: "Uji Kompetensi Responsive Visual System",
  passingScore: 70,
  questions: [
    {
      id: "responsive-visual-system-assessment-q1",
      type: "multiple-choice",
      question: "Apa arti pendekatan mobile-first dalam CSS?",
      options: [
        "Style dasar ditulis untuk layar kecil terlebih dahulu",
        "CSS hanya boleh dipakai di HP",
        "Desktop tidak perlu diperhatikan",
        "Semua layout harus satu kolom selamanya",
      ],
      correctAnswer: "Style dasar ditulis untuk layar kecil terlebih dahulu",
      explanation:
        "Mobile-first berarti style dasar aman untuk layar kecil, lalu media query menambahkan peningkatan untuk layar yang lebih besar.",
    },
    {
      id: "responsive-visual-system-assessment-q2",
      type: "multiple-choice",
      question: "Apa fungsi media query seperti @media (min-width: 768px)?",
      options: [
        "Menghapus semua rule CSS sebelumnya",
        "Menambahkan rule CSS saat kondisi layar tertentu terpenuhi",
        "Mengubah HTML menjadi JavaScript",
        "Membuat GitHub repository otomatis",
      ],
      correctAnswer:
        "Menambahkan rule CSS saat kondisi layar tertentu terpenuhi",
      explanation:
        "Media query membuat CSS bisa merespons kondisi seperti lebar layar. Dalam mobile-first, min-width sering dipakai untuk layar yang lebih besar.",
    },
    {
      id: "responsive-visual-system-assessment-q3",
      type: "multiple-choice",
      question: "Breakpoint sebaiknya dibuat ketika apa?",
      options: [
        "Setiap kali ada device baru di pasar",
        "Saat layout membutuhkan perubahan agar tetap nyaman",
        "Saat warna teks ingin diganti",
        "Saat HTML belum punya title",
      ],
      correctAnswer: "Saat layout membutuhkan perubahan agar tetap nyaman",
      explanation:
        "Breakpoint yang baik mengikuti kebutuhan konten dan layout, bukan daftar device yang dihafal.",
    },
    {
      id: "responsive-visual-system-assessment-q4",
      type: "multiple-choice",
      question:
        "Property apa yang membantu paragraf tidak terlalu melebar di layar besar?",
      options: ["font-weight", "border-radius", "max-width", "href"],
      correctAnswer: "max-width",
      explanation:
        "max-width membatasi lebar maksimum container atau teks sehingga halaman tetap nyaman dibaca di layar besar.",
    },
    {
      id: "responsive-visual-system-assessment-q5",
      type: "multiple-choice",
      question: "Apa fungsi line-height pada teks?",
      options: [
        "Mengatur jarak antar baris teks",
        "Membuat media query",
        "Menyimpan repository",
        "Mengganti tag h1 menjadi p",
      ],
      correctAnswer: "Mengatur jarak antar baris teks",
      explanation:
        "line-height mengatur jarak antar baris. Nilai yang tepat membuat paragraf lebih mudah dibaca.",
    },
    {
      id: "responsive-visual-system-assessment-q6",
      type: "multiple-choice",
      question: "Mengapa clamp() berguna untuk responsive typography atau spacing?",
      options: [
        "Karena clamp() menjalankan JavaScript",
        "Karena clamp() membuat nilai bisa fleksibel tetapi tetap punya batas minimum dan maksimum",
        "Karena clamp() menghapus semua media query",
        "Karena clamp() hanya bekerja untuk warna",
      ],
      correctAnswer:
        "Karena clamp() membuat nilai bisa fleksibel tetapi tetap punya batas minimum dan maksimum",
      explanation:
        "clamp(min, preferred, max) membantu nilai berubah mengikuti ruang layar, tetapi tetap dibatasi agar tidak terlalu kecil atau besar.",
    },
    {
      id: "responsive-visual-system-assessment-q7",
      type: "multiple-choice",
      question: "Apa manfaat CSS variables dalam visual system?",
      options: [
        "Membuat semua HTML tidak perlu semantic",
        "Mengganti DevTools",
        "Menyimpan nilai visual agar bisa dipakai ulang",
        "Membuat browser otomatis deploy",
      ],
      correctAnswer: "Menyimpan nilai visual agar bisa dipakai ulang",
      explanation:
        "CSS variables membantu nilai seperti warna, spacing, dan radius tetap konsisten di banyak bagian UI.",
    },
    {
      id: "responsive-visual-system-assessment-q8",
      type: "multiple-choice",
      question:
        "Dalam dark mode sederhana berbasis CSS variables, apa yang biasanya berubah?",
      options: [
        "Nama file HTML",
        "Nilai variable warna seperti background dan text",
        "Semua tag menjadi div",
        "Git commit terakhir",
      ],
      correctAnswer: "Nilai variable warna seperti background dan text",
      explanation:
        "Dark mode dasar bisa dibuat dengan mengganti nilai variable warna, lalu komponen tetap memakai var(...) yang sama.",
    },
    {
      id: "responsive-visual-system-assessment-q9",
      type: "multiple-choice",
      question: "Apa hal penting saat membuat dark mode?",
      options: [
        "Kontras dan keterbacaan tetap nyaman",
        "Semua teks harus hitam di semua kondisi",
        "Semua warna harus acak",
        "HTML tidak boleh memakai class",
      ],
      correctAnswer: "Kontras dan keterbacaan tetap nyaman",
      explanation:
        "Dark mode bukan hanya mengganti warna. Teks, background, dan card harus tetap punya kontras yang nyaman dibaca.",
    },
    {
      id: "responsive-visual-system-assessment-q10",
      type: "multiple-choice",
      question:
        "Mana contoh keputusan responsive visual system yang paling masuk akal?",
      options: [
        "Menghapus semua max-width agar teks memenuhi layar besar",
        "Memakai !important untuk semua property",
        "Membuat breakpoint tanpa melihat konten",
        "Menjaga style dasar aman di mobile, lalu meningkatkan layout di layar lebih besar",
      ],
      correctAnswer:
        "Menjaga style dasar aman di mobile, lalu meningkatkan layout di layar lebih besar",
      explanation:
        "Responsive visual system yang baik mulai dari pengalaman kecil yang aman, lalu menambah spacing, typography, dan layout saat ruang layar bertambah.",
    },
  ],
};

export const practiceMobileFirstSectionChallenge: CodingChallenge = {
  id: "practice-mobile-first-section",
  lessonId: "mobile-first-css",
  title: "Membuat section mobile-first",
  description:
    "Latihan menulis style dasar yang aman untuk layar kecil sebelum menambahkan peningkatan responsive.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .section dan tambahkan padding.",
    "Targetkan .title dan tambahkan font-size.",
    "Targetkan .description dan tambahkan line-height.",
    "Jika sudah nyaman, tambahkan media query min-width sebagai peningkatan untuk layar lebih besar.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="section">
  <h1 class="title">Belajar Responsive CSS</h1>
  <p class="description">Mulai dari layar kecil, lalu tingkatkan untuk layar lebih besar.</p>
</section>`,
    css: `.section {
  background: #18181b;
}

.title {
  color: #fafafa;
}

.description {
  color: #d4d4d8;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="section">
  <h1 class="title">Belajar Responsive CSS</h1>
  <p class="description">Mulai dari layar kecil, lalu tingkatkan untuk layar lebih besar.</p>
</section>`,
    css: `.section {
  background: #18181b;
  padding: 16px;
}

.title {
  color: #fafafa;
  font-size: 28px;
}

.description {
  color: #d4d4d8;
  line-height: 1.7;
}

@media (min-width: 768px) {
  .section {
    padding: 32px;
  }

  .title {
    font-size: 40px;
  }
}`,
    js: "",
  },
  checklist: [
    ".section punya padding dasar untuk layar kecil.",
    ".title punya font-size yang jelas.",
    ".description punya line-height yang nyaman.",
    "Media query dipakai sebagai peningkatan, bukan syarat style dasar.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-section-selector", label: "Ada selector .section.", type: "cssSelectorExists", target: ".section" },
      { id: "section-padding", label: ".section punya property padding.", type: "cssSelectorPropertyExists", target: ".section", property: "padding" },
      { id: "has-title-selector", label: "Ada selector .title.", type: "cssSelectorExists", target: ".title" },
      { id: "title-font-size", label: ".title punya property font-size.", type: "cssSelectorPropertyExists", target: ".title", property: "font-size" },
      { id: "has-description-selector", label: "Ada selector .description.", type: "cssSelectorExists", target: ".description" },
      { id: "description-line-height", label: ".description punya property line-height.", type: "cssSelectorPropertyExists", target: ".description", property: "line-height" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Responsive Design", "Mobile First"],
};

export const practiceCssBreakpointCardGridChallenge: CodingChallenge = {
  id: "practice-css-breakpoint-card-grid",
  lessonId: "css-breakpoints-basic",
  title: "Membuat card grid dengan breakpoint",
  description:
    "Latihan memakai Grid dan breakpoint sederhana agar card section bisa meningkat saat layar lebih lebar.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .card-grid.",
    "Tambahkan display: grid.",
    "Tambahkan gap.",
    "Tambahkan grid-template-columns.",
    "Targetkan .card dan tambahkan padding.",
    "Jika sudah nyaman, tambahkan media query untuk mengubah jumlah kolom di layar lebih besar.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<section class="card-grid">
  <article class="card">Mobile-first</article>
  <article class="card">Breakpoint</article>
  <article class="card">Responsive layout</article>
</section>`,
    css: `.card-grid {
  max-width: 960px;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<section class="card-grid">
  <article class="card">Mobile-first</article>
  <article class="card">Breakpoint</article>
  <article class="card">Responsive layout</article>
</section>`,
    css: `.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 960px;
}

.card {
  padding: 16px;
  border: 1px solid #3f3f46;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    js: "",
  },
  checklist: [
    ".card-grid memakai Grid.",
    ".card-grid punya gap dan kolom dasar.",
    ".card punya padding.",
    "Media query mengubah kolom saat layar lebih lebar.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-grid-selector", label: "Ada selector .card-grid.", type: "cssSelectorExists", target: ".card-grid" },
      { id: "card-grid-display", label: ".card-grid punya property display.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "display" },
      { id: "card-grid-gap", label: ".card-grid punya property gap.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "gap" },
      { id: "card-grid-columns", label: ".card-grid punya property grid-template-columns.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "grid-template-columns" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Responsive Design", "Breakpoints", "Grid"],
};

export const practiceFluidSpacingTypographyChallenge: CodingChallenge = {
  id: "practice-fluid-spacing-typography",
  lessonId: "fluid-spacing-typography-basic",
  title: "Mengatur spacing dan typography responsive",
  description:
    "Latihan membuat container, title, dan description tetap nyaman dibaca di berbagai ukuran layar.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .container.",
    "Tambahkan max-width dan padding.",
    "Targetkan .title.",
    "Tambahkan font-size dan line-height.",
    "Targetkan .description dan tambahkan line-height.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<main class="container">
  <h1 class="title">Fluid Spacing dan Typography</h1>
  <p class="description">Teks yang responsive tetap perlu batas lebar, jarak, dan line-height yang nyaman.</p>
</main>`,
    css: `.container {
  margin: 0 auto;
}

.title {
  color: #fafafa;
}

.description {
  color: #d4d4d8;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="container">
  <h1 class="title">Fluid Spacing dan Typography</h1>
  <p class="description">Teks yang responsive tetap perlu batas lebar, jarak, dan line-height yang nyaman.</p>
</main>`,
    css: `.container {
  max-width: 720px;
  margin: 0 auto;
  padding: clamp(16px, 4vw, 40px);
}

.title {
  color: #fafafa;
  font-size: clamp(32px, 6vw, 56px);
  line-height: 1.1;
}

.description {
  color: #d4d4d8;
  line-height: 1.7;
}`,
    js: "",
  },
  checklist: [
    ".container membatasi lebar dengan max-width.",
    ".container punya padding.",
    ".title punya font-size dan line-height.",
    ".description punya line-height.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-container-selector", label: "Ada selector .container.", type: "cssSelectorExists", target: ".container" },
      { id: "container-max-width", label: ".container punya property max-width.", type: "cssSelectorPropertyExists", target: ".container", property: "max-width" },
      { id: "container-padding", label: ".container punya property padding.", type: "cssSelectorPropertyExists", target: ".container", property: "padding" },
      { id: "has-title-selector", label: "Ada selector .title.", type: "cssSelectorExists", target: ".title" },
      { id: "title-font-size", label: ".title punya property font-size.", type: "cssSelectorPropertyExists", target: ".title", property: "font-size" },
      { id: "title-line-height", label: ".title punya property line-height.", type: "cssSelectorPropertyExists", target: ".title", property: "line-height" },
      { id: "has-description-selector", label: "Ada selector .description.", type: "cssSelectorExists", target: ".description" },
      { id: "description-line-height", label: ".description punya property line-height.", type: "cssSelectorPropertyExists", target: ".description", property: "line-height" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Spacing", "Typography", "Responsive Design"],
};

export const practiceCssVariablesThemeCardChallenge: CodingChallenge = {
  id: "practice-css-variables-theme-card",
  lessonId: "css-variables-dark-mode-basic",
  title: "Membuat theme card dengan CSS variables",
  description:
    "Latihan memakai CSS variables untuk warna halaman dan card sederhana.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .page.",
    "Tambahkan CSS variables untuk warna seperti --color-bg dan --color-text.",
    "Gunakan background dan color pada .page.",
    "Targetkan .card.",
    "Tambahkan background dan padding pada .card.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<main class="page">
  <article class="card">
    <h1>CSS Variables</h1>
    <p>Nilai visual yang reusable membantu UI tetap konsisten.</p>
  </article>
</main>`,
    css: `.page {
  padding: 24px;
}

.card {
  border-radius: 12px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="page">
  <article class="card">
    <h1>CSS Variables</h1>
    <p>Nilai visual yang reusable membantu UI tetap konsisten.</p>
  </article>
</main>`,
    css: `.page {
  --color-bg: #18181b;
  --color-text: #fafafa;
  --color-card: #27272a;

  background: var(--color-bg);
  color: var(--color-text);
  padding: 24px;
}

.card {
  background: var(--color-card);
  padding: 16px;
  border-radius: 12px;
}`,
    js: "",
  },
  checklist: [
    ".page menyimpan CSS variables untuk warna.",
    ".page memakai background dan color dari nilai visual.",
    ".card memakai background dan padding.",
    "Nilai warna tidak perlu diulang acak di banyak tempat.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-page-selector", label: "Ada selector .page.", type: "cssSelectorExists", target: ".page" },
      { id: "page-color-bg-variable", label: ".page punya variable --color-bg.", type: "cssSelectorPropertyExists", target: ".page", property: "--color-bg" },
      { id: "page-color-text-variable", label: ".page punya variable --color-text.", type: "cssSelectorPropertyExists", target: ".page", property: "--color-text" },
      { id: "page-background", label: ".page punya property background.", type: "cssSelectorPropertyExists", target: ".page", property: "background" },
      { id: "page-color", label: ".page punya property color.", type: "cssSelectorPropertyExists", target: ".page", property: "color" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-background", label: ".card punya property background.", type: "cssSelectorPropertyExists", target: ".card", property: "background" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "CSS Variables", "Visual System", "Dark Mode"],
};

export const buildResponsiveVisualSectionChallenge: CodingChallenge = {
  id: "build-responsive-visual-section",
  lessonId: "responsive-visual-system-assessment",
  title: "Membangun responsive visual section",
  description:
    "Assessment practice untuk menggabungkan mobile-first CSS, readability, card grid, dan nilai visual yang konsisten.",
  instructions: [
    "Style .page dengan background dan color.",
    "Style .container dengan max-width dan padding.",
    "Style .title dengan font-size dan line-height.",
    "Gunakan .card-grid sebagai grid container dengan display dan gap.",
    "Style .card dengan padding dan border-radius.",
    "Jika sudah nyaman, tambahkan media query dan CSS variables sebagai peningkatan.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<main class="page">
  <section class="container">
    <h1 class="title">Responsive Visual System</h1>
    <div class="card-grid">
      <article class="card">Mobile-first</article>
      <article class="card">Readable typography</article>
      <article class="card">Reusable visual values</article>
    </div>
  </section>
</main>`,
    css: `.page {
  min-height: 100vh;
}

.container {
  margin: 0 auto;
}

.title {
  color: #fafafa;
}

.card-grid {
  margin-top: 20px;
}

.card {
  border: 1px solid #3f3f46;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="page">
  <section class="container">
    <h1 class="title">Responsive Visual System</h1>
    <div class="card-grid">
      <article class="card">Mobile-first</article>
      <article class="card">Readable typography</article>
      <article class="card">Reusable visual values</article>
    </div>
  </section>
</main>`,
    css: `.page {
  --color-bg: #18181b;
  --color-text: #fafafa;
  --color-card: #27272a;

  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: clamp(16px, 4vw, 40px);
}

.title {
  color: #fafafa;
  font-size: clamp(32px, 6vw, 56px);
  line-height: 1.1;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 20px;
}

.card {
  background: var(--color-card);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #3f3f46;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    js: "",
  },
  checklist: [
    ".page punya warna background dan text yang readable.",
    ".container membatasi lebar dan punya padding.",
    ".title punya font-size dan line-height.",
    ".card-grid memakai Grid dan gap.",
    ".card punya padding dan border-radius.",
    "Media query dan CSS variables dipakai sebagai peningkatan jika sudah siap.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-page-selector", label: "Ada selector .page.", type: "cssSelectorExists", target: ".page" },
      { id: "page-background", label: ".page punya property background.", type: "cssSelectorPropertyExists", target: ".page", property: "background" },
      { id: "page-color", label: ".page punya property color.", type: "cssSelectorPropertyExists", target: ".page", property: "color" },
      { id: "has-container-selector", label: "Ada selector .container.", type: "cssSelectorExists", target: ".container" },
      { id: "container-max-width", label: ".container punya property max-width.", type: "cssSelectorPropertyExists", target: ".container", property: "max-width" },
      { id: "container-padding", label: ".container punya property padding.", type: "cssSelectorPropertyExists", target: ".container", property: "padding" },
      { id: "has-title-selector", label: "Ada selector .title.", type: "cssSelectorExists", target: ".title" },
      { id: "title-font-size", label: ".title punya property font-size.", type: "cssSelectorPropertyExists", target: ".title", property: "font-size" },
      { id: "title-line-height", label: ".title punya property line-height.", type: "cssSelectorPropertyExists", target: ".title", property: "line-height" },
      { id: "has-card-grid-selector", label: "Ada selector .card-grid.", type: "cssSelectorExists", target: ".card-grid" },
      { id: "card-grid-display", label: ".card-grid punya property display.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "display" },
      { id: "card-grid-gap", label: ".card-grid punya property gap.", type: "cssSelectorPropertyExists", target: ".card-grid", property: "gap" },
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Responsive Design", "Visual System", "Assessment"],
};

export const responsiveVisualSystemLessons: Lesson[] = [
  mobileFirstCssLesson,
  cssBreakpointsBasicLesson,
  fluidSpacingTypographyBasicLesson,
  cssVariablesDarkModeBasicLesson,
  responsiveVisualSystemAssessmentLesson,
];

export const responsiveVisualSystemQuizzes: Quiz[] = [
  responsiveVisualSystemAssessmentQuiz,
];

export const responsiveVisualSystemChallenges: CodingChallenge[] = [
  practiceMobileFirstSectionChallenge,
  practiceCssBreakpointCardGridChallenge,
  practiceFluidSpacingTypographyChallenge,
  practiceCssVariablesThemeCardChallenge,
  buildResponsiveVisualSectionChallenge,
];
