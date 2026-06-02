import type { Module } from "@/types/learning";

export const webFoundationsModule: Module = {
  id: "web-foundations",
  trackId: "frontend-engineering",
  title: "Web Foundations",
  slug: "web-foundations",
  description:
    "Pahami apa itu website, cara web page dimuat, peran HTML/CSS/JavaScript, dan file dasar di project frontend kecil.",
  order: 1,
  lessonIds: [
    "what-is-website-and-web-page",
    "how-web-page-loads",
    "what-are-html-css-javascript",
    "html-css-js-roles",
    "index-css-js-files",
    "small-frontend-project-structure",
    "web-foundations-assessment",
  ],
  estimatedHours: 12,
  skillTags: ["Web Fundamentals", "Browser", "HTML", "CSS", "JavaScript"],
};

export const htmlBasicsModule: Module = {
  id: "html-basics",
  trackId: "frontend-engineering",
  title: "HTML Basics",
  slug: "html-basics",
  description:
    "Belajar struktur dasar halaman HTML, tag, element, attribute, dan konten dasar halaman.",
  order: 2,
  lessonIds: [
    "html-basic-structure",
    "tag-element-attribute",
    "headings-paragraphs-links-images",
    "relative-paths-basic",
    "html-basics-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["HTML", "Web Fundamentals"],
};

export const semanticHtmlModule: Module = {
  id: "semantic-html",
  trackId: "frontend-engineering",
  title: "Semantic HTML",
  slug: "semantic-html",
  description:
    "Belajar memilih elemen HTML berdasarkan makna dan struktur halaman.",
  order: 3,
  lessonIds: ["semantic-html-structure", "html-semantic-basics", "semantic-html-assessment"],
  estimatedHours: 5,
  skillTags: ["HTML", "Semantic HTML", "Accessibility"],
};

export const formsBasicAccessibilityModule: Module = {
  id: "forms-basic-accessibility",
  trackId: "frontend-engineering",
  title: "Forms and Basic Accessibility",
  slug: "forms-basic-accessibility",
  description:
    "Belajar dasar form, link vs button, label, input, alt text, dan aksesibilitas awal.",
  order: 4,
  lessonIds: [
    "link-vs-button",
    "form-label-input",
    "textarea-select-required-fields",
    "alt-text-basic",
    "keyboard-navigation-basic",
    "basic-accessibility-checklist",
    "forms-basic-accessibility-assessment",
  ],
  estimatedHours: 8,
  skillTags: ["HTML", "Forms", "Accessibility"],
};

export const cssCoreMechanicsModule: Module = {
  id: "css-core-mechanics",
  trackId: "frontend-engineering",
  title: "CSS Core Mechanics",
  slug: "css-core-mechanics",
  description:
    "Pelajari cara CSS memberi tampilan pada HTML melalui selector, property, value, cascade, dan specificity dasar.",
  order: 5,
  lessonIds: [
    "what-is-css",
    "css-selector-declaration-basic",
    "cascade-specificity-basic",
    "css-core-mechanics-assessment",
  ],
  estimatedHours: 3,
  skillTags: ["CSS", "Selectors", "Cascade", "Specificity"],
};

export const boxModelSpacingModule: Module = {
  id: "box-model-spacing",
  trackId: "frontend-engineering",
  title: "Box Model and Spacing",
  slug: "box-model-spacing",
  description:
    "Pelajari box model, padding, margin, border, width, height, max-width, dan box-sizing untuk membuat elemen lebih rapi dan mudah dibaca.",
  order: 6,
  lessonIds: [
    "css-box-model-basic",
    "css-padding-margin-basic",
    "css-border-width-basic",
    "box-model-spacing-assessment",
  ],
  estimatedHours: 3,
  skillTags: ["CSS", "Box Model", "Spacing", "Box Sizing"],
};

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

export const flexboxGridLayoutModule: Module = {
  id: "flexbox-grid-layout",
  trackId: "frontend-engineering",
  title: "Flexbox and Grid Layout",
  slug: "flexbox-grid-layout",
  description:
    "Pelajari cara menyusun elemen menggunakan Flexbox dan Grid untuk membuat navbar, layout sederhana, dan card grid.",
  order: 8,
  lessonIds: [
    "css-flexbox-basic",
    "build-navbar-with-flexbox",
    "css-grid-basic",
    "flexbox-vs-grid-decision",
    "flexbox-grid-layout-assessment",
  ],
  estimatedHours: 4,
  skillTags: ["CSS", "Flexbox", "Grid", "Layout"],
};

export const responsiveVisualSystemModule: Module = {
  id: "responsive-visual-system",
  trackId: "frontend-engineering",
  title: "Responsive Visual System",
  slug: "responsive-visual-system",
  description:
    "Pelajari mobile-first CSS, breakpoint dasar, fluid spacing, typography, CSS variables, dan dark mode dasar.",
  order: 9,
  lessonIds: [
    "mobile-first-css",
    "css-breakpoints-basic",
    "fluid-spacing-typography-basic",
    "css-variables-dark-mode-basic",
    "responsive-visual-system-assessment",
  ],
  estimatedHours: 4,
  skillTags: ["CSS", "Responsive Design", "Visual System", "Dark Mode"],
};

export const englishForRemoteWorkModule: Module = {
  id: "english-for-remote-work",
  trackId: "english-for-tech-careers",
  title: "English for Remote Work",
  slug: "english-for-remote-work",
  description:
    "Latih daily update dan komunikasi tertulis yang jelas untuk kerja remote.",
  order: 1,
  lessonIds: ["writing-daily-update"],
  estimatedHours: 5,
  skillTags: ["Technical English", "Remote Communication", "Writing"],
};

export const modules: Module[] = [
  webFoundationsModule,
  htmlBasicsModule,
  semanticHtmlModule,
  formsBasicAccessibilityModule,
  cssCoreMechanicsModule,
  boxModelSpacingModule,
  localStaticWebsiteProjectModule,
  flexboxGridLayoutModule,
  responsiveVisualSystemModule,
  englishForRemoteWorkModule,
];
