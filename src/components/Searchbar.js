import React, { useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

const SearchBar = (props) => {
  const handleClick = () => {
    props.onSubmit("boys");
  };
  return (
    <div>
      <input />
    </div>
  );
};

export default SearchBar;
