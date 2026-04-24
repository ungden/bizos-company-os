import Link from "next/link";
import { login } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { tServer } from "@/lib/i18n/server";
import { isDemoMode } from "@/lib/env";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; registered?: string; error?: string }>;
}) {
  const { next, registered, error } = await searchParams;
  const { t } = await tServer();
  const demoMode = isDemoMode();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-900">{t("common.login")}</h2>
        <p className="text-sm text-zinc-500 mt-1">{t("auth.welcome")}</p>
      </div>

      {registered && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
          {t("auth.registered")}
        </div>
      )}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
      {demoMode && (
        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-3 text-sm text-indigo-700">
          Demo mode đang bật. Không cần đăng nhập, anh có thể vào thẳng{" "}
          <Link href="/dashboard" className="font-medium underline">
            dashboard
          </Link>
          .
        </div>
      )}

      <form action={login} className="space-y-4">
        <input type="hidden" name="next" value={next ?? "/dashboard"} />
        <div className="space-y-1.5">
          <Label htmlFor="email">{t("auth.labelEmail")}</Label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">{t("auth.labelPassword")}</Label>
            <Link href="/reset-password" className="text-xs text-indigo-600 hover:underline">
              {t("auth.forgot")}
            </Link>
          </div>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          {t("common.login")}
        </Button>
      </form>

      <div className="text-center text-sm text-zinc-500">
        {t("auth.noAccount")}{" "}
        <Link href="/signup" className="text-indigo-600 font-medium hover:underline">
          {t("common.signup")}
        </Link>
      </div>
    </div>
  );
}
