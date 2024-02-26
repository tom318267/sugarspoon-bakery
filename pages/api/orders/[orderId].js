import dbConnect from "../../../lib/mongodb";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  await dbConnect();

  const { orderId } = req.query;

  if (req.method === "PUT") {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        req.body,
        { new: true } // Return the updated document
      );

      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).end(); // Method Not Allowed
  }
}
