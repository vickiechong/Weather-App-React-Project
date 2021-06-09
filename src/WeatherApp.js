import React from "react";
import "./WeatherApp.css";

import Searchtop from "./Searchtop";
import Maintemp from "./Maintemp";
import Forecastsection from "./Forecastsection";
import Favesection from "./Favesection";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <Searchtop />
        <br />
        <br />
        <Maintemp />
        <hr />
        <Forecastsection />
        <hr />
        <Favesection />
      </div>
    </div>
  );
}
