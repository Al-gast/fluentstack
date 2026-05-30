import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { AuthCard } from "@/components/auth/auth-card";
import { RegisterForm } from "@/components/auth/register-form";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function RegisterPage() {
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
    <AppShell title="Register">
      <div className="mx-auto flex min-h-[65vh] max-w-[1440px] items-center justify-center">
        <AuthCard
          title="Buat akun FluentStack"
          description="Akun menyimpan progres lintas device. Kalau masih ingin coba dulu, kamu bisa lanjut sebagai guest."
          footerText="Sudah punya akun?"
          footerLinkLabel="Masuk"
          footerLinkHref="/login"
        >
          <RegisterForm />
        </AuthCard>
      </div>
    </AppShell>
  );
}
