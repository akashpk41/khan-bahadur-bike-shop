import React from "react";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="shop-container container-fluid ">
      <div className="row text-center ">
        <div className=" col-12 col-md-8 products-container">
          <h4 className='' >Buy Now. What You Want</h4>
        </div>
        <div className=" col-12 col-md-4 cart-container">
          <h5>Order Summury</h5>
        </div>
      </div>
    </div>
  );
};

export default Shop;
