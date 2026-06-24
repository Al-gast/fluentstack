import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";
import type { CodingChallenge } from "@/types/challenge";

export const localStaticWebsiteProjectModule: Module = {
  id: "local-static-website-project",
  trackId: "frontend-engineering",
  title: "Local Static Website Project",
  slug: "local-static-website-project",
  description:
    "Buat dan jalankan website statis sederhana di perangkat sendiri, lalu simpan project dengan Git dan GitHub.",
  order: 7,
  lessonIds: [
    "setup-local-project-folder",
    "open-project-in-code-editor",
    "run-html-in-browser",
    "basic-devtools-static-page",
    "save-project-with-git-github",
    "local-static-website-project-assessment",
  ],
  estimatedHours: 5,
  skillTags: ["Local Workflow", "HTML", "CSS", "Git", "GitHub"],
};

export const setupLocalProjectFolderLesson: Lesson = {
  id: "setup-local-project-folder",
  trackId: "frontend-engineering",
  moduleId: "local-static-website-project",
  title: "Menyiapkan Folder Project Lokal",
  slug: "setup-local-project-folder",
  description:
    "Buat folder project sederhana dan siapkan file awal untuk website statis.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami fungsi folder project",
    "Membuat struktur file sederhana untuk website statis",
    "Mengenal index.html dan style.css sebagai file awal",
    "Menyiapkan project tanpa npm, framework, atau bundler",
  ],
  skillTags: ["Local Workflow", "HTML", "Project Setup"],
  blocks: [
    {
      id: "setup-local-project-folder-intro",
      type: "text",
      title: "Mulai dari folder kerja",
      content:
        "Project lokal adalah folder kerja di perangkat kamu sendiri. Di module ini, tool yang dipakai bertahap: code editor untuk mengedit file, browser untuk membuka halaman, DevTools untuk inspect HTML/CSS, Git untuk menyimpan riwayat perubahan, dan GitHub untuk menyimpan repository online.\n\nUntuk milestone ini, kamu belum perlu npm, React, Next.js, bundler, framework, package manager, atau deployment. Website statis sederhana cukup dimulai dari file HTML dan CSS yang bisa dibuka langsung di browser.\n\nFokusnya adalah memahami workflow dasar: membuat folder, menulis file, menyimpan perubahan, membuka di browser, lalu nanti menyimpan progres dengan Git.",
    },
    {
      id: "setup-local-project-folder-structure",
      type: "code-example",
      title: "Struktur folder awal",
      language: "bash",
      code: `my-static-site/
  index.html
  style.css`,
      explanation:
        "index.html berisi struktur halaman. style.css berisi tampilan halaman. Untuk awal, simpan keduanya di folder yang sama agar hubungan file mudah dipahami.",
    },
    {
      id: "setup-local-project-folder-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di perangkat kamu:\n\n- Pastikan kamu punya code editor atau aplikasi text editor yang nyaman.\n- Pastikan kamu punya browser modern seperti Chrome, Firefox, Edge, atau Safari.\n- Buat folder project, misalnya my-static-site.\n- Buat file index.html di dalam folder itu.\n- Buat file style.css di folder yang sama.\n- Pastikan nama file ditulis persis: index.html dan style.css.\n\nChecklist ini tidak diperiksa otomatis oleh FluentStack. Tandai selesai setelah kamu benar-benar membuat file lokalnya.",
    },
    {
      id: "setup-local-project-folder-callout",
      type: "callout",
      variant: "important",
      title: "Jangan mulai dari tool yang terlalu berat",
      content:
        "Untuk milestone ini, tujuan utamanya bukan setup modern yang lengkap. Tujuannya adalah memahami file lokal, browser, editor, dan alur kerja dasar tanpa framework.",
    },
    {
      id: "setup-local-project-folder-summary",
      type: "summary",
      points: [
        "Project lokal adalah folder kerja di perangkat sendiri.",
        "Website statis sederhana bisa dimulai dari index.html dan style.css.",
        "Kamu belum perlu npm, framework, bundler, atau deployment.",
        "Berikutnya kamu akan membuka folder project ini di code editor.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "setup-local-project-folder-intro",
      "setup-local-project-folder-structure",
      "setup-local-project-folder-local-task",
      "setup-local-project-folder-summary",
    ],
  },
};

