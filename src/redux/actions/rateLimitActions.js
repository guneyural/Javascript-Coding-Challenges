import { GET_RATE_LIMIT, ERROR } from "./types";
import Axios from "axios";

const BASE_URL = "https://api.github.com/rate_limit";

export const getRateLimit = () => (dispatch) => {
  Axios.get(BASE_URL)
    .then((resp) => resp.data)
    .then((data) => {
      const { limit, remaining, reset } = data.rate;
      dispatch({ type: GET_RATE_LIMIT, payload: { limit, remaining, reset } });
    })
    .catch((err) =>
      dispatch({
        type: ERROR,
        payload: { msg: "Could Not Reach Rate Limit." },
      })
    );
};
