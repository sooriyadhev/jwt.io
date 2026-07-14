import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

const ThemeContext = createContext(undefined);

const STORAGE_KEY = "jwt-debugger-theme";
const THEMES = ["system", "light", "dark"];

function getSystemTheme() {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function readStoredPreference() {
  if (typeof window === "undefined") return "system";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function applyResolvedTheme(resolved) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", resolved);
  }
}

export function ThemeProvider({ children }) {
  const [preference, setPreferenceState] = useState(readStoredPreference);
  // Tracks only the OS-level scheme; unrelated to the user's explicit choice.
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  // The actual theme to render is always a pure function of the two
  // pieces of state above, so it's derived at render time rather than
  // mirrored into its own state.
  const resolvedTheme = preference === "system" ? systemTheme : preference;

  // Subscribe to OS-level theme changes for as long as the provider lives.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia("(prefers-color-scheme: light)");

    const handleChange = (event) => {
      setSystemTheme(event.matches ? "light" : "dark");
    };

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Sync the resolved theme to the DOM (an external system) whenever it changes.
  useEffect(() => {
    applyResolvedTheme(resolvedTheme);
  }, [resolvedTheme]);

  const setPreference = useCallback((value) => {
    if (!THEMES.includes(value)) return;
    setPreferenceState(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage may be unavailable (private mode, disabled storage) — fail silently.
    }
  }, []);

  const value = useMemo(
    () => ({ preference, resolvedTheme, setPreference }),
    [preference, resolvedTheme, setPreference]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
