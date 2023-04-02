import React, { useState } from "react";
import "bulma/css/bulma.css";
import SearchBar from "./components/Searchbar";
import ImageList from "./components/ImageList";

import "./app.css";
import searchImages from "./api";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="pl-2 pt-2 app">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
