import React, { useState } from "react";

const Card = ({ tour, removeTour }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, name, info, image, price } = tour;
  const shortInfo = info.slice(0, 200);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <img src={image} className="tour-img" alt={`View from ${name}`} />
      <section className="card-header-section">
        <p className="tour-name">{name}</p>
        <p className="tour-price">${price}</p>
      </section>
      <section className="card-content-section">
        {isExpanded ? (
          <>
            <p className="tour-info">
              {info}
              <span className="read-more" onClick={() => handleReadMore()}>
                Show Less
              </span>
            </p>
          </>
        ) : (
          <>
            <p className="tour-info">
              {shortInfo}...
              <span className="read-more" onClick={() => handleReadMore()}>
                Read More
              </span>
            </p>
          </>
        )}
      </section>
      <section className="card-bottom-section">
        <button onClick={() => removeTour(id)} className="remove-btn">
          Not Interested
        </button>
      </section>
    </>
  );
};

export default Card;
