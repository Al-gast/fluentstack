import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const nextSupabasePracticePreviewCode = {
  html: "",
  css: "",
  js: "",
};

export const supabaseBackendIntegrationModule: Module = {
  id: "nextjs-supabase-backend-integration",
  trackId: "frontend-engineering",
  title: "Supabase or Backend Integration",
  slug: "supabase-backend-integration",
  description:
    "Menghubungkan Next.js app ke data user dengan client boundary yang tepat, RLS, service layer, persistence flow, dan profile row yang aman untuk tahap awal.",
  order: 36,
  lessonIds: [
    "nextjs-supabase-client-boundaries",
    "nextjs-rls-concept",
    "nextjs-service-layer",
    "nextjs-persisting-user-data",
    "nextjs-profile-rows",
    "nextjs-supabase-backend-integration-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Next.js",
    "Supabase",
    "RLS",
    "Service Layer",
    "Data Persistence",
    "Profiles",
  ],
};

export const nextjsSupabaseClientBoundariesLesson: Lesson = {
  id: "nextjs-supabase-client-boundaries",
  trackId: "frontend-engineering",
  moduleId: "nextjs-supabase-backend-integration",
  title: "Supabase Client Boundaries",
  slug: "nextjs-supabase-client-boundaries",
  description:
    "Menentukan kapan Supabase browser client atau server client digunakan, serta menjaga credential dan auth check pada boundary yang tepat.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan browser client dan server client Supabase untuk Next.js SSR",
    "Menentukan lokasi client utility di lib/supabase",
    "Memahami perbedaan publishable key dan secret server-only",
    "Memilih getClaims, getUser, atau getSession sesuai kebutuhan",
  ],
  skillTags: ["Next.js", "Supabase", "SSR", "Client Boundaries", "Environment Variables"],
  blocks: [
    {
      id: "nextjs-supabase-client-boundaries-intro",
      type: "text",
      title: "Satu provider, dua tempat menjalankan kode",
      content:
        "Supabase dapat dipanggil dari browser maupun server, tetapi kedua tempat itu tidak memiliki tanggung jawab yang sama. Browser client dipakai pada Client Component ketika UI memang perlu berinteraksi dengan Supabase di browser. Server client dipakai dari Server Component, Server Action, Route Handler, atau service layer ketika app membaca session, mengambil data awal, atau menjalankan operasi yang harus tetap berada di server.\n\nBuat utility client di satu lokasi seperti lib/supabase/client.ts dan lib/supabase/server.ts. Jangan membuat createClient baru secara acak di banyak component. Pemisahan ini membuat reviewer dapat melihat boundary data dengan cepat dan mengurangi risiko server-only code tidak sengaja masuk ke browser bundle.",
    },
    {
      id: "nextjs-supabase-client-boundaries-example",
      type: "code-example",
      title: "Browser client memakai nilai publishable",
      language: "tsx",
      code: `// lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}

// app/dashboard/page.tsx
import { createClient as createServerClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createServerClient();
  const { data } = await supabase.auth.getClaims();

  return <h1>Halo, {data?.claims.sub ?? "learner"}</h1>;
}`,
      explanation:
        "Browser utility memakai createBrowserClient dengan project URL dan publishable key yang memang dirancang untuk digunakan browser bersama RLS. Page server memakai utility server yang terpisah. Untuk melindungi halaman atau data, dokumentasi Supabase saat ini menyarankan getClaims karena token diverifikasi; getSession memberi raw session dan user object-nya tidak boleh menjadi satu-satunya dasar authorization di server.",
    },
    {
      id: "nextjs-supabase-client-boundaries-coding-practice",
      type: "coding-practice",
      challengeId: "classify-supabase-client-boundaries",
    },
    {
      id: "nextjs-supabase-client-boundaries-quick-check",
      type: "quick-check",
      question:
        "Di mana operasi yang memeriksa identity untuk melindungi page atau data paling tepat dilakukan?",
      options: [
        "Server client dengan identity check yang diverifikasi, seperti getClaims",
        "LocalStorage yang ditulis sendiri oleh Client Component",
        "UI navigation karena link dashboard sudah disembunyikan",
        "Publishable key yang dikirim lewat props component",
      ],
      correctAnswer:
        "Server client dengan identity check yang diverifikasi, seperti getClaims",
      explanation:
        "UI client membantu pengalaman user, tetapi keputusan akses page dan data harus dibuat dengan pemeriksaan yang dapat dipercaya di server. Supabase membedakan getClaims untuk verifikasi identity dari getSession yang memberi raw session.",
    },
    {
      id: "nextjs-supabase-client-boundaries-callout",
      type: "callout",
      variant: "warning",
      title: "Publishable bukan berarti semua credential boleh dibuka",
      content:
        "NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY dapat tersedia di browser karena akses data tetap dibatasi oleh RLS. Ini berbeda dari service role key, session secret, database password, atau token server-only. Jangan pernah memberi prefix NEXT_PUBLIC_ pada secret, dan jangan pernah membuat service role client di browser atau memasukkannya ke source control.",
    },
    {
      id: "nextjs-supabase-client-boundaries-summary",
      type: "summary",
      points: [
        "Browser client dan server client memiliki lokasi serta tanggung jawab berbeda.",
        "Utility Supabase sebaiknya disimpan terpusat di lib/supabase.",
        "Publishable key dapat dipakai browser bersama RLS, sedangkan secret tetap server-only.",
        "Gunakan getClaims untuk identity check saat melindungi page atau data pada server.",
        "Berikutnya, kamu akan melihat mengapa RLS tetap penting walaupun UI sudah memiliki route protection.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-supabase-client-boundaries-intro",
      "nextjs-supabase-client-boundaries-example",
      "nextjs-supabase-client-boundaries-coding-practice",
      "nextjs-supabase-client-boundaries-quick-check",
      "nextjs-supabase-client-boundaries-callout",
      "nextjs-supabase-client-boundaries-summary",
    ],
  },
};

