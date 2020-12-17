import React from "react";
import Home from "./pages/home";
import Page404 from "./pages/page404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
