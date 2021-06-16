import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Forecastsection.css";
import Forecasticon from "./Forecasticon";

export default function Forecastsection(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastDay, setforecastDay] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function displayforecast(response) {
    console.log(response.data.daily);
    setforecastDay(response.data.daily);
    setLoaded(true);
  }

  function formatday(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = date.getDay();

    return days[day];
  }

  if (loaded) {
    return (
      <div className="Forecast section">
        {forecastDay.map((forecastdata, index) => {
          if (index > 0 && index < 6) {
            return (
              <div
                className="row align-items-center text-center mt-3 futuredays T+1"
                key={index}
              >
                <Forecasticon icon={forecastdata.weather[0].icon} />
                <div className="col futuredate">
                  {formatday(forecastdata.dt)}
                </div>
                <div className="col tempmax">
                  <span id="forecasttempmax">
                    {Math.round(forecastdata.temp.max)}
                  </span>
                  °
                </div>
                <div className="col tempmin">
                  <span id="forecasttempmin">
                    {Math.round(forecastdata.temp.min)}
                  </span>
                  °
                </div>
                <div className="col text-start me-4 futurestats">
                  <div className="d-flex flex-row T+1 humidity">
                    <i className="p-0 fas fa-temperature-high humidityicon"></i>
                    <span className="p-0 humidityvalue">
                      {" "}
                      {Math.round(forecastdata.humidity)}%{" "}
                    </span>
                  </div>
                  <div className="d-flex flex-row T+1 rainfall">
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
