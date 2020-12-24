import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  ERROR,
  LOADING,
  FILTER_BY_CATEGORY,
  FILTER_BY_COLOR,
  FILTER_BY_COMPANY,
  FILTER_BY_PRICE,
  FILTER_BY_SHIPPING,
  CLEAR_FILTERS,
  SEARCH_PRODUCT,
} from "../actions/types";

const initialState = {
  all_products: [],
  filtered_products: [],
  product: {},
  isLoading: false,
  error: null,
};

export const Product = (state = initialState, action) => {
  let temp = [...state.all_products];
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        all_products: action.payload,
        isLoading: false,
        error: null,
        filtered_products: action.payload,
        product: {},
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        isLoading: false,
        all_products: [],
        filtered_products: [],
        product: action.payload,
      };
    case ERROR:
      return {
        ...state,
        product: {},
        filtered_products: [],
        all_products: [],
        isLoading: false,
        error: action.payload.msg,
      };
    case LOADING:
      return {
        ...state,
        product: {},
        filtered_products: [],
        isLoading: true,
        all_products: [],
        error: null,
      };
    case FILTER_BY_CATEGORY:
      temp = temp.filter((item) => item.category === action.payload);
      return {
        ...state,
        filtered_products: temp,
      };
    case FILTER_BY_COMPANY:
      temp = temp.filter((item) => item.company === action.payload);
      return {
        ...state,
        filtered_products: temp,
      };
    case FILTER_BY_COLOR:
      return {
        ...state,
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
      };
    case FILTER_BY_SHIPPING:
      return {
        ...state,
      };
    case SEARCH_PRODUCT:
      temp = temp.filter((item) =>
        item.name.toLowerCase().startsWith(action.payload)
      );
      return {
        ...state,
        filtered_products: temp,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filtered_products: [...action.payload],
      };
    default:
      return state;
  }
};
