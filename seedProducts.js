require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

require("dotenv").config({ path: "./.env.local" });

const products = [
  {
    name: "Signature Sourdough Bread",
    description:
      "Our signature sourdough bread is a true labor of love, fermented over 24 hours for the perfect crust and tangy flavor.",
    price: 5.99,
    image: "/sourdough.jpg",
  },
  {
    name: "Decadent Chocolate Croissants",
    description:
      "Buttery, flaky, and filled with rich, melt-in-your-mouth chocolate, our croissants are a heavenly treat at any time of the day.",
    price: 3.99,
    image: "/choccroissant4.jpg",
  },
  {
    name: "Rainbow Cupcake",
    description:
      "A whimsical treat that's as beautiful as it is delicious! This enchanting confection is a true masterpiece of culinary artistry, perfect for brightening up any occasion.",
    price: 3.99,
    image: "/rainbowcupcake.jpg",
  },
];

const mongoDB = process.env.MONGODB_URI;

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("MongoDB connected successfully.");
    try {
      const insertedProducts = await Product.insertMany(products);
      console.log(`Successfully inserted ${insertedProducts.length} products.`);
      mongoose.disconnect();
    } catch (error) {
      console.error("Error inserting products:", error);
      mongoose.disconnect();
    }
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
