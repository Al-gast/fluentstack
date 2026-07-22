import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const accessibilityPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const semanticReviewKeyboardNavigationModule: Module = {
  id: "semantic-review-keyboard-navigation",
  trackId: "frontend-engineering",
  title: "Semantic Review and Keyboard Navigation",
  slug: "semantic-review-keyboard-navigation",
  description:
    "Meninjau struktur UI, tab order, focus, dan jalan keluar keyboard agar halaman produk dapat dipakai tanpa mouse.",
  order: 47,
  lessonIds: [
    "semantic-html-review",
    "tab-order",
    "focus-visibility",
    "skip-links",
    "keyboard-traps",
    "semantic-keyboard-navigation-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Semantic HTML",
    "Keyboard Navigation",
    "Focus Visibility",
    "Skip Links",
    "Accessibility Review",
  ],
};

export const semanticHtmlReviewLesson: Lesson = {
  id: "semantic-html-review",
  trackId: "frontend-engineering",
  moduleId: "semantic-review-keyboard-navigation",
  title: "Semantic HTML Review",
  slug: "semantic-html-review",
  description:
    "Menilai struktur halaman dari tugas tiap bagian, bukan dari tampilan visual atau class CSS yang kebetulan dipakai.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Mengaudit landmark, heading, link, dan button pada satu page produk",
    "Memilih elemen HTML dari fungsi UI yang sebenarnya",
    "Membedakan navigation dari action yang mengubah state",
    "Menjelaskan dampak struktur semantic pada keyboard dan assistive technology",
  ],
  skillTags: ["Semantic HTML", "Landmarks", "Buttons", "Links", "Accessibility Audit"],
  blocks: [
    {
      id: "semantic-html-review-intro",
      type: "text",
      title: "Mulai audit dari tugas user, bukan dari tag yang terlihat serupa",
      content:
        "Pada page produk, CSS dapat membuat div, link, dan button terlihat hampir sama. Namun browser serta assistive technology membaca peran yang berbeda. Landmark seperti header, nav, dan main membantu orang menemukan bagian besar page. Heading memberi peta content. Link membawa user ke tujuan lain, sedangkan button menjalankan action pada konteks saat ini, misalnya membuka filter atau menyimpan bookmark. Review semantic bukan pekerjaan kosmetik setelah feature selesai. Ia membantu keyboard user memperoleh urutan, capability, dan nama control yang masuk akal tanpa kita menulis ulang behavior native dari awal.",
    },
    {
      id: "semantic-html-review-example",
      type: "code-example",
      title: "Dari tampilan generik ke struktur course yang dapat ditinjau",
      language: "html",
      code: `<!-- Sebelum: class menjelaskan style, bukan peran -->
<div class="course-top">
  <div class="brand">FluentStack</div>
  <div class="course-links">...</div>
</div>
<div class="course-content">
  <div class="course-title">React Intermediate</div>
  <div class="bookmark">Simpan course</div>
</div>

<!-- Sesudah: struktur serta action lebih jelas -->
<header>
  <a href="/learn">FluentStack</a>
  <nav aria-label="Navigasi course">...</nav>
</header>
<main>
  <h1>React Intermediate</h1>
  <button type="button">Simpan course</button>
</main>`,
      explanation:
        "Class CSS tetap boleh dipakai untuk styling, tetapi elemen native menyatakan fungsi yang tidak dapat diberikan oleh class. Link brand membawa user ke route lain. Button bookmark menjalankan action pada page saat ini. Struktur ini juga membuat tab order dan fokus lebih mudah diaudit pada lesson berikutnya.",
    },
    {
      id: "semantic-html-review-coding-practice",
      type: "coding-practice",
      challengeId: "audit-course-page-semantics",
    },
    {
      id: "semantic-html-review-quick-check",
      type: "quick-check",
      question:
        "Control Simpan course membuka atau menutup status bookmark tanpa berpindah route. Elemen mana yang tepat?",
      options: [
        "button karena control menjalankan action pada page saat ini.",
        "a tanpa href agar bentuknya dapat distyling seperti button.",
        "div dengan onClick agar layout lebih bebas.",
        "h2 karena status bookmark berkaitan dengan course.",
      ],
      correctAnswer: "button karena control menjalankan action pada page saat ini.",
      explanation:
        "Native button sudah dapat difokuskan dan diaktifkan dengan keyboard. Mengganti button dengan div atau link tanpa tujuan nyata menambah behavior yang harus dibangun ulang serta diuji sendiri.",
    },
    {
      id: "semantic-html-review-callout",
      type: "callout",
      variant: "common-mistake",
      title: "ARIA tidak menggantikan elemen yang tepat",
      content:
        "Jangan menempel role pada div hanya untuk meniru button atau landmark ketika HTML native tersedia. ARIA dapat memberi informasi tambahan saat dibutuhkan, tetapi tidak otomatis memberi seluruh keyboard behavior native. Pada module ini, mulai dari elemen HTML yang tepat dan audit hasilnya dengan keyboard.",
    },
    {
      id: "semantic-html-review-summary",
      type: "summary",
      points: [
        "Semantic review dimulai dari tugas user: navigasi, content utama, atau action.",
        "Landmark dan heading memberi peta page yang berguna bagi keyboard serta assistive technology.",
        "Link digunakan untuk destination, button untuk action pada konteks saat ini.",
        "Native HTML mengurangi behavior keyboard yang harus dibuat dan dipelihara sendiri.",
        "Berikutnya, struktur source yang baik dipakai untuk menilai apakah Tab bergerak dalam urutan yang dapat diprediksi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "semantic-html-review-intro",
      "semantic-html-review-example",
      "semantic-html-review-coding-practice",
      "semantic-html-review-quick-check",
      "semantic-html-review-callout",
      "semantic-html-review-summary",
    ],
  },
};

