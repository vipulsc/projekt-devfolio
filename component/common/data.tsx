// Skills.tsx
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiVite,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiCloudflare,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiC,
  SiCplusplus,
  SiMysql,
  SiLinux,
  SiVercel,
  SiFigma,
  SiPostman,
  SiSolana,
  SiShadcnui,
} from "react-icons/si";
import { IconType } from "react-icons";
import { FaCubes } from "react-icons/fa6";

type Skill = {
  name: string;
  icon: IconType;
};

export const skills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Zustand", icon: FaCubes },
  { name: "shadcn/ui", icon: SiShadcnui },

  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },

  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },

  { name: "Supabase", icon: SiSupabase },

  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Docker", icon: SiDocker },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "SQL", icon: SiMysql },
  { name: "Linux", icon: SiLinux },
  { name: "Vercel", icon: SiVercel },
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Solana", icon: SiSolana },
];
