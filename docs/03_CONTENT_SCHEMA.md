# docs/03_CONTENT_SCHEMA.md

# Content Schema

## Purpose

FluentStack uses a block-based learning model.

A lesson is not a static article. A lesson can contain explanation, examples, quick checks, coding practice, writing practice, quizzes, and summaries.

This structure makes the learning experience active, flexible, and easier to expand later.

## Content Storage Strategy

During the MVP, learning content should be stored in the codebase.

Use static TypeScript, MDX, or JSON files for:

* tracks
* modules
* lessons
* quizzes
* coding challenges
* sample projects

User-specific data should be stored in Supabase.

Use Supabase for:

* user profile
* lesson progress
* completed blocks
* quiz attempts
* challenge progress
* writing drafts
* XP
* streak

## Language Strategy

FluentStack is built first for Indonesian learners.

Developer-facing parts should use English.

Use English for:

* file names
* folder names
* component names
* function names
* TypeScript types
* variable names
* route names
* developer documentation
* Codex prompts
* README

Learning content should use Bahasa Indonesia first.

Use Bahasa Indonesia for:

* lesson explanations
* quiz questions
* quiz explanations
* practice instructions
* summary points
* user-facing learning guidance

Keep common technical terms in English when they are standard in programming.

Examples:

* component
* props
* state
* hook
* route
* layout
* semantic HTML
* accessibility
* responsive design
* API
* deployment
* debugging

Do not force awkward translations of common programming terms.

English for Tech Careers lessons should be bilingual:

* explain the concept in Bahasa Indonesia
* provide practical English examples
* include Indonesian meaning when useful
* include writing practice using realistic remote-work situations

The MVP does not need a full language switcher.

Do not build complex i18n unless explicitly requested.

## Core Learning Hierarchy

The main learning hierarchy is:

```txt
Track
→ Module
→ Lesson
→ Lesson Blocks
```

Example:

```txt
Frontend Engineering
→ HTML & Web Fundamentals
→ HTML Semantic Basics
→ Text / Code Example / Quick Check / Quiz / Summary
```

## Content Language Type

Each lesson should define its content language.

```ts
export type ContentLanguage = "id" | "en" | "bilingual";
```

Use:

```txt
"id"
```

For regular technology lessons written mainly in Bahasa Indonesia.

Use:

```txt
"bilingual"
```

For English for Tech Careers lessons that combine Indonesian explanation with English examples.

Use:

```txt
"en"
```

Only for future lessons intended fully in English.

MVP rule:

* Frontend Engineering lessons use `contentLanguage: "id"`.
* English for Tech Careers lessons use `contentLanguage: "bilingual"`.
* Codebase naming stays English.
* Common technical terms may remain in English.

## Track Model

A track is a large learning path.

Examples:

* Frontend Engineering
* English for Tech Careers
* Backend Engineering
* Computer Science Fundamentals

Recommended TypeScript shape:

```ts
export type Track = {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
  moduleIds: string[];
  skillTags: string[];
};
```

Example:

```ts
export const frontendTrack: Track = {
  id: "frontend-engineering",
  title: "Frontend Engineering",
  slug: "frontend-engineering",
  description:
    "Belajar fondasi modern frontend development melalui materi terstruktur, quiz, dan praktik langsung.",
  level: "beginner",
  estimatedHours: 80,
  moduleIds: ["web-foundations", "html-basics"],
  skillTags: ["HTML", "CSS", "JavaScript", "Frontend"],
};
```

## Module Model

A module is a group of related lessons.

Example:

```txt
Frontend Engineering
→ HTML & Web Fundamentals
→ CSS Fundamentals
→ JavaScript Basics
```

Recommended TypeScript shape:

```ts
export type Module = {
  id: string;
  trackId: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  lessonIds: string[];
  estimatedHours: number;
  skillTags: string[];
};
```

Example:

