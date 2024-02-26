// pages/api/orders/add.js
import Order from "../../../models/Order";
import dbConnect from "../../../lib/mongodb";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { user, products, total } = req.body;

    try {
      const newOrder = new Order({
        user,
        products,
        total,
      });

      await newOrder.save();
      res
        .status(201)
        .json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
