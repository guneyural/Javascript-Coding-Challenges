import {
  GET_ALL_COCKTAILS,
  GET_SINGLE_COCKTAIL,
  SEARCH_COCKTAIL,
  LOADING,
} from "./types";
import Axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const BASE_URL_ID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const getAllCocktails = () => (dispatch) => {
  dispatch({ type: LOADING });

  Axios.get(BASE_URL)
    .then((resp) => resp.data.drinks)
    .then((data) => dispatch({ type: GET_ALL_COCKTAILS, payload: data }))
    .catch((err) => console.log("AGA KALK HATA"));
};

export const getSingleCocktail = (id) => (dispatch) => {
  dispatch({ type: LOADING });

  Axios.get(`${BASE_URL_ID}${id}`)
    .then((resp) => resp.data.drinks[0])
    .then((data) => dispatch({ type: GET_SINGLE_COCKTAIL, payload: data }))
    .catch((err) => console.log("AGA KALK HATA"));
};

export const searchCocktail = (text) => (dispatch) => {
  dispatch({ type: LOADING });

  Axios.get(`${BASE_URL}${text}`)
    .then((resp) => resp.data.drinks)
    .then((data) => dispatch({ type: SEARCH_COCKTAIL, payload: data }))
    .catch((err) => console.log("AGA KALK HATA"));
};

export const loading = () => {
  return {
    type: LOADING,
  };
};
