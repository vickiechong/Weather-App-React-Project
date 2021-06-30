import React, { useState } from "react";
import "./WeatherApp.css";

import Maintemp from "./Maintemp";
import Favesection from "./Favesection";

export default function WeatherApp() {
  const [unit, setUnit] = useState("setcelsius");

  return (
    <div className="WeatherApp">
      <div className="container">
        <Maintemp defaultcity="Seoul" unit={unit} setUnit={setUnit} />
        <Favesection unit={unit} />
      </div>
    </div>
  );
}
