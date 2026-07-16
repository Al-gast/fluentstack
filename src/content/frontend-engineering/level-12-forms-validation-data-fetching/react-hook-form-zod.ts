import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const reactHookFormZodPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const reactHookFormZodModule: Module = {
  id: "react-hook-form-zod",
  trackId: "frontend-engineering",
  title: "React Hook Form and Zod",
  slug: "react-hook-form-zod",
  description:
    "Membangun form React yang terarah dengan registration, schema Zod, resolver, field errors, submit state, dan schema-derived type.",
  order: 38,
  lessonIds: [
    "react-hook-form-registration",
    "zod-form-schema",
    "react-hook-form-field-errors",
    "react-hook-form-submit-state",
    "react-hook-form-schema-reuse",
    "react-hook-form-zod-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "React",
    "React Hook Form",
    "Zod",
    "Form Validation",
    "TypeScript",
    "Accessible Errors",
  ],
};

export const reactHookFormRegistrationLesson: Lesson = {
  id: "react-hook-form-registration",
  trackId: "frontend-engineering",
  moduleId: "react-hook-form-zod",
  title: "Form Registration",
  slug: "react-hook-form-registration",
  description:
    "Mendaftarkan field dan menangani submit melalui React Hook Form tanpa state useState terpisah untuk setiap input.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan peran React Hook Form pada form React",
    "Memasang react-hook-form di project lokal",
    "Menghubungkan input lewat register dan submit lewat handleSubmit",
    "Membedakan form registration dari aturan schema",
  ],
  skillTags: ["React", "React Hook Form", "Forms", "Registration"],
  blocks: [
    {
      id: "react-hook-form-registration-intro",
      type: "text",
      title: "Form yang lebih besar perlu flow yang tetap terbaca",
      content:
        "Controlled input dengan useState tetap cocok untuk satu input yang langsung mengubah UI. Namun ketika form punya banyak field, default value, validation error, dan submit state, state terpisah untuk setiap field mulai menyulitkan. React Hook Form menyediakan useForm untuk registration field, submit flow, dan form state. Field memakai register, sedangkan submit dibungkus handleSubmit.\n\nTiga package pada module ini memiliki peran berbeda: react-hook-form mengelola form, zod menulis aturan runtime, dan @hookform/resolvers menghubungkan schema ke form. Package tersebut dipasang serta diuji pada Local React App atau Local Next.js App. Workspace FluentStack hanya membaca struktur TSX dan tidak dapat mengetahui apakah npm install, resolver, atau request project lokalmu benar-benar berjalan.",
    },
    {
      id: "react-hook-form-registration-install",
      type: "code-example",
      title: "Pasang React Hook Form terlebih dahulu",
      language: "bash",
      code: `npm install react-hook-form`,
      explanation:
        "Jalankan dari folder project yang memiliki package.json. Pasang satu package ini terlebih dahulu, cek package.json, lalu lanjutkan Zod dan resolver pada lesson berikutnya. Jangan menyalin node_modules atau menganggap package sudah tersedia hanya karena contoh muncul di FluentStack.",
    },
    {
      id: "react-hook-form-registration-example",
      type: "code-example",
      title: "Dua field profile terdaftar pada satu form",
      language: "tsx",
      code: `"use client";

import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
  email: string;
};

export function ProfileForm() {
  const { register, handleSubmit } = useForm<ProfileFormValues>({
    defaultValues: { displayName: "", email: "" },
  });

  function onSubmit(values: ProfileFormValues) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="displayName">Nama tampilan</label>
      <input id="displayName" {...register("displayName")} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...register("email")} />

      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
      explanation:
        "Generic ProfileFormValues membuat field name serta nilai submit dapat diperiksa TypeScript. register menghubungkan input ke form dan handleSubmit membungkus handler. Contoh ini belum menentukan aturan nama atau email; Zod akan mengambil tanggung jawab itu agar registration dan validation tidak tercampur.",
    },
    {
      id: "react-hook-form-registration-coding-practice",
      type: "coding-practice",
      challengeId: "register-profile-form-fields",
    },
    {
      id: "react-hook-form-registration-quick-check",
      type: "quick-check",
      question: "Apa peran register pada contoh form profile?",
      options: [
        "Menghubungkan input tertentu ke form dengan nama field yang jelas",
        "Menyimpan profile langsung ke database",
        "Menggantikan seluruh aturan Zod",
        "Membuat API endpoint otomatis",
      ],
      correctAnswer:
        "Menghubungkan input tertentu ke form dengan nama field yang jelas",
      explanation:
        "register memberi React Hook Form informasi tentang input yang perlu dikelola. Aturan schema dan penyimpanan data merupakan tanggung jawab lain.",
    },
    {
      id: "react-hook-form-registration-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memasang library tanpa alasan yang jelas",
      content:
        "Pilih React Hook Form saat ia mengurangi kerumitan form, bukan hanya agar stack terlihat modern. Untuk satu input yang memengaruhi preview, useState mungkin tetap lebih sederhana. Setelah instalasi lokal, jalankan app dan cek import. FluentStack tidak dapat memeriksa package atau build di perangkatmu.",
    },
    {
      id: "react-hook-form-registration-summary",
      type: "summary",
      points: [
        "React Hook Form mengelola registration, submit flow, dan form state.",
        "register menghubungkan input dengan nama field pada form.",
        "handleSubmit membungkus handler submit form.",
        "Package perlu dipasang serta diuji pada project lokal.",
        "Berikutnya, Zod akan menjadi satu tempat untuk menyimpan aturan data form.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-hook-form-registration-intro",
      "react-hook-form-registration-install",
      "react-hook-form-registration-example",
      "react-hook-form-registration-coding-practice",
      "react-hook-form-registration-quick-check",
      "react-hook-form-registration-callout",
      "react-hook-form-registration-summary",
    ],
  },
};

export const zodFormSchemaLesson: Lesson = {
  id: "zod-form-schema",
  trackId: "frontend-engineering",
  moduleId: "react-hook-form-zod",
  title: "Zod Schema",
  slug: "zod-form-schema",
  description:
    "Menulis schema Zod sebagai sumber aturan runtime untuk nilai form dan menurunkan TypeScript type dari schema yang sama.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan perbedaan TypeScript type dan schema runtime",
    "Membuat object schema untuk profile sederhana",
    "Menurunkan ProfileFormValues dengan z.infer",
    "Menghindari aturan form yang ditulis berulang",
  ],
  skillTags: ["Zod", "TypeScript", "Schema Validation", "Forms"],
  blocks: [
    {
      id: "zod-form-schema-intro",
      type: "text",
      title: "Type membantu editor; schema memeriksa nilai yang benar-benar datang",
      content:
        "TypeScript dapat memberi tahu editor bahwa displayName dan email adalah string, tetapi type tidak berjalan saat user mengirim form atau API menerima request. Schema Zod dapat memeriksa input saat runtime. Contohnya, nama ditrim lalu diberi batas panjang dan email diperiksa formatnya.\n\nSimpan schema di file domain seperti lib/validation/profile-schema.ts. Dari schema tersebut, ambil type dengan z.infer. Form UI serta submit boundary dapat menggunakan definisi yang sama tanpa menyalin field name dan aturan. Ini tidak berarti semua schema harus global. Reuse hanya tepat ketika domain serta aturan datanya memang sama.",
    },
    {
      id: "zod-form-schema-install",
      type: "code-example",
      title: "Pasang Zod setelah React Hook Form",
      language: "bash",
      code: `npm install zod`,
      explanation:
        "Zod menyediakan schema validation. Jalankan perintah ini di project lokal, lalu cek dependency di package.json. Schema tidak boleh menjadi tempat menyimpan credential, raw token, atau aturan authorization user-owned.",
    },
    {
      id: "zod-form-schema-example",
      type: "code-example",
      title: "Schema profile serta type yang diturunkan",
      language: "ts",
      code: `// lib/validation/profile-schema.ts
import { z } from "zod";

export const profileSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, { error: "Nama tampilan minimal 2 karakter." })
    .max(40, { error: "Nama tampilan maksimal 40 karakter." }),
  email: z.email({ error: "Masukkan email yang valid." }),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;`,
      explanation:
        "profileSchema menyimpan aturan runtime, sedangkan z.infer menurunkan type dari output schema. Dengan begitu, form dan submit logic tidak perlu menulis shape profile yang kedua. Cocokkan syntax dengan versi Zod di project lokal dan gunakan dokumentasi resmi ketika menaikkan major version.",
    },
    {
      id: "zod-form-schema-coding-practice",
      type: "coding-practice",
      challengeId: "create-profile-form-schema",
    },
    {
      id: "zod-form-schema-quick-check",
      type: "quick-check",
      question: "Mengapa z.infer<typeof profileSchema> berguna?",
      options: [
        "Type mengikuti schema yang sama sehingga bentuk data tidak ditulis dua kali",
        "Agar Zod tidak perlu memeriksa nilai saat runtime",
        "Agar secret server-only tersedia pada browser",
        "Agar semua input otomatis optional",
      ],
      correctAnswer:
        "Type mengikuti schema yang sama sehingga bentuk data tidak ditulis dua kali",
      explanation:
        "Schema tetap menjalankan validasi runtime. z.infer hanya menurunkan type TypeScript dari schema agar form values dan submit logic memakai shape yang konsisten.",
    },
    {
      id: "zod-form-schema-callout",
      type: "callout",
      variant: "important",
      title: "Client validation membantu UX, bukan authorization",
      content:
        "Schema client membantu user memperbaiki input lebih awal. Request tetap dapat dimodifikasi atau datang dari luar UI. Server/data boundary masih harus memvalidasi input penting dan memeriksa identity serta authorization sebelum perubahan user-owned disimpan.",
    },
    {
      id: "zod-form-schema-summary",
      type: "summary",
      points: [
        "Zod schema memeriksa input saat runtime.",
        "Object schema menyimpan field serta aturan sederhana seperti panjang dan email.",
        "z.infer menurunkan type TypeScript dari schema yang sama.",
        "Schema client tidak menggantikan validation atau authorization pada server.",
        "Berikutnya, schema akan dihubungkan ke field error melalui resolver.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "zod-form-schema-intro",
      "zod-form-schema-install",
      "zod-form-schema-example",
      "zod-form-schema-coding-practice",
      "zod-form-schema-quick-check",
      "zod-form-schema-callout",
      "zod-form-schema-summary",
    ],
  },
};

export const reactHookFormFieldErrorsLesson: Lesson = {
  id: "react-hook-form-field-errors",
  trackId: "frontend-engineering",
  moduleId: "react-hook-form-zod",
  title: "Field Errors",
  slug: "react-hook-form-field-errors",
  description:
    "Menghubungkan schema Zod melalui resolver dan menampilkan error yang spesifik dekat dengan field yang perlu diperbaiki.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan peran zodResolver antara schema dan form",
    "Membaca errors dari formState",
    "Menampilkan pesan error dekat dengan field terkait",
    "Menghubungkan input invalid dengan pesan yang jelas",
  ],
  skillTags: ["React Hook Form", "Zod", "Resolvers", "Form Errors", "Accessibility"],
  blocks: [
    {
      id: "react-hook-form-field-errors-intro",
      type: "text",
      title: "Error harus menyebut apa yang perlu diperbaiki",
      content:
        "Pesan umum seperti Data tidak valid membuat user menebak field yang salah. Field error yang baik muncul dekat input terkait, memakai bahasa yang menjelaskan perbaikan, dan punya hubungan yang dapat dibaca teknologi bantu. React Hook Form menyimpan error di formState.errors. zodResolver menerjemahkan hasil profileSchema ke bentuk error yang dipahami React Hook Form.\n\nResolver tidak membuat aturan baru dan tidak menyimpan data. Ia hanya menghubungkan schema serta form library. Untuk setiap input yang error, gunakan aria-invalid dan aria-describedby yang menunjuk ke pesan. Module berikutnya akan memperdalam UX validasi dan accessible error; di sini fokusnya adalah flow dasar yang jelas untuk satu field.",
    },
    {
      id: "react-hook-form-field-errors-install",
      type: "code-example",
      title: "Pasang resolver setelah Zod tersedia",
      language: "bash",
      code: `npm install @hookform/resolvers`,
      explanation:
        "Package ini menyediakan adapter seperti zodResolver. Jalankan perintah di project lokal dan pastikan package muncul pada dependencies. FluentStack tidak menjalankan npm install atau resolver di practice workspace.",
    },
    {
      id: "react-hook-form-field-errors-example",
      type: "code-example",
      title: "Email field dengan resolver dan error relationship",
      language: "tsx",
      code: `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  profileSchema,
  type ProfileFormValues,
} from "@/lib/validation/profile-schema";

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)} noValidate>
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
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
      explanation:
        "errors.email hanya ada ketika schema menolak nilai field. aria-invalid serta aria-describedby membuat input memberi context tambahan saat error terlihat. noValidate menghindari bubble validasi browser yang berbeda-beda agar pesan app menjadi sumber feedback. Ini bukan alasan menghapus label atau type email yang tetap berguna secara semantik.",
    },
    {
      id: "react-hook-form-field-errors-coding-practice",
      type: "coding-practice",
      challengeId: "render-profile-field-errors",
    },
    {
      id: "react-hook-form-field-errors-quick-check",
      type: "quick-check",
      question: "Apa fungsi zodResolver(profileSchema) pada useForm?",
      options: [
        "Menghubungkan hasil schema ke errors yang dipakai React Hook Form",
        "Menyimpan profile langsung ke database",
        "Mengirim environment variable ke browser",
        "Membuat field HTML tanpa form state",
      ],
      correctAnswer:
        "Menghubungkan hasil schema ke errors yang dipakai React Hook Form",
      explanation:
        "Resolver adalah adapter antara schema dan form library. Ia tidak mengambil alih storage, endpoint, atau server-side authorization.",
    },
    {
      id: "react-hook-form-field-errors-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan membuat error permanen sejak form dibuka",
      content:
        "Tentukan kapan validation berjalan berdasarkan kebutuhan product. Error yang muncul sebelum user menyentuh field dapat terasa menghukum. Mulai dari behavior default library untuk form sederhana, lalu uji flow yang nyata. Jangan hanya mengandalkan warna merah; teks serta hubungan input dan pesan tetap diperlukan.",
    },
    {
      id: "react-hook-form-field-errors-summary",
      type: "summary",
      points: [
        "Resolver menghubungkan Zod schema dan error format React Hook Form.",
        "formState.errors memberi pesan untuk field yang gagal memenuhi schema.",
        "Pesan perlu dekat dengan field dan menjelaskan perbaikan.",
        "aria-invalid serta aria-describedby menghubungkan input dan error.",
        "Berikutnya, submit state akan memberi feedback saat request berjalan atau gagal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-hook-form-field-errors-intro",
      "react-hook-form-field-errors-install",
      "react-hook-form-field-errors-example",
      "react-hook-form-field-errors-coding-practice",
      "react-hook-form-field-errors-quick-check",
      "react-hook-form-field-errors-callout",
      "react-hook-form-field-errors-summary",
    ],
  },
};