export const openProjectInCodeEditorLesson: Lesson = {
  id: "open-project-in-code-editor",
  trackId: "frontend-engineering",
  moduleId: "local-static-website-project",
  title: "Membuka Project di Code Editor",
  slug: "open-project-in-code-editor",
  description:
    "Pelajari cara membuka folder project dan mengedit file website statis di code editor.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Memahami kenapa folder project dibuka sebagai satu workspace",
    "Membuka index.html dan style.css di code editor",
    "Menghubungkan CSS ke HTML dengan link tag",
    "Melakukan edit kecil dan menyimpan file",
  ],
  skillTags: ["Code Editor", "Local Workflow", "HTML", "CSS"],
  blocks: [
    {
      id: "open-project-in-code-editor-intro",
      type: "text",
      title: "Buka folder, bukan hanya satu file",
      content:
        "Code editor membantu kamu melihat seluruh isi folder project. Di beginner path ini, contoh akan memakai Visual Studio Code karena umum dipakai dan ramah untuk project web kecil.\n\nCode editor lain tetap boleh dipakai kalau kamu sudah nyaman, tetapi VS Code direkomendasikan agar langkah-langkah di lesson lebih mudah diikuti.\n\nMembuka folder lebih nyaman daripada membuka index.html dan style.css satu per satu, karena kamu bisa berpindah file dengan jelas dan melihat apakah file berada di lokasi yang benar.\n\nDi lesson ini, kamu akan menghubungkan HTML ke CSS. Kalau hubungan ini benar, perubahan di style.css akan terlihat saat index.html dibuka di browser.",
    },
    {
      id: "open-project-in-code-editor-resources",
      type: "resource-links",
      title: "Resource code editor",
      description:
        "Gunakan link resmi ini jika kamu belum punya code editor. VS Code direkomendasikan untuk mengikuti beginner path ini.",
      links: [
        {
          source: "Visual Studio Code",
          title: "Download Visual Studio Code",
          description:
            "Install VS Code untuk membuka folder project, mengedit index.html, dan mengedit style.css.",
          url: "https://code.visualstudio.com/download",
          label: "Download VS Code",
          kind: "recommended",
        },
      ],
    },
    {
      id: "open-project-in-code-editor-html",
      type: "code-example",
      title: "HTML awal",
      language: "html",
      code: `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Website Statis Pertamaku</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="card">
      <h1>Website Statis Pertamaku</h1>
      <p>Ini project lokal pertama saya.</p>
    </main>
  </body>
</html>`,
      explanation:
        "Baris link rel=\"stylesheet\" menghubungkan index.html ke style.css. Karena kedua file berada di folder yang sama, href cukup berisi style.css.",
    },
    {
      id: "open-project-in-code-editor-css",
      type: "code-example",
      title: "CSS awal",
      language: "css",
      code: `.card {
  max-width: 640px;
  padding: 24px;
  border: 1px solid #d4d4d8;
  box-sizing: border-box;
}`,
      explanation:
        "CSS ini memberi batas lebar, ruang dalam, border, dan box-sizing pada elemen dengan class card.",
    },
    {
      id: "open-project-in-code-editor-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di perangkat kamu:\n\n- Install atau buka code editor. Untuk path ini, VS Code direkomendasikan.\n- Buka folder project sebagai folder/workspace, bukan hanya satu file.\n- Isi index.html dengan struktur HTML dasar.\n- Tambahkan link ke style.css di dalam head.\n- Tambahkan style sederhana di style.css.\n- Simpan kedua file.\n\nKalau style belum terlihat nanti di browser, cek nama file, lokasi file, dan nilai href pada link stylesheet.",
    },
    {
      id: "open-project-in-code-editor-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Style tidak muncul",
      content:
        "Masalah yang sering terjadi: file CSS belum disimpan, nama file berbeda, atau href tidak cocok dengan lokasi style.css. Untuk project ini, index.html dan style.css sebaiknya berada di folder yang sama dulu.",
    },
    {
      id: "open-project-in-code-editor-summary",
      type: "summary",
      points: [
        "Buka folder project sebagai workspace di code editor.",
        "index.html menyimpan struktur halaman.",
        "style.css menyimpan tampilan halaman.",
        "link rel=\"stylesheet\" menghubungkan HTML ke CSS.",
        "Berikutnya kamu akan menjalankan index.html di browser.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "open-project-in-code-editor-intro",
      "open-project-in-code-editor-html",
      "open-project-in-code-editor-css",
      "open-project-in-code-editor-local-task",
      "open-project-in-code-editor-summary",
    ],
  },
};

