import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "@/handlers/authHandlers";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout(dispatch, navigate);
  };

  return (
    <button
      className="text-springgreen cursor-pointer rounded-xl bg-white px-8 py-2 font-semibold"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};
export default Logout;