export const tabOrderLesson: Lesson = {
  id: "tab-order",
  trackId: "frontend-engineering",
  moduleId: "semantic-review-keyboard-navigation",
  title: "Tab Order",
  slug: "tab-order",
  description:
    "Menjaga urutan fokus mengikuti urutan baca dan tugas user tanpa memaksa browser dengan tabindex positif.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan source order sebagai dasar tab order native",
    "Mendeteksi urutan fokus yang membingungkan pada UI course",
    "Menghindari tabindex positif sebagai alat layout",
    "Melakukan walkthrough keyboard-only yang dapat diulang",
  ],
  skillTags: ["Keyboard Navigation", "Tab Order", "Source Order", "Native HTML"],
  blocks: [
    {
      id: "tab-order-intro",
      type: "text",
      title: "Tab seharusnya mengikuti cerita page yang sama dengan mata user",
      content:
        "Secara default, browser memindahkan fokus ke control interaktif sesuai source order HTML. Itulah alasan struktur markup perlu mengikuti urutan baca yang logis, bukan hanya posisi akhir setelah CSS grid atau flex. tabindex positif dapat memaksa lompatan ke urutan angka tertentu, tetapi ia mudah menjadi rapuh saat control ditambah atau layout berubah. Saat review, mulai dari tombol pertama setelah address bar, tekan Tab perlahan, lalu tanyakan apakah fokus bergerak ke action yang masuk akal. Bila fokus melompat ke footer, panel samping, atau action sekunder sebelum content utama, perbaiki struktur dan source order lebih dahulu.",
    },
    {
      id: "tab-order-example",
      type: "code-example",
      title: "Urutan source lebih aman daripada angka tabindex",
      language: "html",
      code: `<!-- Hindari: angka memaksa urutan yang mudah rusak -->
<button tabindex="3">Simpan</button>
<a href="#lesson" tabindex="1">Lanjutkan lesson</a>
<button tabindex="2">Buka filter</button>

<!-- Pilih: letakkan control mengikuti journey user -->
<a href="#lesson">Lanjutkan lesson</a>
<button type="button">Buka filter</button>
<button type="button">Simpan</button>`,
      explanation:
        "Contoh kedua membuat Tab mengikuti urutan HTML tanpa angka tambahan. Jika visual order berbeda dari source order, jangan langsung menambah tabindex positif. Tinjau apakah CSS atau struktur DOM dapat disusun ulang supaya pembaca visual dan keyboard memperoleh perjalanan yang konsisten.",
    },
    {
      id: "tab-order-coding-practice",
      type: "coding-practice",
      challengeId: "fix-course-tab-order",
    },
    {
      id: "tab-order-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan review singkat untuk page lesson yang saat ini melompat dari tombol Lanjutkan ke tombol Simpan di footer sebelum learner mencapai content utama. Jelaskan urutan keyboard yang kamu harapkan, perubahan structure atau source order yang akan kamu pilih, dan alasan kamu tidak memakai tabindex positif sebagai perbaikan cepat.",
      placeholder:
        "Saat menekan Tab, learner seharusnya menemukan skip link atau navigasi yang relevan, lalu link atau action utama di content sebelum action sekunder di footer. Saya akan menyusun source order mengikuti journey ini dan memakai CSS untuk tampilan. tabindex positif saya hindari karena angka tersebut mudah salah ketika control baru ditambahkan dan dapat membuat fokus tidak sesuai urutan baca page.",
      minimumCharacters: 300,
      checklist: [
        "Menjelaskan urutan keyboard yang diharapkan.",
        "Menyebut source order atau structure sebagai perbaikan utama.",
        "Menjelaskan risiko tabindex positif.",
        "Menghubungkan perubahan dengan journey learner.",
      ],
      modelAnswer:
        "Saya mengharapkan Tab bergerak dari control awal page ke navigasi yang relevan, kemudian ke link Lanjutkan atau action utama di content sebelum mencapai button Simpan di footer. Saya akan memindahkan markup action utama agar muncul lebih awal dalam source order dan membiarkan CSS mengatur posisi visualnya bila diperlukan. Saya tidak memakai tabindex positif karena angka urutan akan mudah salah saat feature lain ditambahkan. Dengan source order yang logis, keyboard user dan pembaca visual mendapat urutan journey yang sama dan review berikutnya lebih mudah dilakukan.",
    },
    {
      id: "tab-order-quick-check",
      type: "quick-check",
      question:
        "Perbaikan awal yang paling tepat saat tab order tidak sesuai alur page adalah",
      options: [
        "Tinjau source order serta semantic control sebelum mempertimbangkan tabindex.",
        "Beri tabindex positif unik pada setiap link dan button.",
        "Hilangkan focus dari action sekunder dengan CSS.",
        "Ganti semua button menjadi div agar urutannya bebas.",
      ],
      correctAnswer:
        "Tinjau source order serta semantic control sebelum mempertimbangkan tabindex.",
      explanation:
        "Urutan source native lebih stabil saat UI berkembang. tabindex positif sering menyembunyikan masalah struktur dan menciptakan lompatan baru pada keyboard navigation.",
    },
    {
      id: "tab-order-summary",
      type: "summary",
      points: [
        "Source order adalah dasar default tab order pada HTML native.",
        "Keyboard walkthrough perlu mengikuti alur tugas user, bukan hanya urutan DOM yang kebetulan ada.",
        "Hindari tabindex positif; perbaiki structure dan layout bila urutan membingungkan.",
        "Gunakan Tab dan Shift+Tab untuk memeriksa jalan maju serta mundur pada page nyata.",
        "Berikutnya, learner perlu selalu melihat di mana fokus berada saat walkthrough tersebut berjalan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "tab-order-intro",
      "tab-order-example",
      "tab-order-coding-practice",
      "tab-order-writing-practice",
      "tab-order-quick-check",
      "tab-order-summary",
    ],
  },
};

export const focusVisibilityLesson: Lesson = {
  id: "focus-visibility",
  trackId: "frontend-engineering",
  moduleId: "semantic-review-keyboard-navigation",
  title: "Focus Visibility",
  slug: "focus-visibility",
  description:
    "Membuat posisi keyboard focus terlihat jelas tanpa menghilangkan affordance native browser.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan mengapa focus indicator adalah informasi navigasi, bukan dekorasi",
    "Menggunakan :focus-visible untuk keyboard-focused control",
    "Menjaga outline tetap terlihat terhadap surface UI",
    "Mengaudit focus state pada link, button, dan form control",
  ],
  skillTags: ["CSS", "Focus Visible", "Keyboard Navigation", "Accessibility"],
  blocks: [
    {
      id: "focus-visibility-intro",
      type: "text",
      title: "Keyboard user perlu tahu posisi sebelum memilih action berikutnya",
      content:
        "Saat user menekan Tab, focus indicator memberi jawaban langsung: control mana yang sedang aktif dan dapat dioperasikan. Menghapus outline default tanpa pengganti membuat journey keyboard seperti berjalan tanpa penanda. focus state tidak harus sama dengan hover, karena hover menunjukkan pointer sedangkan focus menunjukkan lokasi input keyboard. Gunakan :focus-visible untuk memberi indicator yang jelas ketika browser menilai focus perlu terlihat, lalu periksa kontras ring terhadap background serta jaraknya dari component. Tujuannya bukan membuat ring paling ramai, melainkan membuat lokasi fokus dapat ditemukan cepat pada UI yang padat.",
    },
    {
      id: "focus-visibility-example",
      type: "code-example",
      title: "Focus ring yang jelas untuk link dan action course",
      language: "css",
      code: `.course-link:focus-visible,
.course-action:focus-visible {
  outline: 3px solid #0ea5e9;
  outline-offset: 3px;
}

/* Jangan lakukan ini tanpa pengganti yang setara */
.course-action:focus {
  /* outline: none; */
}`,
      explanation:
        "outline tidak mengubah ukuran layout seperti border, dan outline-offset memberi ruang agar ring tidak berhimpitan dengan edge button atau link. Selector :focus-visible menjaga style fokus tetap relevan untuk keyboard interaction. Nilai warna tetap harus diuji pada surface aplikasi yang sebenarnya; satu ring yang terlihat di background terang belum tentu cukup di semua theme.",
    },
    {
      id: "focus-visibility-coding-practice",
      type: "coding-practice",
      challengeId: "add-course-focus-visible",
    },
    {
      id: "focus-visibility-quick-check",
      type: "quick-check",
      question:
        "Mengapa menghapus outline default tanpa pengganti adalah masalah?",
      options: [
        "Keyboard user kehilangan petunjuk visual tentang control yang sedang menerima focus.",
        "Button tidak lagi dapat menerima click mouse.",
        "CSS tidak dapat memiliki selector lain setelah outline dihapus.",
        "Link otomatis berubah menjadi button native.",
      ],
      correctAnswer:
        "Keyboard user kehilangan petunjuk visual tentang control yang sedang menerima focus.",
      explanation:
        "Focus indicator adalah bagian dari navigation feedback. Browser memang memberi default ring, tetapi desain produk dapat menggantinya hanya bila hasil penggantinya tetap jelas dan dapat dipakai.",
    },
    {
      id: "focus-visibility-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menilai focus hanya dengan mouse",
      content:
        "Hover dapat terlihat baik saat pointer bergerak, tetapi ia tidak membuktikan keyboard user tahu posisi focus. Uji dengan keyboard dari awal page, pada background yang berbeda, dan pada control disabled atau selected bila state tersebut tersedia. Pastikan indicator tidak tertutup overlay atau terpotong container.",
    },
    {
      id: "focus-visibility-summary",
      type: "summary",
      points: [
        "Focus indicator memberi lokasi input keyboard yang sedang aktif.",
        "Jangan menghapus outline default tanpa state pengganti yang setara atau lebih jelas.",
        ":focus-visible membantu membedakan kebutuhan focus keyboard dari hover pointer.",
        "Periksa kontras, offset, clipping, dan state control pada UI nyata.",
        "Berikutnya, skip link memberi jalan cepat melewati navigasi yang berulang agar user lebih cepat mencapai main content.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "focus-visibility-intro",
      "focus-visibility-example",
      "focus-visibility-coding-practice",
      "focus-visibility-quick-check",
      "focus-visibility-callout",
      "focus-visibility-summary",
    ],
  },
};

