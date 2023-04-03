import React, { useState } from "react";
import "bulma/css/bulma.css";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
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
