import Payment from "./Payment";
import { useSelector } from "react-redux";

const Payments = () => {
  const { payments } = useSelector((state) => state.user.value);

  return (
    <div className="h-full px-4 py-8">
      <div className="w-1/2 space-y-8">
        {payments.map((payment) => (
          <Payment payment={payment} key={payment.id} />
        ))}
      </div>
    </div>
  );
};

export default Payments;
