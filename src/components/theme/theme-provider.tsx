"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_THEME_MODE,
  THEME_CHANGE_EVENT,
  THEME_MODES,
  THEME_STORAGE_KEY,
  isThemeMode,
  type ThemeMode,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeMode(theme: ThemeMode) {
  const root = document.documentElement;

  for (const mode of THEME_MODES) {
    root.classList.remove(mode);
  }

  root.classList.add(theme);
  root.dataset.theme = theme;
  root.style.colorScheme = theme === "dark" ? "dark" : "light";
}

function getBrowserThemeMode(): ThemeMode {
  try {
    const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (isThemeMode(storedMode)) {
      return storedMode;
    }
  } catch {
    // Fall back to the applied document theme when storage is unavailable.
  }

  const currentMode = document.documentElement.dataset.theme;

  return isThemeMode(currentMode) ? currentMode : DEFAULT_THEME_MODE;
}

function subscribeToThemeMode(onStoreChange: () => void) {
  function handleThemeChange(event: Event) {
    if (event instanceof StorageEvent) {
      if (event.key !== THEME_STORAGE_KEY) {
        return;
      }

      const nextTheme = isThemeMode(event.newValue) ? event.newValue : DEFAULT_THEME_MODE;
      applyThemeMode(nextTheme);
      onStoreChange();
      return;
    }

    const nextTheme = (event as CustomEvent<{ theme?: unknown }>).detail?.theme;

    if (isThemeMode(nextTheme)) {
      applyThemeMode(nextTheme);
    }

    onStoreChange();
  }

  window.addEventListener("storage", handleThemeChange);
  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);

  return () => {
    window.removeEventListener("storage", handleThemeChange);
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  };
}

function getThemeModeSnapshot(): ThemeMode {
  return getBrowserThemeMode();
}

function getThemeModeServerSnapshot(): ThemeMode {
  return DEFAULT_THEME_MODE;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<ThemeMode>(
    subscribeToThemeMode,
    getThemeModeSnapshot,
    getThemeModeServerSnapshot,
  );

  const setThemeMode = useCallback((nextTheme: ThemeMode) => {
    applyThemeMode(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Theme still applies for the current session when storage is unavailable.
    }

    window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { theme: nextTheme } }));
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({ theme, setThemeMode }), [theme, setThemeMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside ThemeProvider");
  }

  return context;
}
