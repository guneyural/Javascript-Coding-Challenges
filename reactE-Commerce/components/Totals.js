import React from "react";
import { priceConverter } from "../utils/helper";

const Totals = ({ subTotal, shippingFee }) => {
  return (
    <article className="totals mt-5 mb-2">
      <section className="totals-row">
        <p>Subtotal :</p>
        <p>{priceConverter(subTotal)}</p>
      </section>
      <section
        className="totals-row"
        style={{ borderBottom: "1px solid #929292" }}
      >
        <p>Shipping Fee :</p>
        <p>{priceConverter(shippingFee)}</p>
      </section>
      <section className="totals-row mt-4">
        <p>Order Total :</p>
        <p>{priceConverter(subTotal + shippingFee)}</p>
      </section>
    </article>
  );
};

export default Totals;
