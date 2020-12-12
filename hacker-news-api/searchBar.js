import React from "react";

const SearchBar = (props) => {
  const { query, setQuery, setPage } = props;

  return (
    <>
      <h1 className="mt-5 search-bar-header">Search Hacker News</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ marginTop: "-20px", marginBottom: "20px" }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search Topic"
          className="search-bar"
        />
        <div className="search-bar-underline"></div>
      </form>
    </>
  );
};

export default SearchBar;
