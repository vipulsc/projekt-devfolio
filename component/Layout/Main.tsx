import HeaderMain from "../Main/header";

import PresenceAnimate from "../Animation/presence-animate";
import About from "../Main/about";
import SkillWrapper from "../Main/skill-wrapper";
import Projects from "../Main/projects";
import Experience from "../Main/experience";
import Contact from "../Main/contact";

export default function Main() {
  return (
    <>
      {/* <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-0">
        <div className="w-full max-w-4xl flex flex-col transition-all duration-700 ease-in-out">
          <HeaderMain />
        </div>
      </div> */}
      <div className="w-full max-w-4xl mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-14 py-6 xl:py-0 transition-all duration-700 ease-in-out">
        <PresenceAnimate delay={0.05}>
          <HeaderMain />
        </PresenceAnimate>
        <PresenceAnimate delay={0.1}>
          <About />
        </PresenceAnimate>
        <PresenceAnimate delay={0.15}>
          <SkillWrapper />
        </PresenceAnimate>
        <PresenceAnimate delay={0.2}>
          <Projects />
        </PresenceAnimate>
        <PresenceAnimate delay={0.25}>
          <Experience />
        </PresenceAnimate>
        <PresenceAnimate delay={0.3}>
          <Contact />
        </PresenceAnimate>
      </div>
    </>
  );
}
