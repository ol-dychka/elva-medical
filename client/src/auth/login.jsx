import CustomInput from "./CustomInput";
import CustomPassword from "./CustomPassword";
import api from "../api";
import Facebook from "../assets/facebook-color.svg";
import Instagram from "../assets/instagram-color.svg";
import Gmail from "../assets/gmail-color.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/reducers/token";
import { setUser } from "../store/reducers/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const tokenRes = await api.post("/auth/login", { email, password });
      console.log("nigger token: ", tokenRes.data);

      if (!tokenRes.data?.accessToken) {
        return;
      }

      dispatch(setToken(tokenRes.data.accessToken));

      const userRes = await api.get("/user");

      console.log(userRes.data);

      dispatch(setUser(userRes.data));
      navigate("/");
    } catch (err) {
      setError("invalid credentials");
      console.log(err);
    }
  };

  return (
    <div className="p-8 flex flex-col justify-between h-lvh">
      <p className="text-center text-3xl text-emerald-800 font-semibold">
        Login to Elva {token}
      </p>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col justify-center items-center gap-2">
          <CustomInput name="Email" value={email} onChange={setEmail} />
          <CustomPassword
            name="Password"
            value={password}
            onChange={setPassword}
          />

          <button
            type="submit"
            className="rounded-xl text-white font-semibold bg-emerald-800 py-4 px-8 cursor-pointer"
          >
            Log In
          </button>
          {error && <p className="text-red-400">{error}</p>}
        </div>
      </form>

      <p className="text-emerald-800 text-center">
        First time here?{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>

      <div className="flex gap-8 items-center justify-center">
        <img src={Facebook} alt="facebook" className="h-7 w-7" />
        <img src={Instagram} alt="Instagram" className="h-8 w-8" />
        <img src={Gmail} alt="gmail" className="h-9 w-9" />
      </div>
    </div>
  );
};
export default Login;
