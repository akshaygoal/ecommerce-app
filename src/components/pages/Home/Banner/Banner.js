import React from "react";

import BG2 from "./BCG3.jpg";

import "./Banner.css";
function Banner() {
  return (
    <>
      <div className="brand-img">
        <div>
          <img className="BG2" src={BG2} alt="bch3" />
        </div>
        <div>
          <img className="BG2" src={BG2} alt="bch3" />
        </div>
        <div>
          <img className="BG2" src={BG2} alt="bch3" />
        </div>
      </div>
    </>
  );
}

export default Banner;
