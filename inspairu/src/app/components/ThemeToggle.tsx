
"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        border: "none",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
