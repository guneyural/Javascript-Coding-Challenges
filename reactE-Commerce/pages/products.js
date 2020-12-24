import React, { useState, useEffect } from "react";
import Navigator from "../components/navigator";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  filterByCategory,
  filterByColor,
  filterByCompany,
  filterByPrice,
  filterByShipping,
  clearAllFilters,
  searchProduct,
} from "../redux/actions/productActions";
import { FaTimes } from "react-icons/fa";
import Loading from "../components/loading";
import { priceConverter } from "../utils/helper";
import ProductCardRow from "../components/productCardRow";
import DetailedDesign from "../components/productCardDetailed";

const Products = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isDefaultDesign, setIsDefaultDesign] = useState(true);
  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [colors, setColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const { all_products: Products, isLoading, filtered_products } = useSelector(
    (state) => state.Product
  );
  const dispatch = useDispatch();

  //====================

  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("all");
  const [sort, setSort] = useState("sort-default");
  const [color, setColor] = useState("all");
  const [priceRange, setPriceRange] = useState(0);
  const [freeShipping, setFreeShipping] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([
    ...filtered_products,
  ]);

  //====================

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setProducts(Products);
    let categorySet = new Set();
    let companySet = new Set();
    let colorSet = new Set();
    let priceSet = new Set();
    Products.forEach((item) => {
      categorySet.add(item.category);
      companySet.add(item.company);
      priceSet.add(item.price);
      item.colors.forEach((clr) => {
        colorSet.add(clr);
      });
    });
    setCategories([...categorySet]);
    setCompanies([...companySet]);
    setColors([...colorSet]);
    const priceArr = [...priceSet].sort((a, b) => b - a);
    setMaxPrice(priceArr[0]);
    setPriceRange(priceArr[0]);
  }, [Products, products]);
  useEffect(() => {
    const section = document.querySelector(".filter-options-section");
    if (isFilterSectionOpen) {
      section.classList.add("visible");
      document.body.style.overflow = "hidden";
    } else {
      section.classList.remove("visible");
      document.body.style.overflow = "auto";
    }
  }, [isFilterSectionOpen]);
  useEffect(() => {
    const getScreenWidth = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", getScreenWidth);

    if (windowSize > 768) {
      document.body.style.overflow = "auto";
      setIsFilterSectionOpen(false);
    } else if (windowSize <= 768 && isFilterSectionOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, [windowSize, isFilterSectionOpen]);
  useEffect(() => {
    document.querySelectorAll(".categories-section p").forEach((item) => {
      if (item.getAttribute("value") === category) {
        item.classList.add("category-active");
      } else {
        item.classList.remove("category-active");
      }
    });
  }, [category]);
  useEffect(() => {
    document.querySelectorAll(".color-section div").forEach((item) => {
      if (item.getAttribute("value") === color) {
        item.style.background = item.getAttribute("value");
        item.style.color = "#000000";
        item.style.fontWeight = "bold";
        if (item.getAttribute("value") !== "all") {
          item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>`;
          item.style.bottom = "3px";
        }
      } else {
        if (item.getAttribute("value") !== "all") {
          item.innerHTML = "";
          item.style.bottom = "0px";
        }
        if (item.getAttribute("value") === "#000") {
          item.style.background = "gray";
        } else {
          item.style.background = `${item.getAttribute("value")}69`;
        }
        item.style.color = "#5f5f5f";
        item.style.fontWeight = "400";
      }
    });
  }, [color]);
  const clearFilters = () => {
    setCategory("");
    setCompany("all");
    setColor("all");
    setSearchQuery("");
    setPriceRange(maxPrice);
    setFreeShipping(false);
    setFilteredProducts([...products]);
  };
  useEffect(() => {
    if (sort === "sort-default") {
      setFilteredProducts([...filteredProducts]);
    }
    if (sort === "ascending") {
      setFilteredProducts((old) => {
        return [...old.sort((a, b) => a.price - b.price)];
      });
    }
    if (sort === "descending") {
      setFilteredProducts((old) => {
        return [...old.sort((a, b) => b.price - a.price)];
      });
    }
    if (sort === "az") {
      setFilteredProducts((old) => {
        return [...old.sort((a, b) => (a.name > b.name ? 1 : -1))];
      });
    }
    if (sort === "za") {
      setFilteredProducts((old) => {
        return [...old.sort((a, b) => (a.name > b.name ? -1 : 1))];
      });
    }
  }, [sort]);

  const changeCategory = (target) => {
    setCategory(target);
  };

  const changeCompany = (e) => {
    setCompany(e.target.value);
  };

  useEffect(() => {
    let temp = [...products];
    if (category !== "") {
      temp = temp.filter((item) => item.category === category);
    }
    if (company !== "all") {
      temp = temp.filter((item) => item.company === company);
    }
    temp = temp.filter((item) => item.price <= priceRange);
    if (freeShipping) {
      temp = temp.filter((item) => item.shipping === freeShipping);
    }
    if (searchQuery) {
      temp = temp.filter((item) =>
        item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    if (color !== "all") {
      temp = temp.filter((item) => {
        return item.colors.find((clr) => clr === color);
      });
    }

    setSort("sort-default");
    setFilteredProducts(temp);
  }, [category, company, color, priceRange, freeShipping, searchQuery]);

  return (
    <>
      <section className="filter-options-section">
        <section
          className="filter-section-top"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: "300", fontSize: "36px" }}>
            Filter Results
          </span>
          <button
            className="btn-transparent"
            onClick={() => setIsFilterSectionOpen(false)}
          >
            <FaTimes style={{ fontSize: "25px" }} />
          </button>
        </section>
        <p
          className="mt-4"
          style={{ fontWeight: "bold", fontSize: "17px", letterSpacing: "1px" }}
        >
          Category
        </p>
        <section className="categories-section">
          {isLoading && <Loading />}
          {categories.length > 0 &&
            categories.map((category, index) => {
              return (
                <p
                  key={index}
                  style={{
                    textTransform: "capitalize",
                    marginBottom: "4px",
                  }}
                  onClick={() => changeCategory(category)}
                  value={category}
                >
                  {category}
                </p>
              );
            })}
        </section>
        <p
          className="mt-4"
          style={{ fontWeight: "bold", fontSize: "17px", letterSpacing: "1px" }}
        >
          Company
        </p>

        {isLoading ? (
          <Loading />
        ) : (
          <select
            className="default-btn w-100"
            style={{ textTransform: "capitalize" }}
            value={company}
            onChange={(e) => changeCompany(e)}
          >
            <option value="all">All</option>
            {companies.map((comp, index) => {
              return (
                <option value={comp} key={index}>
                  {comp}
                </option>
              );
            })}
          </select>
        )}

        <p
          className="mt-4"
          style={{ fontWeight: "bold", fontSize: "17px", letterSpacing: "1px" }}
        >
          Colors
        </p>

        {isLoading ? (
          <Loading />
        ) : (
          <section className="color-section">
            <div
              value="all"
              onClick={() => setColor("all")}
              style={{ color: "#000000", fontWeight: "bold" }}
            >
              All
            </div>
            {colors.map((color, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    background: color === "#000" ? "gray" : `${color}6c`,
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                  }}
                  value={color}
                  onClick={(e) => setColor(color)}
                ></div>
              );
            })}
          </section>
        )}
        <p
          className="mt-4"
          style={{ fontWeight: "bold", fontSize: "17px", letterSpacing: "1px" }}
        >
          Price
        </p>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="price-section">
            <p
              style={{
                fontWeight: "500",
                marginTop: "-10px",
                fontSize: "18px",
              }}
            >
              {priceConverter(priceRange)}
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </form>
          </section>
        )}

        <form onSubmit={(e) => e.preventDefault()} className="mt-4">
          <label
            htmlFor="freeShipping"
            style={{
              fontWeight: "500",
              marginTop: "-10px",
              fontSize: "18px",
              paddingRight: "8px",
            }}
          >
            Free Shipping
          </label>
          <input
            type="checkbox"
            id="freeShipping"
            checked={freeShipping}
            onChange={(e) => setFreeShipping(!freeShipping)}
          />
        </form>

        <button
          className="default-btn w-100 mt-4"
          onClick={() => clearFilters()}
        >
          Clear Filters
        </button>
      </section>
      <Navigator currentPage={props.match.url} isProductPage={false} />
      <div className="container mb-5 pb-5">
        <div className="row products-row">
          <div className="col-lg-3  col-md-4 filter-section">
            <section className="filter-section-mobile">
              <div className="row">
                <section
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="d-block"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="search-form w-100"
                      style={{
                        borderRadius: "0",
                        borderTop: "2px solid #333333",
                        borderLeft: "2px solid #333333",
                        borderRight: "2px solid #333333",
                      }}
                    />
                  </form>
                </section>
                <div className="col-4 w-100">
                  <button
                    className="default-btn w-100"
                    onClick={() =>
                      windowSize >= 768 ? null : setIsFilterSectionOpen(true)
                    }
                  >
                    Filter
                  </button>
                </div>
                <div className="col-4 w-100">
                  <button
                    className="default-btn w-100"
                    style={{
                      borderLeft: "0px",
                      borderRight: "0px",
                      fontSize: "12px",
                      padding: 0,
                    }}
                    onClick={() =>
                      isDefaultDesign
                        ? setIsDefaultDesign(false)
                        : setIsDefaultDesign(true)
                    }
                  >
                    {isDefaultDesign ? "Detailed Design" : "Default Design"}
                  </button>
                </div>
                <div className="col-4 w-100">
                  <select
                    className="default-btn w-100"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="sort-default">Sort By Default</option>
                    <option value="ascending">Sort By Price (Ascending)</option>
                    <option value="descending">
                      Sort By Price (Descending)
                    </option>
                    <option value="az">Sort By Name (A-Z)</option>
                    <option value="za">Sort By Name (Z-A)</option>
                  </select>
                </div>
              </div>
            </section>
            <section className="filter-options-desktop">
              <form onSubmit={(e) => e.preventDefault()} className="mt-1">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-form w-100"
                />
              </form>
              <p
                className="mt-1"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                Category
              </p>
              <section className="categories-section">
                {isLoading && <Loading />}
                {categories.length > 0 &&
                  categories.map((category, index) => {
                    return (
                      <p
                        key={index}
                        style={{
                          textTransform: "capitalize",
                          marginBottom: "4px",
                        }}
                        onClick={() => changeCategory(category)}
                        value={category}
                      >
                        {category}
                      </p>
                    );
                  })}
              </section>
              <p
                className="mt-1"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                Company
              </p>

              {isLoading ? (
                <Loading />
              ) : (
                <select
                  className="default-btn"
                  style={{ textTransform: "capitalize" }}
                  value={company}
                  onChange={(e) => changeCompany(e)}
                >
                  <option value="all">All</option>
                  {companies.map((comp, index) => {
                    return (
                      <option value={comp} key={index}>
                        {comp}
                      </option>
                    );
                  })}
                </select>
              )}

              <p
                className="mt-1"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                Colors
              </p>

              {isLoading ? (
                <Loading />
              ) : (
                <section className="color-section">
                  <div
                    value="all"
                    onClick={() => setColor("all")}
                    style={{ color: "#000000", fontWeight: "bold" }}
                  >
                    All
                  </div>
                  {colors.map((color, idx) => {
                    return (
                      <div
                        key={idx}
                        style={{
                          position: "relative",
                          background: color === "#000" ? "gray" : `${color}6c`,
                          height: "20px",
                          width: "20px",
                          borderRadius: "50%",
                        }}
                        value={color}
                        onClick={(e) => setColor(color)}
                      ></div>
                    );
                  })}
                </section>
              )}
              <p
                className="mt-1"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                Price
              </p>
              {isLoading ? (
                <Loading />
              ) : (
                <section className="price-section">
                  <p
                    style={{
                      fontWeight: "500",
                      marginTop: "-10px",
                      fontSize: "17px",
                    }}
                  >
                    {priceConverter(priceRange)}
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                  </form>
                </section>
              )}

              <form onSubmit={(e) => e.preventDefault()} className="mt-1">
                <label
                  htmlFor="freeShipping"
                  style={{
                    fontWeight: "500",
                    marginTop: "-10px",
                    fontSize: "17px",
                    paddingRight: "8px",
                  }}
                >
                  Free Shipping
                </label>
                <input
                  type="checkbox"
                  id="freeShipping"
                  checked={freeShipping}
                  onChange={(e) => setFreeShipping(!freeShipping)}
                />
              </form>

              <button
                className="default-btn mt-1"
                onClick={() => clearFilters()}
              >
                Clear Filters
              </button>
            </section>
          </div>
          <div className="col-lg-9 col-md-8 products-margin">
            <div className="products-section-top">
              <section>
                <button
                  className="default-btn design-btn"
                  onClick={() =>
                    isDefaultDesign
                      ? setIsDefaultDesign(false)
                      : setIsDefaultDesign(true)
                  }
                >
                  {isDefaultDesign ? "Detailed Design" : "Default Design"}
                </button>
                <p>{filteredProducts.length} Products Found</p>
              </section>
              <div></div>
              <select
                className="default-btn"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="sort-default">Sort By Default</option>
                <option value="ascending">Sort By Price (Ascending)</option>
                <option value="descending">Sort By Price (Descending)</option>
                <option value="az">Sort By Name (A-Z)</option>
                <option value="za">Sort By Name (Z-A)</option>
              </select>
            </div>
            <div className="row">
              {isLoading && (
                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Loading />
                </section>
              )}
              {!isLoading && filteredProducts.length < 1 && (
                <p>No Product Matched With Your Filters</p>
              )}
              {isDefaultDesign
                ? filteredProducts.map((product) => {
                    return (
                      <div
                        className="col-xl-4 col-lg-6 col-md-12"
                        key={product.id}
                      >
                        <ProductCardRow product={product} />
                      </div>
                    );
                  })
                : filteredProducts.map((product) => {
                    return (
                      <DetailedDesign key={product.id} product={product} />
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
