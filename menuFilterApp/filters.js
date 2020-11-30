import React, { useState, useEffect, useRef } from "react";
import MenuItem from "./menuItem";
import Data from "./data";

const Filters = () => {
  const filters = ["all", "breakfast", "lunch", "shakes"];
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState(filters[0]);
  const buttonRef = useRef(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setMenu(Data);
  }, []);

  useEffect(() => {
    setFilteredData(
      category === filters[0]
        ? menu
        : menu.filter((item) => item.category === category)
    );
  }, [category, menu]);

  const changeFilter = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      {filters.map((filterItem, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            ref={buttonRef}
            value={filterItem}
            onClick={(e) => changeFilter(e)}
          >
            {filterItem}
          </button>
        );
      })}
      <div className="row">
        {filteredData.map((item) => {
          return (
            <div className="col-xl-6" key={item.id}>
              <section className="menu-item">
                <MenuItem {...item} />
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filters;

