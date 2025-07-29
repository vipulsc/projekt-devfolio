import ThemeToggler from "../Theme/theme-toggler";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div>About</div>
        <div>Project</div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
};
