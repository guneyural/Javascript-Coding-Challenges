import { GET_ERROR, CLEAR_ERROR } from "../action/types";

const initialState = {
  msg: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        msg: action.payload,
      };
    case CLEAR_ERROR:
      return {
        msg: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
