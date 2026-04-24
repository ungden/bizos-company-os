function parseBool(value: string | undefined, fallback = false) {
  if (value == null) return fallback;
  return value === "1" || value.toLowerCase() === "true";
}

export const appEnv = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  demoMode: parseBool(process.env.DEMO_MODE, false),
  requireSupabase: parseBool(process.env.REQUIRE_SUPABASE, false),
  nodeEnv: process.env.NODE_ENV ?? "development",
} as const;

export function hasSupabaseEnv() {
  return Boolean(appEnv.supabaseUrl && appEnv.supabaseAnonKey);
}

export function isDemoMode() {
  return appEnv.demoMode || !hasSupabaseEnv();
}

export function isBuildTime() {
  return process.env.NEXT_PHASE === "phase-production-build";
}

export function shouldUseDemoData() {
  return isDemoMode() || !hasSupabaseEnv();
}

export function getHealthSnapshot() {
  return {
    demoMode: isDemoMode(),
    explicitDemoMode: appEnv.demoMode,
    hasSupabaseEnv: hasSupabaseEnv(),
    hasServiceRole: Boolean(appEnv.supabaseServiceRoleKey),
    nodeEnv: appEnv.nodeEnv,
  };
}
