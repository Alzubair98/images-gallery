import React from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./alexa.png";
import CortanaImage from "./cortana.png";
import Siri from "./siri.png";

const App = () => {
  return (
    <div>
      <div>Persoal Digita Assistats</div>
      <ProfileCard title="Alexa" handle="@Alexa" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@Cortana" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@Siri" image={Siri} />
    </div>
  );
};

export default App;
