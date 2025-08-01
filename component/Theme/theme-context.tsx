"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isLight: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme = localStorage.getItem("theme");
    const root = document.documentElement;

    if (currentTheme === "light") {
      root.classList.add("light");
      setIsLight(true);
    } else {
      root.classList.remove("light");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = !isLight; //dark if light

    if (nextTheme) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }

    setIsLight(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ isLight: mounted ? isLight : false, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be inside of ThemeProvider");
  }
  return context;
};
