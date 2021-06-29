import React from "react";

import "./Mainotherinfo.css";
import Todayrainfall from "./Todayrainfall";

export default function Mainotherinfo(props) {
  return (
    <div className="Mainotherinfo">
      <ul className="weatherinfo">
        <li className="todaystats">
          <i className="fas fa-temperature-high"></i> Humidity :
          <span className="humidityvalue" id="currenthumidity">
            {" "}
            {props.humidity}%{" "}
          </span>
        </li>
        <Todayrainfall coord={props.coord} />
      </ul>
    </div>
  );
}