export const nextjsRlsConceptLesson: Lesson = {
  id: "nextjs-rls-concept",
  trackId: "frontend-engineering",
  moduleId: "nextjs-supabase-backend-integration",
  title: "RLS Concept",
  slug: "nextjs-rls-concept",
  description:
    "Memahami Row Level Security sebagai aturan database yang membatasi row berdasarkan identity user, bukan sekadar filter UI.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Menjelaskan RLS sebagai database-level authorization",
    "Membaca policy user-owned row yang memakai auth.uid()",
    "Membedakan SELECT using dari INSERT with check",
    "Menjelaskan mengapa filter client tidak cukup untuk melindungi data",
  ],
  skillTags: ["Supabase", "Postgres", "RLS", "Authorization", "Data Security"],
  blocks: [
    {
      id: "nextjs-rls-concept-intro",
      type: "text",
      title: "RLS adalah penjaga di dekat row, bukan di dekat tombol",
      content:
        "Bayangkan tabel learning_notes berisi catatan setiap learner. Menyembunyikan tombol atau menambahkan filter user_id di Client Component tidak menghentikan request yang dimodifikasi. RLS menempatkan aturan di Postgres: untuk setiap akses, database mengecek apakah identity pada request memang memiliki hak untuk membaca atau mengubah row tersebut.\n\nPada tabel di schema yang terekspos seperti public, RLS perlu diaktifkan dan policy perlu ditulis. Policy user-owned yang sederhana biasanya membandingkan auth.uid() dengan kolom user_id. Ini adalah defense in depth: UI, route check, service layer, dan database masing-masing punya tanggung jawab, sehingga satu kesalahan di UI tidak otomatis membuka semua row.",
    },
    {
      id: "nextjs-rls-concept-example",
      type: "code-example",
      title: "Policy untuk catatan milik learner sendiri",
      language: "sql",
      code: `alter table public.learning_notes enable row level security;

create policy "Learners can read their own notes"
on public.learning_notes
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Learners can create their own notes"
on public.learning_notes
for insert
to authenticated
with check ((select auth.uid()) = user_id);`,
      explanation:
        "Policy SELECT memakai using untuk menentukan row yang terlihat. Policy INSERT memakai with check untuk memastikan row baru membawa user_id yang sama dengan identity saat ini. Pada update, policy biasanya membutuhkan using untuk row lama dan with check untuk row hasil perubahan. RLS tidak perlu dijelaskan sebagai SQL hafalan; bacalah selalu sebagai pertanyaan: siapa boleh melakukan operasi apa pada row mana?",
    },
    {
      id: "nextjs-rls-concept-coding-practice",
      type: "coding-practice",
      challengeId: "model-user-owned-rls-policy",
    },
    {
      id: "nextjs-rls-concept-quick-check",
      type: "quick-check",
      question:
        "Mengapa policy INSERT user-owned memakai with check yang membandingkan auth.uid() dan user_id?",
      options: [
        "Agar user tidak dapat membuat row baru yang mengatasnamakan user lain",
        "Agar halaman dapat menampilkan avatar lebih cepat",
        "Agar publishable key berubah menjadi secret",
        "Agar user tidak perlu memiliki identity sama sekali",
      ],
      correctAnswer:
        "Agar user tidak dapat membuat row baru yang mengatasnamakan user lain",
      explanation:
        "with check memeriksa nilai row baru. Jika user_id pada row tidak sama dengan identity auth saat ini, database menolak operasi sesuai policy.",
    },
    {
      id: "nextjs-rls-concept-callout",
      type: "callout",
      variant: "common-mistake",
      title: "RLS aktif tanpa policy juga bukan aplikasi yang selesai",
      content:
        "Saat RLS aktif pada tabel terekspos, publishable key tidak dapat mengakses data sampai policy mengizinkannya. Jangan kemudian mematikan RLS hanya agar query cepat berhasil. Baca pesan error, pastikan request memiliki auth context, lalu tulis policy paling sempit yang memenuhi kebutuhan feature. Service role key dapat melewati RLS dan bukan solusi untuk Client Component.",
    },
    {
      id: "nextjs-rls-concept-summary",
      type: "summary",
      points: [
        "RLS menerapkan authorization pada database untuk setiap akses row.",
        "Policy user-owned umumnya membandingkan auth.uid() dengan user_id.",
        "using menentukan row yang boleh diakses, sedangkan with check memeriksa row baru atau hasil update.",
        "Filter UI dan route redirect tidak menggantikan policy database.",
        "Berikutnya, kamu akan mengorganisasi query ke service layer agar aturan akses tidak tersebar di component.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-rls-concept-intro",
      "nextjs-rls-concept-example",
      "nextjs-rls-concept-coding-practice",
      "nextjs-rls-concept-quick-check",
      "nextjs-rls-concept-callout",
      "nextjs-rls-concept-summary",
    ],
  },
};

export const nextjsServiceLayerLesson: Lesson = {
  id: "nextjs-service-layer",
  trackId: "frontend-engineering",
  moduleId: "nextjs-supabase-backend-integration",
  title: "Service Layer",
  slug: "nextjs-service-layer",
  description:
    "Menempatkan Supabase query dan auth-aware data access dalam fungsi server yang bernama jelas, bukan di component UI acak.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan alasan data access dipusatkan dalam service function",
    "Membuat fungsi server yang membaca identity sebelum query user-owned data",
    "Membedakan state UI dari operasi data",
    "Menangani error data tanpa mengembalikan detail database ke user",
  ],
  skillTags: ["Next.js", "Supabase", "Service Layer", "Server Components", "Code Organization"],
  blocks: [
    {
      id: "nextjs-service-layer-intro",
      type: "text",
      title: "Component menjelaskan UI, service menjelaskan data access",
      content:
        "Saat query Supabase langsung ditulis di banyak page, component mulai mencampur markup, session check, nama tabel, error handling, dan mapping data. Perubahan policy atau bentuk data lalu sulit ditelusuri. Service layer menyimpan operasi tersebut dalam fungsi kecil dengan nama yang menjelaskan tujuan, misalnya getCurrentProfile atau saveLearningNote.\n\nService layer bukan abstraction besar yang harus dibuat untuk setiap baris query. Mulailah saat query mempunyai identity check, aturan user-owned, mapping, atau error handling yang akan membuat component sulit dibaca. Page tetap bertanggung jawab memilih loading/error UI; service bertanggung jawab menjalankan operasi data dengan boundary server yang jelas.",
    },
    {
      id: "nextjs-service-layer-example",
      type: "code-example",
      title: "Service untuk profile user saat ini",
      language: "tsx",
      code: `// lib/services/profile-service.ts
import "server-only";

import { createClient } from "@/lib/supabase/server";

export async function getCurrentProfile() {
  const supabase = await createClient();
  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();
  const userId = claimsData?.claims.sub;

  if (claimsError || !userId) {
    return null;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("id, display_name, bio")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw new Error("Profile belum bisa dimuat.");
  }

  return data;
}`,
      explanation:
        "server-only menyatakan bahwa service ini tidak boleh diimport ke browser bundle. Fungsi memverifikasi identity terlebih dahulu, lalu hanya meminta profile dengan id user saat ini. RLS tetap menjadi proteksi database jika query berubah atau dipanggil dari tempat lain. Error internal tidak diteruskan mentah ke UI; page dapat menangkap error dan menampilkan fallback yang sesuai.",
    },
    {
      id: "nextjs-service-layer-coding-practice",
      type: "coding-practice",
      challengeId: "extract-profile-service-layer",
    },
    {
      id: "nextjs-service-layer-quick-check",
      type: "quick-check",
      question:
        "Apa alasan terbaik memindahkan query profile yang berulang ke getCurrentProfile?",
      options: [
        "Identity check, nama tabel, query, dan error handling memiliki satu tempat yang jelas",
        "Agar component tidak perlu merender JSX lagi",
        "Agar RLS dapat dihapus dari database",
        "Agar seluruh app otomatis menjadi Client Component",
      ],
      correctAnswer:
        "Identity check, nama tabel, query, dan error handling memiliki satu tempat yang jelas",
      explanation:
        "Service layer menyederhanakan UI dan membuat aturan data access lebih mudah ditinjau. Ia tidak menggantikan JSX, RLS, atau kebutuhan client boundary yang memang valid.",
    },
    {
      id: "nextjs-service-layer-callout",
      type: "callout",
      variant: "important",
      title: "Jangan menerima userId dari form lalu langsung mempercayainya",
      content:
        "Untuk operasi user-owned, ambil identity dari auth context yang diverifikasi pada server. Nilai userId dari form, URL, atau Client Component dapat dimanipulasi. Kamu masih dapat menggunakan userId dari claims untuk query atau insert, lalu RLS tetap memastikan row yang diakses memang sesuai policy.",
    },
    {
      id: "nextjs-service-layer-summary",
      type: "summary",
      points: [
        "Service layer memisahkan data access dari presentasi UI.",
        "Gunakan fungsi bernama jelas untuk identity check, query, mapping, dan error handling yang berulang.",
        "server-only membantu mencegah service server diimport ke Client Component.",
        "Identity user-owned berasal dari auth context server, bukan field yang dikirim browser.",
        "Berikutnya, kamu akan memakai service untuk alur create/read/update data yang kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-service-layer-intro",
      "nextjs-service-layer-example",
      "nextjs-service-layer-coding-practice",
      "nextjs-service-layer-quick-check",
      "nextjs-service-layer-callout",
      "nextjs-service-layer-summary",
    ],
  },
};

