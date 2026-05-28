import { modules } from "@/content/modules";
import type { Module } from "@/types/learning";

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((moduleItem) => moduleItem.slug === slug);
}
