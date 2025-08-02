import Shown from "../assets/eye.svg";
import Hidden from "../assets/eye-slash.svg";
import { useState } from "react";

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
      <img
        src={shown ? Shown : Hidden}
        alt="show password"
        onClick={() => setShown(!shown)}
        className="absolute top-3/10 -right-8 h-6 w-6 cursor-pointer"
      />
    </div>
  );
};
export default CustomPassword;
