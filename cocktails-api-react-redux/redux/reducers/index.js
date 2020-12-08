import { combineReducers } from "redux";
import { cocktailReducer } from "./cocktailReducers";

const reducers = combineReducers({ cocktailReducer });

export default reducers;
