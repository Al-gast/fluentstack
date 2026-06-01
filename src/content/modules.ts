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
  ],
  estimatedHours: 12,
  skillTags: ["Web Fundamentals", "Browser", "HTML", "CSS", "JavaScript"],
};

export const htmlWebFundamentalsModule: Module = {
  id: "html-web-fundamentals",
  trackId: "frontend-engineering",
  title: "HTML & Web Fundamentals",
  slug: "html-web-fundamentals",
  description:
    "Tulis struktur HTML dasar, pahami tag, element, attribute, dan gunakan semantic HTML dengan lebih tepat.",
  order: 2,
  lessonIds: [
    "html-basic-structure",
    "tag-element-attribute",
    "semantic-html-structure",
    "html-semantic-basics",
  ],
  estimatedHours: 10,
  skillTags: ["HTML", "Web Fundamentals", "Accessibility"],
};

export const cssFundamentalsModule: Module = {
  id: "css-fundamentals",
  trackId: "frontend-engineering",
  title: "CSS Fundamentals",
  slug: "css-fundamentals",
  description:
    "Pelajari layout CSS modern dan praktikkan Flexbox lewat komponen UI sehari-hari.",
  order: 3,
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
  htmlWebFundamentalsModule,
  cssFundamentalsModule,
  englishForRemoteWorkModule,
];
