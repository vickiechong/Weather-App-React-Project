import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Todayrainfall(props) {
  const [loaded, setLoaded] = useState(false);
  const [rainfallprob, setRainfallprob] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function displayrainfall(response) {
    // console.log(response.data.daily);
    setRainfallprob(response.data.daily[0].pop * 100);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <li className="todaystats">
          <i className="fas fa-tint"></i> Rainfall % :
          <span className="rainfallvalue" id="currentrainfall">
            {rainfallprob}%
          </span>
        </li>
      </div>
    );
  } else {
    let apikey = `404ebbfe1292f8e13a6dd9e110c25a01`;
    let units = `metric`;
    let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apikey}&units=${units}`;

    axios.get(apiurl).then(displayrainfall);

    return null;
  }
}
