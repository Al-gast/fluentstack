import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const componentApiPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const componentApiAndDocumentationModule: Module = {
  id: "component-api-and-documentation",
  trackId: "frontend-engineering",
  title: "Component API and Documentation",
  slug: "component-api-and-documentation",
  description:
    "Merancang props, content contract, contoh penggunaan, dan documentation note agar reusable component tetap jelas bagi engineer berikutnya.",
  order: 52,
  lessonIds: [
    "component-api-design",
    "component-prop-naming",
    "content-driven-component-rendering",
    "component-usage-examples",
    "component-documentation-notes",
    "component-api-documentation-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Component API",
    "Props",
    "Content-Driven Rendering",
    "Documentation",
    "Accessibility",
  ],
};

export const componentApiDesignLesson: Lesson = {
  id: "component-api-design",
  trackId: "frontend-engineering",
  moduleId: "component-api-and-documentation",
  title: "Component API Design",
  slug: "component-api-design",
  description:
    "Memperlakukan props sebagai API untuk engineer lain, lalu memilih contract kecil yang menjelaskan tujuan component tanpa boolean dan variant berlapis.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan props sebagai contract developer-facing untuk component",
    "Memilih props berdasarkan informasi dan area composition yang benar-benar dibutuhkan component",
    "Membedakan API yang spesifik dan dapat dipahami dari component yang terlalu fleksibel",
    "Menjaga type props sebagai dokumentasi penggunaan yang dapat diperiksa TypeScript",
  ],
  skillTags: ["React", "Props", "Component API", "TypeScript", "Composition"],
  blocks: [
    {
      id: "component-api-design-intro",
      type: "text",
      title: "Props adalah API untuk engineer lain",
      content:
        "Saat membuat reusable component, caller tidak melihat alasan internal markup, state, atau styling dibuat seperti itu. Yang mereka lihat adalah nama component, props yang harus diberikan, props yang opsional, dan hasil yang dijanjikan. Karena itu, props adalah API developer-facing. API yang baik membuat penggunaan umum terlihat sederhana dan penggunaan yang salah terasa janggal atau tertahan oleh type.\n\nMulai dari tujuan yang sempit. CourseInfoCard mungkin perlu title, description, status, dan satu area action yang jelas. Ia tidak perlu menerima data, text, mode, variant, compact, showProgress, actionText, actionHref, atau body sekaligus hanya untuk mengantisipasi semua kemungkinan. Jika caller membutuhkan layout yang benar-benar berbeda, mungkin component ini bukan abstraction yang tepat. Tambahkan prop ketika ada consumer nyata dan namanya menjelaskan perubahan UI atau behavior yang terjadi.",
    },
    {
      id: "component-api-design-example",
      type: "code-example",
      title: "Contract kecil untuk card informasi course",
      language: "tsx",
      code: `import type { ReactNode } from "react";

type CourseStatus = "not-started" | "in-progress" | "complete";

type CourseInfoCardProps = {
  title: string;
  description: string;
  status: CourseStatus;
  action?: ReactNode;
};

export function CourseInfoCard({
  title,
  description,
  status,
  action,
}: CourseInfoCardProps) {
  return (
    <article>
      <p>Status: {status}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      {action ? <footer>{action}</footer> : null}
    </article>
  );
}`,
      explanation:
        "Card ini menerima informasi yang memang ia tampilkan dan action sebagai area bernama yang opsional. status dibatasi oleh union agar caller tidak mengirim string bebas seperti ongoing atau done dengan makna yang tidak konsisten. Bila product kemudian membutuhkan progress angka, tambahkan contract yang jelas seperti completedLessons dan totalLessons hanya ketika card benar-benar menjadi owner tampilan informasi tersebut. Jangan menambahkan prop hanya karena suatu hari mungkin berguna.",
    },
    {
      id: "component-api-design-coding-practice",
      type: "coding-practice",
      challengeId: "improve-course-info-card-api",
    },
    {
      id: "component-api-design-quick-check",
      type: "quick-check",
      question:
        "Manakah perubahan API yang paling sehat ketika CourseInfoCard perlu menampilkan satu action opsional di footer?",
      options: [
        "Tambahkan prop action?: ReactNode yang menamai area layout tersebut.",
        "Tambahkan showButton, buttonText, buttonHref, buttonIcon, dan buttonMode untuk semua kemungkinan action.",
        "Tambahkan data: unknown agar caller dapat mengirim bentuk apa pun.",
        "Sembunyikan action di dalam component sehingga caller tidak dapat menentukan flow product.",
      ],
      correctAnswer:
        "Tambahkan prop action?: ReactNode yang menamai area layout tersebut.",
      explanation:
        "Area action memiliki posisi dan arti yang stabil. Satu slot bernama memberi caller composition yang jelas tanpa mengubah card menjadi kumpulan prop untuk setiap variasi button.",
    },
    {
      id: "component-api-design-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Fleksibel bukan berarti menerima semua kemungkinan",
      content:
        "Props seperti variant, size, mode, type, layout, showHeader, showFooter, isCompact, dan config sering muncul ketika component mencoba melayani use case yang belum terbukti sama. Setiap prop menambah kombinasi yang perlu dipahami, diuji, dan didokumentasikan. Lebih baik punya dua component domain yang jelas daripada satu component universal yang tidak lagi dapat menjelaskan kapan ia tepat dipakai.",
    },
    {
      id: "component-api-design-summary",
      type: "summary",
      points: [
        "Props adalah contract yang dipakai engineer lain untuk memahami serta mengonfigurasi component.",
        "Mulai dari tujuan component dan use case nyata, bukan daftar kemungkinan masa depan.",
        "Union, prop required, dan slot bernama dapat membuat penggunaan yang benar lebih jelas.",
        "Setiap prop baru menambah kombinasi behavior yang perlu dirawat serta didokumentasikan.",
        "Berikutnya, kita memberi nama prop yang menjelaskan isi, boolean, dan event tanpa menebak-nebak maksudnya.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-api-design-intro",
      "component-api-design-example",
      "component-api-design-coding-practice",
      "component-api-design-quick-check",
      "component-api-design-summary",
    ],
  },
};

