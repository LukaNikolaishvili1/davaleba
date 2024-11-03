// Api.jsx
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Api = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.thumbnail}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Api;
