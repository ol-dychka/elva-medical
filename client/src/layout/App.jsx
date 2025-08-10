import { Route, Routes } from "react-router";

import Dashboard from "./Dashboard";
import Payments from "./outlets/payments/Payments";
import Courses from "./outlets/courses/Courses";
import Home from "./outlets/home/Home";
import Profile from "./outlets/profile/Profile";
import Appointments from "./outlets/appointments/Appointments";
import Prescriptions from "./outlets/prescriptions/Prescriptions";

import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthLoader from "./AuthLoader";
import ThemeProvider from "./ThemeProvider";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.value);
  console.log("APP LEVEL: ", user);

  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <AuthLoader>
              <Dashboard />
            </AuthLoader>
          }
        >
          <Route index element={<Home />} />
          <Route path="payments" element={<Payments />} />
          <Route path="courses" element={<Courses />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
