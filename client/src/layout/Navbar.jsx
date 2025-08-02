import ThemeToggle from "../components/ThemeToggle";
import Icon from "../icons/Icon";

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
        <button>
          <Icon name="search" className="text-richblack" />
        </button>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
