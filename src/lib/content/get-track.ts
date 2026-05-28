import { tracks } from "@/content/tracks";
import type { Track } from "@/types/learning";

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((track) => track.slug === slug);
}
