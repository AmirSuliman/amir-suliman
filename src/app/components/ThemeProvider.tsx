"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "theme-preference";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Load initial theme (localStorage or system preference)
  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialTheme = stored ?? (systemPrefersDark ? "dark" : "light");
      setTheme(initialTheme);

      // Apply immediately
      const root = document.documentElement;
      if (initialTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      root.style.colorScheme = initialTheme;
    } catch (error) {
      console.error("Error loading theme:", error);
    }
  }, []);

  // Watch OS theme changes in real time
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  // Apply theme to <html> & save to localStorage
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Remove both classes first to ensure clean state
    root.classList.remove("light", "dark");

    // Add the current theme class
    root.classList.add(theme);

    // Set color scheme for native elements
    root.style.colorScheme = theme;

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  // Prevents hydration mismatch & flicker
  if (!mounted) {
    return (
      <ThemeContext.Provider value={value}>
        <div className="opacity-0 transition-opacity duration-300">
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Hook
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
