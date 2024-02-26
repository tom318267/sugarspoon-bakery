import dbConnect from "../../../lib/mongodb";
import Order from "../../../models/Order";
import User from "../../../models/User";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const orders = await Order.find({})
        .populate("user")
        .populate("products.product");
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).end(); // Method Not Allowed
  }
}
