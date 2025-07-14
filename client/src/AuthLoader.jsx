import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import api from "./api";
import { setUser } from "./store/reducers/user";
import { setToken } from "./store/reducers/token";

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function authenticate() {
      try {
        const tokenRes = await api.post("/auth/refresh");
        console.log("nigger token: ", tokenRes.data);

        if (!tokenRes.data?.accessToken) {
          navigate("/login");
          return;
        }

        dispatch(setToken(tokenRes.data.accessToken));

        const userRes = await api.get("/user");

        console.log(userRes.data);

        dispatch(setUser(userRes.data));
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    }

    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
export default AuthLoader;
