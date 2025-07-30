"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import pawsAnimation from "@/public/animations/darkanimation.json";
import pawsAnimation2 from "@/public/animations/lightpaws.json";
import { useTheme } from "../Theme/theme-context";
import { useEffect, useRef } from "react";

export default function PawAnimation() {
  const { isLight } = useTheme();
  const animation = isLight ? pawsAnimation2 : pawsAnimation;

  // Create refs for all 4 animations
  const leftTopRef = useRef<LottieRefCurrentProps>(null);
  const leftBottomRef = useRef<LottieRefCurrentProps>(null);
  const rightTopRef = useRef<LottieRefCurrentProps>(null);
  const rightBottomRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    leftTopRef.current?.setSpeed(0.2);
    leftBottomRef.current?.setSpeed(0.2);
    rightTopRef.current?.setSpeed(0.2);
    rightBottomRef.current?.setSpeed(0.2);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-full pointer-events-none">
      {/* Left side paws */}
      <div
        className="absolute w-24 opacity-50 "
        style={{ left: -4, top: `10.5vh` }}
      >
        <Lottie lottieRef={leftTopRef} animationData={animation} loop />
      </div>
      <div
        className="absolute w-24 opacity-30 "
        style={{ left: -4, top: `20.5vh` }}
      >
        <Lottie lottieRef={leftBottomRef} animationData={animation} loop />
      </div>

      {/* Right side paws */}
      <div
        className="absolute w-24 opacity-50 "
        style={{ right: -4, bottom: `10.5vh` }}
      >
        <Lottie lottieRef={rightTopRef} animationData={animation} loop />
      </div>
      <div
        className="absolute w-24 opacity-30 "
        style={{ right: -4, bottom: `20.5vh` }}
      >
        <Lottie lottieRef={rightBottomRef} animationData={animation} loop />
      </div>
    </div>
  );
}
