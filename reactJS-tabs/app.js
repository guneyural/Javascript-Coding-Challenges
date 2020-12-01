import React, { useEffect, useState, useRef } from "react";
import JobSection from "./jobSection";
import Axios from "axios";

const App = () => {
  const BASE_URL = "https://course-api.com/react-tabs-project";
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);
  const bottomSlider = useRef(null);

  useEffect(() => {
    Axios.get(BASE_URL)
      .then((response) => response.data)
      .then((data) => {
        setTabs(data);
        setIsLoading((prevLoading) => {
          return !prevLoading;
        });
        setCurrentTab(0);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e) => {
    if (e.target.innerText === "TOMMY") {
      sliderRef.current.style.top = "22px";
      bottomSlider.current.style.left = "-25px";
      document
        .querySelectorAll(".tab-section li")
        .forEach((item) => (item.className = "tab-nav"));
      e.target.className += " tab-nav-active";

      setCurrentTab(e.target.getAttribute("dataid"));
    }
    if (e.target.innerText === "BIGDROP") {
      sliderRef.current.style.top = "100px";
      bottomSlider.current.style.left = "72px";
      document
        .querySelectorAll(".tab-section li")
        .forEach((item) => (item.className = "tab-nav"));
      e.target.className += " tab-nav-active";
      setCurrentTab(e.target.getAttribute("dataid"));
    }
    if (e.target.innerText === "CUKER") {
      sliderRef.current.style.top = "170px";
      bottomSlider.current.style.left = "168px";
      document
        .querySelectorAll(".tab-section li")
        .forEach((item) => (item.className = "tab-nav"));
      e.target.className += " tab-nav-active";
      setCurrentTab(e.target.getAttribute("dataid"));
    }
  };

  return (
    <div className="container tabs-container">
      {isLoading ? (
        <h1 className="display-4 text-center">Loading...</h1>
      ) : (
        <div>
          <h1 className="tab-header">Experience</h1>
          <div className="header-bottom-line"></div>
          <section className="tab-section">
            <div className="row">
              <div className="col-lg-2">
                <div className="slider-left" ref={sliderRef}></div>
                <ul className="tab-nav-ul">
                  {tabs.map((tab, index) => {
                    return (
                      <li
                        className={
                          index === 0 ? "tab-nav tab-nav-active" : "tab-nav"
                        }
                        value={tab.company}
                        key={tab.id}
                        onClick={(e) => handleClick(e)}
                        dataid={index}
                      >
                        {tab.company}
                      </li>
                    );
                  })}
                  <div className="slider-bottom" ref={bottomSlider}></div>
                </ul>
              </div>
              <div className="col-lg-10">
                <JobSection {...tabs[currentTab]} />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
