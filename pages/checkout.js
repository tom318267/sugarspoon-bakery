import React from "react";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../context/CartContext";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutPage = () => {
  const { items } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; // Example tax rate of 8%
  const total = subtotal + tax;

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe has not been initialized correctly.");
      return; // Prevent further execution if Stripe hasn't loaded
    }

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white shadow-md rounded-lg mx-auto my-10 p-8 max-w-2xl"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center playfair-display">
        Order Summary
      </h2>
      <motion.ul className="divide-y divide-gray-200 mb-6 montserrat-med">
        {items.map((item, index) => (
          <motion.li key={index} className="flex justify-between py-4">
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <span className="text-lg font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </motion.li>
        ))}
      </motion.ul>
      <div className="border-t border-gray-200 mt-6 pt-6 montserrat-med">
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">${total.toFixed(2)}</span>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCheckout}
        className="mt-4 bg-accent text-white text-[1.125rem] w-full py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
      >
        Proceed to Checkout
      </motion.button>
    </motion.div>
  );
};

export default CheckoutPage;
