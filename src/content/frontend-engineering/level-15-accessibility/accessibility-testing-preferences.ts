import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const accessibilityTestingPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const accessibilityTestingPreferencesModule: Module = {
  id: "accessibility-testing-preferences",
  trackId: "frontend-engineering",
  title: "Accessibility Testing and Preferences",
  slug: "accessibility-testing-preferences",
  description:
    "Menguji issue accessibility umum dan menghormati preference user untuk contrast, form error, motion, serta feedback UI.",
  order: 49,
  lessonIds: [
    "color-contrast",
    "accessible-form-errors",
    "reduced-motion",
    "screen-reader-basics",
    "accessibility-testing-tools",
    "accessibility-testing-preferences-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Color Contrast",
    "Accessible Form Errors",
    "Reduced Motion",
    "Screen Reader Testing",
    "Accessibility Testing",
  ],
};

export const colorContrastLesson: Lesson = {
  id: "color-contrast",
  trackId: "frontend-engineering",
  moduleId: "accessibility-testing-preferences",
  title: "Color Contrast",
  slug: "color-contrast",
  description:
    "Memeriksa agar text, error, focus, dan action tetap terbaca pada surface tempat user benar-benar melihatnya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan contrast sebagai hubungan foreground dan background, bukan warna tunggal",
    "Membedakan text normal, text besar, dan UI state yang perlu diperiksa",
    "Memperbaiki satu kombinasi text atau action yang sulit dibaca",
    "Menyusun pemeriksaan contrast yang tidak hanya mengandalkan feeling visual",
  ],
  skillTags: ["CSS", "Color Contrast", "Visual Accessibility", "Accessibility Review"],
  blocks: [
    {
      id: "color-contrast-intro",
      type: "text",
      title: "Contrast adalah informasi yang harus tetap terbaca",
      content:
        "Contrast membandingkan warna foreground dengan background yang benar-benar berada di belakangnya. Text meta yang tenang, error merah, button primary, disabled state, badge, link, dan focus ring semuanya dapat gagal bila warnanya terlalu dekat dengan surface. Jangan menilai satu token warna secara terpisah. Periksa kombinasi yang muncul pada light surface, dark surface, hover, focus, error, dan theme lain yang didukung product. Untuk text normal, target awal yang praktis adalah rasio 4.5:1; text besar memiliki pengecualian, tetapi jangan memakai pengecualian itu untuk menyamarkan body copy yang tetap sulit dibaca.",
    },
    {
      id: "color-contrast-example",
      type: "code-example",
      title: "Perbaiki text pendukung dan action course",
      language: "css",
      code: `.course-card {
  background: #ffffff;
  border: 1px solid #cbd5e1;
}

.course-meta {
  color: #475569;
}

.course-action {
  background: #075985;
  color: #ffffff;
}

.course-error {
  background: #fff1f2;
  color: #991b1b;
}`,
      explanation:
        "Warna bukan dipilih karena terlihat lebih gelap atau lebih cantik, tetapi karena text masih terbaca pada background-nya. Contoh ini membuat meta text, action, dan error memiliki pasangan foreground-background yang jelas. Saat token digunakan kembali pada surface lain, ukur ulang; warna yang lolos di white card belum tentu cukup pada tint, image, atau dark theme.",
    },
    {
      id: "color-contrast-coding-practice",
      type: "coding-practice",
      challengeId: "fix-course-contrast-states",
    },
    {
      id: "color-contrast-quick-check",
      type: "quick-check",
      question:
        "Saat memeriksa contrast error message, pasangan yang harus diuji terlebih dahulu adalah",
      options: [
        "Warna text error terhadap background tempat error itu dirender.",
        "Warna error terhadap warna brand utama tanpa melihat surface.",
        "Warna border card terhadap warna browser chrome.",
        "Warna error hanya pada design file tanpa mengecek UI state.",
      ],
      correctAnswer:
        "Warna text error terhadap background tempat error itu dirender.",
      explanation:
        "Contrast selalu terjadi antara dua warna yang bertemu pada UI nyata. Error dapat berada pada page putih, tinted panel, dark theme, atau inline field, sehingga setiap context perlu ditinjau.",
    },
    {
      id: "color-contrast-callout",
      type: "callout",
      variant: "important",
      title: "Tool memberi angka, bukan keputusan product lengkap",
      content:
        "Contrast checker berguna untuk menemukan rasio, tetapi ia tidak memahami apakah text itu penting, apakah state hanya dibedakan lewat warna, atau apakah focus ring tertutup background. Gunakan angka untuk memulai review, lalu baca UI sebagai user: apakah label, error, action, dan status masih jelas pada semua state yang relevan?",
    },
    {
      id: "color-contrast-summary",
      type: "summary",
      points: [
        "Contrast adalah hubungan foreground dan background pada UI nyata.",
        "Text normal, action, error, link, dan focus indicator perlu diperiksa pada state serta theme yang dipakai.",
        "Rasio awal yang praktis untuk text normal adalah 4.5:1, bukan alasan untuk mengabaikan keterbacaan visual.",
        "Jangan menyampaikan informasi penting hanya lewat perubahan warna.",
        "Berikutnya, form error memerlukan label, description, pesan yang jelas, dan jalur kembali ke field yang perlu diperbaiki.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "color-contrast-intro",
      "color-contrast-example",
      "color-contrast-coding-practice",
      "color-contrast-quick-check",
      "color-contrast-summary",
    ],
  },
};

export const accessibleFormErrorsLesson: Lesson = {
  id: "accessible-form-errors",
  trackId: "frontend-engineering",
  moduleId: "accessibility-testing-preferences",
  title: "Accessible Form Errors",
  slug: "accessible-form-errors",
  description:
    "Membuat error form yang menyebut field, masalah, perbaikan, dan jalur focus yang dapat ditemukan user.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menghubungkan label, instruction, dan error dengan field yang tepat",
    "Menulis pesan error yang menyebut masalah serta cara memperbaikinya",
    "Membedakan inline error dari error summary setelah submit",
    "Menentukan focus strategy setelah validation gagal tanpa membuat feedback berulang",
  ],
  skillTags: ["Forms", "Validation UX", "Error Messages", "ARIA", "Accessibility"],
  blocks: [
    {
      id: "accessible-form-errors-intro",
      type: "text",
      title: "Error harus membantu user kembali ke pekerjaan",
      content:
        "Error form yang accessible menjawab tiga hal: field mana yang bermasalah, apa yang salah, dan bagaimana memperbaikinya. Label tetap menjadi nama field; instruction memberi format sebelum user mengisi; inline error menjelaskan masalah saat terjadi. Setelah submit gagal, error summary di bagian awal form membantu user menemukan semua issue, terutama pada form panjang. Summary dapat memiliki link ke field terkait, sementara focus dipindahkan secara sengaja ke summary atau field error pertama sesuai perubahan UI dan scope form. Jangan memberi border merah saja, jangan memakai placeholder sebagai label, dan jangan mengumumkan setiap ketikan sebagai error mendesak.",
    },
    {
      id: "accessible-form-errors-example",
      type: "code-example",
      title: "Label, instruction, dan error berada dalam satu relationship",
      language: "tsx",
      code: `function EnrollmentEmail({ hasError }: { hasError: boolean }) {
  return (
    <div>
      <label htmlFor="enrollment-email">Alamat email</label>
      <p id="enrollment-email-hint">Gunakan alamat email yang masih aktif.</p>
      <input
        id="enrollment-email"
        name="email"
        type="email"
        aria-invalid={hasError}
        aria-describedby={
          hasError
            ? "enrollment-email-hint enrollment-email-error"
            : "enrollment-email-hint"
        }
      />
      {hasError ? (
        <p id="enrollment-email-error">
          Masukkan alamat email dengan format nama@domain.com.
        </p>
      ) : null}
    </div>
  );
}`,
      explanation:
        "Label memberi nama yang dapat dipakai visual user, voice input, screen reader, dan Testing Library. Instruction serta error dihubungkan lewat aria-describedby hanya saat relevan. aria-invalid menyatakan field tidak valid; ia bukan pengganti pesan text. Di form nyata, pastikan error summary, inline error, dan focus strategy tidak mengumumkan informasi sama secara berlebihan.",
    },
    {
      id: "accessible-form-errors-coding-practice",
      type: "coding-practice",
      challengeId: "improve-course-enrollment-errors",
    },
    {
      id: "accessible-form-errors-quick-check",
      type: "quick-check",
      question:
        "Setelah submit form panjang gagal dengan beberapa error, langkah yang paling membantu adalah",
      options: [
        "Tampilkan error summary yang jelas dan beri jalur ke field terkait, lalu pilih focus strategy yang dapat diuji.",
        "Ganti semua field menjadi merah tanpa text error agar form tetap ringkas.",
        "Hapus nilai yang sudah benar agar user memulai dari awal.",
        "Tampilkan alert browser untuk setiap field secara berurutan.",
      ],
      correctAnswer:
        "Tampilkan error summary yang jelas dan beri jalur ke field terkait, lalu pilih focus strategy yang dapat diuji.",
      explanation:
        "Summary membantu orientasi setelah submit, sedangkan inline error membantu saat user memperbaiki field tertentu. Nilai yang benar sebaiknya dipertahankan kecuali ada alasan keamanan yang kuat.",
    },
    {
      id: "accessible-form-errors-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menumpuk semua mekanisme pengumuman sekaligus",
      content:
        "Memindahkan focus ke summary, memakai role alert, aria-live, dan menampilkan beberapa inline error sekaligus dapat membuat screen reader membaca pesan berulang. Tentukan perubahan apa yang perlu diketahui sekarang, pilih satu strategy yang sesuai, lalu uji dengan keyboard serta screen reader. Semakin banyak ARIA tidak otomatis semakin jelas.",
    },
    {
      id: "accessible-form-errors-summary",
      type: "summary",
      points: [
        "Label memberi nama field; placeholder tidak menggantikannya.",
        "Instruction muncul sebelum dibutuhkan, sementara error menyebut masalah dan perbaikannya.",
        "aria-invalid dan aria-describedby memperjelas state serta relationship, bukan menggantikan pesan text.",
        "Error summary membantu orientasi setelah submit gagal; inline error membantu perbaikan field.",
        "Berikutnya, UI yang accessible juga menghormati preference user ketika motion dapat mengganggu atau tidak diperlukan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "accessible-form-errors-intro",
      "accessible-form-errors-example",
      "accessible-form-errors-coding-practice",
      "accessible-form-errors-quick-check",
      "accessible-form-errors-summary",
    ],
  },
};