export const componentPropNamingLesson: Lesson = {
  id: "component-prop-naming",
  trackId: "frontend-engineering",
  moduleId: "component-api-and-documentation",
  title: "Prop Naming",
  slug: "component-prop-naming",
  description:
    "Memberi nama props yang mengungkap data, keadaan boolean, dan event sehingga penggunaan JSX dapat dibaca tanpa membuka implementation component.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan nama prop data, boolean, dan callback yang jelas",
    "Menggunakan is, has, atau can untuk boolean ketika membantu membaca keadaan UI",
    "Menggunakan on untuk callback yang menyatakan event atau intent component",
    "Mengganti nama generik yang memaksa caller menebak makna props",
  ],
  skillTags: ["React", "Props", "Naming", "TypeScript", "Readability"],
  blocks: [
    {
      id: "component-prop-naming-intro",
      type: "text",
      title: "Nama prop harus menjelaskan apa yang berubah",
      content:
        "JSX sering menjadi dokumentasi pertama sebuah component. <CourseStatus text={...} active={...} click={...} /> memaksa pembaca membuka implementation untuk menjawab tiga pertanyaan: text itu label atau deskripsi, active berarti selected atau completed, dan click melakukan apa. Nama yang lebih spesifik membuat intent terlihat di tempat pemakaian: label, isComplete, dan onOpenCourse.\n\nGunakan nama benda untuk data yang ditampilkan, kata keadaan untuk boolean, dan on + event atau intent untuk callback. onDismiss, onRetry, dan onOpenCourse lebih jujur daripada callback atau handleClick. Hindari singkatan yang hanya dipahami author awal. Nama panjang sedikit lebih baik daripada API yang cepat diketik tetapi membuat code review dan perubahan product lebih lambat.",
    },
    {
      id: "component-prop-naming-example",
      type: "code-example",
      title: "Nama prop memberi context tanpa membaca implementation",
      language: "tsx",
      code: `type CourseStatusProps = {
  label: string;
  isComplete: boolean;
  onOpenCourse: () => void;
};

export function CourseStatus({
  label,
  isComplete,
  onOpenCourse,
}: CourseStatusProps) {
  return (
    <button
      type="button"
      aria-pressed={isComplete}
      onClick={onOpenCourse}
    >
      {label}: {isComplete ? "selesai" : "belum selesai"}
    </button>
  );
}`,
      explanation:
        "label adalah data yang terlihat, isComplete menyatakan keadaan boolean yang dibaca UI, dan onOpenCourse menjelaskan intent callback saat user menekan control. Nama callback tidak perlu mengikuti nama function internal seperti handleClick; caller perlu tahu event atau hasil yang diharapkan, bukan detail implementation di dalam component.",
    },
    {
      id: "component-prop-naming-coding-practice",
      type: "coding-practice",
      challengeId: "rename-course-status-props",
    },
    {
      id: "component-prop-naming-quick-check",
      type: "quick-check",
      question:
        "Nama callback mana yang paling jelas untuk button yang membuka detail course?",
      options: [
        "onOpenCourse",
        "click",
        "callback",
        "action",
      ],
      correctAnswer: "onOpenCourse",
      explanation:
        "Prefix on menunjukkan callback, sedangkan OpenCourse menjelaskan intent product yang akan ditangani caller. Nama generik menyembunyikan alasan event tersebut ada.",
    },
    {
      id: "component-prop-naming-callout",
      type: "callout",
      variant: "tip",
      title: "Bedakan event implementation dan intent product",
      content:
        "Di dalam component, handleClick boleh menjadi nama function lokal karena konteks button sudah dekat. Pada public API, onOpenCourse lebih berguna daripada onClick ketika caller perlu merespons intent spesifik. Namun, onClick tetap tepat untuk primitive generic seperti Button yang memang tidak mengetahui domain product pemakainya.",
    },
    {
      id: "component-prop-naming-summary",
      points: [
        "Nama data menjelaskan isi yang ditampilkan, bukan sekadar tipe nilainya.",
        "Boolean sebaiknya terdengar seperti keadaan yang dapat dibaca, misalnya isComplete atau hasError.",
        "Callback public memakai on + event atau intent agar caller memahami hasil yang diharapkan.",
        "Nama prop yang jelas mengurangi kebutuhan membuka implementation saat memakai component.",
        "Berikutnya, kita memakai data content yang terstruktur agar component dapat merender banyak item tanpa API yang kabur.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-prop-naming-intro",
      "component-prop-naming-example",
      "component-prop-naming-coding-practice",
      "component-prop-naming-quick-check",
      "component-prop-naming-summary",
    ],
  },
};

export const contentDrivenComponentRenderingLesson: Lesson = {
  id: "content-driven-component-rendering",
  trackId: "frontend-engineering",
  moduleId: "component-api-and-documentation",
  title: "Content-Driven Rendering",
  slug: "content-driven-component-rendering",
  description:
    "Merender UI dari content data yang typed ketika item memiliki shape dan behavior tampilan yang sama, tanpa menyembunyikan variasi product yang penting.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan content data terstruktur dari JSX yang diulang manual",
    "Mendesain type content yang cukup untuk kebutuhan render dan accessibility",
    "Merender list dengan key stabil serta link yang memiliki label jelas",
    "Menghindari data-driven abstraction ketika setiap item memiliki workflow yang benar-benar berbeda",
  ],
  skillTags: ["React", "Content-Driven Rendering", "TypeScript", "Lists", "Accessibility"],
  blocks: [
    {
      id: "content-driven-component-rendering-intro",
      type: "text",
      title: "Data yang rapi sering menghasilkan component yang lebih rapi",
      content:
        "Jika sebuah course page memiliki beberapa resource dengan struktur sama, menyalin tiga block JSX membuat perubahan copy, link, dan metadata mudah tidak konsisten. Content-driven rendering memisahkan fakta yang berubah per item dari struktur UI yang stabil. Component menerima resources dengan id, title, description, href, dan source; lalu satu mapping menentukan bagaimana setiap item ditampilkan.\n\nJangan memaksa semua UI menjadi array data. Jika satu resource memiliki permission flow, satu lagi membuka dialog konfirmasi, dan satu lagi menjadi form dengan validation, menyamakan semuanya sebagai ResourceCard dapat menyembunyikan perbedaan behavior yang penting. Gunakan content data ketika item memiliki shape serta interaction contract yang cukup sama. Type content menjadi tempat untuk menegaskan field wajib sebelum JSX dirender.",
    },
    {
      id: "content-driven-component-rendering-example",
      type: "code-example",
      title: "Daftar resource dari content yang typed",
      language: "tsx",
      code: `type CourseResource = {
  id: string;
  title: string;
  description: string;
  href: string;
  source: "MDN" | "React" | "Next.js";
};

type CourseResourcesProps = {
  resources: CourseResource[];
};

export function CourseResources({ resources }: CourseResourcesProps) {
  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>
          <a href={resource.href}>
            {resource.title} ({resource.source})
          </a>
          <p>{resource.description}</p>
        </li>
      ))}
    </ul>
  );
}`,
      explanation:
        "id menjadi key stabil, title menjadi accessible link text, description menjelaskan alasan resource relevan, dan source memberi context sebelum learner berpindah halaman. Component tidak perlu menerima five prop arrays terpisah atau object unknown. Saat content bertambah, caller menambah satu object dengan shape yang sama; struktur list serta semantics link tetap dirawat di satu tempat.",
    },
    {
      id: "content-driven-component-rendering-coding-practice",
      type: "coding-practice",
      challengeId: "render-course-resources-from-content",
    },
    {
      id: "content-driven-component-rendering-quick-check",
      type: "quick-check",
      question:
        "Kapan content-driven rendering paling tepat dipakai?",
      options: [
        "Ketika beberapa item memiliki shape data dan struktur UI yang sama, seperti daftar resource course.",
        "Ketika semua interaction berbeda tetapi ingin dipaksa memakai satu component agar file lebih sedikit.",
        "Ketika setiap item membutuhkan permission, dialog, serta form flow yang unik.",
        "Ketika tidak ada data yang dapat dijelaskan dengan type yang jelas.",
      ],
      correctAnswer:
        "Ketika beberapa item memiliki shape data dan struktur UI yang sama, seperti daftar resource course.",
      explanation:
        "Content-driven rendering bernilai ketika data dan presentasi memang berulang. Perbedaan behavior yang besar perlu tetap terlihat melalui component atau flow yang lebih spesifik.",
    },
    {
      id: "content-driven-component-rendering-callout",
      type: "callout",
      variant: "important",
      title: "Content shape juga merupakan contract",
      content:
        "Jangan menyimpan JSX, string HTML, atau config tanpa type yang jelas hanya agar content terlihat fleksibel. Type content membantu author mengetahui field wajib, membantu component merender semantics yang konsisten, dan membuat perubahan copy atau source dapat diperiksa sebelum release. Bila satu field hanya dipakai satu item karena exception, evaluasi apakah item itu seharusnya keluar dari pattern data ini.",
    },
    {
      id: "content-driven-component-rendering-summary",
      type: "summary",
      points: [
        "Content-driven rendering memisahkan data yang berubah dari struktur UI yang stabil.",
        "Type content menjelaskan field wajib dan mencegah item tidak lengkap masuk ke component.",
        "Key stabil, link text yang jelas, dan metadata source adalah bagian dari render contract.",
        "Jangan menyatukan item dengan workflow berbeda hanya demi satu abstraction data.",
        "Berikutnya, usage example menunjukkan cara consumer memakai contract component secara nyata.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "content-driven-component-rendering-intro",
      "content-driven-component-rendering-example",
      "content-driven-component-rendering-coding-practice",
      "content-driven-component-rendering-quick-check",
      "content-driven-component-rendering-summary",
    ],
  },
};

