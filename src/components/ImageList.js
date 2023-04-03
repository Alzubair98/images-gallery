import React from "react";
import "bulma/css/bulma.css";
import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
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
