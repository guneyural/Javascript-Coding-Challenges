import {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
  INCREASE_ITEM,
  CLEAR_CART,
  GET_TOTAL,
} from "../actions/types";

const initialState = {
  items:
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")).length > 0
        ? JSON.parse(localStorage.getItem("cart"))
        : []
      : [],
  total:
    localStorage.getItem("total") !== null ? localStorage.getItem("total") : 0,
  itemCount:
    localStorage.getItem("itemCount") !== null
      ? localStorage.getItem("itemCount")
      : 0,
};

export const Cart = (state = initialState, action) => {
  let tempCart = [];
  let duplicate = false;
  switch (action.type) {
    case ADD_ITEM:
      state.items.forEach((item) => {
        if (
          item.productId === action.payload.productId &&
          item.color === action.payload.color
        ) {
          duplicate = true;
        }
      });

      if (!duplicate) {
        tempCart = [action.payload, ...state.items];
      } else {
        tempCart = [
          ...state.items.map((item) =>
            item.productId === action.payload.productId &&
            item.color === action.payload.color
              ? { ...item, qty: action.payload.qty }
              : item
          ),
        ];
      }

      return {
        ...state,
        items: tempCart,
      };
    case REMOVE_ITEM:
      state.items.forEach((item) => {
        if (
          item.productId === action.payload.id &&
          item.color === action.payload.color
        ) {
        } else {
          tempCart.push(item);
        }
      });
      return {
        ...state,
        items: [...tempCart],
      };
    case DECREASE_ITEM:
      tempCart = [
        ...state.items.map((item) =>
          item.productId === action.payload.id &&
          item.color === action.payload.color
            ? { ...item, qty: item.qty <= 1 ? 1 : item.qty - 1 }
            : item
        ),
      ];
      return { ...state, items: tempCart };
    case INCREASE_ITEM:
      tempCart = [
        ...state.items.map((item) =>
          item.productId === action.payload.id &&
          item.color === action.payload.color
            ? {
                ...item,
                qty: item.qty < item.stock ? item.qty + 1 : item.stock,
              }
            : item
        ),
      ];
      return { ...state, items: tempCart };
    case GET_TOTAL:
      let num = 0;
      let count = 0;
      state.items.forEach((item) => {
        num += Number(item.price) * item.qty;
        count += item.qty;
      });
      return { ...state, total: num, itemCount: count };
    case CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
};
