import {
  GET_CART,
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR,
  LOADING,
  GET_TOTAL,
} from "./types";
import { getError } from "./errorActions";
import Axios from "axios";

const BASE_URL = "https://course-api.com/react-useReducer-cart-project";

export const getCart = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    Axios.get(BASE_URL)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: GET_CART, payload: data });
      })
      .catch((err) => {
        dispatch(getError("Something Happened."));
      });
  };
};

export const increase = (id) => {
  return { type: INCREASE, payload: id };
};

export const decrease = (id) => {
  return { type: DECREASE, payload: id };
};

export const remove = (id) => {
  return { type: REMOVE, payload: id };
};

export const clear = (id) => {
  return { type: CLEAR, payload: id };
};

export const getTotal = () => {
  return { type: GET_TOTAL };
};
