import api from "@/api/api";
import { removeUser, setUser } from "@/store/reducers/user";
import { removeToken, setToken } from "@/store/reducers/token";
import axios from "axios";

const logout = async (dispatch, navigate) => {
  try {
    await api.post("/auth/logout");

    dispatch(removeUser());
    dispatch(removeToken());
    navigate("/login");
  } catch (err) {
    console.error(err);
  }
};

const register = async (credentials, dispatch, navigate) => {
  try {
    const tokenRes = await api.post("/auth/register", credentials);
    dispatch(setToken(tokenRes.data.accessToken));
    const userRes = await api.get("/user");
    dispatch(setUser(userRes.data));
    navigate("/");
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error(err.response.data);
  }
};

const login = async (credentials, dispatch, navigate) => {
  try {
    const tokenRes = await api.post("/auth/login", credentials);
    dispatch(setToken(tokenRes.data.accessToken));
    const userRes = await api.get("/user");
    dispatch(setUser(userRes.data));
    navigate("/");
  } catch (err) {
    if (axios.isAxiosError(err)) throw new Error(err.response.data);
  }
};

export { login, logout, register };
