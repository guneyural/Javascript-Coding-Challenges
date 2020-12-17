import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page Could Not Found.</p>
      <Link to="/">
        <button className="default-btn">Go Back To Home</button>
      </Link>
    </div>
  );
};

export default Page404;
