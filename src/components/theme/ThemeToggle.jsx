import { useState, useEffect } from "react";
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // when the page loads, check localStorage for the theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // no theme in localStorage so set based on system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDark(false);
      }
    }
  }, []);

  const toggleDark = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      type="button"
      onClick={toggleDark}
      className="p-2 rounded-2xl bg-[#F5F5FF] dark:bg-[#3F2F70] transition mr-1"
      aria-label="Toggle dark mode"
    >
      <img
        src={isDark ? SunIcon : MoonIcon}
        alt={isDark ? "Light mode" : "Dark mode"}
        className="w-6 h-6"
      />
    </button>
  );
};

export default ThemeToggle;
