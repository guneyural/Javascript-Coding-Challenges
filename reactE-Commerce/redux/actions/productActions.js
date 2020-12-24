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
} from "./types";
import Axios from "axios";

export const getProducts = () => (dispatch) => {
  const BASE_URL = "https://course-api.com/react-store-products";
  dispatch({ type: LOADING });
  Axios.get(BASE_URL)
    .then((resp) => resp.data)
    .then((data) => {
      dispatch({ type: GET_PRODUCTS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: { msg: "Could not get products." } });
    });
};

export const getProductById = (id) => (dispatch) => {
  const BASE_URL = `https://course-api.com/react-store-single-product?id=${id}`;
  dispatch({ type: LOADING });
  Axios.get(BASE_URL)
    .then((resp) => resp.data)
    .then((data) => {
      if (typeof data === "string") {
        dispatch(getError("Product Does Not Exist."));
      }

      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: typeof data === "object" ? data : {},
      });
    });
};

export const getError = (msg) => {
  return { type: ERROR, payload: { msg } };
};

export const loading = () => {
  return { type: LOADING };
};

export const filterByCategory = (category) => {
  return { type: FILTER_BY_CATEGORY, payload: category };
};

export const filterByCompany = (company) => {
  return { type: FILTER_BY_COMPANY, payload: company };
};

export const filterByColor = (color) => {
  return { type: FILTER_BY_COLOR, payload: color };
};

export const filterByPrice = (price) => {
  return { type: FILTER_BY_PRICE, payload: price };
};

export const filterByShipping = (shipping) => {
  return { type: FILTER_BY_SHIPPING, payload: shipping };
};

export const clearAllFilters = (products) => {
  return { type: CLEAR_FILTERS, payload: products };
};

export const searchProduct = (text) => {
  return { type: SEARCH_PRODUCT, payload: text };
};
