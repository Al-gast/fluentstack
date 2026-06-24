import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const boxModelSpacingModule: Module = {
  id: "box-model-spacing",
  trackId: "frontend-engineering",
  title: "Box Model and Spacing",
  slug: "box-model-spacing",
  description:
    "Pelajari box model, padding, margin, border, width, height, max-width, dan box-sizing untuk membuat elemen lebih rapi dan mudah dibaca.",
  order: 6,
  lessonIds: [
    "css-box-model-basic",
    "css-padding-margin-basic",
    "css-border-width-basic",
    "box-model-spacing-assessment",
  ],
  estimatedHours: 3,
  skillTags: ["CSS", "Box Model", "Spacing", "Box Sizing"],
};

export const cssBoxModelBasicLesson: Lesson = {
  id: "css-box-model-basic",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Box Model Dasar",
  slug: "css-box-model-basic",
  description:
    "Pahami bagaimana elemen HTML dibaca sebagai kotak yang punya content, padding, border, dan margin.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami elemen HTML sebagai box di CSS",
    "Membedakan content, padding, border, dan margin",
    "Menerapkan box model pada card sederhana",
  ],
  skillTags: ["CSS", "Box Model", "Spacing"],
  blocks: [
    {
      id: "css-box-model-basic-intro",
      type: "text",
      title: "Banyak elemen bisa dibayangkan sebagai kotak",
      content:
        "Di CSS, banyak elemen HTML bisa kamu bayangkan sebagai box. Box ini punya isi, ruang bagian dalam, garis tepi, dan jarak luar. Kamu tidak perlu menghafal semua detail layout dulu. Fokus pada empat bagian awal: content, padding, border, dan margin.",
    },
    {
      id: "css-box-model-basic-core",
      type: "text",
      title: "Empat bagian box model",
      content:
        "Content adalah isi elemen, misalnya teks heading atau paragraf. Padding adalah jarak di dalam box, antara content dan border. Border adalah garis pembatas box. Margin adalah jarak luar yang memisahkan box dari elemen lain. Analogi card membantu: isi card adalah content, ruang napas di dalam card adalah padding, garis tepinya adalah border, dan jarak card dari elemen lain adalah margin.",
    },
    {
      id: "css-box-model-basic-code-example",
      type: "code-example",
      title: "Card dengan padding, border, dan margin",
      language: "html",
      code: `<div class="card">
  <h2>Belajar Box Model</h2>
  <p>Padding, border, dan margin membantu tampilan lebih rapi.</p>
</div>

<style>
  .card {
    padding: 16px;
    border: 1px solid #3f3f46;
    margin: 16px;
  }
</style>`,
      explanation:
        "padding memberi ruang di dalam card. border memberi garis tepi. margin memberi jarak dari elemen lain. Ketiganya membantu card tidak terasa terlalu menempel.",
    },
    {
      id: "css-box-model-basic-callout",
      type: "callout",
      variant: "important",
      title: "Box model bukan hanya dekorasi",
      content:
        "Box model membantu kamu membuat tampilan yang lebih rapi, mudah dibaca, dan tidak terlalu menempel. Saat sebuah UI terasa sesak, sering kali masalahnya ada di padding, margin, atau ukuran box.",
    },
    {
      id: "css-box-model-basic-quick-check",
      type: "quick-check",
      question:
        "Bagian box model mana yang memberi jarak di dalam elemen, antara isi dan border?",
      options: ["padding", "margin", "selector", "value"],
      correctAnswer: "padding",
      explanation:
        "Padding memberi ruang di dalam elemen. Margin memberi jarak di luar elemen.",
    },
    {
      id: "css-box-model-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-box-model-card",
    },
    {
      id: "css-box-model-basic-summary",
      type: "summary",
      points: [
        "Elemen HTML bisa dipahami sebagai box.",
        "Content adalah isi.",
        "Padding adalah jarak dalam.",
        "Border adalah garis tepi.",
        "Margin adalah jarak luar.",
        "Berikutnya, kamu akan membedakan padding dan margin lebih jelas.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-box-model-basic-intro",
      "css-box-model-basic-core",
      "css-box-model-basic-code-example",
      "css-box-model-basic-callout",
      "css-box-model-basic-quick-check",
      "css-box-model-basic-coding-practice",
      "css-box-model-basic-summary",
    ],
  },
};

