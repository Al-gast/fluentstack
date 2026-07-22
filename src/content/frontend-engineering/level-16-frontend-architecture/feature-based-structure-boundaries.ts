import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const architecturePracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const featureBasedStructureBoundariesModule: Module = {
  id: "feature-based-structure-boundaries",
  trackId: "frontend-engineering",
  title: "Feature-Based Structure and Boundaries",
  slug: "feature-based-structure-boundaries",
  description:
    "Mengatur feature frontend agar component, service, type, content, dan dependency tetap mudah dipahami saat product berkembang.",
  order: 50,
  lessonIds: [
    "feature-folders",
    "shared-components",
    "service-layer",
    "types-and-content-boundaries",
    "dependency-boundaries",
    "feature-based-structure-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Feature Folders",
    "Shared Components",
    "Service Layer",
    "Type Ownership",
    "Dependency Boundaries",
  ],
};

export const featureFoldersLesson: Lesson = {
  id: "feature-folders",
  trackId: "frontend-engineering",
  moduleId: "feature-based-structure-boundaries",
  title: "Feature Folders",
  slug: "feature-folders",
  description:
    "Mengelompokkan code berdasarkan area product agar perubahan satu feature tidak tersebar ke banyak folder generik.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan kapan feature folder mengurangi biaya mencari dan mengubah code",
    "Membedakan route file dengan implementation feature",
    "Menempatkan component, service, type, dan content yang hanya dipakai satu feature di dekat feature itu",
    "Menghindari folder kosong atau lapisan baru sebelum masalahnya nyata",
  ],
  skillTags: ["Feature Folders", "Next.js", "Code Organization", "Maintainability"],
  blocks: [
    {
      id: "feature-folders-intro",
      type: "text",
      title: "Mulai dari perubahan yang ingin dipermudah",
      content:
        "Feature folder bukan aturan bahwa setiap folder harus memiliki components, hooks, services, types, tests, dan constants sejak hari pertama. Ia berguna ketika satu area product mulai memiliki beberapa bagian yang berubah bersama. Misalnya feature courses memiliki card, filter, query data, type response, dan content copy yang biasanya disentuh dalam satu pekerjaan. Menaruh semuanya dekat feature membuat engineer dapat memahami scope perubahan tanpa mencari ke seluruh project. Route App Router tetap boleh tipis: route memilih page atau layout, sementara implementation feature hidup di boundary yang lebih jelas.",
    },
    {
      id: "feature-folders-example",
      type: "code-example",
      title: "Dari folder berdasarkan jenis file ke feature courses",
      language: "bash",
      code: `Sebelum
src/
  components/CourseCard.tsx
  components/CourseFilter.tsx
  lib/getCourses.ts
  types/course.ts
  content/course-copy.ts
  app/courses/page.tsx

Sesudah
src/
  app/courses/page.tsx
  features/courses/
    components/CourseCard.tsx
    components/CourseFilter.tsx
    services/get-courses.ts
    types.ts
    content.ts
    index.ts`,
      explanation:
        "Perubahan ini tidak mengharuskan semua code masuk ke features. CourseCard, query, type, dan copy dipindahkan karena mereka dimiliki courses. app/courses/page.tsx tetap menjaga route convention Next.js dan dapat mengimpor public entry dari feature. Bila CourseCard kemudian dipakai oleh beberapa feature dengan API yang stabil, barulah ada alasan untuk memindahkannya ke shared UI. Jangan memindahkan file hanya karena namanya memiliki kata Course.",
    },
    {
      id: "feature-folders-coding-practice",
      type: "coding-practice",
      challengeId: "organize-course-feature-folder",
    },
    {
      id: "feature-folders-quick-check",
      type: "quick-check",
      question:
        "Kapan feature folder paling membantu sebuah project?",
      options: [
        "Saat beberapa file milik satu area product sering berubah bersama dan sulit ditemukan dari folder berdasarkan jenis file.",
        "Saat project baru memiliki satu component dan belum ada perubahan product nyata.",
        "Saat semua component harus dipindahkan dari app directory tanpa melihat route convention.",
        "Saat tim ingin menambah folder sebanyak mungkin agar terlihat enterprise.",
      ],
      correctAnswer:
        "Saat beberapa file milik satu area product sering berubah bersama dan sulit ditemukan dari folder berdasarkan jenis file.",
      explanation:
        "Feature folder memecahkan masalah ownership dan navigasi code. Untuk feature sangat kecil, colocated file sederhana atau folder yang ada dapat lebih mudah dibaca daripada struktur baru.",
    },
    {
      id: "feature-folders-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan membuat feature folder sebagai ritual",
      content:
        "Folder features tidak membuat code otomatis modular. Jika page tetap mengimpor detail internal acak, service memanggil component, atau feature saling mengimpor tanpa arah, struktur baru hanya memindahkan kebingungan. Mulai dari satu feature yang nyata, tentukan public entry yang kecil, lalu lihat apakah perubahan berikutnya menjadi lebih mudah.",
    },
    {
      id: "feature-folders-summary",
      type: "summary",
      points: [
        "Feature folder mengelompokkan code berdasarkan area product yang berubah bersama.",
        "Route file menjaga convention framework; implementation feature dapat berada di boundary yang lebih jelas.",
        "Component, service, type, dan content yang hanya dipakai satu feature biasanya dimulai dekat owner-nya.",
        "Struktur baru harus mengurangi biaya perubahan, bukan menambah folder kosong.",
        "Berikutnya, kita menentukan UI mana yang benar-benar layak menjadi shared component.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "feature-folders-intro",
      "feature-folders-example",
      "feature-folders-coding-practice",
      "feature-folders-quick-check",
      "feature-folders-summary",
    ],
  },
};

