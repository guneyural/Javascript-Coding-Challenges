import React from "react";
import LoadingIcon from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="not-found-container">
      <img src={LoadingIcon} alt="spinner is spinning" />
    </div>
  );
};

export default Loading;
