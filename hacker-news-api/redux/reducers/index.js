import { combineReducers } from "redux";
import hitReducer from "./hitReducer";

const combined = combineReducers({
  hit: hitReducer,
});

export default combined;
