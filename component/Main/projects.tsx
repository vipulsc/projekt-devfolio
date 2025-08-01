"use client";
import { useState } from "react";
import { project } from "../common/data";
import CardWrapper from "../Animation/card-wrapper";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount(project.length);
    setExpanded(true);
  };

  return (
    <div className="flex flex-col gap-3 pt-10">
      <div>
        <h1 className="text-xl font-bold mb-4">Featured Projects.</h1>
      </div>

      <div>
        {project.slice(0, visibleCount).map((proj) => (
          <CardWrapper
            key={proj.title}
            image={proj.image}
            title={proj.title}
            description={proj.description}
            live={proj.live}
            githubLink={proj.githubLink}
            underdevelopment={proj.underDevelopment}
          />
        ))}
      </div>

      {!expanded && project.length > 2 && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
