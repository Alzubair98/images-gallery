import React from "react";
import SearchBar from "./Searchbar";
import ImageList from "./ImageList";

const Main = ({ handleId }) => {
  return (
    <>
      <SearchBar />
      <ImageList handleId={handleId} />
    </>
  );
};

export default Main;
