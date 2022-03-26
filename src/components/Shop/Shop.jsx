import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  // ! fetching products data by using use effect hooks
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container container-fluid ">
      <div className="row text-center ">
        <div className=" col-12 col-md-9 products-container">
          <h4 className="my-3">Buy Now. What You Want</h4>
          {/* looping in the products json data for getting single data */}
          <div class="row g-3 ">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className=" col-12 col-md-3 cart-container  ">
          <h5 id="cart-title" className="my-3 ">Order Summury</h5>
        </div>
      </div>
    </div>
  );
};

export default Shop;