export const runHtmlInBrowserLesson: Lesson = {
  id: "run-html-in-browser",
  trackId: "frontend-engineering",
  moduleId: "local-static-website-project",
  title: "Menjalankan HTML di Browser",
  slug: "run-html-in-browser",
  description:
    "Jalankan file HTML lokal di browser dan pahami cara melihat perubahan sederhana.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 35,
  objectives: [
    "Membuka file index.html di browser",
    "Memahami perbedaan file lokal dan website online",
    "Melakukan refresh setelah mengubah file",
    "Mengecek apakah CSS sudah terhubung",
  ],
  skillTags: ["Browser", "HTML", "CSS", "Local Workflow"],
  blocks: [
    {
      id: "run-html-in-browser-intro",
      type: "text",
      title: "HTML lokal bisa dibuka di browser",
      content:
        "File HTML lokal bisa dibuka langsung di browser. Chrome direkomendasikan untuk module ini karena lesson DevTools berikutnya memakai contoh Chrome DevTools. Browser modern lain seperti Firefox, Edge, atau Safari tetap bisa membuka file HTML lokal.\n\nSaat kamu membuka index.html dari perangkat sendiri, address bar biasanya diawali file://. Itu berarti browser sedang membaca file dari komputer kamu, bukan membuka website online.\n\nSetelah mengedit file, simpan dulu file-nya di code editor, lalu refresh browser. Browser membaca versi file yang tersimpan.",
    },
    {
      id: "run-html-in-browser-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di perangkat kamu:\n\n- Buka index.html di browser, idealnya Chrome untuk mengikuti lesson DevTools berikutnya.\n- Pastikan konten h1 dan paragraph terlihat.\n- Ubah teks di index.html.\n- Simpan file terlebih dahulu.\n- Refresh browser.\n- Ubah satu style di style.css.\n- Simpan file CSS terlebih dahulu.\n- Refresh browser lagi.\n\nIni belum deployment dan belum online. Tahap ini hanya memastikan project lokal bisa dibuka dan diperbarui.",
    },
    {
      id: "run-html-in-browser-callout",
      type: "callout",
      variant: "tip",
      title: "Jika perubahan tidak terlihat",
      content:
        "Cek tiga hal sederhana dulu: file sudah disimpan, browser sudah di-refresh, dan file CSS sudah terhubung dengan href yang benar.",
    },
    {
      id: "run-html-in-browser-quick-check",
      type: "quick-check",
      question:
        "Setelah mengubah file HTML lokal, langkah apa yang biasanya perlu dilakukan agar perubahan terlihat di browser?",
      options: [
        "Install React",
        "Simpan file lalu refresh browser",
        "Membuat database",
        "Menghapus file CSS",
      ],
      correctAnswer: "Simpan file lalu refresh browser",
      explanation:
        "Browser membaca file yang tersimpan. Setelah file diubah, simpan lalu refresh halaman agar browser membaca versi terbaru.",
    },
    {
      id: "run-html-in-browser-summary",
      type: "summary",
      points: [
        "Kamu bisa membuka HTML lokal di browser.",
        "Alamat file lokal biasanya diawali file://.",
        "Setelah edit file, simpan lalu refresh browser.",
        "Ini belum membuat website online.",
        "Berikutnya kamu akan memakai DevTools dasar untuk inspect halaman.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "run-html-in-browser-intro",
      "run-html-in-browser-local-task",
      "run-html-in-browser-quick-check",
      "run-html-in-browser-summary",
    ],
  },
};

export const basicDevtoolsStaticPageLesson: Lesson = {
  id: "basic-devtools-static-page",
  trackId: "frontend-engineering",
  moduleId: "local-static-website-project",
  title: "DevTools Dasar untuk Static Page",
  slug: "basic-devtools-static-page",
  description:
    "Gunakan DevTools untuk inspect elemen HTML dan melihat style CSS yang berlaku.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 40,
  objectives: [
    "Membuka browser DevTools",
    "Menggunakan Inspect Element",
    "Melihat struktur HTML dari browser",
    "Melihat CSS yang berlaku pada elemen",
    "Memahami DevTools sebagai alat observasi dan debugging",
  ],
  skillTags: ["DevTools", "Debugging", "HTML", "CSS"],
  blocks: [
    {
      id: "basic-devtools-static-page-intro",
      type: "text",
      title: "DevTools membantu melihat apa yang browser baca",
      content:
        "DevTools adalah alat di browser untuk melihat struktur halaman, style CSS, error, dan banyak hal lain. Chrome DevTools sudah built-in di Chrome, jadi tidak perlu instalasi terpisah.\n\nUntuk tahap ini, fokus cukup pada dua area: Elements dan Styles. Elements membantu kamu melihat HTML yang sedang dibaca browser. Styles membantu kamu melihat CSS yang berlaku pada elemen yang dipilih.",
    },
    {
      id: "basic-devtools-static-page-resources",
      type: "resource-links",
      title: "Resource Chrome DevTools",
      description:
        "Gunakan resource resmi ini untuk membuka DevTools dan memahami cara inspect HTML/CSS. Fokus pada langkah dasar dulu.",
      links: [
        {
          source: "Chrome DevTools Docs",
          title: "Open Chrome DevTools",
          description:
            "Panduan resmi untuk membuka DevTools dari Chrome.",
          url: "https://developer.chrome.com/docs/devtools/open",
          label: "Buka panduan DevTools",
          kind: "recommended",
        },
        {
          source: "Chrome DevTools Docs",
          title: "Inspect CSS and HTML",
          description:
            "Panduan resmi untuk melihat HTML yang dipilih dan CSS yang berlaku pada elemen.",
          url: "https://developer.chrome.com/docs/devtools/css",
          label: "Buka panduan inspect CSS",
          kind: "recommended",
        },
      ],
    },
    {
      id: "basic-devtools-static-page-case-study",
      type: "text",
      title: "Case study: padding card tidak terlihat",
      content:
        "Bayangkan kamu membuat .card, tetapi padding tidak terlihat. Cara mengeceknya:\n\n- Buka halaman lokal di Chrome.\n- Klik kanan pada elemen card.\n- Pilih Inspect.\n- Cek panel Elements dan pastikan elemen punya class card.\n- Cek panel Styles dan cari rule .card.\n- Lihat apakah property padding muncul.\n\nDengan cara ini, kamu tidak hanya menebak. Kamu melihat langsung apakah HTML dan CSS dibaca oleh browser.",
    },
    {
      id: "basic-devtools-static-page-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di browser kamu:\n\n- Buka halaman lokal.\n- Klik kanan elemen utama, lalu pilih Inspect.\n- Pilih elemen .card di panel Elements.\n- Temukan class pada HTML di panel Elements.\n- Temukan rule CSS di panel Styles.\n- Ubah sementara nilai padding di DevTools jika memungkinkan.\n- Refresh halaman dan perhatikan bahwa perubahan DevTools tidak otomatis tersimpan ke file.\n- Jika perubahan DevTools ingin dipakai permanen, salin perubahannya ke style.css lalu simpan file.\n\nTandai selesai setelah kamu berhasil menemukan elemen dan style yang berlaku.",
    },
    {
      id: "basic-devtools-static-page-callout",
      type: "callout",
      variant: "important",
      title: "DevTools bukan pengganti file project",
      content:
        "Perubahan di DevTools berguna untuk eksperimen cepat. Namun perubahan permanen tetap harus ditulis dan disimpan di file project, misalnya style.css.",
    },
    {
      id: "basic-devtools-static-page-summary",
      type: "summary",
      points: [
        "Kamu bisa memakai Inspect Element untuk melihat HTML.",
        "Panel Styles membantu melihat CSS yang berlaku.",
        "DevTools membantu debugging tanpa menebak-nebak.",
        "Perubahan di DevTools bersifat sementara sampai kamu menulisnya di file.",
        "Berikutnya kamu akan menyimpan project dengan Git dan GitHub.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "basic-devtools-static-page-intro",
      "basic-devtools-static-page-case-study",
      "basic-devtools-static-page-local-task",
      "basic-devtools-static-page-summary",
    ],
  },
};

export const saveProjectWithGitGithubLesson: Lesson = {
  id: "save-project-with-git-github",
  trackId: "frontend-engineering",
  moduleId: "local-static-website-project",
  title: "Menyimpan Project dengan Git dan GitHub",
  slug: "save-project-with-git-github",
  description:
    "Simpan progres project lokal memakai Git dan siapkan repository GitHub sederhana.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 50,
  objectives: [
    "Memahami Git sebagai alat menyimpan riwayat perubahan",
    "Memahami GitHub sebagai tempat menyimpan repository secara online",
    "Mengenal alur sederhana init, add, commit, remote, push",
    "Menulis catatan README singkat untuk project",
  ],
  skillTags: ["Git", "GitHub", "Local Workflow", "Portfolio"],
  blocks: [
    {
      id: "save-project-with-git-github-intro",
      type: "text",
      title: "Git menyimpan riwayat, GitHub menyimpan repository online",
      content:
        "Git membantu kamu menyimpan riwayat perubahan project. GitHub membantu menyimpan repository secara online agar project bisa dibuka kembali, dibagikan, dan nanti dipakai sebagai portofolio.\n\nTool prerequisite:\n- Required: Git terinstall di perangkat kamu.\n- Required: akun GitHub siap dipakai.\n- Recommended: baca GitHub Hello World untuk gambaran repository dan commit.\n\nKamu belum perlu memahami semua fitur Git. Di lesson ini, cukup pahami alur dasar: init, add, commit, remote, dan push.",
    },
    {
      id: "save-project-with-git-github-resources",
      type: "resource-links",
      title: "Resource Git dan GitHub",
      description:
        "Gunakan link resmi ini untuk install Git dan memahami workflow GitHub beginner. Jalankan setup sesuai kebutuhan perangkat kamu.",
      links: [
        {
          source: "Git",
          title: "Git Downloads",
          description:
            "Install Git agar command seperti git init, git add, git commit, dan git push tersedia di terminal.",
          url: "https://git-scm.com/install/",
          label: "Install Git",
          kind: "required",
        },
        {
          source: "GitHub Docs",
          title: "Get started with GitHub",
          description:
            "Panduan awal untuk akun GitHub, repository, dan workflow dasar.",
          url: "https://docs.github.com/en/get-started",
          label: "Buka GitHub Getting Started",
          kind: "required",
        },
        {
          source: "GitHub Docs",
          title: "Hello World",
          description:
            "Panduan beginner untuk memahami repository, commit, branch, dan GitHub flow secara ringan.",
          url: "https://docs.github.com/en/get-started/start-your-journey/hello-world",
          label: "Buka GitHub Hello World",
          kind: "recommended",
        },
      ],
    },
    {
      id: "save-project-with-git-github-commands",
      type: "code-example",
      title: "Contoh command Git dasar",
      language: "bash",
      code: `git init
git add .
git commit -m "Create static website"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main`,
      explanation:
        "Jalankan command satu per satu, jangan sekaligus. git init menyiapkan repository lokal. git add memilih file yang akan disimpan. git commit membuat snapshot perubahan. <your-repository-url> adalah URL repository GitHub kamu, misalnya URL yang diberikan GitHub setelah kamu membuat repository baru. remote dan push mengirim repository ke GitHub. Jika terminal mengatakan git tidak dikenali, kemungkinan Git belum terinstall atau terminal perlu dibuka ulang setelah install.",
    },
    {
      id: "save-project-with-git-github-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di folder project kamu:\n\n- Pastikan Git sudah terinstall.\n- Pastikan kamu bisa masuk ke akun GitHub.\n- Buka terminal di folder project.\n- Jalankan git init.\n- Tambahkan file ke staging dengan git add .\n- Buat commit pertama.\n- Buat repository baru di GitHub.\n- Salin repository URL dari GitHub, lalu pakai URL itu untuk mengganti <your-repository-url>.\n- Hubungkan remote repository.\n- Push project ke GitHub.\n- Jika GitHub meminta sign in atau authentication, ikuti instruksi resmi dari GitHub.\n- Buka repository di browser dan pastikan file terlihat.\n\nJika Git masih terasa asing, itu normal. Jalankan command satu per satu dan fokus dulu pada urutan besarnya.",
    },
    {
      id: "save-project-with-git-github-readme-practice",
      type: "writing-practice",
      prompt:
        "Tulis draft README singkat untuk project website statis pertamamu. Jelaskan nama project, tujuan project, teknologi yang dipakai, cara membuka project secara lokal, dan satu hal yang kamu pelajari.",
      placeholder:
        "Contoh awal: Project ini adalah website statis sederhana yang dibuat dengan HTML dan CSS...",
      minimumCharacters: 180,
      checklist: [
        "Menyebut nama project",
        "Menyebut tujuan project",
        "Menyebut teknologi HTML dan CSS",
        "Menjelaskan cara membuka project secara lokal",
        "Menyebut satu hal yang dipelajari",
      ],
      modelAnswer:
        "Project ini adalah website statis sederhana untuk latihan HTML dan CSS lokal. Project berisi index.html untuk struktur halaman dan style.css untuk tampilan. Untuk membukanya, saya bisa membuka file index.html langsung di browser. Saya belajar menghubungkan CSS ke HTML, melihat perubahan dengan refresh browser, dan mulai menyimpan project dengan Git.",
    },
    {
      id: "save-project-with-git-github-callout",
      type: "callout",
      variant: "tip",
      title: "Tidak perlu menghafal semua command sekarang",
      content:
        "Git akan terasa lebih masuk akal setelah dipakai berulang. Untuk tahap ini, pahami bahwa commit menyimpan snapshot dan push mengirim perubahan ke GitHub. Jika git tidak dikenali di terminal, cek instalasi Git dulu, lalu buka ulang terminal.",
    },
    {
      id: "save-project-with-git-github-summary",
      type: "summary",
      points: [
        "Git menyimpan riwayat perubahan project.",
        "GitHub menyimpan repository secara online.",
        "Alur awal yang penting: init, add, commit, remote, push.",
        "README membantu orang lain memahami project.",
        "Berikutnya kamu akan menguji kesiapan local static website workflow.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "save-project-with-git-github-intro",
      "save-project-with-git-github-commands",
      "save-project-with-git-github-local-task",
      "save-project-with-git-github-readme-practice",
      "save-project-with-git-github-summary",
    ],
  },
};

export const localStaticWebsiteProjectAssessmentLesson: Lesson = {
  id: "local-static-website-project-assessment",
  trackId: "frontend-engineering",
  moduleId: "local-static-website-project",
  title: "Uji Kompetensi Local Static Website Project",
  slug: "local-static-website-project-assessment",
  description:
    "Cek kesiapan kamu membuat, menjalankan, memeriksa, menyimpan, dan menjelaskan website statis lokal.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 60,
  objectives: [
    "Mengecek kemampuan membuat folder project lokal",
    "Mengecek kemampuan membuat file index.html dan style.css",
    "Mengecek kemampuan membuka HTML di browser",
    "Mengecek kemampuan inspect elemen dengan DevTools",
    "Mengecek kemampuan menyimpan project dengan Git dan GitHub",
    "Mengecek kemampuan menjelaskan project secara singkat",
  ],
  skillTags: ["Local Workflow", "HTML", "CSS", "Git", "GitHub", "Checkpoint"],
  blocks: [
    {
      id: "local-static-website-project-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini mengecek workflow local static website. Kamu akan membuktikan bahwa kamu bisa menyiapkan folder project, membuat index.html dan style.css, membuka halaman di browser, memakai DevTools untuk inspect HTML/CSS, menyimpan project dengan Git/GitHub, dan menjelaskan project dengan singkat.\n\nFluentStack tidak bisa memeriksa file di perangkat kamu secara otomatis. Karena itu, checklist lokal di checkpoint ini adalah self-review yang harus kamu kerjakan dengan jujur.",
    },
    {
      id: "local-static-website-project-assessment-quiz-block",
      type: "quiz",
      quizId: "local-static-website-project-assessment-quiz",
    },
    {
      id: "local-static-website-project-assessment-tool-resources",
      type: "resource-links",
      title: "Resource tool untuk self-review",
      description:
        "Gunakan link resmi ini jika kamu perlu mengecek ulang code editor, Git, GitHub, atau DevTools sebelum menyelesaikan checkpoint.",
      links: [
        {
          source: "Visual Studio Code",
          title: "Download Visual Studio Code",
          description:
            "Code editor yang direkomendasikan untuk beginner path ini.",
          url: "https://code.visualstudio.com/download",
          label: "Download VS Code",
          kind: "recommended",
        },
        {
          source: "Git",
          title: "Git Downloads",
          description:
            "Install Git agar command Git tersedia di terminal.",
          url: "https://git-scm.com/install/",
          label: "Install Git",
          kind: "required",
        },
        {
          source: "GitHub Docs",
          title: "Get started with GitHub",
          description:
            "Panduan awal untuk akun GitHub, repository, dan workflow dasar.",
          url: "https://docs.github.com/en/get-started",
          label: "Buka GitHub Getting Started",
          kind: "required",
        },
        {
          source: "Chrome DevTools Docs",
          title: "Open Chrome DevTools",
          description:
            "Panduan resmi membuka DevTools di Chrome.",
          url: "https://developer.chrome.com/docs/devtools/open",
          label: "Buka panduan DevTools",
          kind: "recommended",
        },
      ],
    },
    {
      id: "local-static-website-project-assessment-local-task",
      type: "text",
      title: "Local project checklist",
      content:
        "Tool readiness self-review:\n\n- Code editor sudah terinstall atau tersedia. VS Code direkomendasikan.\n- Browser modern tersedia. Chrome direkomendasikan untuk DevTools.\n- Git sudah terinstall.\n- Akun GitHub sudah siap dipakai.\n\nPastikan project lokal kamu memenuhi checklist ini:\n\n- Project punya folder sendiri.\n- Project punya index.html.\n- Project punya style.css.\n- HTML memakai struktur semantic sederhana.\n- CSS terhubung ke HTML lewat link stylesheet.\n- Halaman bisa dibuka di browser.\n- DevTools bisa inspect elemen utama.\n- Project punya minimal satu commit Git.\n- Project sudah dipush ke GitHub.\n- README singkat sudah ditulis.\n\nChecklist ini adalah self-review. FluentStack tidak memeriksa perangkat lokal, terminal, atau akun GitHub kamu secara otomatis. Tandai blok ini selesai setelah kamu mengecek project lokalmu. Jangan tandai hanya karena sudah membaca checklist.",
    },
    {
      id: "local-static-website-project-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Jelaskan project website statis kamu dalam 5 sampai 7 kalimat. Tulis seperti kamu sedang menjelaskan project kecil kepada mentor atau calon reviewer.",
      placeholder:
        "Project saya adalah website statis sederhana tentang... Struktur filenya terdiri dari...",
      minimumCharacters: 260,
      checklist: [
        "Menjelaskan tujuan project",
        "Menyebut struktur file utama",
        "Menjelaskan cara menjalankan secara lokal",
        "Menyebut satu hal yang dicek dengan DevTools",
        "Menyebut status Git/GitHub",
        "Menyebut hal yang dipelajari",
      ],
      modelAnswer:
        "Project saya adalah website statis sederhana untuk latihan HTML dan CSS dasar. Struktur project terdiri dari index.html untuk konten utama dan style.css untuk tampilan. Untuk menjalankannya, saya membuka index.html langsung di browser lalu refresh setelah menyimpan perubahan. Saya memakai DevTools untuk inspect elemen card dan melihat apakah rule CSS terbaca. Project ini sudah saya simpan dengan Git dan push ke GitHub. Dari project ini, saya belajar menghubungkan file lokal, mengecek style di browser, dan menjelaskan hasil kerja dengan lebih rapi.",
    },
    {
      id: "local-static-website-project-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Baca dokumentasi resmi secara terarah",
      description:
        "Gunakan bagian ini sebagai panduan membaca dokumentasi workflow dasar, bukan tugas menghafal. Fokus pada bagian yang langsung membantu project lokalmu.",
      links: [
        {
          source: "MDN Web Docs",
          title: "Getting started with the web",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started",
          focus: [
            "struktur website sederhana",
            "file HTML/CSS",
            "workflow belajar web dasar",
          ],
          ignoreForNow: [
            "deployment",
            "JavaScript advanced",
            "framework",
          ],
        },
        {
          source: "GitHub Docs",
          title: "Hello World",
          url: "https://docs.github.com/en/get-started/start-your-journey/hello-world",
          focus: [
            "repository",
            "commit",
            "basic GitHub workflow",
          ],
          ignoreForNow: [
            "pull request workflow advanced",
            "GitHub Actions",
            "team collaboration flow",
          ],
        },
        {
          source: "Chrome DevTools Docs",
          title: "Inspect CSS and HTML",
          url: "https://developer.chrome.com/docs/devtools/css",
          focus: [
            "inspect element",
            "view applied CSS",
            "test style changes temporarily",
          ],
          ignoreForNow: [
            "performance profiling",
            "network debugging",
            "source maps",
          ],
        },
      ],
      followUpAction:
        "Buka project lokal kamu, inspect elemen utama, lalu tulis satu hal yang kamu lihat di DevTools dan satu perubahan yang kamu simpan di file project.",
    },
    {
      id: "local-static-website-project-assessment-summary",
      type: "summary",
      points: [
        "Kamu membuktikan bahwa kamu bisa membuat project website statis lokal.",
        "Kamu membuktikan bahwa kamu bisa membuka HTML di browser dan melihat perubahan setelah menyimpan file.",
        "Kamu membuktikan bahwa kamu bisa memakai DevTools untuk inspect HTML dan CSS dasar.",
        "Kamu membuktikan bahwa kamu bisa menyimpan project dengan Git/GitHub.",
        "Jika checkpoint belum lulus, review lagi folder project, link CSS, browser refresh, DevTools Elements/Styles, Git commit, GitHub push, dan README singkat.",
        "Setelah kamu bisa membuat project statis lokal, berikutnya kamu bisa mulai belajar layout CSS yang lebih terarah seperti Flexbox dan Grid.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "local-static-website-project-assessment-recap",
      "local-static-website-project-assessment-quiz-block",
      "local-static-website-project-assessment-local-task",
      "local-static-website-project-assessment-writing-practice",
      "local-static-website-project-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const localStaticWebsiteProjectAssessmentQuiz: Quiz = {
  id: "local-static-website-project-assessment-quiz",
  lessonId: "local-static-website-project-assessment",
  title: "Uji Kompetensi Local Static Website Project",
  passingScore: 70,
  questions: [
    {
      id: "local-static-website-project-assessment-q1",
      type: "multiple-choice",
      question: "Apa fungsi utama folder project lokal?",
      options: [
        "Mengganti browser agar halaman otomatis online",
        "Menjadi tempat kerja yang menyimpan file project dalam satu lokasi",
        "Menghapus kebutuhan HTML dan CSS",
        "Menjalankan framework tanpa setup",
      ],
      correctAnswer:
        "Menjadi tempat kerja yang menyimpan file project dalam satu lokasi",
      explanation:
        "Folder project membantu kamu mengelompokkan file seperti index.html, style.css, gambar, dan README agar workflow lokal lebih rapi.",
    },
    {
      id: "local-static-website-project-assessment-q2",
      type: "multiple-choice",
      question: "Dalam project website statis sederhana, index.html biasanya dipakai untuk apa?",
      options: [
        "Menyimpan password GitHub",
        "Mengatur semua commit Git",
        "Menjadi file halaman utama yang dibuka browser",
        "Menginstall package manager",
      ],
      correctAnswer: "Menjadi file halaman utama yang dibuka browser",
      explanation:
        "index.html biasanya menjadi halaman utama. Browser membaca file ini untuk menampilkan struktur dan konten halaman.",
    },
    {
      id: "local-static-website-project-assessment-q3",
      type: "multiple-choice",
      question: "Baris mana yang menghubungkan index.html ke style.css saat kedua file berada di folder yang sama?",
      options: [
        "<script src=\"style.css\"></script>",
        "<meta name=\"style\" content=\"style.css\" />",
        "<style href=\"style.css\"></style>",
        "<link rel=\"stylesheet\" href=\"style.css\" />",
      ],
      correctAnswer: "<link rel=\"stylesheet\" href=\"style.css\" />",
      explanation:
        "File CSS eksternal dihubungkan dari HTML memakai link rel=\"stylesheet\". href menunjuk ke lokasi file CSS.",
    },
    {
      id: "local-static-website-project-assessment-q4",
      type: "multiple-choice",
      question: "Saat membuka file HTML lokal langsung dari perangkat, address bar biasanya diawali dengan apa?",
      options: ["file://", "npm://", "database://", "react://"],
      correctAnswer: "file://",
      explanation:
        "file:// menunjukkan browser sedang membaca file lokal dari perangkat kamu. Itu berbeda dari website online yang biasanya memakai http:// atau https://.",
    },
    {
      id: "local-static-website-project-assessment-q5",
      type: "multiple-choice",
      question: "Setelah mengubah index.html atau style.css, langkah apa yang biasanya perlu dilakukan agar perubahan terlihat?",
      options: [
        "Install Next.js",
        "Simpan file lalu refresh browser",
        "Buat database baru",
        "Ganti semua tag menjadi div",
      ],
      correctAnswer: "Simpan file lalu refresh browser",
      explanation:
        "Browser membaca file yang tersimpan. Setelah mengedit, simpan file lalu refresh halaman agar browser membaca versi terbaru.",
    },
    {
      id: "local-static-website-project-assessment-q6",
      type: "multiple-choice",
      question: "Di DevTools, panel apa yang paling tepat untuk melihat HTML yang sedang dibaca browser?",
      options: ["Console saja", "Network throttling", "Elements", "Application storage"],
      correctAnswer: "Elements",
      explanation:
        "Panel Elements membantu kamu inspect struktur HTML yang sedang dibaca browser dan memilih elemen tertentu di halaman.",
    },
    {
      id: "local-static-website-project-assessment-q7",
      type: "multiple-choice",
      question: "Apa fungsi commit di Git pada workflow beginner ini?",
      options: [
        "Menghapus repository dari GitHub",
        "Membuat halaman otomatis responsive",
        "Mengubah HTML menjadi JavaScript",
        "Menyimpan snapshot perubahan dengan pesan",
      ],
      correctAnswer: "Menyimpan snapshot perubahan dengan pesan",
      explanation:
        "Commit menyimpan snapshot perubahan project. Pesan commit membantu kamu memahami apa yang berubah.",
    },
    {
      id: "local-static-website-project-assessment-q8",
      type: "multiple-choice",
      question: "Apa peran GitHub dalam milestone ini?",
      options: [
        "Menyimpan repository project secara online",
        "Mengganti semua file CSS",
        "Menjalankan browser lokal",
        "Membuat npm wajib dipakai",
      ],
      correctAnswer: "Menyimpan repository project secara online",
      explanation:
        "GitHub menyimpan repository secara online sehingga project bisa dibuka kembali, dibagikan, dan nanti dipakai sebagai bukti belajar.",
    },
    {
      id: "local-static-website-project-assessment-q9",
      type: "multiple-choice",
      question: "Apa isi README yang paling berguna untuk project website statis pertama?",
      options: [
        "Daftar semua framework populer",
        "Password akun GitHub",
        "Tujuan project, teknologi yang dipakai, dan cara membuka project",
        "Riwayat semua tab browser",
      ],
      correctAnswer:
        "Tujuan project, teknologi yang dipakai, dan cara membuka project",
      explanation:
        "README membantu orang lain memahami project. Untuk tahap ini, jelaskan tujuan, struktur file, teknologi HTML/CSS, dan cara membuka project secara lokal.",
    },
    {
      id: "local-static-website-project-assessment-q10",
      type: "multiple-choice",
      question: "Mana batasan yang benar untuk module Local Static Website Project ini?",
      options: [
        "Harus memakai React sebelum bisa menulis HTML",
        "Fokus pada HTML/CSS lokal, browser, DevTools, Git, dan GitHub tanpa npm atau framework",
        "Harus deploy ke production sebelum membuat commit",
        "Fokus utama adalah membuat backend dan database",
      ],
      correctAnswer:
        "Fokus pada HTML/CSS lokal, browser, DevTools, Git, dan GitHub tanpa npm atau framework",
      explanation:
        "Milestone ini sengaja ringan. Learner berlatih workflow static HTML/CSS lokal sebelum masuk tool yang lebih berat.",
    },
  ],
};

export const localStaticWebsiteProjectLessons: Lesson[] = [
  setupLocalProjectFolderLesson,
  openProjectInCodeEditorLesson,
  runHtmlInBrowserLesson,
  basicDevtoolsStaticPageLesson,
  saveProjectWithGitGithubLesson,
  localStaticWebsiteProjectAssessmentLesson,
];

export const localStaticWebsiteProjectQuizzes: Quiz[] = [
  localStaticWebsiteProjectAssessmentQuiz,
];

export const localStaticWebsiteProjectChallenges: CodingChallenge[] = [];