```ts
export const htmlModule: Module = {
  id: "html-basics",
  trackId: "frontend-engineering",
  title: "HTML Basics",
  slug: "html-basics",
  description:
    "Pahami bagaimana halaman web disusun dan bagaimana browser membaca struktur HTML.",
  order: 1,
  lessonIds: ["html-basic-structure"],
  estimatedHours: 6,
  skillTags: ["HTML", "Web Fundamentals"],
};
```

## Lesson Model

A lesson is the main learning unit.

Each lesson contains multiple blocks.

Recommended TypeScript shape:

```ts
export type Lesson = {
  id: string;
  trackId: string;
  moduleId: string;
  title: string;
  slug: string;
  description: string;
  contentLanguage: ContentLanguage;
  level: "beginner" | "intermediate" | "advanced";
  estimatedMinutes: number;
  objectives: string[];
  skillTags: string[];
  blocks: LessonBlock[];
  completionRule: LessonCompletionRule;
};
```

Example:

```ts
export const htmlSemanticLesson: Lesson = {
  id: "html-semantic-basics",
  trackId: "frontend-engineering",
  moduleId: "semantic-html",
  title: "Dasar Semantic HTML",
  slug: "html-semantic-basics",
  description:
    "Pelajari bagaimana semantic HTML membantu membuat struktur halaman web lebih jelas, rapi, dan accessible.",
  contentLanguage: "id",
  level: "beginner",
  estimatedMinutes: 25,
  objectives: [
    "Memahami apa itu semantic HTML",
    "Mengenali tag semantic yang umum digunakan",
    "Memilih elemen HTML yang lebih tepat untuk struktur UI nyata",
  ],
  skillTags: ["HTML", "Accessibility", "Web Fundamentals"],
  blocks: [],
  completionRule: {
    requiredBlockIds: [
      "html-semantic-intro",
      "html-semantic-code-example",
      "html-semantic-quick-check",
      "html-semantic-quiz",
      "html-semantic-summary",
    ],
    passingQuizScore: 70,
  },
};
```

## Lesson Completion Rule

Progress should be based on required learning activity, not page visits.

Recommended TypeScript shape:

```ts
export type LessonCompletionRule = {
  requiredBlockIds: string[];
  passingQuizScore?: number;
};
```

Example:

```ts
completionRule: {
  requiredBlockIds: [
    "flexbox-intro",
    "flexbox-quick-check",
    "flexbox-navbar-practice",
    "flexbox-final-quiz"
  ],
  passingQuizScore: 70
}
```

## Lesson Block Model

A lesson block is one activity inside a lesson.

Supported MVP block types:

* text
* callout
* code-example
* quick-check
* coding-practice
* writing-practice
* quiz
* summary

Recommended TypeScript shape:

```ts
export type LessonBlock =
  | TextBlock
  | CalloutBlock
  | CodeExampleBlock
  | QuickCheckBlock
  | CodingPracticeBlock
  | WritingPracticeBlock
  | QuizBlock
  | SummaryBlock;
```

## Text Block

Used for lesson explanation.

```ts
export type TextBlock = {
  id: string;
  type: "text";
  title: string;
  content: string;
};
```

Example:

```ts
{
  id: "html-semantic-intro",
  type: "text",
  title: "Apa itu semantic HTML?",
  content:
    "Semantic HTML adalah cara menulis HTML menggunakan elemen yang punya makna jelas. Jadi, elemen dipilih bukan hanya karena tampilannya, tetapi karena fungsi dan arti kontennya."
}
```

## Callout Block

Used for tips, warnings, common mistakes, or important notes.

```ts
export type CalloutBlock = {
  id: string;
  type: "callout";
  variant: "tip" | "warning" | "common-mistake" | "important";
  title: string;
  content: string;
};
```

Example:

```ts
{
  id: "button-common-mistake",
  type: "callout",
  variant: "common-mistake",
  title: "Jangan gunakan div sebagai button",
  content:
    "Kalau sebuah elemen digunakan untuk menjalankan aksi, gunakan elemen button. Elemen button sudah mendukung keyboard navigation dan lebih mudah dibaca oleh screen reader."
}
```

