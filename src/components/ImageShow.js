import React from "react";
import "bulma/css/bulma.css";
import "./ImageShow.css";

const ImageShow = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />
      <button className="glow-on-hover">DETAILS</button>
    </div>
  );
};

export default ImageShow;
