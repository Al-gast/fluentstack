"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getSupabaseClient } from "@/lib/supabase/client";

export function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    const supabase = getSupabaseClient();

    if (!supabase) {
      setIsSubmitting(false);
      setErrorMessage(
        "Konfigurasi Supabase belum tersedia. Cek NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      );
      return;
    }

    const emailRedirectTo = `${window.location.origin}/dashboard`;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo },
    });

    setIsSubmitting(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (data.session) {
      router.replace("/dashboard");
      router.refresh();
      return;
    }

    setSuccessMessage("Registrasi berhasil. Cek inbox email kamu untuk konfirmasi akun.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="register-email" className="text-sm font-medium text-zinc-200">
          Email
        </label>
        <Input
          id="register-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="kamu@email.com"
          required
          autoComplete="email"
          className="h-10"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="register-password" className="text-sm font-medium text-zinc-200">
          Password
        </label>
        <Input
          id="register-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Minimal 6 karakter"
          required
          minLength={6}
          autoComplete="new-password"
          className="h-10"
        />
      </div>

      {errorMessage ? (
        <p className="rounded-lg border border-rose-300/35 bg-rose-500/10 px-3 py-2 text-sm text-rose-100">
          {errorMessage}
        </p>
      ) : null}

      {successMessage ? (
        <p className="rounded-lg border border-emerald-300/35 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100">
          {successMessage}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="h-10 w-full bg-cyan-400 text-zinc-950 hover:bg-cyan-300">
        {isSubmitting ? "Sedang daftar..." : "Daftar"}
      </Button>
    </form>
  );
}
