

import React from "react";
import "./HoodiesCart.css";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

function HoodiesCart({ isOpen, toggleCart }) {
  return (
    <div className={`cart-main-container ${isOpen ? "open" : "closed"}`}>
      <div className="head-section">
        <SlArrowRight className="head-icon" onClick={toggleCart} />
        <h1 className="head">Your cart</h1>
      </div>
      <div className="cart-items">
        <div className="empty-cart">
          <h4>Cart is Empty</h4>
          <Link to={"/oversized-page1"}>
            <button>Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HoodiesCart;
