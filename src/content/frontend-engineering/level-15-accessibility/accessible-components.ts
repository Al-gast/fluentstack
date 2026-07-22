import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const accessibleComponentPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const accessibleComponentsModule: Module = {
  id: "accessible-components",
  trackId: "frontend-engineering",
  title: "Accessible Components",
  slug: "accessible-components",
  description:
    "Membangun component interaktif dengan focus, keyboard behavior, semantic structure, dan ARIA yang proporsional.",
  order: 48,
  lessonIds: [
    "modal-accessibility",
    "dropdown-accessibility",
    "tabs-accessibility",
    "component-focus-management",
    "aria-when-needed",
    "accessible-components-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Modal Accessibility",
    "Dropdown Accessibility",
    "Tabs",
    "Focus Management",
    "ARIA",
  ],
};

export const modalAccessibilityLesson: Lesson = {
  id: "modal-accessibility",
  trackId: "frontend-engineering",
  moduleId: "accessible-components",
  title: "Modal Accessibility",
  slug: "modal-accessibility",
  description:
    "Membuat modal kecil dengan label yang jelas, focus entry, close behavior, focus containment, dan focus return.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan modal sebagai interaction yang sementara mengambil perhatian user",
    "Memberi label dialog, close action, dan Escape behavior yang jelas",
    "Memindahkan serta menahan focus pada dialog kecil dengan control terbatas",
    "Mengembalikan focus ke trigger saat modal ditutup",
  ],
  skillTags: ["React", "Modal", "Focus Management", "Keyboard Navigation", "ARIA"],
  blocks: [
    {
      id: "modal-accessibility-intro",
      type: "text",
      title: "Modal bukan sekadar card di atas page",
      content:
        "Modal menghentikan journey sementara untuk meminta keputusan, input, atau konfirmasi. Karena content di belakangnya tidak lagi menjadi konteks utama, focus harus masuk ke dialog saat dibuka, tetap berada di dalam dialog selama dialog modal aktif, dan kembali ke trigger atau langkah workflow yang tepat setelah ditutup. Dialog juga perlu nama yang jelas serta close action yang terlihat. Menambahkan role dialog saja tidak memberi semua behavior tersebut. Pada latihan ini kita membangun dialog kecil dengan dua control agar pola focus dapat dibaca. Untuk dialog production yang memiliki form, scrolling, atau banyak control, gunakan pattern yang telah diuji dan lakukan keyboard review lebih luas.",
    },
    {
      id: "modal-accessibility-example",
      type: "code-example",
      title: "Dialog konfirmasi kecil dengan focus loop yang terbatas",
      language: "tsx",
      code: `import { useRef, useState } from "react";

export function LeaveLessonDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const leaveRef = useRef<HTMLButtonElement>(null);

  function openDialog() {
    setIsOpen(true);
    window.setTimeout(() => closeRef.current?.focus(), 0);
  }

  function closeDialog() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section>
      <button ref={triggerRef} type="button" onClick={openDialog}>
        Keluar dari lesson
      </button>
      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="leave-dialog-title"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeDialog();
          }}
        >
          <h2 id="leave-dialog-title">Keluar dari lesson?</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeDialog}
            onKeyDown={(event) => {
              if (event.key === "Tab" && event.shiftKey) {
                event.preventDefault();
                leaveRef.current?.focus();
              }
            }}
          >
            Tetap belajar
          </button>
          <button ref={leaveRef} type="button" onKeyDown={(event) => {
            if (event.key === "Tab" && !event.shiftKey) {
              event.preventDefault();
              closeRef.current?.focus();
            }
          }}>
            Keluar
          </button>
        </div>
      ) : null}
    </section>
  );
}`,
      explanation:
        "Dialog diberi nama lewat aria-labelledby, focus masuk ke close action setelah modal muncul, dan focus kembali ke trigger setelah close. Contoh ini hanya memiliki dua button sehingga loop Tab dapat ditunjukkan secara eksplisit. Dialog nyata membutuhkan review seluruh tabbable element, Shift+Tab, Escape, background inert, scroll, dan pilihan focus awal yang sesuai isi dialog.",
    },
    {
      id: "modal-accessibility-coding-practice",
      type: "coding-practice",
      challengeId: "improve-leave-lesson-dialog",
    },
    {
      id: "modal-accessibility-quick-check",
      type: "quick-check",
      question:
        "Saat modal konfirmasi dibuka dari button Keluar dari lesson, focus awal yang paling masuk akal untuk dialog kecil adalah",
      options: [
        "Control di dalam dialog, misalnya Tetap belajar atau close button yang dapat dipakai segera.",
        "Tetap di trigger di belakang modal agar user tidak kehilangan posisi.",
        "Heading page yang berada di belakang modal.",
        "Tidak perlu dipindahkan karena modal sudah terlihat secara visual.",
      ],
      correctAnswer:
        "Control di dalam dialog, misalnya Tetap belajar atau close button yang dapat dipakai segera.",
      explanation:
        "Ketika modal aktif, keyboard user perlu langsung berada pada context dialog. Setelah dialog selesai, focus return ke trigger menjaga user dapat melanjutkan workflow dengan jelas.",
    },
    {
      id: "modal-accessibility-callout",
      type: "callout",
      variant: "warning",
      title: "Dialog sederhana tidak otomatis menjadi pattern universal",
      content:
        "Jangan menyalin focus loop dua button ini untuk dialog panjang atau component library besar. Dialog dengan input, list, atau dynamic content membutuhkan perhitungan tabbable element yang lebih lengkap. Gunakan pattern yang teruji, lalu review behavior dengan keyboard dan screen reader pada project nyata.",
    },
    {
      id: "modal-accessibility-summary",
      type: "summary",
      points: [
        "Modal perlu nama, close action, focus entry, dan focus return yang dapat diuji.",
        "Modal dialog menahan Tab dan Shift+Tab di dalam dialog selama aktif.",
        "Escape umumnya menutup dialog bila tidak bertentangan dengan workflow penting.",
        "Role ARIA tanpa focus behavior belum membuat modal dapat dipakai keyboard.",
        "Berikutnya, dropdown dibaca dari tujuan interaction agar kita tidak memakai menu pattern kompleks untuk daftar link biasa.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "modal-accessibility-intro",
      "modal-accessibility-example",
      "modal-accessibility-coding-practice",
      "modal-accessibility-quick-check",
      "modal-accessibility-callout",
      "modal-accessibility-summary",
    ],
  },
};

