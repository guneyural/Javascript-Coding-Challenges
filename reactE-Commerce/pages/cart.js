import React, { useEffect } from "react";
import Navigator from "../components/navigator";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  decreaseItem,
  increaseItem,
  clearCart,
  getTotal,
} from "../redux/actions/cartActions";
import Totals from "../components/Totals";
import CartItem from "../components/cartItem";

const Cart = (props) => {
  const { total, items } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [items, dispatch]);

  return (
    <>
      <Navigator currentPage={props.match.url} isProductPage={false} />
      <div className="container mt-5 mb-5">
        {items.length <= 0 ? (
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1>Cart Is Empty</h1>
            <Link to="/products">
              <button className="default-btn mt-3">Go To Products</button>
            </Link>
          </section>
        ) : (
          <section className="cart-section">
            <section
              className="cart-headers"
              style={{ borderBottom: "1px solid #c5c5c5" }}
            >
              <div className="row">
                <div className="column col-sm-3">
                  <p>Item</p>
                </div>
                <div className="column col-sm-2">
                  <p>Price</p>
                </div>
                <div className="column col-sm-3">
                  <p>Quantity</p>
                </div>
                <div className="column col-sm-4">
                  <p>Sub Total</p>
                </div>
              </div>
            </section>
            <section
              className="cart-items-section"
              style={{ borderBottom: "1px solid #c5c5c5" }}
            >
              {items.map((item) => {
                return (
                  <CartItem
                    key={item.productId}
                    removeItem={removeItem}
                    decreaseItem={decreaseItem}
                    increaseItem={increaseItem}
                    item={item}
                  />
                );
              })}
            </section>
            <section className="cart-options mt-4 pt-1">
              <Link to="/products">
                <button className="default-btn">Continue Shopping</button>
              </Link>
              <button
                className="default-btn btn-delete"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </section>
            <section className="shopping-cart-bottom">
              <div className="buy-section">
                <Totals subTotal={total} shippingFee={534} />
                <button className="default-btn buy-btn">Buy</button>
              </div>
            </section>
          </section>
        )}
      </div>
    </>
  );
};

export default Cart;
