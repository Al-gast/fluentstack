export type CurriculumLevel = {
  trackId: string;
  level: number;
  title: string;
  description: string;
  moduleIds: string[];
};

export const frontendCurriculumLevels: CurriculumLevel[] = [
  {
    trackId: "frontend-engineering",
    level: 1,
    title: "Web Foundations",
    description:
      "Memahami cara kerja web, browser, website, dan alur belajar frontend.",
    moduleIds: ["web-foundations"],
  },
  {
    trackId: "frontend-engineering",
    level: 2,
    title: "HTML and Accessibility Foundations",
    description:
      "Membangun struktur halaman web yang semantic, accessible, dan siap diberi style.",
    moduleIds: ["html-basics", "semantic-html", "forms-basic-accessibility"],
  },
  {
    trackId: "frontend-engineering",
    level: 3,
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
];

export const curriculumLevelsByTrackId: Record<string, CurriculumLevel[]> = {
  "frontend-engineering": frontendCurriculumLevels,
};
