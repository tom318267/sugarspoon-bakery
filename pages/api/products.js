// pages/api/products.js
import dbConnect from "../../lib/mongodb";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    case "POST":
      try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
