import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHit } from "./redux/actions/hitActions";
import HitCard from "./hitCard";
import Loading from "./assets/loading.gif";
import SearchBar from "./searchBar";

const Hits = () => {
  const Hits = useSelector((state) => state.hit);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page < 1) {
      setPage(Hits.totalPages - 1);
    }

    if (page > Hits.totalPages - 1) {
      setPage(1);
    }

    dispatch(getHit(query, page));
  }, [query, page]);

  return (
    <div className="container">
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <div className="navigation-section">
        <button onClick={() => setPage(page - 1)} className="paginate-btn">
          Prev
        </button>
        {`${page} of ${Hits.totalPages}`}
        <button onClick={() => setPage(page + 1)} className="paginate-btn">
          Next
        </button>
      </div>
      <div className="row">
        {Hits.isLoading ? (
          <div className="container">
            <img
              src={Loading}
              alt="loading spinner is spinning"
              className="loading-icon"
            />
          </div>
        ) : (
          Hits.hits.map((item) => {
            return (
              <div className="col-lg-6" key={item.objectID}>
                <HitCard {...item} />
              </div>
            );
          })
        )}
      </div>
      <p className="total-hits">
        {Hits.totalHits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        Results Were Found.
      </p>
    </div>
  );
};

export default Hits;
