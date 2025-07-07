import Shown from "../assets/eye.svg";
import Hidden from "../assets/eye-slash.svg";
import { useState } from "react";

const CustomPassword = ({ name, value, onChange }) => {
  const [shown, setShown] = useState(false);

  return (
    <div className="relative">
      <input
        className="border-2 border-slate-300 p-4 rounded-xl focus:outline-emerald-800"
        type={shown ? "text" : "password"}
        placeholder={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <img
        src={shown ? Shown : Hidden}
        alt="show password"
        onClick={() => setShown(!shown)}
        className="absolute -right-8 top-3/10 w-6 h-6 cursor-pointer"
      />
    </div>
  );
};
export default CustomPassword;
