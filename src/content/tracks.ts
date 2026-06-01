import type { Track } from "@/types/learning";

export const frontendEngineeringTrack: Track = {
  id: "frontend-engineering",
  title: "Frontend Engineering",
  slug: "frontend-engineering",
  description:
    "Belajar fondasi frontend lewat lesson, quiz, dan coding practice yang langsung bisa dicoba.",
  level: "beginner",
  estimatedHours: 88,
  moduleIds: ["web-foundations", "html-web-fundamentals", "css-fundamentals"],
  skillTags: ["HTML", "CSS", "JavaScript", "Frontend"],
};

export const englishForTechCareersTrack: Track = {
  id: "english-for-tech-careers",
  title: "English for Tech Careers",
  slug: "english-for-tech-careers",
  description:
    "Latih English untuk kerja tech: daily update, bug explanation, PR notes, dan komunikasi remote.",
  level: "beginner",
  estimatedHours: 40,
  moduleIds: ["english-for-remote-work"],
  skillTags: ["Technical English", "Remote Communication", "Writing"],
};

export const tracks: Track[] = [frontendEngineeringTrack, englishForTechCareersTrack];
