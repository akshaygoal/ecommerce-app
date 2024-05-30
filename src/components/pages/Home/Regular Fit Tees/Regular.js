import React, { useState } from "react";
import "./regular.css";
import { Data } from "./regularFit Images/RegularData";
import { Link } from "react-router-dom";

function Regular() {
  const [data, setData] = useState(Data);

  return (
    <div className="over-main">
      <h1 className="over-header">Regular Fit Tees</h1>

      <div className="oversized-image-grid">
        {data.map((item) => (
          <div className="oversize-image-card">
          
            <img className="oversize-image" src={item.image} alt="" />
           
           
            <div className="oversized-image-details">
              <p className="product-title">{item.title}</p>
              <p className="product-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-div">
        <button className="view-button">view all</button>
      </div>
    </div>
  );
}

export default Regular;