export const dropdownAccessibilityLesson: Lesson = {
  id: "dropdown-accessibility",
  trackId: "frontend-engineering",
  moduleId: "accessible-components",
  title: "Dropdown Accessibility",
  slug: "dropdown-accessibility",
  description:
    "Memilih trigger, expanded state, keyboard close behavior, dan pattern native yang tepat untuk daftar action atau navigation.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan disclosure sederhana dari application menu yang kompleks",
    "Menghubungkan button trigger dengan content yang dibuka",
    "Menjaga state expanded dan focus return saat close",
    "Menghindari role menu ketika daftar link biasa sudah cukup",
  ],
  skillTags: ["React", "Dropdown", "aria-expanded", "Keyboard Navigation", "Native HTML"],
  blocks: [
    {
      id: "dropdown-accessibility-intro",
      type: "text",
      title: "Nama visual dropdown tidak menentukan keyboard modelnya",
      content:
        "Banyak UI menyebut panel kecil sebagai dropdown, tetapi tujuan interaction-nya bisa berbeda. Daftar link untuk berpindah ke halaman lain sering cukup sebagai disclosure yang dibuka oleh button lalu berisi anchor native. Sebaliknya, application menu dengan role menu memiliki keyboard model khusus, termasuk focus movement antar menuitem, dan tidak boleh dipakai hanya karena tampilannya berupa panel. Mulai dari pekerjaan user: apakah mereka membuka beberapa navigation link, memilih command aplikasi, atau mengubah satu value? Pilih primitive paling sederhana yang memenuhi behavior itu. Untuk disclosure course sederhana, trigger button menyatakan apakah panel terbuka, Escape menutup bila panel sementara, dan focus kembali ke trigger saat close.",
    },
    {
      id: "dropdown-accessibility-example",
      type: "code-example",
      title: "Disclosure resource course tanpa memaksakan role menu",
      language: "tsx",
      code: `import { useRef, useState } from "react";

export function CourseResources() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function closeResources() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="course-resources"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        Resource course
      </button>
      {isOpen ? (
        <ul id="course-resources" onKeyDown={(event) => {
          if (event.key === "Escape") closeResources();
        }}>
          <li><a href="#docs">Dokumentasi</a></li>
          <li><a href="#notes">Catatan</a></li>
        </ul>
      ) : null}
    </section>
  );
}`,
      explanation:
        "Button menyatakan state lewat aria-expanded dan menghubungkan panel dengan aria-controls. Panel berisi link native sehingga Tab dapat keluar dari daftar seperti navigation biasa; ini bukan role menu. Escape hanya menangani panel sementara dan mengembalikan focus ke trigger. Bila kebutuhan berubah menjadi command menu dengan Arrow key dan menuitem, gunakan APG menu button pattern secara penuh, bukan sebagian attribute saja.",
    },
    {
      id: "dropdown-accessibility-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-resources-disclosure",
    },
    {
      id: "dropdown-accessibility-quick-check",
      type: "quick-check",
      question:
        "Panel Resource course hanya berisi dua link dokumentasi. Pattern awal yang paling proporsional adalah",
      options: [
        "Button disclosure dengan aria-expanded dan daftar link native, tanpa role menu.",
        "div role=menu dengan link yang masih memakai behavior Tab normal.",
        "span yang dibuka dengan mouse hover saja.",
        "Input text yang diubah menjadi menu lewat CSS.",
      ],
      correctAnswer:
        "Button disclosure dengan aria-expanded dan daftar link native, tanpa role menu.",
      explanation:
        "Menu role membawa keyboard expectation tambahan. Untuk daftar navigation link yang sederhana, disclosure plus anchor native lebih kecil, mudah diuji, dan sesuai tujuan user.",
    },
    {
      id: "dropdown-accessibility-summary",
      type: "summary",
      points: [
        "Pilih dropdown pattern dari tugas user, bukan dari nama atau bentuk visual panel.",
        "Disclosure sederhana dapat memakai button, aria-expanded, aria-controls, dan content native.",
        "Escape serta focus return membantu panel sementara ditutup tanpa membuat user kehilangan context.",
        "Role menu hanya digunakan bila semua keyboard expectation menu benar-benar diimplementasikan.",
        "Berikutnya, tabs membutuhkan hubungan role dan keyboard movement yang lebih spesifik daripada disclosure sederhana.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "dropdown-accessibility-intro",
      "dropdown-accessibility-example",
      "dropdown-accessibility-coding-practice",
      "dropdown-accessibility-quick-check",
      "dropdown-accessibility-summary",
    ],
  },
};

export const tabsAccessibilityLesson: Lesson = {
  id: "tabs-accessibility",
  trackId: "frontend-engineering",
  moduleId: "accessible-components",
  title: "Tabs Accessibility",
  slug: "tabs-accessibility",
  description:
    "Membuat tabs kecil dengan hubungan tablist, tab, tabpanel, selection state, dan keyboard movement yang konsisten.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan hubungan tablist, tab, dan tabpanel",
    "Menyatakan tab yang aktif serta panel yang dikontrolnya",
    "Mendukung Arrow key, Home, dan End pada tab kecil",
    "Membedakan tabs dari link navigation atau disclosure biasa",
  ],
  skillTags: ["React", "Tabs", "ARIA", "Keyboard Navigation", "Focus Management"],
  blocks: [
    {
      id: "tabs-accessibility-intro",
      type: "text",
      title: "Tabs adalah satu set panel yang berbagi satu area content",
      content:
        "Tabs cocok ketika beberapa panel berada pada konteks yang sama dan user berpindah di dalam satu area content, misalnya Ringkasan, Materi, dan Catatan pada halaman lesson. Pattern ini bukan pengganti navigation antar route dan bukan disclosure berurutan. Karena tabs adalah composite widget, setiap tab perlu menyatakan apakah ia dipilih, panel mana yang ia kontrol, dan keyboard user perlu dapat bergerak antar tab tanpa menekan Tab untuk setiap item. Mulai dari set kecil yang benar-benar membutuhkan tabs. Bila content lebih mudah dibaca sebagai section biasa atau navigation link, gunakan primitive yang lebih sederhana.",
    },
    {
      id: "tabs-accessibility-example",
      type: "code-example",
      title: "Tab button dan panel yang terhubung",
      language: "tsx",
      code: `const tabs = ["Ringkasan", "Materi", "Catatan"];

<div role="tablist" aria-label="Detail lesson">
  {tabs.map((tab, index) => (
    <button
      key={tab}
      id={\`lesson-tab-\${index}\`}
      role="tab"
      aria-selected={index === activeIndex}
      aria-controls={\`lesson-panel-\${index}\`}
      tabIndex={index === activeIndex ? 0 : -1}
      onClick={() => selectTab(index)}
      onKeyDown={(event) => handleTabKeyDown(event, index)}
    >
      {tab}
    </button>
  ))}
</div>

<section
  id={\`lesson-panel-\${activeIndex}\`}
  role="tabpanel"
  aria-labelledby={\`lesson-tab-\${activeIndex}\`}
>
  ...
</section>`,
      explanation:
        "Setiap tab adalah button dengan role tab di dalam tablist. aria-selected menyatakan pilihan aktif dan aria-controls menghubungkan tab dengan panel. Hanya tab aktif masuk ke tab order reguler lewat tabIndex 0; tab lain -1 agar Arrow key dapat mengatur selection serta focus. Implementasi produksi perlu menguji arah horizontal atau vertikal, content panel, loading, dan apakah activation manual atau otomatis sesuai kebutuhan user.",
    },
    {
      id: "tabs-accessibility-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-detail-tabs",
    },
    {
      id: "tabs-accessibility-quick-check",
      type: "quick-check",
      question:
        "Kapan tabs lebih tepat daripada navigation link antar route?",
      options: [
        "Saat beberapa panel berada pada satu context page dan hanya satu panel detail yang aktif pada satu waktu.",
        "Saat setiap pilihan membawa user ke URL dan workflow baru yang mandiri.",
        "Saat content perlu ditampilkan berurutan tanpa selection user.",
        "Saat hanya ada satu action button pada card.",
      ],
      correctAnswer:
        "Saat beberapa panel berada pada satu context page dan hanya satu panel detail yang aktif pada satu waktu.",
      explanation:
        "Tabs mengelola panel terkait dalam satu context. Navigation link memberi destination berbeda dan memiliki expectation browser navigation yang lain.",
    },
    {
      id: "tabs-accessibility-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memberi role tab tanpa keyboard model tabs",
      content:
        "role tab, tablist, dan tabpanel bukan dekorasi semantic. Jika kamu memakai role tersebut, implementasikan selection state, hubungan id, focus order, dan Arrow key yang sesuai. Bila feature belum membutuhkan behavior itu, gunakan button biasa atau disclosure yang lebih jujur terhadap interaction yang tersedia.",
    },
    {
      id: "tabs-accessibility-summary",
      type: "summary",
      points: [
        "Tabs menghubungkan satu tablist dengan panel detail yang saling terkait.",
        "Tab aktif menyatakan aria-selected dan menjadi satu-satunya tab dalam tab order reguler.",
        "Arrow key, Home, dan End mendukung movement di dalam set tabs kecil.",
        "Gunakan tabs hanya bila content benar-benar berbagi satu context, bukan untuk menggantikan route navigation.",
        "Berikutnya, focus management diterapkan setelah perubahan UI agar feedback baru tidak muncul jauh dari posisi kerja user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "tabs-accessibility-intro",
      "tabs-accessibility-example",
      "tabs-accessibility-coding-practice",
      "tabs-accessibility-quick-check",
      "tabs-accessibility-callout",
      "tabs-accessibility-summary",
    ],
  },
};

