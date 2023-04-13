import React from "react";
import SearchBar from "./Searchbar";
import ImageList from "./ImageList";

const Main = ({ onSubmit }) => {
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageList />
    </>
  );
};

export default Main;
