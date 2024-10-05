import { IoPricetagOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Home/Regular Fit Tees/regularFit Images/RegularData";
import Regular from "../../Home/Regular Fit Tees/Regular";
import AddToCartButton from "../../../accessories/AddToCartButton";

function RegularMoreData({ toggleCart }) {
  const { id } = useParams(); // Extracting id from URL params
  const [data, setData] = useState(null);
  const [items, setItems] = useState(Data);
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

  const decqty = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };

  const incqty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };

  const currentItem = items.find((item) => item.id === parseInt(id));
  return (
    <div>
      <div className="details-main-container">
        <img src={data.image} alt="singleImage" className="product-image" />
        <div className="Details-info">
          <h2 className="title">{data.title}</h2>
          <p className="price">{data.price}</p>

          <p className="tax-p">Tax included.</p>

          <p className="offer">
            <IoPricetagOutline className="offer-icons" /> Buy 2 get ₹100 off!
            code -B2
          </p>
          <p className="offer">
            <IoPricetagOutline className="offer-icons" /> Buy 4 Get 1 free (Add
            any % to Cart)
          </p>
          <p className="offer">
            <CiDeliveryTruck className="offer-icons" /> Free Shipping on all
            prepaid orders
          </p>
          <div className="Qty">
            <p>
              Qty:
              <button onClick={() => decqty(currentItem.id)} className="m-1">
                -
              </button>
              {currentItem.qty}
              <button onClick={() => incqty(currentItem.id)} className="m-2">
                +
              </button>
            </p>
          </div>
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
          {/* <button className="cart-btn">Add to cart</button> */}
          <AddToCartButton onClick={toggleCart} />
        </div>
      </div>
      <Regular />
    </div>
  );
}

export default RegularMoreData;
