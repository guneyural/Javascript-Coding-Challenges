import React from "react";
import FeaturedProducts from "../components/featuredProducts";
import { Link } from "react-router-dom";
import { services } from "../utils/staticData";
import ServiceCard from "../components/serviceCard";

const Home = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row pt-5">
          <div className="col-xl-6 first-row-first-col">
            <h1 className="first-row-header-1">Design Your</h1>
            <h1 className="first-row-header-2">Comfort Zone</h1>
            <p className="first-row-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link to="/products">
              <button className="default-btn shopnow-btn">Shop Now!</button>
            </Link>
          </div>
          <div className="col-xl-6 first-row-second-col">
            <div className="img-layer">
              <img
                src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
                alt="first"
                className="img-layer-first-image"
              />
              <img
                src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg"
                alt="guy doing something"
                className="img-layer-second-image"
              />
            </div>
          </div>
        </div>
      </div>
      <FeaturedProducts />
      <section className="section-3">
        <div className="container">
          <section className="section-top">
            <article>
              <h1 className="first-row-header-1">Custom Furniture</h1>
              <h1 className="first-row-header-2">Only Built For You</h1>
            </article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </section>
          <div className="row">
            {services.map((item) => {
              return (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <ServiceCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="email-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Join our newsletter and get 20% off</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sint unde quaerat ratione soluta veniam provident adipisci
                cumque eveniet tempore?
              </p>
            </div>
            <div className="col-lg-6">
              <form className="email-form">
                <input type="text" placeholder="Enter Email" />
                <button className="default-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
