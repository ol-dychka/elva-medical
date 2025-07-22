import { useState } from "react";
import Check from "../assets/check-circle.svg";
import Edit from "../assets/edit-square.svg";

const EditInput = ({ name, value, onChange }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex text-lg gap-4 items-center">
      <p className="font-semibold text-emerald-700">{name}:</p>
      <input
        className={`${
          isEdit ? "border-black" : "border-slate-300"
        } border-1 p-2 rounded-xl focus:outline-emerald-800`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={!isEdit}
      />
      <img
        src={isEdit ? Check : Edit}
        alt="check"
        className="h-6 w-6 cursor-pointer"
        onClick={() => setIsEdit(!isEdit)}
      />
    </div>
  );
};
export default EditInput;
