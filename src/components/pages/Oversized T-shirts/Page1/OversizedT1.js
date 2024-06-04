import React from "react";
import "../Page1/oversizedDetails.css";

import { Link } from "react-router-dom";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { Data } from "../../Home/Oversized T-shirts/oversizeData";

function OversizedT1() {
  // const [data, setData] = useState(Data);
  const page1 = Data.filter((item) => item.id <= 12);
  return (
    <div className="over-main2">
      

      <div className="oversized-image-grid">
        {page1.map((item) => (
          <Link
            className="oversize-link"
            key={item.id}
            to={`/oversized-Tees/${item.id}`}
          >
            <div className="oversize-image-card">
              <img className="oversize-image" src={item.image} alt="" />
              <div className="oversized-image-details">
                <p className="product-title">{item.title}</p>
                <p className="product-price-main">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="next-page">
        <Link to={"/oversized-page1"}>
          <GoChevronLeft className="left-arrow" />
        </Link>

        <Link to={"/oversized-page1"}>
          <p>1</p>
        </Link>
        <Link to={"/oversized-page2"}>
          <p>2</p>
        </Link>
        <Link to={"/oversized-page2"}>
          <GoChevronRight className="right-arrow" />
        </Link>
      </div>
    </div>
  );
}

export default OversizedT1;
