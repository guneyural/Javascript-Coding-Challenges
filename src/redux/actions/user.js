import { GET_USER, LOADING, ERROR } from "./types";
import { getRateLimit } from "./rateLimitActions";
import Axios from "axios";

export const getUser = (username = "florinpop17") => (dispatch) => {
  dispatch({ type: LOADING });

  let BASE_URL = `https://api.github.com/users/${username}`;
  let FOLLOWER_URL = BASE_URL + "/followers?per_page=100";
  let REPOS_URL = BASE_URL + "/repos?per_page=100";

  Axios.get(BASE_URL)
    .then((resp) => resp.data)
    .then((userData) => {
      Axios.get(FOLLOWER_URL)
        .then((resp) => resp.data)
        .then((followers) => {
          Axios.get(REPOS_URL)
            .then((resp) => resp.data)
            .then((repos) => {
              dispatch({
                type: GET_USER,
                payload: { userData, followers, repos },
              });
              dispatch(getRateLimit());
            });
        });
    })
    .catch((err) =>
      dispatch({
        type: ERROR,
        payload: { msg: "User Not Found." },
      })
    );
};

export const loading = () => {
  return { type: LOADING };
};

export const setError = (msg) => {
  return { type: ERROR, payload: { msg } };
};
