import React from "react";
import Bike from "./Bike/Bike";
import "./Cart.css";
const Cart = ({ cart }) => {
  // console.log('from cart',cart);
  const { name, img} = cart

  return (
    <div>
        <Bike name={name} img={img} />
    </div>
  );
};

export default Cart;
