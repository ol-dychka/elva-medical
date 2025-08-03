import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="bg-aliceblue shadow-aliceblue dark:shadow-gunmetal dark:bg-gunmetal flex w-full items-center justify-between p-4 shadow-2xl">
      <p className="text-springgreen dark:text-aliceblue text-3xl font-bold">
        Elva
      </p>
      <Search />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
