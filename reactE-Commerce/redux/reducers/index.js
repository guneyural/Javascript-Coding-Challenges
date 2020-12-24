import { combineReducers } from "redux";
import { Product } from "./productReducer";
import { Cart } from "./cartReducer";

const combined = combineReducers({ Product, Cart });

export default combined;
