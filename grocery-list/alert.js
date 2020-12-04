import React from "react";

const Alert = ({ text, type }) => {
  const errorStyle = { background: "#e89093", padding: "0", fontSize: "14px" };
  const successStyle = {
    background: "#64bd77",
    padding: "0",
    fontSize: "14px",
  };
  return (
    <div
      className="alert"
      style={
        (type === "SUCCESS" && successStyle) || (type === "ERROR" && errorStyle)
      }
    >
      {text}
    </div>
  );
};

export default Alert;
