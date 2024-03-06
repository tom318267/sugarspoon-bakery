import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All"); // State to store the current filter

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Products could not be found");
        const data = await response.json();
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  // Optional: Extract categories from products
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.6 },
    },
  };

  return (
    <div>
      {/* Category Selection Dropdown */}
      <div className="flex justify-end px-6 items-center mb-4 mt-6 lg:px-[6rem]">
        <label
          htmlFor="category-filter"
          className="mr-2 montserrat-bold font-semibold"
        >
          Filter Category:
        </label>
        <select
          id="category-filter"
          onChange={(e) => setFilter(e.target.value)}
          className="appearance-none w-[40%] bg-white border border-gray-300 montserrat-med py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid with Animation */}
      <motion.div
        className="px-6 md:px-[4rem] lg:px-[6rem] grid grid-cols-1 md:grid-cols-3 gap-[2.063rem] py-[3.5rem]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products
          .filter((product) => filter === "All" || product.category === filter)
          .map((product, index) => (
            <div
              key={index}
              className="flex flex-col rounded overflow-hidden shadow-lg"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={product.image}
                  alt={product.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 bg-white">
                <h3 className="font-bold text-xl text-center text-text_color mb-2 montserrat-bold">
                  {product.name}
                </h3>
                <p className="flex-1 text-text_color text-center text-base montserrat-light">
                  {product.description}
                </p>
                <Link href={`/products/${product.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-accent w-full text-white py-3 px-4 rounded hover:bg-[#D1775D] montserrat-med btn-shadow"
                  >
                    Order Now
                  </motion.button>
                </Link>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Products;
