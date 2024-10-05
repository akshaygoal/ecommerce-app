import React from "react";

function AddToCartButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="cart-btn open">
        Add To Cart
      </button>
    </div>
  );
}

export default AddToCartButton;
