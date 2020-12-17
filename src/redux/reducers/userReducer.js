import { GET_USER, LOADING, ERROR } from "../actions/types";

const initialState = {
  user: {},
  followers: [],
  repos: [],
  isLoading: false,
  error: null,
};

export const User = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload.userData,
        followers: action.payload.followers,
        repos: action.payload.repos,
        isLoading: false,
        error: null,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.msg,
      };
    default:
      return state;
  }
};
