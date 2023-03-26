import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  const minValue = 5;
  return <input type="number" min={minValue} />;
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
