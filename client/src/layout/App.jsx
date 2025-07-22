import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import Billing from "./outlets/Billing";
import Courses from "./outlets/Courses";
import Home from "./outlets/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthLoader from "../components/AuthLoader";
import Appointments from "./outlets/Appointments";
import Prescriptions from "./outlets/Prescriptions";
import Profile from "./outlets/Profile";

const App = () => {
  return (
    <AuthLoader>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="billing" element={<Billing />} />
          <Route path="courses" element={<Courses />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AuthLoader>
  );
};
export default App;
