"use client";
import React, { useEffect, useState } from "react";

export default function ToggleDark() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      title="切换深色/浅色模式"
      className="absolute top-5 right-5 cursor-pointer border-none bg-transparent text-2xl text-slate-900 dark:text-slate-100"
      aria-label="切换深色/浅色模式"
      onClick={toggleTheme}
    >
      🌓
    </button>
  );
}
