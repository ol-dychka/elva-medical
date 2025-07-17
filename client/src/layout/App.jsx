import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import Billing from "./outlets/Billing";
import Courses from "./outlets/Courses";
import Home from "./outlets/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthLoader from "../components/AuthLoader";

const App = () => {
  return (
    <AuthLoader>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="billing" element={<Billing />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AuthLoader>
  );
};
export default App;