export const componentUsageExamplesLesson: Lesson = {
  id: "component-usage-examples",
  trackId: "frontend-engineering",
  moduleId: "component-api-and-documentation",
  title: "Usage Examples",
  slug: "component-usage-examples",
  description:
    "Menulis contoh pemakaian component yang dekat dengan workflow product agar props, composition, dan batas penggunaan dapat dipahami tanpa menebak.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan example yang realistis dari JSX demo yang tidak memiliki context product",
    "Memilih props serta content yang menunjukkan penggunaan utama component",
    "Menunjukkan optional slot atau edge case hanya ketika membantu consumer memahami contract",
    "Menulis contoh yang dapat dipakai sebagai referensi saat implementasi lokal",
  ],
  skillTags: ["React", "Component API", "Documentation", "Composition", "Code Review"],
  blocks: [
    {
      id: "component-usage-examples-intro",
      type: "text",
      title: "Contoh penggunaan adalah bagian dari API",
      content:
        "Type memberi tahu field yang tersedia, tetapi usage example memberi context: data mana yang biasanya dipilih, kapan slot action diperlukan, dan seperti apa caller yang sehat. Example <CourseInfoCard title=\"Test\" /> mungkin valid setelah semua prop ditambahkan, tetapi tidak membantu engineer memahami kapan component dipakai dalam flow belajar. Example yang baik memakai copy realistis, prop utama, dan action yang benar-benar relevan dengan feature.\n\nJangan menulis lima variasi hanya untuk membuktikan component fleksibel. Mulai dari satu happy path yang paling sering dipakai, lalu tambahkan satu example untuk optional area atau edge case yang mudah salah. Example sebaiknya sederhana untuk dicopy ke local project, tetapi tetap menggunakan semantic element serta link atau button sesuai action nyata.",
    },
    {
      id: "component-usage-examples-example",
      type: "code-example",
      title: "Happy path dan optional action yang bermakna",
      language: "tsx",
      code: `export function ContinueLearningCard() {
  return (
    <CourseInfoCard
      title="Dasar TypeScript"
      description="Lanjutkan dari lesson object types."
      status="in-progress"
      action={<a href="/lesson/typescript-object-types">Lanjutkan lesson</a>}
    />
  );
}

export function CompletedCourseCard() {
  return (
    <CourseInfoCard
      title="HTML Basics"
      description="Semua blok wajib sudah selesai."
      status="complete"
    />
  );
}`,
      explanation:
        "Contoh pertama menunjukkan status in-progress dan action navigasi yang sesuai. Contoh kedua menunjukkan bahwa action memang opsional, bukan prop yang harus diisi dengan placeholder. Keduanya memberi consumer alasan product untuk memilih status serta action, bukan hanya daftar nilai yang bisa dipasang pada JSX.",
    },
    {
      id: "component-usage-examples-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis dua usage example untuk satu reusable component pada local project atau untuk CourseInfoCard. Example pertama harus menunjukkan happy path product; example kedua harus menunjukkan optional prop, edge case, atau keadaan ketika area slot tidak dipakai. Sertakan JSX yang lengkap, lalu jelaskan dua sampai tiga kalimat mengapa props tersebut dipilih. Gunakan element semantic yang sesuai untuk action, misalnya link untuk navigasi dan button untuk aksi di halaman yang sama.",
      placeholder:
        "export function ResumeLessonCard() {\n  return (\n    <CourseInfoCard\n      title=\"Dasar TypeScript\"\n      description=\"Lanjutkan dari object types.\"\n      status=\"in-progress\"\n      action={<a href=\"/lesson/typescript-object-types\">Lanjutkan lesson</a>}\n    />\n  );\n}\n\nexport function CompletedModuleCard() {\n  return (\n    <CourseInfoCard\n      title=\"HTML Basics\"\n      description=\"Kamu sudah menyelesaikan semua blok wajib.\"\n      status=\"complete\"\n    />\n  );\n}\n\nContoh pertama memakai link karena user berpindah ke lesson berikutnya. Contoh kedua tidak mengisi action karena tidak ada aksi lanjutan yang relevan pada card ini. Kedua example menunjukkan bahwa status dan action dipilih berdasarkan workflow, bukan hanya variasi visual.",
      minimumCharacters: 650,
      checklist: [
        "Menyediakan dua JSX example yang dapat dibaca sebagai flow product nyata.",
        "Example pertama menunjukkan happy path dengan props utama yang lengkap.",
        "Example kedua menunjukkan optional prop, edge case, atau slot yang sengaja tidak dipakai.",
        "Menggunakan link atau button sesuai jenis action yang sebenarnya.",
        "Menjelaskan alasan pemilihan props dan batas component secara singkat.",
      ],
      modelAnswer:
        "export function ContinueLessonCard() {\n  return (\n    <CourseInfoCard\n      title=\"Dasar TypeScript\"\n      description=\"Lanjutkan dari lesson object types.\"\n      status=\"in-progress\"\n      action={<a href=\"/lesson/typescript-object-types\">Lanjutkan lesson</a>}\n    />\n  );\n}\n\nexport function FinishedModuleCard() {\n  return (\n    <CourseInfoCard\n      title=\"HTML Basics\"\n      description=\"Semua blok wajib di module ini sudah selesai.\"\n      status=\"complete\"\n    />\n  );\n}\n\nExample pertama memakai action link karena learner berpindah ke route lesson. Example kedua tidak memiliki action karena card hanya mengonfirmasi completion dan tidak boleh menebak next action yang belum diputuskan parent. status memberi component informasi state yang ditampilkan tanpa menambah boolean seperti isDone dan isActive sekaligus.",
    },
    {
      id: "component-usage-examples-quick-check",
      type: "quick-check",
      question:
        "Apa ciri paling penting dari usage example component yang baik?",
      options: [
        "Menunjukkan props dan composition dalam context product yang realistis serta menjelaskan batas penggunaan penting.",
        "Memakai nilai dummy sesingkat mungkin tanpa action atau context apa pun.",
        "Mencoba seluruh kombinasi prop agar dokumentasi terlihat panjang.",
        "Menyalin implementation internal component ke setiap example.",
      ],
      correctAnswer:
        "Menunjukkan props dan composition dalam context product yang realistis serta menjelaskan batas penggunaan penting.",
      explanation:
        "Example membantu consumer memutuskan kapan dan bagaimana memakai API. Satu happy path dan satu variasi yang bermakna biasanya lebih berguna daripada daftar kombinasi prop tanpa workflow.",
    },
    {
      id: "component-usage-examples-summary",
      type: "summary",
      points: [
        "Usage example memberi context yang tidak selalu terlihat dari type props.",
        "Mulai dari happy path product lalu tambahkan edge case atau optional slot yang benar-benar membantu.",
        "Gunakan link dan button sesuai action nyata agar example tidak mengajarkan semantics yang salah.",
        "Example harus cukup dekat dengan local implementation sehingga engineer dapat menggunakannya sebagai referensi.",
        "Berikutnya, documentation note merangkum tujuan, constraint, accessibility, dan kondisi ketika component tidak tepat dipakai.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-usage-examples-intro",
      "component-usage-examples-example",
      "component-usage-examples-writing-practice",
      "component-usage-examples-quick-check",
      "component-usage-examples-summary",
    ],
  },
};

