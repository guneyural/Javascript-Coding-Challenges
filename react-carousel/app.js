import React, { useState } from "react";
import Data from "./Data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [slides, setSlides] = useState(Data);
  const [index, setIndex] = useState(0);
  const [className, setClassName] = useState("slide-active");

  const slideRight = () => {
    document.querySelectorAll("article").forEach((item) => {
      item.classList.remove("slide-active-prev");
      item.classList.remove("slide-active-next");
    });
    if (index >= slides.length - 1) {
      setIndex(0);
      document
        .querySelector(`article[value="1"`)
        .classList.add("slide-active-next");
    } else {
      setIndex(index + 1);
      document
        .querySelector(`article[value="${index + 2}"]`)
        .classList.add("slide-active-next");
    }
  };

  const slideLeft = () => {
    document.querySelectorAll("article").forEach((item) => {
      item.classList.remove("slide-active-prev");
      item.classList.remove("slide-active-next");
    });
    if (index <= 0) {
      setIndex(slides.length - 1);
      document
        .querySelector(`article[value="4"`)
        .classList.add("slide-active-prev");
    } else {
      setIndex(index - 1);
      document
        .querySelector(`article[value="${index}"]`)
        .classList.add("slide-active-prev");
    }
  };

  return (
    <div className="container">
      <h1 className="page-header">
        <span style={{ color: "#BA5C2D" }}>/ </span> Reviews
      </h1>
      <div className="slider">
        <button className="slide-left" onClick={() => slideLeft()}>
          <FiChevronLeft />
        </button>
        {slides.map(({ id, image, name, title, quote }) => {
          return (
            <article
              key={id}
              value={id}
              id="slider"
              style={id === index + 1 ? { opacity: 1 } : { opacity: 0 }}
            >
              <img src={image} alt={name} className="user-img" />
              <p className="username">{name}</p>
              <p className="job-title">{title}</p>
              <p className="quote">{quote}</p>
              <FaQuoteRight className="quote-icon" />
            </article>
          );
        })}
        <button className="silde-right" onClick={() => slideRight()}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default App;
