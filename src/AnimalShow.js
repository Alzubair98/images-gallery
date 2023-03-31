import React, { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import "./animalShow.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <div onClick={handleClick}>
        <img alt="animal" src={svgMap[type]} style={{ position: "absolute" }} />
        <img
          alt="heart"
          src={heart}
          style={{
            width: 10 + 10 * clicks + "px",
            zIndex: "1000",
            position: "relative",
          }}
        />
      </div>
    </>
  );
};

export default AnimalShow;