export const reducedMotionLesson: Lesson = {
  id: "reduced-motion",
  trackId: "frontend-engineering",
  moduleId: "accessibility-testing-preferences",
  title: "Reduced Motion",
  slug: "reduced-motion",
  description:
    "Mengurangi motion non-esensial ketika user meminta interface yang lebih tenang.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan preference reduced motion dan alasan UI perlu menghormatinya",
    "Membedakan motion esensial dari animation dekoratif atau transisi non-esensial",
    "Menambahkan CSS fallback untuk hover, transition, dan animation yang berlebihan",
    "Menguji preference melalui browser atau operating system sebelum menandai task selesai",
  ],
  skillTags: ["CSS", "prefers-reduced-motion", "User Preferences", "Accessibility"],
  blocks: [
    {
      id: "reduced-motion-intro",
      type: "text",
      title: "Motion bukan selalu feedback yang netral",
      content:
        "Scale, slide, parallax, auto-play, dan animation berulang dapat membuat beberapa user tidak nyaman atau sulit mempertahankan fokus. prefers-reduced-motion memberi browser sinyal bahwa user memilih mengurangi motion non-esensial. Preference ini bukan perintah untuk menghapus setiap transition secara membabi buta. Pertahankan perubahan yang benar-benar menyampaikan informasi atau fungsi penting, tetapi ganti gerakan dekoratif dengan state yang lebih tenang, misalnya perubahan opacity, text status, atau tampilan langsung tanpa perjalanan visual panjang.",
    },
    {
      id: "reduced-motion-example",
      type: "code-example",
      title: "Kurangi hover movement dan badge animation",
      language: "css",
      code: `.course-card {
  transition: transform 240ms ease, box-shadow 240ms ease;
}

.course-card:hover {
  transform: translateY(-4px);
}

.completion-badge {
  animation: celebrate 900ms ease-in-out infinite alternate;
}

@media (prefers-reduced-motion: reduce) {
  .course-card {
    transition: none;
  }

  .course-card:hover {
    transform: none;
  }

  .completion-badge {
    animation: none;
  }
}`,
      explanation:
        "Default UI masih memberi feedback ringan. Saat preference reduce aktif, card tidak lagi bergerak dan badge tidak berdenyut terus-menerus. Completion tetap dapat dibaca dari text serta warna, jadi informasi tidak hilang bersama animation. Bila animation diperlukan untuk menjelaskan perubahan data atau lokasi focus, sediakan alternatif yang sama jelasnya.",
    },
    {
      id: "reduced-motion-coding-practice",
      type: "coding-practice",
      challengeId: "reduce-course-card-motion",
    },
    {
      id: "reduced-motion-quick-check",
      type: "quick-check",
      question:
        "Mana perubahan yang paling tepat saat prefers-reduced-motion: reduce aktif?",
      options: [
        "Kurangi motion dekoratif dan pastikan informasi state tetap tersedia tanpa gerakan itu.",
        "Sembunyikan semua feedback success agar tidak ada perubahan visual.",
        "Tambahkan animation lebih cepat supaya segera selesai.",
        "Matikan keyboard focus karena focus ring juga bergerak di antara control.",
      ],
      correctAnswer:
        "Kurangi motion dekoratif dan pastikan informasi state tetap tersedia tanpa gerakan itu.",
      explanation:
        "Preference reduce berfokus pada motion non-esensial. Status, feedback, dan focus tetap perlu tersedia dengan cara yang dapat dipahami tanpa animation panjang atau kuat.",
    },
    {
      id: "reduced-motion-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan mengandalkan global reset tanpa memahami UI",
      content:
        "Rule global yang mematikan semua animation dapat merusak transition yang memang membantu memahami perubahan, termasuk dialog yang baru muncul atau progress yang sedang berjalan. Mulai dari motion yang paling mencolok, audit purpose-nya, lalu uji alternate behavior. Hindari juga animation yang dimulai otomatis dan berjalan terus tanpa control user.",
    },
    {
      id: "reduced-motion-summary",
      type: "summary",
      points: [
        "prefers-reduced-motion membaca preference user dari device atau browser.",
        "Kurangi motion dekoratif, auto-play, serta movement yang tidak diperlukan untuk memahami task.",
        "Informasi success, error, focus, dan progress tetap harus jelas tanpa animation.",
        "Uji setting reduce pada environment nyata, bukan hanya membaca CSS selector.",
        "Berikutnya, screen reader smoke test membantu kita mendengar structure dan feedback yang tidak selalu terlihat di UI visual.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "reduced-motion-intro",
      "reduced-motion-example",
      "reduced-motion-coding-practice",
      "reduced-motion-quick-check",
      "reduced-motion-summary",
    ],
  },
};