export const skipLinksLesson: Lesson = {
  id: "skip-links",
  trackId: "frontend-engineering",
  moduleId: "semantic-review-keyboard-navigation",
  title: "Skip Links",
  slug: "skip-links",
  description:
    "Membuat jalur cepat dari awal page ke main content ketika navigation berulang tidak perlu ditelusuri satu per satu.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan kapan repeated navigation memerlukan skip link",
    "Menghubungkan anchor awal page ke landmark main yang jelas",
    "Menjaga skip link dapat ditemukan saat menerima focus",
    "Memasukkan skip link ke keyboard-only audit",
  ],
  skillTags: ["Skip Links", "Landmarks", "Keyboard Navigation", "Accessibility"],
  blocks: [
    {
      id: "skip-links-intro",
      type: "text",
      title: "Beri jalan singkat pada content yang berulang di setiap route",
      content:
        "Pada aplikasi dengan header, product navigation, dan beberapa link utilitas, keyboard user dapat perlu menekan Tab berkali-kali sebelum mencapai content utama. Skip link adalah anchor awal page yang membawa fokus atau posisi ke main content, sehingga navigation berulang dapat dilewati saat user membutuhkannya. Pattern ini paling berguna bila page memiliki blok navigation yang konsisten dan cukup panjang. Jangan menyembunyikannya dari keyboard user: skip link boleh tidak dominan secara visual sebelum fokus, tetapi harus muncul jelas ketika mendapat focus. Targetnya juga perlu stabil pada setiap route, sehingga main landmark adalah pilihan yang lebih aman daripada element dekoratif yang kadang hilang.",
    },
    {
      id: "skip-links-example",
      type: "code-example",
      title: "Skip link menuju landmark content utama",
      language: "html",
      code: `<a class="skip-link" href="#main-content">Lewati navigasi dan ke content utama</a>

<header>
  <a href="/learn">FluentStack</a>
  <nav aria-label="Navigasi utama">...</nav>
</header>

<main id="main-content" tabindex="-1">
  <h1>Frontend Engineering</h1>
  <p>Pilih module untuk melanjutkan belajar.</p>
</main>`,
      explanation:
        "href dan id harus merujuk target yang sama. main memberi landmark content utama, sedangkan tabindex=-1 memungkinkan target menerima programmatic focus tanpa masuk ke urutan Tab reguler. Pada local page, tekan Tab pertama kali lalu aktifkan skip link untuk memastikan location serta fokus benar-benar berpindah seperti yang diharapkan.",
    },
    {
      id: "skip-links-coding-practice",
      type: "coding-practice",
      challengeId: "build-skip-to-main-link",
    },
    {
      id: "skip-links-local-checklist",
      type: "callout",
      variant: "tip",
      title: "Checklist keyboard pada project lokal",
      content:
        "Buka satu route React atau Next.js lokal. Reload page, tekan Tab sekali, dan pastikan skip link muncul jelas. Aktifkan dengan Enter, lalu cek apakah focus atau viewport tiba di main content. Ulangi pada route lain yang memakai layout sama. FluentStack dapat memeriksa markup exercise, tetapi tidak dapat membuktikan behavior focus project lokalmu secara otomatis.",
    },
    {
      id: "skip-links-quick-check",
      type: "quick-check",
      question:
        "Target yang paling stabil untuk skip link pada page aplikasi adalah",
      options: [
        "Landmark main dengan id yang konsisten, misalnya main-content.",
        "Icon dekoratif pertama di dalam header.",
        "Button acak yang selalu berada di footer.",
        "Container visual yang hanya muncul di desktop.",
      ],
      correctAnswer:
        "Landmark main dengan id yang konsisten, misalnya main-content.",
      explanation:
        "main menyatakan area content utama dan biasanya tersedia lintas route. Target yang stabil menjaga skip link tetap berguna ketika content route berubah.",
    },
    {
      id: "skip-links-summary",
      type: "summary",
      points: [
        "Skip link membantu keyboard user melewati navigation berulang menuju content utama.",
        "Letakkan link di awal page dan hubungkan ke target main yang stabil.",
        "Skip link harus muncul saat focus, bukan disembunyikan dari keyboard user.",
        "Validasi markup tidak menggantikan walkthrough Tab dan Enter pada project lokal.",
        "Berikutnya, kamu akan memeriksa area interaktif yang membuat keyboard user tidak dapat menemukan jalan keluar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "skip-links-intro",
      "skip-links-example",
      "skip-links-coding-practice",
      "skip-links-local-checklist",
      "skip-links-quick-check",
      "skip-links-summary",
    ],
  },
};

export const keyboardTrapsLesson: Lesson = {
  id: "keyboard-traps",
  trackId: "frontend-engineering",
  moduleId: "semantic-review-keyboard-navigation",
  title: "Keyboard Traps",
  slug: "keyboard-traps",
  description:
    "Mendeteksi area interaktif yang mengurung keyboard user dan memberi jalur keluar yang jelas untuk panel sederhana.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan keyboard trap dari sudut pandang journey user",
    "Menguji Tab, Shift+Tab, Enter, dan Escape pada panel sederhana",
    "Memberi close action yang native serta dapat ditemukan",
    "Mengembalikan focus ke trigger setelah panel ditutup",
  ],
  skillTags: ["Keyboard Navigation", "Focus Management", "Escape Key", "Accessibility Debugging"],
  blocks: [
    {
      id: "keyboard-traps-intro",
      type: "text",
      title: "Area interaktif tidak boleh menjadi jalan buntu",
      content:
        "Keyboard trap terjadi ketika seseorang dapat masuk ke area interaktif tetapi tidak dapat keluar atau menemukan action untuk kembali dengan keyboard. Risiko ini sering muncul pada panel, overlay, menu custom, atau component yang memindahkan focus tanpa memikirkan jalan pulang. Untuk review dasar, jangan mulai dari library focus trap atau dialog yang kompleks. Pilih satu panel kecil, buka dengan keyboard, lalu uji apakah focus masuk ke control yang masuk akal, Tab dan Shift+Tab tetap dapat dipahami, Escape atau button Tutup bekerja bila panel memang bersifat sementara, dan focus kembali ke trigger setelah panel ditutup. Behavior ini harus diuji di browser, bukan disimpulkan dari markup saja.",
    },
    {
      id: "keyboard-traps-example",
      type: "code-example",
      title: "Panel catatan dengan jalan keluar keyboard yang jelas",
      language: "tsx",
      code: `import { useRef, useState } from "react";

export default function CourseNotesPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  function openNotes() {
    setIsOpen(true);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
  }

  function closeNotes() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section>
      <button ref={triggerRef} type="button" onClick={openNotes}>
        Buka catatan keyboard
      </button>
      {isOpen ? (
        <aside onKeyDown={(event) => event.key === "Escape" && closeNotes()}>
          <button ref={closeButtonRef} type="button" onClick={closeNotes}>
            Tutup catatan
          </button>
        </aside>
      ) : null}
    </section>
  );
}`,
      explanation:
        "Ini bukan implementasi modal production lengkap. Ia memperlihatkan pola review dasar untuk panel sementara: focus masuk ke close action saat dibuka, Escape dan button Tutup menutup panel, lalu focus kembali ke trigger agar keyboard user tidak kehilangan context. Component yang lebih kompleks akan dibahas pada module Accessible Components dengan pattern serta expectation yang lebih lengkap.",
    },
    {
      id: "keyboard-traps-coding-practice",
      type: "coding-practice",
      challengeId: "fix-course-notes-keyboard-exit",
    },
    {
      id: "keyboard-traps-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis bug note untuk panel Bantuan course yang dapat dibuka dengan keyboard, tetapi setelah dibuka focus tetap berada di trigger dan Escape tidak melakukan apa pun. Jelaskan langkah reproduksi keyboard-only, dampaknya pada user, perbaikan yang kamu usulkan, dan cara kamu akan menguji focus kembali setelah panel ditutup.",
      placeholder:
        "Langkah reproduksi: Tab ke button Buka bantuan, tekan Enter, lalu tekan Tab dan Escape. Saat ini user tidak mendapat focus yang jelas di panel dan Escape tidak menutupnya. Saya akan memindahkan focus ke button Tutup ketika panel terbuka, mendukung Escape untuk menutup panel sementara, serta mengembalikan focus ke trigger sesudah close. Saya akan menguji dengan Tab, Shift+Tab, Enter, dan Escape di browser sebelum menganggap issue selesai.",
      minimumCharacters: 350,
      checklist: [
        "Menyebut langkah reproduksi memakai keyboard.",
        "Menjelaskan dampak user tanpa asumsi teknis berlebihan.",
        "Menyebut close action dan Escape bila panel sementara.",
        "Menyebut focus return ke trigger serta cara mengujinya.",
      ],
      modelAnswer:
        "Langkah reproduksi: tekan Tab sampai button Buka bantuan menerima focus, tekan Enter, lalu coba menelusuri panel dengan Tab dan menutupnya dengan Escape. Saat ini panel muncul tetapi focus tetap pada trigger, sehingga user tidak tahu panel memiliki control apa. Escape juga tidak memberi jalan keluar. Saya akan memindahkan focus ke button Tutup segera setelah panel dirender, menjaga button Tutup sebagai control native, dan mendukung Escape untuk menutup panel sementara ini. Ketika panel ditutup, focus harus kembali ke Buka bantuan agar user tidak kehilangan posisi. Saya akan memeriksa alur ini dengan Tab, Shift+Tab, Enter, dan Escape di browser serta mencatat bila ada control yang tidak dapat dicapai atau focus terpotong overlay.",
    },
    {
      id: "keyboard-traps-quick-check",
      type: "quick-check",
      question:
        "Setelah panel sementara ditutup lewat Escape, focus yang paling masuk akal biasanya kembali ke",
      options: [
        "Trigger yang membuka panel agar user tetap memahami posisi sebelumnya.",
        "Awal document tanpa melihat action yang dilakukan user.",
        "Element dekoratif pertama pada page.",
        "Control tersembunyi di dalam panel yang sudah ditutup.",
      ],
      correctAnswer:
        "Trigger yang membuka panel agar user tetap memahami posisi sebelumnya.",
      explanation:
        "Focus return menjaga context. User dapat melanjutkan journey dari action yang tadi membuka panel, bukan dipindahkan ke lokasi yang tidak berkaitan.",
    },
    {
      id: "keyboard-traps-callout",
      type: "callout",
      variant: "important",
      title: "Jangan mengklaim panel aman hanya karena ada button Tutup",
      content:
        "Button Tutup saja belum membuktikan keyboard journey aman. Uji focus saat membuka, urutan Tab serta Shift+Tab di dalam panel, Escape bila sesuai pattern, focus return saat close, dan interaksi dengan control di belakang panel. FluentStack runtime dapat memperlihatkan contoh kecil, tetapi audit component production tetap perlu dilakukan di project lokalmu.",
    },
    {
      id: "keyboard-traps-summary",
      type: "summary",
      points: [
        "Keyboard trap adalah jalan buntu: user masuk ke area interaktif tetapi tidak dapat menemukan jalan keluar yang dapat dipakai.",
        "Panel sementara perlu open journey, close action, dan focus return yang dapat dijelaskan serta diuji.",
        "Tab, Shift+Tab, Enter, dan Escape adalah walkthrough dasar untuk component ini.",
        "Pola dialog, dropdown, dan focus management yang lebih kompleks akan dibangun pada module berikutnya.",
        "Sekarang Uji Kompetensi menggabungkan semantic review, keyboard order, focus, skip link, dan exit journey pada satu page.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "keyboard-traps-intro",
      "keyboard-traps-example",
      "keyboard-traps-coding-practice",
      "keyboard-traps-writing-practice",
      "keyboard-traps-quick-check",
      "keyboard-traps-callout",
      "keyboard-traps-summary",
    ],
  },
};

