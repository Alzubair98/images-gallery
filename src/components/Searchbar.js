import React, { useState, useContext } from "react";
import "bulma/css/bulma.css";
import "./SearchBar.css";
import useSearchContext from "../hooks/use_search_context";
import searchContext from "../context/search";

const SearchBar = ({ onSubmit }) => {
  const { searchImages } = useSearchContext();

  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchImages(term);
    setTerm("");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search for some Images</label>
        <input
          className="search-bar"
          name="search"
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
