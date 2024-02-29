const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  longDesc: String,
  image: String,
  category: String,
  rating: Number,
  slug: {
    type: String,
    required: true,
    unique: true, // Ensure that the slug is unique across all products
  },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
