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
    moduleIds: [
      "local-tooling-npm-basics",
      "typescript-core-types",
      "typescript-practical-type-design",
      "typescript-typed-frontend-boundaries",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 7,
    stage: "intermediate",
    title: "React Fundamentals",
    description:
      "Membangun UI interaktif dengan component, JSX, props, state, events, lists, forms, dan workflow React lokal secara bertahap.",
    moduleIds: [
      "react-component-model",
      "react-state-events-rendering",
      "react-forms-composition",
      "local-react-app",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 8,
    stage: "intermediate",
    title: "React Intermediate",
    description:
      "Mengorganisasi behavior React dengan effects, custom hooks, cleanup browser subscription, dan keputusan state yang lebih terarah.",
    moduleIds: ["react-custom-hooks-effects", "react-state-strategy", "react-reusable-ui-states"],
  },
  {
    trackId: "frontend-engineering",
    level: 9,
    stage: "advanced",
    title: "React Advanced",
    description:
      "Membangun UI React yang resilient, terukur, dan reusable lewat recovery, performance judgment, serta composition yang tidak over-engineered.",
    moduleIds: [
      "react-resilience-suspense-basics",
      "react-performance-awareness",
      "react-advanced-component-patterns",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 10,
    stage: "advanced",
    title: "Next.js App Router",
    description:
      "Membawa pola React ke struktur aplikasi melalui App Router, route structure, serta batas Server Components dan Client Components yang jelas.",
    moduleIds: [
      "nextjs-app-directory-routing",
      "nextjs-server-client-components",
      "nextjs-route-behavior",
      "local-nextjs-app",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 11,
    stage: "advanced",
    title: "Production Next.js",
    description:
      "Menghubungkan Next.js app ke workflow production lewat authentication-aware UI, data persistence, deployment, dan debugging yang aman.",
    moduleIds: [
      "nextjs-authentication-session-aware-ui",
      "nextjs-supabase-backend-integration",
      "nextjs-production-operations",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 12,
    stage: "advanced",
    title: "Forms, Validation, and Data Fetching",
    description:
      "Membangun flow form produk lewat schema validation, error yang jelas, submit state, dan keputusan data yang bertahap.",
    moduleIds: [
      "react-hook-form-zod",
      "validation-ux-accessible-errors",
      "server-state-thinking",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 13,
    stage: "advanced",
    title: "Testing",
    description:
      "Menguji behavior frontend penting lewat unit test, component test, user interaction, dan accessible query tanpa bergantung pada implementation detail.",
    moduleIds: [
      "unit-component-testing",
      "integration-api-mocking",
      "e2e-testing-strategy",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 14,
    stage: "advanced",
    title: "Performance",
    description:
      "Mengukur dan mengurangi biaya performance nyata lewat Core Web Vitals, asset cost, bundle awareness, serta rendering decisions yang terarah.",
    moduleIds: [
      "core-web-vitals",
      "asset-bundle-optimization",
      "rendering-cost-hydration",
    ],
  },
  {
    trackId: "frontend-engineering",
    level: 15,
    stage: "advanced",
    title: "Accessibility",
    description:
      "Membangun dan mengaudit UI yang tetap dapat dipahami serta dioperasikan dengan keyboard, semantic HTML, dan focus feedback yang jelas.",
    moduleIds: ["semantic-review-keyboard-navigation", "accessible-components"],
  },
];
