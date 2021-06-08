import "./WeatherApp.css";

import Searchtop from "./Searchtop";
import Maintemp from "./Maintemp";
import Forecastsection from "./Forecastsection";
import Favesection from "./Favesection";

export default function WeatherApp() {
  return (
    <div className="container WeatherApp">
      <Searchtop />
      <br />
      <br />
      <Maintemp />
      <hr />
      <Forecastsection />
      <hr />
      <Favesection />
    </div>
  );
}
