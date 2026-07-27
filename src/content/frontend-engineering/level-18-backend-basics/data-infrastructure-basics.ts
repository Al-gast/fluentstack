import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const dataInfrastructurePracticeCode = { html: "", css: "", js: "" };

export const dataInfrastructureBasicsModule: Module = {
  id: "data-infrastructure-basics",
  trackId: "frontend-engineering",
  title: "Data and Infrastructure Basics",
  slug: "data-and-infrastructure-basics",
  description:
    "Membaca data relational, backend platform, cache, dan file upload flow agar frontend dapat mengintegrasikan serta mendiagnosis product data dengan jelas.",
  order: 58,
  lessonIds: [
    "sql-basics",
    "postgresql-basics",
    "supabase-or-prisma-basics",
    "redis-basics",
    "file-upload-concepts",
    "data-infrastructure-assessment",
  ],
  estimatedHours: 9,
  skillTags: ["SQL", "PostgreSQL", "Supabase", "Prisma", "Redis", "File Uploads", "Data Integration"],
};

export const sqlBasicsLesson: Lesson = {
  id: "sql-basics",
  trackId: "frontend-engineering",
  moduleId: "data-infrastructure-basics",
  title: "SQL Basics",
  slug: "sql-basics",
  description:
    "Membaca tabel, row, column, serta query SELECT sederhana agar frontend dapat memahami data yang menjadi sumber UI.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Membedakan table, row, dan column dalam data aplikasi",
    "Membaca SELECT, FROM, WHERE, dan ORDER BY pada query sederhana",
    "Menghubungkan hasil query dengan data yang dirender UI",
    "Menyadari bahwa frontend membaca contract data, bukan menjalankan query production secara langsung",
  ],
  skillTags: ["SQL", "Data Modeling", "API Contracts", "Frontend Integration"],
  blocks: [
    {
      id: "sql-basics-intro",
      type: "text",
      title: "UI biasanya berawal dari row yang dipilih backend",
      content:
        "Database relational menyimpan data dalam table. Table courses dapat memiliki column id, title, published, dan updated_at. Satu row mewakili satu course. Saat Course Catalog menampilkan beberapa card, backend biasanya membaca row yang cocok dengan kebutuhan product, lalu mengirim shape response yang telah menjadi API contract. Frontend tidak perlu menjadi database administrator untuk memahami flow ini, tetapi perlu bisa bertanya: table mana sumber data ini, column mana yang benar-benar dipakai UI, filter apa yang berlaku, dan apakah urutan hasil terlihat masuk akal.\n\nSQL adalah bahasa untuk membaca atau mengubah data di banyak database relational. Di module ini kita hanya membaca SELECT sederhana. Jangan menjalankan query pada production, mengubah schema, atau menganggap query contoh sebagai API public. Query menjadi alat komunikasi untuk memahami sumber data dan memeriksa asumsi saat integration.",
    },
    {
      id: "sql-basics-example",
      type: "code-example",
      title: "Baca query catalog dari atas ke bawah",
      language: "sql",
      code: [
        "SELECT id, title",
        "FROM courses",
        "WHERE published = true",
        "ORDER BY updated_at DESC;",
      ].join("\n"),
      explanation:
        "SELECT memilih column id dan title. FROM menunjukkan table courses. WHERE hanya mengambil course published. ORDER BY meminta hasil diurutkan dari updated_at terbaru ke lama karena DESC. Query ini tidak meminta seluruh row dengan SELECT *, tidak mengubah data, dan belum menjelaskan authorization atau API response. Backend tetap menentukan query, policy, serta contract yang aman.",
    },
    {
      id: "sql-basics-coding-practice",
      type: "coding-practice",
      challengeId: "read-course-catalog-query",
    },
    {
      id: "sql-basics-quick-check",
      type: "quick-check",
      question: "Bagian mana dari query yang membatasi agar hanya course published yang dibaca?",
      options: ["WHERE published = true", "SELECT id, title", "FROM courses", "ORDER BY updated_at DESC"],
      correctAnswer: "WHERE published = true",
      explanation: "WHERE menyaring row yang dikembalikan. SELECT memilih column, FROM memilih sumber table, dan ORDER BY menentukan urutan hasil.",
    },
    {
      id: "sql-basics-callout",
      type: "callout",
      variant: "important",
      title: "Query bukan pengganti contract dan policy",
      content:
        "Membaca SQL membantu frontend memahami data, tetapi frontend tidak boleh menyimpulkan semua row dapat ditampilkan hanya karena column ada di table. API contract, authorization server, dan database policy menentukan data yang benar-benar boleh diterima user. Saat response tidak sesuai, kumpulkan endpoint, filter product, response shape, dan user context sebelum mengubah UI.",
    },
    {
      id: "sql-basics-summary",
      type: "summary",
      points: [
        "Table menyimpan kumpulan row; column menyimpan satu jenis nilai pada row.",
        "SELECT memilih column, FROM memilih table, WHERE menyaring row, dan ORDER BY menentukan urutan.",
        "Frontend memakai hasil data melalui API atau service contract, bukan menjalankan query production seenaknya.",
        "Query kecil membantu membaca asumsi data di balik UI.",
        "Berikutnya, kita melihat PostgreSQL sebagai database relational dan bagaimana table saling berhubungan.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["sql-basics-intro", "sql-basics-example", "sql-basics-coding-practice", "sql-basics-quick-check", "sql-basics-callout", "sql-basics-summary"],
  },
};

export const postgresqlBasicsLesson: Lesson = {
  id: "postgresql-basics",
  trackId: "frontend-engineering",
  moduleId: "data-infrastructure-basics",
  title: "PostgreSQL Basics",
  slug: "postgresql-basics",
  description:
    "Memahami relasi, primary key, foreign key, constraint, dan index secara high level agar model UI dapat dibicarakan bersama backend dengan tepat.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan PostgreSQL sebagai relational database untuk data aplikasi",
    "Membedakan primary key dan foreign key pada hubungan sederhana",
    "Memahami constraint sebagai aturan data dan index sebagai bantuan akses data pada level konsep",
    "Menyebut data relationship yang perlu dikonfirmasi sebelum membangun UI",
  ],
  skillTags: ["PostgreSQL", "Relational Data", "Primary Key", "Foreign Key", "Data Modeling"],
  blocks: [
    {
      id: "postgresql-basics-intro",
      type: "text",
      title: "Relasi membuat data product tidak perlu diulang",
      content:
        "PostgreSQL adalah relational database: data aplikasi biasanya dimodelkan dalam table yang saling terkait. Dalam Course Admin, table courses dapat memiliki id sebagai primary key, yaitu identifier unik bagi satu course. Table course_notes dapat menyimpan course_id sebagai foreign key yang merujuk ke courses.id. Dengan begitu, satu course dapat memiliki banyak note tanpa menyalin title course ke setiap row note.\n\nConstraint adalah aturan yang membantu menjaga data tetap masuk akal, misalnya id unik, title tidak boleh kosong, atau course_id harus merujuk course yang ada. Index membantu database menemukan data tertentu lebih efisien pada pola query tertentu. Frontend perlu tahu mengapa relation dan constraint memengaruhi response atau error, tetapi belum perlu merancang migration, memilih index, atau melakukan query planning.",
    },
    {
      id: "postgresql-basics-example",
      type: "code-example",
      title: "Satu course dan banyak note",
      language: "sql",
      code: [
        "courses",
        "  id (primary key)",
        "  title",
        "",
        "course_notes",
        "  id (primary key)",
        "  course_id (foreign key -> courses.id)",
        "  body",
      ].join("\n"),
      explanation:
        "course_notes.course_id membuat setiap note dapat dikaitkan ke satu course. UI course detail dapat meminta note untuk course aktif melalui backend contract. Bila user mencoba membuat note untuk course yang tidak ada, constraint atau service validation dapat menolak action. Jangan memakai nama field relation sebagai bukti bahwa user berhak membaca atau menulis semua row; authorization dan Row Level Security bila ada tetap menjadi boundary tersendiri.",
    },
    {
      id: "postgresql-basics-coding-practice",
      type: "coding-practice",
      challengeId: "map-course-note-relation",
    },
    {
      id: "postgresql-basics-quick-check",
      type: "quick-check",
      question: "Apa peran course_notes.course_id pada contoh ini?",
      options: ["Foreign key yang menghubungkan note ke courses.id.", "Primary key yang unik untuk semua course.", "Index visual pada CourseCard.", "Value cache yang boleh ditaruh di browser."],
      correctAnswer: "Foreign key yang menghubungkan note ke courses.id.",
      explanation: "course_id menyimpan rujukan ke course yang menjadi parent. id pada masing-masing table biasanya menjadi primary key row tersebut.",
    },
    {
      id: "postgresql-basics-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan memakai denormalisasi atau index sebagai solusi pertama",
      content:
        "UI lambat, response kosong, atau relation hilang belum otomatis berarti database harus diberi index atau data harus disalin ke table lain. Cek dahulu API request, filter, policy, response shape, loading state, dan error evidence. Perubahan schema, constraint, serta index adalah keputusan backend/data yang perlu context nyata serta owner yang tepat.",
    },
    {
      id: "postgresql-basics-summary",
      type: "summary",
      points: [
        "PostgreSQL menyimpan data relational dalam table yang dapat saling terkait.",
        "Primary key mengidentifikasi satu row; foreign key menghubungkan row dengan table lain.",
        "Constraint menjaga aturan data; index membantu akses data pada pola tertentu.",
        "Frontend perlu membaca relationship untuk memahami contract, bukan mendesain database sendiri.",
        "Berikutnya, kita membandingkan Supabase sebagai backend platform dan Prisma sebagai ORM layer.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["postgresql-basics-intro", "postgresql-basics-example", "postgresql-basics-coding-practice", "postgresql-basics-quick-check", "postgresql-basics-callout", "postgresql-basics-summary"],
  },
};

export const supabaseOrPrismaBasicsLesson: Lesson = {
  id: "supabase-or-prisma-basics",
  trackId: "frontend-engineering",
  moduleId: "data-infrastructure-basics",
  title: "Supabase or Prisma Basics",
  slug: "supabase-or-prisma-basics",
  description:
    "Membandingkan backend platform dan ORM mental model supaya frontend tahu kapan akses data berada pada client, service server, atau backend team.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan Supabase sebagai platform yang menyediakan Postgres dan layanan backend terkait",
    "Menjelaskan Prisma sebagai ORM/tooling untuk aplikasi Node.js atau TypeScript di server",
    "Membedakan browser configuration yang publishable dari secret server",
    "Menentukan pertanyaan boundary sebelum mengintegrasikan data",
  ],
  skillTags: ["Supabase", "Prisma", "ORM", "Row Level Security", "Server Boundaries"],
  blocks: [
    {
      id: "supabase-or-prisma-basics-intro",
      type: "text",
      title: "Platform dan ORM menyelesaikan peran yang berbeda",
      content:
        "Supabase adalah backend platform yang dibangun di atas PostgreSQL dan menyediakan layanan seperti Auth, Storage, Realtime, serta database access. Dalam arsitektur tertentu, browser dapat memakai client Supabase dengan configuration publishable, tetapi hanya bila table dan Row Level Security policy dirancang benar. Secret atau service role key tetap hanya berada pada server environment.\n\nPrisma adalah ORM untuk aplikasi Node.js atau TypeScript. Ia membantu kode server memakai model dan client yang typed untuk mengakses database. Prisma bukan database dan tidak membuat browser aman mengakses data. Baik memakai Supabase, Prisma, atau backend service lain, pertanyaan frontend tetap sama: siapa yang menegakkan permission, endpoint atau service apa yang mengirim data, data mana yang boleh berada di browser, dan bagaimana loading/error state dipulihkan.",
    },
    {
      id: "supabase-or-prisma-basics-example",
      type: "code-example",
      title: "Boundary data Course Admin",
      language: "ts",
      code: [
        'const dataBoundary = {',
        '  supabaseBrowserClient: "Publishable configuration with RLS-protected access",',
        '  prismaServerService: "Server-side application code queries the database",',
        '  privateSecret: "Server environment only",',
        '  frontendRole: "Render allowed data and recover from loading or error states",',
        "};",
      ].join("\n"),
      explanation:
        "Contoh ini adalah peta peran, bukan configuration yang bisa langsung dipaste. Supabase dan Prisma dapat dipakai pada project berbeda atau bersama service lain. Yang penting, public browser configuration bukan secret, policy tidak dipindah ke UI, dan access data yang sensitif tidak dibuktikan hanya dengan menyembunyikan button.",
    },
    {
      id: "supabase-or-prisma-basics-coding-practice",
      type: "coding-practice",
      challengeId: "choose-course-data-boundary",
    },
    {
      id: "supabase-or-prisma-basics-quick-check",
      type: "quick-check",
      question: "Pernyataan mana yang paling tepat untuk Supabase client yang dipakai browser?",
      options: ["Akses harus mengikuti RLS/policy dan browser tidak boleh menerima secret server.", "Browser boleh memakai service role key selama button admin disembunyikan.", "RLS dapat digantikan dengan conditional rendering.", "Semua table aman diakses karena memakai TypeScript."],
      correctAnswer: "Akses harus mengikuti RLS/policy dan browser tidak boleh menerima secret server.",
      explanation: "TypeScript dan UI guard membantu kualitas aplikasi, tetapi policy pada backend/database tetap menegakkan access. Secret server tidak boleh masuk browser bundle.",
    },
    {
      id: "supabase-or-prisma-basics-callout",
      type: "callout",
      variant: "warning",
      title: "Client convenience tidak menghapus backend responsibility",
      content:
        "SDK yang mudah dipakai bukan alasan untuk menaruh service role key, DATABASE_URL, atau credential provider di browser. Demikian juga ORM typed tidak menggantikan validation, authorization, atau observability. Bila architecture belum jelas, hentikan sebelum integration dan konfirmasi client boundary, RLS/policy, owner data, serta server environment variable.",
    },
    {
      id: "supabase-or-prisma-basics-summary",
      points: [
        "Supabase adalah backend platform dengan PostgreSQL dan layanan terkait.",
        "Prisma adalah ORM/tooling untuk kode server, bukan database atau browser security layer.",
        "Browser hanya memakai configuration yang memang publishable dan tetap tunduk pada policy.",
        "Secret dan service access berada pada server environment.",
        "Berikutnya, kita melihat Redis sebagai infrastruktur untuk cache, session-like state, atau pekerjaan antrian pada level konsep.",
      ],
      type: "summary",
    },
  ],
  completionRule: {
    requiredBlockIds: ["supabase-or-prisma-basics-intro", "supabase-or-prisma-basics-example", "supabase-or-prisma-basics-coding-practice", "supabase-or-prisma-basics-quick-check", "supabase-or-prisma-basics-callout", "supabase-or-prisma-basics-summary"],
  },
};

export const redisBasicsLesson: Lesson = {
  id: "redis-basics",
  trackId: "frontend-engineering",
  moduleId: "data-infrastructure-basics",
  title: "Redis Basics",
  slug: "redis-basics",
  description:
    "Mengenali kapan cache, session store, atau queue-like infrastructure mungkin terlibat agar frontend tidak salah membaca stale data atau delayed product state.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan Redis sebagai data structure server pada level konsep",
    "Mengenali cache, session-like store, dan queue-like use case sederhana",
    "Membedakan stale data dari UI bug atau permission error",
    "Menentukan evidence frontend sebelum mengeskalasi cache issue",
  ],
  skillTags: ["Redis", "Caching", "Sessions", "Queues", "Debugging"],
  blocks: [
    {
      id: "redis-basics-intro",
      type: "text",
      title: "Cache mempercepat akses, tetapi membawa pertanyaan freshness",
      content:
        "Redis adalah data structure server yang sering dipakai untuk kebutuhan seperti cache, session-like state, rate limiting, atau pekerjaan queue-like. Pada level frontend, kamu tidak perlu mengelola Redis command atau cluster. Yang penting adalah mengenali pattern product: Course Catalog mungkin cepat karena daftar public disimpan sementara sebagai cache; status session mungkin dibantu service state; atau email setelah user submit form diproses asynchronous lewat queue-like workflow.\n\nCache bukan copy data yang selalu benar selamanya. Jika title course baru saja diubah tetapi list masih menunjukkan nilai lama, symptom dapat berasal dari cache, revalidation, API, optimistic UI, atau browser state. Kumpulkan kapan update dilakukan, endpoint/route yang dibaca, data yang diharapkan versus data yang diterima, account/environment, dan apakah refresh mengubah symptom. Jangan memutuskan untuk menonaktifkan cache dari frontend tanpa owner service.",
    },
    {
      id: "redis-basics-example",
      type: "code-example",
      title: "Klasifikasikan use case, bukan implementasinya",
      language: "ts",
      code: [
        "const infrastructureUseCases = {",
        '  catalogSnapshot: "cache",',
        '  signedInSessionLookup: "session-store",',
        '  sendCourseInvitation: "queue-like-work",',
        "};",
      ].join("\n"),
      explanation:
        "Catalog public dapat memakai cache untuk mengurangi read berulang. Session lookup dapat memakai store yang membantu auth flow, bergantung architecture. Invitation email tidak harus selesai sebelum UI menampilkan success; service dapat mencatat job lalu worker memprosesnya. Contoh ini tidak menyatakan setiap project harus memakai Redis untuk ketiganya.",
    },
    {
      id: "redis-basics-coding-practice",
      type: "coding-practice",
      challengeId: "classify-course-infrastructure-use-cases",
    },
    {
      id: "redis-basics-quick-check",
      type: "quick-check",
      question: "Setelah edit title course, UI masih menampilkan title lama. Tindakan frontend pertama yang paling bertanggung jawab adalah",
      options: ["Catat waktu update, request/response atau route yang dibaca, expected versus actual data, lalu cek revalidation contract.", "Hapus semua cache infrastructure dari browser.", "Anggap database pasti rusak dan buat index baru.", "Tampilkan data lama sebagai success tanpa memberi user cara recovery."],
      correctAnswer: "Catat waktu update, request/response atau route yang dibaca, expected versus actual data, lalu cek revalidation contract.",
      explanation: "Stale data memiliki banyak kemungkinan sumber. Evidence frontend membantu owner API/cache memeriksa freshness contract tanpa membuat perubahan infrastructure yang spekulatif.",
    },
    {
      id: "redis-basics-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Cache bukan tempat sembarang data private",
      content:
        "Jangan menyimpulkan response personal boleh dibagikan ke semua user karena feature menjadi cepat. Cache key, scope user/organization, invalidation, dan policy adalah contract backend. Frontend perlu memperlakukan data private sesuai auth boundary dan menampilkan state refresh atau retry yang jujur bila freshness belum pasti.",
    },
    {
      id: "redis-basics-summary",
      type: "summary",
      points: [
        "Redis dapat dipakai untuk cache, session-like state, atau pekerjaan queue-like tergantung architecture.",
        "Cache membawa contract freshness: data dapat sementara stale dan perlu revalidation yang jelas.",
        "Frontend mengumpulkan expected versus actual data, waktu, route, dan environment sebelum escalation.",
        "Cache tidak menggantikan authorization atau membuat data private aman dibagikan.",
        "Berikutnya, kita membaca file upload sebagai flow product dari file input sampai storage dan metadata.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["redis-basics-intro", "redis-basics-example", "redis-basics-coding-practice", "redis-basics-quick-check", "redis-basics-callout", "redis-basics-summary"],
  },
};

export const fileUploadConceptsLesson: Lesson = {
  id: "file-upload-concepts",
  trackId: "frontend-engineering",
  moduleId: "data-infrastructure-basics",
  title: "File Upload Concepts",
  slug: "file-upload-concepts",
  description:
    "Memetakan file input, storage object, metadata, permission, serta loading/error UI agar upload feature dapat diintegrasikan dan di-QA dengan aman.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan file object di storage dari metadata di database",
    "Menjelaskan flow upload dari pilihan file sampai UI success/error",
    "Memahami client check sebagai UX feedback, bukan security enforcement",
    "Menentukan state serta evidence yang perlu diuji pada upload feature",
  ],
  skillTags: ["File Uploads", "Storage", "FormData", "Product Flows", "Error States"],
  blocks: [
    {
      id: "file-upload-concepts-intro",
      type: "text",
      title: "File dan informasi tentang file biasanya disimpan terpisah",
      content:
        "Saat learner menambahkan attachment PDF pada course note, browser memilih File dari input. Client dapat memberi feedback awal seperti ukuran atau jenis file yang diharapkan, lalu mengirim file sesuai upload contract. Storage service menyimpan object file, sedangkan database dapat menyimpan metadata seperti attachment id, course_id, owner id, object path, file name yang aman ditampilkan, content type, dan ukuran. UI kemudian memperbarui daftar attachment atau memberi recovery bila upload gagal.\n\nFile input adalah untrusted input. Validasi client membantu experience dan menghindari request yang jelas salah, tetapi server/storage policy tetap perlu memeriksa identity, authorization, limit, serta aturan yang relevan. Jangan menyebut preview browser sebagai bukti file aman, jangan menjadikan file name sebagai identity user, dan jangan memasukkan secret upload credential ke client code.",
    },
    {
      id: "file-upload-concepts-example",
      type: "code-example",
      title: "Flow attachment yang dapat dibaca frontend",
      language: "bash",
      code: [
        "1. User memilih file melalui input.",
        "2. UI memberi feedback size/type awal dan state uploading.",
        "3. Browser mengirim file sesuai upload contract.",
        "4. Server atau storage policy memeriksa identity, permission, dan limits.",
        "5. Storage menyimpan object file; database menyimpan metadata serta ownership.",
        "6. UI refetch atau menerima hasil lalu menampilkan success, preview aman, atau recovery error.",
      ].join("\n"),
      explanation:
        "FormData dapat merepresentasikan field form dan file untuk request multipart sesuai contract. Namun detail endpoint, signed upload, scanning, preview processing, dan serving URL ditentukan backend/storage provider. Frontend bertanggung jawab memberi state yang jelas, mengirim input sesuai contract, dan tidak menampilkan file sebagai berhasil sebelum result yang dipercaya diterima.",
    },
    {
      id: "file-upload-concepts-coding-practice",
      type: "coding-practice",
      challengeId: "map-course-attachment-upload-flow",
    },
    {
      id: "file-upload-concepts-quick-check",
      type: "quick-check",
      question: "Manakah contoh metadata attachment, bukan object file itu sendiri?",
      options: ["course_id, owner_id, object path, content type, dan size.", "Isi byte PDF yang disimpan storage.", "Preview DOM element yang sedang terlihat.", "Password user yang memilih file."],
      correctAnswer: "course_id, owner_id, object path, content type, dan size.",
      explanation: "Metadata membantu aplikasi mencari, mengaitkan, dan mengatur akses attachment. Object file disimpan di storage; keduanya tetap membutuhkan policy dan contract yang benar.",
    },
    {
      id: "file-upload-concepts-callout",
      type: "callout",
      variant: "warning",
      title: "Client-side file check bukan security gate",
      content:
        "Mengecek extension, MIME type, atau size di browser berguna untuk feedback cepat, tetapi input dapat dimanipulasi dan browser tidak menjadi otoritas keamanan. Server/storage tetap menentukan file mana yang diterima, siapa yang boleh upload atau membaca, serta bagaimana file diproses. Laporkan gagal upload dengan request context dan error aman, bukan dengan menyimpan file credential atau raw response sensitif di UI.",
    },
    {
      id: "file-upload-concepts-summary",
      type: "summary",
      points: [
        "Storage menyimpan object file; database menyimpan metadata, relation, dan ownership.",
        "Upload flow membutuhkan selected, uploading, success, dan error/recovery UI state.",
        "Client check membantu UX, tetapi server/storage policy tetap menegakkan security dan limits.",
        "File preview atau nama file bukan bukti file aman atau user authorized.",
        "Berikutnya, Uji Kompetensi menyatukan SQL, relationship, service boundary, cache, dan file upload flow.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["file-upload-concepts-intro", "file-upload-concepts-example", "file-upload-concepts-coding-practice", "file-upload-concepts-quick-check", "file-upload-concepts-callout", "file-upload-concepts-summary"],
  },
};

export const dataInfrastructureAssessmentLesson: Lesson = {
  id: "data-infrastructure-assessment",
  trackId: "frontend-engineering",
  moduleId: "data-infrastructure-basics",
  title: "Uji Kompetensi Data and Infrastructure Basics",
  slug: "data-infrastructure-assessment",
  description:
    "Checkpoint untuk membaca data flow Course Admin dan menjelaskan responsibility frontend, backend service, database, cache, serta storage dengan tepat.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Membaca data relational dan API/service flow yang mendukung UI",
    "Menentukan boundary Supabase/Prisma, policy, cache, dan storage secara high level",
    "Membedakan metadata attachment dari object file",
    "Menulis integration note yang dapat dipakai backend atau product team untuk QA",
  ],
  skillTags: ["SQL", "PostgreSQL", "Data Flows", "Caching", "File Uploads", "Readiness Checkpoint"],
  blocks: [
    {
      id: "data-infrastructure-assessment-recap",
      type: "text",
      title: "Checkpoint: trace satu data flow tanpa mengklaim ownership backend",
      content:
        "Course Admin menampilkan Course Catalog dari data courses yang hanya published. Course detail dapat menampilkan course_notes melalui course_id. Admin mengubah title course lalu Catalog kadang masih memperlihatkan title lama sampai refresh. Admin juga dapat menambahkan attachment PDF ke note. Product ingin UI selected, uploading, success, dan error yang jelas. Backend team menyebut object file masuk storage private, sedangkan attachment metadata disimpan dalam table course_attachments dengan owner dan course relation.\n\nCheckpoint ini tidak meminta kamu menulis migration, mengelola Redis, membuat policy, atau mengunggah file nyata. Petakan table/column/relation yang relevan, service boundary yang mengirim data, kemungkinan freshness cache, dan flow upload sampai metadata. Kesiapan berarti dapat mengkomunikasikan evidence serta pertanyaan yang tepat tanpa memindahkan permission, secret, atau security decision ke browser.",
    },
    { id: "data-infrastructure-assessment-quiz", type: "quiz", quizId: "data-infrastructure-assessment-quiz" },
    { id: "data-infrastructure-assessment-coding-practice", type: "coding-practice", challengeId: "diagnose-course-data-infrastructure-checkpoint" },
    {
      id: "data-infrastructure-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis data flow note untuk Course Admin. Sebutkan action UI, API atau service boundary, table/column/relation yang mungkin terlibat, data yang disimpan sebagai metadata versus object storage, ownership atau permission rule yang perlu dikonfirmasi, serta selected/loading/error/success state. Jelaskan satu kemungkinan stale cache dan evidence yang kamu kumpulkan sebelum escalation. Tambahkan satu local/staging QA scenario, satu pertanyaan untuk backend/data owner, dan satu hal yang tidak boleh dipindahkan ke browser.",
      placeholder:
        "Catalog membaca course yang published dari service data; response lalu dirender sebagai CourseCard. course_notes.course_id merujuk courses.id. Saat attachment dipilih, UI memeriksa feedback size/type awal dan menampilkan uploading. Storage private menyimpan object file, sedangkan course_attachments menyimpan course_id, owner_id, object path, content type, dan size. Saya perlu mengonfirmasi policy siapa yang dapat upload serta membaca attachment. Jika title stale, saya catat waktu edit, route/request, expected versus actual response, account, dan apakah refresh atau revalidate memperbarui UI. Saya QA upload gagal dan refresh Catalog. Saya tidak memasukkan secret storage key atau authorization decision ke browser.",
      minimumCharacters: 850,
      checklist: [
        "Menyebut table/column/relation atau storage metadata secara spesifik.",
        "Membedakan object file, metadata, ownership, dan browser UI state.",
        "Menjelaskan cache freshness sebagai kemungkinan yang perlu evidence, bukan kesimpulan instan.",
        "Mencatat QA scenario serta pertanyaan untuk owner backend/data.",
        "Tidak memindahkan secret, policy, atau security enforcement ke browser.",
      ],
      modelAnswer:
        "Course Catalog meminta daftar course published melalui service atau endpoint yang disepakati. Data source dapat berasal dari courses dengan column id, title, published, dan updated_at. Pada detail, course_notes.course_id merujuk courses.id sehingga UI dapat meminta note untuk course aktif. Saat admin memilih attachment, UI memberi feedback size/type awal lalu menampilkan state uploading. Object PDF disimpan pada storage private; table course_attachments menyimpan attachment id, course_id, owner_id, object path, content type, size, dan status yang diperlukan UI. Saya perlu mengonfirmasi policy siapa yang dapat upload atau membaca attachment dan bagaimana service mengembalikan error field atau permission error. Bila title baru masih stale, saya catat waktu update, route/request, expected versus actual response, user/environment, dan apakah refresh atau revalidate mengubah hasil sebelum meminta owner memeriksa cache. Saya QA list empty, edit lalu refresh, upload success, upload failure, dan access denied attachment. Saya tidak memasukkan service key, DATABASE_URL, atau decision authorization ke browser.",
    },
    {
      id: "data-infrastructure-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca data docs untuk memperjelas contract, bukan untuk menebak infrastructure",
      description:
        "Pilih sumber sesuai platform project. Fokus pada table/row/column, policy boundary, storage metadata, dan browser form data; abaikan query tuning, migration depth, Redis internals, atau signed URL implementation yang belum diperlukan.",
      links: [
        {
          source: "PostgreSQL",
          title: "Querying a Table",
          url: "https://www.postgresql.org/docs/current/tutorial-select.html",
          focus: ["SELECT, FROM, WHERE, dan ORDER BY pada query sederhana.", "Membaca result row dan column tanpa menjalankan perubahan data."],
          ignoreForNow: ["JOIN lanjutan, query planner, transaction tuning, dan index design detail."],
        },
        {
          source: "Supabase Docs",
          title: "Database overview",
          url: "https://supabase.com/docs/guides/database/overview",
          focus: ["Supabase project memakai Postgres database.", "Table, data, dan Row Level Security sebagai boundary data access.", "Dashboard/SQL editor sebagai konteks owner database, bukan fitur browser app."],
          ignoreForNow: ["Extensions, replication, backup policy, dan performance tuning."],
        },
        {
          source: "Supabase Docs",
          title: "Row Level Security",
          url: "https://supabase.com/docs/guides/database/postgres/row-level-security",
          focus: ["Policy table sebagai enforcement access.", "Mengapa browser access tetap membutuhkan RLS."],
          ignoreForNow: ["Menulis policy SQL sebelum architecture dan ownership data dipahami."],
        },
        {
          source: "Prisma Docs",
          title: "Prisma ORM overview",
          url: "https://www.prisma.io/docs/orm",
          focus: ["Prisma Client, schema, dan migration sebagai tooling aplikasi server.", "Prisma sebagai ORM, bukan database atau browser client."],
          ignoreForNow: ["Setup CLI, migration workflow, adapter configuration, dan query optimization."],
        },
        {
          source: "Redis Docs",
          title: "Redis data types",
          url: "https://redis.io/docs/latest/develop/data-types/",
          focus: ["Redis sebagai data structure server.", "Cache, queue-like, dan event-processing use case pada level konsep."],
          ignoreForNow: ["Command detail, cluster operations, eviction policy, dan internal data structures."],
        },
        {
          source: "Supabase Docs",
          title: "Storage overview",
          url: "https://supabase.com/docs/guides/storage",
          focus: ["File storage, bucket, dan fine-grained access control.", "Perbedaan file object/storage flow dengan database metadata."],
          ignoreForNow: ["S3 protocol, CDN tuning, resumable uploads, dan signed URL implementation."],
        },
        {
          source: "MDN Web Docs",
          title: "FormData",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
          focus: ["FormData sebagai pasangan field/value termasuk file pada request.", "Hubungan multipart form data dan fetch contract."],
          ignoreForNow: ["Menganggap FormData sebagai upload security mechanism atau detail XMLHttpRequest legacy."],
        },
      ],
      followUpAction:
        "Pilih satu data flow dari local app atau staging aman: load list, update record, atau upload attachment. Trace action UI, request/service, table atau storage destination, owner/policy question, selected/loading/error/success state, dan expected versus actual result. Catat detail non-sensitif saja. Jangan menjalankan query production, membagikan service key, atau menandai upload berhasil sebelum trusted result diterima.",
    },
    {
      id: "data-infrastructure-assessment-summary",
      type: "summary",
      points: [
        "SQL, relational tables, service boundaries, cache, dan storage menjelaskan jalur data di belakang UI.",
        "PostgreSQL relation membantu membaca sumber data; policy tetap menentukan access yang diizinkan.",
        "Supabase dan Prisma memiliki peran berbeda; secret serta server access tidak masuk browser.",
        "Cache memerlukan evidence freshness, sedangkan file upload memisahkan object storage dan metadata.",
        "Kamu siap melanjutkan ke Security Basics untuk menilai risk product dan browser boundary dengan mental model data yang lebih lengkap.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["data-infrastructure-assessment-recap", "data-infrastructure-assessment-quiz", "data-infrastructure-assessment-coding-practice", "data-infrastructure-assessment-writing-practice", "data-infrastructure-assessment-documentation-bridge", "data-infrastructure-assessment-summary"],
    passingQuizScore: 70,
  },
};

export const dataInfrastructureAssessmentQuiz: Quiz = {
  id: "data-infrastructure-assessment-quiz",
  lessonId: "data-infrastructure-assessment",
  title: "Uji Kompetensi Data and Infrastructure Basics",
  passingScore: 70,
  questions: [
    {
      id: "sql-where",
      type: "multiple-choice",
      question: "Pada query catalog, apa peran WHERE published = true?",
      options: ["Menyaring row yang dikembalikan.", "Mengubah semua course menjadi published.", "Memilih table source.", "Menentukan primary key."],
      correctAnswer: "Menyaring row yang dikembalikan.",
      explanation: "WHERE membatasi row sesuai kondisi. Ia bukan statement untuk mengubah data.",
    },
    {
      id: "foreign-key",
      type: "multiple-choice",
      question: "Mengapa course_notes memiliki course_id?",
      options: ["Untuk merujuk course parent melalui foreign key.", "Untuk menyimpan seluruh PDF attachment.", "Untuk mengganti policy authorization.", "Untuk membuat browser cache selalu fresh."],
      correctAnswer: "Untuk merujuk course parent melalui foreign key.",
      explanation: "Foreign key menghubungkan note dengan course. Permission untuk membaca atau menulis tetap perlu ditegakkan oleh backend/database policy.",
    },
    {
      id: "supabase-boundary",
      type: "multiple-choice",
      question: "Mana boundary yang benar saat browser memakai Supabase client?",
      options: ["Browser memakai configuration publishable; RLS/policy menegakkan data access; secret tetap server-only.", "Browser menyimpan service role key agar query lebih cepat.", "Conditional rendering menggantikan RLS.", "Prisma menjalankan query langsung di DOM."],
      correctAnswer: "Browser memakai configuration publishable; RLS/policy menegakkan data access; secret tetap server-only.",
      explanation: "Client SDK bukan security boundary. Secret dan privileged access tetap berada di server environment.",
    },
    {
      id: "redis-use-case",
      type: "multiple-choice",
      question: "Use case mana yang paling dekat dengan cache?",
      options: ["Menyimpan snapshot daftar course public untuk mengurangi read berulang.", "Menaruh password user di browser.", "Mengganti foreign key dengan CSS class.", "Menjadikan upload client check sebagai policy server."],
      correctAnswer: "Menyimpan snapshot daftar course public untuk mengurangi read berulang.",
      explanation: "Cache dapat mempercepat read berulang, tetapi memiliki freshness dan scope contract yang perlu dijaga.",
    },
    {
      id: "upload-metadata",
      type: "multiple-choice",
      question: "Mana yang seharusnya menjadi metadata attachment di database?",
      options: ["course_id, owner_id, object path, content type, dan size.", "Seluruh byte PDF sebagai UI state React.", "Secret storage key.", "Hanya extension file tanpa ownership."],
      correctAnswer: "course_id, owner_id, object path, content type, dan size.",
      explanation: "Object file berada di storage. Metadata menyimpan relation dan informasi yang dibutuhkan aplikasi untuk menampilkan atau mengatur akses attachment.",
    },
    {
      id: "stale-evidence",
      type: "multiple-choice",
      question: "Apa evidence terbaik sebelum mengeskalasi kemungkinan stale cache?",
      options: ["Waktu update, route/request, expected versus actual data, account/environment, dan hasil refresh/revalidation.", "Asumsi Redis pasti rusak.", "Menghapus cache seluruh platform dari browser.", "Membuat index database tanpa data query."],
      correctAnswer: "Waktu update, route/request, expected versus actual data, account/environment, dan hasil refresh/revalidation.",
      explanation: "Evidence membantu membedakan cache freshness dari API response, UI state, permission, atau issue lain sebelum owner service melakukan perubahan.",
    },
  ],
};

export const readCourseCatalogQueryChallenge: CodingChallenge = {
  id: "read-course-catalog-query",
  lessonId: "sql-basics",
  title: "Read course catalog query",
  description: "Nyatakan bagian query catalog yang kamu baca tanpa menjalankan SQL atau mengakses database.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseCatalogQuery dengan table courses, columns id dan title, filter published = true, serta orderBy updated_at DESC.",
    "Gunakan string untuk filter dan orderBy agar fokus pada pembacaan query.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...dataInfrastructurePracticeCode,
    ts: ["const courseCatalogQuery = {", "  // Petakan bagian query yang dibaca.", "};"].join("\n"),
  },
  solutionCode: {
    ...dataInfrastructurePracticeCode,
    ts: [
      "const courseCatalogQuery = {",
      '  table: "courses",',
      '  columns: ["id", "title"],',
      '  filter: "published = true",',
      '  orderBy: "updated_at DESC",',
      "};",
    ].join("\n"),
  },
  checklist: ["Table source dicatat.", "Column UI dicatat.", "Filter published dan urutan data jelas.", "Tidak ada statement query yang dijalankan ke database."],
  validation: {
    mode: "ts",
    checks: [
      { id: "table", label: "Table courses tersedia.", type: "contains", valueIncludes: 'table: "courses"' },
      { id: "id-column", label: "Column id tersedia.", type: "contains", valueIncludes: '"id"' },
      { id: "title-column", label: "Column title tersedia.", type: "contains", valueIncludes: '"title"' },
      { id: "filter", label: "Filter published tersedia.", type: "contains", valueIncludes: 'filter: "published = true"' },
      { id: "order", label: "Urutan terbaru tersedia.", type: "contains", valueIncludes: 'orderBy: "updated_at DESC"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pembacaan query",
    description: "Cek otomatis membaca struktur TypeScript. Preview tidak menjalankan SQL atau membuka database.",
    lines: ["Sumber table dan column UI dapat disebutkan.", "Filter published dipisahkan dari urutan hasil.", "Query dipahami sebagai context data contract."],
  },
  skillTags: ["SQL", "Query Reading", "Data Contracts", "TypeScript"],
};

export const mapCourseNoteRelationChallenge: CodingChallenge = {
  id: "map-course-note-relation",
  lessonId: "postgresql-basics",
  title: "Map course note relation",
  description: "Petakan primary key dan foreign key pada relationship Course Admin secara deklaratif.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseNoteRelation dengan parentTable courses dan parentKey id.",
    "Gunakan childTable course_notes dan foreignKey course_id.",
    "Tambahkan rule yang menjelaskan course_id merujuk courses.id.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...dataInfrastructurePracticeCode,
    ts: ["const courseNoteRelation = {", "  // Map relationship parent dan child.", "};"].join("\n"),
  },
  solutionCode: {
    ...dataInfrastructurePracticeCode,
    ts: [
      "const courseNoteRelation = {",
      '  parentTable: "courses",',
      '  parentKey: "id",',
      '  childTable: "course_notes",',
      '  foreignKey: "course_id",',
      '  rule: "course_id refers to courses.id",',
      "};",
    ].join("\n"),
  },
  checklist: ["Parent table serta key jelas.", "Child table serta foreign key jelas.", "Relationship dibaca tanpa membuat schema atau migration.", "Permission tidak disamakan dengan relationship."],
  validation: {
    mode: "ts",
    checks: [
      { id: "parent-table", label: "Parent table courses tersedia.", type: "contains", valueIncludes: 'parentTable: "courses"' },
      { id: "parent-key", label: "Primary key id tersedia.", type: "contains", valueIncludes: 'parentKey: "id"' },
      { id: "child-table", label: "Child table course_notes tersedia.", type: "contains", valueIncludes: 'childTable: "course_notes"' },
      { id: "foreign-key", label: "Foreign key course_id tersedia.", type: "contains", valueIncludes: 'foreignKey: "course_id"' },
      { id: "rule", label: "Rule relation tersedia.", type: "contains", valueIncludes: "course_id refers to courses.id" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target relationship mapping",
    description: "Cek otomatis membaca mapping TypeScript. Preview tidak membuat table, foreign key, atau database policy.",
    lines: ["courses menjadi parent data.", "course_notes membawa course_id sebagai foreign key.", "Relationship dipisahkan dari authorization policy."],
  },
  skillTags: ["PostgreSQL", "Primary Key", "Foreign Key", "Data Modeling", "TypeScript"],
};

export const chooseCourseDataBoundaryChallenge: CodingChallenge = {
  id: "choose-course-data-boundary",
  lessonId: "supabase-or-prisma-basics",
  title: "Choose course data boundary",
  description: "Nyatakan peran browser, server service, dan secret agar integration tidak menggeser boundary data.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseDataBoundary dengan Supabase browser access yang menyebut RLS.",
    "Nyatakan Prisma access berada pada server-side application code.",
    "Nyatakan privateSecret hanya ada pada server environment.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...dataInfrastructurePracticeCode,
    ts: ["const courseDataBoundary = {", "  // Nyatakan setiap boundary dengan jelas.", "};"].join("\n"),
  },
  solutionCode: {
    ...dataInfrastructurePracticeCode,
    ts: [
      "const courseDataBoundary = {",
      '  supabaseBrowserAccess: "publishable client configuration with RLS",',
      '  prismaAccess: "server-side application code",',
      '  privateSecret: "server environment only",',
      '  frontendRole: "render allowed data and recover UI state",',
      "};",
    ].join("\n"),
  },
  checklist: ["RLS atau policy disebut untuk browser access.", "Prisma ditempatkan pada server-side app code.", "Secret tetap server-only.", "Frontend role tidak mengambil alih authorization."],
  validation: {
    mode: "ts",
    checks: [
      { id: "supabase", label: "Supabase browser boundary menyebut RLS.", type: "contains", valueIncludes: "supabaseBrowserAccess: \"publishable client configuration with RLS\"" },
      { id: "prisma", label: "Prisma berada di server-side code.", type: "contains", valueIncludes: 'prismaAccess: "server-side application code"' },
      { id: "secret", label: "Secret tetap server-only.", type: "contains", valueIncludes: 'privateSecret: "server environment only"' },
      { id: "frontend", label: "Role frontend terbatas pada UI.", type: "contains", valueIncludes: 'frontendRole: "render allowed data and recover UI state"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target data boundary",
    description: "Cek otomatis membaca reasoning TypeScript. Preview tidak menginisialisasi Supabase, Prisma, secret, atau database connection.",
    lines: ["Browser access tunduk pada RLS/policy.", "Prisma berada pada application server.", "Secret tidak masuk browser bundle."],
  },
  skillTags: ["Supabase", "Prisma", "Row Level Security", "Server Boundaries", "TypeScript"],
};

export const classifyCourseInfrastructureUseCasesChallenge: CodingChallenge = {
  id: "classify-course-infrastructure-use-cases",
  lessonId: "redis-basics",
  title: "Classify course infrastructure use cases",
  description: "Klasifikasikan cache, session-like store, dan queue-like work tanpa membangun Redis runtime.",
  instructions: [
    "Fokus di tab TS.",
    "Buat infrastructureUseCases untuk catalogSnapshot, signedInSessionLookup, dan sendCourseInvitation.",
    "Gunakan cache, session-store, dan queue-like-work sebagai kategori berturut-turut.",
    "Jangan menulis command Redis atau configuration infrastructure.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...dataInfrastructurePracticeCode,
    ts: ["const infrastructureUseCases = {", "  // Klasifikasikan use case product.", "};"].join("\n"),
  },
  solutionCode: {
    ...dataInfrastructurePracticeCode,
    ts: [
      "const infrastructureUseCases = {",
      '  catalogSnapshot: "cache",',
      '  signedInSessionLookup: "session-store",',
      '  sendCourseInvitation: "queue-like-work",',
      "};",
    ].join("\n"),
  },
  checklist: ["Catalog snapshot dikenali sebagai cache.", "Session lookup dibedakan dari data UI biasa.", "Invitation async dikenali sebagai queue-like work.", "Tidak ada asumsi semua project memakai Redis dengan pola sama."],
  validation: {
    mode: "ts",
    checks: [
      { id: "cache", label: "Catalog snapshot diklasifikasikan sebagai cache.", type: "contains", valueIncludes: 'catalogSnapshot: "cache"' },
      { id: "session", label: "Session lookup diklasifikasikan sebagai session store.", type: "contains", valueIncludes: 'signedInSessionLookup: "session-store"' },
      { id: "queue", label: "Invitation diklasifikasikan sebagai queue-like work.", type: "contains", valueIncludes: 'sendCourseInvitation: "queue-like-work"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target infrastructure classification",
    description: "Cek otomatis membaca klasifikasi TypeScript. Preview tidak menjalankan Redis, cache invalidation, session store, atau queue.",
    lines: ["Cache, session-like store, dan queue-like work memiliki peran berbeda.", "Frontend mengenali symptom serta contract, bukan mengelola infrastructure.", "Freshness dan access scope tetap perlu owner backend."],
  },
  skillTags: ["Redis", "Caching", "Sessions", "Queues", "TypeScript"],
};

export const mapCourseAttachmentUploadFlowChallenge: CodingChallenge = {
  id: "map-course-attachment-upload-flow",
  lessonId: "file-upload-concepts",
  title: "Map course attachment upload flow",
  description: "Susun flow attachment yang memisahkan file object, metadata, security boundary, dan UI state.",
  instructions: [
    "Fokus di tab TS.",
    "Buat attachmentUploadFlow dengan clientChecks size and type, storage private course-files bucket, dan metadataTable course_attachments.",
    "Tambahkan successState show attached file dan errorState show upload recovery.",
    "Jangan menulis secret, signed URL, atau pretend upload runtime.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...dataInfrastructurePracticeCode,
    ts: ["const attachmentUploadFlow = {", "  // Map object storage, metadata, dan UI state.", "};"].join("\n"),
  },
  solutionCode: {
    ...dataInfrastructurePracticeCode,
    ts: [
      "const attachmentUploadFlow = {",
      '  clientChecks: "size and type",',
      '  storageDestination: "private course-files bucket",',
      '  metadataTable: "course_attachments",',
      '  successState: "show attached file",',
      '  errorState: "show upload recovery",',
      "};",
    ].join("\n"),
  },
  checklist: ["Client feedback dipisahkan dari storage policy.", "Object storage dan metadata table dipisahkan.", "Success serta error state dapat dipahami user.", "Tidak ada secret atau upload runtime palsu."],
  validation: {
    mode: "ts",
    checks: [
      { id: "checks", label: "Client checks size dan type tersedia.", type: "contains", valueIncludes: 'clientChecks: "size and type"' },
      { id: "storage", label: "Private storage destination tersedia.", type: "contains", valueIncludes: 'storageDestination: "private course-files bucket"' },
      { id: "metadata", label: "Metadata table tersedia.", type: "contains", valueIncludes: 'metadataTable: "course_attachments"' },
      { id: "success", label: "Success state tersedia.", type: "contains", valueIncludes: 'successState: "show attached file"' },
      { id: "error", label: "Recovery error state tersedia.", type: "contains", valueIncludes: 'errorState: "show upload recovery"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target attachment upload flow",
    description: "Cek otomatis membaca struktur TypeScript. Preview tidak memilih file, mengunggah object, atau memverifikasi storage policy.",
    lines: ["Client check memberi feedback awal.", "Private storage object dipisahkan dari course_attachments metadata.", "UI memiliki success dan recovery error yang jelas."],
  },
  skillTags: ["File Uploads", "Storage", "Metadata", "Error States", "TypeScript"],
};

export const diagnoseCourseDataInfrastructureCheckpointChallenge: CodingChallenge = {
  id: "diagnose-course-data-infrastructure-checkpoint",
  lessonId: "data-infrastructure-assessment",
  title: "Diagnose course data infrastructure checkpoint",
  description: "Map symptom data ke recovery frontend dan owner boundary tanpa menjalankan query, cache, atau upload.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type DataInfrastructureIssue untuk empty-catalog, attachment-upload-failed, private-file-access-denied, dan stale-course-list.",
    "Map issue ke show-empty-state, show-upload-recovery, show-access-denied, dan check-data-freshness-contract.",
    "Jangan menulis query, secret, cache command, atau storage credential.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...dataInfrastructurePracticeCode,
    ts: ['type DataInfrastructureIssue = "empty-catalog";', "", "function getDataRecovery(issue: DataInfrastructureIssue) {", '  return "show-empty-state";', "}"].join("\n"),
  },
  solutionCode: {
    ...dataInfrastructurePracticeCode,
    ts: [
      'type DataInfrastructureIssue = "empty-catalog" | "attachment-upload-failed" | "private-file-access-denied" | "stale-course-list";',
      "",
      "function getDataRecovery(issue: DataInfrastructureIssue) {",
      '  if (issue === "empty-catalog") return "show-empty-state";',
      '  if (issue === "attachment-upload-failed") return "show-upload-recovery";',
      '  if (issue === "private-file-access-denied") return "show-access-denied";',
      '  return "check-data-freshness-contract";',
      "}",
    ].join("\n"),
  },
  checklist: ["Empty data dibedakan dari error.", "Upload failure memiliki recovery UI.", "Private access denial tidak disamakan dengan file hilang.", "Stale data diarahkan ke freshness contract, bukan perubahan cache spekulatif."],
  validation: {
    mode: "ts",
    checks: [
      { id: "issue-type", label: "Issue union lengkap tersedia.", type: "contains", valueIncludes: '"empty-catalog" | "attachment-upload-failed" | "private-file-access-denied" | "stale-course-list"' },
      { id: "empty", label: "Empty catalog memiliki empty state.", type: "contains", valueIncludes: 'issue === "empty-catalog") return "show-empty-state"' },
      { id: "upload", label: "Upload failure memiliki recovery.", type: "contains", valueIncludes: 'issue === "attachment-upload-failed") return "show-upload-recovery"' },
      { id: "access", label: "Access denial memiliki UI khusus.", type: "contains", valueIncludes: 'issue === "private-file-access-denied") return "show-access-denied"' },
      { id: "freshness", label: "Stale list diarahkan ke freshness contract.", type: "contains", valueIncludes: 'return "check-data-freshness-contract"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target data infrastructure diagnosis",
    description: "Cek otomatis membaca mapper reasoning TypeScript. Preview tidak menjalankan database query, upload, cache invalidation, atau storage access.",
    lines: ["Empty, upload, access, dan stale-data symptom dipisahkan.", "Recovery frontend memberi context yang tepat.", "Database, policy, cache, dan storage enforcement tetap berada pada boundary terpercaya."],
  },
  skillTags: ["Data Flows", "Caching", "File Uploads", "Error States", "Assessment", "TypeScript"],
};
