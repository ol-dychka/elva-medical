import Search from "../assets/search.svg";
import Settings from "../assets/settings.svg";

const Navbar = () => {
  return (
    <div className="bg-slate-200 w-full p-4 flex justify-between items-center shadow-2xl shadow-slate-200">
      <p className="text-emerald-700 font-bold text-3xl">Elva</p>
      <div className="bg-white rounded-4xl p-2 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="mx-2 border-none focus:outline-none"
        />
        <img src={Search} alt="Search" className="h-6 w-6" />
      </div>
      <img src={Settings} alt="Settings" className="h-6 w-6" />
    </div>
  );
};

export default Navbar;
