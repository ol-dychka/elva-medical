import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import api from "@/api/api";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/user";
import axios from "axios";

const PaymentForm = ({ amount, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createResult = await api.post("payment/create", {
        amount,
      });
      console.log(createResult);
      const { clientSecret } = createResult.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: "Your Name" },
        },
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        // deleting the payment and updating the user
        const res = await api.post(`payment/${id}`);
        console.log("new user", res.data);
        dispatch(setUser({ ...res.data }));
      }
    } catch (err) {
      if (axios.isAxiosError(err)) console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#1e2932",
              fontFamily: "Arial, sans-serif",
              "::placeholder": {
                color: "#868d8f",
              },
            },
            invalid: {
              color: "#ef476f",
            },
          },
          hidePostalCode: true,
        }}
      />
      <button
        type="submit"
        className="bg-springgreen m-2 w-full rounded-lg p-1 text-white"
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
