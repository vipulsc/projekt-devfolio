"use client";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFileLines,
} from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { DragHint } from "./drag-hint";

export const Navbar = () => {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <DragHint />
      <div
        ref={constraintsRef}
        className="fixed inset-0 pointer-events-none z-50"
      >
        <motion.nav
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragMomentum={false}
          dragTransition={{
            power: 0.3,
            timeConstant: 300,
          }}
          whileDrag={{
            cursor: "grabbing",
            scale: 0.95,
            zIndex: 60,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="pointer-events-auto fixed bottom-20 sm:bottom-16 left-0 right-0 flex justify-center"
          style={{
            // Improve performance during drag
            willChange: isDragging ? "transform" : "auto",
          }}
        >
          <div
            className="w-[200px] h-[50px] bg-[var(--navbar-bg)] rounded-xl flex justify-between items-center px-4
         border border-[var(--navbar-border)]
         z-50 select-none"
          >
            {/* Twitter/X */}
            <div className="relative group">
              <div
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                style={{ pointerEvents: isDragging ? "none" : "auto" }}
              >
                <Link href="https://x.com/vipulsc1" target="_blank">
                  <FaXTwitter />
                </Link>
              </div>
              {/* Hover Module */}
              {!isDragging && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                  <span className="text-[var(--text-color)]">X (Twitter)</span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
                </div>
              )}
            </div>

            {/* GitHub */}
            <div className="relative group">
              <div
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                style={{ pointerEvents: isDragging ? "none" : "auto" }}
              >
                <Link href="https://github.com/vipulsc" target="_blank">
                  <FaGithub />
                </Link>
              </div>
              {/* Hover Module */}
              {!isDragging && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                  <span className="text-[var(--text-color)]">GitHub</span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
                </div>
              )}
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <div
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                style={{ pointerEvents: isDragging ? "none" : "auto" }}
              >
                <Link
                  href="https://linkedin.com/in/vipulsingh14"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              {/* Hover Module */}
              {!isDragging && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                  <span className="text-[var(--text-color)]">LinkedIn</span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
                </div>
              )}
            </div>

            <div className="w-[2px] h-[25px] bg-[var(--navbar-border)]"></div>

            {/* Resume */}
            <div className="relative group -ml-3">
              <div
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                style={{ pointerEvents: isDragging ? "none" : "auto" }}
              >
                <a
                  href="/vipulsc.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileLines />
                </a>
              </div>
              {/* Hover Module */}
              {!isDragging && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                  Resume
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
                </div>
              )}
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
};
