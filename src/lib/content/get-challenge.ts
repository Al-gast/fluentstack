import { challenges } from "@/content/challenges";
import type { CodingChallenge } from "@/types/challenge";

export function getChallengeById(id: string): CodingChallenge | undefined {
  return challenges.find((challenge) => challenge.id === id);
}
