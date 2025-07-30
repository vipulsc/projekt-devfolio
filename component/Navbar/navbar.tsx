import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFileLines,
} from "react-icons/fa6";
import Link from "next/link";
export const Navbar = () => {
  return (
    <>
      {/* MAIN */}
      <div
        className=" w-[200px] h-[50px] bg-[var(--navbar-bg)] rounded-xl flex justify-between items-center px-4
         border border-[var(--navbar-border)]
         z-50
      "
      >
        {/* Twitter/X */}
        <div className="relative group">
          <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
            <Link href="https://x.com/vipulsc1" target="_blank">
              <FaXTwitter />
            </Link>
          </div>
          {/* Hover Module */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
            <span className="text-[var(--text-color)]">X (Twitter)</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
          </div>
        </div>

        {/* GitHub */}
        <div className="relative group">
          <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
            <Link href="https://github.com/vipulsc" target="_blank">
              <FaGithub />
            </Link>
          </div>
          {/* Hover Module */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
            <span className="text-[var(--text-color)]">GitHub</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
            <Link href="https://linkedin.com/in/vipulsingh14" target="_blank">
              <FaLinkedinIn />
            </Link>
          </div>
          {/* Hover Module */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
            <span className="text-[var(--text-color)]">LinkedIn</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
          </div>
        </div>

        <div className="w-[2px] h-[25px] bg-[var(--navbar-border)]"></div>

        {/* Resume */}

        <div className="relative group -ml-3">
          <div className="cursor-pointer transition-transform duration-200 hover:scale-110">
            <a href="/vipulsc.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileLines />
            </a>
          </div>
          {/* Hover Module */}

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-3 py-1 bg-[var(--navbar-bg)] border border-[var(--navbar-border)] rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
            Resume
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--navbar-border)]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
