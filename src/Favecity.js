import React, { useState } from "react";
import axios from "axios";

import Weathericon from "./Weathericon";

export default function Favecity(props) {
  const [loaded, setLoaded] = useState(false);
  const [favedata, setFavedata] = useState(null);

  function displayfavetemp(response) {
    // console.log(response.data);
    setFavedata(response.data);
    setLoaded(true);
  }

  function temperature() {
    let temperatureCelsius = Math.round(favedata.main.temp);
    let temperatureFahrenheit = Math.round((favedata.main.temp * 9) / 5 + 32);

    if (props.unit === "setcelsius") {
      return `${temperatureCelsius}`;
    } else {
      return `${temperatureFahrenheit}`;
    }
  }

  if (loaded) {
    return (
      <div className="col-3 text-center">
        <p className="favecity" id="favecity">
          {favedata.name}
        </p>
        <div className=" d-flex align-items-center justify-content-center">
          <Weathericon icon={favedata.weather[0].icon} width={35} />
          <span className="favetemp" id="favecitytemp">
            {temperature()}
          </span>
          °
        </div>
      </div>
    );
  } else {
    let apikey = `404ebbfe1292f8e13a6dd9e110c25a01`;
    let apiendpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    let favecity = props.city;
    let units = `metric`;
    let apiurl = `${apiendpoint}q=${favecity}&appid=${apikey}&units=${units}`;

    axios.get(apiurl).then(displayfavetemp);

    return null;
  }
}
