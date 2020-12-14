import React from "react";
import Button from "./button";
import Logout from "./logout";
import Profile from "./profile";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="container">
      <Router>
        <Navbar />
        <h1>GuneyRal</h1>
        <Switch>
          <Route path="/" exact>
            {isAuthenticated && <Redirect to="/profile" />}
          </Route>

          <ProtectedRoute
            path="/profile"
            isAuthenticated={isAuthenticated}
            component={Profile}
          />

          <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Button />}
          </Route>

          <Route path="/logout">
            {isAuthenticated ? <Logout /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {!isAuthenticated ? (
          <Link to="/login">
            <li>Login</li>
          </Link>
        ) : (
          <Link to="/logout">
            <li>Logout</li>
          </Link>
        )}
        {isAuthenticated && (
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        )}
      </ul>
    </>
  );
};

export default App;
