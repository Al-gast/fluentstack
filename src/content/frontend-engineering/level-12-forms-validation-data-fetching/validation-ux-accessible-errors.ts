import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const validationUxPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const validationUxAccessibleErrorsModule: Module = {
  id: "validation-ux-accessible-errors",
  trackId: "frontend-engineering",
  title: "Validation UX and Accessible Errors",
  slug: "validation-ux-accessible-errors",
  description:
    "Membuat feedback validasi form yang jelas, dapat dipulihkan, dan aksesibel melalui inline error, error summary, focus, pending state, serta success state.",
  order: 39,
  lessonIds: [
    "validation-inline-errors",
    "validation-summary-errors",
    "validation-focus-management",
    "validation-disabled-state",
    "validation-success-state",
    "validation-ux-accessible-errors-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Form Validation",
    "Accessibility",
    "React Hook Form",
    "Error Recovery",
    "UX",
  ],
};

export const validationInlineErrorsLesson: Lesson = {
  id: "validation-inline-errors",
  trackId: "frontend-engineering",
  moduleId: "validation-ux-accessible-errors",
  title: "Inline Errors",
  slug: "validation-inline-errors",
  description:
    "Menempatkan pesan error dekat field yang perlu diperbaiki dan menulis copy yang membantu user pulih.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan alasan error perlu muncul dekat field yang bermasalah",
    "Menulis error yang menyebut masalah serta langkah perbaikannya",
    "Menghubungkan input, invalid state, dan pesan error secara programatis",
    "Menghindari validasi yang menyalahkan atau mengganggu user terlalu dini",
  ],
  skillTags: ["Form UX", "Accessibility", "React Hook Form", "Error Messages"],
  blocks: [
    {
      id: "validation-inline-errors-intro",
      type: "text",
      title: "Error harus membantu user kembali ke jalur yang benar",
      content:
        "Validation bukan hanya aturan yang menolak submit. Ia adalah feedback untuk membantu user memahami apa yang perlu diperbaiki. Saat email salah, letakkan pesan dekat field email, sebutkan masalahnya, lalu jelaskan format yang diterima. Pesan seperti \"Input tidak valid\" tidak memberi cukup arah.\n\nTunda error sampai user punya konteks yang cukup, misalnya setelah field disentuh, setelah blur, atau setelah submit gagal. Menampilkan semua error saat form baru dibuka membuat form terasa seperti sudah menyalahkan user. Pilihan timing perlu mengikuti risiko dan panjang form, bukan satu aturan universal.",
    },
    {
      id: "validation-inline-errors-example",
      type: "code-example",
      title: "Email error yang dekat, spesifik, dan terhubung",
      language: "tsx",
      code: `type InlineErrorProps = {
  id: string;
  message?: string;
};

function InlineError({ id, message }: InlineErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <p id={id + "-error"} role="alert">
      {message}
    </p>
  );
}

export function EmailField({ error }: { error?: string }) {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "email-error" : undefined}
      />
      <InlineError id="email" message={error} />
    </div>
  );
}`,
      explanation:
        "Label memberi nama input. Ketika error tersedia, aria-invalid menyatakan statusnya dan aria-describedby merujuk ke pesan yang menjelaskan masalah. Teks error tetap penting; warna border merah saja tidak cukup untuk menjelaskan apa yang harus dilakukan.",
    },
    {
      id: "validation-inline-errors-coding-practice",
      type: "coding-practice",
      challengeId: "show-useful-inline-profile-error",
    },
    {
      id: "validation-inline-errors-quick-check",
      type: "quick-check",
      question:
        "Manakah pesan error email yang paling membantu user memperbaiki input?",
      options: [
        "Masukkan email yang valid, misalnya nama@contoh.com.",
        "Data salah.",
        "Error 400.",
        "Coba lagi nanti.",
      ],
      correctAnswer: "Masukkan email yang valid, misalnya nama@contoh.com.",
      explanation:
        "Pesan yang baik menyebut masalah dengan bahasa yang dapat dipahami serta memberi arah perbaikan. Jangan mengekspos kode error internal sebagai satu-satunya penjelasan.",
    },
    {
      id: "validation-inline-errors-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memvalidasi setiap ketikan tanpa pertimbangan",
      content:
        "Error saat user baru menulis satu huruf email sering lebih mengganggu daripada membantu. Untuk banyak field, tampilkan error setelah blur atau sesudah submit pertama. Pengecualian dapat berlaku untuk feedback yang sangat jelas dan tidak menghukum, misalnya indikator kekuatan password. Uji timing dengan task form yang nyata, bukan hanya happy path.",
    },
    {
      id: "validation-inline-errors-summary",
      type: "summary",
      points: [
        "Inline error diletakkan dekat field yang perlu diperbaiki.",
        "Pesan error menjelaskan masalah dan langkah perbaikan dengan bahasa manusia.",
        "aria-invalid dan aria-describedby membuat hubungan input serta pesan dapat dikenali teknologi bantu.",
        "Timing error perlu membantu, bukan mempermalukan atau mengganggu user.",
        "Berikutnya, error summary membantu user melihat masalah form secara keseluruhan setelah submit gagal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "validation-inline-errors-intro",
      "validation-inline-errors-example",
      "validation-inline-errors-coding-practice",
      "validation-inline-errors-quick-check",
      "validation-inline-errors-callout",
      "validation-inline-errors-summary",
    ],
  },
};

