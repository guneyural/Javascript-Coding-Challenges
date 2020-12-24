import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const cart = useSelector((state) => state.Cart);

  useEffect(() => {
    document.querySelectorAll(".sidenav a").forEach((item) => {
      item.addEventListener("click", () => {
        setIsMobileNavOpen(false);
      });
    });
  }, []);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    const getScreenWidth = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", getScreenWidth);

    if (windowSize > 680) {
      document.body.style.overflow = "auto";
    } else if (windowSize <= 680 && isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, [windowSize]);

  return (
    <div className="top-nav">
      <div className="nav-wrapper">
        <Link to="/" className="navbar-item">
          <h1 className="nav-brand">
            Guney<span className="gradient-text">RaŁ</span>
          </h1>
        </Link>
        <ul>
          <li data-name="home">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <div className="nav-item-underline"></div>
          </li>
          <li data-name="about">
            <Link to="/about" className="navbar-item">
              About
              <div className="nav-item-underline"></div>
            </Link>
          </li>
          <li data-name="products">
            <Link to="/products" className="navbar-item">
              Products
              <div className="nav-item-underline"></div>
            </Link>
          </li>
        </ul>
        <ul>
          <Link to="/cart" className="navbar-item">
            <li className="navbar-cart" data-name="cart">
              Cart <FaShoppingCart />
              <span className="cart-item-count">
                {cart.itemCount > 9 ? "9+" : cart.itemCount}
              </span>
            </li>
          </Link>
        </ul>
        <button
          onClick={() => setIsMobileNavOpen(true)}
          className="burger-icon"
        >
          <FaBars />
        </button>
      </div>

      <div className={isMobileNavOpen ? "sidenav sidenav-active" : "sidenav"}>
        <section className="sidenav-top">
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" className="navbar-item">
              <h1 className="nav-brand">
                Guney<span className="gradient-text">RaŁ</span>
              </h1>
            </Link>
            <button
              className="close-icon"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <FaTimes />
            </button>
          </section>
          <div className="sidenav-gradient"></div>
        </section>
        <section className="sidenav-links">
          <ul>
            <Link to="/" className="sidenav-item">
              <li>Home</li>
            </Link>
            <Link to="/about" className="sidenav-item">
              <li>About</li>
            </Link>
            <Link to="/products" className="sidenav-item">
              <li>Products</li>
            </Link>
          </ul>
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "white",
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
          }}
        >
          <div className="sidenav-gradient"></div>
          <ul>
            <Link to="/cart">
              <li
                className="navbar-cart sidenav-item"
                style={{
                  display: "inline-block",
                  fontSize: "30px",
                  marginRight: "40px",
                }}
              >
                Cart <FaShoppingCart />
                <span
                  className="cart-item-count"
                  style={{ marginTop: "8px", marginLeft: "8px" }}
                >
                  {cart.itemCount > 9 ? "9+" : cart.itemCount}
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
