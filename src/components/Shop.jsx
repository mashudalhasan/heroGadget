import React from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../Utils/FakeDB";
import ProductCard from "./Cards/ProductCard";

const Shop = () => {
  const productData = useLoaderData();

  // card button handler
  const handleAddToCart = (id) => {
    console.log(id);
    addToDb(id);
  };

  return (
    <div className="my-container">
      <div className="product-container">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
