import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({products})=> (
    <div className="product-list">
        {products.map((product)=>(
            <div className="product-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <Link to={`/product/${product.id}`}>View Details</Link>
                 </div>
        ))}
    </div>
);

export default ProductList;