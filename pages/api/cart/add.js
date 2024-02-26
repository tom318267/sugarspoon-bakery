import dbConnect from "../../../lib/mongodb";
import Cart from "../../../models/Cart";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { userId, productId, quantity } = req.body;

    // Ensure quantity is a positive integer
    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    try {
      // Find the user's cart or create a new one if it doesn't exist
      let cart = await Cart.findOne({ user: userId });

      if (!cart) {
        cart = new Cart({ user: userId, items: [] });
      }

      // Check if the product is already in the cart
      const productIndex = cart.items.findIndex((item) =>
        item.product.equals(productId)
      );

      if (productIndex > -1) {
        // Update quantity of existing product
        cart.items[productIndex].quantity += quantity;
      } else {
        // Add new product to the cart
        cart.items.push({
          product: new mongoose.Types.ObjectId(productId),
          quantity,
        });
      }

      // Save the updated cart
      await cart.save();

      res.status(200).json({ message: "Item added to cart", cart });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
