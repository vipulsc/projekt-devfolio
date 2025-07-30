"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
interface PresenceLayout {
  children: React.ReactNode;
  delay?: number;
}

export default function PresenceAnimate({
  children,
  delay = 0,
}: PresenceLayout) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.4, delay: delay, ease: "easeOut" }}
        className="mb-5"
      >
        {children}
      </motion.div>
    </>
  );
}
