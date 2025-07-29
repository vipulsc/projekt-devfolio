import { Navbar } from "@/component/Navbar/navbar";
import ThemeToggler from "@/component/Theme/theme-toggler";

export default function page() {
  return (
    <>
      <div className="left-4 top-4 fixed">
        <ThemeToggler />
      </div>
      <nav className="fixed bottom-20 left-0 right-0 z-10 flex justify-center">
        <Navbar />
      </nav>
    </>
  );
}