export const cssPaddingMarginBasicLesson: Lesson = {
  id: "css-padding-margin-basic",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Padding dan Margin",
  slug: "css-padding-margin-basic",
  description: "Pelajari perbedaan jarak dalam dan jarak luar pada elemen CSS.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Membedakan padding dan margin",
    "Menggunakan padding agar isi elemen tidak menempel",
    "Menggunakan margin untuk memberi jarak antar elemen",
  ],
  skillTags: ["CSS", "Padding", "Margin", "Spacing"],
  blocks: [
    {
      id: "css-padding-margin-basic-intro",
      type: "text",
      title: "Padding untuk ruang dalam, margin untuk ruang luar",
      content:
        "Padding dan margin sama-sama berhubungan dengan jarak, tetapi tempatnya berbeda. Padding adalah jarak di dalam elemen. Margin adalah jarak di luar elemen. Jika teks di dalam card terlalu menempel ke tepi, biasanya kamu butuh padding. Jika card terlalu menempel dengan elemen lain, biasanya kamu butuh margin.",
    },
    {
      id: "css-padding-margin-basic-code-example",
      type: "code-example",
      title: "Spacing pada card dan button",
      language: "css",
      code: `.card {
  padding: 20px;
  margin-bottom: 16px;
}

.button {
  padding: 10px 14px;
  margin-top: 12px;
}`,
      explanation:
        "padding pada card membuat isi card lebih lega. margin-bottom memberi jarak setelah card. padding pada button membuat tombol lebih nyaman dibaca dan diklik.",
    },
    {
      id: "css-padding-margin-basic-shorthand",
      type: "text",
      title: "Shorthand yang cukup untuk awal",
      content:
        "Kamu akan sering melihat penulisan singkat. padding: 16px berarti semua sisi mendapat jarak 16px. padding: 8px 12px berarti jarak atas-bawah 8px dan kiri-kanan 12px. Untuk sekarang, cukup pahami dua bentuk ini dulu. Empat nilai shorthand bisa dipelajari nanti saat kebutuhan layout lebih kompleks.",
    },
    {
      id: "css-padding-margin-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memakai margin untuk ruang dalam card",
      content:
        "Jika teks di dalam card terlalu menempel ke tepi card, gunakan padding. Margin memberi jarak di luar elemen, jadi margin tidak memperbaiki ruang antara isi card dan tepi card.",
    },
    {
      id: "css-padding-margin-basic-quick-check",
      type: "quick-check",
      question:
        "Kalau teks di dalam card terlalu menempel ke tepi card, property mana yang biasanya dipakai?",
      options: ["padding", "margin", "color", "font-size"],
      correctAnswer: "padding",
      explanation:
        "Padding memberi ruang di dalam elemen, antara isi dan tepi elemen.",
    },
    {
      id: "css-padding-margin-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-padding-margin-card",
    },
    {
      id: "css-padding-margin-basic-summary",
      type: "summary",
      points: [
        "Padding mengatur jarak dalam.",
        "Margin mengatur jarak luar.",
        "Button biasanya butuh padding agar lebih nyaman.",
        "Card biasanya butuh padding dan margin agar terlihat rapi.",
        "Berikutnya, kamu akan memakai border, border-radius, dan max-width untuk membuat card lebih jelas.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-padding-margin-basic-intro",
      "css-padding-margin-basic-code-example",
      "css-padding-margin-basic-shorthand",
      "css-padding-margin-basic-common-mistake",
      "css-padding-margin-basic-quick-check",
      "css-padding-margin-basic-coding-practice",
      "css-padding-margin-basic-summary",
    ],
  },
};

