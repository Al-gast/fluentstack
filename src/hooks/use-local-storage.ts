"use client";

import { useCallback, useSyncExternalStore } from "react";

function buildEventName(key: string) {
  return `fluentstack:local-storage:${key}`;
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const readValue = useCallback((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initialValue;
    } catch {
      return initialValue;
    }
  }, [initialValue, key]);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (typeof window === "undefined") {
        return () => {};
      }

      const eventName = buildEventName(key);

      const handleStorage = (event: StorageEvent) => {
        if (event.key === key) {
          onStoreChange();
        }
      };

      const handleCustom = () => {
        onStoreChange();
      };

      window.addEventListener("storage", handleStorage);
      window.addEventListener(eventName, handleCustom);

      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(eventName, handleCustom);
      };
    },
    [key],
  );

  const value = useSyncExternalStore(subscribe, readValue, () => initialValue);

  const setStoredValue = useCallback(
    (nextValue: T | ((prev: T) => T)) => {
      if (typeof window === "undefined") {
        return;
      }

      const previousValue = readValue();
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (prev: T) => T)(previousValue)
          : nextValue;

      try {
        window.localStorage.setItem(key, JSON.stringify(resolvedValue));
      } catch {
        // Ignore write failures in MVP.
      }

      window.dispatchEvent(new Event(buildEventName(key)));
    },
    [key, readValue],
  );

  return [value, setStoredValue] as const;
}
