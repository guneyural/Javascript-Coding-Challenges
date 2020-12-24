import React, { useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem } from "../redux/actions/cartActions";

const Quantity = ({ number, max, setQuantity, productId, color }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (number < 1) {
      setQuantity(1);
    }
    if (number > max) {
      setQuantity(max);
    }
  }, [number]);

  if (!productId) {
    return (
      <div className="quantity">
        <button className="qty-btn" onClick={() => setQuantity(number + 1)}>
          <FaPlus />
        </button>
        <p>{number}</p>
        <button className="qty-btn" onClick={() => setQuantity(number - 1)}>
          <FaMinus />
        </button>
      </div>
    );
  }

  return (
    <div className="quantity">
      <button
        className="qty-btn"
        onClick={() => dispatch(increaseItem(productId, color))}
      >
        <FaPlus />
      </button>
      <p>{number}</p>
      <button
        className="qty-btn"
        onClick={() => dispatch(decreaseItem(productId, color))}
      >
        <FaMinus />
      </button>
    </div>
  );
};

export default Quantity;
