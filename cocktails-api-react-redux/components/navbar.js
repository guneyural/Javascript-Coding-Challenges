import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="top-nav">
      <div className="nav-wrapper">
        <h2>
          <Link to="/" style={{ color: "#333333", textDecoration: "none" }}>
            The<span style={{ color: "green" }}>Cocktail</span>DB
          </Link>
        </h2>
        <section>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
