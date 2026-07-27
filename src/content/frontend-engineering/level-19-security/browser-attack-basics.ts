import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const browserAttackPracticeCode = { html: "", css: "", js: "" };

export const browserAttackBasicsModule: Module = {
  id: "browser-attack-basics",
  trackId: "frontend-engineering",
  title: "Browser Attack Basics",
  slug: "browser-attack-basics",
  description:
    "Mengenali risiko browser-facing dan memilih rendering, request, input, serta dependency boundary yang lebih aman dalam pekerjaan frontend.",
  order: 59,
  lessonIds: [
    "xss-basics",
    "browser-csrf-basics",
    "cors-risks",
    "input-sanitization",
    "dependency-vulnerabilities",
    "browser-attack-basics-assessment",
  ],
  estimatedHours: 9,
  skillTags: ["XSS", "CSRF", "CORS", "Input Handling", "Dependency Security", "Browser Security"],
};

export const xssBasicsLesson: Lesson = {
  id: "xss-basics",
  trackId: "frontend-engineering",
  moduleId: "browser-attack-basics",
  title: "XSS Basics",
  slug: "xss-basics",
  description:
    "Mengenali kapan content user dapat menjadi risiko rendering dan memilih default text rendering atau sanitization path yang tepat.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan XSS sebagai risiko saat content tidak tepercaya diinterpretasikan sebagai kode atau markup aktif",
    "Membedakan text rendering default dari raw HTML rendering",
    "Menentukan kapan rich text membutuhkan sanitization path yang direview",
    "Memahami CSP sebagai defense-in-depth, bukan pengganti safe rendering",
  ],
  skillTags: ["XSS", "React", "Safe Rendering", "Untrusted Input", "Content Security Policy"],
  blocks: [
    {
      id: "xss-basics-intro",
      type: "text",
      title: "Content user adalah data, bukan instruksi untuk browser",
      content:
        "Cross-Site Scripting atau XSS terjadi ketika content yang tidak tepercaya dapat diperlakukan browser sebagai markup atau code aktif. Pada product sehari-hari, sumbernya dapat berupa review, note, display name, rich text, data CMS, atau response dari integration. Risiko bukan berarti setiap string user otomatis berbahaya. Risiko muncul ketika aplikasi membuka jalur yang mengubah content tersebut dari text menjadi HTML atau context browser lain tanpa boundary yang benar.\n\nReact secara default merender nilai JSX sebagai text, sehingga pola normal seperti menaruh body review di dalam paragraph adalah pilihan aman untuk text biasa. Risiko meningkat saat code memakai raw HTML rendering, DOM API yang menulis HTML, URL dinamis tanpa validasi khusus, atau third-party component yang tidak jelas behavior-nya. Bila product benar-benar membutuhkan rich text, buat jalur khusus dengan source yang jelas, sanitization policy yang direview, dan ownership backend/security yang dapat diaudit.",
    },
    {
      id: "xss-basics-example",
      type: "code-example",
      title: "Default aman untuk review text",
      language: "tsx",
      code: [
        'type CourseReviewProps = {',
        "  body: string;",
        "};",
        "",
        "export function CourseReview({ body }: CourseReviewProps) {",
        "  return <p>{body}</p>;",
        "}",
      ].join("\n"),
      explanation:
        "body dirender sebagai text melalui JSX biasa. Contoh ini bukan rich text renderer dan tidak mencoba mengubah isi review menjadi HTML. Jika requirement meminta formatting HTML, jangan langsung memakai escape hatch raw HTML. Konfirmasi sumber content, sanitization approach, allowed markup, URL policy, test case, dan owner sebelum jalur itu dibuat.",
    },
    {
      id: "xss-basics-coding-practice",
      type: "coding-practice",
      challengeId: "identify-safe-course-review-rendering",
    },
    {
      id: "xss-basics-quick-check",
      type: "quick-check",
      question: "Untuk body review yang hanya perlu tampil sebagai text, pilihan frontend paling aman adalah",
      options: ["Render dengan JSX text biasa dan hindari raw HTML path.", "Mengubah setiap review menjadi raw HTML tanpa review.", "Mempercayai content karena user sudah sign in.", "Mengandalkan CSP saja tanpa memeriksa rendering path."],
      correctAnswer: "Render dengan JSX text biasa dan hindari raw HTML path.",
      explanation: "Default text rendering menjaga data tetap diperlakukan sebagai text. Login tidak membuat semua input tepercaya, dan CSP hanya salah satu lapisan defense, bukan alasan membuka raw HTML path.",
    },
    {
      id: "xss-basics-callout",
      type: "callout",
      variant: "warning",
      title: "Escape hatch membutuhkan alasan dan review",
      content:
        "API raw HTML atau direct DOM HTML bukan shortcut formatting. Jangan memakai jalur tersebut untuk memecahkan line break, markdown, atau content CMS tanpa memahami sanitization dan policy-nya. Jangan menulis atau menguji payload pada production data. Jika menemukan raw HTML rendering yang tidak jelas, catat component, source content, user impact, dan owner yang perlu menilai risk.",
    },
    {
      id: "xss-basics-summary",
      type: "summary",
      points: [
        "XSS berkaitan dengan content tidak tepercaya yang diinterpretasikan browser sebagai markup atau code aktif.",
        "JSX text rendering default adalah pilihan tepat untuk content text biasa.",
        "Rich text membutuhkan jalur sanitization dan ownership yang sengaja dirancang.",
        "CSP membantu membatasi dampak, tetapi tidak menggantikan safe rendering.",
        "Berikutnya, kita melihat CSRF pada mutation yang memakai cookie-based authentication.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["xss-basics-intro", "xss-basics-example", "xss-basics-coding-practice", "xss-basics-quick-check", "xss-basics-callout", "xss-basics-summary"],
  },
};

export const browserCsrfBasicsLesson: Lesson = {
  id: "browser-csrf-basics",
  trackId: "frontend-engineering",
  moduleId: "browser-attack-basics",
  title: "CSRF Basics",
  slug: "csrf-basics",
  description:
    "Memahami mengapa mutation dengan cookie-based auth perlu defense server-side dan mengapa UI atau CORS bukan penggantinya.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan CSRF sebagai risiko request authenticated yang tidak diinginkan",
    "Mengenali mutation cookie-based yang perlu dibaca bersama CSRF contract",
    "Membedakan browser UI, CORS, dan server-side CSRF defense",
    "Menentukan evidence aman untuk melaporkan symptom mutation",
  ],
  skillTags: ["CSRF", "Cookies", "Mutations", "Server Boundaries", "Browser Security"],
  blocks: [
    {
      id: "browser-csrf-basics-intro",
      type: "text",
      title: "Cookie dapat membuat request membawa identity tanpa UI yang kamu lihat",
      content:
        "CSRF atau Cross-Site Request Forgery adalah risiko ketika browser dapat membawa credential user pada request yang tidak dimaksudkan oleh UI aplikasi. Ini terutama perlu dipikirkan pada action yang mengubah data dan memakai cookie-based authentication, misalnya memperbarui profile, membuat payment preference, atau menghapus resource. User mungkin sudah authenticated, tetapi server tetap perlu memeriksa apakah mutation memenuhi CSRF defense sesuai architecture.\n\nFrontend tidak membuat CSRF defense sendiri dengan menyembunyikan button, menambah conditional rendering, atau berharap CORS memblokir semuanya. Frontend mengikuti request contract yang disediakan server/provider, menampilkan pending/success/error state, dan mengumpulkan evidence aman ketika mutation ditolak. Detail defense bergantung deployment dan auth provider; module ini tidak meminta kamu membuat token, mematikan cookie protection, atau mencoba request lintas situs.",
    },
    {
      id: "browser-csrf-basics-example",
      type: "code-example",
      title: "Peta responsibility pada profile mutation",
      language: "ts",
      code: [
        "const profileMutationBoundary = {",
        '  auth: "cookie session",',
        '  frontend: "send approved app action and show result",',
        '  server: "validate authorization and CSRF defense",',
        '  evidence: "endpoint, method, status, environment, and safe UI symptom",',
        "};",
      ].join("\n"),
      explanation:
        "Object ini memisahkan peran, bukan membangun security mechanism. Browser dapat mengirim action dari UI aplikasi sesuai contract. Server tetap memverifikasi authorization dan CSRF defense sebelum mutation diproses. Jika UI mendapat error, report endpoint, method, status atau error category, environment, dan symptom tanpa membagikan cookie value, token, atau credential.",
    },
    {
      id: "browser-csrf-basics-coding-practice",
      type: "coding-practice",
      challengeId: "explain-course-csrf-mutation-boundary",
    },
    {
      id: "browser-csrf-basics-quick-check",
      type: "quick-check",
      question: "Mana tindakan yang tepat untuk mutation dengan cookie session?",
      options: ["Ikuti contract server dan pastikan server/provider menegakkan authorization serta CSRF defense.", "Sembunyikan button mutation dari user biasa lalu anggap action aman.", "Gunakan CORS sebagai satu-satunya authorization rule.", "Simpan cookie value di component untuk memeriksa security."],
      correctAnswer: "Ikuti contract server dan pastikan server/provider menegakkan authorization serta CSRF defense.",
      explanation: "UI mengatur pengalaman pengguna, bukan enforcement security. Server/provider perlu memeriksa request yang mengubah data sesuai architecture.",
    },
    {
      id: "browser-csrf-basics-callout",
      type: "callout",
      variant: "important",
      title: "Report symptom, bukan mengarang defense",
      content:
        "Jika mutation ditolak, jangan menambahkan workaround credential di client. Catat action user, endpoint, method, status atau error category, apakah session terlihat aktif, environment, dan UI recovery yang tampil. Lalu libatkan owner auth/backend untuk membaca CSRF contract. Hindari menulis token, cookie value, password, atau request replay di issue.",
    },
    {
      id: "browser-csrf-basics-summary",
      type: "summary",
      points: [
        "CSRF berkaitan dengan request authenticated yang tidak diinginkan, terutama pada mutation cookie-based.",
        "Server/provider menegakkan authorization dan CSRF defense; frontend mengikuti contract serta memberi UI recovery.",
        "Menyembunyikan button atau memakai CORS tidak menggantikan server defense.",
        "Evidence aman berisi context request dan symptom UI, bukan credential.",
        "Berikutnya, kita membedakan CORS browser policy dari permission dan authorization.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["browser-csrf-basics-intro", "browser-csrf-basics-example", "browser-csrf-basics-coding-practice", "browser-csrf-basics-quick-check", "browser-csrf-basics-callout", "browser-csrf-basics-summary"],
  },
};

export const corsRisksLesson: Lesson = {
  id: "cors-risks",
  trackId: "frontend-engineering",
  moduleId: "browser-attack-basics",
  title: "CORS Risks",
  slug: "cors-risks",
  description:
    "Menghindari asumsi bahwa CORS adalah sistem permission dan memetakan CORS error ke owner API serta recovery UI yang benar.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Menjelaskan CORS sebagai response policy yang dievaluasi browser",
    "Membedakan CORS dari authentication dan authorization",
    "Mengenali evidence saat browser memblokir cross-origin response",
    "Menghindari workaround frontend yang mengubah security boundary",
  ],
  skillTags: ["CORS", "Same-Origin Policy", "Authorization", "API Debugging", "Browser Security"],
  blocks: [
    {
      id: "cors-risks-intro",
      type: "text",
      title: "CORS menjawab browser read policy, bukan siapa yang boleh mengakses data",
      content:
        "Same-origin policy membatasi cara script browser membaca resource dari origin lain. CORS adalah mekanisme response policy yang membuat API server menyatakan origin, method, header, atau credential mode mana yang dapat dibaca browser dalam kondisi tertentu. Karena itu, CORS error biasanya perlu diperiksa oleh owner API, gateway, atau deployment configuration yang mengirim response policy.\n\nCORS bukan authentication dan bukan authorization. API yang menjawab CORS dengan longgar tidak otomatis tahu apakah user boleh membaca resource. Sebaliknya, API yang memiliki CORS policy benar tetap harus memeriksa identity, permission, serta data ownership. Frontend tidak dapat memperbaiki policy dengan menambahkan header response dari fetch client, memakai proxy tidak resmi, atau menganggap request browser blocked sebagai bukti backend data aman.",
    },
    {
      id: "cors-risks-example",
      type: "code-example",
      title: "Pisahkan policy browser dan permission data",
      language: "ts",
      code: [
        "const courseApiBoundary = {",
        '  corsRole: "browser response policy",',
        '  authorizationRole: "server or database policy",',
        '  policyOwner: "API server or gateway",',
        '  frontendEvidence: "app origin, API origin, method, credential mode, and browser symptom",',
        "};",
      ].join("\n"),
      explanation:
        "CORS role menjelaskan apakah script browser di origin tertentu dapat membaca response sesuai server policy. Authorization role menjelaskan apakah identity memiliki permission terhadap resource. Keduanya dapat muncul pada feature yang sama, tetapi owner dan diagnosisnya berbeda.",
    },
    {
      id: "cors-risks-coding-practice",
      type: "coding-practice",
      challengeId: "classify-course-cors-security-boundary",
    },
    {
      id: "cors-risks-quick-check",
      type: "quick-check",
      question: "Mengapa CORS tidak boleh dipakai sebagai satu-satunya access control?",
      options: ["Karena CORS mengatur browser response policy, sedangkan server/database tetap harus memeriksa identity dan permission.", "Karena CORS hanya berlaku untuk CSS.", "Karena CORS membuat semua cookie aman.", "Karena frontend dapat mengubah response header server."],
      correctAnswer: "Karena CORS mengatur browser response policy, sedangkan server/database tetap harus memeriksa identity dan permission.",
      explanation: "CORS membantu browser menegakkan same-origin boundary. Ia tidak menggantikan authorization terhadap resource pada server atau database.",
    },
    {
      id: "cors-risks-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan memperbaiki CORS dari browser client",
      content:
        "Header CORS yang menentukan response dikirim oleh API server atau gateway. Jika browser memblokir response, kumpulkan app origin, API origin, method, credential mode, console message, response context bila tersedia, dan environment. Jangan menaruh credential di URL, menonaktifkan browser protection, atau membuat proxy bypass tanpa owner service.",
    },
    {
      id: "cors-risks-summary",
      type: "summary",
      points: [
        "CORS adalah browser response policy yang diatur API server atau gateway.",
        "CORS, authentication, dan authorization memiliki peran serta owner yang berbeda.",
        "Frontend melaporkan origin, method, credential mode, dan symptom browser untuk diagnosis.",
        "Workaround client tidak menggantikan perubahan policy yang benar pada server.",
        "Berikutnya, kita memilih validation, sanitization, dan rendering path untuk input tidak tepercaya.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["cors-risks-intro", "cors-risks-example", "cors-risks-coding-practice", "cors-risks-quick-check", "cors-risks-callout", "cors-risks-summary"],
  },
};

export const inputSanitizationLesson: Lesson = {
  id: "input-sanitization",
  trackId: "frontend-engineering",
  moduleId: "browser-attack-basics",
  title: "Input Sanitization",
  slug: "input-sanitization",
  description:
    "Membedakan validation, safe rendering, dan sanitization supaya input user diproses sesuai kebutuhan product tanpa membuat false security.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Membedakan client validation, server validation, output encoding, dan sanitization",
    "Menentukan kapan plain text cukup dan kapan rich text membutuhkan boundary tambahan",
    "Memahami input user sebagai untrusted data pada setiap layer",
    "Menyebutkan rule product yang perlu divalidasi server-side",
  ],
  skillTags: ["Input Validation", "Sanitization", "Output Encoding", "Safe Rendering", "Forms"],
  blocks: [
    {
      id: "input-sanitization-intro",
      type: "text",
      title: "Validation dan sanitization menjawab pertanyaan berbeda",
      content:
        "Validation memeriksa apakah input memenuhi rule product: title wajib ada, panjang note sesuai batas, course_id valid, atau file size sesuai limit. Client validation memberi feedback cepat, tetapi server tetap menegakkan rule karena browser input tidak dapat dipercaya. Sanitization berbeda: ia memproses content yang akan diperlakukan sebagai markup agar hanya bentuk yang diizinkan dapat melewati jalur rich text. Untuk plain text, pilihan terbaik biasanya tidak mengubahnya menjadi HTML sama sekali dan merendernya sebagai text.\n\nOutput encoding atau default framework escaping memastikan nilai yang tampil diperlakukan sebagai data pada context render yang sesuai. Tidak ada satu regex atau satu client helper yang dapat menggantikan seluruh boundary. Tentukan dahulu apakah feature benar-benar membutuhkan rich text, URL user-generated, atau hanya text. Lalu pilih policy yang minimal, dapat diuji, dan dimiliki team yang bertanggung jawab.",
    },
    {
      id: "input-sanitization-example",
      type: "code-example",
      title: "Peta handling untuk note Course Admin",
      language: "ts",
      code: [
        "const noteInputHandling = {",
        '  clientValidation: "show required and length feedback",',
        '  serverValidation: "enforce product rules and authorization",',
        '  plainTextRender: "render as text by default",',
        '  richTextException: "use reviewed sanitization before approved HTML rendering",',
        "};",
      ].join("\n"),
      explanation:
        "Client validation meningkatkan UX, tetapi server memastikan rule dan permission. Plain text tidak memerlukan raw HTML path. Jika rich text benar-benar merupakan requirement, sanitization harus menjadi bagian flow yang jelas dan diuji, bukan function acak di component. Contoh ini tidak memilih library atau policy; pilihan tersebut perlu architecture serta security review.",
    },
    {
      id: "input-sanitization-coding-practice",
      type: "coding-practice",
      challengeId: "decide-course-input-handling-boundary",
    },
    {
      id: "input-sanitization-quick-check",
      type: "quick-check",
      question: "Manakah pembagian responsibility yang paling tepat untuk form note?",
      options: ["Client memberi feedback; server menegakkan rule dan authorization; plain text dirender sebagai text.", "Client validation saja cukup karena form memakai TypeScript.", "Semua text harus langsung diubah menjadi HTML.", "Sanitization menggantikan permission server."],
      correctAnswer: "Client memberi feedback; server menegakkan rule dan authorization; plain text dirender sebagai text.",
      explanation: "Setiap layer punya peran: UI membantu user, server menegakkan rule dan access, sedangkan rendering menentukan bagaimana data ditampilkan dengan aman.",
    },
    {
      id: "input-sanitization-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan membangun security dari regex di component",
      content:
        "Regex sederhana dapat membantu format UX tertentu, tetapi bukan sanitization policy umum dan bukan server enforcement. Hindari memotong content secara tak terduga atau menciptakan raw HTML path hanya agar format terlihat cepat jadi. Bila data berasal dari user, CMS, atau external API, catat source, render context, allowed behavior, dan owner validation sebelum merilisnya.",
    },
    {
      id: "input-sanitization-summary",
      type: "summary",
      points: [
        "Client validation memberi feedback; server validation menegakkan rule dan authorization.",
        "Plain text sebaiknya tetap dirender sebagai text melalui framework default.",
        "Sanitization diperlukan pada jalur rich text yang memang disetujui dan direview.",
        "Tidak ada helper client tunggal yang menggantikan policy serta boundary server.",
        "Berikutnya, kita memperlakukan dependency sebagai code yang ikut membawa risk ke product.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["input-sanitization-intro", "input-sanitization-example", "input-sanitization-coding-practice", "input-sanitization-quick-check", "input-sanitization-callout", "input-sanitization-summary"],
  },
};

export const dependencyVulnerabilitiesLesson: Lesson = {
  id: "dependency-vulnerabilities",
  trackId: "frontend-engineering",
  moduleId: "browser-attack-basics",
  title: "Dependency Vulnerabilities",
  slug: "dependency-vulnerabilities",
  description:
    "Mereview alasan, maintenance, source, update, dan browser capability package sebelum menambahkannya ke product.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 55,
  objectives: [
    "Memahami bahwa dependency membawa code dan maintenance risk",
    "Menyusun checklist sebelum menambah package",
    "Membedakan audit signal dari bukti bahwa package pasti aman",
    "Menentukan langkah yang aman saat menemukan advisory atau package yang tidak terpakai",
  ],
  skillTags: ["Dependencies", "Supply Chain", "Package Review", "npm", "Security Awareness"],
  blocks: [
    {
      id: "dependency-vulnerabilities-intro",
      type: "text",
      title: "Setiap package memperluas code yang dipercaya product",
      content:
        "Dependency dapat menghemat waktu, tetapi juga menambah source code, transitive dependency, update responsibility, dan kemungkinan capability browser yang tidak diperlukan. Package untuk markdown, analytics, upload UI, date formatting, atau embed dapat memengaruhi bundle serta data yang diproses product. Risiko bukan alasan untuk tidak pernah memakai library. Tujuannya adalah membuat keputusan yang sadar: apakah requirement benar-benar membutuhkan package ini, apakah platform sudah menyediakan solusi cukup, siapa maintainer/source-nya, kapan terakhir dirawat, dan bagaimana update atau removal akan diuji.\n\nSecurity advisory atau audit tool adalah signal untuk investigasi, bukan instruksi untuk melakukan update buta. Baca package yang terdampak, versi yang dipakai, apakah path product benar-benar memakainya, rekomendasi resmi, breaking change, test coverage, dan owner review. Jangan menyalin package dari snippet tanpa source yang jelas, dan jangan menganggap lockfile membuat semua dependency otomatis bebas risk.",
    },
    {
      id: "dependency-vulnerabilities-example",
      type: "code-example",
      title: "Checklist sebelum menambah package rich content",
      language: "bash",
      code: [
        "1. Nyatakan requirement product yang spesifik.",
        "2. Cek apakah browser, framework, atau package yang sudah ada cukup.",
        "3. Verifikasi source registry dan repository maintainer.",
        "4. Review maintenance signal, license, release note, dan dependency footprint.",
        "5. Catat capability data/browser yang benar-benar diperlukan.",
        "6. Tambahkan dengan version yang disengaja, lalu QA feature dan update path.",
      ].join("\n"),
      explanation:
        "Checklist ini tidak menjamin package aman, tetapi mencegah keputusan berdasarkan nama populer atau snippet singkat. Untuk package yang menangani user content, auth, upload, atau third-party script, naikkan level review dan libatkan owner security/platform bila project memiliki prosesnya.",
    },
    {
      id: "dependency-vulnerabilities-coding-practice",
      type: "coding-practice",
      challengeId: "review-course-package-risk",
    },
    {
      id: "dependency-vulnerabilities-quick-check",
      type: "quick-check",
      question: "Apa respons paling bertanggung jawab saat audit memberi advisory pada dependency?",
      options: ["Identifikasi package dan versi terdampak, baca rekomendasi resmi, nilai penggunaan/impact, lalu update atau mitigasi dengan QA.", "Jalankan update besar di production tanpa test.", "Abaikan karena package tidak ditulis oleh team.", "Hapus lockfile agar advisory hilang."],
      correctAnswer: "Identifikasi package dan versi terdampak, baca rekomendasi resmi, nilai penggunaan/impact, lalu update atau mitigasi dengan QA.",
      explanation: "Audit memberi signal. Team tetap perlu memahami impact dan menguji perubahan agar mitigasi tidak menciptakan regression baru.",
    },
    {
      id: "dependency-vulnerabilities-callout",
      type: "callout",
      variant: "warning",
      title: "Popular bukan berarti cocok atau bebas risk",
      content:
        "Jangan menambahkan package hanya untuk menghindari beberapa baris code yang sudah dapat ditangani platform. Hindari juga package yang meminta capability data atau browser lebih besar dari kebutuhan. Jika package tidak lagi diperlukan, removal yang teruji dapat mengurangi attack surface serta maintenance burden.",
    },
    {
      id: "dependency-vulnerabilities-summary",
      type: "summary",
      points: [
        "Dependency membawa code, transitive dependency, update, dan maintenance responsibility.",
        "Package review dimulai dari requirement, source, maintenance, footprint, capability, dan QA.",
        "Audit advisory adalah signal untuk investigasi serta update teruji, bukan automatic fix.",
        "Mengurangi dependency yang tidak perlu juga merupakan keputusan security yang baik.",
        "Berikutnya, Uji Kompetensi memetakan seluruh browser-facing risk pada satu feature kecil.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["dependency-vulnerabilities-intro", "dependency-vulnerabilities-example", "dependency-vulnerabilities-coding-practice", "dependency-vulnerabilities-quick-check", "dependency-vulnerabilities-callout", "dependency-vulnerabilities-summary"],
  },
};

export const browserAttackBasicsAssessmentLesson: Lesson = {
  id: "browser-attack-basics-assessment",
  trackId: "frontend-engineering",
  moduleId: "browser-attack-basics",
  title: "Uji Kompetensi Browser Attack Basics",
  slug: "browser-attack-basics-assessment",
  description:
    "Checkpoint untuk mengidentifikasi risk browser-facing dan menjelaskan safer alternative tanpa melebih-lebihkan capability frontend.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 90,
  objectives: [
    "Mengidentifikasi unsafe rendering, CSRF boundary, dan CORS misconception pada satu feature",
    "Memilih validation, rendering, atau sanitization path yang proporsional",
    "Mereview package risk dengan evidence dan QA plan",
    "Menulis security note yang defensif serta dapat ditindaklanjuti team",
  ],
  skillTags: ["XSS", "CSRF", "CORS", "Input Handling", "Dependencies", "Readiness Checkpoint"],
  blocks: [
    {
      id: "browser-attack-basics-assessment-recap",
      type: "text",
      title: "Checkpoint: review feature dari source data sampai browser UI",
      content:
        "Course Admin akan merilis feature learner review. Learner mengirim text review dan admin dapat memberi label internal. Product juga mempertimbangkan formatting rich text. Profile preference memakai cookie session dan mutation ke API. App membaca API dari origin berbeda di staging. Team ingin menambahkan package untuk memformat content serta melihat satu advisory pada dependency lama. Requirement belum menjelaskan siapa yang memiliki sanitization policy, apakah CORS dianggap permission, atau bagaimana package baru akan diuji.\n\nPada checkpoint ini, jangan membuat exploit example, raw HTML renderer, proxy workaround, token, atau code untuk melewati browser protection. Identifikasi source input, rendering choice, request boundary, CORS owner, validation/sanitization decision, dan dependency review. Kesiapan berarti dapat menyebut risk secara proporsional, memilih safer alternative, dan mengarahkan pertanyaan ke owner yang tepat.",
    },
    { id: "browser-attack-basics-assessment-quiz", type: "quiz", quizId: "browser-attack-basics-assessment-quiz" },
    { id: "browser-attack-basics-assessment-coding-practice", type: "coding-practice", challengeId: "diagnose-course-browser-risk-checkpoint" },
    {
      id: "browser-attack-basics-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis browser-facing risk review untuk feature learner review. Jelaskan source input dan rendering path, safer alternative bila rich text belum memiliki policy, mutation cookie-based serta boundary CSRF, perbedaan CORS dari authorization, validation versus sanitization, dan package review sebelum penambahan. Tambahkan satu local/staging QA scenario, satu pertanyaan untuk owner backend/security, satu evidence yang dapat dicatat, dan satu hal yang tidak boleh dilakukan di browser. Jangan memakai payload, bypass, credential, atau klaim security yang belum diuji.",
      placeholder:
        "Review learner berasal dari user sehingga default-nya dirender sebagai text. Jika rich text belum punya sanitization policy yang direview, feature tetap memakai plain text sampai source, allowed markup, dan ownership jelas. Mutation profile memakai cookie session; frontend mengikuti contract dan server/provider menegakkan authorization serta CSRF defense. CORS adalah response policy API untuk browser, bukan permission resource. Client validation memberi feedback sedangkan server menegakkan rule. Sebelum menambah package, saya cek requirement, source, maintenance, version, footprint, advisory, serta QA update. Saya QA text review, rejected mutation, CORS symptom, dan package removal fallback. Saya catat component, data source, endpoint/method, environment, serta safe UI symptom. Saya tidak membuat raw HTML workaround, proxy bypass, atau menyimpan secret di browser.",
      minimumCharacters: 900,
      checklist: [
        "Membedakan raw HTML risk dari default text rendering.",
        "Menyebut CSRF server boundary dan CORS misconception secara tepat.",
        "Membedakan validation, sanitization, dan authorization.",
        "Menyusun package review serta QA yang realistis.",
        "Mencatat evidence aman tanpa payload, bypass, secret, atau credential.",
      ],
      modelAnswer:
        "Learner review adalah input user dan harus dianggap untrusted. Untuk feature sekarang, saya merender review sebagai plain text melalui JSX normal. Saya tidak membuka raw HTML path hanya untuk formatting. Jika rich text menjadi requirement, saya meminta owner menentukan source content, allowed markup, sanitization policy, URL policy, test case, dan siapa yang meninjau perubahan. Profile preference memakai cookie session; frontend mengirim action aplikasi sesuai contract dan server/provider tetap memeriksa authorization serta CSRF defense. CORS menjelaskan apakah browser di staging dapat membaca response API lintas origin; ia bukan permission untuk resource. Client validation memberi feedback panjang review, tetapi server menegakkan rule dan access. Sebelum menambah package formatter, saya cek kebutuhan, registry/repository, maintenance, version, license, dependency footprint, advisory resmi, dan fallback tanpa package. Saya QA review text normal, validation error, mutation rejected, CORS symptom, serta update/removal package di staging aman. Evidence yang saya catat mencakup component, source data, rendering path, endpoint/method, origin, environment, dan UI symptom. Saya tidak membuat payload, proxy bypass, raw HTML workaround, atau menyimpan secret/cookie value di browser.",
    },
    {
      id: "browser-attack-basics-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Baca security docs untuk memilih boundary yang tepat",
      description:
        "Gunakan sumber resmi sebagai panduan prevention dan review. Fokus pada safe rendering, request boundary, CORS ownership, serta dependency review; jangan mencoba payload, bypass, offensive scan, atau policy production tanpa owner.",
      links: [
        {
          source: "OWASP",
          title: "Cross Site Scripting Prevention Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
          focus: ["Untrusted content, framework escaping, safe sink, dan HTML sanitization concept.", "Mengapa raw HTML escape hatch membutuhkan review."],
          ignoreForNow: ["Payload crafting, context encoding detail, filter evasion, dan offensive testing."],
        },
        {
          source: "OWASP",
          title: "Cross-Site Request Forgery Prevention Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
          focus: ["CSRF sebagai unwanted authenticated request.", "Server-side defense dan cookie-based application context."],
          ignoreForNow: ["Implementasi token, bypass technique, dan framework-specific configuration detail."],
        },
        {
          source: "MDN Web Docs",
          title: "Content Security Policy",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP",
          focus: ["CSP sebagai defense-in-depth browser policy.", "Mengapa safe rendering tetap diperlukan."],
          ignoreForNow: ["Menulis policy production, nonce/hash strategy, dan reporting infrastructure."],
        },
        {
          source: "MDN Web Docs",
          title: "Cross-Origin Resource Sharing",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
          focus: ["Origin, credential, response policy, dan browser symptom.", "CORS sebagai boundary berbeda dari authorization."],
          ignoreForNow: ["Proxy workaround, bypass, dan deployment configuration tanpa owner API."],
        },
        {
          source: "MDN Web Docs",
          title: "Same-origin policy",
          url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy",
          focus: ["Mengapa browser membatasi cross-origin read.", "Hubungan same-origin policy dan CORS."],
          ignoreForNow: ["Browser isolation internals yang tidak relevan dengan feature saat ini."],
        },
        {
          source: "React",
          title: "Common props: dangerously setting inner HTML",
          url: "https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html",
          focus: ["Mengapa React menandai raw HTML escape hatch sebagai dangerous.", "Default text rendering versus reviewed HTML requirement."],
          ignoreForNow: ["Menggunakan raw HTML API sebelum sanitization path dan owner security jelas."],
        },
        {
          source: "OWASP",
          title: "Vulnerable Dependency Management Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html",
          focus: ["Dependency inventory, advisory triage, update review, dan test setelah perubahan.", "Supply chain awareness tanpa panic update."],
          ignoreForNow: ["Advanced software supply chain architecture, malware analysis, dan offensive scanning."],
        },
      ],
      followUpAction:
        "Review satu feature local React atau Next.js yang menerima input atau memakai package. Catat source input, render path, apakah raw HTML dipakai, cookie/session boundary, origin API, package yang baru atau sensitif, satu risk, dan satu safer alternative. QA scenario dilakukan di local atau staging aman. Jangan menguji payload, mencoba bypass, menyalin credential, atau mengubah production policy tanpa owner.",
    },
    {
      id: "browser-attack-basics-assessment-summary",
      type: "summary",
      points: [
        "Untrusted content membutuhkan render path yang aman; plain text adalah default yang tepat bila rich text tidak diperlukan.",
        "CSRF defense dan authorization berada pada server/provider boundary, sedangkan CORS adalah browser response policy.",
        "Validation, sanitization, output encoding, dan permission memiliki peran yang berbeda.",
        "Dependency perlu direview berdasarkan requirement, source, maintenance, footprint, advisory, serta QA update.",
        "Kamu siap melanjutkan ke Secrets, Tokens, and Permissions untuk memperkuat boundary credential dan honest permission UI.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: ["browser-attack-basics-assessment-recap", "browser-attack-basics-assessment-quiz", "browser-attack-basics-assessment-coding-practice", "browser-attack-basics-assessment-writing-practice", "browser-attack-basics-assessment-documentation-bridge", "browser-attack-basics-assessment-summary"],
    passingQuizScore: 70,
  },
};

export const browserAttackBasicsAssessmentQuiz: Quiz = {
  id: "browser-attack-basics-assessment-quiz",
  lessonId: "browser-attack-basics-assessment",
  title: "Uji Kompetensi Browser Attack Basics",
  passingScore: 70,
  questions: [
    {
      id: "xss-default-rendering",
      type: "multiple-choice",
      question: "Untuk review user yang hanya perlu tampil sebagai text, pilihan paling tepat adalah",
      options: ["Render melalui JSX text biasa dan hindari raw HTML path.", "Selalu ubah review menjadi HTML.", "Percayai content setelah user login.", "Hanya tambahkan CSP tanpa memeriksa component."],
      correctAnswer: "Render melalui JSX text biasa dan hindari raw HTML path.",
      explanation: "Default text rendering menjaga content diperlakukan sebagai data. Rich text hanya perlu jalur tambahan bila requirement, policy, dan sanitization telah jelas.",
    },
    {
      id: "csrf-boundary",
      type: "multiple-choice",
      question: "Siapa yang menegakkan CSRF defense untuk mutation cookie-based?",
      options: ["Server atau auth provider sesuai architecture.", "Conditional rendering pada button.", "CSS app shell.", "CORS header yang ditulis fetch client."],
      correctAnswer: "Server atau auth provider sesuai architecture.",
      explanation: "Frontend mengikuti request contract dan menampilkan result. Server/provider perlu memvalidasi request serta authorization pada boundary terpercaya.",
    },
    {
      id: "cors-not-auth",
      type: "multiple-choice",
      question: "Pernyataan mana yang benar tentang CORS?",
      options: ["CORS mengatur browser response policy dan tidak menggantikan authorization resource.", "CORS membuat semua API public.", "CORS menggantikan server policy jika UI menyembunyikan menu.", "Frontend dapat memperbaiki response policy hanya dengan request header."],
      correctAnswer: "CORS mengatur browser response policy dan tidak menggantikan authorization resource.",
      explanation: "CORS dan authorization adalah boundary berbeda. API server/gateway mengirim CORS policy, sedangkan server/database perlu memeriksa permission.",
    },
    {
      id: "validation-sanitization",
      type: "multiple-choice",
      question: "Mana pembagian yang benar antara validation dan sanitization?",
      options: ["Validation memeriksa rule product; sanitization memproses content untuk jalur markup yang memang disetujui.", "Validation membuat raw HTML selalu aman.", "Sanitization menggantikan authorization.", "Keduanya cukup dilakukan client-side."],
      correctAnswer: "Validation memeriksa rule product; sanitization memproses content untuk jalur markup yang memang disetujui.",
      explanation: "Server tetap menegakkan rule dan authorization. Plain text biasanya tidak perlu diubah menjadi HTML sama sekali.",
    },
    {
      id: "dependency-review",
      type: "multiple-choice",
      question: "Sebelum menambah package untuk content formatting, apa yang perlu direview?",
      options: ["Requirement, source, maintenance, license, footprint, capability, advisory, dan QA update.", "Hanya jumlah download package.", "Nama package yang terlihat populer.", "Apakah snippet dapat langsung dipaste."],
      correctAnswer: "Requirement, source, maintenance, license, footprint, capability, advisory, dan QA update.",
      explanation: "Package review adalah keputusan product dan maintenance, bukan hanya keputusan teknis satu component.",
    },
    {
      id: "risk-reporting",
      type: "multiple-choice",
      question: "Apa isi security note yang aman dan dapat ditindaklanjuti?",
      options: ["Component, source data, render/request context, environment, UI symptom, risk proporsional, dan safer alternative.", "Payload lengkap dan credential user.", "Klaim bahwa product pasti aman tanpa test.", "Instruksi bypass untuk browser protection."],
      correctAnswer: "Component, source data, render/request context, environment, UI symptom, risk proporsional, dan safer alternative.",
      explanation: "Evidence yang jelas membantu owner mengambil tindakan tanpa menyebarkan secret atau mengubah issue menjadi offensive walkthrough.",
    },
  ],
};

export const identifySafeCourseReviewRenderingChallenge: CodingChallenge = {
  id: "identify-safe-course-review-rendering",
  lessonId: "xss-basics",
  title: "Identify safe course review rendering",
  description: "Nyatakan default rendering untuk review user dan boundary saat rich text benar-benar diperlukan.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseReviewRendering dengan contentSource user-generated dan defaultRender render as text.",
    "Nyatakan rawHtml memerlukan reviewed sanitization path.",
    "Tambahkan CSP sebagai defense in depth, bukan pengganti rendering aman.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...browserAttackPracticeCode,
    ts: ["const courseReviewRendering = {", "  // Nyatakan boundary rendering review.", "};"].join("\n"),
  },
  solutionCode: {
    ...browserAttackPracticeCode,
    ts: [
      "const courseReviewRendering = {",
      '  contentSource: "user-generated",',
      '  defaultRender: "render as text",',
      '  rawHtml: "requires reviewed sanitization path",',
      '  defenseInDepth: "CSP supports but does not replace safe rendering",',
      "};",
    ].join("\n"),
  },
  checklist: ["Source content user disebut untrusted.", "Text rendering menjadi default.", "Raw HTML memerlukan reviewed sanitization path.", "CSP tidak dipakai sebagai alasan membuka raw HTML."],
  validation: {
    mode: "ts",
    checks: [
      { id: "source", label: "User-generated source tersedia.", type: "contains", valueIncludes: 'contentSource: "user-generated"' },
      { id: "text-render", label: "Text rendering menjadi default.", type: "contains", valueIncludes: 'defaultRender: "render as text"' },
      { id: "raw-html", label: "Raw HTML memerlukan sanitization path.", type: "contains", valueIncludes: 'rawHtml: "requires reviewed sanitization path"' },
      { id: "csp", label: "CSP tetap defense in depth.", type: "contains", valueIncludes: "CSP supports but does not replace safe rendering" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target safe review rendering",
    description: "Cek otomatis membaca reasoning TypeScript. Preview tidak merender raw HTML, content user, atau sanitization runtime.",
    lines: ["User content diperlakukan sebagai data.", "Text rendering menjadi default.", "Rich text memerlukan path yang direview dan defense-in-depth."],
  },
  skillTags: ["XSS", "Safe Rendering", "React", "Content Security Policy", "TypeScript"],
};

export const explainCourseCsrfMutationBoundaryChallenge: CodingChallenge = {
  id: "explain-course-csrf-mutation-boundary",
  lessonId: "browser-csrf-basics",
  title: "Explain course CSRF mutation boundary",
  description: "Petakan browser role dan server-side defense pada mutation profile cookie-based tanpa membuat token atau request runtime.",
  instructions: [
    "Fokus di tab TS.",
    "Buat profileMutationBoundary dengan auth cookie session.",
    "Nyatakan browser mengirim approved app action dan server memvalidasi authorization serta CSRF defense.",
    "Tambahkan recovery show safe request error.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...browserAttackPracticeCode,
    ts: ["const profileMutationBoundary = {", "  // Petakan responsibility request.", "};"].join("\n"),
  },
  solutionCode: {
    ...browserAttackPracticeCode,
    ts: [
      "const profileMutationBoundary = {",
      '  auth: "cookie session",',
      '  browserRole: "send approved app action",',
      '  serverDefense: "validate authorization and CSRF defense",',
      '  recovery: "show safe request error",',
      "};",
    ].join("\n"),
  },
  checklist: ["Cookie session disebut sebagai auth context.", "Browser role tidak menjadi security enforcement.", "Server memvalidasi authorization serta CSRF defense.", "UI memberi recovery yang aman."],
  validation: {
    mode: "ts",
    checks: [
      { id: "auth", label: "Cookie session tersedia.", type: "contains", valueIncludes: 'auth: "cookie session"' },
      { id: "browser", label: "Browser mengirim approved action.", type: "contains", valueIncludes: 'browserRole: "send approved app action"' },
      { id: "server", label: "Server defense tersedia.", type: "contains", valueIncludes: 'serverDefense: "validate authorization and CSRF defense"' },
      { id: "recovery", label: "Safe error recovery tersedia.", type: "contains", valueIncludes: 'recovery: "show safe request error"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target CSRF mutation boundary",
    description: "Cek otomatis membaca structure TypeScript. Preview tidak membuat token, mengirim mutation, atau memverifikasi CSRF server defense.",
    lines: ["Cookie-based mutation memiliki server-side defense.", "Frontend mengirim action aplikasi dan memberi recovery UI.", "Authorization serta CSRF tidak dipindahkan ke component."],
  },
  skillTags: ["CSRF", "Cookies", "Authorization", "Server Boundaries", "TypeScript"],
};

export const classifyCourseCorsSecurityBoundaryChallenge: CodingChallenge = {
  id: "classify-course-cors-security-boundary",
  lessonId: "cors-risks",
  title: "Classify course CORS security boundary",
  description: "Pisahkan CORS browser response policy dari authorization dan catat evidence diagnosis yang aman.",
  instructions: [
    "Fokus di tab TS.",
    "Buat courseCorsBoundary dengan corsRole browser response policy dan authorizationRole server or database policy.",
    "Nyatakan policyOwner API server or gateway.",
    "Tambahkan evidence app origin, API origin, method, credential mode, and browser symptom.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...browserAttackPracticeCode,
    ts: ["const courseCorsBoundary = {", "  // Pisahkan browser policy dan permission.", "};"].join("\n"),
  },
  solutionCode: {
    ...browserAttackPracticeCode,
    ts: [
      "const courseCorsBoundary = {",
      '  corsRole: "browser response policy",',
      '  authorizationRole: "server or database policy",',
      '  policyOwner: "API server or gateway",',
      '  evidence: "app origin, API origin, method, credential mode, and browser symptom",',
      "};",
    ].join("\n"),
  },
  checklist: ["CORS dipisahkan dari authorization.", "Owner CORS berada pada API/gateway.", "Evidence browser dicatat.", "Tidak ada proxy atau bypass workaround."],
  validation: {
    mode: "ts",
    checks: [
      { id: "cors", label: "CORS role tersedia.", type: "contains", valueIncludes: 'corsRole: "browser response policy"' },
      { id: "authorization", label: "Authorization role tersedia.", type: "contains", valueIncludes: 'authorizationRole: "server or database policy"' },
      { id: "owner", label: "API/gateway menjadi policy owner.", type: "contains", valueIncludes: 'policyOwner: "API server or gateway"' },
      { id: "evidence", label: "Evidence diagnosis tersedia.", type: "contains", valueIncludes: "app origin, API origin, method, credential mode, and browser symptom" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target CORS boundary",
    description: "Cek otomatis membaca reasoning TypeScript. Preview tidak mengirim cross-origin request, mengubah header server, atau mencoba bypass browser policy.",
    lines: ["CORS dan authorization dipisahkan.", "API/gateway memiliki response policy.", "Frontend membawa evidence yang dibutuhkan untuk diagnosis."],
  },
  skillTags: ["CORS", "Same-Origin Policy", "Authorization", "API Debugging", "TypeScript"],
};

export const decideCourseInputHandlingBoundaryChallenge: CodingChallenge = {
  id: "decide-course-input-handling-boundary",
  lessonId: "input-sanitization",
  title: "Decide course input handling boundary",
  description: "Nyatakan peran client validation, server validation, text rendering, dan reviewed rich text path.",
  instructions: [
    "Fokus di tab TS.",
    "Buat noteInputHandling dengan client feedback serta server enforcement.",
    "Nyatakan plainTextRender render as text by default.",
    "Nyatakan richTextException membutuhkan reviewed sanitization before approved HTML rendering.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...browserAttackPracticeCode,
    ts: ["const noteInputHandling = {", "  // Tentukan peran setiap layer.", "};"].join("\n"),
  },
  solutionCode: {
    ...browserAttackPracticeCode,
    ts: [
      "const noteInputHandling = {",
      '  clientValidation: "show required and length feedback",',
      '  serverValidation: "enforce product rules and authorization",',
      '  plainTextRender: "render as text by default",',
      '  richTextException: "use reviewed sanitization before approved HTML rendering",',
      "};",
    ].join("\n"),
  },
  checklist: ["Client validation hanya memberi feedback UX.", "Server menegakkan rule serta authorization.", "Plain text menjadi default.", "Rich text memakai reviewed sanitization path."],
  validation: {
    mode: "ts",
    checks: [
      { id: "client", label: "Client feedback tersedia.", type: "contains", valueIncludes: 'clientValidation: "show required and length feedback"' },
      { id: "server", label: "Server enforcement tersedia.", type: "contains", valueIncludes: 'serverValidation: "enforce product rules and authorization"' },
      { id: "plain-text", label: "Plain text rendering tersedia.", type: "contains", valueIncludes: 'plainTextRender: "render as text by default"' },
      { id: "rich-text", label: "Rich text exception tersedia.", type: "contains", valueIncludes: 'richTextException: "use reviewed sanitization before approved HTML rendering"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target input handling",
    description: "Cek otomatis membaca struktur TypeScript. Preview tidak memvalidasi server, menyanitasi markup, atau merender HTML user.",
    lines: ["UX validation, server enforcement, dan rendering dipisahkan.", "Plain text tidak memerlukan raw HTML.", "Rich text hanya masuk path yang direview."],
  },
  skillTags: ["Input Validation", "Sanitization", "Safe Rendering", "Forms", "TypeScript"],
};

export const reviewCoursePackageRiskChallenge: CodingChallenge = {
  id: "review-course-package-risk",
  lessonId: "dependency-vulnerabilities",
  title: "Review course package risk",
  description: "Susun review package sebelum penambahan tanpa menginstal dependency atau menjalankan audit tool.",
  instructions: [
    "Fokus di tab TS.",
    "Buat coursePackageReview dengan requirement render safe markdown.",
    "Nyatakan source official registry and maintainer repository serta review active maintenance and dependency footprint.",
    "Tambahkan updatePlan read advisory, update intentionally, and QA feature.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...browserAttackPracticeCode,
    ts: ["const coursePackageReview = {", "  // Review package sebelum menambahkannya.", "};"].join("\n"),
  },
  solutionCode: {
    ...browserAttackPracticeCode,
    ts: [
      "const coursePackageReview = {",
      '  requirement: "render safe markdown",',
      '  source: "official registry and maintainer repository",',
      '  review: "active maintenance and dependency footprint",',
      '  updatePlan: "read advisory, update intentionally, and QA feature",',
      "};",
    ].join("\n"),
  },
  checklist: ["Requirement package dinyatakan terlebih dahulu.", "Source serta maintainer direview.", "Maintenance dan footprint diperiksa.", "Update advisory memiliki QA plan."],
  validation: {
    mode: "ts",
    checks: [
      { id: "requirement", label: "Requirement tersedia.", type: "contains", valueIncludes: 'requirement: "render safe markdown"' },
      { id: "source", label: "Source review tersedia.", type: "contains", valueIncludes: 'source: "official registry and maintainer repository"' },
      { id: "review", label: "Maintenance dan footprint direview.", type: "contains", valueIncludes: 'review: "active maintenance and dependency footprint"' },
      { id: "update", label: "Update plan serta QA tersedia.", type: "contains", valueIncludes: 'updatePlan: "read advisory, update intentionally, and QA feature"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target package review",
    description: "Cek otomatis membaca review TypeScript. Preview tidak menginstal package, menjalankan audit, atau menyimpulkan package bebas vulnerability.",
    lines: ["Requirement mendahului penambahan dependency.", "Source, maintenance, dan footprint direview.", "Advisory ditangani melalui update yang disengaja dan QA."],
  },
  skillTags: ["Dependencies", "Supply Chain", "Package Review", "Security Awareness", "TypeScript"],
};

export const diagnoseCourseBrowserRiskCheckpointChallenge: CodingChallenge = {
  id: "diagnose-course-browser-risk-checkpoint",
  lessonId: "browser-attack-basics-assessment",
  title: "Diagnose course browser risk checkpoint",
  description: "Map browser-facing risk ke safer next step tanpa merender raw HTML, menjalankan request, atau memberi bypass.",
  instructions: [
    "Fokus di tab TS.",
    "Buat type BrowserRisk untuk unsafe-rendering, cookie-mutation, cors-misconception, dan package-advisory.",
    "Map setiap risk ke keep-text-rendering, review-server-csrf-defense, check-api-cors-policy, dan review-package-update-with-QA.",
    "Jangan menulis payload, proxy, credential, atau security workaround.",
    "Cek otomatis membaca struktur TypeScript. Kode TS tidak dijalankan di preview.",
  ],
  starterCode: {
    ...browserAttackPracticeCode,
    ts: ['type BrowserRisk = "unsafe-rendering";', "", "function getSaferNextStep(risk: BrowserRisk) {", '  return "keep-text-rendering";', "}"].join("\n"),
  },
  solutionCode: {
    ...browserAttackPracticeCode,
    ts: [
      'type BrowserRisk = "unsafe-rendering" | "cookie-mutation" | "cors-misconception" | "package-advisory";',
      "",
      "function getSaferNextStep(risk: BrowserRisk) {",
      '  if (risk === "unsafe-rendering") return "keep-text-rendering";',
      '  if (risk === "cookie-mutation") return "review-server-csrf-defense";',
      '  if (risk === "cors-misconception") return "check-api-cors-policy";',
      '  return "review-package-update-with-QA";',
      "}",
    ].join("\n"),
  },
  checklist: ["Unsafe rendering kembali ke text default.", "Cookie mutation diarahkan ke server-side defense.", "CORS diarahkan ke API policy owner.", "Package advisory mendapat update review dan QA."],
  validation: {
    mode: "ts",
    checks: [
      { id: "risk-type", label: "Browser risk union lengkap tersedia.", type: "contains", valueIncludes: '"unsafe-rendering" | "cookie-mutation" | "cors-misconception" | "package-advisory"' },
      { id: "rendering", label: "Unsafe rendering punya safer default.", type: "contains", valueIncludes: 'risk === "unsafe-rendering") return "keep-text-rendering"' },
      { id: "csrf", label: "Cookie mutation kembali ke server defense.", type: "contains", valueIncludes: 'risk === "cookie-mutation") return "review-server-csrf-defense"' },
      { id: "cors", label: "CORS diarahkan ke API policy.", type: "contains", valueIncludes: 'risk === "cors-misconception") return "check-api-cors-policy"' },
      { id: "package", label: "Package advisory memiliki QA path.", type: "contains", valueIncludes: 'return "review-package-update-with-QA"' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target browser risk diagnosis",
    description: "Cek otomatis membaca mapper reasoning TypeScript. Preview tidak menguji browser attack, mengirim mutation, mengubah policy server, atau menginstal package.",
    lines: ["Risk rendering, cookie mutation, CORS, dan dependency dipisahkan.", "Setiap risk memiliki safer next step.", "Security enforcement tetap berada pada boundary yang tepat."],
  },
  skillTags: ["XSS", "CSRF", "CORS", "Dependencies", "Security Review", "Assessment", "TypeScript"],
};
