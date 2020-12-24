import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ isMessage, message }) => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      {isMessage ? <p> {message}</p> : <p>Could Not Find Page.</p>}
      <Link to="/">
        <button className="default-btn">Go Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
