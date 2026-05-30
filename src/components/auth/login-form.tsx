"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getSupabaseClient } from "@/lib/supabase/client";

function getAuthErrorMessage(message: string) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("invalid login credentials")) {
    return "Login gagal. Cek email dan password kamu.";
  }

  if (lowerMessage.includes("email not confirmed")) {
    return "Email belum dikonfirmasi. Cek inbox kamu dulu.";
  }

  return message;
}

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const supabase = getSupabaseClient();

    if (!supabase) {
      setIsSubmitting(false);
      setErrorMessage(
        "Supabase belum terhubung. Cek NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      );
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsSubmitting(false);

    if (error) {
      setErrorMessage(getAuthErrorMessage(error.message));
      return;
    }

    router.replace("/dashboard");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="login-email" className="text-sm font-medium text-zinc-200">
          Email
        </label>
        <Input
          id="login-email"
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
        <label htmlFor="login-password" className="text-sm font-medium text-zinc-200">
          Password
        </label>
        <Input
          id="login-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Masukkan password"
          required
          autoComplete="current-password"
          className="h-10"
        />
      </div>

      {errorMessage ? (
        <p className="rounded-lg border border-rose-300/35 bg-rose-500/10 px-3 py-2 text-sm text-rose-100">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Masuk..." : "Masuk"}
      </Button>
    </form>
  );
}
