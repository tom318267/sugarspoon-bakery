const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
