import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container text-center">
      <h1>Looks like you've lost</h1>
      <Link to="/">
        <button className="info-btn">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
