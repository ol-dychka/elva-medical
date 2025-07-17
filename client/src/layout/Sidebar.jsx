import { useLocation } from "react-router";
import OutletLink from "../components/OutletLink";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";

const Sidebar = () => {
  const user = useSelector((state) => state.user.value);

  const [outlet, setOutlet] = useState(null);
  const location = useLocation();

  const setSelected = (outlet) => {
    setOutlet(outlet);
  };

  useEffect(() => {
    setOutlet(location.pathname.slice(1));
  }, [location]);

  return (
    <div className="p-3 w-full h-full bg-linear-to-br from-teal-900 to-emerald-600">
      <div className="flex gap-4 mt-8 mb-16 justify-center w-full">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-white text-center">
            Logged in as {user ? user.name : "88"}
          </p>
          <Logout />
        </div>
      </div>

      <div className="space-y-2">
        <OutletLink
          name="Home"
          link=""
          isSelected={outlet == ""}
          setSelected={() => setSelected("")}
        />
        <OutletLink
          name="Courses"
          link="courses"
          isSelected={outlet == "courses"}
          setSelected={() => setSelected("courses")}
        />
        <OutletLink
          name="Billing"
          link="billing"
          isSelected={outlet == "billing"}
          setSelected={() => setSelected("billing")}
        />
      </div>
    </div>
  );
};
export default Sidebar;
