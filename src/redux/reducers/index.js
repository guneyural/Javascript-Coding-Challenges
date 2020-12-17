import { User } from "./userReducer";
import { RateLimit } from "./rateLimitReducer";
import { combineReducers } from "redux";

export const combined = combineReducers({
  User,
  RateLimit,
});