export const sharedComponentsLesson: Lesson = {
  id: "shared-components",
  trackId: "frontend-engineering",
  moduleId: "feature-based-structure-boundaries",
  title: "Shared Components",
  slug: "shared-components",
  description:
    "Menentukan apakah UI sebaiknya tetap dekat feature atau dipindahkan menjadi primitive shared dengan API yang stabil.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan reuse kebetulan dari kebutuhan shared component yang nyata",
    "Menjaga component feature-specific dekat domain yang dimilikinya",
    "Mengidentifikasi primitive UI yang cukup generic untuk dipakai lintas feature",
    "Menghindari API component penuh boolean dan props yang tidak jelas",
  ],
  skillTags: ["React Components", "Composition", "Shared UI", "Feature Ownership"],
  blocks: [
    {
      id: "shared-components-intro",
      type: "text",
      title: "Dipakai dua kali belum otomatis berarti shared",
      content:
        "Shared component membawa biaya: API harus dipahami banyak caller, perubahan visual dapat berdampak luas, dan owner perlu menjaga compatibility. Karena itu, reuse bukan satu-satunya alasan memindahkan code. Button, Input, Dialog, dan Avatar generic sering cocok menjadi shared primitive karena tugasnya sama lintas feature. CourseProgressCard, EnrollmentStatus, atau CourseFilter biasanya tetap milik courses walau visualnya mirip card lain. Tanyakan apakah component membawa vocabulary domain yang sama, apakah behaviornya benar-benar generic, dan apakah reuse sudah nyata serta stabil. Bila jawabannya belum jelas, simpan dekat feature dan ekstrak nanti dengan bukti yang lebih kuat.",
    },
    {
      id: "shared-components-example",
      type: "code-example",
      title: "UI primitive dibedakan dari component domain",
      language: "tsx",
      code: `// src/components/ui/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return <button type="button" onClick={onClick}>{children}</button>;
}

// src/features/courses/components/CourseProgressCard.tsx
type CourseProgressCardProps = {
  title: string;
  completedLessons: number;
  totalLessons: number;
};

export function CourseProgressCard(props: CourseProgressCardProps) {
  const progress = Math.round((props.completedLessons / props.totalLessons) * 100);

  return <article>{props.title}: {progress}% selesai</article>;
}`,
      explanation:
        "Button memiliki contract interaction yang dapat dipakai banyak feature. CourseProgressCard membawa vocabulary course, calculation progress, dan copy domain, sehingga lebih mudah dirawat dekat feature courses. Memaksa card ini menjadi generic sering menghasilkan props seperti entityName, progressLabel, completedText, dan mode yang justru menyembunyikan tujuan component.",
    },
    {
      id: "shared-components-coding-practice",
      type: "coding-practice",
      challengeId: "place-shared-and-course-components",
    },
    {
      id: "shared-components-writing-practice",
      type: "writing-practice",
      prompt:
        "Pilih dua component pada project lokal: satu yang menurutmu layak shared dan satu yang sebaiknya tetap di feature. Untuk masing-masing, jelaskan consumer saat ini, vocabulary atau behavior yang dibawa, risiko bila API dibuat terlalu generic, dan keputusan folder yang kamu pilih. Jangan menyebut component sebagai shared hanya karena namanya umum.",
      placeholder:
        "Button layak berada di components/ui karena dipakai profile, courses, dan settings dengan behavior click yang sama. API-nya cukup children, type, disabled, dan event yang stabil. CourseProgressCard tetap di features/courses karena ia menghitung lesson progress dan memakai copy course. Jika dipaksa shared, props untuk nama entity, label progress, dan status akan membuat API sulit dibaca. Saya akan membiarkannya di courses sampai ada reuse yang benar-benar sama pada feature lain.",
      minimumCharacters: 500,
      checklist: [
        "Menyebut consumer nyata atau alasan belum ada reuse nyata.",
        "Membedakan primitive generic dari vocabulary feature.",
        "Menjelaskan risiko API yang terlalu generic.",
        "Memilih folder berdasarkan owner serta perubahan yang mungkin terjadi.",
      ],
      modelAnswer:
        "Button saya tempatkan di components/ui karena profile, course enrollment, dan settings memakai control dengan interaction dasar yang sama. API Button cukup menangani children, disabled, type, dan event; ia tidak perlu mengetahui status enrollment atau course. Sebaliknya, CourseProgressCard tetap berada di features/courses/components. Component ini menghitung completedLessons terhadap totalLessons, menyebut lesson dalam copy, dan kemungkinan berubah bersama dashboard course. Bila saya menjadikannya generic sekarang, saya akan menambah props seperti entityLabel, completedLabel, denominator, dan variant yang membuat caller tidak lagi jelas. Saya baru mempertimbangkan ekstraksi bila dua feature memiliki user goal, data shape, dan behavior yang benar-benar sama.",
    },
    {
      id: "shared-components-quick-check",
      type: "quick-check",
      question:
        "Keputusan awal yang paling sehat untuk CourseProgressCard yang hanya dipakai feature courses adalah",
      options: [
        "Simpan dekat feature courses sampai reuse serta API generic benar-benar terbukti.",
        "Pindahkan langsung ke shared karena semua card harus berada di components/ui.",
        "Gabungkan dengan Button agar semua UI berada dalam satu file.",
        "Beri props mode sebanyak mungkin agar setiap feature dapat menggunakannya.",
      ],
      correctAnswer:
        "Simpan dekat feature courses sampai reuse serta API generic benar-benar terbukti.",
      explanation:
        "Colocation menjaga domain context tetap terlihat. Ekstraksi lebih aman saat consumer, API, dan behavior lintas feature sudah dapat dijelaskan dengan sederhana.",
    },
    {
      id: "shared-components-summary",
      type: "summary",
      points: [
        "Shared UI cocok untuk primitive dengan contract serta behavior yang stabil lintas feature.",
        "Component domain tetap dekat feature agar vocabulary dan perubahan product mudah dilacak.",
        "Dua pemakaian yang mirip belum cukup; periksa goal, data shape, behavior, dan owner-nya.",
        "Props boolean atau variant yang terus bertambah sering menjadi sinyal abstraction terlalu dini.",
        "Berikutnya, service layer memisahkan data access dari UI tanpa membuat seluruh feature menjadi abstrak.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "shared-components-intro",
      "shared-components-example",
      "shared-components-coding-practice",
      "shared-components-writing-practice",
      "shared-components-quick-check",
      "shared-components-summary",
    ],
  },
};

export const serviceLayerLesson: Lesson = {
  id: "service-layer",
  trackId: "frontend-engineering",
  moduleId: "feature-based-structure-boundaries",
  title: "Service Layer",
  slug: "service-layer",
  description:
    "Memisahkan request, mapping response, dan error boundary dari component UI agar feature lebih mudah diuji serta diubah.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan service function sebagai boundary data access yang kecil dan jelas",
    "Memisahkan request atau SDK call dari component presentation",
    "Menempatkan mapping response dekat source data atau feature yang memakainya",
    "Membedakan service layer sederhana dari abstraction data yang berlebihan",
  ],
  skillTags: ["Service Layer", "Data Access", "TypeScript", "Testing"],
  blocks: [
    {
      id: "service-layer-intro",
      type: "text",
      title: "Component sebaiknya tidak perlu mengetahui detail transport data",
      content:
        "Component UI perlu menjelaskan apa yang dilihat dan dilakukan user. Ketika ia juga membangun URL, memanggil SDK, membedakan response mentah, memetakan data, dan memilih error teknis, component menjadi sulit dibaca serta sulit diuji. Service function memberi nama pada operation product seperti getSavedCourses atau updateProfile. Ia menjadi satu tempat kecil untuk request, response mapping, dan error contract yang relevan. UI tetap menentukan loading, error, empty, dan success state. Jangan membuat service layer menjadi framework internal: satu function untuk satu operation yang jelas sering lebih baik daripada generic repository dengan banyak parameter yang tidak dipahami feature.",
    },
    {
      id: "service-layer-example",
      type: "code-example",
      title: "UI memakai operation product, bukan response mentah",
      language: "ts",
      code: `type CourseSummary = {
  id: string;
  title: string;
};

type CourseResponse = {
  id: string;
  name: string;
};

export async function getSavedCourses(userId: string): Promise<CourseSummary[]> {
  const response = await fetch("/api/users/" + userId + "/saved-courses");
  const courses = (await response.json()) as CourseResponse[];

  return courses.map((course) => ({
    id: course.id,
    title: course.name,
  }));
}`,
      explanation:
        "Service memberi UI data shape yang ia butuhkan: id dan title. Jika endpoint atau SDK berubah, mapping dapat ditinjau di satu tempat tanpa memaksa CourseList memahami field transport seperti name. Error policy yang dipilih service perlu tetap jujur bagi caller; jangan menelan failure lalu mengembalikan array kosong karena UI akan salah membaca error sebagai empty state.",
    },
    {
      id: "service-layer-coding-practice",
      type: "coding-practice",
      challengeId: "extract-course-service-function",
    },
    {
      id: "service-layer-quick-check",
      type: "quick-check",
      question:
        "Tanggung jawab yang paling tepat untuk service getSavedCourses adalah",
      options: [
        "Menjalankan data request dan mengembalikan data course dengan shape yang dibutuhkan UI.",
        "Merender empty state, retry button, dan loading skeleton di JSX.",
        "Menyimpan semua state modal dari seluruh dashboard.",
        "Mengubah warna button ketika request berhasil.",
      ],
      correctAnswer:
        "Menjalankan data request dan mengembalikan data course dengan shape yang dibutuhkan UI.",
      explanation:
        "Service memegang boundary data access. Component atau hook caller tetap bertanggung jawab memilih presentasi state untuk user dan kapan operation dipanggil.",
    },
    {
      id: "service-layer-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan menyembunyikan failure sebagai data kosong",
      content:
        "return [] ketika network gagal dapat membuat UI menampilkan Belum ada course padahal data tidak dapat dimuat. Tentukan error contract yang dapat direspons caller, misalnya throw error yang jelas atau result type yang membedakan success dan failure. Ini lebih penting daripada menambahkan layer generik baru.",
    },
    {
      id: "service-layer-summary",
      type: "summary",
      points: [
        "Service function memberi nama pada operation data yang dimiliki feature.",
        "Request dan mapping response tidak perlu memenuhi component presentasi.",
        "UI tetap memiliki loading, error, empty, success, serta event behavior untuk user.",
        "Error harus dibedakan dari data kosong agar user mendapat feedback yang benar.",
        "Berikutnya, kita menempatkan type dan static content di owner yang tepat agar import tidak menyebar tanpa arah.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "service-layer-intro",
      "service-layer-example",
      "service-layer-coding-practice",
      "service-layer-quick-check",
      "service-layer-summary",
    ],
  },
};

