import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }
  return <h1>{message}</h1>;
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
