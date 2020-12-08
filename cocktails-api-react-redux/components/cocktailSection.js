import React, { useEffect } from "react";
import Loading from "./loading";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllCocktails } from "../redux/actions/cocktailActions";

const CocktailSection = () => {
  const Cocktail = useSelector((state) => state.cocktailReducer);
  const { cocktails, isLoading } = Cocktail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCocktails());
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <section className="cocktails-section">
      <h2 className="text-center mb-5 mt-2" style={{ letterSpacing: "1.3px" }}>
        Cocktails
      </h2>
      <div className="row">
        {cocktails !== null ? (
          cocktails.map((item) => {
            return (
              <div className="col-md-4" key={item.idDrink}>
                <div className="cocktail-card">
                  <img
                    className="cocktail-img"
                    src={item.strDrinkThumb}
                    alt={item.strDrink}
                  />
                  <section className="cocktail-card-body">
                    <h2 className="cocktail-title">{item.strDrink}</h2>
                    <p className="cocktail-glass">{item.strGlass}</p>
                    <p className="cocktail-category text-muted">
                      {item.strCategory}
                    </p>
                    <Link to={`/cocktail/${item.idDrink}`}>
                      <button className="info-btn">DETAILS</button>
                    </Link>
                  </section>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center m-auto">No Cocktail Found.</h2>
        )}
      </div>
    </section>
  );
};

export default CocktailSection;
