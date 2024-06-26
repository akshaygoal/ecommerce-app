import { IoPricetagOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Home/Top Basic/topBasicimages/TopbasicData";
import Topbasics from "../../Home/Top Basic/Topbasics";



function BasicsMoreData() {
  const { id } = useParams(); // Extracting id from URL params
  const [data, setData] = useState(null);
const [activeSelector,setActiveSelector]=useState( )
  useEffect(() => {
    // Filtering data based on the id
    const filteredData = Data.find((item) => item.id === parseInt(id)); // Convert id to number
    setData(filteredData);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
    <div className="details-main-container">
      <img src={data.image} alt="singleImage" className="product-image" />
      <div className="Details-info">
        <h2 className="title">{data.title}</h2>
        <p className="price">{data.price}</p>

        <p className="tax-p">Tax included.</p>

        <p className="offer">
          <IoPricetagOutline className="offer-icons" /> Buy 2 get ₹100 off! code
          -B2
        </p>
        <p className="offer">
          <IoPricetagOutline className="offer-icons" /> Buy 4 Get 1 free (Add
          any % to Cart)
        </p>
        <p className="offer">
          <CiDeliveryTruck className="offer-icons" /> Free Shipping on all
          prepaid orders
        </p>
        <p>Size</p>
        <button className="size-btn">S</button>
        <button className="size-btn">M</button>
        <button className="size-btn">X</button>
        <button className="size-btn">XL</button>
        <br />
        <button className="cart-btn">Add to cart</button>
      </div>
      </div>
      <Topbasics />

    </div>
    
  );
}

export default BasicsMoreData;
