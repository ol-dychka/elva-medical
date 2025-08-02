import { useDispatch } from "react-redux";
import { setTheme } from "../store/reducers/theme";
import Icon from "../icons/Icon";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => dispatch(setTheme("light"))}
        className="cursor-pointer"
      >
        <Icon name="sun" className="text-springgreen dark:text-aliceblue" />
      </button>
      <button
        onClick={() => dispatch(setTheme("dark"))}
        className="cursor-pointer"
      >
        <Icon name="moon" className="dark:text-springgreen text-gunmetal" />
      </button>
    </div>
  );
};
export default ThemeToggle;
