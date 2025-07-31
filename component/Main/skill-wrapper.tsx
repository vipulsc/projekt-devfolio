"use client";
import { skills } from "../common/data";
import { motion } from "framer-motion";
export default function SkillWrapper() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div
          className=" flex flex-wrap gap-1.5 
        "
        >
          {skills.map((skill, index) => (
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={skill.name}
              className="select-none 
      flex flex-row gap-1 items-center 
      border-[var(--skill-border)] 
      border bg-[var(--skillbg)] 
      px-2 py-1 rounded-md"
            >
              <skill.icon />
              {skill.name}
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
}