export const componentFocusManagementLesson: Lesson = {
  id: "component-focus-management",
  trackId: "frontend-engineering",
  moduleId: "accessible-components",
  title: "Focus Management",
  slug: "component-focus-management",
  description:
    "Memindahkan focus setelah perubahan UI yang penting tanpa mencuri posisi user pada perubahan kecil.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menentukan kapan perubahan UI perlu mengarahkan focus",
    "Memfokuskan confirmation atau control berikutnya setelah action besar",
    "Menjaga focus tidak hilang ketika content diganti secara dinamis",
    "Menguji focus journey setelah open, close, save, atau remove action",
  ],
  skillTags: ["React", "Focus Management", "Dynamic UI", "Accessibility"],
  blocks: [
    {
      id: "component-focus-management-intro",
      type: "text",
      title: "Focus adalah posisi kerja user, bukan efek visual yang boleh dipindah sembarangan",
      content:
        "Perubahan UI yang besar dapat membuat keyboard dan screen reader user kehilangan context. Contohnya, saat draft lesson berhasil disimpan dan form diganti menjadi confirmation, focus yang tetap berada pada button lama dapat hilang bersama node tersebut. Pada kasus seperti itu, pindahkan focus secara sengaja ke confirmation atau action berikutnya yang menjelaskan hasilnya. Namun jangan melakukan focus jump pada setiap perubahan kecil seperti mengetik, filter ringan, atau update counter; itu justru mengganggu posisi kerja user. Pilih target berdasarkan pertanyaan sederhana: setelah action selesai, informasi atau control apa yang paling perlu ditemukan user sekarang?",
    },
    {
      id: "component-focus-management-example",
      type: "code-example",
      title: "Feedback simpan menerima focus setelah form diganti",
      language: "tsx",
      code: `import { useRef, useState } from "react";

export function LessonNote() {
  const [isSaved, setIsSaved] = useState(false);
  const confirmationRef = useRef<HTMLHeadingElement>(null);

  function saveNote() {
    setIsSaved(true);
    window.setTimeout(() => confirmationRef.current?.focus(), 0);
  }

  return isSaved ? (
    <section>
      <h2 ref={confirmationRef} tabIndex={-1}>Catatan tersimpan</h2>
      <button type="button">Kembali ke lesson</button>
    </section>
  ) : (
    <form>
      <label htmlFor="lesson-note">Catatan</label>
      <textarea id="lesson-note" />
      <button type="button" onClick={saveNote}>Simpan catatan</button>
    </form>
  );
}`,
      explanation:
        "heading confirmation diberi tabIndex -1 agar dapat menerima programmatic focus tanpa masuk ke Tab order normal. Focus berpindah hanya setelah form benar-benar berubah menjadi hasil simpan. Setelah user memahami status, mereka dapat melanjutkan ke action berikutnya. Pada product nyata, pastikan pesan failure memiliki strategy lain yang jelas dan jangan menutup form sebelum user dapat memperbaiki error.",
    },
    {
      id: "component-focus-management-coding-practice",
      type: "coding-practice",
      challengeId: "focus-saved-lesson-note-confirmation",
    },
    {
      id: "component-focus-management-quick-check",
      type: "quick-check",
      question:
        "Kapan memindahkan focus setelah state change paling layak dipertimbangkan?",
      options: [
        "Saat control aktif hilang atau feedback penting muncul di lokasi baru setelah action besar seperti save atau close.",
        "Setiap user mengetik satu karakter di input.",
        "Setiap counter visual berubah tanpa mengubah journey user.",
        "Hanya ketika mouse user meninggalkan viewport.",
      ],
      correctAnswer:
        "Saat control aktif hilang atau feedback penting muncul di lokasi baru setelah action besar seperti save atau close.",
      explanation:
        "Focus management menjaga context setelah perubahan yang mengubah posisi kerja user. Ia bukan animasi global yang boleh dipicu oleh semua state update.",
    },
    {
      id: "component-focus-management-summary",
      type: "summary",
      points: [
        "Focus perlu dikelola ketika UI mengganti atau menghapus posisi kerja user.",
        "Target focus harus menjelaskan hasil action atau memberi langkah berikutnya yang relevan.",
        "tabIndex -1 dapat dipakai pada target programmatic focus yang tidak perlu masuk tab order reguler.",
        "Jangan mencuri focus untuk update kecil yang tidak mengubah journey user.",
        "Berikutnya, kamu akan memilih ARIA sebagai informasi tambahan yang benar-benar dibutuhkan, bukan sebagai pengganti HTML native.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-focus-management-intro",
      "component-focus-management-example",
      "component-focus-management-coding-practice",
      "component-focus-management-quick-check",
      "component-focus-management-summary",
    ],
  },
};

export const ariaWhenNeededLesson: Lesson = {
  id: "aria-when-needed",
  trackId: "frontend-engineering",
  moduleId: "accessible-components",
  title: "ARIA When Needed",
  slug: "aria-when-needed",
  description:
    "Menentukan kapan HTML native sudah cukup dan kapan ARIA memberi informasi state atau relationship yang benar-benar diperlukan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Memilih HTML native sebelum menambah role ARIA",
    "Menggunakan aria-expanded dan aria-controls untuk state disclosure yang nyata",
    "Menghubungkan dialog atau tab dengan label serta controlled content",
    "Mengenali ARIA sebagai kontrak behavior, bukan atribut dekoratif",
  ],
  skillTags: ["ARIA", "Semantic HTML", "React", "Accessibility Review"],
  blocks: [
    {
      id: "aria-when-needed-intro",
      type: "text",
      title: "ARIA menambah informasi, bukan menggantikan behavior yang hilang",
      content:
        "HTML native sudah membawa banyak semantics dan keyboard behavior: button dapat menerima focus serta diaktifkan, anchor dengan href membawa user ke destination, input memiliki peran form, dan heading memberi structure. Ketika kita mengganti elemen tersebut dengan div lalu menambah role, kita juga mengambil tanggung jawab untuk membangun keyboard, focus, state, dan testing-nya. ARIA paling berguna ketika UI benar-benar memiliki state atau relationship yang tidak terlihat dari HTML saja, misalnya button disclosure yang mengontrol panel, dialog yang perlu diberi nama, atau tabs yang menghubungkan control dan panel. Tambahkan hanya attribute yang dapat kamu jaga tetap benar saat state berubah.",
    },
    {
      id: "aria-when-needed-example",
      type: "code-example",
      title: "Native first, ARIA untuk state dan relationship",
      language: "tsx",
      code: `// Tidak perlu role tambahan: button sudah native dan interaktif.
<button type="button" onClick={saveCourse}>Simpan course</button>

// Tidak perlu role link: href sudah memberi destination.
<a href="/lesson/semantic-html-review">Buka lesson</a>

// ARIA membantu karena button mengontrol panel yang berubah state.
<button
  type="button"
  aria-expanded={isOpen}
  aria-controls="course-notes"
  onClick={toggleNotes}
>
  Catatan course
</button>
{isOpen ? <section id="course-notes">...</section> : null}`,
      explanation:
        "Contoh pertama dan kedua sengaja tidak memakai role tambahan. Pada disclosure, aria-expanded memberi state terbuka atau tertutup yang perlu diketahui user, sedangkan aria-controls menjelaskan relationship dengan panel. Attribute itu harus selalu mengikuti state React; memberi aria-expanded=true pada panel yang sebenarnya tertutup justru menciptakan informasi yang salah.",
    },
    {
      id: "aria-when-needed-coding-practice",
      type: "coding-practice",
      challengeId: "choose-native-html-and-aria-support",
    },
    {
      id: "aria-when-needed-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis review note untuk pull request yang mengganti semua button dengan div role=button demi styling. Jelaskan risiko yang perlu ditangani ulang, kapan button native sudah cukup, dan satu contoh state atau relationship yang memang layak memakai ARIA. Gunakan bahasa yang membantu rekan tim memperbaiki code tanpa menyalahkan mereka.",
      placeholder:
        "Saya menyarankan kita mempertahankan button native untuk action seperti Simpan atau Buka catatan. Dengan div role=button, kita perlu memastikan focus, Enter, Space, disabled state, dan focus styling tetap benar. Button native sudah menangani dasar tersebut. ARIA tetap berguna ketika button membuka panel; aria-expanded dapat menyatakan state dan aria-controls menghubungkannya ke panel. Mari gunakan role tambahan hanya bila native element tidak menyatakan interaction yang kita butuhkan.",
      minimumCharacters: 350,
      checklist: [
        "Menyebut behavior native yang hilang ketika mengganti button.",
        "Menjelaskan kapan button native sudah cukup.",
        "Memberi contoh ARIA untuk state atau relationship nyata.",
        "Menjaga tone review tetap spesifik dan kolaboratif.",
      ],
      modelAnswer:
        "Saya menyarankan kita mempertahankan button native untuk action seperti Simpan atau Buka catatan. Ketika kita memakai div role=button, kita ikut bertanggung jawab memastikan div tersebut dapat menerima focus, diaktifkan dengan Enter dan Space, memiliki disabled state yang tepat, serta memperlihatkan focus indicator. Button native sudah membawa behavior dasar ini sehingga code lebih kecil dan lebih mudah diuji. ARIA tetap berguna bila ada informasi tambahan yang benar-benar dinamis, misalnya button disclosure memakai aria-expanded untuk menyatakan panel terbuka atau tertutup dan aria-controls untuk menghubungkan button ke panel. Mari gunakan attribute tersebut hanya ketika state React benar-benar menjaganya tetap sinkron, bukan sebagai pengganti elemen native.",
    },
    {
      id: "aria-when-needed-quick-check",
      type: "quick-check",
      question:
        "Kapan aria-expanded paling tepat digunakan?",
      options: [
        "Pada control yang benar-benar membuka atau menutup content dan nilainya ikut berubah sesuai state UI.",
        "Pada setiap paragraph agar screen reader membaca content lebih cepat.",
        "Pada link biasa yang selalu membawa user ke route baru.",
        "Pada button statis yang tidak mengontrol content apa pun.",
      ],
      correctAnswer:
        "Pada control yang benar-benar membuka atau menutup content dan nilainya ikut berubah sesuai state UI.",
      explanation:
        "ARIA state harus benar terhadap UI saat ini. Gunakan untuk relationship atau capability yang tidak cukup dinyatakan oleh HTML native, lalu jaga nilainya sinkron dengan state component.",
    },
    {
      id: "aria-when-needed-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Tidak ada ARIA lebih baik daripada ARIA yang salah",
      content:
        "Jangan menambah role, aria-label, atau aria-expanded hanya agar component terlihat lebih accessible saat dibaca. Attribute yang salah dapat memberi informasi keliru atau menciptakan expectation keyboard yang tidak pernah dipenuhi. Mulai dari HTML native, lalu tambahkan ARIA yang memiliki tujuan, state source, dan test plan yang jelas.",
    },
    {
      id: "aria-when-needed-summary",
      type: "summary",
      points: [
        "Native HTML memberi semantics serta keyboard behavior sebelum kita menulis ARIA apa pun.",
        "ARIA cocok untuk state dan relationship yang tidak dapat terlihat dari HTML saja.",
        "aria-expanded dan aria-controls harus selalu sinkron dengan state component.",
        "Role tambahan menambah tanggung jawab behavior serta testing, bukan hanya label.",
        "Uji Kompetensi berikutnya menggabungkan audit modal, disclosure, tabs, focus movement, dan keputusan ARIA pada satu component case.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "aria-when-needed-intro",
      "aria-when-needed-example",
      "aria-when-needed-coding-practice",
      "aria-when-needed-writing-practice",
      "aria-when-needed-quick-check",
      "aria-when-needed-callout",
      "aria-when-needed-summary",
    ],
  },
};

