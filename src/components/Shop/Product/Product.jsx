import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  console.log(product);
  const { name, img, price } = product;
  return (
    <div className="col-md-4 ">
      <div class="card h-100 border-0 shadow-lg  position-relative p-2 ">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body ">
          <h5 class="card-title"> {name} </h5>
          <h6 className="mb-3"> Price: {price} </h6>

          <button
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
