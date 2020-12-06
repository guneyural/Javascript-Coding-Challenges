import { GET_ERROR, CLEAR_ERROR } from "./types";

export const getError = (msg, type) => {
  return {
    type: GET_ERROR,
    payload: msg,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
