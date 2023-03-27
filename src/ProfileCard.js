import React from "react";

const ProfileCard = (props) => {
  const { title, handle } = props;

  return (
    <>
      <div>Title is {title} </div>
      <div>Hadle is {handle}</div>
    </>
  );
};

export default ProfileCard;
