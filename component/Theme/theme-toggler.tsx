"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
export default function ThemeToggler() {
  const [isLight, setIsLight] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const themeValue = localStorage.getItem("theme");
    const root = document.documentElement;

    if (themeValue === "light") {
      root.classList.add("light");
      setIsLight(true);
    } else {
      root.classList.remove("light");
      setIsLight(false);
    }
  }, []);

  const themeToggler = () => {
    const root = document.documentElement;
    const nextIsLight = !isLight;

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

    if (nextIsLight) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }

    setIsLight(nextIsLight);
  };

  return (
    <button onClick={themeToggler}>
      <audio ref={audioRef} src="/Audio/click2.mp3" preload="auto" />
      <motion.div
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        animate={{ rotate: isLight ? 0 : 180 }}
        whileTap={{ rotate: isLight ? 180 : 0 }}
      >
        <Image
          src={isLight ? "/dark.svg" : "/light.svg"}
          height={40}
          width={40}
          alt="theme icon"
        />
      </motion.div>
    </button>
  );
}
