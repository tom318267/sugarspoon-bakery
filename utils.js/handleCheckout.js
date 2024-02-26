import { loadStripe } from "@stripe/stripe-js";

// Load the Stripe script with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const handleCheckout = async (userId) => {
  console.log(userId);
  try {
    const stripe = await stripePromise;

    // Call your backend to create the checkout session
    const response = await fetch("/api/checkout/create-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const session = await response.json();

    // Redirect to the Stripe Checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (result.error) {
      // Handle errors here, such as displaying a notification to the user
      console.error(
        "Error during redirect to Stripe Checkout:",
        result.error.message
      );
    }
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error("Error during checkout process:", error.message);
  }
};

export default handleCheckout;
