import { GET_RATE_LIMIT } from "../actions/types";

const initialState = {
  limit: 0,
  remaining: 0,
  reset: 0,
  isAvailable: false,
};

//To see when the api is available:
//LET DATE = NEW DATE(initialState.reset*1000)
//To show this to user date.toString()
//get the 1000 times of reset time from initial state and
//put the value to parameter of date object

export const RateLimit = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATE_LIMIT:
      return {
        limit: action.payload.limit,
        remaining: action.payload.remaining,
        reset: action.payload.reset,
        isAvailable: action.payload.remaining === 0 ? false : true,
      };
    default:
      return state;
  }
};
