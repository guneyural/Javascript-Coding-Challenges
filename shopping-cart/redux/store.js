import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  Reducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
    /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
  )
);

store.subscribe(() => {
  const { cart } = store.getState();
  localStorage.setItem("cart", JSON.stringify(cart.cart));
}, 2000);

export default store;
