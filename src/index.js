import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div>
      <textarea autoFocus={true} spellCheck={true} /> <br />
      <input type="number" min={5} style={{ color: "blue" }} />
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
