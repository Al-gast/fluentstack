import type { Module } from "@/types/learning";

export const htmlWebFundamentalsModule: Module = {
  id: "html-web-fundamentals",
  trackId: "frontend-engineering",
  title: "HTML & Web Fundamentals",
  slug: "html-web-fundamentals",
  description:
    "Pahami struktur halaman web dan cara browser membaca HTML.",
  order: 1,
  lessonIds: ["html-semantic-basics"],
  estimatedHours: 6,
  skillTags: ["HTML", "Web Fundamentals", "Accessibility"],
};

export const cssFundamentalsModule: Module = {
  id: "css-fundamentals",
  trackId: "frontend-engineering",
  title: "CSS Fundamentals",
  slug: "css-fundamentals",
  description:
    "Pelajari layout CSS modern dan praktikkan Flexbox lewat komponen UI sehari-hari.",
  order: 2,
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
  htmlWebFundamentalsModule,
  cssFundamentalsModule,
  englishForRemoteWorkModule,
];
