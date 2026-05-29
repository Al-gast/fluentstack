import type { NextRequest } from "next/server";
import { updateSupabaseSession as updateSupabaseProxySession } from "@/lib/supabase/proxy";

// Kept for compatibility with existing imports/docs.
export function updateSupabaseSession(request: NextRequest) {
  return updateSupabaseProxySession(request);
}
