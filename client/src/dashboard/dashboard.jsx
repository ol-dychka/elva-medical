import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="basis-1/5">
          <Sidebar />
        </div>
        <div className="flex flex-col w-screen">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
