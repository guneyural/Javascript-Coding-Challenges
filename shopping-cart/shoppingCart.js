import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, getTotal, clear } from "./redux/action/cartActions";
import CartItem from "./cartItem";
import Loading from "./assets/loading.gif";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const { cart, totalPrice, isLoading } = Cart;

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  if (isLoading) {
    return (
      <section className="loading-section">
        <img className="loading" src={Loading} alt="loading icon" />
      </section>
    );
  }
  if (!isLoading) {
    if (cart.length < 1) {
      return (
        <div className="container">
          <h2 className="text-center">Your Bag Is Empty</h2>
          <section className="text-center mt-5">
            <button
              className="text-center my-auto refresh"
              onClick={() => dispatch(getCart())}
            >
              Add Items To Cart
            </button>
          </section>
        </div>
      );
    }
  }

  return (
    <section className="container">
      <h1>Your Bag</h1>
      <div className="shopping-cart">
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <section className="total-section">
        <h2>Total</h2>
        <p class="total-price lead">$ {totalPrice}</p>
      </section>
      <section className="text-center">
        <button className="clear-all" onClick={() => dispatch(clear())}>
          Clear Cart
        </button>
      </section>
    </section>
  );
};

export default ShoppingCart;
