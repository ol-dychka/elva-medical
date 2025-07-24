import { useSelector } from "react-redux";
import Appointment from "./Appointment";

const Appointments = () => {
  const { appointments } = useSelector((state) => state.user.value);

  return (
    <div className="px-4 py-8 relative h-full">
      <div className="space-y-8 w-1/2">
        {appointments.map((appointment) => (
          <Appointment appointment={appointment} key={appointment.id} />
        ))}
      </div>
    </div>
  );
};
export default Appointments;
