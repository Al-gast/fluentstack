import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const localReactAppModule: Module = {
  id: "local-react-app",
  trackId: "frontend-engineering",
  title: "Local React App",
  slug: "local-react-app",
  description:
    "Membuat, menjalankan, mengedit, menyimpan, dan menjelaskan React app pertama di perangkat sendiri dengan Vite, TypeScript ringan, Git, dan GitHub.",
  order: 24,
  lessonIds: [
    "setup-local-react-project",
    "run-react-dev-server",
    "understand-react-src-structure",
    "create-first-local-react-component",
    "add-react-state-and-event-locally",
    "save-react-project-to-github",
    "local-react-app-assessment",
  ],
  estimatedHours: 7,
  skillTags: ["React", "Vite", "Local Workflow", "GitHub", "TypeScript"],
};

export const setupLocalReactProjectLesson: Lesson = {
  id: "setup-local-react-project",
  trackId: "frontend-engineering",
  moduleId: "local-react-app",
  title: "Membuat React Project Lokal",
  slug: "setup-local-react-project",
  description:
    "Membuat project React lokal pertama dengan Vite dan template React TypeScript.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan tujuan Local React App milestone",
    "Mengecek kesiapan Node.js dan npm",
    "Membuat project React lokal dengan Vite",
    "Memahami kenapa project React butuh install dependencies",
  ],
  skillTags: ["React", "Vite", "npm", "Local Workflow"],
  blocks: [
    {
      id: "setup-local-react-project-intro",
      type: "text",
      title: "Sekarang React pindah ke perangkat kamu",
      content:
        "Di module sebelumnya, kamu belajar React lewat lesson dan practice di FluentStack. Local React App berbeda: kamu akan membuat folder project React sungguhan di perangkat sendiri, menjalankan dev server, mengedit file di code editor, lalu menyimpan project dengan Git dan GitHub.\n\nTujuannya bukan membuat app besar. Tujuannya adalah memahami workflow React lokal: project dibuat dari template, dependencies diinstall, dev server berjalan, file di `src` diedit, browser menampilkan hasil, dan perubahan disimpan sebagai commit.",
    },
    {
      id: "setup-local-react-project-prerequisite",
      type: "callout",
      variant: "important",
      title: "Prasyarat sebelum membuat project",
      content:
        "Pastikan Node.js dan npm sudah tersedia. Kamu pernah mengeceknya di Local Tooling and npm Basics. Jika belum yakin, jalankan `node -v` dan `npm -v` di terminal. Jika command tidak dikenali, install Node.js dulu sebelum melanjutkan.",
    },
    {
      id: "setup-local-react-project-resources",
      type: "resource-links",
      title: "Tool dan dokumentasi setup",
      description:
        "Gunakan link resmi ini jika tool belum tersedia atau kamu ingin mengecek command pembuatan project.",
      links: [
        {
          source: "Node.js",
          title: "Download Node.js",
          description:
            "Install Node.js agar command node dan npm tersedia di terminal.",
          url: "https://nodejs.org/en/download",
          label: "Download Node.js",
          kind: "required",
        },
        {
          source: "Vite",
          title: "Getting Started",
          description:
            "Dokumentasi resmi Vite untuk membuat project frontend baru.",
          url: "https://vite.dev/guide/",
          label: "Buka Vite Guide",
          kind: "recommended",
        },
        {
          source: "React",
          title: "Start a New React Project",
          description:
            "Panduan resmi React tentang pilihan setup project baru.",
          url: "https://react.dev/learn/start-a-new-react-project",
          label: "Buka React Docs",
          kind: "recommended",
        },
      ],
    },
    {
      id: "setup-local-react-project-command",
      type: "code-example",
      title: "Command membuat project Vite React TypeScript",
      language: "bash",
      code: `npm create vite@latest fluent-react-notes -- --template react-ts
cd fluent-react-notes
npm install`,
      explanation:
        "Command pertama membuat folder project. `cd` masuk ke folder itu. `npm install` mengunduh dependencies yang dibutuhkan agar project bisa dijalankan.",
    },
    {
      id: "setup-local-react-project-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di perangkat kamu:\n\n- Buka terminal di lokasi tempat kamu biasa menyimpan project.\n- Jalankan `node -v` dan `npm -v` untuk memastikan tooling tersedia.\n- Jalankan command Vite untuk membuat project `fluent-react-notes`.\n- Masuk ke folder project dengan `cd fluent-react-notes`.\n- Jalankan `npm install` dan tunggu sampai selesai.\n- Buka folder project di code editor.\n- Pastikan ada file `package.json` dan folder `src`.\n\nChecklist ini tidak diperiksa otomatis oleh FluentStack. Tandai selesai setelah folder project benar-benar dibuat di perangkat kamu.",
    },
    {
      id: "setup-local-react-project-troubleshooting",
      type: "callout",
      variant: "common-mistake",
      title: "Folder dibuat di lokasi yang salah",
      content:
        "Jika kamu tidak menemukan folder project, cek lokasi terminal saat command dijalankan. Gunakan `pwd` di macOS/Linux atau `cd` di Windows untuk melihat folder aktif. Simpan project di lokasi kerja yang mudah ditemukan, bukan di folder download sementara.",
    },
    {
      id: "setup-local-react-project-summary",
      type: "summary",
      points: [
        "Local React App adalah milestone workflow React di perangkat sendiri.",
        "Vite React TypeScript memberi setup ringan untuk belajar React lokal.",
        "`npm install` dibutuhkan karena project React punya dependencies.",
        "Folder project harus dibuka sebagai workspace di code editor.",
        "Berikutnya kamu akan menjalankan dev server dengan `npm run dev`.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "setup-local-react-project-intro",
      "setup-local-react-project-prerequisite",
      "setup-local-react-project-command",
      "setup-local-react-project-local-task",
      "setup-local-react-project-summary",
    ],
  },
};

