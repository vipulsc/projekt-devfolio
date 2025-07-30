"use client";
import Image from "next/image";
import { useTheme } from "../Theme/theme-context";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa6";
import Link from "next/link";

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
            {/* available */}
            <div
              className="w-[90px] flex items-center gap-2 text-[var(--available)] px-2 mt-2 rounded-md font-semibold border"
              style={{
                borderColor: "var(--available)",
                boxShadow: "0 0 1px var(--available), 0 0 2px var(--available)",
              }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--available)" }}
              ></div>
              <p className="text-xs">Available</p>
            </div>

            {/* name */}
            <div className="flex  md:flex-row gap-1 sm:gap-26 md:gap-46 lg:gap-76 justify-between items-center">
              <h1 className="text-4xl">Hi, I&apos;m Vipul</h1>

              <div className=" flex-row hidden md:flex gap-6">
                <Link href="mailto:vipulsingh.1404@gmail.com" target="_blank">
                  <FaEnvelope className="text-3xl"></FaEnvelope>
                </Link>
                <Link href="https://github.com/vipulsc" target="_blank">
                  <FaGithub className="text-3xl" />
                </Link>
              </div>
            </div>
            <p className="text-sm sm:text-base">
              21, Mumbai | Full Stack Engineer
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