export const validationSummaryErrorsLesson: Lesson = {
  id: "validation-summary-errors",
  trackId: "frontend-engineering",
  moduleId: "validation-ux-accessible-errors",
  title: "Summary Errors",
  slug: "validation-summary-errors",
  description:
    "Menambahkan error summary setelah submit gagal agar user memahami seluruh masalah dan dapat menuju field terkait.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan peran error summary pada form dengan beberapa error",
    "Menulis daftar error yang merujuk ke label serta field terkait",
    "Membedakan error summary dari inline error",
    "Menggunakan feedback form-level tanpa menghapus konteks field-level",
  ],
  skillTags: ["Form UX", "Accessibility", "Error Summary", "Recovery"],
  blocks: [
    {
      id: "validation-summary-errors-intro",
      type: "text",
      title: "Satu error perlu konteks lokal; banyak error perlu peta",
      content:
        "Inline error memberi konteks tepat di dekat field. Namun setelah submit gagal pada form panjang, user juga perlu tahu bahwa ada beberapa hal yang harus diperbaiki. Error summary di atas form menjawab pertanyaan itu dan memberi jalur cepat ke field terkait. Summary tidak menggantikan inline error; keduanya bekerja bersama.\n\nGunakan heading yang jelas, jumlah atau daftar masalah yang mudah dipindai, dan link ke field bila memungkinkan. Jangan menyalin pesan terlalu teknis atau menyembunyikan error di toast yang menghilang. Jika error berubah secara dinamis setelah submit, container notifikasi harus ditangani dan diuji dengan teknologi bantu pada app lokal.",
    },
    {
      id: "validation-summary-errors-example",
      type: "code-example",
      title: "Error summary yang menuju field terkait",
      language: "tsx",
      code: `type ProfileErrors = {
  displayName?: string;
  email?: string;
};

function ErrorSummary({ errors }: { errors: ProfileErrors }) {
  const entries = Object.entries(errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <section role="alert" aria-labelledby="profile-error-summary-title">
      <h2 id="profile-error-summary-title">
        Periksa {entries.length} field sebelum menyimpan
      </h2>
      <ul>
        {entries.map(([field, message]) => (
          <li key={field}>
            <a href={"#" + field}>{message}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}`,
      explanation:
        "Daftar menampilkan masalah dalam teks dan setiap item mengarah ke id field. Tulis pesan yang tetap bermakna saat dibaca tanpa melihat input, misalnya \"Email: masukkan alamat yang valid\". Periksa implementasi akhir dengan keyboard serta screen reader pada project lokal.",
    },
    {
      id: "validation-summary-errors-coding-practice",
      type: "coding-practice",
      challengeId: "add-profile-error-summary",
    },
    {
      id: "validation-summary-errors-quick-check",
      type: "quick-check",
      question:
        "Kapan error summary paling bernilai bagi user?",
      options: [
        "Setelah submit gagal ketika beberapa field perlu diperbaiki",
        "Sebagai pengganti semua label input",
        "Saat form baru dibuka sebelum user berinteraksi",
        "Hanya untuk menyimpan log developer",
      ],
      correctAnswer:
        "Setelah submit gagal ketika beberapa field perlu diperbaiki",
      explanation:
        "Summary memberi gambaran form-level setelah user mencoba melanjutkan. Inline error tetap dibutuhkan agar perbaikan dapat dilakukan langsung di dekat field.",
    },
    {
      id: "validation-summary-errors-callout",
      type: "callout",
      variant: "important",
      title: "Ringkas tetapi jangan kabur",
      content:
        "\"Ada error di form\" lebih baik daripada tidak ada feedback, tetapi belum cukup. Sebutkan field dan cara perbaikan, misalnya \"Email: masukkan alamat yang valid\". Hindari menaruh data sensitif, raw response server, atau detail internal database di summary maupun inline error.",
    },
    {
      id: "validation-summary-errors-summary",
      type: "summary",
      points: [
        "Error summary memberi peta masalah setelah submit gagal.",
        "Summary dan inline error saling melengkapi, bukan saling menggantikan.",
        "Link summary sebaiknya menuju field terkait dan copy tetap bermakna tanpa konteks visual.",
        "Notifikasi dinamis perlu diuji dengan keyboard serta teknologi bantu pada app lokal.",
        "Berikutnya, focus management menentukan ke mana perhatian user bergerak setelah feedback muncul.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "validation-summary-errors-intro",
      "validation-summary-errors-example",
      "validation-summary-errors-coding-practice",
      "validation-summary-errors-quick-check",
      "validation-summary-errors-callout",
      "validation-summary-errors-summary",
    ],
  },
};

