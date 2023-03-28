import React from "react";
import "bulma/css/bulma.css";
const ProfileCard = ({ title, handle, image, description }) => {
  //   const { title, handle } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-cotent">
          <p className="title is-4">Title is {title} </p>
          <p className="subtitle is-6">Handle is {handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
