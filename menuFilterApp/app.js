import React from "react";
import Filters from "./filters";

const App = () => {
  return (
    <div className="page-container">
      <h1 className="page-header">Our Menu</h1>
      <div className="bottom-line"></div>
      <Filters />
    </div>
  );
};

export default App;

