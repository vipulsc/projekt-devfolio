"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

  const audioSrc = isMobile ? "/Audio/click.mp3" : "/Audio/click2.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();

    const warmUpAudio = async () => {
      try {
        audio.volume = 0;
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 0.5;
      } catch {}
    };

    warmUpAudio();
  }, [audioSrc]);

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

  return (
    <button
      onClick={handleToggleTheme}
      className="cursor-pointer"
      aria-label="Toggle theme"
    >
      <audio ref={audioRef} preload="auto">
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc.replace(".mp3", ".ogg")} type="audio/ogg" />
      </audio>

      <motion.div
        transition={{ duration: 0.5, delay: 0.1 }}
        animate={{ rotate: isLight ? 0 : 180 }}
        whileTap={{ rotate: isLight ? 240 : 0, scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={isLight ? "/moondark.svg" : "/sunlight.svg"}
          height={25}
          width={25}
          alt="theme icon"
        />
      </motion.div>
    </button>
  );
}
