import axios from "axios";
import React, { useState } from "react";

import Mainotherinfo from "./Mainotherinfo";
import FormatDate from "./FormatDate";

import "./Maintemp.css";

export default function Maintemp() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showtemp(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      currenttemp: Math.round(response.data.main.temp),
      city: response.data.name,
      imgurl: "http://openweathermap.org/img/wn/10d@2x.png",
      humidity: response.data.main.humidity,
      rainfall: "30",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Maintemp">
        <div className="todaycountryandtemp">
          <h1 className="countrydisplay" id="displaysearchcountry">
            {weatherData.city}
          </h1>
          <h2 className="todaydatemain">
            <FormatDate />
            <br />
          </h2>
          <h3 className="todaytempmain">
            <div className="row todaytempall">
              <div className="col-1 space"></div>
              <div className="col">
                <div className="row">
                  <div className="col-4 d-flex align-items-center justify-content-center">
                    <img
                      src={weatherData.imgurl}
                      alt=""
                      id="todayicon"
                      className="todayicon"
                      width=""
                    />
                  </div>
                  <div className="col-4 d-flex justify-content-center">
                    <span className="todaytemp" id="currenttemp">
                      {weatherData.currenttemp}
                    </span>
                  </div>
                  <div className="col-4 d-flex">
                    <span className="units">
                      <a
                        href="/#"
                        className="tempformat celsius active"
                        id="linkCelsius"
                      >
                        °C
                      </a>
                      |
                      <a
                        href="/#"
                        className="tempformat fahrenheit"
                        id="linkFahrenheit"
                      >
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <span className="col-1 space"></span>
            </div>
          </h3>
        </div>
        <Mainotherinfo humidity={weatherData.humidity} />
      </div>
    );
  } else {
    let apikey = `404ebbfe1292f8e13a6dd9e110c25a01`;
    let apiendpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    let city = `Seoul`;
    let units = `metric`;
    let apiurl = `${apiendpoint}q=${city}&appid=${apikey}&units=${units}`;

    axios.get(apiurl).then(showtemp);

    return "Loading temperature..";
  }
}