export const screenReaderBasicsLesson: Lesson = {
  id: "screen-reader-basics",
  trackId: "frontend-engineering",
  moduleId: "accessibility-testing-preferences",
  title: "Screen Reader Basics",
  slug: "screen-reader-basics",
  description:
    "Melakukan smoke test kecil untuk mendengar structure, nama control, error, dan feedback yang dialami user screen reader.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan tujuan smoke test screen reader yang realistis untuk frontend engineer",
    "Membaca heading, landmark, label control, dan error sebagai information structure",
    "Menyusun checklist kecil untuk satu route atau feature",
    "Membedakan smoke test awal dari audit assistive technology yang menyeluruh",
  ],
  skillTags: ["Screen Reader", "Semantic HTML", "Forms", "Accessibility Testing"],
  blocks: [
    {
      id: "screen-reader-basics-intro",
      type: "text",
      title: "Dengarkan informasi, bukan hanya tampilan",
      content:
        "Screen reader mengandalkan semantics, accessible name, relationship, dan perubahan UI yang terdeteksi teknologi bantu. Smoke test bukan tuntutan untuk menjadi ahli semua screen reader. Tujuannya adalah menemukan masalah besar sebelum feature dikirim: heading tidak logis, landmark hilang, button tidak memiliki nama, input tanpa label, error tidak memberi petunjuk, atau focus berpindah ke tempat yang membingungkan. Pilih satu route, lakukan task nyata dengan keyboard, lalu dengarkan apakah structure serta feedback mendukung task yang sama seperti UI visual.",
    },
    {
      id: "screen-reader-basics-example",
      type: "code-example",
      title: "Structure kecil yang dapat dinavigasi sebagai informasi",
      language: "html",
      code: `<main>
  <h1>Daftar course</h1>
  <p>Temukan lesson yang ingin kamu lanjutkan.</p>

  <section aria-labelledby="saved-courses-heading">
    <h2 id="saved-courses-heading">Course tersimpan</h2>
    <ul>
      <li><a href="/lesson/color-contrast">Color Contrast</a></li>
    </ul>
  </section>

  <form>
    <label for="course-email">Alamat email</label>
    <input id="course-email" type="email" />
    <button type="submit">Daftar update</button>
  </form>
</main>`,
      explanation:
        "Heading memberi outline, section memiliki nama, link menyebut destination, dan input memiliki label. Mulai smoke test dengan memeriksa hal sederhana seperti ini sebelum mengejar pattern ARIA yang kompleks. Bila nama dan struktur dasar tidak masuk akal ketika dibaca, visual polish tidak akan memperbaiki experience non-visual.",
    },
    {
      id: "screen-reader-basics-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih satu route pada local project atau FluentStack. Tulis rencana screen reader smoke test yang menyebut task user, heading atau landmark yang akan diperiksa, control yang harus memiliki nama jelas, feedback atau error yang perlu didengar, serta satu batasan dari test singkat ini. Jangan menulis hasil yang belum kamu amati sebagai fakta.",
      placeholder:
        "Saya akan memeriksa route daftar course. Task-nya adalah menemukan course tersimpan lalu mendaftar update. Saya akan menavigasi heading untuk memastikan h1 dan h2 menjelaskan area page, lalu memeriksa landmark main dan section. Saya akan memastikan link course menyebut tujuan serta input email dibaca dengan label yang benar. Saya akan submit email kosong untuk memeriksa apakah error menyebut field dan cara memperbaikinya. Test singkat ini belum membuktikan semua kombinasi screen reader, browser, dan platform.",
      minimumCharacters: 500,
      checklist: [
        "Menyebut satu route dan task user yang konkret.",
        "Menyebut heading atau landmark yang akan diperiksa.",
        "Menyebut nama link, button, atau form control yang perlu didengar.",
        "Menyebut feedback atau error yang perlu diuji.",
        "Menyebut batasan smoke test secara jujur.",
      ],
      modelAnswer:
        "Saya akan melakukan smoke test pada route profile learner dengan task mengubah alamat email dan menyimpan perubahan. Saya mulai dari heading untuk memastikan page memiliki h1 yang menjelaskan profile dan heading berikutnya membagi section akun secara logis. Saya akan memeriksa landmark main, link kembali ke dashboard, label alamat email, serta nama button Simpan perubahan. Saya lalu submit nilai email yang salah dan mendengarkan apakah error menyebut alamat email, menjelaskan format yang diminta, dan membawa saya ke summary atau field yang tepat. Setelah submit benar, saya akan memeriksa feedback tersimpan. Smoke test ini hanya memberi sinyal awal pada kombinasi browser dan screen reader yang saya pakai; ia bukan bukti semua assistive technology atau seluruh WCAG sudah lolos.",
    },
    {
      id: "screen-reader-basics-quick-check",
      type: "quick-check",
      question:
        "Tujuan paling tepat dari screen reader smoke test awal adalah",
      options: [
        "Menemukan hambatan besar pada structure, nama control, focus, dan feedback sebelum feature dikirim.",
        "Membuktikan aplikasi memenuhi semua versi WCAG dan semua screen reader dunia.",
        "Menggantikan keyboard test serta review visual sepenuhnya.",
        "Memilih suara screen reader yang terdengar paling nyaman untuk semua user.",
      ],
      correctAnswer:
        "Menemukan hambatan besar pada structure, nama control, focus, dan feedback sebelum feature dikirim.",
      explanation:
        "Smoke test memberi feedback awal yang sangat berharga, tetapi tetap perlu digabung dengan keyboard testing, visual review, automated checks, dan bila perlu evaluasi lebih luas oleh user berpengalaman.",
    },
    {
      id: "screen-reader-basics-callout",
      type: "callout",
      variant: "important",
      title: "Hasil test perlu menyebut environment",
      content:
        "Catat browser, operating system, screen reader, dan task yang kamu coba. Behavior dapat berbeda antar kombinasi. Catatan kecil seperti “Chrome + VoiceOver, route profile, submit form kosong” membuat report dapat diulang dan tidak terdengar seperti klaim universal.",
    },
    {
      id: "screen-reader-basics-summary",
      type: "summary",
      points: [
        "Screen reader smoke test mendengar heading, landmark, accessible name, error, serta feedback task nyata.",
        "Mulai dari satu route dan satu journey, bukan audit semua aplikasi sekaligus.",
        "Catat environment serta apa yang benar-benar kamu amati.",
        "Smoke test tidak menggantikan keyboard QA, visual review, atau evaluasi yang lebih menyeluruh.",
        "Berikutnya, browser tools dan automated checks memberi sinyal tambahan, tetapi tetap memiliki batas yang perlu kita pahami.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "screen-reader-basics-intro",
      "screen-reader-basics-example",
      "screen-reader-basics-writing-practice",
      "screen-reader-basics-quick-check",
      "screen-reader-basics-summary",
    ],
  },
};

export const accessibilityTestingToolsLesson: Lesson = {
  id: "accessibility-testing-tools",
  trackId: "frontend-engineering",
  moduleId: "accessibility-testing-preferences",
  title: "Testing Tools",
  slug: "accessibility-testing-tools",
  description:
    "Menggabungkan browser inspection, automated checks, manual walkthrough, dan accessible query menjadi satu test pass yang realistis.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan masalah yang dapat ditemukan tool dari masalah yang harus diamati manual",
    "Menjalankan test pass kecil yang dimulai dari task user",
    "Menggunakan Testing Library query sebagai feedback terhadap semantics dan labels",
    "Menulis finding accessibility dengan severity, langkah reproduksi, dan sisa risiko",
  ],
  skillTags: ["Browser DevTools", "Testing Library", "Accessibility Audit", "Manual QA"],
  blocks: [
    {
      id: "accessibility-testing-tools-intro",
      type: "text",
      title: "Tool menemukan sinyal, user journey membuktikan kegunaan",
      content:
        "Browser accessibility inspection dan automated checker dapat menemukan missing label, role yang tidak sesuai, DOM issue, atau contrast candidate. Namun tool tidak tahu apakah copy error membantu, urutan Tab mengikuti task, dialog mengembalikan focus dengan tepat, atau animation terasa mengganggu. Jalankan test pass dari task user: buka route, gunakan keyboard, lihat focus, submit form yang salah, aktifkan reduced motion bila ada animation, lalu inspeksi semantic tree dan automated findings. Gunakan tool untuk mempercepat discovery, bukan untuk menandai accessibility selesai secara otomatis.",
    },
    {
      id: "accessibility-testing-tools-example",
      type: "code-example",
      title: "Accessible query membaca contract yang dialami user",
      language: "ts",
      code: `import { screen } from "@testing-library/react";

export function assertEnrollmentForm() {
  const email = screen.getByLabelText("Alamat email");
  const submit = screen.getByRole("button", {
    name: "Daftar course",
  });

  return { email, submit };
}`,
      explanation:
        "getByLabelText menuntut input memiliki label yang bisa ditemukan, sementara getByRole memakai role dan accessible name seperti yang dibaca teknologi bantu. Query ini tidak menggantikan screen reader test, tetapi failure query sering menunjukkan semantic atau labeling contract yang perlu diperbaiki. Jangan kembali ke selector class hanya agar test cepat hijau.",
    },
    {
      id: "accessibility-testing-tools-coding-practice",
      type: "coding-practice",
      challengeId: "test-course-enrollment-with-accessible-queries",
    },
    {
      id: "accessibility-testing-tools-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis accessibility test pass singkat untuk feature Daftar course. Susun urutan test dari task user, keyboard walkthrough, visual contrast atau focus check, form error, inspection atau automated check, dan satu assertion Testing Library. Tambahkan satu hal yang belum dapat dibuktikan oleh automated tool saja.",
      placeholder:
        "Saya membuka Daftar course, menekan Tab sampai field email dan button submit, lalu memastikan focus terlihat. Saya mengirim email kosong untuk memeriksa error summary, inline error, serta link kembali ke field. Saya memeriksa contrast text error dan action pada theme yang dipakai. Saya memakai browser accessibility inspection untuk label dan role. Di test, saya memakai getByLabelText untuk email dan getByRole untuk submit. Tool tidak dapat membuktikan bahwa copy error jelas atau seluruh journey keyboard terasa masuk akal.",
      minimumCharacters: 600,
      checklist: [
        "Dimulai dari task user yang spesifik.",
        "Menyebut keyboard serta focus walkthrough.",
        "Menyebut form error atau visual check yang relevan.",
        "Menyebut browser inspection atau automated checker sebagai sinyal.",
        "Menyebut accessible query serta satu batas automated tool.",
      ],
      modelAnswer:
        "Saya menguji feature Daftar course dari journey learner: buka route, baca title dan description, lalu gunakan Tab sampai field Alamat email dan button Daftar course. Saya pastikan focus terlihat, urutannya logis, dan seluruh control dapat dipakai tanpa mouse. Saya submit email kosong untuk melihat apakah error summary memberi arah, inline error menyebut format yang benar, dan link summary membawa kembali ke field. Saya memeriksa contrast action dan error pada theme route, lalu membuka browser accessibility inspection untuk melihat nama input, role button, serta relationship error. Di component test, saya memakai getByLabelText('Alamat email') dan getByRole('button', { name: 'Daftar course' }). Automated checker serta query tidak dapat membuktikan semua wording error mudah dipahami atau seluruh screen reader workflow nyaman, jadi saya tetap melakukan walkthrough manual dan smoke test singkat.",
    },
    {
      id: "accessibility-testing-tools-quick-check",
      type: "quick-check",
      question:
        "Finding mana yang paling mungkin terlewat bila tim hanya mengandalkan automated checker?",
      options: [
        "Tab order mengikuti layout yang membingungkan walau semua control masih dapat di-focus.",
        "Input tidak memiliki id sama sekali.",
        "Tag img tanpa attribute alt.",
        "Element memakai role yang tidak dikenali browser.",
      ],
      correctAnswer:
        "Tab order mengikuti layout yang membingungkan walau semua control masih dapat di-focus.",
      explanation:
        "Tool dapat melaporkan banyak issue markup, tetapi urutan task, kejelasan copy, focus return, dan kualitas interaction sering membutuhkan walkthrough manusia.",
    },
    {
      id: "accessibility-testing-tools-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Skor tool bukan bukti conformance",
      content:
        "Laporan tanpa error bukan sertifikat bahwa page dapat digunakan semua orang. Tool memiliki aturan yang terbatas dan tidak mengetahui intent product. Simpan finding dengan route, task, langkah reproduksi, dampak user, perbaikan yang dicoba, dan test ulang yang dilakukan agar review dapat ditindaklanjuti tim.",
    },
    {
      id: "accessibility-testing-tools-summary",
      type: "summary",
      points: [
        "Mulai test pass dari task user, lalu gabungkan keyboard, visual review, inspection, automated checker, dan test code.",
        "Testing Library accessible query memberi feedback berguna pada label, role, serta accessible name.",
        "Automated tools menemukan candidate issue, bukan seluruh usability accessibility.",
        "Report yang baik menyebut environment, langkah reproduksi, dampak, fix, dan sisa risiko.",
        "Uji Kompetensi berikutnya menggabungkan contrast, form errors, reduced motion, screen reader smoke test, dan tooling pada satu readiness checkpoint.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "accessibility-testing-tools-intro",
      "accessibility-testing-tools-example",
      "accessibility-testing-tools-coding-practice",
      "accessibility-testing-tools-writing-practice",
      "accessibility-testing-tools-quick-check",
      "accessibility-testing-tools-summary",
    ],
  },
};

