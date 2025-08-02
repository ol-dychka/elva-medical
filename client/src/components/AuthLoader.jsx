// case if user is on a dashboard but not logged in
// redirecting to login page

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import api from "../api/api";
import { setUser } from "../store/reducers/user";
import { setToken } from "../store/reducers/token";
import LoadingSpinner from "./LoadingSpinner";

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function authenticate() {
      try {
        const tokenRes = await api.post("/auth/refresh");

        if (!tokenRes.data?.accessToken) {
          navigate("/login");
          console.log("nigga");
          return;
        }

        dispatch(setToken(tokenRes.data.accessToken));

        const userRes = await api.get("/user");

        console.log("user: ", userRes);

        dispatch(setUser(userRes.data));

        // artificial delay for loading spinner showcase
        await new Promise((res) => setTimeout(res, 1000));

        setIsLoaded(true);
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    }

    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoaded) return children;
  else return <LoadingSpinner />;
};
export default AuthLoader;
