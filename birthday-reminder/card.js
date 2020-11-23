import React, { useState } from "react";
import { data } from "./data";
import Person from "./person";

function Card() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const getPeople = people.map((person) => {
    return (
      <section key={person.id}>
        <Person {...person} removeItem={removeItem} />
      </section>
    );
  });

  return (
    <div class="user-list">
      <p className="birthday-count">{people.length} Birthdays Today</p>
      {getPeople}
      <button className="clear-all-btn" onClick={() => clearAll()}>
        Clear All
      </button>
    </div>
  );
}

export default Card;
