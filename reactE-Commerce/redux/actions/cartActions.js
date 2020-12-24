import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  CLEAR_CART,
  GET_TOTAL,
} from "./types";

export const addItem = (productId, color, qty, price, stock, image, name) => {
  return {
    type: ADD_ITEM,
    payload: { productId, color, qty, price, stock, image, name },
  };
};

export const removeItem = (id, color) => {
  return { type: REMOVE_ITEM, payload: { id, color } };
};

export const increaseItem = (id, color) => {
  return { type: INCREASE_ITEM, payload: { id, color } };
};

export const decreaseItem = (id, color) => {
  return { type: DECREASE_ITEM, payload: { id, color } };
};

export const getTotal = () => {
  return { type: GET_TOTAL };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};
