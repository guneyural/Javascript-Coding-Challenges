import {
  GET_ALL_COCKTAILS,
  GET_SINGLE_COCKTAIL,
  SEARCH_COCKTAIL,
  LOADING,
} from "../actions/types";

const initialState = {
  cocktails: [],
  singleCocktail: {},
  isLoading: false,
};

export const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload,
        isLoading: false,
      };
    case GET_SINGLE_COCKTAIL:
      return {
        ...state,
        singleCocktail: action.payload,
        isLoading: false,
      };
    case SEARCH_COCKTAIL:
      return {
        ...state,
        cocktails: action.payload,
        isLoading: false,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
