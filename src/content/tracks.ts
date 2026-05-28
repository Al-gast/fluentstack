import type { Track } from "@/types/learning";

export const frontendEngineeringTrack: Track = {
  id: "frontend-engineering",
  title: "Frontend Engineering",
  slug: "frontend-engineering",
  description:
    "Belajar fondasi modern frontend development melalui materi terstruktur, quiz, dan praktik langsung.",
  level: "beginner",
  estimatedHours: 80,
  moduleIds: ["html-web-fundamentals", "css-fundamentals"],
  skillTags: ["HTML", "CSS", "JavaScript", "Frontend"],
};

export const englishForTechCareersTrack: Track = {
  id: "english-for-tech-careers",
  title: "English for Tech Careers",
  slug: "english-for-tech-careers",
  description:
    "Latih komunikasi kerja tech dalam bahasa Inggris dengan alur praktik yang relevan untuk kerja remote.",
  level: "beginner",
  estimatedHours: 40,
  moduleIds: ["english-for-remote-work"],
  skillTags: ["Technical English", "Remote Communication", "Writing"],
};

export const tracks: Track[] = [frontendEngineeringTrack, englishForTechCareersTrack];
