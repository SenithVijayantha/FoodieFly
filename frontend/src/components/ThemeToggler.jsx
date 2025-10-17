import React, { useState, useEffect } from "react";
import { SunMedium, Moon } from "lucide-react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTheme = window.localStorage.getItem("theme");
    if (typeof storedTheme === "string" && (storedTheme === "light" || storedTheme === "dark")) {
      return storedTheme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light"; // default theme
};


const ThemeToggler = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
      {theme === "light" ? <Moon /> : <SunMedium />}
    </button>
  );
};

export default ThemeToggler;
