import IconSun from "../icons/IconSun";
import Search from "../assets/search.svg";
import Settings from "../assets/settings.svg";
import Logout from "../components/Logout";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  return (
    <div className="bg-aliceblue shadow-aliceblue dark:shadow-gunmetal dark:bg-gunmetal flex w-full items-center justify-between p-4 shadow-2xl">
      <p className="text-springgreen dark:text-aliceblue text-3xl font-bold">
        Elva
      </p>
      <div className="flex items-center rounded-4xl bg-white p-2">
        <input
          type="text"
          placeholder="Search"
          className="mx-2 border-none focus:outline-none"
        />
        <img src={Search} alt="Search" className="h-6 w-6" />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
