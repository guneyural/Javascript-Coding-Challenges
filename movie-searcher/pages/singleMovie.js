import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";

const SingleMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const BASE_URL = `https://www.omdbapi.com/?apikey=c24c2c7d&i=${id}`;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setIsLoading(true);
    Axios.get(BASE_URL)
      .then((response) => response.data)
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (movie.Response === "False") {
    return (
      <div className="container text-center">
        <h2 className="pt-5 text-danger text-bold text-center">
          {movie.Error}
        </h2>
        <Link to="/">
          <button className="go-home-btn mt-4">Go Back To Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container container-single-movie">
      <div className="movie-poster-section">
        <img
          src={movie.Poster}
          alt={`Poster of ${movie.Title}`}
          className="movie-poster"
        />
      </div>
      <div className="movie-info-section">
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p style={{ fontWeight: "bolder" }}>{movie.Year}</p>
        <Link to="/">
          <button className="go-home-btn mt-4">Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleMovie;