export const nextjsPersistingUserDataLesson: Lesson = {
  id: "nextjs-persisting-user-data",
  trackId: "frontend-engineering",
  moduleId: "nextjs-supabase-backend-integration",
  title: "Persisting User Data",
  slug: "nextjs-persisting-user-data",
  description:
    "Membaca dan menyimpan data user-owned melalui flow async yang mengambil identity server-side, membatasi payload, serta memberi state sukses atau error.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Membaca urutan identity check, payload validation, query, dan UI state",
    "Menentukan user_id dari auth claims, bukan form payload",
    "Memahami kapan upsert dapat dipakai untuk satu data per user",
    "Menampilkan success/error state yang tidak menyembunyikan kegagalan operasi",
  ],
  skillTags: ["Next.js", "Supabase", "Persistence", "Server Actions", "Async UI"],
  blocks: [
    {
      id: "nextjs-persisting-user-data-intro",
      type: "text",
      title: "Persistensi adalah flow, bukan satu tombol Save",
      content:
        "Untuk menyimpan data milik user, urutannya penting: ambil input, validasi bentuk dan batasnya, verifikasi identity di server, susun payload yang menyertakan user_id dari claims, jalankan query, lalu kembalikan state sukses atau error yang dapat dipahami UI. Jangan menerima user_id tersembunyi dari form sebagai sumber kebenaran.\n\nContoh sederhana adalah satu learning note per user. Jika tabel memiliki unique constraint untuk user_id, upsert dapat membuat row bila belum ada atau memperbaruinya bila sudah ada. Ini bukan alasan untuk mengirim seluruh object form ke database. Pilih kolom yang memang boleh diubah dan biarkan RLS menegakkan ownership sebagai lapisan tambahan.",
    },
    {
      id: "nextjs-persisting-user-data-example",
      type: "code-example",
      title: "Server Action menyimpan catatan user saat ini",
      language: "tsx",
      code: `"use server";

import { createClient } from "@/lib/supabase/server";

export async function saveLearningNote(formData: FormData) {
  const content = String(formData.get("content") ?? "").trim();

  if (content.length < 1 || content.length > 500) {
    return { status: "error", message: "Catatan harus berisi 1-500 karakter." };
  }

  const supabase = await createClient();
  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();
  const userId = claimsData?.claims.sub;

  if (claimsError || !userId) {
    return { status: "error", message: "Masuk kembali sebelum menyimpan catatan." };
  }

  const { error } = await supabase
    .from("learning_notes")
    .upsert({ user_id: userId, content }, { onConflict: "user_id" });

  if (error) {
    return { status: "error", message: "Catatan belum bisa disimpan." };
  }

  return { status: "success", message: "Catatan tersimpan." };
}`,
      explanation:
        "Action memvalidasi content sebelum query, lalu menentukan user_id dari claims server-side. upsert hanya cocok bila onConflict mengarah ke unique constraint yang memang ada pada tabel. Pesan yang kembali ke UI tidak membeberkan detail database. Dalam project nyata, tampilkan pending state saat action berjalan dan simpan detail error aman untuk debugging server-side.",
    },
    {
      id: "nextjs-persisting-user-data-coding-practice",
      type: "coding-practice",
      challengeId: "plan-user-data-persistence-flow",
    },
    {
      id: "nextjs-persisting-user-data-local-checklist",
      type: "text",
      title: "Checklist Local Next.js App",
      content:
        "Saat kamu mulai mengintegrasikan Supabase di project lokal, cek secara manual:\n\n- Browser tidak menerima service role key atau session secret.\n- Server Action atau Route Handler mengambil identity dari auth context yang diverifikasi.\n- Tabel user-owned memiliki RLS dan policy untuk operasi yang benar-benar dibutuhkan.\n- Submit menampilkan pending, success, dan error state yang jelas.\n- Coba akses data dengan dua akun uji bila setup sudah tersedia.\n\nFluentStack tidak dapat mengakses project atau dashboard Supabase kamu. Jangan menandai checklist ini sebagai bukti integrasi sebelum kamu benar-benar menguji app lokal.",
    },
    {
      id: "nextjs-persisting-user-data-summary",
      type: "summary",
      points: [
        "Flow persistence mengambil input, memvalidasi, memverifikasi identity, lalu menjalankan query dengan payload terbatas.",
        "user_id pada row user-owned berasal dari claims server-side.",
        "upsert memerlukan unique constraint yang sesuai dengan onConflict.",
        "UI perlu state pending, success, dan error; local integration tetap perlu diuji sendiri.",
        "Berikutnya, kamu akan memisahkan auth user dari data profile aplikasi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-persisting-user-data-intro",
      "nextjs-persisting-user-data-example",
      "nextjs-persisting-user-data-coding-practice",
      "nextjs-persisting-user-data-local-checklist",
      "nextjs-persisting-user-data-summary",
    ],
  },
};

export const nextjsProfileRowsLesson: Lesson = {
  id: "nextjs-profile-rows",
  trackId: "frontend-engineering",
  moduleId: "nextjs-supabase-backend-integration",
  title: "Profile Rows",
  slug: "nextjs-profile-rows",
  description:
    "Memisahkan identity Supabase Auth dari profile aplikasi yang dapat dibaca dan diperbarui sesuai RLS policy.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan auth.users dari public.profiles",
    "Merancang profile row yang memakai auth user id sebagai primary key",
    "Menentukan data mana yang pantas berada di profile aplikasi",
    "Membaca policy select/update sederhana untuk profile user sendiri",
  ],
  skillTags: ["Supabase", "Profiles", "RLS", "Data Modeling", "Next.js"],
  blocks: [
    {
      id: "nextjs-profile-rows-intro",
      type: "text",
      title: "Auth user dan profile aplikasi bukan object yang sama",
      content:
        "Supabase menyimpan identity auth di schema auth. Schema tersebut tidak diekspos melalui auto-generated API untuk penggunaan aplikasi biasa. Jika app perlu display name, bio, avatar URL, atau preference learner, buat tabel public.profiles yang merujuk ke auth.users. Dengan cara ini, aplikasi memiliki data yang memang dibutuhkan UI tanpa menjadikan auth metadata sebagai database aplikasi serbaguna.\n\nUntuk profile satu banding satu, id profile biasanya sama dengan auth user id dan menjadi primary key. Policy RLS kemudian membatasi user agar hanya dapat membaca atau mengubah profile miliknya. Jangan menaruh password, raw token, service role key, atau authorization flag yang sensitif pada profile yang dapat diubah user sendiri.",
    },
    {
      id: "nextjs-profile-rows-example",
      type: "code-example",
      title: "Profile row satu banding satu dengan auth user",
      language: "sql",
      code: `create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  bio text,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);`,
      explanation:
        "references auth.users(id) menjaga profile tetap terkait dengan identity yang valid, sedangkan on delete cascade membersihkan profile bila auth user dihapus. Policy contoh membatasi profile menjadi private. Bila product membutuhkan profile public, definisikan kebutuhan baca tersebut secara eksplisit di policy lain; jangan membuka semua operasi hanya karena satu field perlu terlihat publik.",
    },
    {
      id: "nextjs-profile-rows-coding-practice",
      type: "coding-practice",
      challengeId: "model-user-profile-row",
    },
    {
      id: "nextjs-profile-rows-quick-check",
      type: "quick-check",
      question:
        "Mengapa app membuat public.profiles alih-alih mencoba memakai auth.users langsung dari browser?",
      options: [
        "Auth schema tidak diekspos untuk API aplikasi; profile memberi data UI dengan policy yang dapat dikendalikan",
        "Agar password dapat dibaca oleh component UI",
        "Agar RLS tidak diperlukan pada tabel profile",
        "Agar setiap user dapat memperbarui profile user lain",
      ],
      correctAnswer:
        "Auth schema tidak diekspos untuk API aplikasi; profile memberi data UI dengan policy yang dapat dikendalikan",
      explanation:
        "Profile table adalah data aplikasi yang dapat kamu model dan lindungi dengan RLS. Ia tetap terkait dengan auth user lewat foreign key, tetapi bukan cara untuk membuka data identity sensitif.",
    },
    {
      id: "nextjs-profile-rows-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Profile editable bukan tempat menyimpan hak istimewa",
      content:
        "Field seperti display_name dan bio mungkin boleh diubah pemilik profile. Field seperti is_admin, subscription status, atau authorization role membutuhkan desain dan kontrol lebih ketat daripada update profile biasa. Pada tahap ini, fokus pada satu profile private milik user sendiri; admin dashboard, role matrix, dan trigger kompleks dibahas di tahap lain.",
    },
    {
      id: "nextjs-profile-rows-summary",
      type: "summary",
      points: [
        "auth.users menyimpan identity, sedangkan public.profiles menyimpan data aplikasi yang diperlukan UI.",
        "Profile satu banding satu dapat memakai auth user id sebagai primary key dan foreign key.",
        "RLS select/update menjaga profile private tetap hanya dapat diakses pemiliknya.",
        "Jangan menyimpan secret atau hak istimewa editable pada profile biasa.",
        "Berikutnya, kamu akan menguji seluruh keputusan integration sebelum berpindah ke production operations.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-profile-rows-intro",
      "nextjs-profile-rows-example",
      "nextjs-profile-rows-coding-practice",
      "nextjs-profile-rows-quick-check",
      "nextjs-profile-rows-callout",
      "nextjs-profile-rows-summary",
    ],
  },
};