export const reactHookFormSubmitStateLesson: Lesson = {
  id: "react-hook-form-submit-state",
  trackId: "frontend-engineering",
  moduleId: "react-hook-form-zod",
  title: "Submit State",
  slug: "react-hook-form-submit-state",
  description:
    "Menangani pending, success, dan error submit agar user tahu apakah perubahan sedang diproses atau belum tersimpan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Menggunakan formState.isSubmitting untuk pending state",
    "Mencegah submit ganda selama request berjalan",
    "Menampilkan success dan error state yang jelas",
    "Menangani error async di submit handler",
  ],
  skillTags: ["React Hook Form", "Async UI", "Submit State", "Error Handling"],
  blocks: [
    {
      id: "react-hook-form-submit-state-intro",
      type: "text",
      title: "Submit punya status yang perlu terlihat",
      content:
        "Setelah user menekan Simpan, UI harus menjawab: apakah request sedang berjalan, apakah perubahan berhasil, dan apa yang dapat dilakukan bila gagal. Tanpa pending state, user bisa mengirim request yang sama berkali-kali. Tanpa success state, user tidak tahu data tersimpan. Tanpa error state, tombol yang gagal terasa seperti tidak melakukan apa-apa.\n\nReact Hook Form menyediakan formState.isSubmitting selama submit handler async berjalan. Gunakan untuk menonaktifkan button dan memberi label pending. Submit handler tetap perlu try/catch untuk operasi async yang gagal. Jangan menampilkan error API mentah ke user; ubah menjadi pesan aman serta dapat ditindaklanjuti dan simpan detail diagnosis di tempat yang tepat.",
    },
    {
      id: "react-hook-form-submit-state-example",
      type: "code-example",
      title: "Pending, success, dan error pada satu submit flow",
      language: "tsx",
      code: `"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ProfileFormValues } from "@/lib/validation/profile-schema";

type SubmitStatus = "idle" | "success" | "error";

async function saveProfile(values: ProfileFormValues) {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return values;
}

export function ProfileForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileFormValues>();

  async function onSubmit(values: ProfileFormValues) {
    setSubmitStatus("idle");

    try {
      await saveProfile(values);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input aria-label="Nama tampilan" {...register("displayName")} />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Menyimpan..." : "Simpan profile"}
      </button>
      {submitStatus === "success" ? <p>Profile tersimpan.</p> : null}
      {submitStatus === "error" ? <p>Profile belum tersimpan. Coba lagi.</p> : null}
    </form>
  );
}`,
      explanation:
        "isSubmitting berasal dari form library dan submitStatus menyimpan hasil setelah request selesai. saveProfile di contoh hanya simulasi. Pada app nyata, panggil server action atau endpoint yang juga memvalidasi data dan memeriksa authorization. Jangan menampilkan success hanya karena button diklik atau validation client lolos.",
    },
    {
      id: "react-hook-form-submit-state-coding-practice",
      type: "coding-practice",
      challengeId: "handle-profile-submit-state",
    },
    {
      id: "react-hook-form-submit-state-quick-check",
      type: "quick-check",
      question: "Mengapa button submit disabled saat isSubmitting true?",
      options: [
        "Agar user tidak mengirim request yang sama berulang saat submit berjalan",
        "Agar Zod berhenti memvalidasi semua input",
        "Agar error API otomatis hilang",
        "Agar schema menjadi secret browser",
      ],
      correctAnswer:
        "Agar user tidak mengirim request yang sama berulang saat submit berjalan",
      explanation:
        "Pending state memberi feedback dan mencegah duplicate request yang dapat menghasilkan data atau UI membingungkan.",
    },
    {
      id: "react-hook-form-submit-state-callout",
      type: "callout",
      variant: "tip",
      title: "Success message mengikuti hasil operasi, bukan klik tombol",
      content:
        "Tampilkan status berhasil setelah operasi yang dianggap berhasil benar-benar selesai. Untuk feature yang memuat ulang data atau berpindah route, tentukan sumber kebenaran setelah submit lalu uji hasil akhir. State client yang optimistis dibahas lebih lanjut pada module Server-State Thinking.",
    },
    {
      id: "react-hook-form-submit-state-summary",
      type: "summary",
      points: [
        "isSubmitting menandai submit async yang masih berjalan.",
        "Button disabled dan label pending mencegah submit ganda.",
        "Success serta error state menjelaskan hasil operasi setelah request selesai.",
        "try/catch menghasilkan failure state yang dapat dipahami user.",
        "Berikutnya, schema dan type akan dipakai ulang agar aturan tidak tersebar di UI serta submit boundary.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-hook-form-submit-state-intro",
      "react-hook-form-submit-state-example",
      "react-hook-form-submit-state-coding-practice",
      "react-hook-form-submit-state-quick-check",
      "react-hook-form-submit-state-callout",
      "react-hook-form-submit-state-summary",
    ],
  },
};

