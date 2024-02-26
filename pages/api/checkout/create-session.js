import Stripe from "stripe";
import dbConnect from "../../../lib/mongodb";
import Product from "../../../models/Product"; // Assuming you need product details from your DB

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { cartItems } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ error: "Cart is empty" });
  }

  try {
    // Optionally, validate the cart items or enrich them with data from your database
    const lineItems = await Promise.all(
      cartItems.map(async (item) => {
        const product = await Product.findById(item._id).exec();
        if (!product) {
          throw new Error(`Product with ID ${item._id} not found`);
        }
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100, // Assuming price is stored as a decimal
          },
          quantity: item.quantity,
        };
      })
    );

    // Create Stripe Checkout session with these line items
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/payment-cancelled`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    res.status(500).json({ error: error.message });
  }
}
