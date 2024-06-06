import React from "react";
import "./basics.css";
import { Link } from "react-router-dom";
import { Data } from "../Home/Top Basic/topBasicimages/TopbasicData";
function Basics() {
  const page1 = Data.filter((item) => item.id <= 15);
  return (
    <div>
      <div className="over-mainn">
        <div className="oversized-image-grid">
          {page1.map((item) => (
            <Link
              className="oversize-link"
              key={item.id}
              to={`/oversized-basics/${item.id}`}
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
    </div>
  );
}

export default Basics;
