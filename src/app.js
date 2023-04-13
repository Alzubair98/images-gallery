import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import "./app.css";
import Details from "./components/DetailsPage";
import Main from "./components/Main";

const App = () => {
  const [id, setId] = useState(0);

  const handleId = (id) => {
    setId(id);
    console.log(id);
  };

  return (
    <div className="pl-2 pt-2 app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main handleId={handleId} />} />
          <Route path="details" element={<Details id={id} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
