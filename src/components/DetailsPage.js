import React from "react";
import useSearchContext from "../hooks/use_search_context";

const Details = ({ id }) => {
  const { images } = useSearchContext();

  const image = images.filter((item) => item.id === id);

  console.log(image);
  return <div></div>;
};

export default Details;
