import React from "react";

const Modal = (props) => {
  const { trueCount, setIsStart, questionLength } = props;

  return (
    <div className="modal-background">
      <div className="modal-box">
        <h1>Congrats!</h1>
        <p className="lead">
          You answered {Math.floor((trueCount * 100) / questionLength)}% of
          questions correctly
        </p>
        <button className="start-btn" onClick={() => setIsStart(false)}>
          Play Again!
        </button>
      </div>
    </div>
  );
};

export default Modal;

//x = (trueCount * 100) / questionLength;
