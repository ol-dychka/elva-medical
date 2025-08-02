import { useState } from "react";
import Icon from "../icons/Icon";

const CustomPassword = ({ name, value, onChange }) => {
  const [shown, setShown] = useState(false);

  return (
    <div className="relative">
      <input
        className="border-aliceblue focus:outline-springgreen rounded-xl border-2 p-4"
        type={shown ? "text" : "password"}
        placeholder={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setShown(!shown)}
        className="absolute top-3/10 -right-8 cursor-pointer"
      >
        <Icon
          name={shown ? "eye" : "eyeCrossed"}
          className="text-springgreen"
        />
      </button>
    </div>
  );
};
export default CustomPassword;