export const componentDocumentationNotesLesson: Lesson = {
  id: "component-documentation-notes",
  trackId: "frontend-engineering",
  moduleId: "component-api-and-documentation",
  title: "Documentation Notes",
  slug: "component-documentation-notes",
  description:
    "Mencatat tujuan, constraint, accessibility consideration, edge case, dan kondisi tidak memakai component secara ringkas tetapi dapat ditindaklanjuti.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menulis documentation note yang membantu consumer memilih component dengan benar",
    "Menjelaskan purpose, use case, constraint, dan non-goal tanpa mengulang setiap baris code",
    "Mencatat accessibility requirement yang menjadi bagian dari public contract",
    "Menyebut edge case serta kondisi ketika component tidak tepat dipakai",
  ],
  skillTags: ["Documentation", "Component API", "Accessibility", "Maintainability", "Code Review"],
  blocks: [
    {
      id: "component-documentation-notes-intro",
      type: "text",
      title: "Note yang baik menjawab pertanyaan sebelum code review",
      content:
        "Documentation note bukan pengganti type atau tempat mengulang JSX baris demi baris. Ia membantu reader yang baru masuk ke feature menjawab: component ini menyelesaikan masalah apa, kapan harus dipakai, apa yang tidak ditangani, constraint accessibility apa yang harus dipenuhi caller, dan edge case apa yang perlu diuji. Note pendek yang spesifik mengurangi keputusan yang diulang di issue, pull request, serta onboarding.\n\nUntuk CourseInfoCard, note dapat menjelaskan bahwa component ini menampilkan ringkasan satu course, menerima action sebagai link atau button yang bermakna, dan tidak cocok untuk dashboard card yang membutuhkan chart atau menu kompleks. Bila action memakai button, caller tetap bertanggung jawab menyediakan event yang bekerja. Bila memakai link, label link harus menjelaskan destination. Constraint seperti ini adalah bagian dari API, bukan detail visual yang boleh diabaikan.",
    },
    {
      id: "component-documentation-notes-example",
      type: "code-example",
      title: "Note singkat yang membantu consumer mengambil keputusan",
      language: "ts",
      code: `export const courseInfoCardNotes = {
  purpose:
    "Menampilkan ringkasan satu course beserta status dan satu action lanjutan.",
  useWhen:
    "Kamu memiliki title, description, dan status course yang perlu tampil konsisten di list atau dashboard.",
  doNotUseWhen:
    "Card membutuhkan chart, menu banyak aksi, atau layout detail yang tidak lagi sesuai dengan summary course.",
  accessibility: [
    "Gunakan action link untuk navigasi ke route lain.",
    "Gunakan action button hanya untuk aksi pada halaman saat ini dan beri label yang menjelaskan hasilnya.",
    "Pastikan title dan description tetap cukup jelas ketika action tidak dipakai.",
  ],
  edgeCases: [
    "Status harus berasal dari union yang didukung component.",
    "Jangan mengirim action placeholder ketika tidak ada tindakan lanjutan.",
  ],
} as const;`,
      explanation:
        "Note ini tidak menjanjikan bahwa CourseInfoCard dapat menjadi semua jenis card. Ia memberi batas penggunaan yang dapat dipakai saat review. Bagian accessibility juga menjelaskan keputusan yang tetap menjadi tanggung jawab caller, sehingga slot action tidak berubah menjadi area bebas tanpa semantic contract.",
    },
    {
      id: "component-documentation-notes-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis documentation note untuk satu reusable component pada local project atau untuk CourseInfoCard. Gunakan heading atau label: purpose, use when, do not use when, accessibility, dan edge cases. Note harus menjelaskan satu constraint API dan satu tanggung jawab caller yang tidak dapat dijamin component sendiri. Hindari menulis ulang semua prop type; fokus pada keputusan penggunaan yang mungkin salah bila hanya membaca nama component.",
      placeholder:
        "Purpose: CourseInfoCard menampilkan ringkasan satu course dengan status dan satu action lanjutan.\n\nUse when: Pakai untuk list atau dashboard yang hanya membutuhkan title, description, status, serta satu action.\n\nDo not use when: Jangan pakai ketika card membutuhkan menu banyak aksi, chart progres, atau layout detail lesson.\n\nAccessibility: action link dipakai untuk navigasi route; action button hanya untuk aksi dalam halaman dan labelnya harus menjelaskan hasil. Caller memastikan action benar-benar berfungsi.\n\nEdge cases: status hanya memakai nilai union yang didukung. Jangan mengirim action placeholder ketika learner tidak memiliki tindakan lanjutan.",
      minimumCharacters: 600,
      checklist: [
        "Menjelaskan tujuan component dan context penggunaan yang tepat.",
        "Menyebut satu atau lebih kondisi ketika component tidak tepat digunakan.",
        "Mencatat constraint API atau shape data yang penting bagi consumer.",
        "Menyebut accessibility consideration dan tanggung jawab caller yang spesifik.",
        "Menyebut edge case yang dapat diuji atau direview.",
      ],
      modelAnswer:
        "Purpose: CourseInfoCard menampilkan summary satu course dengan title, description, status, dan satu action lanjutan. Use when: gunakan pada list atau dashboard saat caller memiliki informasi course yang ringkas dan ingin structure card yang konsisten. Do not use when: jangan gunakan untuk card analytics yang membutuhkan chart, menu beberapa action, atau detail lesson yang panjang; buat component domain lain agar API tidak dipenuhi variant. Accessibility: isi action harus link bila navigasi berpindah route dan button bila mengubah state pada halaman ini. Caller memilih label action yang menjelaskan tujuan serta memastikan event button benar-benar bekerja. Edge cases: status dibatasi oleh union component; jangan mengirim string baru tanpa memperbarui copy dan visual state. Jika tidak ada next action, jangan kirim action placeholder karena summary harus tetap dapat dipahami tanpa footer.",
    },
    {
      id: "component-documentation-notes-quick-check",
      type: "quick-check",
      question:
        "Informasi mana yang paling bernilai dalam documentation note component?",
      options: [
        "Tujuan, kapan dipakai, kapan tidak dipakai, constraint accessibility, dan edge case yang perlu diperiksa.",
        "Salinan semua baris JSX dari implementation internal.",
        "Daftar seluruh file di repository yang pernah mengimpor component.",
        "Janji bahwa component dapat menangani semua use case card di masa depan.",
      ],
      correctAnswer:
        "Tujuan, kapan dipakai, kapan tidak dipakai, constraint accessibility, dan edge case yang perlu diperiksa.",
      explanation:
        "Note membantu consumer mengambil keputusan penggunaan. Type props menjelaskan shape code, sedangkan note menjelaskan intent, constraint, dan batas product yang tidak terlihat dari type saja.",
    },
    {
      id: "component-documentation-notes-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan mendokumentasikan kemampuan yang belum dijaga test atau implementation",
      content:
        "Kalimat seperti mendukung semua layout, accessible untuk semua kondisi, atau siap dipakai di mana saja menciptakan contract yang tidak dapat dipenuhi. Tulis behavior yang benar-benar dijaga component dan sebutkan keputusan yang tetap berada pada caller. Bila constraint baru muncul, perbarui API, usage example, note, serta test atau manual QA secara bersama.",
    },
    {
      id: "component-documentation-notes-summary",
      type: "summary",
      points: [
        "Documentation note memberi purpose, batas penggunaan, accessibility consideration, dan edge case yang tidak selalu terlihat dari type.",
        "Note yang baik membantu consumer memilih component tanpa membuka seluruh implementation.",
        "Constraint semantic link/button dan tanggung jawab caller adalah bagian dari API component.",
        "Jangan menjanjikan fleksibilitas atau accessibility yang belum benar-benar dijaga oleh code serta QA.",
        "Uji Kompetensi berikutnya menggabungkan API, prop naming, content data, usage example, dan note dalam satu component review.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-documentation-notes-intro",
      "component-documentation-notes-example",
      "component-documentation-notes-writing-practice",
      "component-documentation-notes-quick-check",
      "component-documentation-notes-summary",
    ],
  },
};

