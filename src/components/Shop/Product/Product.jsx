import React from "react";

const Product = ({ product }) => {
  console.log(product);
  const {name,img,price} = product
  return (
     <div className="col-md-4">
        <div class="card h-100 ">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title"> {name} </h4>
               <h5> Price: {price} </h5>
               <button className="btn btn-primary" > Add To Cart  </button>
          </div>
        </div>
        </div>

  );
};

export default Product;
