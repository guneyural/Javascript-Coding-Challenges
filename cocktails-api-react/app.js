import React from "react";
import Cocktails from "./components/cocktails";
import Cocktail from "./components/cocktail";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Search from "./components/search";
import NotFound from "./components/notFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cocktails" exact component={Cocktails} />
          <Route path="/search" exact component={Search} />
          <Route path="/cocktails/:id" exact component={Cocktail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
