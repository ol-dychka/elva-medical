import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "../store/reducers/user";
import { removeToken } from "../store/reducers/token";
import api from "../api";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");

      dispatch(removeUser());
      dispatch(removeToken());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      className="rounded-xl bg-white text-emerald-800 py-2 px-8 font-semibold"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};
export default Logout;
