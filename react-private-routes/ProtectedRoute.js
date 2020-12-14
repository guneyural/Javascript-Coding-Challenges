import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component, path, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest}>
      {isAuthenticated ? component : <Redirect to="/login" />}
    </Route>
  );
};

export default ProtectedRoute;
