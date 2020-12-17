import React, { useState } from "react";
import { useSelector } from "react-redux";

const RateLimit = () => {
  const { limit, remaining, isAvailable } = useSelector(
    (state) => state.RateLimit
  );

  if (!isAvailable) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="limit-info pt-4">You've reached your search limits.</p>
      </div>
    );
  }

  return (
    <>
      <p className="limit-info limit-info-numbers pt-2">
        {remaining} / {limit}
      </p>
    </>
  );
};

export default RateLimit;
