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
      <button onClick={handleClick}> Add Animal</button>
      <div className="animal-list">
        {animals.map((animal, index) => {
          return <AnimalShow type={animal} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
