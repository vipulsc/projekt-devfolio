"use client";
import { skills } from "../common/data";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function SkillWrapper() {
  const [skillsList, setSkillsList] = useState(skills);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Reorder.Group
          axis="x"
          values={skillsList}
          onReorder={setSkillsList}
          className="flex flex-wrap gap-1.5"
        >
          {skillsList.map((skill, index) => (
            <Reorder.Item
              key={skill.name}
              value={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              className="select-none
                flex flex-row gap-1 items-center
                border-[var(--skill-border)]
                border bg-[var(--skillbg)]
                px-2 py-1 rounded-md
                cursor-grab active:cursor-grabbing"
              whileDrag={{
                scale: 1.05,
                zIndex: 1000,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
            >
              <skill.icon />
              {skill.name}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </>
  );
}
