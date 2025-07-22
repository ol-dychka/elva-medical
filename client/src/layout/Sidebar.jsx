import { useLocation } from "react-router";
import OutletLink from "../components/OutletLink";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";
import Account from "../assets/account.svg";

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
      <div className="flex gap-4 justify-center my-8">
        <img src={Account} alt="account" className="w-6 h-6" />
        <p className="font-semibold text-white text-center">
          {user ? user.name : ""}
        </p>
      </div>

      <div className="[&>*]:first:mb-6">
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
