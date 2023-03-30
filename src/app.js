import React from "react";
import "bulma/css/bulma.css";

const App = () => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <button className="button"> Add Animal</button>
      <p>Animal to show</p>
    </div>
  );
};

export default App;
