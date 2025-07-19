import { useState } from "react";
import SunIcon from "../assets/icons/sun.svg";
import MoonIcon from "../assets/icons/moon.svg";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-2xl bg-[#F5F5FF] dark:bg-[#3F2F70] transition"
      aria-label="Toggle dark mode"
    >
      <img
        src={isDark ? SunIcon : MoonIcon}
        alt={isDark ? "Dark mode" : "Light mode"}
        className="w-6 h-6"
      />
    </button>
  );
};

export default DarkModeToggle;