export const nextjsSupabaseBackendIntegrationAssessmentLesson: Lesson = {
  id: "nextjs-supabase-backend-integration-assessment",
  trackId: "frontend-engineering",
  moduleId: "nextjs-supabase-backend-integration",
  title: "Uji Kompetensi Supabase Integration",
  slug: "nextjs-supabase-backend-integration-assessment",
  description:
    "Memeriksa kesiapan menghubungkan Next.js app ke data user dengan client boundary, RLS, service layer, persistence flow, dan profile row yang aman.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 75,
  objectives: [
    "Memilih lokasi Supabase client sesuai runtime",
    "Menjelaskan RLS untuk user-owned data",
    "Menyusun service dan persistence flow yang mengambil identity server-side",
    "Merancang profile row tanpa mengekspos credential atau hak istimewa",
  ],
  skillTags: ["Supabase", "RLS", "Service Layer", "Data Persistence", "Readiness Checkpoint"],
  blocks: [
    {
      id: "nextjs-supabase-backend-integration-assessment-recap",
      type: "text",
      title: "Checkpoint: data user perlu boundary yang jelas di setiap lapisan",
      content:
        "Kamu sudah mempelajari lima keputusan yang saling menguatkan: pilih client berdasarkan tempat kode berjalan, gunakan identity check yang dapat dipercaya untuk page dan data, aktifkan RLS dengan policy user-owned, bungkus query dalam service yang jelas, serta simpan data aplikasi pada profile row terpisah dari auth identity.\n\nUji Kompetensi ini tidak membuat project Supabase atau database sungguhan. Gunakan hasilnya untuk memutuskan apakah kamu siap menerapkan integration di Local Next.js App. Bila kamu belum dapat menjelaskan mengapa service role key tidak pernah masuk browser atau mengapa filter UI tidak menggantikan RLS, kembali ke lesson terkait terlebih dahulu.",
    },
    {
      id: "nextjs-supabase-backend-integration-assessment-quiz",
      type: "quiz",
      quizId: "nextjs-supabase-backend-integration-assessment-quiz",
    },
    {
      id: "nextjs-supabase-backend-integration-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-supabase-integration-checkpoint",
    },
    {
      id: "nextjs-supabase-backend-integration-assessment-local-checklist",
      type: "text",
      title: "Self-review integration lokal",
      content:
        "Sebelum melanjutkan, lakukan review pada Local Next.js App bila kamu sudah memiliki project Supabase:\n\n- lib/supabase/client.ts dan lib/supabase/server.ts tidak tercampur.\n- Publishable URL/key berada di .env.local, sedangkan secret dan service role key tidak masuk browser atau commit.\n- Tabel user-owned memiliki RLS dan policy paling sempit untuk operasi yang dibutuhkan.\n- Query aplikasi berada di service function, bukan tersebar pada UI.\n- Test dua akun memastikan satu user tidak dapat membaca atau mengubah row user lain.\n- README menjelaskan lokasi data access tanpa menyertakan credential.\n\nFluentStack tidak dapat menguji dashboard Supabase atau project lokalmu. Tandai selesai berdasarkan pengecekan nyata, bukan karena checklist sudah dibaca.",
    },
    {
      id: "nextjs-supabase-backend-integration-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan implementasi 110-170 kata untuk rekan developer. Jelaskan lokasi browser/server Supabase client, satu tabel user-owned, bagaimana RLS membatasi row, nama service function yang dipakai UI, dan satu hal yang tidak boleh masuk ke browser.",
      placeholder:
        "Browser client berada di ... Server client dipakai oleh ... Tabel ... menyimpan ... RLS memastikan ... UI memanggil service ... Kami tidak pernah mengirim ... ke browser karena ...",
      minimumWords: 110,
      modelAnswer:
        "Browser client berada di lib/supabase/client.ts dan hanya dipakai saat Client Component memang perlu memanggil Supabase dari browser. Server client berada di lib/supabase/server.ts dan dipakai oleh Server Component, Server Action, Route Handler, serta service layer. Tabel learning_notes menyimpan catatan milik learner dengan user_id yang berasal dari identity server-side. RLS membatasi SELECT, INSERT, dan UPDATE agar auth.uid() hanya cocok dengan user_id pemilik row. UI dashboard memanggil getCurrentProfile atau getLearningNote dari service layer, bukan menulis query tabel langsung. Kami tidak pernah mengirim service role key atau session secret ke browser karena nilai tersebut dapat melewati atau melemahkan perlindungan data bila bocor.",
      checklist: [
        "Menyebut browser client dan server client dengan tanggung jawab berbeda.",
        "Menyebut tabel user-owned serta ownership column atau profile id.",
        "Menjelaskan RLS sebagai policy database, bukan filter UI.",
        "Menyebut service function yang menjembatani UI dan data access.",
        "Menyebut satu secret yang tidak boleh muncul di browser.",
      ],
    },
    {
      id: "nextjs-supabase-backend-integration-assessment-docs",
      type: "documentation-bridge",
      title: "Gunakan dokumentasi sebagai checklist implementation",
      description:
        "Buka sumber resmi ini saat menghubungkan Local Next.js App. Baca bagian yang mendukung feature profile atau learning note kecil; jangan langsung memperluas scope ke realtime, storage, atau admin tooling.",
      links: [
        {
          source: "Supabase Docs",
          title: "Creating a Supabase client for SSR",
          url: "https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=nextjs",
          focus: [
            "browser client versus server client",
            "NEXT_PUBLIC_SUPABASE_URL dan publishable key",
            "getClaims untuk perlindungan page dan data",
          ],
          ignoreForNow: ["realtime subscription", "advanced caching behavior"],
        },
        {
          source: "Supabase Docs",
          title: "Row Level Security",
          url: "https://supabase.com/docs/guides/database/postgres/row-level-security",
          focus: [
            "RLS pada tabel public",
            "policy select, insert, dan update untuk auth.uid()",
            "perbedaan using dan with check",
          ],
          ignoreForNow: ["view security", "policy performance optimization", "advanced role matrix"],
        },
        {
          source: "Supabase Docs",
          title: "User Management and Profile Data",
          url: "https://supabase.com/docs/guides/auth/managing-user-data",
          focus: [
            "auth.users dan public.profiles",
            "foreign key ke primary key auth user",
            "RLS pada profile data aplikasi",
          ],
          ignoreForNow: ["trigger profile otomatis", "admin user management"],
        },
        {
          source: "Next.js Docs",
          title: "Environment Variables",
          url: "https://nextjs.org/docs/app/guides/environment-variables",
          focus: [
            "NEXT_PUBLIC_ tersedia di browser",
            ".env.local tidak di-commit",
            "server-only value tetap tanpa prefix public",
          ],
          ignoreForNow: ["deployment pipeline dan runtime config tingkat lanjut"],
        },
      ],
      followUpAction:
        "Tambahkan satu section Data Access pada README Local Next.js App: sebut client boundary, service function, tabel user-owned, dan policy RLS yang dibutuhkan. Tulis nama variable environment saja, tanpa value credential.",
    },
    {
      id: "nextjs-supabase-backend-integration-assessment-summary",
      type: "summary",
      points: [
        "Integration yang aman dimulai dari pemisahan browser client, server client, dan service layer.",
        "RLS membatasi akses row di database dan tetap diperlukan meski UI memiliki filter atau redirect.",
        "Data user-owned memakai identity yang diverifikasi server-side, bukan userId dari browser.",
        "Profile aplikasi terpisah dari auth identity serta tidak menyimpan secret atau hak istimewa editable.",
        "Berikutnya, kamu akan membawa integration ini ke workflow deployment, environment production, dan debugging operasi.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "nextjs-supabase-backend-integration-assessment-recap",
      "nextjs-supabase-backend-integration-assessment-quiz",
      "nextjs-supabase-backend-integration-assessment-coding-practice",
      "nextjs-supabase-backend-integration-assessment-local-checklist",
      "nextjs-supabase-backend-integration-assessment-writing-practice",
      "nextjs-supabase-backend-integration-assessment-docs",
      "nextjs-supabase-backend-integration-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const nextjsSupabaseBackendIntegrationAssessmentQuiz: Quiz = {
  id: "nextjs-supabase-backend-integration-assessment-quiz",
  lessonId: "nextjs-supabase-backend-integration-assessment",
  title: "Uji Kompetensi Supabase Integration",
  passingScore: 70,
  questions: [
    {
      id: "supabase-client-boundary",
      type: "multiple-choice",
      question:
        "Di mana Supabase server client paling tepat dipakai dalam Next.js App Router?",
      options: [
        "Server Component, Server Action, Route Handler, atau service layer server",
        "CSS file dan static HTML saja",
        "Setiap component tanpa melihat runtime-nya",
        "Browser localStorage sebagai pengganti session",
      ],
      correctAnswer:
        "Server Component, Server Action, Route Handler, atau service layer server",
      explanation:
        "Server client menangani code yang berjalan di server. Browser client dipisahkan untuk kebutuhan Client Component yang memang berjalan di browser.",
    },
    {
      id: "supabase-publishable-key",
      type: "multiple-choice",
      question:
        "Mengapa NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY dapat tersedia di browser?",
      options: [
        "Akses data tetap dibatasi oleh identity dan RLS policy yang benar",
        "Karena publishable key otomatis memberi akses penuh ke semua table",
        "Karena service role key aman dipakai bersamanya di Client Component",
        "Karena browser tidak pernah dapat membaca environment variable",
      ],
      correctAnswer:
        "Akses data tetap dibatasi oleh identity dan RLS policy yang benar",
      explanation:
        "Publishable key memang digunakan di browser, tetapi RLS wajib melindungi tabel terekspos. Service role key dan secret tetap tidak boleh masuk browser.",
    },
    {
      id: "rls-role",
      type: "multiple-choice",
      question: "Apa peran utama RLS pada tabel user-owned?",
      options: [
        "Membatasi operasi database ke row yang sesuai dengan identity user",
        "Mengganti kebutuhan form validation di UI",
        "Menyembunyikan tombol dashboard dari navigation",
        "Menyimpan password user dalam profile row",
      ],
      correctAnswer:
        "Membatasi operasi database ke row yang sesuai dengan identity user",
      explanation:
        "RLS adalah authorization di database. Ia tidak menggantikan UI validation, tetapi melindungi row bahkan bila request tidak datang dari flow UI yang diharapkan.",
    },
    {
      id: "rls-insert-policy",
      type: "multiple-choice",
      question:
        "Untuk insert row milik user sendiri, apa yang seharusnya diperiksa policy dengan with check?",
      options: [
        "auth.uid() sama dengan user_id pada row baru",
        "Nama component sama dengan nama table",
        "Publishable key sama dengan service role key",
        "User menekan tombol dua kali",
      ],
      correctAnswer: "auth.uid() sama dengan user_id pada row baru",
      explanation:
        "with check memastikan row yang akan dibuat masih memenuhi ownership policy. User tidak boleh menulis row baru atas nama user lain.",
    },
    {
      id: "service-layer-purpose",
      type: "multiple-choice",
      question: "Apa manfaat utama service layer untuk query Supabase?",
      options: [
        "Membuat identity check, query, mapping, dan error handling mudah ditinjau dari satu tempat",
        "Menghapus semua Server Component dari aplikasi",
        "Mengizinkan secret masuk ke browser",
        "Membuat RLS tidak lagi diperlukan",
      ],
      correctAnswer:
        "Membuat identity check, query, mapping, dan error handling mudah ditinjau dari satu tempat",
      explanation:
        "Service layer menjaga UI tetap fokus pada presentasi dan membantu data access tidak tersebar. RLS tetap menjadi perlindungan database.",
    },
    {
      id: "persistence-user-id-source",
      type: "multiple-choice",
      question:
        "Dari mana user_id untuk payload user-owned seharusnya diperoleh pada server?",
      options: [
        "Claims atau auth context yang diverifikasi pada server",
        "Hidden input userId yang dikirim dari form",
        "Query parameter yang dapat diedit browser",
        "Display name yang ditampilkan navigation",
      ],
      correctAnswer: "Claims atau auth context yang diverifikasi pada server",
      explanation:
        "Nilai dari browser dapat dimanipulasi. Server menentukan ownership dari identity yang diverifikasi, lalu RLS menegakkan policy pada database.",
    },
    {
      id: "profile-row-purpose",
      type: "multiple-choice",
      question: "Mengapa public.profiles dipisahkan dari auth.users?",
      options: [
        "Aplikasi dapat menyimpan data UI seperti display name dengan RLS tanpa membuka schema auth",
        "Agar semua user dapat membaca password user lain",
        "Agar profile tidak perlu terkait identity auth",
        "Agar service role key dapat ditaruh di profile",
      ],
      correctAnswer:
        "Aplikasi dapat menyimpan data UI seperti display name dengan RLS tanpa membuka schema auth",
      explanation:
        "Auth schema tidak diekspos sebagai API aplikasi biasa. Profile row menghubungkan data aplikasi ke identity user secara aman melalui foreign key dan policy.",
    },
    {
      id: "service-role-safety",
      type: "true-false",
      question:
        "Service role key boleh dipakai di Client Component selama nama environment variable diawali NEXT_PUBLIC_.",
      correctAnswer: false,
      explanation:
        "NEXT_PUBLIC_ membuat nilai masuk ke browser bundle. Service role key adalah credential sensitif dan tidak boleh dikirim ke browser atau di-commit.",
    },
  ],
};

export const classifySupabaseClientBoundariesChallenge: CodingChallenge = {
  id: "classify-supabase-client-boundaries",
  lessonId: "nextjs-supabase-client-boundaries",
  title: "Classify Supabase client boundaries",
  description:
    "Lengkapi boundary map untuk browser client, server client, dan service role key yang tidak boleh digunakan di browser.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah boundary map, bukan setup Supabase yang benar-benar menghubungkan project.",
    "Tambahkan browser client untuk Client Component dengan publishable key.",
    "Tambahkan server client untuk Server Component, Server Action, dan Route Handler.",
    "Tandai service role key sebagai server-only dan tidak pernah di browser.",
    "Cek otomatis membaca struktur map. Preview tidak membaca environment variable atau menghubungkan Supabase.",
  ],
  starterCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type SupabaseBoundary = {
  file: string;
  runtime: "browser" | "server";
  key: "publishable" | "secret";
  purpose: string;
};

export const supabaseBoundaries: SupabaseBoundary[] = [
  {
    file: "lib/supabase/client.ts",
    runtime: "browser",
    key: "secret",
    purpose: "database admin access",
  },
];`,
  },
  solutionCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type SupabaseBoundary = {
  file: string;
  runtime: "browser" | "server";
  key: "publishable" | "secret";
  purpose: string;
};

export const supabaseBoundaries: SupabaseBoundary[] = [
  {
    file: "lib/supabase/client.ts",
    runtime: "browser",
    key: "publishable",
    purpose: "Client Component calls that need browser access",
  },
  {
    file: "lib/supabase/server.ts",
    runtime: "server",
    key: "publishable",
    purpose: "Server Components, Server Actions, and Route Handlers",
  },
  {
    file: ".env.local",
    runtime: "server",
    key: "secret",
    purpose: "service role key stays server-only and is never used in browser code",
  },
];`,
  },
  checklist: [
    "Browser client memakai publishable configuration yang memang dapat tersedia di browser.",
    "Server client dipakai untuk Server Component, Server Action, atau Route Handler.",
    "Service role key tetap server-only dan bukan bagian Client Component.",
    "Boundary map tidak menggantikan getClaims atau policy RLS.",
    "Preview tidak memakai environment variable atau Supabase project nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "boundary-type", label: "SupabaseBoundary memetakan runtime dan jenis key.", type: "contains", target: 'runtime: "browser" | "server";\n  key: "publishable" | "secret";', valueIncludes: 'runtime: "browser" | "server";\n  key: "publishable" | "secret";' },
      { id: "browser-client", label: "Browser client memakai publishable key.", type: "contains", target: 'file: "lib/supabase/client.ts",\n    runtime: "browser",\n    key: "publishable"', valueIncludes: 'file: "lib/supabase/client.ts",\n    runtime: "browser",\n    key: "publishable"' },
      { id: "server-client", label: "Server client dipetakan terpisah.", type: "contains", target: 'file: "lib/supabase/server.ts",\n    runtime: "server",\n    key: "publishable"', valueIncludes: 'file: "lib/supabase/server.ts",\n    runtime: "server",\n    key: "publishable"' },
      { id: "service-role-private", label: "Service role key tetap secret dan server-only.", type: "contains", target: 'file: ".env.local",\n    runtime: "server",\n    key: "secret",\n    purpose: "service role key stays server-only and is never used in browser code"', valueIncludes: 'file: ".env.local",\n    runtime: "server",\n    key: "secret",\n    purpose: "service role key stays server-only and is never used in browser code"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca boundary map. Preview tidak membaca environment variable, membuat Supabase client, atau menjalankan database query nyata.",
    lines: [
      "Browser dan server memiliki utility Supabase yang terpisah.",
      "Publishable configuration berbeda dari secret server-only.",
      "Service role key tidak pernah menjadi bagian browser code.",
    ],
  },
  skillTags: ["Next.js", "Supabase", "Client Boundaries", "Environment Variables"],
};

export const modelUserOwnedRlsPolicyChallenge: CodingChallenge = {
  id: "model-user-owned-rls-policy",
  lessonId: "nextjs-rls-concept",
  title: "Model user-owned RLS policy",
  description:
    "Susun policy reading map untuk data learning note agar operasi select dan insert hanya berlaku untuk row milik identity saat ini.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah model policy reading, bukan SQL yang dijalankan ke database.",
    "Tambahkan policy select untuk row yang memiliki user_id sama dengan auth.uid().",
    "Tambahkan policy insert dengan with check untuk user_id yang sama.",
    "Jelaskan bahwa policy berjalan di database, bukan hanya UI filter.",
    "Cek otomatis membaca model RLS. Preview tidak membuat table atau policy Supabase nyata.",
  ],
  starterCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type RlsPolicy = {
  table: string;
  operation: "select" | "insert" | "update";
  clause: "using" | "with check";
  condition: string;
};

export const learningNotePolicies: RlsPolicy[] = [
  {
    table: "learning_notes",
    operation: "select",
    clause: "using",
    condition: "true",
  },
];`,
  },
  solutionCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type RlsPolicy = {
  table: string;
  operation: "select" | "insert" | "update";
  clause: "using" | "with check";
  condition: string;
};

export const learningNotePolicies: RlsPolicy[] = [
  {
    table: "learning_notes",
    operation: "select",
    clause: "using",
    condition: "auth.uid() = user_id",
  },
  {
    table: "learning_notes",
    operation: "insert",
    clause: "with check",
    condition: "auth.uid() = user_id",
  },
];`,
  },
  checklist: [
    "Model membedakan operation select dan insert.",
    "SELECT memakai using untuk row yang terlihat.",
    "INSERT memakai with check untuk row baru.",
    "Kedua policy membandingkan identity dengan user_id row.",
    "Practice ini tidak membuat atau menonaktifkan RLS database nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "policy-type", label: "RlsPolicy memetakan operation dan clause.", type: "contains", target: 'operation: "select" | "insert" | "update";\n  clause: "using" | "with check";', valueIncludes: 'operation: "select" | "insert" | "update";\n  clause: "using" | "with check";' },
      { id: "select-policy", label: "Select policy memakai using dan ownership condition.", type: "contains", target: 'operation: "select",\n    clause: "using",\n    condition: "auth.uid() = user_id"', valueIncludes: 'operation: "select",\n    clause: "using",\n    condition: "auth.uid() = user_id"' },
      { id: "insert-policy", label: "Insert policy memakai with check dan ownership condition.", type: "contains", target: 'operation: "insert",\n    clause: "with check",\n    condition: "auth.uid() = user_id"', valueIncludes: 'operation: "insert",\n    clause: "with check",\n    condition: "auth.uid() = user_id"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca cara kamu memetakan policy. Preview tidak menjalankan SQL, membuat table, atau mengevaluasi RLS Supabase nyata.",
    lines: [
      "Select hanya melihat note dengan user_id milik identity saat ini.",
      "Insert hanya menerima note baru untuk identity yang sama.",
      "Policy berada di database dan tidak bergantung pada filter UI.",
    ],
  },
  skillTags: ["Supabase", "RLS", "Authorization", "Data Security"],
};

export const extractProfileServiceLayerChallenge: CodingChallenge = {
  id: "extract-profile-service-layer",
  lessonId: "nextjs-service-layer",
  title: "Extract profile service layer",
  description:
    "Lengkapi getCurrentProfile sebagai service server yang memverifikasi claims lalu membaca profile user saat ini.",
  instructions: [
    "Fokus di tab TSX.",
    "Anggap file ini sebagai lib/services/profile-service.ts.",
    "Tambahkan server-only dan import createClient dari utility server Supabase.",
    "Gunakan getClaims sebelum query profiles.",
    "Query profile berdasarkan id dari claims, bukan userId yang dikirim browser.",
    "Cek otomatis membaca service structure. Preview tidak menghubungkan Supabase atau menjalankan query.",
  ],
  starterCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `export async function getCurrentProfile() {
  return null;
}`,
  },
  solutionCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `import "server-only";

import { createClient } from "@/lib/supabase/server";

export async function getCurrentProfile() {
  const supabase = await createClient();
  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();
  const userId = claimsData?.claims.sub;

  if (claimsError || !userId) {
    return null;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("id, display_name, bio")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw new Error("Profile belum bisa dimuat.");
  }

  return data;
}`,
  },
  checklist: [
    "Service ditandai server-only.",
    "Identity diverifikasi dengan getClaims sebelum query profile.",
    "Query menggunakan id dari claims, bukan parameter browser.",
    "Query memilih kolom profile yang memang diperlukan UI.",
    "Preview tidak menjalankan Supabase client atau profile query nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "server-only", label: "Service ditandai server-only.", type: "contains", target: 'import "server-only";', valueIncludes: 'import "server-only";' },
      { id: "server-client", label: "Service memakai utility server Supabase.", type: "contains", target: 'import { createClient } from "@/lib/supabase/server";', valueIncludes: 'import { createClient } from "@/lib/supabase/server";' },
      { id: "service-export", label: "getCurrentProfile diexport sebagai async function.", type: "contains", target: "export async function getCurrentProfile() {", valueIncludes: "export async function getCurrentProfile() {" },
      { id: "claims-check", label: "Identity diperiksa dengan getClaims.", type: "contains", target: "await supabase.auth.getClaims();", valueIncludes: "await supabase.auth.getClaims();" },
      { id: "claims-user", label: "User id berasal dari claims.", type: "contains", target: "const userId = claimsData?.claims.sub;", valueIncludes: "const userId = claimsData?.claims.sub;" },
      { id: "profile-query", label: "Query profile memakai id user saat ini.", type: "contains", target: '.from("profiles")\n    .select("id, display_name, bio")\n    .eq("id", userId)', valueIncludes: '.from("profiles")\n    .select("id, display_name, bio")\n    .eq("id", userId)' },
      { id: "service-error", label: "Service memberi error aman ketika profile gagal dimuat.", type: "contains", target: 'throw new Error("Profile belum bisa dimuat.");', valueIncludes: 'throw new Error("Profile belum bisa dimuat.");' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca struktur service server. Preview tidak membuat client Supabase, memverifikasi token, atau membaca profile database nyata.",
    lines: [
      "Service mendapat identity dari claims sebelum melakukan query.",
      "UI dapat memanggil satu function bernama jelas untuk profile saat ini.",
      "RLS tetap menjadi proteksi database di luar struktur service ini.",
    ],
  },
  skillTags: ["Next.js", "Supabase", "Service Layer", "Server Components"],
};

