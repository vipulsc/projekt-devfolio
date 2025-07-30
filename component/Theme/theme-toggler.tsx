"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useTheme } from "./theme-context";
export default function ThemeToggler() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { isLight, toggleTheme } = useTheme();
  useEffect(() => {
    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDeviceSize();

    window.addEventListener("resize", checkDeviceSize);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);
  const handleToggleTheme = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    toggleTheme();
  };
  const audioSrc = isMobile ? "/Audio/click.mp3" : "/Audio/click2.mp3";

  return (
    <button onClick={handleToggleTheme} className="cursor-pointer">
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <motion.div
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        animate={{ rotate: isLight ? 0 : 180 }}
        whileTap={{ rotate: isLight ? 240 : 0 }}
      >
        <Image
          src={isLight ? "/moondark.svg" : "/sunlight.svg"}
          height={20}
          width={20}
          alt="theme icon"
        />
      </motion.div>
    </button>
  );
}
