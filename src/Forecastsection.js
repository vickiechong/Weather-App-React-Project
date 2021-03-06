import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Forecastsection.css";
import Weathericon from "./Weathericon";

export default function Forecastsection(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastDay, setforecastDay] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function displayforecast(response) {
    // console.log(response.data.daily);
    setforecastDay(response.data.daily);
    setLoaded(true);
  }

  function formatday(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = date.getDay();

    return days[day];
  }

  function forecasttempmax(max) {
    let temperatureCelsius = Math.round(max);
    let temperatureFahrenheit = Math.round((max * 9) / 5 + 32);

    if (props.unit === "setcelsius") {
      return `${temperatureCelsius}`;
    } else {
      return `${temperatureFahrenheit}`;
    }
  }

  function forecasttempmin(min) {
    let temperatureCelsius = Math.round(min);
    let temperatureFahrenheit = Math.round((min * 9) / 5 + 32);

    if (props.unit === "setcelsius") {
      return `${temperatureCelsius}`;
    } else {
      return `${temperatureFahrenheit}`;
    }
  }

  if (loaded) {
    return (
      <div className="Forecastsection">
        {forecastDay.map((forecastdata, index) => {
          if (index > 0 && index < 6) {
            return (
              <div
                className="row align-items-center text-center mt-2 futuredays"
                key={index}
              >
                <div className="col">
                  <Weathericon icon={forecastdata.weather[0].icon} width={35} />
                </div>
                <div className="col">{formatday(forecastdata.dt)}</div>
                <div className="col tempmax">
                  <span id="forecasttempmax">
                    {forecasttempmax(forecastdata.temp.max)}
                  </span>
                  °
                </div>
                <div className="col tempmin">
                  <span id="forecasttempmin">
                    {forecasttempmin(forecastdata.temp.min)}
                  </span>
                  °
                </div>
                <div className="col text-start me-4 futurestats">
                  <div className="d-flex flex-row humidity">
                    <i className="p-0 fas fa-temperature-high humidityicon"></i>
                    <span className="p-0 humidityvalue">
                      {" "}
                      {Math.round(forecastdata.humidity)}%{" "}
                    </span>
                  </div>
                  <div className="d-flex flex-row rainfall">
                    <i className="p-0 fas fa-tint"></i>
                    <span className="p-0 rainfallvalue">
                      {" "}
                      {Math.round(forecastdata.pop * 100)}%{" "}
                    </span>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apikey = `404ebbfe1292f8e13a6dd9e110c25a01`;
    let units = `metric`;
    let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apikey}&units=${units}`;

    axios.get(apiurl).then(displayforecast);

    return null;
  }
}
