// src/lib/scripts.public.js
import { supabasePublic } from "./supabasePublic";

/**
 * PUBLIC: fetch enabled scripts only
 * - No console logs
 * - Throws on error (so you can catch in injector)
 */
export async function listEnabledScripts() {
  const { data, error } = await supabasePublic
    .from("scripts")
    .select("id, name, location, code, enabled, updated_at")
    .eq("enabled", true)
    .order("updated_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

/**
 * OPTIONAL: realtime refresh when scripts change
 * - No console logs
 * - Disable in dev to avoid websocket noise
 */
export function subscribeEnabledScripts(onChange) {
  // Disable realtime in dev (prevents websocket warning spam)
  if (import.meta.env.DEV) {
    return () => {};
  }

  const channel = supabasePublic
    .channel("scripts-public-realtime")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "scripts" },
      () => onChange?.()
    )
    .subscribe();

  return () => {
    supabasePublic.removeChannel(channel);
  };
}
