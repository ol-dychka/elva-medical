import CustomInput from "./CustomInput";
import CustomPassword from "./CustomPassword";
import Facebook from "@/assets/facebook-color.svg";
import Instagram from "@/assets/instagram-color.svg";
import Gmail from "@/assets/gmail-color.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/handlers/authHandlers";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password }, dispatch, navigate);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-lvh flex-col justify-between p-8">
      <p className="text-springgreen text-center text-3xl font-semibold">
        Login to Elva
      </p>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col items-center justify-center gap-2">
          <CustomInput name="Email" value={email} onChange={setEmail} />
          <CustomPassword
            name="Password"
            value={password}
            onChange={setPassword}
          />

          <button
            type="submit"
            className="bg-springgreen cursor-pointer rounded-xl px-8 py-4 font-semibold text-white"
          >
            Log In
          </button>
          {error && <p className="text-crayola">{error}</p>}
        </div>
      </form>

      <p className="text-springgreen text-center">
        First time here?{" "}
        <span
          className="cursor-pointer underline"
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>

      <div className="flex items-center justify-center gap-8">
        <img src={Facebook} alt="facebook" className="h-7 w-7" />
        <img src={Instagram} alt="Instagram" className="h-8 w-8" />
        <img src={Gmail} alt="gmail" className="h-9 w-9" />
      </div>
    </div>
  );
};
export default Login;
