import {
  GET_CART,
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR,
  LOADING,
  GET_TOTAL,
} from "../action/types";

const initialState = {
  cart:
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")).length > 0
        ? JSON.parse(localStorage.getItem("cart"))
        : []
      : [],
  itemCount: 0,
  totalPrice: 0,
  isLoading: false,
};

const cartReducer = (state = initialState, action) => {
  let sum = 0;
  let totalPrice = 0;
  let tempCart = [];
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart:
          JSON.parse(localStorage.getItem("cart")).length > 0
            ? JSON.parse(localStorage.getItem("cart"))
            : action.payload,
        itemCount: action.payload.length,
        isLoading: false,
      };
    case INCREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.amount = item.amount + 1;
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case DECREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.amount = item.amount - 1;
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart.filter((cartItem) => cartItem.amount !== 0),
      };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case CLEAR:
      localStorage.removeItem("cart");
      return {
        ...state,
        itemCount: 0,
        totalPrice: 0,
        cart: [],
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOTAL:
      console.log(state.cart);
      state.cart.forEach((item) => {
        sum += item.amount;
        totalPrice += Number(item.price) * item.amount;
      });
      return {
        ...state,
        itemCount: sum,
        totalPrice: totalPrice.toFixed(2),
      };
    default:
      return state;
  }
};

export default cartReducer;

