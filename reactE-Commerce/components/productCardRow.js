import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { priceConverter } from "../utils/helper";

const ProductCardRow = ({ product }) => {
  const { id, name, price, image } = product;

  return (
    <div className="product-card-row">
      <Link to={`/product/${id}`}>
        <div className="product-card-img">
          <img src={image} alt="featured product" />
          <span>
            <FaSearch className="product-search-icon" />
          </span>
        </div>
      </Link>
      <section>
        <p>{name}</p>
        <p>{priceConverter(price)}</p>
      </section>
    </div>
  );
};

export default ProductCardRow;
