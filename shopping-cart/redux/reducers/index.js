import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
  cart: cartReducer,
  error: errorReducer,
});

export default reducers;
