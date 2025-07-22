import CustomInput from "../../components/CustomInput";
import CustomPassword from "../../components/CustomPassword";
import Facebook from "../../assets/facebook-color.svg";
import Instagram from "../../assets/instagram-color.svg";
import Gmail from "../../assets/gmail-color.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../handlers/authHandlers";

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
    <div className="p-8 flex flex-col justify-between h-lvh">
      <p className="text-center text-3xl text-emerald-700 font-semibold">
        Login to Elva
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
