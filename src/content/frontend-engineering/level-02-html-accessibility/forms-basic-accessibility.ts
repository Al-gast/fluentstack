import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const formsBasicAccessibilityModule: Module = {
  id: "forms-basic-accessibility",
  trackId: "frontend-engineering",
  title: "Forms and Basic Accessibility",
  slug: "forms-basic-accessibility",
  description:
    "Belajar dasar form, link vs button, label, input, alt text, dan aksesibilitas awal.",
  order: 4,
  lessonIds: [
    "link-vs-button",
    "form-label-input",
    "textarea-select-required-fields",
    "alt-text-basic",
    "keyboard-navigation-basic",
    "basic-accessibility-checklist",
    "forms-basic-accessibility-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["HTML", "Forms", "Accessibility"],
};

export const linkVsButtonLesson: Lesson = {
  id: "link-vs-button",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Link vs Button",
  slug: "link-vs-button",
  description:
    "Pahami kapan memakai link dan kapan memakai button agar interaksi halaman lebih jelas.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 20,
  objectives: [
    "Membedakan link untuk berpindah tempat dan button untuk menjalankan aksi",
    "Memilih elemen berdasarkan maksud pengguna, bukan tampilan visual",
    "Menghindari kesalahan umum saat memilih link atau button",
  ],
  skillTags: ["HTML", "Accessibility", "Forms"],
  blocks: [
    {
      id: "link-vs-button-intro",
      type: "text",
      title: "Tampilan bisa mirip, maknanya berbeda",
      content:
        "Link dan button bisa dibuat terlihat mirip dengan CSS. Tetapi di HTML, maknanya berbeda. Link dipakai ketika user berpindah tempat: membuka halaman, bagian halaman, file, atau website lain. Button dipakai ketika user menjalankan aksi di halaman: mengirim form, membuka menu, membuka modal, menyimpan data, atau menandai sesuatu selesai.",
    },
    {
      id: "link-vs-button-examples",
      type: "text",
      title: "Contoh di FluentStack",
      content:
        "Di FluentStack, teks seperti Semua track, Lihat roadmap, atau Buka dokumentasi adalah link karena membawa kamu ke halaman atau resource lain. Tombol seperti Kirim jawaban, Tandai selesai, atau Reset adalah button karena menjalankan aksi di halaman yang sedang kamu pakai.",
    },
    {
      id: "link-vs-button-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memilih dari bentuk visual saja",
      content:
        "Kesalahan yang sering terjadi adalah memakai button untuk navigasi biasa atau link untuk aksi form. Pilih dari maksud user: berpindah tempat berarti link, menjalankan aksi berarti button. Tampilan visual bisa diatur belakangan dengan CSS.",
    },
    {
      id: "link-vs-button-quick-check",
      type: "quick-check",
      question:
        "Kalau user menekan elemen untuk membuka halaman dokumentasi MDN di tab baru, elemen mana yang paling tepat?",
      options: ["Link", "Button", "Input", "Select"],
      correctAnswer: "Link",
      explanation:
        "Link tepat karena user sedang berpindah ke halaman atau resource lain. Link tetap boleh terlihat seperti button, tetapi makna HTML-nya tetap link.",
    },
    {
      id: "link-vs-button-code-example",
      type: "code-example",
      title: "Contoh link dan button",
      language: "html",
      code: `<a href="/roadmap">Lihat roadmap</a>

<button type="button">Buka menu</button>

<button type="submit">Kirim form</button>`,
      explanation:
        "a dengan href membawa user ke tujuan lain. button type=\"button\" menjalankan aksi biasa di halaman. button type=\"submit\" dipakai untuk mengirim form.",
    },
    {
      id: "link-vs-button-summary",
      type: "summary",
      points: [
        "Gunakan link untuk berpindah tempat.",
        "Gunakan button untuk menjalankan aksi.",
        "Tampilan bisa dibuat mirip dengan CSS, tetapi makna HTML tetap harus benar.",
        "Berikutnya, kamu akan membuat form sederhana dengan label dan input.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "link-vs-button-intro",
      "link-vs-button-examples",
      "link-vs-button-common-mistake",
      "link-vs-button-quick-check",
      "link-vs-button-code-example",
      "link-vs-button-summary",
    ],
  },
};

export const formLabelInputLesson: Lesson = {
  id: "form-label-input",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Form, Label, dan Input",
  slug: "form-label-input",
  description:
    "Bangun form sederhana dan hubungkan label dengan input agar field mudah dipahami.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 30,
  objectives: [
    "Memahami fungsi form, label, dan input",
    "Menghubungkan label ke input dengan for dan id",
    "Membuat field email sederhana yang lebih jelas dibaca",
  ],
  skillTags: ["HTML", "Forms", "Accessibility"],
  blocks: [
    {
      id: "form-label-input-intro",
      type: "text",
      title: "Form mengumpulkan input dari user",
      content:
        "Form dipakai ketika halaman perlu menerima data dari user. Label menjelaskan nama atau instruksi sebuah field. Input adalah tempat user mengetik atau memilih nilai. Label bukan sekadar teks yang kebetulan berada di dekat input. Untuk form yang lebih jelas dan lebih accessible, label sebaiknya terhubung ke input.",
    },
    {
      id: "form-label-input-code-example",
      type: "code-example",
      title: "Form email sederhana",
      language: "html",
      code: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />
  <button type="submit">Daftar</button>
</form>`,
      explanation:
        "form mengelompokkan field. label for=\"email\" menunjuk ke input id=\"email\". name membantu mengenali nilai saat form dikirim. type=\"email\" memberi tahu browser bahwa field ini berisi email. Button submit dipakai untuk mengirim form.",
    },
    {
      id: "form-label-input-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Label harus benar-benar terhubung",
      content:
        "Menaruh teks Email di dekat input belum cukup. Nilai for pada label harus cocok dengan id pada input. Koneksi ini membantu browser dan assistive technology memahami field dengan lebih jelas.",
    },
    {
      id: "form-label-input-quick-check",
      type: "quick-check",
      question: "Agar label 'Email' terhubung ke input, pasangan mana yang harus cocok?",
      options: [
        "label for dan input id",
        "label class dan input type",
        "form action dan input placeholder",
        "button type dan input name",
      ],
      correctAnswer: "label for dan input id",
      explanation:
        "Nilai for pada label harus sama dengan id pada input. Contohnya label for=\"email\" terhubung ke input id=\"email\".",
    },
    {
      id: "form-label-input-coding-practice",
      type: "coding-practice",
      challengeId: "build-basic-accessible-form",
    },
    {
      id: "form-label-input-summary",
      type: "summary",
      points: [
        "form mengelompokkan field yang diisi user.",
        "label menjelaskan field.",
        "input menerima data dari user.",
        "for dan id menghubungkan label ke input.",
        "Berikutnya, kamu akan menambah field textarea, select, dan required.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "form-label-input-intro",
      "form-label-input-code-example",
      "form-label-input-common-mistake",
      "form-label-input-quick-check",
      "form-label-input-coding-practice",
      "form-label-input-summary",
    ],
  },
};

export const textareaSelectRequiredFieldsLesson: Lesson = {
  id: "textarea-select-required-fields",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Textarea, Select, dan Required Fields",
  slug: "textarea-select-required-fields",
  description:
    "Tambahkan field pesan, pilihan, dan required agar form lebih lengkap.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Membedakan input, textarea, dan select berdasarkan jenis data",
    "Menggunakan required untuk field yang wajib diisi",
    "Membuat form kontak sederhana dengan beberapa jenis field",
  ],
  skillTags: ["HTML", "Forms", "Accessibility"],
  blocks: [
    {
      id: "textarea-select-required-fields-intro",
      type: "text",
      title: "Form bisa punya beberapa jenis field",
      content:
        "Input cocok untuk nilai pendek seperti nama atau email. Textarea cocok untuk teks panjang seperti pesan. Select cocok ketika user harus memilih dari opsi yang sudah disediakan. Required dipakai untuk memberi tahu browser bahwa field tertentu wajib diisi sebelum form dikirim.",
    },
    {
      id: "textarea-select-required-fields-code-example",
      type: "code-example",
      title: "Textarea dan select",
      language: "html",
      code: `<label for="message">Pesan</label>
<textarea id="message" name="message" required></textarea>

<label for="topic">Topik</label>
<select id="topic" name="topic" required>
  <option value="">Pilih topik</option>
  <option value="support">Support</option>
  <option value="feedback">Feedback</option>
</select>`,
      explanation:
        "Textarea memberi ruang untuk teks panjang. Select membatasi pilihan agar user memilih salah satu opsi. Required membuat browser meminta field diisi sebelum submit.",
    },
    {
      id: "textarea-select-required-fields-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Placeholder bukan pengganti label",
      content:
        "Placeholder bisa membantu memberi contoh isi, tetapi jangan menjadikannya satu-satunya nama field. Tetap tampilkan label yang jelas dan hubungkan label ke field memakai for dan id.",
    },
    {
      id: "textarea-select-required-fields-quick-check",
      type: "quick-check",
      question: "Field mana yang paling cocok untuk pesan panjang dari user?",
      options: ["textarea", "input type=\"email\"", "button", "option"],
      correctAnswer: "textarea",
      explanation:
        "Textarea lebih cocok untuk teks panjang atau multi-line, seperti pesan kontak, catatan, atau deskripsi.",
    },
    {
      id: "textarea-select-required-fields-coding-practice",
      type: "coding-practice",
      challengeId: "build-contact-form-fields",
    },
    {
      id: "textarea-select-required-fields-summary",
      type: "summary",
      points: [
        "input cocok untuk nilai pendek.",
        "textarea cocok untuk teks panjang.",
        "select cocok untuk pilihan yang sudah disediakan.",
        "required membantu browser tahu field wajib.",
        "Berikutnya module ini akan lanjut ke alt text, keyboard navigation, dan checklist aksesibilitas dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "textarea-select-required-fields-intro",
      "textarea-select-required-fields-code-example",
      "textarea-select-required-fields-common-mistake",
      "textarea-select-required-fields-quick-check",
      "textarea-select-required-fields-coding-practice",
      "textarea-select-required-fields-summary",
    ],
  },
};

export const altTextBasicLesson: Lesson = {
  id: "alt-text-basic",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Alt Text Dasar",
  slug: "alt-text-basic",
  description:
    "Pelajari cara menulis alt text sederhana agar gambar punya makna yang bisa dipahami.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami fungsi alt text pada gambar",
    "Membedakan gambar bermakna dan dekoratif secara sederhana",
    "Menulis alt text berdasarkan makna gambar di halaman",
  ],
  skillTags: ["HTML", "Accessibility", "Images"],
  blocks: [
    {
      id: "alt-text-basic-intro",
      type: "text",
      title: "Alt text menjelaskan makna gambar",
      content:
        "Alt text adalah teks alternatif untuk gambar. Teks ini membantu saat gambar gagal dimuat dan membantu assistive technology memahami makna gambar. Untuk tahap awal, pakai pertanyaan ini: apa makna gambar ini untuk halaman? Jawabannya biasanya lebih berguna daripada hanya menyebut bentuk visualnya.",
    },
    {
      id: "alt-text-basic-code-example",
      type: "code-example",
      title: "Contoh alt text yang berguna",
      language: "html",
      code: `<img src="profile.jpg" alt="Foto profil Agastyo" />

<img src="chart.png" alt="Grafik peningkatan progres belajar minggu ini" />`,
      explanation:
        "Alt pertama menjelaskan siapa yang ada di foto. Alt kedua menjelaskan makna grafik, bukan hanya menulis 'grafik' atau nama file. Alt text yang baik mengikuti konteks halaman.",
    },
    {
      id: "alt-text-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Hindari alt yang terlalu umum",
      content:
        "Alt seperti gambar, foto, atau image biasanya tidak membantu. Jangan juga mengulang teks di sekitar gambar jika gambar tidak menambah informasi baru. Untuk gambar dekoratif, empty alt bisa dipakai nanti, tetapi untuk sekarang fokus dulu pada gambar yang punya makna.",
    },
    {
      id: "alt-text-basic-quick-check",
      type: "quick-check",
      question: "Alt text mana yang paling membantu untuk gambar grafik progres belajar?",
      options: [
        "Grafik progres belajar meningkat dari 40% ke 70%",
        "Gambar",
        "Foto bagus",
        "chart.png",
      ],
      correctAnswer: "Grafik progres belajar meningkat dari 40% ke 70%",
      explanation:
        "Alt text sebaiknya menjelaskan makna gambar dalam konteks halaman. Untuk grafik, informasi pentingnya adalah perubahan progres yang ditunjukkan.",
    },
    {
      id: "alt-text-basic-coding-practice",
      type: "coding-practice",
      challengeId: "write-useful-alt-text",
    },
    {
      id: "alt-text-basic-summary",
      type: "summary",
      points: [
        "Alt text menjelaskan makna gambar.",
        "Alt text membantu saat gambar tidak terlihat atau tidak bisa dimuat.",
        "Alt text yang baik mengikuti konteks halaman.",
        "Berikutnya, kamu akan mengecek apakah halaman bisa dipakai dengan keyboard.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "alt-text-basic-intro",
      "alt-text-basic-code-example",
      "alt-text-basic-common-mistake",
      "alt-text-basic-quick-check",
      "alt-text-basic-coding-practice",
      "alt-text-basic-summary",
    ],
  },
};

export const keyboardNavigationBasicLesson: Lesson = {
  id: "keyboard-navigation-basic",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Keyboard Navigation Dasar",
  slug: "keyboard-navigation-basic",
  description:
    "Cek apakah elemen penting di halaman bisa dijangkau dan dipakai dengan keyboard.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami kenapa keyboard navigation penting",
    "Mencoba Tab, Shift + Tab, Enter, dan Space secara sederhana",
    "Mengenali elemen interaktif yang perlu bisa difokuskan",
  ],
  skillTags: ["Accessibility", "HTML", "Forms"],
  blocks: [
    {
      id: "keyboard-navigation-basic-intro",
      type: "text",
      title: "Tidak semua user memakai mouse",
      content:
        "Keyboard navigation berarti user bisa berpindah dan memakai elemen interaktif dengan keyboard. Tab biasanya berpindah ke elemen focusable berikutnya. Shift + Tab bergerak mundur. Enter biasanya mengaktifkan link atau button. Space biasanya mengaktifkan button atau checkbox. Untuk tahap awal, fokus pada perilaku dasarnya dulu.",
    },
    {
      id: "keyboard-navigation-basic-code-example",
      type: "code-example",
      title: "Elemen HTML yang sudah ramah keyboard",
      language: "html",
      code: `<a href="/roadmap">Lihat roadmap</a>

<button type="button">Buka menu</button>

<label for="email">Email</label>
<input id="email" type="email" />`,
      explanation:
        "Link, button, dan input asli sudah punya perilaku keyboard bawaan yang lebih aman. Ini salah satu alasan kamu perlu memilih elemen HTML berdasarkan makna dan fungsi.",
    },
    {
      id: "keyboard-navigation-basic-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Clickable div bisa menyulitkan keyboard",
      content:
        "Div yang diberi event klik bisa terlihat seperti tombol, tetapi tidak otomatis punya perilaku keyboard yang baik. Aturan pemula: pakai button asli untuk aksi dan link asli untuk navigasi.",
    },
    {
      id: "keyboard-navigation-basic-quick-check",
      type: "quick-check",
      question: "Tombol submit form seharusnya bisa dijalankan dengan apa?",
      options: ["Keyboard dan mouse", "Mouse saja", "Screenshot saja", "CSS saja"],
      correctAnswer: "Keyboard dan mouse",
      explanation:
        "Elemen interaktif sebaiknya bisa dipakai oleh user yang memakai mouse maupun keyboard. Button asli membantu menyediakan perilaku itu.",
    },
    {
      id: "keyboard-navigation-basic-mini-action",
      type: "text",
      title: "Coba cek dengan Tab",
      content:
        "Buka salah satu halaman FluentStack, lalu tekan Tab beberapa kali. Amati apakah fokus berpindah ke link, button, atau input. Kamu belum perlu mengaudit semuanya. Cukup mulai mengenali bahwa elemen penting harus bisa dijangkau tanpa mouse.",
    },
    {
      id: "keyboard-navigation-basic-summary",
      type: "summary",
      points: [
        "Keyboard navigation membantu user yang tidak memakai mouse.",
        "Link, button, dan input asli lebih aman untuk keyboard.",
        "Tab membantu mengecek urutan fokus.",
        "Berikutnya, kamu akan memakai checklist sederhana untuk review aksesibilitas awal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "keyboard-navigation-basic-intro",
      "keyboard-navigation-basic-code-example",
      "keyboard-navigation-basic-common-mistake",
      "keyboard-navigation-basic-quick-check",
      "keyboard-navigation-basic-mini-action",
      "keyboard-navigation-basic-summary",
    ],
  },
};

export const basicAccessibilityChecklistLesson: Lesson = {
  id: "basic-accessibility-checklist",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Basic Accessibility Checklist",
  slug: "basic-accessibility-checklist",
  description:
    "Gunakan checklist sederhana untuk mengecek HTML, form, gambar, dan keyboard navigation.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 30,
  objectives: [
    "Menggunakan checklist aksesibilitas dasar",
    "Mengecek label, input, link, button, alt text, dan keyboard navigation",
    "Melihat accessibility sebagai kebiasaan review awal",
  ],
  skillTags: ["Accessibility", "HTML", "Forms"],
  blocks: [
    {
      id: "basic-accessibility-checklist-intro",
      type: "text",
      title: "Accessibility dimulai dari HTML yang benar",
      content:
        "Accessibility bukan hanya polesan terakhir. Banyak keputusan aksesibilitas dimulai dari memilih elemen HTML yang tepat, menghubungkan label dengan field, menulis alt text, dan memastikan elemen interaktif bisa dipakai dengan keyboard.",
    },
    {
      id: "basic-accessibility-checklist-note",
      type: "callout",
      variant: "important",
      title: "Checklist bukan tentang sempurna",
      content:
        "Checklist ini membantu menangkap masalah yang jelas lebih awal sebelum halaman menjadi kompleks. Kamu belum perlu menguasai semua audit accessibility. Mulai dari hal yang bisa kamu cek sendiri.",
    },
    {
      id: "basic-accessibility-checklist-items",
      type: "text",
      title: "Checklist awal",
      content:
        "Cek ini satu per satu: link dipakai untuk navigasi; button dipakai untuk aksi; setiap input penting punya label; label for cocok dengan input id; gambar bermakna punya alt text yang jelas; elemen interaktif bisa dijangkau dengan Tab; urutan heading tetap masuk akal; error text, jika ada, membantu user memperbaiki input.",
    },
    {
      id: "basic-accessibility-checklist-quick-check",
      type: "quick-check",
      question: "Mana contoh review aksesibilitas dasar yang paling tepat?",
      options: [
        "Mengecek apakah input punya label yang terhubung",
        "Mengecek apakah semua teks memakai warna favorit developer",
        "Menghapus semua button dari halaman",
        "Mengubah semua elemen menjadi div",
      ],
      correctAnswer: "Mengecek apakah input punya label yang terhubung",
      explanation:
        "Label yang terhubung membantu user memahami field, termasuk pengguna assistive technology.",
    },
    {
      id: "basic-accessibility-checklist-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih salah satu latihan form sebelumnya. Tulis 3 hal yang sudah aksesibel dan 1 hal yang masih perlu dicek.",
      placeholder:
        "Contoh:\n1. ...\n2. ...\n3. ...\nPerlu dicek: ...",
      checklist: [
        "Menyebut label/input",
        "Menyebut link/button",
        "Menyebut alt text atau keyboard navigation",
        "Menulis satu perbaikan yang konkret",
      ],
      modelAnswer:
        "Form email sudah punya label yang terhubung ke input. Tombol submit memakai button, bukan link. Gambar punya alt text yang menjelaskan konteks. Hal yang masih perlu dicek: urutan Tab dari field ke tombol submit.",
    },
    {
      id: "basic-accessibility-checklist-summary",
      type: "summary",
      points: [
        "Accessibility dimulai dari HTML yang benar.",
        "Checklist membantu menemukan masalah awal.",
        "Module berikutnya akan diuji lewat Uji Kompetensi Forms and Basic Accessibility.",
        "Setelah ini kamu akan membangun form kecil dan membuktikan bahwa kamu paham link/button, label/input, alt text, dan keyboard navigation dasar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "basic-accessibility-checklist-intro",
      "basic-accessibility-checklist-note",
      "basic-accessibility-checklist-items",
      "basic-accessibility-checklist-quick-check",
      "basic-accessibility-checklist-writing-practice",
      "basic-accessibility-checklist-summary",
    ],
  },
};

export const formsBasicAccessibilityAssessmentLesson: Lesson = {
  id: "forms-basic-accessibility-assessment",
  trackId: "frontend-engineering",
  moduleId: "forms-basic-accessibility",
  title: "Uji Kompetensi Forms and Basic Accessibility",
  slug: "forms-basic-accessibility-assessment",
  description:
    "Uji pemahaman dasar form, link vs button, label, input, alt text, dan aksesibilitas awal.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 45,
  objectives: [
    "Mengecek pemahaman link vs button",
    "Membangun form sederhana dengan label yang terhubung",
    "Mengecek pemahaman alt text dan keyboard navigation dasar",
  ],
  skillTags: ["HTML", "Forms", "Accessibility", "Assessment"],
  blocks: [
    {
      id: "forms-basic-accessibility-assessment-recap",
      type: "text",
      title: "Apa yang dicek di assessment ini",
      content:
        "Assessment ini merangkum module Forms and Basic Accessibility. Kamu akan mengecek link vs button, form, label, input, textarea, select, required, alt text, keyboard navigation, dan checklist accessibility dasar. Tujuannya bukan mencari jawaban jebakan, tetapi memastikan struktur HTML dan form kamu mulai aman untuk dipakai lebih banyak user.",
    },
    {
      id: "forms-basic-accessibility-assessment-quiz-block",
      type: "quiz",
      quizId: "forms-basic-accessibility-assessment-quiz",
    },
    {
      id: "forms-basic-accessibility-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-accessible-contact-form",
    },
    {
      id: "forms-basic-accessibility-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi",
      description:
        "Gunakan bagian ini sebagai latihan membaca dokumentasi, bukan tugas menghafal. Kamu tidak perlu membaca semuanya sekarang. Fokus pada bagian yang sudah kamu pelajari.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Web forms",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms",
          focus: [
            "struktur form dasar",
            "fungsi label dan input",
            "cara browser memahami field form",
          ],
          ignoreForNow: [
            "styling form advanced",
            "custom form controls yang kompleks",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "The label element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label",
          focus: [
            "fungsi label",
            "hubungan for dan id",
            "kenapa label membantu aksesibilitas",
          ],
          ignoreForNow: ["semua attribute reference yang belum dipakai"],
        },
        {
          source: "MDN Web Docs",
          title: "The button element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",
          focus: [
            "fungsi button",
            "type button dan submit",
            "kapan button dipakai untuk aksi",
          ],
          ignoreForNow: ["form method/action detail yang belum dibahas"],
        },
        {
          source: "MDN Web Docs",
          title: "HTML images",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images",
          focus: [
            "fungsi alt",
            "cara menulis deskripsi gambar yang berguna",
          ],
          ignoreForNow: ["responsive images", "image performance"],
        },
      ],
      followUpAction:
        "Kembali ke latihan form kamu dan cek empat hal: label sudah terhubung ke field, button dipakai untuk submit, gambar bermakna punya alt text, dan elemen interaktif bisa dicek dengan Tab.",
    },
    {
      id: "forms-basic-accessibility-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu bisa memilih link untuk navigasi dan button untuk aksi.",
        "Kamu membuktikan bahwa kamu bisa membuat form dengan label, input, textarea, select, required, dan submit button.",
        "Jika belum siap, review lagi link vs button, label/input, textarea/select, alt text, dan keyboard navigation dasar.",
        "Setelah struktur form dan aksesibilitas dasar mulai aman, berikutnya kamu akan belajar CSS agar halaman bisa ditata tanpa merusak struktur HTML.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "forms-basic-accessibility-assessment-recap",
      "forms-basic-accessibility-assessment-quiz-block",
      "forms-basic-accessibility-assessment-coding-practice",
      "forms-basic-accessibility-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const formsBasicAccessibilityAssessmentQuiz: Quiz = {
  id: "forms-basic-accessibility-assessment-quiz",
  lessonId: "forms-basic-accessibility-assessment",
  title: "Assessment Forms and Basic Accessibility",
  passingScore: 70,
  questions: [
    {
      id: "forms-basic-accessibility-assessment-q1",
      type: "multiple-choice",
      question: "Jika elemen membawa user ke halaman dokumentasi, elemen mana yang paling tepat?",
      options: ["Button", "Input", "Link", "Textarea"],
      correctAnswer: "Link",
      explanation:
        "Link dipakai untuk navigasi ke halaman, file, section, atau resource lain. Link boleh terlihat seperti button, tetapi makna HTML-nya tetap link.",
    },
    {
      id: "forms-basic-accessibility-assessment-q2",
      type: "multiple-choice",
      question: "Jika user menekan elemen untuk mengirim form, elemen mana yang paling tepat?",
      options: ["button type=\"submit\"", "a href=\"#\"", "img", "option"],
      correctAnswer: "button type=\"submit\"",
      explanation:
        "Button submit dipakai untuk aksi mengirim form. Link lebih tepat untuk berpindah tempat, bukan menjalankan submit form.",
    },
    {
      id: "forms-basic-accessibility-assessment-q3",
      type: "multiple-choice",
      question: "Agar label terhubung ke input, pasangan mana yang harus cocok?",
      options: [
        "form action dan input name",
        "label class dan input type",
        "button type dan input value",
        "label for dan input id",
      ],
      correctAnswer: "label for dan input id",
      explanation:
        "Nilai for pada label harus cocok dengan id pada input. Koneksi ini membantu browser dan assistive technology memahami field.",
    },
    {
      id: "forms-basic-accessibility-assessment-q4",
      type: "multiple-choice",
      question: "Field mana yang paling cocok untuk pesan panjang dari user?",
      options: ["textarea", "input type=\"email\"", "select", "button"],
      correctAnswer: "textarea",
      explanation:
        "Textarea cocok untuk teks panjang atau multi-line, seperti pesan kontak, catatan, atau deskripsi.",
    },
    {
      id: "forms-basic-accessibility-assessment-q5",
      type: "multiple-choice",
      question: "Kapan select lebih tepat dipakai?",
      options: [
        "Saat user perlu menulis pesan panjang",
        "Saat user memilih dari opsi yang sudah disediakan",
        "Saat user membuka halaman lain",
        "Saat gambar gagal dimuat",
      ],
      correctAnswer: "Saat user memilih dari opsi yang sudah disediakan",
      explanation:
        "Select membantu ketika pilihan sudah ditentukan, misalnya topik support atau feedback.",
    },
    {
      id: "forms-basic-accessibility-assessment-q6",
      type: "multiple-choice",
      question: "Apa fungsi attribute required pada field form?",
      options: [
        "Membuat field tidak terlihat",
        "Mengubah link menjadi button",
        "Memberi tahu browser bahwa field wajib diisi",
        "Menghapus label dari input",
      ],
      correctAnswer: "Memberi tahu browser bahwa field wajib diisi",
      explanation:
        "Required membantu browser meminta user mengisi field penting sebelum form dikirim.",
    },
    {
      id: "forms-basic-accessibility-assessment-q7",
      type: "multiple-choice",
      question: "Alt text mana yang paling berguna untuk grafik progres belajar?",
      options: [
        "chart.png",
        "Foto bagus",
        "Gambar",
        "Grafik progres belajar meningkat dari 40% ke 70%",
      ],
      correctAnswer: "Grafik progres belajar meningkat dari 40% ke 70%",
      explanation:
        "Alt text yang berguna menjelaskan makna gambar dalam konteks halaman, bukan hanya nama file atau kata umum.",
    },
    {
      id: "forms-basic-accessibility-assessment-q8",
      type: "multiple-choice",
      question: "Tombol dan link penting di halaman sebaiknya bisa dicek dengan tombol apa untuk berpindah fokus?",
      options: ["Tab", "Caps Lock", "Print Screen", "Escape saja"],
      correctAnswer: "Tab",
      explanation:
        "Tab membantu user keyboard berpindah dari satu elemen focusable ke elemen berikutnya.",
    },
    {
      id: "forms-basic-accessibility-assessment-q9",
      type: "multiple-choice",
      question: "Apa risiko memakai div yang diberi klik untuk aksi dasar seperti tombol?",
      options: [
        "Div selalu mengirim form otomatis",
        "Div otomatis menjadi link eksternal",
        "Div bisa lebih sulit dipakai dengan keyboard",
        "Div tidak bisa diberi CSS",
      ],
      correctAnswer: "Div bisa lebih sulit dipakai dengan keyboard",
      explanation:
        "Div tidak punya perilaku button bawaan. Untuk aksi dasar, button asli lebih aman untuk keyboard dan accessibility.",
    },
    {
      id: "forms-basic-accessibility-assessment-q10",
      type: "multiple-choice",
      question: "Mana contoh checklist accessibility dasar yang tepat?",
      options: [
        "Mengubah semua elemen menjadi div",
        "Menghapus semua label agar form lebih pendek",
        "Memastikan semua gambar memakai nama file sebagai alt",
        "Mengecek label terhubung, button dipakai untuk aksi, dan Tab bisa menjangkau elemen interaktif",
      ],
      correctAnswer:
        "Mengecek label terhubung, button dipakai untuk aksi, dan Tab bisa menjangkau elemen interaktif",
      explanation:
        "Checklist awal membantu menangkap masalah umum: label harus terhubung, elemen semantic harus tepat, dan interaksi harus bisa dijangkau keyboard.",
    },
  ],
};

export const buildBasicAccessibleFormChallenge: CodingChallenge = {
  id: "build-basic-accessible-form",
  lessonId: "form-label-input",
  title: "Membuat form email sederhana",
  description:
    "Latihan membuat form email dengan label yang terhubung ke input.",
  instructions: [
    "Buat form sederhana untuk email.",
    "Tambahkan label untuk email.",
    "Tambahkan input email.",
    "Pastikan label terhubung ke input dengan for dan id yang sama.",
    "Tambahkan button submit.",
  ],
  starterCode: {
    html: `<form>
  <!-- Tambahkan label dan input email di sini -->

  <button>Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />

  <button type="submit">Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada elemen form.",
    "Ada label untuk email.",
    "Ada input email.",
    "Label memiliki attribute for.",
    "Input memiliki id.",
    "Nilai for dan id sama-sama memakai email.",
    "Input memakai type email.",
    "Ada button submit.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-form", label: "Ada elemen form.", type: "hasElement", target: "form" },
      { id: "has-label", label: "Ada label.", type: "hasTextInElement", target: "label" },
      { id: "has-input", label: "Ada input.", type: "hasElement", target: "input" },
      { id: "label-has-for", label: "Label memiliki for.", type: "hasElementWithAttribute", target: "label", attribute: "for", mustHaveValue: true },
      { id: "input-has-id", label: "Input memiliki id.", type: "hasElementWithAttribute", target: "input", attribute: "id", mustHaveValue: true },
      { id: "label-for-email", label: "Label for mengarah ke email.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "email" },
      { id: "input-id-email", label: "Input id memakai email.", type: "hasElementWithAttribute", target: "input", attribute: "id", valueIncludes: "email" },
      { id: "input-type-email", label: "Input memakai type email.", type: "hasElementWithAttribute", target: "input", attribute: "type", valueIncludes: "email" },
      { id: "submit-button", label: "Ada button submit.", type: "hasElementWithAttribute", target: "button", attribute: "type", valueIncludes: "submit" },
    ],
  },
  skillTags: ["HTML", "Forms", "Accessibility"],
};

export const buildContactFormFieldsChallenge: CodingChallenge = {
  id: "build-contact-form-fields",
  lessonId: "textarea-select-required-fields",
  title: "Membuat field form kontak",
  description:
    "Latihan membuat form kontak dengan input, textarea, select, required, dan button submit.",
  instructions: [
    "Buat form kontak sederhana.",
    "Tambahkan input nama atau email.",
    "Tambahkan textarea pesan.",
    "Tambahkan select topik.",
    "Hubungkan setiap label dengan field memakai for dan id.",
    "Tambahkan required pada field penting.",
    "Tambahkan button submit.",
  ],
  starterCode: {
    html: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />

  <!-- Tambahkan textarea pesan dan select topik di sini -->

  <button>Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="message">Pesan</label>
  <textarea id="message" name="message" required></textarea>

  <label for="topic">Topik</label>
  <select id="topic" name="topic" required>
    <option value="">Pilih topik</option>
    <option value="support">Support</option>
    <option value="feedback">Feedback</option>
  </select>

  <button type="submit">Kirim</button>
</form>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada elemen form.",
    "Ada textarea untuk pesan.",
    "Ada select untuk topik.",
    "Select punya pilihan support dan feedback.",
    "Ada minimal satu field required.",
    "Label pesan terhubung ke textarea.",
    "Label topik terhubung ke select.",
    "Ada button submit.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-form", label: "Ada elemen form.", type: "hasElement", target: "form" },
      { id: "has-textarea", label: "Ada textarea.", type: "hasElement", target: "textarea" },
      { id: "has-select", label: "Ada select.", type: "hasElement", target: "select" },
      { id: "has-support-option", label: "Ada option support.", type: "hasElementWithAttribute", target: "option", attribute: "value", valueIncludes: "support" },
      { id: "has-feedback-option", label: "Ada option feedback.", type: "hasElementWithAttribute", target: "option", attribute: "value", valueIncludes: "feedback" },
      { id: "has-required-input", label: "Ada field required.", type: "hasElementWithAttribute", target: "input, textarea, select", attribute: "required" },
      { id: "message-label", label: "Label pesan memakai for message.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "message" },
      { id: "message-field", label: "Textarea memakai id message.", type: "hasElementWithAttribute", target: "textarea", attribute: "id", valueIncludes: "message" },
      { id: "topic-label", label: "Label topik memakai for topic.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "topic" },
      { id: "topic-field", label: "Select memakai id topic.", type: "hasElementWithAttribute", target: "select", attribute: "id", valueIncludes: "topic" },
      { id: "submit-button", label: "Ada button submit.", type: "hasElementWithAttribute", target: "button", attribute: "type", valueIncludes: "submit" },
    ],
  },
  skillTags: ["HTML", "Forms", "Accessibility"],
};

export const writeUsefulAltTextChallenge: CodingChallenge = {
  id: "write-useful-alt-text",
  lessonId: "alt-text-basic",
  title: "Menulis alt text yang berguna",
  description:
    "Latihan memperbaiki alt text agar menjelaskan makna gambar dalam konteks halaman.",
  instructions: [
    "Tambahkan atau perbaiki alt pada gambar.",
    "Gunakan alt yang menjelaskan makna gambar.",
    "Hindari alt yang terlalu umum seperti gambar, foto, image, atau photo.",
    "Fokus pada konteks: gambar ini menunjukkan progres belajar.",
  ],
  starterCode: {
    html: `<article>
  <h1>Progres Belajar Minggu Ini</h1>
  <p>Grafik berikut menunjukkan perubahan progres belajar.</p>

  <img src="images/progress-chart.png" />
</article>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<article>
  <h1>Progres Belajar Minggu Ini</h1>
  <p>Grafik berikut menunjukkan perubahan progres belajar.</p>

  <img src="images/progress-chart.png" alt="Grafik progres belajar meningkat dari 40% ke 70%" />
</article>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada image.",
    "Image memakai src.",
    "Image punya alt text.",
    "Alt text tidak kosong.",
    "Alt text menjelaskan progres belajar dalam konteks halaman.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-image", label: "Ada image.", type: "hasElement", target: "img" },
      { id: "image-has-src", label: "Image memakai src.", type: "hasElementWithAttribute", target: "img", attribute: "src", mustHaveValue: true },
      { id: "image-has-alt", label: "Image punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
      { id: "alt-has-progres", label: "Alt menyebut progres.", type: "hasElementWithAttribute", target: "img", attribute: "alt", valueIncludes: "progres" },
      { id: "alt-has-belajar", label: "Alt menyebut belajar.", type: "hasElementWithAttribute", target: "img", attribute: "alt", valueIncludes: "belajar" },
    ],
  },
  skillTags: ["HTML", "Accessibility", "Images"],
};

export const buildAccessibleContactFormChallenge: CodingChallenge = {
  id: "build-accessible-contact-form",
  lessonId: "forms-basic-accessibility-assessment",
  title: "Membuat contact form yang lebih aksesibel",
  description:
    "Assessment praktik untuk membuat form kontak dengan label, field penting, required, submit button, dan gambar bermakna.",
  instructions: [
    "Buat form kontak sederhana.",
    "Tambahkan field nama dan email.",
    "Tambahkan textarea pesan.",
    "Tambahkan select topik.",
    "Hubungkan label ke setiap field dengan for dan id.",
    "Tambahkan required pada field penting.",
    "Tambahkan button submit.",
    "Tambahkan satu gambar bermakna dengan alt text yang jelas.",
  ],
  starterCode: {
    html: `<section>
  <h1>Hubungi Tim</h1>
  <p>Lengkapi form kontak berikut.</p>

  <img src="images/contact-illustration.png" />

  <form>
    <!-- Tambahkan field nama, email, pesan, topik, dan button submit -->
  </form>
</section>`,
    css: "",
    js: "",
  },
  solutionCode: {
    html: `<section>
  <h1>Hubungi Tim</h1>
  <p>Lengkapi form kontak berikut.</p>

  <img src="images/contact-illustration.png" alt="Ilustrasi tim support menerima pesan kontak" />

  <form>
    <label for="name">Nama</label>
    <input id="name" name="name" type="text" required />

    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />

    <label for="message">Pesan</label>
    <textarea id="message" name="message" required></textarea>

    <label for="topic">Topik</label>
    <select id="topic" name="topic" required>
      <option value="">Pilih topik</option>
      <option value="support">Support</option>
      <option value="feedback">Feedback</option>
    </select>

    <button type="submit">Kirim pesan</button>
  </form>
</section>`,
    css: "",
    js: "",
  },
  checklist: [
    "Ada form.",
    "Ada field nama dan email.",
    "Ada textarea pesan.",
    "Ada select topik.",
    "Label memakai for yang sesuai dengan id field.",
    "Field penting memakai required.",
    "Ada button submit.",
    "Gambar bermakna punya alt text yang jelas.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "has-form", label: "Ada form.", type: "hasElement", target: "form" },
      { id: "name-label", label: "Label nama memakai for name.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "name" },
      { id: "name-input", label: "Input nama memakai id name.", type: "hasElementWithAttribute", target: "input", attribute: "id", valueIncludes: "name" },
      { id: "email-label", label: "Label email memakai for email.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "email" },
      { id: "email-input", label: "Input email memakai type email.", type: "hasElementWithAttribute", target: "input", attribute: "type", valueIncludes: "email" },
      { id: "has-textarea", label: "Ada textarea pesan.", type: "hasElement", target: "textarea" },
      { id: "message-label", label: "Label pesan memakai for message.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "message" },
      { id: "message-field", label: "Textarea memakai id message.", type: "hasElementWithAttribute", target: "textarea", attribute: "id", valueIncludes: "message" },
      { id: "has-select", label: "Ada select topik.", type: "hasElement", target: "select" },
      { id: "topic-label", label: "Label topik memakai for topic.", type: "hasElementWithAttribute", target: "label", attribute: "for", valueIncludes: "topic" },
      { id: "topic-field", label: "Select memakai id topic.", type: "hasElementWithAttribute", target: "select", attribute: "id", valueIncludes: "topic" },
      { id: "has-required", label: "Ada field required.", type: "hasElementWithAttribute", target: "input, textarea, select", attribute: "required" },
      { id: "submit-button", label: "Ada button submit.", type: "hasElementWithAttribute", target: "button", attribute: "type", valueIncludes: "submit" },
      { id: "has-image-alt", label: "Gambar punya alt text.", type: "hasElementWithAttribute", target: "img", attribute: "alt", mustHaveValue: true },
      { id: "alt-contact-context", label: "Alt menjelaskan konteks kontak.", type: "hasElementWithAttribute", target: "img", attribute: "alt", valueIncludes: "kontak" },
    ],
  },
  skillTags: ["HTML", "Forms", "Accessibility", "Assessment"],
};

export const formsBasicAccessibilityLessons: Lesson[] = [
  linkVsButtonLesson,
  formLabelInputLesson,
  textareaSelectRequiredFieldsLesson,
  altTextBasicLesson,
  keyboardNavigationBasicLesson,
  basicAccessibilityChecklistLesson,
  formsBasicAccessibilityAssessmentLesson,
];

export const formsBasicAccessibilityQuizzes: Quiz[] = [
  formsBasicAccessibilityAssessmentQuiz,
];

export const formsBasicAccessibilityChallenges: CodingChallenge[] = [
  buildBasicAccessibleFormChallenge,
  buildContactFormFieldsChallenge,
  writeUsefulAltTextChallenge,
  buildAccessibleContactFormChallenge,
];
