import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import "../../../styles/products.css";

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products/get")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  return (
    <>
    <h1>Produtos</h1>
    <div className="flex">
      
      {products.map((product) => (
        <div key={product.idProducts}>
          <Product
            addToCart={addToCart}
            product_idProducts={product.idProducts}
            product_name={product.product_name}
            product_description={product.product_description}
            product_price={product.product_price}
          />
        </div>
      ))}
    </div>
    </>
  );
}
