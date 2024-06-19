import React from "react";
import { Link } from "react-router-dom";
import { HData } from "./HoodiesDatas/HoodieData";

function Hoodies() {
  const hoodieData = HData.filter((item) => item.id <= 8);
  return (
    <div className="over-main">
      <h1 className="over-headerr">Hoodies</h1>
      <div className="oversized-image-grid">
        {hoodieData.map((item) => (
          <Link
            key={item.id}
            className="oversize-link"
            to={`/hoodies/${item.id}`}
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
    </div>
  );
}

export default Hoodies;