export const validationFocusManagementLesson: Lesson = {
  id: "validation-focus-management",
  trackId: "frontend-engineering",
  moduleId: "validation-ux-accessible-errors",
  title: "Focus Management",
  slug: "validation-focus-management",
  description:
    "Mengarahkan perhatian user ke feedback validasi yang penting tanpa mencuri fokus saat mereka masih mengisi form.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan mengapa focus management penting setelah submit gagal",
    "Memilih fokus ke error summary atau field invalid pertama secara sadar",
    "Menggunakan onInvalid dan setFocus sebagai pola React Hook Form",
    "Menguji alur keyboard tanpa mengganggu proses mengetik user",
  ],
  skillTags: ["Accessibility", "Keyboard", "React Hook Form", "Focus Management"],
  blocks: [
    {
      id: "validation-focus-management-intro",
      type: "text",
      title: "Feedback yang muncul di luar fokus mudah terlewat",
      content:
        "Setelah submit gagal, user keyboard atau screen reader dapat tetap berada di button submit sementara error muncul di tempat lain. Pindahkan fokus dengan tujuan yang jelas: ke error summary jika form memiliki banyak masalah dan user perlu gambaran, atau ke field invalid pertama jika perbaikannya langsung. Kedua pilihan dapat valid; pilih berdasarkan bentuk form dan kemudian konsisten.\n\nJangan memindahkan fokus setiap kali user mengetik atau pada error kecil yang muncul saat input masih aktif. Fokus adalah posisi kerja user. Memindahkannya tanpa alasan membuat input terasa melawan user. Pastikan ringkasan atau field yang dituju benar-benar dapat menerima fokus dan terlihat setelah scroll.",
    },
    {
      id: "validation-focus-management-example",
      type: "code-example",
      title: "Fokuskan field invalid pertama saat submit gagal",
      language: "tsx",
      code: `import { useForm, type FieldErrors } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
  email: string;
};

export function ProfileForm() {
  const { handleSubmit, register, setFocus } = useForm<ProfileFormValues>();

  function onValid(values: ProfileFormValues) {
    console.log(values);
  }

  function onInvalid(errors: FieldErrors<ProfileFormValues>) {
    const firstField = Object.keys(errors)[0] as keyof ProfileFormValues;

    if (firstField) {
      setFocus(firstField);
    }
  }

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
      <input aria-label="Nama tampilan" {...register("displayName")} />
      <input aria-label="Email" {...register("email")} />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
      explanation:
        "onInvalid dipanggil saat validation form gagal. Contoh memilih key error pertama dan mengirim fokus ke field itu. Pada form yang memakai error summary, strategi lain adalah memfokuskan summary yang diberi tabIndex={-1}; gunakan satu strategi yang dapat dipahami user dan uji urutan tab-nya.",
    },
    {
      id: "validation-focus-management-coding-practice",
      type: "coding-practice",
      challengeId: "focus-first-invalid-profile-field",
    },
    {
      id: "validation-focus-management-quick-check",
      type: "quick-check",
      question:
        "Kapan form paling tepat memindahkan fokus ke feedback validasi?",
      options: [
        "Setelah submit gagal dan user perlu diarahkan ke perbaikan",
        "Pada setiap karakter yang diketik user",
        "Saat form pertama kali dirender",
        "Setelah submit berhasil tanpa pesan lain",
      ],
      correctAnswer:
        "Setelah submit gagal dan user perlu diarahkan ke perbaikan",
      explanation:
        "Setelah submit gagal, pemindahan fokus membuat perubahan feedback lebih mudah ditemukan. Saat user sedang mengetik, fokus perlu tetap stabil kecuali mereka sendiri mengubahnya.",
    },
    {
      id: "validation-focus-management-callout",
      type: "callout",
      variant: "warning",
      title: "Fokus bukan efek visual",
      content:
        "Scroll ke elemen tidak selalu sama dengan memindahkan fokus. Coba form hanya dengan keyboard: submit data salah, dengarkan atau amati posisi fokus, perbaiki error, lalu lanjutkan sampai submit berhasil. Jangan mengandalkan console atau screenshot sebagai bukti focus flow sudah benar.",
    },
    {
      id: "validation-focus-management-summary",
      type: "summary",
      points: [
        "Setelah submit gagal, fokus dapat diarahkan ke summary atau field invalid pertama.",
        "Pilih satu strategi berdasarkan kebutuhan form dan buat perilakunya konsisten.",
        "Jangan mencuri fokus saat user masih mengetik atau hanya karena error berubah.",
        "Uji submit, tab order, scroll, dan recovery dengan keyboard pada app lokal.",
        "Berikutnya, disabled state menjaga submit ganda tanpa mengunci kemampuan user memperbaiki form.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "validation-focus-management-intro",
      "validation-focus-management-example",
      "validation-focus-management-coding-practice",
      "validation-focus-management-quick-check",
      "validation-focus-management-callout",
      "validation-focus-management-summary",
    ],
  },
};

export const validationDisabledStateLesson: Lesson = {
  id: "validation-disabled-state",
  trackId: "frontend-engineering",
  moduleId: "validation-ux-accessible-errors",
  title: "Disabled State",
  slug: "validation-disabled-state",
  description:
    "Menggunakan pending dan disabled state untuk mencegah submit ganda tanpa membuat form sulit diperbaiki.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan field invalid, form pending, dan submit button disabled",
    "Mencegah submit ganda saat request sedang berjalan",
    "Menjaga field tetap dapat diperbaiki ketika feedback validation muncul",
    "Memberi copy pending yang menjelaskan apa yang sedang terjadi",
  ],
  skillTags: ["Form UX", "Async UI", "React Hook Form", "Pending State"],
  blocks: [
    {
      id: "validation-disabled-state-intro",
      type: "text",
      title: "Mencegah submit ganda tidak sama dengan memblokir perbaikan",
      content:
        "Saat request sedang berjalan, submit button perlu dicegah agar user tidak mengirim data yang sama dua kali. isSubmitting dari React Hook Form cocok untuk membuat button disabled dan mengganti label menjadi \"Menyimpan...\". Ini adalah pending state: operasi sedang berjalan, bukan validation error.\n\nJangan otomatis membuat seluruh form disabled hanya karena ada field invalid. User perlu tetap dapat fokus, membaca error, dan memperbaiki nilai. Bahkan saat pending, keputusan untuk mengunci field harus mempertimbangkan apakah request dapat dibatalkan, apakah perubahan berikutnya aman, dan apakah UI menjelaskan kenapa control tidak tersedia.",
    },
    {
      id: "validation-disabled-state-example",
      type: "code-example",
      title: "Button pending mencegah submit ganda",
      language: "tsx",
      code: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
};

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileFormValues>();

  async function onSubmit(values: ProfileFormValues) {
    await saveProfile(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="displayName">Nama tampilan</label>
      <input id="displayName" {...register("displayName")} />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Menyimpan..." : "Simpan profile"}
      </button>
    </form>
  );
}

async function saveProfile(values: ProfileFormValues) {
  return values;
}`,
      explanation:
        "Button disabled selama request berjalan, tetapi form tidak disembunyikan atau dihapus. Label pending memberi konteks mengapa button belum dapat dipakai. Tambahkan state error atau success setelah request selesai; pending sendiri bukan hasil akhir.",
    },
    {
      id: "validation-disabled-state-coding-practice",
      type: "coding-practice",
      challengeId: "add-profile-pending-submit-state",
    },
    {
      id: "validation-disabled-state-quick-check",
      type: "quick-check",
      question:
        "Apa alasan utama button submit di-disable saat isSubmitting bernilai true?",
      options: [
        "Mencegah user mengirim submit yang sama berulang kali saat request berjalan",
        "Menyembunyikan error validation dari user",
        "Mengganti validation server-side",
        "Menandakan form pasti sudah berhasil disimpan",
      ],
      correctAnswer:
        "Mencegah user mengirim submit yang sama berulang kali saat request berjalan",
      explanation:
        "Pending state mencegah duplicate submit dan memberi konteks pada user. Hasil request masih perlu ditampilkan sebagai success atau error setelah operasi selesai.",
    },
    {
      id: "validation-disabled-state-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memakai disabled sebagai pengganti validasi",
      content:
        "Menonaktifkan submit sebelum user memahami syarat form dapat membuat mereka mencari-cari apa yang salah. Untuk form sederhana, biarkan user submit lalu berikan feedback yang jelas. Untuk pola lain, jelaskan syarat secara dekat dengan control. Apa pun pilihannya, server tetap harus memvalidasi data yang diterima.",
    },
    {
      id: "validation-disabled-state-summary",
      type: "summary",
      points: [
        "isSubmitting menandakan request sedang berjalan, bukan error validasi.",
        "Disable submit button saat pending untuk mencegah duplicate submit.",
        "User tetap perlu bisa menemukan dan memperbaiki error field.",
        "Label pending menjelaskan keadaan button yang berubah.",
        "Berikutnya, success state mengonfirmasi hasil setelah request benar-benar selesai.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "validation-disabled-state-intro",
      "validation-disabled-state-example",
      "validation-disabled-state-coding-practice",
      "validation-disabled-state-quick-check",
      "validation-disabled-state-callout",
      "validation-disabled-state-summary",
    ],
  },
};

