import React from "react";
import LoadingIcon from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading-section">
      <img src={LoadingIcon} alt="loading icon" className="loading" />
    </div>
  );
};

export default Loading;
