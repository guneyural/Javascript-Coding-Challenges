import React from "react";
import Button from "./button";
import Logout from "./logout";
import Profile from "./profile";

const App = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Button />
      <Logout />
      <Profile />
    </div>
  );
};

export default App;
