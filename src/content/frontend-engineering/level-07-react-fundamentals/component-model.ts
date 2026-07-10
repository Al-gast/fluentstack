import type { CodingChallenge } from "@/types/challenge";
import type { Lesson, Module } from "@/types/learning";
import type { Quiz } from "@/types/quiz";

export const reactComponentModelModule: Module = {
  id: "react-component-model",
  trackId: "frontend-engineering",
  title: "Component Model",
  slug: "react-component-model",
  description:
    "Memahami React component sebagai bagian UI reusable, lalu membangun component tree kecil dengan JSX, props, dan children.",
  order: 21,
  lessonIds: [
    "react-what-is-component",
    "react-jsx-basics",
    "react-props-and-children",
    "react-splitting-ui-components",
    "react-component-model-assessment",
  ],
  estimatedHours: 5,
  skillTags: ["React", "Components", "JSX", "Props", "Children"],
};

export const reactWhatIsComponentLesson: Lesson = {
  id: "react-what-is-component",
  trackId: "frontend-engineering",
  moduleId: "react-component-model",
  title: "Apa Itu Component?",
  slug: "react-what-is-component",
  description:
    "Melihat UI sebagai potongan kecil yang bisa disusun dan dipakai ulang.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 35,
  objectives: [
    "Menjelaskan component sebagai bagian UI reusable",
    "Mengidentifikasi component di sebuah tampilan",
    "Membaca component function React sederhana",
  ],
  skillTags: ["React", "Components", "UI Tree"],
  blocks: [
    {
      id: "react-what-is-component-intro",
      type: "text",
      title: "React mengajak kamu memecah UI",
      content:
        "Sebelum React, kamu sudah membangun UI dengan HTML, CSS, JavaScript, dan TypeScript. React tidak mengganti semua fondasi itu. React memberi cara untuk menyusun UI sebagai potongan kecil yang disebut component.\n\nComponent adalah function yang mengembalikan UI. Potongan ini bisa dipakai ulang, disusun dengan component lain, dan diberi data lewat props. Untuk awal, pikirkan component seperti bagian UI yang punya nama: Header, LessonCard, ProgressBar, atau Button.",
    },
    {
      id: "react-what-is-component-visual-analogy",
      type: "callout",
      variant: "tip",
      title: "Bayangkan dashboard sebagai susunan komponen",
      content:
        "Satu halaman dashboard bisa terdiri dari Sidebar, Topbar, StatsCard, LessonList, dan ProfileMenu. Setiap bagian tetap berisi HTML di dalamnya, tetapi React memberi nama dan batas yang jelas untuk tiap bagian.",
    },
    {
      id: "react-what-is-component-example",
      type: "code-example",
      title: "Component function pertama",
      language: "tsx",
      code: `function LessonCard() {
  return (
    <article className="lesson-card">
      <h2>Component Model</h2>
      <p>Belajar menyusun UI dengan React component.</p>
    </article>
  );
}`,
      explanation:
        "Nama component dimulai dengan huruf besar. Function ini mengembalikan JSX, yaitu markup yang ditulis di dalam JavaScript atau TypeScript.",
    },
    {
      id: "react-what-is-component-quick-check",
      type: "quick-check",
      question: "Mana contoh nama React component yang paling tepat?",
      options: ["LessonCard", "lesson-card", "article", "function"],
      correctAnswer: "LessonCard",
      explanation:
        "React component memakai nama yang diawali huruf besar agar dibedakan dari tag HTML biasa seperti article atau div.",
    },
    {
      id: "react-what-is-component-summary",
      type: "summary",
      points: [
        "Component adalah bagian UI yang diberi nama dan bisa disusun.",
        "React component adalah function yang mengembalikan JSX.",
        "Nama component diawali huruf besar.",
        "Component membantu UI besar dibaca sebagai susunan bagian kecil.",
        "Berikutnya, kamu akan belajar JSX sebagai cara React menulis markup.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-what-is-component-intro",
      "react-what-is-component-visual-analogy",
      "react-what-is-component-example",
      "react-what-is-component-quick-check",
      "react-what-is-component-summary",
    ],
  },
};

export const reactJsxBasicsLesson: Lesson = {
  id: "react-jsx-basics",
  trackId: "frontend-engineering",
  moduleId: "react-component-model",
  title: "JSX Dasar",
  slug: "react-jsx-basics",
  description:
    "Menulis markup React dengan JSX dan mengenali perbedaan penting dari HTML biasa.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 45,
  objectives: [
    "Menjelaskan JSX sebagai markup di dalam JavaScript atau TypeScript",
    "Memakai className sebagai pengganti class",
    "Memakai kurung kurawal untuk expression sederhana",
  ],
  skillTags: ["React", "JSX", "TSX"],
  blocks: [
    {
      id: "react-jsx-basics-intro",
      type: "text",
      title: "JSX terlihat seperti HTML, tetapi hidup di JavaScript",
      content:
        "JSX adalah syntax yang membuat kamu bisa menulis markup di dalam file JavaScript atau TypeScript. Bentuknya mirip HTML, tetapi aturannya mengikuti dunia JavaScript.\n\nKarena itu, ada beberapa perbedaan penting. Attribute `class` menjadi `className`. Expression JavaScript ditulis dengan kurung kurawal. Tag yang tidak punya isi, seperti `img`, harus ditutup sendiri dengan `/>`.",
    },
    {
      id: "react-jsx-basics-comparison",
      type: "code-example",
      title: "HTML-like markup menjadi JSX",
      language: "tsx",
      code: `const title = "JSX Dasar";

function LessonBanner() {
  return (
    <section className="lesson-banner">
      <h1>{title}</h1>
      <img src="/lesson.png" alt="Ilustrasi lesson" />
    </section>
  );
}`,
      explanation:
        "`className` dipakai karena `class` sudah menjadi keyword di JavaScript. `{title}` membaca value dari variable JavaScript.",
    },
    {
      id: "react-jsx-basics-common-mistake",
      type: "callout",
      variant: "common-mistake",
      title: "Kesalahan awal yang sering muncul",
      content:
        "Banyak learner menulis `class` seperti HTML biasa, lupa menutup tag `img`, atau menaruh string JavaScript tanpa kurung kurawal. Ini normal di awal. Biasakan membaca JSX sebagai markup yang berada di dalam JavaScript.",
    },
    {
      id: "react-jsx-basics-coding-practice",
      type: "coding-practice",
      challengeId: "convert-simple-ui-to-jsx",
    },
    {
      id: "react-jsx-basics-quick-check",
      type: "quick-check",
      question: "Di JSX, attribute CSS class ditulis sebagai...",
      options: ["className", "class", "cssClass", "styleName"],
      correctAnswer: "className",
      explanation:
        "JSX memakai `className` karena JSX berada di JavaScript, dan `class` sudah punya arti sendiri di JavaScript.",
    },
    {
      id: "react-jsx-basics-summary",
      type: "summary",
      points: [
        "JSX adalah markup yang ditulis di dalam JavaScript atau TypeScript.",
        "`className` menggantikan `class` di JSX.",
        "Expression JavaScript dibaca dengan kurung kurawal.",
        "Tag tanpa isi perlu ditutup sendiri, misalnya `<img />`.",
        "Berikutnya, component akan menerima data lewat props.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-jsx-basics-intro",
      "react-jsx-basics-comparison",
      "react-jsx-basics-common-mistake",
      "react-jsx-basics-coding-practice",
      "react-jsx-basics-quick-check",
      "react-jsx-basics-summary",
    ],
  },
};

export const reactPropsAndChildrenLesson: Lesson = {
  id: "react-props-and-children",
  trackId: "frontend-engineering",
  moduleId: "react-component-model",
  title: "Props dan Children",
  slug: "react-props-and-children",
  description:
    "Mengirim data ke component lewat props dan menaruh UI nested lewat children.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Menjelaskan props sebagai data yang dikirim ke component",
    "Membuat component reusable dengan props",
    "Menggunakan children untuk nested UI sederhana",
  ],
  skillTags: ["React", "Props", "Children"],
  blocks: [
    {
      id: "react-props-and-children-intro",
      type: "text",
      title: "Props membuat component bisa dipakai ulang",
      content:
        "Component tanpa props biasanya hanya menampilkan isi yang sama. Props membuat parent component bisa mengirim data ke child component. Dengan props, satu `LessonCard` bisa menampilkan judul dan deskripsi yang berbeda.\n\n`children` adalah props khusus untuk UI yang ditaruh di antara tag pembuka dan penutup component. Ini berguna untuk wrapper seperti Card, Panel, atau Alert yang membungkus isi.",
    },
    {
      id: "react-props-and-children-example",
      type: "code-example",
      title: "Card reusable dengan children",
      language: "tsx",
      code: `import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </article>
  );
}

function LessonPreview() {
  return (
    <Card title="Props dan Children">
      <p>Isi ini dikirim sebagai children.</p>
    </Card>
  );
}`,
      explanation:
        "`title` dikirim sebagai props biasa. Teks di dalam `<Card>...</Card>` masuk sebagai `children`.",
    },
    {
      id: "react-props-and-children-decision-rule",
      type: "callout",
      variant: "tip",
      title: "Props untuk data, children untuk isi nested",
      content:
        "Gunakan props biasa untuk data yang punya nama jelas, seperti title, description, atau status. Gunakan children saat component bertugas menjadi pembungkus isi yang bisa bervariasi.",
    },
    {
      id: "react-props-and-children-coding-practice",
      type: "coding-practice",
      challengeId: "build-card-button-with-props",
    },
    {
      id: "react-props-and-children-summary",
      type: "summary",
      points: [
        "Props adalah data yang dikirim dari parent ke component.",
        "Props membuat component lebih reusable.",
        "`children` dipakai untuk UI nested di dalam component.",
        "Type props membantu data component tetap jelas.",
        "Berikutnya, kamu akan memecah UI besar menjadi beberapa component.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-props-and-children-intro",
      "react-props-and-children-example",
      "react-props-and-children-decision-rule",
      "react-props-and-children-coding-practice",
      "react-props-and-children-summary",
    ],
  },
};

export const reactSplittingUiComponentsLesson: Lesson = {
  id: "react-splitting-ui-components",
  trackId: "frontend-engineering",
  moduleId: "react-component-model",
  title: "Splitting UI into Components",
  slug: "react-splitting-ui-components",
  description:
    "Memecah satu UI yang mulai panjang menjadi component kecil yang lebih mudah dibaca.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 50,
  objectives: [
    "Mengenali kapan UI mulai perlu dipecah",
    "Memindahkan bagian UI ke component kecil",
    "Menyusun component tree sederhana dari parent dan child",
  ],
  skillTags: ["React", "Component Tree", "Refactoring"],
  blocks: [
    {
      id: "react-splitting-ui-components-intro",
      type: "text",
      title: "Component membantu saat UI mulai ramai",
      content:
        "Satu component boleh berisi beberapa markup. Tetapi jika semua bagian UI ditulis dalam satu function besar, kode cepat sulit dibaca. React mendorong kamu memecah UI berdasarkan bagian yang punya peran jelas.\n\nMulai dari pertanyaan sederhana: bagian mana yang bisa diberi nama? Jika ada header profil, daftar skill, dan tombol aksi, masing-masing bisa menjadi component kecil. Parent component lalu menyusun bagian-bagian itu.",
    },
    {
      id: "react-splitting-ui-components-before-after",
      type: "code-example",
      title: "Sebelum dan sesudah dipecah",
      language: "tsx",
      code: `type Profile = {
  name: string;
  role: string;
  skills: string[];
};

function ProfileHeader({ name, role }: { name: string; role: string }) {
  return (
    <header>
      <h2>{name}</h2>
      <p>{role}</p>
    </header>
  );
}

function SkillList({ skills }: { skills: string[] }) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}`,
      explanation:
        "ProfileHeader dan SkillList punya peran jelas. Parent component bisa memakai keduanya untuk menyusun ProfileCard.",
    },
    {
      id: "react-splitting-ui-components-checklist",
      type: "callout",
      variant: "important",
      title: "Checklist split yang sehat",
      content:
        "Pecah component jika bagian UI punya nama jelas, dipakai ulang, atau membuat parent lebih mudah dibaca. Jangan memecah terlalu kecil jika hasilnya justru membuat alur UI sulit diikuti.",
    },
    {
      id: "react-splitting-ui-components-coding-practice",
      type: "coding-practice",
      challengeId: "split-profile-ui-components",
    },
    {
      id: "react-splitting-ui-components-summary",
      type: "summary",
      points: [
        "UI yang panjang bisa dipecah menjadi component kecil.",
        "Component kecil sebaiknya punya peran dan nama yang jelas.",
        "Parent component menyusun child component menjadi component tree.",
        "Jangan memecah UI hanya demi terlihat kompleks.",
        "Berikutnya, Uji Kompetensi mengecek component, JSX, props, children, dan splitting.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-splitting-ui-components-intro",
      "react-splitting-ui-components-before-after",
      "react-splitting-ui-components-checklist",
      "react-splitting-ui-components-coding-practice",
      "react-splitting-ui-components-summary",
    ],
  },
};

export const reactComponentModelAssessmentLesson: Lesson = {
  id: "react-component-model-assessment",
  trackId: "frontend-engineering",
  moduleId: "react-component-model",
  title: "Uji Kompetensi Component Model",
  slug: "react-component-model-assessment",
  description:
    "Checkpoint kesiapan membaca dan membangun component tree kecil dengan JSX, props, dan children.",
  contentLanguage: "id",
  level: "intermediate",
  estimatedMinutes: 75,
  objectives: [
    "Mengecek pemahaman component model React",
    "Membangun component tree kecil dengan props dan children",
    "Menjelaskan kapan UI perlu dipecah menjadi component",
  ],
  skillTags: ["React", "Component Model", "Assessment"],
  blocks: [
    {
      id: "react-component-model-assessment-recap",
      type: "text",
      title: "Checkpoint: apakah kamu bisa membaca component tree?",
      content:
        "Uji Kompetensi ini mengecek dasar React pertama: component, JSX, props, children, dan splitting UI. Kamu belum perlu memakai state, event handler, routing, atau effect.\n\nTargetnya sederhana: kamu bisa membaca component function, tahu aturan JSX dasar, mengirim data lewat props, memakai children untuk isi nested, dan memecah UI kecil menjadi bagian yang masuk akal.",
    },
    {
      id: "react-component-model-assessment-quiz",
      type: "quiz",
      quizId: "react-component-model-assessment-quiz",
    },
    {
      id: "react-component-model-assessment-coding-practice",
      type: "coding-practice",
      challengeId: "build-component-tree-checkpoint",
    },
    {
      id: "react-component-model-assessment-writing-practice",
      type: "writing-practice",
      prompt:
        "Tulis penjelasan singkat tentang component tree yang kamu buat. Jelaskan component parent, child component, props yang dikirim, dan bagian mana yang memakai children.\n\nGunakan format:\n- Parent component:\n- Child component:\n- Props yang dikirim:\n- Children dipakai untuk:\n- Kenapa UI ini layak dipecah:",
      placeholder:
        "Parent component: ComponentModelCheckpoint.\nChild component: FeatureCard dan PrimaryButton.\nProps yang dikirim: title, description, dan label.\nChildren dipakai untuk: isi tambahan di dalam FeatureCard.\nKenapa dipecah: card dan button punya peran jelas.",
      minimumCharacters: 180,
      checklist: [
        "Menyebut parent component.",
        "Menyebut minimal satu child component.",
        "Menjelaskan props yang dikirim.",
        "Menjelaskan penggunaan children.",
        "Memberi alasan split UI yang praktis.",
      ],
      modelAnswer:
        "Parent component: ComponentModelCheckpoint. Child component: FeatureCard dan PrimaryButton. Props yang dikirim adalah title, description, dan label. Children dipakai untuk isi tambahan di dalam FeatureCard, misalnya catatan kecil tentang tujuan component. UI ini layak dipecah karena card dan button punya peran jelas, sehingga parent lebih mudah dibaca.",
    },
    {
      id: "react-component-model-assessment-docs",
      type: "documentation-bridge",
      title: "Docs bridge component model",
      description:
        "Baca dokumentasi React resmi untuk memperkuat model mental component. Fokus pada konsep awal, bukan hooks atau routing.",
      links: [
        {
          source: "React Learn",
          title: "Your First Component",
          url: "https://react.dev/learn/your-first-component",
          focus: [
            "component sebagai UI building block",
            "nama component diawali huruf besar",
            "component function mengembalikan JSX",
          ],
          ignoreForNow: ["framework setup", "deep dive lanjutan", "optimasi"],
        },
        {
          source: "React Learn",
          title: "Writing Markup with JSX",
          url: "https://react.dev/learn/writing-markup-with-jsx",
          focus: ["aturan JSX dasar", "className", "tag self-closing"],
          ignoreForNow: ["semua detail transform JSX", "tooling internal"],
        },
        {
          source: "React Learn",
          title: "JavaScript in JSX with Curly Braces",
          url: "https://react.dev/learn/javascript-in-jsx-with-curly-braces",
          focus: ["kurung kurawal", "variable di JSX", "expression sederhana"],
          ignoreForNow: ["conditional rendering detail", "list rendering detail"],
        },
        {
          source: "React Learn",
          title: "Passing Props to a Component",
          url: "https://react.dev/learn/passing-props-to-a-component",
          focus: ["props sebagai data", "membaca props di child", "children sebagai nested UI"],
          ignoreForNow: ["advanced TypeScript props", "composition pattern lanjutan"],
        },
      ],
      followUpAction:
        "Buka Your First Component dan Passing Props to a Component, lalu bandingkan contoh docs dengan component tree checkpoint kamu.",
    },
    {
      id: "react-component-model-assessment-summary",
      type: "summary",
      points: [
        "React component adalah function yang mengembalikan JSX.",
        "JSX punya aturan khusus seperti className, kurung kurawal, dan self-closing tag.",
        "Props mengirim data ke component.",
        "Children mengirim nested UI ke wrapper component.",
        "Berikutnya, State, Events, and Rendering akan membuat component merespons interaksi user.",
      ],
    },
  ],
  completionRule: {
    requiredBlockIds: [
      "react-component-model-assessment-recap",
      "react-component-model-assessment-quiz",
      "react-component-model-assessment-coding-practice",
      "react-component-model-assessment-writing-practice",
      "react-component-model-assessment-docs",
      "react-component-model-assessment-summary",
    ],
    passingQuizScore: 70,
  },
};

export const reactComponentModelAssessmentQuiz: Quiz = {
  id: "react-component-model-assessment-quiz",
  lessonId: "react-component-model-assessment",
  title: "Uji Kompetensi Component Model",
  passingScore: 70,
  questions: [
    {
      id: "react-component-model-q1",
      type: "multiple-choice",
      question: "Apa yang paling tepat menggambarkan React component?",
      options: [
        "Function yang mengembalikan UI dan bisa disusun dengan component lain",
        "File CSS yang selalu global",
        "Database kecil di browser",
        "Command npm untuk menjalankan project",
      ],
      correctAnswer: "Function yang mengembalikan UI dan bisa disusun dengan component lain",
      explanation:
        "React component adalah function yang mengembalikan JSX dan bisa disusun menjadi component tree.",
    },
    {
      id: "react-component-model-q2",
      type: "multiple-choice",
      question: "Di JSX, attribute `class` dari HTML biasanya ditulis sebagai...",
      options: ["className", "css", "styleName", "classList"],
      correctAnswer: "className",
      explanation:
        "JSX memakai `className` karena JSX berada di JavaScript.",
    },
    {
      id: "react-component-model-q3",
      type: "true-false",
      question:
        "Nama React component sebaiknya diawali huruf besar agar React membedakannya dari tag HTML.",
      correctAnswer: true,
      explanation:
        "Component seperti LessonCard diawali huruf besar, sedangkan tag HTML seperti article tetap lowercase.",
    },
    {
      id: "react-component-model-q4",
      type: "multiple-choice",
      question: "Props paling tepat dipakai untuk...",
      options: [
        "mengirim data dari parent ke child component",
        "menjalankan routing Next.js",
        "menghapus kebutuhan JSX",
        "mengubah semua CSS menjadi inline style",
      ],
      correctAnswer: "mengirim data dari parent ke child component",
      explanation:
        "Props adalah data yang diberikan parent agar child component bisa menampilkan variasi konten.",
    },
    {
      id: "react-component-model-q5",
      type: "multiple-choice",
      question: "Kapan UI layak dipecah menjadi component kecil?",
      options: [
        "Saat bagian UI punya peran jelas, dipakai ulang, atau membuat parent lebih mudah dibaca",
        "Setiap kali ada satu tag HTML",
        "Hanya setelah memakai global state",
        "Saat ingin menghindari TypeScript",
      ],
      correctAnswer:
        "Saat bagian UI punya peran jelas, dipakai ulang, atau membuat parent lebih mudah dibaca",
      explanation:
        "Component split yang baik membantu readability dan reuse tanpa membuat struktur terlalu kecil.",
    },
  ],
};

const reactPracticePreviewCode = {
  html: `<main class="practice-card">
  <h1>Latihan React Component</h1>
  <p>Fokus di tab TSX. Preview belum menjalankan React component.</p>
</main>`,
  css: `.practice-card {
  max-width: 560px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #d4d4d8;
  border-radius: 12px;
  font-family: system-ui, sans-serif;
}`,
  js: "",
};

export const convertSimpleUiToJsxChallenge: CodingChallenge = {
  id: "convert-simple-ui-to-jsx",
  lessonId: "react-jsx-basics",
  title: "Ubah UI sederhana menjadi JSX",
  description:
    "Latihan memperbaiki markup agar mengikuti aturan JSX dasar.",
  instructions: [
    "Fokus di tab TSX.",
    "Ubah attribute class menjadi className.",
    "Tampilkan variable title dan description dengan kurung kurawal.",
    "Tutup tag img dengan self-closing tag.",
    "Pertahankan component LessonBanner.",
  ],
  starterCode: {
    ...reactPracticePreviewCode,
    tsx: `const title = "JSX Dasar";
const description = "Markup React ditulis di dalam TypeScript.";
const imageUrl = "/react-component.png";
const imageAlt = "Ilustrasi component";

function LessonBanner() {
  return (
    <section data-todo-class="lesson-banner">
      {/* TODO: ubah teks berikut menjadi expression JSX. */}
      <h1>title</h1>
      <p>description</p>
      <img src={imageUrl} alt={imageAlt}></img>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactPracticePreviewCode,
    tsx: `const title = "JSX Dasar";
const description = "Markup React ditulis di dalam TypeScript.";
const imageUrl = "/react-component.png";
const imageAlt = "Ilustrasi component";

function LessonBanner() {
  return (
    <section className="lesson-banner">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt={imageAlt} />
    </section>
  );
}`,
  },
  checklist: [
    "className dipakai di JSX.",
    "Variable dibaca dengan kurung kurawal.",
    "img ditutup dengan self-closing tag.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      {
        id: "class-name",
        label: "section memakai className.",
        type: "contains",
        target: `className="lesson-banner"`,
        valueIncludes: `className="lesson-banner"`,
      },
      {
        id: "title-expression",
        label: "title dibaca sebagai expression.",
        type: "contains",
        target: "{title}",
        valueIncludes: "{title}",
      },
      {
        id: "description-expression",
        label: "description dibaca sebagai expression.",
        type: "contains",
        target: "{description}",
        valueIncludes: "{description}",
      },
      {
        id: "self-closing-img",
        label: "img ditutup dengan self-closing tag.",
        type: "contains",
        target: `<img src={imageUrl} alt={imageAlt} />`,
        valueIncludes: `<img src={imageUrl} alt={imageAlt} />`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "TSX yang diharapkan",
    description:
      "Component memakai aturan JSX dasar: className, expression braces, dan self-closing img. Preview React belum menjalankan tab TSX.",
    lines: [
      "LessonBanner tetap menjadi component function.",
      `section memakai className="lesson-banner".`,
      "title dan description dibaca lewat kurung kurawal.",
      "img ditutup sebagai self-closing tag.",
    ],
  },
  skillTags: ["React", "JSX", "TSX"],
};

export const buildCardButtonWithPropsChallenge: CodingChallenge = {
  id: "build-card-button-with-props",
  lessonId: "react-props-and-children",
  title: "Buat Card dan Button dengan props",
  description:
    "Latihan membuat component reusable yang menerima props dan children.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat CourseCardProps dengan title, description, dan children.",
    "Buat CourseCard yang membaca props tersebut.",
    "Buat ActionButtonProps dan ActionButton dengan label.",
    "Pakai CourseCard dan ActionButton di LessonPreview.",
  ],
  starterCode: {
    ...reactPracticePreviewCode,
    tsx: `import type { ReactNode } from "react";

// Buat CourseCardProps dan ActionButtonProps di sini.

function CourseCard() {
  return (
    <article className="course-card">
      <h2>Judul course</h2>
      <p>Deskripsi course</p>
    </article>
  );
}

function ActionButton() {
  return <button type="button">Aksi</button>;
}

function LessonPreview() {
  return (
    <CourseCard>
      <ActionButton />
    </CourseCard>
  );
}`,
  },
  solutionCode: {
    ...reactPracticePreviewCode,
    tsx: `import type { ReactNode } from "react";

type CourseCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

type ActionButtonProps = {
  label: string;
};

function CourseCard({ title, description, children }: CourseCardProps) {
  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{children}</div>
    </article>
  );
}

function ActionButton({ label }: ActionButtonProps) {
  return <button type="button">{label}</button>;
}

function LessonPreview() {
  return (
    <CourseCard title="Component Model" description="Belajar props dan children.">
      <ActionButton label="Mulai lesson" />
    </CourseCard>
  );
}`,
  },
  checklist: [
    "CourseCardProps mendeskripsikan data card.",
    "CourseCard menerima props dan children.",
    "ActionButton menerima label lewat props.",
    "LessonPreview memakai component reusable.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      {
        id: "course-card-props",
        label: "CourseCardProps dibuat.",
        type: "contains",
        target: "type CourseCardProps = {",
        valueIncludes: "type CourseCardProps = {",
      },
      {
        id: "children-react-node",
        label: "children memakai ReactNode.",
        type: "contains",
        target: "children: ReactNode;",
        valueIncludes: "children: ReactNode;",
      },
      {
        id: "course-card-function",
        label: "CourseCard membaca props.",
        type: "contains",
        target: "function CourseCard({ title, description, children }: CourseCardProps)",
        valueIncludes: "function CourseCard({ title, description, children }: CourseCardProps)",
      },
      {
        id: "children-rendered",
        label: "CourseCard merender children.",
        type: "contains",
        target: "{children}",
        valueIncludes: "{children}",
      },
      {
        id: "action-button-props",
        label: "ActionButtonProps dibuat.",
        type: "contains",
        target: "type ActionButtonProps = {",
        valueIncludes: "type ActionButtonProps = {",
      },
      {
        id: "action-button-used",
        label: "ActionButton dipakai dengan label.",
        type: "contains",
        target: `<ActionButton label="Mulai lesson" />`,
        valueIncludes: `<ActionButton label="Mulai lesson" />`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "TSX yang diharapkan",
    description:
      "CourseCard menerima props dan children, sementara ActionButton menerima label sebagai props. Preview React belum menjalankan tab TSX.",
    lines: [
      "CourseCardProps memuat title, description, dan children.",
      "CourseCard merender title, description, dan children.",
      "ActionButton menerima label lewat props.",
      "LessonPreview memakai CourseCard dan ActionButton bersama.",
    ],
  },
  skillTags: ["React", "Props", "Children"],
};

export const splitProfileUiComponentsChallenge: CodingChallenge = {
  id: "split-profile-ui-components",
  lessonId: "react-splitting-ui-components",
  title: "Pecah Profile UI menjadi component",
  description:
    "Latihan memecah UI profil menjadi parent dan child component yang lebih mudah dibaca.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat type Profile.",
    "Buat ProfileHeader untuk name dan role.",
    "Buat SkillList untuk skills.",
    "Gunakan ProfileHeader dan SkillList di ProfileCard.",
  ],
  starterCode: {
    ...reactPracticePreviewCode,
    tsx: `const profile = {
  name: "Rina",
  role: "Frontend Learner",
  skills: ["HTML", "CSS", "TypeScript"],
};

function ProfileCard() {
  return (
    <article className="profile-card">
      <header>
        <h2>{profile.name}</h2>
        <p>{profile.role}</p>
      </header>
      <ul>
        {profile.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}`,
  },
  solutionCode: {
    ...reactPracticePreviewCode,
    tsx: `type Profile = {
  name: string;
  role: string;
  skills: string[];
};

type ProfileHeaderProps = {
  name: string;
  role: string;
};

type SkillListProps = {
  skills: string[];
};

const profile: Profile = {
  name: "Rina",
  role: "Frontend Learner",
  skills: ["HTML", "CSS", "TypeScript"],
};

function ProfileHeader({ name, role }: ProfileHeaderProps) {
  return (
    <header>
      <h2>{name}</h2>
      <p>{role}</p>
    </header>
  );
}

function SkillList({ skills }: SkillListProps) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

function ProfileCard() {
  return (
    <article className="profile-card">
      <ProfileHeader name={profile.name} role={profile.role} />
      <SkillList skills={profile.skills} />
    </article>
  );
}`,
  },
  checklist: [
    "Profile type dibuat.",
    "Header profil dipisah ke ProfileHeader.",
    "Daftar skill dipisah ke SkillList.",
    "ProfileCard menyusun child component.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      {
        id: "profile-type",
        label: "Profile type dibuat.",
        type: "contains",
        target: "type Profile = {",
        valueIncludes: "type Profile = {",
      },
      {
        id: "profile-header-props",
        label: "ProfileHeaderProps dibuat.",
        type: "contains",
        target: "type ProfileHeaderProps = {",
        valueIncludes: "type ProfileHeaderProps = {",
      },
      {
        id: "profile-header-function",
        label: "ProfileHeader menerima props.",
        type: "contains",
        target: "function ProfileHeader({ name, role }: ProfileHeaderProps)",
        valueIncludes: "function ProfileHeader({ name, role }: ProfileHeaderProps)",
      },
      {
        id: "skill-list-function",
        label: "SkillList menerima skills.",
        type: "contains",
        target: "function SkillList({ skills }: SkillListProps)",
        valueIncludes: "function SkillList({ skills }: SkillListProps)",
      },
      {
        id: "profile-header-used",
        label: "ProfileHeader dipakai di ProfileCard.",
        type: "contains",
        target: `<ProfileHeader name={profile.name} role={profile.role} />`,
        valueIncludes: `<ProfileHeader name={profile.name} role={profile.role} />`,
      },
      {
        id: "skill-list-used",
        label: "SkillList dipakai di ProfileCard.",
        type: "contains",
        target: `<SkillList skills={profile.skills} />`,
        valueIncludes: `<SkillList skills={profile.skills} />`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "TSX yang diharapkan",
    description:
      "ProfileCard menjadi parent yang menyusun ProfileHeader dan SkillList sebagai child component. Preview React belum menjalankan tab TSX.",
    lines: [
      "Profile type menjelaskan name, role, dan skills.",
      "ProfileHeader menerima name dan role.",
      "SkillList menerima skills.",
      "ProfileCard menyusun ProfileHeader dan SkillList.",
    ],
  },
  skillTags: ["React", "Component Tree", "Refactoring"],
};

export const buildComponentTreeCheckpointChallenge: CodingChallenge = {
  id: "build-component-tree-checkpoint",
  lessonId: "react-component-model-assessment",
  title: "Bangun component tree kecil",
  description:
    "Latihan akhir membangun component tree dengan JSX, props, children, dan component split yang jelas.",
  instructions: [
    "Fokus di tab TSX.",
    "Buat FeatureCardProps dengan title, description, dan children.",
    "Buat FeatureCard yang merender title, description, dan children.",
    "Buat PrimaryButton dengan label props.",
    "Buat ComponentModelCheckpoint yang memakai FeatureCard dan PrimaryButton.",
  ],
  starterCode: {
    ...reactPracticePreviewCode,
    tsx: `import type { ReactNode } from "react";

// Buat props dan component di sini.

export default function ComponentModelCheckpoint() {
  return (
    <section className="checkpoint">
      <h1>Component Model</h1>
    </section>
  );
}`,
  },
  solutionCode: {
    ...reactPracticePreviewCode,
    tsx: `import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

type PrimaryButtonProps = {
  label: string;
};

function FeatureCard({ title, description, children }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{children}</div>
    </article>
  );
}

function PrimaryButton({ label }: PrimaryButtonProps) {
  return <button type="button">{label}</button>;
}

export default function ComponentModelCheckpoint() {
  return (
    <section className="checkpoint">
      <h1>Component Model</h1>
      <FeatureCard
        title="Komponen reusable"
        description="Satu card bisa menerima data dan children."
      >
        <p>Children membuat isi card bisa bervariasi.</p>
        <PrimaryButton label="Lanjut ke state" />
      </FeatureCard>
    </section>
  );
}`,
  },
  checklist: [
    "FeatureCardProps memuat title, description, dan children.",
    "FeatureCard merender props dan children.",
    "PrimaryButton menerima label.",
    "ComponentModelCheckpoint menyusun component tree kecil.",
  ],
  validation: {
    mode: "tsx",
    checks: [
      {
        id: "feature-card-props",
        label: "FeatureCardProps dibuat.",
        type: "contains",
        target: "type FeatureCardProps = {",
        valueIncludes: "type FeatureCardProps = {",
      },
      {
        id: "feature-children",
        label: "FeatureCardProps punya children.",
        type: "contains",
        target: "children: ReactNode;",
        valueIncludes: "children: ReactNode;",
      },
      {
        id: "feature-card-function",
        label: "FeatureCard membaca props.",
        type: "contains",
        target: "function FeatureCard({ title, description, children }: FeatureCardProps)",
        valueIncludes: "function FeatureCard({ title, description, children }: FeatureCardProps)",
      },
      {
        id: "primary-button",
        label: "PrimaryButton dibuat.",
        type: "contains",
        target: "function PrimaryButton({ label }: PrimaryButtonProps)",
        valueIncludes: "function PrimaryButton({ label }: PrimaryButtonProps)",
      },
      {
        id: "checkpoint-export",
        label: "ComponentModelCheckpoint dibuat sebagai default export.",
        type: "contains",
        target: "export default function ComponentModelCheckpoint()",
        valueIncludes: "export default function ComponentModelCheckpoint()",
      },
      {
        id: "feature-card-used",
        label: "FeatureCard dipakai dengan title.",
        type: "contains",
        target: `title="Komponen reusable"`,
        valueIncludes: `title="Komponen reusable"`,
      },
      {
        id: "button-used",
        label: "PrimaryButton dipakai dengan label.",
        type: "contains",
        target: `<PrimaryButton label="Lanjut ke state" />`,
        valueIncludes: `<PrimaryButton label="Lanjut ke state" />`,
      },
    ],
  },
  expectedOutput: {
    kind: "behavior",
    title: "TSX yang diharapkan",
    description:
      "Checkpoint membangun component tree kecil dengan FeatureCard, PrimaryButton, props, dan children. Preview React belum menjalankan tab TSX.",
    lines: [
      "FeatureCardProps memuat title, description, dan children.",
      "FeatureCard merender props dan children.",
      "PrimaryButton menerima label.",
      "ComponentModelCheckpoint menyusun FeatureCard dan PrimaryButton.",
    ],
  },
  skillTags: ["React", "Component Model", "Assessment"],
};
