import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const localToolingNpmBasicsModule: Module = {
  id: "local-tooling-npm-basics",
  trackId: "frontend-engineering",
  title: "Local Tooling and npm Basics",
  slug: "local-tooling-npm-basics",
  description:
    "Menyiapkan pemahaman Node.js, npm, package.json, scripts, dependencies, dan workflow terminal sebelum masuk TypeScript project.",
  order: 17,
  lessonIds: [
    "what-are-nodejs-and-npm",
    "check-node-and-npm-version",
    "package-json-basic",
    "npm-install-and-npm-run",
    "dependency-vs-dev-dependency-basic",
    "local-tooling-npm-basics-assessment",
  ],
  estimatedHours: 5,
  skillTags: ["Node.js", "npm", "package.json", "Local Tooling"],
};

export const whatAreNodejsAndNpmLesson: Lesson = {
  id: "what-are-nodejs-and-npm",
  trackId: "frontend-engineering",
  moduleId: "local-tooling-npm-basics",
  title: "Apa Itu Node.js dan npm?",
  slug: "what-are-nodejs-and-npm",
  description:
    "Memahami kenapa modern frontend project memakai Node.js dan npm sebelum masuk TypeScript dan React.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 35,
  objectives: [
    "Menjelaskan peran Node.js dalam tooling frontend lokal",
    "Menjelaskan peran npm sebagai package manager",
    "Membedakan JavaScript di browser dari JavaScript yang dijalankan lewat Node.js",
  ],
  skillTags: ["Node.js", "npm", "Frontend Tooling"],
  blocks: [
    {
      id: "what-are-nodejs-and-npm-intro",
      type: "text",
      title: "Kamu mulai masuk tooling modern",
      content:
        "Sampai Level 5, kamu sudah cukup jauh dengan HTML, CSS, Vanilla JavaScript, async flow, Browser API, dan debugging. Sebelum masuk TypeScript dan React, ada satu lapisan kerja lokal yang perlu dibuat jelas: Node.js dan npm.\n\nNode.js membuat JavaScript bisa berjalan di luar browser. Untuk frontend modern, Node.js sering dipakai oleh tool development: menjalankan dev server, menjalankan build, menjalankan test, atau menjalankan compiler seperti TypeScript.\n\nnpm adalah package manager. Ia membantu project mengunduh dependency, membaca daftar package dari package.json, dan menjalankan script project seperti `npm run dev` atau `npm run build`.",
    },
    {
      id: "what-are-nodejs-and-npm-analogy",
      type: "text",
      title: "Bayangkan sebagai workshop lokal",
      content:
        "Browser adalah tempat user melihat aplikasi. Node.js adalah workshop lokal tempat tool developer bekerja. npm adalah pengelola alat di workshop itu.\n\nSaat kamu memakai React, TypeScript, Vite, Next.js, Vitest, atau tool frontend modern lain, biasanya kamu tidak menjalankan semuanya langsung di browser. Kamu menjalankan command di terminal, lalu tool tersebut membantu menyiapkan kode agar bisa dipakai browser.",
    },
    {
      id: "what-are-nodejs-and-npm-tool-note",
      type: "callout",
      variant: "important",
      title: "Tooling bukan tujuan akhir",
      content:
        "Tujuan module ini bukan membuat kamu hafal semua command npm. Tujuannya adalah membuat kamu cukup nyaman membaca package.json, menjalankan script, dan tahu langkah awal saat terminal memberi error.",
    },
    {
      id: "what-are-nodejs-and-npm-quick-check",
      type: "quick-check",
      question:
        "Dalam workflow frontend modern, npm paling sering dipakai untuk apa?",
      options: [
        "Mengelola package dan menjalankan script project",
        "Menggambar layout CSS secara otomatis",
        "Mengganti HTML di browser tanpa JavaScript",
        "Menyimpan password user di browser",
      ],
      correctAnswer: "Mengelola package dan menjalankan script project",
      explanation:
        "npm membantu project mengelola dependency dan menjalankan script yang ditulis di package.json.",
    },
    {
      id: "what-are-nodejs-and-npm-summary",
      type: "summary",
      points: [
        "Node.js menjalankan JavaScript di luar browser.",
        "Frontend tooling modern sering berjalan lewat Node.js.",
        "npm mengelola package dan script project.",
        "package.json menjadi pusat informasi dasar project npm.",
        "Berikutnya, kamu akan mengecek apakah Node.js dan npm sudah tersedia di terminal lokal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "what-are-nodejs-and-npm-intro",
      "what-are-nodejs-and-npm-analogy",
      "what-are-nodejs-and-npm-tool-note",
      "what-are-nodejs-and-npm-quick-check",
      "what-are-nodejs-and-npm-summary",
    ],
  },
};

export const checkNodeAndNpmVersionLesson: Lesson = {
  id: "check-node-and-npm-version",
  trackId: "frontend-engineering",
  moduleId: "local-tooling-npm-basics",
  title: "Mengecek `node -v` dan `npm -v`",
  slug: "check-node-and-npm-version",
  description:
    "Mengecek apakah Node.js dan npm tersedia di terminal lokal tanpa membuat project baru dulu.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 40,
  objectives: [
    "Menjalankan command version check di terminal",
    "Mengenali output versi Node.js dan npm",
    "Menentukan langkah awal jika command belum dikenali",
  ],
  skillTags: ["Node.js", "npm", "Terminal", "Local Workflow"],
  blocks: [
    {
      id: "check-node-and-npm-version-intro",
      type: "text",
      title: "Cek tool sebelum membuat project",
      content:
        "Sebelum membuat TypeScript atau React project, pastikan terminal kamu bisa mengenali `node` dan `npm`. Ini bukan tes sulit. Ini hanya health check awal agar masalah setup tidak muncul di tengah lesson berikutnya.\n\nKalau command belum dikenali, jangan lanjut membuat project dulu. Selesaikan instalasi atau path terminalnya lebih dulu.",
    },
    {
      id: "check-node-and-npm-version-command",
      type: "code-example",
      title: "Command version check",
      language: "bash",
      code: `node -v
npm -v`,
      explanation:
        "Jika Node.js dan npm tersedia, terminal akan menampilkan nomor versi. Contoh formatnya bisa seperti v22.11.0 untuk Node.js dan 10.9.0 untuk npm, tetapi angka di perangkat kamu boleh berbeda.",
    },
    {
      id: "check-node-and-npm-version-local-checklist",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di terminal perangkat kamu:\n\n- Buka terminal dari folder mana saja.\n- Jalankan `node -v`.\n- Catat versi Node.js yang muncul.\n- Jalankan `npm -v`.\n- Catat versi npm yang muncul.\n- Jika salah satu command tidak dikenali, install Node.js dari sumber resmi atau cek ulang PATH terminal.\n- Setelah install, tutup dan buka terminal lagi, lalu ulangi version check.\n\nFluentStack tidak bisa memverifikasi terminal perangkat kamu. Tandai selesai hanya jika kedua command benar-benar menampilkan versi.",
    },
    {
      id: "check-node-and-npm-version-troubleshooting",
      type: "callout",
      variant: "common-mistake",
      title: "Install sudah selesai, tetapi command masih tidak dikenali",
      content:
        "Ini sering terjadi karena terminal dibuka sebelum instalasi selesai, atau PATH belum diperbarui. Tutup terminal, buka lagi, lalu coba ulang. Jika masih gagal, cek dokumentasi instalasi Node.js untuk sistem operasi kamu.",
    },
    {
      id: "check-node-and-npm-version-summary",
      type: "summary",
      points: [
        "`node -v` mengecek versi Node.js yang tersedia di terminal.",
        "`npm -v` mengecek versi npm yang tersedia di terminal.",
        "Output boleh berbeda antar perangkat selama command berjalan normal.",
        "Jika command tidak dikenali, selesaikan setup sebelum lanjut.",
        "Berikutnya, kamu akan membaca package.json sebagai file identitas project npm.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "check-node-and-npm-version-intro",
      "check-node-and-npm-version-command",
      "check-node-and-npm-version-local-checklist",
      "check-node-and-npm-version-troubleshooting",
      "check-node-and-npm-version-summary",
    ],
  },
};

export const packageJsonBasicLesson: Lesson = {
  id: "package-json-basic",
  trackId: "frontend-engineering",
  moduleId: "local-tooling-npm-basics",
  title: "`package.json` Dasar",
  slug: "package-json-basic",
  description:
    "Membaca metadata project, scripts, dependencies, dan devDependencies dasar di package.json.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan fungsi package.json",
    "Membaca name, version, scripts, dependencies, dan devDependencies",
    "Memahami kenapa package.json penting untuk kerja tim",
  ],
  skillTags: ["npm", "package.json", "Project Metadata"],
  blocks: [
    {
      id: "package-json-basic-intro",
      type: "text",
      title: "package.json adalah kartu identitas project",
      content:
        "Project npm biasanya punya file package.json. File ini menjelaskan informasi dasar project, command yang bisa dijalankan, dan package yang dibutuhkan.\n\nSaat kamu membuka project modern, jangan langsung menebak command. Buka package.json dulu. Dari sana kamu bisa melihat apakah project punya script `dev`, `build`, `test`, atau script lain.",
    },
    {
      id: "package-json-basic-example",
      type: "code-example",
      title: "Contoh package.json kecil",
      language: "json",
      code: `{
  "name": "frontend-tooling-practice",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.9.0",
    "vite": "^7.0.0"
  }
}`,
      explanation:
        "name dan version menjelaskan identitas project. scripts berisi command yang bisa dijalankan dengan npm run. dependencies dan devDependencies mencatat package yang dibutuhkan project.",
    },
    {
      id: "package-json-basic-inspection",
      type: "text",
      title: "Cara membaca cepat",
      content:
        "Saat membuka package.json, baca dengan urutan ini:\n\n- name: nama project.\n- private: tanda bahwa project tidak dimaksudkan untuk dipublish sebagai package publik.\n- scripts: daftar command project.\n- dependencies: package yang dibutuhkan app saat berjalan.\n- devDependencies: tool yang dibutuhkan selama development.\n\nUntuk beginner tooling, cukup pahami bagian ini dulu. Kamu belum perlu memahami semua field package.json.",
    },
    {
      id: "package-json-basic-quick-check",
      type: "quick-check",
      question:
        "Jika package.json punya script `\"dev\": \"vite\"`, command apa yang biasanya dipakai untuk menjalankannya?",
      options: ["npm run dev", "npm install dev", "node -v dev", "npm package dev"],
      correctAnswer: "npm run dev",
      explanation:
        "Script di package.json dijalankan dengan `npm run <nama-script>`, jadi script dev dijalankan dengan `npm run dev`.",
    },
    {
      id: "package-json-basic-summary",
      type: "summary",
      points: [
        "package.json menyimpan metadata project npm.",
        "scripts menjelaskan command yang bisa dijalankan.",
        "dependencies dan devDependencies menjelaskan package yang dibutuhkan project.",
        "Membaca package.json mengurangi kebiasaan menebak command.",
        "Berikutnya, kamu akan menjalankan workflow dasar `npm install` dan `npm run`.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "package-json-basic-intro",
      "package-json-basic-example",
      "package-json-basic-inspection",
      "package-json-basic-quick-check",
      "package-json-basic-summary",
    ],
  },
};

export const npmInstallAndNpmRunLesson: Lesson = {
  id: "npm-install-and-npm-run",
  trackId: "frontend-engineering",
  moduleId: "local-tooling-npm-basics",
  title: "`npm install` dan `npm run`",
  slug: "npm-install-and-npm-run",
  description:
    "Memahami workflow dasar menginstall dependency dan menjalankan script project npm.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan fungsi npm install",
    "Menjelaskan fungsi npm run",
    "Menjalankan script project dari package.json secara lokal",
  ],
  skillTags: ["npm", "Terminal", "Local Workflow", "Scripts"],
  blocks: [
    {
      id: "npm-install-and-npm-run-intro",
      type: "text",
      title: "Dua command yang akan sering kamu temui",
      content:
        "Saat menerima project modern, biasanya kamu tidak langsung membuka HTML di browser. Kamu masuk ke folder project lewat terminal, menginstall dependency, lalu menjalankan script development.\n\nDua command yang paling sering muncul adalah `npm install` dan `npm run <script>`. `npm install` membaca package.json dan package-lock.json untuk menyiapkan node_modules. `npm run` menjalankan script yang sudah ditulis di package.json.",
    },
    {
      id: "npm-install-and-npm-run-command-flow",
      type: "code-example",
      title: "Workflow command dasar",
      language: "bash",
      code: `cd frontend-tooling-practice
npm install
npm run dev`,
      explanation:
        "cd masuk ke folder project. npm install mengunduh dependency. npm run dev menjalankan script dev jika script itu ada di package.json.",
    },
    {
      id: "npm-install-and-npm-run-local-checklist",
      type: "text",
      title: "Checklist local task",
      content:
        "Gunakan project npm yang sudah ada atau project latihan kecil dari mentor/dokumentasi. Lalu kerjakan:\n\n- Buka terminal di folder project yang punya package.json.\n- Jalankan `npm install`.\n- Tunggu sampai proses selesai tanpa error fatal.\n- Buka package.json dan lihat nama script yang tersedia.\n- Jalankan salah satu script, misalnya `npm run dev`, `npm run build`, atau script lain yang memang ada.\n- Jika command gagal, baca pesan error paling atas dan paling bawah.\n- Jangan hapus file random hanya karena panik. Pahami pesan error dulu.\n\nTandai selesai setelah kamu benar-benar menjalankan minimal satu script dari package.json.",
    },
    {
      id: "npm-install-and-npm-run-troubleshooting",
      type: "callout",
      variant: "warning",
      title: "Script harus ada di package.json",
      content:
        "Kalau package.json tidak punya script `dev`, command `npm run dev` akan gagal. Itu bukan selalu tanda npm rusak. Artinya project tersebut tidak menyediakan script bernama dev. Baca scripts yang tersedia dulu.",
    },
    {
      id: "npm-install-and-npm-run-summary",
      type: "summary",
      points: [
        "`npm install` menyiapkan dependency project.",
        "`npm run <script>` menjalankan script dari package.json.",
        "Script yang bisa dijalankan harus tertulis di package.json.",
        "Saat error, baca pesan terminal sebelum mengambil tindakan.",
        "Berikutnya, kamu akan membedakan dependency dan devDependency secara sederhana.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "npm-install-and-npm-run-intro",
      "npm-install-and-npm-run-command-flow",
      "npm-install-and-npm-run-local-checklist",
      "npm-install-and-npm-run-troubleshooting",
      "npm-install-and-npm-run-summary",
    ],
  },
};

export const dependencyVsDevDependencyBasicLesson: Lesson = {
  id: "dependency-vs-dev-dependency-basic",
  trackId: "frontend-engineering",
  moduleId: "local-tooling-npm-basics",
  title: "Dependency vs Dev Dependency secara Sederhana",
  slug: "dependency-vs-dev-dependency-basic",
  description:
    "Membedakan package yang dibutuhkan aplikasi dan package yang dipakai sebagai tool development.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Membaca dependencies dan devDependencies di package.json",
    "Menentukan contoh package runtime dan development tool",
    "Menghindari overthinking dependency pada tahap beginner tooling",
  ],
  skillTags: ["npm", "dependencies", "devDependencies"],
  blocks: [
    {
      id: "dependency-vs-dev-dependency-basic-intro",
      type: "text",
      title: "Tidak semua package punya peran yang sama",
      content:
        "Di package.json, kamu akan melihat `dependencies` dan `devDependencies`. Dua bagian ini sama-sama berisi package, tetapi niat penggunaannya berbeda.\n\n`dependencies` biasanya berisi package yang dibutuhkan app saat berjalan. `devDependencies` biasanya berisi tool yang membantu saat development, testing, build, linting, atau type checking.",
    },
    {
      id: "dependency-vs-dev-dependency-basic-example",
      type: "code-example",
      title: "Perbandingan sederhana",
      language: "json",
      code: `{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "typescript": "^5.9.0",
    "vite": "^7.0.0",
    "eslint": "^9.0.0"
  }
}`,
      explanation:
        "React dan React DOM dipakai oleh aplikasi. TypeScript, Vite, dan ESLint adalah tool development untuk mengecek, menjalankan, atau membangun project.",
    },
    {
      id: "dependency-vs-dev-dependency-basic-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Rule of thumb",
      content:
        "Tanyakan: package ini bagian dari app yang berjalan untuk user, atau alat yang membantu developer selama development? Jawabannya sering cukup untuk membaca package.json di level ini.",
    },
    {
      id: "dependency-vs-dev-dependency-basic-quick-check",
      type: "quick-check",
      question:
        "Dalam project frontend, TypeScript biasanya masuk ke bagian mana?",
      options: ["devDependencies", "dependencies", "scripts", "name"],
      correctAnswer: "devDependencies",
      explanation:
        "TypeScript biasanya dipakai sebagai tool development untuk type checking atau compile step, sehingga umum diletakkan di devDependencies.",
    },
    {
      id: "dependency-vs-dev-dependency-basic-summary",
      type: "summary",
      points: [
        "dependencies biasanya dibutuhkan app saat berjalan.",
        "devDependencies biasanya dipakai sebagai tool development.",
        "TypeScript, Vite, ESLint, dan test runner sering berada di devDependencies.",
        "Pahami peran package sebelum memindahkannya.",
        "Berikutnya, Uji Kompetensi akan mengecek kesiapan local tooling kamu sebelum masuk TypeScript Core Types.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "dependency-vs-dev-dependency-basic-intro",
      "dependency-vs-dev-dependency-basic-example",
      "dependency-vs-dev-dependency-basic-decision-rule",
      "dependency-vs-dev-dependency-basic-quick-check",
      "dependency-vs-dev-dependency-basic-summary",
    ],
  },
};

export const localToolingNpmBasicsAssessmentLesson: Lesson = {
  id: "local-tooling-npm-basics-assessment",
  trackId: "frontend-engineering",
  moduleId: "local-tooling-npm-basics",
  title: "Uji Kompetensi Local Tooling and npm Basics",
  slug: "local-tooling-npm-basics-assessment",
  description:
    "Checkpoint kesiapan local tooling sebelum masuk TypeScript project dan React workflow.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 65,
  objectives: [
    "Mengecek pemahaman Node.js dan npm",
    "Membaca package.json sederhana",
    "Mengonfirmasi kesiapan terminal lokal untuk TypeScript project",
  ],
  skillTags: ["Node.js", "npm", "package.json", "Assessment"],
  blocks: [
    {
      id: "local-tooling-npm-basics-assessment-recap",
      type: "text",
      title: "Checkpoint: siap masuk TypeScript project?",
      content:
        "Uji Kompetensi ini mengecek kesiapan tooling, bukan kemampuan menghafal semua command npm. Kamu perlu tahu kenapa Node.js dan npm dipakai, cara mengecek versi, cara membaca package.json, cara menjalankan script, dan cara membedakan dependency dari devDependency.\n\nFluentStack tidak bisa melihat terminal perangkat kamu. Jadi bagian local self-review harus dijawab jujur berdasarkan apa yang benar-benar sudah kamu jalankan.",
    },
    {
      id: "local-tooling-npm-basics-assessment-quiz",
      type: "quiz",
      quizId: "local-tooling-npm-basics-assessment-quiz",
    },
    {
      id: "local-tooling-npm-basics-assessment-package-task",
      type: "code-example",
      title: "Package.json reading task",
      language: "json",
      code: `{
  "name": "typescript-prep",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "typecheck": "tsc --noEmit",
    "build": "tsc && vite build"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "typescript": "^5.9.0",
    "vite": "^7.0.0"
  }
}`,
      explanation:
        "Baca package.json ini sebelum mengisi writing practice. Identifikasi nama project, script yang tersedia, package runtime, dan tool development.",
    },
    {
      id: "local-tooling-npm-basics-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan readiness singkat berdasarkan package.json di atas dan terminal lokal kamu.\n\nGunakan format:\n- Node.js version:\n- npm version:\n- Script yang tersedia:\n- Command yang akan kamu jalankan untuk type check:\n- dependencies:\n- devDependencies:\n- Masalah setup yang perlu dibereskan:",
      placeholder:
        "Node.js version: v...\nnpm version: ...\nScript yang tersedia: dev, typecheck, build\nCommand type check: npm run typecheck\ndependencies: react, react-dom\ndevDependencies: typescript, vite\nMasalah setup: ...",
      minimumCharacters: 180,
      checklist: [
        "Mencatat output node -v dan npm -v dari terminal sendiri.",
        "Menyebut minimal dua script dari package.json.",
        "Menentukan command untuk menjalankan typecheck.",
        "Membedakan dependencies dan devDependencies.",
        "Jujur menyebut masalah setup jika masih ada.",
      ],
      modelAnswer:
        "Node.js version: v22.11.0. npm version: 10.9.0. Script yang tersedia: dev, typecheck, build. Command yang akan saya jalankan untuk type check adalah npm run typecheck. dependencies berisi react dan react-dom karena itu dipakai aplikasi. devDependencies berisi typescript dan vite karena itu tool development. Masalah setup yang perlu dibereskan: tidak ada, karena node -v dan npm -v sudah muncul di terminal.",
    },
    {
      id: "local-tooling-npm-basics-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge untuk tooling lokal",
      description:
        "Gunakan dokumentasi resmi sebagai rujukan saat command atau package.json terasa membingungkan. Fokus hanya pada bagian yang dipakai di module ini.",
      links: [
        {
          source: "Node.js",
          title: "Introduction to Node.js",
          url: "https://nodejs.org/learn/getting-started/introduction-to-nodejs",
          focus: [
            "Node.js sebagai runtime JavaScript di luar browser",
            "kenapa Node.js relevan untuk tooling",
            "menjalankan file JavaScript dari terminal",
          ],
          ignoreForNow: [
            "membuat HTTP server",
            "asynchronous I/O detail",
            "production server setup",
          ],
        },
        {
          source: "Node.js",
          title: "An introduction to the npm package manager",
          url: "https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager",
          focus: [
            "fungsi npm",
            "npm install",
            "npm run",
            "perbedaan dependencies dan devDependencies",
          ],
          ignoreForNow: [
            "publishing package",
            "package manager alternatives",
            "advanced versioning",
          ],
        },
        {
          source: "npm Docs",
          title: "package.json",
          url: "https://docs.npmjs.com/cli/v11/configuring-npm/package-json/",
          focus: [
            "scripts",
            "dependencies",
            "devDependencies",
            "metadata project dasar",
          ],
          ignoreForNow: [
            "publishing fields",
            "workspaces",
            "advanced npm config",
          ],
        },
        {
          source: "npm Docs",
          title: "npm install",
          url: "https://docs.npmjs.com/cli/v11/commands/npm-install/",
          focus: [
            "menginstall dependency project",
            "membaca package.json",
            "perbedaan install semua dependency dan satu package",
          ],
          ignoreForNow: ["global install", "workspaces", "audit detail"],
        },
        {
          source: "npm Docs",
          title: "npm run",
          url: "https://docs.npmjs.com/cli/v11/commands/npm-run/",
          focus: [
            "menjalankan script dari package.json",
            "format npm run <script>",
            "apa yang terjadi jika script tidak ada",
          ],
          ignoreForNow: ["workspaces", "script-shell config", "lifecycle scripts"],
        },
      ],
      followUpAction:
        "Buka package.json project lokal kamu, lalu tulis command yang akan dipakai untuk development, build, dan typecheck jika tersedia.",
    },
    {
      id: "local-tooling-npm-basics-assessment-summary",
      type: "summary",
      points: [
        "Node.js dan npm adalah fondasi tooling untuk banyak project frontend modern.",
        "Version check memastikan terminal mengenali node dan npm.",
        "package.json menjelaskan script dan package project.",
        "`npm install` menyiapkan dependency, sedangkan `npm run` menjalankan script.",
        "Setelah tooling lokal siap, kamu bisa lanjut ke TypeScript Core Types dengan lebih tenang.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "local-tooling-npm-basics-assessment-recap",
      "local-tooling-npm-basics-assessment-quiz",
      "local-tooling-npm-basics-assessment-package-task",
      "local-tooling-npm-basics-assessment-writing-practice",
      "local-tooling-npm-basics-assessment-docs",
      "local-tooling-npm-basics-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const localToolingNpmBasicsAssessmentQuiz: Quiz = {
  id: "local-tooling-npm-basics-assessment-quiz",
  lessonId: "local-tooling-npm-basics-assessment",
  title: "Uji Kompetensi Local Tooling and npm Basics",
  passingScore: 70,
  questions: [
    {
      id: "local-tooling-npm-basics-q1",
      type: "multiple-choice",
      question:
        "Dalam modern frontend workflow, Node.js paling sering dibutuhkan untuk apa?",
      options: [
        "Menjalankan tooling lokal seperti dev server, build, test, atau compiler",
        "Mengganti HTML agar tidak perlu browser",
        "Menyimpan semua data user di package.json",
        "Membuat CSS otomatis selalu responsive",
      ],
      correctAnswer:
        "Menjalankan tooling lokal seperti dev server, build, test, atau compiler",
      explanation:
        "Node.js menjalankan JavaScript di luar browser, sehingga banyak tool frontend berjalan lewat Node.js di terminal.",
    },
    {
      id: "local-tooling-npm-basics-q2",
      type: "multiple-choice",
      question:
        "Command apa yang dipakai untuk mengecek apakah npm tersedia di terminal?",
      options: ["npm -v", "npm check", "node npm", "npm package"],
      correctAnswer: "npm -v",
      explanation:
        "`npm -v` menampilkan versi npm jika npm tersedia di terminal.",
    },
    {
      id: "local-tooling-npm-basics-q3",
      type: "multiple-choice",
      question:
        "Jika package.json punya script `\"build\": \"tsc && vite build\"`, command yang tepat untuk menjalankannya adalah...",
      options: ["npm run build", "npm install build", "node build", "npm -v build"],
      correctAnswer: "npm run build",
      explanation:
        "Script package.json dijalankan dengan format `npm run <nama-script>`.",
    },
    {
      id: "local-tooling-npm-basics-q4",
      type: "true-false",
      question:
        "Jika `npm run dev` gagal, salah satu hal pertama yang perlu dicek adalah apakah script `dev` memang ada di package.json.",
      correctAnswer: true,
      explanation:
        "npm hanya bisa menjalankan script yang tersedia di package.json. Jika script dev tidak ada, command itu wajar gagal.",
    },
    {
      id: "local-tooling-npm-basics-q5",
      type: "multiple-choice",
      question:
        "Dalam project frontend, package seperti TypeScript atau Vite biasanya masuk ke...",
      options: ["devDependencies", "dependencies", "private", "version"],
      correctAnswer: "devDependencies",
      explanation:
        "TypeScript dan Vite biasanya dipakai sebagai tool development, sehingga umum berada di devDependencies.",
    },
  ],
};
