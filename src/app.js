import React, { useState } from "react";
import "bulma/css/bulma.css";
import AnimalShow from "./AnimalShow";
import "./app.css";

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
    <div className="pl-2 pt-2 app">
      <button onClick={handleClick} className="button">
        {" "}
        Add Animal
      </button>
      {animals.map((animal, index) => {
        return (
          <div className="animal-list">
            <AnimalShow type={animal} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
