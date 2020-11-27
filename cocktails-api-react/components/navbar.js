import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h2>Navbar</h2>
        </Link>
        <ul>
          <Link to="/cocktails">
            <li>Cocktails</li>
          </Link>
          <Link to="/search">
            <li>Search Cocktail</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
