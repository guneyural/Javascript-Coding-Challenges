import React, { useEffect, useState } from "react";
import Navigator from "../components/navigator";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../redux/actions/productActions";
import Loading from "../components/loading";
import { Link } from "react-router-dom";
import ProductInfo from "../components/productInfo";
import NotFoundPage from "./errorPage";

const ProductPage = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((state) => state.Product);
  const {
    stock,
    price,
    colors,
    category,
    images,
    reviews,
    stars,
    name,
    description,
    company,
  } = product;
  const [currentImage, setCurrentImage] = useState("");
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      setBigImg();
      document
        .querySelector(".carousel-img-thumbnail img")
        .classList.add("carousel-img-active");
    }
  }, [images]);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      setBigImg(imgIndex);
    }
  }, [imgIndex]);

  const setBigImg = (idx = 0) => {
    const productImages = document.querySelectorAll(
      ".carousel-img-thumbnail img"
    );
    const imgId = productImages[idx].getAttribute("data-id");
    images.forEach((img) => {
      if (img.id === imgId) {
        setCurrentImage(img.url);
      }
    });
  };

  const changePhoto = (e) => {
    const photoId = e.target.getAttribute("data-id");
    const productImages = document.querySelectorAll(
      ".carousel-img-thumbnail img"
    );
    changeCarouselStyle(productImages, photoId);
  };

  const changeCarouselStyle = (productImages, photoId) => {
    productImages.forEach((item, index) => {
      if (item.getAttribute("data-id") === photoId) {
        item.classList.add("carousel-img-active");
        setImgIndex(index);
      } else {
        item.classList.remove("carousel-img-active");
      }
    });
  };

  if (error) {
    return <NotFoundPage isMessage={true} message="Product Does Not Exist." />;
  }

  return (
    <>
      <Navigator
        currentPage={props.match.url}
        isProductPage={true}
        firstLink="Products"
        secondLink={name}
      />
      <div className="container mt-5">
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        )}
        {Object.keys(product).length > 0 && (
          <div className="row mb-5">
            <div className="col-lg-6 carousel-section">
              <Link to="/products">
                <button className="mb-5 default-btn">Back To Products</button>
              </Link>
              <div className="carousel-big">
                <img src={currentImage} alt="big product" />
              </div>
              <div className="carousel-pics">
                {images.map((img) => {
                  return (
                    <div className="carousel-img-thumbnail" key={img.id}>
                      <img
                        src={img.thumbnails.large.url}
                        alt="product"
                        onClick={(e) => changePhoto(e)}
                        data-id={img.id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <ProductInfo
                info={{
                  stock,
                  price,
                  colors,
                  category,
                  reviews,
                  stars,
                  description,
                  company,
                  id,
                  images,
                  name,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
