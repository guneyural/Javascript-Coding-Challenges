import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import MoviePage from "./pages/singleMovie";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={MoviePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
