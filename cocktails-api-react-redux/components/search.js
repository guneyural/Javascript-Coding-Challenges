import React, { useState } from "react";
import { searchCocktail } from "../redux/actions/cocktailActions";
import { useDispatch } from "react-redux";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchCocktail(searchQuery));
  };

  return (
    <form className="search-form">
      <label className="search-input-label" htmlFor="search-input">
        Search Your Favorite Cocktail
      </label>
      <input
        type="text"
        name="searchQuery"
        className="search-input"
        id="search-input"
        value={searchQuery}
        placeholder="Search"
        autocomplete="off"
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
