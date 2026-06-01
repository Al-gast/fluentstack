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

// Hidden from the active Frontend track until its first lessons are created.
export const formsBasicAccessibilityModule: Module = {
  id: "forms-basic-accessibility",
  trackId: "frontend-engineering",
  title: "Forms and Basic Accessibility",
  slug: "forms-basic-accessibility",
  description:
    "Belajar dasar form, link vs button, label, input, alt text, dan aksesibilitas awal.",
  order: 4,
  lessonIds: [],
  estimatedHours: 8,
  skillTags: ["HTML", "Forms", "Accessibility"],
};

// Legacy module kept so old module slugs do not disappear abruptly.
// It is not linked from frontendEngineeringTrack.moduleIds.
export const htmlWebFundamentalsModule: Module = {
  id: "html-web-fundamentals",
  trackId: "frontend-engineering",
  title: "HTML & Web Fundamentals",
  slug: "html-web-fundamentals",
  description:
    "Tulis struktur HTML dasar, pahami tag, element, attribute, dan gunakan semantic HTML dengan lebih tepat.",
  order: 99,
  lessonIds: [],
  estimatedHours: 10,
  skillTags: ["HTML", "Web Fundamentals", "Accessibility"],
};

// Retained from earlier MVP/prototype content. It will be rebuilt before becoming active again.
export const cssFundamentalsModule: Module = {
  id: "css-fundamentals",
  trackId: "frontend-engineering",
  title: "CSS Fundamentals",
  slug: "css-fundamentals",
  description:
    "Pelajari layout CSS modern dan praktikkan Flexbox lewat komponen UI sehari-hari.",
  order: 5,
  lessonIds: ["css-flexbox-basics"],
  estimatedHours: 8,
  skillTags: ["CSS", "Flexbox", "Responsive Design"],
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
  htmlWebFundamentalsModule,
  cssFundamentalsModule,
  englishForRemoteWorkModule,
];
