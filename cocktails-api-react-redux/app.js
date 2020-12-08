import React from "react";
import AboutPage from "./pages/aboutPage";
import CocktailPage from "./pages/cocktailPage";
import ErrorPage from "./pages/errorPage";
import HomePage from "./pages/homePage";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/cocktail/:id" component={CocktailPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
