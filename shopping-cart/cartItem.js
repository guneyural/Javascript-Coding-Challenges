import React from "react";
import { useDispatch } from "react-redux";
import { remove, increase, decrease } from "./redux/action/cartActions";

const CartItem = (props) => {
  const { id, title, price, img, amount } = props;
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <section className="item-photo-section">
        <img src={img} alt={title} className="item-photo" />
        <section className="item-info">
          <p className="item-title">{title}</p>
          <p className="item-price text-muted">${price}</p>
          <span className="remove-item" onClick={() => dispatch(remove(id))}>
            Remove
          </span>
        </section>
      </section>
      <div className="button-section">
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-up"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </button>
        <span>{amount}</span>
        <button className="amount-btn" onClick={() => dispatch(decrease(id))}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-up"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
