"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const DragHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-32 left-1/2 transform -translate-x-1/2 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg px-3 py-2 text-sm text-[var(--text-color)] shadow-lg z-40 pointer-events-none"
        >
          <span>💡 You can drag this navbar!</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