export const reactHookFormSchemaReuseLesson: Lesson = {
  id: "react-hook-form-schema-reuse",
  trackId: "frontend-engineering",
  moduleId: "react-hook-form-zod",
  title: "Schema Reuse",
  slug: "react-hook-form-schema-reuse",
  description:
    "Menggunakan satu schema serta schema-derived type untuk form UI dan data boundary tanpa menduplikasi aturan profile.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menempatkan schema pada module domain yang dapat diimport",
    "Mengimpor schema-derived type ke form dan submit logic",
    "Membedakan reuse yang berguna dari abstraction berlebihan",
    "Memvalidasi data lagi pada boundary yang menerima input",
  ],
  skillTags: ["Zod", "TypeScript", "Code Organization", "Forms", "Reuse"],
  blocks: [
    {
      id: "react-hook-form-schema-reuse-intro",
      type: "text",
      title: "Satu aturan perlu satu rumah yang mudah ditemukan",
      content:
        "Form profile dapat muncul pada settings page, onboarding, atau modal kecil. Jika setiap component menulis ulang field serta aturan, perubahan seperti batas nama dari 40 ke 60 karakter mudah membuat UI berbeda. Simpan profileSchema dan ProfileFormValues di satu module validation, lalu import yang diperlukan oleh form serta submit boundary.\n\nReuse bukan berarti satu schema global untuk seluruh aplikasi. Profile update, password change, dan admin invite bisa memiliki aturan serta authorization berbeda. Reuse ketika domainnya sama. Type yang diturunkan membantu editor, tetapi safeParse atau parse masih diperlukan ketika boundary menerima data yang belum dapat dipercaya saat runtime.",
    },
    {
      id: "react-hook-form-schema-reuse-example",
      type: "code-example",
      title: "Form dan service memakai schema profile yang sama",
      language: "tsx",
      code: `// lib/validation/profile-schema.ts
import { z } from "zod";

export const profileSchema = z.object({
  displayName: z.string().trim().min(2).max(40),
  email: z.email(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

// components/profile-form.tsx
const form = useForm<ProfileFormValues>({
  resolver: zodResolver(profileSchema),
});

// lib/services/update-profile.ts
export async function updateProfile(values: ProfileFormValues) {
  const parsed = profileSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("Data profile tidak valid.");
  }

  return persistProfile(parsed.data);
}`,
      explanation:
        "Form memakai resolver untuk feedback field. Data boundary menjalankan safeParse lagi sebelum persistence. Pada feature user-owned, identity dan authorization server-side tetap diperlukan. Contoh memperlihatkan satu source of truth untuk domain profile, bukan pola untuk memaksa semua form memakai schema yang sama.",
    },
    {
      id: "react-hook-form-schema-reuse-coding-practice",
      type: "coding-practice",
      challengeId: "reuse-profile-schema-type",
    },
    {
      id: "react-hook-form-schema-reuse-quick-check",
      type: "quick-check",
      question:
        "Mengapa updateProfile tetap menjalankan safeParse walaupun UI memakai zodResolver?",
      options: [
        "Data yang mencapai boundary tidak boleh dipercaya hanya dari validation client",
        "Agar semua user dapat membaca profile lain",
        "Karena type TypeScript otomatis memvalidasi runtime",
        "Karena resolver tidak boleh dipakai pada form",
      ],
      correctAnswer:
        "Data yang mencapai boundary tidak boleh dipercaya hanya dari validation client",
      explanation:
        "Client validation memperbaiki UX. Server atau data boundary tetap memeriksa input penting dan melakukan identity/authorization sesuai kebutuhan feature.",
    },
    {
      id: "react-hook-form-schema-reuse-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Shared schema bukan alasan menambah banyak flag",
      content:
        "Jika dua feature mulai membutuhkan optional field atau validation rule yang bertentangan, pecah schema dengan nama yang menjelaskan tujuan. Schema yang kecil dan domain-specific lebih mudah dibaca daripada satu object besar yang mencoba menangani setiap variasi form.",
    },
    {
      id: "react-hook-form-schema-reuse-summary",
      type: "summary",
      points: [
        "Schema dan z.infer type sebaiknya tinggal pada module domain yang jelas.",
        "Form memakai resolver, sedangkan data boundary memvalidasi input kembali sebelum operasi penting.",
        "Reuse mengurangi duplicated rule antara UI dan submit logic.",
        "Pecah schema jika domain atau aturan feature mulai berbeda.",
        "Berikutnya, Uji Kompetensi memeriksa seluruh flow form dari registration hingga schema reuse.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-hook-form-schema-reuse-intro",
      "react-hook-form-schema-reuse-example",
      "react-hook-form-schema-reuse-coding-practice",
      "react-hook-form-schema-reuse-quick-check",
      "react-hook-form-schema-reuse-callout",
      "react-hook-form-schema-reuse-summary",
    ],
  },
};

