"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) {
        setValue(initialValue);
        return;
      }

      setValue(JSON.parse(raw) as T);
    } catch {
      setValue(initialValue);
    }
  }, [initialValue, key]);

  const setStoredValue = (nextValue: T | ((prev: T) => T)) => {
    setValue((previousValue) => {
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (prev: T) => T)(previousValue)
          : nextValue;

      if (typeof window !== "undefined") {
        try {
          window.localStorage.setItem(key, JSON.stringify(resolvedValue));
        } catch {
          // Keep UI state even when localStorage fails.
        }
      }

      return resolvedValue;
    });
  };

  return [value, setStoredValue] as const;
}
