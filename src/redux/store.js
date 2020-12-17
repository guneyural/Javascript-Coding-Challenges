import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combined } from "./reducers";

const middleware = [thunk];
const initialState = {};

export const Store = createStore(
  combined,
  initialState,
  compose(
    applyMiddleware(...middleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
