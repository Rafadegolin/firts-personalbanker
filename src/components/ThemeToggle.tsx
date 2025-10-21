"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Verifica o tema salvo ou preferência do sistema
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-card border border-border/60 shadow-elegant hover:shadow-premium transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label={`Alternar para modo ${
        theme === "light" ? "escuro" : "claro"
      }`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-foreground group-hover:text-first-yellow transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;
