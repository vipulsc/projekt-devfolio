import PawAnimation from "@/component/Animation/paw-animations";
import ProgressBar from "@/component/Animation/progress-bar";
import Main from "@/component/Layout/Main";
import { Navbar } from "@/component/Navbar/navbar";
import TopNavbar from "@/component/Navbar/top-navbar";

export default function page() {
  return (
    <>
      <ProgressBar />
      <TopNavbar />
      <div className="pt-16">
        <Main />
      </div>
      <nav className="fixed bottom-20 left-0 right-0 z-10 flex justify-center">
        <Navbar />
      </nav>

      <div className="z-[9999] pointer-events-none">
        <PawAnimation />
      </div>
    </>
  );
}
