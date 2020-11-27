import React, { useState, useEffect } from "react";
import Axios from "axios";

const Cocktail = (props) => {
  const { match } = props;
  const drinkID = match.params.id;
  const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measurement, setMeasurement] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get(BASE_URL)
      .then((response) => response.data.drinks[0])
      .then((data) => {
        setDrink(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      if (drink[`strIngredient${i}`]) {
        setIngredients((prevValue) => {
          return [...prevValue, drink[`strIngredient${i}`]];
        });
      }
    }
  }, [drink]);

  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      if (drink[`strMeasure${i}`]) {
        setMeasurement((prevValue) => {
          return [...prevValue, drink[`strMeasure${i}`]];
        });
      }
    }
  }, [drink]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} width="200px" alt="Drink" />
          <p>{drink.strInstructions}</p>
          <ul>
            {ingredients.map((item, index) => {
              return (
                <li key={index}>
                  {item}{" "}
                  <span style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                    {measurement[index]}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cocktail;
