import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import api from "@/api/api.js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/payment/create", {
      amount: 1000,
    });
    console.log(res);
    const { clientSecret } = res.data;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: "Your Name" },
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log("Payment succeeded:", result.paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
