import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Use addToCart from CartContext

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Data could not be fetched");
        const data = await response.json();

        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
          )}
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
