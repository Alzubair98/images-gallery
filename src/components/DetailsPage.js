import React from "react";
import { NavLink } from "react-router-dom";
import useSearchContext from "../hooks/use_search_context";

const Details = ({ id }) => {
  const { images } = useSearchContext();

  const image = images.filter((item) => item.id === id);

  console.log(image[0]);
  return (
    <div className="image-card">
      <img src={image[0].urls.small} alt={image.alt_description} />
      <h1>description: {image[0].alt_description}</h1>

      <NavLink className="glow-on-hover" id={image.id} to="/">
        back
      </NavLink>
    </div>
  );
};

export default Details;