export const typesAndContentBoundariesLesson: Lesson = {
  id: "types-and-content-boundaries",
  trackId: "frontend-engineering",
  moduleId: "feature-based-structure-boundaries",
  title: "Types and Content Boundaries",
  slug: "types-and-content-boundaries",
  description:
    "Menempatkan type dan static content dekat owner agar setiap import menjelaskan alasan file itu dipakai.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan feature type dari type lintas domain yang benar-benar shared",
    "Menempatkan static content di dekat feature atau track yang memilikinya",
    "Menghindari folder global yang menjadi tempat semua type dan constants",
    "Menyusun public import yang tidak membocorkan detail internal tanpa alasan",
  ],
  skillTags: ["TypeScript", "Static Content", "Ownership", "Imports"],
  blocks: [
    {
      id: "types-and-content-boundaries-intro",
      type: "text",
      title: "Type dan content juga memiliki owner",
      content:
        "Folder types atau constants global mudah menjadi tempat pembuangan: CourseFilterState, ProfileFormValues, API mapper, warna feature, dan copy onboarding akhirnya hidup berdampingan tanpa hubungan. Mulai dari owner terdekat. Type yang hanya menjelaskan feature courses dapat tinggal di features/courses/types.ts. Static course copy dapat berada di features/courses/content.ts bila tidak dipakai oleh curriculum engine lain. Baru pindahkan ke shared ketika beberapa feature menggunakan contract yang sama dan owner-nya memang lintas feature. Boundary ini membuat import memberi context: ketika membaca type, engineer tahu product area yang bertanggung jawab atas perubahan berikutnya.",
    },
    {
      id: "types-and-content-boundaries-example",
      type: "code-example",
      title: "Course filter type dan copy dimiliki feature courses",
      language: "ts",
      code: `// src/features/courses/types.ts
export type CourseFilter = {
  level: "beginner" | "intermediate" | "advanced";
  query: string;
};

// src/features/courses/content.ts
export const courseEmptyCopy = {
  title: "Belum ada course yang sesuai",
  description: "Ubah filter atau coba kata kunci lain.",
};

// src/features/courses/components/CourseEmptyState.tsx
import { courseEmptyCopy } from "../content";
import type { CourseFilter } from "../types";`,
      explanation:
        "CourseFilter dan courseEmptyCopy ditempatkan bersama feature karena istilah serta perubahan mereka mengikuti product courses. Type AppUser atau component Button tidak dipindahkan ke sini bila beberapa feature memang memakai contract yang sama. Jangan membuat global types hanya karena file types.ts terlihat lebih kecil; yang penting adalah siapa yang memahami dan mengubah contract itu.",
    },
    {
      id: "types-and-content-boundaries-coding-practice",
      type: "coding-practice",
      challengeId: "place-course-types-and-content",
    },
    {
      id: "types-and-content-boundaries-quick-check",
      type: "quick-check",
      question:
        "Tempat awal yang paling masuk akal untuk type CourseFilter yang hanya digunakan course listing adalah",
      options: [
        "Dekat features/courses, lalu diekstrak hanya bila contract benar-benar dipakai lintas feature.",
        "Langsung di types/global.ts bersama semua type aplikasi.",
        "Di dalam component Button agar semua UI dapat menemukannya.",
        "Di app/layout.tsx karena layout selalu diimpor lebih dulu.",
      ],
      correctAnswer:
        "Dekat features/courses, lalu diekstrak hanya bila contract benar-benar dipakai lintas feature.",
      explanation:
        "Local ownership membuat perubahan feature lebih terarah. Shared type sebaiknya mencerminkan shared contract, bukan sekadar keinginan mengumpulkan file sejenis.",
    },
    {
      id: "types-and-content-boundaries-summary",
      type: "summary",
      points: [
        "Type dan content dimulai dekat feature yang memahami serta mengubahnya.",
        "Folder global bukan tempat default untuk seluruh constant dan type aplikasi.",
        "Shared extraction membutuhkan contract lintas feature yang nyata dan cukup stabil.",
        "Import path yang dekat owner membuat reason for change lebih mudah dibaca.",
        "Berikutnya, dependency boundaries memastikan feature tidak mengambil detail internal feature lain secara sembarangan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "types-and-content-boundaries-intro",
      "types-and-content-boundaries-example",
      "types-and-content-boundaries-coding-practice",
      "types-and-content-boundaries-quick-check",
      "types-and-content-boundaries-summary",
    ],
  },
};

export const dependencyBoundariesLesson: Lesson = {
  id: "dependency-boundaries",
  trackId: "frontend-engineering",
  moduleId: "feature-based-structure-boundaries",
  title: "Dependency Boundaries",
  slug: "dependency-boundaries",
  description:
    "Menjaga feature tidak bergantung pada implementation detail feature lain tanpa contract yang jelas.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Mengenali import lintas feature yang membuat perubahan kecil menjadi berisiko",
    "Memilih shared primitive atau public contract saat reuse memang dibutuhkan",
    "Menghindari circular dependency dan deep import implementation detail",
    "Menjelaskan arah dependency sederhana untuk project frontend yang berkembang",
  ],
  skillTags: ["Dependencies", "Imports", "Feature Boundaries", "Maintainability"],
  blocks: [
    {
      id: "dependency-boundaries-intro",
      type: "text",
      title: "Reuse tidak boleh membuat feature saling mengunci",
      content:
        "Course feature boleh memakai Avatar shared, tetapi CourseCard tidak seharusnya mengimpor ProfileHeader atau helper internal profile hanya karena saat ini tampak berguna. Deep import ke implementation detail membuat refactor profile dapat mematahkan courses tanpa tanda bahwa contract itu dipakai lintas feature. Saat dua feature benar-benar membutuhkan primitive atau type yang sama, pindahkan contract kecil itu ke shared owner atau expose public entry yang sengaja dirawat. Hindari dependency dua arah: courses mengimpor profile internals lalu profile mengimpor course internals. Arah import yang sederhana membuat impact perubahan dapat diperkirakan tanpa tool graph yang rumit.",
    },
    {
      id: "dependency-boundaries-example",
      type: "code-example",
      title: "Pindahkan reuse ke owner shared, bukan ke feature lain",
      language: "tsx",
      code: `// Hindari: courses mengambil implementation detail profile
import { Avatar } from "@/features/profile/components/ProfileAvatar";

// Pilih: Avatar generic dimiliki shared UI
import { Avatar } from "@/components/ui/Avatar";

// Course component tetap membawa vocabulary course
export function CourseInstructor({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <section>
      <Avatar src={imageUrl} alt={name} />
      <p>Instruktur: {name}</p>
    </section>
  );
}`,
      explanation:
        "ProfileAvatar mungkin memiliki profile menu, fallback copy, analytics, atau styling khusus profile. Avatar generic hanya memerlukan image source dan alt, sehingga courses dapat memakainya tanpa bergantung pada detail profile. Jangan memindahkan component ke shared hanya untuk menghilangkan satu import; pastikan primitive yang diekstrak memiliki scope kecil serta contract yang dapat dipakai banyak feature.",
    },
    {
      id: "dependency-boundaries-coding-practice",
      type: "coding-practice",
      challengeId: "fix-course-feature-dependency",
    },
    {
      id: "dependency-boundaries-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note untuk satu import lintas feature yang ingin kamu perbaiki. Sebutkan feature consumer dan owner, detail internal yang sedang diambil, dampak jika owner di-refactor, contract shared atau public entry yang kamu pilih, serta cara kamu memeriksa bahwa dependency baru tidak menciptakan arah import balik.",
      placeholder:
        "Courses saat ini mengimpor ProfileAvatar dari feature profile. Component itu membawa menu profile dan fallback copy yang bukan kebutuhan courses. Jika profile di-refactor, course instructor card dapat rusak tanpa contract lintas feature yang jelas. Saya akan mengekstrak Avatar kecil ke components/ui dengan props src dan alt, lalu courses dan profile memakai primitive itu. Saya akan memastikan components/ui tidak mengimpor kembali dari features, dan mencari import ProfileAvatar lama sebelum menghapusnya.",
      minimumCharacters: 550,
      checklist: [
        "Menyebut feature consumer serta owner saat ini.",
        "Menjelaskan implementation detail atau risiko refactor yang diambil consumer.",
        "Menentukan shared primitive atau public contract yang kecil.",
        "Menyebut cara mengecek arah import tidak berbalik atau melingkar.",
      ],
      modelAnswer:
        "Feature courses saat ini mengimpor ProfileAvatar dari features/profile/components. Import ini mengambil implementation detail profile yang juga menangani menu account dan fallback copy khusus profile. Bila profile mengganti markup atau split component, CourseInstructor dapat rusak walau course tidak pernah menjadi bagian perubahan tersebut. Saya akan mengekstrak Avatar primitive ke components/ui/Avatar dengan API kecil src, alt, dan ukuran yang benar-benar dipakai lintas feature. CourseInstructor tetap berada di features/courses karena ia menampilkan instructor dalam context course. Profile dan courses dapat mengimpor Avatar dari shared UI, tetapi components/ui tidak boleh mengimpor lagi dari salah satu feature. Saya akan mencari deep import ProfileAvatar yang tersisa dan menjalankan typecheck setelah import diganti untuk memastikan tidak ada dependency balik.",
    },
    {
      id: "dependency-boundaries-quick-check",
      type: "quick-check",
      question:
        "Apa perbaikan yang paling aman saat courses membutuhkan gambar avatar tetapi sekarang mengimpor ProfileAvatar internal?",
      options: [
        "Ekstrak Avatar primitive kecil ke shared UI bila contract-nya benar-benar generic, lalu biarkan component domain tetap di feature masing-masing.",
        "Biarkan deep import karena code sudah dapat di-build hari ini.",
        "Pindahkan semua profile feature ke courses agar import lebih pendek.",
        "Salin ProfileAvatar ke setiap feature tanpa mempertimbangkan contract atau maintenance.",
      ],
      correctAnswer:
        "Ekstrak Avatar primitive kecil ke shared UI bila contract-nya benar-benar generic, lalu biarkan component domain tetap di feature masing-masing.",
      explanation:
        "Shared primitive mengurangi coupling tanpa memaksa seluruh domain component menjadi generic. Feature tetap memiliki vocabulary dan composition yang sesuai dengan user goal-nya.",
    },
    {
      id: "dependency-boundaries-summary",
      type: "summary",
      points: [
        "Feature sebaiknya tidak deep import implementation detail feature lain.",
        "Reuse lintas feature membutuhkan shared primitive atau public contract yang sengaja dirawat.",
        "Arah dependency sederhana mengurangi risiko circular import dan refactor tak terduga.",
        "Shared layer tidak boleh mengimpor kembali detail dari feature consumer.",
        "Uji Kompetensi berikutnya menggabungkan folder, shared UI, service, type/content owner, dan dependency direction dalam satu refactor case.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "dependency-boundaries-intro",
      "dependency-boundaries-example",
      "dependency-boundaries-coding-practice",
      "dependency-boundaries-writing-practice",
      "dependency-boundaries-quick-check",
      "dependency-boundaries-summary",
    ],
  },
};

