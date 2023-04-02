import React, { useState } from "react";
import "bulma/css/bulma.css";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input name="search" value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
