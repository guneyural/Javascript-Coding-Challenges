import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="container error-container">
      <div>
        <FaExclamationTriangle className="error-icon" />
      </div>
      <h1 className="mb-4">Couldn't Find This Page.</h1>
      <Link to="/">
        <button className="go-home-btn">Go Back To Home</button>
      </Link>
    </div>
  );
};

export default Error;
