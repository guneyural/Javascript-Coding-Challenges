import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const WarningModal = ({ warning, setIsWarning }) => {
  useEffect(() => {
    document.querySelector(".warning-modal").classList.add("modal-active");
    setTimeout(() => {
      document.querySelector(".warning-modal").classList.remove("modal-active");
      setTimeout(() => {
        setIsWarning(false);
      }, 500);
    }, 2000);
  }, []);

  return (
    <div className="warning-container">
      <div className="warning-modal">
        <p className="error-text" style={{ paddingTop: "10px" }}>
          {warning}
        </p>
      </div>
    </div>
  );
};

export default WarningModal;
