import { Link } from "react-router";

const OutletLink = ({ name, link, isSelected, setSelected }) => {
  return (
    <div
      className={`rounded-l-xl transition-colors duration-300 p-4 -mr-4 ${
        isSelected ? "bg-white" : "bg-white/0"
      }`}
    >
      <Link to={`/${link}`} onClick={setSelected}>
        <p
          className={`font-semibold transition-colors duration-500 text-lg ${
            isSelected ? "text-emerald-800" : "text-white"
          }`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
};

export default OutletLink;
