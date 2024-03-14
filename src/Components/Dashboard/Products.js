import React from "react";
import Cards from "./Card";


const Products = ({ products }) => {
    console.log(products);
  return (
    <>
    <div style={{ margin:'20px', color:'#021E39'}}>
    <h1>Products</h1>
    </div>
    <div className="product-details">
      
      <div className="card-container">
        {products && products.map((product) => (
          <div key={product.id} className="product-card-wrapper">
            <Cards product={product} />
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Products;

