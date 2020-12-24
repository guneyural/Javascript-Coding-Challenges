import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combined from "./reducers";

const initialState = {};
const middleware = [thunk];

const Store = createStore(
  combined,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

Store.subscribe(() => {
  const {
    Cart: { items, total, itemCount },
  } = Store.getState();

  localStorage.setItem("cart", JSON.stringify(items));
  localStorage.setItem("total", total);
  localStorage.setItem("itemCount", itemCount);
}, 2000);

export default Store;
