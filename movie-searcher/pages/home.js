import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchBar";
import MoviesSection from "../components/moviesSection";
import Axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  let BASE_URL = `https://www.omdbapi.com/?apikey=c24c2c7d&s=${query}`;

  useEffect(() => {
    setIsLoading(true);
    Axios.get(BASE_URL)
      .then((response) => response.data)
      .then((data) => {
        if (data.Response) {
          setMovies(data);
        } else {
          setMovies(data);
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="container">
      <SearchBar query={query} setQuery={setQuery} />
      <MoviesSection isLoading={isLoading} movies={movies} />
    </div>
  );
};

export default Home;
