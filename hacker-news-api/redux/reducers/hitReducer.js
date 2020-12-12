import { GET_HITS, REMOVE_HIT, LOADING } from "../actions/types";

const initialState = {
  hits: [],
  isLoading: false,
  hitPerPage: 0,
  totalPages: 0,
  totalHits: 0,
};

const hitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HITS:
      return {
        ...state,
        hits: action.payload.nbHits === 0 ? [] : [...action.payload.hits],
        isLoading: false,
        hitPerPage: action.payload.hitsPerPage,
        totalPages: action.payload.nbPages,
        totalHits: action.payload.nbHits,
      };
    case REMOVE_HIT:
      return {
        ...state,
        hits: [...state.hits.filter((hit) => hit.objectID !== action.payload)],
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default hitReducer;
