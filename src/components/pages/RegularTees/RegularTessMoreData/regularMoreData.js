import { IoPricetagOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Home/Regular Fit Tees/regularFit Images/RegularData";
import Regular from "../../Home/Regular Fit Tees/Regular";

function RegularMoreData() {
  const { id } = useParams(); // Extracting id from URL params
  const [data, setData] = useState(null);
  const [activeSelector, setActiveSelector] = useState();

  useEffect(() => {
    // Filtering data based on the id
    const filteredData = Data.find((item) => item.id === parseInt(id)); // Convert id to number
    setData(filteredData);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  function activeClickHandler(event) {
    const value = event.target.value;
    setActiveSelector(value);
  }

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
        <button
          value="S"
          onClick={activeClickHandler}
          className={activeSelector == "S" ? "activee" : "size-btn"}
        >
          S
        </button>
        <button
          value="M"
          onClick={activeClickHandler}
          className={activeSelector == "M" ? "activee" : "size-btn"}
        >
          M
        </button>
        <button
          value="L"
          onClick={activeClickHandler}
          className={activeSelector == "L" ? "activee" : "size-btn"}
        >
          L
        </button>
        <button
          value="XL"
          onClick={activeClickHandler}
          className={activeSelector == "XL" ? "activee" : "size-btn"}
        >
          XL
        </button>
        <br />
        <button className="cart-btn">Add to cart</button>
      </div>
    </div>
    <Regular/>
    </div>
  );
}

export default RegularMoreData;
