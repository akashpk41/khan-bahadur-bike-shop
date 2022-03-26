import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  // ! fetching products data by using use effect hooks
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // code for, if someone add bike to cart , then show bikes details
  const addToCart = (products) => {
    // const newCart = [cart]
    const newProducts = [...cart, products];
    if (newProducts.length > 4) {
      alert("Sorry we can't delivery more than 4 bike right now! ");
      return;
    }
    setCart(newProducts);
  };

  return (
    <div className="shop-container container-fluid ">
      <div className="row text-center ">
        <div className=" col-12 col-md-9 products-container">
          <h4 className="my-3">Buy Now. What You Want</h4>
          {/* looping in the products json data for getting single data */}
          <div class="row g-3 ">
            {products.map((product) => (
              <Product
                key={product.id}
                addToCart={addToCart}
                product={product}
              />
            ))}
          </div>
        </div>

        <div className=" col-12 col-md-3 cart-container  ">
          <h5 id="cart-title" className="my-3 ">
            Selected Bikes
          </h5>

          {cart.map((item) => (
            <Cart cart={item} />
          ))}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
