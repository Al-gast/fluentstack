import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const serverStatePracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const serverStateThinkingModule: Module = {
  id: "server-state-thinking",
  trackId: "frontend-engineering",
  title: "Server-State Thinking",
  slug: "server-state-thinking",
  description:
    "Memisahkan data milik server dari state UI lokal, menampilkan data-fetching state yang jujur, memetakan response API, dan memakai optimistic update secara hati-hati.",
  order: 40,
  lessonIds: [
    "server-state-vs-client-state",
    "server-state-loading-error-empty",
    "server-state-mapping-api-responses",
    "server-state-optimistic-ui-basics",
    "server-state-thinking-assessment",
  ],
  estimatedHours: 6,
  skillTags: [
    "Server State",
    "React",
    "Next.js",
    "Data Fetching",
    "TypeScript",
    "Optimistic UI",
  ],
};

export const serverStateVsClientStateLesson: Lesson = {
  id: "server-state-vs-client-state",
  trackId: "frontend-engineering",
  moduleId: "server-state-thinking",
  title: "Server State vs Client State",
  slug: "server-state-vs-client-state",
  description:
    "Membedakan data yang sumber kebenarannya berada di server dari state UI sementara yang hanya hidup di browser.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan perbedaan server state dan client state",
    "Mengidentifikasi sumber kebenaran untuk data produk yang umum",
    "Memisahkan data hasil request dari pilihan UI sementara",
    "Memilih solusi sederhana sebelum memakai query library",
  ],
  skillTags: ["Server State", "Client State", "React", "Product UI"],
  blocks: [
    {
      id: "server-state-vs-client-state-intro",
      type: "text",
      title: "Tanyakan siapa yang memiliki sumber kebenaran",
      content:
        "Server state adalah data yang datang dari luar UI dan sumber kebenarannya bukan component saat ini: daftar lesson dari API, profile tersimpan, status bookmark, atau hasil pencarian dari server. Data ini dapat berubah karena user lain, request lain, atau aturan server. Client state adalah state yang hanya mengatur pengalaman UI saat ini, misalnya modal terbuka, tab aktif, nilai filter sementara, atau field yang sedang difokuskan.\n\nKeduanya dapat muncul dalam satu feature. Halaman catalog course dapat menerima daftar course dari server, sementara input pencarian dan dialog detail hidup sebagai client state. Jangan memaksa semua state masuk ke satu useState hanya karena tampil bersama. Pisahkan berdasarkan kepemilikan dan lifecycle agar saat request, refresh, atau mutation terjadi, kamu tahu data mana yang harus dipercaya.",
    },
    {
      id: "server-state-vs-client-state-example",
      type: "code-example",
      title: "Catalog course memiliki dua jenis state",
      language: "tsx",
      code: `import { useState } from "react";

type Course = {
  id: string;
  title: string;
  isBookmarked: boolean;
};

type CatalogProps = {
  courses: Course[];
};

export function CourseCatalog({ courses }: CatalogProps) {
  const [query, setQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const visibleCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <button type="button" onClick={() => setIsFilterOpen(true)}>
        Buka filter
      </button>
      <input
        aria-label="Cari course"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {isFilterOpen ? <p>Filter sedang dibuka.</p> : null}
      <p>{visibleCourses.length} course terlihat.</p>
    </section>
  );
}`,
      explanation:
        "courses dan isBookmarked berasal dari data yang pada akhirnya harus dikonfirmasi server. query serta isFilterOpen hanya mengatur tampilan catalog saat ini. Filter boleh menghitung visibleCourses di client, tetapi jangan menganggap hasil filter sebagai data server baru. Saat API berubah atau data di-refresh, source courses dapat diganti tanpa perlu mereset modal atau input secara sembarangan.",
    },
    {
      id: "server-state-vs-client-state-coding-practice",
      type: "coding-practice",
      challengeId: "classify-course-server-and-client-state",
    },
    {
      id: "server-state-vs-client-state-quick-check",
      type: "quick-check",
      question:
        "Manakah contoh yang paling tepat disebut client state pada halaman daftar course?",
      options: [
        "Tab filter yang sedang aktif di browser user",
        "Judul course yang tersimpan di database",
        "Status completion course yang dikirim API",
        "Daftar course yang berubah setelah admin mengedit catalog",
      ],
      correctAnswer: "Tab filter yang sedang aktif di browser user",
      explanation:
        "Tab aktif hanya mengatur UI sesi saat ini. Judul, completion, dan catalog memiliki sumber kebenaran di server atau sumber data eksternal.",
    },
    {
      id: "server-state-vs-client-state-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menyebut semua data API sebagai state lokal",
      content:
        "Menyalin response API ke useState kadang diperlukan untuk interaksi sementara, tetapi itu tidak memindahkan sumber kebenaran ke browser. Tetapkan kapan data harus di-fetch ulang atau dikonfirmasi setelah mutation. Untuk feature kecil, fetch sederhana dan state yang eksplisit sering cukup. Query library membantu ketika kebutuhan cache, deduplication, mutation, atau refresh sudah benar-benar berulang.",
    },
    {
      id: "server-state-vs-client-state-summary",
      type: "summary",
      points: [
        "Server state berasal dari sumber eksternal dan dapat berubah di luar component saat ini.",
        "Client state mengatur interaksi serta tampilan sementara di browser user.",
        "Satu feature dapat memiliki keduanya tanpa perlu mencampur tanggung jawabnya.",
        "Pilih state dan tooling berdasarkan kepemilikan data, bukan hanya lokasi render-nya.",
        "Berikutnya, data server membutuhkan loading, error, empty, dan success state yang jujur.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "server-state-vs-client-state-intro",
      "server-state-vs-client-state-example",
      "server-state-vs-client-state-coding-practice",
      "server-state-vs-client-state-quick-check",
      "server-state-vs-client-state-callout",
      "server-state-vs-client-state-summary",
    ],
  },
};

