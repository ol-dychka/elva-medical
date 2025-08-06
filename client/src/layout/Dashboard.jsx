import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="dark:bg-richblack flex w-screen flex-col">
        <Navbar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