## Code Example Block

Used to show code examples.

```ts
export type CodeExampleBlock = {
  id: string;
  type: "code-example";
  title: string;
  language: "html" | "css" | "js" | "ts" | "tsx" | "json" | "bash";
  code: string;
  explanation?: string;
};
```

Example:

```ts
{
  id: "html-semantic-code-example",
  type: "code-example",
  title: "Contoh struktur semantic HTML",
  language: "html",
  code: `<header>
  <nav>Navigation</nav>
</header>

<main>
  <section>
    <h1>Page title</h1>
    <p>Main content goes here.</p>
  </section>
</main>

<footer>
  <p>Footer content</p>
</footer>`,
  explanation:
    "Struktur ini lebih jelas dibanding memakai div untuk semua bagian halaman. Browser, developer lain, dan assistive technology bisa memahami bagian halaman dengan lebih baik."
}
```

## Quick Check Block

A short question inside the lesson flow.

This is not a full quiz. It checks understanding before the user continues.

```ts
export type QuickCheckBlock = {
  id: string;
  type: "quick-check";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};
```

Example:

```ts
{
  id: "html-semantic-quick-check",
  type: "quick-check",
  question: "Elemen HTML mana yang paling tepat untuk konten utama unik dalam sebuah halaman?",
  options: ["header", "main", "footer", "aside"],
  correctAnswer: "main",
  explanation:
    "Elemen main digunakan untuk membungkus konten utama yang unik dalam halaman tersebut."
}
```

## Coding Practice Block

Used when a lesson requires hands-on coding practice.

```ts
export type CodingPracticeBlock = {
  id: string;
  type: "coding-practice";
  challengeId: string;
};
```

Example:

```ts
{
  id: "flexbox-navbar-practice-block",
  type: "coding-practice",
  challengeId: "build-flexbox-navbar"
}
```

## Writing Practice Block

Used mainly for English and career communication lessons.

```ts
export type WritingPracticeBlock = {
  id: string;
  type: "writing-practice";
  prompt: string;
  placeholder: string;
  minimumCharacters?: number;
  minimumWords?: number;
  modelAnswer?: string;
  checklist?: string[];
};
```

Example:

```ts
{
  id: "daily-update-writing-practice",
  type: "writing-practice",
  prompt:
    "Tulis daily update singkat dalam bahasa Inggris. Jelaskan apa yang kamu selesaikan kemarin, apa yang sedang kamu kerjakan hari ini, dan satu blocker jika ada.",
  placeholder:
    "Yesterday I finished...\nToday I am working on...\nOne blocker is...",
  minimumCharacters: 80,
  modelAnswer:
    "Yesterday I finished the login page and fixed the navbar bug. Today I am working on the dashboard filters. One blocker is that I need the final API response format from the backend team.",
  checklist: [
    "Menyebutkan progress kemarin",
    "Menyebutkan fokus hari ini",
    "Menyebutkan satu blocker jika ada",
    "Menggunakan kalimat English yang jelas dan profesional"
  ]
}
```

## Quiz Block

A quiz block appears inside the lesson.

```ts
export type QuizBlock = {
  id: string;
  type: "quiz";
  quizId: string;
};
```

Example:

```ts
{
  id: "html-semantic-quiz-block",
  type: "quiz",
  quizId: "html-semantic-quiz"
}
```

## Summary Block

Used at the end of a lesson.

```ts
export type SummaryBlock = {
  id: string;
  type: "summary";
  points: string[];
};
```

Example:

```ts
{
  id: "html-semantic-summary",
  type: "summary",
  points: [
    "Semantic HTML membuat struktur halaman lebih jelas.",
    "Pilih elemen HTML berdasarkan makna dan fungsinya, bukan hanya tampilannya.",
    "HTML yang baik membantu accessibility dan membuat kode lebih mudah dirawat."
  ]
}
```