export const validationSuccessStateLesson: Lesson = {
  id: "validation-success-state",
  trackId: "frontend-engineering",
  moduleId: "validation-ux-accessible-errors",
  title: "Success State",
  slug: "validation-success-state",
  description:
    "Memberi konfirmasi setelah submit berhasil dan menawarkan tindakan berikutnya yang relevan tanpa mengaburkan error server.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Membedakan success state dari pending serta validation state",
    "Menulis pesan success yang menyatakan tindakan yang selesai",
    "Memberi next action setelah submit berhasil bila relevan",
    "Membedakan field validation error dari kegagalan submit atau server",
  ],
  skillTags: ["Form UX", "Success State", "Error Recovery", "Accessibility"],
  blocks: [
    {
      id: "validation-success-state-intro",
      type: "text",
      title: "User perlu tahu apa yang benar-benar sudah terjadi",
      content:
        "Setelah request berhasil, user membutuhkan konfirmasi yang spesifik: \"Profile tersimpan\" lebih jelas daripada \"Berhasil\". Bila ada langkah berikutnya, tampilkan secara proporsional, misalnya link untuk kembali ke dashboard atau melanjutkan pengaturan. Jangan mengarahkan user secara tiba-tiba tanpa memberi kesempatan membaca hasil, kecuali alur memang mengharuskannya.\n\nBedakan tiga jenis feedback: field validation error berarti data lokal perlu diperbaiki; submit error berarti request atau server belum menerima perubahan; success berarti operasi sudah dikonfirmasi. Jangan menyamakan error koneksi dengan \"email tidak valid\". Simpan input user ketika submit gagal bila aman, lalu berikan recovery yang dapat dilakukan.",
    },
    {
      id: "validation-success-state-example",
      type: "code-example",
      title: "Success state dan submit failure memiliki pesan berbeda",
      language: "tsx",
      code: `import { useState } from "react";

type SubmitOutcome = "idle" | "success" | "error";

export function ProfileFeedback() {
  const [outcome, setOutcome] = useState<SubmitOutcome>("idle");

  return (
    <section aria-labelledby="profile-feedback-title">
      <h2 id="profile-feedback-title">Simpan profile</h2>
      <button type="button" onClick={() => setOutcome("success")}>
        Simulasikan simpan
      </button>

      {outcome === "success" ? (
        <p role="status" aria-live="polite">
          Profile tersimpan. Kamu dapat kembali ke dashboard.
        </p>
      ) : null}
      {outcome === "error" ? (
        <p role="alert">
          Profile belum tersimpan karena koneksi bermasalah. Coba lagi.
        </p>
      ) : null}
    </section>
  );
}`,
      explanation:
        "role=status cocok untuk pembaruan non-darurat seperti success state, sedangkan kegagalan submit perlu pesan error yang jelas dan recovery action. Contoh hanya memperlihatkan struktur state; app lokal tetap perlu menguji response server, retry, serta fokus sesudah perubahan UI.",
    },
    {
      id: "validation-success-state-coding-practice",
      type: "coding-practice",
      challengeId: "show-profile-save-success-feedback",
    },
    {
      id: "validation-success-state-quick-check",
      type: "quick-check",
      question:
        "Manakah copy success state yang paling jelas?",
      options: [
        "Profile tersimpan. Kamu dapat kembali ke dashboard.",
        "Oke.",
        "200 Success.",
        "Tidak ada masalah.",
      ],
      correctAnswer:
        "Profile tersimpan. Kamu dapat kembali ke dashboard.",
      explanation:
        "Pesan menyebut tindakan yang selesai dan memberi next action bila berguna. User tidak perlu menebak apakah perubahan benar-benar diterima.",
    },
    {
      id: "validation-success-state-callout",
      type: "callout",
      variant: "important",
      title: "Success client bukan bukti data production aman",
      content:
        "Tampilkan success hanya setelah response yang relevan menyatakan operasi berhasil. Jangan menganggap form sudah aman hanya karena client-side schema lolos. Server perlu memvalidasi, mengautorisasi, dan menyimpan data secara mandiri; UI kemudian menerjemahkan hasilnya menjadi feedback yang aman untuk user.",
    },
    {
      id: "validation-success-state-summary",
      points: [
        "Success state mengonfirmasi tindakan yang benar-benar selesai.",
        "Pesan success sebaiknya menyebut hasil dan next action bila relevan.",
        "Field validation error berbeda dari submit atau server failure.",
        "Simpan input dan tawarkan recovery ketika submit gagal, jika aman.",
        "Berikutnya, Uji Kompetensi menyatukan seluruh flow validation UX yang aksesibel.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "validation-success-state-intro",
      "validation-success-state-example",
      "validation-success-state-coding-practice",
      "validation-success-state-quick-check",
      "validation-success-state-callout",
      "validation-success-state-summary",
    ],
  },
};