export const componentApiDocumentationAssessmentLesson: Lesson = {
  id: "component-api-documentation-assessment",
  trackId: "frontend-engineering",
  moduleId: "component-api-and-documentation",
  title: "Uji Kompetensi Component API and Documentation",
  slug: "component-api-documentation-assessment",
  description:
    "Membuktikan kesiapan merancang, memakai, dan mendokumentasikan component API yang reusable tanpa mengaburkan purpose serta accessibility contract-nya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 95,
  objectives: [
    "Merancang component API dengan props, union, dan slot yang sesuai kebutuhan product",
    "Menamai data, boolean, dan event props agar consumer memahami intent component",
    "Merender content data terstruktur dengan semantics serta key yang benar",
    "Menulis usage example dan documentation note yang menjelaskan constraint serta edge case",
  ],
  skillTags: ["Component API", "Props", "Content-Driven Rendering", "Documentation", "Readiness Checkpoint"],
  blocks: [
    {
      id: "component-api-documentation-assessment-recap",
      type: "text",
      title: "Checkpoint: buat CourseNoticeCard mudah dipakai tanpa menjadi component universal",
      content:
        "Tim membutuhkan CourseNoticeCard untuk menampilkan tip, warning, atau informasi penting pada lesson. Versi awal menerima data: unknown, mode string bebas, titleText, bodyText, isBlue, isYellow, showAction, actionText, dan actionCallback. Ia juga tidak memiliki example atau note, sehingga beberapa caller memakai button untuk navigasi dan beberapa mengirim status yang tidak didukung. Pada checkpoint ini, buat contract yang dapat dijelaskan: content notice memiliki type, tone dibatasi oleh union, card menerima satu action slot bernama bila relevan, prop tidak memakai nama generik, dan note menjelaskan semantic action serta kondisi ketika card ini tidak tepat dipakai. Tujuannya bukan membuat design system; tujuannya membuat satu component domain dapat digunakan dengan benar oleh feature berikutnya.",
    },
    {
      id: "component-api-documentation-assessment-quiz",
      type: "quiz",
      quizId: "component-api-documentation-assessment-quiz",
    },
    {
      id: "component-api-documentation-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "design-course-notice-card-api-checkpoint",
    },
    {
      id: "component-api-documentation-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih satu reusable component pada local React atau Next.js project, atau gunakan CourseNoticeCard pada checkpoint ini. Tulis review note yang memuat: tujuan component, props dan nama yang kamu sederhanakan, content data atau children/slot yang dipilih, satu happy-path usage example, satu batas penggunaan, accessibility constraint untuk link/button atau heading, dan satu edge case yang akan kamu QA. Jelaskan satu prop atau flexibility yang sengaja tidak kamu tambahkan beserta alasannya.",
      placeholder:
        "CourseNoticeCard dipakai untuk tip, warning, atau informasi penting yang terkait dengan satu lesson. Saya memakai notice: CourseNotice agar title, body, tone, dan id berada dalam satu content contract, serta action?: ReactNode untuk satu area action yang opsional. Saya tidak memakai mode, isBlue, isYellow, actionText, atau actionCallback karena tone sudah menjelaskan visual state dan action dapat diisi link atau button sesuai flow. Happy path memakai action link ke dokumentasi terkait. Card tidak dipakai untuk dialog, banner global, atau card dengan beberapa action. Bila action adalah link, label menjelaskan destination; bila button, caller menyediakan event yang benar-benar bekerja. QA saya memeriksa setiap tone, notice tanpa action, title yang tetap jelas, dan link/button semantics. Saya sengaja tidak menambah footer atau compact prop karena belum ada consumer yang membutuhkan layout tersebut.",
      minimumCharacters: 850,
      checklist: [
        "Menjelaskan purpose dan consumer component secara spesifik.",
        "Menamai props berdasarkan data, boolean, atau intent event yang jelas.",
        "Memilih content contract atau slot yang dapat dijelaskan serta tidak terlalu fleksibel.",
        "Menyertakan happy-path usage example dan satu batas penggunaan nyata.",
        "Mencatat accessibility constraint, edge case QA, dan flexibility yang sengaja ditunda.",
      ],
      modelAnswer:
        "CourseNoticeCard digunakan pada lesson untuk menampilkan satu tip, warning, atau informasi penting yang terkait dengan content saat ini. Saya memilih prop notice: CourseNotice agar id, title, body, dan tone hidup dalam satu content contract. tone dibatasi oleh union tip, warning, dan important; tidak ada isBlue atau isYellow yang dapat bertentangan. action?: ReactNode memberi satu area action bila user memang membutuhkan langkah lanjut. Happy path saya adalah notice dokumentasi dengan action <a href=\"https://react.dev\">Buka React docs</a>. Card tidak saya gunakan untuk banner global, dialog, atau panel dengan banyak command karena pola tersebut membutuhkan owner serta interaction yang berbeda. Accessibility constraint-nya: action link hanya untuk navigasi dan labelnya menjelaskan tujuan; action button hanya untuk perubahan pada halaman ini dan caller harus memberi event yang bekerja. QA mencakup semua tone, notice tanpa action, title/body yang tetap terbaca, dan semantics action. Saya sengaja tidak menambah compact, footer, atau variant lain karena belum ada consumer nyata dan prop tersebut akan memperluas kombinasi layout tanpa alasan product.",
    },
    {
      id: "component-api-documentation-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca contract React sebelum memperluas API component",
      description:
        "Gunakan dokumentasi resmi untuk meninjau props, data flow, JSX children, dan semantics yang harus tetap terlihat di API. Dokumentasi tidak memilih domain component untukmu; gunakan context feature, consumer nyata, dan QA untuk memutuskan apakah contract perlu diperluas atau justru dipersempit.",
      links: [
        {
          source: "React",
          title: "Passing Props to a Component",
          url: "https://react.dev/learn/passing-props-to-a-component",
          focus: [
            "Props sebagai informasi dari parent ke child component.",
            "Destructuring dan default value saat benar-benar membantu contract.",
            "Passing JSX untuk area composition seperti action atau children.",
          ],
          ignoreForNow: [
            "Membuat component menerima seluruh object props tanpa memikirkan API yang dibutuhkan consumer.",
          ],
        },
        {
          source: "React",
          title: "Thinking in React",
          url: "https://react.dev/learn/thinking-in-react",
          focus: [
            "Memecah UI mengikuti information architecture dan responsibility yang jelas.",
            "Membedakan data props dari state yang benar-benar perlu diingat component.",
            "Memilih component boundary berdasarkan perubahan serta data yang bergerak bersama.",
          ],
          ignoreForNow: [
            "Menambah global state atau abstraction baru sebelum flow component membutuhkannya.",
          ],
        },
        {
          source: "TypeScript",
          title: "JSX",
          url: "https://www.typescriptlang.org/docs/handbook/jsx.html",
          focus: [
            "Type checking untuk props serta children pada JSX.",
            "Menjaga props component sebagai contract yang dapat diperiksa compiler.",
            "Membaca error JSX sebagai sinyal bahwa caller tidak memenuhi API component.",
          ],
          ignoreForNow: [
            "JSX factory, runtime compiler configuration, dan declaration namespace mendalam.",
          ],
        },
        {
          source: "W3C WAI",
          title: "Introduction to Web Accessibility",
          url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
          focus: [
            "Accessibility sebagai bagian dari kualitas component, bukan tahap tambahan setelah UI selesai.",
            "Mengapa semantic HTML, keyboard access, dan teks yang jelas perlu dijaga oleh API component.",
            "Mendokumentasikan constraint yang tetap menjadi tanggung jawab caller.",
          ],
          ignoreForNow: [
            "Standar WCAG success criteria lengkap dan audit legal yang lebih luas dari component ini.",
          ],
        },
      ],
      followUpAction:
        "Pilih satu reusable component lokal. Baca semua consumer-nya, sederhanakan satu prop yang ambigu bila ada, tambahkan satu usage example realistis, lalu tulis documentation note tentang purpose, constraint accessibility, edge case, dan satu situasi ketika component tidak boleh dipakai. Jalankan typecheck serta manual QA pada route consumer yang terdampak.",
    },
    {
      id: "component-api-documentation-assessment-summary",
      type: "summary",
      points: [
        "Component API yang baik menjelaskan purpose lewat props, type, dan area composition yang kecil.",
        "Prop naming membuat data, boolean, serta event intent dapat dibaca langsung di JSX.",
        "Content data terstruktur membantu component merender item berulang dengan contract yang konsisten.",
        "Usage example dan documentation note menjelaskan context, accessibility constraint, edge case, serta batas penggunaan.",
        "Berikutnya, Level 17: Design System dapat membangun token, component library, dan team convention di atas API component yang sudah matang.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "component-api-documentation-assessment-recap",
      "component-api-documentation-assessment-quiz",
      "component-api-documentation-assessment-coding-practice",
      "component-api-documentation-assessment-writing-practice",
      "component-api-documentation-assessment-documentation-bridge",
      "component-api-documentation-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const componentApiDocumentationAssessmentQuiz: Quiz = {
  id: "component-api-documentation-assessment-quiz",
  lessonId: "component-api-documentation-assessment",
  title: "Uji Kompetensi Component API and Documentation",
  passingScore: 70,
  questions: [
    {
      id: "component-api-purpose",
      type: "multiple-choice",
      question: "Mengapa props perlu diperlakukan sebagai API component?",
      options: [
        "Karena props adalah contract yang dipakai consumer untuk memberi data, memahami behavior, dan memakai component dengan benar.",
        "Karena semua props harus diteruskan ke elemen div tanpa dipilih.",
        "Karena component yang baik selalu memiliki banyak prop opsional.",
        "Karena TypeScript tidak dapat memeriksa JSX tanpa object props yang besar.",
      ],
      correctAnswer:
        "Karena props adalah contract yang dipakai consumer untuk memberi data, memahami behavior, dan memakai component dengan benar.",
      explanation:
        "Consumer biasanya memahami component melalui type props, example, serta output JSX di tempat pemakaian. Contract kecil dan bernama jelas mengurangi salah pakai serta biaya perubahan.",
    },
    {
      id: "component-api-slot",
      type: "multiple-choice",
      question:
        "Kapan prop action?: ReactNode menjadi pilihan yang baik untuk card?",
      options: [
        "Saat card memiliki area action dengan posisi serta makna stabil, tetapi isi action dapat berbeda antar consumer.",
        "Saat component perlu menerima semua layout, menu, dialog, dan state dari caller tanpa batas.",
        "Saat setiap component harus memiliki footer walau tidak ada action product.",
        "Saat ingin mengganti semua props data dengan satu children besar.",
      ],
      correctAnswer:
        "Saat card memiliki area action dengan posisi serta makna stabil, tetapi isi action dapat berbeda antar consumer.",
      explanation:
        "Slot bernama memberi fleksibilitas pada area yang memang stabil. Ia tidak menggantikan keputusan apakah component masih memiliki purpose yang jelas atau sudah perlu dipisah menjadi pattern lain.",
    },
    {
      id: "component-api-boolean-naming",
      type: "multiple-choice",
      question: "Nama boolean prop yang paling jelas untuk status lesson yang sudah selesai adalah",
      options: ["isComplete", "state", "value", "flag"],
      correctAnswer: "isComplete",
      explanation:
        "isComplete dapat dibaca sebagai keadaan UI. Nama seperti state, value, atau flag tidak memberi informasi tentang apa yang sebenarnya true atau false.",
    },
    {
      id: "component-api-callback-naming",
      type: "multiple-choice",
      question:
        "Untuk component domain CourseCard, nama callback yang paling tepat ketika user meminta membuka detail adalah",
      options: ["onOpenCourse", "click", "callback", "run"],
      correctAnswer: "onOpenCourse",
      explanation:
        "Public callback sebaiknya menjelaskan event atau intent product. onOpenCourse memberi consumer context yang tidak dimiliki nama generik seperti click.",
    },
    {
      id: "component-api-content-data",
      type: "multiple-choice",
      question:
        "Apa manfaat utama type CourseResource saat merender daftar resource?",
      options: [
        "Menjaga setiap item memiliki field yang diperlukan component, seperti id, title, href, dan description.",
        "Membuat semua resource memiliki interaction yang sama walau workflow-nya berbeda.",
        "Menghilangkan kebutuhan key pada list React.",
        "Menyimpan JSX arbitrary di dalam object content.",
      ],
      correctAnswer:
        "Menjaga setiap item memiliki field yang diperlukan component, seperti id, title, href, dan description.",
      explanation:
        "Content type adalah contract antara author data dan component render. Ia membantu menjaga list tetap lengkap dan semantics seperti link text dapat dirender konsisten.",
    },
    {
      id: "component-api-usage-example",
      type: "multiple-choice",
      question:
        "Usage example mana yang paling membantu consumer CourseInfoCard?",
      options: [
        "Example dalam flow belajar nyata yang menunjukkan title, description, status, dan action link atau keadaan tanpa action.",
        "<CourseInfoCard /> tanpa prop atau context product.",
        "Lima puluh kombinasi variant tanpa penjelasan kapan dipakai.",
        "Salinan implementation internal CourseInfoCard ke file documentation.",
      ],
      correctAnswer:
        "Example dalam flow belajar nyata yang menunjukkan title, description, status, dan action link atau keadaan tanpa action.",
      explanation:
        "Example yang realistis memperlihatkan cara memilih props serta semantic action. Ia membantu consumer lebih cepat daripada demo tanpa context atau daftar kombinasi yang tidak dijelaskan.",
    },
    {
      id: "component-api-documentation-note",
      type: "multiple-choice",
      question:
        "Apa yang perlu dicatat pada documentation note untuk action slot sebuah component?",
      options: [
        "Kapan memakai link versus button, label yang perlu jelas, dan tanggung jawab caller agar action benar-benar berfungsi.",
        "Bahwa action dapat berisi apa pun tanpa semantic atau behavior contract.",
        "Semua detail CSS utility class yang dipakai oleh footer internal.",
        "Bahwa component otomatis menjadi accessible dalam setiap context tanpa QA.",
      ],
      correctAnswer:
        "Kapan memakai link versus button, label yang perlu jelas, dan tanggung jawab caller agar action benar-benar berfungsi.",
      explanation:
        "Slot tidak menghapus semantic responsibility. Documentation note perlu membuat constraint yang berada pada caller terlihat dan dapat diperiksa dalam review maupun QA.",
    },
  ],
};

export const improveCourseInfoCardApiChallenge: CodingChallenge = {
  id: "improve-course-info-card-api",
  lessonId: "component-api-design",
  title: "Improve course info card API",
  description:
    "Ganti API Card yang kabur menjadi CourseInfoCard dengan data inti, union status, dan satu action slot yang bernama jelas.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor ReactNode sebagai type dari React.",
    "Buat CourseStatus untuk not-started, in-progress, dan complete.",
    "Buat CourseInfoCardProps dengan title, description, status, dan action opsional.",
    "Render status, title, description, serta footer action hanya bila action tersedia.",
    "Jangan mempertahankan props generic data, mode, variant, compact, atau actionText lama.",
    "Cek otomatis membaca contract TSX. Preview tidak menjalankan React component pada practice struktur ini.",
  ],
  starterCode: {
    ...componentApiPracticeCode,
    tsx: `import type { ReactNode } from "react";

type CardProps = {
  data: unknown;
  text?: string;
  mode?: string;
  variant?: string;
  compact?: boolean;
  actionText?: string;
  body?: ReactNode;
};

export function Card({ text, actionText, body }: CardProps) {
  return (
    <article>
      <h2>{text}</h2>
      {body}
      {actionText ? <button type="button">{actionText}</button> : null}
    </article>
  );
}`,
  },
  solutionCode: {
    ...componentApiPracticeCode,
    tsx: `import type { ReactNode } from "react";

type CourseStatus = "not-started" | "in-progress" | "complete";

type CourseInfoCardProps = {
  title: string;
  description: string;
  status: CourseStatus;
  action?: ReactNode;
};

export function CourseInfoCard({
  title,
  description,
  status,
  action,
}: CourseInfoCardProps) {
  return (
    <article>
      <p>Status: {status}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      {action ? <footer>{action}</footer> : null}
    </article>
  );
}`,
  },
  checklist: [
    "API card menerima data yang benar-benar dirender oleh component.",
    "status dibatasi oleh union, bukan string bebas atau beberapa boolean yang dapat bertentangan.",
    "action adalah slot bernama yang opsional dan hanya dirender saat tersedia.",
    "Card tidak mempertahankan prop generic atau visual mode yang belum memiliki consumer nyata.",
    "Preview tidak menjalankan React runtime; periksa contract ini kembali pada local consumer sebenarnya.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-node", label: "ReactNode diimpor sebagai type.", type: "contains", valueIncludes: 'import type { ReactNode } from "react";' },
      { id: "status-union", label: "CourseStatus membatasi tiga state card.", type: "contains", valueIncludes: 'type CourseStatus = "not-started" | "in-progress" | "complete";' },
      { id: "props", label: "CourseInfoCardProps memiliki contract data dan action yang jelas.", type: "contains", valueIncludes: "type CourseInfoCardProps = {\n  title: string;\n  description: string;\n  status: CourseStatus;\n  action?: ReactNode;\n};" },
      { id: "component", label: "CourseInfoCard membaca props contract-nya.", type: "contains", valueIncludes: "export function CourseInfoCard({\n  title,\n  description,\n  status,\n  action,\n}: CourseInfoCardProps)" },
      { id: "render", label: "Card merender status, content, serta action opsional.", type: "contains", valueIncludes: "<p>Status: {status}</p>\n      <h2>{title}</h2>\n      <p>{description}</p>\n      {action ? <footer>{action}</footer> : null}" },
      { id: "no-generic-data", label: "Tidak memakai props generic lama.", type: "doesNotContain", valueIncludes: "data: unknown" },
      { id: "no-visual-props", label: "Tidak mempertahankan mode atau variant lama.", type: "doesNotContain", valueIncludes: "variant?: string" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target component API",
    description:
      "Cek otomatis membaca contract CourseInfoCard. Preview tidak menjalankan React runtime; gunakan local consumer untuk menilai apakah API tetap kecil saat kebutuhan product berubah.",
    lines: [
      "Card menerima title, description, dan status yang ia render sendiri.",
      "status memiliki nilai yang didukung component.",
      "action memberi consumer satu area composition tanpa menambah banyak prop button.",
    ],
  },
  skillTags: ["React", "Component API", "Props", "TypeScript", "Composition"],
};

export const renameCourseStatusPropsChallenge: CodingChallenge = {
  id: "rename-course-status-props",
  lessonId: "component-prop-naming",
  title: "Rename course status props",
  description:
    "Ganti prop text, active, dan click dengan nama yang menyatakan data, state boolean, serta intent event CourseStatus.",
  instructions: [
    "Fokus di tab TSX.",
    "Ganti text menjadi label.",
    "Ganti active menjadi isComplete.",
    "Ganti click menjadi onOpenCourse.",
    "Gunakan isComplete pada aria-pressed dan copy status.",
    "Gunakan onOpenCourse pada onClick button.",
    "Cek otomatis membaca prop naming. Preview tidak menjalankan React component pada practice struktur ini.",
  ],
  starterCode: {
    ...componentApiPracticeCode,
    tsx: `type CourseStatusProps = {
  text: string;
  active: boolean;
  click: () => void;
};

export function CourseStatus({ text, active, click }: CourseStatusProps) {
  return (
    <button type="button" aria-pressed={active} onClick={click}>
      {text}: {active ? "selesai" : "belum selesai"}
    </button>
  );
}`,
  },
  solutionCode: {
    ...componentApiPracticeCode,
    tsx: `type CourseStatusProps = {
  label: string;
  isComplete: boolean;
  onOpenCourse: () => void;
};

export function CourseStatus({
  label,
  isComplete,
  onOpenCourse,
}: CourseStatusProps) {
  return (
    <button
      type="button"
      aria-pressed={isComplete}
      onClick={onOpenCourse}
    >
      {label}: {isComplete ? "selesai" : "belum selesai"}
    </button>
  );
}`,
  },
  checklist: [
    "label menyebut data yang tampil pada button.",
    "isComplete menjelaskan state boolean yang dipakai UI.",
    "onOpenCourse menjelaskan intent event yang diteruskan ke caller.",
    "aria-pressed serta copy button tetap sinkron dengan state boolean.",
    "Nama prop dapat dipahami tanpa membuka implementation CourseStatus.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "props", label: "Props memakai label, isComplete, dan onOpenCourse.", type: "contains", valueIncludes: "type CourseStatusProps = {\n  label: string;\n  isComplete: boolean;\n  onOpenCourse: () => void;\n};" },
      { id: "component", label: "Component membaca nama prop baru.", type: "contains", valueIncludes: "export function CourseStatus({\n  label,\n  isComplete,\n  onOpenCourse,\n}: CourseStatusProps)" },
      { id: "event", label: "State dan callback dipakai pada button.", type: "contains", valueIncludes: "aria-pressed={isComplete}\n      onClick={onOpenCourse}" },
      { id: "copy", label: "Label serta state membentuk copy status.", type: "contains", valueIncludes: '{label}: {isComplete ? "selesai" : "belum selesai"}' },
      { id: "no-text", label: "Tidak memakai prop text lama.", type: "doesNotContain", valueIncludes: "text: string" },
      { id: "no-active", label: "Tidak memakai prop active lama.", type: "doesNotContain", valueIncludes: "active: boolean" },
      { id: "no-click", label: "Tidak memakai callback click generik.", type: "doesNotContain", valueIncludes: "click: () => void" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target prop naming",
    description:
      "Cek otomatis membaca nama dan penggunaan props. Preview tidak menjalankan React runtime; gunakan naming yang sama agar JSX consumer dapat menjelaskan intent tanpa membuka component.",
    lines: [
      "label menjelaskan content yang ditampilkan.",
      "isComplete menjelaskan boolean state yang dibaca UI.",
      "onOpenCourse menyatakan intent event bagi caller.",
    ],
  },
  skillTags: ["React", "Props", "Naming", "TypeScript", "Accessibility"],
};

export const renderCourseResourcesFromContentChallenge: CodingChallenge = {
  id: "render-course-resources-from-content",
  lessonId: "content-driven-component-rendering",
  title: "Render course resources from content",
  description:
    "Buat CourseResources yang merender resource typed dengan key stabil, link text jelas, description, dan source metadata.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat type CourseResource untuk id, title, description, href, dan source.",
    "Buat CourseResourcesProps yang menerima resources array.",
    "Render resources.map dengan key resource.id.",
    "Gunakan resource.title serta resource.source sebagai text link dan tampilkan description-nya.",
    "Jangan memakai index sebagai key atau array string tanpa content shape.",
    "Cek otomatis membaca content-driven structure. Preview tidak menjalankan React component pada practice ini.",
  ],
  starterCode: {
    ...componentApiPracticeCode,
    tsx: `type CourseResourcesProps = {
  items: string[];
};

export function CourseResources({ items }: CourseResourcesProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
  },
  solutionCode: {
    ...componentApiPracticeCode,
    tsx: `type CourseResource = {
  id: string;
  title: string;
  description: string;
  href: string;
  source: "MDN" | "React" | "Next.js";
};

type CourseResourcesProps = {
  resources: CourseResource[];
};

export function CourseResources({ resources }: CourseResourcesProps) {
  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>
          <a href={resource.href}>
            {resource.title} ({resource.source})
          </a>
          <p>{resource.description}</p>
        </li>
      ))}
    </ul>
  );
}`,
  },
  checklist: [
    "Content resource memiliki id, title, description, href, dan source yang typed.",
    "List memakai resource.id sebagai key stabil.",
    "Link memakai title yang dapat dibaca serta source yang memberi context.",
    "Description tetap tampil sebagai alasan resource relevan bagi learner.",
    "Item dengan workflow berbeda tidak dipaksa masuk ke array content yang sama hanya demi abstraction.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "content-type", label: "CourseResource menjelaskan shape content.", type: "contains", valueIncludes: 'type CourseResource = {\n  id: string;\n  title: string;\n  description: string;\n  href: string;\n  source: "MDN" | "React" | "Next.js";\n};' },
      { id: "props", label: "Props menerima array CourseResource.", type: "contains", valueIncludes: "type CourseResourcesProps = {\n  resources: CourseResource[];\n};" },
      { id: "map", label: "List merender array resources.", type: "contains", valueIncludes: "{resources.map((resource) => (" },
      { id: "key", label: "List memakai id sebagai key stabil.", type: "contains", valueIncludes: "<li key={resource.id}>" },
      { id: "link", label: "Link memakai href, title, dan source content.", type: "contains", valueIncludes: "<a href={resource.href}>\n            {resource.title} ({resource.source})\n          </a>" },
      { id: "description", label: "Description content dirender di list.", type: "contains", valueIncludes: "<p>{resource.description}</p>" },
      { id: "no-index", label: "Tidak memakai index sebagai key.", type: "doesNotContain", valueIncludes: "key={index}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target content-driven component",
    description:
      "Cek otomatis membaca type dan mapping resources. Preview tidak menjalankan React runtime; gunakan local feature untuk memastikan setiap content item memiliki link destination dan copy yang benar.",
    lines: [
      "Setiap resource memiliki content contract yang lengkap.",
      "List merender item dengan key stabil serta link text yang jelas.",
      "Source dan description memberi learner context sebelum membuka resource.",
    ],
  },
  skillTags: ["React", "Content-Driven Rendering", "TypeScript", "Lists", "Accessibility"],
};

export const designCourseNoticeCardApiCheckpointChallenge: CodingChallenge = {
  id: "design-course-notice-card-api-checkpoint",
  lessonId: "component-api-documentation-assessment",
  title: "Design course notice card API checkpoint",
  description:
    "Rancang CourseNoticeCard dengan content contract, tone union, action slot, usage example, dan note yang menjelaskan semantic serta batas component.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor ReactNode sebagai type dan buat NoticeTone untuk tip, warning, serta important.",
    "Buat CourseNotice dengan id, title, body, dan tone.",
    "Buat CourseNoticeCardProps yang menerima notice dan action opsional.",
    "Render heading, body, tone, serta action footer hanya bila tersedia.",
    "Tambahkan CourseNoticeCardExample dengan action link berlabel Buka dokumentasi React.",
    "Tambahkan courseNoticeCardNotes yang menjelaskan purpose, doNotUseWhen, dan accessibility action link/button.",
    "Jangan memakai data: unknown, mode, isBlue, isYellow, actionText, actionCallback, globalStore, atau Context pada checkpoint ini.",
    "Cek otomatis membaca API serta note. Preview tidak menjalankan React runtime pada practice struktur ini.",
  ],
  starterCode: {
    ...componentApiPracticeCode,
    tsx: `type NoticeProps = {
  data: unknown;
  mode: string;
  titleText: string;
  bodyText: string;
  isBlue: boolean;
  isYellow: boolean;
  showAction: boolean;
  actionText?: string;
  actionCallback?: () => void;
};