export const cssBorderWidthBasicLesson: Lesson = {
  id: "css-border-width-basic",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Border, Width, dan Max Width",
  slug: "css-border-width-basic",
  description:
    "Pelajari cara memberi batas, mengatur lebar, dan menjaga card tetap mudah dibaca.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami border sebagai garis tepi elemen",
    "Menggunakan border-radius untuk sudut yang lebih halus",
    "Menggunakan max-width agar card tetap mudah dibaca",
    "Mengenal width, height, dan box-sizing secara sederhana",
  ],
  skillTags: ["CSS", "Border", "Width", "Max Width", "Box Sizing"],
  blocks: [
    {
      id: "css-border-width-basic-intro",
      type: "text",
      title: "Border memperjelas batas, max-width menjaga lebar",
      content:
        "Setelah kamu memahami padding dan margin, sekarang kamu bisa memperjelas bentuk box. Border memberi garis tepi. Border-radius membuat sudut elemen lebih halus. Width menentukan lebar elemen. Max-width membatasi lebar maksimum tanpa memaksa elemen selalu selebar itu.",
    },
    {
      id: "css-border-width-basic-code-example",
      type: "code-example",
      title: "Card dengan batas dan lebar maksimum",
      language: "css",
      code: `.card {
  max-width: 420px;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 16px;
}`,
      explanation:
        "max-width menjaga card tidak terlalu panjang. border memperjelas batas card. border-radius membuat sudut card terasa lebih halus. padding tetap dibutuhkan agar isi tidak menempel.",
    },
    {
      id: "css-border-width-basic-sizing-note",
      type: "text",
      title: "Width, height, dan box-sizing",
      content:
        "Width mengatur lebar elemen. Height mengatur tinggi elemen, tetapi untuk card sederhana kamu tidak selalu perlu height tetap karena isi card bisa berbeda-beda. Box-sizing membantu ukuran box lebih mudah diprediksi. Dengan box-sizing: border-box, padding dan border ikut dihitung di dalam ukuran elemen, sehingga card lebih mudah dikontrol.",
    },
    {
      id: "css-border-width-basic-callout",
      type: "callout",
      variant: "tip",
      title: "Max-width sering lebih fleksibel daripada width tetap",
      content:
        "Jangan terlalu cepat memakai width tetap untuk semua kondisi. Untuk card belajar sederhana, max-width sering lebih aman karena card masih bisa mengecil saat ruang layar terbatas.",
    },
    {
      id: "css-border-width-basic-quick-check",
      type: "quick-check",
      question:
        "Property mana yang membatasi lebar maksimum elemen tanpa memaksa semua elemen selalu selebar itu?",
      options: ["max-width", "color", "selector", "font-size"],
      correctAnswer: "max-width",
      explanation:
        "max-width membatasi lebar maksimum, tetapi elemen masih bisa lebih kecil jika ruangnya terbatas.",
    },
    {
      id: "css-border-width-basic-coding-practice",
      type: "coding-practice",
      challengeId: "practice-css-border-width-card",
    },
    {
      id: "css-border-width-basic-summary",
      type: "summary",
      points: [
        "Border memberi garis tepi.",
        "Border-radius menghaluskan sudut.",
        "Max-width membantu menjaga card tetap nyaman dibaca.",
        "Box-sizing membantu ukuran box lebih mudah diprediksi.",
        "Padding tetap penting agar isi tidak menempel.",
        "Berikutnya, kamu akan menguji pemahaman box model dan spacing dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "css-border-width-basic-intro",
      "css-border-width-basic-code-example",
      "css-border-width-basic-sizing-note",
      "css-border-width-basic-callout",
      "css-border-width-basic-quick-check",
      "css-border-width-basic-coding-practice",
      "css-border-width-basic-summary",
    ],
  },
};

