import React, { useState, useEffect } from "react";
import { SunMedium, Moon } from "lucide-react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    // fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Set data-theme attribute on html
    document.documentElement.setAttribute("data-theme", theme);
    // Save choice
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-full hover:bg-base-200 transition"
    >
      {theme === "light" ? <Moon /> : <SunMedium />}
    </div>
  );
};

export default ThemeToggler;
