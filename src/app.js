import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./alexa.png";
import CortanaImage from "./cortana.png";
import Siri from "./siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Persoal Digita Assistats</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@Alexa"
                image={AlexaImage}
                description="alexa was created by amazon"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana"
                image={CortanaImage}
                description="Cortana was created by microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri"
                image={Siri}
                description="Siri was created by apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
