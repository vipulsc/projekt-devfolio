import Main from "@/component/Main/Main";
import { Navbar } from "@/component/Navbar/navbar";
import TopNavbar from "@/component/Navbar/top-navbar";

export default function page() {
  return (
    <>
      <TopNavbar />
      <div className="pt-16">
        <Main />
      </div>
      <nav className="fixed bottom-20 left-0 right-0 z-10 flex justify-center">
        <Navbar />
      </nav>
    </>
  );
}
