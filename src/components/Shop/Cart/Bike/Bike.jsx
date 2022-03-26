import React from "react";
import "./Bike.css";
const Bike = ({ name, img }) => {
  return (
    <div
      id="selected-bikes"
      className="d-flex mt-3 align-items-center justify-content-evenly bg-gradient "
    >
      <img id="bike-img" src={img} alt="" />
      <p id="bike-name" className="fw-bold">
        {name}{" "}
      </p>
    </div>
  );
};

export default Bike;
