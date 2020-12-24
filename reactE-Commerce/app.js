import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Cart from "./pages/cart";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import ProductPage from "./pages/productPage";
import Products from "./pages/products";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={ProductPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
