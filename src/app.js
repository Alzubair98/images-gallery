import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./alexa.png";
import CortanaImage from "./cortana.png";
import Siri from "./siri.png";

const App = () => {
  return (
    <div>
      <div>Persoal Digita Assistats</div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@Alexa" image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana"
                image={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@Siri" image={Siri} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
