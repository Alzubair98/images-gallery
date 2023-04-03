import React from "react";
import SearchBar from "./Searchbar";
import ImageList from "./ImageList";

const Main = ({ onSubmit, images }) => {
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageList images={images} />
    </>
  );
};

export default Main;
