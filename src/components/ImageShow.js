import React from "react";
import "bulma/css/bulma.css";

const ImageShow = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageShow;
