import React from "react";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service-card">
      <span className="icon-bg">
        <span className="service-icon">{icon}</span>
      </span>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-text">{text}</p>
    </div>
  );
};

export default ServiceCard;
