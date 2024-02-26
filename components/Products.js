import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      const response = await fetch("/api/products"); // Adjust if your API route differs
      const data = await response.json();
      setProducts(data.data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
      ))}
    </section>
  );
};

export default Products;
