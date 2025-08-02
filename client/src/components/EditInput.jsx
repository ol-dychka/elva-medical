import { useState } from "react";
import Icon from "../icons/Icon";

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
      <button className="cursor-pointer" onClick={() => setIsEdit(!isEdit)}>
        <Icon
          name={isEdit ? "checkCircle" : "edit"}
          className="text-springgreen"
        />
      </button>
    </div>
  );
};
export default EditInput;
