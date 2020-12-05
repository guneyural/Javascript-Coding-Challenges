import React from "react";
import { FaTimes } from "react-icons/fa";

const modalBox = (props) => {
  const { content, setIsModalOpen } = props;
  return (
    <div className="modal-background">
      <div className="modal-box">
        <section className="modal-box-section">
          <button className="close-btn" onClick={() => setIsModalOpen(false)}>
            <FaTimes />
          </button>
        </section>
        <h1 className="modal-heading">Modal Header</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default modalBox;