export const accessibilityTestingPreferencesAssessmentLesson: Lesson = {
  id: "accessibility-testing-preferences-assessment",
  trackId: "frontend-engineering",
  moduleId: "accessibility-testing-preferences",
  title: "Uji Kompetensi Accessibility Testing and Preferences",
  slug: "accessibility-testing-preferences-assessment",
  description:
    "Membuktikan kesiapan menjalankan accessibility test pass kecil, memperbaiki form feedback, dan menjelaskan batas automated tooling.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Mengaudit contrast, form error, motion, dan semantic feedback pada satu flow",
    "Membuat form validation feedback yang dapat ditemukan keyboard serta screen reader",
    "Menyusun test plan yang menggabungkan manual dan automated checks",
    "Menjelaskan confidence dan sisa risiko secara user-centered",
  ],
  skillTags: ["Accessibility Testing", "Forms", "Reduced Motion", "Testing Library", "Readiness Checkpoint"],
  blocks: [
    {
      id: "accessibility-testing-preferences-assessment-recap",
      type: "text",
      title: "Checkpoint: accessibility perlu dibuktikan lewat task, bukan sekadar checklist hijau",
      content:
        "Feature Daftar update course memiliki text meta yang sangat samar, email field tanpa relationship ke error, success badge yang terus bergerak, dan component test yang mencari class CSS. Sebelum mengubah kode, tentukan journey learner: menemukan form, mengisi email, menerima error jika data salah, memperbaiki field, lalu menerima feedback berhasil. Audit contrast pada surface yang dipakai, pastikan label dan error dapat ditemukan, hormati reduced motion, dan tulis apa yang automated check belum dapat buktikan. Checkpoint ini tidak meminta audit WCAG penuh; ia meminta test pass kecil yang dapat dijelaskan dan diulang.",
    },
    {
      id: "accessibility-testing-preferences-assessment-quiz",
      type: "quiz",
      quizId: "accessibility-testing-preferences-assessment-quiz",
    },
    {
      id: "accessibility-testing-preferences-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-accessible-course-signup-checkpoint",
    },
    {
      id: "accessibility-testing-preferences-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis accessibility test report singkat untuk flow Daftar update course. Sebutkan environment, task user, minimal tiga pemeriksaan dari keyboard/contrast/form error/reduced motion/screen reader/inspection, satu finding dengan dampak user dan perbaikannya, satu accessible query yang akan dipakai di test, serta satu risiko yang belum dibuktikan. Gunakan bahasa yang jelas bagi engineer lain, bukan klaim bahwa feature sudah sepenuhnya compliant.",
      placeholder:
        "Environment: Chrome terbaru, macOS, keyboard, dan preference Reduce Motion aktif. Task: daftar update dengan email. Saya memeriksa Tab dan focus ring menuju email serta submit, contrast label/error terhadap background, error summary dan inline error setelah submit kosong, lalu reduced motion pada completion badge. Finding: error sebelumnya hanya border merah; user screen reader tidak tahu field mana yang salah. Fix: label, aria-invalid, aria-describedby, text error, dan summary fokus. Test memakai getByLabelText('Alamat email') dan getByRole('button', { name: 'Daftar update' }). Risiko: saya belum menguji kombinasi screen reader dan browser lain.",
      minimumCharacters: 800,
      checklist: [
        "Menyebut environment dan task user.",
        "Menyebut tiga atau lebih pemeriksaan yang relevan.",
        "Menulis finding, dampak user, dan perbaikan yang dapat diverifikasi.",
        "Menyebut accessible query Testing Library yang sesuai.",
        "Menyebut satu risiko atau batas confidence yang belum terbukti.",
      ],
      modelAnswer:
        "Environment saya adalah Chrome versi terbaru di macOS dengan keyboard; saya juga mengaktifkan Reduce Motion pada system setting untuk menguji alternate behavior. Task user adalah membuka page Daftar update course, mengisi email, dan mengirim form. Saya mulai dari Tab untuk memastikan link, email field, dan button memiliki urutan serta focus ring yang terlihat. Saya memeriksa contrast label, meta text, action, serta error terhadap background page. Lalu saya submit email kosong dan memeriksa apakah error summary dapat ditemukan, inline error menjelaskan format yang dibutuhkan, dan link summary mengarah ke field email. Saya mengaktifkan reduced motion untuk memastikan badge success tidak terus bergerak. Finding utama: error sebelumnya hanya ditunjukkan border merah sehingga user yang tidak membedakan warna atau memakai screen reader tidak mendapat alasan maupun perbaikan. Saya menambahkan label, aria-invalid, aria-describedby ke hint dan error, text error, serta summary yang menerima focus setelah submit gagal. Di component test saya memakai screen.getByLabelText('Alamat email') dan screen.getByRole('button', { name: 'Daftar update' }). Saya belum membuktikan behavior semua kombinasi screen reader dan browser, jadi hasil ini adalah confidence awal yang perlu diperluas bila feature berubah atau digunakan pada platform lain.",
    },
    {
      id: "accessibility-testing-preferences-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs sebagai panduan test pass, bukan daftar aturan tanpa context",
      description:
        "Buka satu atau dua sumber sesuai finding yang kamu miliki. Fokus pada task serta component yang sedang diperbaiki, lalu coba ulang langkahnya pada project lokal. Jangan mencoba menyelesaikan seluruh WCAG atau semua pattern assistive technology dalam satu sesi.",
      links: [
        {
          source: "W3C WAI",
          title: "Understanding Contrast (Minimum)",
          url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum",
          focus: [
            "Mengapa text normal membutuhkan contrast foreground-background yang cukup.",
            "Pengecualian text besar dan alasan tidak memakainya untuk body copy biasa.",
            "Memeriksa pasangan warna pada surface serta state yang benar-benar dirender.",
          ],
          ignoreForNow: [
            "Seluruh teknik WCAG, legal compliance, dan audit conformance lengkap.",
          ],
        },
        {
          source: "W3C WAI",
          title: "Forms Tutorial: User Notification",
          url: "https://www.w3.org/WAI/tutorials/forms/notifications/",
          focus: [
            "Perbedaan feedback keseluruhan dan inline feedback pada form.",
            "Error summary, link menuju field, serta error text yang memberi perbaikan.",
            "Relationship error dengan form control melalui aria-describedby bila relevan.",
          ],
          ignoreForNow: [
            "Alert dialog custom dan live region assertive yang kompleks.",
          ],
        },
        {
          source: "MDN",
          title: "prefers-reduced-motion",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion",
          focus: [
            "Media query dengan value reduce.",
            "Mengurangi atau mengganti animation non-esensial.",
            "Menguji preference melalui setting device atau browser.",
          ],
          ignoreForNow: [
            "Client hint preference dan override experimental di browser.",
          ],
        },
        {
          source: "W3C WAI",
          title: "Easy Checks: A First Review of Web Accessibility",
          url: "https://www.w3.org/WAI/test-evaluate/easy-checks/",
          focus: [
            "Visible keyboard focus, labels, required fields, dan basic structure.",
            "Mengapa quick checks hanya menemukan sebagian issue.",
            "Mengubah finding menjadi langkah test yang dapat diulang.",
          ],
          ignoreForNow: [
            "Menganggap quick checks sebagai audit lengkap atau certification.",
          ],
        },
        {
          source: "Testing Library",
          title: "About Queries: ByRole and ByLabelText",
          url: "https://testing-library.com/docs/queries/about/",
          focus: [
            "Role dan accessible name sebagai contract user-facing.",
            "Kapan label query tepat untuk input form.",
            "Membaca query failure sebagai signal semantic atau label yang belum baik.",
          ],
          ignoreForNow: [
            "Memeriksa semua detail implementation atau selector CSS internal.",
          ],
        },
      ],
      followUpAction:
        "Pilih satu route local atau deployed yang memiliki form atau component interaktif. Jalankan test pass: keyboard, focus, contrast, error feedback, reduced motion bila ada, inspection, dan satu accessible query. Tulis finding, fix, serta satu risiko yang belum dapat dibuktikan. Jangan tandai selesai hanya karena automated checker tidak menemukan error.",
    },
    {
      id: "accessibility-testing-preferences-assessment-summary",
      type: "summary",
      points: [
        "Kamu dapat memeriksa contrast pada text serta UI state yang benar-benar dipakai user.",
        "Kamu dapat membuat form error yang menyebut field, masalah, perbaikan, dan relationship yang tepat.",
        "Kamu dapat menghormati reduced motion tanpa menghilangkan informasi penting dari UI.",
        "Kamu dapat menjalankan smoke test screen reader serta test pass yang menggabungkan manual review, tools, dan accessible query.",
        "Kamu dapat menjelaskan batas automated tooling dan sisa risiko tanpa membuat klaim conformance yang berlebihan.",
        "Level berikutnya, Frontend Architecture, memindahkan quality practices ini ke struktur feature, component ownership, dan dependency yang lebih mudah dirawat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "accessibility-testing-preferences-assessment-recap",
      "accessibility-testing-preferences-assessment-quiz",
      "accessibility-testing-preferences-assessment-coding-practice",
      "accessibility-testing-preferences-assessment-writing-practice",
      "accessibility-testing-preferences-assessment-documentation-bridge",
      "accessibility-testing-preferences-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const accessibilityTestingPreferencesAssessmentQuiz: Quiz = {
  id: "accessibility-testing-preferences-assessment-quiz",
  lessonId: "accessibility-testing-preferences-assessment",
  title: "Uji Kompetensi Accessibility Testing and Preferences",
  passingScore: 70,
  questions: [
    {
      id: "contrast-pair",
      type: "multiple-choice",
      question: "Apa yang dimaksud contrast pada UI?",
      options: [
        "Hubungan warna foreground dan background pada state atau surface yang benar-benar dirender.",
        "Jumlah warna brand yang dipakai pada satu page.",
        "Perbedaan warna di antara dua file CSS.",
        "Warna yang paling menonjol menurut designer.",
      ],
      correctAnswer:
        "Hubungan warna foreground dan background pada state atau surface yang benar-benar dirender.",
      explanation:
        "Text, icon, border, dan focus ring perlu diperiksa terhadap background yang sama dengan yang dilihat user. Satu token warna dapat memberi rasio berbeda pada surface berbeda.",
    },
    {
      id: "error-relationship",
      type: "multiple-choice",
      question:
        "Setelah email invalid terdeteksi, kombinasi mana yang paling membantu user memperbaikinya?",
      options: [
        "Label tetap jelas, error text menjelaskan masalah, aria-invalid menyatakan state, dan aria-describedby menghubungkan instruction serta error bila relevan.",
        "Placeholder merah tanpa label atau text error.",
        "Menyembunyikan submit button sampai email menjadi benar.",
        "Menghapus nilai field saat validation gagal.",
      ],
      correctAnswer:
        "Label tetap jelas, error text menjelaskan masalah, aria-invalid menyatakan state, dan aria-describedby menghubungkan instruction serta error bila relevan.",
      explanation:
        "Setiap bagian memiliki peran: label memberi nama, text error memberi alasan serta perbaikan, dan ARIA menghubungkan state atau description. Tidak satu pun menggantikan yang lain.",
    },
    {
      id: "error-summary-focus",
      type: "multiple-choice",
      question:
        "Mengapa error summary berguna setelah submit form panjang gagal?",
      options: [
        "Ia memberi orientasi terhadap semua issue dan dapat membawa user kembali ke field terkait.",
        "Ia menghapus kebutuhan inline error pada field.",
        "Ia membuat form tidak perlu label lagi.",
        "Ia membuktikan screen reader pasti akan membaca semua pesan dengan urutan yang sama.",
      ],
      correctAnswer:
        "Ia memberi orientasi terhadap semua issue dan dapat membawa user kembali ke field terkait.",
      explanation:
        "Summary dan inline error saling melengkapi. Strategy focus serta announcement tetap harus dipilih dan diuji sesuai behavior form.",
    },
    {
      id: "reduced-motion-purpose",
      type: "multiple-choice",
      question:
        "Apa respons yang tepat ketika user memilih reduced motion?",
      options: [
        "Kurangi animation non-esensial sambil mempertahankan informasi dan action penting lewat alternatif yang jelas.",
        "Hapus semua status success, error, dan progress dari interface.",
        "Percepat semua animation agar user tidak sempat melihatnya.",
        "Menonaktifkan keyboard focus agar page terasa lebih diam.",
      ],
      correctAnswer:
        "Kurangi animation non-esensial sambil mempertahankan informasi dan action penting lewat alternatif yang jelas.",
      explanation:
        "Reduced motion menghormati preference user tanpa membuang feedback penting. Review mana motion yang dekoratif, mana yang menyampaikan informasi, dan bagaimana alternatifnya dibaca.",
    },
    {
      id: "screen-reader-scope",
      type: "multiple-choice",
      question:
        "Pernyataan yang jujur tentang screen reader smoke test adalah",
      options: [
        "Ia membantu menemukan hambatan besar pada satu task dan environment, tetapi bukan audit semua platform atau conformance penuh.",
        "Ia membuktikan UI bekerja sama pada semua browser dan assistive technology.",
        "Ia menggantikan keyboard testing dan visual contrast review.",
        "Ia hanya berguna bila semua custom ARIA widget sudah selesai dibuat.",
      ],
      correctAnswer:
        "Ia membantu menemukan hambatan besar pada satu task dan environment, tetapi bukan audit semua platform atau conformance penuh.",
      explanation:
        "Catat environment, route, serta task yang diuji. Gabungkan hasilnya dengan review keyboard, visual, dan automated checks untuk membangun confidence yang lebih baik.",
    },
    {
      id: "tool-limit",
      type: "multiple-choice",
      question:
        "Masalah mana yang paling membutuhkan walkthrough manual walau automated checker tidak melapor error?",
      options: [
        "Urutan keyboard mengikuti journey yang membingungkan dan focus return membuat user kehilangan context.",
        "Attribute alt tidak ada pada gambar informatif.",
        "Input tidak memiliki label yang terhubung secara markup.",
        "HTML memiliki duplicate id yang terdeteksi linter.",
      ],
      correctAnswer:
        "Urutan keyboard mengikuti journey yang membingungkan dan focus return membuat user kehilangan context.",
      explanation:
        "Tool dapat mendeteksi banyak issue struktur, tetapi tidak memahami intent task, kejelasan interaction, atau apakah focus behavior membantu user menyelesaikan pekerjaan.",
    },
    {
      id: "accessible-query",
      type: "multiple-choice",
      question:
        "Query Testing Library yang paling sesuai untuk menemukan input email bernama Alamat email adalah",
      options: [
        'screen.getByLabelText("Alamat email")',
        'screen.getByTestId("input-2")',
        'container.querySelector(".email-field")',
        'screen.getAllByText("email")[0]',
      ],
      correctAnswer: 'screen.getByLabelText("Alamat email")',
      explanation:
        "Query label menegaskan bahwa input dapat ditemukan lewat nama yang dipakai user dan teknologi bantu. Bila query gagal, periksa label atau accessible naming sebelum memakai selector implementation detail.",
    },
  ],
};

export const fixCourseContrastStatesChallenge: CodingChallenge = {
  id: "fix-course-contrast-states",
  lessonId: "color-contrast",
  title: "Fix course contrast states",
  description:
    "Perbaiki warna text pendukung, action, dan error pada card course agar lebih mudah dibaca pada surface yang dipakai.",
  instructions: [
    "Fokus di tab CSS.",
    "Pertahankan background card putih dan gunakan .course-meta dengan color #475569.",
    "Gunakan .course-action dengan background #075985 dan color #ffffff.",
    "Gunakan .course-error dengan background #fff1f2 dan color #991b1b.",
    "Jangan hanya memperbaiki warna utama; baca juga error dan action sebagai state yang perlu dipahami user.",
    "Cek otomatis membaca selector serta property yang ditargetkan. Ia tidak menghitung semua ratio pada semua theme atau image background.",
  ],
  starterCode: {
    ...accessibilityTestingPracticeCode,
    html: `<article class="course-card">
  <p class="course-meta">Frontend Engineering - 24 menit</p>
  <h1>Color Contrast</h1>
  <p class="course-error">Email belum dapat digunakan.</p>
  <button class="course-action" type="button">Coba lagi</button>
</article>`,
    css: `.course-card {
  max-width: 440px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

.course-meta {
  color: #cbd5e1;
}

.course-action {
  padding: 10px 14px;
  border: 0;
  border-radius: 8px;
  background: #dbeafe;
  color: #93c5fd;
}

.course-error {
  padding: 10px 12px;
  background: #fff1f2;
  color: #fca5a5;
}`,
    js: "",
  },
  solutionCode: {
    ...accessibilityTestingPracticeCode,
    html: `<article class="course-card">
  <p class="course-meta">Frontend Engineering - 24 menit</p>
  <h1>Color Contrast</h1>
  <p class="course-error">Email belum dapat digunakan.</p>
  <button class="course-action" type="button">Coba lagi</button>
</article>`,
    css: `.course-card {
  max-width: 440px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}

.course-meta {
  color: #475569;
}

.course-action {
  padding: 10px 14px;
  border: 0;
  border-radius: 8px;
  background: #075985;
  color: #ffffff;
}

.course-error {
  padding: 10px 12px;
  background: #fff1f2;
  color: #991b1b;
}`,
    js: "",
  },
  checklist: [
    "Meta text memiliki contrast yang lebih jelas terhadap white card.",
    "Action memiliki foreground dan background yang dapat dibedakan.",
    "Error tidak hanya memakai warna; text tetap menjelaskan masalah.",
    "Warna diperiksa kembali saat token dipakai pada theme atau surface berbeda.",
    "Focus-visible, disabled, hover, dan image background masih perlu review tersendiri di product nyata.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "meta-selector", label: "Ada selector .course-meta.", type: "cssSelectorExists", target: ".course-meta" },
      { id: "meta-color", label: "Meta text memakai #475569.", type: "cssSelectorPropertyValue", target: ".course-meta", property: "color", valueIncludes: "#475569" },
      { id: "action-selector", label: "Ada selector .course-action.", type: "cssSelectorExists", target: ".course-action" },
      { id: "action-background", label: "Action memakai background #075985.", type: "cssSelectorPropertyValue", target: ".course-action", property: "background", valueIncludes: "#075985" },
      { id: "action-color", label: "Text action memakai #ffffff.", type: "cssSelectorPropertyValue", target: ".course-action", property: "color", valueIncludes: "#ffffff" },
      { id: "error-selector", label: "Ada selector .course-error.", type: "cssSelectorExists", target: ".course-error" },
      { id: "error-background", label: "Error memakai background #fff1f2.", type: "cssSelectorPropertyValue", target: ".course-error", property: "background", valueIncludes: "#fff1f2" },
      { id: "error-color", label: "Text error memakai #991b1b.", type: "cssSelectorPropertyValue", target: ".course-error", property: "color", valueIncludes: "#991b1b" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview contrast states",
    description:
      "Preview memperlihatkan card course dengan meta text, error, dan action yang lebih terbaca. Cek otomatis membaca property CSS terpilih; gunakan contrast checker untuk mengukur setiap kombinasi production yang lebih kompleks.",
    lines: [
      "Meta text tetap terbaca pada white surface.",
      "Action memiliki foreground dan background yang jelas.",
      "Error memakai text, bukan warna saja, untuk menjelaskan masalah.",
    ],
  },
  skillTags: ["CSS", "Color Contrast", "UI States", "Accessibility"],
};

export const improveCourseEnrollmentErrorsChallenge: CodingChallenge = {
  id: "improve-course-enrollment-errors",
  lessonId: "accessible-form-errors",
  title: "Improve course enrollment errors",
  description:
    "Hubungkan label, instruction, dan error email agar user dapat menemukan serta memperbaiki masalah form.",
  instructions: [
    "Fokus di tab HTML.",
    "Tambahkan label Alamat email yang terhubung ke input id course-email.",
    "Tambahkan instruction id course-email-hint sebelum input.",
    "Buat error summary dengan heading dan link menuju #course-email.",
    "Gunakan aria-invalid=true dan aria-describedby yang merujuk hint serta error pada input.",
    "Tambahkan pesan error id course-email-error yang menjelaskan format yang benar.",
    "Cek otomatis membaca structure HTML. Focus setelah submit dan announcement dinamis tetap diuji pada form runtime lokal.",
  ],
  starterCode: {
    ...accessibilityTestingPracticeCode,
    html: `<form>
  <p class="error">Email salah</p>
  <input type="email" placeholder="Alamat email" />
  <button type="submit">Daftar course</button>
</form>`,
    css: `.error {
  color: #991b1b;
}

input[aria-invalid="true"] {
  border: 2px solid #991b1b;
}`,
    js: "",
  },
  solutionCode: {
    ...accessibilityTestingPracticeCode,
    html: `<form>
  <section aria-labelledby="course-error-summary-title">
    <h2 id="course-error-summary-title">Periksa 1 field sebelum melanjutkan</h2>
    <ul>
      <li>
        <a href="#course-email">Alamat email: gunakan format nama@domain.com.</a>
      </li>
    </ul>
  </section>

  <label for="course-email">Alamat email</label>
  <p id="course-email-hint">Gunakan alamat email yang masih aktif.</p>
  <input
    id="course-email"
    name="email"
    type="email"
    aria-invalid="true"
    aria-describedby="course-email-hint course-email-error"
  />
  <p id="course-email-error" class="error">
    Masukkan alamat email dengan format nama@domain.com.
  </p>
  <button type="submit">Daftar course</button>
</form>`,
    css: `.error {
  color: #991b1b;
}

input[aria-invalid="true"] {
  border: 2px solid #991b1b;
}`,
    js: "",
  },
  checklist: [
    "Input memiliki label visible yang terhubung lewat for dan id.",
    "Instruction tersedia sebelum user membutuhkan format atau context tambahan.",
    "Error summary menyebut jumlah issue dan memberi link ke field terkait.",
    "aria-invalid menyatakan state invalid, sedangkan aria-describedby menghubungkan hint dan error.",
    "Pesan error menjelaskan masalah serta format perbaikan, bukan hanya menulis Email salah.",
    "Behavior submit, focus summary, dan screen reader announcement perlu diuji pada runtime lokal.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "email-label", label: "Ada label Alamat email.", type: "hasTextInElement", target: "label", valueIncludes: "Alamat email" },
      { id: "email-input", label: "Input memiliki id course-email.", type: "hasElementWithAttribute", target: "input", attribute: "id", valueIncludes: "course-email" },
      { id: "email-label-target", label: "Label mengarah ke course-email.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "course-email" },
      { id: "email-hint", label: "Ada instruction course-email-hint.", type: "hasElementWithAttribute", target: "p", attribute: "id", valueIncludes: "course-email-hint" },
      { id: "invalid-state", label: "Input menyatakan aria-invalid true.", type: "hasElementWithAttribute", target: "input", attribute: "aria-invalid", valueIncludes: "true" },
      { id: "describedby", label: "Input dihubungkan ke hint dan error.", type: "hasElementWithAttribute", target: "input", attribute: "aria-describedby", valueIncludes: "course-email-hint course-email-error" },
      { id: "email-error", label: "Ada pesan error course-email-error.", type: "hasElementWithAttribute", target: "p", attribute: "id", valueIncludes: "course-email-error" },
      { id: "error-summary", label: "Ada heading error summary.", type: "hasElementWithAttribute", target: "h2", attribute: "id", valueIncludes: "course-error-summary-title" },
      { id: "summary-link", label: "Summary mengarah ke course-email.", type: "hasElementWithAttribute", target: "a", attribute: "href", valueIncludes: "#course-email" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview form error structure",
    description:
      "Preview memperlihatkan error summary, label, instruction, dan error inline. Cek otomatis membaca relationship markup; lakukan submit runtime untuk memeriksa strategy focus serta announcement yang sebenarnya.",
    lines: [
      "Summary memberi jalur kembali ke field email.",
      "Input memiliki label dan instruction yang dapat ditemukan.",
      "Error menyebut alasan serta format perbaikan.",
    ],
  },
  skillTags: ["HTML", "Forms", "Error Summary", "ARIA", "Accessibility"],
};

export const reduceCourseCardMotionChallenge: CodingChallenge = {
  id: "reduce-course-card-motion",
  lessonId: "reduced-motion",
  title: "Reduce course card motion",
  description:
    "Tambahkan reduced-motion behavior agar card dan completion badge tidak bergerak tanpa kebutuhan ketika user meminta interface yang lebih tenang.",
  instructions: [
    "Fokus di tab CSS.",
    "Tambahkan media query @media (prefers-reduced-motion: reduce).",
    "Di dalamnya, hilangkan transition .course-card dengan transition: none.",
    "Hilangkan hover movement .course-card:hover dengan transform: none.",
    "Hentikan animation .completion-badge dengan animation: none.",
    "Pertahankan text completion agar status tetap dapat dipahami tanpa animation.",
    "Cek otomatis membaca rule CSS. Aktifkan Reduce Motion pada device atau browser untuk menguji behavior preview yang sebenarnya.",
  ],
  starterCode: {
    ...accessibilityTestingPracticeCode,
    html: `<article class="course-card">
  <p class="completion-badge">Selesai</p>
  <h1>Reduced Motion</h1>
  <p>Pelajari cara menghormati preference motion user.</p>
</article>`,
    css: `.course-card {
  max-width: 440px;
  padding: 24px;
  border: 1px solid #94a3b8;
  border-radius: 12px;
  transition: transform 240ms ease, box-shadow 240ms ease;
  font-family: system-ui, sans-serif;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgb(15 23 42 / 18%);
}

.completion-badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #dcfce7;
  color: #166534;
  animation: celebrate 900ms ease-in-out infinite alternate;
}

@keyframes celebrate {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}`,
    js: "",
  },
  solutionCode: {
    ...accessibilityTestingPracticeCode,
    html: `<article class="course-card">
  <p class="completion-badge">Selesai</p>
  <h1>Reduced Motion</h1>
  <p>Pelajari cara menghormati preference motion user.</p>
</article>`,
    css: `.course-card {
  max-width: 440px;
  padding: 24px;
  border: 1px solid #94a3b8;
  border-radius: 12px;
  transition: transform 240ms ease, box-shadow 240ms ease;
  font-family: system-ui, sans-serif;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgb(15 23 42 / 18%);
}

.completion-badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #dcfce7;
  color: #166534;
  animation: celebrate 900ms ease-in-out infinite alternate;
}

@keyframes celebrate {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}

@media (prefers-reduced-motion: reduce) {
  .course-card {
    transition: none;
  }

  .course-card:hover {
    transform: none;
  }

  .completion-badge {
    animation: none;
  }
}`,
    js: "",
  },
  checklist: [
    "Media query memakai prefers-reduced-motion: reduce.",
    "Card tidak lagi berpindah posisi saat hover bila reduce aktif.",
    "Completion badge berhenti berdenyut bila reduce aktif.",
    "Text Selesai tetap menjelaskan status tanpa membutuhkan animation.",
    "Motion yang esensial perlu alternate behavior yang dapat diuji, bukan sekadar dimatikan tanpa context.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "reduce-media-query", label: "Ada media query prefers-reduced-motion: reduce.", type: "contains", valueIncludes: "@media (prefers-reduced-motion: reduce)" },
      { id: "reduce-card-selector", label: "Ada rule .course-card dalam mode reduce.", type: "contains", valueIncludes: ".course-card {\n    transition: none;" },
      { id: "reduce-transition", label: "Transition dihentikan pada mode reduce.", type: "contains", valueIncludes: "transition: none;" },
      { id: "reduce-hover-selector", label: "Ada rule .course-card:hover dalam mode reduce.", type: "contains", valueIncludes: ".course-card:hover {\n    transform: none;" },
      { id: "reduce-transform", label: "Hover movement dihentikan pada mode reduce.", type: "contains", valueIncludes: "transform: none;" },
      { id: "reduce-badge-selector", label: "Ada rule .completion-badge dalam mode reduce.", type: "contains", valueIncludes: ".completion-badge {\n    animation: none;" },
      { id: "reduce-animation", label: "Badge animation dihentikan pada mode reduce.", type: "contains", valueIncludes: "animation: none;" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview reduced motion",
    description:
      "Preview menampilkan card dengan hover serta badge animation default. Saat preference Reduce Motion aktif, card tidak bergerak dan badge tidak berdenyut. Cek otomatis hanya membaca rule CSS yang diperlukan.",
    lines: [
      "Default UI dapat memberi hover feedback ringan.",
      "Mode reduce menghentikan translate hover dan badge animation.",
      "Status completion tetap tersedia sebagai text.",
    ],
  },
  skillTags: ["CSS", "prefers-reduced-motion", "Motion", "Accessibility"],
};

export const testCourseEnrollmentWithAccessibleQueriesChallenge: CodingChallenge = {
  id: "test-course-enrollment-with-accessible-queries",
  lessonId: "accessibility-testing-tools",
  title: "Test course enrollment with accessible queries",
  description:
    "Tulis query Testing Library yang membaca label, role, dan error UI seperti contract yang dialami user.",
  instructions: [
    "Fokus di tab TS.",
    "Temukan input email dengan getByLabelText dan nama Alamat email.",
    "Temukan submit action dengan getByRole button dan nama Daftar course.",
    "Setelah validation gagal, temukan heading error summary dengan getByRole heading dan nama Periksa 1 field sebelum melanjutkan.",
    "Temukan link summary dengan getByRole link dan nama yang menyebut Alamat email.",
    "Hindari query selector class, test id, atau urutan element untuk requirement yang sebenarnya dapat ditemukan user.",
    "Cek otomatis membaca structure TypeScript. Practice ini tidak menjalankan test runner atau component React di preview.",
  ],
  starterCode: {
    ...accessibilityTestingPracticeCode,
    ts: `import { screen } from "@testing-library/react";

export function assertCourseEnrollmentErrors() {
  // TODO: Temukan input Alamat email.
  // TODO: Temukan button Daftar course.
  // TODO: Temukan error summary setelah validation gagal.
  // TODO: Temukan link yang membawa user kembali ke field email.
}`,
  },
  solutionCode: {
    ...accessibilityTestingPracticeCode,
    ts: `import { screen } from "@testing-library/react";

export function assertCourseEnrollmentErrors() {
  const email = screen.getByLabelText("Alamat email");
  const submit = screen.getByRole("button", {
    name: "Daftar course",
  });
  const summary = screen.getByRole("heading", {
    name: "Periksa 1 field sebelum melanjutkan",
  });
  const emailLink = screen.getByRole("link", {
    name: /Alamat email/,
  });

  return { email, submit, summary, emailLink };
}`,
  },
  checklist: [
    "Input ditemukan dari label yang dipakai user.",
    "Submit action ditemukan dari role button serta accessible name.",
    "Heading error summary ditemukan dari role serta nama yang spesifik.",
    "Link error summary ditemukan dari role serta nama field.",
    "Query tidak bergantung pada class CSS, index DOM, atau test id untuk semantics yang sudah tersedia.",
    "Test runtime tetap perlu merender component, memicu submit, dan memeriksa journey yang sesuai.",
  ],
  validation: {
    mode: "ts",
    checks: [
      { id: "import-screen", label: "screen diimport dari Testing Library.", type: "contains", target: 'import { screen } from "@testing-library/react";', valueIncludes: 'import { screen } from "@testing-library/react";' },
      { id: "email-query", label: "Email dicari dengan getByLabelText.", type: "contains", target: 'screen.getByLabelText("Alamat email")', valueIncludes: 'screen.getByLabelText("Alamat email")' },
      { id: "submit-query", label: "Submit dicari dengan role button dan nama action.", type: "contains", target: 'screen.getByRole("button", {', valueIncludes: 'screen.getByRole("button", {' },
      { id: "submit-name", label: "Button memakai nama Daftar course.", type: "contains", target: 'name: "Daftar course"', valueIncludes: 'name: "Daftar course"' },
      { id: "summary-query", label: "Heading summary dicari dengan role heading.", type: "contains", target: 'screen.getByRole("heading", {', valueIncludes: 'screen.getByRole("heading", {' },
      { id: "summary-name", label: "Summary memakai nama yang jelas.", type: "contains", target: 'name: "Periksa 1 field sebelum melanjutkan"', valueIncludes: 'name: "Periksa 1 field sebelum melanjutkan"' },
      { id: "link-query", label: "Link summary dicari dengan role link.", type: "contains", target: 'screen.getByRole("link", {', valueIncludes: 'screen.getByRole("link", {' },
      { id: "email-link-name", label: "Nama link menyebut Alamat email.", type: "contains", target: "name: /Alamat email/", valueIncludes: "name: /Alamat email/" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Testing Library",
    description:
      "Cek otomatis membaca struktur query TypeScript. Code ini tidak menjalankan test runner atau merender React preview; gunakan local test suite untuk membuktikan behavior submit dan error summary yang sebenarnya.",
    lines: [
      "Input ditemukan lewat label Alamat email.",
      "Button dan heading error summary ditemukan lewat role serta accessible name.",
      "Link summary dibaca sebagai jalur kembali ke field yang salah.",
    ],
  },
  skillTags: ["TypeScript", "Testing Library", "Accessible Queries", "Accessibility Testing"],
};

export const buildAccessibleCourseSignupCheckpointChallenge: CodingChallenge = {
  id: "build-accessible-course-signup-checkpoint",
  lessonId: "accessibility-testing-preferences-assessment",
  title: "Build accessible course signup checkpoint",
  description:
    "Perbaiki feedback validation form Daftar update agar label, error, summary, dan focus entry dapat digunakan dalam flow React kecil.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan form onSubmit agar submit kosong tidak me-reload page.",
    "Saat submit gagal, tampilkan error summary dengan heading dan link menuju field email.",
    "Gunakan label htmlFor, input id course-email, aria-invalid, serta aria-describedby ke hint dan error.",
    "Pindahkan focus ke error summary setelah validation gagal memakai ref dan tabIndex={-1}.",
    "Pastikan error text menjelaskan format nama@domain.com, bukan hanya status invalid.",
    "Preview menjalankan form kecil. Gunakan keyboard dan local screen reader smoke test untuk memeriksa behavior announcement pada environment nyata.",
  ],
  starterCode: {
    ...accessibilityTestingPracticeCode,
    tsx: `import { useState } from "react";

export default function CourseSignup() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      {hasSubmitted ? <p>Email salah.</p> : null}
      <input type="email" placeholder="Alamat email" />
      <button type="submit">Daftar update</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...accessibilityTestingPracticeCode,
    tsx: `import { useRef, useState } from "react";

export default function CourseSignup() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const errorSummaryRef = useRef<HTMLElement>(null);

  function handleSubmit(event) {
    event.preventDefault();
    setHasSubmitted(true);
    window.setTimeout(() => errorSummaryRef.current?.focus(), 0);
  }

  return (
    <form onSubmit={handleSubmit}>
      {hasSubmitted ? (
        <section
          ref={errorSummaryRef}
          tabIndex={-1}
          aria-labelledby="course-error-summary-title"
        >
          <h2 id="course-error-summary-title">Periksa 1 field sebelum melanjutkan</h2>
          <ul>
            <li>
              <a href="#course-email">
                Alamat email: gunakan format nama@domain.com.
              </a>
            </li>
          </ul>
        </section>
      ) : null}

      <label htmlFor="course-email">Alamat email</label>
      <p id="course-email-hint">Gunakan alamat email yang masih aktif.</p>
      <input
        id="course-email"
        type="email"
        aria-invalid={hasSubmitted}
        aria-describedby={
          hasSubmitted
            ? "course-email-hint course-email-error"
            : "course-email-hint"
        }
      />
      {hasSubmitted ? (
        <p id="course-email-error">
          Masukkan alamat email dengan format nama@domain.com.
        </p>
      ) : null}
      <button type="submit">Daftar update</button>
    </form>
  );
}`,
  },
  checklist: [
    "Form memakai onSubmit dan submit mencegah reload browser.",
    "Error summary memiliki heading, link ke field, serta programmatic focus target.",
    "Input memiliki label, hint, aria-invalid, dan aria-describedby yang sesuai state.",
    "Error text menjelaskan format yang diperlukan.",
    "Keyboard QA memeriksa focus summary, link menuju field, dan focus ring setelah submit.",
    "Screen reader QA memeriksa apakah focus dan alert tidak membuat announcement yang membingungkan pada environment yang dipakai.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "CourseSignup",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "ref-import", label: "useRef diimport bersama useState.", type: "contains", target: 'import { useRef, useState } from "react";', valueIncludes: 'import { useRef, useState } from "react";' },
      { id: "submit-handler", label: "Form memakai handleSubmit.", type: "contains", target: "onSubmit={handleSubmit}", valueIncludes: "onSubmit={handleSubmit}" },
      { id: "prevent-default", label: "Submit mencegah reload.", type: "contains", target: "event.preventDefault();", valueIncludes: "event.preventDefault();" },
      { id: "submitted-state", label: "Submit menyimpan state error.", type: "contains", target: "setHasSubmitted(true);", valueIncludes: "setHasSubmitted(true);" },
      { id: "summary-ref", label: "Error summary memiliki focus ref.", type: "contains", target: "const errorSummaryRef = useRef<HTMLElement>(null);", valueIncludes: "const errorSummaryRef = useRef<HTMLElement>(null);" },
      { id: "summary-focus", label: "Focus berpindah ke summary setelah submit.", type: "contains", target: "window.setTimeout(() => errorSummaryRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => errorSummaryRef.current?.focus(), 0);" },
      { id: "summary-labelledby", label: "Summary terhubung ke heading yang terlihat.", type: "contains", target: 'aria-labelledby="course-error-summary-title"', valueIncludes: 'aria-labelledby="course-error-summary-title"' },
      { id: "summary-heading", label: "Summary memiliki heading yang jelas.", type: "contains", target: 'id="course-error-summary-title"', valueIncludes: 'id="course-error-summary-title"' },
      { id: "summary-link", label: "Summary mengarah ke field email.", type: "contains", target: 'href="#course-email"', valueIncludes: 'href="#course-email"' },
      { id: "email-label", label: "Email memiliki label native.", type: "contains", target: 'htmlFor="course-email"', valueIncludes: 'htmlFor="course-email"' },
      { id: "email-invalid", label: "Email menyatakan aria-invalid mengikuti state.", type: "contains", target: "aria-invalid={hasSubmitted}", valueIncludes: "aria-invalid={hasSubmitted}" },
      { id: "email-description", label: "Email memiliki relationship hint dan error.", type: "contains", target: "course-email-hint course-email-error", valueIncludes: "course-email-hint course-email-error" },
      { id: "error-copy", label: "Error menjelaskan format nama@domain.com.", type: "contains", target: "nama@domain.com", valueIncludes: "nama@domain.com" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview course signup checkpoint",
    description:
      "Preview menjalankan form Daftar update. Kirim form kosong untuk melihat error summary, link ke email, serta inline error. Local QA tetap diperlukan untuk contrast, keyboard walkthrough, dan screen reader announcement pada environment nyata.",
    lines: [
      "Submit kosong menampilkan summary dan inline error yang spesifik.",
      "Summary menerima programmatic focus dan memberi link ke field email.",
      "Input memiliki label, hint, invalid state, serta error relationship.",
    ],
  },
  skillTags: ["React", "Forms", "Focus Management", "Accessibility Testing", "Assessment"],
};