export function Notice({ titleText, bodyText, actionText }: NoticeProps) {
  return (
    <div>
      <strong>{titleText}</strong>
      <p>{bodyText}</p>
      {actionText ? <button type="button">{actionText}</button> : null}
    </div>
  );
}`,
  },
  solutionCode: {
    ...componentApiPracticeCode,
    tsx: `import type { ReactNode } from "react";

type NoticeTone = "tip" | "warning" | "important";

type CourseNotice = {
  id: string;
  title: string;
  body: string;
  tone: NoticeTone;
};

type CourseNoticeCardProps = {
  notice: CourseNotice;
  action?: ReactNode;
};

export function CourseNoticeCard({
  notice,
  action,
}: CourseNoticeCardProps) {
  return (
    <aside data-tone={notice.tone} aria-labelledby={notice.id + "-title"}>
      <p>{notice.tone}</p>
      <h2 id={notice.id + "-title"}>{notice.title}</h2>
      <p>{notice.body}</p>
      {action ? <footer>{action}</footer> : null}
    </aside>
  );
}

export function CourseNoticeCardExample() {
  const notice: CourseNotice = {
    id: "react-props-note",
    title: "Props adalah contract component",
    body: "Baca dokumentasi React sebelum memperluas API component.",
    tone: "important",
  };

  return (
    <CourseNoticeCard
      notice={notice}
      action={<a href="https://react.dev/learn/passing-props-to-a-component">Buka dokumentasi React</a>}
    />
  );
}

