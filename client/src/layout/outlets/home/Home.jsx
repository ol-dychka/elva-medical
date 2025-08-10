import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  convertDayToDateTime,
  formatDateTime,
} from "../../../helpers/formatDate";
import Event from "./Event";
import Prescription from "./Prescription";
import Icon from "@/icons/Icon";

const Home = () => {
  const { name, payments, appointments, courses, prescriptions } = useSelector(
    (state) => state.user.value,
  );

  const events = [
    ...appointments.map((a) => ({
      id: a.id,
      title: a.title,
      date: formatDateTime(a.date),
      link: "appointments",
    })),
    ...courses.flatMap((c) =>
      c.schedule.map((s) => ({
        id: c.id,
        title: c.title,
        date: convertDayToDateTime(s),
        link: "courses",
      })),
    ),
  ].sort((a, b) => new Date(a.date) - new Date(b.date));

  const formattedPrescriptions = prescriptions.map((p) => ({
    id: p.id,
    title: p.medication,
    frequency: p.frequency,
    link: "prescriptions",
  }));

  const navigate = useNavigate();
  return (
    <div className="h-full space-y-8 px-4 py-8">
      <p className="text-richblack text-2xl font-semibold dark:text-white">
        Welcome back, {name}!
      </p>

      <div className="flex items-end gap-2">
        <p className="text-richblack text-xl dark:text-white">
          You have {payments.length} unsettled payments.
        </p>
        <button
          onClick={() => navigate("/payments")}
          className="text-springgreen flex cursor-pointer items-end text-xl hover:underline"
        >
          Visit payment page
          <Icon name="arrow" className="text-springgreen" />
        </button>
      </div>

      <div className="flex gap-8">
        <div className="w-2/3">
          <p className="text-richblack text-2xl font-semibold dark:text-white">
            Upcoming events:
          </p>

          <div className="flex flex-wrap gap-4 p-2">
            {events.map((e, i) => (
              <Event event={e} key={e.id + i} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-richblack text-2xl font-semibold dark:text-white">
            Prescriptions:
          </p>

          <div className="flex flex-wrap gap-4 p-2">
            {formattedPrescriptions.map((p) => (
              <Prescription prescription={p} key={p.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
