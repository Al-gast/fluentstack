"use client";

import { useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { getSupabaseClient } from "@/lib/supabase/client";

type UseAuthUserResult = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export function useAuthUser(): UseAuthUserResult {
  const supabase = useMemo(() => getSupabaseClient(), []);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!supabase) {
      return;
    }

    let isSubscribed = true;
    const loadingTimer = window.setTimeout(() => {
      if (isSubscribed) {
        setIsLoading(true);
      }
    }, 0);

    void supabase.auth
      .getUser()
      .then(({ data }) => {
        if (isSubscribed) {
          setUser(data.user ?? null);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setUser(null);
          setIsLoading(false);
        }
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      isSubscribed = false;
      window.clearTimeout(loadingTimer);
      subscription.unsubscribe();
    };
  }, [supabase]);

  return {
    user,
    isLoading,
    isAuthenticated: Boolean(user),
  };
}