export const serverStateLoadingErrorEmptyLesson: Lesson = {
  id: "server-state-loading-error-empty",
  trackId: "frontend-engineering",
  moduleId: "server-state-thinking",
  title: "Loading, Error, and Empty States",
  slug: "server-state-loading-error-empty",
  description:
    "Menyusun UI data-fetching yang jujur saat data masih dimuat, gagal didapat, kosong, atau siap ditampilkan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan loading, error, empty, dan ready state",
    "Menulis copy yang sesuai dengan kondisi data sebenarnya",
    "Menawarkan recovery action ketika request gagal",
    "Menghindari UI kosong yang menyembunyikan kondisi request",
  ],
  skillTags: ["Server State", "Loading State", "Error State", "Empty State"],
  blocks: [
    {
      id: "server-state-loading-error-empty-intro",
      type: "text",
      title: "Tidak ada data bukan selalu berarti data kosong",
      content:
        "Sebelum request selesai, UI belum tahu apakah daftar benar-benar kosong. Jika request gagal, UI tidak boleh berpura-pura bahwa belum ada item. Karena itu, server state perlu state yang eksplisit: loading ketika data belum tersedia, error ketika request tidak berhasil, empty ketika request berhasil tetapi hasilnya kosong, dan ready ketika data dapat ditampilkan.\n\nSetiap state perlu memberi konteks serta tindakan yang sesuai. Loading dapat menjelaskan apa yang sedang dimuat. Error perlu menyebut dampak dan menawarkan retry jika aman. Empty state perlu menjelaskan bahwa hasilnya memang belum ada, lalu memberi next action seperti mengubah filter atau membuat item pertama. Ready state menampilkan data tanpa menyembunyikan informasi penting seperti status refresh.",
    },
    {
      id: "server-state-loading-error-empty-example",
      type: "code-example",
      title: "Satu union untuk empat keadaan daftar course",
      language: "tsx",
      code: `type Course = {
  id: string;
  title: string;
};

type CourseListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; courses: Course[] };

export function CourseList({ state }: { state: CourseListState }) {
  if (state.status === "loading") {
    return <p aria-busy="true">Memuat course...</p>;
  }

  if (state.status === "error") {
    return (
      <section role="alert">
        <p>{state.message}</p>
        <button type="button">Coba lagi</button>
      </section>
    );
  }

  if (state.status === "empty") {
    return <p>Belum ada course yang cocok. Coba ubah filter.</p>;
  }

  return (
    <ul>
      {state.courses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
}`,
      explanation:
        "Discriminated union membuat setiap branch membawa data yang sesuai. Branch ready baru boleh membaca courses. Error memiliki copy dan action recovery; empty memberi next action yang berbeda. Button Coba lagi baru perlu dihubungkan ke request yang nyata pada local app, bukan sekadar menambahkan labelnya.",
    },
    {
      id: "server-state-loading-error-empty-coding-practice",
      type: "coding-practice",
      challengeId: "render-course-server-state-flow",
    },
    {
      id: "server-state-loading-error-empty-quick-check",
      type: "quick-check",
      question:
        "Kapan empty state tepat ditampilkan untuk daftar hasil pencarian?",
      options: [
        "Setelah request berhasil dan hasilnya memang tidak memiliki item",
        "Saat request baru dimulai",
        "Saat request gagal karena jaringan",
        "Sebelum user memasukkan query apa pun",
      ],
      correctAnswer:
        "Setelah request berhasil dan hasilnya memang tidak memiliki item",
      explanation:
        "Loading dan error perlu feedback sendiri. Empty berarti aplikasi sudah mengetahui bahwa hasil request berhasil tetapi tidak menemukan data untuk ditampilkan.",
    },
    {
      id: "server-state-loading-error-empty-callout",
      type: "callout",
      variant: "important",
      title: "Jangan menyembunyikan error sebagai layar kosong",
      content:
        "Layar tanpa isi membuat user tidak tahu apakah filter terlalu sempit, data belum tersedia, atau request gagal. Berikan teks yang dapat dipahami, pertahankan filter atau input yang relevan bila aman, dan sediakan retry hanya untuk action yang benar-benar dapat dijalankan. Jangan menampilkan raw stack trace atau response internal server ke user.",
    },
    {
      id: "server-state-loading-error-empty-summary",
      type: "summary",
      points: [
        "Loading, error, empty, dan ready adalah kondisi data yang berbeda.",
        "Empty hanya muncul setelah request berhasil tetapi hasil memang tidak ada.",
        "Error perlu context serta recovery action yang sesuai.",
        "Discriminated union membantu UI tidak membaca data pada state yang salah.",
        "Berikutnya, response API dipetakan terlebih dahulu agar component tidak bergantung pada bentuk data eksternal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "server-state-loading-error-empty-intro",
      "server-state-loading-error-empty-example",
      "server-state-loading-error-empty-coding-practice",
      "server-state-loading-error-empty-quick-check",
      "server-state-loading-error-empty-callout",
      "server-state-loading-error-empty-summary",
    ],
  },
};

