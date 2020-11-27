import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Cocktails = () => {
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    Axios.get(BASE_URL)
      .then((response) => response.data.drinks)
      .then((data) => {
        setCocktails(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Cocktails</h1>
      <ul>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          cocktails.map((item) => {
            return (
              <Link key={item.idDrink} to={`/cocktails/${item.idDrink}`}>
                <li>{item.strDrink}</li>
              </Link>
            );
          })
        )}
      </ul>
    </>
  );
};

export default Cocktails;
