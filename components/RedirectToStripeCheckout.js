import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
); // Replace with your Stripe publishable key

const RedirectToStripeCheckout = ({ sessionId }) => {
  useEffect(() => {
    const redirectToCheckout = async () => {
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    };

    if (sessionId) {
      redirectToCheckout();
    }
  }, [sessionId]);

  return <div>Loading...</div>;
};

export default RedirectToStripeCheckout;
