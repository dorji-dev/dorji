"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-lg border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-muted"
        aria-label="Loading theme toggle"
        disabled
      >
        <div className="w-4 h-4 animate-pulse bg-muted-foreground/30 rounded" />
      </button>
    );
  }

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <button
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className="w-9 h-9 rounded-lg border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-muted hover:scale-105"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      tabIndex={0}
    >
      {theme === "dark" ? (
        <SunIcon className="w-4 h-4 text-foreground" />
      ) : (
        <MoonIcon className="w-4 h-4 text-foreground" />
      )}
    </button>
  );
};

const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);
