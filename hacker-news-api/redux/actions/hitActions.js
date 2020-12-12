import { LOADING, REMOVE_HIT, GET_HITS } from "./types";
import Axios from "axios";

export const getHit = (query, page) => (dispatch) => {
  const BASE_URL = `https://hn.algolia.com/api/v1/search?query=${query}&page=${
    page - 1
  }`;

  dispatch({ type: LOADING });

  Axios.get(BASE_URL)
    .then((resp) => resp.data)
    .then((data) => {
      dispatch({
        type: GET_HITS,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return { type: LOADING };
};

export const removeHit = (id) => {
  console.log(id);
  return { type: REMOVE_HIT, payload: id };
};