export const reactHookFormZodAssessmentLesson: Lesson = {
  id: "react-hook-form-zod-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-hook-form-zod",
  title: "Uji Kompetensi React Hook Form and Zod",
  slug: "react-hook-form-zod-assessment",
  description:
    "Memeriksa readiness untuk form terketik dengan registration, schema resolver, field errors, submit state, dan schema reuse yang tidak menduplikasi aturan.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 80,
  objectives: [
    "Memilih tanggung jawab React Hook Form, Zod, dan resolver",
    "Menyusun field error serta submit state yang jelas",
    "Menggunakan schema-derived type di beberapa boundary",
    "Menjelaskan validation client dan server sebagai lapisan berbeda",
  ],
  skillTags: ["React Hook Form", "Zod", "Form Validation", "TypeScript", "Readiness Checkpoint"],
  blocks: [
    {
      id: "react-hook-form-zod-assessment-recap",
      type: "text",
      title: "Checkpoint: form yang baik memberi arah sebelum dan sesudah submit",
      content:
        "React Hook Form mendaftarkan field dan menyimpan form state. Zod mendefinisikan aturan data runtime. Resolver menerjemahkan schema ke error per field. UI menampilkan error dekat input dan memberi pending, success, atau failure state. Schema serta type dipusatkan supaya aturan tidak menyebar.\n\nAssessment ini tidak menginstal package, menjalankan resolver, mengirim request, atau memeriksa app lokal. Auto-validation hanya membaca struktur TSX. Gunakan checkpoint untuk memutuskan apakah kamu siap meng-upgrade satu form pada Local App, lalu uji keyboard, invalid input, valid submit, dan hasil data nyata sebelum menandai pekerjaan lokal selesai.",
    },
    {
      id: "react-hook-form-zod-assessment-quiz",
      type: "quiz",
      quizId: "react-hook-form-zod-assessment-quiz",
    },
    {
      id: "react-hook-form-zod-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-validated-profile-form-checkpoint",
    },
    {
      id: "react-hook-form-zod-assessment-local-checklist",
      type: "text",
      title: "Self-review form pada project lokal",
      content:
        "Periksa secara manual ketika meng-upgrade satu form pada project lokal:\n\n- react-hook-form, zod, dan @hookform/resolvers muncul di package.json.\n- Schema berada pada module domain yang jelas dan type diambil lewat z.infer.\n- useForm memakai zodResolver untuk schema yang tepat.\n- Label, input, dan pesan error dapat dipahami saat diuji keyboard.\n- Submit button menunjukkan pending state dan tidak dapat diklik berulang.\n- Success serta failure memberi feedback yang dapat ditindaklanjuti.\n- Server/data boundary memvalidasi data penting lagi serta memeriksa identity bila data user-owned.\n- README atau implementation note menjelaskan schema tanpa credential atau data user nyata.\n\nFluentStack tidak dapat melihat dependency, source code, browser, atau request pada projectmu. Tandai checklist berdasarkan pengujian nyata, bukan karena daftar sudah dibaca.",
    },
    {
      id: "react-hook-form-zod-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note 120-180 kata untuk rekan developer tentang satu form profile. Jelaskan field yang didaftarkan, schema yang dipakai, bagaimana resolver menghasilkan field errors, pending/success/error state, lokasi type yang diturunkan dari schema, dan satu validation yang tetap dilakukan server-side. Jangan sertakan credential atau data user nyata.",
      placeholder:
        "Form profile mendaftarkan ... Schema ... memeriksa ... Resolver ... Saat submit ... Type ProfileFormValues berasal dari ... Di server kami tetap ...",
      minimumWords: 120,
      modelAnswer:
        "Form profile mendaftarkan displayName dan email dengan React Hook Form. profileSchema berada di lib/validation/profile-schema.ts dan memeriksa nama minimal dua karakter serta format email. useForm memakai zodResolver(profileSchema), sehingga errors dapat ditampilkan dekat input yang sesuai. Input menandai aria-invalid dan menghubungkan pesan lewat aria-describedby saat ada error. Selama request berjalan, isSubmitting menonaktifkan tombol Simpan dan mengubah label menjadi Menyimpan. Setelah request selesai, UI menampilkan status berhasil atau pesan gagal yang menyarankan user mencoba lagi. Type ProfileFormValues berasal dari z.infer<typeof profileSchema> dan dipakai form serta updateProfile. Di server kami tetap menjalankan safeParse pada data yang masuk dan memeriksa identity user sebelum menyimpan perubahan profile.",
      checklist: [
        "Menyebut registration field dan schema yang jelas.",
        "Menjelaskan peran resolver serta field errors.",
        "Menyebut pending, success, dan error submit state.",
        "Menyebut z.infer atau schema-derived type yang dapat digunakan ulang.",
        "Menyebut validation atau authorization server-side sebagai lapisan terpisah.",
      ],
    },
    {
      id: "react-hook-form-zod-assessment-docs",
      type: "documentation-bridge",
      title: "Baca docs untuk satu form yang sedang kamu perbaiki",
      description:
        "Buka source resmi ini ketika menerapkan form lokal. Fokus pada registration, resolver, errors, submit, dan schema sederhana. Jangan langsung melompat ke dynamic field arrays, wizard form, custom validation pipeline, atau server action yang belum dibutuhkan.",
      links: [
        {
          source: "React Hook Form Docs",
          title: "Getting Started",
          url: "https://react-hook-form.com/get-started",
          focus: ["useForm", "register", "handleSubmit"],
          ignoreForNow: ["Controller", "dynamic field arrays", "advanced configuration"],
        },
        {
          source: "React Hook Form Docs",
          title: "register",
          url: "https://react-hook-form.com/docs/useform/register",
          focus: ["nama field", "menghubungkan input", "option sederhana"],
          ignoreForNow: ["custom ref integration", "nested field path kompleks"],
        },
        {
          source: "React Hook Form Docs",
          title: "formState",
          url: "https://react-hook-form.com/docs/useform/formstate",
          focus: ["errors", "isSubmitting", "status form UI"],
          ignoreForNow: ["semua state flag", "performance tuning mendalam"],
        },
        {
          source: "React Hook Form Resolvers",
          title: "Zod resolver quickstart",
          url: "https://github.com/react-hook-form/resolvers",
          focus: ["install resolver", "zodResolver(schema)", "schema type inference"],
          ignoreForNow: ["resolver selain Zod", "advanced resolver option"],
        },
        {
          source: "Zod Docs",
          title: "Basic usage",
          url: "https://zod.dev/basics",
          focus: ["object schema", "safeParse", "z.infer"],
          ignoreForNow: ["transform", "async refinement", "schema composition kompleks"],
        },
      ],
      followUpAction:
        "Pilih satu form profile atau settings pada Local App. Tambahkan schema, resolver, dua field error, pending submit, serta implementation note. Jalankan app, uji invalid dan valid input dengan keyboard, lalu tulis hasil tanpa credential atau data user nyata.",
    },
    {
      id: "react-hook-form-zod-assessment-summary",
      type: "summary",
      points: [
        "React Hook Form mengelola registration, submit flow, dan form state.",
        "Zod schema memberi aturan runtime dan z.infer memberi type yang mengikuti schema.",
        "Resolver, field errors, serta submit state membuat form memberi feedback jelas.",
        "Client validation adalah lapisan UX; server/data boundary tetap memvalidasi serta mengotorisasi input penting.",
        "Berikutnya, kamu akan memperdalam Validation UX and Accessible Errors agar form juga nyaman digunakan semua user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-hook-form-zod-assessment-recap",
      "react-hook-form-zod-assessment-quiz",
      "react-hook-form-zod-assessment-coding-practice",
      "react-hook-form-zod-assessment-local-checklist",
      "react-hook-form-zod-assessment-writing-practice",
      "react-hook-form-zod-assessment-docs",
      "react-hook-form-zod-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactHookFormZodAssessmentQuiz: Quiz = {
  id: "react-hook-form-zod-assessment-quiz",
  lessonId: "react-hook-form-zod-assessment",
  title: "Uji Kompetensi React Hook Form and Zod",
  passingScore: 70,
  questions: [
    {
      id: "rhf-purpose",
      type: "multiple-choice",
      question: "Apa tanggung jawab utama React Hook Form?",
      options: [
        "Mengelola registration field, submit flow, dan form state",
        "Menjadi database profile user",
        "Menggantikan semua authorization server-side",
        "Membuat schema runtime tanpa library lain",
      ],
      correctAnswer: "Mengelola registration field, submit flow, dan form state",
      explanation:
        "React Hook Form mengelola perilaku form di React. Zod menangani schema runtime, sedangkan database dan authorization tetap berada di boundary server/data yang tepat.",
    },
    {
      id: "register-purpose",
      type: "multiple-choice",
      question: "Apa hasil dari {...register(\"email\")} pada input email?",
      options: [
        "Input email didaftarkan pada form dengan nama field email",
        "Email langsung disimpan tanpa submit",
        "Schema Zod dihapus dari form",
        "Secret email provider masuk browser",
      ],
      correctAnswer: "Input email didaftarkan pada form dengan nama field email",
      explanation:
        "register menghubungkan input dengan React Hook Form. Penyimpanan dan schema validation punya flow terpisah.",
    },
    {
      id: "zod-runtime",
      type: "multiple-choice",
      question: "Apa nilai tambah utama schema Zod dibanding type TypeScript saja?",
      options: [
        "Schema dapat memeriksa input saat runtime, sedangkan type membantu editor saat development",
        "Schema membuat label HTML tidak diperlukan",
        "Schema otomatis memberi user hak akses data",
        "Schema membuat browser tidak menerima input",
      ],
      correctAnswer:
        "Schema dapat memeriksa input saat runtime, sedangkan type membantu editor saat development",
      explanation:
        "Type tidak berjalan pada runtime. Schema dapat parse atau safeParse data yang belum tepercaya dan menghasilkan informasi error.",
    },
    {
      id: "resolver-role",
      type: "multiple-choice",
      question: "Apa fungsi zodResolver(profileSchema) pada useForm?",
      options: [
        "Menerjemahkan validasi schema menjadi error yang dapat dibaca React Hook Form",
        "Membuat endpoint POST otomatis",
        "Mengirim nilai form menjadi environment variable",
        "Menyimpan session localStorage",
      ],
      correctAnswer:
        "Menerjemahkan validasi schema menjadi error yang dapat dibaca React Hook Form",
      explanation:
        "Resolver adalah adapter antara schema dan form library. Ia tidak menyimpan data atau menggantikan endpoint/server action.",
    },
    {
      id: "field-error-placement",
      type: "multiple-choice",
      question: "Di mana field error paling membantu pada form sederhana?",
      options: [
        "Dekat input terkait, dengan teks yang menjelaskan perbaikan",
        "Hanya pada console developer",
        "Di button submit tanpa menyebut field",
        "Dalam warna merah tanpa teks",
      ],
      correctAnswer:
        "Dekat input terkait, dengan teks yang menjelaskan perbaikan",
      explanation:
        "Pesan dekat field mengurangi tebakan. Hubungkan input dan pesan dengan atribut aksesibilitas ketika ada error; warna saja tidak cukup.",
    },
    {
      id: "submit-pending",
      type: "multiple-choice",
      question: "Apa penggunaan isSubmitting yang tepat?",
      options: [
        "Menonaktifkan submit dan menunjukkan pending state selama request berjalan",
        "Menghapus schema error saat user mengetik satu huruf",
        "Menandai request pasti berhasil sebelum selesai",
        "Menggantikan try/catch pada async submit handler",
      ],
      correctAnswer:
        "Menonaktifkan submit dan menunjukkan pending state selama request berjalan",
      explanation:
        "isSubmitting memberi feedback dan mencegah submit ganda. Kegagalan async tetap perlu ditangani agar user menerima failure state yang tepat.",
    },
    {
      id: "schema-reuse",
      type: "multiple-choice",
      question: "Mengapa ProfileFormValues diturunkan dari profileSchema?",
      options: [
        "Agar UI dan submit logic memakai bentuk data sama tanpa type duplikat",
        "Agar input luar UI tidak perlu divalidasi lagi",
        "Agar schema menyimpan password user",
        "Agar setiap feature memakai schema profile",
      ],
      correctAnswer:
        "Agar UI dan submit logic memakai bentuk data sama tanpa type duplikat",
      explanation:
        "Schema-derived type mengurangi drift. Input dari luar UI tetap perlu divalidasi pada boundary yang menerimanya.",
    },
    {
      id: "client-server-validation",
      type: "true-false",
      question:
        "Jika form client memakai Zod dan zodResolver, server tidak perlu memvalidasi input atau memeriksa authorization.",
      correctAnswer: false,
      explanation:
        "Client validation memperbaiki UX, tetapi request dapat dimodifikasi atau berasal dari luar UI. Server/data boundary tetap memvalidasi input penting dan memeriksa identity/authorization.",
    },
  ],
};

export const registerProfileFormFieldsChallenge: CodingChallenge = {
  id: "register-profile-form-fields",
  lessonId: "react-hook-form-registration",
  title: "Register profile form fields",
  description:
    "Lengkapi form profile agar displayName dan email terdaftar melalui React Hook Form lalu disubmit melalui handleSubmit.",
  instructions: [
    "Fokus di tab TSX.",
    "Workspace membaca struktur React Hook Form, bukan menjalankan package atau form runtime.",
    "Gunakan useForm dengan generic ProfileFormValues.",
    "Hubungkan form ke handleSubmit(onSubmit).",
    "Register input displayName dan email.",
    "Cek otomatis membaca struktur TSX. Preview tidak menginstal react-hook-form atau mengirim form.",
  ],
  starterCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
  email: string;
};

export function ProfileForm() {
  const form = useForm<ProfileFormValues>();

  function onSubmit(values: ProfileFormValues) {
    console.log(values);
  }

  return (
    <form>
      <input id="displayName" />
      <input id="email" type="email" />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
  email: string;
};

export function ProfileForm() {
  const { register, handleSubmit } = useForm<ProfileFormValues>();

  function onSubmit(values: ProfileFormValues) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="displayName" {...register("displayName")} />
      <input id="email" type="email" {...register("email")} />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  checklist: [
    "ProfileFormValues memiliki displayName dan email sebagai string.",
    "useForm memakai generic ProfileFormValues.",
    "Form memakai handleSubmit(onSubmit).",
    "Kedua input memakai register dengan nama yang sesuai.",
    "Preview tidak menjalankan react-hook-form atau mengirim form nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "form-values", label: "ProfileFormValues memiliki dua field profile.", type: "contains", valueIncludes: 'type ProfileFormValues = {\n  displayName: string;\n  email: string;\n};' },
      { id: "use-form", label: "useForm memakai ProfileFormValues.", type: "contains", valueIncludes: 'const { register, handleSubmit } = useForm<ProfileFormValues>();' },
      { id: "form-submit", label: "Form memakai handleSubmit(onSubmit).", type: "contains", valueIncludes: '<form onSubmit={handleSubmit(onSubmit)}>' },
      { id: "register-name", label: "Nama tampilan memakai register.", type: "contains", valueIncludes: '<input id="displayName" {...register("displayName")} />' },
      { id: "register-email", label: "Email memakai register.", type: "contains", valueIncludes: '<input id="email" type="email" {...register("email")} />' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca struktur registration. Preview tidak memuat react-hook-form, menjalankan resolver, atau mengirim data form nyata.",
    lines: [
      "displayName dan email terdaftar pada satu form profile.",
      "handleSubmit membungkus handler submit form.",
      "Package perlu dipasang serta diuji pada project lokal.",
    ],
  },
  skillTags: ["React", "React Hook Form", "Forms", "Registration"],
};

export const createProfileFormSchemaChallenge: CodingChallenge = {
  id: "create-profile-form-schema",
  lessonId: "zod-form-schema",
  title: "Create profile form schema",
  description:
    "Lengkapi schema Zod untuk nama tampilan dan email, lalu turunkan type form dari schema itu.",
  instructions: [
    "Fokus di tab TSX.",
    "Workspace membaca bentuk schema, bukan menjalankan Zod pada input nyata.",
    "Tambahkan profileSchema sebagai z.object untuk displayName dan email.",
    "Nama tampilan perlu trim serta batas dua hingga empat puluh karakter.",
    "Gunakan z.email dan z.infer untuk ProfileFormValues.",
    "Cek otomatis membaca struktur TSX. Preview tidak menginstal atau menjalankan Zod.",
  ],
  starterCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { z } from "zod";

export const profileSchema = z.object({});

export type ProfileFormValues = unknown;`,
  },
  solutionCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { z } from "zod";

export const profileSchema = z.object({
  displayName: z.string().trim().min(2).max(40),
  email: z.email(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;`,
  },
  checklist: [
    "profileSchema menyimpan dua field profile pada z.object.",
    "displayName memiliki trim dan batas panjang sederhana.",
    "email memakai z.email.",
    "ProfileFormValues diturunkan dengan z.infer, bukan ditulis ulang.",
    "Preview tidak menjalankan Zod atau memvalidasi input user nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "zod-import", label: "Schema mengimpor z dari Zod.", type: "contains", valueIncludes: 'import { z } from "zod";' },
      { id: "profile-schema", label: "profileSchema memiliki displayName serta email.", type: "contains", valueIncludes: 'export const profileSchema = z.object({\n  displayName: z.string().trim().min(2).max(40),\n  email: z.email(),\n});' },
      { id: "inferred-type", label: "ProfileFormValues diturunkan dari schema.", type: "contains", valueIncludes: 'export type ProfileFormValues = z.infer<typeof profileSchema>;' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca struktur Zod schema. Preview tidak menginstal Zod, menjalankan parse, atau memvalidasi nilai form nyata.",
    lines: [
      "Schema memiliki aturan untuk nama tampilan dan email.",
      "Type form mengikuti schema lewat z.infer.",
      "Runtime validation sebenarnya perlu dijalankan di project lokal atau data boundary.",
    ],
  },
  skillTags: ["Zod", "TypeScript", "Schema Validation", "Forms"],
};

export const renderProfileFieldErrorsChallenge: CodingChallenge = {
  id: "render-profile-field-errors",
  lessonId: "react-hook-form-field-errors",
  title: "Render profile field errors",
  description:
    "Lengkapi field email dengan resolver, formState errors, atribut aksesibilitas, dan pesan error yang dekat dengan input.",
  instructions: [
    "Fokus di tab TSX.",
    "Workspace memeriksa struktur error UI, bukan menjalankan resolver atau error interaktif.",
    "Hubungkan useForm ke zodResolver(profileSchema).",
    "Ambil errors dari formState dan register field email.",
    "Tambahkan aria-invalid, aria-describedby, dan pesan email-error dengan role alert.",
    "Cek otomatis membaca struktur TSX. Preview tidak memuat package atau mengirim form nyata.",
  ],
  starterCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type ProfileFormValues = {
  email: string;
};

declare const profileSchema: unknown;

export function ProfileForm() {
  const { register, handleSubmit } = useForm<ProfileFormValues>();

  return (
    <form onSubmit={handleSubmit(console.log)} noValidate>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type ProfileFormValues = {
  email: string;
};

declare const profileSchema: unknown;

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)} noValidate>
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
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  checklist: [
    "useForm memakai zodResolver(profileSchema).",
    "errors dibaca dari formState.",
    "Input email memakai register dan menandai invalid state saat error ada.",
    "Pesan error punya id yang sama dengan aria-describedby serta role alert.",
    "Preview tidak menjalankan resolver atau validasi interaktif.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "resolver", label: "Form memakai zodResolver(profileSchema).", type: "contains", valueIncludes: 'resolver: zodResolver(profileSchema),' },
      { id: "form-errors", label: "errors dibaca dari formState.", type: "contains", valueIncludes: 'formState: { errors },' },
      { id: "email-aria", label: "Input email menghubungkan invalid state dan pesan error.", type: "contains", valueIncludes: 'aria-invalid={Boolean(errors.email)}\n        aria-describedby={errors.email ? "email-error" : undefined}\n        {...register("email")}' },
      { id: "email-message", label: "Pesan email memiliki id dan role alert.", type: "contains", valueIncludes: '<p id="email-error" role="alert">\n          {errors.email.message}\n        </p>' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca error UI. Preview tidak menjalankan resolver, menghitung errors, atau mengirim profile ke server.",
    lines: [
      "Schema resolver diarahkan ke form profile.",
      "Input email dan pesan error mempunyai hubungan yang jelas.",
      "Error interaktif perlu diuji pada app lokal dengan package yang terpasang.",
    ],
  },
  skillTags: ["React Hook Form", "Zod", "Field Errors", "Accessibility"],
};

export const handleProfileSubmitStateChallenge: CodingChallenge = {
  id: "handle-profile-submit-state",
  lessonId: "react-hook-form-submit-state",
  title: "Handle profile submit state",
  description:
    "Lengkapi submit handler async dengan isSubmitting dan success/error state agar button serta feedback mengikuti hasil request.",
  instructions: [
    "Fokus di tab TSX.",
    "Workspace membaca struktur async UI, bukan mengirim request atau menyimpan profile nyata.",
    "Tambahkan SubmitStatus serta state submitStatus.",
    "Ambil isSubmitting dari formState.",
    "Tangani saveProfile dengan try/catch lalu tampilkan success atau error state.",
    "Cek otomatis membaca struktur TSX. Preview tidak menjalankan React Hook Form atau API request.",
  ],
  starterCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
};

async function saveProfile(values: ProfileFormValues) {
  return values;
}

export function ProfileForm() {
  const { register, handleSubmit } = useForm<ProfileFormValues>();

  async function onSubmit(values: ProfileFormValues) {
    await saveProfile(values);
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
    ...reactHookFormZodPracticeCode,
    tsx: `import { useState } from "react";
import { useForm } from "react-hook-form";

type ProfileFormValues = {
  displayName: string;
};

type SubmitStatus = "idle" | "success" | "error";

async function saveProfile(values: ProfileFormValues) {
  return values;
}

export function ProfileForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileFormValues>();

  async function onSubmit(values: ProfileFormValues) {
    setSubmitStatus("idle");

    try {
      await saveProfile(values);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input aria-label="Nama tampilan" {...register("displayName")} />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Menyimpan..." : "Simpan profile"}
      </button>
      {submitStatus === "success" ? <p>Profile tersimpan.</p> : null}
      {submitStatus === "error" ? <p>Profile belum tersimpan. Coba lagi.</p> : null}
    </form>
  );
}`,
  },
  checklist: [
    "SubmitStatus membedakan idle, success, dan error.",
    "isSubmitting diambil dari formState untuk pending state.",
    "Submit handler memakai try/catch untuk operasi async.",
    "Button disabled saat pending dan UI menjelaskan success/error.",
    "Preview tidak mengirim request atau menyimpan profile nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "submit-status", label: "SubmitStatus memiliki idle, success, dan error.", type: "contains", valueIncludes: 'type SubmitStatus = "idle" | "success" | "error";' },
      { id: "submit-state", label: "Form menyimpan submitStatus dengan useState.", type: "contains", valueIncludes: 'const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");' },
      { id: "is-submitting", label: "isSubmitting dibaca dari formState.", type: "contains", valueIncludes: 'formState: { isSubmitting },' },
      { id: "submit-try-catch", label: "Submit handler mengubah success dan error state.", type: "contains", valueIncludes: 'try {\n      await saveProfile(values);\n      setSubmitStatus("success");\n    } catch {\n      setSubmitStatus("error");\n    }' },
      { id: "pending-button", label: "Button memakai isSubmitting sebagai pending gate.", type: "contains", valueIncludes: '<button type="submit" disabled={isSubmitting}>\n        {isSubmitting ? "Menyimpan..." : "Simpan profile"}\n      </button>' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca submit-state structure. Preview tidak menjalankan React Hook Form, mengirim API request, atau menyimpan profile nyata.",
    lines: [
      "Button dapat menunjukkan pending state dan mencegah submit ganda.",
      "Hasil request dibedakan menjadi success atau error state.",
      "Perilaku async perlu diuji di app lokal dengan endpoint yang aman.",
    ],
  },
  skillTags: ["React Hook Form", "Async UI", "Submit State", "Error Handling"],
};

export const reuseProfileSchemaTypeChallenge: CodingChallenge = {
  id: "reuse-profile-schema-type",
  lessonId: "react-hook-form-schema-reuse",
  title: "Reuse profile schema type",
  description:
    "Lengkapi schema profile dan type turunannya yang dipakai kembali oleh form serta update boundary tanpa menduplikasi shape data.",
  instructions: [
    "Fokus di tab TSX.",
    "Workspace membaca organisasi schema, bukan menjalankan Zod atau menyimpan profile.",
    "Export profileSchema dan ProfileFormValues dari satu module domain.",
    "Gunakan type serta schema itu pada useForm dengan zodResolver.",
    "Gunakan type yang sama pada updateProfile dan validasi dengan safeParse.",
    "Cek otomatis membaca struktur TSX. Preview tidak memuat Zod, resolver, atau persistence nyata.",
  ],
  starterCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { z } from "zod";

export const profileSchema = z.object({
  displayName: z.string(),
  email: z.email(),
});

export type ProfileFormValues = unknown;

export async function updateProfile(values: unknown) {
  return values;
}`,
  },
  solutionCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const profileSchema = z.object({
  displayName: z.string().trim().min(2).max(40),
  email: z.email(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

export const form = useForm<ProfileFormValues>({
  resolver: zodResolver(profileSchema),
});

export async function updateProfile(values: ProfileFormValues) {
  const parsed = profileSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("Data profile tidak valid.");
  }

  return parsed.data;
}`,
  },
  checklist: [
    "profileSchema dan ProfileFormValues berada pada satu domain module.",
    "Form memakai schema serta type yang sama melalui resolver.",
    "updateProfile menerima type yang sama dan menjalankan safeParse.",
    "Tidak ada type profile kedua yang menyalin schema manual.",
    "Preview tidak menjalankan Zod, resolver, atau persistence nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "reused-schema", label: "profileSchema menyimpan aturan displayName dan email.", type: "contains", valueIncludes: 'export const profileSchema = z.object({\n  displayName: z.string().trim().min(2).max(40),\n  email: z.email(),\n});' },
      { id: "reused-type", label: "ProfileFormValues diturunkan dari schema.", type: "contains", valueIncludes: 'export type ProfileFormValues = z.infer<typeof profileSchema>;' },
      { id: "form-resolver", label: "Form memakai schema dan type melalui resolver.", type: "contains", valueIncludes: 'export const form = useForm<ProfileFormValues>({\n  resolver: zodResolver(profileSchema),\n});' },
      { id: "service-boundary", label: "updateProfile menerima type sama dan menjalankan safeParse.", type: "contains", valueIncludes: 'export async function updateProfile(values: ProfileFormValues) {\n  const parsed = profileSchema.safeParse(values);' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca schema reuse structure. Preview tidak menjalankan Zod, resolver, persistence, atau authorization production.",
    lines: [
      "Form dan update boundary menggunakan schema-derived type yang sama.",
      "Resolver dipakai untuk UX form, safeParse dipakai lagi pada data boundary.",
      "Runtime dan authorization perlu diuji pada Local App serta server sebenarnya.",
    ],
  },
  skillTags: ["Zod", "TypeScript", "Schema Reuse", "React Hook Form"],
};

export const buildValidatedProfileFormCheckpointChallenge: CodingChallenge = {
  id: "build-validated-profile-form-checkpoint",
  lessonId: "react-hook-form-zod-assessment",
  title: "Build validated profile form checkpoint",
  description:
    "Lengkapi checkpoint form profile yang menyatukan schema, resolver, error email, dan pending button tanpa mengklaim runtime sudah berjalan.",
  instructions: [
    "Fokus di tab TSX.",
    "Checkpoint membaca struktur form; package, resolver, dan API tidak dijalankan di workspace.",
    "Tambahkan profileSchema dan ProfileFormValues dari Zod.",
    "Hubungkan useForm ke zodResolver serta baca errors dan isSubmitting dari formState.",
    "Tambahkan email error relationship dan button pending state.",
    "Cek otomatis membaca struktur TSX. Preview tidak menginstal package, memvalidasi input, atau mengirim request nyata.",
  ],
  starterCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { useForm } from "react-hook-form";

export function ProfileForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input aria-label="Email" type="email" {...register("email")} />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...reactHookFormZodPracticeCode,
    tsx: `import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const profileSchema = z.object({
  displayName: z.string().trim().min(2).max(40),
  email: z.email(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)} noValidate>
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
    </form>
  );
}`,
  },
  checklist: [
    "Schema dan ProfileFormValues menjelaskan bentuk profile pada satu lokasi.",
    "useForm memakai zodResolver dan membaca errors serta isSubmitting.",
    "Input email terhubung ke pesan error yang jelas.",
    "Button submit memberi pending feedback dan mencegah submit ganda.",
    "Preview tidak menjalankan package, validation, atau request form nyata.",
  ],
  reactPractice: { mode: "structure", framework: "react" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "checkpoint-schema", label: "Checkpoint memiliki schema profile dan type turunan.", type: "contains", valueIncludes: 'const profileSchema = z.object({\n  displayName: z.string().trim().min(2).max(40),\n  email: z.email(),\n});\n\ntype ProfileFormValues = z.infer<typeof profileSchema>;' },
      { id: "checkpoint-resolver", label: "useForm memakai resolver serta membaca errors dan isSubmitting.", type: "contains", valueIncludes: 'formState: { errors, isSubmitting },\n  } = useForm<ProfileFormValues>({\n    resolver: zodResolver(profileSchema),\n  });' },
      { id: "checkpoint-error", label: "Email memiliki invalid state dan pesan error terhubung.", type: "contains", valueIncludes: 'aria-invalid={Boolean(errors.email)}\n        aria-describedby={errors.email ? "email-error" : undefined}\n        {...register("email")}' },
      { id: "checkpoint-pending", label: "Submit button memakai isSubmitting sebagai pending gate.", type: "contains", valueIncludes: '<button type="submit" disabled={isSubmitting}>\n        {isSubmitting ? "Menyimpan..." : "Simpan profile"}\n      </button>' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target React",
    description:
      "Cek otomatis membaca validated-form checkpoint. Preview tidak menginstal React Hook Form/Zod, menjalankan resolver, atau mengirim request profile nyata.",
    lines: [
      "Form memiliki schema-derived type, resolver, field error, dan pending button structure.",
      "Validation client adalah feedback UX, bukan pengganti validation server-side.",
      "Feature perlu diuji pada Local App dengan dependency serta data boundary yang benar.",
    ],
  },
  skillTags: ["React Hook Form", "Zod", "Forms", "Validation", "Readiness Checkpoint"],
};