export const featureBasedStructureAssessmentLesson: Lesson = {
  id: "feature-based-structure-assessment",
  trackId: "frontend-engineering",
  moduleId: "feature-based-structure-boundaries",
  title: "Uji Kompetensi Feature-Based Structure",
  slug: "feature-based-structure-assessment",
  description:
    "Membuktikan kesiapan merapikan satu feature frontend menjadi boundary yang mudah diubah dan dijelaskan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Menyusun feature boundary untuk component, service, type, dan content yang terkait",
    "Membedakan shared primitive dari component domain",
    "Menghindari dependency lintas feature yang tidak sehat",
    "Menulis note refactor yang menjelaskan keputusan tanpa architecture buzzwords",
  ],
  skillTags: ["Frontend Architecture", "Feature Boundaries", "Service Layer", "Refactoring", "Readiness Checkpoint"],
  blocks: [
    {
      id: "feature-based-structure-assessment-recap",
      type: "text",
      title: "Checkpoint: buat perubahan course lebih mudah ditemukan dan lebih aman",
      content:
        "Project memiliki route courses, CourseCard di components global, CourseFilter di halaman, fetch langsung di component, CourseFilter type di types global, dan import ProfileAvatar internal. Tim ingin menambah saved courses tanpa membuat page semakin sulit dibaca. Pada checkpoint ini, fokus pada boundary yang menyelesaikan masalah tersebut: kumpulkan code course yang berubah bersama, gunakan Button atau Avatar shared hanya jika contract generic, pindahkan operation data ke service, simpan type/content di owner yang tepat, dan hapus import lintas feature yang mengambil detail profile. Tujuannya bukan membuat arsitektur sempurna; tujuannya agar engineer berikutnya memahami tempat mengubah feature dan alasan setiap import.",
    },
    {
      id: "feature-based-structure-assessment-quiz",
      type: "quiz",
      quizId: "feature-based-structure-assessment-quiz",
    },
    {
      id: "feature-based-structure-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "refactor-course-feature-boundaries-checkpoint",
    },
    {
      id: "feature-based-structure-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis refactor note untuk feature courses. Jelaskan folder atau public entry yang kamu buat, component mana yang tetap feature-specific, primitive mana yang boleh shared, operation data yang dipindahkan ke service, lokasi type/content, satu dependency lintas feature yang dihilangkan, serta cara kamu memverifikasi perubahan. Sebutkan satu hal yang sengaja tidak kamu ekstrak dan alasannya.",
      placeholder:
        "Saya membuat features/courses dengan components, services, types, dan content. CourseCard serta CourseFilter tetap di sana karena memakai vocabulary serta data courses. Button dan Avatar kecil berada di shared UI karena contract-nya generic dan dipakai lintas feature. getSavedCourses memegang request serta mapping response, lalu page memilih loading/empty/error UI. CourseFilter type dan empty copy tinggal dekat courses. Saya mengganti import ProfileAvatar internal dengan Avatar shared. Saya menjalankan typecheck, unit test feature, dan membuka route courses. Saya tidak mengekstrak CourseProgressCard karena baru dipakai courses dan API genericnya belum terbukti.",
      minimumCharacters: 800,
      checklist: [
        "Menjelaskan boundary feature dan public entry atau folder yang dipilih.",
        "Membedakan component domain dari shared primitive dengan alasan yang jelas.",
        "Menyebut service/data operation dan owner type/content.",
        "Menyebut dependency lintas feature yang dihilangkan atau dicegah.",
        "Menyebut verification dan satu extraction yang sengaja ditunda.",
      ],
      modelAnswer:
        "Saya membuat src/features/courses sebagai owner feature dengan components/CourseCard.tsx, components/CourseFilter.tsx, services/get-saved-courses.ts, types.ts, content.ts, dan index.ts sebagai public entry kecil. CourseCard dan CourseFilter tetap berada di feature karena keduanya memakai filter, copy, serta data courses dan kemungkinan berubah bersama route courses. Button dan Avatar kecil dapat hidup di components/ui karena kedua contract itu generic, dipakai profile serta courses, dan shared UI tidak mengimpor kembali dari feature. Saya memindahkan request saved courses serta mapping response ke getSavedCourses sehingga page memilih state loading, error, empty, dan success tanpa mengetahui endpoint detail. CourseFilter type dan empty copy tetap dekat courses karena belum dipakai feature lain. Saya mengganti deep import ProfileAvatar dengan Avatar shared, lalu mencari import lama agar tidak ada dependency dari courses ke implementation profile. Verification saya adalah typecheck, test yang memakai service mock, dan manual route check courses. Saya sengaja tidak mengekstrak CourseProgressCard karena satu-satunya consumer masih courses dan API genericnya akan penuh label serta variant yang belum terbukti perlu.",
    },
    {
      id: "feature-based-structure-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk memilih convention, lalu pertahankan ownership yang sederhana",
      description:
        "Baca bagian yang membantu struktur project yang sedang kamu ubah. Framework memberi convention route dan colocation, tetapi tidak dapat memilih owner product untukmu. Jangan menyalin tree folder dari contoh besar bila feature lokalmu belum membutuhkannya.",
      links: [
        {
          source: "Next.js",
          title: "Project Structure and Organization",
          url: "https://nextjs.org/docs/app/getting-started/project-structure",
          focus: [
            "Route file convention dan bagaimana route menjadi public.",
            "Colocation serta pilihan menaruh project files di atau di luar app directory.",
            "Project organization yang konsisten tanpa mengubah URL route secara tidak sengaja.",
          ],
          ignoreForNow: [
            "Parallel routes, intercepted routes, dan multiple root layout.",
          ],
        },
        {
          source: "React",
          title: "Sharing State Between Components",
          url: "https://react.dev/learn/sharing-state-between-components",
          focus: [
            "Owner state pada common parent ketika beberapa component perlu sinkron.",
            "Props sebagai contract antara component yang berkolaborasi.",
            "Membuat state owner jelas tanpa memindahkan seluruh state ke global layer.",
          ],
          ignoreForNow: [
            "State management library dan abstraction global sebelum feature memerlukannya.",
          ],
        },
        {
          source: "TypeScript",
          title: "Modules Introduction",
          url: "https://www.typescriptlang.org/docs/handbook/modules/introduction.html",
          focus: [
            "Module sebagai boundary export dan import yang eksplisit.",
            "Membaca dependency melalui import path yang jelas.",
            "Menjaga public export feature tetap kecil dan terarah.",
          ],
          ignoreForNow: [
            "Module resolution option mendalam, publishing package, dan interop toolchain kompleks.",
          ],
        },
      ],
      followUpAction:
        "Pilih satu feature React atau Next.js lokal. Catat file yang berubah bersama, pindahkan satu operation data ke service kecil, tempatkan satu type atau content dekat owner, dan hapus satu deep import lintas feature bila ada. Jalankan typecheck serta route yang terdampak, lalu tulis note singkat tentang boundary dan satu extraction yang sengaja belum dilakukan.",
    },
    {
      id: "feature-based-structure-assessment-summary",
      type: "summary",
      points: [
        "Feature boundary membuat area product yang berubah bersama lebih mudah ditemukan serta dirawat.",
        "Shared primitive memiliki contract generic yang nyata; component domain tetap dekat feature.",
        "Service layer menamai data operation dan memisahkan transport detail dari UI state.",
        "Type dan content dimulai dekat owner, lalu diekstrak ketika contract lintas feature benar-benar ada.",
        "Dependency lintas feature memakai public contract atau shared primitive, bukan deep import internal.",
        "Berikutnya, State and Data Strategy menentukan tempat state server, URL, local UI, persistence, dan error flow untuk feature yang sudah memiliki boundary lebih jelas.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "feature-based-structure-assessment-recap",
      "feature-based-structure-assessment-quiz",
      "feature-based-structure-assessment-coding-practice",
      "feature-based-structure-assessment-writing-practice",
      "feature-based-structure-assessment-documentation-bridge",
      "feature-based-structure-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const featureBasedStructureAssessmentQuiz: Quiz = {
  id: "feature-based-structure-assessment-quiz",
  lessonId: "feature-based-structure-assessment",
  title: "Uji Kompetensi Feature-Based Structure",
  passingScore: 70,
  questions: [
    {
      id: "feature-folder-purpose",
      type: "multiple-choice",
      question: "Tujuan utama feature folder adalah",
      options: [
        "Mengelompokkan code yang dimiliki satu area product dan sering berubah bersama.",
        "Memastikan setiap folder memiliki jumlah file yang sama.",
        "Memindahkan seluruh code dari app directory tanpa melihat route convention.",
        "Membuat project tampak lebih kompleks bagi reviewer.",
      ],
      correctAnswer:
        "Mengelompokkan code yang dimiliki satu area product dan sering berubah bersama.",
      explanation:
        "Feature folder membantu ownership serta navigasi perubahan. Ia bukan requirement untuk setiap component kecil atau semua project sejak awal.",
    },
    {
      id: "shared-component-decision",
      type: "multiple-choice",
      question:
        "Kapan CourseProgressCard sebaiknya dipindahkan dari features/courses ke shared UI?",
      options: [
        "Saat beberapa feature memiliki user goal, data shape, dan behavior yang sama sehingga API genericnya tetap sederhana.",
        "Saat ia pertama kali dirender di route courses.",
        "Saat namanya mengandung kata Card yang terlihat generic.",
        "Saat developer ingin mengurangi jumlah folder di features/courses.",
      ],
      correctAnswer:
        "Saat beberapa feature memiliki user goal, data shape, dan behavior yang sama sehingga API genericnya tetap sederhana.",
      explanation:
        "Visual mirip tidak cukup. Shared component perlu contract yang stabil dan tidak kehilangan vocabulary domain lewat props yang terlalu banyak.",
    },
    {
      id: "service-layer-purpose",
      type: "multiple-choice",
      question: "Apa peran getSavedCourses pada service layer?",
      options: [
        "Menjalankan operation data serta mengembalikan shape yang dapat dipakai caller UI.",
        "Merender JSX loading, empty, dan error state untuk seluruh page.",
        "Menyimpan semua modal state lintas feature.",
        "Mengatur warna component berdasarkan response API.",
      ],
      correctAnswer:
        "Menjalankan operation data serta mengembalikan shape yang dapat dipakai caller UI.",
      explanation:
        "Service memisahkan transport dan mapping dari component. Caller tetap memilih kapan memanggil service serta bagaimana state ditampilkan kepada user.",
    },
    {
      id: "type-owner",
      type: "multiple-choice",
      question:
        "Di mana type CourseFilter paling tepat dimulai bila hanya dipakai listing course?",
      options: [
        "Di feature courses sebagai owner terdekat, lalu diekstrak jika menjadi contract lintas feature.",
        "Di global types agar semua type berada dalam satu file.",
        "Di component Avatar karena component itu dipakai beberapa feature.",
        "Di package config karena filter berasal dari URL.",
      ],
      correctAnswer:
        "Di feature courses sebagai owner terdekat, lalu diekstrak jika menjadi contract lintas feature.",
      explanation:
        "Type sharing mengikuti ownership contract, bukan kategori file. Local type membuat scope perubahan lebih jelas pada awalnya.",
    },
    {
      id: "deep-import-risk",
      type: "multiple-choice",
      question:
        "Mengapa courses sebaiknya tidak mengimpor ProfileAvatar dari internal feature profile?",
      options: [
        "Courses akan bergantung pada detail profile yang dapat berubah tanpa contract lintas feature yang jelas.",
        "Import TypeScript selalu membuat bundle lebih besar secara otomatis.",
        "Avatar tidak boleh dipakai pada page courses.",
        "Semua component harus dibuat ulang untuk setiap feature.",
      ],
      correctAnswer:
        "Courses akan bergantung pada detail profile yang dapat berubah tanpa contract lintas feature yang jelas.",
      explanation:
        "Ekstrak primitive Avatar kecil bila benar-benar generic, lalu biarkan ProfileAvatar dan CourseInstructor tetap membawa composition domain masing-masing.",
    },
    {
      id: "avoid-overstructure",
      type: "multiple-choice",
      question:
        "Apa respons awal terbaik ketika feature baru hanya memiliki satu page dan satu component kecil?",
      options: [
        "Gunakan struktur sederhana yang ada, lalu ekstrak boundary saat perubahan bersama mulai nyata.",
        "Buat seluruh tree components, hooks, services, tests, types, constants, dan adapters kosong.",
        "Pindahkan semua file ke global folder sebelum feature memiliki owner.",
        "Buat repository generic untuk setiap request yang mungkin ada nanti.",
      ],
      correctAnswer:
        "Gunakan struktur sederhana yang ada, lalu ekstrak boundary saat perubahan bersama mulai nyata.",
      explanation:
        "Architecture harus membantu perubahan sekarang atau dekat di depan, bukan menambah indirection untuk kebutuhan yang belum ada.",
    },
    {
      id: "verification",
      type: "multiple-choice",
      question:
        "Setelah refactor feature courses, verification minimal yang paling masuk akal adalah",
      options: [
        "Jalankan typecheck dan test relevan, lalu buka route courses untuk memeriksa journey yang terdampak.",
        "Mengandalkan tree folder yang terlihat rapi di editor.",
        "Mengubah semua import menjadi relative path panjang tanpa menjalankan app.",
        "Menambah diagram arsitektur tanpa memeriksa runtime feature.",
      ],
      correctAnswer:
        "Jalankan typecheck dan test relevan, lalu buka route courses untuk memeriksa journey yang terdampak.",
      explanation:
        "Refactor structure tetap dapat mengubah export, import, data mapping, atau route composition. Verification perlu mengikuti behavioral surface yang mungkin terdampak.",
    },
  ],
};

export const organizeCourseFeatureFolderChallenge: CodingChallenge = {
  id: "organize-course-feature-folder",
  lessonId: "feature-folders",
  title: "Organize course feature folder",
  description:
    "Arahkan route courses ke public entry feature dan tempatkan component, service, type, serta content di boundary courses.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor CoursePage dari @/features/courses pada route.",
    "Impor CourseCard dari @/features/courses/components/CourseCard.",
    "Impor getCourses dari @/features/courses/services/get-courses.",
    "Impor CourseSummary dari @/features/courses/types dan courseEmptyCopy dari @/features/courses/content.",
    "Jangan mempertahankan import component, service, type, atau content courses dari folder global lama.",
    "Cek otomatis membaca structure import. Practice ini tidak membuat folder atau menjalankan route Next.js di preview.",
  ],
  starterCode: {
    ...architecturePracticeCode,
    tsx: `import { CoursePage } from "@/app/courses/CoursePage";
import { CourseCard } from "@/components/CourseCard";
import { getCourses } from "@/lib/get-courses";
import type { CourseSummary } from "@/types/course";
import { courseEmptyCopy } from "@/content/course-copy";

export function CoursesRoute() {
  return <CoursePage />;
}`,
  },
  solutionCode: {
    ...architecturePracticeCode,
    tsx: `import { CoursePage } from "@/features/courses";
import { CourseCard } from "@/features/courses/components/CourseCard";
import { getCourses } from "@/features/courses/services/get-courses";
import type { CourseSummary } from "@/features/courses/types";
import { courseEmptyCopy } from "@/features/courses/content";

export function CoursesRoute() {
  return <CoursePage />;
}`,
  },
  checklist: [
    "Route memakai public entry feature courses.",
    "CourseCard, getCourses, CourseSummary, dan courseEmptyCopy memiliki owner courses yang jelas.",
    "Import global lama untuk detail courses sudah dihapus.",
    "Feature public entry tidak harus mengekspor semua file internal.",
    "Folder nyata dan route behavior tetap diverifikasi pada local Next.js project.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "feature-entry", label: "Route mengimpor public entry courses.", type: "contains", valueIncludes: 'import { CoursePage } from "@/features/courses";' },
      { id: "feature-component", label: "CourseCard berada di feature courses.", type: "contains", valueIncludes: 'import { CourseCard } from "@/features/courses/components/CourseCard";' },
      { id: "feature-service", label: "getCourses berada di service courses.", type: "contains", valueIncludes: 'import { getCourses } from "@/features/courses/services/get-courses";' },
      { id: "feature-type", label: "CourseSummary berada di type courses.", type: "contains", valueIncludes: 'import type { CourseSummary } from "@/features/courses/types";' },
      { id: "feature-content", label: "Empty copy berada di content courses.", type: "contains", valueIncludes: 'import { courseEmptyCopy } from "@/features/courses/content";' },
      { id: "no-global-component", label: "Tidak memakai CourseCard global lama.", type: "doesNotContain", valueIncludes: 'from "@/components/CourseCard"' },
      { id: "no-global-service", label: "Tidak memakai getCourses global lama.", type: "doesNotContain", valueIncludes: 'from "@/lib/get-courses"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js structure",
    description:
      "Cek otomatis membaca ownership import. Preview tidak membuat folder atau menjalankan App Router; terapkan tree ini pada local project untuk memeriksa route dan public export feature yang sebenarnya.",
    lines: [
      "Route mengimpor entry public feature courses.",
      "Implementation courses berada bersama component, service, type, dan content miliknya.",
      "Folder global lama tidak lagi menjadi tempat detail courses tersebar.",
    ],
  },
  skillTags: ["Next.js", "Feature Folders", "Imports", "Frontend Architecture"],
};

export const placeSharedAndCourseComponentsChallenge: CodingChallenge = {
  id: "place-shared-and-course-components",
  lessonId: "shared-components",
  title: "Place shared and course components",
  description:
    "Pisahkan Button dan Avatar generic dari CourseProgressCard serta CourseFilter yang tetap membawa domain courses.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor Button dari @/components/ui/Button dan Avatar dari @/components/ui/Avatar.",
    "Impor CourseProgressCard serta CourseFilter dari @/features/courses/components.",
    "Jangan menaruh CourseProgressCard atau CourseFilter di components/ui hanya karena keduanya adalah UI.",
    "Jangan mengimpor Button atau Avatar dari internal feature courses.",
    "Cek otomatis membaca keputusan ownership component. Preview tidak menjalankan component React pada practice struktur ini.",
  ],
  starterCode: {
    ...architecturePracticeCode,
    tsx: `import { Button } from "@/features/courses/components/Button";
import { Avatar } from "@/features/courses/components/Avatar";
import { CourseProgressCard } from "@/components/ui/CourseProgressCard";
import { CourseFilter } from "@/components/ui/CourseFilter";

export function CourseDashboard() {
  return <CourseProgressCard />;
}`,
  },
  solutionCode: {
    ...architecturePracticeCode,
    tsx: `import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { CourseProgressCard } from "@/features/courses/components/CourseProgressCard";
import { CourseFilter } from "@/features/courses/components/CourseFilter";

export function CourseDashboard() {
  return <CourseProgressCard />;
}`,
  },
  checklist: [
    "Button dan Avatar memiliki contract generic yang dapat dipakai lintas feature.",
    "CourseProgressCard dan CourseFilter tetap dekat vocabulary serta data courses.",
    "Shared UI tidak dibuat sebagai tempat semua component visual tanpa mempertimbangkan owner.",
    "API component feature tetap dapat berubah bersama product course tanpa berdampak luas.",
    "Reuse nyata serta API yang stabil diperiksa sebelum memindahkan component domain ke shared UI.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "react",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "shared-button", label: "Button berasal dari shared UI.", type: "contains", valueIncludes: 'import { Button } from "@/components/ui/Button";' },
      { id: "shared-avatar", label: "Avatar berasal dari shared UI.", type: "contains", valueIncludes: 'import { Avatar } from "@/components/ui/Avatar";' },
      { id: "feature-progress", label: "CourseProgressCard tetap di feature courses.", type: "contains", valueIncludes: 'import { CourseProgressCard } from "@/features/courses/components/CourseProgressCard";' },
      { id: "feature-filter", label: "CourseFilter tetap di feature courses.", type: "contains", valueIncludes: 'import { CourseFilter } from "@/features/courses/components/CourseFilter";' },
      { id: "no-feature-button", label: "Tidak memakai Button internal courses.", type: "doesNotContain", valueIncludes: 'from "@/features/courses/components/Button"' },
      { id: "no-shared-progress", label: "Tidak memakai CourseProgressCard di shared UI.", type: "doesNotContain", valueIncludes: 'from "@/components/ui/CourseProgressCard"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target component ownership",
    description:
      "Cek otomatis membaca keputusan import shared versus feature-specific. Preview tidak menjalankan React runtime; gunakan local project untuk memeriksa consumer serta API component yang sebenarnya.",
    lines: [
      "Button dan Avatar berada pada shared UI dengan contract generic.",
      "CourseProgressCard dan CourseFilter mempertahankan context feature courses.",
      "Ownership ditentukan oleh behavior serta vocabulary, bukan bentuk visual saja.",
    ],
  },
  skillTags: ["React", "Shared Components", "Feature Ownership", "Architecture"],
};

export const extractCourseServiceFunctionChallenge: CodingChallenge = {
  id: "extract-course-service-function",
  lessonId: "service-layer",
  title: "Extract course service function",
  description:
    "Pindahkan request dan mapping saved courses ke service function yang mengembalikan shape UI sederhana.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type CourseSummary dengan id dan title.",
    "Buat export async function getSavedCourses(userId: string).",
    "Request memakai endpoint /api/users/ + userId + /saved-courses.",
    "Map response course.name menjadi title pada CourseSummary.",
    "Jangan merender JSX, loading skeleton, atau empty state di service function.",
    "Cek otomatis membaca structure TypeScript. Practice ini tidak mengirim request atau menjalankan test server di preview.",
  ],
  starterCode: {
    ...architecturePracticeCode,
    ts: `type CourseResponse = {
  id: string;
  name: string;
};

export async function CourseList({ userId }: { userId: string }) {
  const response = await fetch("/api/users/" + userId + "/saved-courses");
  const courses = (await response.json()) as CourseResponse[];

  return courses.map((course) => course.name);
}`,
  },
  solutionCode: {
    ...architecturePracticeCode,
    ts: `type CourseResponse = {
  id: string;
  name: string;
};

export type CourseSummary = {
  id: string;
  title: string;
};

export async function getSavedCourses(userId: string): Promise<CourseSummary[]> {
  const response = await fetch("/api/users/" + userId + "/saved-courses");
  const courses = (await response.json()) as CourseResponse[];

  return courses.map((course) => ({
    id: course.id,
    title: course.name,
  }));
}`,
  },
  checklist: [
    "Service memiliki nama operation product getSavedCourses.",
    "Service menerima input yang diperlukan untuk request, yaitu userId.",
    "Response mentah dipetakan menjadi CourseSummary yang dipahami UI.",
    "Service tidak merender JSX atau menentukan empty state.",
    "Caller perlu membedakan request failure dari data kosong saat menampilkan UI.",
  ],
  validation: {
    mode: "ts",
    checks: [
      { id: "course-summary", label: "Ada type CourseSummary.", type: "contains", valueIncludes: "export type CourseSummary = {" },
      { id: "summary-id", label: "CourseSummary memiliki id.", type: "contains", valueIncludes: "id: string;" },
      { id: "summary-title", label: "CourseSummary memiliki title.", type: "contains", valueIncludes: "title: string;" },
      { id: "service-function", label: "Ada service getSavedCourses.", type: "contains", valueIncludes: "export async function getSavedCourses(userId: string): Promise<CourseSummary[]>" },
      { id: "endpoint", label: "Service memakai endpoint saved courses user.", type: "contains", valueIncludes: 'fetch("/api/users/" + userId + "/saved-courses")' },
      { id: "response-map", label: "Response dimap ke id dan title.", type: "contains", valueIncludes: "title: course.name" },
      { id: "no-jsx", label: "Service tidak merender JSX CourseList lama.", type: "doesNotContain", valueIncludes: "function CourseList" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target service boundary",
    description:
      "Cek otomatis membaca service structure TypeScript. Preview tidak menjalankan fetch atau API; jalankan local test dengan response success, empty, dan failure untuk memeriksa contract data sebenarnya.",
    lines: [
      "getSavedCourses menamai operation data yang dipakai feature.",
      "Response API dipetakan menjadi CourseSummary untuk caller UI.",
      "Loading, empty, dan error presentation tetap dipilih oleh caller.",
    ],
  },
  skillTags: ["TypeScript", "Service Layer", "Data Mapping", "Frontend Architecture"],
};

export const placeCourseTypesAndContentChallenge: CodingChallenge = {
  id: "place-course-types-and-content",
  lessonId: "types-and-content-boundaries",
  title: "Place course types and content",
  description:
    "Pindahkan type filter dan empty-state copy ke feature courses agar owner serta import boundary lebih jelas.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor CourseFilter dari @/features/courses/types.",
    "Impor courseEmptyCopy dari @/features/courses/content.",
    "Gunakan CourseFilter sebagai type props filter pada CourseEmptyState.",
    "Render courseEmptyCopy.title dan courseEmptyCopy.description.",
    "Jangan mengimpor CourseFilter dari @/types/global atau copy dari @/content/shared-course-copy.",
    "Cek otomatis membaca ownership import. Preview tidak menjalankan React component untuk practice struktur ini.",
  ],
  starterCode: {
    ...architecturePracticeCode,
    tsx: `import type { CourseFilter } from "@/types/global";
import { courseEmptyCopy } from "@/content/shared-course-copy";

type CourseEmptyStateProps = {
  filter: CourseFilter;
};

export function CourseEmptyState({ filter }: CourseEmptyStateProps) {
  return <p>{filter.query}</p>;
}`,
  },
  solutionCode: {
    ...architecturePracticeCode,
    tsx: `import type { CourseFilter } from "@/features/courses/types";
import { courseEmptyCopy } from "@/features/courses/content";

type CourseEmptyStateProps = {
  filter: CourseFilter;
};

export function CourseEmptyState({ filter }: CourseEmptyStateProps) {
  return (
    <section>
      <h2>{courseEmptyCopy.title}</h2>
      <p>{courseEmptyCopy.description}</p>
      <p>Filter aktif: {filter.query}</p>
    </section>
  );
}`,
  },
  checklist: [
    "CourseFilter dimiliki feature courses sampai ada shared contract nyata.",
    "Empty copy berada bersama product vocabulary courses.",
    "Component mengimpor type dan content dari owner yang mudah ditemukan.",
    "Global folder tidak menjadi default untuk semua type dan constants.",
    "Type atau content yang benar-benar dipakai lintas feature dapat diekstrak dengan owner serta public contract yang jelas.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "react",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "feature-type", label: "CourseFilter diimpor dari courses types.", type: "contains", valueIncludes: 'import type { CourseFilter } from "@/features/courses/types";' },
      { id: "feature-content", label: "Empty copy diimpor dari courses content.", type: "contains", valueIncludes: 'import { courseEmptyCopy } from "@/features/courses/content";' },
      { id: "filter-props", label: "CourseFilter dipakai pada props component.", type: "contains", valueIncludes: "filter: CourseFilter;" },
      { id: "copy-title", label: "Component merender title empty copy.", type: "contains", valueIncludes: "{courseEmptyCopy.title}" },
      { id: "copy-description", label: "Component merender description empty copy.", type: "contains", valueIncludes: "{courseEmptyCopy.description}" },
      { id: "no-global-type", label: "Tidak memakai type global lama.", type: "doesNotContain", valueIncludes: 'from "@/types/global"' },
      { id: "no-global-content", label: "Tidak memakai content global lama.", type: "doesNotContain", valueIncludes: 'from "@/content/shared-course-copy"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target type and content ownership",
    description:
      "Cek otomatis membaca import dan penggunaan type/content. Preview tidak menjalankan React runtime; terapkan pada local feature untuk menilai apakah owner yang dipilih tetap mudah dipahami saat requirement berubah.",
    lines: [
      "CourseFilter dan empty copy dimulai di feature courses.",
      "Component membaca contract dari owner yang menjelaskan product context-nya.",
      "Global folder tidak menjadi tempat default untuk detail feature.",
    ],
  },
  skillTags: ["TypeScript", "Static Content", "Feature Boundaries", "React"],
};

export const fixCourseFeatureDependencyChallenge: CodingChallenge = {
  id: "fix-course-feature-dependency",
  lessonId: "dependency-boundaries",
  title: "Fix course feature dependency",
  description:
    "Ganti deep import ProfileAvatar internal dengan Avatar shared agar courses tidak bergantung pada implementation detail profile.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor Avatar dari @/components/ui/Avatar.",
    "Pertahankan CourseInstructor sebagai component domain di feature courses.",
    "Render Avatar dengan src imageUrl dan alt name.",
    "Jangan mengimpor dari @/features/profile/components/ProfileAvatar.",
    "Jangan memindahkan CourseInstructor ke profile atau shared UI; hanya primitive Avatar yang generic.",
    "Cek otomatis membaca arah dependency. Preview tidak menjalankan component React pada practice struktur ini.",
  ],
  starterCode: {
    ...architecturePracticeCode,
    tsx: `import { ProfileAvatar } from "@/features/profile/components/ProfileAvatar";

type CourseInstructorProps = {
  name: string;
  imageUrl: string;
};

export function CourseInstructor({ name, imageUrl }: CourseInstructorProps) {
  return (
    <section>
      <ProfileAvatar user={{ name, imageUrl }} />
      <p>Instruktur: {name}</p>
    </section>
  );
}`,
  },
  solutionCode: {
    ...architecturePracticeCode,
    tsx: `import { Avatar } from "@/components/ui/Avatar";

type CourseInstructorProps = {
  name: string;
  imageUrl: string;
};

export function CourseInstructor({ name, imageUrl }: CourseInstructorProps) {
  return (
    <section>
      <Avatar src={imageUrl} alt={name} />
      <p>Instruktur: {name}</p>
    </section>
  );
}`,
  },
  checklist: [
    "Courses memakai Avatar shared dengan contract source dan alt yang kecil.",
    "Courses tidak lagi mengambil ProfileAvatar internal dengan menu atau fallback profile-specific.",
    "CourseInstructor tetap dimiliki courses karena membawa vocabulary instructor course.",
    "Shared UI tidak boleh mengimpor balik detail profile atau courses.",
    "Refactor nyata memeriksa semua consumer ProfileAvatar sebelum mengubah atau menghapusnya.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "react",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "shared-avatar", label: "Avatar diimpor dari shared UI.", type: "contains", valueIncludes: 'import { Avatar } from "@/components/ui/Avatar";' },
      { id: "avatar-source", label: "Avatar memakai imageUrl sebagai source.", type: "contains", valueIncludes: "<Avatar src={imageUrl} alt={name} />" },
      { id: "course-instructor", label: "CourseInstructor tetap ada sebagai component course.", type: "contains", valueIncludes: "export function CourseInstructor" },
      { id: "course-copy", label: "Copy Instruktur tetap berada di course component.", type: "contains", valueIncludes: "Instruktur: {name}" },
      { id: "no-profile-deep-import", label: "Tidak memakai ProfileAvatar internal.", type: "doesNotContain", valueIncludes: 'from "@/features/profile/components/ProfileAvatar"' },
      { id: "no-profile-avatar", label: "Tidak memakai component ProfileAvatar.", type: "doesNotContain", valueIncludes: "<ProfileAvatar" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target dependency boundary",
    description:
      "Cek otomatis membaca import boundary. Preview tidak menjalankan React runtime; periksa local project untuk memastikan Avatar shared memiliki consumer dan API yang benar-benar generic.",
    lines: [
      "Courses memakai Avatar shared, bukan implementation detail profile.",
      "CourseInstructor mempertahankan composition serta copy domain courses.",
      "Dependency lintas feature diganti oleh primitive dengan owner shared.",
    ],
  },
  skillTags: ["React", "Dependency Boundaries", "Shared UI", "Refactoring"],
};

export const refactorCourseFeatureBoundariesCheckpointChallenge: CodingChallenge = {
  id: "refactor-course-feature-boundaries-checkpoint",
  lessonId: "feature-based-structure-assessment",
  title: "Refactor course feature boundaries checkpoint",
  description:
    "Susun import route courses agar memakai feature entry, service, type/content owner, dan Avatar shared tanpa deep import profile.",
  instructions: [
    "Fokus di tab TSX.",
    "Impor CoursePage dari @/features/courses sebagai public entry route.",
    "Impor getSavedCourses dari @/features/courses/services/get-saved-courses.",
    "Impor CourseFilter serta courseEmptyCopy dari feature courses.",
    "Impor Avatar dari @/components/ui/Avatar.",
    "Jangan memakai import CourseCard global lama atau ProfileAvatar internal profile.",
    "Buat loadCourses yang memanggil getSavedCourses(userId) dan mengembalikan hasilnya.",
    "Cek otomatis membaca checkpoint structure. Preview tidak membuat folder, memanggil API, atau merender route Next.js nyata.",
  ],
  starterCode: {
    ...architecturePracticeCode,
    tsx: `import { CoursePage } from "@/app/courses/CoursePage";
import { getSavedCourses } from "@/lib/get-saved-courses";
import type { CourseFilter } from "@/types/global";
import { courseEmptyCopy } from "@/content/shared-course-copy";
import { ProfileAvatar } from "@/features/profile/components/ProfileAvatar";
import { CourseCard } from "@/components/CourseCard";

export async function loadCourses(userId: string) {
  return fetch("/api/users/" + userId + "/saved-courses");
}

export function CoursesRoute() {
  return <CoursePage />;
}`,
  },
  solutionCode: {
    ...architecturePracticeCode,
    tsx: `import { CoursePage } from "@/features/courses";
import { getSavedCourses } from "@/features/courses/services/get-saved-courses";
import type { CourseFilter } from "@/features/courses/types";
import { courseEmptyCopy } from "@/features/courses/content";
import { Avatar } from "@/components/ui/Avatar";

export async function loadCourses(userId: string) {
  return getSavedCourses(userId);
}

export function CoursesRoute() {
  const initialFilter: CourseFilter = {
    level: "beginner",
    query: courseEmptyCopy.title,
  };

  return (
    <section>
      <Avatar src="/course-instructor.png" alt="Instruktur course" />
      <p>{initialFilter.query}</p>
      <CoursePage />
    </section>
  );
}`,
  },
  checklist: [
    "Route memakai public entry feature, bukan implementation route lama.",
    "Operation data dipanggil lewat getSavedCourses service.",
    "CourseFilter dan courseEmptyCopy diimpor dari owner courses.",
    "Avatar berasal dari shared UI, bukan profile internal.",
    "Import CourseCard global lama dan ProfileAvatar deep import sudah dihapus.",
    "Refactor local dilanjutkan dengan typecheck, test relevant, serta route smoke test sebelum dianggap selesai.",
  ],
  reactPractice: {
    mode: "structure",
    framework: "next",
  },
  validation: {
    mode: "tsx",
    checks: [
      { id: "feature-entry", label: "Route memakai public entry courses.", type: "contains", valueIncludes: 'import { CoursePage } from "@/features/courses";' },
      { id: "feature-service", label: "Service courses diimpor dari boundary yang benar.", type: "contains", valueIncludes: 'import { getSavedCourses } from "@/features/courses/services/get-saved-courses";' },
      { id: "feature-type", label: "CourseFilter diimpor dari courses types.", type: "contains", valueIncludes: 'import type { CourseFilter } from "@/features/courses/types";' },
      { id: "feature-content", label: "Empty copy diimpor dari courses content.", type: "contains", valueIncludes: 'import { courseEmptyCopy } from "@/features/courses/content";' },
      { id: "shared-avatar", label: "Avatar diimpor dari shared UI.", type: "contains", valueIncludes: 'import { Avatar } from "@/components/ui/Avatar";' },
      { id: "service-call", label: "loadCourses memanggil getSavedCourses.", type: "contains", valueIncludes: "return getSavedCourses(userId);" },
      { id: "no-old-card", label: "Tidak memakai CourseCard global lama.", type: "doesNotContain", valueIncludes: 'from "@/components/CourseCard"' },
      { id: "no-profile-deep-import", label: "Tidak memakai ProfileAvatar internal.", type: "doesNotContain", valueIncludes: 'from "@/features/profile/components/ProfileAvatar"' },
      { id: "no-direct-fetch", label: "Route tidak lagi menjalankan fetch detail saved courses.", type: "doesNotContain", valueIncludes: 'fetch("/api/users/" + userId + "/saved-courses")' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target feature boundary checkpoint",
    description:
      "Cek otomatis membaca import serta service boundary. Preview tidak menjalankan App Router, API, atau folder refactor; gunakan local project untuk memeriksa contract export, data state, dan route behavior sebenarnya.",
    lines: [
      "Route memakai public entry dan detail courses berada pada owner feature.",
      "Data operation berjalan melalui service function yang bernama jelas.",
      "Shared Avatar menggantikan deep import profile tanpa memindahkan course domain component.",
    ],
  },
  skillTags: ["Next.js", "Feature Boundaries", "Service Layer", "Dependency Boundaries", "Assessment"],
};
