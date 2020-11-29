import React, { useEffect, useState } from "react";
import AccordionItem from "./accordion-item";
import Data from "./data";

const Accordion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  return (
    <>
      <div className="accordion-container">
        <div className="container">
          <div className="row">
            <div className="col-xl-3" style={{ marginTop: "10px" }}>
              <h4 className="accordion-text">
                Questions And Answers About Login
              </h4>
            </div>
            <div className="col-xl-9 second-col">
              {data.map((item) => {
                return (
                  <section key={item.id} className="accordion-item">
                    <AccordionItem {...item} />
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
