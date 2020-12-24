import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import Loading from "./loading";
import DefaultProductStyle from "./productCardRow";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { all_products: products, isLoading, error } = useSelector(
    (state) => state.Product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="featured-section">
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Featured Products</h1>
        <div
          className="nav-item-underline about-underline"
          style={{ width: "130px", height: "5px", margin: "auto" }}
        ></div>
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
        {error && <p className="error-text">{error}</p>}
        {products.length > 0 && (
          <div className="featured-section">
            <div className="row">
              {[6, 11, 15].map((i) => {
                return (
                  <div className="col-lg-4 col-md-6" key={products[i].id}>
                    <DefaultProductStyle product={products[i]} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <Link to="/products" className="link-to-products">
            <button className="default-btn">Go To Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
