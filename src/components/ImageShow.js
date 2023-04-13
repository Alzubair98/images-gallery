import React from "react";
import { NavLink } from "react-router-dom";
import "bulma/css/bulma.css";
import "./ImageShow.css";

const ImageShow = ({ image, handleId }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />

      <NavLink
        className="glow-on-hover"
        id={image.id}
        onClick={(e) => {
          handleId(e.target.id);
        }}
        to="details"
      >
        DETAILS
      </NavLink>
    </div>
  );
};

export default ImageShow;
