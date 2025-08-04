import PaymentForm from "./PaymentForm";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Billing = () => {
  const stripePromise = loadStripe(
    "pk_test_51N11SGBFUFAjc34BQt3itoHm7xnXCpvG1anMY0BsSWYCmkXm6NiLEMOhifa8qbYemql0eX12D2t03bNZ3nOJLcfT00QfWfV4Ee",
  );

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Billing;
