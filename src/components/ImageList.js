import React from "react";
import "bulma/css/bulma.css";
import ImageShow from "./ImageShow";
import "./ImageList.css";
import useSearchContext from "../hooks/use_search_context";

const ImageList = ({ handleId }) => {
  const { images } = useSearchContext();
  return (
    <div className="image-list">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <ImageShow image={image} handleId={handleId} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