export const boxModelSpacingAssessmentLesson: Lesson = {
  id: "box-model-spacing-assessment",
  trackId: "frontend-engineering",
  moduleId: "box-model-spacing",
  title: "Uji Kompetensi Box Model and Spacing",
  slug: "box-model-spacing-assessment",
  description:
    "Cek kesiapan kamu mengatur content, padding, border, margin, width, height, box-sizing, dan spacing dasar.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Mengecek pemahaman content, padding, border, dan margin",
    "Mengecek pemahaman width, height, max-width, dan box-sizing",
    "Mengecek kemampuan membedakan padding dan margin",
    "Mengecek kemampuan memperbaiki spacing sederhana",
    "Mengarahkan learner membaca dokumentasi resmi CSS dengan fokus",
  ],
  skillTags: ["CSS", "Box Model", "Spacing", "Checkpoint"],
  blocks: [
    {
      id: "box-model-spacing-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini mengecek apakah kamu sudah memahami box model dan spacing dasar. Kamu akan membedakan content, padding, border, dan margin; membaca width, height, max-width, dan box-sizing; lalu memperbaiki spacing pada card sederhana. Fokusnya bukan membuat desain sempurna, tetapi membuktikan bahwa kamu bisa membuat box lebih rapi dan mudah dibaca.",
    },
    {
      id: "box-model-spacing-assessment-quiz-block",
      type: "quiz",
      quizId: "box-model-spacing-assessment-quiz",
    },
    {
      id: "box-model-spacing-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "fix-box-model-spacing-card",
    },
    {
      id: "box-model-spacing-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca MDN secara terarah",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi CSS resmi, bukan tugas menghafal. Fokus pada bagian yang sudah kamu pakai di latihan.",
      links: [
        {
          source: "MDN Web Docs",
          title: "The box model",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model",
          focus: [
            "content",
            "padding",
            "border",
            "margin",
          ],
          ignoreForNow: [
            "margin collapsing details",
            "complex sizing behavior",
            "advanced layout",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Sizing items in CSS",
          url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS",
          focus: [
            "width",
            "height",
            "max-width",
            "cara ukuran elemen memengaruhi layout",
          ],
          ignoreForNow: [
            "advanced intrinsic sizing",
            "complex layout systems",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "box-sizing",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
          focus: [
            "box-sizing: border-box",
            "hubungan ukuran elemen dengan padding dan border",
            "kenapa ukuran box lebih mudah diprediksi",
          ],
          ignoreForNow: [
            "CSS reset debates",
            "advanced browser defaults",
          ],
        },
      ],
      followUpAction:
        "Kembali ke latihan spacing card kamu dan tunjukkan: satu padding, satu margin, satu border, satu max-width, dan satu alasan kenapa box-sizing: border-box membantu ukuran card lebih mudah diprediksi.",
    },
    {
      id: "box-model-spacing-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu memahami content, padding, border, dan margin.",
        "Kamu membuktikan bahwa kamu bisa membedakan padding sebagai jarak dalam dan margin sebagai jarak luar.",
        "Kamu membuktikan bahwa kamu bisa memakai max-width dan box-sizing untuk membuat card lebih mudah dikontrol.",
        "Jika checkpoint belum lulus, review lagi box model, padding vs margin, border, max-width, dan box-sizing.",
        "Setelah box model dan spacing dasar mulai aman, berikutnya kamu akan membawa HTML dan CSS ke workflow project lokal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "box-model-spacing-assessment-recap",
      "box-model-spacing-assessment-quiz-block",
      "box-model-spacing-assessment-coding-practice",
      "box-model-spacing-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const boxModelSpacingAssessmentQuiz: Quiz = {
  id: "box-model-spacing-assessment-quiz",
  lessonId: "box-model-spacing-assessment",
  title: "Uji Kompetensi Box Model and Spacing",
  passingScore: 70,
  questions: [
    {
      id: "box-model-spacing-assessment-q1",
      type: "multiple-choice",
      question: "Dalam box model, bagian mana yang berisi teks atau gambar utama dari elemen?",
      options: ["padding", "content", "margin", "border"],
      correctAnswer: "content",
      explanation:
        "Content adalah isi utama elemen, seperti teks, gambar, atau elemen lain di dalam box.",
    },
    {
      id: "box-model-spacing-assessment-q2",
      type: "multiple-choice",
      question: "Property mana yang memberi ruang di dalam elemen, antara content dan border?",
      options: ["margin", "border", "padding", "height"],
      correctAnswer: "padding",
      explanation:
        "Padding memberi ruang di dalam elemen. Jika isi card terlalu menempel ke tepi, biasanya kamu menambah padding.",
    },
    {
      id: "box-model-spacing-assessment-q3",
      type: "multiple-choice",
      question: "Property mana yang memberi jarak luar antara satu elemen dan elemen lain?",
      options: ["border", "width", "box-sizing", "margin"],
      correctAnswer: "margin",
      explanation:
        "Margin mengatur jarak luar elemen. Ini berguna saat card terlalu dekat dengan elemen lain.",
    },
    {
      id: "box-model-spacing-assessment-q4",
      type: "multiple-choice",
      question: "Apa fungsi border pada box model?",
      options: [
        "Memberi garis tepi elemen",
        "Mengubah teks menjadi link",
        "Menghapus semua padding",
        "Menjalankan JavaScript",
      ],
      correctAnswer: "Memberi garis tepi elemen",
      explanation:
        "Border adalah garis tepi elemen. Border sering dipakai untuk memperjelas batas card atau field.",
    },
    {
      id: "box-model-spacing-assessment-q5",
      type: "multiple-choice",
      question: "Property mana yang mengatur lebar elemen?",
      options: ["height", "width", "color", "font-size"],
      correctAnswer: "width",
      explanation:
        "Width mengatur lebar elemen. Height mengatur tinggi elemen.",
    },
    {
      id: "box-model-spacing-assessment-q6",
      type: "multiple-choice",
      question: "Property mana yang mengatur tinggi elemen?",
      options: ["margin", "padding", "height", "border-radius"],
      correctAnswer: "height",
      explanation:
        "Height mengatur tinggi elemen. Untuk card sederhana, height tetap tidak selalu dibutuhkan karena isi card bisa berbeda-beda.",
    },
    {
      id: "box-model-spacing-assessment-q7",
      type: "multiple-choice",
      question: "Property mana yang membatasi lebar maksimum card tanpa memaksa card selalu selebar itu?",
      options: ["max-width", "color", "selector", "font-weight"],
      correctAnswer: "max-width",
      explanation:
        "Max-width membatasi lebar maksimum. Elemen masih bisa lebih kecil saat ruang layar terbatas.",
    },
    {
      id: "box-model-spacing-assessment-q8",
      type: "multiple-choice",
      question: "Apa manfaat box-sizing: border-box pada card sederhana?",
      options: [
        "Membuat JavaScript berjalan otomatis",
        "Membuat padding dan border ikut dihitung dalam ukuran elemen",
        "Mengubah semua margin menjadi nol",
        "Membuat selector menjadi lebih spesifik",
      ],
      correctAnswer: "Membuat padding dan border ikut dihitung dalam ukuran elemen",
      explanation:
        "Dengan border-box, padding dan border ikut dihitung di dalam ukuran elemen. Ini membuat ukuran box lebih mudah diprediksi.",
    },
    {
      id: "box-model-spacing-assessment-q9",
      type: "multiple-choice",
      question: "Mana contoh spacing yang lebih konsisten untuk card dan button?",
      options: [
        "Memakai padding pada card dan button sesuai kebutuhan",
        "Menghapus semua jarak agar elemen menempel",
        "Memakai margin acak di setiap elemen",
        "Memakai !important untuk semua spacing",
      ],
      correctAnswer: "Memakai padding pada card dan button sesuai kebutuhan",
      explanation:
        "Spacing yang konsisten berarti jarak dipilih dengan tujuan. Padding membantu isi elemen tidak menempel, termasuk pada card dan button.",
    },
    {
      id: "box-model-spacing-assessment-q10",
      type: "multiple-choice",
      question: "Saat spacing tidak sesuai harapan, apa langkah awal yang lebih sehat daripada langsung memakai !important?",
      options: [
        "Menghapus semua CSS",
        "Cek selector, property spacing, dan posisi padding atau margin",
        "Mengubah semua elemen menjadi div",
        "Menambahkan !important ke semua rule",
      ],
      correctAnswer: "Cek selector, property spacing, dan posisi padding atau margin",
      explanation:
        "Cek dulu apakah selector sudah tepat dan apakah masalahnya butuh padding atau margin. !important bukan langkah awal yang sehat untuk debugging.",
    },
  ],
};

export const practiceCssBoxModelCardChallenge: CodingChallenge = {
  id: "practice-css-box-model-card",
  lessonId: "css-box-model-basic",
  title: "Membuat card dengan box model dasar",
  description:
    "Latihan memakai padding, border, dan margin pada card sederhana.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan elemen dengan class card memakai .card.",
    "Tambahkan padding.",
    "Tambahkan border.",
    "Tambahkan margin.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2>Belajar Box Model</h2>
  <p>Card ini perlu ruang dalam, garis tepi, dan jarak luar.</p>
</article>`,
    css: `/* Tambahkan style box model untuk .card di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2>Belajar Box Model</h2>
  <p>Card ini perlu ruang dalam, garis tepi, dan jarak luar.</p>
</article>`,
    css: `.card {
  padding: 16px;
  border: 1px solid #3f3f46;
  margin: 16px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki padding.",
    ".card memiliki border.",
    ".card memiliki margin.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "card-margin", label: ".card punya property margin.", type: "cssSelectorPropertyExists", target: ".card", property: "margin" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Box Model", "Spacing"],
};

export const practiceCssPaddingMarginCardChallenge: CodingChallenge = {
  id: "practice-css-padding-margin-card",
  lessonId: "css-padding-margin-basic",
  title: "Mengatur padding dan margin pada card",
  description:
    "Latihan membedakan jarak dalam dan jarak luar pada card dan button.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .card.",
    "Tambahkan padding agar isi card tidak menempel.",
    "Tambahkan margin-bottom agar card punya jarak dengan elemen berikutnya.",
    "Targetkan .button.",
    "Tambahkan padding pada button.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2>Spacing di CSS</h2>
  <p>Padding dan margin membantu UI lebih mudah dibaca.</p>
  <button class="button">Lanjut belajar</button>
</article>

<p>Elemen berikutnya seharusnya tidak terlalu menempel ke card.</p>`,
    css: `/* Tambahkan spacing untuk .card dan .button di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2>Spacing di CSS</h2>
  <p>Padding dan margin membantu UI lebih mudah dibaca.</p>
  <button class="button">Lanjut belajar</button>
</article>

<p>Elemen berikutnya seharusnya tidak terlalu menempel ke card.</p>`,
    css: `.card {
  padding: 20px;
  margin-bottom: 16px;
}

.button {
  padding: 10px 14px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki padding.",
    ".card memiliki margin-bottom.",
    "Ada selector .button.",
    ".button memiliki padding.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-margin-bottom", label: ".card punya property margin-bottom.", type: "cssSelectorPropertyExists", target: ".card", property: "margin-bottom" },
      { id: "has-button-selector", label: "Ada selector .button.", type: "cssSelectorExists", target: ".button" },
      { id: "button-padding", label: ".button punya property padding.", type: "cssSelectorPropertyExists", target: ".button", property: "padding" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Padding", "Margin", "Spacing"],
};

export const practiceCssBorderWidthCardChallenge: CodingChallenge = {
  id: "practice-css-border-width-card",
  lessonId: "css-border-width-basic",
  title: "Membuat card dengan border dan max-width",
  description:
    "Latihan memakai border, border-radius, max-width, padding, dan style heading pada card.",
  instructions: [
    "Fokus di tab CSS.",
    "Targetkan .card.",
    "Tambahkan max-width.",
    "Tambahkan border.",
    "Tambahkan border-radius.",
    "Tambahkan padding.",
    "Targetkan .card-title.",
    "Tambahkan font-size.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2 class="card-title">Card CSS</h2>
  <p class="card-description">Max-width membantu card tetap nyaman dibaca.</p>
</article>`,
    css: `/* Tambahkan style untuk .card dan .card-title di sini */`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2 class="card-title">Card CSS</h2>
  <p class="card-description">Max-width membantu card tetap nyaman dibaca.</p>
</article>`,
    css: `.card {
  max-width: 420px;
  border: 1px solid #3f3f46;
  border-radius: 12px;
  padding: 16px;
}

.card-title {
  font-size: 24px;
}`,
    js: "",
  },
  checklist: [
    "Ada selector .card.",
    ".card memiliki max-width.",
    ".card memiliki border.",
    ".card memiliki border-radius.",
    ".card memiliki padding.",
    "Ada selector .card-title.",
    ".card-title memiliki font-size.",
    "Tidak memakai !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-max-width", label: ".card punya property max-width.", type: "cssSelectorPropertyExists", target: ".card", property: "max-width" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "card-border-radius", label: ".card punya property border-radius.", type: "cssSelectorPropertyExists", target: ".card", property: "border-radius" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "has-card-title-selector", label: "Ada selector .card-title.", type: "cssSelectorExists", target: ".card-title" },
      { id: "card-title-font-size", label: ".card-title punya property font-size.", type: "cssSelectorPropertyExists", target: ".card-title", property: "font-size" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Border", "Width", "Max Width"],
};

export const fixBoxModelSpacingCardChallenge: CodingChallenge = {
  id: "fix-box-model-spacing-card",
  lessonId: "box-model-spacing-assessment",
  title: "Memperbaiki spacing card sederhana",
  description:
    "Checkpoint praktik untuk memperbaiki box model dan spacing pada card sederhana.",
  instructions: [
    "Perbaiki card agar spacing-nya lebih rapi.",
    "Gunakan .card untuk styling container.",
    "Tambahkan max-width.",
    "Tambahkan padding.",
    "Tambahkan border.",
    "Tambahkan box-sizing.",
    "Gunakan .card-title untuk mengatur jarak title.",
    "Gunakan .card-description untuk mengatur jarak description.",
    "Jangan memakai !important.",
  ],
  starterCode: {
    html: `<article class="card">
  <h2 class="card-title">Box Model Review</h2>
  <p class="card-description">Perbaiki spacing card agar lebih mudah dibaca.</p>
  <button class="button">Lanjut belajar</button>
</article>`,
    css: `.card {
  background: #18181b;
}

.button {
  padding: 8px 12px;
}`,
    js: "",
  },
  solutionCode: {
    html: `<article class="card">
  <h2 class="card-title">Box Model Review</h2>
  <p class="card-description">Perbaiki spacing card agar lebih mudah dibaca.</p>
  <button class="button">Lanjut belajar</button>
</article>`,
    css: `.card {
  background: #18181b;
  max-width: 420px;
  padding: 20px;
  border: 1px solid #3f3f46;
  box-sizing: border-box;
}

.card-title {
  margin-bottom: 8px;
}

.card-description {
  margin-bottom: 16px;
}

.button {
  padding: 8px 12px;
}`,
    js: "",
  },
  checklist: [
    "Card terlihat lebih mudah dibaca.",
    "Jarak title dan description terasa rapi.",
    "Spacing tidak bergantung pada !important.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "has-card-selector", label: "Ada selector .card.", type: "cssSelectorExists", target: ".card" },
      { id: "card-max-width", label: ".card punya property max-width.", type: "cssSelectorPropertyExists", target: ".card", property: "max-width" },
      { id: "card-padding", label: ".card punya property padding.", type: "cssSelectorPropertyExists", target: ".card", property: "padding" },
      { id: "card-border", label: ".card punya property border.", type: "cssSelectorPropertyExists", target: ".card", property: "border" },
      { id: "card-box-sizing", label: ".card punya property box-sizing.", type: "cssSelectorPropertyExists", target: ".card", property: "box-sizing" },
      { id: "has-card-title-selector", label: "Ada selector .card-title.", type: "cssSelectorExists", target: ".card-title" },
      { id: "card-title-margin-bottom", label: ".card-title punya property margin-bottom.", type: "cssSelectorPropertyExists", target: ".card-title", property: "margin-bottom" },
      { id: "has-card-description-selector", label: "Ada selector .card-description.", type: "cssSelectorExists", target: ".card-description" },
      { id: "card-description-margin-bottom", label: ".card-description punya property margin-bottom.", type: "cssSelectorPropertyExists", target: ".card-description", property: "margin-bottom" },
      { id: "no-important", label: "Kode tidak memakai !important.", type: "cssForbiddenTextAbsent", valueIncludes: "!important" },
    ],
  },
  skillTags: ["CSS", "Box Model", "Spacing", "Checkpoint"],
};

export const boxModelSpacingLessons: Lesson[] = [
  cssBoxModelBasicLesson,
  cssPaddingMarginBasicLesson,
  cssBorderWidthBasicLesson,
  boxModelSpacingAssessmentLesson,
];

export const boxModelSpacingQuizzes: Quiz[] = [
  boxModelSpacingAssessmentQuiz,
];

export const boxModelSpacingChallenges: CodingChallenge[] = [
  practiceCssBoxModelCardChallenge,
  practiceCssPaddingMarginCardChallenge,
  practiceCssBorderWidthCardChallenge,
  fixBoxModelSpacingCardChallenge,
];
