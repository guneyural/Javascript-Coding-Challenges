import React from "react";
import SearchForm from "../components/search";
import Cocktails from "../components/cocktailSection";

const HomePage = () => {
  return (
    <div className="container">
      <SearchForm />
      <Cocktails />
    </div>
  );
};

export default HomePage;
