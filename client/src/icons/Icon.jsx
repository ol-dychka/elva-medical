import icons from "./icons";

const Icon = ({ name, className = "" }) => {
  const { path, viewbox } = icons[name];

  return (
    <svg
      className={`h-6 w-6 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox={viewbox ? `0 0 ${viewbox} ${viewbox}` : "0 0 24 24"}
    >
      {path.map((d, i) => (
        <path d={d} key={i} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
};
export default Icon;
