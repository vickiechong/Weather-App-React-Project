import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="WeatherAppWrapper">
      <WeatherApp />
      <div className="creditsstatement">
        <p className="coderrow">
          Coded by<span className="codercredits"> Vickie Chong </span>
        </p>
        <p>
          Open-sourced on{" "}
          <a
            href="https://github.com/vickiechong/Weather-App-React-Project"
            target="_blank"
            rel="noreferrer"
            className="creditsgithub"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://tender-fermat-fa1b3b.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="creditsgithub"
          >
            Netify.{" "}
          </a>
          <span>
            Icons by{" "}
            <a
              href="https://github.com/basmilius/weather-icons"
              target="_blank"
              rel="noreferrer"
              className="creditsgithub"
            >
              Basmilius.
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
