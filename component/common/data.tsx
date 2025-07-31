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

type Project = {
  image: string;
  title: string;
  description: string;
  live: string;
  githubLink?: string;
  underDevelopment?: boolean;
};

export const project: Project[] = [
  {
    image: "/projects/pathblaze.png",
    title: "Projekt Pathblaze",
    description:
      "PathBlaze is a guided learning platform with step-by-step roadmaps, curated videos, smart progress tracking, short-form content, and community. ",
    live: "https://pathblaze.in",
    underDevelopment: true,
  },
  {
    image: "/projects/necto.png",
    title: "Projekt Necto",
    description:
      "Necto is an open-source SaaS platform that leverages AI to provide intelligent PDF summarization services. It offers a seamless experience for users to upload, process, and manage their PDF documents.",
    live: "https://necto.sbs",
    githubLink: "https://github.com/vipulsc/projekt-necto",
  },
  {
    image: "/projects/harmy.png",
    title: "Projekt Harmy",
    description:
      "A modern and intuitive HR platform designed for teams that care about people and progress. It's fast, clean, and focused on what really matters making HR simple, efficient, and actually enjoyable to use ",
    live: "https://projekt-harmy.vercel.app",
    githubLink: "https://github.com/vipulsc/projekt-harmy",
  },
  {
    image: "/projects/saaraansh.png",
    title: "Projekt Saaraansh",
    description:
      "SaaRaansH (सारांश) is an open-source AI tool that instantly transforms lengthy articles into concise, readable summaries with a beautiful animated interface. ",
    live: "https://projekt-saaraansh.vercel.app",
    githubLink: "https://github.com/vipulsc/projekt-saaraansh",
  },
  {
    image: "/projects/kinko.png",
    title: "Projekt Kinko",
    description:
      "金庫 Kinko is a sleek Solana wallet generator that allows users to securely create wallets, with future support for more blockchains and a full banking system.  ",
    live: "https://projekt-kinko.vercel.app",
    githubLink: "https://github.com/vipulsc/projekt-kinko",
  },
  {
    image: "/projects/xposed.png",
    title: "Projekt Xposed",
    description:
      "Xposed lets users generate a personalized GitHub card with a custom URL showcasing their dev style, stack, and vibe in a beautiful way. 500+ users joined in the first 24 hours.",
    live: "https://xposed.sbs",
  },
];