export const runReactDevServerLesson: Lesson = {
  id: "run-react-dev-server",
  trackId: "frontend-engineering",
  moduleId: "local-react-app",
  title: "Menjalankan `npm run dev`",
  slug: "run-react-dev-server",
  description:
    "Menjalankan development server React, membuka local URL, dan memahami alur edit-save-refresh.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 40,
  objectives: [
    "Menjalankan dev server dari folder project",
    "Membuka React app di browser lokal",
    "Memahami bahwa terminal dev server harus tetap aktif",
    "Membedakan dev server lokal dari deployment online",
  ],
  skillTags: ["React", "Vite", "Dev Server", "Browser"],
  blocks: [
    {
      id: "run-react-dev-server-intro",
      type: "text",
      title: "React app lokal berjalan lewat dev server",
      content:
        "Berbeda dari HTML statis yang bisa dibuka langsung sebagai file, React app modern biasanya dijalankan lewat development server. Dev server membaca source code, memproses module, lalu menyajikan app ke browser lokal.\n\nSaat dev server berjalan, terminal harus tetap aktif. Browser membuka local URL seperti `http://localhost:5173`. Ini masih berjalan di perangkat kamu, belum online, dan belum deployment.",
    },
    {
      id: "run-react-dev-server-command",
      type: "code-example",
      title: "Command menjalankan dev server",
      language: "bash",
      code: `npm run dev`,
      explanation:
        "Jalankan command ini dari dalam folder project, yaitu folder yang punya `package.json`. Vite akan menampilkan local URL yang bisa dibuka di browser.",
    },
    {
      id: "run-react-dev-server-browser-check",
      type: "text",
      title: "Checklist browser check",
      content:
        "Kerjakan di perangkat kamu:\n\n- Pastikan terminal berada di folder project React.\n- Jalankan `npm run dev`.\n- Buka URL lokal yang muncul di terminal, biasanya `http://localhost:5173`.\n- Pastikan halaman React starter tampil di browser.\n- Ubah teks kecil di `src/App.tsx`.\n- Simpan file.\n- Pastikan browser memperbarui tampilan.\n- Jika ingin menghentikan dev server, kembali ke terminal lalu tekan Ctrl+C.\n\nJika port `5173` sudah dipakai, Vite bisa memakai port lain. Ikuti URL yang tertulis di terminal.",
    },
    {
      id: "run-react-dev-server-troubleshooting",
      type: "callout",
      variant: "warning",
      title: "Command dijalankan dari folder yang salah",
      content:
        "Jika `npm run dev` gagal karena script tidak ditemukan, kemungkinan terminal tidak berada di folder project yang punya `package.json`. Masuk dulu ke folder project dengan `cd fluent-react-notes`, lalu jalankan command lagi.",
    },
    {
      id: "run-react-dev-server-quick-check",
      type: "quick-check",
      question: "Apa arti `localhost` saat kamu membuka React app lokal?",
      options: [
        "Browser membuka server yang berjalan di perangkat kamu sendiri",
        "Project sudah otomatis online dan bisa diakses semua orang",
        "React sudah berubah menjadi database",
        "GitHub sudah menerima commit baru",
      ],
      correctAnswer:
        "Browser membuka server yang berjalan di perangkat kamu sendiri",
      explanation:
        "`localhost` berarti browser mengakses server lokal di perangkat kamu. Ini belum deployment publik.",
    },
    {
      id: "run-react-dev-server-summary",
      type: "summary",
      points: [
        "React app lokal dijalankan lewat dev server.",
        "`npm run dev` harus dijalankan dari folder project yang punya `package.json`.",
        "URL localhost menunjukkan app berjalan di perangkat sendiri.",
        "Dev server tetap aktif selama terminalnya masih berjalan.",
        "Berikutnya kamu akan membaca struktur folder `src`.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "run-react-dev-server-intro",
      "run-react-dev-server-command",
      "run-react-dev-server-browser-check",
      "run-react-dev-server-quick-check",
      "run-react-dev-server-summary",
    ],
  },
};

export const understandReactSrcStructureLesson: Lesson = {
  id: "understand-react-src-structure",
  trackId: "frontend-engineering",
  moduleId: "local-react-app",
  title: "Mengenal Struktur `src`",
  slug: "understand-react-src-structure",
  description:
    "Membaca file utama di folder src: main.tsx, App.tsx, CSS, assets, dan component kecil.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Mengidentifikasi file utama dalam folder src",
    "Menjelaskan peran main.tsx dan App.tsx",
    "Membedakan file entry, component, style, dan assets",
    "Menghapus fokus dari file yang belum perlu diedit",
  ],
  skillTags: ["React", "Project Structure", "TypeScript"],
  blocks: [
    {
      id: "understand-react-src-structure-intro",
      type: "text",
      title: "`src` adalah tempat source code React kamu",
      content:
        "Folder `src` berisi source code app React. Di awal, jangan merasa harus memahami semua file sekaligus. Fokus pada alur sederhana: `main.tsx` memasang React ke halaman, `App.tsx` berisi component utama, file CSS mengatur tampilan, dan folder component bisa kamu buat untuk UI yang dipisah.\n\nProject template bisa sedikit berbeda antar versi, tetapi mental model-nya sama: entry file memulai app, component menyusun UI, style file mengatur tampilan.",
    },
    {
      id: "understand-react-src-structure-tree",
      type: "code-example",
      title: "Struktur `src` yang umum",
      language: "bash",
      code: `src/
  assets/
  App.css
  App.tsx
  index.css
  main.tsx`,
      explanation:
        "`main.tsx` adalah entry React. `App.tsx` adalah component utama. CSS bisa diubah untuk tampilan awal. `assets` biasanya menyimpan gambar atau file statis kecil.",
    },
    {
      id: "understand-react-src-structure-main-example",
      type: "code-example",
      title: "main.tsx sebagai entry",
      language: "tsx",
      code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);`,
      explanation:
        "`main.tsx` mengambil elemen root dari HTML lalu merender component `App`. Untuk awal, kamu biasanya cukup membaca file ini, bukan sering mengubahnya.",
    },
    {
      id: "understand-react-src-structure-app-example",
      type: "code-example",
      title: "App.tsx sebagai component utama",
      language: "tsx",
      code: `function App() {
  return (
    <main>
      <h1>Fluent React Notes</h1>
      <p>Project React lokal pertama saya.</p>
    </main>
  );
}

export default App;`,
      explanation:
        "`App` adalah component utama yang bisa kamu edit untuk mulai membangun UI sendiri.",
    },
    {
      id: "understand-react-src-structure-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di project lokal kamu:\n\n- Buka folder `src`.\n- Temukan `main.tsx` dan baca import `App`.\n- Buka `App.tsx` dan ubah teks heading menjadi nama project kamu.\n- Simpan file dan lihat perubahan di browser.\n- Buka `App.css` atau `index.css` dan ubah style kecil.\n- Jangan hapus `main.tsx` atau elemen root sebelum kamu memahami perannya.\n\nTandai selesai setelah kamu bisa menjelaskan peran `main.tsx`, `App.tsx`, dan file CSS utama.",
    },
    {
      id: "understand-react-src-structure-summary",
      type: "summary",
      points: [
        "`src` menyimpan source code React app.",
        "`main.tsx` adalah entry yang merender `App` ke root.",
        "`App.tsx` adalah component utama yang paling sering diedit di awal.",
        "CSS file mengatur tampilan awal project.",
        "Berikutnya kamu akan membuat component baru dan mengimportnya ke App.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "understand-react-src-structure-intro",
      "understand-react-src-structure-tree",
      "understand-react-src-structure-main-example",
      "understand-react-src-structure-app-example",
      "understand-react-src-structure-local-task",
      "understand-react-src-structure-summary",
    ],
  },
};

export const createFirstLocalReactComponentLesson: Lesson = {
  id: "create-first-local-react-component",
  trackId: "frontend-engineering",
  moduleId: "local-react-app",
  title: "Membuat Component Pertama di Local Project",
  slug: "create-first-local-react-component",
  description:
    "Membuat file component baru, memberi props sederhana, dan mengimport component ke App.tsx.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 55,
  objectives: [
    "Membuat folder components di src",
    "Membuat file component React baru",
    "Menggunakan props sederhana di local project",
    "Mengimport component ke App.tsx",
  ],
  skillTags: ["React", "Components", "Props", "Local Workflow"],
  blocks: [
    {
      id: "create-first-local-react-component-intro",
      type: "text",
      title: "Project lokal mulai rapi saat UI dipisah",
      content:
        "Setelah kamu bisa mengedit `App.tsx`, langkah berikutnya adalah membuat component sendiri. Untuk project kecil, mulai dari component yang mudah dijelaskan, misalnya `ProfileCard`, `ProjectCard`, atau `NoteCard`.\n\nComponent baru biasanya disimpan di folder `src/components`. Folder ini bukan aturan wajib dari React, tetapi membantu project tetap rapi saat jumlah component bertambah.",
    },
    {
      id: "create-first-local-react-component-file-example",
      type: "code-example",
      title: "src/components/ProfileCard.tsx",
      language: "tsx",
      code: `type ProfileCardProps = {
  name: string;
  role: string;
  summary: string;
};

export function ProfileCard({ name, role, summary }: ProfileCardProps) {
  return (
    <article className="profile-card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{summary}</p>
    </article>
  );
}`,
      explanation:
        "`ProfileCard` menerima props agar isi card bisa diganti dari parent. Type props membuat bentuk data lebih jelas.",
    },
    {
      id: "create-first-local-react-component-app-example",
      type: "code-example",
      title: "Import component di App.tsx",
      language: "tsx",
      code: `import { ProfileCard } from "./components/ProfileCard";

function App() {
  return (
    <main>
      <h1>Fluent React Notes</h1>
      <ProfileCard
        name="Rina"
        role="Frontend learner"
        summary="Sedang membangun React app lokal pertama."
      />
    </main>
  );
}

export default App;`,
      explanation:
        "App menyusun component dan mengirim props. `ProfileCard` fokus menampilkan satu card.",
    },
    {
      id: "create-first-local-react-component-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di project lokal kamu:\n\n- Buat folder `src/components`.\n- Buat file `ProfileCard.tsx` atau component card sejenis.\n- Buat type props sederhana.\n- Export component dari file tersebut.\n- Import component di `App.tsx`.\n- Kirim minimal dua props dari `App.tsx`.\n- Pastikan component tampil di browser.\n- Tambahkan style kecil untuk class component di file CSS.\n\nJika component tidak muncul, cek path import, nama export, dan error di terminal atau browser Console.",
    },
    {
      id: "create-first-local-react-component-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Import path sering salah satu karakter",
      content:
        "Jika file berada di `src/components/ProfileCard.tsx`, import dari `App.tsx` biasanya `./components/ProfileCard`. Huruf besar-kecil pada nama file bisa penting, terutama saat project nanti berjalan di environment Linux.",
    },
    {
      id: "create-first-local-react-component-summary",
      type: "summary",
      points: [
        "Component lokal bisa dibuat di folder `src/components`.",
        "Props membuat component bisa menerima data dari parent.",
        "App.tsx bertugas menyusun component utama.",
        "Error import biasanya terkait path, nama file, atau nama export.",
        "Berikutnya kamu akan menambahkan state dan event di local project.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "create-first-local-react-component-intro",
      "create-first-local-react-component-file-example",
      "create-first-local-react-component-app-example",
      "create-first-local-react-component-local-task",
      "create-first-local-react-component-summary",
    ],
  },
};

export const addReactStateAndEventLocallyLesson: Lesson = {
  id: "add-react-state-and-event-locally",
  trackId: "frontend-engineering",
  moduleId: "local-react-app",
  title: "Menambahkan State dan Event",
  slug: "add-react-state-and-event-locally",
  description:
    "Menambahkan interaksi kecil di project lokal dengan useState, onClick, dan controlled input.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 60,
  objectives: [
    "Menambahkan useState di component lokal",
    "Memasang event handler untuk button",
    "Membuat controlled input sederhana",
    "Mengecek perubahan UI di browser lokal",
  ],
  skillTags: ["React", "State", "Events", "Forms"],
  blocks: [
    {
      id: "add-react-state-and-event-locally-intro",
      type: "text",
      title: "Interaksi kecil cukup untuk membuktikan workflow",
      content:
        "Local React App tidak perlu langsung menjadi product besar. Untuk milestone ini, satu interaksi yang berjalan dengan baik sudah sangat berarti: button mengubah count, input mengubah preview, atau form kecil menambah item ke list.\n\nYang penting, kamu bisa mengedit component, melihat update di browser, membaca error jika muncul, lalu memperbaikinya.",
    },
    {
      id: "add-react-state-and-event-locally-example",
      type: "code-example",
      title: "PracticeTracker component",
      language: "tsx",
      code: `import { useState } from "react";

export function PracticeTracker() {
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(0);

  return (
    <section className="practice-tracker">
      <label>
        Topik latihan
        <input value={topic} onChange={(event) => setTopic(event.target.value)} />
      </label>
      <p>Topik aktif: {topic || "Belum dipilih"}</p>
      <p>Sesi latihan: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Tambah sesi
      </button>
    </section>
  );
}`,
      explanation:
        "`topic` berubah dari input. `count` berubah saat button diklik. Dua state kecil ini cukup untuk melatih event dan render ulang di project lokal.",
    },
    {
      id: "add-react-state-and-event-locally-app-example",
      type: "code-example",
      title: "Render PracticeTracker di App",
      language: "tsx",
      code: `import { PracticeTracker } from "./components/PracticeTracker";

function App() {
  return (
    <main>
      <h1>Fluent React Notes</h1>
      <PracticeTracker />
    </main>
  );
}

export default App;`,
      explanation:
        "Setelah component diimport dan dirender, cek browser. Ketik di input dan klik button untuk memastikan UI berubah.",
    },
    {
      id: "add-react-state-and-event-locally-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di project lokal kamu:\n\n- Buat component interaktif, misalnya `PracticeTracker`.\n- Import `useState` dari React.\n- Buat minimal satu state untuk input atau pilihan user.\n- Buat minimal satu state untuk angka, status, atau list kecil.\n- Hubungkan input dengan value dan onChange jika memakai form field.\n- Tambahkan button dengan onClick.\n- Render component di `App.tsx`.\n- Jalankan browser dan pastikan UI berubah saat user berinteraksi.\n- Cek terminal dan Console jika ada error merah.\n\nTandai selesai setelah interaksi benar-benar berjalan di browser lokal.",
    },
    {
      id: "add-react-state-and-event-locally-troubleshooting",
      type: "callout",
      variant: "warning",
      title: "Error merah adalah bagian dari workflow",
      content:
        "Kalau browser atau terminal menampilkan error, baca pesan pertamanya dulu. Cek import, tanda kurung JSX, nama component, dan apakah `useState` sudah diimport. Jangan langsung menghapus kode secara acak; ubah satu hal kecil lalu cek lagi.",
    },
    {
      id: "add-react-state-and-event-locally-summary",
      type: "summary",
      points: [
        "Local React workflow terasa nyata saat UI berubah di browser.",
        "`useState` menyimpan value yang berubah.",
        "`onClick` dan `onChange` menghubungkan aksi user ke state.",
        "Error terminal dan browser Console adalah bagian dari debugging lokal.",
        "Berikutnya kamu akan menyimpan project ke GitHub.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "add-react-state-and-event-locally-intro",
      "add-react-state-and-event-locally-example",
      "add-react-state-and-event-locally-app-example",
      "add-react-state-and-event-locally-local-task",
      "add-react-state-and-event-locally-summary",
    ],
  },
};

export const saveReactProjectToGithubLesson: Lesson = {
  id: "save-react-project-to-github",
  trackId: "frontend-engineering",
  moduleId: "local-react-app",
  title: "Menyimpan Project ke GitHub",
  slug: "save-react-project-to-github",
  description:
    "Menyimpan project React lokal dengan Git, membuat repository GitHub, dan menulis README singkat.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 60,
  objectives: [
    "Mengecek status Git project React",
    "Membuat commit pertama yang jelas",
    "Menghubungkan project lokal ke repository GitHub",
    "Menulis README yang menjelaskan project",
  ],
  skillTags: ["Git", "GitHub", "README", "Local Workflow"],
  blocks: [
    {
      id: "save-react-project-to-github-intro",
      type: "text",
      title: "Project lokal perlu punya riwayat",
      content:
        "Git menyimpan riwayat perubahan project. GitHub menyimpan repository online agar project bisa dibuka lagi dari perangkat lain, dibagikan ke reviewer, atau dipakai sebagai bukti latihan.\n\nUntuk milestone ini, kamu tidak perlu workflow pull request yang kompleks. Fokus pada hal dasar: cek status, commit perubahan yang jelas, buat repository, push, lalu tulis README yang membuat project mudah dipahami.",
    },
    {
      id: "save-react-project-to-github-resources",
      type: "resource-links",
      title: "Resource Git dan GitHub",
      description:
        "Gunakan link resmi ini jika Git belum tersedia atau kamu butuh panduan repository GitHub.",
      links: [
        {
          source: "Git",
          title: "Git Downloads",
          description:
            "Install Git agar command git tersedia di terminal.",
          url: "https://git-scm.com/downloads",
          label: "Install Git",
          kind: "required",
        },
        {
          source: "GitHub Docs",
          title: "Create a repo",
          description:
            "Panduan resmi membuat repository baru di GitHub.",
          url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories",
          label: "Buka GitHub Docs",
          kind: "recommended",
        },
        {
          source: "GitHub Docs",
          title: "Adding locally hosted code to GitHub",
          description:
            "Panduan menghubungkan project lokal ke repository GitHub.",
          url: "https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github",
          label: "Buka panduan push",
          kind: "recommended",
        },
      ],
    },
    {
      id: "save-react-project-to-github-commands",
      type: "code-example",
      title: "Command Git dasar",
      language: "bash",
      code: `git status
git add .
git commit -m "Build first local React app"`,
      explanation:
        "Cek status sebelum commit agar kamu tahu file apa yang masuk. Commit message sebaiknya menjelaskan perubahan yang dilakukan.",
    },
    {
      id: "save-react-project-to-github-push-commands",
      type: "code-example",
      title: "Menghubungkan ke repository GitHub",
      language: "bash",
      code: `git branch -M main
git remote add origin https://github.com/username/fluent-react-notes.git
git push -u origin main`,
      explanation:
        "Ganti URL repository dengan URL milik kamu. Jika remote sudah ada, jangan tambah remote baru; cek dulu dengan `git remote -v`.",
    },
    {
      id: "save-react-project-to-github-readme",
      type: "code-example",
      title: "README singkat",
      language: "bash",
      code: `# Fluent React Notes

Mini React app untuk latihan component, props, state, event, dan controlled input.

## Cara menjalankan

npm install
npm run dev

## Fitur

- Profile card component
- Practice tracker dengan input dan button
- State dan event sederhana

## Yang dipelajari

- Struktur project Vite React
- Component dan props
- useState, onChange, dan onClick`,
      explanation:
        "README tidak perlu panjang. Yang penting reviewer tahu tujuan app, cara menjalankan, fitur utama, dan hal yang kamu pelajari.",
    },
    {
      id: "save-react-project-to-github-local-task",
      type: "text",
      title: "Checklist local task",
      content:
        "Kerjakan di project lokal kamu:\n\n- Jalankan `git status`.\n- Pastikan perubahan project yang ingin disimpan sudah benar.\n- Buat commit pertama dengan message yang jelas.\n- Buat repository baru di GitHub.\n- Hubungkan project lokal ke repository GitHub.\n- Push branch utama ke GitHub.\n- Buka repository di browser dan pastikan file project terlihat.\n- Update README dengan tujuan app, cara menjalankan, fitur, dan hal yang dipelajari.\n\nJika kamu belum siap push karena akun GitHub belum tersedia, minimal pastikan project punya commit lokal dan README sudah ditulis.",
    },
    {
      id: "save-react-project-to-github-summary",
      type: "summary",
      points: [
        "Git menyimpan riwayat perubahan project lokal.",
        "GitHub membuat repository bisa dibuka dan dibagikan online.",
        "Commit message harus menjelaskan perubahan.",
        "README membantu orang lain memahami project dan cara menjalankannya.",
        "Berikutnya, Uji Kompetensi mengecek readiness local React workflow kamu.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "save-react-project-to-github-intro",
      "save-react-project-to-github-resources",
      "save-react-project-to-github-commands",
      "save-react-project-to-github-readme",
      "save-react-project-to-github-local-task",
      "save-react-project-to-github-summary",
    ],
  },
};

export const localReactAppAssessmentLesson: Lesson = {
  id: "local-react-app-assessment",
  trackId: "frontend-engineering",
  moduleId: "local-react-app",
  title: "Uji Kompetensi Local React App",
  slug: "local-react-app-assessment",
  description:
    "Checkpoint kesiapan menjalankan project React lokal, membaca struktur src, membuat component, menambahkan interaksi, menyimpan ke GitHub, dan menjelaskan project.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 85,
  objectives: [
    "Mengecek kesiapan membuat dan menjalankan project React lokal",
    "Mengecek pemahaman struktur src, App, dan component file",
    "Mengecek penggunaan props, state, dan event sederhana",
    "Mengecek workflow Git, GitHub, dan README",
    "Mengecek kemampuan menjelaskan project secara jelas",
  ],
  skillTags: ["React", "Local Workflow", "GitHub", "Checkpoint"],
  blocks: [
    {
      id: "local-react-app-assessment-recap",
      type: "text",
      title: "Apa yang dicek di checkpoint ini",
      content:
        "Checkpoint ini mengecek readiness local React workflow. Kamu tidak sedang membuktikan bahwa app kamu besar. Kamu sedang membuktikan bahwa kamu bisa membuat React app lokal, menjalankan dev server, membaca struktur `src`, membuat component, memakai props/state/events, menyimpan project, dan menjelaskan hasil kerja.\n\nFluentStack tidak bisa membaca folder lokal, terminal, browser, atau akun GitHub kamu secara otomatis. Checklist di checkpoint ini adalah self-review. Tandai selesai hanya setelah kamu benar-benar mengecek project di perangkat sendiri.",
    },
    {
      id: "local-react-app-assessment-quiz",
      type: "quiz",
      quizId: "local-react-app-assessment-quiz",
    },
    {
      id: "local-react-app-assessment-project-checklist",
      type: "text",
      title: "Local React project checklist",
      content:
        "Pastikan project React lokal kamu memenuhi checklist ini:\n\n- Project dibuat dengan tool React lokal seperti Vite.\n- Project punya `package.json`.\n- Dependencies sudah diinstall dengan `npm install`.\n- Dev server bisa berjalan dengan `npm run dev`.\n- App bisa dibuka di browser lewat localhost.\n- Kamu bisa menjelaskan fungsi `src/main.tsx`.\n- Kamu bisa menjelaskan fungsi `src/App.tsx`.\n- Ada minimal satu component buatan sendiri di folder `src/components` atau lokasi sejenis.\n- Component menerima props sederhana.\n- Ada minimal satu state dengan `useState`.\n- Ada minimal satu event user, misalnya `onClick`, `onChange`, atau `onSubmit`.\n- UI berubah setelah user berinteraksi.\n- Terminal dan browser Console tidak menyimpan error yang kamu abaikan.\n- Project punya minimal satu commit Git.\n- Project sudah dipush ke repository GitHub atau minimal siap dipush.\n- README menjelaskan tujuan app, cara menjalankan, fitur utama, dan hal yang dipelajari.\n\nChecklist ini bukan auto-validation. Jangan tandai selesai jika kamu belum membuka project lokal dan mengeceknya langsung.",
    },
    {
      id: "local-react-app-assessment-docs-bridge",
      type: "documentation-bridge",
      title: "Dokumentasi untuk self-review React lokal",
      description:
        "Gunakan dokumentasi ini untuk mengecek ulang bagian project yang masih terasa rapuh. Fokus pada bagian yang langsung membantu project kamu.",
      links: [
        {
          source: "React Learn",
          title: "Start a New React Project",
          url: "https://react.dev/learn/start-a-new-react-project",
          focus: [
            "pilihan setup React",
            "project lokal",
            "kapan memakai framework atau tool ringan",
          ],
          ignoreForNow: [
            "Next.js production architecture",
            "server components",
            "deployment strategy",
          ],
        },
        {
          source: "React Learn",
          title: "Your First Component",
          url: "https://react.dev/learn/your-first-component",
          focus: [
            "component function",
            "export dan import component",
            "menyusun UI dari component",
          ],
          ignoreForNow: [
            "advanced component patterns",
            "performance optimization",
          ],
        },
        {
          source: "React Learn",
          title: "State: A Component's Memory",
          url: "https://react.dev/learn/state-a-components-memory",
          focus: [
            "useState",
            "setter function",
            "render ulang setelah state berubah",
          ],
          ignoreForNow: [
            "reducers",
            "context",
            "external state libraries",
          ],
        },
        {
          source: "Vite",
          title: "Getting Started",
          url: "https://vite.dev/guide/",
          focus: [
            "create project",
            "npm install",
            "npm run dev",
          ],
          ignoreForNow: [
            "advanced build config",
            "plugin authoring",
            "library mode",
          ],
        },
        {
          source: "GitHub Docs",
          title: "Adding locally hosted code to GitHub",
          url: "https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github",
          focus: [
            "remote repository",
            "push project lokal",
            "basic GitHub workflow",
          ],
          ignoreForNow: [
            "GitHub Actions",
            "branch protection",
            "team review workflow",
          ],
        },
      ],
      followUpAction:
        "Pilih satu bagian project yang paling belum nyaman, baca dokumentasi yang relevan, lalu update README dengan catatan cara menjalankan atau cara component utama bekerja.",
    },
    {
      id: "local-react-app-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis catatan project untuk README atau update mentor. Jelaskan tujuan React app, cara menjalankan, struktur file utama, component yang kamu buat, state/event yang berjalan, status GitHub, dan apakah kamu siap lanjut ke React Intermediate.",
      placeholder:
        "Project React ini adalah... Untuk menjalankan project... Struktur src terdiri dari...",
      minimumCharacters: 420,
      checklist: [
        "Menjelaskan tujuan React app",
        "Menjelaskan cara menjalankan project lokal",
        "Menyebut main.tsx dan App.tsx",
        "Menyebut component buatan sendiri",
        "Menjelaskan props yang dipakai",
        "Menjelaskan state dan event yang berjalan",
        "Menyebut status Git/GitHub",
        "Menyebut readiness lanjut ke React Intermediate",
      ],
      modelAnswer:
        "Project React ini adalah mini app untuk latihan component, props, state, dan event di local workflow. Untuk menjalankannya, saya masuk ke folder project, menjalankan npm install jika belum ada dependencies, lalu menjalankan npm run dev dan membuka URL localhost di browser. Di folder src, main.tsx merender App ke root, sedangkan App.tsx menyusun UI utama. Saya membuat component ProfileCard yang menerima props name, role, dan summary. Saya juga membuat PracticeTracker dengan state topic dan count; input mengubah topic lewat onChange, dan button menambah count lewat onClick. Project sudah punya commit Git dan sudah saya push ke GitHub. Saya siap lanjut ke React Intermediate karena sudah bisa membuat project lokal, membaca struktur dasar, membuat component, dan men-debug interaksi kecil.",
    },
    {
      id: "local-react-app-assessment-summary",
      type: "summary",
      points: [
        "Checkpoint ini mengukur readiness local React workflow, bukan ukuran app.",
        "Project yang siap punya dev server berjalan, struktur `src` dipahami, component sendiri, props, state, dan event kecil.",
        "README membuat project bisa dipahami reviewer atau mentor.",
        "Git dan GitHub menyimpan project sebagai bukti progres.",
        "Jika belum siap, ulangi bagian setup Vite, `npm run dev`, struktur `src`, component import, useState/event, Git commit, GitHub push, dan README.",
        "Jika sudah siap, kamu bisa masuk React Intermediate dengan fondasi local workflow yang jauh lebih kuat.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "local-react-app-assessment-recap",
      "local-react-app-assessment-quiz",
      "local-react-app-assessment-project-checklist",
      "local-react-app-assessment-writing-practice",
      "local-react-app-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const localReactAppAssessmentQuiz: Quiz = {
  id: "local-react-app-assessment-quiz",
  lessonId: "local-react-app-assessment",
  title: "Uji Kompetensi Local React App",
  passingScore: 70,
  questions: [
    {
      id: "local-react-app-q1",
      type: "multiple-choice",
      question: "Apa tujuan utama Local React App milestone?",
      options: [
        "Membuat project React lokal yang bisa dijalankan, diedit, disimpan, dan dijelaskan",
        "Mengganti semua lesson dengan deployment production",
        "Menghapus kebutuhan belajar component",
        "Membangun global state library sendiri",
      ],
      correctAnswer:
        "Membuat project React lokal yang bisa dijalankan, diedit, disimpan, dan dijelaskan",
      explanation:
        "Milestone ini fokus pada workflow React lokal: setup, dev server, struktur file, component, interaksi kecil, Git/GitHub, dan penjelasan project.",
    },
    {
      id: "local-react-app-q2",
      type: "multiple-choice",
      question: "Command apa yang biasanya menjalankan dev server Vite React?",
      options: ["npm run dev", "git push", "node -v", "npm create folder"],
      correctAnswer: "npm run dev",
      explanation:
        "`npm run dev` menjalankan script dev dari package.json dan menampilkan local URL untuk dibuka di browser.",
    },
    {
      id: "local-react-app-q3",
      type: "multiple-choice",
      question: "Dalam project React Vite, `src/main.tsx` biasanya berperan sebagai...",
      options: [
        "entry file yang merender App ke elemen root",
        "file README untuk GitHub",
        "tempat menyimpan password",
        "folder dependency npm",
      ],
      correctAnswer: "entry file yang merender App ke elemen root",
      explanation:
        "`main.tsx` memasang React ke elemen root dan merender component utama seperti `App`.",
    },
    {
      id: "local-react-app-q4",
      type: "true-false",
      question:
        "Component buatan sendiri boleh dibuat di folder `src/components` agar project lebih mudah dibaca.",
      correctAnswer: true,
      explanation:
        "`src/components` bukan aturan wajib React, tetapi pola ini umum dan membantu project kecil tetap rapi.",
    },
    {
      id: "local-react-app-q5",
      type: "multiple-choice",
      question: "Apa tanda minimal bahwa state dan event di local React app sudah berjalan?",
      options: [
        "UI berubah setelah user mengetik, klik, atau submit",
        "Repository punya gambar logo besar",
        "Folder node_modules dihapus",
        "Semua file dipindah ke README",
      ],
      correctAnswer: "UI berubah setelah user mengetik, klik, atau submit",
      explanation:
        "State dan event berhasil jika aksi user mengubah state dan hasilnya terlihat pada render UI.",
    },
    {
      id: "local-react-app-q6",
      type: "multiple-choice",
      question: "README React project awal sebaiknya menjelaskan...",
      options: [
        "tujuan app, cara menjalankan, fitur utama, dan hal yang dipelajari",
        "semua password akun",
        "hanya satu kata tanpa konteks",
        "konfigurasi enterprise yang belum dipakai",
      ],
      correctAnswer:
        "tujuan app, cara menjalankan, fitur utama, dan hal yang dipelajari",
      explanation:
        "README membantu reviewer memahami project dan menjalankannya tanpa menebak-nebak.",
    },
  ],
};
