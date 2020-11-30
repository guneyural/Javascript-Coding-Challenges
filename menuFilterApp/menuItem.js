import React from "react";

const MenuItem = (props) => {
  const { desc, img, price, title } = props;
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <section className="img-section">
            <img src={img} alt={title} className="menu-item-img" />
          </section>
        </div>
        <div className="col-lg-6 menu-item-second-col">
          <div className="menu-item-header">
            <p className="menu-item-title">{title}</p>
            <p className="menu-item-price">${Math.floor(price)}</p>
          </div>
          <p className="menu-item-info">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default MenuItem;