export const accessibleComponentsAssessmentLesson: Lesson = {
  id: "accessible-components-assessment",
  trackId: "frontend-engineering",
  moduleId: "accessible-components",
  title: "Uji Kompetensi Accessible Components",
  slug: "accessible-components-assessment",
  description:
    "Membuktikan kesiapan mengaudit satu component interaktif dari semantic structure, keyboard journey, focus, sampai ARIA state.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 85,
  objectives: [
    "Mengaudit modal, disclosure, tabs, dan perubahan focus dari sudut pandang user",
    "Menggunakan native control sebelum role tambahan",
    "Menyusun keyboard test plan untuk satu component React",
    "Menjelaskan trade-off accessibility dalam implementation note yang jelas",
  ],
  skillTags: ["Accessibility Audit", "React", "Keyboard Navigation", "ARIA", "Readiness Checkpoint"],
  blocks: [
    {
      id: "accessible-components-assessment-recap",
      type: "text",
      title: "Checkpoint: component interaktif harus dapat menjelaskan journey keyboard-nya",
      content:
        "Tim menambahkan dialog Hapus catatan, panel Resource course, dan tabs detail lesson. Dialog hanya diberi role tanpa focus handling. Resource panel memakai role menu tetapi masih berisi link biasa yang berpindah dengan Tab. Tabs dapat diklik mouse tetapi tidak menyatakan selection atau panel yang dikontrol. Pada checkpoint ini, jangan sekadar menambah attribute. Pilih primitive yang sesuai, jelaskan focus entry dan exit, lalu tulis keyboard walkthrough yang membuktikan behavior penting. Component yang lebih kecil, native, dan dapat diuji biasanya memberi hasil lebih baik daripada ARIA besar yang tidak lengkap.",
    },
    {
      id: "accessible-components-assessment-quiz",
      type: "quiz",
      quizId: "accessible-components-assessment-quiz",
    },
    {
      id: "accessible-components-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-accessible-delete-note-dialog-checkpoint",
    },
    {
      id: "accessible-components-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note untuk perbaikan component Hapus catatan. Jelaskan semantic trigger, modal labeling, focus entry, Tab dan Shift+Tab, Escape dan close action, focus return setelah close, serta satu alasan kamu tidak memakai ARIA lebih banyak dari yang diperlukan. Tambahkan langkah manual QA keyboard yang akan kamu jalankan pada project lokal.",
      placeholder:
        "Saya memakai button native untuk trigger Hapus catatan. Saat dibuka, dialog diberi role=dialog, aria-modal=true, dan aria-labelledby yang merujuk title. Focus masuk ke action aman di dalam dialog. Tab dan Shift+Tab tetap berputar di control dialog, Escape serta button Batal menutup dialog, lalu focus kembali ke trigger. Saya tidak menambah role menu atau aria-live karena component bukan menu dan feedback tidak perlu diumumkan sebagai live region. QA lokal: buka dengan Enter, cek focus awal, Tab maju/mundur, Escape, Batal, Konfirmasi, dan focus return.",
      minimumCharacters: 700,
      checklist: [
        "Menjelaskan native trigger serta label dialog.",
        "Menjelaskan focus entry, Tab, dan Shift+Tab di dalam dialog.",
        "Menjelaskan Escape, visible close action, dan focus return.",
        "Menjelaskan satu keputusan native versus ARIA secara spesifik.",
        "Menyusun langkah QA keyboard yang dapat dijalankan lokal.",
      ],
      modelAnswer:
        "Saya memakai button native untuk trigger Hapus catatan karena action ini mengubah state pada page saat ini dan button sudah memiliki focus serta activation keyboard bawaan. Saat dialog dibuka, container diberi role=dialog, aria-modal=true, dan aria-labelledby yang merujuk heading Hapus catatan? sehingga context dialog jelas. Focus masuk ke Batal sebagai action aman. Karena dialog kecil hanya memiliki Batal dan Hapus, Tab dari Hapus kembali ke Batal dan Shift+Tab dari Batal kembali ke Hapus; focus tidak keluar ke page di belakangnya. Escape dan Batal menutup dialog, lalu focus kembali ke trigger Hapus catatan agar user tetap tahu posisinya. Saya tidak memakai role menu atau aria-live karena component ini bukan daftar command dan confirmation tidak perlu menjadi pengumuman global. QA lokal saya: navigasi ke trigger dengan Tab, buka dengan Enter, cek focus awal, Tab maju serta Shift+Tab, coba Escape, Batal, dan Hapus, lalu pastikan focus return pada setiap close path dan focus ring tetap terlihat pada theme yang dipakai route.",
    },
    {
      id: "accessible-components-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca pattern resmi sebelum membuat widget custom",
      description:
        "Gunakan Authoring Practices Guide untuk memeriksa keyboard contract component yang benar-benar kamu bangun. Jangan menyalin role dari satu pattern ke component lain tanpa membaca interaction dan focus behavior yang ikut menjadi tanggung jawabnya.",
      links: [
        {
          source: "W3C WAI",
          title: "Dialog (Modal) Pattern",
          url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
          focus: [
            "Focus masuk ke dialog saat open serta kembali ke workflow yang tepat saat close.",
            "Tab dan Shift+Tab tetap di dalam modal dialog.",
            "Visible close action, Escape, dialog label, dan aria-modal.",
          ],
          ignoreForNow: [
            "Dialog bertingkat, date picker, dan library focus trap yang kompleks.",
          ],
        },
        {
          source: "W3C WAI",
          title: "ARIA Authoring Practices Patterns",
          url: "https://www.w3.org/WAI/ARIA/apg/patterns/",
          focus: [
            "Perbedaan disclosure, menu button, dan tabs sebelum memilih role.",
            "Keyboard contract yang datang bersama role menu atau tab.",
            "Kapan native HTML lebih kecil dan lebih tepat daripada custom widget.",
          ],
          ignoreForNow: [
            "Combobox, tree view, drag and drop, dan full widget library.",
          ],
        },
      ],
      followUpAction:
        "Pilih satu modal, dropdown, tabs, atau form field component pada project React atau Next.js lokal. Buat keyboard walkthrough, catat semantic serta ARIA state yang ada, perbaiki satu issue, lalu tulis note tentang perubahan dan sisa risiko.",
    },
    {
      id: "accessible-components-assessment-summary",
      type: "summary",
      points: [
        "Kamu dapat menilai modal dari label, focus entry, focus containment, close behavior, dan focus return.",
        "Kamu dapat membedakan disclosure link sederhana dari menu atau tabs dengan keyboard contract yang lebih berat.",
        "Kamu dapat memindahkan focus setelah perubahan UI besar tanpa mencuri posisi user pada update kecil.",
        "Kamu menggunakan ARIA untuk state serta relationship yang nyata sambil mempertahankan native HTML bila sudah cukup.",
        "Berikutnya, Accessibility Testing and Preferences akan menguji contrast, form error, reduced motion, screen reader smoke test, dan batas automated tooling.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "accessible-components-assessment-recap",
      "accessible-components-assessment-quiz",
      "accessible-components-assessment-coding-practice",
      "accessible-components-assessment-writing-practice",
      "accessible-components-assessment-documentation-bridge",
      "accessible-components-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const accessibleComponentsAssessmentQuiz: Quiz = {
  id: "accessible-components-assessment-quiz",
  lessonId: "accessible-components-assessment",
  title: "Uji Kompetensi Accessible Components",
  passingScore: 70,
  questions: [
    {
      id: "component-modal-focus",
      type: "multiple-choice",
      question:
        "Saat modal konfirmasi kecil dibuka, behavior focus yang tepat adalah",
      options: [
        "Focus masuk ke control yang relevan di dialog, tetap di dalamnya saat Tab, lalu kembali ke trigger ketika dialog ditutup.",
        "Focus tetap di page belakang agar user dapat memilih dialog atau background bersamaan.",
        "Focus dipindahkan ke address bar setiap dialog dibuka.",
        "Focus dihilangkan dari semua button supaya modal tidak dapat ditutup tanpa mouse.",
      ],
      correctAnswer:
        "Focus masuk ke control yang relevan di dialog, tetap di dalamnya saat Tab, lalu kembali ke trigger ketika dialog ditutup.",
      explanation:
        "Modal mengambil context sementara. Focus entry, containment, close action, Escape bila sesuai, dan focus return adalah satu journey yang perlu diuji bersama.",
    },
    {
      id: "component-disclosure-menu",
      type: "multiple-choice",
      question:
        "Panel Resource course hanya membuka tiga link dokumentasi. Pilihan paling tepat adalah",
      options: [
        "Disclosure button dengan aria-expanded serta link native, tanpa mengklaim sebagai menu.",
        "div role=menu tanpa Arrow key karena link sudah dapat diklik mouse.",
        "span hover yang tidak dapat menerima focus.",
        "role tab untuk setiap link resource.",
      ],
      correctAnswer:
        "Disclosure button dengan aria-expanded serta link native, tanpa mengklaim sebagai menu.",
      explanation:
        "Role menu membawa keyboard model tambahan. Daftar link sederhana lebih jujur dan lebih mudah dipakai sebagai disclosure dengan control native.",
    },
    {
      id: "component-tabs-contract",
      type: "multiple-choice",
      question:
        "Set tabs yang memakai role tab perlu menyediakan",
      options: [
        "tablist, aria-selected, hubungan aria-controls ke tabpanel, dan keyboard movement yang sesuai.",
        "Hanya warna aktif yang berbeda saat mouse hover.",
        "Link route untuk setiap tab tanpa panel terkait.",
        "aria-label pada setiap paragraph di dalam panel.",
      ],
      correctAnswer:
        "tablist, aria-selected, hubungan aria-controls ke tabpanel, dan keyboard movement yang sesuai.",
      explanation:
        "Tabs adalah composite widget. Role dan state perlu didukung relationship panel serta keyboard behavior, bukan hanya styling selected state.",
    },
    {
      id: "component-focus-after-change",
      type: "multiple-choice",
      question:
        "Kapan component sebaiknya mempertimbangkan memindahkan focus setelah state berubah?",
      options: [
        "Saat action besar mengganti atau menghapus posisi kerja user dan feedback baru perlu ditemukan.",
        "Pada setiap keystroke di text input.",
        "Pada setiap perubahan warna hover.",
        "Saat component tidak memiliki interaction apa pun.",
      ],
      correctAnswer:
        "Saat action besar mengganti atau menghapus posisi kerja user dan feedback baru perlu ditemukan.",
      explanation:
        "Focus management menjaga context setelah perubahan UI yang bermakna, misalnya open, close, save, atau remove. Focus tidak boleh dicuri untuk update kecil.",
    },
    {
      id: "component-native-first",
      type: "multiple-choice",
      question:
        "Mengapa mengganti button native dengan div role=button perlu ditinjau ketat?",
      options: [
        "Karena developer harus membangun serta menguji kembali focus, activation keyboard, state, dan feedback yang sudah dibawa button native.",
        "Karena CSS tidak dapat menargetkan div.",
        "Karena ARIA menghapus semua event click dari div.",
        "Karena button tidak boleh dipakai pada aplikasi React.",
      ],
      correctAnswer:
        "Karena developer harus membangun serta menguji kembali focus, activation keyboard, state, dan feedback yang sudah dibawa button native.",
      explanation:
        "ARIA menambah semantics, tetapi tidak otomatis membangun seluruh behavior native. Gunakan native element bila ia sudah menyatakan tugas user dengan tepat.",
    },
  ],
};

export const improveLeaveLessonDialogChallenge: CodingChallenge = {
  id: "improve-leave-lesson-dialog",
  lessonId: "modal-accessibility",
  title: "Improve leave lesson dialog",
  description:
    "Lengkapi modal konfirmasi agar memiliki label, focus entry, Escape, close action, focus loop kecil, dan focus return.",
  instructions: [
    "Fokus di tab TSX.",
    "Import useRef bersama useState untuk trigger serta dua control dialog.",
    "Beri container role dialog, aria-modal=true, dan aria-labelledby yang merujuk title terlihat.",
    "Saat dialog dibuka, pindahkan focus ke button Tetap belajar.",
    "Dukung Escape untuk menutup dialog serta kembalikan focus ke trigger.",
    "Pada dialog kecil ini, Tab dari Keluar kembali ke Tetap belajar dan Shift+Tab dari Tetap belajar menuju Keluar.",
    "Preview menjalankan modal kecil untuk mencoba keyboard flow; modal production dengan content lebih kompleks perlu pattern serta review tambahan.",
  ],
  starterCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useState } from "react";

export default function LeaveLessonDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setIsOpen(true)}>
        Keluar dari lesson
      </button>
      {isOpen ? (
        <div>
          <h2>Keluar dari lesson?</h2>
          <p>Progress yang belum disimpan mungkin hilang.</p>
          <button type="button" onClick={() => setIsOpen(false)}>
            Tetap belajar
          </button>
          <button type="button">Keluar</button>
        </div>
      ) : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useRef, useState } from "react";

export default function LeaveLessonDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const stayButtonRef = useRef<HTMLButtonElement>(null);
  const leaveButtonRef = useRef<HTMLButtonElement>(null);

  function openDialog() {
    setIsOpen(true);
    window.setTimeout(() => stayButtonRef.current?.focus(), 0);
  }

  function closeDialog() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section>
      <button ref={triggerRef} type="button" onClick={openDialog}>
        Keluar dari lesson
      </button>
      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="leave-dialog-title"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeDialog();
            }
          }}
        >
          <h2 id="leave-dialog-title">Keluar dari lesson?</h2>
          <p>Progress yang belum disimpan mungkin hilang.</p>
          <button
            ref={stayButtonRef}
            type="button"
            onClick={closeDialog}
            onKeyDown={(event) => {
              if (event.key === "Tab" && event.shiftKey) {
                event.preventDefault();
                leaveButtonRef.current?.focus();
              }
            }}
          >
            Tetap belajar
          </button>
          <button
            ref={leaveButtonRef}
            type="button"
            onKeyDown={(event) => {
              if (event.key === "Tab" && !event.shiftKey) {
                event.preventDefault();
                stayButtonRef.current?.focus();
              }
            }}
          >
            Keluar
          </button>
        </div>
      ) : null}
    </section>
  );
}`,
  },
  checklist: [
    "Trigger, Tetap belajar, dan Keluar memakai native button.",
    "Dialog memiliki role, aria-modal, dan label yang mengarah ke title terlihat.",
    "Focus masuk ke action aman saat modal muncul.",
    "Escape dan button Tetap belajar menutup dialog lalu mengembalikan focus ke trigger.",
    "Tab dan Shift+Tab tidak keluar dari dialog kecil ini.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LeaveLessonDialog",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "ref-import", label: "useRef diimport bersama useState.", type: "contains", target: 'import { useRef, useState } from "react";', valueIncludes: 'import { useRef, useState } from "react";' },
      { id: "dialog-role", label: "Container memakai role dialog.", type: "contains", target: 'role="dialog"', valueIncludes: 'role="dialog"' },
      { id: "modal-state", label: "Dialog menyatakan aria-modal true.", type: "contains", target: 'aria-modal="true"', valueIncludes: 'aria-modal="true"' },
      { id: "dialog-label", label: "Dialog terhubung ke title terlihat.", type: "contains", target: 'aria-labelledby="leave-dialog-title"', valueIncludes: 'aria-labelledby="leave-dialog-title"' },
      { id: "entry-focus", label: "Focus masuk ke Tetap belajar saat open.", type: "contains", target: "window.setTimeout(() => stayButtonRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => stayButtonRef.current?.focus(), 0);" },
      { id: "escape-close", label: "Escape menutup dialog.", type: "contains", target: 'event.key === "Escape"', valueIncludes: 'event.key === "Escape"' },
      { id: "return-focus", label: "Focus kembali ke trigger saat close.", type: "contains", target: "window.setTimeout(() => triggerRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => triggerRef.current?.focus(), 0);" },
      { id: "forward-loop", label: "Tab dari action terakhir kembali ke action pertama.", type: "contains", target: "stayButtonRef.current?.focus();", valueIncludes: "stayButtonRef.current?.focus();" },
      { id: "backward-loop", label: "Shift+Tab dari action pertama menuju action terakhir.", type: "contains", target: "leaveButtonRef.current?.focus();", valueIncludes: "leaveButtonRef.current?.focus();" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview modal keyboard",
    description:
      "Preview menjalankan modal kecil. Buka dengan keyboard, coba Tab, Shift+Tab, dan Escape, lalu pastikan focus kembali ke trigger setelah close.",
    lines: [
      "Dialog memiliki title serta action Tetap belajar dan Keluar.",
      "Focus masuk ke Tetap belajar saat dialog muncul.",
      "Escape atau Tetap belajar menutup dialog dan mengembalikan focus ke trigger.",
    ],
  },
  skillTags: ["React", "Modal", "Focus Management", "ARIA"],
};

export const buildCourseResourcesDisclosureChallenge: CodingChallenge = {
  id: "build-course-resources-disclosure",
  lessonId: "dropdown-accessibility",
  title: "Build course resources disclosure",
  description:
    "Buat disclosure Resource course dengan button native, expanded state, link native, Escape close, dan focus return.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan useState untuk state panel dan useRef untuk trigger.",
    "Buat button Resource course dengan aria-expanded dan aria-controls.",
    "Tampilkan list link native saat panel terbuka, tanpa role menu.",
    "Tutup panel saat Escape lalu kembalikan focus ke trigger.",
    "Pastikan value aria-expanded selalu mengikuti state isOpen.",
    "Preview menjalankan disclosure React kecil; keyboard behavior lengkap route lokal tetap perlu diuji setelah pattern diterapkan.",
  ],
  starterCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useState } from "react";

export default function CourseResources() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div onClick={() => setIsOpen((previous) => !previous)}>
        Resource course
      </div>
      {isOpen ? (
        <div>
          <a href="#docs">Dokumentasi</a>
          <a href="#notes">Catatan</a>
        </div>
      ) : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useRef, useState } from "react";

export default function CourseResources() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function closeResources() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="course-resources"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        Resource course
      </button>
      {isOpen ? (
        <ul
          id="course-resources"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeResources();
            }
          }}
        >
          <li><a href="#docs">Dokumentasi</a></li>
          <li><a href="#notes">Catatan</a></li>
        </ul>
      ) : null}
    </section>
  );
}`,
  },
  checklist: [
    "Trigger memakai button native, bukan div clickable.",
    "aria-expanded mengikuti state isOpen dan aria-controls menunjuk panel.",
    "Panel memakai list dengan link native, bukan role menu yang tidak lengkap.",
    "Escape menutup panel sementara dan mengembalikan focus ke trigger.",
    "Tab behavior serta focus ring diuji pada component lokal setelah pattern diterapkan.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "CourseResources",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "ref-import", label: "useRef diimport bersama useState.", type: "contains", target: 'import { useRef, useState } from "react";', valueIncludes: 'import { useRef, useState } from "react";' },
      { id: "native-trigger", label: "Trigger memakai button native.", type: "contains", target: "<button", valueIncludes: "<button" },
      { id: "expanded-state", label: "aria-expanded mengikuti isOpen.", type: "contains", target: "aria-expanded={isOpen}", valueIncludes: "aria-expanded={isOpen}" },
      { id: "controls-panel", label: "Trigger mengontrol course-resources.", type: "contains", target: 'aria-controls="course-resources"', valueIncludes: 'aria-controls="course-resources"' },
      { id: "panel-id", label: "Panel memiliki id course-resources.", type: "contains", target: 'id="course-resources"', valueIncludes: 'id="course-resources"' },
      { id: "native-list", label: "Panel memakai list native.", type: "contains", target: "<ul", valueIncludes: "<ul" },
      { id: "escape-close", label: "Escape menutup panel.", type: "contains", target: 'event.key === "Escape"', valueIncludes: 'event.key === "Escape"' },
      { id: "return-focus", label: "Focus kembali ke trigger saat close.", type: "contains", target: "window.setTimeout(() => triggerRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => triggerRef.current?.focus(), 0);" },
      { id: "no-menu-role", label: "Tidak memakai role menu untuk daftar link sederhana.", type: "doesNotContain", valueIncludes: 'role="menu"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview resource disclosure",
    description:
      "Preview menjalankan disclosure Resource course. Buka dengan keyboard, masuk ke link, lalu tekan Escape untuk menutup panel dan mengembalikan focus ke trigger.",
    lines: [
      "Button menyatakan state resource terbuka atau tertutup.",
      "Panel berisi link native yang dapat dibaca sebagai navigation biasa.",
      "Escape menutup panel sementara dan mengembalikan focus ke trigger.",
    ],
  },
  skillTags: ["React", "Disclosure", "aria-expanded", "Keyboard Navigation"],
};

