import React from "react";

const ProfileCard = ({ title, handle, image }) => {
  //   const { title, handle } = props;

  return (
    <>
      <img src={image} alt="images" />
      <div>Title is {title} </div>
      <div>Hadle is {handle}</div>
    </>
  );
};

export default ProfileCard;
