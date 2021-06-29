import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="WeatherAppWrapper">
      <WeatherApp />
      <p className="opensourcestatement">
        <a
          href="https://github.com/vickiechong/Weather-App-React-Project"
          target="_blank"
          rel="noreferrer"
          className="creditsgithub"
        >
          Open-sourced on Github
        </a>
        , hosted on{" "}
        <a
          href="https://tender-fermat-fa1b3b.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="creditsgithub"
        >
          Netify
        </a>{" "}
        and coded by
        <span className="codercredits"> Vickie Chong </span>
      </p>
      <p className="iconstatement">
        Icons by{" "}
        <a
          href="https://github.com/basmilius/weather-icons"
          target="_blank"
          rel="noreferrer"
          className="creditsgithub"
        >
          Basmilius
        </a>
      </p>
    </div>
  );
}

export default App;
