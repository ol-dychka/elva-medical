import CustomInput from "../../components/CustomInput";
import CustomPassword from "../../components/CustomPassword";
import Facebook from "../../assets/facebook-color.svg";
import Instagram from "../../assets/instagram-color.svg";
import Gmail from "../../assets/gmail-color.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../handlers/authHandlers";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Email is not correct or not supported");
      return;
    }

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be 8+ characters with a capital letter and a number"
      );
      return;
    }

    try {
      await register(
        {
          email,
          password,
          name,
          phone,
        },
        dispatch,
        navigate
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-8 flex flex-col justify-between h-lvh">
      <p className="text-center text-3xl text-emerald-800 font-semibold">
        Elva Registration
      </p>
      <form onSubmit={handleRegister}>
        <div className="flex flex-col justify-center items-center gap-2">
          <CustomInput name="Full Name" value={name} onChange={setName} />
          <CustomInput name="Email" value={email} onChange={setEmail} />
          <CustomInput name="Phone Number" value={phone} onChange={setPhone} />
          <CustomPassword
            name="Password"
            value={password}
            onChange={setPassword}
          />
          <CustomPassword
            name="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <button
            type="submit"
            className="rounded-xl text-white font-semibold bg-emerald-800 py-4 px-8 cursor-pointer"
          >
            Register
          </button>
          {error && <p className="text-red-400">{error}</p>}
        </div>
      </form>

      <p className="text-emerald-800 text-center">
        Already registered?{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Log In
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
export default Register;
