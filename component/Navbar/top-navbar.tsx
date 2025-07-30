import LocalTime from "@/utils/local-time";
import ThemeToggler from "../Theme/theme-toggler";

export default function TopNavbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-12 pt-4 ">
        <div className="flex opacity-50 gap-2  -ml-8 md:ml-0">
          <LocalTime />
        </div>
        <div className=" -mr-8 md:mr-0">
          <ThemeToggler />
        </div>
      </div>
    </>
  );
}
