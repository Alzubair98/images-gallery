import React from "react";
import { NavLink } from "react-router-dom";
import useSearchContext from "../hooks/use_search_context";
import "./DetailsPage.css";

const Details = ({ id }) => {
  const { images } = useSearchContext();

  const image = images.filter((item) => item.id === id);

  console.log(image[0]);
  return (
    <div className="container">
      <div className="image-card-1">
        <img src={image[0].urls.small} alt={image.alt_description} />
        <p>description: {image[0].alt_description}</p>
        <p>likes: {image[0].likes}</p>

        <NavLink className="glow-on-hover" id={image.id} to="/">
          back
        </NavLink>
      </div>
    </div>
  );
};

export default Details;
