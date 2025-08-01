import { useSelector } from "react-redux";
import Prescription from "./Prescription";

const Prescriptions = () => {
  const { prescriptions } = useSelector((state) => state.user.value);

  return (
    <div className="px-4 py-8 relative h-full">
      <div className="space-y-8 w-1/2">
        {prescriptions.map((prescription, i) => (
          <Prescription prescription={prescription} key={i} />
        ))}
      </div>
    </div>
  );
};
export default Prescriptions;