export const courseNoticeCardNotes = {
  purpose:
    "Menampilkan satu tip, warning, atau informasi penting yang terkait dengan content course.",
  doNotUseWhen:
    "Gunakan component lain untuk dialog, banner global, atau panel dengan beberapa command.",
  accessibility: [
    "Gunakan action link untuk navigasi dan tulis label destination yang jelas.",
    "Gunakan action button hanya untuk aksi pada halaman ini serta sediakan event yang bekerja.",
  ],
} as const;`,
  },
  checklist: [
    "Notice content memiliki id, title, body, dan tone yang typed.",
    "Tone dibatasi oleh union agar visual state tidak berasal dari boolean yang dapat bertentangan.",
    "Card menerima satu action slot yang opsional, bukan action text dan callback generik berlapis.",
    "Usage example memperlihatkan action link dengan label destination yang jelas.",
    "Documentation note menjelaskan purpose, non-goal, dan semantic responsibility action.",
    "Component tidak mencoba menjadi dialog, banner global, atau panel multi-action sekaligus.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "react-node", label: "ReactNode diimpor sebagai type.", type: "contains", valueIncludes: 'import type { ReactNode } from "react";' },
      { id: "tone", label: "NoticeTone membatasi tiga tone yang didukung.", type: "contains", valueIncludes: 'type NoticeTone = "tip" | "warning" | "important";' },
      { id: "notice", label: "CourseNotice menjelaskan content contract.", type: "contains", valueIncludes: "type CourseNotice = {\n  id: string;\n  title: string;\n  body: string;\n  tone: NoticeTone;\n};" },
      { id: "props", label: "Card menerima notice dan action slot opsional.", type: "contains", valueIncludes: "type CourseNoticeCardProps = {\n  notice: CourseNotice;\n  action?: ReactNode;\n};" },
      { id: "card", label: "Card merender tone, heading, body, serta action.", type: "contains", valueIncludes: '<aside data-tone={notice.tone} aria-labelledby={notice.id + "-title"}>\n      <p>{notice.tone}</p>\n      <h2 id={notice.id + "-title"}>{notice.title}</h2>\n      <p>{notice.body}</p>\n      {action ? <footer>{action}</footer> : null}' },
      { id: "example", label: "Usage example memakai link React documentation.", type: "contains", valueIncludes: 'action={<a href="https://react.dev/learn/passing-props-to-a-component">Buka dokumentasi React</a>}' },
      { id: "notes", label: "Documentation note menjelaskan purpose, batas, dan accessibility.", type: "contains", valueIncludes: "export const courseNoticeCardNotes = {\n  purpose:" },
      { id: "do-not-use", label: "Note menyebut kondisi component tidak tepat dipakai.", type: "contains", valueIncludes: "doNotUseWhen:" },
      { id: "accessibility", label: "Note memiliki accessibility action guidance.", type: "contains", valueIncludes: "accessibility: [" },
      { id: "no-unknown", label: "Tidak memakai data unknown lama.", type: "doesNotContain", valueIncludes: "data: unknown" },
      { id: "no-mode", label: "Tidak memakai mode atau boolean visual lama.", type: "doesNotContain", valueIncludes: "isBlue" },
      { id: "no-global-state", label: "Tidak memakai global store atau Context sebagai jalan pintas.", type: "doesNotContain", valueIncludes: "globalStore" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target component API checkpoint",
    description:
      "Cek otomatis membaca CourseNoticeCard, usage example, dan documentation note. Preview tidak menjalankan React runtime; terapkan pada local consumer untuk memeriksa heading, action semantics, serta batas API sebenarnya.",
    lines: [
      "notice membawa content dan tone yang didukung component.",
      "action memberi satu area composition dengan semantic yang dijelaskan di note.",
      "Usage example dan documentation note membantu consumer memakai card tanpa menambah prop generik baru.",
    ],
  },
  skillTags: ["React", "Component API", "Content-Driven Rendering", "Documentation", "Accessibility", "Assessment"],
};
