import React from "react";
import "../Page1/oversizedDetails.css";

import { Link } from "react-router-dom";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { Data } from "../../Home/Oversized T-shirts/oversizeData";

function OversizedT2() {
  // const [data, setData] = useState(Data);
  const page1 = Data.filter(item => item.id >= 13);
  return (
    <div className="over-main3">
  
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
        <Link to={'/oversized-page1'}>
        <GoChevronLeft  className="left-arrow"/>
        </Link>
        
        <Link to={'/oversized-page1'}>
        <p>1</p>
        </Link>
        
     
        <p>2</p>
      
        <GoChevronRight className="right-arrow" />
      </div>
    </div>
  );
}

export default OversizedT2;
