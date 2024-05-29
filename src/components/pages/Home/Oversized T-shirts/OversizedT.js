import React from "react";
import "./oversized.css";
import { Data } from "./oversizeData";
import { Link } from "react-router-dom";

function OversizedT() {
  
  const Homepage = Data.filter((item) => item.id <= 8);
  return (
    <div className="over-main">
      <h1 className="over-headerr">Oversized T-shirts</h1>
      <div className="oversized-image-grid">
      {Homepage.map((item) => (
        <Link 
          key={item.id}
          className="oversize-link"
          to={`/oversized-Tees/${item.id}`}>
         
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
      <Link to={"oversized-page1"}>
        <div className="view-div">
          <button className="view-button">view all</button>
        </div>
      </Link>
    </div>
  );
}

export default OversizedT;
