import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Search = () => {
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    Axios.get(`${BASE_URL}${text}`)
      .then((response) => response.data.drinks)
      .then((data) => {
        setResults(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Search</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="query"
          value={text}
          onChange={handleChange}
          placeholder="search cocktail"
        />
        <button type="submit">Search</button>
      </form>
      <h1>Results: </h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {results !== null ? (
            <div>
              {text.length > 0 && <h4>{results.length} Results Found</h4>}
              <ul>
                {results.map((item) => {
                  return (
                    <Link key={item.idDrink} to={`/cocktails/${item.idDrink}`}>
                      <li>{item.strDrink}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          ) : (
            <h1>No Cocktail Found.</h1>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
