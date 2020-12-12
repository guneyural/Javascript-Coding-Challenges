import React from "react";
import Loading from "../components/loading";
import { Link } from "react-router-dom";

const MovieSection = (props) => {
  const { isLoading, movies } = props;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container movie-section">
      <div className="row">
        {movies.Response === "True" ? (
          movies.Search.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={item.imdbID}>
                <Link to={`/movie/${item.imdbID}`}>
                  <div className="movie-card">
                    <img
                      src={item.Poster}
                      alt={`poster of ${item.Title}`}
                      className="movie-img"
                    />
                    <section className="movie-info">
                      <p className="movie-title">{item.Title}</p>
                      <p className="movie-year">{item.Year}</p>
                    </section>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="error-msg">{movies.Error}</p>
        )}
      </div>
    </div>
  );
};

export default MovieSection;