export const semanticKeyboardNavigationAssessmentLesson: Lesson = {
  id: "semantic-keyboard-navigation-assessment",
  trackId: "frontend-engineering",
  moduleId: "semantic-review-keyboard-navigation",
  title: "Uji Kompetensi Semantic Review and Keyboard Navigation",
  slug: "semantic-keyboard-navigation-assessment",
  description:
    "Membuktikan kesiapan mengaudit semantic structure dan keyboard journey pada satu page produk.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 85,
  objectives: [
    "Membedakan landmark, link, dan button dari tujuan user",
    "Memperbaiki tab order serta focus visibility dasar",
    "Menambahkan skip link menuju main content",
    "Menjelaskan keyboard-only audit dan risiko keyboard trap",
  ],
  skillTags: ["Accessibility Audit", "Keyboard Navigation", "Semantic HTML", "Focus", "Readiness Checkpoint"],
  blocks: [
    {
      id: "semantic-keyboard-navigation-assessment-recap",
      type: "text",
      title: "Checkpoint: keyboard user perlu jalur, lokasi, dan jalan keluar",
      content:
        "Sebuah route course memakai div untuk navigation dan bookmark action, memaksa urutan dengan tabindex positif, menghapus outline, serta tidak memiliki skip link. Saat panel catatan dibuka, focus tidak berpindah dan Escape tidak berfungsi. Pada checkpoint ini, audit satu page dari sudut pandang user yang tidak memakai mouse. Perbaiki structure yang dapat diuji secara deterministik, lalu tulis langkah keyboard-only untuk bagian yang tetap perlu dibuktikan di browser lokal. Jangan mengubah semua hal sekaligus tanpa alasan: jelaskan mengapa setiap perubahan membantu journey user.",
    },
    {
      id: "semantic-keyboard-navigation-assessment-quiz",
      type: "quiz",
      quizId: "semantic-keyboard-navigation-assessment-quiz",
    },
    {
      id: "semantic-keyboard-navigation-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-keyboard-ready-course-page-checkpoint",
    },
    {
      id: "semantic-keyboard-navigation-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis accessibility review note untuk route course pada checkpoint. Jelaskan semantic changes yang kamu buat, urutan Tab yang kamu harapkan dari awal route sampai main content, bagaimana skip link serta focus indicator membantu, dan langkah yang kamu gunakan untuk memeriksa panel catatan tidak menjadi keyboard trap. Akhiri dengan satu risiko yang masih perlu diuji di project lokal.",
      placeholder:
        "Saya akan mengganti container navigation dengan nav, content utama dengan main, dan bookmark dengan button karena ia mengubah state. Dari awal route, Tab harus menemukan skip link lalu navigation dan action utama dengan urutan source yang sama seperti alur baca. Skip link melompat ke main-content, sedangkan :focus-visible menunjukkan control yang aktif. Untuk panel catatan, saya menguji Tab, Shift+Tab, Enter, Escape, serta focus return ke trigger. Risiko yang masih perlu diuji adalah apakah focus ring terpotong oleh container pada viewport mobile.",
      minimumCharacters: 650,
      checklist: [
        "Menyebut perubahan landmark dan control native secara spesifik.",
        "Menjelaskan urutan keyboard yang diharapkan.",
        "Menjelaskan skip link dan focus visibility sebagai navigation feedback.",
        "Menyebut walkthrough panel: Tab, Shift+Tab, Enter, Escape, dan focus return.",
        "Menyebut satu risiko yang masih membutuhkan pengujian lokal.",
      ],
      modelAnswer:
        "Saya akan mengganti container navigation menjadi nav, membungkus content utama dengan main, dan mengubah bookmark menjadi button karena ia mengubah state course tanpa membawa user ke route lain. Dari awal route, Tab pertama harus menemukan skip link. Setelah itu user dapat melewati navigation bila diperlukan dan tiba di action serta content utama sesuai source order, bukan angka tabindex positif. Skip link akan menuju main-content, sedangkan :focus-visible memberi ring yang cukup jelas pada link dan button agar user mengetahui lokasi saat Tab bergerak. Untuk panel catatan, saya membuka panel dari trigger dengan Enter, memastikan focus berpindah ke close action, lalu mencoba Tab dan Shift+Tab untuk melihat apakah control yang penting dapat ditemukan. Saya menekan Escape untuk close dan memastikan focus kembali ke trigger. Risiko yang masih perlu diuji di project lokal adalah apakah focus ring tertutup oleh overflow container pada mobile dan apakah panel tetap mudah ditutup saat content di dalamnya lebih panjang.",
    },
    {
      id: "semantic-keyboard-navigation-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs saat menemukan masalah keyboard yang nyata",
      description:
        "Gunakan sumber resmi untuk menguji keputusan semantic dan keyboard pada page yang benar-benar kamu miliki. Mulai dari native HTML serta walkthrough keyboard sebelum mempertimbangkan ARIA atau library yang lebih kompleks.",
      links: [
        {
          source: "MDN",
          title: "Keyboard accessible",
          url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard",
          focus: [
            "Urutan focus native dan alasan menghindari tabindex lebih dari 0.",
            "Interactive semantics untuk control yang dapat difokuskan.",
            "Focus styling yang terlihat saat keyboard navigation.",
          ],
          ignoreForNow: [
            "Custom widget keyboard model yang kompleks dan shortcut global aplikasi.",
          ],
        },
        {
          source: "MDN",
          title: "HTML: A good basis for accessibility",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML",
          focus: [
            "Semantic HTML sebagai accessibility hook bawaan browser.",
            "Button dan link native untuk interaction yang umum.",
            "Skip link menuju main content dan source order yang bermakna.",
          ],
          ignoreForNow: [
            "ARIA widget pattern dan screen reader testing mendalam.",
          ],
        },
      ],
      followUpAction:
        "Audit satu route React atau Next.js lokal dengan keyboard saja. Catat landmark, heading, tab order, focus visibility, skip link, dan satu panel interaktif. Tulis issue yang ditemukan, perubahan yang dilakukan, serta behavior yang masih perlu diuji.",
    },
    {
      id: "semantic-keyboard-navigation-assessment-summary",
      type: "summary",
      points: [
        "Kamu dapat meninjau semantic structure dari tujuan user, bukan hanya dari visual UI.",
        "Kamu dapat memeriksa tab order, menjaga focus terlihat, dan menghindari tabindex positif sebagai perbaikan cepat.",
        "Kamu dapat menambahkan skip link menuju main content dan menjalankan keyboard-only walkthrough dasar.",
        "Kamu dapat menjelaskan mengapa panel sementara memerlukan jalan keluar serta focus return yang diuji.",
        "Berikutnya, Accessible Components akan menerapkan prinsip ini pada modal, dropdown, tabs, focus management, dan keputusan ARIA yang lebih spesifik.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "semantic-keyboard-navigation-assessment-recap",
      "semantic-keyboard-navigation-assessment-quiz",
      "semantic-keyboard-navigation-assessment-coding-practice",
      "semantic-keyboard-navigation-assessment-writing-practice",
      "semantic-keyboard-navigation-assessment-documentation-bridge",
      "semantic-keyboard-navigation-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const semanticKeyboardNavigationAssessmentQuiz: Quiz = {
  id: "semantic-keyboard-navigation-assessment-quiz",
  lessonId: "semantic-keyboard-navigation-assessment",
  title: "Uji Kompetensi Semantic Review and Keyboard Navigation",
  passingScore: 70,
  questions: [
    {
      id: "a11y-semantic-action",
      type: "multiple-choice",
      question:
        "Pada page course, control Bookmark mengubah status tersimpan tanpa berpindah halaman. Pilihan semantic yang tepat adalah",
      options: [
        "button karena control menjalankan action pada konteks saat ini.",
        "a tanpa href agar tampil seperti action.",
        "div dengan click handler saja.",
        "nav karena bookmark berada di dekat navigasi.",
      ],
      correctAnswer: "button karena control menjalankan action pada konteks saat ini.",
      explanation:
        "Native button sudah memiliki capability focus dan activation keyboard untuk action. Link digunakan ketika user menuju destination lain.",
    },
    {
      id: "a11y-tab-order",
      type: "multiple-choice",
      question:
        "Tab order pada route course melompat dari header ke footer karena layout CSS. Langkah awal paling tepat adalah",
      options: [
        "Tinjau source order dan susun markup mengikuti journey user sebelum memakai tabindex.",
        "Beri angka tabindex positif pada semua control agar terlihat berurutan.",
        "Hapus focus dari control footer dengan CSS.",
        "Ganti semua link dengan div supaya tidak ikut Tab.",
      ],
      correctAnswer:
        "Tinjau source order dan susun markup mengikuti journey user sebelum memakai tabindex.",
      explanation:
        "Focus native mengikuti source order. tabindex positif sering menambah urutan rapuh yang tidak cocok lagi ketika UI berkembang.",
    },
    {
      id: "a11y-focus-visible",
      type: "multiple-choice",
      question:
        "Mengapa :focus-visible berguna pada action course?",
      options: [
        "Ia dapat memberi focus indicator yang jelas untuk keyboard navigation tanpa menjadikan hover sebagai satu-satunya feedback.",
        "Ia membuat semua action hanya dapat dipakai dengan mouse.",
        "Ia menghapus kebutuhan semantic button dan link.",
        "Ia memindahkan focus ke control berikutnya secara otomatis.",
      ],
      correctAnswer:
        "Ia dapat memberi focus indicator yang jelas untuk keyboard navigation tanpa menjadikan hover sebagai satu-satunya feedback.",
      explanation:
        "Keyboard user perlu melihat control yang aktif. :focus-visible membantu desain memberi indicator yang relevan tanpa menghapus affordance focus.",
    },
    {
      id: "a11y-skip-link",
      type: "multiple-choice",
      question:
        "Skip link pada aplikasi dengan navigation panjang sebaiknya menuju",
      options: [
        "Landmark main yang stabil dengan id konsisten pada setiap route.",
        "Icon logo dekoratif di header.",
        "Action tersier yang hanya ada pada beberapa route.",
        "Container visual yang disembunyikan di viewport mobile.",
      ],
      correctAnswer:
        "Landmark main yang stabil dengan id konsisten pada setiap route.",
      explanation:
        "Target main memberi tujuan yang jelas untuk content utama dan lebih stabil ketika isi route berubah.",
    },
    {
      id: "a11y-panel-exit",
      type: "multiple-choice",
      question:
        "Panel catatan sementara ditutup lewat Escape. Ke mana focus sebaiknya kembali?",
      options: [
        "Ke trigger yang membuka panel agar context keyboard user tetap jelas.",
        "Ke awal document tanpa mempertimbangkan action sebelumnya.",
        "Ke control tersembunyi di dalam panel yang sudah tertutup.",
        "Ke element dekoratif paling dekat secara visual.",
      ],
      correctAnswer:
        "Ke trigger yang membuka panel agar context keyboard user tetap jelas.",
      explanation:
        "Focus return menjaga user dapat melanjutkan journey dari lokasi yang relevan. Ini perlu dibuktikan melalui walkthrough browser, bukan hanya dibaca dari code.",
    },
  ],
};

export const auditCoursePageSemanticsChallenge: CodingChallenge = {
  id: "audit-course-page-semantics",
  lessonId: "semantic-html-review",
  title: "Audit course page semantics",
  description:
    "Ganti struktur course berbasis div dengan landmark dan native control yang sesuai tugas user.",
  instructions: [
    "Tinjau setiap bagian dari fungsinya: brand menuju route, navigation berisi destination, dan bookmark adalah action.",
    "Gunakan header dan nav untuk bagian atas route.",
    "Gunakan main sebagai content utama dan section untuk daftar lesson.",
    "Ganti bookmark berbasis div dengan button native.",
    "Pertahankan h1 untuk judul course serta footer untuk informasi penutup.",
    "Cek otomatis membaca semantic markup. Preview hanya memperlihatkan struktur hasilnya.",
  ],
  starterCode: {
    ...accessibilityPracticeCode,
    html: `<div class="course-header">
  <div class="brand">FluentStack</div>
  <div class="course-navigation">
    <a href="#lessons">Daftar lesson</a>
    <a href="#progress">Progress</a>
  </div>
</div>

<div class="course-content">
  <h1>React Intermediate</h1>
  <div class="bookmark">Simpan course</div>
  <div class="lesson-list" id="lessons">
    <h2>Lesson berikutnya</h2>
    <p>Custom Hooks and Effects</p>
  </div>
</div>

<div class="course-footer" id="progress">Progress disimpan di browser.</div>`,
    css: `.course-header,
.course-content,
.course-footer {
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid #94a3b8;
}`,
    js: "",
  },
  solutionCode: {
    ...accessibilityPracticeCode,
    html: `<header class="course-header">
  <a class="brand" href="/learn">FluentStack</a>
  <nav aria-label="Navigasi course">
    <a href="#lessons">Daftar lesson</a>
    <a href="#progress">Progress</a>
  </nav>
</header>

<main class="course-content">
  <h1>React Intermediate</h1>
  <button class="bookmark" type="button">Simpan course</button>
  <section class="lesson-list" id="lessons">
    <h2>Lesson berikutnya</h2>
    <p>Custom Hooks and Effects</p>
  </section>
</main>

<footer class="course-footer" id="progress">Progress disimpan di browser.</footer>`,
    css: `.course-header,
.course-content,
.course-footer {
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid #94a3b8;
}`,
    js: "",
  },
  checklist: [
    "Brand memakai link dengan destination yang jelas.",
    "Navigation berada di dalam nav dengan label yang dapat dipahami.",
    "Content utama memakai main dan judul course memakai h1.",
    "Bookmark memakai button karena ia menjalankan action.",
    "Daftar lesson dan footer menyatakan peran page dengan jelas.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "header", label: "Ada landmark header.", type: "hasElement", target: "header" },
      { id: "nav", label: "Ada landmark nav.", type: "hasElement", target: "nav" },
      { id: "main", label: "Ada landmark main.", type: "hasElement", target: "main" },
      { id: "course-title", label: "Ada h1 untuk judul course.", type: "hasTextInElement", target: "h1", valueIncludes: "React Intermediate" },
      { id: "bookmark-button", label: "Bookmark memakai button native.", type: "hasTextInElement", target: "button", valueIncludes: "Simpan course" },
      { id: "lesson-section", label: "Daftar lesson memakai section.", type: "hasElement", target: "section" },
      { id: "footer", label: "Ada landmark footer.", type: "hasElement", target: "footer" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview semantic page",
    description:
      "Preview memperlihatkan page course dengan landmark dan native control. Cek otomatis membaca struktur HTML, bukan kualitas penuh audit assistive technology.",
    lines: [
      "Header dan nav memberi area navigation yang jelas.",
      "Main berisi h1, bookmark button, dan section lesson.",
      "Footer memuat informasi penutup route.",
    ],
  },
  skillTags: ["HTML", "Semantic HTML", "Accessibility Audit"],
};

export const fixCourseTabOrderChallenge: CodingChallenge = {
  id: "fix-course-tab-order",
  lessonId: "tab-order",
  title: "Fix course tab order",
  description:
    "Susun action course dalam source order yang mengikuti journey learner tanpa tabindex positif.",
  instructions: [
    "Baca journey learner dari action utama ke action pendukung.",
    "Letakkan link Lanjutkan lesson lebih dulu dalam source order.",
    "Letakkan button filter lalu button Simpan setelahnya.",
    "Hapus semua attribute tabindex dari control ini.",
    "Gunakan a untuk destination lesson dan button untuk action filter serta simpan.",
    "Cek otomatis membaca urutan markup. Preview tidak dapat membuktikan seluruh tab walkthrough project lokal.",
  ],
  starterCode: {
    ...accessibilityPracticeCode,
    html: `<main>
  <h1>Frontend Engineering</h1>
  <button tabindex="3" type="button">Simpan course</button>
  <a tabindex="1" href="#next-lesson">Lanjutkan lesson</a>
  <button tabindex="2" type="button">Buka filter</button>

  <section id="next-lesson">
    <h2>Lesson berikutnya</h2>
    <p>Semantic Review</p>
  </section>
</main>`,
    css: `main {
  font-family: sans-serif;
  display: grid;
  gap: 12px;
  max-width: 520px;
}`,
    js: "",
  },
  solutionCode: {
    ...accessibilityPracticeCode,
    html: `<main>
  <h1>Frontend Engineering</h1>
  <a href="#next-lesson">Lanjutkan lesson</a>
  <button type="button">Buka filter</button>
  <button type="button">Simpan course</button>

  <section id="next-lesson">
    <h2>Lesson berikutnya</h2>
    <p>Semantic Review</p>
  </section>
</main>`,
    css: `main {
  font-family: sans-serif;
  display: grid;
  gap: 12px;
  max-width: 520px;
}`,
    js: "",
  },
  checklist: [
    "Lanjutkan lesson adalah link pertama dalam source order.",
    "Filter dan Simpan memakai native button.",
    "Tidak ada tabindex positif atau attribute tabindex yang tidak diperlukan.",
    "Urutan source cocok dengan journey learner yang diharapkan.",
    "Tab dan Shift+Tab tetap perlu diuji pada route lokal setelah markup diterapkan.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "no-tabindex", label: "Tidak ada tabindex yang memaksa urutan.", type: "doesNotContain", valueIncludes: "tabindex=" },
      { id: "continue-link", label: "Ada link Lanjutkan lesson.", type: "hasTextInElement", target: "a", valueIncludes: "Lanjutkan lesson" },
      { id: "filter-button", label: "Filter memakai button.", type: "hasTextInElement", target: "button", valueIncludes: "Buka filter" },
      { id: "save-button", label: "Simpan memakai button.", type: "hasTextInElement", target: "button", valueIncludes: "Simpan course" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview tab order",
    description:
      "Preview menampilkan control dalam source order yang dibenahi. Cek otomatis memastikan markup tidak memakai tabindex, tetapi walkthrough Tab dan Shift+Tab tetap dilakukan pada browser project nyata.",
    lines: [
      "Lanjutkan lesson muncul sebelum action pendukung.",
      "Filter dan Simpan mempertahankan semantic button native.",
      "Tidak ada angka tabindex yang memaksa focus order.",
    ],
  },
  skillTags: ["HTML", "Keyboard Navigation", "Tab Order"],
};

export const addCourseFocusVisibleChallenge: CodingChallenge = {
  id: "add-course-focus-visible",
  lessonId: "focus-visibility",
  title: "Add course focus-visible styles",
  description:
    "Ganti outline yang dihapus dengan focus indicator yang cukup jelas untuk link dan button course.",
  instructions: [
    "Fokus di tab CSS.",
    "Hapus pattern outline: none yang menghilangkan indicator keyboard.",
    "Tambahkan selector .course-link:focus-visible.",
    "Tambahkan selector .course-action:focus-visible.",
    "Gunakan outline setidaknya 3px dan beri outline-offset agar ring terlihat terpisah dari edge control.",
    "Preview memperlihatkan styling CSS; cek otomatis membaca selector dan property, bukan kontras semua theme aplikasi.",
  ],
  starterCode: {
    html: `<main class="course-page">
  <h1>Course accessibility review</h1>
  <a class="course-link" href="#lesson">Lanjutkan lesson</a>
  <button class="course-action" type="button">Simpan course</button>
  <section id="lesson">
    <h2>Semantic Review</h2>
    <p>Gunakan Tab untuk memeriksa focus.</p>
  </section>
</main>`,
    css: `.course-page {
  font-family: sans-serif;
  display: grid;
  gap: 16px;
  padding: 24px;
}

.course-link,
.course-action {
  outline: none;
}`,
    js: "",
  },
  solutionCode: {
    html: `<main class="course-page">
  <h1>Course accessibility review</h1>
  <a class="course-link" href="#lesson">Lanjutkan lesson</a>
  <button class="course-action" type="button">Simpan course</button>
  <section id="lesson">
    <h2>Semantic Review</h2>
    <p>Gunakan Tab untuk memeriksa focus.</p>
  </section>
</main>`,
    css: `.course-page {
  font-family: sans-serif;
  display: grid;
  gap: 16px;
  padding: 24px;
}

.course-link:focus-visible {
  outline: 3px solid #0369a1;
  outline-offset: 3px;
}

.course-action:focus-visible {
  outline: 3px solid #0369a1;
  outline-offset: 3px;
}`,
    js: "",
  },
  checklist: [
    "Tidak ada outline: none tanpa pengganti focus state.",
    "Link memiliki style :focus-visible yang jelas.",
    "Button memiliki style :focus-visible yang jelas.",
    "Outline dan offset memberi indicator yang tidak menempel pada edge control.",
    "Kontras focus ring tetap perlu ditinjau pada setiap theme dan surface lokal.",
  ],
  validation: {
    mode: "css",
    checks: [
      { id: "no-outline-none", label: "Outline tidak dihapus tanpa pengganti.", type: "cssForbiddenTextAbsent", valueIncludes: "outline: none" },
      { id: "link-focus-selector", label: "Link memiliki selector :focus-visible.", type: "cssSelectorExists", target: ".course-link:focus-visible" },
      { id: "link-focus-outline", label: "Link memiliki outline focus.", type: "cssSelectorPropertyExists", target: ".course-link:focus-visible", property: "outline" },
      { id: "link-focus-offset", label: "Link memiliki outline offset.", type: "cssSelectorPropertyExists", target: ".course-link:focus-visible", property: "outline-offset" },
      { id: "action-focus-selector", label: "Action memiliki selector :focus-visible.", type: "cssSelectorExists", target: ".course-action:focus-visible" },
      { id: "action-focus-outline", label: "Action memiliki outline focus.", type: "cssSelectorPropertyExists", target: ".course-action:focus-visible", property: "outline" },
      { id: "action-focus-offset", label: "Action memiliki outline offset.", type: "cssSelectorPropertyExists", target: ".course-action:focus-visible", property: "outline-offset" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview focus styles",
    description:
      "Preview memperlihatkan link dan action course. Gunakan keyboard untuk melihat focus state; cek otomatis membaca selector serta property CSS, bukan rasio kontras seluruh design system.",
    lines: [
      "Link memperlihatkan outline saat focus-visible.",
      "Button memperlihatkan outline saat focus-visible.",
      "Focus ring memiliki ruang dari edge control.",
    ],
  },
  skillTags: ["CSS", "Focus Visible", "Accessibility"],
};

export const buildSkipToMainLinkChallenge: CodingChallenge = {
  id: "build-skip-to-main-link",
  lessonId: "skip-links",
  title: "Build skip-to-main link",
  description:
    "Tambahkan skip link yang membawa keyboard user melewati navigation berulang menuju main content.",
  instructions: [
    "Tambahkan anchor skip link sebelum header dan navigation.",
    "Gunakan href yang mengarah ke #main-content.",
    "Tambahkan id main-content pada landmark main.",
    "Tambahkan tabindex=-1 pada main agar target dapat menerima focus tanpa masuk ke tab order reguler.",
    "Jaga navigation tetap berada di nav dan content utama tetap berada di main.",
    "Cek otomatis membaca hubungan href dan id. Preview tidak dapat membuktikan focus behavior seluruh route Next.js lokal.",
  ],
  starterCode: {
    ...accessibilityPracticeCode,
    html: `<header>
  <a href="/learn">FluentStack</a>
  <nav aria-label="Navigasi utama">
    <a href="/learn">Semua track</a>
    <a href="/dashboard">Dashboard</a>
    <a href="/profile">Profile</a>
  </nav>
</header>

<main>
  <h1>Frontend Engineering</h1>
  <p>Lanjutkan dari module terakhir yang kamu buka.</p>
</main>`,
    css: `.skip-link {
  position: absolute;
  left: 16px;
  top: 16px;
  transform: translateY(-160%);
}

.skip-link:focus-visible {
  transform: translateY(0);
  outline: 3px solid #0369a1;
}`,
    js: "",
  },
  solutionCode: {
    ...accessibilityPracticeCode,
    html: `<a class="skip-link" href="#main-content">Lewati navigasi dan ke content utama</a>

<header>
  <a href="/learn">FluentStack</a>
  <nav aria-label="Navigasi utama">
    <a href="/learn">Semua track</a>
    <a href="/dashboard">Dashboard</a>
    <a href="/profile">Profile</a>
  </nav>
</header>

<main id="main-content" tabindex="-1">
  <h1>Frontend Engineering</h1>
  <p>Lanjutkan dari module terakhir yang kamu buka.</p>
</main>`,
    css: `.skip-link {
  position: absolute;
  left: 16px;
  top: 16px;
  transform: translateY(-160%);
}

.skip-link:focus-visible {
  transform: translateY(0);
  outline: 3px solid #0369a1;
  outline-offset: 3px;
}`,
    js: "",
  },
  checklist: [
    "Skip link berada sebelum navigation berulang.",
    "href skip link dan id target main memakai nilai yang sama.",
    "main dapat menerima focus programmatic tanpa mengubah tab order reguler.",
    "Skip link muncul saat focus-visible, bukan disembunyikan dari keyboard user.",
    "Behavior Tab lalu Enter perlu diuji pada setiap route local yang memakai layout ini.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "skip-link", label: "Ada anchor skip link menuju main content.", type: "hasElementWithAttribute", target: "a", attribute: "href", valueIncludes: "#main-content" },
      { id: "skip-copy", label: "Skip link memiliki text yang jelas.", type: "hasTextInElement", target: "a", valueIncludes: "Lewati navigasi" },
      { id: "main-landmark", label: "Ada landmark main.", type: "hasElement", target: "main" },
      { id: "main-target", label: "main memiliki id main-content.", type: "hasElementWithAttribute", target: "main", attribute: "id", valueIncludes: "main-content" },
      { id: "main-focus-target", label: "main memiliki tabindex -1 untuk target focus.", type: "hasElementWithAttribute", target: "main", attribute: "tabindex", valueIncludes: "-1" },
      { id: "navigation", label: "Navigation memakai nav.", type: "hasElement", target: "nav" },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Preview skip link",
    description:
      "Preview memperlihatkan skip link dan target main content. Cek otomatis membaca hubungan markup; gunakan Tab lalu Enter pada browser untuk memverifikasi journey focus route nyata.",
    lines: [
      "Skip link berada sebelum header dan navigation.",
      "Anchor mengarah ke landmark main-content.",
      "Main siap menjadi target focus tanpa masuk ke urutan Tab reguler.",
    ],
  },
  skillTags: ["HTML", "Skip Links", "Keyboard Navigation", "Accessibility"],
};

export const fixCourseNotesKeyboardExitChallenge: CodingChallenge = {
  id: "fix-course-notes-keyboard-exit",
  lessonId: "keyboard-traps",
  title: "Fix course notes keyboard exit",
  description:
    "Perbaiki panel catatan React agar keyboard user menerima focus saat membuka, dapat menutup dengan Escape, dan kembali ke trigger setelah close.",
  instructions: [
    "Fokus di tab TSX.",
    "Import useRef bersama useState.",
    "Simpan ref untuk trigger dan button Tutup.",
    "Setelah membuka panel, pindahkan focus ke button Tutup.",
    "Tutup panel saat user menekan Escape di dalam panel.",
    "Setelah close, kembalikan focus ke trigger Buka catatan keyboard.",
    "Preview menjalankan component React kecil untuk mencoba Enter, Tab, dan Escape; behavior production tetap perlu diuji pada component lokalmu.",
  ],
  starterCode: {
    ...accessibilityPracticeCode,
    tsx: `import { useState } from "react";

export default function CourseNotesPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <h2>Catatan keyboard</h2>
      <button type="button" onClick={() => setIsOpen(true)}>
        Buka catatan keyboard
      </button>
      {isOpen ? (
        <aside>
          <h3>Shortcut penting</h3>
          <p>Gunakan Tab untuk berpindah focus.</p>
          <button type="button" onClick={() => setIsOpen(false)}>
            Tutup catatan
          </button>
        </aside>
      ) : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...accessibilityPracticeCode,
    tsx: `import { useRef, useState } from "react";

export default function CourseNotesPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  function openNotes() {
    setIsOpen(true);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
  }

  function closeNotes() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <section>
      <h2>Catatan keyboard</h2>
      <button ref={triggerRef} type="button" onClick={openNotes}>
        Buka catatan keyboard
      </button>
      {isOpen ? (
        <aside
          aria-labelledby="keyboard-notes-title"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeNotes();
            }
          }}
        >
          <h3 id="keyboard-notes-title">Shortcut penting</h3>
          <p>Gunakan Tab untuk berpindah focus.</p>
          <button ref={closeButtonRef} type="button" onClick={closeNotes}>
            Tutup catatan
          </button>
        </aside>
      ) : null}
    </section>
  );
}`,
  },
  checklist: [
    "Trigger dan close action memakai native button.",
    "Focus berpindah ke close action ketika panel dibuka.",
    "Escape menutup panel sementara saat focus berada di dalamnya.",
    "Focus kembali ke trigger setelah panel ditutup.",
    "Tab, Shift+Tab, Enter, dan Escape tetap perlu diuji pada component production yang sebenarnya.",
  ],
  reactPractice: {
    mode: "runtime",
    componentName: "CourseNotesPanel",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "ref-import", label: "useRef diimport bersama useState.", type: "contains", target: 'import { useRef, useState } from "react";', valueIncludes: 'import { useRef, useState } from "react";' },
      { id: "trigger-ref", label: "Trigger memiliki ref.", type: "contains", target: "const triggerRef = useRef<HTMLButtonElement>(null);", valueIncludes: "const triggerRef = useRef<HTMLButtonElement>(null);" },
      { id: "close-ref", label: "Button Tutup memiliki ref.", type: "contains", target: "const closeButtonRef = useRef<HTMLButtonElement>(null);", valueIncludes: "const closeButtonRef = useRef<HTMLButtonElement>(null);" },
      { id: "open-focus", label: "Focus berpindah ke button Tutup saat panel dibuka.", type: "contains", target: "window.setTimeout(() => closeButtonRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => closeButtonRef.current?.focus(), 0);" },
      { id: "trigger-focus", label: "Focus kembali ke trigger saat panel ditutup.", type: "contains", target: "window.setTimeout(() => triggerRef.current?.focus(), 0);", valueIncludes: "window.setTimeout(() => triggerRef.current?.focus(), 0);" },
      { id: "trigger-button", label: "Trigger memakai triggerRef.", type: "contains", target: "<button ref={triggerRef}", valueIncludes: "<button ref={triggerRef}" },
      { id: "escape-close", label: "Escape menutup panel.", type: "contains", target: 'event.key === "Escape"', valueIncludes: 'event.key === "Escape"' },
      { id: "close-button", label: "Button Tutup memakai closeButtonRef.", type: "contains", target: "<button ref={closeButtonRef}", valueIncludes: "<button ref={closeButtonRef}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Preview keyboard panel",
    description:
      "Preview menjalankan panel React kecil. Buka panel dengan keyboard, tekan Escape saat focus berada di dalam panel, lalu amati focus kembali ke trigger. Cek otomatis membaca struktur focus handling, bukan seluruh behavior component production.",
    lines: [
      "Buka catatan keyboard dapat menerima focus dan membuka panel.",
      "Focus berpindah ke button Tutup ketika panel muncul.",
      "Escape menutup panel dan mengembalikan focus ke trigger.",
    ],
  },
  skillTags: ["React", "Keyboard Navigation", "Focus Management", "Accessibility"],
};

export const buildKeyboardReadyCoursePageCheckpointChallenge: CodingChallenge = {
  id: "build-keyboard-ready-course-page-checkpoint",
  lessonId: "semantic-keyboard-navigation-assessment",
  title: "Build keyboard-ready course page checkpoint",
  description:
    "Refactor satu page course agar navigation, content utama, skip link, dan action native siap untuk keyboard review.",
  instructions: [
    "Tambahkan skip link sebelum header yang menuju #main-content.",
    "Gunakan header dan nav untuk navigation route.",
    "Gunakan main id=main-content dengan tabindex=-1 sebagai target skip link.",
    "Pertahankan h1 untuk title course dan section untuk lesson utama.",
    "Ganti div Simpan course dengan button native dan hapus tabindex positif.",
    "Tambahkan :focus-visible CSS sebagai petunjuk focus untuk skip link, link, dan button.",
    "Cek otomatis membaca semantic markup; lakukan Tab, Shift+Tab, Enter, dan focus visibility audit pada project lokal untuk membuktikan behavior akhir.",
  ],
  starterCode: {
    ...accessibilityPracticeCode,
    html: `<div class="topbar">
  <a href="/learn">FluentStack</a>
  <div class="links">
    <a tabindex="1" href="#lesson">Lanjutkan lesson</a>
    <a tabindex="2" href="#progress">Progress</a>
  </div>
</div>

<div class="content">
  <h1>Accessibility</h1>
  <div class="save">Simpan course</div>
  <div class="lesson" id="lesson">
    <h2>Semantic Review</h2>
    <p>Audit page dengan keyboard-only navigation.</p>
  </div>
</div>

<div id="progress">Belum ada progress tersimpan.</div>`,
    css: `.topbar,
.content {
  padding: 16px;
  border-bottom: 1px solid #94a3b8;
}

.links a:focus,
.save:focus {
  outline: none;
}`,
    js: "",
  },
  solutionCode: {
    ...accessibilityPracticeCode,
    html: `<a class="skip-link" href="#main-content">Lewati navigasi dan ke content utama</a>

<header class="topbar">
  <a href="/learn">FluentStack</a>
  <nav class="links" aria-label="Navigasi course">
    <a href="#lesson">Lanjutkan lesson</a>
    <a href="#progress">Progress</a>
  </nav>
</header>

<main class="content" id="main-content" tabindex="-1">
  <h1>Accessibility</h1>
  <button class="save" type="button">Simpan course</button>
  <section class="lesson" id="lesson">
    <h2>Semantic Review</h2>
    <p>Audit page dengan keyboard-only navigation.</p>
  </section>
</main>

<footer id="progress">Belum ada progress tersimpan.</footer>`,
    css: `.topbar,
.content {
  padding: 16px;
  border-bottom: 1px solid #94a3b8;
}

.skip-link:focus-visible,
.links a:focus-visible,
.save:focus-visible {
  outline: 3px solid #0369a1;
  outline-offset: 3px;
}`,
    js: "",
  },
  checklist: [
    "Skip link mengarah ke main content sebelum navigation berulang.",
    "Header, nav, main, section, dan footer menggambarkan peran page.",
    "Action Simpan course memakai button native.",
    "Tidak ada tabindex positif yang memaksa focus order.",
    "Focus-visible tersedia untuk control penting.",
    "Audit lokal mencakup Tab, Shift+Tab, Enter, skip link, dan panel interaktif bila route memilikinya.",
  ],
  validation: {
    mode: "html",
    checks: [
      { id: "skip-link", label: "Ada skip link menuju main content.", type: "hasElementWithAttribute", target: "a", attribute: "href", valueIncludes: "#main-content" },
      { id: "header", label: "Ada landmark header.", type: "hasElement", target: "header" },
      { id: "nav", label: "Ada landmark nav.", type: "hasElement", target: "nav" },
      { id: "main", label: "Ada landmark main.", type: "hasElement", target: "main" },
      { id: "main-target", label: "main menjadi target main-content.", type: "hasElementWithAttribute", target: "main", attribute: "id", valueIncludes: "main-content" },
      { id: "main-tabindex", label: "Target main memiliki tabindex -1.", type: "hasElementWithAttribute", target: "main", attribute: "tabindex", valueIncludes: "-1" },
      { id: "save-button", label: "Simpan course memakai button.", type: "hasTextInElement", target: "button", valueIncludes: "Simpan course" },
      { id: "lesson-section", label: "Lesson memakai section.", type: "hasElement", target: "section" },
      { id: "footer", label: "Ada footer untuk progress route.", type: "hasElement", target: "footer" },
      { id: "no-positive-tabindex", label: "Tidak ada tabindex positif.", type: "doesNotContain", valueIncludes: 'tabindex="1"' },
    ],
  },
  expectedOutput: {
    kind: "preview",
    title: "Checkpoint course page",
    description:
      "Preview memperlihatkan struktur course yang siap untuk keyboard review. Cek otomatis membaca markup; validasi focus journey, layout order, dan interaction panel tetap dilakukan pada browser project lokal.",
    lines: [
      "Skip link membawa user menuju main content.",
      "Navigation, content, lesson, dan footer memakai landmark yang sesuai.",
      "Bookmark action memakai button native tanpa tabindex positif.",
    ],
  },
  skillTags: ["HTML", "Semantic HTML", "Keyboard Navigation", "Accessibility Audit"],
};
