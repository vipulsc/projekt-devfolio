"use client";
import { useEffect, useState, useCallback, useRef } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafId = useRef<number | null>(null);
  const ticking = useRef(false);

  const updateScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const winHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = winHeight > 0 ? (scrollTop / winHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, scrolled)));
    ticking.current = false;
  }, []);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      rafId.current = requestAnimationFrame(updateScroll);
    }
  }, [updateScroll]);

  useEffect(() => {
    const handleScroll = () => requestTick();

    window.addEventListener("scroll", handleScroll, { passive: true });

    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [requestTick, updateScroll]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-800/10 backdrop-blur-md border-b border-black/10">
        <div
          className="h-full bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700
 origin-left will-change-transform relative overflow-hidden"
          style={{
            width: `${scrollProgress}%`,
          }}
        ></div>
      </div>
    </>
  );
}
