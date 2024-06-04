import React from "react";
import "./basics.css";
import { Data } from "../Home/Top Basic/topBasicimages/TopbasicData";
function Basics() {
  const page1 = Data.filter((item) => item.id <= 8);
  return (
    <div>
      <div className="over-mainn">
        <div className="oversized-image-grid">
          {page1.map((item) => (
            <div className="oversize-image-card">
              <img className="oversize-image" src={item.image} alt="" />
              <div className="oversized-image-details">
                <p className="product-title">{item.title}</p>
                <p className="product-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basics;
