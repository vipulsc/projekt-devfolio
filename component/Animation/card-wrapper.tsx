import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";
type CardProps = {
  image: string;
  title: string;
  description: string;
  live: string;
  githubLink?: string;
  underdevelopment?: boolean;
};

export default function CardWrapper({
  image,
  title,
  description,
  live,
  githubLink,
  underdevelopment,
}: CardProps) {
  return (
    <div className="relative w-full bg-[var(--cardbg)] border border-[var(--card-border)] rounded-xl mb-8 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out group">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 backdrop-blur-[3px] bg-[var(--cardbg)]/10 rounded-xl pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-4 items-start h-full p-4">
        <div className="w-full md:w-auto md:h-[140px]">
          <Image
            className="w-full md:h-full md:w-auto object-cover border border-[var(--card-border)] rounded-lg shadow-sm"
            src={image}
            alt={title}
            width={140}
            height={200}
          />
        </div>

        <div className="flex-1 w-full flex flex-col justify-between gap-4 md:gap-2">
          <div className="flex flex-row sm:flex-row items-center justify-between sm:gap-2">
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
              {title}
            </h2>
            <div className="flex gap-3">
              {underdevelopment && (
                <div className="border border-[var(--construction)] rounded-xl px-2.5 py-0.5  sm:px-4 md:px-5  animate-pulse transition duration-700">
                  <p className="text-[var(--construction)] text-xs sm:text-sm animate-pulse transition duration-300">
                    Building
                  </p>
                </div>
              )}
              {githubLink && (
                <Link href={githubLink} target="_blank">
                  <FaGithub
                    size={20}
                    className="hover:text-[var(--navbar-bg)]  transition-colors duration-200"
                  />
                </Link>
              )}
              {live && (
                <Link href={live} target="_blank">
                  <FaLink
                    size={20}
                    className="hover:text-[var(--navbar-bg)]  transition-colors duration-200"
                  />
                </Link>
              )}
            </div>
          </div>

          <p className="text-sm text-[var(--text-muted)] pt-8 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
