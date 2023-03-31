import React, { useState } from "react";
import "bulma/css/bulma.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick} className="button mt-4 ml-2">
        {" "}
        Add Animal
      </button>
      <p className="ml-2">Animal to show</p>
    </div>
  );
};

export default App;
