import React from "react";
import "./WeatherApp.css";

import Maintemp from "./Maintemp";

import Favesection from "./Favesection";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <Maintemp defaultcity="Seoul" />

        <Favesection />
      </div>
    </div>
  );
}
