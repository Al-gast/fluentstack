import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

const testingPracticeCode = {
  html: "",
  css: "",
  js: "",
};

export const unitComponentTestingModule: Module = {
  id: "unit-component-testing",
  trackId: "frontend-engineering",
  title: "Unit and Component Testing",
  slug: "unit-component-testing",
  description:
    "Menguji function dan React component melalui behavior, interaksi user, serta accessible UI output tanpa bergantung pada detail implementasi.",
  order: 41,
  lessonIds: [
    "testing-mindset",
    "vitest-basics",
    "react-testing-library",
    "testing-user-events",
    "testing-accessible-queries",
    "unit-component-testing-assessment",
  ],
  estimatedHours: 7,
  skillTags: [
    "Testing",
    "Vitest",
    "React Testing Library",
    "User Event",
    "Accessibility",
  ],
};

export const testingMindsetLesson: Lesson = {
  id: "testing-mindset",
  trackId: "frontend-engineering",
  moduleId: "unit-component-testing",
  title: "Testing Mindset",
  slug: "testing-mindset",
  description:
    "Memilih test yang melindungi behavior penting tanpa mengikat test pada detail implementasi component.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 60,
  objectives: [
    "Menjelaskan tujuan test sebagai pemeriksaan contract behavior",
    "Membedakan behavior user-visible dari detail implementasi",
    "Memilih test target yang memberi confidence nyata",
    "Menghindari test yang hanya memeriksa internal state atau class name",
  ],
  skillTags: ["Testing Mindset", "Behavior Testing", "React", "Quality"],
  blocks: [
    {
      id: "testing-mindset-intro",
      type: "text",
      title: "Test melindungi janji feature, bukan cara internalnya bekerja",
      content:
        "Test yang berguna menjawab pertanyaan tentang behavior: apakah duration ditampilkan dengan benar, apakah button bookmark mengubah informasi yang dapat dilihat user, atau apakah form memberi pesan ketika data tidak lengkap. Test yang rapuh sering memeriksa detail yang user tidak kenal, seperti jumlah useState, nama helper internal, atau struktur div yang boleh berubah tanpa mengubah pengalaman user. Mulailah dari contract feature. Jika implementasi boleh direfaktor tetapi user masih menerima hasil yang sama, test seharusnya tetap lulus.",
    },
    {
      id: "testing-mindset-example",
      type: "code-example",
      title: "Test output function, bukan variabel sementara",
      language: "ts",
      code: `import { describe, expect, it } from "vitest";

function getCourseStatus(completedLessons: number, totalLessons: number) {
  return completedLessons === totalLessons ? "Selesai" : "Sedang dipelajari";
}

describe("getCourseStatus", () => {
  it("returns Selesai when every lesson is completed", () => {
    expect(getCourseStatus(8, 8)).toBe("Selesai");
  });
});`,
      explanation:
        "Test ini menyatakan input dan output yang dijanjikan function. Ia tidak peduli apakah implementation memakai if, ternary, atau helper lain. Nama test menjelaskan behavior yang rusak bila assertion gagal, sehingga output terminal lebih mudah dibaca.",
    },
    {
      id: "testing-mindset-coding-practice",
      type: "coding-practice",
      challengeId: "write-course-status-behavior-test",
    },
    {
      id: "testing-mindset-quick-check",
      type: "quick-check",
      question:
        "Manakah test yang paling melindungi behavior bookmark dari sudut pandang user?",
      options: [
        "Setelah button diklik, user melihat label Hapus bookmark.",
        "Component memakai tepat dua useState.",
        "Button memiliki class CSS bookmark-active.",
        "Function internal bernama toggleBookmark.",
      ],
      correctAnswer:
        "Setelah button diklik, user melihat label Hapus bookmark.",
      explanation:
        "Label yang berubah adalah behavior yang user lihat. Jumlah state, class tertentu, dan nama function dapat berubah saat refactor tanpa harus dianggap regression.",
    },
    {
      id: "testing-mindset-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Coverage tinggi bukan tujuan tunggal",
      content:
        "Angka coverage dapat membantu menemukan area yang belum disentuh, tetapi tidak membuktikan test melindungi behavior penting. Satu test user journey yang tepat bisa lebih bernilai daripada banyak assertion pada implementation detail. Untuk module ini, pilih behavior yang berisiko rusak dan mudah dipahami dari nama test-nya.",
    },
    {
      id: "testing-mindset-summary",
      type: "summary",
      points: [
        "Test yang baik memeriksa contract behavior yang benar-benar penting.",
        "User-visible output dan interaction lebih stabil daripada detail implementation.",
        "Nama test perlu menjelaskan apa yang gagal, bukan nama helper yang dipanggil.",
        "Coverage adalah sinyal tambahan, bukan bukti kualitas test.",
        "Berikutnya, Vitest menyediakan runner dan assertion untuk menjalankan test kecil di project lokal.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "testing-mindset-intro",
      "testing-mindset-example",
      "testing-mindset-coding-practice",
      "testing-mindset-quick-check",
      "testing-mindset-callout",
      "testing-mindset-summary",
    ],
  },
};

export const vitestBasicsLesson: Lesson = {
  id: "vitest-basics",
  trackId: "frontend-engineering",
  moduleId: "unit-component-testing",
  title: "Vitest Basics",
  slug: "vitest-basics",
  description:
    "Menulis file test Vitest sederhana, memberi assertion yang jelas, dan menjalankan test di project lokal.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan peran Vitest sebagai test runner dan assertion API",
    "Mengenali penamaan file .test.ts atau .spec.ts",
    "Menulis describe, it, dan expect untuk function kecil",
    "Menjalankan test melalui npm script di local project",
  ],
  skillTags: ["Vitest", "Unit Test", "npm", "Assertions"],
  blocks: [
    {
      id: "vitest-basics-intro",
      type: "text",
      title: "Test runner memberi cara konsisten untuk menjalankan assertion",
      content:
        "Vitest menemukan file test, menjalankan test case, lalu melaporkan assertion yang lulus atau gagal. Untuk mulai kecil, simpan code dan test secara berdekatan, misalnya format-duration.ts serta format-duration.test.ts. describe mengelompokkan behavior, it memberi nama satu case, dan expect menyatakan hasil yang diharapkan. Setup test dapat berbeda antara Vite, Next.js, dan project yang sudah memiliki tooling sendiri. FluentStack membaca struktur test, bukan menjalankan Vitest di project atau browser-mu.",
    },
    {
      id: "vitest-basics-install",
      type: "code-example",
      title: "Pasang Vitest di project lokal",
      language: "bash",
      code: `npm install -D vitest`,
      explanation:
        "Jalankan dari folder yang memiliki package.json. Setelah dependency muncul di devDependencies, tambahkan atau sesuaikan test script mengikuti setup project. Jangan mengganti config hanya karena menyalin satu contoh dari stack yang berbeda.",
    },
    {
      id: "vitest-basics-example",
      type: "code-example",
      title: "Satu function, satu file test yang jelas",
      language: "ts",
      code: `// format-duration.ts
export function formatDuration(minutes: number) {
  return minutes + " menit";
}

// format-duration.test.ts
import { describe, expect, it } from "vitest";
import { formatDuration } from "./format-duration";

describe("formatDuration", () => {
  it("adds the menit label", () => {
    expect(formatDuration(24)).toBe("24 menit");
  });
});`,
      explanation:
        "File test mengimport public function yang ingin dilindungi lalu menguji contract-nya. Jalankan npm run test hanya setelah script test benar-benar tersedia di package.json. Practice workspace tidak dapat membuktikan konfigurasi atau result terminal project lokal.",
    },
    {
      id: "vitest-basics-coding-practice",
      type: "coding-practice",
      challengeId: "write-format-duration-vitest-test",
    },
    {
      id: "vitest-basics-quick-check",
      type: "quick-check",
      question:
        "Apa manfaat utama nama test seperti adds the menit label dibanding nama test satu?",
      options: [
        "Output failure langsung menjelaskan behavior yang tidak lagi terpenuhi.",
        "Vitest hanya dapat menjalankan test dengan nama panjang.",
        "Nama itu otomatis menambah coverage.",
        "Nama itu menggantikan assertion expect.",
      ],
      correctAnswer:
        "Output failure langsung menjelaskan behavior yang tidak lagi terpenuhi.",
      explanation:
        "Nama test adalah bagian dari alat debugging. Ia membantu kamu dan rekan tim memahami intent tanpa harus membaca seluruh implementation terlebih dahulu.",
    },
    {
      id: "vitest-basics-callout",
      type: "callout",
      variant: "warning",
      title: "Jalankan command satu per satu saat setup",
      content:
        "Jangan langsung memasang Vitest, React Testing Library, environment DOM, config, dan coverage tool sekaligus. Mulai dari satu unit test yang bisa berjalan, lalu baca outputnya. Jika terminal berkata module atau environment belum tersedia, perbaiki penyebabnya berdasarkan dokumentasi tool dan framework yang benar-benar dipakai project-mu.",
    },
    {
      id: "vitest-basics-summary",
      type: "summary",
      points: [
        "Vitest menjalankan test file dan melaporkan assertion.",
        "describe, it, dan expect membantu menulis test yang mudah dibaca.",
        "File test biasanya memakai nama .test atau .spec sesuai konfigurasi project.",
        "Local terminal adalah sumber kebenaran untuk result Vitest, bukan practice workspace.",
        "Berikutnya, React Testing Library menguji output component seperti yang ditemukan user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "vitest-basics-intro",
      "vitest-basics-install",
      "vitest-basics-example",
      "vitest-basics-coding-practice",
      "vitest-basics-quick-check",
      "vitest-basics-callout",
      "vitest-basics-summary",
    ],
  },
};

export const reactTestingLibraryLesson: Lesson = {
  id: "react-testing-library",
  trackId: "frontend-engineering",
  moduleId: "unit-component-testing",
  title: "React Testing Library",
  slug: "react-testing-library",
  description:
    "Merender React component dalam test lalu memeriksa output yang benar-benar tersedia untuk user.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan peran render dan screen pada component test",
    "Menulis assertion pada visible output component",
    "Membedakan component test dari pemeriksaan implementation internal",
    "Memahami kebutuhan DOM test environment pada local project",
  ],
  skillTags: ["React Testing Library", "Component Test", "React", "Visible Output"],
  blocks: [
    {
      id: "react-testing-library-intro",
      type: "text",
      title: "Render component, lalu cari apa yang dapat ditemukan user",
      content:
        "React Testing Library membantu merender component dalam environment test dan mencari output dengan screen. Cara berpikirnya sederhana: render component dengan props tertentu, lalu pastikan teks, role, label, atau state yang penting benar-benar muncul. Ini lebih dekat dengan pengalaman user dibanding memeriksa instance component atau state hook secara langsung. Untuk DOM matcher seperti toBeInTheDocument, project lokal biasanya menyiapkan jest-dom bersama environment test yang sesuai.",
    },
    {
      id: "react-testing-library-example",
      type: "code-example",
      title: "Test status profile yang terlihat di layar",
      language: "tsx",
      code: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function ProfileStatus({ isComplete }: { isComplete: boolean }) {
  return <p>{isComplete ? "Profile lengkap" : "Profile belum lengkap"}</p>;
}

describe("ProfileStatus", () => {
  it("shows the complete status", () => {
    render(<ProfileStatus isComplete={true} />);

    expect(screen.getByText("Profile lengkap")).toBeInTheDocument();
  });
});`,
      explanation:
        "render membuat component tersedia dalam environment test. screen.getByText mencari teks yang dapat dibaca user lalu matcher memeriksa keberadaannya. Test tidak perlu mengetahui apakah component memakai ternary, if, atau helper lain selama output yang dijanjikan tetap sama.",
    },
    {
      id: "react-testing-library-coding-practice",
      type: "coding-practice",
      challengeId: "test-profile-status-visible-output",
    },
    {
      id: "react-testing-library-quick-check",
      type: "quick-check",
      question:
        "Apa yang diperiksa oleh component test yang sehat setelah render ProfileStatus?",
      options: [
        "Teks status yang terlihat sesuai props yang diberikan",
        "Jumlah hook yang dipanggil component",
        "Nama file CSS component",
        "Urutan semua node div internal",
      ],
      correctAnswer: "Teks status yang terlihat sesuai props yang diberikan",
      explanation:
        "Output yang terlihat adalah contract component. Detail internal boleh berubah ketika component direfaktor tanpa harus mematahkan test.",
    },
    {
      id: "react-testing-library-callout",
      type: "callout",
      variant: "common-mistake",
      title: "Jangan menguji library React",
      content:
        "Tidak perlu membuat test untuk membuktikan useState dapat mengubah state atau React dapat merender JSX. Tulis test untuk behavior feature-mu: status mana yang muncul, action apa yang tersedia, dan perubahan apa yang user lihat setelah interaction. Test menjadi lebih singkat dan failure lebih informatif.",
    },
    {
      id: "react-testing-library-summary",
      type: "summary",
      points: [
        "render menyiapkan component untuk diuji dalam environment test.",
        "screen mencari output yang dapat ditemukan user.",
        "Component test fokus pada props, output, dan behavior feature.",
        "DOM matcher serta test environment perlu dikonfigurasi pada local project.",
        "Berikutnya, user-event membantu test mensimulasikan interaction user yang lebih realistis.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-testing-library-intro",
      "react-testing-library-example",
      "react-testing-library-coding-practice",
      "react-testing-library-quick-check",
      "react-testing-library-callout",
      "react-testing-library-summary",
    ],
  },
};

export const testingUserEventsLesson: Lesson = {
  id: "testing-user-events",
  trackId: "frontend-engineering",
  moduleId: "unit-component-testing",
  title: "User Events",
  slug: "testing-user-events",
  description:
    "Menguji click dan interaction sederhana lewat user-event lalu memeriksa perubahan yang user lihat.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 70,
  objectives: [
    "Menjelaskan alasan test perlu mensimulasikan interaction user",
    "Membuat user-event instance dengan setup",
    "Menulis test async untuk click yang mengubah UI",
    "Memeriksa output setelah action tanpa mengakses state component",
  ],
  skillTags: ["User Event", "Interaction Test", "React Testing Library", "Async Test"],
  blocks: [
    {
      id: "testing-user-events-intro",
      type: "text",
      title: "Jangan hanya test tampilan awal ketika behavior berubah setelah action",
      content:
        "Banyak regression muncul setelah user berinteraksi: button tidak lagi merespons, form tidak menampilkan hasil, atau toggle tidak mengubah label. user-event mensimulasikan interaction lebih dekat dengan cara user memakai browser dibanding memanggil handler internal secara langsung. Setelah action, test memeriksa perubahan output yang terlihat. Buat instance dengan userEvent.setup(), tunggu interaction async seperti click atau type, lalu query state UI baru.",
    },
    {
      id: "testing-user-events-example",
      type: "code-example",
      title: "User mengklik bookmark lalu melihat label baru",
      language: "tsx",
      code: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";

function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <button type="button" onClick={() => setIsBookmarked(true)}>
      {isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
    </button>
  );
}

describe("BookmarkButton", () => {
  it("shows the saved label after a user click", async () => {
    const user = userEvent.setup();
    render(<BookmarkButton />);

    await user.click(screen.getByRole("button", { name: "Simpan bookmark" }));

    expect(
      screen.getByRole("button", { name: "Hapus bookmark" }),
    ).toBeInTheDocument();
  });
});`,
      explanation:
        "Test menemukan button dengan role serta accessible name, lalu melakukan click seperti user. Assertion memeriksa label sesudah interaction. await penting karena user-event dapat menjalankan rangkaian event secara async. Component test ini tidak memanggil setter state atau handler internal langsung.",
    },
    {
      id: "testing-user-events-coding-practice",
      type: "coding-practice",
      challengeId: "test-course-bookmark-user-event",
    },
    {
      id: "testing-user-events-quick-check",
      type: "quick-check",
      question:
        "Setelah userEvent.click pada button bookmark, assertion yang paling tepat adalah",
      options: [
        "Mencari label button baru yang user lihat setelah click",
        "Memeriksa nilai useState internal component",
        "Memanggil setIsBookmarked dari test",
        "Memeriksa jumlah baris JSX component",
      ],
      correctAnswer:
        "Mencari label button baru yang user lihat setelah click",
      explanation:
        "Test mengikuti alur user: menemukan control, berinteraksi, lalu melihat hasil. Detail state internal tidak perlu menjadi contract test.",
    },
    {
      id: "testing-user-events-callout",
      type: "callout",
      variant: "warning",
      title: "Jangan lupa menunggu interaction async",
      content:
        "user-event dapat memicu beberapa event dan bekerja secara async. Gunakan await pada click atau type saat test membutuhkan hasil setelah interaction. Jika test gagal, baca query mana yang tidak menemukan elemen dan apakah UI memang berubah seperti contract yang kamu harapkan. Jangan menambah timeout acak sebagai respons pertama.",
    },
    {
      id: "testing-user-events-summary",
      type: "summary",
      points: [
        "user-event mensimulasikan interaction melalui jalur yang lebih dekat dengan user.",
        "Test interaction mencari control, menjalankan action, lalu memeriksa UI yang berubah.",
        "Gunakan await untuk interaction async.",
        "Jangan memanggil handler atau setter state component dari test.",
        "Berikutnya, accessible queries membuat test mencari element dengan cara yang juga menguatkan accessibility.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "testing-user-events-intro",
      "testing-user-events-example",
      "testing-user-events-coding-practice",
      "testing-user-events-quick-check",
      "testing-user-events-callout",
      "testing-user-events-summary",
    ],
  },
};

export const testingAccessibleQueriesLesson: Lesson = {
  id: "testing-accessible-queries",
  trackId: "frontend-engineering",
  moduleId: "unit-component-testing",
  title: "Accessible Queries",
  slug: "testing-accessible-queries",
  description:
    "Memilih query Testing Library berdasarkan role, label, dan accessible name sebelum memakai test id.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 65,
  objectives: [
    "Memilih getByRole untuk control dan landmark yang dapat dikenali user",
    "Memakai accessible name pada button dan input",
    "Menghubungkan label dengan input agar query lebih bermakna",
    "Mengetahui kapan test id hanya menjadi fallback",
  ],
  skillTags: ["Accessibility", "Testing Library", "Queries", "React"],
  blocks: [
    {
      id: "testing-accessible-queries-intro",
      type: "text",
      title: "Query yang baik mengikuti cara user dan teknologi bantu menemukan UI",
      content:
        "Testing Library mendorong query berdasarkan semantic role, label, text, dan accessible name. Saat test menemukan button dengan getByRole button serta name Simpan profile, kamu sekaligus memeriksa bahwa button memiliki nama yang dapat dipahami user. Saat test menemukan input melalui label Email, hubungan label serta control juga ikut diuji. Test id masih dapat menjadi fallback untuk elemen yang tidak memiliki semantic query yang wajar, tetapi jangan menjadikannya pilihan pertama untuk button, form input, heading, atau alert.",
    },
    {
      id: "testing-accessible-queries-example",
      type: "code-example",
      title: "Cari form profile lewat role dan label",
      language: "tsx",
      code: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function ProfileForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
      <button type="submit">Simpan profile</button>
    </form>
  );
}

describe("ProfileForm", () => {
  it("exposes the email field and save action", () => {
    render(<ProfileForm />);

    expect(
      screen.getByRole("textbox", { name: "Email" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Simpan profile" }),
    ).toBeInTheDocument();
  });
});`,
      explanation:
        "Role textbox dan button adalah cara yang dekat dengan pohon accessibility. name Email berasal dari label yang terhubung lewat htmlFor serta id. Bila label putus, query ini gagal dan mengungkap masalah yang juga akan mempersulit user keyboard atau screen reader.",
    },
    {
      id: "testing-accessible-queries-coding-practice",
      type: "coding-practice",
      challengeId: "test-profile-form-with-accessible-queries",
    },
    {
      id: "testing-accessible-queries-quick-check",
      type: "quick-check",
      question:
        "Untuk button dengan teks Simpan profile, query mana yang sebaiknya dicoba lebih dulu?",
      options: [
        "screen.getByRole button dengan name Simpan profile",
        "screen.getByTestId save-button",
        "document.querySelector class button-primary",
        "Membaca state internal button",
      ],
      correctAnswer:
        "screen.getByRole button dengan name Simpan profile",
      explanation:
        "Button sudah memiliki role dan accessible name. Query ini menguji control dengan cara yang lebih dekat dengan user daripada class selector atau test id.",
    },
    {
      id: "testing-accessible-queries-callout",
      type: "callout",
      variant: "important",
      title: "Test id adalah fallback, bukan default",
      content:
        "Gunakan test id ketika element tidak memiliki role, label, text, atau semantic query yang benar-benar cocok. Jika getByRole gagal pada control yang seharusnya mudah ditemukan, itu sering menjadi sinyal untuk memperbaiki markup atau accessible name, bukan alasan untuk segera menambah data-testid.",
    },
    {
      id: "testing-accessible-queries-summary",
      type: "summary",
      points: [
        "getByRole dengan accessible name adalah pilihan awal untuk banyak control.",
        "Label yang terhubung membuat input dapat ditemukan serta lebih aksesibel.",
        "Query yang gagal dapat mengungkap masalah markup atau accessible name.",
        "Test id dipakai sebagai fallback saat semantic query tidak wajar.",
        "Berikutnya, Uji Kompetensi menyatukan mindset, unit test, component output, user event, dan accessible query.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "testing-accessible-queries-intro",
      "testing-accessible-queries-example",
      "testing-accessible-queries-coding-practice",
      "testing-accessible-queries-quick-check",
      "testing-accessible-queries-callout",
      "testing-accessible-queries-summary",
    ],
  },
};

export const unitComponentTestingAssessmentLesson: Lesson = {
  id: "unit-component-testing-assessment",
  trackId: "frontend-engineering",
  moduleId: "unit-component-testing",
  title: "Uji Kompetensi Unit and Component Testing",
  slug: "unit-component-testing-assessment",
  description:
    "Checkpoint untuk menilai kesiapan menulis test behavior-focused untuk function dan component React kecil.",
  contentLanguage: "id",
  level: "advanced",
  estimatedMinutes: 80,
  objectives: [
    "Memilih behavior penting untuk diuji pada component interaktif",
    "Menggabungkan render, user-event, assertion, dan accessible query",
    "Membedakan test yang memberi confidence dari detail implementation",
    "Menentukan QA test yang perlu dijalankan di local project",
  ],
  skillTags: ["Testing", "Vitest", "React Testing Library", "Accessibility", "Readiness Checkpoint"],
  blocks: [
    {
      id: "unit-component-testing-assessment-recap",
      type: "text",
      title: "Checkpoint: test harus memberi confidence pada behavior penting",
      content:
        "Pada module ini, kamu tidak diminta mengejar banyak test atau semua baris code. Yang diuji adalah contract kecil tetapi penting: function memberi output yang tepat, component menampilkan informasi yang benar, user dapat berinteraksi lewat control yang dapat ditemukan, dan hasil action terlihat di UI. Query yang aksesibel membantu test tetap dekat dengan pengalaman user. Nilai apakah test menemukan button seperti user, menjalankan click melalui user-event, lalu memeriksa perubahan status.",
    },
    {
      id: "unit-component-testing-assessment-quiz",
      type: "quiz",
      quizId: "unit-component-testing-assessment-quiz",
    },
    {
      id: "unit-component-testing-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-bookmark-component-behavior-test",
    },
    {
      id: "unit-component-testing-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis implementation note untuk test component bookmark atau profile. Jelaskan behavior yang kamu lindungi, query yang dipilih dan alasannya, interaction yang disimulasikan bila ada, assertion setelah action, satu detail implementation yang sengaja tidak kamu test, serta command atau output yang akan kamu cek di local project. Gunakan istilah yang spesifik terhadap feature.",
      placeholder:
        "Saya melindungi behavior bookmark: user dapat menemukan button Simpan bookmark, mengkliknya, lalu melihat status Bookmark disimpan dan label Hapus bookmark. Saya memakai getByRole dengan accessible name karena button adalah control semantic yang harus dapat ditemukan user. Interaction memakai userEvent.setup lalu await user.click agar jalur event mengikuti penggunaan user. Assertion memeriksa status dan label setelah click. Saya sengaja tidak menguji jumlah useState atau nama function toggleBookmark karena keduanya boleh berubah saat refactor. Di local project saya menjalankan npm run test dan membaca nama test serta query yang gagal bila ada error.",
      minimumCharacters: 500,
      checklist: [
        "Menyebut behavior user-visible yang ingin dilindungi.",
        "Menjelaskan pilihan role, label, text, atau accessible name untuk query.",
        "Menyebut interaction dan assertion setelah action bila feature interaktif.",
        "Menyebut satu implementation detail yang sengaja tidak diuji.",
        "Menjelaskan local test command atau output tanpa mengklaim practice workspace menjalankan Vitest.",
      ],
      modelAnswer:
        "Test bookmark melindungi alur user: button awal bernama Simpan bookmark, user mengkliknya, lalu UI menampilkan Bookmark disimpan dan button berubah menjadi Hapus bookmark. Saya memakai screen.getByRole dengan name karena button memiliki role semantic dan nama tersebut penting bagi user keyboard serta screen reader. Saya membuat user dengan userEvent.setup dan menunggu user.click, kemudian assertion mencari status serta label baru. Saya tidak menguji jumlah useState, nama handler, atau class CSS karena component boleh direfaktor tanpa mengubah contract user. Di local project saya menjalankan npm run test setelah Vitest dan environment test sudah dikonfigurasi.",
    },
    {
      id: "unit-component-testing-assessment-documentation-bridge",
      type: "documentation-bridge",
      title: "Gunakan docs untuk menjalankan dan membaca test lokal",
      description:
        "Buka dokumentasi sesuai tool yang benar-benar dipakai project-mu. Fokus pada satu test yang dapat dijalankan sebelum menambah mock, coverage, atau setup kompleks.",
      links: [
        {
          source: "Vitest",
          title: "Getting Started",
          url: "https://vitest.dev/guide/index.html",
          focus: [
            "Install dependency dan test script dasar.",
            "Penamaan file test serta cara menjalankan test.",
            "Membaca output assertion yang gagal.",
          ],
          ignoreForNow: [
            "Coverage target dan browser mode.",
            "Mocking API serta workspace configuration kompleks.",
          ],
        },
        {
          source: "Testing Library",
          title: "About Queries",
          url: "https://testing-library.com/docs/queries/about/",
          focus: [
            "Prioritas query berdasarkan role, label, dan accessible name.",
            "Perbedaan get, query, dan find secara garis besar.",
            "Mengapa screen cocok untuk mencari output yang terlihat.",
          ],
          ignoreForNow: [
            "Custom query utilities.",
            "Detail asynchronous API di luar feature test-mu.",
          ],
        },
        {
          source: "Testing Library",
          title: "User Event Introduction",
          url: "https://testing-library.com/docs/user-event/intro/",
          focus: [
            "Peran userEvent untuk interaction user.",
            "Alasan interaction dapat perlu await.",
            "Perbedaan umum user-event dan event low-level.",
          ],
          ignoreForNow: [
            "Interaction browser yang belum digunakan component-mu.",
            "Cross-framework setup detail.",
          ],
        },
      ],
      followUpAction:
        "Di Local React App atau Local Next.js App, pilih satu helper function dan satu component. Jalankan satu unit test serta satu component interaction test, lalu catat behavior yang dilindungi dan satu failure yang kamu pahami. Jangan tandai selesai hanya karena struktur test di practice workspace sudah lolos.",
    },
    {
      id: "unit-component-testing-assessment-summary",
      type: "summary",
      points: [
        "Test behavior-focused melindungi contract feature, bukan detail internalnya.",
        "Vitest menjalankan test lokal dan memberi output assertion yang perlu dibaca.",
        "React Testing Library merender component lalu mencari UI yang tersedia untuk user.",
        "user-event menguji interaction lewat alur yang dekat dengan pemakaian nyata.",
        "Accessible queries membuat test sekaligus memberi sinyal kualitas markup. Berikutnya, Integration and API Mocking memperluas test ke data serta response API.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "unit-component-testing-assessment-recap",
      "unit-component-testing-assessment-quiz",
      "unit-component-testing-assessment-coding-practice",
      "unit-component-testing-assessment-writing-practice",
      "unit-component-testing-assessment-documentation-bridge",
      "unit-component-testing-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const unitComponentTestingAssessmentQuiz: Quiz = {
  id: "unit-component-testing-assessment-quiz",
  lessonId: "unit-component-testing-assessment",
  title: "Uji Kompetensi Unit and Component Testing",
  passingScore: 70,
  questions: [
    {
      id: "testing-behavior-contract",
      type: "multiple-choice",
      question:
        "Mana yang merupakan behavior contract terbaik untuk test button bookmark?",
      options: [
        "Setelah click, button berubah menjadi Hapus bookmark.",
        "Component memakai hook useState.",
        "Handler bernama toggleBookmark.",
        "Markup memiliki tiga div.",
      ],
      correctAnswer:
        "Setelah click, button berubah menjadi Hapus bookmark.",
      explanation:
        "Perubahan label adalah hasil yang dapat dilihat user. Hook, nama handler, dan struktur div adalah implementation detail yang dapat direfaktor.",
    },
    {
      id: "testing-vitest-purpose",
      type: "multiple-choice",
      question: "Apa peran utama Vitest dalam flow test lokal?",
      options: [
        "Menjalankan test file dan melaporkan assertion yang lulus atau gagal",
        "Menggantikan semua component React",
        "Menyimpan data production ke database",
        "Membuat UI accessible tanpa markup semantic",
      ],
      correctAnswer:
        "Menjalankan test file dan melaporkan assertion yang lulus atau gagal",
      explanation:
        "Vitest adalah test runner dan assertion API. Component serta accessibility tetap perlu dirancang dengan benar oleh aplikasi.",
    },
    {
      id: "testing-rtl-output",
      type: "multiple-choice",
      question:
        "Setelah render ProfileStatus dengan isComplete true, assertion apa yang sesuai?",
      options: [
        "Mencari teks Profile lengkap yang tampil di UI",
        "Membaca nilai state component secara langsung",
        "Menghitung semua node JSX",
        "Memeriksa nama file test",
      ],
      correctAnswer: "Mencari teks Profile lengkap yang tampil di UI",
      explanation:
        "React Testing Library mendorong test pada output component yang dapat ditemukan user, bukan state atau struktur internal.",
    },
    {
      id: "testing-user-event-await",
      type: "multiple-choice",
      question: "Mengapa user.click sering diawali await di test?",
      options: [
        "Karena user-event dapat menjalankan interaction async sebelum assertion berikutnya",
        "Karena button selalu melakukan API request",
        "Agar test otomatis mendapat coverage lebih tinggi",
        "Karena expect tidak dapat dipakai tanpa await",
      ],
      correctAnswer:
        "Karena user-event dapat menjalankan interaction async sebelum assertion berikutnya",
      explanation:
        "Menunggu interaction membuat assertion berjalan setelah event yang relevan selesai diproses. Tidak semua click berarti ada request atau coverage tambahan.",
    },
    {
      id: "testing-query-priority",
      type: "multiple-choice",
      question:
        "Untuk input dengan label Email, query mana yang paling user-like untuk dicoba?",
      options: [
        "screen.getByRole textbox dengan name Email",
        "screen.getByTestId email-input",
        "document.querySelector class input-email",
        "Mencari urutan input pertama",
      ],
      correctAnswer:
        "screen.getByRole textbox dengan name Email",
      explanation:
        "Role dan accessible name mengikuti cara user serta teknologi bantu menemukan input. Test id dan selector CSS adalah fallback saat semantic query tidak sesuai.",
    },
  ],
};

export const writeCourseStatusBehaviorTestChallenge: CodingChallenge = {
  id: "write-course-status-behavior-test",
  lessonId: "testing-mindset",
  title: "Write course status behavior test",
  description:
    "Lengkapi test Vitest yang memeriksa output status course, bukan detail internal function. Preview tidak menjalankan Vitest.",
  instructions: [
    "Fokus di tab TSX.",
    "Import describe, expect, dan it dari vitest.",
    "Buat describe untuk getCourseStatus dan satu test dengan nama behavior yang jelas.",
    "Assert bahwa progress penuh menghasilkan label Selesai.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan Vitest.",
  ],
  starterCode: {
    ...testingPracticeCode,
    tsx: `function getCourseStatus(completedLessons: number, totalLessons: number) {
  return completedLessons === totalLessons ? "Selesai" : "Sedang dipelajari";
}

export const status = getCourseStatus(8, 8);`,
  },
  solutionCode: {
    ...testingPracticeCode,
    tsx: `import { describe, expect, it } from "vitest";

function getCourseStatus(completedLessons: number, totalLessons: number) {
  return completedLessons === totalLessons ? "Selesai" : "Sedang dipelajari";
}

describe("getCourseStatus", () => {
  it("returns Selesai when every lesson is completed", () => {
    expect(getCourseStatus(8, 8)).toBe("Selesai");
  });
});`,
  },
  checklist: [
    "Test mengimport describe, expect, dan it dari Vitest.",
    "describe menyebut function yang diuji.",
    "Nama it menjelaskan behavior ketika semua lesson selesai.",
    "Assertion memeriksa output Selesai.",
    "Preview tidak menjalankan Vitest atau menghasilkan result test nyata.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "vitest-import", label: "Vitest di-import untuk describe, expect, dan it.", type: "contains", valueIncludes: 'import { describe, expect, it } from "vitest";' },
      { id: "describe", label: "Test dikelompokkan untuk getCourseStatus.", type: "contains", valueIncludes: 'describe("getCourseStatus", () => {' },
      { id: "behavior-name", label: "Nama test menjelaskan behavior selesai.", type: "contains", valueIncludes: 'it("returns Selesai when every lesson is completed", () => {' },
      { id: "assertion", label: "Assertion memeriksa output Selesai.", type: "contains", valueIncludes: 'expect(getCourseStatus(8, 8)).toBe("Selesai");' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pengujian",
    description:
      "Cek otomatis membaca struktur unit test. Preview tidak menjalankan Vitest atau menunjukkan hasil test nyata.",
    lines: [
      "Test menyatakan contract output saat semua lesson selesai.",
      "Nama case menjelaskan behavior yang akan terlihat di output terminal jika gagal.",
      "Jalankan test ini di local project untuk mendapatkan hasil runner sebenarnya.",
    ],
  },
  skillTags: ["Vitest", "Unit Test", "Behavior Testing"],
};

export const writeFormatDurationVitestTestChallenge: CodingChallenge = {
  id: "write-format-duration-vitest-test",
  lessonId: "vitest-basics",
  title: "Write format duration Vitest test",
  description:
    "Tambahkan test file Vitest untuk function formatDuration dengan assertion output yang mudah dibaca. Preview tidak menjalankan npm test.",
  instructions: [
    "Fokus di tab TSX.",
    "Import describe, expect, dan it dari vitest.",
    "Buat describe untuk formatDuration.",
    "Test bahwa 24 menjadi 24 menit.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan npm test.",
  ],
  starterCode: {
    ...testingPracticeCode,
    tsx: `export function formatDuration(minutes: number) {
  return minutes + " menit";
}`,
  },
  solutionCode: {
    ...testingPracticeCode,
    tsx: `import { describe, expect, it } from "vitest";

export function formatDuration(minutes: number) {
  return minutes + " menit";
}

describe("formatDuration", () => {
  it("adds the menit label", () => {
    expect(formatDuration(24)).toBe("24 menit");
  });
});`,
  },
  checklist: [
    "Vitest import tersedia di file test.",
    "describe menjelaskan function formatDuration.",
    "Nama test menyebut label menit.",
    "Assertion menguji input 24 dan output 24 menit.",
    "Preview tidak menjalankan Vitest atau command npm test.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "vitest-import", label: "Vitest di-import.", type: "contains", valueIncludes: 'import { describe, expect, it } from "vitest";' },
      { id: "describe", label: "Test dikelompokkan untuk formatDuration.", type: "contains", valueIncludes: 'describe("formatDuration", () => {' },
      { id: "case", label: "Nama case menyebut label menit.", type: "contains", valueIncludes: 'it("adds the menit label", () => {' },
      { id: "assertion", label: "Assertion menguji output 24 menit.", type: "contains", valueIncludes: 'expect(formatDuration(24)).toBe("24 menit");' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pengujian",
    description:
      "Cek otomatis membaca unit-test structure. Preview tidak menjalankan Vitest, package install, atau command npm test.",
    lines: [
      "formatDuration diuji dari input ke output yang dijanjikan.",
      "Test name menjelaskan behavior yang akan dilaporkan runner.",
      "Konfigurasi dan result test harus diperiksa dari local project.",
    ],
  },
  skillTags: ["Vitest", "Unit Test", "Assertions", "npm"],
};

export const testProfileStatusVisibleOutputChallenge: CodingChallenge = {
  id: "test-profile-status-visible-output",
  lessonId: "react-testing-library",
  title: "Test profile status visible output",
  description:
    "Render ProfileStatus lalu assert output yang terlihat ketika profile lengkap. Preview tidak menjalankan React Testing Library.",
  instructions: [
    "Fokus di tab TSX.",
    "Import render dan screen dari React Testing Library serta test API Vitest.",
    "Render ProfileStatus dengan isComplete true.",
    "Assert teks Profile lengkap dengan matcher DOM.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan React Testing Library.",
  ],
  starterCode: {
    ...testingPracticeCode,
    tsx: `function ProfileStatus({ isComplete }: { isComplete: boolean }) {
  return <p>{isComplete ? "Profile lengkap" : "Profile belum lengkap"}</p>;
}

export const component = <ProfileStatus isComplete={true} />;`,
  },
  solutionCode: {
    ...testingPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function ProfileStatus({ isComplete }: { isComplete: boolean }) {
  return <p>{isComplete ? "Profile lengkap" : "Profile belum lengkap"}</p>;
}

describe("ProfileStatus", () => {
  it("shows the complete status", () => {
    render(<ProfileStatus isComplete={true} />);

    expect(screen.getByText("Profile lengkap")).toBeInTheDocument();
  });
});`,
  },
  checklist: [
    "Test mengimport jest-dom, render, screen, dan Vitest.",
    "ProfileStatus dirender dengan isComplete true.",
    "Test mencari teks Profile lengkap yang dapat dilihat user.",
    "Matcher memeriksa element tersedia di document.",
    "Preview tidak menjalankan React Testing Library atau DOM test environment.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "rtl-import", label: "render dan screen di-import dari React Testing Library.", type: "contains", valueIncludes: 'import { render, screen } from "@testing-library/react";' },
      { id: "vitest-import", label: "Test API di-import dari Vitest.", type: "contains", valueIncludes: 'import { describe, expect, it } from "vitest";' },
      { id: "render", label: "ProfileStatus dirender sebagai profile lengkap.", type: "contains", valueIncludes: "render(<ProfileStatus isComplete={true} />);" },
      { id: "visible-output", label: "Test mengassert teks status yang terlihat.", type: "contains", valueIncludes: 'expect(screen.getByText("Profile lengkap")).toBeInTheDocument();' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pengujian",
    description:
      "Cek otomatis membaca component-test structure. Preview tidak menjalankan React Testing Library, DOM environment, atau Vitest.",
    lines: [
      "ProfileStatus dirender dengan props profile lengkap.",
      "Test mencari status yang benar-benar terlihat di UI.",
      "Jalankan test pada local project setelah test environment dikonfigurasi.",
    ],
  },
  skillTags: ["React Testing Library", "Component Test", "Visible Output"],
};

export const testCourseBookmarkUserEventChallenge: CodingChallenge = {
  id: "test-course-bookmark-user-event",
  lessonId: "testing-user-events",
  title: "Test course bookmark user event",
  description:
    "Uji bookmark button melalui user-event lalu periksa label yang berubah setelah click. Preview tidak menjalankan interaction test.",
  instructions: [
    "Fokus di tab TSX.",
    "Import userEvent, render, screen, dan Vitest.",
    "Buat user dengan userEvent.setup dan render BookmarkButton.",
    "Tunggu click pada button Simpan bookmark.",
    "Assert bahwa user melihat button Hapus bookmark.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan interaction test.",
  ],
  starterCode: {
    ...testingPracticeCode,
    tsx: `import { useState } from "react";

function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <button type="button" onClick={() => setIsBookmarked(true)}>
      {isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
    </button>
  );
}`,
  },
  solutionCode: {
    ...testingPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";

function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <button type="button" onClick={() => setIsBookmarked(true)}>
      {isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
    </button>
  );
}

describe("BookmarkButton", () => {
  it("shows the saved label after a user click", async () => {
    const user = userEvent.setup();
    render(<BookmarkButton />);

    await user.click(screen.getByRole("button", { name: "Simpan bookmark" }));

    expect(
      screen.getByRole("button", { name: "Hapus bookmark" }),
    ).toBeInTheDocument();
  });
});`,
  },
  checklist: [
    "Test membuat user dengan userEvent.setup.",
    "BookmarkButton dirender sebelum interaction.",
    "Click menemukan button berdasarkan role dan name.",
    "Assertion memeriksa label baru yang terlihat sesudah click.",
    "Preview tidak menjalankan React Testing Library atau event browser nyata.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "user-event-import", label: "userEvent di-import.", type: "contains", valueIncludes: 'import userEvent from "@testing-library/user-event";' },
      { id: "setup", label: "Test membuat userEvent instance.", type: "contains", valueIncludes: "const user = userEvent.setup();" },
      { id: "render", label: "BookmarkButton dirender.", type: "contains", valueIncludes: "render(<BookmarkButton />);" },
      { id: "click", label: "Test menunggu click user pada button awal.", type: "contains", valueIncludes: 'await user.click(screen.getByRole("button", { name: "Simpan bookmark" }));' },
      { id: "result", label: "Assertion mencari label bookmark sesudah click.", type: "contains", valueIncludes: 'screen.getByRole("button", { name: "Hapus bookmark" })' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pengujian",
    description:
      "Cek otomatis membaca user-event test structure. Preview tidak menjalankan React Testing Library, event browser, atau Vitest.",
    lines: [
      "Test menemukan button awal lewat role dan accessible name.",
      "Click user diikuti assertion pada label yang berubah.",
      "Jalankan test di local project untuk menguji interaction sebenarnya.",
    ],
  },
  skillTags: ["User Event", "React Testing Library", "Interaction Test"],
};

export const testProfileFormWithAccessibleQueriesChallenge: CodingChallenge = {
  id: "test-profile-form-with-accessible-queries",
  lessonId: "testing-accessible-queries",
  title: "Test profile form with accessible queries",
  description:
    "Gunakan role dan accessible name untuk menguji input Email serta button Simpan profile tanpa test id. Preview tidak menjalankan test browser.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat ProfileForm dengan label Email yang terhubung ke input.",
    "Render component di dalam test Vitest.",
    "Cari input lewat role textbox dan name Email.",
    "Cari action lewat role button dan name Simpan profile.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan test browser.",
  ],
  starterCode: {
    ...testingPracticeCode,
    tsx: `function ProfileForm() {
  return (
    <form>
      <input id="email" type="email" />
      <button type="submit">Simpan profile</button>
    </form>
  );
}`,
  },
  solutionCode: {
    ...testingPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function ProfileForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
      <button type="submit">Simpan profile</button>
    </form>
  );
}

describe("ProfileForm", () => {
  it("exposes the email field and save action", () => {
    render(<ProfileForm />);

    expect(
      screen.getByRole("textbox", { name: "Email" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Simpan profile" }),
    ).toBeInTheDocument();
  });
});`,
  },
  checklist: [
    "Label Email terhubung dengan input menggunakan htmlFor dan id.",
    "Test memakai render, screen, serta Vitest.",
    "Input ditemukan melalui role textbox dan accessible name Email.",
    "Button ditemukan melalui role button dan accessible name Simpan profile.",
    "Preview tidak menjalankan DOM test browser atau memastikan accessibility audit lengkap.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "label", label: "Label Email terhubung ke input.", type: "contains", valueIncludes: '<label htmlFor="email">Email</label>' },
      { id: "render", label: "ProfileForm dirender di test.", type: "contains", valueIncludes: "render(<ProfileForm />);" },
      { id: "input-query", label: "Input ditemukan melalui role dan name.", type: "contains", valueIncludes: 'screen.getByRole("textbox", { name: "Email" })' },
      { id: "button-query", label: "Button ditemukan melalui role dan name.", type: "contains", valueIncludes: 'screen.getByRole("button", { name: "Simpan profile" })' },
      { id: "no-test-id", label: "Test memakai query semantic.", type: "contains", valueIncludes: "getByRole" },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pengujian",
    description:
      "Cek otomatis membaca accessible-query structure. Preview tidak menjalankan test browser atau audit accessibility lengkap.",
    lines: [
      "Input Email dapat ditemukan dari role dan labelnya.",
      "Button save dapat ditemukan dari role dan accessible name-nya.",
      "Jalankan test serta keyboard review di local project untuk behavior nyata.",
    ],
  },
  skillTags: ["Accessibility", "Testing Library", "Queries", "React"],
};

export const buildBookmarkComponentBehaviorTestChallenge: CodingChallenge = {
  id: "build-bookmark-component-behavior-test",
  lessonId: "unit-component-testing-assessment",
  title: "Build bookmark component behavior test",
  description:
    "Lengkapi checkpoint test behavior bookmark dengan accessible query, user event, dan assertion pada status yang user lihat. Preview tidak menjalankan Vitest.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat LessonBookmarkButton dengan label awal Simpan bookmark.",
    "Render component dan klik button melalui user-event.",
    "Assert status Bookmark disimpan serta label Hapus bookmark.",
    "Gunakan role dan accessible name, bukan state internal atau test id.",
    "Cek otomatis membaca struktur test. Preview tidak menjalankan Vitest.",
  ],
  starterCode: {
    ...testingPracticeCode,
    tsx: `import { useState } from "react";

function LessonBookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <button type="button" onClick={() => setIsBookmarked(true)}>
      {isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
    </button>
  );
}`,
  },
  solutionCode: {
    ...testingPracticeCode,
    tsx: `import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";

function LessonBookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <section>
      <button type="button" onClick={() => setIsBookmarked(true)}>
        {isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
      </button>
      {isBookmarked ? <p role="status">Bookmark disimpan</p> : null}
    </section>
  );
}

describe("LessonBookmarkButton", () => {
  it("shows saved feedback after a user bookmarks the lesson", async () => {
    const user = userEvent.setup();
    render(<LessonBookmarkButton />);

    await user.click(screen.getByRole("button", { name: "Simpan bookmark" }));

    expect(screen.getByRole("status")).toHaveTextContent("Bookmark disimpan");
    expect(
      screen.getByRole("button", { name: "Hapus bookmark" }),
    ).toBeInTheDocument();
  });
});`,
  },
  checklist: [
    "Component menawarkan button bookmark dengan accessible name awal.",
    "Test memakai render, userEvent.setup, dan click berdasarkan role.",
    "Test mengassert status yang user lihat setelah bookmark disimpan.",
    "Test memeriksa label button baru tanpa membaca state internal.",
    "Preview tidak menjalankan Vitest, DOM environment, atau user event nyata.",
  ],
  reactPractice: { mode: "structure", framework: "testing" },
  validation: {
    mode: "tsx",
    checks: [
      { id: "testing-imports", label: "Test mengimport React Testing Library, userEvent, dan Vitest.", type: "contains", valueIncludes: 'import { render, screen } from "@testing-library/react";' },
      { id: "bookmark-button", label: "Component memiliki button bookmark.", type: "contains", valueIncludes: '<button type="button" onClick={() => setIsBookmarked(true)}>' },
      { id: "status", label: "Bookmark berhasil memberi status user-visible.", type: "contains", valueIncludes: '<p role="status">Bookmark disimpan</p>' },
      { id: "user-click", label: "Test menunggu click user pada button awal.", type: "contains", valueIncludes: 'await user.click(screen.getByRole("button", { name: "Simpan bookmark" }));' },
      { id: "status-assertion", label: "Test mengassert status bookmark disimpan.", type: "contains", valueIncludes: 'expect(screen.getByRole("status")).toHaveTextContent("Bookmark disimpan");' },
      { id: "button-assertion", label: "Test mencari label button sesudah click.", type: "contains", valueIncludes: 'screen.getByRole("button", { name: "Hapus bookmark" })' },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "Target pengujian",
    description:
      "Cek otomatis membaca component-test checkpoint structure. Preview tidak menjalankan Vitest, DOM environment, atau interaction browser nyata.",
    lines: [
      "Test menemukan control bookmark dengan role dan accessible name.",
      "Click user menghasilkan status tersimpan serta label button baru.",
      "Jalankan test di local project dan baca output failure bila behavior berubah.",
    ],
  },
  skillTags: ["Vitest", "React Testing Library", "User Event", "Accessible Queries", "Readiness Checkpoint"],
};
