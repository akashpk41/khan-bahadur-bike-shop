import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [display,setDisplay] = useState('none');
  const [randomBike, setRandomBike] = useState([]);
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
      alert("Sorry we can't deliver more than 4 bike right now! ");
      return;
    }
    setCart(newProducts);
  };

  // function to get a random item from an array
  const getRandomItem = (arr) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];
    if (item === undefined) {
      alert("Please choose first");
      return;
    }
    // console.log(item);
    setRandomBike(item);
    setDisplay('block')
    // return item;
  };

  // ! clear all Cart
  const clearAll = () => {
    setCart([]);
    setDisplay('none')

  };

  return (
    <div className="shop-container container-fluid ">
      <div className="row text-center ">
        <div className=" col-12 col-md-9 products-container">
          <h4 className="my-3">Buy Now. What You Want</h4>
          {/* looping in the products json data for getting single data */}
          <div className="row g-3 ">
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
            <Cart random={getRandomItem} cart={item} key={item.id} />
          ))}

          <div className={`d-${display}  bg-warning mt-3 rounded-3 `}  >
            Congratulation ! You Got
            <h5 className="bg-primary text-white" > {randomBike.name} </h5>
          </div>

          <div className="mt-3">
            <button
              onClick={() => getRandomItem(cart)}
              className="btn btn-success"
            >
              {" "}
              Choose 1 For Me{" "}
            </button>
            <button onClick={clearAll} className=" m-3 btn btn-danger">
              {" "}
              Choose Again{" "}
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
