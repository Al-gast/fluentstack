export const THEME_STORAGE_KEY = "fluentstack-theme-mode";
export const THEME_CHANGE_EVENT = "fluentstack-theme-change";
export const DEFAULT_THEME_MODE = "dark";
export const THEME_MODES = ["dark", "light", "paper"] as const;

export type ThemeMode = (typeof THEME_MODES)[number];

export function isThemeMode(value: unknown): value is ThemeMode {
  return typeof value === "string" && THEME_MODES.includes(value as ThemeMode);
}

export function getThemeInitScript() {
  const modes = JSON.stringify(THEME_MODES);
  const storageKey = JSON.stringify(THEME_STORAGE_KEY);
  const defaultMode = JSON.stringify(DEFAULT_THEME_MODE);

  return `
(function () {
  try {
    var modes = ${modes};
    var storageKey = ${storageKey};
    var defaultMode = ${defaultMode};
    var root = document.documentElement;
    var storedMode = window.localStorage.getItem(storageKey);
    var mode = modes.indexOf(storedMode) >= 0 ? storedMode : defaultMode;

    for (var index = 0; index < modes.length; index += 1) {
      root.classList.remove(modes[index]);
    }

    root.classList.add(mode);
    root.dataset.theme = mode;
    root.style.colorScheme = mode === "dark" ? "dark" : "light";
  } catch (error) {
    document.documentElement.classList.add(${defaultMode});
    document.documentElement.dataset.theme = ${defaultMode};
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;
}