## Quiz Model

A quiz contains multiple questions.

```ts
export type Quiz = {
  id: string;
  lessonId: string;
  title: string;
  passingScore: number;
  questions: QuizQuestion[];
};
```

Supported question types:

```ts
export type QuizQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | CodeOutputQuestion;
```

## Multiple Choice Question

```ts
export type MultipleChoiceQuestion = {
  id: string;
  type: "multiple-choice";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};
```

Example:

```ts
{
  id: "q1",
  type: "multiple-choice",
  question: "Elemen mana yang paling tepat untuk tombol yang menjalankan aksi?",
  options: ["div", "span", "button", "section"],
  correctAnswer: "button",
  explanation:
    "Gunakan button untuk aksi interaktif karena elemen ini sudah mendukung keyboard navigation secara default."
}
```

## True or False Question

```ts
export type TrueFalseQuestion = {
  id: string;
  type: "true-false";
  question: string;
  correctAnswer: boolean;
  explanation: string;
};
```

Example:

```ts
{
  id: "q2",
  type: "true-false",
  question: "Semantic HTML hanya berpengaruh pada tampilan visual halaman.",
  correctAnswer: false,
  explanation:
    "Semantic HTML lebih berkaitan dengan makna struktur halaman, accessibility, dan maintainability, bukan hanya tampilan visual."
}
```

## Fill Blank Question

```ts
export type FillBlankQuestion = {
  id: string;
  type: "fill-blank";
  question: string;
  correctAnswer: string;
  explanation: string;
};
```

Example:

```ts
{
  id: "q3",
  type: "fill-blank",
  question: "Elemen _____ digunakan untuk membungkus konten utama unik dalam halaman.",
  correctAnswer: "main",
  explanation:
    "Elemen main digunakan untuk konten utama yang menjadi fokus utama halaman."
}
```

## Code Output Question

```ts
export type CodeOutputQuestion = {
  id: string;
  type: "code-output";
  question: string;
  code: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};
```

Example:

```ts
{
  id: "q4",
  type: "code-output",
  question: "Apa output dari kode berikut?",
  code: `console.log(typeof null);`,
  options: ["null", "object", "undefined", "boolean"],
  correctAnswer: "object",
  explanation:
    "Di JavaScript, typeof null menghasilkan 'object'. Ini adalah perilaku lama JavaScript yang masih dipertahankan demi backward compatibility."
}
```

## Coding Challenge Model

A coding challenge is used by coding-practice blocks.

For MVP, coding challenges should support HTML, CSS, and JavaScript in the browser.

```ts
export type CodingChallenge = {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  instructions: string[];
  starterCode: {
    html: string;
    css: string;
    js: string;
  };
  solutionCode?: {
    html: string;
    css: string;
    js: string;
  };
  checklist: string[];
  skillTags: string[];
};
```

Example:

```ts
export const flexboxNavbarChallenge: CodingChallenge = {
  id: "build-flexbox-navbar",
  lessonId: "build-navbar-with-flexbox",
  title: "Membuat responsive navbar",
  description:
    "Latih penggunaan Flexbox dengan membuat navbar sederhana: logo di kiri dan navigation links di kanan.",
  instructions: [
    "Gunakan display: flex pada container navbar.",
    "Letakkan logo di sisi kiri.",
    "Letakkan navigation links di sisi kanan.",
    "Tambahkan spacing antar link.",
    "Pastikan layout tetap terbaca di layar kecil."
  ],
  starterCode: {
    html: `<nav class="navbar">
  <div class="logo">FluentStack</div>
  <div class="links">
    <a href="#">Home</a>
    <a href="#">Lessons</a>
    <a href="#">Profile</a>
  </div>
</nav>`,
    css: `.navbar {
  /* Tambahkan style flexbox di sini */
}

