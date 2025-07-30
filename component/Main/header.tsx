"use client";
import Image from "next/image";
import { useTheme } from "../Theme/theme-context";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function HeaderMain() {
  const { isLight } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-row items-center gap-8"
        >
          <Image
            src={isLight ? "/lightpfp.jpeg" : "/darkpfp.jpeg"}
            alt="vipul"
            width={130}
            height={130}
            className="rounded-xl border-1 border-[var(--navbar-border)]"
          />

          <h1>Vipul Singh</h1>
        </motion.div>
      </div>
    </>
  );
}
