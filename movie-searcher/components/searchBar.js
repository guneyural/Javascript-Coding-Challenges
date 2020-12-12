import React from "react";

const SearchBar = (props) => {
  const { query, setQuery } = props;

  return (
    <div className="container">
      <h1 className="mt-4 search-bar-header">Search Movies</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-bar"
          placeholder="Search Movie..."
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default SearchBar;
