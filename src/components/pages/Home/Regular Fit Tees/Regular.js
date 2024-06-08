import React, { useState } from "react";
import "./regular.css";
import { Data } from "./regularFit Images/RegularData";
import { Link } from "react-router-dom";

function Regular() {
  const homepage = Data.filter((item) => item.id <= 4);
  return (
    <div className="over-main">
      <h1 className="over-header">Regular Fit Tees</h1>

      <div className="oversized-image-grid">
        {homepage.map((item) => (
          <Link
            className="oversize-link"
            key={item.id}
            to={`/regular-tees/${item.id}`}
          >
            <div className="oversize-image-card">
              <img className="oversize-image" src={item.image} alt="" />

              <div className="oversized-image-details">
                <p className="product-title">{item.title}</p>
                <p className="product-price">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to={"/regular-tees"} >
      <div className="view-div">
        <button className="view-button">view all</button>
      </div>
      </Link>
    </div>
  );
}

export default Regular;
