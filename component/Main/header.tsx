"use client";
import Image from "next/image";
import { useTheme } from "../Theme/theme-context";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelope,
  FaEnvelopeCircleCheck,
  FaEnvelopeOpenText,
  FaGithub,
  FaMailchimp,
} from "react-icons/fa6";
import Link from "next/link";
import { FaEnvelopeSquare, FaMailBulk } from "react-icons/fa";
export default function HeaderMain() {
  const { isLight } = useTheme();

  return (
    <>
      <div className="flex flex-col justify-start items-start ">
        <motion.div className="flex flex-row items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLight ? "light" : "dark"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={isLight ? "/lightpfp.jpeg" : "/darkpfp.jpeg"}
                alt="vipul"
                width={130}
                height={130}
                className="rounded-xl border-1 border-[var(--navbar-border)]  "
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-76 justify-between items-center">
              <h1 className="text-4xl">Hi, I&apos;m Vipul</h1>

              <div className="flex gap-6">
                <Link href="mailto:vipulsingh.1404@gmail.com">
                  <FaEnvelope className="text-4xl"></FaEnvelope>
                </Link>
                <Link href="https://github.com/vipulsc">
                  <FaGithub className="text-4xl" />
                </Link>
              </div>
            </div>

            <p className="text-sm sm:text-base">
              21, Mumbai | Full Stack Engineer
            </p>
            <div>Available</div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
