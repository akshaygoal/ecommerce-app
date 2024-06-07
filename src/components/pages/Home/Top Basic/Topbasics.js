import React from "react";
import "./topbasics.css";
import { Link } from "react-router-dom";
import { Data } from "./topBasicimages/TopbasicData";

function Topbasics() {
  const page1 = Data.filter((item) => item.id <= 4);

  return (
    <div className="over-main">
      <h1 className="over-header">Top Basics</h1>
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
      <div className="view-div">
        <Link to={"/oversized-basics"}>
          <button className="view-button">view all</button>
        </Link>
      </div>
    </div>
  );
}

export default Topbasics;