export const serverStateMappingApiResponsesLesson: Lesson = {
  id: "server-state-mapping-api-responses",
  trackId: "frontend-engineering",
  moduleId: "server-state-thinking",
  title: "Mapping API Responses",
  slug: "server-state-mapping-api-responses",
  description:
    "Mengubah response API menjadi model UI yang kecil, typed, dan tidak membuat component bergantung pada detail transport data.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membedakan API response dan model yang dibutuhkan component",
    "Menulis mapper kecil di data boundary",
    "Menormalisasi nama field serta format display sebelum render",
    "Menghindari asumsi response API valid hanya karena TypeScript memberi type",
  ],
  skillTags: ["TypeScript", "API Boundary", "Data Mapping", "Server State"],
  blocks: [
    {
      id: "server-state-mapping-api-responses-intro",
      type: "text",
      title: "Component tidak perlu mengenal semua detail response API",
      content:
        "API sering menggunakan nama field, nesting, tanggal, atau nullable value yang tidak nyaman untuk UI. Bila detail itu disebarkan langsung ke banyak component, perubahan endpoint akan memaksa banyak render layer ikut berubah. Letakkan transformasi di boundary: response mentah masuk, model UI yang jelas keluar.\n\nMapper bukan tempat untuk menyembunyikan data yang rusak. Ia menyatakan keputusan UI, misalnya lesson_count menjadi lessonLabel atau updated_at menjadi updatedLabel. Validasi runtime tetap perlu saat data datang dari sumber yang tidak dapat dipercaya. TypeScript membantu menjelaskan shape yang diharapkan, tetapi tidak memeriksa payload production dengan sendirinya.",
    },
    {
      id: "server-state-mapping-api-responses-example",
      type: "code-example",
      title: "Ubah response course menjadi card model",
      language: "ts",
      code: `type CourseApiResponse = {
  id: string;
  title: string;
  lesson_count: number;
  updated_at: string;
};

type CourseCardModel = {
  id: string;
  title: string;
  lessonLabel: string;
  updatedLabel: string;
};

export function toCourseCard(
  response: CourseApiResponse,
): CourseCardModel {
  return {
    id: response.id,
    title: response.title.trim(),
    lessonLabel: \`\${response.lesson_count} lesson\`,
    updatedLabel: new Date(response.updated_at).toLocaleDateString("id-ID"),
  };
}`,
      explanation:
        "CourseCard hanya perlu id, title, dan dua label siap tampil. Ia tidak perlu mengetahui snake_case API atau format tanggal sumber. Jika tanggal invalid atau field dapat null, model response serta validation boundary harus menyatakannya secara eksplisit sebelum mapper membuat keputusan display.",
    },
    {
      id: "server-state-mapping-api-responses-coding-practice",
      type: "coding-practice",
      challengeId: "map-course-api-response-to-card-model",
    },
    {
      id: "server-state-mapping-api-responses-quick-check",
      type: "quick-check",
      question:
        "Apa alasan utama memakai mapper sebelum data API dirender oleh component card?",
      options: [
        "Agar component memakai model UI yang stabil dan tidak bergantung pada detail response",
        "Agar server tidak perlu menentukan response API",
        "Agar semua field API dapat ditampilkan tanpa keputusan UX",
        "Agar TypeScript otomatis memvalidasi payload runtime",
      ],
      correctAnswer:
        "Agar component memakai model UI yang stabil dan tidak bergantung pada detail response",
      explanation:
        "Mapper membatasi detail transport pada boundary dan menyiapkan data sesuai kebutuhan UI. Validation runtime merupakan tanggung jawab tambahan bila sumber data tidak tepercaya.",
    },
    {
      id: "server-state-mapping-api-responses-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan memakai as sebagai jalan pintas untuk response yang tidak diketahui",
      content:
        "Menulis `response as CourseApiResponse` tidak memeriksa payload pada runtime. Jika endpoint belum terpercaya, gunakan validation di boundary, misalnya schema yang sesuai, lalu map hasil yang valid. Hindari membuat mapper raksasa yang sekaligus fetch, validate, format, menyimpan state, dan merender JSX. Pecah tanggung jawabnya saat complexity benar-benar muncul.",
    },
    {
      id: "server-state-mapping-api-responses-summary",
      type: "summary",
      points: [
        "API response adalah bentuk transport; component membutuhkan model UI yang jelas.",
        "Mapper menjaga detail endpoint tidak menyebar ke banyak component.",
        "Format display dan label dapat ditentukan sekali di data boundary.",
        "TypeScript tidak menggantikan validation runtime untuk payload yang tidak tepercaya.",
        "Berikutnya, optimistic UI mengubah tampilan sebelum server mengonfirmasi sehingga recovery harus dirancang lebih dahulu.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "server-state-mapping-api-responses-intro",
      "server-state-mapping-api-responses-example",
      "server-state-mapping-api-responses-coding-practice",
      "server-state-mapping-api-responses-quick-check",
      "server-state-mapping-api-responses-callout",
      "server-state-mapping-api-responses-summary",
    ],
  },
};

export const serverStateOptimisticUiBasicsLesson: Lesson = {
  id: "server-state-optimistic-ui-basics",
  trackId: "frontend-engineering",
  moduleId: "server-state-thinking",
  title: "Optimistic UI Basics",
  slug: "server-state-optimistic-ui-basics",
  description:
    "Memilih optimistic update yang aman dan memulihkan UI ketika server menolak perubahan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan optimistic UI sebagai perubahan sebelum konfirmasi server",
    "Memilih interaction kecil yang memiliki recovery path jelas",
    "Menyimpan nilai sebelumnya untuk rollback saat request gagal",
    "Membedakan optimistic update dari operasi yang perlu konfirmasi server dulu",
  ],
  skillTags: ["Optimistic UI", "Server State", "Error Recovery", "React"],
  blocks: [
    {
      id: "server-state-optimistic-ui-basics-intro",
      type: "text",
      title: "Optimistic berarti UI bergerak sebelum jawaban server datang",
      content:
        "Pada optimistic update, UI segera menampilkan hasil yang diharapkan lalu mengirim mutation ke server. Pattern ini cocok untuk action kecil, cepat, dan mudah dibalik, misalnya bookmark course atau menandai notifikasi sudah dibaca. Karena server tetap sumber kebenaran, setiap optimistic update harus punya rencana ketika request gagal: kembalikan nilai sebelumnya, jelaskan apa yang terjadi, dan beri action recovery bila diperlukan.\n\nJangan memakai optimism hanya agar UI tampak cepat. Pembayaran, perubahan permission, penghapusan penting, atau mutation dengan banyak efek server dapat lebih aman menunggu konfirmasi. Sebelum menulis setState, jawab tiga pertanyaan: apa nilai sebelumnya, bagaimana rollback dilakukan, dan bagaimana UI kembali sinkron jika server memberi hasil berbeda.",
    },
    {
      id: "server-state-optimistic-ui-basics-example",
      type: "code-example",
      title: "Bookmark course dengan rollback sederhana",
      language: "tsx",
      code: `import { useState } from "react";

type Course = {
  id: string;
  title: string;
  isBookmarked: boolean;
};

async function updateBookmark(id: string, isBookmarked: boolean) {
  return { id, isBookmarked };
}

export function CourseBookmark({ initialCourse }: { initialCourse: Course }) {
  const [course, setCourse] = useState(initialCourse);
  const [message, setMessage] = useState<string | undefined>(undefined);

  async function toggleBookmark() {
    const previousCourse = course;
    const nextCourse = {
      ...course,
      isBookmarked: !course.isBookmarked,
    };

    setCourse(nextCourse);
    setMessage(undefined);

    try {
      await updateBookmark(nextCourse.id, nextCourse.isBookmarked);
    } catch {
      setCourse(previousCourse);
      setMessage("Bookmark belum diperbarui. Coba lagi.");
    }
  }

  return (
    <div>
      <button type="button" onClick={toggleBookmark}>
        {course.isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
      </button>
      {message ? <p role="alert">{message}</p> : null}
    </div>
  );
}`,
      explanation:
        "previousCourse disimpan sebelum UI berubah. Jika updateBookmark gagal, rollback memulihkan nilai awal dan message menjelaskan recovery. Contoh ini belum menangani klik cepat, request yang selesai tidak berurutan, refresh, atau conflict dari server. Jangan memperluas pattern ini sebelum flow kecilnya diuji pada endpoint nyata.",
    },
    {
      id: "server-state-optimistic-ui-basics-coding-practice",
      type: "coding-practice",
      challengeId: "add-optimistic-course-bookmark-rollback",
    },
    {
      id: "server-state-optimistic-ui-basics-quick-check",
      type: "quick-check",
      question:
        "Manakah use case yang paling aman untuk optimistic UI dasar?",
      options: [
        "Toggle bookmark course yang mudah dibalik dan punya rollback",
        "Mengubah role admin user lain",
        "Mengonfirmasi pembayaran subscription",
        "Menghapus seluruh workspace tanpa konfirmasi",
      ],
      correctAnswer:
        "Toggle bookmark course yang mudah dibalik dan punya rollback",
      explanation:
        "Optimistic update paling mudah dimulai dari action kecil yang reversible. Perubahan berisiko tinggi atau bergantung pada banyak proses server sebaiknya menunggu konfirmasi yang jelas.",
    },
    {
      id: "server-state-optimistic-ui-basics-callout",
      type: "callout",
      variant: "warning",
      title: "Rollback bukan detail opsional",
      content:
        "Jika kamu tidak dapat menjelaskan nilai mana yang dipulihkan ketika mutation gagal, interaction itu belum siap dibuat optimistic. Untuk daftar data yang dapat berubah cepat, pertimbangkan request yang tumpang tindih, response terlambat, dan re-fetch setelah mutation. Query library dapat membantu mengelola kasus berulang, tetapi tidak menggantikan keputusan produk tentang kapan optimism aman.",
    },
    {
      id: "server-state-optimistic-ui-basics-summary",
      type: "summary",
      points: [
        "Optimistic UI memperbarui tampilan sebelum server mengonfirmasi mutation.",
        "Pilih action kecil, predictable, dan mudah dibalik untuk pattern awal.",
        "Simpan nilai sebelumnya, rollback saat gagal, dan beri recovery copy yang jelas.",
        "Operasi berisiko atau kompleks sering lebih aman menunggu konfirmasi server.",
        "Berikutnya, Uji Kompetensi menyatukan klasifikasi state, UI state, mapping, serta recovery optimistic update.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "server-state-optimistic-ui-basics-intro",
      "server-state-optimistic-ui-basics-example",
      "server-state-optimistic-ui-basics-coding-practice",
      "server-state-optimistic-ui-basics-quick-check",
      "server-state-optimistic-ui-basics-callout",
      "server-state-optimistic-ui-basics-summary",
    ],
  },
};

