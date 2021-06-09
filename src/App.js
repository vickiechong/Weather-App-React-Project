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
          id="webpageaddress"
        >
          Open-source on Github
        </a>
        , hosted on Netify and coded by Vickie Chong
      </p>
    </div>
  );
}

export default App;
