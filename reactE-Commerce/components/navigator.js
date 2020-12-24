import React from "react";
import { Link } from "react-router-dom";

const Navigator = ({ currentPage, isProductPage, firstLink, secondLink }) => {
  if (!isProductPage) {
    return (
      <div className="navigator">
        <div className="container">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <h2 style={{ color: "#696969" }}>/</h2>
          <Link to={currentPage}>
            <h2 className="navigator-active">{currentPage.substring(1)}</h2>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="navigator">
      <div className="container">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <h2 style={{ color: "#696969" }}>/</h2>
        <Link to="/products">
          <h2>Products</h2>
        </Link>
        <h2 style={{ color: "#696969" }}>/</h2>
        <Link to={currentPage}>
          <h2 className="navigator-active">{secondLink}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navigator;
