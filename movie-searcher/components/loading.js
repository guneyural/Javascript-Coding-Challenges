import React from "react";
import LoadingIcon from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="container text-center">
      <img src={LoadingIcon} alt="loading icon" />
    </div>
  );
};

export default Loading;
