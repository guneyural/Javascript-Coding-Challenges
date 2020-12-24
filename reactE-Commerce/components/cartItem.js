import React from "react";
import Quantity from "./quantity";
import { FaTrash } from "react-icons/fa";
import { priceConverter } from "../utils/helper";
import { useDispatch } from "react-redux";

const CartItem = ({ removeItem, item }) => {
  const { productId, color, qty, price, stock, image, name } = item;
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="row">
        <div
          className="column col-sm-3"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={image}
            alt={name}
            className="img-fluid"
            style={{
              objectFit: "cover",
              width: "95px",
              height: "80px",
              borderRadius: "6px",
            }}
          />
          <section
            className="cart-item-info ml-3"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {name}
            </p>
            <span style={{ display: "flex" }}>
              <p style={{ color: "#5f5f5f" }}>Color:</p>
              <div
                className="cart-item-color"
                style={{
                  background: color,
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  marginTop: "-6px",
                  marginLeft: "5px",
                }}
              ></div>
            </span>
            <p className="cart-item-price-mobile">{priceConverter(price)}</p>
          </section>
        </div>
        <div className="column col-sm-2 price-column mt-3">
          <p style={{ fontWeight: "bold", color: "#444444" }}>
            {priceConverter(price)}
          </p>
        </div>
        <div className="column col-sm-3 mt-3 qty-column">
          <Quantity
            number={qty}
            max={stock}
            productId={productId}
            color={color}
          />
        </div>
        <div
          className="column col-sm-4 mt-3 sub-total-column"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>{priceConverter(price * qty)}</p>
          <button
            style={{
              marginTop: "-15px",
              color: "red",
              borderColor: "transparent",
              background: "transparent",
            }}
            onClick={() => dispatch(removeItem(productId, color))}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
