import React, { useState } from "react";
import Data from "./data";

const App = () => {
  const [paras, setParas] = useState(Data);
  const [paraCount, setParaCount] = useState(1);
  const [parasToShow, setParasToShow] = useState([]);

  const handleChange = (e) => {
    setParaCount(e.target.value);
  };

  const generatePara = () => {
    setParasToShow([]);
    let paraArr = [];
    if (paraCount > 1) {
      for (let i = 0; i < paraCount; i++) {
        paraArr.push(paras[i]);
      }
      setParasToShow(paraArr);
    }
    if (paraCount > paras.length) {
      setParasToShow(paras);
    }
    if (paraCount <= 1) {
      setParasToShow([paras[0]]);
    }
  };

  return (
    <div className="container">
      <h3>Tired of Boring Lorem Ipsum?</h3>
      <div className="input-container">
        <span>Paragraph Count:</span>
        <input
          type="number"
          name="paraCount"
          id="paraCount"
          value={paraCount}
          onChange={handleChange}
          min="1"
          max="9"
          className="number-input"
        />
        <button className="gen-para" onClick={() => generatePara()}>
          Generate
        </button>
      </div>
      <div className="para-section">
        {parasToShow.map((item, index) => {
          return (
            <p key={index} className="para">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
