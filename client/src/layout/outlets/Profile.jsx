import { useDispatch, useSelector } from "react-redux";
import EditInput from "../../components/EditInput";
import { useState } from "react";
import api from "../../api/api";
import { setUser } from "../../store/reducers/user";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = async () => {
    try {
      // updates user information on backend and gives frontend new user object
      const res = await api.post("/user/update", { name, phone });

      dispatch(setUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative h-full px-4 py-8">
      <div className="space-y-8">
        <p className="text-springgreen dark:text-aliceblue text-lg font-semibold">
          Email:{" "}
          <span className="text-richblack dark:text-white">
            {user && user.email}
          </span>
        </p>
        <EditInput name="Name" value={name} onChange={setName} />
        <EditInput name="Phone Number" value={phone} onChange={setPhone} />
      </div>

      <button
        onClick={handleSave}
        className="bg-springgreen absolute right-16 bottom-16 cursor-pointer rounded-xl px-4 py-2 text-lg font-semibold text-white"
      >
        Save
      </button>
    </div>
  );
};
export default Profile;
