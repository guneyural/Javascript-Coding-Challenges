import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const Cart = useSelector((state) => state.cart);

  return (
    <div className="top-nav">
      <div className="nav-wrapper">
        <h3>Shopping Cart</h3>
        <p className="nav-item-count">Items In Cart: {Cart.itemCount}</p>
      </div>
    </div>
  );
};

export default Navbar;
