import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../handlers/authHandlers";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout(dispatch, navigate);
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
