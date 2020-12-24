import React, { useEffect, useState } from "react";
import { priceConverter } from "../utils/helper";
import Quantity from "./quantity";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, getTotal } from "../redux/actions/cartActions";

const ProductInfo = ({
  info: {
    stock,
    price,
    colors,
    reviews,
    stars,
    description,
    company,
    name,
    id,
    images,
  },
}) => {
  const [productColor, setProductColor] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductColor(colors[0]);
    document.title = `Güney Ural - ${name}`;
  }, []);

  useEffect(() => {
    document.querySelectorAll(".colors div").forEach((item) => {
      if (item.getAttribute("data-color") === productColor) {
        item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>`;
      } else {
        item.innerHTML = "";
      }
    });
  }, [productColor]);

  const changeColor = (e) => {
    const color = e.target.getAttribute("data-color");
    if (color) {
      setProductColor(color);
    }
  };

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  const addToCart = () => {
    dispatch(
      addItem(id, productColor, quantity, price, stock, images[0].url, name)
    );
    dispatch(getTotal());
  };

  return (
    <div className="product-info" style={{ textTransform: "capitalize" }}>
      <h1>{name}</h1>
      <section
        className="stars-section"
        style={{ color: "#fcb50f", fontSize: "22px" }}
      >
        {tempStars}
        <p
          style={{
            fontWeight: "300",
            color: "var(--primary-color)",
            marginLeft: "10px",
            marginTop: "6.5px",
            fontSize: "16px",
          }}
        >
          ({reviews} Customer Reviews)
        </p>
      </section>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "26px",
          marginTop: "-10px",
          color: "#444444",
          letterSpacing: "1px",
        }}
      >
        {priceConverter(price)}
      </p>
      <p
        className="description-text"
        style={{ color: "#5f5f5f", lineHeight: "32px" }}
      >
        {description}
      </p>
      <section className="mt-1">
        <p style={{ fontWeight: "500", color: "#333333", fontSize: "17.5px" }}>
          Available:{" "}
          <span
            style={
              stock > 0
                ? { fontSize: "16px", color: "#5f5f5f" }
                : { fontSize: "16px", color: "red", fontWeight: "300" }
            }
          >
            {stock > 0 ? "In Stock" : "Out Of Stock"}
          </span>
        </p>
        <p style={{ fontWeight: "500", color: "#333333", fontSize: "17.5px" }}>
          SKU:{" "}
          <span
            style={{
              color: "#5f5f5f",
              fontSize: "16px",
              textTransform: "initial",
            }}
          >
            {id}
          </span>
        </p>
        <p style={{ fontWeight: "500", color: "#333333", fontSize: "17.5px" }}>
          Brand:{" "}
          <span style={{ color: "#5f5f5f", fontSize: "16px" }}>{company}</span>
        </p>
      </section>
      <section className="shopping-section">
        {stock > 0 && (
          <section
            style={{ fontWeight: "500", color: "#333333", fontSize: "17.5px" }}
          >
            <section
              className="colors mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              Choose Color:
              {colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="color-palette"
                    data-color={color}
                    style={{
                      background: color,
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      marginLeft: "10px",
                      paddingLeft: "0px",
                      paddingBottom: "25px",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={(e) => changeColor(e)}
                  ></div>
                );
              })}
            </section>
            <article style={{ display: "flex", alignItems: "center" }}>
              <p style={{ paddingRight: "15px" }}>Quantity: </p>
              <Quantity
                number={quantity}
                setQuantity={setQuantity}
                max={stock}
              />
            </article>
            <Link to="/cart">
              <button
                className="default-btn"
                style={{ width: "180px" }}
                onClick={() => addToCart()}
              >
                Add To Cart
              </button>
            </Link>
          </section>
        )}
      </section>
    </div>
  );
};

export default ProductInfo;
