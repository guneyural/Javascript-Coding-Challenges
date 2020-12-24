import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { priceConverter } from "../utils/helper";

const productCardDetailed = ({ product }) => {
  const { id, name, price, image, description } = product;

  return (
    <div className="product-card-detailed">
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <Link to={`/product/${id}`}>
            <div className="product-card-img">
              <img src={image} alt="featured product" />
              <span>
                <FaSearch className="product-search-icon" />
              </span>
            </div>
          </Link>
        </div>
        <div className="col-xl-8 col-lg-7 product-detailed-second-col">
          <section>
            <p
              style={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: "20px",
                letterSpacing: "0.5px",
              }}
            >
              {name}
            </p>
            <p
              style={{
                marginTop: "-10px",
                color: "#5f5f5f",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {priceConverter(price)}
            </p>
            <p style={{ color: "#3f3f3f" }}>
              {description.length > 149
                ? `${description.substr(0, 149)}...`
                : describe("", () => {})}
            </p>
            <Link to={`/product/${id}`}>
              <button className="default-btn">Details</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default productCardDetailed;
