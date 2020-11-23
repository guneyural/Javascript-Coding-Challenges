import React from "react";

function Person(props) {
  const { name, age, img, id, removeItem } = props;
  return (
    <div className="person-card">
      <img src={img} alt={`Profile of ${name}`} />
      <section className="user-section">
        <h4>{name}</h4>
        <p>{age} years</p>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          Remove
        </button>
      </section>
    </div>
  );
}

export default Person;
