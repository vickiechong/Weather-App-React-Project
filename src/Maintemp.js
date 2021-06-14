import React, { useState } from "react";
import axios from "axios";

import Favebutton from "./Favebutton";
import Locationbutton from "./Locationbutton";
import FormatDate from "./FormatDate";
import TempandUnits from "./TempandUnits";
import Mainotherinfo from "./Mainotherinfo";
import Forecastsection from "./Forecastsection";

import "./Maintemp.css";

export default function Maintemp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function showtemp(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      coord: response.data.coord,
      currenttemp: Math.round(response.data.main.temp),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      rainfall: "30",
    });
  }

  function searchcity() {
    let apikey = `404ebbfe1292f8e13a6dd9e110c25a01`;
    let apiendpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    let units = `metric`;
    let apiurl = `${apiendpoint}q=${city}&appid=${apikey}&units=${units}`;

    axios.get(apiurl).then(showtemp);
  }

  function searchcitysubmit(event) {
    event.preventDefault();
    searchcity();
  }

  function searchcityinputchange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Maintemp">
        <div className="Searchtoprow">
          <div className="row justify-content-center searchrow">
            <Favebutton />
            <div className="searchengine col-6">
              <form
                onSubmit={searchcitysubmit}
                className="d-flex"
                id="searchcountrybar"
              >
                <input
                  type="text"
                  className="form-control"
                  id="searchcountryinput"
                  placeholder="Country or City"
                  required
                  autoFocus="on"
                  autoComplete="off"
                  onChange={searchcityinputchange}
                />
                <button
                  className="btn btn-primary ms-3"
                  id="searchcountrybutton"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <Locationbutton />
          </div>
        </div>
        <br />
        <br />
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
              <div className="col">
                <div className="row">
                  <div className="col-4 d-flex align-items-center justify-content-center">
                    <img
                      src={weatherData.icon}
                      alt=""
                      id="todayicon"
                      className="todayicon"
                      width=""
                    />
                  </div>
                  <div className="col-8 ">
                    <TempandUnits
                      celsiustempcurrent={weatherData.currenttemp}
                    />
                  </div>
                </div>
              </div>
            </div>
          </h3>
        </div>
        <Mainotherinfo humidity={weatherData.humidity} />
        <hr />
        <Forecastsection coord={weatherData.coord} />
        <hr />
      </div>
    );
  } else {
    searchcity();

    return "Loading temperature..";
  }
}
