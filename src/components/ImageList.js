import React from "react";
import "bulma/css/bulma.css";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image) => {
        return (
          <div key={image.id}>
            <ImageShow image={image} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
