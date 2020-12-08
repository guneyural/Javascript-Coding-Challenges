import React, { useEffect } from "react";

const Paginate = (props) => {
  const { followers, followersPerPage, setCurrentPage, currentPage } = props;
  const numbers = [];
  const numberLength = Math.ceil(followers.length / followersPerPage);

  useEffect(() => {
    if (currentPage < 1) {
      setCurrentPage(numberLength);
    } else if (currentPage > numberLength) {
      setCurrentPage(1);
    }

    document.querySelectorAll("button").forEach((item) => {
      if (Number(item.getAttribute("data-id")) === currentPage) {
        item.classList.add("paginate-btn-active");
      } else {
        item.classList.remove("paginate-btn-active");
      }
    });
  }, [currentPage]);

  for (let i = 1; i <= numberLength; i++) {
    numbers.push(i);
  }

  return (
    <div className="contianer container-paginate">
      <span
        className="prev-btn"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </span>
      {numbers.map((item) => {
        return (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            data-id={item}
            className="paginate-btn"
          >
            {item}
          </button>
        );
      })}
      <span
        className="next-btn"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </span>
    </div>
  );
};

export default Paginate;
