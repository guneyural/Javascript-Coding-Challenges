import React, { useState, useEffect, useRef } from "react";
import ModalBox from "./modalBox";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector("html").style.overflow = "hidden";
      //btnRef.current.style.marginTop = "45px";
    } else {
      document.querySelector("html").style.overflow = "auto";
      //btnRef.current.style.marginTop = "0px";
    }
  }, [isModalOpen]);

  return (
    <section>
      <button
        className="modal-btn"
        ref={btnRef}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Open Modal
      </button>
      {isModalOpen ? (
        <section className="modal-box">
          <ModalBox
            content="You opened the modal box. Click X to close this modal box."
            setIsModalOpen={setIsModalOpen}
          />
        </section>
      ) : (
        ""
      )}
    </section>
  );
};

export default Modal;
