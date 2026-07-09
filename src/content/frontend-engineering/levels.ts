import type { CurriculumLevel } from "@/content/curriculum-levels";

export const frontendCurriculumLevels: CurriculumLevel[] = [
  {
    trackId: "frontend-engineering",
    level: 1,
    stage: "beginner",
    title: "Web Foundations",
    description:
      "Memahami cara kerja web, browser, website, dan alur belajar frontend.",
    moduleIds: ["web-foundations"],
  },
  {
    trackId: "frontend-engineering",
    level: 2,
    stage: "beginner",
    title: "HTML and Accessibility Foundations",
    description:
      "Membangun struktur halaman web yang semantic, accessible, dan siap diberi style.",
    moduleIds: ["html-basics", "semantic-html", "forms-basic-accessibility"],
  },
  {
    trackId: "frontend-engineering",
    level: 3,
    stage: "beginner",
    title: "CSS Fundamentals and Layout",
    description:
      "Membuat tampilan web yang rapi, responsive, dan siap dipakai untuk project lokal.",
    moduleIds: [
      "css-core-mechanics",
      "box-model-spacing",
      "local-static-website-project",
      "flexbox-grid-layout",
      "responsive-visual-system",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 4,
    stage: "beginner",
    title: "JavaScript Fundamentals",
    description:
      "Menambahkan behavior dan data handling dasar lewat values, functions, arrays, objects, DOM, events, forms, storage, fetch, dan project Vanilla JavaScript lokal.",
    moduleIds: [
      "javascript-values-types-functions",
      "javascript-arrays-objects-data-modeling",
      "javascript-dom-events-forms-storage-fetch",
      "local-vanilla-javascript-app",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 5,
    stage: "intermediate",
    title: "JavaScript Advanced",
    description:
      "Mengorganisasi JavaScript dengan scope, closure, module file, async behavior, browser APIs, dan debugging yang lebih terarah.",
    moduleIds: [
      "javascript-scope-closure-modules",
      "javascript-async-error-handling",
      "javascript-browser-apis-data-transformation-debugging",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 6,
    stage: "intermediate",
    title: "TypeScript",
    description:
      "Menggunakan TypeScript untuk membuat kode frontend lebih aman lewat local tooling, core types, dan type boundaries yang praktis.",
    moduleIds: ["local-tooling-npm-basics", "typescript-core-types"],
  },
];
