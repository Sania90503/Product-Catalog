import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
