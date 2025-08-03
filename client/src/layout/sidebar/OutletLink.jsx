import { Link } from "react-router";

const OutletLink = ({ name, link, isSelected, setSelected }) => {
  return (
    <div
      className={`-mr-3 rounded-l-xl p-4 transition-colors duration-300 ${
        isSelected ? "dark:bg-richblack bg-white" : "bg-white/0"
      }`}
    >
      <Link to={`/${link}`} onClick={setSelected}>
        <p
          className={`text-lg font-semibold transition-colors duration-500 ${
            isSelected ? "text-springgreen dark:text-white" : "text-white"
          }`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
};

export default OutletLink;