export const validationUxAccessibleErrorsAssessmentLesson: Lesson = {
  id: "validation-ux-accessible-errors-assessment",
  trackId: "frontend-engineering",
  moduleId: "validation-ux-accessible-errors",
  title: "Uji Kompetensi Validation UX",
  slug: "validation-ux-accessible-errors-assessment",
  description:
    "Checkpoint untuk menilai kesiapan merancang feedback validasi form yang jelas, aksesibel, dan dapat dipulihkan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Mengevaluasi inline error, summary, focus, pending, dan success state sebagai satu flow",
    "Membedakan invalid field dari submit failure",
    "Menyusun struktur form yang membantu user pulih dari kesalahan",
    "Menentukan langkah QA aksesibilitas pada form lokal",
  ],
  skillTags: ["Validation UX", "Accessibility", "React Hook Form", "Readiness Checkpoint"],
  blocks: [
    {
      id: "validation-ux-accessible-errors-assessment-recap",
      type: "text",
      title: "Checkpoint: user harus tahu apa yang salah, di mana, dan apa yang terjadi berikutnya",
      content:
        "Form yang siap dipakai tidak berhenti pada schema yang valid. Saat ada masalah, user perlu menemukan field yang salah, memahami perbaikannya, dan dapat kembali mengirim form. Saat request berjalan, mereka perlu tahu bahwa submit sedang diproses. Saat berhasil atau gagal, hasilnya perlu dibedakan dengan jelas.\n\nDi checkpoint ini, nilai struktur feedback sebagai satu alur: inline error untuk konteks field, summary untuk gambaran form, focus untuk menemukan feedback, pending untuk mencegah duplicate submit, dan success atau submit error untuk hasil akhir. Tidak ada satu atribut ARIA yang menyelesaikan semuanya; kualitas ada pada hubungan copy, semantic HTML, state, dan pengujian nyata.",
    },
    {
      id: "validation-ux-accessible-errors-assessment-quiz",
      type: "quiz",
      quizId: "validation-ux-accessible-errors-assessment-quiz",
    },
    {
      id: "validation-ux-accessible-errors-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-accessible-profile-validation-checkpoint",
    },
    {
      id: "validation-ux-accessible-errors-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note singkat untuk rekan satu tim tentang form profile yang akan kamu perbaiki. Jelaskan: kapan inline error muncul; apa isi error summary; ke mana fokus dipindahkan setelah submit gagal; kapan button di-disable; bagaimana success dan submit failure dibedakan; serta dua hal yang harus diuji dengan keyboard atau screen reader di local app. Gunakan keputusan yang spesifik, bukan daftar atribut ARIA.",
      placeholder:
        "Inline error muncul setelah field blur atau setelah submit pertama yang gagal, agar form tidak memberi feedback negatif sejak awal. Error summary diletakkan sebelum form dan berisi link ke setiap field yang perlu diperbaiki. Setelah submit gagal, fokus dipindahkan ke summary karena form profile memiliki beberapa field. Button hanya di-disable saat request sedang berjalan dan label berubah menjadi Menyimpan.... Setelah server mengonfirmasi, tampilkan Profile tersimpan dan link ke dashboard. Jika request gagal, tampilkan Profile belum tersimpan karena koneksi bermasalah. Coba lagi. Saya akan menguji urutan tab dari summary ke field serta memastikan error dan status baru dapat ditemukan oleh screen reader.",
      minimumCharacters: 500,
      checklist: [
        "Menjelaskan timing inline error tanpa menyalahkan user.",
        "Menyebut isi summary serta target focus setelah submit gagal.",
        "Membedakan pending, success, dan submit failure.",
        "Menyebut setidaknya dua QA aksesibilitas di local app.",
        "Tidak mengklaim cek otomatis atau preview sudah menguji runtime dan screen reader.",
      ],
      modelAnswer:
        "Inline error muncul setelah user meninggalkan field atau setelah submit pertama gagal. Dengan timing ini, user tidak melihat semua pesan error sebelum mulai mengisi form. Error summary berada sebelum form dan merangkum field yang perlu diperbaiki dengan link menuju setiap field. Setelah submit gagal, fokus dipindahkan ke summary karena user perlu gambaran seluruh masalah terlebih dahulu. Submit button hanya di-disable ketika request sedang berjalan dan text-nya berubah menjadi Menyimpan... agar tidak terjadi submit ganda. Setelah server mengonfirmasi, tampilkan status Profile tersimpan dan tawarkan kembali ke dashboard. Jika request gagal, pesan harus berbeda: Profile belum tersimpan karena koneksi bermasalah. Coba lagi. QA lokal mencakup menjalankan seluruh flow memakai keyboard, memastikan fokus bergerak ke summary lalu link dan input dapat dicapai, serta memeriksa dengan screen reader bahwa status invalid, error, pending, dan success dapat ditemukan. Preview struktur tidak cukup untuk membuktikan behavior ini.",
    },
    {
      id: "validation-ux-accessible-errors-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca guidance form accessibility sebelum memoles project lokal",
      description:
        "Gunakan dokumentasi resmi untuk memeriksa keputusan yang sudah kamu buat. Jangan salin seluruh pattern; pilih bagian yang menjawab masalah form-mu saat ini.",
      links: [
        {
          source: "W3C WAI",
          title: "Forms Tutorial: User Notifications",
          url: "https://www.w3.org/WAI/tutorials/forms/notifications/",
          focus: [
            "Perbedaan feedback keseluruhan dan inline feedback.",
            "Cara menulis error summary yang dapat menuju field terkait.",
            "Hubungan aria-describedby dengan pesan error.",
          ],
          ignoreForNow: [
            "alertdialog untuk flow yang sangat khusus.",
            "Multi-page form orchestration.",
          ],
        },
        {
          source: "W3C WAI",
          title: "Forms Tutorial: Validating Input",
          url: "https://www.w3.org/WAI/tutorials/forms/validation/",
          focus: [
            "Label, required input, dan error identification.",
            "Kapan custom validation perlu memberi notifikasi aksesibel.",
            "Cara memikirkan perbaikan error, bukan hanya penolakan submit.",
          ],
          ignoreForNow: [
            "Flow transaksi legal atau finansial yang membutuhkan confirmation khusus.",
            "Custom control yang belum dipakai project-mu.",
          ],
        },
      ],
      followUpAction:
        "Di Local React App atau Local Next.js App, pilih satu form nyata. Kirim data kosong atau salah, navigasikan hanya dengan keyboard, lalu catat satu perbaikan pada copy, focus, atau state yang kamu temukan. Jangan tandai selesai hanya dari struktur practice workspace.",
    },
    {
      id: "validation-ux-accessible-errors-assessment-summary",
      type: "summary",
      points: [
        "Inline error memberi konteks langsung di field, summary memberi gambaran form-level.",
        "Focus setelah submit gagal membantu user menemukan feedback yang berubah.",
        "Pending mencegah duplicate submit tanpa menggantikan validation atau mengunci recovery.",
        "Success, validation error, dan submit failure adalah state dengan pesan serta tindakan berbeda.",
        "Kamu siap melanjutkan ke Server-State Thinking untuk menangani loading, error, empty, dan success state dari data yang berasal dari server.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "validation-ux-accessible-errors-assessment-recap",
      "validation-ux-accessible-errors-assessment-quiz",
      "validation-ux-accessible-errors-assessment-coding-practice",
      "validation-ux-accessible-errors-assessment-writing-practice",
      "validation-ux-accessible-errors-assessment-documentation-bridge",
      "validation-ux-accessible-errors-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const validationUxAccessibleErrorsAssessmentQuiz: Quiz = {
  id: "validation-ux-accessible-errors-assessment-quiz",
  lessonId: "validation-ux-accessible-errors-assessment",
  title: "Uji Kompetensi Validation UX",
  passingScore: 70,
  questions: [
    {
      id: "validation-ux-inline-placement",
      type: "multiple-choice",
      question:
        "Mengapa inline error tetap dibutuhkan meskipun form sudah memiliki error summary?",
      options: [
        "Karena user perlu konteks perbaikan tepat di dekat field terkait",
        "Agar summary dapat dihapus setelah submit gagal",
        "Karena setiap error harus memakai warna merah",
        "Agar server tidak perlu memvalidasi data",
      ],
      correctAnswer:
        "Karena user perlu konteks perbaikan tepat di dekat field terkait",
      explanation:
        "Summary memberi peta masalah secara keseluruhan, sementara inline error memberi konteks saat user memperbaiki satu field.",
    },
    {
      id: "validation-ux-summary-content",
      type: "multiple-choice",
      question:
        "Apa isi error summary yang paling berguna setelah submit gagal?",
      options: [
        "Daftar masalah yang menyebut field, cara perbaikan, dan link ke field terkait",
        "Raw stack trace dari API",
        "Satu pesan umum tanpa detail",
        "Daftar semua field form, termasuk yang sudah valid",
      ],
      correctAnswer:
        "Daftar masalah yang menyebut field, cara perbaikan, dan link ke field terkait",
      explanation:
        "User perlu dapat memahami masalah dan segera menuju tempat untuk memperbaikinya. Detail internal tidak boleh menjadi copy user-facing.",
    },
    {
      id: "validation-ux-focus-timing",
      type: "multiple-choice",
      question:
        "Kapan focus management paling tepat diterapkan pada form ini?",
      options: [
        "Setelah submit gagal untuk membawa perhatian ke summary atau field invalid pertama",
        "Pada setiap perubahan nilai input",
        "Sebelum user mengisi field pertama",
        "Hanya setelah success state muncul",
      ],
      correctAnswer:
        "Setelah submit gagal untuk membawa perhatian ke summary atau field invalid pertama",
      explanation:
        "Perubahan fokus harus membantu pemulihan dari submit gagal, bukan mengganggu proses input user.",
    },
    {
      id: "validation-ux-pending-meaning",
      type: "multiple-choice",
      question:
        "Apa arti isSubmitting pada form React Hook Form?",
      options: [
        "Submit handler sedang memproses operasi async",
        "Semua field pasti valid",
        "Data sudah tersimpan di server",
        "User tidak boleh lagi mengubah semua input",
      ],
      correctAnswer: "Submit handler sedang memproses operasi async",
      explanation:
        "isSubmitting cocok untuk pending feedback dan duplicate-submit guard. Ia bukan success state dan bukan pengganti validation server-side.",
    },
    {
      id: "validation-ux-recovery-copy",
      type: "multiple-choice",
      question:
        "Mana respons yang tepat ketika request submit gagal karena koneksi, bukan karena email invalid?",
      options: [
        "Profile belum tersimpan karena koneksi bermasalah. Coba lagi.",
        "Email tidak valid.",
        "Form rusak.",
        "Tidak perlu memberi feedback agar user mencoba sendiri.",
      ],
      correctAnswer:
        "Profile belum tersimpan karena koneksi bermasalah. Coba lagi.",
      explanation:
        "Pesan perlu membedakan masalah data field dari kegagalan request dan menawarkan tindakan pemulihan yang sesuai.",
    },
  ],
};

export const showUsefulInlineProfileErrorChallenge: CodingChallenge = {
  id: "show-useful-inline-profile-error",
  lessonId: "validation-inline-errors",
  title: "Show useful inline profile error",
  description:
    "Lengkapi field email dengan invalid state dan pesan inline yang menjelaskan cara memperbaiki input. Preview tidak menjalankan validation React.",
  instructions: [
    "Fokus di tab TSX.",
    "Tambahkan aria-invalid dan aria-describedby saat error email tersedia.",
    "Render pesan error dengan id email-error dan role alert.",
    "Gunakan copy yang menyebut cara memperbaiki email.",
    "Cek otomatis membaca struktur TSX. Preview tidak menjalankan validation React.",
  ],
  starterCode: {
    ...validationUxPracticeCode,
    tsx: `type EmailFieldProps = {
  error?: string;
};

export function EmailField({ error }: EmailFieldProps) {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
      {error ? <p>{error}</p> : null}
    </div>
  );
}`,
  },
  solutionCode: {
    ...validationUxPracticeCode,
    tsx: `type EmailFieldProps = {
  error?: string;
};

export function EmailField({ error }: EmailFieldProps) {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "email-error" : undefined}
      />
      {error ? (
        <p id="email-error" role="alert">
          Masukkan email yang valid, misalnya nama@contoh.com.
        </p>
      ) : null}
    </div>
  );
}`,
  },
  checklist: [
    "Input memberi status invalid saat error tersedia.",
    "Input merujuk pesan error dengan aria-describedby.",
    "Pesan error memiliki id dan role alert.",
    "Copy error menjelaskan cara memperbaiki email.",
    "Preview tidak menjalankan validation React atau menguji teknologi bantu.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "invalid", label: "Input memakai aria-invalid dari error.", type: "contains", valueIncludes: "aria-invalid={Boolean(error)}" },
      { id: "described-by", label: "Input merujuk email-error saat error tersedia.", type: "contains", valueIncludes: 'aria-describedby={error ? "email-error" : undefined}' },
      { id: "error-region", label: "Pesan error memiliki id dan role alert.", type: "contains", valueIncludes: '<p id="email-error" role="alert">' },
      { id: "useful-copy", label: "Pesan menjelaskan format email yang benar.", type: "contains", valueIncludes: "Masukkan email yang valid, misalnya nama@contoh.com." },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca hubungan error field. Preview tidak menjalankan validation React atau pembacaan screen reader.",
    lines: [
      "Field email memiliki invalid state dan hubungan ke pesan error.",
      "Pesan error menjelaskan perbaikan yang dibutuhkan.",
      "Timing error serta pembacaan teknologi bantu perlu diuji di local app.",
    ],
  },
  skillTags: ["React", "Accessibility", "Inline Errors", "Form UX"],
};

export const addProfileErrorSummaryChallenge: CodingChallenge = {
  id: "add-profile-error-summary",
  lessonId: "validation-summary-errors",
  title: "Add profile error summary",
  description:
    "Buat error summary yang merangkum masalah profile dan menghubungkan setiap pesan ke field terkait. Preview tidak menjalankan submit form.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat ErrorSummary yang menerima error displayName dan email.",
    "Jangan render summary bila tidak ada error.",
    "Tambahkan heading, role alert, dan link ke id field terkait.",
    "Cek otomatis membaca struktur TSX. Preview tidak menjalankan submit form.",
  ],
  starterCode: {
    ...validationUxPracticeCode,
    tsx: `type ProfileErrors = {
  displayName?: string;
  email?: string;
};

export function ErrorSummary({ errors }: { errors: ProfileErrors }) {
  return <p>Form perlu diperbaiki.</p>;
}`,
  },
  solutionCode: {
    ...validationUxPracticeCode,
    tsx: `type ProfileErrors = {
  displayName?: string;
  email?: string;
};

export function ErrorSummary({ errors }: { errors: ProfileErrors }) {
  const entries = Object.entries(errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <section role="alert" aria-labelledby="profile-error-summary-title">
      <h2 id="profile-error-summary-title">
        Periksa {entries.length} field sebelum menyimpan
      </h2>
      <ul>
        {entries.map(([field, message]) => (
          <li key={field}>
            <a href={"#" + field}>{message}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}`,
  },
  checklist: [
    "Summary tidak muncul ketika entries error kosong.",
    "Summary memiliki heading serta role alert.",
    "Setiap error menjadi link menuju id field terkait.",
    "Summary tetap melengkapi, bukan menggantikan, inline error.",
    "Preview tidak menjalankan submit form atau perubahan fokus nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "entries", label: "Error diubah menjadi entries untuk dirender.", type: "contains", valueIncludes: "const entries = Object.entries(errors);" },
      { id: "empty-summary", label: "Summary tidak dirender tanpa error.", type: "contains", valueIncludes: "if (entries.length === 0) {\n    return null;\n  }" },
      { id: "alert-summary", label: "Summary memiliki role alert dan heading.", type: "contains", valueIncludes: '<section role="alert" aria-labelledby="profile-error-summary-title">' },
      { id: "field-links", label: "Error summary memberi link menuju field.", type: "contains", valueIncludes: '<a href={"#" + field}>{message}</a>' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca error-summary structure. Preview tidak menjalankan submit form, focus, atau teknologi bantu.",
    lines: [
      "Summary hanya muncul ketika form memiliki error.",
      "Setiap masalah dapat membawa user ke field terkait.",
      "Uji tab order dan notifikasi dinamis pada local app.",
    ],
  },
  skillTags: ["React", "Accessibility", "Error Summary", "Form UX"],
};

export const focusFirstInvalidProfileFieldChallenge: CodingChallenge = {
  id: "focus-first-invalid-profile-field",
  lessonId: "validation-focus-management",
  title: "Focus first invalid profile field",
  description:
    "Tambahkan onInvalid agar form memindahkan fokus ke field profile pertama yang bermasalah setelah submit gagal. Preview tidak menjalankan React Hook Form.",
  instructions: [
    "Fokus di tab TSX.",
    "Ambil setFocus dari useForm dan FieldErrors dari react-hook-form.",
    "Buat onInvalid yang membaca key error pertama.",
    "Gunakan setFocus pada field tersebut dan pasang onInvalid ke handleSubmit.",
    "Cek otomatis membaca struktur TSX. Preview tidak menjalankan React Hook Form.",
  ],
  starterCode: {
    ...validationUxPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
  email: string;
};

export function ProfileForm() {
  const { handleSubmit, register } = useForm<ProfileFormValues>();

  function onValid(values: ProfileFormValues) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onValid)} noValidate>
      <input aria-label="Nama tampilan" {...register("displayName")} />
      <input aria-label="Email" {...register("email")} />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...validationUxPracticeCode,
    tsx: `import { useForm, type FieldErrors } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
  email: string;
};

export function ProfileForm() {
  const { handleSubmit, register, setFocus } = useForm<ProfileFormValues>();

  function onValid(values: ProfileFormValues) {
    console.log(values);
  }

  function onInvalid(errors: FieldErrors<ProfileFormValues>) {
    const firstField = Object.keys(errors)[0] as keyof ProfileFormValues;

    if (firstField) {
      setFocus(firstField);
    }
  }

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
      <input aria-label="Nama tampilan" {...register("displayName")} />
      <input aria-label="Email" {...register("email")} />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  checklist: [
    "useForm menyediakan setFocus dan code memakai type FieldErrors.",
    "onInvalid memilih field error pertama.",
    "setFocus dipanggil hanya ketika field error tersedia.",
    "handleSubmit menerima onValid serta onInvalid.",
    "Preview tidak menjalankan React Hook Form atau menguji focus browser nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "form-import", label: "FieldErrors di-import bersama useForm.", type: "contains", valueIncludes: 'import { useForm, type FieldErrors } from "react-hook-form";' },
      { id: "set-focus", label: "setFocus dibaca dari useForm.", type: "contains", valueIncludes: "const { handleSubmit, register, setFocus } = useForm<ProfileFormValues>();" },
      { id: "invalid-handler", label: "onInvalid memilih key error pertama.", type: "contains", valueIncludes: "function onInvalid(errors: FieldErrors<ProfileFormValues>) {\n    const firstField = Object.keys(errors)[0] as keyof ProfileFormValues;" },
      { id: "focus-call", label: "setFocus dipanggil bila field tersedia.", type: "contains", valueIncludes: "if (firstField) {\n      setFocus(firstField);\n    }" },
      { id: "submit-handler", label: "handleSubmit menerima handler invalid.", type: "contains", valueIncludes: "onSubmit={handleSubmit(onValid, onInvalid)}" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca focus-management structure. Preview tidak menjalankan React Hook Form atau memindahkan fokus browser.",
    lines: [
      "Submit gagal dapat memilih field invalid pertama sebagai target fokus.",
      "Strategi ini harus dibandingkan dengan fokus ke error summary pada form yang panjang.",
      "Uji posisi fokus dan urutan keyboard pada local app.",
    ],
  },
  skillTags: ["React Hook Form", "Accessibility", "Focus Management", "Forms"],
};

export const addProfilePendingSubmitStateChallenge: CodingChallenge = {
  id: "add-profile-pending-submit-state",
  lessonId: "validation-disabled-state",
  title: "Add profile pending submit state",
  description:
    "Gunakan isSubmitting untuk mencegah duplicate submit dan memberi label pending yang jelas. Preview tidak mengirim request profile.",
  instructions: [
    "Fokus di tab TSX.",
    "Baca isSubmitting dari formState useForm.",
    "Buat submit handler async yang memanggil saveProfile.",
    "Disable button submit saat pending dan ubah labelnya.",
    "Cek otomatis membaca struktur TSX. Preview tidak mengirim request profile.",
  ],
  starterCode: {
    ...validationUxPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
};

export function ProfileForm() {
  const { register, handleSubmit } = useForm<ProfileFormValues>();

  function onSubmit(values: ProfileFormValues) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input aria-label="Nama tampilan" {...register("displayName")} />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...validationUxPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
};

async function saveProfile(values: ProfileFormValues) {
  return values;
}

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileFormValues>();

  async function onSubmit(values: ProfileFormValues) {
    await saveProfile(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input aria-label="Nama tampilan" {...register("displayName")} />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Menyimpan..." : "Simpan profile"}
      </button>
    </form>
  );
}`,
  },
  checklist: [
    "isSubmitting dibaca dari formState.",
    "onSubmit async menunggu operasi saveProfile.",
    "Button submit disabled hanya saat pending.",
    "Label pending menjelaskan bahwa form sedang menyimpan.",
    "Preview tidak mengirim request atau menyimpan profile nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "pending-state", label: "isSubmitting dibaca dari formState.", type: "contains", valueIncludes: "formState: { isSubmitting }," },
      { id: "async-submit", label: "Submit handler menunggu saveProfile.", type: "contains", valueIncludes: "async function onSubmit(values: ProfileFormValues) {\n    await saveProfile(values);\n  }" },
      { id: "pending-button", label: "Button disabled saat isSubmitting.", type: "contains", valueIncludes: '<button type="submit" disabled={isSubmitting}>' },
      { id: "pending-copy", label: "Button memiliki copy pending yang jelas.", type: "contains", valueIncludes: '{isSubmitting ? "Menyimpan..." : "Simpan profile"}' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca pending-submit structure. Preview tidak mengirim request atau menyimpan profile nyata.",
    lines: [
      "Button dapat mencegah duplicate submit selama request berjalan.",
      "Label berubah agar user memahami state pending.",
      "Uji response lambat, failure, dan recovery pada local app.",
    ],
  },
  skillTags: ["React Hook Form", "Async UI", "Pending State", "Form UX"],
};

export const showProfileSaveSuccessFeedbackChallenge: CodingChallenge = {
  id: "show-profile-save-success-feedback",
  lessonId: "validation-success-state",
  title: "Show profile save success feedback",
  description:
    "Bedakan feedback success dari submit error dan berikan next action yang jelas setelah profile tersimpan. Preview tidak menyimpan data profile.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat SubmitOutcome dengan idle, success, dan error.",
    "Tampilkan success state dengan role status dan aria-live polite.",
    "Tampilkan submit error yang menjelaskan recovery berbeda dari field validation.",
    "Cek otomatis membaca struktur TSX. Preview tidak menyimpan data profile.",
  ],
  starterCode: {
    ...validationUxPracticeCode,
    tsx: `import { useState } from "react";

export function ProfileFeedback() {
  const [saved, setSaved] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setSaved(true)}>
        Simulasikan simpan
      </button>
      {saved ? <p>Berhasil.</p> : null}
    </section>
  );
}`,
  },
  solutionCode: {
    ...validationUxPracticeCode,
    tsx: `import { useState } from "react";

type SubmitOutcome = "idle" | "success" | "error";

export function ProfileFeedback() {
  const [outcome, setOutcome] = useState<SubmitOutcome>("idle");

  return (
    <section aria-labelledby="profile-feedback-title">
      <h2 id="profile-feedback-title">Simpan profile</h2>
      <button type="button" onClick={() => setOutcome("success")}>
        Simulasikan simpan
      </button>

      {outcome === "success" ? (
        <p role="status" aria-live="polite">
          Profile tersimpan. Kamu dapat kembali ke dashboard.
        </p>
      ) : null}
      {outcome === "error" ? (
        <p role="alert">
          Profile belum tersimpan karena koneksi bermasalah. Coba lagi.
        </p>
      ) : null}
    </section>
  );
}`,
  },
  checklist: [
    "Submit outcome membedakan idle, success, dan error.",
    "Success state memakai role status dan aria-live polite.",
    "Success copy menyebut hasil serta next action.",
    "Submit error menjelaskan failure dan recovery, bukan field invalid.",
    "Preview tidak menyimpan data profile atau menjalankan request nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "outcome-type", label: "Outcome memiliki idle, success, dan error.", type: "contains", valueIncludes: 'type SubmitOutcome = "idle" | "success" | "error";' },
      { id: "outcome-state", label: "State outcome dimulai dari idle.", type: "contains", valueIncludes: 'const [outcome, setOutcome] = useState<SubmitOutcome>("idle");' },
      { id: "success-status", label: "Success memakai status live region.", type: "contains", valueIncludes: '<p role="status" aria-live="polite">' },
      { id: "success-copy", label: "Success menjelaskan hasil dan next action.", type: "contains", valueIncludes: "Profile tersimpan. Kamu dapat kembali ke dashboard." },
      { id: "submit-error", label: "Submit error menjelaskan recovery koneksi.", type: "contains", valueIncludes: "Profile belum tersimpan karena koneksi bermasalah. Coba lagi." },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca success-and-failure structure. Preview tidak menyimpan data profile atau menjalankan request nyata.",
    lines: [
      "Success mengonfirmasi profile tersimpan dan memberi next action.",
      "Submit failure berbeda dari error field validation.",
      "Uji response server, live update, dan recovery di local app.",
    ],
  },
  skillTags: ["React", "Success State", "Error Recovery", "Accessibility"],
};

