import Image from "next/image";
import { project } from "../common/data";
import CardWrapper from "../Animation/card-wrapper";

export default function Projects() {
  return (
    <>
      <div className=" ">
        {project.map((project) => {
          return (
            <CardWrapper
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              live={project.live}
              githubLink={project.githubLink}
              underdevelopment={project.underDevelopment}
            />
          );
        })}
      </div>
    </>
  );
}
