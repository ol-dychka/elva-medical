import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { formatDate } from "@/helpers/formatDate";
import Icon from "@/icons/Icon";

const Payment = ({ payment }) => {
  const stripePromise = loadStripe(
    "pk_test_51N11SGBFUFAjc34BQt3itoHm7xnXCpvG1anMY0BsSWYCmkXm6NiLEMOhifa8qbYemql0eX12D2t03bNZ3nOJLcfT00QfWfV4Ee",
  );

  const { title, issueDate, amount, id } = payment;
  const formattedIssueDate = formatDate(issueDate);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-lg [&>*]:p-4">
      <div className="bg-springgreen flex items-center justify-between rounded-t-lg font-semibold text-white">
        <div className="flex items-center gap-4">
          <Icon name="money" className="text-white" />
          <p>{title}</p>
        </div>
        {`$ ${amount / 100}.00`}
      </div>
      <div className="bg-ghostwhite dark:bg-gunmetal space-y-4 rounded-b-lg dark:text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon name="clock" className="text-richblack dark:text-white" />
            <p>{formattedIssueDate}</p>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <Icon
              name="arrow"
              className={`text-richblack ${isOpen ? "rotate-270" : "rotate-90"} transform transition-transform duration-300 ease-in-out dark:text-white`}
            />
          </button>
        </div>
        {isOpen && (
          <Elements stripe={stripePromise}>
            <PaymentForm amount={amount} id={id} />
          </Elements>
        )}
      </div>
    </div>
  );
};
export default Payment;
