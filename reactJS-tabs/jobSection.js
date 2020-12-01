import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobSection = (props) => {
  const { company, dates, duties, title } = props;
  return (
    <>
      <h3 className="job-title">{title}</h3>
      <span className="job-company">{company}</span>
      <p className="text-muted job-date">{dates}</p>
      {duties.map((item) => {
        return (
          <section key={uuidv4()} className="duty-item">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p className="duty">{item}</p>
          </section>
        );
      })}
      <section className="btn-section">
        <button className="more-btn">More Info</button>
      </section>
    </>
  );
};

export default JobSection;
