import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import "./app.css";
import searchImages from "./api";
import Details from "./components/DetailsPage";
import Main from "./components/Main";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="pl-2 pt-2 app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main onSubmit={handleSubmit} />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
