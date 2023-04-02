import React from "react";
import "bulma/css/bulma.css";

const ImageShow = ({ image }) => {
  return (
    <div>
      <h1>{image.id}</h1>
    </div>
  );
};

export default ImageShow;
