import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Dashboard from "./dashboard/dashboard";
import Billing from "./outlets/billing";
import Courses from "./outlets/courses";
import Home from "./outlets/home";
import Login from "./auth/login";
import Register from "./auth/register";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import RequireAuth from "./RequireAuth";
import { useDispatch } from "react-redux";
import api from "./api";
import { setUser } from "./store/reducers/user";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  useEffect(() => {
    async function getUser() {
      if (token) {
        try {
          const res = await api.get("/user");
          dispatch(setUser(res.data));
        } catch (err) {
          console.error(err);
        }
      }
    }
    getUser();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="billing" element={<Billing />} />
            <Route path="courses" element={<Courses />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