export const serverStateThinkingAssessmentLesson: Lesson = {
  id: "server-state-thinking-assessment",
  trackId: "frontend-engineering",
  moduleId: "server-state-thinking",
  title: "Uji Kompetensi Server-State Thinking",
  slug: "server-state-thinking-assessment",
  description:
    "Checkpoint untuk menilai kesiapan memisahkan data server, menampilkan state yang jujur, dan memulihkan mutation secara aman.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 80,
  objectives: [
    "Menggabungkan server-state flow dalam feature daftar course kecil",
    "Memilih model UI dari response API mentah",
    "Membedakan empty result dari request failure",
    "Menjelaskan optimistic update serta rollback yang aman",
  ],
  skillTags: ["Server State", "Data Fetching", "TypeScript", "Optimistic UI", "Readiness Checkpoint"],
  blocks: [
    {
      id: "server-state-thinking-assessment-recap",
      type: "text",
      title: "Checkpoint: UI perlu jujur tentang sumber dan keadaan data",
      content:
        "Data dari server bukan sekadar array yang ditaruh ke component. Ada waktu ketika data belum tersedia, gagal dimuat, kosong setelah request berhasil, atau perlu dipetakan sebelum siap dirender. Ada juga state UI lokal seperti filter dan dialog yang tidak perlu di-fetch ulang. Menempatkan keduanya pada tanggung jawab yang tepat membuat feature lebih mudah di-debug dan dipulihkan.\n\nPada checkpoint ini, periksa apakah feature dapat menjawab pertanyaan praktis: dari mana data berasal, apa yang user lihat saat belum ada hasil, apakah component menerima model UI yang jelas, dan apa yang terjadi bila update optimistis ditolak server. Jangan menambah cache atau library baru hanya untuk membuat contoh terlihat production-grade.",
    },
    {
      id: "server-state-thinking-assessment-quiz",
      type: "quiz",
      quizId: "server-state-thinking-assessment-quiz",
    },
    {
      id: "server-state-thinking-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-course-server-state-checkpoint",
    },
    {
      id: "server-state-thinking-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note untuk feature course catalog. Jelaskan mana data yang merupakan server state dan mana yang hanya client state; bagaimana kamu membedakan loading, error, empty, dan ready state; di mana API response dipetakan; serta satu optimistic interaction yang aman atau alasan mengapa interaction tersebut harus menunggu server. Jelaskan recovery jika request update gagal dan sebutkan satu kondisi yang perlu diuji di local app.",
      placeholder:
        "Daftar course, status bookmark, dan completion berasal dari server state karena server menyimpan sumber kebenarannya. Query pencarian dan panel filter adalah client state karena hanya mengatur UI browser saat ini. Catalog menampilkan loading sebelum request selesai, error dengan tombol coba lagi bila request gagal, empty bila request berhasil tetapi filter tidak menemukan course, dan ready bila ada card yang bisa ditampilkan. Response API dipetakan di lib/courses sebelum CourseCard dirender agar card tidak membaca lesson_count atau updated_at secara langsung. Toggle bookmark boleh optimistic karena mudah dibalik: simpan nilai sebelumnya, update UI, lalu rollback serta tampilkan pesan bila mutation gagal. Saya akan menguji response lambat dan kegagalan update di local app.",
      minimumCharacters: 550,
      checklist: [
        "Membedakan server state dan client state berdasarkan sumber kebenaran.",
        "Menjelaskan empat UI state tanpa menyamakan error dengan empty.",
        "Menentukan boundary mapper untuk response API.",
        "Menjelaskan optimistic update beserta rollback atau alasan untuk tidak memakainya.",
        "Menyebut minimal satu QA behavior pada local app tanpa mengklaim preview sudah menjalankan request nyata.",
      ],
      modelAnswer:
        "Daftar course, progress, dan status bookmark adalah server state karena nilainya dapat berubah di luar browser user dan server menjadi sumber kebenaran. Tab filter, query pencarian, dan panel filter terbuka adalah client state. Feature menampilkan loading saat request belum selesai, error dengan copy serta retry saat request gagal, empty hanya ketika response berhasil tanpa course, dan ready saat card dapat dirender. Response API dipetakan di data boundary menjadi CourseCardModel agar component tidak memahami snake_case atau format tanggal endpoint. Toggle bookmark dapat dibuat optimistic karena action kecil serta reversible: simpan course sebelumnya, ubah UI, kirim request, lalu rollback dan tampilkan Bookmark belum diperbarui. Coba lagi bila server menolak. Saya akan menguji request lambat, retry, response kosong, dan failure mutation di local app. Untuk perubahan seperti role atau pembayaran, UI menunggu konfirmasi server karena rollback tidak cukup untuk menjelaskan semua konsekuensi.",
    },
    {
      id: "server-state-thinking-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca data-fetching guidance sesuai framework yang kamu pakai",
      description:
        "Pilih satu path yang cocok dengan project lokalmu. Fokus pada state dan data boundary yang sedang kamu kerjakan, bukan semua strategi cache sekaligus.",
      links: [
        {
          source: "Next.js",
          title: "Fetching Data",
          url: "https://nextjs.org/docs/app/getting-started/fetching-data",
          focus: [
            "Perbedaan tempat fetch pada Server Components dan Client Components.",
            "loading.js atau Suspense untuk loading state yang bermakna.",
            "Kapan beberapa request dapat dimulai secara parallel.",
          ],
          ignoreForNow: [
            "Cache Components dan strategi caching lanjutan.",
            "Streaming architecture yang kompleks.",
          ],
        },
        {
          source: "MDN Web Docs",
          title: "Using the Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
          focus: [
            "Mengecek response sebelum memakai data response.",
            "Membedakan network failure dan HTTP error response.",
            "Mengubah response menjadi data yang siap dipetakan.",
          ],
          ignoreForNow: [
            "Streaming request body dan advanced Request configuration.",
            "Upload flow yang belum digunakan feature-mu.",
          ],
        },
      ],
      followUpAction:
        "Di Local React App atau Local Next.js App, pilih satu daftar data. Catat server state dan client state-nya, tambahkan loading/error/empty/ready state yang jujur, lalu map satu response ke model UI. Tambahkan optimistic update hanya bila kamu dapat mendemonstrasikan rollback dari endpoint aman. Jangan tandai selesai dari preview structure saja.",
    },
    {
      id: "server-state-thinking-assessment-summary",
      type: "summary",
      points: [
        "Server state dan client state dipisahkan berdasarkan sumber kebenaran serta lifecycle-nya.",
        "Loading, error, empty, dan ready state membuat data-fetching UI dapat dipercaya user.",
        "Mapper mengubah response transport menjadi model yang jelas untuk component.",
        "Optimistic update hanya tepat bila rollback serta recovery dapat dijelaskan.",
        "Kamu siap melanjutkan ke module berikutnya yang memperluas quality data flow melalui testing, quality assurance, atau feature data-heavy yang lebih besar.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "server-state-thinking-assessment-recap",
      "server-state-thinking-assessment-quiz",
      "server-state-thinking-assessment-coding-practice",
      "server-state-thinking-assessment-writing-practice",
      "server-state-thinking-assessment-documentation-bridge",
      "server-state-thinking-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const serverStateThinkingAssessmentQuiz: Quiz = {
  id: "server-state-thinking-assessment-quiz",
  lessonId: "server-state-thinking-assessment",
  title: "Uji Kompetensi Server-State Thinking",
  passingScore: 70,
  questions: [
    {
      id: "server-state-owner",
      type: "multiple-choice",
      question:
        "Manakah data yang paling tepat diperlakukan sebagai server state?",
      options: [
        "Status bookmark course yang dikonfirmasi dan disimpan oleh server",
        "Modal filter yang sedang dibuka user",
        "Tab informasi yang sedang dipilih pada card",
        "Nilai input pencarian sebelum user menekan submit",
      ],
      correctAnswer:
        "Status bookmark course yang dikonfirmasi dan disimpan oleh server",
      explanation:
        "Status bookmark memiliki sumber kebenaran di luar component dan dapat berubah setelah mutation atau refresh. Modal, tab, serta input sementara merupakan client state.",
    },
    {
      id: "server-state-empty",
      type: "multiple-choice",
      question:
        "Apa arti empty state pada daftar course?",
      options: [
        "Request berhasil tetapi tidak menghasilkan course untuk ditampilkan",
        "Request belum selesai diproses",
        "Request gagal karena server tidak dapat dihubungi",
        "Component belum ditulis",
      ],
      correctAnswer:
        "Request berhasil tetapi tidak menghasilkan course untuk ditampilkan",
      explanation:
        "Empty tidak boleh menyembunyikan loading atau failure. Setiap keadaan itu membutuhkan feedback berbeda agar user dapat mengambil langkah berikutnya.",
    },
    {
      id: "server-state-mapper",
      type: "multiple-choice",
      question:
        "Mengapa response API dipetakan menjadi CourseCardModel sebelum dirender?",
      options: [
        "Agar component menerima data sesuai kebutuhan UI dan tidak bergantung pada detail endpoint",
        "Agar API tidak lagi perlu mengirim id course",
        "Agar TypeScript otomatis memeriksa server production",
        "Agar semua logic fetch dipindahkan ke JSX",
      ],
      correctAnswer:
        "Agar component menerima data sesuai kebutuhan UI dan tidak bergantung pada detail endpoint",
      explanation:
        "Mapper menjaga detail seperti snake_case, nesting, atau format tanggal pada data boundary. Component menjadi lebih mudah dibaca serta lebih tahan terhadap perubahan endpoint.",
    },
    {
      id: "server-state-optimistic-recovery",
      type: "multiple-choice",
      question:
        "Apa yang harus ada sebelum toggle bookmark dibuat optimistic?",
      options: [
        "Nilai sebelumnya, rencana rollback, dan copy recovery jika request gagal",
        "Toast sukses sebelum request dikirim tanpa kemungkinan error",
        "Cache library untuk semua feature aplikasi",
        "Jaminan bahwa server tidak pernah menolak mutation",
      ],
      correctAnswer:
        "Nilai sebelumnya, rencana rollback, dan copy recovery jika request gagal",
      explanation:
        "Server tetap sumber kebenaran. Optimistic UI aman hanya jika UI dapat dipulihkan dan user diberi konteks ketika konfirmasi server tidak datang.",
    },
    {
      id: "server-state-library-decision",
      type: "multiple-choice",
      question:
        "Kapan query library mulai layak dipertimbangkan?",
      options: [
        "Saat cache, refresh, mutation, dan deduplication berulang menjadi masalah nyata di banyak feature",
        "Sebelum memahami perbedaan loading dan empty state",
        "Untuk mengganti semua useState termasuk modal dan tab aktif",
        "Hanya agar project menggunakan library populer",
      ],
      correctAnswer:
        "Saat cache, refresh, mutation, dan deduplication berulang menjadi masalah nyata di banyak feature",
      explanation:
        "Tooling seharusnya menjawab complexity yang nyata. Mental model tentang kepemilikan data, UI state, serta recovery tetap diperlukan walaupun memakai query library.",
    },
  ],
};

export const classifyCourseServerAndClientStateChallenge: CodingChallenge = {
  id: "classify-course-server-and-client-state",
  lessonId: "server-state-vs-client-state",
  title: "Classify course server and client state",
  description:
    "Klasifikasikan data catalog berdasarkan sumber kebenarannya agar data server dan pilihan UI tidak tercampur. Preview tidak mengambil data API.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat StateOwner untuk nilai server dan client.",
    "Tandai courseCatalog dan bookmarkStatus sebagai server state.",
    "Tandai activeFilter dan isFilterOpen sebagai client state.",
    "Cek otomatis membaca struktur TypeScript. Preview tidak mengambil data API.",
  ],
  starterCode: {
    ...serverStatePracticeCode,
    tsx: `type StateOwner = "server" | "client";

export const courseCatalogState = {
  courseCatalog: "client",
  bookmarkStatus: "client",
  activeFilter: "server",
  isFilterOpen: "server",
} satisfies Record<string, StateOwner>;`,
  },
  solutionCode: {
    ...serverStatePracticeCode,
    tsx: `type StateOwner = "server" | "client";

export const courseCatalogState = {
  courseCatalog: "server",
  bookmarkStatus: "server",
  activeFilter: "client",
  isFilterOpen: "client",
} satisfies Record<string, StateOwner>;`,
  },
  checklist: [
    "StateOwner membedakan server dan client.",
    "Catalog serta bookmark ditandai sebagai server state.",
    "Filter dan panel filter ditandai sebagai client state.",
    "Klasifikasi berdasarkan sumber kebenaran, bukan posisi UI.",
    "Preview tidak mengambil data API atau menyinkronkan state nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "state-owner", label: "StateOwner membedakan server dan client.", type: "contains", valueIncludes: 'type StateOwner = "server" | "client";' },
      { id: "catalog-owner", label: "courseCatalog ditandai server.", type: "contains", valueIncludes: 'courseCatalog: "server",' },
      { id: "bookmark-owner", label: "bookmarkStatus ditandai server.", type: "contains", valueIncludes: 'bookmarkStatus: "server",' },
      { id: "filter-owner", label: "Filter UI ditandai client.", type: "contains", valueIncludes: 'activeFilter: "client",\n  isFilterOpen: "client",' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca klasifikasi state. Preview tidak mengambil API, menyimpan bookmark, atau menyinkronkan data server.",
    lines: [
      "Catalog dan bookmark diperlakukan sebagai data milik server.",
      "Filter serta panel filter diperlakukan sebagai state UI lokal.",
      "Kepemilikan state menentukan kapan data perlu dikonfirmasi atau di-refresh.",
    ],
  },
  skillTags: ["Server State", "Client State", "TypeScript", "React"],
};

export const renderCourseServerStateFlowChallenge: CodingChallenge = {
  id: "render-course-server-state-flow",
  lessonId: "server-state-loading-error-empty",
  title: "Render course server-state flow",
  description:
    "Lengkapi UI daftar course untuk loading, error, empty, dan ready state yang memiliki copy serta recovery berbeda. Preview tidak menjalankan request course.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat CourseListState untuk loading, error, empty, dan ready.",
    "Render loading dengan aria-busy dan error dengan role alert serta retry button.",
    "Tambahkan empty state dan daftar course pada ready state.",
    "Cek otomatis membaca struktur TSX. Preview tidak menjalankan request course.",
  ],
  starterCode: {
    ...serverStatePracticeCode,
    tsx: `type Course = {
  id: string;
  title: string;
};

type CourseListState = { status: "ready"; courses: Course[] };

export function CourseList({ state }: { state: CourseListState }) {
  return <p>{state.courses.length} course siap.</p>;
}`,
  },
  solutionCode: {
    ...serverStatePracticeCode,
    tsx: `type Course = {
  id: string;
  title: string;
};

type CourseListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; courses: Course[] };

export function CourseList({ state }: { state: CourseListState }) {
  if (state.status === "loading") {
    return <p aria-busy="true">Memuat course...</p>;
  }

  if (state.status === "error") {
    return (
      <section role="alert">
        <p>{state.message}</p>
        <button type="button">Coba lagi</button>
      </section>
    );
  }

  if (state.status === "empty") {
    return <p>Belum ada course yang cocok. Coba ubah filter.</p>;
  }

  return (
    <ul>
      {state.courses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
}`,
  },
  checklist: [
    "Union membedakan loading, error, empty, dan ready.",
    "Loading state memberi busy feedback.",
    "Error state memberi pesan serta recovery button.",
    "Empty dan ready state tidak menggunakan copy yang sama.",
    "Preview tidak menjalankan request atau retry course nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "state-union", label: "Union memiliki loading, error, empty, dan ready.", type: "contains", valueIncludes: 'type CourseListState =\n  | { status: "loading" }\n  | { status: "error"; message: string }\n  | { status: "empty" }\n  | { status: "ready"; courses: Course[] };' },
      { id: "loading", label: "Loading memakai aria-busy dan copy jelas.", type: "contains", valueIncludes: '<p aria-busy="true">Memuat course...</p>' },
      { id: "error", label: "Error memakai alert dan retry button.", type: "contains", valueIncludes: '<section role="alert">\n        <p>{state.message}</p>\n        <button type="button">Coba lagi</button>' },
      { id: "empty", label: "Empty memberi next action pada filter.", type: "contains", valueIncludes: "Belum ada course yang cocok. Coba ubah filter." },
      { id: "ready", label: "Ready merender course dengan key id.", type: "contains", valueIncludes: "{state.courses.map((course) => (\n        <li key={course.id}>{course.title}</li>" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca server-state UI structure. Preview tidak menjalankan request, retry, atau perubahan data course.",
    lines: [
      "Loading, error, empty, dan ready memiliki UI yang berbeda.",
      "Error menawarkan recovery, sedangkan empty memberi next action yang sesuai.",
      "Hubungkan retry ke request nyata dan uji setiap branch pada local app.",
    ],
  },
  skillTags: ["React", "Server State", "Loading State", "Error Recovery"],
};

export const mapCourseApiResponseToCardModelChallenge: CodingChallenge = {
  id: "map-course-api-response-to-card-model",
  lessonId: "server-state-mapping-api-responses",
  title: "Map course API response to card model",
  description:
    "Map response course dari bentuk transport ke data card yang siap dirender tanpa membuat component mengenal detail API. Preview tidak memanggil endpoint course.",
  instructions: [
    "Fokus di tab TSX.",
    "Definisikan CourseApiResponse dan CourseCardModel.",
    "Buat toCourseCard yang membersihkan title serta membuat lessonLabel.",
    "Format updated_at menjadi updatedLabel untuk UI.",
    "Cek otomatis membaca struktur TypeScript. Preview tidak memanggil endpoint course.",
  ],
  starterCode: {
    ...serverStatePracticeCode,
    tsx: `type CourseApiResponse = {
  id: string;
  title: string;
  lesson_count: number;
  updated_at: string;
};

export function toCourseCard(response: CourseApiResponse) {
  return response;
}`,
  },
  solutionCode: {
    ...serverStatePracticeCode,
    tsx: `type CourseApiResponse = {
  id: string;
  title: string;
  lesson_count: number;
  updated_at: string;
};

type CourseCardModel = {
  id: string;
  title: string;
  lessonLabel: string;
  updatedLabel: string;
};

export function toCourseCard(
  response: CourseApiResponse,
): CourseCardModel {
  return {
    id: response.id,
    title: response.title.trim(),
    lessonLabel: \`\${response.lesson_count} lesson\`,
    updatedLabel: new Date(response.updated_at).toLocaleDateString("id-ID"),
  };
}`,
  },
  checklist: [
    "Response API dan model card memiliki type yang berbeda.",
    "Mapper mengembalikan CourseCardModel, bukan response mentah.",
    "Title dibersihkan sebelum tampil di card.",
    "Jumlah lesson dan tanggal diubah menjadi label UI.",
    "Preview tidak memanggil endpoint atau memvalidasi payload production.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "api-type", label: "CourseApiResponse menjelaskan data transport.", type: "contains", valueIncludes: "type CourseApiResponse = {\n  id: string;\n  title: string;\n  lesson_count: number;\n  updated_at: string;\n};" },
      { id: "card-type", label: "CourseCardModel menjelaskan data siap UI.", type: "contains", valueIncludes: "type CourseCardModel = {\n  id: string;\n  title: string;\n  lessonLabel: string;\n  updatedLabel: string;\n};" },
      { id: "mapper-signature", label: "Mapper menerima response dan mengembalikan card model.", type: "contains", valueIncludes: "export function toCourseCard(\n  response: CourseApiResponse,\n): CourseCardModel {" },
      { id: "mapped-fields", label: "Mapper membersihkan title serta membuat label UI.", type: "contains", valueIncludes: "title: response.title.trim(),\n    lessonLabel: `${response.lesson_count} lesson`,\n    updatedLabel: new Date(response.updated_at).toLocaleDateString(\"id-ID\")," },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca mapper structure. Preview tidak memanggil endpoint course atau memvalidasi payload production.",
    lines: [
      "Response transport dipisahkan dari model card yang siap dirender.",
      "Format display dibuat di data boundary, bukan tersebar di component.",
      "Tambahkan validation runtime bila sumber response belum tepercaya.",
    ],
  },
  skillTags: ["TypeScript", "API Response", "Data Mapping", "Server State"],
};

export const addOptimisticCourseBookmarkRollbackChallenge: CodingChallenge = {
  id: "add-optimistic-course-bookmark-rollback",
  lessonId: "server-state-optimistic-ui-basics",
  title: "Add optimistic course bookmark rollback",
  description:
    "Tambahkan optimistic bookmark update yang menyimpan nilai sebelumnya, rollback saat gagal, dan memberi recovery copy. Preview tidak mengirim mutation bookmark.",
  instructions: [
    "Fokus di tab TSX.",
    "Simpan course sebelumnya sebelum membalik isBookmarked.",
    "Update UI terlebih dahulu lalu panggil updateBookmark di dalam try block.",
    "Rollback course serta tampilkan pesan jika mutation gagal.",
    "Cek otomatis membaca struktur TSX. Preview tidak mengirim mutation bookmark.",
  ],
  starterCode: {
    ...serverStatePracticeCode,
    tsx: `import { useState } from "react";

type Course = {
  id: string;
  isBookmarked: boolean;
};

async function updateBookmark(id: string, isBookmarked: boolean) {
  return { id, isBookmarked };
}

export function CourseBookmark({ initialCourse }: { initialCourse: Course }) {
  const [course, setCourse] = useState(initialCourse);

  async function toggleBookmark() {
    await updateBookmark(course.id, !course.isBookmarked);
  }

  return <button type="button">Toggle bookmark</button>;
}`,
  },
  solutionCode: {
    ...serverStatePracticeCode,
    tsx: `import { useState } from "react";

type Course = {
  id: string;
  isBookmarked: boolean;
};

async function updateBookmark(id: string, isBookmarked: boolean) {
  return { id, isBookmarked };
}

export function CourseBookmark({ initialCourse }: { initialCourse: Course }) {
  const [course, setCourse] = useState(initialCourse);
  const [message, setMessage] = useState<string | undefined>(undefined);

  async function toggleBookmark() {
    const previousCourse = course;
    const nextCourse = {
      ...course,
      isBookmarked: !course.isBookmarked,
    };

    setCourse(nextCourse);
    setMessage(undefined);

    try {
      await updateBookmark(nextCourse.id, nextCourse.isBookmarked);
    } catch {
      setCourse(previousCourse);
      setMessage("Bookmark belum diperbarui. Coba lagi.");
    }
  }

  return (
    <div>
      <button type="button" onClick={toggleBookmark}>
        {course.isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
      </button>
      {message ? <p role="alert">{message}</p> : null}
    </div>
  );
}`,
  },
  checklist: [
    "Nilai course sebelum mutation disimpan sebagai previousCourse.",
    "UI bookmark berubah sebelum request selesai.",
    "try/catch menangani hasil updateBookmark.",
    "Catch mengembalikan previousCourse dan memberi recovery copy.",
    "Preview tidak mengirim mutation bookmark atau menguji race condition nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "message-state", label: "UI memiliki message state untuk recovery.", type: "contains", valueIncludes: "const [message, setMessage] = useState<string | undefined>(undefined);" },
      { id: "previous-value", label: "Nilai sebelum mutation disimpan.", type: "contains", valueIncludes: "const previousCourse = course;" },
      { id: "optimistic-value", label: "Nilai optimistic membalik bookmark.", type: "contains", valueIncludes: "const nextCourse = {\n      ...course,\n      isBookmarked: !course.isBookmarked,\n    };\n\n    setCourse(nextCourse);" },
      { id: "mutation", label: "Mutation dipanggil di try block.", type: "contains", valueIncludes: "try {\n      await updateBookmark(nextCourse.id, nextCourse.isBookmarked);\n    } catch {" },
      { id: "rollback", label: "Catch melakukan rollback dan memberi recovery copy.", type: "contains", valueIncludes: "setCourse(previousCourse);\n      setMessage(\"Bookmark belum diperbarui. Coba lagi.\");" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca optimistic-update structure. Preview tidak mengirim mutation bookmark, menangani race condition, atau mengonfirmasi server.",
    lines: [
      "Bookmark berubah segera di UI sebelum mutation selesai.",
      "Nilai awal dapat dipulihkan bila request gagal.",
      "Uji failure, klik cepat, dan re-fetch pada endpoint aman di local app.",
    ],
  },
  skillTags: ["React", "Server State", "Optimistic UI", "Rollback"],
};

export const buildCourseServerStateCheckpointChallenge: CodingChallenge = {
  id: "build-course-server-state-checkpoint",
  lessonId: "server-state-thinking-assessment",
  title: "Build course server-state checkpoint",
  description:
    "Lengkapi checkpoint catalog course dengan model response, UI state yang jujur, dan optimistic bookmark rollback. Preview tidak menjalankan fetch atau mutation server.",
  instructions: [
    "Fokus di tab TSX.",
    "Definisikan CourseApiResponse dan map menjadi CourseCardModel.",
    "Tambahkan CourseListState untuk loading, error, empty, dan ready.",
    "Render loading, error retry, empty copy, dan ready list secara berbeda.",
    "Tambahkan bookmark optimistic yang menyimpan nilai sebelumnya dan rollback saat gagal.",
    "Cek otomatis membaca struktur TSX. Preview tidak menjalankan fetch atau mutation server.",
  ],
  starterCode: {
    ...serverStatePracticeCode,
    tsx: `import { useState } from "react";

type Course = {
  id: string;
  title: string;
  isBookmarked: boolean;
};

export function CourseCatalog({ courses }: { courses: Course[] }) {
  const [items, setItems] = useState(courses);

  return <p>{items.length} course</p>;
}`,
  },
  solutionCode: {
    ...serverStatePracticeCode,
    tsx: `import { useState } from "react";

type CourseApiResponse = {
  id: string;
  title: string;
  lesson_count: number;
  is_bookmarked: boolean;
};

type CourseCardModel = {
  id: string;
  title: string;
  lessonLabel: string;
  isBookmarked: boolean;
};

type CourseListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; courses: CourseCardModel[] };

function toCourseCard(response: CourseApiResponse): CourseCardModel {
  return {
    id: response.id,
    title: response.title.trim(),
    lessonLabel: \`\${response.lesson_count} lesson\`,
    isBookmarked: response.is_bookmarked,
  };
}

async function updateBookmark(id: string, isBookmarked: boolean) {
  return { id, isBookmarked };
}

export function CourseCatalog({ state }: { state: CourseListState }) {
  const [courses, setCourses] = useState(
    state.status === "ready" ? state.courses : [],
  );
  const [message, setMessage] = useState<string | undefined>(undefined);

  async function toggleBookmark(id: string) {
    const previousCourses = courses;
    const nextCourses = courses.map((course) =>
      course.id === id
        ? { ...course, isBookmarked: !course.isBookmarked }
        : course,
    );

    setCourses(nextCourses);

    const nextCourse = nextCourses.find((course) => course.id === id);

    if (!nextCourse) {
      return;
    }

    try {
      await updateBookmark(nextCourse.id, nextCourse.isBookmarked);
    } catch {
      setCourses(previousCourses);
      setMessage("Bookmark belum diperbarui. Coba lagi.");
    }
  }

  if (state.status === "loading") {
    return <p aria-busy="true">Memuat course...</p>;
  }

  if (state.status === "error") {
    return (
      <section role="alert">
        <p>{state.message}</p>
        <button type="button">Coba lagi</button>
      </section>
    );
  }

  if (state.status === "empty") {
    return <p>Belum ada course yang cocok. Coba ubah filter.</p>;
  }

  return (
    <section>
      {courses.map((course) => (
        <article key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.lessonLabel}</p>
          <button type="button" onClick={() => toggleBookmark(course.id)}>
            {course.isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
          </button>
        </article>
      ))}
      {message ? <p role="alert">{message}</p> : null}
    </section>
  );
}

export const exampleCard = toCourseCard({
  id: "course-1",
  title: " React Dasar ",
  lesson_count: 8,
  is_bookmarked: false,
});`,
  },
  checklist: [
    "Response API dan card model memiliki boundary yang jelas.",
    "Catalog menangani loading, error, empty, dan ready state.",
    "Error memberi retry copy dan empty memberi next action.",
    "Bookmark optimistic menyimpan list sebelumnya lalu rollback jika mutation gagal.",
    "Preview tidak menjalankan fetch, mutation, atau race-condition recovery nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "api-boundary", label: "Response API memiliki bentuk transport sendiri.", type: "contains", valueIncludes: "type CourseApiResponse = {\n  id: string;\n  title: string;\n  lesson_count: number;\n  is_bookmarked: boolean;\n};" },
      { id: "ui-model", label: "CourseCardModel memiliki bentuk UI sendiri.", type: "contains", valueIncludes: "type CourseCardModel = {\n  id: string;\n  title: string;\n  lessonLabel: string;\n  isBookmarked: boolean;\n};" },
      { id: "state-flow", label: "CourseListState membedakan empat state.", type: "contains", valueIncludes: 'type CourseListState =\n  | { status: "loading" }\n  | { status: "error"; message: string }\n  | { status: "empty" }\n  | { status: "ready"; courses: CourseCardModel[] };' },
      { id: "mapper", label: "toCourseCard memetakan response menjadi UI model.", type: "contains", valueIncludes: "function toCourseCard(response: CourseApiResponse): CourseCardModel {" },
      { id: "state-ui", label: "UI memiliki loading, error retry, dan empty copy.", type: "contains", valueIncludes: '<p aria-busy="true">Memuat course...</p>' },
      { id: "rollback", label: "Optimistic bookmark menyimpan nilai awal dan rollback.", type: "contains", valueIncludes: "const previousCourses = courses;" },
      { id: "rollback-catch", label: "Catch memulihkan course serta memberi recovery copy.", type: "contains", valueIncludes: "setCourses(previousCourses);\n      setMessage(\"Bookmark belum diperbarui. Coba lagi.\");" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca server-state checkpoint structure. Preview tidak menjalankan fetch, mutation server, atau race-condition recovery nyata.",
    lines: [
      "Catalog memiliki data boundary serta loading, error, empty, dan ready UI structure.",
      "Bookmark dapat berubah secara optimistic lalu dipulihkan jika mutation gagal.",
      "Local app perlu menguji request lambat, retry, response kosong, dan mutation failure.",
    ],
  },
  skillTags: ["React", "Server State", "Data Mapping", "Optimistic UI", "Readiness Checkpoint"],
};
