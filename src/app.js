import React, { useState } from "react";
import "bulma/css/bulma.css";
import SearchBar from "./components/Searchbar";
import ImageList from "./components/ImageList";

import "./app.css";

const App = () => {
  const handleSubmit = (term) => {
    console.log("do a search with", term);
  };
  return (
    <div className="pl-2 pt-2 app">
      <h1>hello</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
};

export default App;
