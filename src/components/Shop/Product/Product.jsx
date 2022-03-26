import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product,addToCart }) => {
  const { name, img, price } = product;
  return (
    <div className="col-md-4 ">
      <div className="card h-100 border-0 shadow-lg  position-relative p-2 ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title"> {name} </h5>
          <h6 className="mb-3"> Price: {price} </h6>

          <button
          onClick={() => addToCart(product)}
            id="btn-card"
            className="btn w-100 btn-warning rounded-0  mt-5 p-1 "
          >
            {" "}
            Add To Cart <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
