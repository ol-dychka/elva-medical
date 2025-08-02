// case when user is on a login/register page, checking if user is logged in already
// redirecting to last page or dashboard

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AuthChecker = ({ children }) => {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const navigate = useNavigate();

  // If user is already logged in, redirect them away
  if (user) {
    console.log("niggers1");
    navigate(-1);
  }

  return children;
};
export default AuthChecker;
