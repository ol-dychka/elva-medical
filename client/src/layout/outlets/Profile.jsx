import { useDispatch, useSelector } from "react-redux";
import EditInput from "../../components/EditInput";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { setUser } from "../../store/reducers/user";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = async () => {
    try {
      // updates user information on backend and gives frontend new user object
      const res = await api.post("/user/update", { name, phone });

      dispatch(setUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(user);
    if (user) {
      setName(user.name);
      setPhone(user.phone);
    }
  }, [user]);

  return (
    <div className="px-4 py-8 relative h-full">
      <div className="space-y-8">
        <p className="font-semibold text-lg text-emerald-700">
          Email: <span className="text-black">{user && user.email}</span>
        </p>
        <EditInput name="Name" value={name} onChange={setName} />
        <EditInput name="Phone Number" value={phone} onChange={setPhone} />
      </div>

      <button
        onClick={handleSave}
        className="cursor-pointer bg-emerald-700 rounded-xl text-white text-lg font-semibold px-4 py-2 absolute bottom-16 right-16"
      >
        Save
      </button>
    </div>
  );
};
export default Profile;
