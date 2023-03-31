import React, { useState } from "react";
import "bulma/css/bulma.css";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  return (
    <div className="pl-2 pt-2">
      <button onClick={handleClick} className="button">
        {" "}
        Add Animal
      </button>
      {animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
      })}
    </div>
  );
};

export default App;