export const buildCourseDetailTabsChallenge: CodingChallenge = {
  id: "build-course-detail-tabs",
  lessonId: "tabs-accessibility",
  title: "Build course detail tabs",
  description:
    "Lengkapi tabs detail course dengan tablist, selection state, tabpanel, serta Arrow, Home, dan End untuk set kecil ini.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan array tabs dan state activeIndex.",
    "Render button native dengan role tab di dalam role tablist.",
    "Hubungkan setiap tab ke panel melalui id, aria-controls, aria-selected, dan tabIndex.",
    "Dukung ArrowRight, ArrowLeft, Home, dan End untuk memilih sekaligus memfokuskan tab berikutnya.",
    "Render satu tabpanel yang dilabeli oleh tab aktif.",
    "Preview menjalankan tabs React kecil untuk mencoba keyboard movement. Gunakan tabs hanya bila content memang berbagi satu context page.",
  ],
  starterCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useState } from "react";

const tabs = ["Ringkasan", "Materi", "Catatan"];

export default function CourseDetailTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <h2>Detail course</h2>
      <div>
        {tabs.map((tab, index) => (
          <button key={tab} type="button" onClick={() => setActiveIndex(index)}>
            {tab}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex]} aktif.</div>
    </section>
  );
}`,
  },
  solutionCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useState } from "react";

const tabs = ["Ringkasan", "Materi", "Catatan"];

export default function CourseDetailTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  function selectTab(index: number, shouldMoveFocus = false) {
    setActiveIndex(index);

    if (shouldMoveFocus) {
      window.setTimeout(() => {
        document.getElementById(\`course-tab-\${index}\`)?.focus();
      }, 0);
    }
  }

  function handleTabKeyDown(event: { key: string; preventDefault: () => void }, index: number) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectTab((index + 1) % tabs.length, true);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectTab((index - 1 + tabs.length) % tabs.length, true);
    }

    if (event.key === "Home") {
      event.preventDefault();
      selectTab(0, true);
    }

    if (event.key === "End") {
      event.preventDefault();
      selectTab(tabs.length - 1, true);
    }
  }

  return (
    <section>
      <h2>Detail course</h2>
      <div role="tablist" aria-label="Detail course">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            id={\`course-tab-\${index}\`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={\`course-panel-\${index}\`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => selectTab(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <section
        id={\`course-panel-\${activeIndex}\`}
        role="tabpanel"
        aria-labelledby={\`course-tab-\${activeIndex}\`}
      >
        <h3>{tabs[activeIndex]}</h3>
        <p>{tabs[activeIndex]} course sedang ditampilkan.</p>
      </section>
    </section>
  );
}`,
  },
  checklist: [
    "Tabs memakai button native di dalam tablist.",
    "aria-selected, aria-controls, dan tabIndex mengikuti activeIndex.",
    "Panel memiliki role tabpanel serta aria-labelledby ke tab aktif.",
    "ArrowRight, ArrowLeft, Home, dan End menggerakkan selection dan focus pada set kecil ini.",
    "Tab behavior, panel content, dan orientation tetap perlu diuji pada component lokal yang sebenarnya.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "CourseDetailTabs",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "tabs-array", label: "Ada daftar tabs.", type: "contains", target: "const tabs = [", valueIncludes: "const tabs = [" },
      { id: "tablist", label: "Container memakai role tablist.", type: "contains", target: 'role="tablist"', valueIncludes: 'role="tablist"' },
      { id: "tab-role", label: "Button memakai role tab.", type: "contains", target: 'role="tab"', valueIncludes: 'role="tab"' },
      { id: "selected-state", label: "Selection state memakai activeIndex.", type: "contains", target: "aria-selected={index === activeIndex}", valueIncludes: "aria-selected={index === activeIndex}" },
      { id: "controls-panel", label: "Tab mengontrol panel yang sesuai.", type: "contains", target: "aria-controls={`course-panel-${index}`}", valueIncludes: "aria-controls={`course-panel-${index}`}" },
      { id: "roving-tabindex", label: "Hanya tab aktif masuk tab order reguler.", type: "contains", target: "tabIndex={index === activeIndex ? 0 : -1}", valueIncludes: "tabIndex={index === activeIndex ? 0 : -1}" },
      { id: "tabpanel", label: "Ada role tabpanel.", type: "contains", target: 'role="tabpanel"', valueIncludes: 'role="tabpanel"' },
      { id: "arrow-right", label: "ArrowRight didukung.", type: "contains", target: 'event.key === "ArrowRight"', valueIncludes: 'event.key === "ArrowRight"' },
      { id: "arrow-left", label: "ArrowLeft didukung.", type: "contains", target: 'event.key === "ArrowLeft"', valueIncludes: 'event.key === "ArrowLeft"' },
      { id: "home-key", label: "Home didukung.", type: "contains", target: 'event.key === "Home"', valueIncludes: 'event.key === "Home"' },
      { id: "end-key", label: "End didukung.", type: "contains", target: 'event.key === "End"', valueIncludes: 'event.key === "End"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview tabs keyboard",
    description:
      "Preview menjalankan tabs detail course. Fokuskan salah satu tab lalu coba ArrowRight, ArrowLeft, Home, dan End untuk berpindah antar panel.",
    lines: [
      "Hanya tab aktif berada di tab order reguler.",
      "Arrow key memindahkan selection serta focus di dalam tablist.",
      "Panel aktif terhubung kembali ke tab yang melabelinya.",
    ],
  },
  skillTags: ["React", "Tabs", "ARIA", "Keyboard Navigation"],
};

export const focusSavedLessonNoteConfirmationChallenge: CodingChallenge = {
  id: "focus-saved-lesson-note-confirmation",
  lessonId: "component-focus-management",
  title: "Focus saved lesson note confirmation",
  description:
    "Pindahkan focus ke confirmation setelah form catatan berubah menjadi saved state.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan state isSaved untuk mengganti form menjadi confirmation.",
    "Buat ref untuk heading confirmation.",
    "Setelah save, pindahkan focus ke heading confirmation dengan setTimeout.",
    "Beri tabIndex=-1 pada heading agar dapat menerima programmatic focus tanpa masuk tab order reguler.",
    "Jangan memindahkan focus saat learner masih mengetik di textarea.",
    "Preview menjalankan perubahan form menjadi confirmation; cek otomatis membaca focus target, sedangkan journey form nyata tetap perlu diuji lokal.",
  ],
  starterCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useState } from "react";

export default function LessonNote() {
  const [isSaved, setIsSaved] = useState(false);

  return isSaved ? (
    <section>
      <h2>Catatan tersimpan</h2>
      <button type="button" onClick={() => setIsSaved(false)}>
        Edit lagi
      </button>
    </section>
  ) : (
    <form>
      <label htmlFor="lesson-note">Catatan</label>
      <textarea id="lesson-note" />
      <button type="button" onClick={() => setIsSaved(true)}>
        Simpan catatan
      </button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useRef, useState } from "react";

export default function LessonNote() {
  const [isSaved, setIsSaved] = useState(false);
  const confirmationRef = useRef<HTMLHeadingElement>(null);

  function saveNote() {
    setIsSaved(true);
    window.setTimeout(() => confirmationRef.current?.focus(), 0);
  }

  return isSaved ? (
    <section>
      <h2 ref={confirmationRef} tabIndex={-1}>Catatan tersimpan</h2>
      <button type="button" onClick={() => setIsSaved(false)}>
        Edit lagi
      </button>
    </section>
  ) : (
    <form>
      <label htmlFor="lesson-note">Catatan</label>
      <textarea id="lesson-note" />
      <button type="button" onClick={saveNote}>
        Simpan catatan
      </button>
    </form>
  );
}`,
  },
  checklist: [
    "Focus berubah hanya sesudah save mengganti form menjadi confirmation.",
    "Heading confirmation menjadi target programmatic focus.",
    "tabIndex=-1 tidak memasukkan heading ke tab order reguler.",
    "Textarea tidak kehilangan focus saat learner masih mengedit.",
    "Error dan retry state tetap memerlukan focus strategy tersendiri pada form production.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "LessonNote",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "ref-import", label: "useRef diimport bersama useState.", type: "contains", target: 'import { useRef, useState } from "react";', valueIncludes: 'import { useRef, useState } from "react";' },
      { id: "confirmation-ref", label: "Heading confirmation memiliki ref.", type: "contains", target: "const confirmationRef = useRef<HTMLHeadingElement>(null);", valueIncludes: "const confirmationRef = useRef<HTMLHeadingElement>(null);" },
      { id: "save-state", label: "saveNote mengubah isSaved.", type: "contains", target: "setIsSaved(true);", valueIncludes: "setIsSaved(true);" },
      { id: "focus-confirmation", label: "Focus berpindah ke confirmation setelah save.", type: "contains", target: "window.setTimeout(() => confirmationRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => confirmationRef.current?.focus(), 0);" },
      { id: "confirmation-heading", label: "Heading confirmation memakai ref.", type: "contains", target: "<h2 ref={confirmationRef}", valueIncludes: "<h2 ref={confirmationRef}" },
      { id: "confirmation-tabindex", label: "Heading dapat menerima focus programmatic.", type: "contains", target: "tabIndex={-1}", valueIncludes: "tabIndex={-1}" },
      { id: "save-handler", label: "Button simpan memakai saveNote.", type: "contains", target: "onClick={saveNote}", valueIncludes: "onClick={saveNote}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview save confirmation",
    description:
      "Preview menjalankan perubahan dari form ke confirmation. Simpan catatan untuk melihat focus berpindah ke pesan hasil sebelum user melanjutkan ke action berikutnya.",
    lines: [
      "Form diganti menjadi confirmation setelah action simpan.",
      "Confirmation menerima programmatic focus tanpa menjadi stop Tab reguler.",
      "User dapat menemukan feedback baru tanpa kehilangan context setelah save.",
    ],
  },
  skillTags: ["React", "Focus Management", "Dynamic UI", "Accessibility"],
};

export const chooseNativeHtmlAndAriaSupportChallenge: CodingChallenge = {
  id: "choose-native-html-and-aria-support",
  lessonId: "aria-when-needed",
  title: "Choose native HTML and ARIA support",
  description:
    "Refactor action course agar memakai link dan button native, lalu gunakan ARIA hanya untuk disclosure state yang nyata.",
  instructions: [
    "Fokus di tab TSX.",
    "Ganti div role link dengan anchor href untuk membuka lesson.",
    "Ganti div role button Simpan course dengan button native.",
    "Gunakan button native untuk Catatan course yang mengontrol panel.",
    "Pertahankan aria-expanded={isNotesOpen} dan aria-controls=course-notes hanya pada control disclosure.",
    "Jangan menambah role button atau role link ketika element native sudah menyatakan tugas user.",
    "Cek otomatis membaca keputusan structure TSX. Preview tidak menjalankan component atau state React untuk practice ini.",
  ],
  starterCode: {
    ...accessibleComponentPracticeCode,
    tsx: `type CourseActionsProps = {
  isNotesOpen: boolean;
};

export default function CourseActions({ isNotesOpen }: CourseActionsProps) {
  return (
    <section>
      <div role="link">Buka lesson</div>
      <div role="button">Simpan course</div>
      <div role="button" aria-expanded={isNotesOpen}>
        Catatan course
      </div>
      {isNotesOpen ? <div id="course-notes">Catatan tersedia.</div> : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...accessibleComponentPracticeCode,
    tsx: `type CourseActionsProps = {
  isNotesOpen: boolean;
};

export default function CourseActions({ isNotesOpen }: CourseActionsProps) {
  return (
    <section>
      <a href="/lesson/modal-accessibility">Buka lesson</a>
      <button type="button">Simpan course</button>
      <button
        type="button"
        aria-expanded={isNotesOpen}
        aria-controls="course-notes"
      >
        Catatan course
      </button>
      {isNotesOpen ? <section id="course-notes">Catatan tersedia.</section> : null}
    </section>
  );
}`,
  },
  checklist: [
    "Buka lesson memakai anchor dengan href destination nyata.",
    "Simpan course memakai button native tanpa role tambahan.",
    "Catatan course memakai button karena ia mengubah state panel.",
    "aria-expanded dan aria-controls hanya dipakai untuk relationship disclosure yang nyata.",
    "Setiap attribute ARIA memiliki state source yang dapat dijaga tetap sinkron di component sebenarnya.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "react",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "native-link", label: "Buka lesson memakai anchor href.", type: "contains", target: '<a href="/lesson/modal-accessibility">Buka lesson</a>', valueIncludes: '<a href="/lesson/modal-accessibility">Buka lesson</a>' },
      { id: "native-save-button", label: "Simpan course memakai button native.", type: "contains", target: '<button type="button">Simpan course</button>', valueIncludes: '<button type="button">Simpan course</button>' },
      { id: "notes-button", label: "Catatan course memakai button native.", type: "contains", target: "<button", valueIncludes: "<button" },
      { id: "expanded-state", label: "aria-expanded mengikuti isNotesOpen.", type: "contains", target: "aria-expanded={isNotesOpen}", valueIncludes: "aria-expanded={isNotesOpen}" },
      { id: "controls-notes", label: "Button mengontrol course-notes.", type: "contains", target: 'aria-controls="course-notes"', valueIncludes: 'aria-controls="course-notes"' },
      { id: "notes-panel", label: "Panel memakai id course-notes.", type: "contains", target: 'id="course-notes"', valueIncludes: 'id="course-notes"' },
      { id: "no-button-role", label: "Tidak memakai role button yang redundant.", type: "doesNotContain", valueIncludes: 'role="button"' },
      { id: "no-link-role", label: "Tidak memakai role link yang redundant.", type: "doesNotContain", valueIncludes: 'role="link"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca keputusan native HTML dan ARIA disclosure. Preview tidak menjalankan component atau mengubah state isNotesOpen pada practice struktur ini.",
    lines: [
      "Destination memakai anchor dengan href nyata.",
      "Action memakai button native tanpa role tambahan.",
      "ARIA dipakai hanya untuk state serta relationship panel Catatan course.",
    ],
  },
  skillTags: ["React", "ARIA", "Semantic HTML", "Accessibility Review"],
};

export const buildAccessibleDeleteNoteDialogCheckpointChallenge: CodingChallenge = {
  id: "build-accessible-delete-note-dialog-checkpoint",
  lessonId: "accessible-components-assessment",
  title: "Build accessible delete note dialog checkpoint",
  description:
    "Perbaiki dialog Hapus catatan agar memiliki native trigger, dialog semantics, keyboard close, focus loop kecil, dan focus return.",
  instructions: [
    "Fokus di tab TSX.",
    "Gunakan button native sebagai trigger Hapus catatan.",
    "Beri dialog role=dialog, aria-modal=true, aria-labelledby, dan aria-describedby untuk pesan singkat.",
    "Pindahkan focus ke Batal setelah dialog terbuka.",
    "Dukung Escape dan Batal untuk menutup dialog serta mengembalikan focus ke trigger.",
    "Untuk dialog dua action ini, handle Tab dari Hapus ke Batal dan Shift+Tab dari Batal ke Hapus.",
    "Preview menjalankan checkpoint dialog kecil. Gunakan local QA untuk dialog production yang memiliki form, content panjang, atau control lebih banyak.",
  ],
  starterCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useState } from "react";

export default function DeleteNoteDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div onClick={() => setIsOpen(true)}>Hapus catatan</div>
      {isOpen ? (
        <div>
          <h2>Hapus catatan?</h2>
          <p>Tindakan ini tidak dapat dibatalkan.</p>
          <button type="button" onClick={() => setIsOpen(false)}>
            Batal
          </button>
          <button type="button">Hapus</button>
        </div>
      ) : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...accessibleComponentPracticeCode,
    tsx: `import { useRef, useState } from "react";

export default function DeleteNoteDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const deleteRef = useRef<HTMLButtonElement>(null);

  function openDialog() {
    setIsOpen(true);
    window.setTimeout(() => cancelRef.current?.focus(), 0);
  }

  function closeDialog() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section>
      <button ref={triggerRef} type="button" onClick={openDialog}>
        Hapus catatan
      </button>
      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-note-title"
          aria-describedby="delete-note-description"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeDialog();
            }
          }}
        >
          <h2 id="delete-note-title">Hapus catatan?</h2>
          <p id="delete-note-description">Tindakan ini tidak dapat dibatalkan.</p>
          <button
            ref={cancelRef}
            type="button"
            onClick={closeDialog}
            onKeyDown={(event) => {
              if (event.key === "Tab" && event.shiftKey) {
                event.preventDefault();
                deleteRef.current?.focus();
              }
            }}
          >
            Batal
          </button>
          <button
            ref={deleteRef}
            type="button"
            onKeyDown={(event) => {
              if (event.key === "Tab" && !event.shiftKey) {
                event.preventDefault();
                cancelRef.current?.focus();
              }
            }}
          >
            Hapus
          </button>
        </div>
      ) : null}
    </section>
  );
}`,
  },
  checklist: [
    "Trigger Hapus catatan memakai button native.",
    "Dialog memiliki nama dan deskripsi yang merujuk content terlihat.",
    "Focus masuk ke Batal saat dialog dibuka dan kembali ke trigger saat ditutup.",
    "Escape serta Batal memberi exit tanpa melakukan delete.",
    "Tab dan Shift+Tab tetap berada di dua action dialog kecil ini.",
    "Dialog production dengan control lebih banyak diperiksa memakai pattern serta keyboard QA lengkap.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "DeleteNoteDialog",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "ref-import", label: "useRef diimport bersama useState.", type: "contains", target: 'import { useRef, useState } from "react";', valueIncludes: 'import { useRef, useState } from "react";' },
      { id: "native-trigger", label: "Hapus catatan memakai button native.", type: "contains", target: "<button ref={triggerRef}", valueIncludes: "<button ref={triggerRef}" },
      { id: "dialog-role", label: "Container memakai role dialog.", type: "contains", target: 'role="dialog"', valueIncludes: 'role="dialog"' },
      { id: "modal-state", label: "Dialog menyatakan aria-modal true.", type: "contains", target: 'aria-modal="true"', valueIncludes: 'aria-modal="true"' },
      { id: "dialog-label", label: "Dialog terhubung ke title terlihat.", type: "contains", target: 'aria-labelledby="delete-note-title"', valueIncludes: 'aria-labelledby="delete-note-title"' },
      { id: "dialog-description", label: "Dialog terhubung ke description singkat.", type: "contains", target: 'aria-describedby="delete-note-description"', valueIncludes: 'aria-describedby="delete-note-description"' },
      { id: "entry-focus", label: "Focus masuk ke Batal saat open.", type: "contains", target: "window.setTimeout(() => cancelRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => cancelRef.current?.focus(), 0);" },
      { id: "escape-close", label: "Escape menutup dialog.", type: "contains", target: 'event.key === "Escape"', valueIncludes: 'event.key === "Escape"' },
      { id: "return-focus", label: "Focus kembali ke trigger saat close.", type: "contains", target: "window.setTimeout(() => triggerRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => triggerRef.current?.focus(), 0);" },
      { id: "forward-loop", label: "Tab dari Hapus kembali ke Batal.", type: "contains", target: "cancelRef.current?.focus();", valueIncludes: "cancelRef.current?.focus();" },
      { id: "backward-loop", label: "Shift+Tab dari Batal menuju Hapus.", type: "contains", target: "deleteRef.current?.focus();", valueIncludes: "deleteRef.current?.focus();" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview dialog checkpoint",
    description:
      "Preview menjalankan dialog Hapus catatan kecil. Gunakan keyboard untuk membuka dialog, mencoba Tab dan Shift+Tab, menekan Escape, lalu mengamati focus return ke trigger.",
    lines: [
      "Dialog memiliki title, description, dan action Batal serta Hapus.",
      "Focus awal berada di Batal saat dialog terbuka.",
      "Escape atau Batal menutup dialog tanpa melakukan action destruktif.",
    ],
  },
  skillTags: ["React", "Modal", "Keyboard Navigation", "Accessibility Audit"],
};
