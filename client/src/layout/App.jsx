import { Route, Routes } from "react-router";

import Dashboard from "./Dashboard";
import Billing from "./outlets/Billing";
import Courses from "./outlets/courses/Courses";
import Home from "./outlets/Home";
import Profile from "./outlets/profile/Profile";
import Appointments from "./outlets/appointments/Appointments";
import Prescriptions from "./outlets/prescriptions/Prescriptions";

import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthLoader from "./AuthLoader";
import ThemeProvider from "./ThemeProvider";

const App = () => {
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
          <Route path="billing" element={<Billing />} />
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
