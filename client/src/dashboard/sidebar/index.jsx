import { useLocation, useNavigate } from "react-router";
import Account from "../../assets/account.svg";
import OutletLink from "./outletLink";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/reducers/user";
import { removeToken } from "../../store/reducers/token";

const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
          <button
            className="rounded-xl bg-white text-emerald-800 py-2 px-8 font-semibold"
            onClick={() => {
              dispatch(removeUser());
              dispatch(removeToken());
              navigate("login");
            }}
          >
            Log Out
          </button>
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
