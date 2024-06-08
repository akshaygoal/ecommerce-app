import React, { useState } from "react";


import { Link } from "react-router-dom";
import { Data } from "../Home/Regular Fit Tees/regularFit Images/RegularData";

function Regular() {

 const homepage = Data.filter((item)=> item.id <=24)
  return (
    <div className="over-main">
      <h1 className="over-header">Regular Fit Tees</h1>

      <div className="oversized-image-grid">
        {homepage.map((item) => (
            <Link className="oversize-link"
            key={item.id}
            to={`/regular-tees/${item.id}`}>
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
     
    </div>
  );
}

export default Regular;
