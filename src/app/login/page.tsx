import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = await getSupabaseServerClient();

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      redirect("/dashboard");
    }
  }

  return (
    <AppShell title="Login">
      <div className="mx-auto flex min-h-[65vh] max-w-[1440px] items-center justify-center">
        <AuthCard
          title="Masuk ke akun kamu"
          description="Gunakan akun untuk menyimpan progres lintas device. Kamu tetap bisa belajar sebagai guest tanpa login."
          footerText="Belum punya akun?"
          footerLinkLabel="Daftar"
          footerLinkHref="/register"
        >
          <LoginForm />
        </AuthCard>
      </div>
    </AppShell>
  );
}
