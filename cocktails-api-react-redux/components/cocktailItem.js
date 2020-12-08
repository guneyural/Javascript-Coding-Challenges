import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleCocktail } from "../redux/actions/cocktailActions";
import Loading from "./loading";

const CocktailItem = (props) => {
  const Cocktail = useSelector((state) => state.cocktailReducer);
  const { singleCocktail, isLoading } = Cocktail;
  const dispatch = useDispatch();

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    dispatch(getSingleCocktail(id));
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="text-center mb-5">{singleCocktail.strDrink}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            className="cocktail-img"
            style={{ maxHeight: "450px" }}
            src={singleCocktail.strDrinkThumb}
            alt={singleCocktail.strDrink}
          />
        </div>
        <div className="col-md-6">
          <p className="info-para">
            <span className="info-label">Name: </span>
            {singleCocktail.strDrink}
          </p>
          <p className="info-para">
            <span className="info-label">Category: </span>
            {singleCocktail.strCategory}
          </p>
          <p className="info-para">
            <span className="info-label">Info: </span>
            {singleCocktail.strAlcoholic}
          </p>
          <p className="info-para">
            <span className="info-label">Glass: </span>
            {singleCocktail.strGlass}
          </p>
          <p className="info-para">
            <span className="info-label">Instructons: </span>
            {singleCocktail.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CocktailItem;