export const planUserDataPersistenceFlowChallenge: CodingChallenge = {
  id: "plan-user-data-persistence-flow",
  lessonId: "nextjs-persisting-user-data",
  title: "Plan user data persistence flow",
  description:
    "Susun langkah persistence untuk learning note mulai dari validasi input hingga state sukses atau error tanpa mengambil user_id dari form browser.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah flow map, bukan Server Action yang menjalankan database write.",
    "Tambahkan validasi content sebelum write.",
    "Tambahkan getClaims sebagai sumber identity user server-side.",
    "Tambahkan upsert learning_notes dengan user_id dari claims dan state success/error.",
    "Cek otomatis membaca flow. Preview tidak mengirim FormData atau menyimpan row Supabase nyata.",
  ],
  starterCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type PersistenceStep = {
  order: number;
  action: string;
  detail: string;
};

export const saveNoteFlow: PersistenceStep[] = [
  {
    order: 1,
    action: "write row",
    detail: "use hidden userId from form",
  },
];`,
  },
  solutionCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type PersistenceStep = {
  order: number;
  action: string;
  detail: string;
};

export const saveNoteFlow: PersistenceStep[] = [
  {
    order: 1,
    action: "validate content",
    detail: "require 1-500 characters before database write",
  },
  {
    order: 2,
    action: "getClaims",
    detail: "read verified user id on the server",
  },
  {
    order: 3,
    action: "upsert learning_notes",
    detail: "write user_id from claims with content",
  },
  {
    order: 4,
    action: "return UI state",
    detail: "show success or helpful error message",
  },
];`,
  },
  checklist: [
    "Content divalidasi sebelum database write.",
    "Identity diambil dengan getClaims pada server.",
    "Payload memakai user_id dari claims dan content terbatas.",
    "UI menerima state success atau error yang dapat ditindaklanjuti.",
    "Practice tidak mengirim FormData atau mengubah database nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "flow-type", label: "PersistenceStep memetakan urutan dan detail flow.", type: "contains", target: "type PersistenceStep = {", valueIncludes: "type PersistenceStep = {" },
      { id: "validate-content", label: "Flow memvalidasi content lebih dulu.", type: "contains", target: 'order: 1,\n    action: "validate content",\n    detail: "require 1-500 characters before database write"', valueIncludes: 'order: 1,\n    action: "validate content",\n    detail: "require 1-500 characters before database write"' },
      { id: "claims-step", label: "Flow membaca identity dengan getClaims.", type: "contains", target: 'order: 2,\n    action: "getClaims",\n    detail: "read verified user id on the server"', valueIncludes: 'order: 2,\n    action: "getClaims",\n    detail: "read verified user id on the server"' },
      { id: "upsert-step", label: "Flow mengarah ke upsert user-owned note.", type: "contains", target: 'order: 3,\n    action: "upsert learning_notes",\n    detail: "write user_id from claims with content"', valueIncludes: 'order: 3,\n    action: "upsert learning_notes",\n    detail: "write user_id from claims with content"' },
      { id: "ui-state", label: "Flow mengembalikan success atau error ke UI.", type: "contains", target: 'order: 4,\n    action: "return UI state",\n    detail: "show success or helpful error message"', valueIncludes: 'order: 4,\n    action: "return UI state",\n    detail: "show success or helpful error message"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca urutan persistence. Preview tidak menjalankan Server Action, menerima FormData, atau menyimpan learning note ke database nyata.",
    lines: [
      "Input diperiksa sebelum write dilakukan.",
      "Ownership berasal dari identity yang diverifikasi server-side.",
      "UI mengetahui apakah note berhasil disimpan atau perlu diperbaiki.",
    ],
  },
  skillTags: ["Next.js", "Supabase", "Persistence", "Async UI"],
};

export const modelUserProfileRowChallenge: CodingChallenge = {
  id: "model-user-profile-row",
  lessonId: "nextjs-profile-rows",
  title: "Model user profile row",
  description:
    "Modelkan data profile aplikasi yang memakai auth user id sebagai identity tetap dan update input yang tidak mengizinkan id diubah dari browser.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat ProfileRow dengan id, displayName, bio, dan updatedAt.",
    "Buat UpdateProfileInput yang hanya dapat mengubah displayName dan bio.",
    "Tambahkan profile schema map yang menjelaskan id sebagai auth user primary key.",
    "Jangan menaruh password, token, atau isAdmin pada profile editable ini.",
    "Cek otomatis membaca data model. Preview tidak membuat table atau profile row Supabase nyata.",
  ],
  starterCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type ProfileRow = {
  id: string;
  password: string;
};

type UpdateProfileInput = ProfileRow;

export const profileSchema = {
  table: "profiles",
  identity: "browser user id",
};`,
  },
  solutionCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type ProfileRow = {
  id: string;
  displayName: string;
  bio: string | null;
  updatedAt: string;
};

type UpdateProfileInput = Pick<ProfileRow, "displayName" | "bio">;

export const profileSchema = {
  table: "profiles",
  identity: "id is the auth user primary key",
  rls: "auth.uid() = id for private profile access",
};`,
  },
  checklist: [
    "ProfileRow menyimpan field aplikasi yang diperlukan UI.",
    "Update input tidak dapat mengubah id profile.",
    "Profile identity memakai auth user primary key.",
    "RLS private profile dicatat sebagai auth.uid() = id.",
    "Practice tidak membuat schema, table, atau profile row nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "profile-type", label: "ProfileRow memiliki id dan field UI profile.", type: "contains", target: 'type ProfileRow = {\n  id: string;\n  displayName: string;\n  bio: string | null;\n  updatedAt: string;\n};', valueIncludes: 'type ProfileRow = {\n  id: string;\n  displayName: string;\n  bio: string | null;\n  updatedAt: string;\n};' },
      { id: "update-input", label: "UpdateProfileInput hanya memakai displayName dan bio.", type: "contains", target: 'type UpdateProfileInput = Pick<ProfileRow, "displayName" | "bio">;', valueIncludes: 'type UpdateProfileInput = Pick<ProfileRow, "displayName" | "bio">;' },
      { id: "profile-table", label: "Schema map memakai table profiles.", type: "contains", target: 'table: "profiles",', valueIncludes: 'table: "profiles",' },
      { id: "profile-identity", label: "Schema map memakai auth user primary key.", type: "contains", target: 'identity: "id is the auth user primary key",', valueIncludes: 'identity: "id is the auth user primary key",' },
      { id: "profile-rls", label: "Schema map mencatat RLS profile private.", type: "contains", target: 'rls: "auth.uid() = id for private profile access",', valueIncludes: 'rls: "auth.uid() = id for private profile access",' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Cek otomatis membaca model ProfileRow. Preview tidak membuat Supabase table, mengubah auth.users, atau menyimpan profile user nyata.",
    lines: [
      "Profile memuat data UI yang terpisah dari credential auth.",
      "Browser dapat mengirim field editable tanpa menentukan identity row sendiri.",
      "RLS private profile mengikat row pada auth user yang tepat.",
    ],
  },
  skillTags: ["Supabase", "Profiles", "RLS", "TypeScript"],
};

export const buildSupabaseIntegrationCheckpointChallenge: CodingChallenge = {
  id: "build-supabase-integration-checkpoint",
  lessonId: "nextjs-supabase-backend-integration-assessment",
  title: "Build Supabase integration checkpoint",
  description:
    "Susun feature map untuk browser/server client, profile service, user-owned note, RLS, dan secret yang tetap server-only.",
  instructions: [
    "Fokus di tab TSX.",
    "Ini adalah checkpoint structure untuk integration, bukan database runtime preview.",
    "Tambahkan browser dan server Supabase client di file yang terpisah.",
    "Tambahkan profile service yang memakai getClaims dan profile table RLS.",
    "Tambahkan learning note user-owned dengan ownership user_id dari claims.",
    "Catat service role key sebagai server-only di .env.local dan tidak di-commit.",
  ],
  starterCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type DataFeature = {
  path: string;
  role: string;
  boundary: "browser" | "server" | "database";
  detail: string;
};

const dataFeatures: DataFeature[] = [
  {
    path: "app/dashboard/page.tsx",
    role: "dashboard query",
    boundary: "browser",
    detail: "uses service role key for all learner data",
  },
];

export default dataFeatures;`,
  },
  solutionCode: {
    ...nextSupabasePracticePreviewCode,
    tsx: `type DataFeature = {
  path: string;
  role: string;
  boundary: "browser" | "server" | "database";
  detail: string;
};

const dataFeatures: DataFeature[] = [
  {
    path: "lib/supabase/client.ts",
    role: "browser Supabase client",
    boundary: "browser",
    detail: "uses publishable URL and key for Client Components",
  },
  {
    path: "lib/supabase/server.ts",
    role: "server Supabase client",
    boundary: "server",
    detail: "uses cookies for Server Components, Actions, and Route Handlers",
  },
  {
    path: "lib/services/profile-service.ts",
    role: "profile service",
    boundary: "server",
    detail: "getClaims before selecting private profile data",
  },
  {
    path: "public.profiles",
    role: "user profile row",
    boundary: "database",
    detail: "id references auth user and RLS uses auth.uid() = id",
  },
  {
    path: "public.learning_notes",
    role: "user-owned note",
    boundary: "database",
    detail: "user_id comes from claims and RLS limits each row owner",
  },
  {
    path: ".env.local",
    role: "server configuration",
    boundary: "server",
    detail: "service role key stays private and is not committed",
  },
];

export default dataFeatures;`,
  },
  checklist: [
    "Browser and server Supabase clients memiliki file serta boundary berbeda.",
    "Profile service berada di server dan memverifikasi claims sebelum query.",
    "Profile dan note memiliki ownership serta RLS di database.",
    "Service role key tidak berada di browser atau commit.",
    "Checkpoint ini memetakan design; ia tidak menjalankan database atau security policy nyata.",
  ],
  reactPractice: { mode: "structure", framework: "next" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "feature-type", label: "DataFeature map dibuat.", type: "contains", target: "type DataFeature = {", valueIncludes: "type DataFeature = {" },
      { id: "browser-client", label: "Browser client dipetakan ke lib/supabase/client.ts.", type: "contains", target: 'path: "lib/supabase/client.ts",\n    role: "browser Supabase client",\n    boundary: "browser"', valueIncludes: 'path: "lib/supabase/client.ts",\n    role: "browser Supabase client",\n    boundary: "browser"' },
      { id: "server-client", label: "Server client dipetakan ke lib/supabase/server.ts.", type: "contains", target: 'path: "lib/supabase/server.ts",\n    role: "server Supabase client",\n    boundary: "server"', valueIncludes: 'path: "lib/supabase/server.ts",\n    role: "server Supabase client",\n    boundary: "server"' },
      { id: "profile-service", label: "Profile service memeriksa getClaims.", type: "contains", target: 'path: "lib/services/profile-service.ts",\n    role: "profile service",\n    boundary: "server",\n    detail: "getClaims before selecting private profile data"', valueIncludes: 'path: "lib/services/profile-service.ts",\n    role: "profile service",\n    boundary: "server",\n    detail: "getClaims before selecting private profile data"' },
      { id: "profile-row", label: "Profile row memakai auth user dan RLS.", type: "contains", target: 'path: "public.profiles",\n    role: "user profile row",\n    boundary: "database",\n    detail: "id references auth user and RLS uses auth.uid() = id"', valueIncludes: 'path: "public.profiles",\n    role: "user profile row",\n    boundary: "database",\n    detail: "id references auth user and RLS uses auth.uid() = id"' },
      { id: "note-row", label: "Learning note memakai claims dan RLS ownership.", type: "contains", target: 'path: "public.learning_notes",\n    role: "user-owned note",\n    boundary: "database",\n    detail: "user_id comes from claims and RLS limits each row owner"', valueIncludes: 'path: "public.learning_notes",\n    role: "user-owned note",\n    boundary: "database",\n    detail: "user_id comes from claims and RLS limits each row owner"' },
      { id: "private-key", label: "Service role key tetap private dan tidak di-commit.", type: "contains", target: 'path: ".env.local",\n    role: "server configuration",\n    boundary: "server",\n    detail: "service role key stays private and is not committed"', valueIncludes: 'path: ".env.local",\n    role: "server configuration",\n    boundary: "server",\n    detail: "service role key stays private and is not committed"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target Next.js",
    description:
      "Checkpoint membaca feature map integration. Preview tidak menghubungkan Supabase, membuat cookie, menjalankan RLS, atau menggunakan environment variable nyata.",
    lines: [
      "Client boundaries, service layer, dan database ownership memiliki peran terpisah.",
      "RLS melindungi profile dan note user-owned di database.",
      "Credential sensitif tidak menjadi bagian browser atau source control.",
    ],
  },
  skillTags: ["Next.js", "Supabase", "RLS", "Service Layer", "Readiness Checkpoint"],
};
