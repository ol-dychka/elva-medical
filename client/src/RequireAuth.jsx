import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router";

const RequireAuth = () => {
  const token = useSelector((state) => state.token.value);
  const location = useLocation();

  if (!token) {
    // Redirect to login, and save current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
