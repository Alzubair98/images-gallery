import React, { useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
    console.log("yes");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
    console.log(term);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
