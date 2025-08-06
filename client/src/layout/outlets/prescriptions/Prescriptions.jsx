import { useSelector } from "react-redux";
import Prescription from "./Prescription";

const Prescriptions = () => {
  const { prescriptions } = useSelector((state) => state.user.value);

  return (
    <div className="h-full px-4 py-8">
      <div className="w-1/2 space-y-8">
        {prescriptions.map((prescription, i) => (
          <Prescription prescription={prescription} key={i} />
        ))}
      </div>
    </div>
  );
};
export default Prescriptions;
