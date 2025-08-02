import { useDispatch } from "react-redux";
import { setTheme } from "../store/reducers/theme";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => dispatch(setTheme("light"))}
        className="cursor-pointer"
      >
        <IconSun className="text-springgreen dark:text-aliceblue" />
      </button>
      <button
        onClick={() => dispatch(setTheme("dark"))}
        className="cursor-pointer"
      >
        <IconMoon className="dark:text-springgreen text-gunmetal" />
      </button>
    </div>
  );
};
export default ThemeToggle;