export const buildAccessibleProfileValidationCheckpointChallenge: CodingChallenge = {
  id: "build-accessible-profile-validation-checkpoint",
  lessonId: "validation-ux-accessible-errors-assessment",
  title: "Build accessible profile validation checkpoint",
  description:
    "Lengkapi checkpoint profile yang menyatukan error summary, fokus invalid, pending submit, dan success feedback. Preview tidak menjalankan form runtime.",
  instructions: [
    "Fokus di tab TSX.",
    "Baca errors, isSubmitting, dan setFocus dari React Hook Form.",
    "Tambahkan ErrorSummary dengan role alert dan link menuju email.",
    "Tangani onInvalid dengan setFocus ke email dan buat button pending.",
    "Tampilkan success feedback dengan role status setelah submit valid.",
    "Cek otomatis membaca struktur TSX. Preview tidak menjalankan form runtime.",
  ],
  starterCode: {
    ...validationUxPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  email: string;
};

export function ProfileForm() {
  const { register, handleSubmit } = useForm<ProfileFormValues>();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...register("email")} />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...validationUxPracticeCode,
    tsx: `import { useState } from "react";
import { useForm, type FieldErrors } from "react-hook-form";

type ProfileFormValues = {
  email: string;
};

function ErrorSummary({ errors }: { errors: FieldErrors<ProfileFormValues> }) {
  if (!errors.email?.message) {
    return null;
  }

  return (
    <section role="alert" aria-labelledby="profile-error-summary-title">
      <h2 id="profile-error-summary-title">Periksa form sebelum menyimpan</h2>
      <a href="#email">Email: {errors.email.message}</a>
    </section>
  );
}

export function ProfileForm() {
  const [saved, setSaved] = useState(false);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>();

  function onValid() {
    setSaved(true);
  }

  function onInvalid(errors: FieldErrors<ProfileFormValues>) {
    if (errors.email) {
      setFocus("email");
    }
  }

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
      <ErrorSummary errors={errors} />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "email-error" : undefined}
        {...register("email")}
      />
      {errors.email?.message ? (
        <p id="email-error" role="alert">
          {errors.email.message}
        </p>
      ) : null}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Menyimpan..." : "Simpan profile"}
      </button>
      {saved ? (
        <p role="status" aria-live="polite">
          Profile tersimpan. Kamu dapat kembali ke dashboard.
        </p>
      ) : null}
    </form>
  );
}`,
  },
  checklist: [
    "Error summary melengkapi inline email error dan memiliki link menuju field.",
    "onInvalid memindahkan fokus ke email saat email error tersedia.",
    "Input memiliki invalid state serta hubungan ke pesan error.",
    "Button pending mencegah duplicate submit dan success state memberi konfirmasi.",
    "Preview tidak menjalankan React Hook Form, request, atau pengujian screen reader.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "form-state", label: "Form membaca errors, isSubmitting, dan setFocus.", type: "contains", valueIncludes: "setFocus,\n    formState: { errors, isSubmitting }," },
      { id: "summary", label: "Error summary memiliki role alert dan link email.", type: "contains", valueIncludes: '<section role="alert" aria-labelledby="profile-error-summary-title">' },
      { id: "summary-link", label: "Summary mengarah ke field email.", type: "contains", valueIncludes: '<a href="#email">Email: {errors.email.message}</a>' },
      { id: "invalid-focus", label: "onInvalid memfokuskan email saat error ada.", type: "contains", valueIncludes: 'if (errors.email) {\n      setFocus("email");\n    }' },
      { id: "pending-button", label: "Button memakai isSubmitting dan copy pending.", type: "contains", valueIncludes: '<button type="submit" disabled={isSubmitting}>\n        {isSubmitting ? "Menyimpan..." : "Simpan profile"}\n      </button>' },
      { id: "success-status", label: "Success feedback memakai role status live region.", type: "contains", valueIncludes: '<p role="status" aria-live="polite">' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca validation-UX checkpoint structure. Preview tidak menjalankan form runtime, request, atau screen reader.",
    lines: [
      "Form memiliki summary, inline error, fokus invalid, pending button, dan success feedback structure.",
      "User-facing error membedakan field yang salah dari hasil submit.",
      "Jalankan QA keyboard, response failure, dan teknologi bantu pada local app.",
    ],
  },
  skillTags: ["React Hook Form", "Accessibility", "Validation UX", "Readiness Checkpoint"],
};
