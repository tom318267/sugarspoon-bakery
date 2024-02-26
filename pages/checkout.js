import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../context/CartContext"; // Adjust the import path according to your project structure

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutPage = () => {
  const { items } = useCart(); // Use items from CartContext

  const handleCheckout = async () => {
    console.log("Checkout button clicked");

    const stripe = await stripePromise;
    console.log("Stripe instance:", stripe); // Log the Stripe instance for debugging

    if (!stripe) {
      console.error("Stripe has not been initialized correctly.");
      return; // Prevent further execution if Stripe hasn't loaded
    }

    console.log("Initiating checkout with items:", items);

    try {
      const response = await fetch("/api/checkout/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: items }), // Use items directly from CartContext
      });

      if (!response.ok) {
        console.error(
          "Failed to receive a valid response from the server",
          response
        );
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const { sessionId } = await response.json();
      console.log("Received session ID:", sessionId);

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Stripe checkout error:", error.message);
      }
    } catch (error) {
      console.error("An error occurred during the checkout process:", error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutPage;
