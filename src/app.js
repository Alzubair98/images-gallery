import React, { useState } from "react";
import "bulma/css/bulma.css";
import SearchBar from "./components/Searchbar";

import "./app.css";

const App = () => {
  return (
    <div className="pl-2 pt-2 app">
      <h1>hello</h1>
      <SearchBar />
    </div>
  );
};

export default App;
