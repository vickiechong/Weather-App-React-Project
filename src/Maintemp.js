import React, { useState } from "react";
import axios from "axios";

import FormatDate from "./FormatDate";
import Weathericon from "./Weathericon";
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
      currenttemp: response.data.main.temp,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
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

  function searchgeolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showposition);
  }

  function showposition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apikey = `404ebbfe1292f8e13a6dd9e110c25a01`;
    let units = `metric`;
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`;
    axios.get(apiurl).then(showtemp);
  }

  if (weatherData.ready) {
    return (
      <div className="Maintemp">
        <div className="row justify-content-center Searchtoprow">
          <div className=" text-end"></div>
          <div className="col-7 searchengine">
            <form
              onSubmit={searchcitysubmit}
              className="d-flex"
              id="searchcountrybar"
            >
              <input
                type="text"
                className="form-control"
                id="searchcountryinput"
                placeholder="Enter a City"
                required
                autoFocus="on"
                autoComplete="off"
                onChange={searchcityinputchange}
              />
              <button
                className="btn btn-primary ms-3 "
                id="searchcountrybutton"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="col-1 text-start locationbutton ">
            <span>
              <button
                className="btn btn-primary "
                type="submit"
                onClick={searchgeolocation}
                id="geolocationbutton"
              >
                <i className="fas fa-map-marked-alt"></i>
              </button>
            </span>
          </div>
        </div>

        <div className="todayblock">
          <h1 className="countrydisplay" id="displaysearchcountry">
            {weatherData.city}
          </h1>
          <h2 className="todaydatemain">
            <FormatDate />
          </h2>
          <h3 className="mb-0 todaytempmain">
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <Weathericon
                  icon={weatherData.icon}
                  description={weatherData.description}
                  width={150}
                />
              </div>
              <div className="col-8 ">
                <TempandUnits
                  celsiustempcurrent={weatherData.currenttemp}
                  unit={props.unit}
                  setUnit={props.setUnit}
                />
              </div>
            </div>
          </h3>
        </div>
        <Mainotherinfo
          humidity={weatherData.humidity}
          coord={weatherData.coord}
        />
        <hr />
        <Forecastsection coord={weatherData.coord} unit={props.unit} />
        <hr />
      </div>
    );
  } else {
    searchcity();

    return "Loading temperature..";
  }
}
