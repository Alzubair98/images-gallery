import React from "react";
import "bulma/css/bulma.css";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => {
        return <ImageShow key={index} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
