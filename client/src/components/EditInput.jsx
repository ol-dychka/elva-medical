import { useState } from "react";
import Check from "../assets/check-circle.svg";
import Edit from "../assets/edit-square.svg";

const EditInput = ({ name, value, onChange }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex items-center gap-4 text-lg">
      <p className="text-springgreen dark:text-aliceblue font-semibold">
        {name}:
      </p>
      <input
        className={`${
          isEdit ? "border-richblack" : "border-aliceblue"
        } focus:outline-springgreen text-richblack rounded-xl border-1 p-2 dark:text-white`}
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
