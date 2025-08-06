import { useSelector } from "react-redux";
import Appointment from "./Appointment";

const Appointments = () => {
  const { appointments } = useSelector((state) => state.user.value);

  return (
    <div className="h-full px-4 py-8">
      <div className="w-1/2 space-y-8">
        {appointments.map((appointment) => (
          <Appointment appointment={appointment} key={appointment.id} />
        ))}
      </div>
    </div>
  );
};
export default Appointments;
