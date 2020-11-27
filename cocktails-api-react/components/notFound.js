import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const style = {
    textDecoration: "none",
  };

  return (
    <>
      <h1>404</h1>
      <h1>
        Page Not Found..:(
        <Link to="/" style={style}>
          Go Back To Home
        </Link>
      </h1>
    </>
  );
};

export default NotFound;
