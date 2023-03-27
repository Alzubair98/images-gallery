import React from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div>
      <div>Persoal Digita Assistats</div>
      <ProfileCard title="Alexa" handle="@Alexa" />
      <ProfileCard title="Cortana" handle="@Cortana" />
      <ProfileCard title="Siri" handle="@Siri" />
    </div>
  );
};

export default App;
