import { useLocation } from "react-router";
import OutletLink from "./OutletLink";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Logout from "./Logout";
import Icon from "@/icons/Icon";

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
    <div className="from-darkgreen to-springgreen h-full w-full bg-linear-to-br p-3">
      <div className="flex flex-col">
        <div className="my-6 flex justify-center gap-4">
          <Icon name="account" className="text-white" />

          <p className="text-center font-semibold text-white">
            {user ? user.name : ""}
          </p>
        </div>
        <Logout />
      </div>

      <div className="[&>*]:first:mt-12">
        <OutletLink
          name="Home"
          link=""
          isSelected={outlet == ""}
          setSelected={() => setSelected("")}
        />
        <OutletLink
          name="Appointments"
          link="appointments"
          isSelected={outlet == "appointments"}
          setSelected={() => setSelected("appointments")}
        />
        <OutletLink
          name="Courses"
          link="courses"
          isSelected={outlet == "courses"}
          setSelected={() => setSelected("courses")}
        />
        <OutletLink
          name="Prescriptions"
          link="prescriptions"
          isSelected={outlet == "prescriptions"}
          setSelected={() => setSelected("prescriptions")}
        />
        <OutletLink
          name="My Profile"
          link="profile"
          isSelected={outlet == "profile"}
          setSelected={() => setSelected("profile")}
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
