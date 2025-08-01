"use client";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      <div className="mt-20">
        <motion.div
          initial={{ backgroundPosition: "200% 0" }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--skill-border)] to-transparent bg-[length:200%_100%]"
        ></motion.div>
        <div className="flex justify-center mt-4">
          <p className="text-sm text-[var(--text-color)]">
            &copy; {new Date().getFullYear()} Vipul Singh. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
