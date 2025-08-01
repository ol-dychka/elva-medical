import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="basis-1/5">
          <Sidebar />
        </div>
        <div className="dark:bg-richblack flex w-screen flex-col">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