.links {
  /* Tambahkan spacing di sini */
}`,
    js: ""
  },
  solutionCode: {
    html: `<nav class="navbar">
  <div class="logo">FluentStack</div>
  <div class="links">
    <a href="#">Home</a>
    <a href="#">Lessons</a>
    <a href="#">Profile</a>
  </div>
</nav>`,
    css: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 16px;
}

.links {
  display: flex;
  gap: 16px;
}`,
    js: ""
  },
  checklist: [
    "Navbar menggunakan display: flex",
    "Logo berada di sisi kiri",
    "Links berada di sisi kanan",
    "Links punya spacing yang jelas",
    "Layout tetap terbaca di layar kecil"
  ],
  skillTags: ["CSS", "Flexbox", "Responsive Design"]
};
```

## User Progress Model

Progress has two possible storage modes:

1. localStorage for guest users
2. Supabase for logged-in users

Recommended client-side shape:

```ts
export type UserProgress = {
  completedBlockIds: string[];
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  challengeProgress: Record<string, ChallengeProgress>;
  writingDrafts: Record<string, string>;
  totalXp: number;
  lastActivityDate?: string;
  streakCount: number;
};
```

## Challenge Progress Model

```ts
export type ChallengeProgress = {
  challengeId: string;
  isCompleted: boolean;
  savedCode: {
    html: string;
    css: string;
    js: string;
  };
  completedChecklistItems: string[];
};
```

## Supabase Database Model

Use Supabase for logged-in user data.

Recommended tables:

```txt
profiles
lesson_progress
quiz_attempts
challenge_progress
writing_drafts
user_stats
```

## profiles

Stores user profile data.

Recommended columns:

```txt
id uuid primary key references auth.users(id)
full_name text
avatar_url text
created_at timestamp with time zone
updated_at timestamp with time zone
```

## lesson_progress

Stores lesson progress per user.

Recommended columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
lesson_id text
completed_block_ids jsonb
progress_percent integer
is_completed boolean
created_at timestamp with time zone
updated_at timestamp with time zone
```

Recommended unique constraint:

```txt
unique(user_id, lesson_id)
```

## quiz_attempts

Stores quiz attempt history.

Recommended columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
quiz_id text
lesson_id text
score integer
answers jsonb
passed boolean
created_at timestamp with time zone
```

## challenge_progress

Stores coding challenge progress.

Recommended columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
challenge_id text
lesson_id text
saved_code jsonb
completed_checklist_items jsonb
is_completed boolean
created_at timestamp with time zone
updated_at timestamp with time zone
```

Recommended unique constraint:

```txt
unique(user_id, challenge_id)
```

## writing_drafts

Stores writing practice drafts.

Recommended columns:

```txt
id uuid primary key
user_id uuid references auth.users(id)
lesson_id text
block_id text
content text
is_completed boolean
created_at timestamp with time zone
updated_at timestamp with time zone
```

Recommended unique constraint:

```txt
unique(user_id, block_id)
```

## user_stats

Stores user-level progress stats.

Recommended columns:

```txt
user_id uuid primary key references auth.users(id)
total_xp integer
streak_count integer
last_activity_date date
created_at timestamp with time zone
updated_at timestamp with time zone
```

## Row Level Security Rules

All user-specific tables must use Row Level Security.

Basic rule:

```txt
Users can only read, insert, update, and delete their own data.
```

Do not expose one user's progress to another user.

## Content Rules

* Do not hardcode lesson pages.
* Lesson pages should render dynamically from lesson data.
* Practice and quiz should be part of lesson blocks.
* Every important lesson should include at least one active learning block when useful.
* Not every lesson needs coding practice.
* Not every lesson needs a quiz.
* English lessons should use writing practice more often than coding practice.
* Frontend lessons should use coding practice when the topic benefits from hands-on work.
* Content should be easy to migrate to a database or CMS later.
* Frontend Engineering content should use Bahasa Indonesia as the main explanation language.
* English for Tech Careers content should use bilingual format.
* Common technical terms may remain in English when that is clearer and more natural.
* Do not translate common programming terms awkwardly.
