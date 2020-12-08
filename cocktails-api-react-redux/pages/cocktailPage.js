import React from "react";
import SingleCocktail from "../components/cocktailItem";

const CocktailPage = (props) => {
  return (
    <>
      <SingleCocktail {...props} />
    </>
  );
};

export default CocktailPage;
