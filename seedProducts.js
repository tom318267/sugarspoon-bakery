require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

require("dotenv").config({ path: "./.env.local" });

const products = [
  {
    name: "Signature Sourdough Bread",
    description:
      "Our signature sourdough bread is a true labor of love, fermented over 24 hours for the perfect crust and tangy flavor.",
    price: 9.99,
    image: "/sourdough.jpg",
    category: "Bread",
    longDesc:
      "At Sugar Spoon Bakery, we believe that great sourdough bread is a labor of love. That's why we take the time to nurture our dough, allowing it to ferment slowly and naturally to develop its distinctive tangy flavor and airy crumb. Our time-honored fermentation process not only enhances the taste of the bread but also contributes to its exceptional texture and shelf life, ensuring that each slice is a delight to the senses.",
    rating: 5,
    slug: "signature-sourdough-bread",
  },
  {
    name: "Decadent Chocolate Croissants",
    description:
      "Buttery, flaky, and filled with rich, melt-in-your-mouth chocolate, our croissants are a heavenly treat at any time of the day.",
    price: 8.99,
    image: "/croissants.jpg",
    category: "Pastries",
    longDesc:
      "What sets our Chocolate Croissants apart is the generous filling of premium chocolate that awaits within. Rich, indulgent, and perfectly balanced, our chocolate filling is made from the finest cocoa beans, ensuring a velvety smoothness and depth of flavor that will leave you craving more. Whether you're enjoying it as a morning indulgence, an afternoon pick-me-up, or a midnight snack, our Chocolate Croissants are guaranteed to satisfy your sweet tooth and lift your spirits.",

    rating: 5,
    slug: "decadent-chocolate-croissants",
  },
  {
    name: "Rainbow Cupcake",
    description:
      "A whimsical treat that's as beautiful as it is delicious! This enchanting confection is a true masterpiece of culinary artistry, perfect for brightening up any occasion.",
    price: 7.99,
    image: "/rainbowcupcakes.jpg",
    category: "Sweets",
    longDesc:
      "Crafted with care and attention to detail, our Rainbow Cupcakes are a labor of love from start to finish. From mixing and baking the perfect batter to meticulously layering each vibrant hue, our bakers pour their hearts and souls into every cupcake, ensuring that each one is a work of art that's as beautiful as it is delicious.",

    rating: 5,
    slug: "rainbow-cupcakes",
  },
  {
    name: "Chocolate Chip Cookies",
    description:
      "Indulge in the classic combination of rich, buttery dough and decadent chocolate chunks with our irresistible Chocolate Chip Cookies.",
    price: 8.99,
    image: "/chocolatechip.jpg",
    category: "Sweets",
    longDesc:
      "Savor the classic comfort of our Chocolate Chip Cookies, where every bite is a blend of crispy edges and a soft, chewy center. These cookies are a timeless treat, baked to golden perfection and loaded with generous chunks of rich, melt-in-your-mouth chocolate chips. Our recipe honors the traditional homemade taste, using only the finest ingredients like real butter, brown sugar for a deep caramel undertone, and a hint of vanilla to enhance the flavors.",
    rating: 4,
    slug: "chocolate-chip-cookies",
  },
  {
    name: "Chocolate Frosted Donuts",
    description:
      "Indulge in the ultimate sweet treat with our Chocolate Frosted Donuts, generously adorned with vibrant sprinkles.",
    price: 8.99,
    image: "/chocdonuts.jpg",
    category: "Pastries",
    longDesc:
      "Dive into the rich, indulgent world of our Chocolate Frosted Donuts, a true delight for all chocolate lovers. These donuts are the epitome of decadence, featuring a soft, airy base that's deep-fried to golden perfection, creating the perfect balance of a tender crumb and a slightly crisp exterior. Each donut is then lavishly coated with a thick layer of smooth, glossy chocolate frosting that's made from premium quality cocoa, offering a luxurious, deep chocolate flavor that envelops your taste buds in pure bliss.",
    rating: 4,
    slug: "chocolate-frosted-donuts",
  },
  {
    name: "Fudge Brownies",
    description:
      "Indulge in the ultimate chocolate experience with our Fudge Brownies, a heavenly treat that promises to satisfy even the most discerning of chocolate lovers.",
    price: 8.99,
    image: "/brownies.jpg",
    category: "Sweets",
    longDesc:
      "Indulge in the ultimate chocolate experience with our Fudge Brownies, a heavenly treat that promises to satisfy even the most discerning of chocolate lovers. Each brownie is a masterpiece of rich, velvety chocolate, meticulously crafted to achieve the perfect balance between a crispy, crackly top and a dense, fudgy center that melts luxuriously in your mouth.",
    rating: 5,
    slug: "fudge-brownies",
  },
  {
    name: "Cheesecake",
    description:
      "Indulge in the creamy, dreamy delight of our classic Cheesecake, a symphony of smooth texture and rich flavor that promises to elevate your dessert experience.",
    price: 9.99,
    image: "/cheesecake.jpg",
    category: "Cakes",
    longDesc:
      "Indulge in the creamy, dreamy delight of our classic Cheesecake, a symphony of smooth texture and rich flavor that promises to elevate your dessert experience. Each slice offers a luxuriously thick and velvety cream cheese filling, perfectly balanced in its sweetness and enhanced with a hint of vanilla, resting atop a buttery, crumbly graham cracker crust that provides a delightful contrast in texture.",
    rating: 5,
    slug: "cheesecake",
  },
  {
    name: "Chocolate Cake",
    description:
      "Dive into the ultimate indulgence with our Chocolate Cake, a decadent masterpiece designed to satisfy the deepest chocolate cravings.",
    price: 8.99,
    image: "/cake.jpg",
    category: "Cakes",
    longDesc:
      "Dive into the ultimate indulgence with our Chocolate Cake, a decadent masterpiece designed to satisfy the deepest chocolate cravings. This cake is a rich, moist celebration of chocolate, made with high-quality cocoa powder and layered with a velvety, smooth chocolate ganache that melts luxuriously in your mouth. Each bite is a perfect balance of sweetness and depth, offering a full-bodied chocolate flavor that's both intense and comforting.",
    rating: 5,
    slug: "chocolate-cake",
  },
  {
    name: "Apple Pie",
    description:
      "Embrace the essence of home-cooked comfort with our classic Apple Pie, a timeless dessert that captures the heart with its simple, rustic charm.",
    price: 9.99,
    image: "/applepie.jpg",
    category: "Pies",
    longDesc:
      "Embrace the essence of home-cooked comfort with our classic Apple Pie, a timeless dessert that captures the heart with its simple, rustic charm. Each pie is a handcrafted symphony of tender, juicy apples, carefully selected for their perfect balance of sweetness and tartness. These apples are gently tossed with cinnamon and a hint of nutmeg, enveloping them in a warm, aromatic spice blend that awakens the senses.",
    rating: 5,
    slug: "apple-pie",
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
